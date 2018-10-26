import React, { Component } from 'react';

export default class TextItem extends Component
{
static defaultProps = {
    heading : "default heading",
    paragraph : "default paragraph"
}

    render()
    {
        return(
        <div>
            <h4>{this.props.heading}</h4>
            <p>{this.props.paragraph}</p>
        </div>
        );
    }
}