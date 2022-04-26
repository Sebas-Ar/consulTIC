import AWS from 'aws-sdk'

const dynamoDB = new AWS.DynamoDB({ apiVersion: '2012-08-10', region: 'us-east-1' })

const usuarioExternoRepository = {}

usuarioExternoRepository.storeUsuarioExternoAtDynamo = async (usuarioExterno = {}) => {
    try {
        const { id, email, phone } = usuarioExterno

        await dynamoDB.putItem({
            TableName: 'consultic',
            Item: {
                type: { S: 'usuarioExterno' },
                id: { S: id },
                email: { S: email },
                phone: { S: phone }
            }
        }).promise()

        return null
    } catch (error) {
        console.log(error.message)
        return { status: 501, message: 'error en el repository de usuarioExterno', err: error.message }
    }
}

export default usuarioExternoRepository
