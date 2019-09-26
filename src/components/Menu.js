import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div class="ui menu">
                <div class="header item">
                    Our Company
                </div>
                <a class="item">
                    About Us
                </a>
                <a class="item">
                    Jobs
                </a>
                <a class="item active">
                    Locations
                </a>
            </div>
        );
    }
}

export default Menu;