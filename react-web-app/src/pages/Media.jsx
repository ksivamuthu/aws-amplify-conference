import React, { Component } from 'react';
import { S3Album } from 'aws-amplify-react';

export default class Media extends Component {

    constructor() {
        super()
        this.state = { data: {} };
    }

    render() {

        return (
            <React.Fragment>
                <React.Fragment>
                    <h2>Media</h2>
                </React.Fragment>
                <React.Fragment>
                    <div className="album">
                        <S3Album track path="pictures/" picker />
                    </div>
                </React.Fragment>
            </React.Fragment>
        )
    }
}