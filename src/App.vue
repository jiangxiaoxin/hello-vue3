<template>
  <router-view></router-view>
  <Counter msg="从父组件往子组件传个数据" />
  <HelloWorld :msg="count" />
  <div>rootCount: {{rootCount}}</div>
  <div>
    <p>store.commit</p>
    <button @click="incrementHandler">+10</button>
    <button @click="decrementHandler">-1</button>
  </div>
  <div>
    <p>store.dispatch</p>
    <button @click="incrementDispatch">increment</button>
    <button @click="multiIncrementDispatch">multi increment</button>
  </div>
  <div>
    <p>moduleA</p>
    <p>count: {{ anotherCount }}</p>
    <button @click="incrementModuleA">+1</button>
    <button @click="insertTime">insert time</button>
    <ul>
      <li v-for="(time, index) in logTimes" :key="index">
        {{index}}: {{ time.toLocaleString() }}
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { mapState, mapGetters } from "vuex";
import { useStore } from 'vuex'
import { computed, onMounted, onUpdated } from "vue"
import Counter from './components/Counter.vue';

export default {
  name: "App",
  components: {
    HelloWorld,
    Counter
  },
  data() {
    return {};
  },
  setup() {
    // console.log('setup this:', this);
    const store = useStore();
    // console.log('store in setup\n', store);

    onMounted(() => {
      console.log('--App mounted');
    });
    onUpdated(() => {
      console.log('** App updated');
    });
    return {
      count: computed(() => store.count),
      incrementHandler: () => store.commit("increment", { value: 10 }),
    }
  },
  mounted() {
    // console.log('store in mounted\n', this.$store);
    // console.log(this.$store.hasModule('moduleA'), this.$store.hasModule('moduleB'));
  },
  methods: {
    // incrementHandler() {
    //   this.$store.commit("increment", { value: 10 });
    // },
    decrementHandler() {
      this.$store.commit("decrement", { value: 1 });
    },
    incrementDispatch() {
      this.$store.dispatch("incrementByValue", { value: 2 });
    },
    multiIncrementDispatch() {
      for (let i = 0; i < 10; i++) {
        this.$store.dispatch("incrementByValue", { value: 3 });
      }
    },
    incrementModuleA() {
      this.$store.dispatch('moduleA/increment', { value: 1});
    },
    insertTime() {
      this.$store.commit('moduleA/insertTime', { time: new Date()})
    }
  },
  computed: {
    ...mapState({
      // count: (state) => state.count,
      anotherCount: (state) => state.moduleA.count,
    }),
    ...mapGetters([
      'rootCount'
    ]),
    ...mapGetters('moduleA',[
      'logTimes'
    ]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
