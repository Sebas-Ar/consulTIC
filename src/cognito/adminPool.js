export const amplifyConfigAdmin = {
	Auth: {
		region: "us-east-1",
		userPoolId: 'us-east-1_7Wj9KvlHz',
		userPoolWebClientId: '5bqmjheg6i5e3mo90fp542i8gc',
	},
}

export const authConfigAdmin = {
	oauth: {
		domain: 'https://admin-consultic.auth.us-east-1.amazoncognito.com',
		scope: ["email", "openid"],
		// we need the /autologin step in between to set the cookies properly,
		// we don't need that when signing out though
		redirectSignIn: 'http://localhost:3000/token',
		redirectSignOut: 'http://localhost:3000',
		responseType: "token",
	},
}