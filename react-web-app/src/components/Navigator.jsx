import React, { Component } from 'react';
import { Navbar, Nav } from 'bootstrap-4-react';
import { Auth, Logger } from 'aws-amplify';
import { SignOut } from 'aws-amplify-react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const HomeItems = () => (
    <React.Fragment>
        <Nav.ItemLink href="#/" active>
            Home
        </Nav.ItemLink>
        <Nav.ItemLink href="#/speakers">
            Speakers
        </Nav.ItemLink>
        <Nav.ItemLink href="#/media">
            Media
        </Nav.ItemLink>
        <Nav.ItemLink href="#/about">
            About
        </Nav.ItemLink>
    </React.Fragment>
)

const SpeakerItems = () => (
    <React.Fragment>
        <Nav.ItemLink href="#/">
            Home
        </Nav.ItemLink>
        <Nav.ItemLink href="#/speakers" active>
            Speakers
        </Nav.ItemLink>
        <Nav.ItemLink href="#/media">
            Media
        </Nav.ItemLink>
        <Nav.ItemLink href="#/about">
            About
        </Nav.ItemLink>
    </React.Fragment>
)

const MediaItems = () => (
    <React.Fragment>
        <Nav.ItemLink href="#/">
            Home
        </Nav.ItemLink>
        <Nav.ItemLink href="#/speakers">
            Speakers
        </Nav.ItemLink>
        <Nav.ItemLink href="#/media" active>
            Media
        </Nav.ItemLink>
        <Nav.ItemLink href="#/about">
            About
        </Nav.ItemLink>
    </React.Fragment>
)

const AboutItems = () => (
    <React.Fragment>
        <Nav.ItemLink href="#/">
            Home
        </Nav.ItemLink>
        <Nav.ItemLink href="#/speakers">
            Speakers
        </Nav.ItemLink>
        <Nav.ItemLink href="#/media">
            Media
        </Nav.ItemLink>
        <Nav.ItemLink href="#/about" active>
            About
        </Nav.ItemLink>
    </React.Fragment>
)

const logger = new Logger('Navigator');

export default class Navigator extends Component {
    constructor(props) {
        super(props);

        this.loadUser = this.loadUser.bind(this);

        this.state = { user: null }
    }

    componentDidMount() {
        this.loadUser(); // The first check
    }

    onHubCapsule(capsule) {
        logger.info('on Auth event', capsule);
        this.loadUser(); // Triggered every time user sign in / out.
    }

    loadUser() {
        Auth.currentAuthenticatedUser()
            .then(user => this.setState({ user: user }))
            .catch(() => this.setState({ user: null }));
    }

    render() {
        const { user } = this.state;

        return (
            <Navbar expand="md" dark bg="dark" fixed="top">
                <Navbar.Brand href="#">AWS Amplify Conference</Navbar.Brand>
                <Navbar.Collapse id="navbarsExampleDefault">
                    <Navbar.Nav mr="auto">
                        <HashRouter>
                            <Switch>
                                <Route exact path="/" component={HomeItems} />
                                <Route exact path="/speakers" component={SpeakerItems} />
                                <Route exact path="/media" component={MediaItems} />
                                <Route exact path="/about" component={AboutItems} />
                            </Switch>
                        </HashRouter>
                    </Navbar.Nav>
                    <Navbar.Text mr="2">
                        {user ? 'Hi ' + user.username : 'Please sign in'}
                    </Navbar.Text>
                    {user && <SignOut />}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}