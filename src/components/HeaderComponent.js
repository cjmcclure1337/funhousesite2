import React, {Component } from 'react';
import {Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <>
                <Jumbotron className="jumbotron py-0 my-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-8 col-md-6 col-xl-5 mx-auto text-center jumbotron-center">
                                <div className="row">
                                <div className="col-12">
                                        <img className="mt-2" src={"../images/logo.webp"} alt="Funhouse Logo" />
                                    </div>
                                    <div className="col-12">
                                        <h1>Funhouse Pottery</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/gallery">
                                        <i className="fa fa-list fa-lg" /> Gallery
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/art">
                                        <i className="fa fa-info fa-lg" /> Art
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/friends">
                                        <i className="fa fa-address-card fa-lg" /> Friends
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Header;