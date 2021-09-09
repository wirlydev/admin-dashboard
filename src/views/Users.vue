<template>
    <div>
        <h1>Users</h1>
        <div>
            <b-form-input v-model="searchText" placeholder="Email or Name"></b-form-input>
        </div>
        <b-table :items="filteredUsers" :fields="fields" primary-key="id">
                    <template #cell(Actions) = "data">
                        <router-link :to="{ name: 'editUser', params: { id: data.item.id }}">
                            <b-button variant="secondary">Edit</b-button>        
                        </router-link>         
                    </template>
        </b-table>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            fields: ['id', 'name', 'email', 'roles', 'Actions'],
            searchText: ""
        }
    },
    computed: {
        filteredUsers: function(){
            if(this.searchText.length < 3)
            {
               return this.$store.state.userManagement.users;     
            }
            else{
                return this.$store.state.userManagement.users.filter(x=> x.name.includes(this.searchText) || x.email.includes(this.searchText));
            }
        }
    },

    methods: {
        getUsers(){
            this.$store.dispatch("userManagement/getUsers");
        }
    },
    setup () {
        return {}
    },
    created: function(){
        this.getUsers();
    }
}
</script>

<style lang="scss" scoped>

</style>