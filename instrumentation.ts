import connectDB from './config/db';

export async function register() {
	return await connectDB();
}
