import React, { Component } from 'react'

class select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        }, function () {
            this.props.onChange(this.state.value);
        });
    }

    render() {
        return (
            <div>
                <select className="form-control" onChange={this.onChange.bind(this)}>
                    <option value="html">Yes</option>
                    <option value="text">No</option>
                </select>
            </div>
        )
    }
}

export default select;
