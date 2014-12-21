
options = {
    width: 150,
    height: 150
};

getSvgStr = function (icon, options) {
    var $svg = $(icon.svg.substr(icon.svg.indexOf('<svg')));
    var container = document.createElement('div');
    container.appendChild($svg[0]);
    var innerHTML = container.innerHTML;
    innerHTML = innerHTML.substr(innerHTML.indexOf('>') + 1);
    innerHTML = innerHTML.substr(0, innerHTML.lastIndexOf('<'));

    var width = options.width;
    var height = options.height;
    var svgBody = innerHTML.split('\n').join('');
    var svgStart = '<svg ' +
        'xmlns="http://www.w3.org/2000/svg" ' +
        'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
        'version="1.0" ' +
        'x="0px" y="0px" ' +
        //'preserveAspectRatio="xMinYMin meet" ' +
        //'width="' + width + '" ' +
        //'height="' + height + '" ' +
        'viewBox="' + $svg[0].getAttribute('viewBox') + '" ' +
        //'viewBox="0 0 320 320" ' +
        'style="' + $svg[0].getAttribute('style') + '" ' +
        (options.className ? 'class="icon ' + options.className + '" ' : '') +
        (options.color ? 'fill="' + options.color + '" ' : '') +
        '>';
    var svgEnd = '</svg>';
    return svgStart + svgBody + svgEnd;
};

var icons = $('#icons');
var timer = $('#timer');
var time = 0;
var iconsAmount = 1000;
var i;
$('#btn').on('click', function () {
    time = (new Date()).getTime();
    for (i = 0; i < iconsAmount; i++) {
        icons.append($(icon.svg));
        icons.append($(icon2.svg));
    }
    timer.text(iconsAmount * 2 + ' icons, ' + ((new Date()).getTime() - time) + 'ms');
});


var iconApp = angular.module('IconApp', []);

