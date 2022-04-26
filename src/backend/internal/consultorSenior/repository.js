import AWS from 'aws-sdk'

const dynamoDB = new AWS.DynamoDB({ apiVersion: '2012-08-10', region: 'us-east-1' })

const consultorSeniorRepository = {}

consultorSeniorRepository.storeConsultorSeniorAtDynamo = async (consultorSenior = {}) => {
    try {
        const { id, email, phone } = consultorSenior

        await dynamoDB.putItem({
            TableName: 'consultic',
            Item: {
                type: { S: 'consultorSenior' },
                id: { S: id },
                email: { S: email },
                phone: { S: phone }
            }
        }).promise()

        return null
    } catch (error) {
        console.log(error.message)
        return { status: 501, message: 'error en el repository de consultorSenior', err: error.message }
    }
}

export default consultorSeniorRepository
