import adminService from '../internal/admin/service'
import { responseError, responseOk } from '../pkg/web/response'
import { validateData } from "../pkg/web/validations"

const adminHandler = {}

// verifica los datos del body
adminHandler.registerAdmin = async (req, res) => {
    const { body } = req
    try {
        const datesToValidate = ['email', 'phone', 'password']
        const { dataValidated, errorInValidation } = validateData(datesToValidate, body)
        if (errorInValidation) return responseError(res, errorInValidation)
        
        const errorService = await adminService.saveAdmin(dataValidated)
        if (errorService) return responseError(res, errorService)

        responseOk(res, 200, 'Admin registered successfully :D')
    } catch (error) {
        responseError(res, {status: 200, err: `error en el handler admin: ${error.message}`})
    }
}

export default adminHandler
