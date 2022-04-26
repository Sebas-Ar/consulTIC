import { signUpAPI } from '../../../cognito/auth'
import adminRepository from './repository'
import { NEXT_PUBLIC_ADMIN_CLIENT_ID, NEXT_PUBLIC_ADMIN_USER_POOL_ID } from '../../../cognito/adminPool'

const adminService = {}

adminService.saveAdmin = async (adminValidated) => {
    try {
        const { email, password, phone } = adminValidated

        const sub = await signUpAPI(NEXT_PUBLIC_ADMIN_USER_POOL_ID, NEXT_PUBLIC_ADMIN_CLIENT_ID, email, password)

        const admin = {
            id: sub,
            email,
            phone
        }

        const errorRepo = await adminRepository.storeAdminAtDynamo(admin)
        if (errorRepo) return errorRepo

        return null
    } catch (error) {
        return { status: 409, message: 'error en el servicio de admin', err: error.message }
    }
}

export default adminService
