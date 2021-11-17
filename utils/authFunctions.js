import Auth from "@aws-amplify/auth";

export const signUp = async (registerData) => {

	const { password, email } = registerData
	console.log(registerData)
	try {
		const user = await Auth.signUp({
			username: email,
			password,
			attributes: {
				email,
				/* phone_number: `+57${phone}`, */   // optional - E.164 number convention
				// other custom attributes 
			}
		});
		return { user }
	} catch (err) {
		return { err }
	}
}

export const confirmSignUp = async (username, code) => {
	try {
		const res = await Auth.confirmSignUp(username, code);
		console.log(res)
		return res
	} catch (error) {
		console.log('error confirming sign up', error);
	}
}

export const signIn = async (e, loginData, router) => {
	e.preventDefault()
	try {
		const { email, password } = loginData
		const user = await Auth.signIn(email, password);
		if (user?.attributes?.sub && user?.username && user?.signInUserSession) {
			alert('usuario confirmadoo')
		}
	} catch (error) {
		console.log('error signing in', error.message);
		return error
	}
}

export const validateJWToken = async () => {
	try {
		const jwToken = localStorage.getItem('jwToken')
		if (jwToken !== null) {
			return true
		} else {
			return false
		}
	} catch (e) {
		return false
	}
}

export const closeSession = async (router) => {
	localStorage.clear();
	router.push('/iniciar-sesion')
}

export const getUserId = async () => {
	try {
		const userId = localStorage.getItem('user_id')
		if (userId !== null) {
			return userId
		} else {
			return false
		}
	} catch (e) {
		return false
	}
}
