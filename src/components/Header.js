import React from "react";
import 'bootstrap/dist/css/bootstrap.main.css';

function Header() {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Landing Page</h1>
                    <nav>
                        <a href="#home" className="text-white mx-2">Home</a>
                        <a href="#features" className="text-white mx-2">Features</a>
                        <a href="#contact" className="text-white mx-2">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;