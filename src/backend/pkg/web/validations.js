
// la funcion valida cada uno de los datos requeridos
// en datsToValidate presentes en el body, los extrae de
// este y devuelve u
export const validateData = (datesToValidate = [''], body = {}) => {
    let keyError
    // verifica que existan todos los datos a validar
    const error = datesToValidate.some(key => {
        keyError = key
        return !body[key]
    })
    if (error) {
        return {
            errorInValidation: {
                status: 400,
                message: `key: '${keyError}' is required in body`,
                err: `error: ${keyError} dosn't exist`
            },
            dataValidated: null
        }
    }

    // guarda las key verificadas en un nuevo objeto que sera retornado
    const dataValidated = {}
    datesToValidate.forEach(key => { dataValidated[key] = body[key] })

    return {
        dataValidated,
        errorInValidation: null
    }
}
