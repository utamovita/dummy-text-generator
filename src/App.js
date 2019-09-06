import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Output from './components/output';
import Select from './components/controls/select';
import Text from './components/controls/text';
import { connect } from 'react-redux';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paras: 4,
			format: 'text',
			text: ''
		}
		this.getSampleText = this.getSampleText.bind(this);
	}
	getSampleText(e) {
		e.preventDefault();
		axios.get('https://baconipsum.com/api/?type=all-meat&paras=' + this.state.paras + '&start-with-lorem=1&format=' + this.state.format)
			.then((response) => {
				this.setState({
					text: response.data
				}, function () { console.log(this.state) })
			})
			.catch((err) => {
				console.log(err)
			});
	}

	showHtml(format) {
		this.setState({
			format: format
		});
		console.log('updated:' + this.state.paras);
	}

	changeParas(number) {
		this.setState({
			paras: number
		});
		console.log('updated:' + this.state.paras);
	}

	render() {
		console.log(this.props);
		return (
			<div className="App container">
				<h1>ReactJS Sample Text Generator</h1>
				<form className="form-inline">
					<div className="form-group">
						<label>Paragraphs:</label>
						<Text value={this.state.paras} onChange={this.showHtml.bind(this)} />
					</div>
					<div className="form-group">
						<label>Include HTML:</label>
						<Select value={this.state.html} onChange={this.changeParas.bind(this)} />
					</div>
					<div className="form-group">
						<button onClick={this.getSampleText}>generate</button>
					</div>
				</form>
				<Output value={this.state.text} />
			</div>
		);
	}

}
const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}
export default connect(mapStateToProps)(App);
