var _eeue56$elm_html_in_elm$Native_HtmlAsJson = (function() {
    return {
        toJson: function(html) {
            return html;
        },
        eventDecoder: function (event) {
            return event.decoder;
        },
        eventHandler: F2(function(eventName, html) {
            return html.facts.EVENT[eventName];
        }),
        taggerFunction: function(tagger) {
            return tagger;
        }
    };
})();
