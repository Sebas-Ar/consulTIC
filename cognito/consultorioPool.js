export const amplifyConfigAdmin = {
	Auth: {
		region: "us-east-1",
		userPoolId: 'us-east-1_zg2pOcn8h',
		userPoolWebClientId: '35g1g78pq29l0ia8dsp20o8beg',
	},
}

export const authConfigAdmin = {
	oauth: {
		domain: 'https://consultic.auth.us-east-1.amazoncognito.com',
		scope: ["email", "openid"],
		// we need the /autologin step in between to set the cookies properly,
		// we don't need that when signing out though
		redirectSignIn: 'http://localhost:3000/token',
		redirectSignOut: 'http://localhost:3000',
		responseType: "token",
	},
}