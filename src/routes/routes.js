export const routes = [{
        path: '/',
    },
    {
        path: "/dashboard/:id",
    },
    {
        path: '*', // 404
        component: 'Error404',
        noExact: true, // all route "exact" by default
    }
]
