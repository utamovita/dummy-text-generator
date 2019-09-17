import React, { Component } from 'react';
import SelectFormat from './SelectFormat';
import NumInput from './numInput';
import { Button, Box } from '@material-ui/core';
import axios from 'axios';

const boxStyle = {
    maxWidth: '50%',
    margin: 'auto'
}
const h1Style = {
    textAlign: 'center'
}
const formStyle = {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paras: 1,
            format: 'text',
            text: ''
        }
    }
    getSampleText = (e) => {
        e.preventDefault();
        this.props.spinner();
        axios.get('https://baconipsum.com/api/?type=all-meat&paras=' + this.state.paras + '&start-with-lorem=1&format=' + this.state.format)
            .then((response) => {
                this.setState({
                    text: response.data
                }, () => this.props.showText(this.state.text))
            })
            .catch((err) => {
                console.log(err)
            });
    }

    changeFormat = (format) => {
        this.setState({
            format: format
        });
    }

    changeParas = (number) => {
        this.setState({
            paras: number
        });
    }

    render() {
        return (
            <Box style={boxStyle}>
                <h1 style={h1Style}>Dummy text generator</h1>
                <form style={formStyle}>
                    <NumInput val={this.state.paras} changeParas={this.changeParas} />
                    <SelectFormat value={this.state.format} changeFormat={this.changeFormat} />
                    <Button variant="contained" color="secondary" onClick={this.getSampleText}>generate</Button>
                </form>
            </Box>
        )
    }

}

export default Form;