import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Article from "./views/Article.vue";
import Templates from "./views/Templates.vue";
import Product from "./views/Product.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/templates",
            name: "templates",
            component: Templates
        },
        {
            path: "/article",
            name: "article",
            component: Article
        },
        {
            path: "/product",
            name: "product",
            component: Product
        }
    ]
});
