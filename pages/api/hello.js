import AWS from 'aws-sdk'

const endpoint = 'http://localhost:8000'
const dynamoDB = new AWS.DynamoDB({ /* endpoint, */ apiVersion: '2012-08-10', region: 'us-east-1' });


const handler = async (req, res) => {

	const { number } = req.body

	if (req.method === 'GET') {

		const resp = await dynamoDB.scan({
			TableName: 'consultic'
		}).promise();

		return res.status(200).json({
			status: 'ok',
			message: 'numero agregado',
			data: resp
		})

	} else if (req.method === 'POST') {

		try {

			await dynamoDB.putItem({
				TableName: 'consultic',
				Item: {
					id: { S: number }
				}
			}).promise();

			return res.status(200).json({
				status: 'ok',
				message: 'numero agregado',
				/* response */
			})

		} catch (error) {

			console.log(error)
			return res.status(500).json({
				status: 'error',
				message: 'Error del servidor, contacte al administrador :\'v'
			})

		}

	} else {

	}


}

export default handler
