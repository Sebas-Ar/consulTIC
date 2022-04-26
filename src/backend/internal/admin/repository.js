import AWS from 'aws-sdk'

const dynamoDB = new AWS.DynamoDB({ apiVersion: '2012-08-10', region: 'us-east-1' })

const adminRepository = {}

adminRepository.storeAdminAtDynamo = async (admin = {}) => {
    try {
        const { id, email, phone } = admin

        await dynamoDB.putItem({
            TableName: 'consultic',
            Item: {
                type: { S: 'admin' },
                id: { S: id },
                email: { S: email },
                phone: { S: phone }
            }
        }).promise()

        return null
    } catch (error) {
        console.log(error.message)
        return { status: 501, message: 'error en el repository de admin', err: error.message }
    }
}

export default adminRepository
