export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Layout/MainLayout.vue"),
    children: [
      {
        path: "users",
        name: "users",
        component: () => import("@/views/Users.vue"),
        meta: {
          displayName: "Users",
          icon: "person-fill",
          iconVariant: "primary",
          includeInSideNav: true,
          roles: "admin",
        },
      },
      {
        path: "/users/:id",
        name: "editUser",
        component: () => import("@/views/EditUser.vue"),
        meta: {
          displayName: "",
          icon: "",
          includeInSideNav: false,
          roles: "admin",
        },
      },
      {
        path: "sections",
        name: "sections",
        component: () => import("@/views/Sections.vue"),
        meta: {
          displayName: "Sections",
          icon: "exclamation-triangle",
          iconVariant: "primary",
          includeInSideNav: true,
          roles: "admin",
        },
      },
      {
        path: "sections/edit/:id",
        component: () => import("@/views/EditSection.vue"),
        name: "editSection",
        meta: {
          displayName: "",
          includeInSideNav: false,
          roles: "admin",
        },
      },
      {
        path: "global-settings",
        component: () => import("@/views/GlobalSettings.vue"),
        name: "global-settings",
        meta: {
          displayName: "Global Settings",
          includeInSideNav: true,
          icon: "gear-fill",
          iconVariant: "success",
          roles: "admin",
        },
      },
    ],
  },
];
