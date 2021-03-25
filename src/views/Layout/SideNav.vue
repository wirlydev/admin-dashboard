<template>
    <div class="sidebar-container">            
        <ul class="nav flex-column">
            <i class="bi bi-app"></i>
            <li>
                <div class="sidebar-header">Dashboard</div>
            </li>
            <side-nav-item v-for="route in userRoutes" 
                :key="route.name"
                :routeName="route.name" 
                :displayName="route.meta.displayName"></side-nav-item>
        </ul>
</div>
</template>

<script>
import sideNavItem from './SideNavItem.vue'

export default {
    components: {sideNavItem},
    computed: {
        userRoutes(){
            return this.$router.options.routes[0].children.filter(r => r.meta.includeInSideNav);
        } 
    }
}
</script>

<style lang="scss">


.sidebar-container{
    .sidebar-header{
        color: #fff;
        height: 35px;
    }   
}
</style>