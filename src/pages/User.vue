<template>
  <div>
    <h1>user</h1>
    <p>id: {{ id }}</p>
    <p>age: {{ $route.params.age }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute, /*useRouter*/ } from "vue-router"
export default {
  setup() {
    // 监听路由的参数变化，并及时刷新
    // 在 page mounted 之后，从浏览器的地址栏里改参数回车后，updated 会触发，此时要重新获取新的数据，这样在 setup 时就写好这部分的逻辑
    const route = useRoute();
    const id = ref(route.params.id || 1000);
    watch(() => route.params, () => {
      id.value = route.params.id
    })
    return {
      id
    }
  },
  updated() {
    console.log('--1---1', this.$route.params);
  }
}
</script>

<style>

</style>