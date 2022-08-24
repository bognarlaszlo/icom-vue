<script setup lang="ts">
    import BackButton from '@/components/BackButton.vue'
    import DetailCard from '@/components/DetailCard.vue'

    import router from '@/router'
    import { useRoute } from 'vue-router'

    const {params: {id}} = useRoute()
    const props = defineProps(['single', 'toggleStatus'])
    const single = props.single(id)
</script>

<template>
    <div class="row">
        <div class="col-xl-3 col-lg-4 col-12 mb-3">
            <BackButton :target="router.back"/>
        </div>
        <div class="col-xl-9 col-lg-8 col-12">
            <DetailCard
                :listing="single"
                :toggleStatus="toggleStatus"
            />
        </div>
    </div>
</template>
