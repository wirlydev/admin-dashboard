<template>
  <div class="wrapper">
    <div class="sidebar-container">
      <side-nav />
    </div>
    <div class="content-container">
      <baseDropdown/>  
      <router-view />
    </div>
  </div>
</template>

<script>
import sideNav from "./SideNav.vue";
import baseDropdown from  "../../components/TheUserDropdown.vue"

export default {
  components: { sideNav, baseDropdown },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  height: 100vh;
}

.sidebar-container {
  color: rgb(191, 203, 217);
  background-color: rgb(48, 65, 86);
  flex-wrap: wrap;
  flex: 1 1 15%;
  text-align: center;

  .nav-link:hover {
    background-color: #263445;
    cursor: pointer;
    a {
      text-decoration: none;
    }
    //transition-property: border-color, background-color, color
  }

  .nav-link {
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    padding: 0 20px;
    text-align: left;

    a {
      color: rgb(191, 203, 217);
    }
  }
}

.content-container {
  padding: 32px;
  background-color: #f0f2f5;
  flex-wrap: wrap;
  flex: 1 1 85%;
}

.back-link {
  font-size: 2.5rem;
}

.user-config-button{
  display:flex; 
  justify-content:right; 
  padding-right: 15px;
}

.user-config-button i{
  font-size: 25px;
}

.user-config-button:hover{
  cursor: pointer;
}

</style>
