module.exports = {
	lintOnSave: "warning",
	devServer: {
		proxy: {
			"^/api": {
				target: "http://localhost:3000",
				ws: true,
				changeOrigin: true,
				pathRewrite: { "^/api": "/api" },
			},
		},
	},
};
