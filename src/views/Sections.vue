<template>
  <div>
    <h2>{{ Name }}</h2>
    <b-table :items="items" :fields="fields">
      <template #cell(Actions)="data">
        <router-link
          :to="{ name: 'editSection', params: { id: data.item.id } }"
        >
          <b-button variant="secondary">Edit</b-button>
        </router-link>
        <b-button
          v-if="items[data.index].IsActive"
          @click="Disable(data.item)"
          variant="danger"
          >Disable</b-button
        >
        <b-button
          v-if="!items[data.index].IsActive"
          @click="Enable(data.item)"
          variant="success"
          >Enable</b-button
        >
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Name: "Reports",
      items: [
        {
          id: 1,
          DisplayName: "Police",
          IsActive: true,
          SortOrder: 1,
          Bookmarkable: true,
          FileName: "providers",
          Path: "/provider",
          _rowVariant: "success",
        },
        {
          id: 2,
          DisplayName: "Reddit",
          IsActive: true,
          SortOrder: 2,
          Bookmarkable: true,
          FileName: "providers",
          Path: "/provider",
          _rowVariant: "success",
        },
        {
          id: 3,
          DisplayName: "Yogi",
          IsActive: true,
          SortOrder: 3,
          Bookmarkable: true,
          FileName: "providers",
          Path: "/provider",
          _rowVariant: "success",
        },
        {
          id: 4,
          DisplayName: "Disabled Report",
          IsActive: false,
          SortOrder: 4,
          Bookmarkable: true,
          FileName: "providers",
          Path: "/provider",
          _rowVariant: "secondary",
        },
      ],
      fields: ["DisplayName", "IsActive", "Bookmarkable", "Path", "Actions"],
    };
  },
  methods: {
    Enable(report) {
      report.IsActive = true;
    },
    Disable(report) {
      report.IsActive = false;
    },
  },
};
</script>

<style>
.btn {
  margin-right: 10px;
}
</style>
