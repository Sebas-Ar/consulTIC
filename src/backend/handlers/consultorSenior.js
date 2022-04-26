import consultorSeniorService from '../internal/consultorSenior/service'
import { responseError, responseOk } from '../pkg/web/response'
import { validateData } from '../pkg/web/validations'

const consultorSeniorHandler = {}

// verifica los datos del body
consultorSeniorHandler.registerConsultorSenior = async (req, res) => {
    const { body } = req
    try {
        const datesToValidate = ['email', 'phone', 'password']
        const { dataValidated, errorInValidation } = validateData(datesToValidate, body)
        if (errorInValidation) return responseError(res, errorInValidation)

        const errorService = await consultorSeniorService.saveConsultorSenior(dataValidated)
        if (errorService) return responseError(res, errorService)

        responseOk(res, 200, 'ConsultorSenior registered successfully :D')
    } catch (error) {
        responseError(res, { status: 200, err: `error en el handler consultorSenior: ${error.message}` })
    }
}

export default consultorSeniorHandler
