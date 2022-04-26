export const responseOk = (res, status, message) => {
    try {
        res.status(status).json({
            message
        })
    } catch (error) {
        console.log(error)
        throw new Error(`${error.message} At responseOk() in backend/pkg/web/response.js`)
    }
}

export const responseError = (res = {}, error = { status: 400, err: 'error message' }) => {
    try {
        const { status, message, err } = error
        res.status(status).json({
            message,
            err
        })
    } catch (error) {
        throw new Error(`${error.message} At responseError() in backend/pkg/web/response.js`)
    }
}
