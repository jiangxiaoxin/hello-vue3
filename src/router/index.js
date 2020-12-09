import { createRouter, createWebHashHistory } from "vue-router"

import Home from "@/pages/Home";
import About from "@/pages/About";
import User from "@/pages/User";
import Article from "@/pages/Article";
import Info from "@/pages/Info";
import Group from "@/pages/Group"

const staticRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    // 该路由的参数是 id 和 age ，在进页面时必须同时有这俩参数才能正确匹配到这个路由
    path: "/user/:id/:age",
    name: "User",
    component: User
  },
  {
    // 跟 /user/:id/:age 是一样的。单传一个参数是匹配不到路由的
    path: "/article/:id(.*)/:year(.*)",
    name: "Article",
    component: Article
  },
  {
    // 匹配 /info/1 /info/1/2 /info/1/2/3 ... ，但不匹配 /info，所有的参数在 params.pa 这个数组里
    // 如果是 /info/:pa* ，那就会匹配到 /info
    path: "/info/:pa+",
    name: "Info",
    component: Info
  },
  {
    // ? 表示参数是可选的. 可以匹配 /group /group/1 这样的路由，但是不会匹配到多参数的路由，比如 /group/1/2
    path: "/group/:id?",
    name: "Group",
    component: Group
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
});