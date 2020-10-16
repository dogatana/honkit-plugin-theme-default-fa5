module.exports = {
    hooks: {
        config: function (config) {
            if (config.styles) {
                return config;
            }

            const name = "theme-default-fa5";
            if (config.pluginsConfig && config.pluginsConfig[name] && config.pluginsConfig[name].styles) {
                config.style = config.pluginsConfig[name].styles;
            }
            return config;
        },
    },
};
