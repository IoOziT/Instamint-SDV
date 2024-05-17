"use client";

//This component is temporary and will be improved in the future
//This is a demonstration of how to use the API in the client side

import { signIn } from "@/api/auth";

const LoginForm = () => {
	const onSubmit = e => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		signIn({ email, password });
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input placeholder="email" />
				<input placeholder="password" />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default LoginForm;
