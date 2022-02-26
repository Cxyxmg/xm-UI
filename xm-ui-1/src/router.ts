import {createWebHashHistory,createRouter} from "vue-router"
import Home  from "./views/Home.vue"
import Doc  from "./views/Doc.vue"
import Switch from './components/Switchdemo.vue'
import Docdemo from './components/Docdemo.vue'
import Button from './components/Buttondemo.vue'
import Tabs from './components/Tabsdemo.vue'
import Dialog from './components/Dialogdemo.vue'
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
                    path:'/doc/switch',
                    component:Switch
                },
                {
                    path:'/doc/button',
                    component:Button
                },
                {
                    path:'/doc/dialog',
                    component:Dialog
                },
                {
                    path:'/doc/tabs',
                    component:Tabs
                }
            ]
        }
    ]

})
 