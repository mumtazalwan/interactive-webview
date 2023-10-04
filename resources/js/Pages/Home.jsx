import React from "react";
import '../../css/app.css';
import { Link, Head } from '@inertiajs/react';
import TestComponents from "@/components/TestComponents";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <div>
            <h1 className="text-9xl">Kita Mulai dari 0 yah</h1>
            <TestComponents />
            <Navbar />
        </div>
    )
}
