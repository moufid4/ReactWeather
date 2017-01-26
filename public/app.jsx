var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('./components/GreeterMessage');
var GreeterForm = require('./components/GreeterForm');

var Greeter = React.createClass({
	getDefaultProps: function() {
		return {
			name: 'React',
			message: 'This is from React component.'
		};
	},
	getInitialState() {
		return{
			name: this.props.name,
			message: this.props.message
		};
	},
	handleNewName: function(name) {
		this.setState({
			name: name
		});
	},
	handleNewMessage: function(message) {
		this.setState({
			message: message
		});
	},
	render: function() {
		var name = this.state.name;
		var message = this.state.message;

		return (
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
			</div>
		);
	}
});

var firstName = 'Moufid';
var message = 'Success!';

ReactDOM.render(
	<Greeter name={firstName} message={message}/>,
	document.getElementById('app')
);