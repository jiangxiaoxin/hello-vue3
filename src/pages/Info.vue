<template>
  <div>
    <h1>info</h1>
      <div v-for="(item, index) in $route.params.pa" :key="index">{{ item }}</div>
  </div>
</template>

<script>
import { watch } from 'vue';
import { useRoute } from 'vue-router';
export default {
  setup() {
    const route = useRoute();
    watch(() => route.params, () => {
      console.log('--info watch:', route.params);
    }, {immediate: true})
  },
  // mounted() {
  //   console.log('--info:', this.$route.params);
  // }
}
</script>

<style>

</style>