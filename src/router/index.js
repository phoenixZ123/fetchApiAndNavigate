
import App from "../App";
import {
    createBrowserRouter,
} from "react-router-dom";
import { Clothes } from "./pages/Clothes";
import { Home } from "./pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div><App /></div>,
        children:[
            {
                element:<Home/>,
                path:""
            },
            {
                element:<Clothes/>,
                path: "/clothes"
            },
           
        ]
    },
   

]);
export default router;