### ref

ref 可以将 Number，String 这种基础类型的数据，直接转成响应式的数据。

原来给组件和元素绑的 ref 也变了。

### toRefs

在创建了响应式数据之后，有很多地方会想写成下面的解构形式，添加其他的功能, 但是解构之后原来的响应式数据将不再是相应式的了。

```
const { user } = props;
watch(user, () => {
  // code here
})
```

为了使解构后的数据依然是响应式的，要将解构的对象用 toRefs 包装一下。

```
const { user } = toRefs(props);
```

### reactive

reactive 将对象变成响应式对象

### readonly

readonly 对响应式数据进行只读包装，可以响应式的使用数据，但不能修改数据

### setup

setup 里可以返回响应式的数据，可以添加 computed 计算属性，可以绑定方法。

setup 是调用最早的钩子函数，比 beforeCreate 还早，在这个方法里是没有 this 的，只能通过参数访问下 props。

setup 最后返回的“对象”在后面的各处都是可以使用的，可以是变量，方法。所以可以在这里创建响应式数据对象，绑定回调，创建方法。

在 setup 里可以注册生命周期函数的回调，onMounted, onUpdated,这是新的 api，也可以按照原来 options 写法那样去写。

> setup 的好处是可以将一块功能相关的数据和逻辑写在一个地方，而不像 options api 时那样，要分在各处，导致查看逻辑时不容易看。

如果将所有的逻辑和功能都写到 setup 里，那样一堆代码在一起其实也就跟 options api 一样不好维护。 可以将每段独立的功能写成独立的文件，然后在 setup 里引入，导出必须导出的，这样就会让 setup 的功能变得清晰。

### watchEffect

watchEffect 会立即执行传入的方法，并在它依赖的数据发生变化时重新执行。在 setup 或者其他生命周期钩子里设置的 watchEffect 会在组件 unmounted 时自动停止，在其他地方添加的就要手动调用构建 watchEffect 时返回的方法停掉。

watchEffect 的方法里用到的数据就是它搜集依赖的数据，里面用到啥，就会把它当作依赖，数据发生变化后就会重新调用 watchEffect。如果 watchEffect 里没用到啥数据，那之后就不会再被调用了。

### watch

原来的 watch 属性下添加很多的侦听器，现在可以用单独的 watch api 来做。可以写在 setup 里。 watch api 的参数形式要注意。

### ref

原来通过 ref 访问实际 dom 元素，现在有点变化。

### globalProperties

全局属性配置对象，可以通过这里添加新的属性，方法，在所有的组件里都可以用，就相当于在 `Vue.prototype` 上添加。

```
Vue.prototype.$someFn = () => {}
```

```
const app = createApp(App);
app.config.globalProperties.$someFn = () => {}
```

### v-model

### slots

v-slot 将显示内容绑定到特定的命名 slot 上。

### provide 和 inject

从父组件往子组件传递参数一般通过 props , 但如果想传递的路径过深，通过 props 就只能一级一级的传递下去，对应这种情况，就是在父组件里提供 provide， 在子组件里使用 inject 获取这部分数据即可。也可以通过 vuex 的 store 来传递，但这更像是访问一个数据，而不是传递一个数据。

provide/inject 的数据默认不是响应式的，通过 ref 和 reactive 将其变成可响应式的。

### Suspense ？

### defineAsyncComponent 

异步组件，跟异步路由不是一回事。

### teleport 

有啥使用的场景？
