import React from 'react';
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

const output = (props) => {
    let output;
    if (props.spinner) {
        output = <CircularProgress size={60} thickness={4} />
    } else {
        output = props.text
    }

    return (
        <Paper style={paperStyle}>
            {props.hideBtn ? (
                output
            ) : (
                    <React.Fragment>
                        {props.text}
                        <CopyToClipboard text={props.text}><Button style={btnStyle} variant="contained" color="primary">Copy to clipboard</Button></CopyToClipboard>
                    </React.Fragment>
                )}
        </Paper>
    )

}

export default output;
