import React, {Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
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
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-8 col-md-6 col-xl-5 mx-auto text-center jumbotron-center">
                                <div className="row">
                                <div className="col-12">
                                        <img className="mt-2" src="./images/logo.webp" alt="Funhouse Logo" />
                                    </div>
                                    <div className="col-12">
                                        <h1>Funhouse Pottery</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;