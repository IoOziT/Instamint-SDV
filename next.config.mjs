/** @type {import('next').NextConfig} */
const nextConfig = {
	// serverComponentsExternalPackages: ["knex", "objection"],
	experimental: {
		serverComponentsExternalPackages: ["knex", "objection"],
		webpackBuildWorker: true,
	},
	webpack: config => {
		config.resolve.fallback = {
			tty: "tty-browserify",
			path: "path-browserify",
			process: false,
		};
		config.externals = [...config.externals, "bcryptjs"];

		return config;
	},
};

export default nextConfig;
