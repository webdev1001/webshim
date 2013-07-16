(function(e,t){"use strict";var i,n,a=t.$,r=e.audio&&e.video,o=!1,s=t.bugs,l="mediaelement-jaris",u=function(){t.ready(l,function(){t.mediaelement.createSWF||(t.mediaelement.loadSwf=!0,t.reTest([l],r))})},c=t.cfg,d=c.mediaelement;if(!d)return t.error("mediaelement wasn't implemented but loaded"),void 0;if(r){var p=document.createElement("video");if(e.videoBuffered="buffered"in p,o="loop"in p,t.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(t.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),t.loader.loadList(["mediaelement-native-fix"])),!d.preferFlash){var f={1:1,2:1},h=function(e){var i,r,o;if(!d.preferFlash&&(a(e.target).is("audio, video")||(o=e.target.parentNode)&&a("source:last",o)[0]==e.target)&&(i=a(e.target).closest("audio, video"))&&!f[r=i.prop("error")]){if(null==r)return t.warn("There was an unspecified error on a mediaelement"),void 0;a(function(){n&&!d.preferFlash?(u(),t.ready("WINDOWLOAD "+l,function(){setTimeout(function(){d.preferFlash||!t.mediaelement.createSWF||i.is(".nonnative-api-active")||(d.preferFlash=!0,document.removeEventListener("error",h,!0),a("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+i.prop("error")))},9)})):document.removeEventListener("error",h,!0)})}};document.addEventListener("error",h,!0),a("audio, video").each(function(){var e=a.prop(this,"error");return e&&!f[e]?(h({target:this}),!1):void 0})}}e.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof a("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(e){s.track=!0}}(),i=e.track&&!s.track,t.register("mediaelement-core",function(e,t,a,s,c){n=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(n?"swf":"no-swf");var p=t.mediaelement;p.parseRtmp=function(e){var i,n,a,r=e.src.split("://"),o=r[1].split("/");for(e.server=r[0]+"://"+o[0]+"/",e.streamId=[],i=1,n=o.length;n>i;i++)a||-1===o[i].indexOf(":")||(o[i]=o[i].split(":")[1],a=!0),a?e.streamId.push(o[i]):e.server+=o[i]+"/";e.streamId.length||t.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(t,i){t=e(t);var n,a={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return a.src?(n=t.attr("data-server"),null!=n&&(a.server=n),n=t.attr("type"),n?(a.type=n,a.container=e.trim(n.split(";")[0])):(i||(i=t[0].nodeName.toLowerCase(),"source"==i&&(i=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),a.server?(a.type=i+"/rtmp",a.container=i+"/rtmp"):(n=p.getTypeForSrc(a.src,i,a),n&&(a.type=n,a.container=n))),n=t.attr("media"),n&&(a.media=n),("audio/rtmp"==a.type||"video/rtmp"==a.type)&&(a.server?a.streamId=a.src:p.parseRtmp(a)),a):a},h=!n&&"postMessage"in a&&r,m=function(){m.loaded||(m.loaded=!0,t.ready("WINDOWLOAD",function(){g(),t.loader.loadList(["track-ui"])}))},v=function(){var i;return function(){!i&&h&&(i=!0,t.loader.loadScript("https://www.youtube.com/player_api"),e(function(){t._polyfill(["mediaelement-yt"])}))}}(),g=function(){n?u():v()};t.addPolyfill("mediaelement-yt",{test:!h,d:["dom-support"]}),p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},p.mimeTypes.source=e.extend({},p.mimeTypes.audio,p.mimeTypes.video),p.getTypeForSrc=function(t,i){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return i+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var n;return e.each(p.mimeTypes[i],function(e,i){return-1!==i.indexOf(t)?(n=e,!1):c}),n},p.srces=function(t,i){if(t=e(t),!i){i=[];var n=t[0].nodeName.toLowerCase(),a=f(t,n);return a.src?i.push(a):e("source",t).each(function(){a=f(this,n),a.src&&i.push(a)}),i}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(i)||(i=[i]),i.forEach(function(i){"string"==typeof i&&(i={src:i}),t.append(e(s.createElement("source")).attr(i))})},e.fn.loadMediaSrc=function(t,i){return this.each(function(){i!==c&&(e(this).removeAttr("poster"),i&&e.attr(this,"poster",i)),p.srces(this,t),e(this).mediaLoad()})},p.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],p.canThirdPlaySrces=function(t,i){var a="";return(n||h)&&(t=e(t),i=i||p.srces(t),e.each(i,function(e,t){return t.container&&t.src&&(n&&-1!=p.swfMimeTypes.indexOf(t.container)||h&&"video/youtube"==t.container)?(a=t,!1):c})),a};var y={};p.canNativePlaySrces=function(t,i){var n="";if(r){t=e(t);var a=(t[0].nodeName||"").toLowerCase(),o=(y[a]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return n;i=i||p.srces(t),e.each(i,function(e,i){return i.type&&o.call(t[0],i.type)?(n=i,!1):c})}return n};var b=/^\s*application\/octet\-stream\s*$/i,w=function(){var t=b.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};p.setError=function(i,n){if(e("source",i).filter(w).length){t.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(i).mediaLoad()}catch(a){}}else n||(n="can't play sources"),e(i).pause().data("mediaerror",n),t.error("mediaelementError: "+n),setTimeout(function(){e(i).data("mediaerror")&&e(i).trigger("mediaerror")},1)};var T=function(){var e;return function(i,a,r){t.ready(n?l:"mediaelement-yt",function(){p.createSWF?p.createSWF(i,a,r):e||(e=!0,g(),T(i,a,r))}),e||!h||p.createSWF||v()}}(),x=function(e,t,i,n,a){var r;i||i!==!1&&t&&"third"==t.isActive?(r=p.canThirdPlaySrces(e,n),r?T(e,r,t):a?p.setError(e,!1):x(e,t,!1,n,!0)):(r=p.canNativePlaySrces(e,n),r?t&&"third"==t.isActive&&p.setActive(e,"html5",t):a?(p.setError(e,!1),t&&"third"==t.isActive&&p.setActive(e,"html5",t)):x(e,t,!0,n,!0))},N=/^(?:embed|object|datalist)$/i,E=function(i,n){var a=t.data(i,"mediaelementBase")||t.data(i,"mediaelementBase",{}),r=p.srces(i),o=i.parentNode;clearTimeout(a.loadTimer),e.data(i,"mediaerror",!1),r.length&&o&&1==o.nodeType&&!N.test(o.nodeName||"")&&(n=n||t.data(i,"mediaelement"),p.sortMedia&&r.sort(p.sortMedia),x(i,n,d.preferFlash||c,r))};p.selectSource=E,e(s).on("ended",function(i){var n=t.data(i.target,"mediaelement");(!o||n&&"html5"!=n.isActive||e.prop(i.target,"loop"))&&setTimeout(function(){!e.prop(i.target,"paused")&&e.prop(i.target,"loop")&&e(i.target).prop("currentTime",0).play()},1)});var A=!1,k=function(){var i=function(){if(t.implement(this,"mediaelement")&&(E(this),r&&(!o||"ActiveXObject"in a))){var i,n,s=this,l=function(){var t=e.prop(s,"buffered");if(t){for(var i="",n=0,a=t.length;a>n;n++)i+=t.end(n);return i}},u=function(){var i=l();i!=n&&(n=i,t.info("needed to trigger progress manually"),e(s).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(n=l()),clearTimeout(i),i=setTimeout(u,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(n=!1),clearTimeout(i)}}),"ActiveXObject"in a&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}};t.ready("dom-support",function(){A=!0,o||t.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(i){var a;a=t.defineNodeNameProperty(i,"load",{prop:{value:function(){var e=t.data(this,"mediaelement");E(this,e),!r||e&&"html5"!=e.isActive||!a.prop._supvalue||a.prop._supvalue.apply(this,arguments)}}}),y[i]=t.defineNodeNameProperty(i,"canPlayType",{prop:{value:function(t){var a="";return r&&y[i].prop._supvalue&&(a=y[i].prop._supvalue.call(this,t),"no"==a&&(a="")),!a&&n&&(t=e.trim((t||"").split(";")[0]),-1!=p.swfMimeTypes.indexOf(t)&&(a="maybe")),a}}})}),t.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,i=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{});clearTimeout(i.loadTimer),i.loadTimer=setTimeout(function(){E(e),e=null},9)}}),t.addReady(function(t,n){var a=e("video, audio",t).add(n.filter("video, audio")).each(i);!m.loaded&&e("track",a).length&&m(),a=null})}),r&&!A&&t.addReady(function(t,i){A||e("video, audio",t).add(i.filter("video, audio")).each(function(){return p.canNativePlaySrces(this)?c:(g(),A=!0,!1)})})};i&&t.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),r?(t.isReady("mediaelement-core",!0),k(),t.ready("WINDOWLOAD mediaelement",g)):t.ready(l,k),t.ready("track",m)})})(Modernizr,webshims);