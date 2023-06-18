import { createRouter,createWebHistory } from 'vue-router'
import Page from '../components/Page.vue'


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'MainPage',
            component: () => Page,
            props:true
          },
          
        
       

    ]

})

export default router;