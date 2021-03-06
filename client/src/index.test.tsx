import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

describe("Test App component", () => {

    const history = createBrowserHistory()
    
    it("For success, Component renders App dom element", () => {
        
        const div = document.createElement('div');

        ReactDOM.render(
            <Router history={history}>
                <App />
            </Router>
        , div);
        
        ReactDOM.unmountComponentAtNode(div)
        
    });
    
});