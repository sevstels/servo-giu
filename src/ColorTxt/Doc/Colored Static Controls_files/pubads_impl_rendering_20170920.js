window.googletag&&typeof googletag._=='function'&&googletag._(function(_){var Bt=function(a,b){return _.aa[a]=b},Ct=function(a){var b=a._html_,c=b;if(_.w(b)){for(var d=/v[uv]\(\s*["']([^)]+?)["']\s*\);?/g,e;null!==(e=d.exec(b));){var f=e[1];!f||-1==f.indexOf("/adview")&&-1==f.indexOf("/pcs/view")||(f=f.replace(/\\x([a-f0-9]{2})/ig,function(a,b){return String.fromCharCode((0,window.parseInt)(b,16))}),c=c.replace(e[0],""),_.ae(window,f,void 0))}a._html_=c}},Dt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Et=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Dt.length;f++)c=Dt[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}},Ft={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},Gt=function(a,b){_.Jb(b,function(b,d){b&&b.hb&&(b=b.Oa());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Ft.hasOwnProperty(d)?a.setAttribute(Ft[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Ht=function(a){if(a&&"number"==typeof a.length){if(_.z(a))return"function"==typeof a.item||"string"==typeof a.item;if(_.Ia(a))return"function"==typeof a.item}return!1},It=function(a,b,c){function d(c){c&&b.appendChild(_.w(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!_.Ha(f)||_.z(f)&&0<f.nodeType?d(f):_.B(Ht(f)?_.zb(f):f,d)}};_.td.prototype.l=Bt(6,function(a,b,c){var d=this.j,e=arguments,f=String(e[0]),g=e[1];if(!_.od&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',_.eb(g.name),'"');if(g.type){f.push(' type="',_.eb(g.type),'"');var k={};Et(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=d.createElement(f);g&&(_.w(g)?f.className=g:_.y(g)?f.className=g.join(" "):Gt(f,g));2<e.length&&It(d,f,e);return f});var Jt={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Kt={"'":"\\'"},Lt=function(a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0),f=c+1,g;if(!(g=Jt[d])){if(!(31<e&&127>e))if(d in Kt)d=Kt[d];else if(d in Jt)d=Kt[d]=Jt[d];else{g=d.charCodeAt(0);if(31<g&&127>g)e=d;else{if(256>g){if(e="\\x",16>g||256<g)e+="0"}else e="\\u",4096>g&&(e+="0");e+=g.toString(16).toUpperCase()}d=Kt[d]=e}g=d}b[f]=g}b.push('"');return b.join("")},Mt=function(){var a=["allow-top-navigation","allow-modals","allow-orientation-lock","allow-presentation"];return _.ha("allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation".split(" "),function(b){return!_.ub(a,b)}).join(" ")},Nt=function(a){"number"==typeof a&&(a=Math.round(a)+"px");return a},Ot=function(a,b){var c=a.ampInaboxIframes=a.ampInaboxIframes||[];b&&c.push(b);a.ampInaboxPendingMessages=a.ampInaboxPendingMessages||[];c.google_amp_listener_added||(c.google_amp_listener_added=!0,_.E(a,"message",function(b){var c;a.ampInaboxPendingMessages&&(c=/^amp-(\d{15,20})?/.exec(b.data))&&(a.ampInaboxPendingMessages.push(b),a.document.querySelector('script[src$="amp4ads-host-v0.js"]')||_.ed(a.document,"https://cdn.ampproject.org/"+(c[1]?"rtv/"+c[1]+"/":"")+"amp4ads-host-v0.js"))}))},Pt=function(a,b){return _.ae(window,a,b)},Qt=function(){this.l=this.l;this.m=this.m};Qt.prototype.l=!1;Qt.prototype.v=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var Rt=function(){},St={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Tt=function(a,b){b.push('"',a.replace(_.ne,function(a){var b=St[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),St[a]=b);return b}),'"')},Ut=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(_.y(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ut(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Tt(d,c),c.push(":"),Ut(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Tt(b,c);break;case "number":c.push((0,window.isFinite)(b)&&!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},Vt=function(a){var b=[];Ut(new Rt,a,b);return b.join("")},Wt=function(a){this.j=a;this.l=_.kb()},Xt=function(a){var b={};_.B(a,function(a){b[a.j]=a.l});return b},Yt=function(a){var b={};b.c=a.C;b.i=a.A;a.o.postMessage(Vt(b),a.D)},Zt=function(a,b,c,d,e){Qt.call(this);this.C=a;this.status=1;this.o=b;this.D=c;this.L=d;this.Ga=!!e;this.A=Math.random();this.F={};this.j=null;this.H=(0,_.A)(this.K,this)};_.Qa(Zt,Qt);Zt.prototype.K=function(a){if(a.origin===this.D&&(this.Ga||a.source==this.o)){var b=null;try{b=JSON.parse(a.data)}catch(c){}if(_.z(b)&&(a=b.i,b.c===this.C&&a!=this.A&&(2!==this.status&&(this.status=2,Yt(this),this.j&&(this.j(),this.j=null)),a=b.s,b=b.p,_.w(a)&&(_.w(b)||_.z(b))&&this.F.hasOwnProperty(a))))this.F[a](b)}};Zt.prototype.I=function(){if(1===this.status){try{this.o.postMessage&&Yt(this)}catch(a){}window.setTimeout((0,_.A)(this.I,this),50)}};Zt.prototype.connect=function(a){a&&(this.j=a);_.E(window,"message",this.H);this.L&&this.I()};Zt.prototype.v=function(){this.status=3;_.Td(window,"message",this.H);Zt.Rb.v.call(this)};var $t=function(a,b,c){a.F[b]=c},au=function(a,b,c){var d={};d.c=a.C;d.i=a.A;d.s=b;d.p=c;a.o.postMessage(Vt(d),a.D)},bu=function(a){return Vt({windowCoords_t:a.m.top,windowCoords_r:a.m.right,windowCoords_b:a.m.bottom,windowCoords_l:a.m.left,frameCoords_t:a.l.top,frameCoords_r:a.l.right,frameCoords_b:a.l.bottom,frameCoords_l:a.l.left,styleZIndex:a.o,allowedExpansion_t:a.j.top,allowedExpansion_r:a.j.right,allowedExpansion_b:a.j.bottom,allowedExpansion_l:a.j.left,xInView:a.v,yInView:a.A})},cu=function(a){this.m=a;this.v=null;this.L=this.status=0;this.l=null;this.ga="sfchannel"+a},du=function(a){this.j=a},eu=function(a,b){this.Ma=a;this.Na=b},fu=function(a,b,c,d,e,f,g,k){k=void 0===k?[]:k;this.o=a;this.j=b;this.l=c;this.permissions=d;this.m=e;this.v=f;this.Ga=g;this.hostpageLibraryTokens=k;this.Da=""},gu=function(a){this.j=a},hu=function(a,b){this.j=a;this.version=b};_.Qa(hu,gu);hu.prototype.m=function(){return Vt({uid:this.j,version:this.version})};var iu=function(a,b,c){this.j=a;this.o=b;this.l=c};_.Qa(iu,gu);iu.prototype.m=function(){return Vt({uid:this.j,initialWidth:this.o,initialHeight:this.l})};var ju=function(a,b){this.j=a;this.l=b};_.Qa(ju,gu);ju.prototype.m=function(){return Vt({uid:this.j,description:this.l})};var ku=function(a,b,c){this.j=a;this.l=b;this.push=c};_.Qa(ku,gu);ku.prototype.m=function(){return Vt({uid:this.j,expand_t:this.l.top,expand_r:this.l.right,expand_b:this.l.bottom,expand_l:this.l.left,push:this.push})};var lu=function(a){this.j=a};_.Qa(lu,gu);lu.prototype.m=function(){return Vt({uid:this.j})};var mu=function(a,b){this.j=a;this.o=b};_.Qa(mu,gu);mu.prototype.m=function(){var a={uid:this.j,newGeometry:bu(this.o)};return Vt(a)};var nu=function(a,b,c,d,e){mu.call(this,a,c);this.v=b;this.l=d;this.push=e};_.Qa(nu,mu);nu.prototype.m=function(){var a={uid:this.j,success:this.v,newGeometry:bu(this.o),expand_t:this.l.top,expand_r:this.l.right,expand_b:this.l.bottom,expand_l:this.l.left,push:this.push};return Vt(a)};var ou=function(a,b,c,d){this.j=a;this.width=b;this.height=c;this.Da=void 0===d?"":d};_.Qa(ou,gu);ou.prototype.m=function(){var a={uid:this.j,width:this.width,height:this.height};this.Da&&(a.sentinel=this.Da);return Vt(a)};var pu=function(){this.j=[]},qu=function(a,b,c,d){this.m=a;this.j=(this.l=!!(_.u(d)&&a.style&&a.style.getPropertyPriority))?String(b).replace(/([A-Z])/g,"-$1").toLowerCase():b;this.o=this.l?a.style.getPropertyValue(this.j):a.style[this.j];this.v=this.l?a.style.getPropertyPriority(this.j):void 0;this.l?(a.style.removeProperty(this.j),a.style.setProperty(this.j,String(c),d)):a.style[this.j]=String(c)},ru=function(a,b,c,d,e){a.j.push(new qu(b,c,d,e))},su=function(a,b,c,d){ru(a,b,c,d+"px",void 0)},tu=1,uu=!1,vu=function(a,b,c){a.H?(b.style.width=Nt("100%"),b.style.height=Nt("auto")):(b.style.width=Nt(c.width),b.style.height=Nt(c.height))},wu=function(a,b,c){c=_.wf(b,a.P,a.Z,c);var d=[];a.W&&(b=_.nd(b.location.href),d.push([0<b.length?"google_debug"+(b?"="+b:"")+"&":"","xpc=","sf-gdn-exp-"+a.m,"&p=",(0,window.encodeURIComponent)(_.t.document.location.protocol),"//",(0,window.encodeURIComponent)(_.t.document.location.host)].join("")));a.$.length&&d.push("eid="+a.$.join());d.length&&(c+="#"+d.join("&"));return c},xu=function(a,b,c,d,e,f,g){var k;if(a.H){var l=k=0;d="min-width:100%"}else k=d.width,l=d.height,d="";b={id:b,title:f||"",name:c,src:wu(a,_.Bd(e),g),scrolling:"no",marginWidth:"0",marginHeight:"0",width:String(k),height:String(l),"data-is-safeframe":"true"};c=_.ac&&!_.tc(9)?"javascript:\"<html><body style='background:transparent'></body></html>\"":"about:blank";c={frameborder:0,style:"border:0;vertical-align:bottom;"+(d||""),allowTransparency:"true",src:c};b&&Et(c,b);e=e.l("IFRAME",c);a.Y&&(e.sandbox=Mt());a.A.appendChild(e);return e},yu=function(a,b){var c=_.vd(a.A),d=b.content;d=a.P+";"+d.length+";"+d;var e=new fu(a.m,a.ca,a.X,a.V,new du({shared:{sf_ver:a.P,ck_on:window.navigator.cookieEnabled?1:0,flash_ver:_.xe?_.ye:"0"}}),a.H,a.da,a.fa);var f={};f.uid=e.o;f.hostPeerName=e.j;f.initialGeometry=bu(e.l);var g=e.permissions;g=Vt({expandByOverlay:g.Ma,expandByPush:g.Na,readCookie:!1,writeCookie:!1});f=(f.permissions=g,f.metadata=Vt(e.m.j),f.reportCreativeGeometry=e.v,f.isDifferentSourceWindow=e.Ga,f.goog_safeframe_hlt=Xt(e.hostpageLibraryTokens),f);e.Da&&(f.Da=e.Da);e=Vt(f);e=d+e;d=!1===b.Wb;if(a.W&&b.size instanceof _.sd){f=b.gb;g=b.size;var k=_.vd(a.A);uu||(_.ed(k.j,(a.ha?"http:":"https:")+"//pagead2.googlesyndication.com/pagead/expansion_embed.js?source=safeframe"),uu=!0);k=_.Bd(k);k.google_eas_queue=k.google_eas_queue||[];k.google_eas_queue.push({a:f,b:k.location.protocol+"//tpc.googlesyndication.com",c:g.width,d:g.height,e:"sf-gdn-exp-"+a.m,f:void 0,g:void 0,h:void 0,i:void 0})}if(b.Cd)if(k=b.gb,f=b.size,b=b.Gb,g=window.document.getElementById(k)){a:{try{var l=g.contentWindow||(g.contentDocument?_.yd(g.contentDocument):null);break a}catch(n){}l=null}l.name=e;_.Rb()&&0<=_.mb(_.Ub(),10)&&(g.name=e);a.H?(f=e=0,g.style.minWidth="100%"):(e=f.width,f=f.height);g.width=String(e);g.height=String(f);g.title=b||"";g.setAttribute("data-is-safeframe","true");l.location.replace(wu(a,_.Bd(c),d));a.Y&&(g.sandbox=Mt());a.j=g}else a.j=xu(a,k,e,f,c,b,d);else a.j=xu(a,b.gb,e,b.size,c,b.Gb,d)},zu=function(a){a.v=_.vf(a.j,a.K,a.I,a.R);a.R=null;au(a.l,"geometry_update",(new mu(a.m,a.v)).m())},Au=function(a){cu.call(this,tu++);this.D=a.jd;this.H=1==a.size;this.V=new eu(a.permissions.Ma&&!this.H,a.permissions.Na&&!this.H);this.A=a.lb;this.$=a.ud||[];this.fa=a.hostpageLibraryTokens||[];var b=window.location;this.ca="file:"==b.protocol?"*":b.protocol+"//"+b.host;this.da=!!a.Ga;this.ba=(!1===a.Wb?"https:":window.location.protocol)+"//tpc.googlesyndication.com";this.W=!!a.Uc;this.ha=!!a.Dd;this.Y=a.sandbox||!1;this.o=new pu;vu(this,a.lb,a.size);this.K=a.Wc||!1;this.I=a.Nc||!1;this.v=this.X=_.vf(a.lb,this.K,this.I);this.P=a.vd||"1-0-10";this.Z=a.Qc||"";yu(this,a);this.R=null;this.N=(0,_.A)(this.cb,this);this.O=-1;this.C=0;this.F=null;!a.ed||"function"!==typeof window.IntersectionObserver||_.ic||_.fc||(this.F=new window.IntersectionObserver((0,_.A)(function(a){this.R=a[a.length-1];this.cb()},this)));this.l=new Zt(this.ga,this.j.contentWindow,this.ba,!1);$t(this.l,"init_done",(0,_.A)(this.fd,this));$t(this.l,"register_done",(0,_.A)(this.rd,this));$t(this.l,"report_error",(0,_.A)(this.td,this));$t(this.l,"expand_request",(0,_.A)(this.Vc,this));$t(this.l,"collapse_request",(0,_.A)(this.Rc,this));$t(this.l,"creative_geometry_update",(0,_.A)(this.Tc,this));this.l.connect((0,_.A)(this.od,this));var c=(0,_.A)(function(){this.j&&(this.j.name="",a.Lb&&a.Lb(),_.Td(this.j,"load",c))},this);_.E(this.j,"load",c)};_.Qa(Au,cu);_.h=Au.prototype;_.h.od=function(){this.F&&this.j?this.F.observe(this.j):(_.E(window,"resize",this.N),_.E(window,"scroll",this.N))};_.h.fd=function(a){try{if(0!=this.status)throw Error("Container already initialized");if(!_.w(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.z(b)&&_.m(b.uid)&&_.w(b.version)))throw Error("Cannot parse JSON message");var c=new hu(b.uid,b.version);if(this.m!=c.j||this.P!=c.version)throw Error("Wrong source container");this.status=1}catch(d){this.D.error("Invalid INITIALIZE_DONE message. Reason: "+d.message)}};_.h.rd=function(a){try{if(1!=this.status)throw Error("Container not initialized");if(!_.w(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.z(b)&&_.m(b.uid)&&_.m(b.initialWidth)&&_.m(b.initialHeight)))throw Error("Cannot parse JSON message");if(this.m!=(new iu(b.uid,b.initialWidth,b.initialHeight)).j)throw Error("Wrong source container");this.status=2}catch(c){this.D.error("Invalid REGISTER_DONE message. Reason: "+c.message)}};_.h.td=function(a){try{if(!_.w(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.z(b)&&_.m(b.uid)&&_.w(b.description)))throw Error("Cannot parse JSON message");var c=new ju(b.uid,b.description);if(this.m!=c.j)throw Error("Wrong source container");this.D.info("Ext reported an error. Description: "+c.l)}catch(d){this.D.error("Invalid REPORT_ERROR message. Reason: "+d.message)}};_.h.Vc=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(0!=this.L)throw Error("Container is not collapsed");if(!_.w(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.z(b)&&_.m(b.uid)&&_.m(b.expand_t)&&_.m(b.expand_r)&&_.m(b.expand_b)&&_.m(b.expand_l)&&_.Da(b.push)))throw Error("Cannot parse JSON message");var c=new ku(b.uid,new _.Cd(b.expand_t,b.expand_r,b.expand_b,b.expand_l),b.push);if(this.m!=c.j)throw Error("Wrong source container");if(!(0<=c.l.top&&0<=c.l.left&&0<=c.l.bottom&&0<=c.l.right))throw Error("Invalid expansion amounts");var d;if(d=c.push&&this.V.Na||!c.push&&this.V.Ma){var e=c.l,f=c.push,g=this.v=_.vf(this.j,this.K,this.I);if(e.top<=g.j.top&&e.right<=g.j.right&&e.bottom<=g.j.bottom&&e.left<=g.j.left){if(!f)for(var k=this.j.parentNode;k&&k.style;k=k.parentNode)ru(this.o,k,"overflowX","visible","important"),ru(this.o,k,"overflowY","visible","important");var l=this.v.l,n=this.v.l,p=_.Fd(new _.Ed(0,0,l.right-l.left,n.bottom-n.top));_.z(e)?(p.top-=e.top,p.right+=e.right,p.bottom+=e.bottom,p.left-=e.left):(p.top-=e,p.right+=Number(void 0),p.bottom+=Number(void 0),p.left-=Number(void 0));ru(this.o,this.A,"position","relative");ru(this.o,this.j,"position","absolute");f?(su(this.o,this.A,"width",p.right-p.left),su(this.o,this.A,"height",p.bottom-p.top)):ru(this.o,this.j,"zIndex","10000");su(this.o,this.j,"width",p.right-p.left);su(this.o,this.j,"height",p.bottom-p.top);su(this.o,this.j,"left",p.left);su(this.o,this.j,"top",p.top);this.L=2;this.v=_.vf(this.j,this.K,this.I);d=!0}else d=!1}a=d;au(this.l,"expand_response",(new nu(this.m,a,this.v,c.l,c.push)).m());if(!a)throw Error("Viewport or document body not large enough to expand into.");}catch(v){this.D.error("Invalid EXPAND_REQUEST message. Reason: "+v.message)}};_.h.Rc=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(2!=this.L)throw Error("Container is not expanded");if(!_.w(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!_.z(b)||!_.m(b.uid))throw Error("Cannot parse JSON message");if(this.m!=(new lu(b.uid)).j)throw Error("Wrong source container");_.xf(this);au(this.l,"collapse_response",(new mu(this.m,this.v)).m())}catch(c){this.D.error("Invalid COLLAPSE_REQUEST message. Reason: "+c.message)}};_.h.cb=function(){if(1==this.status||2==this.status)switch(this.C){case 0:zu(this);this.O=window.setTimeout((0,_.A)(this.Eb,this),1E3);this.C=1;break;case 1:this.C=2;break;case 2:this.C=2}};_.h.Tc=function(a){try{if(!_.w(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.z(b)&&_.m(b.uid)&&_.m(b.width)&&_.m(b.height))||b.sentinel&&!_.w(b.sentinel))throw Error("Cannot parse JSON message");var c=new ou(b.uid,b.width,b.height,b.sentinel);if(this.m!=c.j)throw Error("Wrong source container");var d=String(c.height);this.H?d!=this.j.height&&(this.j.height=d,this.cb()):this.D.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")}catch(e){this.D.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: "+e.message)}};_.h.Eb=function(){if(1==this.status||2==this.status)switch(this.C){case 1:this.C=0;break;case 2:zu(this),this.O=window.setTimeout((0,_.A)(this.Eb,this),1E3),this.C=1}};var Bu=function(){_.Zh.is(_.ng.Ac)?_.H(_.$h,_.og.Ja):_.Vf(_.Zh)||_.H(_.$h,_.og.aa);return _.ha(_.Ve(),function(a){return _.Rf[a]})},Cu=function(a){for(var b={},c=0;c<a.length;++c)_.D(a[c],function(a,c){b[c]=a});return b},Du=function(){var a=_.Fb;return null!=a&&-1!=a.indexOf("MSIE ")&&-1==a.indexOf("IEMobile")},Eu=function(a){if(!a||0==_.ol()||"hidden"!=a.style.visibility||"none"!=a.style.display)return!1;a.parentNode.removeChild(a);return!0},Fu=function(a,b,c,d,e,f,g,k,l,n,p){var v=_.ur,x;_.y(e)?x=new _.sd(e[0],e[1]):x=1;e=_.Yh.is(_.mg.w);var J=_.Ki.is(_.$g.w);return new Au({lb:b,gb:c,Gb:v,content:_.Kl(d),size:x,jd:{info:function(){},G:function(){},error:function(){}},Uc:l,Lb:f,sandbox:_.u(g.sandbox)?g.sandbox:!1,permissions:{Ma:_.u(g.allowOverlayExpansion)?g.allowOverlayExpansion:!k,Na:_.u(g.allowPushExpansion)?g.allowPushExpansion:!1},Wc:_.Qh.is(_.gg.w),Ga:!!_.Cf().fifWin,ed:e,ud:Bu(),Cd:n,vd:_.al(),Qc:_.bl(a.location.host),Dd:_.ml(a,!0),Wb:_.ml(a,J),Nc:_.Rh.is(_.hg.w),hostpageLibraryTokens:p})},Gu=function(a,b,c,d){_.Mm(a,"ad_fetch_period",b,d);_.ef(_.el.u(),(4).toString(),b);_.Wm(a,c,"ad."+b)},Hu=function(a){return a.T?!!a.T._is_afc_:null},Iu=function(a){return a.T?!!a.T._afc_expandable_:!0},Ju=function(){var a=_.Lq.u();if((0,_.Pp)()){var b=_.Mq(window);2!==a.j[b]&&3!==a.j[b]&&(a.j[b]=2,_.Nq(a,b,"preload"))}},Ku=function(a,b){var c=Pt(b,_.O(290,function(){a.j[b]=3;_.wb(window.google_image_requests,c)}))},Lu=function(a,b,c){a.Pa||(a.Pa=!0,a=function(){try{var a=b.document.createElement("iframe");a.id="ace-frame";a.src=c;a.style.visibility="hidden";a.style.display="none";b.document.body.appendChild(a)}catch(e){}},b.requestIdleCallback?b.requestIdleCallback(a):b.setTimeout(a,0))},Mu=function(a,b){if(!a.Ra&&b==b.top){a.Ra=!0;try{_.E(b,"beforeunload",function(){try{var a=_.Dl()+"//www.googletagservices.com/tag/js/gpt.js";_.Qp(b.document,a,"prefetch")}catch(d){}})}catch(c){}}},Nu=function(a,b,c){b.T=c;b.fetchEnded();null!=c._host_page_libraries_&&_.B(c._host_page_libraries_,function(c){var d=a.ka;if(!_.ub(d.l,c))switch(c){case 1:var e=c+"_hostpage_library",f=_.ed(window.document,_.sf[c]);f&&(f.id=e);d.l.push(c);e=new Wt(c);d.m.push(e);d=_.Cf();d.hostpageLibraryTokens||(d.hostpageLibraryTokens={});d.hostpageLibraryTokens[e.j]=e.l}d=a.ka;d.j[c]||(d.j[c]=[]);d.j[c].push(b)});null!=c._cookies_&&_.vq(a.X,c);c._persistent_for_stream_&&(a.j.N[_.L(b)]=null);var d=c._a_exps_;if(d)for(var e=0,f=d.length;e<f;e++)_.Jh(d[e].toString(),!0);_.Li.is(_.ah.w)&&a.v(c)&&Ju();_.oj.is(_.Dh.w)&&Ct(c)},Ou=function(a,b,c){var d=void 0===d?window:d;if(a.l&&!_.y(b))return a=new _.M("sra_legacy_ad_response"),_.q(a),_.N(a),[];if(c.length){var e=c[0];Gu(a.Ba,e.getCsiId(),e.R,e.j)}_.y(b)||(b=[b]);e=[];for(var f=0;f<c.length;++f){var g=c[f],k=b[f][g.getAdUnitPath()];k&&(Nu(a,g,k),e.push(g))}switch(_.Xf(_.Ni)){case _.ch.lc:Lu(a,d,"https://www.googletagservices.com/cb/ace_frame.html");break;case _.ch.kc:Lu(a,d,"https://www.googletagservices.com/cb/ace_frame.html#cbu=https%3A%2F%2Fwww.googletagservices.com%2Ftag%2Fjs%2Fgpt.js")}_.Wi.is(_.kh.w)&&Mu(a,d);return e},Pu=function(a){(a=(a=a.T)&&a._resources_)&&_.B(a,function(a){if(a){var b=a.url;a=a.as;if(b&&a){var d=_.Lq.u();2!==d.j[b]&&3!==d.j[b]&&(d.j[b]=2,"image"==a?Ku(d,b):(0,_.Pp)()&&_.Nq(d,b,"preload",a))}}})},Qu=function(a,b,c){a=a.Ba;var d=b.getCsiId(),e=b.j,f=Iu(b);b=!!Hu(b);_.Mm(a,"start_ad_render_period",d,e);_.Lm(a,"exr",d,e,f?1:0);_.ef(_.el.u(),(5).toString(),d);_.t.google_timing_params=_.t.google_timing_params||{};_.t.google_timing_params["qqid."+d]=c;_.Rm(a,"is_backfill_at_render",""+d+"_"+b,e);_.Rm(a,"qqid",""+d+"_"+c,e)},Ru=function(a,b){if(a.xc){var c=b.T;c&&!c._empty_&&(c=c._html_)&&-1==c.indexOf("adpnt")&&(b=b.getEscapedQemQueryId(),c=new _.M("gpt_qse_missing",_.nl(),1),_.r(c,"qemQueryId",b),_.q(c,a.j),_.N(c))}},Su=function(a){var b=new _.M("gpt_fluid_not_sf",_.nl(),_.F.u().get(23));_.r(b,"impl",a.W());_.q(b,a.j);_.N(b)},Tu=function(a,b,c){_.pi.is(_.Gg.$a)&&(Ot(a),_.t.setTimeout(_.O(214,function(){var d=_.tn(c,b);d?Ot(a,d):(d=new _.M("amp_inabox_failed"),_.q(d),_.N(d))}),0))},Uu=function(a,b,c){var d={};d=(d[_.Mg.Hc]=1.5,d[_.Mg.Ic]=2,d[_.Mg.Jc]=2.5,d[_.Mg.Kc]=3,d)[_.Xf(_.xi)];var e=b.pageYOffset;b=b.innerHeight;if(d&&_.m(e)&&_.m(b)){var f=e+b*d,g=function(a,b){a=(a=a.T)&&a._height_||0;return!!b&&b.y+a>=e&&b.y<f};_.Cb(c,function(b,c){var d=_.oq(a.j,b),e=_.oq(a.j,c);b=g(b,d);return b!=g(c,e)?b?-1:1:b?d.y-e.y:0})}},Vu=function(a,b){_.Xf(_.Xi)&&_.t.IntersectionObserver&&(a.Z||(a.Z=new _.t.IntersectionObserver(function(a){_.B(a,function(a){var b=_.Fn(_.Hn(),a.target.id);if(b.ca=a.isIntersecting)b.ha=a.time})},{rootMargin:"0px"})),a.Z.observe(b))},Wu=function(a,b,c){_.br(a,b,c,a.ga);b=_.rn(c);b.slotContentChanged=a.ga;c.renderEnded(b)},Xu=function(a,b,c,d,e,f,g,k){var l=_.xn(d,c);if(null!=l){var n=_.ei.is(_.tg.w);if(!n)for(var p;p=l.firstChild;)l.removeChild(p);a.j.o||(l.style.display="inline-block");k=Cu([k,a.j.L,d.$]);b=Fu(b,l,_.wn(d),f,e,g,k,!!Hu(d),Iu(d),n,a.ka.m);d.m=b;d.A=!1;_.sr(a,_.tn(d,c),_.L(d))}},Yu=function(a,b,c,d,e){var f=_.wn(c),g=_.tn(c,b);if(null==g)if(a.Aa){var k=_.xn(c,b);g=_.Vr(a,b,c,k,d);delete a.F[f]}else return;_.w(d)?Su(a):(g.width=String(d[0]),g.height=String(d[1]),a.Aa&&(k=_.xn(c,b),k.style.width="",k.style.height=""));_.Ol(g,e,!0);c.A=!1;_.sr(a,g,_.L(c))},Zu=function(a,b,c){var d=c.T,e=c.getEscapedQemQueryId(),f=_.Q(c,b);f&&f.setAttribute("data-google-query-id",e);Qu(a,c,e);c.renderStarted();if(null==d||d._empty_)Wu(a,b,c);else if(a.N)c.renderEnded(_.rn(c));else{e=d._html_;if(!_.w(e)){_.Sr(a,c);return}_.qj.is(_.Gh.w)||_.Hl(_.Q(c,b),!0);_.Zr(a,c);var g;"height"==d._fluid_?g="fluid":g=[d._width_,d._height_];Tu(_.t,b,c);a.v(d)?Xu(a,_.t,b,c,g,e,function(){_.Ur(a,c);a.loaded(c)},{sandbox:d._use_sandbox_||!1}):Yu(a,b,c,g,e);_.lq(c,_.qn(c,d))}d=c.getSlotElementId();Eu(a.R[d])&&delete a.R[d];a.fa(b,c);Ru(a,c)},$u=function(a,b,c,d){var e=c.getSlotElementId(),f=_.Q(c);if(!_.qf(f))return!1;var g=_.dr(a,c);if(!g)return!1;var k=!!a.H[e];a.H[e]=function(){d&&(_.t.cancelIdleCallback?_.t.cancelIdleCallback(d):_.t.clearTimeout(d));Zu(a,b,c)};k||g.observe(f);return!0},av=function(a,b,c,d){var e=_.Q(c,b),f=c.getSlotElementId(),g=function(){_.Br(a,e,f,c);Zu(a,b,c)};return _.t.requestIdleCallback?_.t.requestIdleCallback(g,{timeout:d}):_.t.setTimeout(g,d)},bv=function(a,b,c){if(!_.Si.is(_.gh.La)&&!_.Ui.is(_.ih.w)&&!_.dj.is(_.rh.w)||!Hu(c))return!1;var d=_.ao(b);if(1===d||0===d||_.zr(a,_.t,0,c))return!1;_.Ar(a);if(!a.I)return!1;a.A[c.getSlotElementId()]=function(){return Zu(a,b,c)};return!0},cv=function(a,b){(a=_.Q(a,b))&&a.parentNode&&""===a.innerHTML&&a.parentNode.removeChild(a)},dv=function(a,b,c,d,e,f,g,k){cv(d,c);var l=_.wn(d)+"__container__";l='<div id="'+_.eb(l)+'"></div>';c.write(l);l=_.xn(d,c);null!=l&&(a.j.o?l.style.margin="auto":l.style.display="inline-block",k=Cu([k,a.j.L,d.$]),b=Fu(b,l,_.wn(d),f,e,g,k,Hu(d)||!1,Iu(d)),d.m=b,_.sr(a,_.tn(d,c),_.L(d)))},ev=function(a,b,c,d){b=b.getSlotElementId()+"_ad_container";var e='<div id="'+_.eb(b)+'"';d&&"height"==d._fluid_?e+=' style="width:100%;">':a.j.o&&d?(e+=' style="width:'+d._width_,e+='px;margin:auto;">'):e+=">";d&&(e+=d._html_);c.write(e+"\n</div>\n");return b},fv=function(a,b,c){cv(b,c);var d=b.T;if(null!=d){var e=ev(a,b,c,d);d=_.qn(b,d);b.renderEnded(d);(c=c.getElementById(e))&&_.sr(a,c,_.L(b))}},gv=function(a,b,c,d,e,f,g){g=void 0===g?window.document:g;cv(b,g);var k=_.wn(b),l=[],n=0,p=0;_.y(e)?(n=e[0],p=e[1]):Su(a);c=_.jl(c);l.push('<iframe id="',_.eb(k),'" title="',_.ur,'" name="',_.eb(k),'" width="',n,'" height="',p,'" vspace="0" hspace="0" allowtransparency="true" ','scrolling="no"',' marginwidth="0" marginheight="0" frameborder="0" style=','"border:0px;left:0;position:absolute;top:0;"',' src="',c,'"');null!=d&&l.push(' onload="',d,'"');l.push("></iframe>");d=[];c=b.getSlotElementId()+"_ad_container";d.push('<div id="',_.eb(c),'"');f&&d.push(' style="text-align:center" ');d.push(">");d.push('<ins style="position:relative;width:'+n+"px;height:"+p+'px;border:none;display:inline-table;vertical-align:bottom;">'+('<ins style="position:relative;width:'+n+"px;height:"+p+'px;border:none;display:block;">'+l.join("")+"</ins>")+"</ins>");d.push("</div>");g.write(d.join(""));(f=g.getElementById(k))&&_.sr(a,f,_.L(b))},hv=function(a,b,c){cv(b,c||window.document);return ev(a,b,c||window.document)};_.ts.prototype.I=Bt(5,function(a,b,c){var d=this,e=c.T,f=c.getEscapedQemQueryId(),g=_.Q(c,b);g&&g.setAttribute("data-google-query-id",f);Qu(this,c,f);if(null==e||e._empty_)_.br(this,b,c,!1),c.renderEnded(_.rn(c));else if(this.N)c.renderEnded(_.rn(c));else if(this.v(e))if(f=function(){d.loaded(c)},g=e._html_){var k;"height"==e._fluid_?k="fluid":k=[e._width_,e._height_];Tu(a,b,c);dv(this,a,b,c,k,g,f,{sandbox:e._use_sandbox_||!1});_.lq(c,_.qn(c,e))}else c.renderEnded(_.rn(c));else if(e._snippet_&&!e._is_afc_)fv(this,c,b);else if(Du()){k="googletag.impl.pubads.syncAdSlotLoaded(this, '"+_.L(c)+"',"+c.j+");";f="about:blank";if(g=_.yq(this.o,"google_domain_reset_url")){var l=_.re(g.match(_.qe)[3]||null);if(null===l||0<=l.indexOf(window.document.domain))f=g}Tu(a,b,c);if("height"==e._fluid_){Su(this);return}gv(this,c,f,k,[e._width_,e._height_],this.j.o,b)}else Tu(a,b,c),a=hv(this,c,b),b.write("<script>googletag.impl.pubads.createDomIframe("+Lt(a)+" ,"+Lt(_.L(c))+","+this.j.o+","+c.j+");\x3c/script>");this.fa(b,c);Ru(this,c);c.renderStarted()});_.ts.prototype.Qb=Bt(4,function(a){window.clearTimeout(this.R);Ou(this,a,this.F);this.F=null;this.C||(this.C=!0,_.vs(this,this.D));this.A.length&&_.us(this,this.A.shift())});_.ns.prototype.Sa=Bt(3,function(a,b,c,d,e){var f=this;e=void 0===e?window.document:e;var g=_.L(b);if(this.C[g]==a)if(this.N)delete this.C[g],b.renderEnded(_.rn(b));else if(d&&delete this.C[g],a=b.T,a._empty_)Wu(this,e,b);else{a._html_+=c;if(this.v(a))d&&(Qu(this,b,b.getEscapedQemQueryId()),Xu(this,window,e,b,"height"==a._fluid_?"fluid":[a._width_,a._height_],a._html_,function(){return f.loaded(b)},{sandbox:!!a._use_sandbox_}));else if(e=_.tn(b,e)){var k=b.A;k&&Qu(this,b,b.getEscapedQemQueryId());_.rs(b,e,c,k,d);d&&_.sr(this,e,g)}d&&_.lq(b,_.qn(b,a))}});_.ns.prototype.Ob=Bt(2,function(a,b,c,d){d=void 0===d?window.document:d;this.ac[a]||(this.ac[a]=!0,Gu(_.Dm(),b.getCsiId(),b.R,b.j));var e=_.L(b);(c=c[b.getAdUnitPath()])&&_.kq(this.j,b)&&!this.C[e]&&(Nu(this,b,c),b.renderStarted(),this.C[e]=a,_.qs(this,b,d))});_.V.prototype.va=Bt(1,function(a,b){b=void 0===b?window.document:b;try{var c=a.T,d=!1;if(null!=c&&!c._empty_&&!this.N){_.qj.is(_.Gh.w)&&_.Hl(_.Q(a,b),!0);c=b;var e=a.T,f=e&&e._timeout_render_,g=_.m(f)&&-1<f?f:null,k=_.cr(a),l=_.Q(a);l&&Vu(this,l);if(null==k&&null==g||_.zr(this,_.t,(k||0)/100,a))var n=!1;else{e=null;null!=g&&(e=av(this,c,a,g));var p=null!=k&&$u(this,c,a,e);n=null!=e||p}d=n||bv(this,b,a)}d?Pu(a):Zu(this,b,a)}catch(v){}});_.V.prototype.Pb=Bt(0,function(a,b,c){var d=this,e=this.ca[c];e?(b=Ou(this,b,e),delete this.ca[c],Uu(this,a,b),_.B(b,function(a){return d.va(a)}),this.l||c!=this.ta||(window.clearTimeout(this.pb[_.L(e[0])]),_.Xr(this))):(a=new _.M("gpt_req_undef"),_.q(a),_.r(a,"req_id",String(c)),_.N(a))});var iv={},jv=(iv[1]=_.V.prototype.Pb,iv[2]=_.ts.prototype.Qb,iv[3]=_.V.prototype.va,iv[4]=_.ts.prototype.I,iv[5]=_.ns.prototype.Sa,iv[6]=_.ns.prototype.Ob,iv);window.googletag._=function(a,b){b=void 0===b?jv:b;_.fm.push=_.O(339,function(a){var c=a&&b[a.ua];c&&c.apply(a.Fa,a.sa);return 0});_.B(_.fm,function(a){return _.fm.push(a)});_.fm.length=0};})
