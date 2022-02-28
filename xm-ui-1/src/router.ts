import {createWebHashHistory,createRouter} from "vue-router"
import Home  from "./views/Home.vue"
import Doc  from "./views/Doc.vue"
import Switch from './components/Switchdemo.vue'
import Docdemo from './components/Docdemo.vue'
import Button from './components/Buttondemo.vue'
import Tabs from './components/Tabsdemo.vue'
import Dialog from './components/Dialogdemo.vue'
import Intro from './views/Intro.vue'
import Getstarted from './views/Getstarted.vue'
import Install from './views/Install.vue'
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
                    component:Docdemo
                },
                {
                    path:'intro',
                    component:Intro
                },
                {
                    path:'get-started',
                    component:Getstarted
                },
                {
                    path:'install',
                    component:Install
                },
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
 