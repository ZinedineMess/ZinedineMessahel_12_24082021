import Error404 from "../components/Error404/Error404";

export const routes = [
    {
        path: '/',
        access: true,
    },
    {
        path: "/dashboard/:id",
        redirected: true,
    },
    {
        path: '*', // 404
        component: Error404,
        noExact: true, // all route "exact" by default
    }
]
