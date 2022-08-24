<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import NavBar from "@/components/NavBar.vue"
</script>

<template>
    <NavBar/>
    <main>
        <div class="container py-4">
            <RouterView/>
        </div>
    </main>
</template>
