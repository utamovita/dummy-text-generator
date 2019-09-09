import React, { Component } from 'react'
import { TextField, Box } from '@material-ui/core';

const boxStyles = {
    display: 'flex',
    alignItems: 'center'
}

const inputStyles = {
    width: '50px',
    paddingLeft: '15px',
    textAlign: 'center',
}
class Text extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        }, () => this.props.changeParas(this.state.value))
    }

    render() {
        return (
            <Box style={boxStyles}>
                <label>Paragraphs: </label>
                <TextField type="number" onChange={this.onChange} value={this.props.val} style={inputStyles} />
            </Box>

        )
    }
}

export default Text;
