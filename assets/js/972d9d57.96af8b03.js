"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["272"],{7984:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"introduction","title":"What is RatOS?","description":"RatOS is a comprehensive 3D printer firmware solution that combines Klipper, Moonraker, Mainsail, and KlipperScreen into an easy-to-use, point-and-click configuration system. It is developed and maintained by Mikkel Schmidt (miklschmidt#2036 on the Rat Rig Unofficial Discord).","source":"@site/docs/introduction.mdx","sourceDirName":".","slug":"/introduction","permalink":"/docs/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/docs/introduction.mdx","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"What is RatOS?","sidebar_label":"Introduction","sidebar_position":0},"sidebar":"docsSidebar","next":{"title":"Installation","permalink":"/docs/installation"}}'),r=n("52676"),s=n("69532"),o=n("92460");let l={title:"What is RatOS?",sidebar_label:"Introduction",sidebar_position:0},a="What is RatOS?",d={},c=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Advanced Features",id:"advanced-features",level:2},{value:"What do I need?",id:"what-do-i-need",level:2},{value:"Currently supported host computers",id:"currently-supported-host-computers",level:3},{value:"Community supported host computers",id:"community-supported-host-computers",level:4},{value:"Currently Supported Printers",id:"currently-supported-printers",level:2},{value:"Official Support",id:"official-support",level:3},{value:"Community Support",id:"community-support",level:3},{value:"Contribute",id:"contribute",level:2},{value:"Software Credits",id:"software-credits",level:2},{value:"Disclaimer",id:"disclaimer",level:2},{value:"Github links",id:"github-links",level:2}];function h(e){let i={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"what-is-ratos",children:"What is RatOS?"})}),"\n",(0,r.jsx)(i.p,{children:"RatOS is a comprehensive 3D printer firmware solution that combines Klipper, Moonraker, Mainsail, and KlipperScreen into an easy-to-use, point-and-click configuration system. It is developed and maintained by Mikkel Schmidt (miklschmidt#2036 on the Rat Rig Unofficial Discord)."}),"\n",(0,r.jsx)(i.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,r.jsx)(i.p,{children:"RatOS simplifies the complex world of Klipper-based 3D printing by providing:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"A pre-configured Raspberry Pi image with all necessary software components"}),"\n",(0,r.jsxs)(i.li,{children:["An intuitive web-based configurator that lets you:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Select from 12+ supported printers and 45+ control and toolboards"}),"\n",(0,r.jsx)(i.li,{children:"Configure toolhead hardware (supporting up to 2 toolheads per printer)"}),"\n",(0,r.jsx)(i.li,{children:"Set up multiple toolboards"}),"\n",(0,r.jsx)(i.li,{children:"Fine-tune motor and driver configurations"}),"\n",(0,r.jsx)(i.li,{children:"Automatically apply tested driver tuning presets for known configurations"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.li,{children:"Fully automated firmware and system updates"}),"\n",(0,r.jsxs)(i.li,{children:["Extensive collection of configurable macros for:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Automated print start/end sequences"}),"\n",(0,r.jsx)(i.li,{children:"Smart filament handling and sensor integration"}),"\n",(0,r.jsx)(i.li,{children:"Chamber temperature control"}),"\n",(0,r.jsx)(i.li,{children:"Adaptive bed meshing and nozzle priming"}),"\n",(0,r.jsx)(i.li,{children:"Intelligent pause/resume functionality"}),"\n",(0,r.jsx)(i.li,{children:"Temperature-aware probe operations"}),"\n",(0,r.jsx)(i.li,{children:"Input shaper calibration tools"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"The system automatically generates and maintains your printer's configuration files, significantly reducing the need for manual editing or command-line interaction. When you make hardware changes, RatOS updates your configuration automatically and shows you the changes for review."}),"\n",(0,r.jsx)(i.h2,{id:"advanced-features",children:"Advanced Features"}),"\n",(0,r.jsx)(i.p,{children:"Beyond basic configuration, RatOS includes:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["Realtime Analysis Tool (RAT) for live power spectral density analysis","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"input shaper calibration"}),"\n",(0,r.jsx)(i.li,{children:"belt tension tuning with peak detection and mechanical health estimation"}),"\n",(0,r.jsx)(i.li,{children:"oscillator for resonance hunting"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.li,{children:"Visually Assisted Offset Calibration (VAOC) for precise multi-toolhead calibration"}),"\n",(0,r.jsx)(i.li,{children:"Advanced IDEX support with blazing fast toolshifting and multi-color printing"}),"\n",(0,r.jsx)(i.li,{children:"Automated firmware and system updates"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"RatOS's main design principle is that users shouldn't need command-line knowledge to use Klipper on their 3D printer. However, for advanced users, RatOS remains fully compatible with standard Klipper configuration, allowing you to leverage its tools while maintaining full control over your setup."}),"\n",(0,r.jsx)(i.h2,{id:"what-do-i-need",children:"What do I need?"}),"\n",(0,r.jsx)(i.p,{children:"To run RatOS on your printer you need a supported control board and a Raspberry Pi or BTT CB1 (experimental)."}),"\n",(0,r.jsx)(i.h3,{id:"currently-supported-host-computers",children:"Currently supported host computers"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Raspberry Pi 3 (A+/B/B+)"}),"\n",(0,r.jsx)(i.li,{children:"Raspberry Pi 4B"}),"\n",(0,r.jsx)(i.li,{children:"Raspberry Pi 400"}),"\n",(0,r.jsx)(i.li,{children:"Raspberry Pi Zero 2"}),"\n",(0,r.jsx)(i.li,{children:"Raspberry Pi Compute Module 4 Lite for use with SD Cards"}),"\n",(0,r.jsx)(i.li,{children:"Raspberry pi Compute Module 4 with at least 16gb eMMC (more complicated to set up)"}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"community-supported-host-computers",children:"Community supported host computers"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Big Tree Tech CB1 (experimental)"}),"\n"]}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)(o.Z,{to:"/docs/installation",className:"button button--primary",children:(0,r.jsx)(i.p,{children:"Ready? Get started!"})})}),"\n",(0,r.jsx)(i.h2,{id:"currently-supported-printers",children:"Currently Supported Printers"}),"\n",(0,r.jsx)(i.h3,{id:"official-support",children:"Official Support"}),"\n",(0,r.jsx)(i.p,{children:"These printers are officially supported by Rat Rig and the RatOS team."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Rat Rig V-Core Pro v1.3"}),"\n",(0,r.jsx)(i.li,{children:"Rat Rig V-Core 3"}),"\n",(0,r.jsx)(i.li,{children:"Rat Rig V-Core 3 IDEX"}),"\n",(0,r.jsx)(i.li,{children:"Rat Rig V-Core 4"}),"\n",(0,r.jsx)(i.li,{children:"Rat Rig V-Core 4 Hybrid"}),"\n",(0,r.jsx)(i.li,{children:"Rat Rig V-Core 4 IDEX"}),"\n",(0,r.jsx)(i.li,{children:"Rat Rig V-Minion"}),"\n",(0,r.jsx)(i.li,{children:"Rat Rig V-Chonk"}),"\n",(0,r.jsx)(i.li,{children:"Rat Rig V-Chonk 3Z Mod"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"community-support",children:"Community Support"}),"\n",(0,r.jsx)(i.p,{children:"These printers are supported through community contributions and may not be as well tested."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Prusa Mini"}),"\n",(0,r.jsx)(i.li,{children:"Pruse MK3S"}),"\n",(0,r.jsx)(i.li,{children:"Voron Design V0.1"}),"\n",(0,r.jsx)(i.li,{children:"Voron Design V2.4"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"contribute",children:"Contribute"}),"\n",(0,r.jsx)(i.p,{children:"Join the discussion on discord!"}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)(o.Z,{to:"https://discord.gg/D62e8XNeYa",className:"button button--primary",children:(0,r.jsx)(i.p,{children:"Join the Unnofficial RatRig Discord Community"})})}),"\n",(0,r.jsx)(i.h2,{id:"software-credits",children:"Software Credits"}),"\n",(0,r.jsxs)(i.p,{children:["RatOS is based on ",(0,r.jsx)(i.a,{href:"https://www.klipper3d.org/",children:"Klipper"}),", ",(0,r.jsx)(i.a,{href:"https://moonraker.readthedocs.io/en/latest/",children:"Moonraker"}),", ",(0,r.jsx)(i.a,{href:"https://docs.mainsail.xyz/",children:"Mainsail"}),", ",(0,r.jsx)(i.a,{href:"https://github.com/raymondh2/MainsailOS",children:"MainsailOS"})," and ",(0,r.jsx)(i.a,{href:"https://klipperscreen.readthedocs.io/",children:"KlipperScreen"})," without these and the amazing people behind them, RatOS would not have been possible."]}),"\n",(0,r.jsx)(i.h2,{id:"disclaimer",children:"Disclaimer"}),"\n",(0,r.jsx)(i.p,{children:"The software is provided \u201Cas is\u201D, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software."}),"\n",(0,r.jsx)(i.h2,{id:"github-links",children:"Github links"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://github.com/Rat-OS/RatOS/",children:"RatOS System Image"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://github.com/Rat-OS/RatOS-Configurator/",children:"RatOS Configurator"})}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},69532:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return o}});var t=n(75271);let r={},s=t.createContext(r);function o(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);