import { signUpAPI } from '../../../cognito/auth'
import consultorSeniorRepository from './repository'
import { NEXT_PUBLIC_CONSULTOR_SENIOR_CLIENT_ID, NEXT_PUBLIC_CONSULTOR_SENIOR_USER_POOL_ID } from '../../../cognito/consultorSeniorPool'

const consultorSeniorService = {}

consultorSeniorService.saveConsultorSenior = async (consultorSeniorValidated) => {
    try {
        const { email, password, phone } = consultorSeniorValidated

        const sub = await signUpAPI(NEXT_PUBLIC_CONSULTOR_SENIOR_USER_POOL_ID, NEXT_PUBLIC_CONSULTOR_SENIOR_CLIENT_ID, email, password)

        const consultorSenior = {
            id: sub,
            email,
            phone
        }

        const errorRepo = await consultorSeniorRepository.storeConsultorSeniorAtDynamo(consultorSenior)
        if (errorRepo) return errorRepo

        return null
    } catch (error) {
        return { status: 409, message: 'error en el servicio de consultorSenior', err: error.message }
    }
}

export default consultorSeniorService
