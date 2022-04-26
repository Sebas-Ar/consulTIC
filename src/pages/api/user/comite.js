import comiteHandler from '../../../backend/handlers/comite'

const router = async (req, res) => {
    const { method } = req

    switch (method) {
    case 'POST':
        await comiteHandler.registerComite(req, res)
        break
    default:
        res.status(405).json({
            status: 'error',
            message: 'Method not allowed'
        })
    }
}

export default router
