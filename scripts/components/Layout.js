import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>Gekko Edits</h1>
                {this.props.children}
                <Link to="about">about</Link>
                <Link to="contact">contact</Link>
            </div>
        );
    }
}