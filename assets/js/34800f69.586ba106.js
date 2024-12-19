"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["1993"],{60487:function(e,i,r){r.r(i),r.d(i,{default:()=>p,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>h,contentTitle:()=>l});var t=JSON.parse('{"id":"introduction","title":"What is RatOS?","description":"RatOS is a preconfigured Raspberry Pi image that aims to make it as painless as possible to get Klipper, Moonraker, Mainsail and KlipperScreen up and running on your printer, via an easy to use, modular configuration. It is developed and maintained by Mikkel Schmidt (miklschmidt#2036 on the Rat Rig Unofficial Discord).","source":"@site/versioned_docs/version-2.0.x/introduction.mdx","sourceDirName":".","slug":"/introduction","permalink":"/docs/2.0.x/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/versioned_docs/version-2.0.x/introduction.mdx","tags":[],"version":"2.0.x","sidebarPosition":0,"frontMatter":{"title":"What is RatOS?","sidebar_label":"Introduction","sidebar_position":0},"sidebar":"docsSidebar","next":{"title":"Installation","permalink":"/docs/2.0.x/installation"}}'),n=r("52676"),o=r("69532"),s=r("92460");let a={title:"What is RatOS?",sidebar_label:"Introduction",sidebar_position:0},l="What is RatOS?",d={},h=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"What do I need?",id:"what-do-i-need",level:2},{value:"Currently Supported Printers",id:"currently-supported-printers",level:2},{value:"Contribute",id:"contribute",level:2},{value:"Software Credits",id:"software-credits",level:2},{value:"Disclaimer",id:"disclaimer",level:2},{value:"Github links",id:"github-links",level:2}];function c(e){let i={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"what-is-ratos",children:"What is RatOS?"})}),"\n",(0,n.jsxs)(i.p,{children:["RatOS is a preconfigured Raspberry Pi image that aims to make it as painless as possible to get ",(0,n.jsx)(i.a,{href:"https://www.klipper3d.org/",children:"Klipper"}),", ",(0,n.jsx)(i.a,{href:"https://moonraker.readthedocs.io/en/latest/",children:"Moonraker"}),", ",(0,n.jsx)(i.a,{href:"https://docs.mainsail.xyz/",children:"Mainsail"})," and ",(0,n.jsx)(i.a,{href:"https://klipperscreen.readthedocs.io/",children:"KlipperScreen"})," up and running on your printer, via an easy to use, modular configuration. It is developed and maintained by Mikkel Schmidt (miklschmidt#2036 on the Rat Rig Unofficial Discord)."]}),"\n",(0,n.jsx)(i.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,n.jsx)(i.p,{children:"A typical klipper setup consists of three parts, there's Klipper itself, which does all the stuff Marlin or RRF would do - read gcode and control your printer.\nThen there's the API, Moonraker which exposes printer status and methods for other programs to talk to Klipper. Lastly there's the user interface, sort of like octoprint / duet web control / octodash / octoscreen, there are currently three popular options for that: Mainsail, Fluidd and Klipperscreen."}),"\n",(0,n.jsx)(i.p,{children:"Like MainsailOS and FluiddPi, RatOS is just an image for your Raspberry Pi consisting of a combination of these parts and some initial setup. RatOS goes a step further than the others and provides a complete managed modular configuration supporting several printers, extruders, hotends, boards, probes, sensors, macros, etc and some extra neat features such as automated firmware updates, easy input shaper graph generation and so on. RatOS's main design principle is that the user shouldn't be required to interact with the commandline to use Klipper on their 3D Printer."}),"\n",(0,n.jsx)(i.p,{children:"That said, anything you can do in klipper, you can do in RatOS, if you're well versed in klipper configurations you can even use parts of the RatOS configuration to set up an unsupported printer, giving you easy access to automatic flashing of toolboards and controlboards, stowable probes and a ton of macro's to make your life easier."}),"\n",(0,n.jsx)(i.h2,{id:"what-do-i-need",children:"What do I need?"}),"\n",(0,n.jsx)(i.p,{children:"To run RatOS on your printer you need a supported control board and a Raspberry Pi or BTT CB1 (experimental)."}),"\n",(0,n.jsx)(i.p,{children:"Currently supported raspberry pi's:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Raspberry Pi 3 (A+/B/B+)"}),"\n",(0,n.jsx)(i.li,{children:"Raspberry Pi 4B"}),"\n",(0,n.jsx)(i.li,{children:"Raspberry Pi 400"}),"\n",(0,n.jsx)(i.li,{children:"Raspberry Pi Zero 2"}),"\n",(0,n.jsx)(i.li,{children:"Raspberry Pi Compute Module 4 Lite for use with SD Cards"}),"\n",(0,n.jsx)(i.li,{children:"Raspberry pi Compute Module 4 with at least 16gb eMMC (more complicated to set up)"}),"\n",(0,n.jsx)(i.li,{children:"Big Tree Tech CB1 (experimental)"}),"\n"]}),"\n",(0,n.jsx)("p",{children:(0,n.jsx)(s.Z,{to:"/docs/installation",className:"button button--primary",children:(0,n.jsx)(i.p,{children:"Ready? Get started!"})})}),"\n",(0,n.jsx)(i.h2,{id:"currently-supported-printers",children:"Currently Supported Printers"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/docs/2.0.x/printers/v-core-3",children:"Rat Rig V-Core 3"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/docs/2.0.x/printers/v-core-pro",children:"Rat Rig V-Core Pro 1.3"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/docs/2.0.x/printers/v-minion",children:"Rat Rig V-Minion"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/docs/2.0.x/printers/voron-v01",children:"Voron V0.1 (experimental)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/docs/2.0.x/printers/voron-v24",children:"Voron V2.4 (experimental)"})}),"\n",(0,n.jsx)(i.li,{children:"Prusa Mini (experimental)"}),"\n",(0,n.jsx)(i.li,{children:"Prusa MK3S (experimental)"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"contribute",children:"Contribute"}),"\n",(0,n.jsx)(i.p,{children:"Join the discussion on discord!"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://discord.gg/D62e8XNeYa",title:":class=button",children:"Join the Unnofficial RatRig Discord Community"})}),"\n",(0,n.jsx)(i.h2,{id:"software-credits",children:"Software Credits"}),"\n",(0,n.jsxs)(i.p,{children:["RatOS is based on ",(0,n.jsx)(i.a,{href:"https://www.klipper3d.org/",children:"Klipper"}),", ",(0,n.jsx)(i.a,{href:"https://moonraker.readthedocs.io/en/latest/",children:"Moonraker"}),", ",(0,n.jsx)(i.a,{href:"https://docs.mainsail.xyz/",children:"Mainsail"}),", ",(0,n.jsx)(i.a,{href:"https://github.com/raymondh2/MainsailOS",children:"MainsailOS"})," and ",(0,n.jsx)(i.a,{href:"https://klipperscreen.readthedocs.io/",children:"KlipperScreen"})," without these and the amazing people behind them, RatOS would not have been possible."]}),"\n",(0,n.jsx)(i.h2,{id:"disclaimer",children:"Disclaimer"}),"\n",(0,n.jsx)(i.p,{children:"The software is provided \u201Cas is\u201D, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software."}),"\n",(0,n.jsx)(i.h2,{id:"github-links",children:"Github links"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/Rat-OS/RatOS/",children:"RatOS"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/rat-os/ratos-configuration",children:"Configuration Repository"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/Rat-Rig/v-core-3-klipper-config",children:"Old Configuration Repository (< RC2)"})})]})}function p(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},69532:function(e,i,r){r.d(i,{Z:function(){return a},a:function(){return s}});var t=r(75271);let n={},o=t.createContext(n);function s(e){let i=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);