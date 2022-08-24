<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>
<script lang="ts">
export default {
    props: ['listing', 'getStatus', 'setStatus']
}
</script>
<template>
    <article class="listing card mb-3">
        <div class="grid gap-0">
            <div class="g-col-md-4 g-col-12">
                <img :src="listing.image" :alt="listing.address" class="img-fluid rounded-start">
            </div>
            <div class="g-col-md-8 g-col-12">
                <div class="card-body">
                    <RouterLink :to="`/listing/${listing.adId}`">
                        <h5 class="card-title">{{ listing.address }}</h5>
                    </RouterLink>
                    <p class="card-text">{{ listing.price }} {{ listing.currency }}</p>
                </div>

                <button @click="setStatus(listing)" class="btn btn-light">
                    <i class="bi" :class="getStatus(listing)"></i>
                </button>
            </div>
        </div>
    </article>
</template>
