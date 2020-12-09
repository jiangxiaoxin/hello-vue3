vue-router 重写了自己的路由匹配器，不再用原来的 path-to-regex ,使用起来还是变化不小的。

### 监听路由参数的变化并及时响应

### redirect 和 alias

redirect: 访问 /a ,然后被重定向到 /b ,浏览器的地址栏会从/a 变成/b

alias： 访问/a,会按照/b 去渲染，但浏览器地址栏依然是/a，感觉是真的访问了/a 这个页

### props: true

将路由参数通过组件的 props 传递给组件，这样在组件内就可以没有关于 $route 的硬代码，组件就更通用。只针对 $router.params 有效

### named views

一个页面里有几个 router-view ，通过路由配置设定各个部分对应的组件

### useLink ?

### dynamic routing 动态修改路由表

router.addRoute 和 router.removeRoute

动态添加新路由时，懒加载的组件怎么处理的？ Lazy loading routes

> 这里要跟 async components 区分开来。路由对应的都是页面级的组件，这部分组件用 dynamic imports 引入，只在他们路由被访问时去加载对应的组件。 async components 是在页面级组件里使用的组件

```
// danamic imports
const User = () => import('./views/user');
```

对于 nested 的路由，他们是一个整体功能的一部分，可以借助 webpack 将他们合并打包到一个 chunk 下，不用发起那么多次的加载。

```
const User = () => import(/* webpackChunkName: "user" */ './user.vue');
const UserProfile = () => import(/* webpackChunkName: "user" */ './user-profile.vue');
```

### 推荐使用 history 模式？