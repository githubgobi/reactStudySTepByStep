import React from "react";

class HeaderClass extends React.Component {
    render (){
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

export default HeaderClass