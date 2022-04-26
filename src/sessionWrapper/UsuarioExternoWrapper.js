import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Amplify from 'aws-amplify'
import { amplifyConfigUsuarioExterno } from '../cognito/usuarioExternoPool'
import { authUserData } from '../cognito/auth'

Amplify.configure(amplifyConfigUsuarioExterno)

const AdminWrapper = ({ children, verify }) => {
    const router = useRouter()

    useEffect(() => {
        if (verify) verifyUser()
    }, [])

    const verifyUser = async () => {
        const user = await authUserData()
        if (user?.error) {
            router.push('/usuario-externo/iniciar-sesion')
        }
    }
    return <>
        {children}
    </>
}

export default AdminWrapper
