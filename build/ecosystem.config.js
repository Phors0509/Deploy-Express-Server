module.exports = {
    apps: [
        {
            name: "product-service",
            script: "server.js",
            watch: true,
            env: {
                NODE_ENV: "production",
            },
            env_production: {
                NODE_ENV: "production",
            },
        },
    ],
};
