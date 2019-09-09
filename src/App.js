import React, { Component } from 'react';
import Output from './components/form/output';
import Form from './components/form/form';
import { Container } from '@material-ui/core';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			outputText: 'Press button above to generate dummy text!',
			spinner: false,
			hideCopyBtn: true
		}
		this.showText = this.showText.bind(this);
		this.enableSpinner = this.enableSpinner.bind(this);
	}

	showText(data) {
		this.setState({
			outputText: data,
			spinner: false,
			hideCopyBtn: false
		});
	}

	enableSpinner() {
		this.setState({ spinner: true })
	}

	render() {
		return (
			<Container>
				<Form showText={this.showText} spinner={this.enableSpinner} />
				<Output text={this.state.outputText} spinner={this.state.spinner} hideBtn={this.state.hideCopyBtn} />
			</Container>
		)
	}

}

export default App;
