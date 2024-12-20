"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["2221"],{19598:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>h,contentTitle:()=>l});var r=JSON.parse('{"id":"installation","title":"Installing RatOS","description":"This is preliminary documentation for the upcoming v2.1.0 release. The work is still ongoing and the documentation is not yet complete.","source":"@site/docs/installation.mdx","sourceDirName":".","slug":"/installation","permalink":"/docs/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/docs/installation.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"installation","title":"Installing RatOS","sidebar_label":"Installation","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Introduction","permalink":"/docs/introduction"},"next":{"title":"Initial Configuration","permalink":"/docs/configuration"}}'),a=n("52676"),o=n("69532"),i=n("83218");let s={id:"installation",title:"Installing RatOS",sidebar_label:"Installation",sidebar_position:1},l="Installation",d={},h=[{value:"Raspberry Pi Installation",id:"raspberry-pi-installation",level:2},{value:"WIFI or Ethernet",id:"wifi-or-ethernet",level:3},{value:"Preparing your control board",id:"preparing-your-control-board",level:2},{value:"Updating RatOS",id:"updating-ratos",level:2},{value:"Setting up your printer",id:"setting-up-your-printer",level:2},{value:"Mainsail",id:"mainsail",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"installation",children:"Installation"})}),"\n",(0,a.jsx)(t.admonition,{title:"2.1 documentation is incomplete.",type:"warning",children:(0,a.jsx)(t.p,{children:"This is preliminary documentation for the upcoming v2.1.0 release. The work is still ongoing and the documentation is not yet complete."})}),"\n",(0,a.jsx)(t.h2,{id:"raspberry-pi-installation",children:"Raspberry Pi Installation"}),"\n",(0,a.jsx)(t.admonition,{title:"USE PROPER AUTHENTIC SD CARDS",type:"warning",children:(0,a.jsx)(t.p,{children:"There are multiple examples of bad quality sd cards causing boot and corruption issues. It's highly recommended to get SanDisk Ultra U1 A1 cards (16GB or larger) from an official source to ensure long life and reliable operation of your Raspberry Pi."})}),"\n",(0,a.jsxs)(t.p,{children:["Download the newest release (download the RatOS-*.img.xz file under the assets dropdown) of ",(0,a.jsx)(t.a,{href:"https://github.com/Rat-Os/RatOS/releases",children:"RatOS on github"}),".\nThen use ",(0,a.jsx)(t.a,{href:"https://www.balena.io/etcher/",children:"Balena Etcher"})," to write that image to the SD card that goes into your raspberry pi (16GB or larger). If balena etcher isn't working for you, you can try another tool such as RUFUS.\nIf you're using the Raspberry Pi Imager, make absolutely sure you've disabled custom/additional settings, or it will break the RatOS hotspot and network configuration."]}),"\n",(0,a.jsx)(t.p,{children:"Note: this will destroy all data on the card!"}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["It is recommended to use the 32-bit (",(0,a.jsx)(t.code,{children:"rpi32"}),") version of the image, 64-bit (",(0,a.jsx)(t.code,{children:"rpi64"}),") caused too high memory usage in some situations and is no longer provided."]})}),"\n",(0,a.jsx)(i.z,{class:"button button--primary",href:"https://github.com/Rat-Os/RatOS/releases",children:"Download RatOS"}),"\n",(0,a.jsx)(t.h3,{id:"wifi-or-ethernet",children:"WIFI or Ethernet"}),"\n",(0,a.jsxs)(t.p,{children:['When the RatOS image has been written to the SD card, insert the SD card into the Raspberry Pi and turn on the Pi. After a few minutes the raspberry pi will host a hotspot called "RatOS", join this hotspot on your phone or a PC/Laptop with wifi, the password is "raspberry". When connected, open ',(0,a.jsx)(t.a,{href:"http://RatOS.local/configure",children:"http://RatOS.local/configure"})," or ",(0,a.jsx)(t.a,{href:"http://192.168.50.1/configure",children:"http://192.168.50.1/configure"})," and follow the steps presented there to setup wifi and your printers hostname."]}),"\n",(0,a.jsx)(t.p,{children:"Alternatively, if you're using a pi with Ethernet, you can use an ethernet cable instead."}),"\n",(0,a.jsx)(t.h2,{id:"preparing-your-control-board",children:"Preparing your control board"}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["It is heavily recommended that you flash your board and make sure it is detected in the configurator ",(0,a.jsx)(t.strong,{children:"before"})," you plug in your stepper drivers and start connecting your wiring."]})}),"\n",(0,a.jsxs)(t.p,{children:["After completing the wifi setup wizard, wait a couple of minutes, then open ",(0,a.jsx)(t.a,{href:"http://RatOS.local/config",children:"http://RatOS.local/config"})," in your browser (or whatever hostname you chose during setup). This will take you to Mainsail, which we'll now use to update RatOS and all related packages to the latest version."]}),"\n",(0,a.jsx)(t.admonition,{title:"Troubleshooting",type:"info",children:(0,a.jsxs)(t.p,{children:["If you cannot connect to ",(0,a.jsx)(t.a,{href:"http://RatOS.local/config",children:"http://RatOS.local/config"})," but the RatOS hotspot doesn't show up, try looking up the IP of your pi on your routers admin interface and use that instead. Eg: ",(0,a.jsx)(t.a,{href:"http://192.168.0.123/config",children:"http://192.168.0.123/config"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"updating-ratos",children:"Updating RatOS"}),"\n",(0,a.jsx)(t.p,{children:'If you followed the link to the mainsail machine page above, you\'ll see a panel with the title "Update Manager", this is where you can update all the packages to their latest versions.'}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Update RatOS packages first.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["If you see both ",(0,a.jsx)(t.code,{children:"ratos"})," and ",(0,a.jsx)(t.code,{children:"ratos-configurator"})," in the list (RatOS prior to V2.1.0-RC4), start by updating ",(0,a.jsx)(t.code,{children:"ratos"})," first, then ",(0,a.jsx)(t.code,{children:"ratos-configurator"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["If you see only ",(0,a.jsx)(t.code,{children:"ratos-configurator"})," (mainsail v2.12 or below and/or RatOS prior to V2.1.0-RC4) or ",(0,a.jsx)(t.code,{children:"RatOS Core: Configuration & Configurator"})," (mainsail v2.13 and RatOS V2.1.0-RC4 and above) in the list, update only this package."]}),"\n",(0,a.jsx)(t.li,{children:'Moonraker should\'ve restarted automatically, but just in case, you can restart it manually by clicking the power icon in the top right corner, then the refresh icon next to "Moonraker" under "Service controls".'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"RatOS pins klipper and moonraker to known good version, and thus you have an additional layer of protection against bugs, as new updates won't be available without being tested by the RatOS team first.\nNothing is perfect however, so if you have a bunch of important prints coming up, it never hurts to delay the updates until afterwards."}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["Refresh the update manager panel, and click ",(0,a.jsx)(t.code,{children:"Update All Components"})," at the bottom of the panel, if there are updates available."]}),"\n"]}),"\n",(0,a.jsx)("div",{className:"text-amber-200 font-medium",children:(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["It is highly recommended to ",(0,a.jsx)("span",{className:"font-bold text-amber-400",children:"always - in all cases - update the RatOS core packages seperately before updating the rest of the software"}),", as RatOS will prepare your system for any upcoming changes in third party software."]})})}),"\n",(0,a.jsx)(t.p,{children:'When klipper is updated, RatOS will attempt to flash your configured boards automatically.\nIf this fails (which should be rare), you can always go back to the configurator, by clicking the "Configurator" link in the mainsail sidemenu, and use the wizard to detect and flash your board again.\nIf you get a klipper error mentioning mcu and host versions, this means the automation failed and you need to flash your board again. There are some boards that cannot be flashed automatically, in this case you will have to flash your board manually.'}),"\n",(0,a.jsx)(t.p,{children:"In general, it's advisable to keep all your packages up to date, but if you're happy with how your printer works and there's nothing interesting for you in the updates, it's perfectly fine to delay updating until a later time."}),"\n",(0,a.jsx)(t.h2,{id:"setting-up-your-printer",children:"Setting up your printer"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Proceed with the setup wizard until you've made it through the control board (and optionally toolboard) step."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:'Now that everything is up to date, click the "Configurator" button in the mainsail sidebar, and proceed with the setup wizard which will guide you through the rest of the setup.'}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:"Wire up your printer after flashing your board(s)."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Once you've made it through the control board (and toolboard) steps, you should wire up your printer according to the wiring diagram for your specific board, found in the sidebar here in the RatOS documentation before proceeding to the next step. You should power everything off before you start wiring."}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Proceed with the hardware configuration wizard.\nRatOS will remember your choices, and you can click the steps in the navigation to the left to hop back and forth between steps."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Double check your choices and confirm your configuration at the last step."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Click "Save Configuration" and your printer should be ready to use!'}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:'You can click the "Exit to mainsail" button at the bottom of the sidebar to go back to Mainsail.'}),"\n",(0,a.jsx)(t.h2,{id:"mainsail",children:"Mainsail"}),"\n",(0,a.jsxs)(t.p,{children:["Mainsail is the control interface for your printer. Mainsail is a web application that talks to Klipper through Moonraker (the Klipper API). Mainsail is what you'll be using to start prints, monitor progress, configure klipper and much more. Mainsail is what you see when you open ",(0,a.jsx)(t.a,{href:"http://RatOS.local/",children:"http://RatOS.local/"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Mainsail",src:n(37670).Z+"",width:"1510",height:"1191"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["To learn more about mainsail, ",(0,a.jsx)(t.a,{href:"https://docs.mainsail.xyz/",children:"read the mainsail documentation"}),"."]})})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},37670:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/mainsail-922eed60016d364ccb150fa05701430e.jpg"},83218:function(e,t,n){n.d(t,{z:function(){return d}});var r=n(52676),a=n(47546),o=n(75271),i=n(48690),s=n(92460);let l=(0,i.j)("inline-flex items-center justify-center border hover:no-underline font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 capitalize relative active:translate-y-px active:scale-[99%] active:outline-none transition-all",{variants:{variant:{danger:(0,a.dV)("text-red-50 hover:text-red-50 bg-red-500/70 hover:bg-red-600 border-transparent focus:ring-offset-2 focus:ring-red-400 dark:focus:ring-offset-zinc-900","shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.05)]","dark:before:-inset-px dark:before:rounded-lg","dark:before:pointer-events-none dark:before:absolute dark:before:shadow-[0px_2px_8px_0px_hsl(var(--red-900)),_0px_1px_0px_0px_hsl(var(--red-400)_/_50%)_inset]"),warning:(0,a.dV)("text-yellow-50 hover:text-yellow-50 bg-yellow-400/70 hover:bg-yellow-600 border-transparent focus:ring-offset-2 focus:ring-yellow-400 dark:focus:ring-offset-zinc-900","shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.05)]","dark:before:-inset-px dark:before:rounded-lg","dark:before:pointer-events-none dark:before:absolute dark:before:shadow-[0px_2px_8px_0px_hsl(var(--yellow-900)),_0px_1px_0px_0px_hsl(var(--yellow-400)_/_50%)_inset]"),info:(0,a.dV)("text-blue-50 hover:text-blue-50 bg-sky-400/70 hover:bg-sky-600 border-transparent focus:ring-offset-2 focus:ring-sky-400 dark:focus:ring-offset-zinc-900","shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.05)]","dark:before:-inset-px dark:before:rounded-lg","dark:before:pointer-events-none dark:before:absolute dark:before:shadow-[0px_2px_8px_0px_hsl(var(--sky-900)),_0px_1px_0px_0px_hsl(var(--sky-400)_/_50%)_inset]"),primary:(0,a.dV)("text-white hover:text-white bg-brand-400/50 hover:bg-brand-700 border-transparent focus:ring-offset-2 focus:ring-brand-400 dark:focus:ring-offset-zinc-900","shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.05)]","dark:before:-inset-px dark:before:rounded-lg","dark:before:pointer-events-none dark:before:absolute dark:before:shadow-[0px_2px_8px_0px_hsl(var(--brand-900)),_0px_1px_0px_0px_hsl(var(--brand-400)_/_50%)_inset]"),success:"text-green-100 hover:text-green-100 bg-green-500 hover:bg-green-600 border-transparent focus:ring-offset-2 focus:ring-brand-400 dark:focus:ring-offset-zinc-900",indeterminate:(0,a.dV)("border-transparent bg-zinc-100 hover:bg-zinc-200 text-black hover:text-black dark:text-zinc-300 dark:bg-zinc-800 dark:transparent dark:hover:bg-zinc-700 dark:hover:text-zinc-100 dark:hover:transparent focus:ring-offset-2 focus:ring-brand-400 dark:focus:ring-offset-zinc-900","shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.05)]","dark:before:-inset-px dark:before:rounded-lg","dark:before:pointer-events-none dark:before:absolute dark:before:shadow-[0px_2px_8px_0px_hsl(var(--zinc-900)),_0px_1px_0px_0px_hsl(var(--zinc-400)_/_20%)_inset]"),outline:"border-zinc-700 shadow-none bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-500/30 hover:border-zinc-500/50 hover:text-zinc-800 dark:hover:text-zinc-200 focus:ring-offset-2 focus:ring-brand-400 dark:focus:ring-offset-zinc-900",plain:"border-transparent shadow-none bg-transparent text-zinc-700 dark:text-zinc-300 hover:underline hover:text-zinc-800 dark:hover:text-zinc-200 focus:ring-offset-2 focus:ring-brand-400 dark:focus:ring-offset-zinc-900"},disabled:{true:"opacity-60 cursor-not-allowed"},size:{sm:"px-2 py-1 text-xs gap-2",lg:"px-6 py-3 text-lg gap-4",default:"px-3 py-2 text-sm gap-2",icon:"h-9 w-9","icon-sm":"h-6 w-6","icon-xs":"h-4 w-4"}},compoundVariants:[{variant:"primary",disabled:!0,class:"hover:bg-brand-400/50"},{variant:"danger",disabled:!0,class:"hover:bg-red-500/70"},{variant:"warning",disabled:!0,class:"hover:bg-yellow-500"},{variant:"indeterminate",disabled:!0,class:"hover:bg-zinc-100 dark:hover:bg-zinc-800"},{variant:"info",disabled:!0,class:"hover:bg-sky-400/70"}],defaultVariants:{variant:"primary",size:"default",disabled:!1}}),d=(0,o.forwardRef)(function(e,t){let{variant:n,disabled:o,size:i,href:d,target:h,onClick:c,title:p,rel:u,className:f,children:x,...g}=e,b=(0,a.m6)(l({variant:n,disabled:o,size:i}),f);return d?(0,r.jsx)(s.Z,{href:d,ref:t,className:b,target:h,onClick:c,title:p,rel:u,children:x}):(0,r.jsx)("button",{ref:t,className:b,onClick:o?void 0:c,title:p,...g,children:x})})},69532:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return i}});var r=n(75271);let a={},o=r.createContext(a);function i(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);