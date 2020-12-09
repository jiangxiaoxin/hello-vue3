vuex 没啥太大的变化，该怎么用还是怎么用。多了个`useStore`方法，可以配合 vue 的`setup`使用，可以将获取数据（`computed`）和发出事件（`dispatch action`、`commit mutation`）提前注册好，不用之前的`options`的写法