iconApp.controller('IconCtrl', function ($scope) {

    $scope.range_input = 400;

    icon = {
        svg: '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width=32 height=32 viewBox="0 0 32 32" style="enable-background:new 0 0 25.731 25.657;" xml:space="preserve"><path d="M19.418,13.031c-3.486,0-6.313,2.826-6.313,6.313s2.826,6.313,6.313,6.313s6.313-2.826,6.313-6.313S22.904,13.031,19.418,13.031z M22.901,20.241h-6.978v-1.793h6.978V20.241z M11.606,19.343c0,2.074,0.814,3.954,2.133,5.354c-1.073,0.078-2.187,0.111-3.289,0.111C5.427,24.808,0,24.162,0,21.32c0-0.558,0-0.218,0-0.781c0-2.086,3.704-4.199,6.86-5.357c0.229-0.086,1.318-0.688,0.709-2.311c-1.564-1.623-2.588-4.25-2.588-6.836C4.981,2.076,7.402,0,10.419,0c3.014,0,5.452,2.076,5.452,6.035c0,2.576-1.031,5.193-2.586,6.818h0.008c-0.273,0.843-0.214,1.382-0.063,1.734C12.215,15.905,11.606,17.552,11.606,19.343z"/></svg>'
    };

    icon2 = {
        svg: '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width=32 height=32 viewBox="0 0 32 32" style="enable-background:new 0 0 26 26;" xml:space="preserve"><path d="M25.898,13.822c-5.769,4.304-7.057,9.267-8.216,11.561c-0.33,0.654-1.069,0.656-1.507,0.109c-0.426-0.533-1.179-2.21-4.063-3.521c-1.119-0.508-0.563-1.535-0.563-1.535l0.773-1.127v0c0,0,0.474-0.766,1.783-0.239c1.503,0.607,2.814,2.6,2.814,2.6S19.038,16.312,25.898,13.822z M9.564,21.96c-0.396-1.18,0.073-2.194,0.227-2.478 c0.033-0.061,0.069-0.121,0.109-0.178l0.758-1.106c0.427-0.646,1.319-1.313,2.599-1.313c0.515,0,1.052,0.111,1.595,0.33c0.641,0.259,1.229,0.656,1.739,1.09c0.298-0.408,0.66-0.849,1.061-1.299c-1.159-0.666-2.493-1.24-3.767-1.668c-0.151-0.051-1.105-0.488-0.51-2.328h-0.008c1.555-1.625,2.586-4.242,2.586-6.818c0-3.959-2.438-6.035-5.452-6.035 c-3.017,0-5.438,2.076-5.438,6.035c0,2.586,1.024,5.213,2.588,6.836c0.609,1.623-0.48,2.225-0.709,2.311c-3.156,1.158-6.86,3.271-6.86,5.357c0,0.563,0,0.223,0,0.781c0,2.842,5.427,3.488,10.45,3.488c0.85,0,1.708-0.02,2.549-0.064 c-0.436-0.369-1.009-0.751-1.798-1.11C10.206,23.302,9.754,22.525,9.564,21.96z"/></svg>'
    };

    //var style = "<style> \
    //        svg * { \
    //            transition: fill .1s ease-out, opacity .1s ease-out; \
    //            background-size: cover; \
    //            background-repeat: no-repeat; \
    //        } \
    //        @media all and (min-width: 100px) and (max-width: 250px) { \
    //            #group_0 { \
    //                display: none; \
    //            } \
    //            #group_1 { \
    //                display: none; \
    //            } \
    //        } \
    //        @media all and (min-width: 251px) and (max-width: 350px) { \
    //            #group_0 { \
    //                display: none; \
    //            } \
    //            #group_1 { \
    //                display: none; \
    //            } \
    //        } \
    //    </style>";

    var style = '<style> ' +
            'svg * { ' +
                'transition: fill .1s ease-out, opacity .1s ease-out; ' +
                'background-size: cover; ' +
                'background-repeat: no-repeat; ' +
            '} ' +
            '@media all and (min-width: 100px) and (max-width: 250px) { ' +
                '#group_0 { ' +
                    'display: none; ' +
                '} ' +
                '#group_1 { ' +
                    'display: none; ' +
                '} ' +
            '} ' +
            '@media all and (min-width: 251px) and (max-width: 350px) { ' +
                '#group_0 { ' +
                    'display: none; ' +
                '} ' +
                '#group_1 { ' +
                    'display: none; ' +
                '} ' +
            '} ' +
        '</style>';



    icon_svg = getSvgStr(icon, options);
    icon_svg_xml = $.parseXML(icon_svg);

    icon2_svg = getSvgStr(icon2, options);
    icon2_svg_xml = $.parseXML(icon2_svg);

    icons = [ icon_svg_xml, icon2_svg_xml ];
    //console.log(icon_svg_xml);
    //console.log($(icon_svg_xml).children().eq(0));
    //console.log($(icon_svg_xml).children().html());
    //console.log(new XMLSerializer().serializeToString($(icon_svg_xml).children()));

    //var wrapped_child = '<g>' + $(icon_svg_xml).children().html() + '</g>';
    //console.log(wrapped_child);
    //var all_icons = '';
    //empty_svg = $(icons[0]).find('svg').empty();
    //var $empty_svg = $(icons[0]).find('svg').empty();
    //$empty_svg
    var empty_svg = icons[0].cloneNode(true);
    $(empty_svg).find('svg').empty();
    $(empty_svg).find('svg').append(style);
    //console.log($(empty_svg).find('svg'));
    angular.forEach(icons, function(value, key){
        var wrapped_child = '<g id="group_' + key + '">' + $(value).children().html() + '</g>';
        //var wrapped_child = $(value).children().html();
        //console.log($.parseXML(wrapped_child));
        //wrapped_child_xml = $.parseXML(wrapped_child);
        //$(wrapped_child_xml).appendTo($(empty_svg).find('svg'));
        $(empty_svg).find('svg').append($(wrapped_child));
        //console.log(empty_svg);

    });

    var icon_group_str = new XMLSerializer().serializeToString(empty_svg);

    //console.log($scope.icons[0]);
    //$('#res-icon').append($scope.icons[0].svg).html();
    //$('#res-icon').append('');
    var base64_icons = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1LjczMSAyNS42NTc7Ij4gICAgPHN0eWxlPiAgICAgICAgc3ZnICogeyAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAuMXMgZWFzZS1vdXQsIG9wYWNpdHkgLjFzIGVhc2Utb3V0OyAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICAgICAgICB9ICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDI1MHB4KSB7ICAgICAgICAgICAgI2dyb3VwXzAgeyAgICAgICAgICAgIG9wYWNpdHk6IDE7ICAgICAgICAgICAgfSAgICAgICAgICAgICNncm91cF8xIHsgICAgICAgICAgICBvcGFjaXR5OiAwOyAgICAgICAgICAgIH0gICAgICAgIH0gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDI1MXB4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHsgICAgICAgICAgICAjZ3JvdXBfMCB7ICAgICAgICAgICAgb3BhY2l0eTogMDsgICAgICAgICAgICB9ICAgICAgICAgICAgI2dyb3VwXzEgeyAgICAgICAgICAgIG9wYWNpdHk6IDE7ICAgICAgICAgICAgfSAgICAgICAgfSAgICA8L3N0eWxlPiAgICA8ZyBpZD0iZ3JvdXBfMCI+ICAgIDxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTE5LjQxOCwxMy4wMzFjLTMuNDg2LDAtNi4zMTMsMi44MjYtNi4zMTMsNi4zMTNzMi44MjYsNi4zMTMsNi4zMTMsNi4zMTNzNi4zMTMtMi44MjYsNi4zMTMtNi4zMTNTMjIuOTA0LDEzLjAzMSwxOS40MTgsMTMuMDMxeiBNMjIuOTAxLDIwLjI0MWgtNi45Nzh2LTEuNzkzaDYuOTc4VjIwLjI0MXogTTExLjYwNiwxOS4zNDNjMCwyLjA3NCwwLjgxNCwzLjk1NCwyLjEzMyw1LjM1NGMtMS4wNzMsMC4wNzgtMi4xODcsMC4xMTEtMy4yODksMC4xMTFDNS40MjcsMjQuODA4LDAsMjQuMTYyLDAsMjEuMzJjMC0wLjU1OCwwLTAuMjE4LDAtMC43ODFjMC0yLjA4NiwzLjcwNC00LjE5OSw2Ljg2LTUuMzU3YzAuMjI5LTAuMDg2LDEuMzE4LTAuNjg4LDAuNzA5LTIuMzExYy0xLjU2NC0xLjYyMy0yLjU4OC00LjI1LTIuNTg4LTYuODM2QzQuOTgxLDIuMDc2LDcuNDAyLDAsMTAuNDE5LDBjMy4wMTQsMCw1LjQ1MiwyLjA3Niw1LjQ1Miw2LjAzNWMwLDIuNTc2LTEuMDMxLDUuMTkzLTIuNTg2LDYuODE4aDAuMDA4Yy0wLjI3MywwLjg0My0wLjIxNCwxLjM4Mi0wLjA2MywxLjczNEMxMi4yMTUsMTUuOTA1LDExLjYwNiwxNy41NTIsMTEuNjA2LDE5LjM0M3oiPjwvcGF0aD48L2c+ICAgIDxnIGlkPSJncm91cF8xIj48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0yNS44OTgsMTMuODIyYy01Ljc2OSw0LjMwNC03LjA1Nyw5LjI2Ny04LjIxNiwxMS41NjFjLTAuMzMsMC42NTQtMS4wNjksMC42NTYtMS41MDcsMC4xMDljLTAuNDI2LTAuNTMzLTEuMTc5LTIuMjEtNC4wNjMtMy41MjFjLTEuMTE5LTAuNTA4LTAuNTYzLTEuNTM1LTAuNTYzLTEuNTM1bDAuNzczLTEuMTI3djBjMCwwLDAuNDc0LTAuNzY2LDEuNzgzLTAuMjM5YzEuNTAzLDAuNjA3LDIuODE0LDIuNiwyLjgxNCwyLjZTMTkuMDM4LDE2LjMxMiwyNS44OTgsMTMuODIyeiBNOS41NjQsMjEuOTZjLTAuMzk2LTEuMTgsMC4wNzMtMi4xOTQsMC4yMjctMi40NzggYzAuMDMzLTAuMDYxLDAuMDY5LTAuMTIxLDAuMTA5LTAuMTc4bDAuNzU4LTEuMTA2YzAuNDI3LTAuNjQ2LDEuMzE5LTEuMzEzLDIuNTk5LTEuMzEzYzAuNTE1LDAsMS4wNTIsMC4xMTEsMS41OTUsMC4zM2MwLjY0MSwwLjI1OSwxLjIyOSwwLjY1NiwxLjczOSwxLjA5YzAuMjk4LTAuNDA4LDAuNjYtMC44NDksMS4wNjEtMS4yOTljLTEuMTU5LTAuNjY2LTIuNDkzLTEuMjQtMy43NjctMS42NjhjLTAuMTUxLTAuMDUxLTEuMTA1LTAuNDg4LTAuNTEtMi4zMjhoLTAuMDA4YzEuNTU1LTEuNjI1LDIuNTg2LTQuMjQyLDIuNTg2LTYuODE4YzAtMy45NTktMi40MzgtNi4wMzUtNS40NTItNi4wMzUgYy0zLjAxNywwLTUuNDM4LDIuMDc2LTUuNDM4LDYuMDM1YzAsMi41ODYsMS4wMjQsNS4yMTMsMi41ODgsNi44MzZjMC42MDksMS42MjMtMC40OCwyLjIyNS0wLjcwOSwyLjMxMWMtMy4xNTYsMS4xNTgtNi44NiwzLjI3MS02Ljg2LDUuMzU3YzAsMC41NjMsMCwwLjIyMywwLDAuNzgxYzAsMi44NDIsNS40MjcsMy40ODgsMTAuNDUsMy40ODhjMC44NSwwLDEuNzA4LTAuMDIsMi41NDktMC4wNjQgYy0wLjQzNi0wLjM2OS0xLjAwOS0wLjc1MS0xLjc5OC0xLjExQzEwLjIwNiwyMy4zMDIsOS43NTQsMjIuNTI1LDkuNTY0LDIxLjk2eiI+PC9wYXRoPjwvZz4gICAgPC9zdmc+';

    $('#res-icon-img').attr('src', base64_icons);

});
