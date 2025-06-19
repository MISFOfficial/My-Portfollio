import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import About from "../Component/About/About";
import Resume from "../Component/Resume/Resume";
import Projects from "../Component/Projects/Projects";
import Blogs from "../Component/Blogs/Blogs";
import Contact from "../Component/Contact/Contact";
import Error from "../Component/Error/Error";

export const router=createBrowserRouter([
    {
        path: '/',
        Component: Home,
        errorElement: <Error></Error> ,
        children: [
            {
                path: '/',
                Component: About
            },
            {
                path: '/resume',
                Component: Resume
            },
            {
                path: '/projects',
                Component: Projects
            },
            {
                path: '/blogs',
                Component: Blogs
            },
            {
                path: '/contact',
                Component: Contact
            },
        ]
    },
])