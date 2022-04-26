import { signUpAPI } from '../../../cognito/auth'
import usuarioExternoRepository from './repository'
import { NEXT_PUBLIC_USUARIO_EXTERNO_CLIENT_ID, NEXT_PUBLIC_USUARIO_EXTERNO_USER_POOL_ID } from '../../../cognito/usuarioExternoPool'

const usuarioExternoService = {}

usuarioExternoService.saveUsuarioExterno = async (usuarioExternoValidated) => {
    try {
        const { email, password, phone } = usuarioExternoValidated

        const sub = await signUpAPI(NEXT_PUBLIC_USUARIO_EXTERNO_USER_POOL_ID, NEXT_PUBLIC_USUARIO_EXTERNO_CLIENT_ID, email, password)

        const usuarioExterno = {
            id: sub,
            email,
            phone
        }

        const errorRepo = await usuarioExternoRepository.storeUsuarioExternoAtDynamo(usuarioExterno)
        if (errorRepo) return errorRepo

        return null
    } catch (error) {
        return { status: 409, message: 'error en el servicio de usuarioExterno', err: error.message }
    }
}

export default usuarioExternoService
