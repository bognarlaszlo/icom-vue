import { createRouter, createWebHistory } from 'vue-router'
import ListingView from '../views/ListingView.vue'
import FavouriteView from '../views/FavouriteView.vue'
import DetailsView from '../views/DetailsView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ListingView
        },
        {
            path: '/kedvencek',
            name: 'favourites',
            component: FavouriteView
        },
        {
            path: '/listing/:id',
            name: 'listing',
            component: DetailsView
        }
    ],
    linkActiveClass: 'active-inside',
    linkExactActiveClass: 'active'
})

export default router
