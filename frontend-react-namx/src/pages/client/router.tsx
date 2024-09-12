import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../../home/appBar/appBar.home"
import Footer from "../../home/footer/appFooter.home"
import Home from "./pageHome"
import Tour from "./tour"

export default function router() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/3D-tour' element={<Tour />} />
            </Routes>
            <Footer />
        </>
    );
};

