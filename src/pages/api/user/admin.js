import adminHandler from '../../../backend/handlers/admin'

const router = async (req, res) => {
    const { method } = req

    switch (method) {
    case 'POST':
        await adminHandler.registerAdmin(req, res)
        break
    default:
        res.status(405).json({
            status: 'error',
            message: 'Method not allowed'
        })
    }
}

export default router
