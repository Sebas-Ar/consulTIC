import comiteService from '../internal/comite/service'
import { responseError, responseOk } from '../pkg/web/response'
import { validateData } from '../pkg/web/validations'

const comiteHandler = {}

// verifica los datos del body
comiteHandler.registerComite = async (req, res) => {
    const { body } = req
    try {
        const datesToValidate = ['email', 'phone', 'password']
        const { dataValidated, errorInValidation } = validateData(datesToValidate, body)
        if (errorInValidation) return responseError(res, errorInValidation)

        const errorService = await comiteService.saveComite(dataValidated)
        if (errorService) return responseError(res, errorService)

        responseOk(res, 200, 'Comite registered successfully :D')
    } catch (error) {
        responseError(res, { status: 200, err: `error en el handler comite: ${error.message}` })
    }
}

export default comiteHandler
