import { Home, StoreLayout } from "~/Layout";
import CartLayout from "~/Layout/CartLayout";
import Details from "~/Layout/Details";
import BlogPage from "~/Pages/BlogPage/BlogPage";
import Cart from "~/Pages/CartPage";
import Checkout from "~/Pages/CheckoutPage";
import CompanyDetail from "~/Pages/CompanyDetail";
import CompanyPage from "~/Pages/CompanyPage";
import HomePage from "~/Pages/HomePage";
import ProductDeatil from "~/Pages/ProductDeatil";
import StorePage from "~/Pages/StorePage";

const publicRoute = [
  {
    path: "/",
    component: HomePage,
    layout: Home,
  },
  {
    path: "/cua-hang",
    component: StorePage,
    layout: StoreLayout,
    props: "product",
  },
  {
    path: "/cua-hang/:category",
    component: StorePage,
    layout: StoreLayout,
  },
  {
    path: "/san-pham/:product",
    component: ProductDeatil,
    layout: Details,
  },
  {
    path: "/danh-ba-nha-nong",
    component: CompanyPage,
    layout: StoreLayout,
    props: "post",
  },
  {
    path: "/danh-ba-nha-nong/:company",
    component: CompanyDetail,
    layout: Details,
    props: "slug",
  },
  {
    path: "/blog",
    component: BlogPage,
    layout: StoreLayout,
    props: "blog",
  },
  {
    path: "/cart",
    component: Cart,
    layout: CartLayout,
  },
  {
    path: "/checkout",
    component: Checkout,
    layout: CartLayout,
  },
];
export { publicRoute };
