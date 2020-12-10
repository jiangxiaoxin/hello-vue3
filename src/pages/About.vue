<template>
  <div>
    <h1>About</h1>
    <el-button type="primary" @click="addLog">add</el-button>
    <MyList :list="list" :title="title">
      <template v-slot:header="headerSlotProps">
        <h2 class="custom-title">{{ headerSlotProps.title }}</h2>
        <button @click="printSlotProps(headerSlotProps)">slot props</button>
      </template>
      <template v-slot:default="defaultSlotProps">
        <span class="list-item">{{ defaultSlotProps.item }}</span>
      </template>
      <template v-slot:footer>
        <h2>my list footer from parent</h2>
      </template>
    </MyList>
  </div>
</template>

<script>
import MyList from "@/components/List";
export default {
  components: {
    MyList
  },
  data() {
    return {
      list: [],
      title: "mylist header from parent"
    }
  },
  methods: {
    addLog() {
      this.list.push(new Date());
    },
    printSlotProps(slotProps) {
      console.log('slot props\n', slotProps);
    }
  }
}
</script>

<style>
.list-item {
  padding: 10px;
  background: lightblue;
  display: inline-block;
}

.custom-title {
  background: lightcoral;
}
</style>