import React from 'react';
import { Redirect, Route, Switch, HashRouter } from 'react-router-dom';
import Breedlist from './breedlist/breedlist';
import First from './first/first';
import Carousel from './carousel/carousel';
import Information from './information/information';

//Function Component for defining routes

const Main = () => {
    return (
        <div>
            <HashRouter basename="/">
            <Switch>
                    <Route path='/first' exact component={First} />
                    <Route path='/carousel' exact component={Carousel} />
                    <Route path='/breedlist' exact component={Breedlist} />
                    <Route path='/info' exact component={Information} />
                    <Redirect from='/' to='/first'/>
            </Switch>
            </HashRouter>
        </div>
    );
}

export default Main;