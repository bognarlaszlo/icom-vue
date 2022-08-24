<script setup lang="ts">
    import ListingCard from '@/components/ListingCard.vue'
    import SideNavigation from '@/components/SideNavigation.vue'
</script>
<script lang="ts">
    export default {
        props: ['listings', 'toggleStatus']
    }
</script>

<template>
    <div class="row">
        <div class="col-xl-3 col-lg-4 col-12 mb-3">
            <SideNavigation/>
        </div>
        <div class="col-xl-9 col-lg-8 col-12">
            <h1 class="d-flex justify-content-between h2">Lista <span class="badge text-bg-dark small">{{ listings.length }}db</span></h1>
            <ListingCard
                v-for="listing in listings"
                :listing="listing"
                :toggleStatus="toggleStatus"
                :key="listing.adId"
            />
        </div>
    </div>
</template>
