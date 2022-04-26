import usuarioExternoService from '../internal/usuarioExterno/service'
import { responseError, responseOk } from '../pkg/web/response'
import { validateData } from '../pkg/web/validations'

const usuarioExternoHandler = {}

// verifica los datos del body
usuarioExternoHandler.registerUsuarioExterno = async (req, res) => {
    const { body } = req
    try {
        const datesToValidate = ['email', 'phone', 'password']
        const { dataValidated, errorInValidation } = validateData(datesToValidate, body)
        if (errorInValidation) return responseError(res, errorInValidation)

        const errorService = await usuarioExternoService.saveUsuarioExterno(dataValidated)
        if (errorService) return responseError(res, errorService)

        responseOk(res, 200, 'UsuarioExterno registered successfully :D')
    } catch (error) {
        responseError(res, { status: 200, err: `error en el handler usuarioExterno: ${error.message}` })
    }
}

export default usuarioExternoHandler
