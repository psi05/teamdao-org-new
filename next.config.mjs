/** @type {import('next').NextConfig} */
const nextConfig = {
	staticPageGenerationTimeout: 180,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	experimental: {
		externalDir: true,
		instrumentationHook: true,
	},
};

export default nextConfig;
