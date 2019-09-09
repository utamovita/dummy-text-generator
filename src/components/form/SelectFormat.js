import React, { Component } from 'react'
import { Select, MenuItem, Box } from '@material-ui/core';

const boxStyles = {
    display: 'flex',
    alignItems: 'center'
}

const selectStyles = {
    marginLeft: '50px',
}
class SelectFormat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        }, () => this.props.changeFormat(this.state.value))
    }

    render() {
        return (
            <Box style={boxStyles}>
                <label>HTML: </label>
                <Select style={selectStyles} onChange={this.onChange} value={this.props.value}>
                    <MenuItem value="text">No</MenuItem>
                    <MenuItem value="html">Yes</MenuItem>
                </Select>
            </Box>
        )
    }
}

export default SelectFormat;
