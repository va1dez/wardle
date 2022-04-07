"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[812],{390:(t,e,r)=>{r.d(e,{sk:()=>I,Vq:()=>m});var n=r(638),o=r(117),s=r(9),i=r(135),a=r(557),u=r(163),c=r(615),h=r(208),p=r(819);const l="undefined"!==typeof self?self:"undefined"!==typeof window?window:Function("return this")();function f(t){var e=t.xdomain;try{if("undefined"!==typeof XMLHttpRequest&&(!e||p))return new XMLHttpRequest}catch(r){}if(!e)try{return new(l[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(r){}}function d(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return r.reduce((function(e,r){return t.hasOwnProperty(r)&&(e[r]=t[r]),e}),{})}var y=setTimeout,v=clearTimeout;function m(t,e){e.useNativeTimers?(t.setTimeoutFn=y.bind(l),t.clearTimeoutFn=v.bind(l)):(t.setTimeoutFn=setTimeout.bind(l),t.clearTimeoutFn=clearTimeout.bind(l))}var g=r(284),k=r(812),w=r(454);function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,h.Z)(t);if(e){var o=(0,h.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,c.Z)(this,r)}}var T=function(t){(0,u.Z)(r,t);var e=b(r);function r(t){var n;return(0,s.Z)(this,r),(n=e.call(this)).writable=!1,m((0,a.Z)(n),t),n.opts=t,n.query=t.query,n.readyState="",n.socket=t.socket,n}return(0,i.Z)(r,[{key:"onError",value:function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,(0,k.Z)((0,h.Z)(r.prototype),"emit",this).call(this,"error",n),this}},{key:"open",value:function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this}},{key:"close",value:function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}},{key:"send",value:function(t){"open"===this.readyState&&this.write(t)}},{key:"onOpen",value:function(){this.readyState="open",this.writable=!0,(0,k.Z)((0,h.Z)(r.prototype),"emit",this).call(this,"open")}},{key:"onData",value:function(t){var e=(0,w.Yi)(t,this.socket.binaryType);this.onPacket(e)}},{key:"onPacket",value:function(t){(0,k.Z)((0,h.Z)(r.prototype),"emit",this).call(this,"packet",t)}},{key:"onClose",value:function(){this.readyState="closed",(0,k.Z)((0,h.Z)(r.prototype),"emit",this).call(this,"close")}}]),r}(g.Q),R=r(223),S=r(369);function Z(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,h.Z)(t);if(e){var o=(0,h.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,c.Z)(this,r)}}var x=function(t){(0,u.Z)(r,t);var e=Z(r);function r(){var t;return(0,s.Z)(this,r),(t=e.apply(this,arguments)).polling=!1,t}return(0,i.Z)(r,[{key:"name",get:function(){return"polling"}},{key:"doOpen",value:function(){this.poll()}},{key:"pause",value:function(t){var e=this;this.readyState="pausing";var r=function(){e.readyState="paused",t()};if(this.polling||!this.writable){var n=0;this.polling&&(n++,this.once("pollComplete",(function(){--n||r()}))),this.writable||(n++,this.once("drain",(function(){--n||r()})))}else r()}},{key:"poll",value:function(){this.polling=!0,this.doPoll(),this.emit("poll")}},{key:"onData",value:function(t){var e=this;(0,w.pH)(t,this.socket.binaryType).forEach((function(t){if("opening"===e.readyState&&"open"===t.type&&e.onOpen(),"close"===t.type)return e.onClose(),!1;e.onPacket(t)})),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState&&this.poll())}},{key:"doClose",value:function(){var t=this,e=function(){t.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}},{key:"write",value:function(t){var e=this;this.writable=!1,(0,w.V1)(t,(function(t){e.doWrite(t,(function(){e.writable=!0,e.emit("drain")}))}))}},{key:"uri",value:function(){var t=this.query||{},e=this.opts.secure?"https":"http",r="";!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=R()),this.supportsBinary||t.sid||(t.b64=1),this.opts.port&&("https"===e&&443!==Number(this.opts.port)||"http"===e&&80!==Number(this.opts.port))&&(r=":"+this.opts.port);var n=S.encode(t);return e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(n.length?"?"+n:"")}}]),r}(T);function E(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,h.Z)(t);if(e){var o=(0,h.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,c.Z)(this,r)}}function q(){}var B=null!=new f({xdomain:!1}).responseType,P=function(t){(0,u.Z)(r,t);var e=E(r);function r(t){var n;if((0,s.Z)(this,r),n=e.call(this,t),"undefined"!==typeof location){var o="https:"===location.protocol,i=location.port;i||(i=o?"443":"80"),n.xd="undefined"!==typeof location&&t.hostname!==location.hostname||i!==t.port,n.xs=t.secure!==o}var a=t&&t.forceBase64;return n.supportsBinary=B&&!a,n}return(0,i.Z)(r,[{key:"request",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.Z)(t,{xd:this.xd,xs:this.xs},this.opts),new L(this.uri(),t)}},{key:"doWrite",value:function(t,e){var r=this,n=this.request({method:"POST",data:t});n.on("success",e),n.on("error",(function(t){r.onError("xhr post error",t)}))}},{key:"doPoll",value:function(){var t=this,e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(function(e){t.onError("xhr poll error",e)})),this.pollXhr=e}}]),r}(x),L=function(t){(0,u.Z)(r,t);var e=E(r);function r(t,n){var o;return(0,s.Z)(this,r),o=e.call(this),m((0,a.Z)(o),n),o.opts=n,o.method=n.method||"GET",o.uri=t,o.async=!1!==n.async,o.data=void 0!==n.data?n.data:null,o.create(),o}return(0,i.Z)(r,[{key:"create",value:function(){var t=this,e=d(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;var n=this.xhr=new f(e);try{n.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders)for(var o in n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0),this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(o)&&n.setRequestHeader(o,this.opts.extraHeaders[o])}catch(s){}if("POST"===this.method)try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(s){}try{n.setRequestHeader("Accept","*/*")}catch(s){}"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=function(){4===n.readyState&&(200===n.status||1223===n.status?t.onLoad():t.setTimeoutFn((function(){t.onError("number"===typeof n.status?n.status:0)}),0))},n.send(this.data)}catch(s){return void this.setTimeoutFn((function(){t.onError(s)}),0)}"undefined"!==typeof document&&(this.index=r.requestsCount++,r.requests[this.index]=this)}},{key:"onSuccess",value:function(){this.emit("success"),this.cleanup()}},{key:"onData",value:function(t){this.emit("data",t),this.onSuccess()}},{key:"onError",value:function(t){this.emit("error",t),this.cleanup(!0)}},{key:"cleanup",value:function(t){if("undefined"!==typeof this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=q,t)try{this.xhr.abort()}catch(e){}"undefined"!==typeof document&&delete r.requests[this.index],this.xhr=null}}},{key:"onLoad",value:function(){var t=this.xhr.responseText;null!==t&&this.onData(t)}},{key:"abort",value:function(){this.cleanup()}}]),r}(g.Q);if(L.requestsCount=0,L.requests={},"undefined"!==typeof document)if("function"===typeof attachEvent)attachEvent("onunload",O);else if("function"===typeof addEventListener){addEventListener("pagehide",O,!1)}function O(){for(var t in L.requests)L.requests.hasOwnProperty(t)&&L.requests[t].abort()}var C="function"===typeof Promise&&"function"===typeof Promise.resolve?function(t){return Promise.resolve().then(t)}:function(t,e){return e(t,0)},H=l.WebSocket||l.MozWebSocket;function F(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,h.Z)(t);if(e){var o=(0,h.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,c.Z)(this,r)}}var D="undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),U={websocket:function(t){(0,u.Z)(r,t);var e=F(r);function r(t){var n;return(0,s.Z)(this,r),(n=e.call(this,t)).supportsBinary=!t.forceBase64,n}return(0,i.Z)(r,[{key:"name",get:function(){return"websocket"}},{key:"doOpen",value:function(){if(this.check()){var t=this.uri(),e=this.opts.protocols,r=D?{}:d(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=D?new H(t,e,r):e?new H(t,e):new H(t)}catch(n){return this.emit("error",n)}this.ws.binaryType=this.socket.binaryType||"arraybuffer",this.addEventListeners()}}},{key:"addEventListeners",value:function(){var t=this;this.ws.onopen=function(){t.opts.autoUnref&&t.ws._socket.unref(),t.onOpen()},this.ws.onclose=this.onClose.bind(this),this.ws.onmessage=function(e){return t.onData(e.data)},this.ws.onerror=function(e){return t.onError("websocket error",e)}}},{key:"write",value:function(t){var e=this;this.writable=!1;for(var r=function(r){var n=t[r],o=r===t.length-1;(0,w.I4)(n,e.supportsBinary,(function(t){try{e.ws.send(t)}catch(r){}o&&C((function(){e.writable=!0,e.emit("drain")}),e.setTimeoutFn)}))},n=0;n<t.length;n++)r(n)}},{key:"doClose",value:function(){"undefined"!==typeof this.ws&&(this.ws.close(),this.ws=null)}},{key:"uri",value:function(){var t=this.query||{},e=this.opts.secure?"wss":"ws",r="";this.opts.port&&("wss"===e&&443!==Number(this.opts.port)||"ws"===e&&80!==Number(this.opts.port))&&(r=":"+this.opts.port),this.opts.timestampRequests&&(t[this.opts.timestampParam]=R()),this.supportsBinary||(t.b64=1);var n=S.encode(t);return e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(n.length?"?"+n:"")}},{key:"check",value:function(){return!!H&&!(this.name===r.prototype.name)}}]),r}(T),polling:P},W=r(503);function A(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,h.Z)(t);if(e){var o=(0,h.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,c.Z)(this,r)}}var I=function(t){(0,u.Z)(r,t);var e=A(r);function r(t){var i,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,s.Z)(this,r),i=e.call(this),t&&"object"===(0,o.Z)(t)&&(u=t,t=null),t?(t=W(t),u.hostname=t.host,u.secure="https"===t.protocol||"wss"===t.protocol,u.port=t.port,t.query&&(u.query=t.query)):u.host&&(u.hostname=W(u.host).host),m((0,a.Z)(i),u),i.secure=null!=u.secure?u.secure:"undefined"!==typeof location&&"https:"===location.protocol,u.hostname&&!u.port&&(u.port=i.secure?"443":"80"),i.hostname=u.hostname||("undefined"!==typeof location?location.hostname:"localhost"),i.port=u.port||("undefined"!==typeof location&&location.port?location.port:i.secure?"443":"80"),i.transports=u.transports||["polling","websocket"],i.readyState="",i.writeBuffer=[],i.prevBufferLen=0,i.opts=(0,n.Z)({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},u),i.opts.path=i.opts.path.replace(/\/$/,"")+"/","string"===typeof i.opts.query&&(i.opts.query=S.decode(i.opts.query)),i.id=null,i.upgrades=null,i.pingInterval=null,i.pingTimeout=null,i.pingTimeoutTimer=null,"function"===typeof addEventListener&&(i.opts.closeOnBeforeunload&&addEventListener("beforeunload",(function(){i.transport&&(i.transport.removeAllListeners(),i.transport.close())}),!1),"localhost"!==i.hostname&&(i.offlineEventListener=function(){i.onClose("transport close")},addEventListener("offline",i.offlineEventListener,!1))),i.open(),i}return(0,i.Z)(r,[{key:"createTransport",value:function(t){var e=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}(this.opts.query);e.EIO=w.TF,e.transport=t,this.id&&(e.sid=this.id);var r=(0,n.Z)({},this.opts.transportOptions[t],this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new U[t](r)}},{key:"open",value:function(){var t,e=this;if(this.opts.rememberUpgrade&&r.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn((function(){e.emitReserved("error","No transports available")}),0);t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)}},{key:"setTransport",value:function(t){var e=this;this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",(function(){e.onClose("transport close")}))}},{key:"probe",value:function(t){var e=this,n=this.createTransport(t),o=!1;r.priorWebsocketSuccess=!1;var s=function(){o||(n.send([{type:"ping",data:"probe"}]),n.once("packet",(function(t){if(!o)if("pong"===t.type&&"probe"===t.data){if(e.upgrading=!0,e.emitReserved("upgrading",n),!n)return;r.priorWebsocketSuccess="websocket"===n.name,e.transport.pause((function(){o||"closed"!==e.readyState&&(p(),e.setTransport(n),n.send([{type:"upgrade"}]),e.emitReserved("upgrade",n),n=null,e.upgrading=!1,e.flush())}))}else{var s=new Error("probe error");s.transport=n.name,e.emitReserved("upgradeError",s)}})))};function i(){o||(o=!0,p(),n.close(),n=null)}var a=function(t){var r=new Error("probe error: "+t);r.transport=n.name,i(),e.emitReserved("upgradeError",r)};function u(){a("transport closed")}function c(){a("socket closed")}function h(t){n&&t.name!==n.name&&i()}var p=function(){n.removeListener("open",s),n.removeListener("error",a),n.removeListener("close",u),e.off("close",c),e.off("upgrading",h)};n.once("open",s),n.once("error",a),n.once("close",u),this.once("close",c),this.once("upgrading",h),n.open()}},{key:"onOpen",value:function(){if(this.readyState="open",r.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade&&this.transport.pause)for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},{key:"onPacket",value:function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data)}}},{key:"onHandshake",value:function(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}},{key:"resetPingTimeout",value:function(){var t=this;this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn((function(){t.onClose("ping timeout")}),this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}},{key:"onDrain",value:function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}},{key:"flush",value:function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emitReserved("flush"))}},{key:"write",value:function(t,e,r){return this.sendPacket("message",t,e,r),this}},{key:"send",value:function(t,e,r){return this.sendPacket("message",t,e,r),this}},{key:"sendPacket",value:function(t,e,r,n){if("function"===typeof e&&(n=e,e=void 0),"function"===typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){(r=r||{}).compress=!1!==r.compress;var o={type:t,data:e,options:r};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}}},{key:"close",value:function(){var t=this,e=function(){t.onClose("forced close"),t.transport.close()},r=function r(){t.off("upgrade",r),t.off("upgradeError",r),e()},n=function(){t.once("upgrade",r),t.once("upgradeError",r)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(function(){t.upgrading?n():e()})):this.upgrading?n():e()),this}},{key:"onError",value:function(t){r.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}},{key:"onClose",value:function(t,e){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"===typeof removeEventListener&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}},{key:"filterUpgrades",value:function(t){for(var e=[],r=0,n=t.length;r<n;r++)~this.transports.indexOf(t[r])&&e.push(t[r]);return e}}]),r}(g.Q);I.protocol=w.TF;I.protocol}}]);