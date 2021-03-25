<template>
    <div>
        <MainLayout></MainLayout>
        <router-link :to="{name: 'reports'}">Reports</router-link>
    </div>
</template>

<script>
import MainLayout from '@/views/Layout/MainLayout.vue';
 export default {
        components: {
            MainLayout
        }
    }
</script>

<style scoped>

</style>