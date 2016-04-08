import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component
{
    render()
    {
        const name ="Jeremy";
        return(
            <h1>Hello, I am {name} </h1>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);