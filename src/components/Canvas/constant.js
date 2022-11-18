export const SETTING = {
    size: {
        nodeRadius: 5,
        highlightNodeRadius: 6,
        linkStrokeWidth: .3,
        highlightLinkStrokeWidth: 1
    },
    fill: {
        'core': "#2ca02c",
        'spine': "#1f77b4",
        'leaf': "#ff7f0e",
        'server': "#9467bd",
        'virtual': "#9467bd",
        "stroke": "#6c757d",
        highlightLinkStroke: "#000000"
    },
    opacityFill: {
        'core': "#2ca02c80",
        'spine': "#1f77b480",
        'leaf': "#ff7f0e80",
        'server': "#9467bd80",
        'virtual': "#9467bd80",
        'default': "#bcb8b180"
    },


    alarming: {
        node: {
            fill: 'red',
            radius: 15,
            flag: false,//全局开关
        },
        link: {
            stroke: 'red',
            strokeWidth: 4,
            flag: false,//全局开关
        }
    }

}