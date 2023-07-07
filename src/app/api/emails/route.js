
import {
	DynamoDBClient,
	PutItemCommand,
	GetItemCommand,
} from '@aws-sdk/client-dynamodb';
import {NextResponse} from "next/server";

const client = new DynamoDBClient({});

export   async function GET(request  ) {
	const { searchParams } = new URL(request.url)
	const email = searchParams.get('email')
		console.log(email)
		const { Item } = await client.send(

			new GetItemCommand({
				TableName: process.env.TABLE_NAME,
				Key: { 	 email : { S: email } 	}
			})
		);

	return NextResponse.json({ Item })

}
export   async function POST(request  ) {
	const body = await request.json()

		const { email, text } =body;

		await client.send(
			new PutItemCommand({
				TableName: process.env.TABLE_NAME,
				Item: {
					'email': { S: email },
					'text': { S: text },
					'date':{S:new Date()}
				}
			})
		);

	return NextResponse.json("good")

}
