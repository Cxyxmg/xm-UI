//@ts-nocheck
import {createWebHashHistory,createRouter} from "vue-router"
import Home  from "./views/Home.vue"
import Doc  from "./views/Doc.vue"
import Switch from './components/Switchdemo.vue'
import Button from './components/Buttondemo.vue'
import Tabs from './components/Tabsdemo.vue'
import Dialog from './components/Dialogdemo.vue'
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md'
import instal from './markdown/instal.md'
import getStarted from './markdown/getstarted.md'
import { h } from "vue"
const md = string => h( Markdown , { content:string, key: String })
const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/doc',
            component:Doc,
            children:[
                {
                    path:'',
                    redirect:'/doc/intro'
                },
                { path: "intro", component: md(intro) },
                { path: "get-started", component: md(getStarted) },
                { path: "install", component: md(instal) },
                {
                    path:'switch',
                    component:Switch
                },
                {
                    path:'button',
                    component:Button
                },
                {
                    path:'dialog',
                    component:Dialog
                },
                {
                    path:'tabs',
                    component:Tabs
                }
            ]
        }
    ]

})
 