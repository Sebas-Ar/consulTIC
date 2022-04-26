import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Amplify from 'aws-amplify'
import { amplifyConfigConsultorSenior } from '../cognito/consultorSeniorPool'
import { authUserData } from '../cognito/auth'

Amplify.configure(amplifyConfigConsultorSenior)

const AdminWrapper = ({ children, verify }) => {
    const router = useRouter()

    useEffect(() => {
        if (verify) verifyUser()
    }, [])

    const verifyUser = async () => {
        const user = await authUserData()
        if (user?.error) {
            router.push('/consultor-senior/iniciar-sesion')
        }
    }
    return <>
        {children}
    </>
}

export default AdminWrapper
