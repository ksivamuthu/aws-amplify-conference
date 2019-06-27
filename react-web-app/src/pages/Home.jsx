import React, { Component } from 'react';
import { Card } from 'bootstrap-4-react';
import { API, graphqlOperation } from 'aws-amplify';
import { getConference, createUserSessionVote } from '../graphql/conference-queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { onCreateUserSessionVote } from '../graphql/subscriptions';

export default class Home extends Component {

    subscription = null;

    constructor() {
        super()
        this.state = { data: {} };

        this.subscription = API.graphql(
            graphqlOperation(onCreateUserSessionVote)
        ).subscribe({
            next: async (data) => { await this.loadConferenceSessions(); }
        });

        this.loadConferenceSessions();
    }

    componentWillUnmount() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    async loadConferenceSessions() {
        const result = await API.graphql(graphqlOperation(getConference, { id: "1" }));
        this.setState({ data: result.data.getConference });
    }


    async onFavoriteClick(sessionId) {
        const { user } = this.props;
        const input = { userId: user.username, userSessionVoteSessionId: sessionId };
        await API.graphql(graphqlOperation(createUserSessionVote, { input: input }));
        await this.loadConferenceSessions();
    }

    render() {

        return (
            <React.Fragment>
                <React.Fragment>
                    <h2>{this.state.data.title} - {this.state.data.year}</h2>
                    <h5>{this.state.data.location}</h5>
                </React.Fragment>
                <React.Fragment>
                    <div>
                        {this.state.data.sessions && this.state.data.sessions.items.map((item, index) => (
                            <React.Fragment key={index}>
                                <Card>
                                    <Card.Body>
                                        <h3>{item.title}</h3>
                                        <h5>{item.speaker.name}</h5>
                                        <p>
                                            {item.abstract}
                                        </p>
                                        <div style={{ float: 'right', display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                                            {item.favorites.items && item.favorites.items.length > 0 && <h2 style={{ marginRight: '20px' }}>{item.favorites.items.length}</h2>}
                                            <i onClick={() => { this.onFavoriteClick(item.id); }}><FontAwesomeIcon size="2x" icon={faThumbsUp} /></i>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <br />
                            </React.Fragment>
                        ))}
                    </div>
                </React.Fragment>
            </React.Fragment>
        )
    }
}