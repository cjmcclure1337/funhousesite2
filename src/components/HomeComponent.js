import React from 'react';

function Home() {
    return(
        <>
            <div className="parallax"></div>

            <div className="container">
                <div className="row">
                    <div className="col text-center mt-5">
                        <p>For news, updates, and first dibs on new pieces, sign up for our newsletter!</p>
                    </div>
                </div>
                <div className="row form-group row-content">
                    <div className="col-md-3 mb-1">
                        <input type="text" className="form-control d-md-block d-none" id="SubscribeFName" name="SubscribeFName" placeholder="First Name" />
                    </div>
                    <div className="col-md-3 mb-1">
                        <input type="text" className="form-control d-md-block d-none" id="SubscribeLName" name="SubscribeLName" placeholder="Last Name" />
                    </div>
                    <div className="col-md-3 mb-1">
                        <input type="text" className="form-control" id="Subscribe" name="Subscribe" placeholder="Email" />
                    </div>
                    <div className="col-md-3 mb-1">
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
                <div className="row row-content align-items-center">
                    <div className="col">
                        <div className="media">
                        <img className="d-flex mr-3" src="../images/ebonyteakettle.png" alt="Ebony Tea Kettle"/>
                        <div className="media-body align-self-center">
                            <h3>Unique, Handmade Earthware</h3>
                            <p className="d-sm-block d-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
                        </div>
                        </div>
                    </div>
                </div>


                <div className="row row-content align-items-center">
                    <div className="col">
                        <div className="media">
                            <div className="media-body align-self-center">
                                <h3>Stunning Art Pieces</h3>
                                <p className="d-sm-block d-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
                            </div>
                            <img className="d-flex ml-3" src="../images/hearseespeakpots.png" alt="Hear No Evil, See No Evil, Speak No Evil Pots"/>
                        </div>
                    </div>
                </div>

                <div className="row row-content align-items-center">
                    <div className="col">
                        <div className="media">
                            <img className="d-flex mr-3" src="../images/jadehandle.png" alt="Jade Teapot Lid"/>
                            <div className="media-body align-self-center">
                                <h3>Vibrant Glazing</h3>
                                <p className="d-sm-block d-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;