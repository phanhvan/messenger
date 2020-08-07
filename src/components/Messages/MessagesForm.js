import React, { Component } from "react";
import { Segment, Input, Button } from "semantic-ui-react";

class MessagesForm extends Component {
    render() {
        return (
            <Segment className="messages__form">
                <Input
                    className="messages__input"
                    fluid
                    name="message"
                    label={<Button icon="smile outline" />}
                    labelPosition="left"
                    placeholder="Write your massage"
                    action={
                        <span>
                            <Button.Group>
                                <Button id='btn__upload' icon="cloud upload" />
                                <Button id='btn__send' color="orange" icon="send" />
                            </Button.Group>
                        </span>
                    }
                />
            </Segment>
        );
    }
}

export default MessagesForm;
