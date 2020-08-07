import React, { Component } from "react";
import { Comment, Segment } from "semantic-ui-react";
import MessageHeader from './MessagesHeader';
import MessageForm from './MessagesForm';

export default class Messages extends Component {
    render() {
        return (
            <React.Fragment>
                <MessageHeader />

                <Segment>
                    <Comment.Group className="messages">
                        {/* Massages */}
                    </Comment.Group>
                </Segment>

                <MessageForm />
            </React.Fragment>
        );
    }
}
