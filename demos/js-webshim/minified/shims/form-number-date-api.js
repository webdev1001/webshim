jQuery.webshims.register("form-number-date-api",function(g,f){var m,n,s,o;if(!f.getStep)f.getStep=function(a,b){var c=g.attr(a,"step");if("any"===c)return c;b=b||h(a);if(!e[b]||!e[b].step)return c;c=m.asNumber(c);return(!isNaN(c)&&0<c?c:e[b].step)*e[b].stepScaleFactor};if(!f.addMinMaxNumberToCache)f.addMinMaxNumberToCache=function(a,b,c){a+"AsNumber"in c||(c[a+"AsNumber"]=e[c.type].asNumber(b.attr(a)),isNaN(c[a+"AsNumber"])&&a+"Default"in e[c.type]&&(c[a+"AsNumber"]=e[c.type][a+"Default"]))};var p=
parseInt("NaN",10),e=f.inputTypes,i=function(a){return"number"==typeof a||a&&a==1*a},j=function(a){return g('<input type="'+a+'" />').prop("type")===a},h=function(a){return(a.getAttribute("type")||"").toLowerCase()},t=f.addMinMaxNumberToCache,k=function(a,b){for(var a=""+a,b=b-a.length,c=0;c<b;c++)a="0"+a;return a},l=f.bugs.valueAsNumberSet||f.bugs.bustedValidity;f.addValidityRule("stepMismatch",function(a,b,c,d){if(""===b)return!1;if(!("type"in c))c.type=h(a[0]);if("date"==c.type)return!1;d=(d||
{}).stepMismatch;if(e[c.type]&&e[c.type].step){if(!("step"in c))c.step=f.getStep(a[0],c.type);if("any"==c.step)return!1;if(!("valueAsNumber"in c))c.valueAsNumber=e[c.type].asNumber(b);if(isNaN(c.valueAsNumber))return!1;t("min",a,c);a=c.minAsNumber;isNaN(a)&&(a=e[c.type].stepBase||0);d=Math.abs((c.valueAsNumber-a)%c.step);d=!(1.0E-7>=d||1.0E-7>=Math.abs(d-c.step))}return d});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(a){f.addValidityRule(a.name,
function(b,c,d,f){f=(f||{})[a.name]||!1;if(""===c)return f;if(!("type"in d))d.type=h(b[0]);if(e[d.type]&&e[d.type].asNumber){if(!("valueAsNumber"in d))d.valueAsNumber=e[d.type].asNumber(c);if(isNaN(d.valueAsNumber))return!1;t(a.attr,b,d);if(isNaN(d[a.attr+"AsNumber"]))return f;f=d[a.attr+"AsNumber"]*a.factor<d.valueAsNumber*a.factor-1.0E-7}return f})});f.reflectProperties(["input"],["max","min","step"]);var q=f.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var a=h(this),a=e[a]&&
e[a].asNumber?e[a].asNumber(g.prop(this,"value")):q.prop._supget&&q.prop._supget.apply(this,arguments);null==a&&(a=p);return a},set:function(a){var b=h(this);e[b]&&e[b].numberToString?isNaN(a)?g.prop(this,"value",""):(b=e[b].numberToString(a),!1!==b?g.prop(this,"value",b):f.warn("INVALID_STATE_ERR: DOM Exception 11")):q.prop._supset&&q.prop._supset.apply(this,arguments)}}}),r=f.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var a=h(this);return e[a]&&e[a].asDate&&!e[a].noAsDate?
e[a].asDate(g.prop(this,"value")):r.prop._supget&&r.prop._supget.call(this)||null},set:function(a){var b=h(this);if(e[b]&&e[b].dateToString&&!e[b].noAsDate){if(null===a)return g.prop(this,"value",""),"";b=e[b].dateToString(a);if(!1!==b)return g.prop(this,"value",b),b;f.warn("INVALID_STATE_ERR: DOM Exception 11")}else return r.prop._supset&&r.prop._supset.apply(this,arguments)||null}}});m={mismatch:function(a){return!i(a)},step:1,stepScaleFactor:1,asNumber:function(a){return i(a)?1*a:p},numberToString:function(a){return i(a)?
a:!1}};n={minDefault:0,maxDefault:100};s={mismatch:function(a){if(!a||!a.split||!/\d$/.test(a))return!0;var b=a.split(/\u002D/);if(3!==b.length)return!0;var c=!1;g.each(b,function(a,b){if(!(i(b)||b&&b=="0"+1*b))return c=!0,!1});if(c)return c;if(4!==b[0].length||2!=b[1].length||12<b[1]||2!=b[2].length||33<b[2])c=!0;return a!==this.dateToString(this.asDate(a,!0))},step:1,stepScaleFactor:864E5,asDate:function(a,b){return!b&&this.mismatch(a)?null:new Date(this.asNumber(a,!0))},asNumber:function(a,b){var c=
p;if(b||!this.mismatch(a))a=a.split(/\u002D/),c=Date.UTC(a[0],a[1]-1,a[2]);return c},numberToString:function(a){return i(a)?this.dateToString(new Date(1*a)):!1},dateToString:function(a){return a&&a.getFullYear?a.getUTCFullYear()+"-"+k(a.getUTCMonth()+1,2)+"-"+k(a.getUTCDate(),2):!1}};o={mismatch:function(a,b){if(!a||!a.split||!/\d$/.test(a))return!0;a=a.split(/\u003A/);if(2>a.length||3<a.length)return!0;var c=!1,d;a[2]&&(a[2]=a[2].split(/\u002E/),d=parseInt(a[2][1],10),a[2]=a[2][0]);g.each(a,function(a,
b){if(!(i(b)||b&&b=="0"+1*b)||2!==b.length)return c=!0,!1});if(c||23<a[0]||0>a[0]||59<a[1]||0>a[1]||a[2]&&(59<a[2]||0>a[2])||d&&isNaN(d))return!0;d&&(100>d?d*=100:10>d&&(d*=10));return!0===b?[a,d]:!1},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var b=p,a=this.mismatch(a,!0);!0!==a&&(b=Date.UTC("1970",0,1,a[0][0],a[0][1],a[0][2]||0),a[1]&&(b+=a[1]));return b},dateToString:function(a){if(a&&a.getUTCHours){var b=
k(a.getUTCHours(),2)+":"+k(a.getUTCMinutes(),2),c=a.getSeconds();"0"!=c&&(b+=":"+k(c,2));c=a.getUTCMilliseconds();"0"!=c&&(b+="."+k(c,3));return b}return!1}};if(l||!j("range")||!j("time"))n=g.extend({},m,n),o=g.extend({},s,o);(l||!j("number"))&&f.addInputType("number",m);(l||!j("range"))&&f.addInputType("range",n);(l||!j("date"))&&f.addInputType("date",s);(l||!j("time"))&&f.addInputType("time",o)});
