import consultorJuniorService from '../internal/consultorJunior/service'
import { responseError, responseOk } from '../pkg/web/response'
import { validateData } from '../pkg/web/validations'

const consultorJuniorHandler = {}

// verifica los datos del body
consultorJuniorHandler.registerConsultorJunior = async (req, res) => {
    const { body } = req
    try {
        const datesToValidate = ['email', 'phone', 'password']
        const { dataValidated, errorInValidation } = validateData(datesToValidate, body)
        if (errorInValidation) return responseError(res, errorInValidation)

        const errorService = await consultorJuniorService.saveConsultorJunior(dataValidated)
        if (errorService) return responseError(res, errorService)

        responseOk(res, 200, 'ConsultorJunior registered successfully :D')
    } catch (error) {
        responseError(res, { status: 200, err: `error en el handler consultorJunior: ${error.message}` })
    }
}

export default consultorJuniorHandler
