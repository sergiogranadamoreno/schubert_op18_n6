//~ Revision: 174, Copyright (C) 2014-2017: Willem Vree, contributions Stéphane David.
//~ This program is free software; you can redistribute it and/or modify it under the terms of the
//~ GNU General Public License as published by the Free Software Foundation; either version 2 of
//~ the License, or (at your option) any later version.
//~ This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
//~ without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
//~ See the GNU General Public License for more details. <http://www.gnu.org/licenses/gpl.html>.
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(g,m,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");g!=Array.prototype&&g!=Object.prototype&&(g[m]=p.value)};$jscomp.getGlobal=function(g){return"undefined"!=typeof window&&window===g?g:"undefined"!=typeof global&&null!=global?global:g};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(g){return $jscomp.SYMBOL_PREFIX+(g||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var g=$jscomp.global.Symbol.iterator;g||(g=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[g]&&$jscomp.defineProperty(Array.prototype,g,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(g){var m=0;return $jscomp.iteratorPrototype(function(){return m<g.length?{done:!1,value:g[m++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(g){$jscomp.initSymbolIterator();g={next:g};g[$jscomp.global.Symbol.iterator]=function(){return this};return g};$jscomp.iteratorFromArray=function(g,m){$jscomp.initSymbolIterator();g instanceof String&&(g+="");var p=0,t={next:function(){if(p<g.length){var u=p++;return{value:m(u,g[u]),done:!1}}t.next=function(){return{done:!0,value:void 0}};return t.next()}};t[Symbol.iterator]=function(){return t};return t};
$jscomp.polyfill=function(g,m,p,t){if(m){p=$jscomp.global;g=g.split(".");for(t=0;t<g.length-1;t++){var u=g[t];u in p||(p[u]={});p=p[u]}g=g[g.length-1];t=p[g];m=m(t);m!=t&&null!=m&&$jscomp.defineProperty(p,g,{configurable:!0,writable:!0,value:m})}};$jscomp.polyfill("Array.prototype.keys",function(g){return g?g:function(){return $jscomp.iteratorFromArray(this,function(g){return g})}},"es6-impl","es3");
$jscomp.findInternal=function(g,m,p){g instanceof String&&(g=String(g));for(var t=g.length,u=0;u<t;u++){var C=g[u];if(m.call(p,C,u,g))return{i:u,v:C}}return{i:-1,v:void 0}};$jscomp.polyfill("Array.prototype.find",function(g){return g?g:function(g,p){return $jscomp.findInternal(this,g,p).v}},"es6-impl","es3");var msc_VERSION=44,opt,onYouTubeIframeAPIReady,msc_credits,media_height,times_arr,offset_js,abc_arr,lpRec;
(function(){function g(){opt={jump:0,no_menu:0,repufld:0,noplyr:0,nocsr:0,media_height:"",btns:1,ipadr:"",mstr:0,autscl:0,ctrmed:0,ctrnot:0,lncsr:0,opacity:.2,synbox:0,speed:1,top_margin:0,yubvid:"",nomed:0,delay:0,repskip:0,spdctl:0,lopctl:0,metro:0,btime:-1,etime:0};$("#yubuse").prop("checked",!1);$("#yvdlbl, #vidyub").css("display","none");msc_credits=void 0;$("#credits").html("");media_height=void 0;$("#buttons").css("height","");W="";r=0;h=null}function m(b,c,d,e,f,g,l){this.xs=b;this.ymin=c;
this.ymax=d;this.times=e;this.times.unshift(0);this.tixbts=l;this.line=0;this.msre=1;this.width=0;this.wijzer=$(document.createElementNS("http://www.w3.org/2000/svg","svg"));this.wijzer.attr("id","wijzer");this.wijzer.css("overflow","visible");this.shade=$(document.createElementNS("http://www.w3.org/2000/svg","rect"));this.shade.attr({width:"100%",height:"100%"});this.wijzer.append(this.shade);this.tiktak=$(document.createElementNS("http://www.w3.org/2000/svg","text"));this.tiktak.attr("y",5);this.tiktak.css({fill:"green",
stroke:"green","text-anchor":"end","font-size":"xx-large"});this.wijzer.append(this.tiktak);this.atag=$(document.createElementNS("http://www.w3.org/2000/svg","text"));this.atag.attr("id","atag");this.atag.text("<");this.atag.css({fill:"red",stroke:"red","text-anchor":"middle"});this.btag=$(document.createElementNS("http://www.w3.org/2000/svg","text"));this.btag.attr("id","btag");this.btag.text(">");this.btag.css({fill:"red",stroke:"red","text-anchor":"middle"});"undefined"==typeof lpRec&&(lpRec={loopBtn:1,
loopStart:0,loopEnd:e[e.length-1]},$("#lopctl").prop("checked",!1),opt.lopctl=0);this.hmargin=100;this.vmargin=50;this.tmargin=0<=opt.top_margin?opt.top_margin:this.vmargin;this.lastSync=0;this.setScale();this.cursorTime=0;this.time_ix=1;this.tixlb=f;this.lbtix=g;this.repcnt=1;this.noCursor=0}function p(){this.paused=!0;this.currentTime=0;this.klok=-1;this.step=200;this.playing=0;ca(.1,4,.05)}function t(){var b=$("#abclbl"),c=b.html(),d=$("#impbox").prop("checked");b.toggleClass("abcimp",d);b.html(d?
c.replace("score file","<b>import</b>"):c.replace("<b>import</b>","score file"));d&&!opt.btns&&$("#btns").click()}function u(b,c){if(0>b.indexOf("//# This page"))alert("not a preload file");else{b=c.replace(/\n/g,"");var d=b.match(/offset_js = (.*);/);1<d.length&&(q=offset_js=parseFloat(d[1]));d=b.match(/times_arr = (.*);abc_arr/);1<d.length&&(times=da(JSON.parse(d[1])));k&&(k.times=times,k.times.unshift(0));$("#impbox").prop("checked",!1);t()}}function C(b){var c=b.slice(0,4E3);$("#impbox").prop("checked")?
u(c,b):0<=c.indexOf("//# This page")?(g(),eval(b),K()):0<=c.indexOf("X:")?ea(b):-1==c.indexOf("<?xml ")?alert("not an xml file nor an abc file"):(b=$.parseXML(b),b=vertaal(b,{p:"f",t:1,u:opt.repufld,v:3}),b[1]&&$("#err").append(b[1]+"\n"),ea(b[0]))}function ua(b){$("#err").text("");lpRec=offset_js=times_arr=void 0;var c=b[0].link;D=b[0].name.split(".")[0];$("#wait").toggle(!0);$("#err").text("link: "+c+"\n");$.get(c,"",null,"text").done(function(b,c){$("#err").append("preload: "+c+"\n");abc_arr=b.split("\n");
K()}).fail(function(b,c,f){$("#wait").append("\npreload failed: "+c)})}function fa(b,c){$("#err").text("");offset_js=times_arr=void 0;$("#impbox").prop("checked")||(lpRec=void 0);var d=new FileReader;d.onload=function(b){C(d.result)};var e="dd"==b?c[0]:$("#fknp").prop("files")[0];e&&(D=e.name.split(".")[0],d.readAsText(e))}function va(b){b.stopPropagation();b.preventDefault();$("body").toggleClass("indrag",!1);b=b.dataTransfer.files;/video|audio/.test(b[0].type)?X("dd",b):fa("dd",b)}function X(b,
c){var d,e;"dbx"==b?(d=c[0],e=d.link):(d="dd"==b?c[0]:$("#mknp").prop("files")[0],e=window.URL.createObjectURL(d));M(d.name,e)}function wa(){$("#yubid")[0].checkValidity()?(opt.yubvid=$("#yubid").val(),M("","")):alert("The youtube video id should be 11 characters long,\neach from 'A' to 'Z', 'a' to 'z', '0' to '9', '-' or '_'")}function ca(b,c,d){for(w=[];b<=c+.001;b+=d)b=Math.round(100*b)/100,w.push(b)}function ga(b){function c(b){$("#yubuse").attr("disabled",b);$("#yublbl").css("color",b?"#aaa":
"#000");$("#yubload").toggle(b)}b&&(ha=b);"undefined"==typeof YT?(c(!0),$("#yubuse").prop("checked",!1),$.getScript("https://www.youtube.com/iframe_api")):(c(!1),ha())}function M(b,c){c=c.replace("www.dropbox","dl.dropboxusercontent").split("?")[0];W=0==c.indexOf("http")?c:b;var d;b=b.split("?")[0];$("#vid, #aud").attr("src","");N&&N.stopVideo();G.clearKlok();var e=0<=opt.btime?opt.btime:q;if(b){r=0;if(/\.webm$|\.mp4$/i.test(b)){d=$("#vid");if(0==d.length)return;$("#vidyub, #aud").css("display","none");
d.css("display","inline-block");$("#buttons").toggleClass("video",!0)}else{d=$("#aud");if(0==d.length)return;$("#vidyub, #vid").css("display","none");d.css("display","inline-block");$("#buttons").toggleClass("video",!1)}h=d.get(0);/\.ogg$/i.test(c)&&(h.canPlayType("audio/ogg")||(c=c.replace(/\.ogg$/i,".mp3")));/\.webm$/i.test(c)&&(h.canPlayType("video/webm")||(c=c.replace(/\.webm$/i,".mp4")));d.attr("src",c+(q?"#t="+e:""));d.on("timeupdate",O);d.on("playing",function(){G.setKlok(null,0);h.playbackRate=
opt.speed});d.on("pause",function(){G.pause()});d.on("loadedmetadata",x);h.volume=.7;ca(.5,2,.05);E(0);x()}else r=1,$("#vid, #aud").css("display","none"),$("#vidyub").css("display","inline-block"),$("#buttons").toggleClass("video",!0),ga(function(){h=N;w=h.getAvailablePlaybackRates();E(0);x();h.cueVideoById({videoId:opt.yubvid,startSeconds:e});h.setVolume(70)})}function ia(){var b=$("#yubuse").prop("checked");$("#medlbl").css("display",b?"none":"block");$("#yvdlbl").css("display",b?"block":"none")}
function Y(){var b=parseInt($("body").css("width"))/2,c=parseInt($("#vid").css("width"))/2,d=parseInt($("#vidyub").css("width"))/2,e=parseInt($("#aud").css("width"))/2;$("#vid").css("margin-left",opt.ctrmed?(b-c).toFixed()+"px":"0px");$("#vidyub").css("margin-left",opt.ctrmed?(b-d).toFixed()+"px":"0px");$("#aud").css("margin-left",opt.ctrmed?(b-e).toFixed()+"px":"0px");$("#meddiv").css("text-align",opt.ctrmed?"left":"center")}function x(){h&&$(h).toggle(!opt.noplyr);$("#buttons").toggleClass("noheight",
!!opt.noplyr);var b=$("#btns").prop("checked"),c=parseFloat($("#buttons").css("height")),d=parseFloat($("body").css("height")),b=b?parseFloat($("#err").css("height")):0,d=100-(100*(c+b)/d).toFixed();$("#notation").css("height",d+"%");$("#vidyub").css("width",(1.52*c).toFixed());Y()}function ea(b){function c(b){b=Object.keys(b).map(function(b){return parseFloat(b)});b.sort(function(b,c){return b-c});return b}function d(b){var c={diamond:1,triangle:1,square:1,normal:1},d=['%%beginsvg\n<defs>\n<text id="x" x="-3" y="0">&#xe263;</text>\n<text id="x-" x="-3" y="0">&#xe263;</text>\n<text id="x+" x="-3" y="0">&#xe263;</text>\n<text id="normal" x="-3.7" y="0">&#xe0a3;</text>\n<text id="normal-" x="-3.7" y="0">&#xe0a3;</text>\n<text id="normal+" x="-3.7" y="0">&#xe0a4;</text>\n<g id="circle-x"><text x="-3" y="0">&#xe263;</text><circle r="4" class="stroke"/></g>\n<g id="circle-x-"><text x="-3" y="0">&#xe263;</text><circle r="4" class="stroke"/></g>\n<path id="triangle" d="m-4 -3.2l4 6.4 4 -6.4z" class="stroke" style="stroke-width:1.4"/>\n<path id="triangle-" d="m-4 -3.2l4 6.4 4 -6.4z" class="stroke" style="stroke-width:1.4"/>\n<path id="triangle+" d="m-4 -3.2l4 6.4 4 -6.4z" class="stroke" style="fill:#000"/>\n<path id="square" d="m-3.5 3l0 -6.2 7.2 0 0 6.2z" class="stroke" style="stroke-width:1.4"/>\n<path id="square-" d="m-3.5 3l0 -6.2 7.2 0 0 6.2z" class="stroke" style="stroke-width:1.4"/>\n<path id="square+" d="m-3.5 3l0 -6.2 7.2 0 0 6.2z" class="stroke" style="fill:#000"/>\n<path id="diamond" d="m0 -3l4.2 3.2 -4.2 3.2 -4.2 -3.2z" class="stroke" style="stroke-width:1.4"/>\n<path id="diamond-" d="m0 -3l4.2 3.2 -4.2 3.2 -4.2 -3.2z" class="stroke" style="stroke-width:1.4"/>\n<path id="diamond+" d="m0 -3l4.2 3.2 -4.2 3.2 -4.2 -3.2z" class="stroke" style="fill:#000"/>\n</defs>\n%%endsvg'],
e,f,g,A="default",l={"default":[]};b=b.split("\n");for(e=0;e<b.length;++e)if(f=b[e],0<=f.indexOf("I:percmap")&&(f=f.split(" "),g=f[4],g in c&&(g=g+"+,"+g),f="%%map perc"+A+" "+f[1]+" print="+f[2]+" midi="+f[3]+" heads="+g,l[A].push(f)),0<=f.indexOf("V:")&&(g=f.match(/V:\s*(\S+)/)))A=g[1],A in l||(l[A]=[]);for(A in l)d=d.concat(l[A]);for(e=0;e<b.length;++e)f=b[e],0<=f.indexOf("I:percmap")||(0<=f.indexOf("V:")||0<=f.indexOf("K:")?((g=f.match(/V:\s*(\S+)/))&&(A=g[1]),0==l[A].length&&(A="default"),d.push(f),
0<=f.indexOf("perc")&&-1==f.indexOf("map=")&&(f+=" map=perc"),0<=f.indexOf("map=perc")&&0<l[A].length&&d.push("%%voicemap perc"+A),0<=f.indexOf("map=off")&&d.push("%%voicemap")):d.push(f));return d.join("\n")}var e="",f="",g,l={},v={},n=[],p,r=[],P=[],t=[],u=[],y=[],F=[],z=[],H=[[0,0,1]],w=[];Q="";B=[];R=[];k=null;q=0;L=.1;S=0;var x=$("#notation");$("body").attr("title","");x.html("");var D=function(b){var c,d;b=b.replace(/\r\n/g,"\n");b=b.split(/^\s*X:/m);if(1==b.length)return[];c=b[1].split(/^\s*$/m);
c=b[0]+"X:"+c[0];b=c.split(/\r\n|[\n\r\u0085\u2028\u2029]/);for(c=0;c<Math.min(100,b.length);++c)(d=b[c].match(/%%scale\s*([\d.]+)/))&&1==d[1]&&(b[c]="%%scale 0.99");return b}(b);b=D.join("\n");0<=b.indexOf("percmap")&&(b=d(b));g=new Abc({img_out:function(b){-1!=b.indexOf("<svg")&&(b=b.replace(/width="(\d*)px"\s*height="(\d*)px"/,'width="$1px" height="$2px" viewbox="0 0 $1 $2"'),l=c(l),v=c(v),1<l.length&&l[1]<Math.min.apply(null,P)&&l.splice(0,1),n.push({xs:l,ys:v}),l={},v={},P=[]);e+=b},errmsg:function(b,
c,d){f+=b+"\n"},read_file:function(b){return""},anno_start:function(b,c,d,e,f,h,k){"note"!=b&&"rest"!=b||P.push(g.ax(e));"bar"==b&&(e=g.ax(e),f=g.ay(f),k=g.ah(k),l[e]=1,v[f]=1,v[f+k]=1,p=g.ax(0),l[p]=1)},get_abcmodel:function(b,c,d){var e=768;d=0;var f,g=0;try{f=c[0].meter.a_meter[0].top}catch(Ga){f="4"}for(;b;b=b.ts_next)if(0==b.v)switch(b.type){case 14:c=b.tempo_notes.reduce(function(b,c){return b+c});e=c*b.tempo/60;break;case 8:case 10:d+=b.dur/e;break;case 0:if(b.time==g){F[F.length-1]+=b.bar_type;
break}"eoln"in b&&(g=b.time);z.push(d);d=0;f=f.replace("C|","2").replace("C","4");y.push(parseInt(f));F.push(b.bar_type);t.push(b.text);break;case 6:f=b.a_meter.length?b.a_meter[0].top:"4"}}});g.tosvg("abc2svg",b);""!=f&&$("#err").append(f);x.html(e);B=x.find("svg");B.each(function(){var b=$(this).find(".g");R.push(b.length?b:$(this))});b=[];for(var x=[],E=[],I=0;I<n.length;++I){var C=n[I];b[I]=C.xs;x[I]=C.ys[0];E[I]=C.ys[C.ys.length-1]}(function(){for(var b=0,c=1,d=n[b].xs.length,e=0,f=0,g=1,l=0,
h=1,k=1,J=0,m={};;){var v=t[e-1];if(v=v?v.match(/[,\d]*(\d)/):null)v=parseInt(v[1]),v!=J&&(J=v);if(!J||J>=h)f+=z[e],r.push(f),u.push(y[e]),w[b]||(w[b]=[]),w[b][c]||(w[b][c]=[]),w[b][c][k]=H.length,H.push([b,c,k]);"|"!=F[e]&&(J=0);v=/^:/.test(F[e]);if(!v||1!=h||m[e]||opt.repskip){if(v&&(h=1),/:$/.test(F[e])&&(g=H.length,l=e+1,h=1),e+=1,c+=1,c>=d){c=1;b+=1;if(b>=n.length)break;d=n[b].xs.length}}else h=2,k+=1,m[e]=1,e=l,c=H[g][1],b=H[g][0],d=n[b].xs.length}})();"undefined"!=typeof times_arr&&(r=da(times_arr));
"undefined"!=typeof offset_js&&(q=offset_js);opt.offset&&(q=opt.offset);Q=D;k=new m(b,x,E,r,H,w,u);k.setline(0);B.each(function(){$(this).mousedown(xa)});h||(h=G);setTimeout(function(){ja()},0)}function da(b){b=b.map(function(b){return b.slice(1)});return b=b.reduce(function(b,d){return b.concat(d)})}function O(){if(h){var b=(r?h.getCurrentTime():h.currentTime)-q,c=b;0>b&&(b=0);opt.lopctl&&(b>lpRec.loopEnd&&(b=lpRec.loopStart),b<lpRec.loopStart&&(b=lpRec.loopStart+.01),b!=c&&(r?h.seekTo(b+q,!0):h.currentTime=
b+q));k&&k.time2x(b)}}function xa(b){b.preventDefault();b.stopPropagation();var c=B.get().indexOf(this);b=b.clientX;b-=$(this).position().left+hOff;k.x2time(b,c)}function ka(){$("#sync_out").css("display",opt.synbox?"block":"none");k&&opt.synbox&&k.showSyncInfo()}function la(){$("#medbts").css("display",opt.btns?"inline":"none");$("#err").css("display",opt.btns?"block":"none");x();opt.btns&&"undefined"==typeof FileReader&&$("#notation").prepend("<h3>Your browser does not support reading of local files ...</h3>but you can use the preload feature.")}
function Z(){k&&k.time2x(k.cursorTime);$("#notation").css("text-align",opt.ctrnot?"center":"left")}function ma(){var b=$("#spdctl").prop("checked");$("#spdlbl").css("display",b?"block":"none")}function na(){function b(b){$("#drpuse").prop("checked",!b);$("#drpuse").attr("disabled",b);$("#drplbl").css("color",b?"#aaa":"#000")}if("undefined"==typeof Dropbox)b(!0),$.ajax({url:"https://www.dropbox.com/static/api/2/dropins.js",dataType:"script",cache:!0}).done(function(){b(!1);Dropbox.init({appKey:"ckknarypgq10318"});
ya();na()});else{var c=$("#drpuse").prop("checked");$(".dropbox-dropin-btn").css("display",c?"inline-block":"none");$("#fknp, #mknp").css("display",c?"none":"inline-block")}}function za(b,c){function d(){f<=e&&(z=setTimeout(d,g),k.tiktak.text(f),f+=1)}var e,f,g;clearInterval(z);z=0;e=k.tixbts[b-1];f=1;g=(k.times[b]-c)/e/opt.speed*1E3;z=setTimeout(d,0)}function oa(){k&&setTimeout(function(){clearInterval(z);z=0;k.tiktak.text("")},0)}function Aa(b,c){function d(){$("#countin").toggle(!1);clearInterval(z);
z=0}function e(){$("#countin").html("<b>"+f.num+"</b>").toggle(!0);0==f.num--&&(d(),T(b,c))}if(z)d();else{b=b.replace(":true",":false");var f=k.compCountIn();e();z=setInterval(e,1E3*f.time)}}function T(b,c){if(h){var d=b.split(":"),e="true"==d[0],f=parseFloat(d[1]),d="true"==d[2],g=r?h.getPlayerState():0,l=r?1!=g:h.paused;r?5!=g&&h.seekTo(f,!0):h.currentTime=f;if(l&&e||!l&&!e){if(d){Aa(b,c);return}if(c){setTimeout(function(){T(b,0)},c);return}r?h.playVideo():h.play();opt.metro&&k&&(k.time_ix=0)}else r?
5!=g&&h.pauseVideo():h.pause(),opt.metro&&oa();e=!opt.lncsr&&!e;k&&k.time2x(f-q,e)}}function aa(b,c){var d=b+":"+c.toFixed(2)+":"+(b&&$("#cntin").prop("checked"));y?y.send(d):T(d,0)}function U(b){var c=b.keyCode?b.keyCode:b.which,d=1;switch(c){case 219:case 88:k.goMsre(0);break;case 221:case 67:k.goMsre(1);break;case 80:case 89:case 90:if(!h)break;aa(!0,r?h.getCurrentTime():h.currentTime);break;case 65:$("#autscl").click();break;case 70:$("#btns").click();break;case 72:$("#help").toggleClass("showhlp");
case 76:$("#lncsr").click();break;case 77:$("#menu label").toggle();break;case 83:opt.spdctl&&!opt.lopctl?$("#lopctl").click():opt.lopctl&&!opt.spdctl?$("#spdctl").click():$("#spdctl, #lopctl").click();break;case 171:case 61:case 107:E(1);break;case 173:case 109:E(-1);break;default:d=0}if(opt.synbox&&k&&!d){switch(c){case 190:b.ctrlKey?q+=L:k.changeTimesKeyb(L);break;case 188:b.ctrlKey?q-=L:k.changeTimesKeyb(-L);break;case 87:pa()}b.preventDefault();k.showSyncInfo()}}function ba(){Y();k&&(B[0].width.baseVal.value>
screen.width||opt.autscl)&&(k.setSize.call(k),k.setScale.call(k))}function Ba(b){b=b.map(function(b){return window.btoa(unescape(encodeURIComponent(b)))}).join("++");for(var c=[],d=0;d<=b.length;)c.push(b.substr(d,150)),d+=150;return c}function Ca(b){function c(c){return b.join("").split(c).map(function(b){return decodeURIComponent(escape(window.atob(b)))})}var d;try{d=c("++")}catch(e){d=c("+")}return d.join("\n")}function pa(){var b,c,d=[],e,f,g="[",l,h,m,n;e='media_file = "'+(r?"":W)+'";\n';h="undefined"!=
typeof msc_credits?"msc_credits = "+JSON.stringify(msc_credits)+";\n":"";f="offset_js = "+q.toFixed(2)+";\n";opt.synbox=0;m="opt = "+JSON.stringify(opt)+";\n";opt.synbox=1;n=lpRec.loopBtn?"lpRec = "+JSON.stringify(lpRec)+";\n":"";for(c=k.times.map(function(b){return b.toFixed(2)});c.length;)l=c[9],d.push(g+c.splice(0,10).join(",")+"]"),g="["+l+",";c="times_arr = ["+d.join(",\n")+"];\n";$("#encr").prop("checked")?(g=Ba(Q).map(function(b){return JSON.stringify(b)}),d=['"X:1"']):(g=[""],d=Q.map(function(b){return JSON.stringify(b)}));
g="abc_enc = ["+g.join(",\n")+"];\n";d="abc_arr = ["+d.join(",\n")+"];\n";c='//########################################\n//# This page contains score data, timing data and the media file path. Save it as a text file in\n//# the same folder as abcweb.html. Abcweb preloads score and media when it is opened with the\n//# file name as parameter in the url, for example: http://your.domain.org/abcweb.html?file_name\n//# Also works locally with file:///path/to/abcweb.html?file_name\n//# **** You have to correct the path to the media file below! (media_file="...";) ****\n//########################################\n//#\n'+
(e+h+f+m+n+c+d+g);var p="data:text/plain;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(c)));if($("#drpuse").prop("checked"))$("#err").text(""),Dropbox.save(p,D+".js",{success:function(){$("#err").text('"'+D+'.js" saved to your Dropbox.\n')},progress:function(b){},cancel:function(){},error:function(b){$("#err").text("Error: "+b+"\n");$("#err").append("fnm: "+D+", len: "+p.length+"\n")}});else try{b=document.createElement("a"),b.href=p,b.download=D+".js",b.text="Save synchronization data",
$("#saveDiv").append(b),b.click()}catch(P){confirm("Do you want to save your synchronization data?")&&(document.open("text/html"),document.write("<pre>"+c+"</pre>"),document.close())}}function Da(){g();$("#err").text("");var b,c="",d="",e,f,h,l,k="",m;b=window.location.href.replace("?dl=0","").split("?");if(f=b[0].match(/:\/\/([^/:]+)/))m=f[1];if(1<b.length){h=b[1].split("&");for(l=0;l<h.length;l++)b=h[l].replace(/d:(\w{15}\/[^.]+\.)/,"https://dl.dropboxusercontent.com/s/$1"),(f=b.match(/xml=(.*)/))?
c=decodeURIComponent(f[1]).replace("www.dropbox","dl.dropboxusercontent"):(f=b.match(/med=(.*)/))?k=f[1]:(f=b.match(/tmr=(\d*)/))?n.top_margin=parseInt(f[1]):(f=b.match(/mht=(\d*)/))?n.media_height=parseInt(f[1]):(f=b.match(/tb=([\d.]*)/))?n.btime=parseFloat(f[1]):(f=b.match(/te=([\d.]*)/))?n.etime=parseFloat(f[1]):(f=b.match(/off=([+-]?[\d.]+)/))?n.offset=parseFloat(f[1]):(f=b.match(/ip=(\d+.\d+.\d+.\d+)/))?n.ipadr=f[1]:(f=b.match(/^d([\d.]+)$/))?n.delay=parseFloat(f[1]):b.match(/ip=host/)&&m?n.ipadr=
m:"mstr"==b?n.mstr=1:"jmp"==b?n.jump=1:"syn"==b?n.synbox=1:"nb"==b?n.no_menu=1:"sp"==b?n.spdctl=n.lopctl=1:"ur"==b?n.repufld=1:"npl"==b?n.noplyr=1:"ncr"==b?n.nocsr=1:"asc"==b?n.autscl=1:"cm"==b?n.ctrmed=1:"cs"==b?n.ctrnot=1:"nomed"==b?(n.nomed=1,n.noplyr=1):d=b,/(\.xml$)|(\.abc$)/.test(d)&&(c=d,d=""),/(\.mp3$)|(\.mp4$)|(\.ogg$)|(\.webm$)/.test(d)&&(k=d,d="");k&&(11==k.length&&-1==k.indexOf(".")?opt.yubvid=k:media_file=decodeURIComponent(k).replace("www.dropbox","dl.dropboxusercontent"));(d||c)&&$("#wait").toggle(!0);
c?$.get(c,"",null,"text").done(function(b,c){$("#err").append("preload: "+c+"\n");abc_arr=b.split("\n");K()}).fail(function(b,c,d){$("#wait").append("\npreload failed: "+c)}):d&&(0<=d.indexOf("dropbox.com")&&(d+="?dl=1"),$.getScript(d).done(function(b,c){$("#err").append("preload: "+c+"\n");K()}).fail(function(b,c,f){$("#wait,#err").append("preload failed: "+f+", trying script tag ...\n");e=document.createElement("script");e.src=d;e.onload=function(){K()};e.onerror=function(){$("#wait").append("\npreload failed")};
document.head.appendChild(e);document.head.removeChild(e)}))}return d||c}function K(){if("undefined"!=typeof abc_arr){var b=abc_arr.join("\n");"undefined"!=typeof abc_enc&&abc_enc.length&&(b=Ca(abc_enc),opt.no_menu=1);C(b)}for(var c in n)opt[c]=n[c];"nospd"in opt&&(opt.spdctl=!opt.nospd,opt.nospd=void 0);"undefined"!=typeof media_file&&media_file&&!opt.nomed&&(M(media_file,media_file),opt.btns=0);opt.yubvid&&!opt.nomed&&(M("",""),opt.btns=0);"undefined"!=typeof msc_credits&&(b=msc_credits.reduce(function(b,
c){return b+c}),$("#credits").html(b));"undefined"!=typeof media_height&&(opt.media_height=media_height);opt.no_menu&&($("#sync").css("display","none"),opt.btns=0,$("body").off("dragenter dragleave drop dragover"),$("body").on("contextmenu",function(b){b.preventDefault()}),h.controlsList&&h.controlsList.add("nodownload"));$("#wait").toggle(!1);qa(!1)}function qa(b){if(b)for(var c in n)opt[c]=n[c];opt.ipadr&&Ea(opt.ipadr);opt.media_height&&$("#buttons").css("height",opt.media_height);opt.offset&&(q=
opt.offset);for(c in opt)$("#"+c).prop("checked",opt[c]);la();Z();ma();ka();ba();$("#sync, #medbts, #meddiv, #err").css("visibility","visible")}function V(b){$("#err").append(b+"\n")}function Ea(b){y?V("websocket already open"):(y=new WebSocket("ws://"+b+":8091/"),y.onmessage=function(b){"master"==b.data?$("#mbar").css("background","rgba(255,0,0,0.2)"):T(b.data,100*opt.delay)},y.onerror=function(b){V("socket error (server inaccessible?)");y=null},y.onopen=function(b){$("#mbar").css("background","rgba(0,255,0,0.2)");
opt.mstr&&y.send("master");V("connection opened")},y.onclose=function(b){$("#mbar").css("background","");V("connection closed: "+b.code);y=null})}function Fa(b){if(!ra()&&"meddiv"==b.target.id){$("#buttons").css("opacity","0.5");$("#streep").css("opacity","1.0");var c="touchstart"==b.type,d=$("#meddiv"),e=c?b.originalEvent.touches[0].clientY:b.pageY,f=$("#buttons").height();d.css("cursor","row-resize");d.on("mousemove touchmove",function(b){var d=$("body").height();opt.media_height=(100*(f+(c?b.originalEvent.touches[0].clientY:
b.pageY)-e)/d).toFixed()+"%";$("#buttons").css("height",opt.media_height)});d.on("mouseup touchend",function(b){$("#buttons").css("opacity","1.0");$("#streep").css("opacity","0.0");d.off("mousemove touchmove mouseup touchend");d.css("cursor","initial");x()})}}function E(b){if(2==b){b=$("#speed").val();var c=b-opt.speed;.06>=Math.abs(c)?b=0<c?1:-1:(opt.speed=b,b=0)}c=w.map(function(b,c){return{x:Math.abs(b-opt.speed),i:c}}).sort(function(b,c){return b.x-c.x})[0].i;-1==b&&0<c&&(opt.speed=w[c+b]);1==
b&&c<w.length-1&&(opt.speed=w[c+b]);0==b&&(opt.speed=w[c]);$("#speed").val(opt.speed.toFixed(2));h&&!r&&(h.playbackRate=opt.speed);h&&r&&h.setPlaybackRate(opt.speed)}function ja(){k&&k.drawTags();opt.lopctl=$("#lopctl").prop("checked");$("#atag").css("display",opt.lopctl?"block":"none");$("#btag").css("display",opt.lopctl?"block":"none")}function ya(){var b=Dropbox.createChooseButton({success:ua,cancel:function(){},linkType:"direct",multiselect:!1,extensions:[".xml",".abc",".txt",".js"]}),c=Dropbox.createChooseButton({success:function(b){X("dbx",
b)},cancel:function(){},linkType:"preview",multiselect:!1,extensions:[".ogg",".mp3",".webm",".mp4"]});$("#abcfile").append(b);$("#mediafile").append(c)}function sa(b){b=$(this).prop("checked");var c=$(this).attr("id");opt[c]=b;switch(c){case "ctrnot":Z();break;case "ctrmed":Y();break;case "spdctl":ma();break;case "autscl":ba();break;case "lncsr":Z();break;case "btns":la();break;case "synbox":ka();break;case "noplyr":x();break;case "nocsr":k&&!G.paused&&(k.noCursor=b);break;case "metro":b||oa()}}function ta(){$("#menu label").css("display",
"none")}function ra(){var b="none"!=$("#menu label").css("display")||$("#help").hasClass("showhlp");b&&($("#help").toggleClass("showhlp",!1),setTimeout(ta,0));return b}var B,R,k,q,W,Q,h,D,N,r=0,w=[],S=0,ha,n={},y=null,L,G=new p;hOff=10;opt={};onYouTubeIframeAPIReady=function(){N=new YT.Player("vidyub",{events:{onReady:function(){$("#yubuse").prop("checked",!0);ia();ga()},onStateChange:function(b){b.data==YT.PlayerState.PLAYING?(G.setKlok(O,100),E(0)):G.pause();b.data==YT.PlayerState.CUED&&x()}}})};
m.prototype.setline=function(b){$("#wijzer").remove();this.sety(this.ymin[b],this.ymax[b]);this.setx(0,0,0);this.line=b;this.wijzer.prependTo(R[b]);this.width=B[b].width.baseVal.value;var c=$("#notation"),d=c.scrollTop(),e=d+c.height()-this.vmargin;(this.line_offsets[b+1]>e||this.line_offsets[b]<d+this.vmargin)&&c.scrollTop(this.line_offsets[b]-this.tmargin)};m.prototype.sety=function(b,c){this.wijzer.attr("y",b.toFixed(2));this.wijzer.attr("width","2");this.wijzer.attr("height",(c-b).toFixed(2));
this.shade.attr("fill","blue")};m.prototype.setx=function(b,c,d){var e=$("#notation"),f=e.scrollLeft(),g=f+e.width()-this.hmargin;opt.lncsr?(this.wijzer.attr("x",b.toFixed(2)),this.wijzer.attr("width","2"),this.shade.attr("fill-opacity",this.noCursor?"0.0":"0.5"),b/=this.scale,(b>g||b<f+this.hmargin)&&e.scrollLeft(b-this.hmargin)):(this.wijzer.attr("x",c.toFixed(2)),this.wijzer.attr("width",(d-c).toFixed(2)),this.shade.attr("fill-opacity",this.noCursor?"0.0":""+opt.opacity),c/=this.scale,d/=this.scale,
(d>g||c<f+this.hmargin)&&e.scrollLeft(c-this.hmargin))};m.prototype.time2x=function(b,c){if(!S){this.cursorTime=b;var d,e,f,g,l;d=this.times;for(l=this.time_ix;l<d.length&&b>d[l];)l+=1;if(opt.etime&&b+q>opt.etime||!opt.etime&&l==d.length)r?1==h.getPlayerState()&&h.pauseVideo():h.paused||h.pause();else{for(;0<l&&b<d[l-1];)--l;c&&.3>d[l]-b&&(d[l]=b-.01,console.log("tijdcor: "+(b-.01)+", maat: "+l),l<d.length-1&&(l+=1));opt.metro&&l!=this.time_ix&&za(l,b);this.time_ix=l;this.repcnt=this.tixlb[l][2];
this.msre=g=this.tixlb[l][1];e=this.tixlb[l][0];this.line!=e&&this.setline(e);f=this.xs[e];e=d[l-1];l=d[l];d=f[g-1]+hOff;g=f[g]+hOff;e=d+(g-d)*(b-e)/(l-e);f=this.times[this.times.length-1];0>=b||b>f?this.setx(0,0,0):this.setx(e,d,g);opt.synbox&&this.showSyncInfo()}}};m.prototype.drawTags=function(){for(var b in{atag:1,btag:1})b in lpRec&&(a=lpRec[b],this[b].prependTo(R[a.line]),this[b].attr("x",a.x),this[b].attr("y",this.ymin[a.line]))};m.prototype.doLoopTag=function(b,c,d,e,f){function g(b,c,d,e,
f,g,h,k){if(!opt.lncsr){var l=m.xs[d];g=m.times;c=l[h-1];l=l[h];h=g[k-1];k=g[k];lpRec.loopStart==h+.01&&(b="btag",f="loopEnd");lpRec.loopEnd==k-.01&&(b="atag",f="loopStart");"loopStart"==f?g=h+.01:(c=l,g=k-.01)}lpRec[b]={x:c.toFixed(2),line:d};lpRec.loopBtn=e;lpRec[f]=g;m.drawTags()}var h,k,m=this;switch(lpRec.loopBtn){case 1:g("atag",b,c,2,"loopStart",d,e,f);break;case 2:d>lpRec.loopStart&&g("btag",b,c,3,"loopEnd",d,e,f);break;case 3:h=Math.abs(lpRec.loopStart-d),k=Math.abs(lpRec.loopEnd-d),h<k?
g("atag",b,c,3,"loopStart",d,e,f):g("btag",b,c,3,"loopEnd",d,e,f)}};m.prototype.x2time=function(b,c){var d,e,f,g,k,m;b*=this.scale;d=this.xs[c];f=1;if(b<d[0])U({keyCode:80});else{for(;f<d.length&&d[f]<b;)f+=1;f==d.length?U({keyCode:80}):(m=this.lbtix[c][f],m[this.repcnt]||(e=Object.keys(m),this.repcnt=this.repcnt<e[0]?parseInt(e[0]):parseInt(e[e.length-1])),m=m[this.repcnt],e=this.times,g=d[f-1],k=d[f],d=e[m-1],e=d+(e[m]-d)*(b-g)/(k-g),opt.lopctl?this.doLoopTag(b,c,e,f,m):opt.synbox&&(r?h.getPlayerState()==
YT.PlayerState.PLAYING:!h.paused)?this.syncTimes(b,f,c,m):aa(!1,(opt.lncsr?e:d+.01)+q))}};m.prototype.goMsre=function(b){var c=this.time_ix;h&&(b=b?this.times[c]+.01:2>=c?.01:this.times[c-2]+.01,aa(!1,b+q))};m.prototype.showSyncInfo=function(){var b=this.time_ix,b=this.times[b]-this.times[b-1];$("#sync_info").html("duration&nbsp;measure:<br>"+b.toFixed(3)+" sec.<br>");$("#sync_info").append("media&nbsp;offset:<br>"+q.toFixed(3)+" sec.")};m.prototype.changeTimesKeyb=function(b){this.changeTimes(this.lbtix[this.line][this.msre][this.repcnt]-
1,b,0)};m.prototype.changeTimes=function(b,c,d){var e,f=this.times;for(b+=1;b<f.length;++b)e=d?f[b-1]+d:f[b]+c,f[b]=e};m.prototype.syncTimes=function(b,c,d,e){b=this.lbtix[d][c][this.repcnt]-1;d=(r?h.getCurrentTime():h.currentTime)-q-.2;0==b?(q+=d,r?h.seekTo(q+.01,!0):h.currentTime=q+.01,S&&$("#woff").click()):(--b,c=2==e?0:this.times[e-2],e=this.times[e-1],d<c+.5?alert("tempo faster than 240 bpm: first sync previous measures"):(this.lastSync>b?this.changeTimes(b,d-e,0):(this.changeTimes(b,0,d-c),
this.lastSync=b),opt.jump&&(r?h.seekTo(c+q+.01,!0):h.currentTime=c+q+.01)))};m.prototype.setSize=function(){var b,c,d,e,f;for(b=0;b<B.length;++b)c=B[b],d=c.width.baseVal.value,e=c.height.baseVal.value,f=$("#notation").prop("clientWidth"),c.width.baseVal.value=f,c.height.baseVal.value=f*e/d};m.prototype.setScale=function(){var b,c,d,e;c=B[0];b=c.getBoundingClientRect().width;c=c.viewBox.baseVal.width;d=(d=$("svg>g").get(0).transform.baseVal)&&d.getItem?d.getItem(0).matrix.a:1;this.scale=c/d/b;d=$("#notation").position();
e=$("#notation").scrollTop();this.line_offsets=[];for(b=0;b<B.length;++b)c=$(B[b]).position(),this.line_offsets[b]=e+c.top-d.top;this.line_offsets[b]=$("#notation").prop("scrollHeight")};m.prototype.compCountIn=function(){var b={time:.25,num:4},c=1<this.time_ix?this.time_ix-1:this.time_ix,d=Math.min(this.times.length-1,c+3);if(d>c){var e=this.tixbts.slice(c,d).reduce(function(b,c){return b+c},0);b.time=(this.times[d]-this.times[c])/e/opt.speed;b.num=this.tixbts[c]}return b};p.prototype.pause=function(){this.clearKlok();
O()};p.prototype.play=function(){this.paused=!1;if(-1==this.klok){var b=this;this.setKlok(function(){b.currentTime+=b.step/1E3*opt.speed;O()},this.step)}};p.prototype.setKlok=function(b,c){-1!=this.klok&&clearInterval(this.klok);this.klok=b?setInterval(b,c):-1;this.paused=!1;k&&opt.nocsr&&(k.noCursor=1)};p.prototype.clearKlok=function(){-1!=this.klok&&clearInterval(this.klok);this.klok=-1;this.paused=!0;k&&(k.noCursor=0)};var z=0;$(document).ready(function(){$("#drpuse").prop("checked",!1);Da()||
qa(!0);$(window).resize(ba);$("body").keydown(U);$("#save").click(pa);$("#speed").change(function(){E(2)});$("#lopctl").click(ja);var b='<a href="http://wim.vree.org/js/">abcweb</a> (version: '+msc_VERSION+")</br>\u00a9Willem Vree",b=b+'<br>using:<br><a href="http://moinejf.free.fr/js/">abc2svg</a>, \u00a9Jef Moine';$("#help").prepend('<div style="position: absolute; right: 5px;">'+b+"</div>");$("#helpm").click(function(){$("#help").toggleClass("showhlp")});$("#meddiv").on("mousedown touchstart",
Fa);$("#fknp").change(function(){fa("btn",[])});$("#mknp").change(function(){X("btn",[])});$("#yknp").click(wa);$("#yubid").keydown(function(b){b.stopPropagation()});$("#yubuse").change(ia);$("#drpuse").click(na);$("#notation").mousedown(function(){ra()||U({keyCode:80})});$("#jump").change(sa);$("#impbox").change(t);$("#menu * input").change(sa);$("#menu label").toggle();$("#mbar").click(function(){"none"==$("#menu label").css("display")?$("#menu label").toggle(!0):ta()});$("#woff").change(function(){S=
$(this).prop("checked")});$.event.props.push("dataTransfer");$("body").on("drop",va);$("body").on("dragover",function(b){b.stopPropagation();b.preventDefault();b.dataTransfer.dropEffect="copy"});$("body").on("dragenter dragleave",function(){$(this).toggleClass("indrag")})})})();