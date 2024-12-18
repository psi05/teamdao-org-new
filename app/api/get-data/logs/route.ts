import { Log } from '@/models/collections';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const logsData = await Log.find().sort({ _id: 'desc' }).limit(100);
		return NextResponse.json({ logs: logsData });
	} catch (e) {
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
