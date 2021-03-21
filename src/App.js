import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomeComponent';
import Gallery from './components/GalleryComponent';
import Art from './components/ArtComponent';
import About from './components/AboutComponent';
import Friends from './components/FriendsComponent';
import {FRIENDS} from "./friends.js"
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      friends: FRIENDS,
    };
  }

  render() {
      return (
          <BrowserRouter>
              <div className="App">
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/gallery' component={Gallery} />
                    <Route exact path='/art' component={Art} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/friends' render={() => <Friends friends={this.state.friends} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
              </div>
          </BrowserRouter>
      );
  }
}


export default App;