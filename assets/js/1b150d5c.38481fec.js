"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["2538"],{78731:function(e,t,i){i.r(t),i.d(t,{default:()=>c,frontMatter:()=>r,metadata:()=>n,assets:()=>l,toc:()=>h,contentTitle:()=>s});var n=JSON.parse('{"id":"installation","title":"Installing RatOS","description":"Raspberry Pi Installation","source":"@site/versioned_docs/version-2.0.x/installation.md","sourceDirName":".","slug":"/installation","permalink":"/docs/2.0.x/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/versioned_docs/version-2.0.x/installation.md","tags":[],"version":"2.0.x","sidebarPosition":1,"frontMatter":{"id":"installation","title":"Installing RatOS","sidebar_label":"Installation","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Introduction","permalink":"/docs/2.0.x/introduction"},"next":{"title":"Initial Configuration","permalink":"/docs/2.0.x/configuration"}}'),a=i("52676"),o=i("23663");let r={id:"installation",title:"Installing RatOS",sidebar_label:"Installation",sidebar_position:1},s="Installation",l={},h=[{value:"Raspberry Pi Installation",id:"raspberry-pi-installation",level:2},{value:"WIFI or Ethernet",id:"wifi-or-ethernet",level:3},{value:"Preparing your control board",id:"preparing-your-control-board",level:2},{value:"Mainsail",id:"mainsail",level:2},{value:"Updating",id:"updating",level:2},{value:"Setup",id:"setup",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"installation",children:"Installation"})}),"\n",(0,a.jsx)(t.h2,{id:"raspberry-pi-installation",children:"Raspberry Pi Installation"}),"\n",(0,a.jsx)(t.admonition,{title:"USE PROPER AUTHENTIC SD CARDS",type:"warning",children:(0,a.jsx)(t.p,{children:"There are multiple examples of bad quality sd cards causing boot and corruption issues. It's highly recommended to get SanDisk Ultra U1 A1 cards (16GB or larger) from an official source to ensure long life and reliable operation of your Raspberry Pi."})}),"\n",(0,a.jsxs)(t.p,{children:["Download the newest release (download the RatOS-*.img.xz file under the assets dropdown) of ",(0,a.jsx)(t.a,{href:"https://github.com/Rat-Os/RatOS/releases/latest",children:"RatOS on github"}),".\nThen use ",(0,a.jsx)(t.a,{href:"https://www.balena.io/etcher/",children:"Balena Etcher"})," to write that image to the SD card that goes into your raspberry pi (16GB or larger)."]}),"\n",(0,a.jsx)(t.p,{children:"Note: this will destroy all data on the card!"}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["For Raspberry Pis with 1gb or less memory, it's recommended to use the 32-bit (",(0,a.jsx)(t.code,{children:"rpi32"}),") version of the image. 64-bit (",(0,a.jsx)(t.code,{children:"rpi64"}),") causes too high memory usage in some situations."]})}),"\n",(0,a.jsx)("a",{class:"button button--primary",href:"https://github.com/Rat-Os/RatOS/releases/latest",children:"Download RatOS"}),"\n",(0,a.jsx)(t.h3,{id:"wifi-or-ethernet",children:"WIFI or Ethernet"}),"\n",(0,a.jsxs)(t.p,{children:['When the RatOS image has been written to the SD card, insert the SD card into the Raspberry Pi and turn on the Pi. After a few minutes the raspberry pi will host a hotspot called "RatOS", join this hotspot on your phone or a PC/Laptop with wifi, the password is "raspberry". When connected, open ',(0,a.jsx)(t.a,{href:"http://RatOS.local/configure",children:"http://RatOS.local/configure"})," or ",(0,a.jsx)(t.a,{href:"http://192.168.50.1/configure",children:"http://192.168.50.1/configure"})," and follow the steps presented there to setup wifi and your printers hostname."]}),"\n",(0,a.jsx)(t.p,{children:"Alternatively, if you're using a pi with Ethernet, you can use an ethernet cable instead."}),"\n",(0,a.jsx)(t.h2,{id:"preparing-your-control-board",children:"Preparing your control board"}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsxs)(t.p,{children:["It is heavily recommended that you flash your board and make sure it is detected in the configurator ",(0,a.jsx)(t.strong,{children:"before"})," you plug in your stepper drivers and start connecting your wiring."]}),(0,a.jsx)(t.p,{children:"It may be required for you to use an SD Card to initially flash your board. If this is required, then be sure to use a good quality SD card that is no more than 32GB in size. Additionally, it should be formatted with either FAT16 (sometimes just called FAT), or FAT32 with a cluster size of 8kb or 4kb"})]}),"\n",(0,a.jsxs)(t.p,{children:["After completing the wifi setup wizard, wait a couple of minutes, then open ",(0,a.jsx)(t.a,{href:"http://RatOS.local/configure?step=1",children:"http://RatOS.local/configure?step=1"})," in your browser (or whatever hostname you chose during setup). Complete the wizard to flash your control board and optionally a toolboard. When you've done that successfully, the configurator will lead you to Mainsail, which we'll now use to update RatOS and related packages to the latest version."]}),"\n",(0,a.jsx)(t.admonition,{title:"Troubleshooting",type:"info",children:(0,a.jsxs)(t.p,{children:["If you cannot connect to ",(0,a.jsx)(t.a,{href:"http://RatOS.local/",children:"http://RatOS.local/"})," but the RatOS hotspot doesn't show up, try looking up the IP of your pi on your routers admin interface and use that instead. Eg: ",(0,a.jsx)(t.a,{href:"http://192.168.0.123/",children:"http://192.168.0.123/"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"mainsail",children:"Mainsail"}),"\n",(0,a.jsxs)(t.p,{children:["Mainsail is the control interface for your printer. Mainsail is a web application that talks to Klipper through Moonraker (the Klipper API). Mainsail is what you'll be using to start prints, monitor progress, configure klipper and much more. Mainsail is what you see when you open ",(0,a.jsx)(t.a,{href:"http://RatOS.local/",children:"http://RatOS.local/"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Mainsail",src:i(37670).Z+"",width:"1510",height:"1191"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["To learn more about mainsail, ",(0,a.jsx)(t.a,{href:"https://docs.mainsail.xyz/",children:"read the mainsail documentation"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"updating",children:"Updating"}),"\n",(0,a.jsxs)(t.p,{children:["Go to the ",(0,a.jsx)(t.code,{children:"MACHINE"})," tab in Mainsail. You'll see a sheet with the title \"Update Manager\", if you're familiar with Fluidd or Mainsail, you'll notice a new entry called ",(0,a.jsx)(t.code,{children:"RatOS"}),". This ",(0,a.jsx)(t.code,{children:"RatOS"})," package will update all the config files in the config folder, improvements, support for hotends, macros, extruders, new boards etc, will be coming to your printer this way in the future. ",(0,a.jsx)(t.strong,{children:"Be sure to keep this up to date, especially if you update klipper or moonraker"}),". Always update the RatOS package first, before updating anything else. This is important because Klipper and Moonraker sometimes make changes that require manual system or configuration changes which RatOS will try to do for you."]}),"\n",(0,a.jsxs)(t.p,{children:["Go ahead an update all the packages to their latest versions, start with RatOS, then click ",(0,a.jsx)(t.code,{children:"Update All Components"}),". When you update klipper, RatOS will attempt to flash your board automatically. If this fails (which should be rare), you can always go back to the ",(0,a.jsx)(t.a,{href:"http://RatOS.local/configure?step=1",children:"http://RatOS.local/configure?step=1"})," to flash your board if necessary. If you get a klipper error mentioning mcu and host versions, this means you need to flash your board."]}),"\n",(0,a.jsxs)(t.p,{children:["In general, it's advisable to keep all your packages up to date, but if you're happy with how your printer works and there's nothing interesting for you in the updates, it's perfectly fine to delay updating until a later time. Klipper is a continually evolving project, that also means that bugs ",(0,a.jsx)(t.em,{children:"do happen"}),". In the rare circumstance that bugs are introduced, they're usually fixed very quickly, but if you have a bunch of important prints coming up, maybe delay the updates untill afterwards."]}),"\n",(0,a.jsx)(t.p,{children:"Now it's time to start wiring. Find your board under \"Supported Boards\" in the docs menu to the left, and return to the next step below when you've completed your wiring."}),"\n",(0,a.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(t.p,{children:["With the board flashed and everything wired up, you can now proceed to the ",(0,a.jsx)(t.a,{href:"/docs/configuration",children:"configuration guide"}),"."]})]})}function c(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},37670:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/mainsail-922eed60016d364ccb150fa05701430e.jpg"},23663:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return r}});var n=i(75271);let a={},o=n.createContext(a);function r(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);