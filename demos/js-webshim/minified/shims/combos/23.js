var swfmini=function(){function e(){if(!C){try{var e=T.getElementsByTagName("body")[0].appendChild(d("span"));e.parentNode.removeChild(e)}catch(t){return}C=!0;for(var n=k.length,i=0;n>i;i++)k[i]()}}function t(e){C?e():k[k.length]=e}function n(){}function i(){N&&a()}function a(){var e=T.getElementsByTagName("body")[0],t=d(m);t.setAttribute("type",b);var n=e.appendChild(t);if(n){var i=0;(function(){if(typeof n.GetVariable!=h){var a=n.GetVariable("$version");a&&(a=a.split(" ")[1].split(","),D.pv=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)])}else if(10>i)return i++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),n=null})()}}function r(e){var t=null,n=c(e);if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=h)t=n;else{var i=n.getElementsByTagName(m)[0];i&&(t=i)}return t}function o(e,t,n){var i,a=c(n);if(D.wk&&312>D.wk)return i;if(a)if(typeof e.id==h&&(e.id=n),D.ie&&D.win){var r="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?r+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(r+=" "+o+'="'+e[o]+'"'));var l="";for(var u in t)t[u]!=Object.prototype[u]&&(l+='<param name="'+u+'" value="'+t[u]+'" />');a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+l+"</object>",E[E.length]=e.id,i=c(e.id)}else{var p=d(m);p.setAttribute("type",b);for(var f in e)e[f]!=Object.prototype[f]&&("styleclass"==f.toLowerCase()?p.setAttribute("class",e[f]):"classid"!=f.toLowerCase()&&p.setAttribute(f,e[f]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&s(p,v,t[v]);a.parentNode.replaceChild(p,a),i=p}return i}function s(e,t,n){var i=d("param");i.setAttribute("name",t),i.setAttribute("value",n),e.appendChild(i)}function l(e){var t=c(e);t&&"OBJECT"==t.nodeName&&(D.ie&&D.win?(t.style.display="none",function(){4==t.readyState?u(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function u(e){var t=c(e);if(t){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}function c(e){var t=null;try{t=T.getElementById(e)}catch(n){}return t}function d(e){return T.createElement(e)}function p(e){var t=D.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function f(e,t){if(S){var n,i=t?"visible":"hidden";C&&n&&c(e)&&(c(e).style.visibility=i)}}var h="undefined",m="object",v=window.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",w=window,T=document,x=navigator,N=!1,k=[i],E=[],A=[],C=!1,S=!0,D=function(){var e=typeof T.getElementById!=h&&typeof T.getElementsByTagName!=h&&typeof T.createElement!=h,t=x.userAgent.toLowerCase(),n=x.platform.toLowerCase(),i=n?/win/.test(n):/win/.test(t),a=n?/mac/.test(n):/mac/.test(t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],l=null;if(typeof x.plugins!=h&&typeof x.plugins[g]==m)l=x.plugins[g].description,!l||typeof x.mimeTypes!=h&&x.mimeTypes[b]&&!x.mimeTypes[b].enabledPlugin||(N=!0,o=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof w.ActiveXObject!=h)try{var u=new ActiveXObject(y);u&&(l=u.GetVariable("$version"),l&&(o=!0,l=l.split(" ")[1].split(","),s=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(c){}return{w3:e,pv:s,wk:r,ie:o,win:i,mac:a}}();return function(){D.ie&&D.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=A.length,t=0;e>t;t++)A[t][0].detachEvent(A[t][1],A[t][2]);for(var n=E.length,i=0;n>i;i++)l(E[i]);for(var a in D)D[a]=null;D=null;for(var r in swfmini)swfmini[r]=null;swfmini=null})}(),v.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return D.w3?r(e):void 0},embedSWF:function(e,n,i,a,r,s,l,u,c,d){var v={success:!1,id:n};D.w3&&!(D.wk&&312>D.wk)&&e&&n&&i&&a&&r?(f(n,!1),t(function(){i+="",a+="";var t={};if(c&&typeof c===m)for(var s in c)t[s]=c[s];t.data=e,t.width=i,t.height=a;var g={};if(u&&typeof u===m)for(var y in u)g[y]=u[y];if(l&&typeof l===m)for(var b in l)typeof g.flashvars!=h?g.flashvars+="&"+b+"="+l[b]:g.flashvars=b+"="+l[b];if(p(r)){var w=o(t,g,n);t.id==n&&f(n,!0),v.success=!0,v.ref=w}else f(n,!0);d&&d(v)})):d&&d(v)},switchOffAutoHideShow:function(){S=!1},ua:D,getFlashPlayerVersion:function(){return{major:D.pv[0],minor:D.pv[1],release:D.pv[2]}},hasFlashPlayerVersion:p,createSWF:function(e,t,n){return D.w3?o(e,t,n):void 0},showExpressInstall:function(){},removeSWF:function(e){D.w3&&l(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:n,expressInstallCallback:function(){}}}();(function(e,t){"use strict";var n,i,a=t.$,r=e.audio&&e.video,o=!1,s=t.bugs,l="mediaelement-jaris",u=function(){t.ready(l,function(){t.mediaelement.createSWF||(t.mediaelement.loadSwf=!0,t.reTest([l],r))})},c=t.cfg,d=c.mediaelement;if(!d)return t.error("mediaelement wasn't implemented but loaded"),void 0;if(r){var p=document.createElement("video");if(e.videoBuffered="buffered"in p,o="loop"in p,t.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(t.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),t.loader.loadList(["mediaelement-native-fix"])),!d.preferFlash){var f={1:1,2:1},h=function(e){var n,r,o;if(!d.preferFlash&&(a(e.target).is("audio, video")||(o=e.target.parentNode)&&a("source:last",o)[0]==e.target)&&(n=a(e.target).closest("audio, video"))&&!f[r=n.prop("error")]){if(null==r)return t.warn("There was an unspecified error on a mediaelement"),void 0;a(function(){i&&!d.preferFlash?(u(),t.ready("WINDOWLOAD "+l,function(){setTimeout(function(){d.preferFlash||!t.mediaelement.createSWF||n.is(".nonnative-api-active")||(d.preferFlash=!0,document.removeEventListener("error",h,!0),a("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+n.prop("error")))},9)})):document.removeEventListener("error",h,!0)})}};document.addEventListener("error",h,!0),a("audio, video").each(function(){var e=a.prop(this,"error");return e&&!f[e]?(h({target:this}),!1):void 0})}}e.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof a("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(e){s.track=!0}}(),n=e.track&&!s.track,t.register("mediaelement-core",function(e,t,a,s,c){i=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(i?"swf":"no-swf");var p=t.mediaelement;p.parseRtmp=function(e){var n,i,a,r=e.src.split("://"),o=r[1].split("/");for(e.server=r[0]+"://"+o[0]+"/",e.streamId=[],n=1,i=o.length;i>n;n++)a||-1===o[n].indexOf(":")||(o[n]=o[n].split(":")[1],a=!0),a?e.streamId.push(o[n]):e.server+=o[n]+"/";e.streamId.length||t.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(t,n){t=e(t);var i,a={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return a.src?(i=t.attr("data-server"),null!=i&&(a.server=i),i=t.attr("type"),i?(a.type=i,a.container=e.trim(i.split(";")[0])):(n||(n=t[0].nodeName.toLowerCase(),"source"==n&&(n=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),a.server?(a.type=n+"/rtmp",a.container=n+"/rtmp"):(i=p.getTypeForSrc(a.src,n,a),i&&(a.type=i,a.container=i))),i=t.attr("media"),i&&(a.media=i),("audio/rtmp"==a.type||"video/rtmp"==a.type)&&(a.server?a.streamId=a.src:p.parseRtmp(a)),a):a},h=!i&&"postMessage"in a&&r,m=function(){m.loaded||(m.loaded=!0,t.ready("WINDOWLOAD",function(){g(),t.loader.loadList(["track-ui"])}))},v=function(){var n;return function(){!n&&h&&(n=!0,t.loader.loadScript("https://www.youtube.com/player_api"),e(function(){t._polyfill(["mediaelement-yt"])}))}}(),g=function(){i?u():v()};t.addPolyfill("mediaelement-yt",{test:!h,d:["dom-support"]}),p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},p.mimeTypes.source=e.extend({},p.mimeTypes.audio,p.mimeTypes.video),p.getTypeForSrc=function(t,n){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return n+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var i;return e.each(p.mimeTypes[n],function(e,n){return-1!==n.indexOf(t)?(i=e,!1):c}),i},p.srces=function(t,n){if(t=e(t),!n){n=[];var i=t[0].nodeName.toLowerCase(),a=f(t,i);return a.src?n.push(a):e("source",t).each(function(){a=f(this,i),a.src&&n.push(a)}),n}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(n)||(n=[n]),n.forEach(function(n){"string"==typeof n&&(n={src:n}),t.append(e(s.createElement("source")).attr(n))})},e.fn.loadMediaSrc=function(t,n){return this.each(function(){n!==c&&(e(this).removeAttr("poster"),n&&e.attr(this,"poster",n)),p.srces(this,t),e(this).mediaLoad()})},p.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],p.canThirdPlaySrces=function(t,n){var a="";return(i||h)&&(t=e(t),n=n||p.srces(t),e.each(n,function(e,t){return t.container&&t.src&&(i&&-1!=p.swfMimeTypes.indexOf(t.container)||h&&"video/youtube"==t.container)?(a=t,!1):c})),a};var y={};p.canNativePlaySrces=function(t,n){var i="";if(r){t=e(t);var a=(t[0].nodeName||"").toLowerCase(),o=(y[a]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return i;n=n||p.srces(t),e.each(n,function(e,n){return n.type&&o.call(t[0],n.type)?(i=n,!1):c})}return i};var b=/^\s*application\/octet\-stream\s*$/i,w=function(){var t=b.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};p.setError=function(n,i){if(e("source",n).filter(w).length){t.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(n).mediaLoad()}catch(a){}}else i||(i="can't play sources"),e(n).pause().data("mediaerror",i),t.error("mediaelementError: "+i),setTimeout(function(){e(n).data("mediaerror")&&e(n).trigger("mediaerror")},1)};var T=function(){var e;return function(n,a,r){t.ready(i?l:"mediaelement-yt",function(){p.createSWF?p.createSWF(n,a,r):e||(e=!0,g(),T(n,a,r))}),e||!h||p.createSWF||v()}}(),x=function(e,t,n,i,a){var r;n||n!==!1&&t&&"third"==t.isActive?(r=p.canThirdPlaySrces(e,i),r?T(e,r,t):a?p.setError(e,!1):x(e,t,!1,i,!0)):(r=p.canNativePlaySrces(e,i),r?t&&"third"==t.isActive&&p.setActive(e,"html5",t):a?(p.setError(e,!1),t&&"third"==t.isActive&&p.setActive(e,"html5",t)):x(e,t,!0,i,!0))},N=/^(?:embed|object|datalist)$/i,k=function(n,i){var a=t.data(n,"mediaelementBase")||t.data(n,"mediaelementBase",{}),r=p.srces(n),o=n.parentNode;clearTimeout(a.loadTimer),e.data(n,"mediaerror",!1),r.length&&o&&1==o.nodeType&&!N.test(o.nodeName||"")&&(i=i||t.data(n,"mediaelement"),p.sortMedia&&r.sort(p.sortMedia),x(n,i,d.preferFlash||c,r))};p.selectSource=k,e(s).on("ended",function(n){var i=t.data(n.target,"mediaelement");(!o||i&&"html5"!=i.isActive||e.prop(n.target,"loop"))&&setTimeout(function(){!e.prop(n.target,"paused")&&e.prop(n.target,"loop")&&e(n.target).prop("currentTime",0).play()},1)});var E=!1,A=function(){var n=function(){if(t.implement(this,"mediaelement")&&(k(this),r&&(!o||"ActiveXObject"in a))){var n,i,s=this,l=function(){var t=e.prop(s,"buffered");if(t){for(var n="",i=0,a=t.length;a>i;i++)n+=t.end(i);return n}},u=function(){var n=l();n!=i&&(i=n,t.info("needed to trigger progress manually"),e(s).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(i=l()),clearTimeout(n),n=setTimeout(u,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(i=!1),clearTimeout(n)}}),"ActiveXObject"in a&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}};t.ready("dom-support",function(){E=!0,o||t.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(n){var a;a=t.defineNodeNameProperty(n,"load",{prop:{value:function(){var e=t.data(this,"mediaelement");k(this,e),!r||e&&"html5"!=e.isActive||!a.prop._supvalue||a.prop._supvalue.apply(this,arguments)}}}),y[n]=t.defineNodeNameProperty(n,"canPlayType",{prop:{value:function(t){var a="";return r&&y[n].prop._supvalue&&(a=y[n].prop._supvalue.call(this,t),"no"==a&&(a="")),!a&&i&&(t=e.trim((t||"").split(";")[0]),-1!=p.swfMimeTypes.indexOf(t)&&(a="maybe")),a}}})}),t.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,n=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{});clearTimeout(n.loadTimer),n.loadTimer=setTimeout(function(){k(e),e=null},9)}}),t.addReady(function(t,i){var a=e("video, audio",t).add(i.filter("video, audio")).each(n);!m.loaded&&e("track",a).length&&m(),a=null})}),r&&!E&&t.addReady(function(t,n){E||e("video, audio",t).add(n.filter("video, audio")).each(function(){return p.canNativePlaySrces(this)?c:(g(),E=!0,!1)})})};n&&t.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),r?(t.isReady("mediaelement-core",!0),A(),t.ready("WINDOWLOAD mediaelement",g)):t.ready(l,A),t.ready("track",m)})})(Modernizr,webshims);