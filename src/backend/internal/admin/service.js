import { signUpAdmin } from '../../../cognito/auth'
import adminRepository from './repository'

const adminService = {}

adminService.saveAdmin = async (adminValidated) => {
    try {
        const { email, password, phone } = adminValidated

        const sub = await signUpAdmin(email, password)

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
