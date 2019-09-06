import React, { Component } from 'react'

class output extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
    render() {
        return (
            <div className="output">
                {this.props.value}
            </div>
        )
    }
}

export default output;
