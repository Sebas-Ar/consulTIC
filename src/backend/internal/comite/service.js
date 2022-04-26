import { signUpAPI } from '../../../cognito/auth'
import comiteRepository from './repository'
import { NEXT_PUBLIC_COMITE_CLIENT_ID, NEXT_PUBLIC_COMITE_USER_POOL_ID } from '../../../cognito/comitePool'

const comiteService = {}

comiteService.saveComite = async (comiteValidated) => {
    try {
        const { email, password, phone } = comiteValidated

        const sub = await signUpAPI(NEXT_PUBLIC_COMITE_USER_POOL_ID, NEXT_PUBLIC_COMITE_CLIENT_ID, email, password)

        const comite = {
            id: sub,
            email,
            phone
        }

        const errorRepo = await comiteRepository.storeComiteAtDynamo(comite)
        if (errorRepo) return errorRepo

        return null
    } catch (error) {
        return { status: 409, message: 'error en el servicio de comite', err: error.message }
    }
}

export default comiteService
