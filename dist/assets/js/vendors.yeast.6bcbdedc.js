"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[989],{223:e=>{var r,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),t={},o=0,u=0;function a(e){var r="";do{r=n[e%64]+r,e=Math.floor(e/64)}while(e>0);return r}function c(){var e=a(+new Date);return e!==r?(o=0,r=e):e+"."+a(o++)}for(;u<64;u++)t[n[u]]=u;c.encode=a,c.decode=function(e){var r=0;for(u=0;u<e.length;u++)r=64*r+t[e.charAt(u)];return r},e.exports=c}}]);