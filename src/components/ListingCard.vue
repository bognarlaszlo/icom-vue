<script lang="ts">
    export default {
        props: ['listing', 'toggleStatus']
    }
</script>
<template>
    <article class="listing card mb-3">
        <div class="row g-0">
            <div class="col-md-4 col-12">
                <img :src="listing.image" :alt="listing.address" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8 col-12">
                <div class="card-body">
                    <RouterLink :to="`/listing/${listing.adId}`">
                        <h5 class="card-title">{{ listing.address }}</h5>
                    </RouterLink>
                    <p class="card-text">{{ listing.price }} {{ listing.currency }}</p>
                    <p class="card-text">
                        <small>{{ listing.uploadDate }}</small>
                    </p>
                </div>

                <button @click="toggleStatus(listing)" class="favorite btn btn-light">
                    <i class="bi" :class="listing.status === 'checked' ? 'bi-star-fill' : 'bi-star'"></i>
                </button>
            </div>
        </div>
    </article>
</template>
