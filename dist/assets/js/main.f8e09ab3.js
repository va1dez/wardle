"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{176:(e,t,r)=>{var n=r(928),o=r(745),c=r(294),s=r(942),i=r(152);const l=function(e){return(0,n.Z)("div",{className:"box"},void 0,e.text)};const u=function(e){return(0,n.Z)("div",{className:"row"},void 0,(0,n.Z)(l,{text:e.letters[0]}),(0,n.Z)(l,{text:e.letters[1]}),(0,n.Z)(l,{text:e.letters[2]}),(0,n.Z)(l,{text:e.letters[3]}),(0,n.Z)(l,{text:e.letters[4]}))};function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var f=0,p=0,v={0:["","","","",""],1:["","","","",""],2:["","","","",""],3:["","","","",""],4:["","","","",""],5:["","","","",""]};const d=function(){var e=(0,c.useState)(v),t=(0,i.Z)(e,2),r=t[0],o=t[1];return(0,c.useEffect)((function(){function e(e){var t="Backspace"===e.key?null:e.key;if("Enter"!==t||5===p)if(t||0===p||p--,5!==p){var n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r);n[f]=r[f].map((function(e,r){return r===p?t:e})),t&&p++,o(n)}else"Enter"===t&&(p=0,f++)}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}})),(0,n.Z)("div",{className:"container"},void 0,(0,n.Z)(u,{letters:r[0]}),(0,n.Z)(u,{letters:r[1]}),(0,n.Z)(u,{letters:r[2]}),(0,n.Z)(u,{letters:r[3]}),(0,n.Z)(u,{letters:r[4]}),(0,n.Z)(u,{letters:r[5]}))};var O=r(27),Z=document.getElementById("root");o.s(Z).render((0,n.Z)(d,{name:"Wardle"})),(0,O.ZP)("http://localhost:3000").emit("hello","world")}},e=>{e.O(0,[812,430,578,119,805,905,532,301,989,47,288,936,654],(()=>{return t=176,e(e.s=t);var t}));e.O()}]);