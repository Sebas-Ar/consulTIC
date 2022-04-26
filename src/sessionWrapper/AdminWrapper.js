import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Amplify from 'aws-amplify'
import { amplifyConfigAdmin } from '../cognito/adminPool'
import { authUserData } from '../cognito/auth'

Amplify.configure(amplifyConfigAdmin)

const AdminWrapper = ({ children, verify }) => {
    const router = useRouter()

    useEffect(() => {
        if (verify) verifyUser()
    }, [])

    const verifyUser = async () => {
        const user = await authUserData()
        if (user?.error) {
            router.push('/admin/iniciar-sesion')
        }
    }
    return <>
        {children}
    </>
}

export default AdminWrapper
