import React, { Component } from 'react';
import { Paper, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const paperStyle = {
    padding: '25px',
    textAlign: 'center',
    marginTop: '50px'
}
const btnStyle = {
    margin: 'auto',
    display: 'block',
    marginTop: '30px'
}
class output extends Component {
    render() {
        let output;
        if (this.props.spinner) {
            output = <CircularProgress size={60} thickness={4} />
        } else {
            output = this.props.text
        }

        return (
            <Paper style={paperStyle}>
                {this.props.hideBtn ? (
                    output
                ) : (
                        <React.Fragment>
                            {this.props.text}
                            <CopyToClipboard text={this.props.text}><Button style={btnStyle} variant="contained" color="primary" onClick={this.copyToClipBoard}>Copy to clipboard</Button></CopyToClipboard>
                        </React.Fragment>
                    )}
            </Paper>
        )
    }
}

export default output;
