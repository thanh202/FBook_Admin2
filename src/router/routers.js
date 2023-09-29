export default [
    {

        name:"master",
        path:"/",
        component:import('./../pages/layout/master.vue'),
        redirect:'dashboard',
        children: [
            {
                name:'dashboard', 
                path:'/dashboard',
                component:import('./../pages/dashboard.vue'),
            },
            {
                name:'staff', 
                path:'/staff',
                component:import('../pages/Staff.vue'),
            }
        ]
    },
    {
        name:"signup",
        path:"/signup",
        component:import('./../components/signup.vue'),
        
    }
]