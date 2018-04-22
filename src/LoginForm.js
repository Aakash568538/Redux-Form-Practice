import React from 'react';

const LoginForm = props => {
	const { login, handleLogin, handleEmailField, handlePasswordField, email, password } = props;
	return (
		<div>
			<h4>
				Login Page
    </h4>
			<form onSubmit={handleLogin}>
				<input type="email" id="email" placeholder="Email"
					value={email} onChange={handleEmailField} /><br />
				<input type="password" id="password" placeholder="Password"
					value={password} onChange={handlePasswordField} />
				<div>
					<input type="submit" className="next"
						value="submit"
						// style={{position: relative}}
						onClick={handleLogin} />
				</div>
				{!login ? <div>
					Wrong Credential
				</div> : null}
			</form>
		</div>
	);
};

export default LoginForm;
