import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopPage from './pages/TopPage';
import SecondPage from './pages/SecondPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={TopPage} />
                <Route exact path='/secondpage' component={SecondPage} />
            </Switch>
        </Router>
    );
};

export default App;
