import App from './popup.vue'
import { createApp } from 'vue'
import '@/style.css'
let create = (tag, cb)=>{
    let el = document.createElement(tag)
    cb(el)
    document.body.appendChild(el)
}
create('div', (el)=>el.id = 'app')
createApp(App).mount('#app')