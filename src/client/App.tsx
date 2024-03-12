import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


interface AppProps {}

const App = (props: AppProps) => {
	
	return (
		<BrowserRouter>
		<Navbar bg="dark" expand="lg">
                    <Navbar.Brand href="/">Chirper</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/chrip">Chirp It!</Nav.Link>
                            <Nav.Link as={NavLink} to="/edit">Edit Chrips</Nav.Link>
                            <Nav.Link as={NavLink} to="/mentions">User Mentions</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
		<Routes>
			<Route path="/" element={<Home />} />
            <Route path="/chirp/:id" element={<ChirpDetails />} />
            <Route path="/compose" element={<ChirpIt />} />
            <Route path="/admin" element={<EditChirp />} />
            <Route path="/mentions" element={<UserMentions />} />
		</Routes>
		</BrowserRouter>
	);
};

export default App;

{/* <div className="bg-dark">
        <Link to='/' className="btn btn-light m-3">Home</Link>
        <Link to='/films' className="btn btn-light m-3">View Chirps</Link>
        <Link to='/people' className="btn btn-light m-3">Chirp It!</Link>
        <Link to='/people' className="btn btn-light m-3">Edit Chirps</Link>
        <Link to='/people' className="btn btn-light m-3">User Mentions</Link>
        </div> */}