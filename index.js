module.exports = {
    hooks: {
        config: function (config) {
            config.styles = config.styles || config.pluginsConfig["theme-default-fa5"].styles;

            return config;
        },
    },
};
