import { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Outlet } from 'react-router-dom';

const MainLayout = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} />
            <SideBar isOpen={isOpen} />
            <Outlet />
            <ToastContainer />
            <Footer />
        </>
    )
}

export default MainLayout