Modernizr.formvalidation||jQuery.webshims.register("form-extend",function(b,h,r,k){h.inputTypes=h.inputTypes||{};var s=h.cfg.forms,l,m=h.inputTypes,n={radio:1,checkbox:1};h.addInputType=function(a,c){m[a]=c};var j={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},t={valueMissing:function(a,c,d){if(!a.attr("required"))return false;var f=false;if(!("type"in d))d.type=(a[0].getAttribute("type")||
a[0].type||"").toLowerCase();if(d.nodeName=="select"){if(c=!c){if(!(c=a[0].selectedIndex<0)){a=a[0];if(a.type=="select-one"&&a.size<2){a=b("> option:first-child",a);c=!a.attr("disabled")&&a.attr("selected")}else c=false}c=c}a=c}else a=n[d.type]?d.type=="checkbox"?!a.is(":checked"):!b(a[0].form&&a[0].name?a[0].form[a[0].name]:[]).filter(":checked")[0]:!c;return f=a},tooLong:function(a,c,d){if(c===""||d.nodeName=="select")return false;a=a.attr("maxlength");d=false;var f=c.length;if(f&&a>=0&&c.replace&&
(typeof a=="number"||a&&a==a*1))d=f>a;return d},typeMismatch:function(a,c,d){if(c===""||d.nodeName=="select")return false;var f=false;if(!("type"in d))d.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();if(m[d.type]&&m[d.type].mismatch)f=m[d.type].mismatch(c,a);return f},patternMismatch:function(a,c,d){if(c===""||d.nodeName=="select")return false;a=a.attr("pattern");if(!a)return false;return!RegExp("^(?:"+a+")$").test(c)}};h.addValidityRule=function(a,c){t[a]=c};b.event.special.invalid=
{add:function(){b.event.special.invalid.setup.call(this.form||this)},setup:function(){var a=this.form||this;if(!b.data(a,"invalidEventShim")){b(a).data("invalidEventShim",true).bind("submit",b.event.special.invalid.handler);(a=b(a).data("events").submit)&&a.length>1&&a.unshift(a.pop())}},teardown:b.noop,handler:function(a){if(!(a.type!="submit"||a.testedValidity||!b.nodeName(a.target,"form")||b.attr(a.target,"novalidate")!=null||b.data(a.target,"novalidate"))){l=true;a.testedValidity=true;if(!b(a.target).checkValidity()){this===
k&&h.warn("always embed HTML5 content using .prependWebshim, .appendWebshim, .htmlWebshim etc.");a.originalEvent||h.warn("tryed to submit invalid form");a.stopImmediatePropagation();return l=false}l=false}}};b(k).bind("invalid",b.noop);b.event.special.submit=b.event.special.submit||{setup:function(){return false}};var p=b.event.special.submit.setup;b.extend(b.event.special.submit,{setup:function(){b.nodeName(this,"form")?b(this).bind("invalid",b.noop):b("form",this).bind("invalid",b.noop);return p.apply(this,
arguments)}});h.addInputType("email",{mismatch:function(){var a=s.emailReg||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(c){return!a.test(c)}}()});h.addInputType("url",{mismatch:function(){var a=s.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(c){return!a.test(c)}}()});h.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return true}},willValidate:{value:false},setCustomValidity:{value:b.noop},validity:{writeable:false,get:function(){return b.extend({},j)}}},"prop");h.defineNodeNamesProperties(["input","textarea","select","form"],{checkValidity:{value:function(){var a,c=function(d){var f,g=b.attr(d,"validity");if(g)b.data(d,"cachedValidity",g);else return true;if(!g.valid){f=b.Event("invalid");
var i=b(d).trigger(f);if(l&&!a&&!f.isDefaultPrevented()){h.validityAlert.showFor(i);a=true}}b.data(d,"cachedValidity",false);return g.valid};return function(){a=false;if(b.nodeName(this,"form")){for(var d=true,f=this.elements||b("input, textarea, select",this),g=0,i=f.length;g<i;g++)c(f[g])||(d=false);return d}else return c(this)}}()},setCustomValidity:{value:function(a){b.data(this,"customvalidationMessage",""+a)}},willValidate:{set:b.noop,get:function(){var a={button:1,reset:1,hidden:1};return function(){return!!(!this.disabled&&
!this.readOnly&&!a[this.type]&&b.attr(this.form,"novalidate")==null)}}()},validity:{set:b.noop,get:function(){var a=b.data(this,"cachedValidity");if(a)return a;a=b.extend({},j);if(!b.attr(this,"willValidate")||this.type=="submit")return a;var c=b(this),d=c.val(),f={nodeName:this.nodeName.toLowerCase()};this.getAttribute("aria-invalid");a.customError=!!b.data(this,"customvalidationMessage");if(a.customError)a.valid=false;b.each(t,function(g,i){if(i(c,d,f)){a[g]=true;a.valid=false}});this.setAttribute("aria-invalid",
a.valid?"false":"true");return a}}},"prop");h.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(a){this.setAttribute("aria-required",!!a+"")},initAttr:true});var o=function(){var a=this;if(a.form){b.data(a.form,"novalidate",true);setTimeout(function(){b.removeData(a.form,"novalidate")},1)}},e={submit:1,button:1};b(k).bind("click",function(a){a.target&&a.target.form&&e[a.target.type]&&b.attr(a.target,"formnovalidate")!=null&&o.call(a.target)});h.addReady(function(a,
c){var d=b("form",a).add(c.filter("form")).bind("invalid",b.noop).find("button[formnovalidate]").bind("click",o).end();setTimeout(function(){if(!k.activeElement||!k.activeElement.form){var f=true;b("input, select, textarea",d).each(function(){if(!f)return false;if(this.getAttribute("autofocus")!=null){f=false;var g=h.getVisualInput(this),i=b("input, select, textarea, .ui-slider-handle",g).filter(":visible:first");i[0]||(i=g);try{i[0].focus()}catch(q){}}})}},0)})});
jQuery.webshims.ready("dom-support form-core",function(b,h,r,k,s){Modernizr.textareaPlaceholder=!!("placeholder"in b("<textarea />")[0]);if(!(Modernizr.input.placeholder&&Modernizr.textareaPlaceholder)){var l=h.cfg.forms.placeholderType=="over";k=["textarea"];Modernizr.input.placeholder||k.push("input");var m=function(e){var a=r.onbeforeunload;r.onbeforeunload=function(){e.apply(this,arguments);a&&a.apply&&a.apply(this,arguments);r.onbeforeunload=null}},n=function(e,a,c){if(!l&&e.type!="password"){if(c===
false)c=b.attr(e,"value");e.value=c}a.box.removeClass("placeholder-visible")},j=function(e,a,c,d,f){if(!d){d=b.data(e,"placeHolder");if(!d)return}if(f=="focus"||!f&&e===document.activeElement){if(e.type=="password"||l||b(e).hasClass("placeholder-visible"))n(e,d,"")}else{if(a===false)a=b.attr(e,"value");if(a)n(e,d,a);else{if(c===false)c=b.attr(e,"placeholder")||"";if(c&&!a){a=d;c=c;if(c===false)c=b.attr(e,"placeholder")||"";if(!l&&e.type!="password")e.value=c;a.box.addClass("placeholder-visible")}else n(e,
d,a)}}},t=function(e){e=b(e);var a=e.attr("id"),c=!!(e.attr("title")||e.attr("aria-labeledby"));if(!c&&a)c=!!b('label[for="'+a+'"]',e[0].form)[0];return b(c?'<span class="placeholder-text"></span>':'<label for="'+(a||b.webshims.getID(e))+'" class="placeholder-text"></label>')},p=function(){var e={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(a){var c=b.data(a,"placeHolder");if(c)return c;c=b.data(a,"placeHolder",{text:t(a)});b(a).bind("focus.placeholder blur.placeholder",
function(g){j(this,false,false,c,g.type)});a.form&&b(a.form).bind("reset.placeholder",function(g){setTimeout(function(){j(a,false,false,c,g.type)},0)});if(a.type=="password"||l){c.box=b(a).wrap('<span class="placeholder-box placeholder-box-'+(a.nodeName||"").toLowerCase()+'" />').parent();c.text.insertAfter(a).bind("mousedown.placeholder",function(){j(this,false,false,c,"focus");try{setTimeout(function(){a.focus()},0)}catch(g){}return false});b.each(["Left","Top"],function(g,i){var q=(parseInt(b.curCSS(a,
"padding"+i),10)||0)+Math.max(parseInt(b.curCSS(a,"margin"+i),10)||0,0)+(parseInt(b.curCSS(a,"border"+i+"Width"),10)||0);c.text.css("padding"+i,q)});b.curCSS(a,"lineHeight");var d={width:b(a).width(),height:b(a).height()},f=b.curCSS(a,"float");b.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(g,i){var q=b.curCSS(a,i);c.text.css(i)!=q&&c.text.css(i,q)});d.width&&d.height&&c.text.css(d);f!=="none"&&c.box.addClass("placeholder-box-"+f)}else{d=function(g){if(b(a).hasClass("placeholder-visible")){n(a,
c,"");g&&g.type=="submit"&&setTimeout(function(){g.isDefaultPrevented()&&j(a,false,false,c)},9)}};if(b.nodeName(c.text[0],"label"))c.text.hide()[b.browser.msie?"insertBefore":"insertAfter"](a);m(d);c.box=b(a);a.form&&b(a.form).submit(d)}return c},update:function(a,c){if(e[b.attr(a,"type")]||b.nodeName(a,"textarea")){var d=p.create(a);d.text.text(c);j(a,false,c,d)}}}}();b.webshims.publicMethods={pHolder:p};k.forEach(function(e){h.defineNodeNameProperty(e,"placeholder",{set:function(a){h.contentAttr(this,
"placeholder",a);p.update(this,a)},get:function(){return h.contentAttr(this,"placeholder")||""},initAttr:true})});k.forEach(function(e){var a=h.defineNodeNameProperty(e,"value",{set:function(c){var d=h.contentAttr(this,"placeholder");d&&"value"in this&&j(this,c,d);return a._supset.call(this,c)},get:function(){return b(this).hasClass("placeholder-visible")?"":a._supget.call(this)}})});var o=b.fn.val;b.fn.val=function(e){if(e!==s){this.each(e===""?function(){if(this.nodeType===1){var a=this.getAttribute("placeholder");
if(b.nodeName(this,"select")||!a)o.call(b(this),"");else{a&&"value"in this&&j(this,e,a);if(l||this.type=="password")o.call(b(this),"")}}}:function(){if(this.nodeType===1){var a=this.getAttribute("placeholder");a&&"value"in this&&j(this,e,a)}});if(e==="")return this}else if(this[0]&&this[0].nodeType==1&&this.hasClass("placeholder-visible"))return"";return o.apply(this,arguments)}}});
