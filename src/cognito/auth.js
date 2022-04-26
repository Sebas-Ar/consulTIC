import { Auth } from 'aws-amplify'
/* import AWS from 'aws-sdk' */
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js'

export const authSignIn = async ({ email, password }) => {
    try {
        const user = await Auth.signIn(email, password)
        return { user }
    } catch (error) {
        console.log('error iniciando sesión', error)
        return { error }
    }
}

export const authUserData = async () => {
    try {
        const user = await Auth.currentAuthenticatedUser()
        return { user }
    } catch (error) {
        console.log('Usuario no logeado', error)
        return { error }
    }
}

export const authSession = async () => {
    try {
        const data = await Auth.currentSession()
        console.log(data)
        return { data }
    } catch (error) {
        console.log(error)
        return { error }
    }
}

export const authSignOut = async () => {
    try {
        await Auth.signOut()
        return {}
    } catch (error) {
        console.log('error signing out: ', error)
        return { error }
    }
}

// Funcion unica para ciclista - Registro de usuario logeado en su misma aplicacion
// export const signUp = async (username, password, email, phoneNumber) => {
//     try {
//         const { user } = await Auth.signUp({
//             username,
//             password,
//             attributes: {
//                 email, // optional
//                 phone_number: phoneNumber // optional - E.164 number convention
//             }
//         })
//         console.log(user)
//     } catch (error) {
//         console.log('error al registrar:', error)
//     }
// }

export const signUpAdmin = (email, password) => {
    return new Promise( (resolve, reject) => {
        const poolData = {
            UserPoolId: 'us-east-1_7Wj9KvlHz',
            ClientId: '5bqmjheg6i5e3mo90fp542i8gc'
        }

        const cognitoAttributeList = []

        const attributeList = []
        attributeList.push({ Name: 'email', Value: email })

        attributeList.forEach(element => {
            cognitoAttributeList.push(new CognitoUserAttribute(element))
        })

        const userPool = new CognitoUserPool(poolData)
        
        userPool.signUp(email, password, cognitoAttributeList, null, (err, result) => {
            if (err) { 
                reject(err)
            } else {
                resolve(result.userSub)
            }
        })
    })
}
