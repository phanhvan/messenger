import React, { Component } from "react";
import { Segment, Header, Icon, Input } from "semantic-ui-react";

class MessagesHeader extends Component {
    render() {
        return (
            <Segment clearing>
                <Header
                    floated="left"
                    as="h2"
                    fluid="true"
                    style={{ marginBottom: 0 }}
                >
                    <span>
                        Channel
                        <Icon name={"star outline"} color="black" />
                    </span>
                    <Header.Subheader>2 Users</Header.Subheader>
                </Header>

                {/* Channel Search Input */}
                <Header floated="right">
                    <Input
                        size="mini"
                        icon="search"
                        name="searchTerm"
                        placeholder="Search Messages"
                    />
                </Header>
            </Segment>
        );
    }
}

export default MessagesHeader;
