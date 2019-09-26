import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div class="ui menu">
                <div class="header item">
                    PyWeb.Dev
                </div>
                <a class="item">
                    Projects
                </a>
                <a class="item">
                    Profile
                </a>
                <a class="item active">
                    Contact
                </a>
            </div>
        );
    }
}

export default Menu;