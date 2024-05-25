export default {
	security: {
		userSession: {
			cookie: { name: "sessionokie" },
			token: { secret: process.env.AUTH_SECRET },
		},
	},
	pages: { signIn: "/login", signOut: "/logout", default: "/" },
};
