<template>
    <div>
        <h2>Edit User</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        label="First Name:"
        label-for="firstName"
      >
        <b-form-input
          id="firstName"
          v-model="user.firstName"
          type="text"
          placeholder="First Name"
          required
        ></b-form-input>
      </b-form-group>

 <b-form-group
        label="Last Name:"
        label-for="lastName"
      >
        <b-form-input
          id="lastName"
          v-model="user.lastName"
          type="text"
          placeholder="Last Name"
          required
        ></b-form-input>
      </b-form-group>

<b-form-group
        label="Email:"
        label-for="email"
      >
        <b-form-input
          id="email"
          v-model="user.email"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>

    <b-form-group
        label="New Password (Only enter a new password if you want to change the user's existing password):"
        label-for="newPassword"
      >
        <b-form-input
          id="newPassword"
          v-model="user.password"
          type="password"
          placeholder="New Password"
          required
        ></b-form-input>
      </b-form-group>

    <b-form-group
        label="Role:"
        label-for="role"
      >

      <b-form-select id="role" 
        v-model="user.role" 
        :options="roles"
        required>
        </b-form-select>
      </b-form-group>


 <b-form-group
        label="Territory:"
        label-for="territory"
      >

      <b-form-input
          id="territory"
          v-model="user.territory"
          type="text"
          placeholder="Territory"
        ></b-form-input>
      </b-form-group>


    <b-form-group
         label="External Id:"
        label-for="externalId"
      >

    <b-form-input
          id="externalId"
          v-model="user.externalId"
          type="text"
          placeholder="External Id"
        ></b-form-input>

     </b-form-group>



      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    </div>
</template>

<script>
    export default {
        data() {
      return {
        user: {
                id: 1, 
                firstName: "John",
                lastName: "Smith",
                name: "John Smith",
                email: "john.smith@example.com",
                roles: "admin,user"
            },
        show: true,
        roles: ['Admin', 'Member']
      }
    }
    }
</script>

<style lang="scss" scoped>

</style>