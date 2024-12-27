"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["1458"],{44803:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>l,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"boards/btt/octopus-11","title":"BIGTREETECH Octopus v1.1","description":"Wiring","source":"@site/docs/boards/btt/octopus-11.md","sourceDirName":"boards/btt","slug":"/boards/btt/octopus-11","permalink":"/docs/boards/btt/octopus-11","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/docs/boards/btt/octopus-11.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Octopus v1.1"},"sidebar":"docsSidebar","previous":{"title":"Octopus v1.1 F407","permalink":"/docs/boards/btt/octopus-11-407"},"next":{"title":"Octopus Max EZ","permalink":"/docs/boards/btt/octopus-max-ez"}}'),o=i("52676"),r=i("23663");let a={sidebar_label:"Octopus v1.1"},s="BIGTREETECH Octopus v1.1",l={},d=[{value:"Wiring",id:"wiring",level:2},{value:"Firmware installation",id:"firmware-installation",level:2},{value:"I updated klipper and now i get an error!",id:"i-updated-klipper-and-now-i-get-an-error",level:2}];function c(e){let t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"bigtreetech-octopus-v11",children:"BIGTREETECH Octopus v1.1"})}),"\n",(0,o.jsx)(t.h2,{id:"wiring",children:"Wiring"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"BTT Octopus V1.1 Wiring Diagram",src:i(96776).Z+"",width:"2348",height:"1560"}),"\n",(0,o.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(86265).Z+"",children:"Open Full Size Image"})]}),"\n",(0,o.jsxs)(t.admonition,{type:"danger",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["if you use the Ratrig endstop switches and cables, do ",(0,o.jsx)(t.strong,{children:"not"})," blindly plug them in to your Octopus as doing this will short the board's 3.3V power rail."]}),(0,o.jsx)(t.p,{children:"You will probably have to swap the outer two wires (red and white) on the board end of the cable but double check to make sure your cables match the wiring diagram in both ends.\nOrders shipped after October 2022 should have the correct cables (the connectors on the new cables are white)."})]}),"\n",(0,o.jsx)(t.admonition,{title:"Jumpers",type:"info",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"Jumper Symbol",src:i(24779).Z+"",width:"40",height:"16"})," A green square with triangles inside is where you would place a jumper,\nremove all jumpers on the board that are not marked by this symbol."]})}),"\n",(0,o.jsx)(t.h2,{id:"firmware-installation",children:"Firmware installation"}),"\n",(0,o.jsx)(t.admonition,{title:"Use a proper cable",type:"caution",children:(0,o.jsxs)(t.p,{children:["Make sure your board is connected to the Pi ",(0,o.jsx)(t.strong,{children:"via the provided USB-C cable"})," (USB-C on the Octopus, USB-A on the Pi)."]})}),"\n",(0,o.jsxs)(t.p,{children:["Follow the steps in the RatOS Configurator at ",(0,o.jsx)(t.a,{href:"http://RatOS.local/configure?step=1",children:"http://RatOS.local/configure?step=1"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"i-updated-klipper-and-now-i-get-an-error",children:"I updated klipper and now i get an error!"}),"\n",(0,o.jsx)(t.p,{children:"When you update klipper you might see an error that looks like this:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Firmware version mismatch between host and guest",src:i(9240).Z+"",width:"849",height:"260"})}),"\n",(0,o.jsxs)(t.p,{children:["This is because klipper made changes to a part of the MCU firmware that we use, and something went wrong while automatically flashing your board. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware, Follow the steps in the RatOS Configurator at ",(0,o.jsx)(t.a,{href:"http://RatOS.local/configure?step=1",children:"http://RatOS.local/configure?step=1"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},86265:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/files/octopus-11-wiring-full-6a19a1ea9e006b089a71d756741f989d.png"},24779:function(e,t,i){i.d(t,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmx1Y2lkPSJsdWNpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjE2Ij48ZyBzdHJva2U9IiM3YWI2NDgiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0iI2ZmZiIgbHVjaWQ6cGFnZS10YWItaWQ9IjBfMCIgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMiwgLTEyKSI+PHBhdGggZD0iTTQzLjg4IDI3Ljg2aC0yMy43VjIwLjJoMjMuN3Y3LjY2eiIvPjxwYXRoIGQ9Ik00My44OCAyMi4wNmwtMy44NCA0LjItNC4wOC00LjItMy45NCA0LjItMy45OC00LjItNCA0LjItMy44Ny00LjIiLz48L2c+PC9zdmc+"},96776:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/octopus-11-wiring-19beb1b4b4719f7327a629b125c1dade.png"},9240:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/firmware_version_mismatch-456c9561ecf03b8fc5c498f42ce6a891.png"},23663:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return a}});var n=i(75271);let o={},r=n.createContext(o);function a(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);