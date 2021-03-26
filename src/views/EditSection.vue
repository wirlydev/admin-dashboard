<template>
  <div>
    <router-link :to="{ name: 'sections' }" class="back-link">
      <b-icon
        icon="chevron-left"
        :variant="iconVariant"
        class="back-icon"
      ></b-icon>
    </router-link>
    <h2>Edit Section</h2>

    <b-form @submit="onSubmit">
      <b-form-group label="Name:" label-for="name">
        <b-form-input
          id="name"
          v-model="section.title"
          type="text"
          placeholder="Enter Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Title:" label-for="title">
        <b-form-input
          id="title"
          v-model="section.title"
          type="text"
          placeholder="Enter Title"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Path:" label-for="path">
        <b-form-input
          id="path"
          v-model="section.path"
          type="text"
          placeholder="Enter Path"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Help:" label-for="helpContent">
        <ckeditor
          v-model="section.helpContent"
          :config="editorConfig"
        ></ckeditor>
      </b-form-group>

      <b-form-group label="Roles:" label-for="roles">
        <b-form-select
          id="roles"
          v-model="section.roles"
          :options="roles"
          required
        >
        </b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      section: {
        id: 1,
        title: "Report 1",
        name: "Report 1 Name",
        path: "report1",
        helpContent: "some html here",
        roles: "admin,user",
      },
      show: true,
      roles: ["Admin", "Member"],
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
h2 {
  display: inline-block;
  font-size: 2rem;
}
</style>
