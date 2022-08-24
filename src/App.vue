<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import NavBar from '@/components/NavBar.vue'

    import { storeToRefs } from 'pinia'
    import { useListingsStore } from '@/stores/listing'

    const { listings, getFavoriteList, getSingleListing } = storeToRefs(useListingsStore())
    const { getListings, changeOrder, toggleStatus } = useListingsStore()

    getListings()
</script>

<template>
    <NavBar/>
    <main>
        <div class="container py-4">
            <RouterView
                :listings="listings"
                :single="getSingleListing"
                :favorites="getFavoriteList"
                :changeOrder="changeOrder"
                :toggleStatus="toggleStatus"
            />
        </div>
    </main>
</template>
