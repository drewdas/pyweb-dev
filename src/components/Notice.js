import React from 'react';

class Notice extends React.Component {
    render() {
        return (
            <div class="ui inverted segment">
                <p>{this.props.message}</p>
            </div>
        );
    }
}

export default Notice;