import * as React from 'react';

import { Button } from 'antd';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { HistoryListener, NavigationConfirmModal } from 'react-router-navigation-confirm';

import { ExampleBlock } from '../../../common/ExampleBlock';

const FirstPage = () => <div className="app_demo__page"><h1>Page #1</h1></div>;
const SecondPage = () => <div className="app_demo__page"><h1>Page #2</h1></div>;
const ThirdPage = () => <div className="app_demo__page"><h1>Page #3</h1></div>;

export const CustomChildExample = withRouter(({ match }: any) => {
    return (
        <ExampleBlock>
            <p><b>Try to click buttons below to navigate and show navigation confirm dialog...</b></p>
            <Link to={ `${match.url}/1` }><Button shape="round">#1</Button></Link>{' '}
            <Link to={ `${match.url}/2` }><Button shape="round">#2</Button></Link>{' '}
            <Link to={ `${match.url}/3` }><Button shape="round">#3</Button></Link>
            <Switch>
                <Route path={ `${match.url}/1` } component={ FirstPage }/>
                <Route path={ `${match.url}/2` } component={ SecondPage }/>
                <Route path={ `${match.url}/3` } component={ ThirdPage }/>
                <Redirect to={ `${match.url}/1` }/>
            </Switch>

            <ExampleBlock.Code>{ CODE_EXAMPLE }</ExampleBlock.Code>
            <ExampleBlock.Description>
                Example of confirmation modal dialog with custom child (body content),
                you can put your element to the <code className="inline">children</code> prop, or put as child tag.
            </ExampleBlock.Description>

            <HistoryListener/>
            <NavigationConfirmModal>
                <p><b>Custom modal body</b></p>
                <p>There are you can define some <span style={ { color: 'red' } }>custom</span> tamplate for modal body</p>
            </NavigationConfirmModal>
        </ExampleBlock>
    );
});

const CODE_EXAMPLE = `\
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import { NavigationConfirmModal, HistoryListener } from 'react-router-navigation-confirm';

const FirstPage = () => <h1>Page #1</h1>;
const SecondPage = () => <h1>Page #2</h1>;
const ThirdPage = () => <h1>Page #3</h1>;

const App = () => (
    <div className="App">
        <Link to="/1"><button>#1</button></Link>
        <Link to="/2"><button>#2</button></Link>
        <Link to="/3"><button>#3</button></Link>
        <div>
            <Switch>
                <Route path="/1" component={FirstPage} />
                <Route path="/2" component={SecondPage} />
                <Route path="/3" component={ThirdPage} />
                <Redirect to="/1" />
            </Switch>
        </div>
        {
            /**
             * You can use NavigationConfirmModal component on any route you want
             */
        }
        <NavigationConfirmModal>
            <p><b>Custom modal body</b></p>
            <p>There are you can define some <span style={ { color: 'red' } }>custom</span> tamplate for modal body</p>
        </NavigationConfirmModal>
    </div>
);

ReactDOM.render(
    <BrowserRouter>
        <div>
            <App />
            {
                /**
                 * You need to pass History listener to root router component, not to nested routes
                 */
            }
            <HistoryListener/> 
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
`;