<script setup lang="ts">
    import ListingCard from '@/components/ListingCard.vue'
    import SideNavigation from '@/components/SideNavigation.vue'

    import { useListingsStore } from '@/stores/listing'
    const { favorites, getStatus, setStatus } = useListingsStore();
</script>

<template>
    <div class="row">
        <div class="col-xl-3 col-lg-4 col-12 mb-3">
            <SideNavigation/>
        </div>
        <div class="col-xl-9 col-lg-8 col-12">
            <h1 class="d-flex justify-content-between h2">Kedvencek <span class="badge text-bg-dark small">{{ favorites.length }}db</span></h1>
            <ListingCard
                v-for="listing in favorites"
                :listing="listing"
                :getStatus="getStatus"
                :setStatus="setStatus"
                :key="listing.adId"
            />
        </div>
    </div>
</template>
