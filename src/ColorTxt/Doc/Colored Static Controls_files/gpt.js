(function(){var window=this;var d=this,aa=function(){},ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var f=function(){this.a="";this.b=ca};f.prototype.s=!0;f.prototype.j=function(){return this.a};var da=function(a){return a instanceof f&&a.constructor===f&&a.b===ca?a.a:"type_error:TrustedResourceUrl"},ca={},ea=function(a){var b=new f;b.a=a;return b};var g=function(){this.l="";this.A=fa};g.prototype.s=!0;g.prototype.j=function(){return this.l};var ha=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,fa={},ia=function(a){var b=new g;b.l=a;return b};ia("about:blank");var h;a:{var ja=d.navigator;if(ja){var ka=ja.userAgent;if(ka){h=ka;break a}}h=""};var p=function(a){p[" "](a);return a};p[" "]=aa;var q=function(){return d.googletag||(d.googletag={})};var r={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",7:.02,10:0,13:1500,16:.01,17:1,20:0,23:.001,24:200,27:.01,28:0,29:.01,33:"pagead2.googlesyndication.com",34:1,37:.01,38:.001,47:1E-4,53:"",54:0,57:.05,58:1,159:1,60:0,63:0,65:.01,66:1E-5,67:0,68:0,69:.99,71:.05,73:.001,74:.05,75:"",161:.05,162:20170920,163:"",76:"",77:.001,78:.01,88:1,79:.95,81:.001,83:1E-4,84:0,85:.01,87:.2,89:.995,90:.01,91:.01,92:0,93:0,94:0,95:0,96:.995,97:.001,98:0,99:.01,101:.001,103:.01,104:"/pagead/js/rum.js",105:0,106:"1-0-13",107:"1-0-13",110:.001,113:1,114:.01,115:.01,116:.001,117:.01,118:.05,123:.01,120:.05,121:.001,124:.05,122:.001,125:.01,126:.01,127:.001,129:.01,130:1,131:"",132:.01,156:0,133:0,134:.01,135:0,136:1,137:0,138:"",143:.001,144:.001,141:1,151:.01,157:.01,158:0,164:0,150:"",153:.05,154:1,155:0,165:0,160:21060970,152:[]};r[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(e){}return!0}(window);r[49]=(new Date).getTime();r[36]=/^true$/.test(!1);r[46]=/^true$/.test(!1);r[148]=/^true$/.test(!1);var t=function(){var a={},b;for(b in r)a[b]=r[b];this.a=a};t.prototype.get=function(a){return this.a[a]};t.prototype.set=function(a,b){this.a[a]=b};t.b=void 0;t.a=function(){return t.b?t.b:t.b=new t};var la=["21060621","21060622","21060833","21060713"],ma=t.a().a,na=q(),pa=na._vars_,u;for(u in pa)ma[u]=pa[u];na._vars_=ma;var qa=function(){return"156"},ra=q();ra.hasOwnProperty("getVersion")||(ra.getVersion=qa);var sa=function(){var a=aa;return function(){if(a){var b=a;a=null;b()}}};var ta=function(a,b){a.addEventListener?a.addEventListener("message",b,void 0):a.attachEvent&&a.attachEvent("onmessage",b)};var va=function(){var a=d;this.b=a=void 0===a?d:a;this.B="https://securepubads.g.doubleclick.net/static/3p_cookie.html";this.a=2;this.f=[];this.o=!1;a:{var b=[d.top];a=[];for(var c=0,e;e=b[c++];){a.push(e);try{if(e.frames)for(var k=e.frames.length,m=0;m<k&&50>b.length;++m)b.push(e.frames[m])}catch(E){}}b:{try{var n=d.parent;if(n&&n!=d){var l=n;break b}}catch(E){}l=null}(k=l)&&a.unshift(k);a.unshift(d);var Q;for(k=0;k<a.length;++k)try{var y=a[k],oa=v(y);if(oa){this.a=ua(oa);if(2!=this.a)break a;var G;if(G=!Q){l=void 0;try{if(l=!!y&&null!=y.location.href)c:{try{p(y.foo);l=!0;break c}catch(E){}l=!1}G=l}catch(E){G=!1}}G&&(Q=y)}}catch(E){}this.b=Q||this.b}},w=function(a){if(2!=wa(a)){for(var b=1==wa(a),c=0;c<a.f.length;c++)try{a.f[c](b)}catch(e){}a.f=[]}},xa=function(a){var b=v(a.b);b&&2==a.a&&(a.a=ua(b))},wa=function(a){xa(a);return a.a},ya=function(a){var b=x;b.f.push(a);if(2!=b.a)w(b);else if(b.o||(ta(b.b,function(a){var c=v(b.b);if(c&&a.source==c&&2==b.a){switch(a.data){case "3p_cookie_yes":b.a=1;break;case "3p_cookie_no":b.a=0}w(b)}}),b.o=!0),v(b.b))w(b);else{a=b.b.document.createElement("iframe");a.src=b.B;a.name="detect_3p_cookie";a.style.visibility="hidden";a.style.height="0";a.onload=function(){xa(b);w(b)};try{b.b.document.body.appendChild(a)}catch(c){}}},za=function(a,b){try{return!!a.frames[b]}catch(c){return!1}},v=function(a){return a.frames[p("detect_3p_cookie")]||null},ua=function(a){return za(a,"3p_cookie_yes")?1:za(a,"3p_cookie_no")?0:2};var z=null;var Aa=function(a,b){var c="script";c=void 0===c?"":c;var e=a.createElement("link");e.rel="preload";b instanceof f?b=da(b):b instanceof g?b=b instanceof g&&b.constructor===g&&b.A===fa?b.l:"type_error:SafeUrl":(b instanceof g||(b=b.s?b.j():String(b),ha.test(b)||(b="about:invalid#zClosurez"),b=ia(b)),b=b.j());e.href=b;c&&(e.as=c);(a=a.getElementsByTagName("head")[0])&&a.appendChild(e)};var Ba=/^\.google\.(com?\.)?[a-z]{2,3}$/,Ca=/\.(cn|com\.bi|do|sl)$/,A=function(a){return Ba.test(a)&&!Ca.test(a)},B=d,x,Da=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(d.location.hostname)];C[3]>=+new Date&&b.push("adsid="+encodeURIComponent(C[1]));return a+"?"+b.join("&")},C,D,F=function(){B=d;C=B.googleToken=B.googleToken||{};var a=+new Date;C[1]&&C[3]>a&&0<C[2]||(C[1]="",C[2]=-1,C[3]=-1,C[4]="");D=B.googleIMState=B.googleIMState||{};A(D[1])||(D[1]=".google.com");"array"==ba(D[5])||(D[5]=[]);"boolean"==typeof D[6]||(D[6]=!1);"array"==ba(D[7])||(D[7]=[]);"number"==typeof D[8]||(D[8]=0)},Ea=function(a){try{a()}catch(b){d.setTimeout(function(){throw b;},0)}},Ga=function(a){"complete"==d.document.readyState||"loaded"==d.document.readyState||d.currentScript&&d.currentScript.async?Fa(3):a()},Ha=0,H={g:function(){return 0<D[8]},m:function(){D[8]++},u:function(){0<D[8]&&D[8]--},v:function(){D[8]=0},c:function(){},w:function(){return!1},i:function(){return D[5]},h:Ea},I={g:function(){return D[6]},m:function(){D[6]=!0},u:function(){D[6]=!1},v:function(){D[6]=!1},c:function(){},w:function(){return".google.com"!=D[1]&&2<++Ha},i:function(){return D[7]},h:function(a){Ga(function(){Ea(a)})}},Fa=function(a){if(1E-5>Math.random()){d.google_image_requests||(d.google_image_requests=[]);var b=d.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;d.google_image_requests.push(b)}};H.c=function(){if(!H.g()){var a=d.document,b=function(b){var c=Da("js",b);Aa(a,c);b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return d.processGoogleToken({},2)};c=ea(c);b.src=da(c);try{(a.head||a.body||a.documentElement).appendChild(b),H.m()}catch(m){}},c=D[1];b(c);".google.com"!=c&&b(".google.com");d.setTimeout(function(){return d.processGoogleToken({},1)},1E3)}};I.c=function(){if(!I.g()){var a=d.document,b=Da("sync.js",D[1]);Aa(a,b);b=b.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"});var c=p("script"),e="<"+c+' src="'+b+'"></'+c+">"+("<"+c+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Ga(function(){a.write(e);I.m()})}};var Ia=function(a,b){F();var c=B.googleToken[5]||0;a&&(0!=c||C[3]>=+new Date?b.h(a):(b.i().push(a),b.c()));C[3]>=+new Date&&C[2]>=+new Date||b.c()},Ka=function(a){d.processGoogleToken=d.processGoogleToken||function(a,c){return Ja(H,a,c)};Ia(a,H)},La=function(a){d.processGoogleTokenSync=d.processGoogleTokenSync||function(a,c){return Ja(I,a,c)};Ia(a,I)},Ma=function(a){x=x||new va;ya(function(b){b&&a()})},Ja=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var e=b.newToken||"",k=parseInt(b.freshLifetimeSecs||"",10)||3600,m=parseInt(b.validLifetimeSecs||"",10)||86400;b=b["1p_jar"]||"";F();1==c?a.v():a.u();Fa(c);if(!e&&a.w())A(".google.com")&&(D[1]=".google.com"),a.c();else{var n=B.googleToken=B.googleToken||{},l=!(C[3]>=+new Date)&&(5==c||4==c||2==c);if(0==c&&e&&"string"==typeof e&&0<k&&0<m&&"string"==typeof b||l)l=+new Date,n[5]=c,n[1]=e,n[2]=l+1E3*k,n[3]=l+1E3*m,n[4]=b,F();if(e||!a.g()){c=a.i();for(e=0;e<c.length;e++)a.h(c[e]);c.length=0}}};p("partner.googleadservices.com");p("www.googletagservices.com");var Na="",Oa="",Pa=t.a().get(46)&&!t.a().get(6);Na=Pa?"http:":"https:";Oa=t.a().get(Pa?2:3);var Qa=function(a,b){if(null===z){z="";try{var c=d.top.location.hash;if(c){var e=c.match(/\bdeid=([\d,]+)/);z=e?e[1]:""}}catch(m){}}if(c=(c=z)&&c.match(new RegExp("\\b("+a.join("|")+")\\b")))a=c[0];else if(b)a:{if(!(1E-4>Math.random())&&(c=Math.random(),c<a.length*b)){try{var k=new Uint32Array(1);d.crypto.getRandomValues(k);c=k[0]/65536/65536}catch(m){c=Math.random()}a=a[Math.floor(c*a.length)];break a}a=null}else a=null;return a};var J=q(),K=J.fifWin||window,L=K.document,Ra=[],Sa=q();Sa.hasOwnProperty("cmd")||(Sa.cmd=Ra);if(J.evalScripts)J.evalScripts();else{var Ta=L.currentScript,M;var N=t.a(),O=N.get(76);if(O)M=O;else{var P=N.get(131),R="",S,T="/gpt/pubads_impl_";P&&(R="?eid="+P,S="156","21061058"===P&&(T+="control_",S=N.get(162)));S=S||"153";if(!P){var U;var Ua=t.a().get(161),V=Qa(["21061063","21061064"],Ua);V?(t.a().get(152).push(V),t.a().set(163,V),U="21061064"==V?"/gpt/pubads_impl_core_":"/gpt/pubads_impl_control_"):U=null;var Va=U;Va&&(T=Va,S=N.get(162),R="?cb="+N.get(163))}O=Na+"//"+Oa+T+S+".js"+R;t.a().set(76,O);M=O}var Wa=M;-1!=h.indexOf("iPhone")&&t.a().set(79,0);var Xa=t.a().get(160);Xa&&t.a().get(152).push(Xa);var Ya=t.a().get(148)?t.a().get(137):0,W=t.a().get(138)||Qa(la,Ya);if(W)try{var X=t.a().get(150);X&&(F(),A(X)&&(D[1]=X));t.a().set(138,W)}catch(a){}var Y=K.performance;if(Y&&Y.now){var Za=Y.now();(K.google_js_reporting_queue=K.google_js_reporting_queue||[]).push({label:"1",type:9,value:Za,uniqueId:"rt."+Math.random()})}if(!("complete"==L.readyState||"loaded"==L.readyState||Ta&&Ta.async)){var $a="gpt-impl-"+Math.random();try{L.write('<script id="'+$a+'" src="'+Wa+'">\x3c/script>'),J._syncTagged_=!0}catch(a){}if(L.getElementById($a))switch(J._loadStarted_=!0,W){case "21060833":var ab=sa();Ma(ab);La(ab);break;case "21060622":case "21060713":La(null)}}if(!J._loadStarted_){switch(W){case "21060833":var bb=sa();Ma(bb);Ka(bb);break;case "21060622":case "21060713":Ka(null)}var Z=L.createElement("script");Z.src=Wa;Z.async=!0;(L.head||L.body||L.documentElement).appendChild(Z);J._loadStarted_=!0}};}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
