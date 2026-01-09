import "./App.css";
import Form from "./Pages/Form";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import Favourite from "./Pages/Favourite";
import StudentProvider from "./StudentProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "forms",
                element: <Form />,
            },
            {
                path: "favourites",
                element: <Favourite />,
            },
        ],
    },
]);

const App = () => {
    return (
        <StudentProvider>
            <RouterProvider router={router} />
        </StudentProvider>
    );
};

export default App;
