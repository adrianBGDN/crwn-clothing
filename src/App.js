import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;             //because the below is an open subscription we also have to close it when the component unmounts (to prevent memory leaks in our application)

    componentDidMount() {                                                   //in order to always know when firebase hase realised that the authentication state has changed
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {        //we use a method on the 'auth' library that we get from firebase
                                                                            //inside it takes a function where the parameter is what the 'user' state of the auth component is on our firebase project
            this.setState({ currentUser: user });                           //and the callback is 'this.setState' which sets the currentUser state to the user object
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();         //this call will close the subscription whenever the component unmounts
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />     {/* we pass this as a property so the header is aware of the currentUser changes */}
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }

}

export default App;
