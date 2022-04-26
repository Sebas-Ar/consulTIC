import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Amplify from 'aws-amplify'
import { amplifyConfigComite } from '../cognito/comitePool'
import { authUserData } from '../cognito/auth'

Amplify.configure(amplifyConfigComite)

const AdminWrapper = ({ children, verify }) => {
    const router = useRouter()

    useEffect(() => {
        if (verify) verifyUser()
    }, [])

    const verifyUser = async () => {
        const user = await authUserData()
        if (user?.error) {
            router.push('/comite/iniciar-sesion')
        }
    }
    return <>
        {children}
    </>
}

export default AdminWrapper
