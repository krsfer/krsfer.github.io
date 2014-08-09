// while sleep_until_modified.sh /home/krs/workspace/SiteScanHibernate/WebContent/buzz.js; do cp /home/krs/workspace/SiteScanHibernate/WebContent/buzz.js /home/krs/glassfish3/glassfish/domains/zen/eclipseApps/SiteScanHibernate/buzz.js; done

var timeout;

var wrknot = function(what, whatLen, ismethod1) {
    var count = 0;
    $('span.matches').each(function() {
        var ctx = $(this);
        var matches = ctx.text().replace("[", "").replace("]", "").trim().split(", ");

        if (ismethod1) { // indexOf fails when string contains a space!!
            matches.forEach(function(elem) {
                var found = false;
                var elemLen = elem.length;
                if (whatLen === elemLen) {
                    var i = 0;
                    while ((elem.charAt(i) === what.charAt(i)) && (i < elemLen)) {
                        found = true;
                        ++i;
                    }
                }

                if (found === true) {
                    count++;
                    ctx.parent().find(".enum").html(count.toString().concat("."));
                    ctx.parent().hide();
                }
            });
        } else {
            if (matches.indexOf(what) > -1) {
                count++;
                ctx.parent().find(".enum").html(count.toString().concat("."));
                ctx.parent().hide();
            }
        }
    });

    $('#counter').html(count.toString());

    // console.log("animating2");
    $('.act').css('cursor', 'default');
    $('#counter').css({
        opacity : 0.3,
        fontSize : "10em"
    });
    $("#counter").animate({
        opacity : 1,
        fontSize : "1em"
    }, 500);
};

var wrk = function(what, whatLen, ismethod1) {
    var count = 0;
    $('span.matches').each(function() {
        var ctx = $(this);
        var matches = ctx.text().replace("[", "").replace("]", "").trim().split(", ");

        if (ismethod1) { // indexOf fails when string contains a space!!
            matches.forEach(function(elem) {
                var found = false;
                var elemLen = elem.length;
                if (whatLen === elemLen) {
                    var i = 0;
                    while ((elem.charAt(i) === what.charAt(i)) && (i < elemLen)) {
                        found = true;
                        ++i;
                    }
                }

                if (found === true) {
                    count++;
                    ctx.parent().find(".enum").html(count.toString().concat("."));
                    ctx.parent().show();
                } else {
                    ctx.parent().hide();
                }

            });
        } else {
            if (matches.indexOf(what) > -1) {
                count++;
                ctx.parent().find(".enum").html(count.toString().concat("."));
                ctx.parent().show();
            } else {
                ctx.parent().hide();
            }
        }
    });

    $('#counter').html(count.toString());

    // console.log("animating2");
    $('.act').css('cursor', 'default');
    $('#counter').css({
        opacity : 0.3,
        fontSize : "10em"
    });
    $("#counter").animate({
        opacity : 1,
        fontSize : "1em"
    }, 500);
};

