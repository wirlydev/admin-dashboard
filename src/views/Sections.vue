<template>
    <div>
        <h2>{{Name}}</h2>
        <b-table :items="items" :fields="fields">
                    <template #cell(Actions) = 'data'>
                          <b-button variant="secondary" @click="Edit(data.item)">Edit</b-button>
                          <b-button v-if="items[data.index].IsActive" @click="Disable(data.item)" variant="danger">Disable</b-button>
                          <b-button v-if="!items[data.index].IsActive" @click="Enable(data.item)" variant="success">Enable</b-button>
                    </template>
        </b-table>
    </div>
</template>

<script>
    export default {
        data() {
            return { 
                Name : 'Reports',
                items: [
                    {Id: 1, DisplayName: 'Police', IsActive: true, SortOrder: 1, Bookmarkable: true,  FileName: 'providers', Path: '/provider',  _rowVariant: 'success'}, 
                    {Id: 2, DisplayName: 'Reddit', IsActive: true, SortOrder: 2, Bookmarkable: true,  FileName: 'providers', Path: '/provider', _rowVariant: 'success'}, 
                    {Id: 3, DisplayName: 'Yogi', IsActive: true, SortOrder: 3, Bookmarkable: true,  FileName: 'providers', Path: '/provider', _rowVariant: 'success'}, 
                    {Id: 4, DisplayName: 'Disabled Report', IsActive: false, SortOrder: 4, Bookmarkable: true,  FileName: 'providers', Path: '/provider', _rowVariant: 'secondary'} 
                    
                ],
                fields: ['DisplayName', 'IsActive', 'Bookmarkable', 'Path', 'Actions'] 
                
            }
        },
        methods: {
            Enable(report){
                report.IsActive = true;
            }, 
            Disable(report){
                report.IsActive = false;
            }, 
            Edit(report){
                this.$router.push({ name: 'editReport', params: { id: report.Id } });
            }
        }
    }
</script>

<style>
    .btn {
        margin-right: 10px;
    }
</style>