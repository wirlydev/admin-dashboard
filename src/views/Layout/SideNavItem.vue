<template>
    <router-link  tag="li" class="nav-link" active-class="active" :to="{ name: routeName }">
        <a>{{displayName}}</a>
    </router-link>
</template>
<script>
export default {
    name: "SideNavItem",
    props: ["displayName", "routeName"],
    data(){
        return {
                  
        }
    }
}
</script>   

<style lang="scss" scoped>
    
</style>