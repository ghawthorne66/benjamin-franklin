function _said_(n,t,i){if(n===undefined)return+$.cookie("_sa");_vaid_(t);$.cookie("_sa",n);_set6210(n,i)}function _vaid_(n){if(typeof localStorage=="undefined")return null;if(n===undefined)return localStorage._vid_;n>0&&(localStorage._vid_=n)}function _raid_(n,t,i,r,u,f,e,o,s,h,c,l,a,v){var nt,w,b,k,p,d,tt,it,g,y;if(n&&t){for(_said_(n,t,i),nt={expires:v},w={SPPC:i,PPCAD:r,PPCEX:u,PPCCMP:f,SEOD:e,SEOK:o,PPCP1:s,PPCP2:h,PPCTR:c,L:l},b=Object.keys(w),k=b.length;k--;)p=b[k],d=w[p],d?$.cookie(p,d,nt):$.removeCookie(p);if(window.Process&&(window.Process.Delayed(),s=_getPhoneNumber(),s!=a)){if(tt="sa.scorpiondesign.com",it="https:"==document.location.protocol?"1":"",g=(it?"https://":"http://")+tt+"/sa6.js?"+__said+","+n+","+a+","+s,navigator.sendBeacon){navigator.sendBeacon(g);return}y=document.createElement("img");y.style.display="none";y.src="about:blank";document.body.appendChild(y);y.src=g}}}function _vvid_(n,t,i){var r,f=window.jwplayer,u=n&&document.getElementById(n);u&&u.nodeName&&/video/i.test(u.nodeName)?r=u:f&&(r=f(n));r&&t&&i&&(r.sa||(r.sa={}),r.sa.vvid=t,r.sa.vpid=i)}function _set6210(n,t){var i;n&&!__sd&&(t===undefined&&(t=$.cookie("SPPC")||""),t&&(i="#~"+_base6210(parseInt(n)),window.location.hash!=i&&(window.history&&window.history.replaceState?(window.location.search&&window.location.search.indexOf("SPPC=")>0&&(i=window.location.pathname+i),window.history.replaceState(undefined,undefined,i)):window.location.replace&&window.location.replace(i))))}function _getPhoneNumber(){var i,n,f,r,u,t;for(i=document.getElementsByTagName("a"),n=0,f=i.length;n<f;n++)if(r=i[n].getAttribute("href"),u=r&&/^tel:(.+)$/.exec(r),u&&(t=u[1].replace(/\D+/g,""),t&&t.length>=10))return t;return""}function _base6210(n){var t,u,e,o,i=1,r=!0,s=[],f;if(typeof n=="number"){if(isNaN(n))return undefined;for(t=n;t>0;)u=r?i*62:i*10,r=!r,e=t%u,o=_toDigit62(e/i),s.push(o),t-=e,i=u;return s.join("")}if(typeof n=="string"){if(!n)return 0;for(t=0,f=0;f<n.length;f++)u=_fromDigit62(n,f),t+=u*i,i*=r?62:10,r=!r;return t}return undefined}function _toDigit62(n){return n<10?String.fromCharCode(n+48):n<36?String.fromCharCode(n+55):String.fromCharCode(n+61)}function _fromDigit62(n,t){var i=n.charCodeAt(t);return i<58?i-48:i<91?i-55:i-61}window.registerLoading&&registerLoading("sa");__said=document.documentElement.getAttribute("data-sa");__sd=!!document.documentElement.getAttribute("data-sd");rrequire(["jquery","cookie"],function(){function ft(){for(var n,u={},r=[],t=document.getElementsByClassName?document.getElementsByClassName("ui-track-version"):$(".ui-track-version"),i=t.length;i--;)n=t[i].getAttribute("id"),n&&!u[n]&&(u[n]=!0,r.push(n));return r.length?encodeURIComponent(r.join("|")):""}if(__said&&!/google|bing|yahoo|spider|crawl|monitor|site24|bots\b|bot\b/i.test(window.navigator.userAgent||"")){var n,e,d,o,i,s,h,c,l,g,nt,tt,it,rt,ut,w,f,a,t,b,v=$.cookie("SPPC")||"",r="sa.scorpiondesign.com",y=_said_()||0,p="https:"==document.location.protocol?"1":"",k=_getPhoneNumber(),u=document.createElement("script");u.type="text/javascript";u.async=!0;n=$.cookie("L")||"0";e=ft()||"0";!v&&!__sd&&window.location.hash&&window.location.hash[1]==="~"&&(d=_base6210(window.location.hash.substr(2)))>0?($.cookie("SPPC","true"),o=window.innerWidth||document.documentElement.offsetWidth||document.body.offsetWidth||0,i=new Date,s=new Date(i.getFullYear(),0,1),h=new Date(i.getFullYear(),6,1),c=Math.max(s.getTimezoneOffset(),h.getTimezoneOffset())/60,l=_vaid_()||0,u.src=(p?"https://":"http://")+r+"/sa4.js?"+__said+","+y+","+l+","+d+","+o+","+c+","+k+","+encodeURIComponent(window.location.href)+","+n+","+e):y?(u.src=(p?"https://":"http://")+r+"/sa2.js?"+__said+","+y+","+k+","+encodeURIComponent(window.location.href)+","+n+","+e,(v||!__sd)&&_set6210(y,v),window.Process&&window.Process.Delayed()):(g=$.cookie("SEOD")||"",nt=$.cookie("SEOK")||"",o=window.innerWidth||document.documentElement.offsetWidth||document.body.offsetWidth||0,i=new Date,s=new Date(i.getFullYear(),0,1),h=new Date(i.getFullYear(),6,1),c=Math.max(s.getTimezoneOffset(),h.getTimezoneOffset())/60,l=_vaid_()||"",tt=$.cookie("PPCAD")||"",it=$.cookie("PPCEX")||"",rt=$.cookie("PPCCMP")||"",ut=__said+","+p+","+v+","+g+","+encodeURIComponent(nt)+","+o+","+c+","+k+","+encodeURIComponent(window.location.href)+","+l+","+tt+","+it+","+rt+","+n+","+e,u.src=(p?"https://":"http://")+r+"/sa.js?"+ut,window.Process&&window.Process.Delayed());w=document.getElementsByTagName("script")[0];w.parentNode.insertBefore(u,w);f=function(n){return n&&$.trim(n)?"."+$.trim(n).replace(/ +/g,"."):""};a=function(){return undefined};t=!1;b=function(i){var h,b,s,g,nt,tt,it,rt,ut,ft,k,e=$(i.target||i.srcElement),c=e[0].nodeName.toLowerCase(),p=e.closest("button"),w=p.closest("form"),ot=w.attr("method")==="post"?"1":"",et=w.attr("action"),d=et&&w.data("search")&&w.find("input:text:visible").val(),u=e.closest("a[href]"),y=u.attr("href"),l=e.attr("id"),v=f(e.attr("class")),o=[];if($.isFunction(a)&&(d=a(i)||d),p.length?(e=p,c="button",l=p.attr("id"),v=f(e.attr("class")),y=et):u.length&&(e=u,c="a",l=u.attr("id"),v=f(e.attr("class"))),l?o.push("#"+l):(e.parents("[id],[class],li").filter(":not(body,html)").each(function(){var n=$(this),t=(n[0].nodeName||"").toLowerCase(),i=n.attr("id"),r=f(n.attr("class"));if(i)return o.unshift("#"+i),!1;r?o.unshift(t+r):o.unshift(t)}),h=$(o.join(" ")),h.length>1&&(s=-1,h.each(function(n){var t=$(this).find(c+v);if(t.index(e)>=0)return s=n,!1}),s>=0&&(o[o.length-1]+=":eq("+s+")",h=h.eq(s))),b=h.find(c+v),b.length===1?o.push(c+v):(s=b.index(e),s>=0&&o.push(c+v+":eq("+s+")"))),l=_said_(),g="https:"==document.location.protocol?"1":"",nt=encodeURIComponent(o.join(" ")),tt=window.innerWidth||document.documentElement.offsetWidth||document.body.offsetWidth||0,it=window.innerHeight||document.documentElement.offsetHeight||document.body.offsetHeight||0,rt=Math.max(document.documentElement.scrollTop,document.body.scrollTop),ut=i.pageX||i.clientX||0,ft=i.pageY||i.clientY||0,k=(g?"https://":"http://")+r+"/sa3.js?"+__said+","+l+","+nt+","+tt+","+it+","+rt+","+ut+","+ft+","+encodeURIComponent(y||"")+","+ot+","+encodeURIComponent(d||"")+","+n,navigator.sendBeacon){navigator.sendBeacon(k);return}if(t||(t=document.createElement("img"),t.style.display="none",t.src="about:blank",document.body.appendChild(t)),t.src=k,u.length&&y&&!i.shiftKey&&!i.ctrlKey&&y.indexOf("javascript:")!=0&&y.indexOf("#")!=0&&(u.attr("target")||"_self")==="_self"){i.stopPropagation?(i.stopPropagation(),i.stopImmediatePropagation(),i.preventDefault()):i.returnValue=!1;u.one("click",function(n){n.stopPropagation()});return u=u[0],setTimeout(function(){u&&u.click&&u.click();u=null},100),!1}};document.addEventListener?document.addEventListener("click",b,!1):document.attachEvent&&document.attachEvent("onclick",b);window._sa_overrideSearch=function(n){a=n};window._sa_videoStart=function(t,i,u,f,e,o){var s,h,c;if(u.substring(0,11)=="/cms/video/"){$.ajax({url:u,dataType:"xml",success:function(n){var u,r;if($("video[src]",n).each(function(){var n=$(this),t=n.attr("src");if(n.attr("width"))u=t;else if(!r)return r=t,!1}),r=r||u,r){if(r=r.replace(/^(\w+:)?\d+\//,"/"),r.substring(0,11)=="/cms/video/")return}else return;window._sa_videoStart(t,i,r,f,e,o)}});return}s=document.createElement("script");h=_said_();c="https:"==document.location.protocol?"1":"";s.type="text/javascript";s.async=!0;s.src="about:blank";s.src=(c?"https://":"http://")+r+"/va.js?"+__said+","+h+","+t+","+encodeURIComponent(u||"")+","+f+","+e+","+i+","+o+","+n;(document.head||document.body).appendChild(s)};window._sa_videoPlay=function(t,i,u,f){var o="https:"==document.location.protocol?"1":"",e=(o?"https://":"http://")+r+"/va2.js?"+__said+","+t+","+i+","+u+","+f+","+n;if(navigator.sendBeacon){navigator.sendBeacon(e);return}va_play||(va_play=document.createElement("img"),va_play.style.display="none",va_play.src="about:blank",document.body.appendChild(va_play));va_play.src=e};window.register&&window.register("sa")}});
rrequire("cookie",function(){var n=$("#IEPopup");if(!$.cookie("ComPop"))if($("html").is(".no-flexbox")){$.cookie("ComPop",!0,{expires:1,path:"/"});n.addClass("show");$(".modal-btn").on("click",function(){n.remove()})}else n.remove()});rrequire(["/includes/js/scrolling-list-script.js","j/ui.mobile"],function(){$("#FooterT1AwardsLogos").scrollingList({direction:"horizontal",count:1,scroll:"single",breakpoints:{tabletLandscape:{width:1185,count:1},tabletPortrait:{width:785,count:1},mobile:{width:585,count:1},smallMobile:{width:385,count:1}},nav:!0,autoAdvance:!0,infinite:!1})});
window.registerLoading&&registerLoading("uri"),function(n){function s(n,r){var e,o=t.count(n);for(var u in r)i.call(r,u)&&(e=(""+u).toLowerCase(),f(n,e,u,r[u],o++))}function f(n,i,r,u,f){f===undefined&&(f=t.count(n));n[i]={name:r,value:u,index:f}}var i=Object.prototype.hasOwnProperty,r=function(n,t,i){return n&&n[0]===t?i?n.substring(1):n:!i&&n?t+n:n||""},u=function(n,t,i){return n&&n[n.length-1]===t?i?n.substring(0,n.length-1):n:!i&&n?n+t:n||""},e=function(n){return n?encodeURIComponent(""+n).replace(/['"\(\)]/g,function(n){switch(n){case"'":return"%27";case'"':return"%22";case"(":return"%28";case")":return"%29";default:return n}}):""},o=function(n){return jQuery.type(n)!=="object"||n.nodeType||jQuery.isWindow(n)?!1:n.constructor&&!i.call(n.constructor.prototype,"isPrototypeOf")?!1:!0},t=function(n,i){if(Object.defineProperty){var f=undefined,e=undefined,h=undefined,o=undefined,s=undefined;Object.defineProperty(this,"Scheme",{get:function(){return u(f,":",!0)},set:function(n){f=u(n,":",!1)}});Object.defineProperty(this,"UserInfo",{get:function(){return u(e,"@",!0)},set:function(n){e=u(n,"@",!1)}});Object.defineProperty(this,"Port",{get:function(){return r(h,":",!0)},set:function(n){h=r(n,":",!1)}});Object.defineProperty(this,"Query",{get:function(){return r(o,"?",!0)},set:function(n){o=r(n,"?",!1)}});Object.defineProperty(this,"Hash",{get:function(){return r(s,"#",!0)},set:function(n){s=r(n,"#",!1)}});this.get=function(n){return!n||e||f&&f!="http:"&&f!="https:"?(f||"")+(this.Whack||"")+(e||"")+(this.Host||"")+(h||"")+(this.Path||"")+(o||"")+(s||""):(this.Path||"")+(o||"")+(s||"")}}else this.get=function(n){return!n||this.UserInfo||this.Scheme&&this.Scheme!="http:"&&this.Scheme!="https:"?(this.Scheme||"")+(this.Whack||"")+(this.UserInfo||"")+(this.Host||"")+(this.Port||"")+(this.Path||"")+(this.Query||"")+(this.Hash||""):(this.Path||"")+(this.Query||"")+(this.Hash||"")};this.toString=this.get;n&&typeof n=="string"?this.parse(n):n&&n.constructor===t&&(this.Scheme=n.Scheme,this.Whack=n.Whack,this.UserInfo=n.UserInfo,this.Host=n.Host,this.Port=n.Port,this.Path=n.Path,this.Query=n.Query,this.Hash=n.Hash);i&&this.extend(i)};t.prototype.QueryString=function(n,i){var e,r,u=t.parseQuery(this.Query)||{};if(n)if(n&&o(n))s(u,n);else{if(e=(""+n).toLowerCase(),r=u[e],i===undefined)return r?r.value:undefined;r?r.value=i:f(u,e,n,i)}else return;return this.Query=t.serialize(u),this};t.prototype.RemoveQuery=function(){var n,i=Array.prototype.slice.call(arguments),r=i.length,u=0;if(r){if(n=t.parseQuery(this.Query),!n)return}else return;while(u<r)delete n[i[u++]];return this.Query=t.serialize(n),this};t.prototype.parse=function(n){var t=/^(?:(\w{3,8}:)?(\/\/)?([\w\-\.:]+@)?([\w\-\.]+)(:\d+)?)?(\/?[^\?#]+)?(\?[^#]*)?(#.*)?$/.exec(n);return t&&(this.Scheme=t[1],this.Whack=t[2],this.UserInfo=t[3],this.Host=t[4],this.Port=t[5],this.Path=t[6],this.Query=t[7],this.Hash=t[8],this.Path||this.Scheme||!this.Host||(this.Path=this.Host,this.Host=undefined)),this};t.prototype.extend=function(n){var r,u,s,f,c,e,o,h;if(n)if(n.constructor===t)r=n;else if(typeof n=="string")r=new t(n);else if(n.constructor===Object)u=t.parseQuery(n);else return this;else return this;if(r&&r.Path)this.Scheme=r.Scheme||this.Scheme,this.Host=r.Host||this.Host,r.Path[0]==="/"?this.Path=r.Path:(s=this.Path.split("/"),s.pop(),this.Path=s.concat(r.Path.split("/")).join("/")),this.Query=r.Query,this.Hash=r.Hash;else{if(r&&r.Query&&(u=t.parseQuery(r.Query)),u){f=t.parseQuery(this.Query)||{};c=t.count(f);for(e in u)i.call(u,e)&&(o=u[e],h=f&&f[e],h?h.value=o.value:(o.index=c++,f[e]=o));this.Query=t.serialize(f)}r&&r.Hash&&(this.Hash=r.Hash)}return this};t.prototype.addChild=function(n){var t,i;if(n)n[0]==="/"?this.extend(n):(t=this.Path?this.Path.split("/"):["",""],i=t[t.length-1],i?(i=i.replace(/\.\w+$/,""),t[t.length-1]=i,t.push(n)):t[t.length-1]=n,this.Path=t.join("/"));else return this;return this};t.parseQuery=function(n){var r,u,e,f,o,t,h;if(n){if(n.constructor===Object){t=0;f={};for(r in n)i.call(n,r)&&(u=n[r],e=r.toLowerCase(),f[e]=u&&u.name?u:{name:r,value:u,index:t++});return f}if(typeof n=="string"){for(n[0]==="?"&&(n=n.substring(1)),f={},o=n.split("&"),t=0,h=o.length;t<h;t++){var u,s=o[t].split("="),r=s[0],e=r.toLowerCase();u=s[1]===undefined?null:decodeURIComponent((""+s[1]).replace(/\+/g,"%20"));f[e]={name:r,value:u,index:t}}return f}}else return undefined};t.serialize=function(n){var t,o,u,r,h,s,f;if(n&&typeof n!="string"){if(n.constructor===Object){t=[];for(o in n)i.call(n,o)&&t.push(n[o]);for(t.sort(function(n,t){var i=typeof n.index=="number"?n.index:9999,r=typeof t.index=="number"?t.index:9999;return i-r}),u=[],r=0,h=t.length;r<h;r++)if(s=t[r].name,f=t[r].value,f===undefined)continue;else f===null?u.push(s):u.push(s+"="+e(f||""));return u.join("&")}return null}return n};t.count=function(n){var t=0,r;if(n)for(r in n)i.call(r,n)&&t++;return t};n.URI=t;window.register&&window.register("uri")}(this);
$.widget("cms.masthead",{options:{overlap:!1,padBanner:!1,speed:200,scrollCount:1},_create:function(){var n=new URI(window.location.href),i=n.Hash&&n.Hash.split("#").pop(),t=$('a[name="'+i+'"]'),r=this,u=document.documentElement.clientWidth;this.transitionEvent=this._whichTransitionEvent();this.scrollCount=this.element.innerHeight()-1;this.lastScroll=0;this.flyNavs=this.element.find('[data-role="fly-nav"]').attr("aria-label","submenu");this.element.on("mouseenter mouseleave",$.proxy(this._trackFocus,this));if(!this.options.overlap||this.options.padBanner){this._setBuffer();setTimeout($.proxy(function(){this._setBuffer();i&&t&&t.length&&setTimeout(this._checkAnchor.apply(this,[t]),100)},this),500);$(window).onidle("resize",$.proxy(function(){document.documentElement.clientWidth!==u&&(u=document.documentElement.clientWidth,this._setBuffer())},this),250)}$(window).onidle("scroll",$.proxy(this._checkScroll,this),100);$('a[href*="#"]').on("click",function(t){var i=$(t.target).is("a")?t.target:t.currentTarget,u=new URI(i.href),e=u.Hash,f=$('a[name="'+e+'"]');t.preventDefault();n.Path==u.Path&&f.length?r._checkAnchor.apply(r,[f]):window.location=i.href});this.flyNavs.length!=0&&document.documentElement.clientWidth>985&&this._flyManagement()},_flyManagement:function(){var t=this.flyNavs.closest("li"),i=t.children("a").attr({"aria-haspopup":!0}),n=this.element.find(".desktop-nav > li"),r=n.children("a");i.on("focus",function(){t.removeClass("open");$(this).closest("li").addClass("open")});r.on("keydown",function(t){if(t.keyCode==9&&t.shiftKey){$(this).closest("li").removeClass("open");var i=n.eq($(this).closest("li").index()-1).children("a");i.is('[aria-haspopup="true"]')&&(t.preventDefault(),n.eq($(this).closest("li").index()-1).children("a").focus())}});this.flyNavs.find("li a").last().on("keydown",function(n){n.keyCode==9&&(n.shiftKey||$(this).closest("li.open").removeClass("open"))})},_setBuffer:function(){window.buffer=this.element.innerHeight();this.options.padBanner?$("main").children("section").first().css("padding-top",window.buffer):$("main").css("padding-top",window.buffer)},_trackFocus:function(n){window.focused=n.type==="mouseenter"?!0:!1},_checkFocus:function(){function i(){window.focused===!0&&$("html").is(".up-scroll")&&$("body").is(".fixed")?(clearTimeout(n),t()):$("html").addClass("down-scroll").removeClass("up-scroll")}function t(){n=setTimeout(function(){i()},4e3)}var n;t()},_checkScroll:function(){var n=$(window).scrollTop();$("html").hasClass("anchors")||(n>this.scrollCount?$("body").addClass("fixed"):$("body").removeClass("fixed"));this.lastScroll<n-99?$("html").addClass("down-scroll").removeClass("up-scroll"):this.lastScroll>n+window.innerHeight/3&&($("html").removeClass("down-scroll").addClass("up-scroll"),document.documentElement.clientWidth>985&&this._checkFocus());this.lastScroll=n},_checkAnchor:function(n){var t=n.offset().top;t-=this.options.overlap?this.element.innerHeight():this.element.innerHeight()-window.buffer;this._runScroll.apply(this,[t])},_runScroll:function(n){n<500&&(this.options.speed=100);$("html, body").animate({scrollTop:n},this.options.speed,function(){$("html").removeClass("anchors")})},_whichTransitionEvent:function(){var n,i=document.createElement("fakeelement"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(n in t)if(i.style[n]!==undefined)return t[n]}});window.register&&window.register("/includes/js/header-script.js");
function mobileHeighter(){$(".header-area .desktop-nav").css({height:document.documentElement.clientHeight-$(".header-area .mobile-nav").height()+"px"})}function mobileNav(){var t=$(".menu-btn"),n;t.on("click",function(n){n.preventDefault();simpleShowHide($(this),"mm-open",$("body"))});n=$(".panel-btn");n.click(function(t){t.preventDefault();var i=$(this);i.closest("li").is(".open")?(n.closest("li").removeClass("open"),n.next('[data-role="fly-nav"]').slideUp(400)):(n.closest("li").removeClass("open"),n.next('[data-role="fly-nav"]').slideUp(400),i.closest("li").addClass("open"),i.next('[data-role="fly-nav"]').slideDown(400))});mobileHeighter();$("body").addClass("mobile-ready")}window.register&&window.register("/includes/js/special-mobile-nav-script-v2.js");
function simpleShowHide(n,t,i,r,u){i||(i=n);t||(t="open");u?(n.toggleClass(t),i.toggleClass(t),i.slideToggle(t),r&&r.toggleClass(t)):(i.toggleClass(t),r&&r.toggleClass(t))}window.register&&window.register("/includes/js/simple-show-hide-script.js");
rrequire(["uri","/includes/js/header-script.js","/includes/js/special-mobile-nav-script-v2.js","/includes/js/simple-show-hide-script.js"],function(){var t=$("body"),n;$("#HeaderArea").masthead();n=window.innerWidth-1e3;n!==Math.abs(n)&&(mobileNav(),setTimeout(function(){mobileHeighter()},500));$(window).onidle("resize",function(){n=window.innerWidth-1e3;n!==Math.abs(n)&&($("body").is(".mobile-ready")||mobileNav(),setTimeout(function(){mobileHeighter()},500))},150)});
rrequire('https://s3-us-west-2.amazonaws.com/scorpion.cxc/chat-v3.js');