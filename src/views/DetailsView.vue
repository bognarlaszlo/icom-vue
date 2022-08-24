<script setup lang="ts">
    import router from '@/router'

    import { useRoute } from 'vue-router'
    import { storeToRefs } from 'pinia'
    import { useListingsStore } from '@/stores/listing'

    const route = useRoute()
    const { single } = storeToRefs(useListingsStore())
    const { getSingle, getStatus, setStatus } = useListingsStore()

    getSingle(Number(route.params.id))
</script>
<template>
    <div class="row">
        <div class="col-xl-3 col-lg-4 col-12 mb-3">
            <button @click="router.back" class="btn btn-outline-primary btn-lg">Vissza</button>
        </div>
        <div class="col-xl-9 col-lg-8 col-12">

            <div class="listing card">
                <div class="card-body">
                    <h2 class="card-title">{{ single.address }}</h2>
                    <p class="card-text">{{ single.price }} {{ single.currency }}</p>
                    <p class="card-text">{{ single.uploadDate }}</p>
                    <p class="card-text">{{ single.description }}</p>
                </div>

                <button @click="setStatus(single)" class="btn btn-light">
                    <i class="bi" :class="getStatus(single)"></i>
                </button>
            </div>

        </div>
    </div>
</template>
