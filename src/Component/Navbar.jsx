import React, { useState } from 'react';
import ApiDataComponent from './fetchapi';

export default function Navbar() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (value) => {
        setSelectedOption(value);
        console.log(value);
    }

        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Home</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/" onClick={() => handleOptionClick('Mobile')}>Mobile</a></li>
                                        <li><a className="dropdown-item" href="/" onClick={() => handleOptionClick('Cars')}>Cars</a></li>
                                        <li><a className="dropdown-item" href="/" onClick={() => handleOptionClick('Bikes')}>Bikes</a></li>
                                        <li><a className="dropdown-item" href="/" onClick={() => handleOptionClick('Property')}>Property</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        );
    }