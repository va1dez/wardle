"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{888:(e,t,r)=>{var n=r(745),o=r(294),c=r(928),a=r(152);const s=function(e){return(0,c.Z)("div",{className:e.boxStyle},void 0,e.text)};var i=(0,r(27).ZP)("http://localhost:3000");i.on("checkedword",(function(e){console.log(e)}));const l=i;var u={currRow:0,0:[],1:[],2:[],3:[],4:[],5:[],style:[]};const f=function(){for(var e,t=(0,o.useState)(u),r=(0,a.Z)(t,2),n=r[0],i=(r[1],new Array(30)),l=0;l<i.length;l++){var f="p2sq".concat(l),v=Math.floor(l/5),y=l%5,d=n[v][y]?n[v][y]:"",b=n.style[l]?n.style[l]:"box";i[l]=e||(e=(0,c.Z)(s,{text:d,boxStyle:b},f))}return(0,c.Z)("div",{className:"container"},void 0,i)};var v=r(942),y={translate:function(e){return 8===e.keyCode?"back":13===e.keyCode?"enter":e.keyCode>64&&e.keyCode<91?String.fromCharCode(e.keyCode).toUpperCase():void 0}};const d=y;function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,v.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w={currRow:0,0:[],1:[],2:[],3:[],4:[],5:[],style:[]};const h=function(){var e,t=(0,o.useState)(w),r=(0,a.Z)(t,2),n=r[0],i=r[1];function u(e){var t=n.currRow,r=d.translate(e),o=JSON.parse(JSON.stringify(n[t])),c={};if(r){if(5===o.length)if("back"===r)o.pop();else{if("enter"!==r)return;l.emit("checkword","therooms",o,(function(e){var r=e;if("notaword"!==r){var o=r.map((function(e,t){return"G"==e?"box green":"C"==e?"box yellow":"X"==e?"box dark":void 0}));c.style=n.style.concat(o),c.currRow=t+1;var a=p(p({},n),c);i(a),r.every((function(e){return"G"===e}))&&console.log("You won!")}}))}else{if(0===o.length&&"back"===r)return;if("enter"===r)return;"back"===r?o.pop():"enter"!==r&&o.push(r)}c[t]=o;var a=p(p({},n),c);i(a)}}(0,o.useEffect)((function(){return document.addEventListener("keydown",u),function(){document.removeEventListener("keydown",u)}}));for(var f=new Array(30),v=0;v<f.length;v++){var y="p1sq".concat(v),b=Math.floor(v/5),h=v%5,m=n[b][h]?n[b][h]:"",O=n.style[v]?n.style[v]:"box";f[v]=e||(e=(0,c.Z)(s,{text:m,boxStyle:O},y))}return(0,c.Z)("div",{className:"container"},void 0,f)};var m={currRow:0,0:[],1:[],2:[],3:[],4:[],5:[],style:[]};const O=function(){for(var e,t=(0,o.useState)(m),r=(0,a.Z)(t,2),n=r[0],i=(r[1],new Array(30)),l=0;l<i.length;l++){var u="p3sq".concat(l),f=Math.floor(l/5),v=l%5,y=n[f][v]?n[f][v]:"",d=n.style[l]?n.style[l]:"box";i[l]=e||(e=(0,c.Z)(s,{text:y,boxStyle:d},u))}return(0,c.Z)("div",{className:"container"},void 0,i)};var Z={currRow:0,0:[],1:[],2:[],3:[],4:[],5:[],style:[]};const g=function(){for(var e,t=(0,o.useState)(Z),r=(0,a.Z)(t,2),n=r[0],i=(r[1],new Array(30)),l=0;l<i.length;l++){var u="p4sq".concat(l),f=Math.floor(l/5),v=l%5,y=n[f][v]?n[f][v]:"",d=n.style[l]?n.style[l]:"box";i[l]=e||(e=(0,c.Z)(s,{text:y,boxStyle:d},u))}return(0,c.Z)("div",{className:"container"},void 0,i)};var k;const x=function(){return k||(k=(0,c.Z)("div",{className:"maincontainer"},void 0,(0,c.Z)(h,{}),(0,c.Z)(f,{}),(0,c.Z)(O,{}),(0,c.Z)(g,{})))};var S=document.getElementById("root");n.s(S).render(o.createElement(x,{name:"Wardle"}))}},e=>{e.O(0,[812,430,578,119,805,905,532,301,989,47,288,936,654],(()=>{return t=888,e(e.s=t);var t}));e.O()}]);