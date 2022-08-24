<script setup lang="ts">
    import ListingCard from '@/components/ListingCard.vue'
    import SideNavigation from '@/components/SideNavigation.vue'
</script>
<script lang="ts">
    export default {
        props: ['favorites', 'changeOrder', 'toggleStatus'],
    }
</script>

<template>
    <div class="row">
        <div class="col-xl-3 col-lg-4 col-12 mb-3">
            <SideNavigation/>
        </div>
        <div class="col-xl-9 col-lg-8 col-12">
            <h1 class="d-flex justify-content-between h2">Kedvencek <span class="badge text-bg-dark small">{{ favorites.length }}db</span></h1>

            <div class="btn-group my-2" role="group">
                <button id="Sorting" type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Rendezés</button>
                <ul class="dropdown-menu" aria-labelledby="Sorting">
                    <li><a href="#" class="dropdown-item" @click="changeOrder('address')">Cím</a></li>
                    <li><a href="#" class="dropdown-item" @click="changeOrder('uploadDate')">Dátum</a></li>
                    <li><a href="#" class="dropdown-item" @click="changeOrder('price')">Ár</a></li>
                </ul>
            </div>

            <ListingCard
                v-for="listing in favorites"
                :listing="listing"
                :toggleStatus="toggleStatus"
                :key="listing.adId"
            />
        </div>
    </div>
</template>
