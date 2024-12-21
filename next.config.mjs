/** @type {import('next').NextConfig} */
const nextConfig = {
	staticPageGenerationTimeout: 180,
	images: {
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
	webpack: (config) => {
		config.externals.push(
			'pino-pretty' /* add any other modules that might be causing the error */
		);
		return config;
	},
};

export default nextConfig;
