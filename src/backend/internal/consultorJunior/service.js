import { signUpAPI } from '../../../cognito/auth'
import consultorJuniorRepository from './repository'
import { NEXT_PUBLIC_CONSULTOR_JUNIOR_CLIENT_ID, NEXT_PUBLIC_CONSULTOR_JUNIOR_USER_POOL_ID } from '../../../cognito/consultorJuniorPool'

const consultorJuniorService = {}

consultorJuniorService.saveConsultorJunior = async (consultorJuniorValidated) => {
    try {
        const { email, password, phone } = consultorJuniorValidated

        const sub = await signUpAPI(NEXT_PUBLIC_CONSULTOR_JUNIOR_USER_POOL_ID, NEXT_PUBLIC_CONSULTOR_JUNIOR_CLIENT_ID, email, password)

        const consultorJunior = {
            id: sub,
            email,
            phone
        }

        const errorRepo = await consultorJuniorRepository.storeConsultorJuniorAtDynamo(consultorJunior)
        if (errorRepo) return errorRepo

        return null
    } catch (error) {
        return { status: 409, message: 'error en el servicio de consultorJunior', err: error.message }
    }
}

export default consultorJuniorService
