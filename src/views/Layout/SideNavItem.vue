<template>
  <router-link
    tag="li"
    class="nav-link"
    active-class="active"
    :to="{ name: routeName }"
  >
    <span>
      <b-icon :icon="icon" :variant="iconVariant"></b-icon>
    </span>
    <span style="padding-left: 5px;">
      {{ displayName }}
    </span>
  </router-link>
</template>
<script>
export default {
  name: "SideNavItem",
  props: ["displayName", "routeName", "icon", "iconVariant"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
