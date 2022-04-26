import consultorJuniorHandler from '../../../backend/handlers/consultorJunior'

const router = async (req, res) => {
    const { method } = req

    switch (method) {
    case 'POST':
        await consultorJuniorHandler.registerConsultorJunior(req, res)
        break
    default:
        res.status(405).json({
            status: 'error',
            message: 'Method not allowed'
        })
    }
}

export default router
