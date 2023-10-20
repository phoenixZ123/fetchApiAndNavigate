
import App from "../App";
import {
    createBrowserRouter,
} from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { BookDetail } from "./pages/BookDetail";


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
                element: <Contact />,
                path: "/contact"
            },{
                element:<BookDetail/>,
                path:"/books/:id"
            }
           
        ]
    },
   

]);
export default router;