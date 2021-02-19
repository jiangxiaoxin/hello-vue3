<template>
  <div class="counter">
    <h1>counter: {{ msg }}</h1>
    <div v-if="countGT10">
      count >= 10
    </div>
    <p>count value: {{ count }}</p>
    <p>clicked: {{ log.clicked }}</p>
    <p>copy: {{ copy.clicked }}</p>
    <p>plusOne: {{ plusOne }}</p>
    <p>minus count: {{ anotherCount }}</p>
    <div>
      <button @click="plus">+10</button>
      <button @click="minus10">-10</button>
      <button @click="minus">-1</button>
    </div>
    <div>
      <button @click="customEvent">自定义事件</button>
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
  data() {
    return {
      localMsg: this.msg,
      other: 111
    }
  },
  setup() {
    console.log('counter setup：');
    const count = ref(0);
    const anotherCount = ref(0);
    const log = reactive({
      clicked: 0
    });
    watch(count, (newValue, oldValue) => {
      console.log('--> 监听到count变了', count.value, newValue, oldValue);
    });
    watch(count, (newValue, oldValue) => {
      console.log('--> 这里也监听到count变了', count.value, newValue, oldValue);
    })
    const countGT10 = computed(() => {
      if (count.value >= 10) {
        return true;
      } else {
        return false;
      }
    })
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
      anotherCount, 
      countGT10
    }
  },
  beforeCreate() {
    console.log('$$counter before create', this.msg, this.localMsg, this.other);
  },
  created() {
    console.log('$$counter created', this.msg, this.localMsg, this.other);
  },
  // watch: {
  //   localMsg: function(val1, val2) {
  //     console.log('=== local', val1, val2);
  //   }
  // },
  methods: {
    plus() {
      this.count += 10;
      this.log.clicked += 1;
    },
    minus10() {
      this.count -= 10;
    },
    minus() {
      this.anotherCount -= 1;
    },
    customEvent() {
      this.$emit('custom-event', 'a custom event');
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