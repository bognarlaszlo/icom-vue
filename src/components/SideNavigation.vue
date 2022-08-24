<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>
<template>
    <div class="card">
        <div class="card-body">
            <ul class="nav nav-pills flex-column gap-2">
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/">
                        <i class="bi bi-list-ul me-2"></i> Lista
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/kedvencek">
                        <i class="bi bi-star-fill me-2"></i> Kedvencek
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
