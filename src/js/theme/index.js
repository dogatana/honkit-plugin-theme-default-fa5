var dropdown = require("./dropdown");
var keyboard = require("./keyboard");
var navigation = require("./navigation");
var sidebar = require("./sidebar");
var toolbar = require("./toolbar");

var gitbook = window.gitbook;

function getIconClass() {
    const config = gitbook.state && gitbook.state.config && gitbook.state.config.pluginsConfig;
    const name = "theme-default-fa5";
    if (config[name] && config[name].iconClass) {
        return config[name].iconClass;
    }
    return "fas fa-bars";
}

function init() {
    // Init sidebar
    sidebar.init();

    // Init keyboard
    keyboard.init();

    // Bind dropdown
    dropdown.init();

    // Init navigation
    navigation.init();

    // Add action to toggle sidebar
    toolbar.createButton({
        index: 0,
        icon: getIconClass(),
        onClick: function (e) {
            e.preventDefault();
            sidebar.toggle();
        },
    });
}

gitbook.events.on("start", init);

gitbook.keyboard = keyboard;
gitbook.navigation = navigation;
gitbook.sidebar = sidebar;
gitbook.toolbar = toolbar;
