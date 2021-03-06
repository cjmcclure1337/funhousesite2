import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row"> 
                    <div className="col-12 col-md-4">
                        <div className="media mt-3">
                            <img className="funhouse-logo" src="/images/logo.webp" alt="Funhouse Logo" />
                            <div className="media-body align-self-center">
                                <h1>Funhouse<br/>Pottery</h1>
                            </div>
                        </div>
                    </div>            
                    <div className="col-4 col-sm-3 offset-1">
                        <h1>Links</h1>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/gallery'>Functional Ware Gallery</Link></li>
                            <li><Link to='/art'>Art Ware Gallery</Link></li>
                            <li><Link to='/friends'>Friends of the Funhouse</Link></li>
                            <li><Link to='/about'>About the Potter</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Subscribe</h1>
                        <p className="site-footer-text">Subscribe to our newsletter for update on events and new products.</p>
                        <div className="form-group row">
                            <div className="col-md-10">
                                <input type="text" className="form-control" id="footerSubscribe" name="footerSubscribe" placeholder="Email" />
                            </div>
                        </div> 
                        <div className="form-group row">
                            <div className="col-md-10">
                                <button type="submit" className="btn btn-primary">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;