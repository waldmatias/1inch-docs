"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[4694],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),d=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=d(r),f=a,u=s["".concat(l,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(u,o(o({ref:e},p),{},{components:r})):n.createElement(u,o({ref:e},p))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},29628:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],c={},l="Interaction",d={unversionedId:"limit-order-protocol/smart-contract/interfaces/InteractionNotificationReceiver",id:"limit-order-protocol/smart-contract/interfaces/InteractionNotificationReceiver",isDocsHomePage:!1,title:"Interaction",description:"Functions",source:"@site/docs/limit-order-protocol/smart-contract/interfaces/InteractionNotificationReceiver.md",sourceDirName:"limit-order-protocol/smart-contract/interfaces",slug:"/limit-order-protocol/smart-contract/interfaces/InteractionNotificationReceiver",permalink:"/docs/limit-order-protocol/smart-contract/interfaces/InteractionNotificationReceiver",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/limit-order-protocol/smart-contract/interfaces/InteractionNotificationReceiver.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IWithdrawable",permalink:"/docs/limit-order-protocol/smart-contract/interfaces/IWithdrawable"},next:{title:"PostInteraction",permalink:"/docs/limit-order-protocol/smart-contract/interfaces/PostInteractionNotificationReceiver"}},p=[{value:"Functions",id:"functions",children:[{value:"fillOrderInteraction",id:"fillorderinteraction",children:[]}]}],m={toc:p};function s(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interaction"},"Interaction"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"fillorderinteraction"},"fillOrderInteraction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function fillOrderInteraction(\n  address taker,\n  address makerAsset,\n  address takerAsset,\n  uint256 makingAmount,\n  uint256 takingAmount,\n  bytes interactiveData\n) external\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"taker")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"makerAsset")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"takerAsset")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"makingAmount")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"takingAmount")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"interactiveData")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,i.kt)("td",{parentName:"tr",align:"left"})))))}s.isMDXComponent=!0}}]);