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
            users: [{
                id: 1, 
                name: "John Smith",
                email: "john.smith@example.com",
                roles: "admin,user"
            },
            {
                id: 2, 
                name: "John Smith",
                email: "john.smith@example.com",
                roles: "admin,user"
            },
            {
                id: 3, 
                name: "John Smith",
                email: "john.smith@example.com",
                roles: "admin,user"
            },
            {
                id: 4, 
                name: "John Smith",
                email: "john.smith@example.com",
                roles: "admin,user"
            },
            {
                id: 4, 
                name: "John Smith",
                email: "john.smith@example.com",
                roles: "admin,user"
            },
            {
                id: 6, 
                name: "Pat Smith",
                email: "john.smith@example.com",
                roles: "admin,user"
            },
            ],
            fields: ['id', 'name', 'email', 'roles', 'Actions'],
            searchText: ""
        }
    },
    computed: {
        filteredUsers: function(){
            if(this.searchText.length < 3)
            {
               return this.users;     
            }
            else{
                return this.users.filter(x=> x.name.includes(this.searchText) || x.email.includes(this.searchText));
            }
        }
    },

    methods: {
        
    },
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>