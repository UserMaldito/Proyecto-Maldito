(function(d, t, e, m){
    
    // Async Rating-Widget initialization.
    window.RW_Async_Init = function(){
                
        RW.init({
            huid: "496224",
            uid: "2995004622cf5730f3c0e024080dfec1",
            source: "website",
            options: {
                "advanced": {
                    "font": {
                        "hover": {
                            "color": "#B7D086"
                        },
                        "bold": true,
                        "italic": true,
                        "color": "#B7D086",
                        "type": "\"Comic Sans MS\""
                    },
                    "text": {
                        "rateThis": "Rate Me"
                    }
                },
                "label": {
                    "background": "#427E53"
                },
                "style": "oxygen1_green",
                "isDummy": false
            } 
        });
        RW.render();
    };
        // Append Rating-Widget JavaScript library.
    var rw, s = d.getElementsByTagName(e)[0], id = "rw-js",
        l = d.location, ck = "Y" + t.getFullYear() + 
        "M" + t.getMonth() + "D" + t.getDate(), p = l.protocol,
        f = ((l.search.indexOf("DBG=") > -1) ? "" : ".min"),
        a = ("https:" == p ? "secure." + m + "js/" : "js." + m);
    if (d.getElementById(id)) return;              
    rw = d.createElement(e);
    rw.id = id; rw.async = true; rw.type = "text/javascript";
    rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
    s.parentNode.insertBefore(rw, s);
    }(document, new Date(), "script", "rating-widget.com/"));