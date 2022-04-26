export const NEXT_PUBLIC_CONSULTOR_SENIOR_USER_POOL_ID = process.env.NEXT_PUBLIC_CONSULTOR_SENIOR_USER_POOL_ID
export const NEXT_PUBLIC_CONSULTOR_SENIOR_CLIENT_ID = process.env.NEXT_PUBLIC_CONSULTOR_SENIOR_CLIENT_ID
const AWS_REGION = process.env.AWS_REGION

export const amplifyConfigConsultorSenior = {

    Auth: {
        region: AWS_REGION,
        userPoolId: NEXT_PUBLIC_CONSULTOR_SENIOR_USER_POOL_ID,
        userPoolWebClientId: NEXT_PUBLIC_CONSULTOR_SENIOR_CLIENT_ID
    }
}

export const authConfigConsultorSenior = {
    oauth: {
        domain: 'https://admin-consultic.auth.us-east-1.amazoncognito.com',
        scope: ['email', 'openid'],
        // we need the /autologin step in between to set the cookies properly,
        // we don't need that when signing out though
        redirectSignIn: 'http://localhost:3000/token',
        redirectSignOut: 'http://localhost:3000',
        responseType: 'token'
    }
}
