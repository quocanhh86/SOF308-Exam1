import { createRouter, createWebHistory } from "vue-router";
import MainComponent from "./components/MainComponent.vue";
import Pages from "./components/Pages.vue";
import ManagermentComponent from "./components/ManagermentComponent.vue";
const routes = [
    {
        path: '/',
        name: 'TacGia',
        component: ManagermentComponent,
    },
    {
        path: '/page',
        name: 'Page',
        component: Pages,
    },
    {
        path: '/tac-gia/add',
        name: 'Addtacgia',
        component: MainComponent,
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})