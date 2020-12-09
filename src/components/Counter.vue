<template>
  <div class="counter">
    <h1>counter: {{ msg }}</h1>
    <p>count value: {{ count }}</p>
    <p>clicked: {{ log.clicked }}</p>
    <p>copy: {{ copy.clicked }}</p>
    <p>plusOne: {{ plusOne }}</p>
    <p>minus count: {{ anotherCount }}</p>
    <div>
      <button @click="plus">+10</button>
      <button @click="minus">-1</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, readonly, computed, watchEffect, watch } from 'vue'
export default {
  name: 'Counter',
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  setup() {
    console.log('counter setup：');
    const count = ref(0);
    const anotherCount = ref(0);
    const log = reactive({
      clicked: 0
    });
    watchEffect(() => {
      console.log('watch effect:\n');
      // console.log('count:', count.value);
      // console.log('minus count:', anotherCount.value);
    })

    watch(() => log.clicked, (newValue, oldValue) => {
      console.log(`watch 1: new: ${newValue}  old: ${oldValue}`);
    })

    watch(log, () => {
      console.log('watch 2 也监听到了');
    })
    
    const plusOne = computed(() => {
      return count.value + 1;
    });
    const copy = readonly(log);// 只使用响应式数据，但却不希望误操作修改数据。
    return {
      count,
      log,
      copy,
      plusOne,
      anotherCount
    }
  },
  beforeCreate() {
    console.log('counter before create');
  },
  created() {
    console.log('counter created');
  },
  methods: {
    plus() {
      this.count += 10;
      this.log.clicked += 1;
    },
    minus() {
      this.anotherCount -= 1;
    }
  }
}
</script>

<style>
.counter {
  border: 1px solid lightblue;
  padding: 20px;
}
</style>