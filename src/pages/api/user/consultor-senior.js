import consultorSeniorHandler from '../../../backend/handlers/consultorSenior'

const router = async (req, res) => {
    const { method } = req

    switch (method) {
    case 'POST':
        await consultorSeniorHandler.registerConsultorSenior(req, res)
        break
    default:
        res.status(405).json({
            status: 'error',
            message: 'Method not allowed'
        })
    }
}

export default router
