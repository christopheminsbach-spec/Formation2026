import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "./MainLayout.css";


export default function MainLayout(){

    return (

        <div className="layout">


            <Sidebar />


            <div className="layout-content">


                <Navbar />


                <main className="page-content">

                    <Outlet />

                </main>


            </div>


        </div>

    );

}