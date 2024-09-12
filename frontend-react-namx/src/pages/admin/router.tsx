import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Cars from "./Cars";
import Details from "./detailles";
import Orers from "./orders";
import Clients from "./Clients";
import Dashboard from "./dashboard"
import Login from "./Login";
import Register from "./Register";
import UpdateCars from "./updateCars";
export default function router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/detaills" element={<Details />} />
                <Route path="/orders" element={<Orers />} />
                <Route path="/Clients" element={<Clients />} />
                <Route path="/update" element={<UpdateCars />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </>
    );
};

