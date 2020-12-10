<template>
  <div>
    <h1>list</h1>
    <slot name="header" v-bind:title="title"></slot>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <slot v-bind:item="item"></slot>
      </li>
    </ul>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ""
    }
  }
}
</script>

<style>

</style>