$(document).ready(function() {
    console.log("Hello world");

    var pathArray = window.location.pathname.split('/');
    var pattern = /^buzz$/;

    $('#counter').html($('.entry').length.toString());

    // console.log("animating1");
    $('.act').css('cursor', 'default');
    $('#counter').css({
        opacity : 0.3,
        fontSize : "10em"
    });
    $("#counter").animate({
        opacity : 1,
        fontSize : "1em"
    }, 500);

    $('#actionners a').on('click', function(e) {
        console.log("e = " + e);
        $('#resetactionners a').html("&#x25E9;"); // ◪ SQUARE WITH LOWER RIGHT DIAGONAL HALF BLACK
        e.preventDefault();
        var what = $(this).text().replace("&nbsp;", " ").trim(); // what to hide. Filter to apply to each entry
        var whatLen = what.length;
        console.log(what + " >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        var divcount = $('div.entry').length;

        $('div.entry').each(function() {
            wrk(what, whatLen, true);
        });

        if (divcount === $('div.entry').filter(":hidden").size()) { // The previous routine didn't work! Why?? So try another method
            console.log("Other routine");
            $('div.entry').each(function() {
                wrk(what, whatLen, false);
            });
        }

    });

    $('#actionners2 a').on('click', function(e) {
        console.log("e = " + e);
        $('#resetactionners a').html("&#x25E9;"); // ◪ SQUARE WITH LOWER RIGHT DIAGONAL HALF BLACK
        e.preventDefault();
        var what = $(this).text().replace("&nbsp;", " ").trim(); // what to hide. Filter to apply to each entry
        var whatLen = what.length;
        console.log(what + " ##############################################");
        var divcount = $('div.entry').length;

        $('div.entry').each(function() {
            wrk(what, whatLen, true);
        });

        if (divcount === $('div.entry').filter(":hidden").size()) { // The previous routine didn't work! Why?? So try another method
            console.log("Other routine");
            $('div.entry').each(function() {
                wrk(what, whatLen, false);
            });
        }

    });

    $('#resetactionners a').on('click', function(e) {
        $('#resetactionners a').html("&#x25A3;"); // ▣ WHITE SQUARE CONTAINING BLACK SMALL SQUARE
        e.preventDefault();
        var count = 0;
        $('div.entry').each(function() {
            count++;
            $(this).find(".enum").html(count.toString().concat("."));
            $(this).show();
        });
        $('#counter').html(count.toString());
        console.log("animating3");
        $('#counter').css({
            opacity : 0.3,
            fontSize : "10em"
        });
        $("#counter").animate({
            opacity : 1,
            fontSize : "1em"
        }, 500);

    });

    $(function() {
        $("#dialog").dialog({
            autoOpen : false,
            show : {
                effect : "blind",
                duration : 100
            },
            hide : {
                effect : "explode",
                duration : 200
            }
        });
        $("#dialog").dialog("option", "width", "90%");

        $("#opener").click(function() {
            $("#dialog").dialog("open");
        });
    });

    $('.spreedit').click(function(e) {
        console.log("1:");
        console.log(this);
        console.log("2:");
        console.log($(this));
        console.log("3:");
        console.log($(this).parent());
        console.log("4:");
        console.log($(this).parent().parent());
        console.log("5:");
        console.log($(this).parent().parent().siblings('.description'));
        $(this).parent().parent().siblings('.description').selectText();
        spreed();
    });

    if (pathArray.length > 2 || !pattern.test(pathArray[1])) {
        clearTimeout(timeout);
        repeatloop();
    } else {
        document.getElementById("nextdltimeinfo").innerHTML = "";
    }

});

$(window).load(function() {
    $("#filters").sticky({
        topSpacing : 1
    });
});

function repeatloop() {
    var dltime = document.getElementById("dltime");
    var nextdltime = document.getElementById("nextdltime");

    if (dltime != null && nextdltime != null) {
        document.getElementById("elapsed").innerHTML = calctime(document.getElementById("dltime").innerHTML) + " ago.";
        document.getElementById("projected").innerHTML = calctime(document.getElementById("nextdltime").innerHTML) + " from now.";
        timeout = setTimeout("repeatloop()", 2000); /*
                                                     * repeat every n milliseconds
                                                     */
    }

}

function calctime(unix_timestamp) {
    var date = new Date(unix_timestamp), now = new Date();
    var difference = Math.abs(date - now);
    var hours = Math.floor(difference / 36e5), minutes = Math.floor(difference % 36e5 / 60000), seconds = Math.floor(difference % 60000 / 1000);

    return maybePlural('hour', hours) + maybePlural('minute', minutes) + 'and ' + maybePlural('second', seconds);
}

function maybePlural(noun, n) {
    var prefix = n < 10 ? '0' : '';
    return prefix + n + ' ' + noun + (n == 1 ? '&emsp;' : 's ');
}

function log(msg) {
    setTimeout(function() {
        throw new Error(msg);
    }, 0);
}

jQuery.fn.selectText = function() {
    var doc = document, element = this[0], range, selection;

    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
};

function clearSelection() {
    var sel = window.getSelection ? window.getSelection() : document.selection;
    if (sel) {
        if (sel.removeAllRanges) {
            sel.removeAllRanges();
        } else if (sel.empty) {
            sel.empty();
        }
    }
}

function collapseSelectionToStart() {
    var sel, range;
    if (window.getSelection) {
        window.getSelection().collapseToStart();
    } else if ((sel = document.selection) && sel.type == "Text") {
        range = sel.createRange();
        range.collapse(true);
        range.select();
    }
}

function spreed() {
    var sel = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text;
    sel = encodeURIComponent(sel + '');
    sel = sel.replace(/'/g, '_*_');
    newdoc = open().document;
    // newdoc.write("<BODY><FORM ACTION='http://www.spreeder.com/' METHOD='POST'><INPUT TYPE='hidden' NAME='passage' VALUE='" + sel + "'></FORM></BODY>");
    newdoc.write("<body><form action='http://artiklur.com/' method='POST'><input type='hidden' name='text' value='" + sel + "'></form></body>");
    collapseSelectionToStart();
    newdoc.forms[0].submit();
}
