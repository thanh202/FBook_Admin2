import { createRouter,createWebHistory } from "vue-router";
import routes from "./routers";

const router = Router();
export default router;

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}

