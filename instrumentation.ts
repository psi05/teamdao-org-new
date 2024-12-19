import connectDB from './database/database';

export async function register() {
	return await connectDB();
}
