const refTagger = {
    settings: {
        bibleVersion: "KJV",
        libronixBibleVersion: "DEFAULT",
        addLogosLink: false,
        appendIconToLibLinks: false,
        libronixLinkIcon: "light",
        noSearchClassNames: ["commentList"],
        useTooltip: true,
        noSearchTagNames: ["h1", "h2", "h3", "h4", "h5", "h6"],
        linksOpenNewWindow: true,
        convertHyperlinks: false,
        caseInsensitive: true,
        tagChapters: false
    }
};

(function (d, t) {
    var g = d.createElement(t)
    s = d.getElementsByTagName(t)[0];
    g.src = 'https://api.reftagger.com/v2/reftagger.js';
    s.parentNode.insertBefore(g, s);
}(document, 'script'));