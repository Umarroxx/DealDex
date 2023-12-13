import React, { useState } from 'react';

export default function Navbar() {
    const dropdownItems = [
        { id: 1, label: 'Mobile' },
        { id: 2, label: 'Cars' },
        { id: 3, label: 'Bikes' },
        { id: 4, label: 'Property' },
    ];

    const [searchInput, setSearchInput] = useState('');

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const filteredItems = dropdownItems.filter(item =>
        item.label.toLowerCase().includes(searchInput.toLowerCase())
    );

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
                                    {/* Map through the filtered items instead of the original dropdownItems */}
                                    {filteredItems.map(item => (
                                        <li key={item.id}><a className="dropdown-item" href="/">{item.label}</a></li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchInput}
                                onChange={handleSearchInputChange}
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
