<template>
    <div>
       <div class="user-config-button class1" @click.stop="toggleDropdown">
            <i class="bi bi-person-circle" style="font-size: 25px;"></i>
        </div>
        <div class="ad-dropdown-container" :class="{ show: isExpanded }">
            <a class="ad-dropdown-item" href="#">Settings</a>
            <a class="ad-dropdown-item" href="#">Help</a>
            <a class="ad-dropdown-item" href="#" @click.stop="logout">Logout</a>
        </div>
    </div>
</template>

<script>
import "bootstrap-icons/font/bootstrap-icons.css";

 export default {
        data: function(){
            return {
                isExpanded: false
            }
        }, 
         methods: {
            toggleDropdown: function () {
                this.isExpanded = !this.isExpanded;
            },
            logout: function(){
                this.$store.dispatch('user/logout')
            }
        }
    }
</script>

<style scoped>
    .ad-dropdown-container{
        display: none;
    }

    .ad-dropdown-container.show{
        display: block;
        z-index: 1000;
        left: auto!important;
        right: 45px!important;
        position: absolute;
        min-width: 170px;
        color: #6c757d;
        text-align: left;
        list-style: none;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #e7ebf0;
        border-radius: .25rem;
    }

    .ad-dropdown-item{
        display: block;
        padding: 7px 20px;
        color: #2c3e50;
    }
</style>



