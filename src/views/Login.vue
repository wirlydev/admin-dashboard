<template>
<div class="container">
    <form @submit.prevent="onSubmit">
        <b-form-group label="Email:" label-for="email">
                <b-form-input
                id="email"
                type="email"
                v-model="email"
                placeholder="Enter email"
                required
                ></b-form-input>
        </b-form-group>

        <b-form-group label="Password:" label-for="password">
                <b-form-input
                id="password"
                type="password"
                v-model="password"
                placeholder="Password"
                required
                ></b-form-input>
        </b-form-group>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.$store.dispatch("user/login", { Username: this.email, Password: this.password })
          .then(response => {
              if(response.data.success){
                this.$router.push({name: 'home'});
              }
        });
      }
    }
    }
</script>

<style lang="scss" scoped>

</style>