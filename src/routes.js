import editReport from "./views/EditReport.vue";

export const routes =
    [
        {
            path: "/", 
            name: 'home', 
            component: () => import('@/views/Layout/MainLayout.vue'),
            children: [
                {
                    path: "users",
                    name: 'users',
                    component: () => import('@/views/Users.vue'),
                    meta: {
                        displayName: "Users",
                        icon: "",
                        includeInSideNav: true,
                        roles: 'admin'
                    }    
                },
                {
                    path: "/users/:id",
                    name: 'editUser',
                    component: () => import('@/views/EditUser.vue'),
                    meta: {
                        displayName: "",
                        icon: "",
                        includeInSideNav: false,
                        roles: 'admin'
                    }    
                },
                {
                    path: 'sections',
                    name: 'sections',
                    component: () => import('@/views/Sections.vue'),
                    meta: {
                        displayName: "Sections",
                        icon: "",
                        includeInSideNav: true,
                        roles: 'admin'
                    }
                },
                {
                    path: "sections/edit/:id",
                    component: editReport,
                    name: 'editSection',
                    meta: {
                        displayName: "",
                        includeInSideNav: false,
                        roles: 'admin'    
                    }
                },
                {
                    path: "global-settings",
                    component: () => import('@/views/GlobalSettings.vue'),
                    name: 'global-settings',
                    meta: {
                        displayName: "Global Settings",
                        includeInSideNav: true,
                        roles: 'admin'    
                    }
                },
                {
                    path: "communicator",
                    component: editReport,
                    name: 'commsettings',
                    meta: {
                        displayName: "Comm Settings",
                        includeInSideNav: true,
                        roles: 'admin'    
                    }
                }]
        }
    ]