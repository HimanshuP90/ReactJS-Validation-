import React from 'react';

class SignupForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username:'',
			email: '',
			password: '',
			passwordConfirmation: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

//Change the input value
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

//Ajax call & form sumbmision
  onSubmit(e) {
  	e.preventDefault();
  	this.props.userSignupRequest(this.state)
  }
	render() {
	 return(
	 	<form onSubmit={this.onSubmit}>
	 		<h1> Join our Team </h1>
	 		<div className="form-group">
	 			<label className="control-label">Username</label>
	 			<input 
	 				onChange={this.onChange}
	 				value={this.state.username}
	 				type="text"
	 				name="username"
	 				className="form-control"
	 			/>
	 		</div>
	 		<div className="form-group">
	 			<label className="control-label">Email</label>
	 			<input 
	 				onChange={this.onChange}
	 				value={this.state.email}
	 				type="text"
	 				name="email"
	 				className="form-control"
	 			/>
	 		</div>
	 		<div className="form-group">
	 			<label className="control-label">Password</label>
	 			<input
	 				onChange={this.onChange}
	 				value={this.state.password} 
	 				type="password"
	 				name="password"
	 				className="form-control"
	 			/>
	 		</div>
	 		<div className="form-group">
	 			<label className="control-label">Confirm Password</label>
	 			<input
	 				onChange={this.onChange}
	 				value={this.state.passwordConfirmation} 
	 				type="password"
	 				name="passwordConfirmation"
	 				className="form-control"
	 			/>
	 		</div>
	 		<div className="form-group">
	 		<button className="btn btn-primary">Signup </button>
	 		</div>
	 	</form>
	 );
	}
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
}

export default SignupForm;