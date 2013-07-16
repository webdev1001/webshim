(function(e,t){"use strict";var i,n,a=t.$,r=e.audio&&e.video,o=!1,s=t.bugs,l="mediaelement-jaris",u=function(){t.ready(l,function(){t.mediaelement.createSWF||(t.mediaelement.loadSwf=!0,t.reTest([l],r))})},c=t.cfg,p=c.mediaelement;if(!p)return t.error("mediaelement wasn't implemented but loaded"),void 0;if(r){var d=document.createElement("video");if(e.videoBuffered="buffered"in d,o="loop"in d,t.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(t.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),t.loader.loadList(["mediaelement-native-fix"])),!p.preferFlash){var h={1:1,2:1},f=function(e){var i,r,o;if(!p.preferFlash&&(a(e.target).is("audio, video")||(o=e.target.parentNode)&&a("source:last",o)[0]==e.target)&&(i=a(e.target).closest("audio, video"))&&!h[r=i.prop("error")]){if(null==r)return t.warn("There was an unspecified error on a mediaelement"),void 0;a(function(){n&&!p.preferFlash?(u(),t.ready("WINDOWLOAD "+l,function(){setTimeout(function(){p.preferFlash||!t.mediaelement.createSWF||i.is(".nonnative-api-active")||(p.preferFlash=!0,document.removeEventListener("error",f,!0),a("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+i.prop("error")))},9)})):document.removeEventListener("error",f,!0)})}};document.addEventListener("error",f,!0),a("audio, video").each(function(){var e=a.prop(this,"error");return e&&!h[e]?(f({target:this}),!1):void 0})}}e.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof a("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(e){s.track=!0}}(),i=e.track&&!s.track,t.register("mediaelement-core",function(e,t,a,s,c){n=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(n?"swf":"no-swf");var d=t.mediaelement;d.parseRtmp=function(e){var i,n,a,r=e.src.split("://"),o=r[1].split("/");for(e.server=r[0]+"://"+o[0]+"/",e.streamId=[],i=1,n=o.length;n>i;i++)a||-1===o[i].indexOf(":")||(o[i]=o[i].split(":")[1],a=!0),a?e.streamId.push(o[i]):e.server+=o[i]+"/";e.streamId.length||t.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var h=function(t,i){t=e(t);var n,a={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return a.src?(n=t.attr("data-server"),null!=n&&(a.server=n),n=t.attr("type"),n?(a.type=n,a.container=e.trim(n.split(";")[0])):(i||(i=t[0].nodeName.toLowerCase(),"source"==i&&(i=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),a.server?(a.type=i+"/rtmp",a.container=i+"/rtmp"):(n=d.getTypeForSrc(a.src,i,a),n&&(a.type=n,a.container=n))),n=t.attr("media"),n&&(a.media=n),("audio/rtmp"==a.type||"video/rtmp"==a.type)&&(a.server?a.streamId=a.src:d.parseRtmp(a)),a):a},f=!n&&"postMessage"in a&&r,m=function(){m.loaded||(m.loaded=!0,t.ready("WINDOWLOAD",function(){g(),t.loader.loadList(["track-ui"])}))},v=function(){var i;return function(){!i&&f&&(i=!0,t.loader.loadScript("https://www.youtube.com/player_api"),e(function(){t._polyfill(["mediaelement-yt"])}))}}(),g=function(){n?u():v()};t.addPolyfill("mediaelement-yt",{test:!f,d:["dom-support"]}),d.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},d.mimeTypes.source=e.extend({},d.mimeTypes.audio,d.mimeTypes.video),d.getTypeForSrc=function(t,i){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return i+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var n;return e.each(d.mimeTypes[i],function(e,i){return-1!==i.indexOf(t)?(n=e,!1):c}),n},d.srces=function(t,i){if(t=e(t),!i){i=[];var n=t[0].nodeName.toLowerCase(),a=h(t,n);return a.src?i.push(a):e("source",t).each(function(){a=h(this,n),a.src&&i.push(a)}),i}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(i)||(i=[i]),i.forEach(function(i){"string"==typeof i&&(i={src:i}),t.append(e(s.createElement("source")).attr(i))})},e.fn.loadMediaSrc=function(t,i){return this.each(function(){i!==c&&(e(this).removeAttr("poster"),i&&e.attr(this,"poster",i)),d.srces(this,t),e(this).mediaLoad()})},d.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],d.canThirdPlaySrces=function(t,i){var a="";return(n||f)&&(t=e(t),i=i||d.srces(t),e.each(i,function(e,t){return t.container&&t.src&&(n&&-1!=d.swfMimeTypes.indexOf(t.container)||f&&"video/youtube"==t.container)?(a=t,!1):c})),a};var y={};d.canNativePlaySrces=function(t,i){var n="";if(r){t=e(t);var a=(t[0].nodeName||"").toLowerCase(),o=(y[a]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return n;i=i||d.srces(t),e.each(i,function(e,i){return i.type&&o.call(t[0],i.type)?(n=i,!1):c})}return n};var b=/^\s*application\/octet\-stream\s*$/i,w=function(){var t=b.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};d.setError=function(i,n){if(e("source",i).filter(w).length){t.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(i).mediaLoad()}catch(a){}}else n||(n="can't play sources"),e(i).pause().data("mediaerror",n),t.error("mediaelementError: "+n),setTimeout(function(){e(i).data("mediaerror")&&e(i).trigger("mediaerror")},1)};var x=function(){var e;return function(i,a,r){t.ready(n?l:"mediaelement-yt",function(){d.createSWF?d.createSWF(i,a,r):e||(e=!0,g(),x(i,a,r))}),e||!f||d.createSWF||v()}}(),k=function(e,t,i,n,a){var r;i||i!==!1&&t&&"third"==t.isActive?(r=d.canThirdPlaySrces(e,n),r?x(e,r,t):a?d.setError(e,!1):k(e,t,!1,n,!0)):(r=d.canNativePlaySrces(e,n),r?t&&"third"==t.isActive&&d.setActive(e,"html5",t):a?(d.setError(e,!1),t&&"third"==t.isActive&&d.setActive(e,"html5",t)):k(e,t,!0,n,!0))},T=/^(?:embed|object|datalist)$/i,C=function(i,n){var a=t.data(i,"mediaelementBase")||t.data(i,"mediaelementBase",{}),r=d.srces(i),o=i.parentNode;clearTimeout(a.loadTimer),e.data(i,"mediaerror",!1),r.length&&o&&1==o.nodeType&&!T.test(o.nodeName||"")&&(n=n||t.data(i,"mediaelement"),d.sortMedia&&r.sort(d.sortMedia),k(i,n,p.preferFlash||c,r))};d.selectSource=C,e(s).on("ended",function(i){var n=t.data(i.target,"mediaelement");(!o||n&&"html5"!=n.isActive||e.prop(i.target,"loop"))&&setTimeout(function(){!e.prop(i.target,"paused")&&e.prop(i.target,"loop")&&e(i.target).prop("currentTime",0).play()},1)});var E=!1,N=function(){var i=function(){if(t.implement(this,"mediaelement")&&(C(this),r&&(!o||"ActiveXObject"in a))){var i,n,s=this,l=function(){var t=e.prop(s,"buffered");if(t){for(var i="",n=0,a=t.length;a>n;n++)i+=t.end(n);return i}},u=function(){var i=l();i!=n&&(n=i,t.info("needed to trigger progress manually"),e(s).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(n=l()),clearTimeout(i),i=setTimeout(u,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(n=!1),clearTimeout(i)}}),"ActiveXObject"in a&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}};t.ready("dom-support",function(){E=!0,o||t.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(i){var a;a=t.defineNodeNameProperty(i,"load",{prop:{value:function(){var e=t.data(this,"mediaelement");C(this,e),!r||e&&"html5"!=e.isActive||!a.prop._supvalue||a.prop._supvalue.apply(this,arguments)}}}),y[i]=t.defineNodeNameProperty(i,"canPlayType",{prop:{value:function(t){var a="";return r&&y[i].prop._supvalue&&(a=y[i].prop._supvalue.call(this,t),"no"==a&&(a="")),!a&&n&&(t=e.trim((t||"").split(";")[0]),-1!=d.swfMimeTypes.indexOf(t)&&(a="maybe")),a}}})}),t.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,i=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{});clearTimeout(i.loadTimer),i.loadTimer=setTimeout(function(){C(e),e=null},9)}}),t.addReady(function(t,n){var a=e("video, audio",t).add(n.filter("video, audio")).each(i);!m.loaded&&e("track",a).length&&m(),a=null})}),r&&!E&&t.addReady(function(t,i){E||e("video, audio",t).add(i.filter("video, audio")).each(function(){return d.canNativePlaySrces(this)?c:(g(),E=!0,!1)})})};i&&t.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),r?(t.isReady("mediaelement-core",!0),N(),t.ready("WINDOWLOAD mediaelement",g)):t.ready(l,N),t.ready("track",m)})})(Modernizr,webshims),webshims.register("track",function(e,t,i,n){"use strict";var a=t.mediaelement;(new Date).getTime();var r=e.fn.addBack?"addBack":"andSelf",o={subtitles:1,captions:1,descriptions:1},s=e("<track />"),l=Modernizr.ES5&&Modernizr.objectAccessor,u=function(e){var i={};return e.addEventListener=function(e,n){i[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+i[e]+" your fn was: "+n),i[e]=n},e.removeEventListener=function(e,n){i[e]&&i[e]!=n&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+i[e]+" your fn was: "+n),i[e]&&delete i[e]},e},c={getCueById:function(e){for(var t=null,i=0,n=this.length;n>i;i++)if(this[i].id===e){t=this[i];break}return t}},p={0:"disabled",1:"hidden",2:"showing"},d={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",mode:"disabled",readyState:0,oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var i=this.cues[this.cues.length-1];i&&i.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=a.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var i=this.cues||[],n=0,a=i.length;if(e.track!=this)return t.error("cue not part of track"),undefined;for(;a>n;n++)if(i[n]===e){i.splice(n,1),e.track=null;break}return e.track?(t.error("cue not part of track"),undefined):undefined},DISABLED:"disabled",OFF:"disabled",HIDDEN:"hidden",SHOWING:"showing",ERROR:3,LOADED:2,LOADING:1,NONE:0},h=["kind","label","srclang"],f={srclang:"language"},m=Function.prototype.call.bind(Object.prototype.hasOwnProperty),v=function(i,n){var a,r,o=[],s=[],l=[];if(i||(i=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),n||(i.blockTrackListUpdate=!0,n=e.prop(this,"textTracks"),i.blockTrackListUpdate=!1),clearTimeout(i.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");l.push(t),-1==n.indexOf(t)&&s.push(t)}),i.scriptedTextTracks)for(a=0,r=i.scriptedTextTracks.length;r>a;a++)l.push(i.scriptedTextTracks[a]),-1==n.indexOf(i.scriptedTextTracks[a])&&s.push(i.scriptedTextTracks[a]);for(a=0,r=n.length;r>a;a++)-1==l.indexOf(n[a])&&o.push(n[a]);if(o.length||s.length){for(n.splice(0),a=0,r=l.length;r>a;a++)n.push(l[a]);for(a=0,r=o.length;r>a;a++)e([n]).triggerHandler(e.Event({type:"removetrack",track:o[a]}));for(a=0,r=s.length;r>a;a++)e([n]).triggerHandler(e.Event({type:"addtrack",track:s[a]}));(i.scriptedTextTracks||o.length)&&e(this).triggerHandler("updatetrackdisplay")}},g=function(i,n){n||(n=t.data(i,"trackData")),n&&!n.isTriggering&&(n.isTriggering=!0,setTimeout(function(){(n.track||{}).readyState?e(i).closest("audio, video").triggerHandler("updatetrackdisplay"):e(i).triggerHandler("checktrackmode"),n.isTriggering=!1},1))},y=e("<div />")[0];i.TextTrackCue=function(e,i,n){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=i,this.text=n,this.id="",this.pauseOnExit=!1,u(this)},i.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",i="",r=n.createDocumentFragment();return m(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,n;if(t!=this.text)for(t=this.text,i=a.parseCueTextToHTML(t),y.innerHTML=i,e=0,n=y.childNodes.length;n>e;e++)r.appendChild(y.childNodes[e].cloneNode(!0));return r.cloneNode(!0)}),e?e.apply(this,arguments):r.cloneNode(!0)},track:null,id:""},a.createCueList=function(){return e.extend([],c)},a.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,i=/\<\s*\//,n=function(e,t,n,a){var r;return i.test(a)?r="</"+e+">":(n.splice(0,1),r="<"+e+" "+t+'="'+n.join(" ").replace(/\"/g,"&#34;")+'">'),r},a=function(e){var i=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return i[0]&&(i[0]=i[0].toLowerCase(),t.test(i[0])?"c"==i[0]?e=n("span","class",i,e):"v"==i[0]&&(e=n("q","title",i,e)):e=""),e};return function(t){return t.replace(e,a)}}(),a.loadTextTrack=function(i,n,r,s){var l="play playing timeupdate updatetrackdisplay",u=r.track,c=function(){var r,o,s=e.prop(n,"src");if("disabled"!=u.mode&&s&&e.attr(n,"src")&&(e(i).unbind(l,c),e(n).unbind("checktrackmode",c),!u.readyState)){r=function(){u.readyState=3,u.cues=null,u.activeCues=u.shimActiveCues=u._shimActiveCues=null,e(n).triggerHandler("error")},u.readyState=1;try{u.cues=a.createCueList(),u.activeCues=u.shimActiveCues=u._shimActiveCues=a.createCueList(),o=e.ajax({dataType:"text",url:s,success:function(s){"text/vtt"!=o.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),a.parseCaptions(s,u,function(t){t&&"length"in t?(u.readyState=2,e(n).triggerHandler("load"),e(i).triggerHandler("updatetrackdisplay")):r()})},error:r})}catch(p){r(),t.warn(p)}}};u.readyState=0,u.shimActiveCues=null,u._shimActiveCues=null,u.activeCues=null,u.cues=null,e(i).unbind(l,c),e(n).unbind("checktrackmode",c),e(i).on(l,c),e(n).on("checktrackmode",c),s&&(u.mode=o[u.kind]?"showing":"hidden",c())},a.createTextTrack=function(i,n){var o,s;return n.nodeName&&(s=t.data(n,"trackData"),s&&(g(n,s),o=s.track)),o||(o=u(t.objectCreate(d)),l||h.forEach(function(t){var i=e.prop(n,t);i&&(o[f[t]||t]=i)}),n.nodeName?(l&&h.forEach(function(i){t.defineProperty(o,f[i]||i,{get:function(){return e.prop(n,i)}})}),s=t.data(n,"trackData",{track:o}),a.loadTextTrack(i,n,s,e.prop(n,"default")&&e(n).siblings("track[default]")[r]()[0]==n)):(l&&h.forEach(function(e){t.defineProperty(o,f[e]||e,{value:n[e],writeable:!1})}),o.cues=a.createCueList(),o.activeCues=o._shimActiveCues=o.shimActiveCues=a.createCueList(),o.mode="hidden",o.readyState=2)),o},a.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,i=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,n=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,a=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(r){var o,s,l,u,c,p,d,h,f,m;if(h=i.exec(r))return null;if(h=n.exec(r))return null;if(h=a.exec(r))return null;for(o=r.split(/\n/g);!o[0].replace(/\s+/gi,"").length&&o.length>0;)o.shift();for(o[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(d=o.shift().replace(/\s*/gi,"")+""),p=0;o.length>p;p++){var v=o[p];(f=e.exec(v))&&(c=f.slice(1),s=parseInt(60*60*(c[0]||0),10)+parseInt(60*(c[1]||0),10)+parseInt(c[2]||0,10)+parseFloat("0."+(c[3]||0)),l=parseInt(60*60*(c[4]||0),10)+parseInt(60*(c[5]||0),10)+parseInt(c[6]||0,10)+parseFloat("0."+(c[7]||0))),o=o.slice(0,p).concat(o.slice(p+1));break}return s||l?(u=o.join("\n"),m=new TextTrackCue(s,l,u),d&&(m.id=d),m):(t.warn("couldn't extract time information: "+[s,l,o.join("\n"),d].join(" ; ")),null)}}(),a.parseCaptions=function(e,i,n){a.createCueList();var r,o,s,l,u;e?(s=/^WEBVTT(\s*FILE)?/gi,o=function(c,p){for(;p>c;c++){if(r=e[c],s.test(r))u=!0;else if(r.replace(/\s*/gi,"").length){if(!u){t.error("please use WebVTT format. This is the standard"),n(null);break}r=a.parseCaptionChunk(r,c),r&&i.addCue(r)}if((new Date).getTime()-30>l){c++,setTimeout(function(){l=(new Date).getTime(),o(c,p)},90);break}}c>=p&&(u||t.error("please use WebVTT format. This is the standard"),n(i.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){l=(new Date).getTime(),e=e.split(/\n\n+/g),o(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},a.createTrackList=function(e,i){return i=i||t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),i.textTracks||(i.textTracks=[],t.defineProperties(i.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null}}),u(i.textTracks)),i.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var i=t.data(this,"trackData");this.setAttribute("data-kind",e),i&&(i.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(h,function(i,n){var a=f[n]||n;t.onNodeNamesPropertyModify("track",n,function(){var i=t.data(this,"trackData"),r=this;i&&("kind"==n&&g(this,i),l||(i.track[a]=e.prop(this,n)),clearTimeout(i.changedTrackPropTimer),i.changedTrackPropTimer=setTimeout(function(){e(r).trigger("updatesubtitlestate")},1))})}),t.onNodeNamesPropertyModify("track","src",function(i){if(i){var n,r=t.data(this,"trackData");r&&(n=e(this).closest("video, audio"),n[0]&&a.loadTextTrack(n,this,r))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(e.prop(this,"track")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return a.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,i=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),n=a.createTrackList(e,i);return i.blockTrackListUpdate||v.call(e,i,n),n},writeable:!1},addTextTrack:{value:function(e,i,n){var r=a.createTextTrack(this,{kind:s.prop("kind",e||"").prop("kind"),label:i||"",srclang:n||""}),o=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return o.scriptedTextTracks||(o.scriptedTextTracks=[]),o.scriptedTextTracks.push(r),v.call(this),r}}},"prop"),e(n).on("emptied ended updatetracklist",function(i){if(e(i.target).is("audio, video")){var n=t.data(i.target,"mediaelementBase");n&&(clearTimeout(n.updateTrackListTimer),n.updateTrackListTimer=setTimeout(function(){v.call(i.target,n)},0))}});var b=function(e,t){return t.readyState||e.readyState},w=function(e){e.originalEvent&&e.stopImmediatePropagation()},x=function(){if(t.implement(this,"track")){var i,n,a=e.prop(this,"track"),r=this.track;r&&(i=e.prop(this,"kind"),n=b(this,r),(r.mode||n)&&(a.mode=p[r.mode]||r.mode),"descriptions"!=i&&(r.mode="string"==typeof r.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:i}))),e(this).on("load error",w)}};t.addReady(function(i,n){var a=n.filter("video, audio, track").closest("audio, video");e("video, audio",i).add(a).each(function(){v.call(this)}).each(function(){if(Modernizr.track){var i=e.prop(this,"textTracks"),n=this.textTracks;i.length!=n.length&&t.error("textTracks couldn't be copied"),e("track",this).each(x)}}),a.each(function(){var e=this,i=t.data(e,"mediaelementBase");i&&(clearTimeout(i.updateTrackListTimer),i.updateTrackListTimer=setTimeout(function(){v.call(e,i)},9))})}),Modernizr.track&&e("video, audio").trigger("trackapichange")});