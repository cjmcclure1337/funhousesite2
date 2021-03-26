import React, {Component} from 'react';
import {Media} from "reactstrap";
import {Accordion, Card} from "react-bootstrap";
import '../App.scss';


// function RenderPlugin({friend}) {
//     return(
//         <div className="text-center">
//             <iframe title={friend.name + "plugin"} width="375" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src={friend.plugin1}></iframe> 
//             <a href='https://embedmap.org/'>embedding google maps in website</a> 
//             <script type='text/javascript' src={friend.plugin2}></script>
//         </div>
//     );
// }

class Friends extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentKey: 0,
            friends: props.friends
        };
    }

    changeKey(newKey) {
        if(newKey===this.state.currentKey) {
            this.setState({...this.state, currentKey:-1});      
        } else {
            this.setState({...this.state, currentKey:newKey});
        }
    }

    RenderFriendItem(friend) {
        return (
            <Card id={friend.id}>
                <Accordion.Toggle className="friends-header" id={friend.name} as={Card.Header} onClick={() => {this.changeKey(friend.id)}} >
                    <h4 className="friends-title">{friend.name} &ensp;<small>{friend.city}</small></h4>
                </Accordion.Toggle>
                <Accordion.Collapse className={"friends-body" + ((friend.id===this.state.currentKey) ? " show" : "")}>
                    <Card.Body>
                        <Media>
                            <Media left href="">
                                <Media object src={friend.logo} alt={friend.name + " in " + friend.city} />
                            </Media>
                            <Media body className="align-self-center">
                                <p className="text-center">{friend.address}<br/>{friend.phone}<br/>{friend.website}</p>
                            </Media>
                        </Media>
                    </Card.Body>
                    {/* <RenderPlugin friend={friend} /> */}
                </Accordion.Collapse>
            </Card>
        )
        
    }

    render() {

        const friendsAccordion = this.state.friends.map(friend => {
            return(
                <div className="card" id={friend.id}>
                    {this.RenderFriendItem(friend)}
                </div>
            );
        });

        return (
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
                        <Accordion>
                            {friendsAccordion}
                        </Accordion>
                    </div>
                </div>
            </div>
        );
    }
}

export default Friends;