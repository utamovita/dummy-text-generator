import React, { Component } from 'react'

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input type="number" className="form-control" value={this.state.value} onChange={this.onChange.bind(this)} />
            </div>
        )
    }
}

export default Text;
