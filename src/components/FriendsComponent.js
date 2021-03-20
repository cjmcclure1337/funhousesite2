import React from 'react';

function Friends() {
    return (
        <>
            <div className="container mb-4">
                <div className="row mt-5">
                    <div className="col text-center">
                        <h2>Friends of the Funhouse</h2>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <div className="media">
                            <img className="d-flex mr-3" src="/images/atlaspot.webp" alt="Atlas Pot"/>
                            <div className="media-body align-self-center">
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <div id="accordion">
                            <div className="card">
                                <div role="tab" className="card-header friends-header">
                                    <a data-toggle="collapse" data-target="#trendzCard">
                                        <h4 className="friends-title">Trendz &ensp;<small>Marble Falls, TX</small></h4>
                                    </a>
                                    <div className="collapse show friends-body" id="trendzCard" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="media">
                                                <img className="d-flex" src="/images/trendz.webp" alt="Trendz in Marble Falls"/>
                                                <div className="media-body align-self-center">
                                                    <p className="text-center">203 Main St.<br/>Marble Falls, TX<br/>830-637-7171<br/>trendzmarblefalls.weebly.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="text-center">
                                            <iframe width="375" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=375&amp;height=200&amp;hl=en&amp;q=203%20Main%20St.%20Marble%20Falls,%20TX%20+(Trendz)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
                                            <a href='https://embedmap.org/'>embedding google maps in website</a> 
                                            <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=05a89e11a7f188b12f12ac4bc6b5ccd36cc42363'></script>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div role="tab" className="card-header friends-header">
                                    <a data-toggle="collapse" data-target="#texceteraCard">
                                        <h4 className="friends-title">Texcetera &ensp;<small>Johnson City, TX</small></h4>
                                    </a>
                                    <div className="collapse friends-body" id="texceteraCard" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="media">
                                                <img className="d-flex" src="/images/texcetera.webp" alt="Texcetera in Johnson City"/>
                                                <div className="media-body align-self-center">
                                                    <p className="text-center">207 N. Nugen Ave.<br/>Johnson City, TX<br/>830-868-2419<br/>www.texcetera.net</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="text-center">
                                            <iframe width="375" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=375&amp;height=200&amp;hl=en&amp;q=207%20N.%20Nugen%20Ave.%20Johnson%20City,%20TX%20+(Texcetera)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
                                            <a href='https://embedmap.org/'>embedding google maps in website</a> 
                                            <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=69dbd17d8948ba8b8fdfc48780e38e6c67e1429a'></script>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div role="tab" className="card-header friends-header">
                                    <a data-toggle="collapse" data-target="#sansabaCard">
                                        <h4 className="friends-title">San Saba Oil Company &ensp;<small>San Saba, TX</small></h4>
                                    </a>
                                    <div className="collapse friends-body" id="sansabaCard" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="media">
                                                <img className="d-flex" src="/images/sansaba.webp" alt="San Saba Olive Oil Company in San Saba"/>
                                                <div className="media-body align-self-center">
                                                    <p className="text-center">207 East Wallace<br/>San Saba, TX<br/>325-372-4999<br/>www.sansabaoliveoilcompany.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="text-center">
                                            <iframe width="375" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=375&amp;height=200&amp;hl=en&amp;q=207%20East%20Wallace%20San%20Saba,%20TX%20+(San%20Saba%20Oil%20Company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
                                            <a href='https://embedmap.org/'>embedding google maps in website</a> 
                                            <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=05badd51bfd3c919dff097f48f49c8ee4f3770a3'></script>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div role="tab" className="card-header friends-header">
                                    <a data-toggle="collapse" data-target="#artisansCard">
                                        <h4 className="friends-title">Artisans &ensp;<small>Fredericksburg, TX</small></h4>
                                    </a>
                                    <div className="collapse friends-body" id="artisansCard" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="media">
                                                <img className="d-flex" src="/images/artisans.webp" alt="Artisans in Fredericksburg"/>
                                                <div className="media-body align-self-center">
                                                    <p className="text-center">234 West Main St.<br/>Fredericksburg, TX<br/>830-990-8160<br/>www.ArtisansTexas.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="text-center">
                                            <iframe width="375" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=375&amp;height=200&amp;hl=en&amp;q=234%20West%20Main%20St.%20Fredericksburg,%20TX%20+(Artisans)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
                                            <a href='https://embedmap.org/'>embedding google maps in website</a> 
                                            <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=704a14401774dc4c2bcb9819871addd999df4737'></script>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Friends;