<script lang="ts">
    export default {
        props: ['listing', 'toggleStatus']
    }
</script>
<template>
    <article class="listing card mb-3">

        <header class="card-header">
            <div class="row g-2">
                <div class="col-8">
                    <img :src="listing.image" :alt="listing.address" class="img-grid">
                </div>
                <div class="col-4">
                    <div class="row g-2">
                        <img :src="listing.image" :alt="listing.address" class="img-grid">
                        <img :src="listing.image" :alt="listing.address" class="img-grid">
                    </div>
                </div>
            </div>
        </header>

        <div class="card-body position-relative">
            <h5 class="card-title">{{ listing.address }}</h5>
            <p class="card-text">{{ listing.price }} {{ listing.currency }}</p>
            <p class="card-text">{{ listing.uploadDate }}</p>
            <p class="card-text">{{ listing.description }}</p>

            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ContactModal">
                Kapcsolatfelvétel
            </button>

            <button @click="toggleStatus(listing)" class="favorite btn btn-light">
                <i class="bi" :class="listing.status === 'checked' ? 'bi-star-fill' : 'bi-star'"></i>
            </button>
        </div>
    </article>

    <div id="ContactModal" class="modal fade" tabindex="-1" aria-labelledby="ContactModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 id="ContactModalLabel" class="modal-title">Kapcsolat</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="mb-1">Email cím: {{ listing.contact.email }}</p>
                    <p class="mb-1" v-for="number in listing.contact.parsedPhoneNumbers">Telefonszám: {{ number }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
