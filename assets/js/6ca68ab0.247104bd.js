"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["7942"],{68500:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>a});var i=JSON.parse('{"id":"boards/btt/skr-pro-12","title":"BIGTREETECH SKR Pro v1.2","description":"Jumper configuration","source":"@site/versioned_docs/version-2.0.x/boards/btt/skr-pro-12.md","sourceDirName":"boards/btt","slug":"/boards/btt/skr-pro-12","permalink":"/docs/2.0.x/boards/btt/skr-pro-12","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/versioned_docs/version-2.0.x/boards/btt/skr-pro-12.md","tags":[],"version":"2.0.x","frontMatter":{"sidebar_label":"SKR Pro v1.2"},"sidebar":"docsSidebar","previous":{"title":"SKR Mini E3 v3.0","permalink":"/docs/2.0.x/boards/btt/skr-mini-e3-30"},"next":{"title":"SKRat v1.0","permalink":"/docs/2.0.x/boards/btt/skrat-10"}}'),r=n("52676"),o=n("23663");let s={sidebar_label:"SKR Pro v1.2"},a="BIGTREETECH SKR Pro v1.2",d={},l=[{value:"Jumper configuration",id:"jumper-configuration",level:2},{value:"Stepper Pins",id:"stepper-pins",level:2},{value:"Wiring",id:"wiring",level:2},{value:"Zoomed view of VIN",id:"zoomed-view-of-vin",level:2},{value:"Zoomed view of endstops and probes",id:"zoomed-view-of-endstops-and-probes",level:2},{value:"ADXL345",id:"adxl345",level:2},{value:"Firmware installation",id:"firmware-installation",level:2},{value:"I updated klipper and now i get an error!",id:"i-updated-klipper-and-now-i-get-an-error",level:2}];function p(e){let t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"bigtreetech-skr-pro-v12",children:"BIGTREETECH SKR Pro v1.2"})}),"\n",(0,r.jsx)(t.h2,{id:"jumper-configuration",children:"Jumper configuration"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"SKR Pro 1.2 Jumpers",src:n(86658).Z+"",width:"3504",height:"2478"})}),"\n",(0,r.jsx)(t.h2,{id:"stepper-pins",children:"Stepper Pins"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["To use physical endstops on the SKR Pro you need to cut the diag pins from your X and Y stepper drivers. This will prevent you from using sensorless homing. If you later change your mind, you can swap X and Y with 2 of the Z steppers.\n",(0,r.jsx)(t.img,{alt:"SKR Pro 1.2 Stepper Pins",src:n(37562).Z+"",width:"1600",height:"621"}),"\n",(0,r.jsx)(t.img,{alt:"SKR Pro 1.2 Stepper Pins",src:n(2670).Z+"",width:"1600",height:"621"})]})}),"\n",(0,r.jsx)(t.h2,{id:"wiring",children:"Wiring"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"SKR Pro 1.2 Wiring Diagram",src:n(87042).Z+"",width:"1400",height:"1099"})}),"\n",(0,r.jsxs)(t.admonition,{type:"danger",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["if you use the Ratrig endstop switches and cables, do ",(0,r.jsx)(t.strong,{children:"not"})," blindly plug them in to your SKR Pro 1.2 as doing this will short the board's 3.3V power rail."]}),(0,r.jsx)(t.p,{children:"You will probably have to swap the outer two wires (red and white) on the board end of the cable but double check to make sure."})]}),"\n",(0,r.jsx)(t.h2,{id:"zoomed-view-of-vin",children:"Zoomed view of VIN"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"SKR Pro 1.2 Stepper Pins",src:n(67702).Z+"",width:"3504",height:"2478"})}),"\n",(0,r.jsx)(t.h2,{id:"zoomed-view-of-endstops-and-probes",children:"Zoomed view of endstops and probes"}),"\n",(0,r.jsx)(t.admonition,{title:"Inductive Probes",type:"info",children:(0,r.jsx)(t.p,{children:"You can optionally use an inductive probe, in that case the BLTouch header can be used as shown below. 6V - 36V probes will require custom wiring - do not plug more than 5V into the signal pin on the board."})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"SKR Pro 1.2 Stepper Pins",src:n(25761).Z+"",width:"3504",height:"2478"})}),"\n",(0,r.jsx)(t.h2,{id:"adxl345",children:"ADXL345"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"In Klipper you can use an ADXL345 accelerometer chip to automatically tune your Input Shaper settings. This works out of the box in RatOS if you wire it to the SPI port on the far right side of the SKR Pro 1.2."})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"SKR Pro 1.2 Stepper Pins",src:n(77033).Z+"",width:"3504",height:"2478"}),"\n",(0,r.jsx)(t.img,{alt:"SKR Pro 1.2 Stepper Pins",src:n(58011).Z+"",width:"3504",height:"2478"})]}),"\n",(0,r.jsx)(t.h2,{id:"firmware-installation",children:"Firmware installation"}),"\n",(0,r.jsxs)(t.p,{children:["Follow the steps in the RatOS Configurator at ",(0,r.jsx)(t.a,{href:"http://RatOS.local/configure?step=1",children:"http://RatOS.local/configure?step=1"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"i-updated-klipper-and-now-i-get-an-error",children:"I updated klipper and now i get an error!"}),"\n",(0,r.jsx)(t.p,{children:"When you update klipper you might see an error that looks like this:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Firmware version mismatch between host and guest",src:n(9240).Z+"",width:"849",height:"260"})}),"\n",(0,r.jsxs)(t.p,{children:["This is because klipper made changes to a part of the MCU firmware that we use, and something went wrong while automatically flashing your board. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware, Follow the steps in the RatOS Configurator at ",(0,r.jsx)(t.a,{href:"http://RatOS.local/configure?step=1",children:"http://RatOS.local/configure?step=1"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9240:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/firmware_version_mismatch-456c9561ecf03b8fc5c498f42ce6a891.png"},58011:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/skr-pro-12-ADXL345-angled-803a2c66e3d46568903e15b7a1068075.png"},77033:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/skr-pro-12-ADXL345-top-down-9ba70792c38e218f676b8bf6668ce683.png"},25761:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/skr-pro-12-endstops-3fa9f1a9ee76a97c8a7e66527735b416.png"},86658:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/skr-pro-12-jumpers-8280a461cbe79bbf82ca6a72d3e5d3be.png"},2670:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/skr-pro-12-stepper-pins-alt-ef9b1d6dfbd8545b031e76510ab3dc98.png"},37562:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/skr-pro-12-stepper-pins-09a829796d04778a944eb8f83b7d8215.png"},67702:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/skr-pro-12-vin-5ea726dac29413e279b3657a7939788e.png"},87042:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/skr-pro-12-wiring-649184e61cd0f166a92f2ec5303143e7.png"},23663:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var i=n(75271);let r={},o=i.createContext(r);function s(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);