import React, { Component } from 'react';
import { Card, Blockquote } from 'bootstrap-4-react';
import { API, graphqlOperation } from 'aws-amplify';
import { listSpeakers } from '../graphql/conference-queries';

export default class Speakers extends Component {

    constructor() {
        super()
        this.state = { data: {} };
        this.loadSpeakers();
    }

    async loadSpeakers() {
        const result = await API.graphql(graphqlOperation(listSpeakers));
        this.setState({ data: result.data.listSpeakers });
    }

    render() {

        return (
            <React.Fragment>
                <React.Fragment>
                    <h2>Speakers</h2>
                </React.Fragment>
                <React.Fragment>
                    {this.state.data.items && this.state.data.items.map((item, index) => (
                        <Card key={index} display="inline-block" align="top" style={{ margin: '10px', width: '15rem' }}>
                            <Card.Image src={"https://api.adorable.io/avatars/285/" + item.name + ".png"} top />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Blockquote.Footer>
                                    {item.bio}
                                </Blockquote.Footer>
                            </Card.Body>
                        </Card>
                    ))}
                </React.Fragment>
            </React.Fragment>
        )
    }
}