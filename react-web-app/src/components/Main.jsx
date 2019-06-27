import React, { Component } from 'react';
import { Container } from 'bootstrap-4-react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Auth, Logger } from 'aws-amplify';
import Home from '../pages/Home';
import Speakers from '../pages/Speakers';
import Feedback from '../pages/Feedback';
import Media from '../pages/Media';


const logger = new Logger('Main');

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.loadUser = this.loadUser.bind(this);
        this.state = { user: null }
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        Auth.currentAuthenticatedUser()
            .then(user => this.setState({ user: user }))
            .catch(err => this.setState({ user: null }));
    }

    render() {
        const { user } = this.state;

        return (
            <Container as="main" role="main">
                <div className="starter-template">
                    <HashRouter>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={(props) => <Home user={user} />}
                            />
                            <Route
                                exact
                                path="/speakers"
                                render={(props) => <Speakers user={user} />}
                            />
                            <Route
                                exact
                                path="/media"
                                render={(props) => <Media user={user} />}
                            />
                            <Route
                                exact
                                path="/feedback"
                                render={(props) => <Feedback user={user} />}
                            />
                        </Switch>
                    </HashRouter>
                </div>
            </Container>
        )
    }
}