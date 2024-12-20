/** @type {import('next').NextConfig} */
const nextConfig = {
	staticPageGenerationTimeout: 180,
	reactStrictMode: false,
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
	webpack: (config) => {
		config.externals.push('pino-pretty');
		return config;
	},
};

export default nextConfig;
