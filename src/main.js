import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import VueKinesis from "vue-kinesis";
import Particles from "particles.vue3";

library.add(faGithub, faLinkedin)

const app = createApp(App)

app.use(VueKinesis)
app.use(Particles)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
