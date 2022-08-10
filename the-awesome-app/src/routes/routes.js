import Counter from "../components/Counter";
import EditCustomer from "../components/EditCustomer";
import GadgetStore from "../components/GadgetStore";
import Hello from "../components/Hello";
import ListCustomers from "../components/ListCustomers";
import ListProducts from "../components/ListProducts";
import Login from "../components/Login";
import Register from "../components/Register";
import Search from "../components/Search";
import ViewCart from "../components/ViewCart";

export const appRoutes = [

    {
        path: "/home",
        title: "Home",
        component: <Hello message="Hello World" color="slateblue"/>,
        isMenuItem: true,
        secure: false
    },
    {
        path: "/counter",
        title: "Counter",
        component: <Counter initCount={5}/>,
        isMenuItem: true,
        secure: false
    },
    {
        path: "/products",
        title: "Products",
        component: <ListProducts/>,
        isMenuItem: true,
        secure: true
    },
    {
        path: "/search",
        title: "Search",
        component: <Search/>,
        isMenuItem: true,
        secure: true
    },
    {
        path: "/login",
        title: "Login",
        component: <Login/>,
        isMenuItem: true,
        secure: false
    },
    {
        path: "/register",
        title: "Register",
        component: <Register/>,
        isMenuItem: true,
        secure: false
    },
    {
        path: "/gadgets",
        title: "Gadgets",
        component: <GadgetStore/>,
        isMenuItem: true,
        secure: false
    },
    {
        path: "/cart",
        title: "View Cart",
        component: <ViewCart/>,
        isMenuItem: true,
        secure: false
    },
    {
        path: "/customers",
        title: "Customers",
        component: <ListCustomers/>,
        isMenuItem: true,
        secure: true
    },
    {
        path: "/customers/:id",
        title: "Edit Customer",
        component: <EditCustomer/>,
        isMenuItem: false,
        secure: true
    }

]