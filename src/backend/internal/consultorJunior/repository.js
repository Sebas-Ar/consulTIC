import AWS from 'aws-sdk'

const dynamoDB = new AWS.DynamoDB({ apiVersion: '2012-08-10', region: 'us-east-1' })

const consultorJuniorRepository = {}

consultorJuniorRepository.storeConsultorJuniorAtDynamo = async (consultorJunior = {}) => {
    try {
        const { id, email, phone } = consultorJunior

        await dynamoDB.putItem({
            TableName: 'consultic',
            Item: {
                type: { S: 'consultorJunior' },
                id: { S: id },
                email: { S: email },
                phone: { S: phone }
            }
        }).promise()

        return null
    } catch (error) {
        console.log(error.message)
        return { status: 501, message: 'error en el repository de consultorJunior', err: error.message }
    }
}

export default consultorJuniorRepository
