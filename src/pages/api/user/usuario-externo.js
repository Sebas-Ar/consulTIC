import usuarioExternoHandler from '../../../backend/handlers/usuarioExterno'

const router = async (req, res) => {
    const { method } = req

    switch (method) {
    case 'POST':
        await usuarioExternoHandler.registerUsuarioExterno(req, res)
        break
    default:
        res.status(405).json({
            status: 'error',
            message: 'Method not allowed'
        })
    }
}

export default router
