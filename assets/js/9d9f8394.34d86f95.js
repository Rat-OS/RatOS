"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["5248"],{80618:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>s});var o=JSON.parse('{"id":"troubleshooting","title":"Troubleshooting","description":"My steppers are running backwards!","source":"@site/docs/troubleshooting.md","sourceDirName":".","slug":"/troubleshooting","permalink":"/docs/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/docs/troubleshooting.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Complete List","permalink":"/docs/printers/list"},"next":{"title":"Manual Firmware Compilation","permalink":"/docs/manual-firmware-compilation"}}'),r=t("52676"),i=t("69532");let a={},s="Troubleshooting",c={},l=[{value:"My steppers are running backwards!",id:"my-steppers-are-running-backwards",level:2},{value:"Everytime i update my changes are gone.",id:"everytime-i-update-my-changes-are-gone",level:2},{value:"Klipper says the MCU is unable to connect",id:"klipper-says-the-mcu-is-unable-to-connect",level:2},{value:"I updated klipper and now i get an error!",id:"i-updated-klipper-and-now-i-get-an-error",level:2},{value:"Section &#39;gcode_shell_command generate_shaper_graph_x&#39; (or others) is not a valid config section",id:"section-gcode_shell_command-generate_shaper_graph_x-or-others-is-not-a-valid-config-section",level:2},{value:"Connection to moonraker failed",id:"connection-to-moonraker-failed",level:2},{value:"Get help",id:"get-help",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,r.jsx)(n.h2,{id:"my-steppers-are-running-backwards",children:"My steppers are running backwards!"}),"\n",(0,r.jsxs)(n.p,{children:["Refer to the stepper section at the top of printer.cfg, you can add or remove ",(0,r.jsx)(n.code,{children:"!"})," in front of the dir_pin to reverse the direction of that particular stepper."]}),"\n",(0,r.jsx)(n.h2,{id:"everytime-i-update-my-changes-are-gone",children:"Everytime i update my changes are gone."}),"\n",(0,r.jsxs)(n.p,{children:["You're not supposed to change ",(0,r.jsx)(n.code,{children:"RatOS.cfg"})," or ",(0,r.jsx)(n.em,{children:"any"})," files inside the managed ",(0,r.jsx)(n.code,{children:"RatOS"})," config folder. All your configuration changes should be made in ",(0,r.jsx)(n.code,{children:"printer.cfg"})," or by including custom cfg files, if you need to change settings refer to the ",(0,r.jsx)(n.a,{href:"/docs/configuration/includes-and-overrides",children:"Inlcudes & Overrides Documentation"})," section."]}),"\n",(0,r.jsx)(n.h2,{id:"klipper-says-the-mcu-is-unable-to-connect",children:"Klipper says the MCU is unable to connect"}),"\n",(0,r.jsxs)(n.p,{children:["Double check your USB connection, try another cable (the one that comes with the board usually works), and check that your firmware is flashed correctly using the RatOS configurator wizard at ",(0,r.jsx)(n.a,{href:"http://RatOS.local/configure/wizard",children:"http://RatOS.local/configure/wizard"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"i-updated-klipper-and-now-i-get-an-error",children:"I updated klipper and now i get an error!"}),"\n",(0,r.jsxs)(n.p,{children:["Check that your firmware is flashed correctly using the RatOS configurator wizard at ",(0,r.jsx)(n.a,{href:"http://RatOS.local/configure/wizard",children:"http://RatOS.local/configure/wizard"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If you're still having issues, run the RatOS CLI doctor command to ensure your system is in a working state:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh pi@RatOS.local\nratos doctor\n"})}),"\n",(0,r.jsx)(n.h2,{id:"section-gcode_shell_command-generate_shaper_graph_x-or-others-is-not-a-valid-config-section",children:"Section 'gcode_shell_command generate_shaper_graph_x' (or others) is not a valid config section"}),"\n",(0,r.jsx)(n.p,{children:"This happens if you hard reset klipper through mainsail, your setup can be recovered using the RatOS CLI doctor command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh pi@RatOS.local\nratos doctor\n"})}),"\n",(0,r.jsx)(n.p,{children:"After this command has completed, your system should be back in a working state."}),"\n",(0,r.jsx)(n.h2,{id:"connection-to-moonraker-failed",children:"Connection to moonraker failed"}),"\n",(0,r.jsxs)(n.p,{children:["If you see the mainsail interface but you get an error about the connecting to moonraker, the connection to the pi is fine, but you're using a non standard IPv4 or IPv6 range that is not whitelisted in moonraker (only standard local ip ranges are whitelisted for security reasons). Try using the ip address of your pi (look it up in your routers admin interface) instead of ratos.local, or fix it by adding your IP range in CIDR notation to the ",(0,r.jsx)(n.code,{children:"[authorization]"})," section in ~/klipper_config/moonraker.conf on the pi. You can do that through SSH, by running:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ssh ratos.local\nnano ~/klipper_config/moonraker.conf\nsudo systemctl restart moonraker\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively you can delete the entire ",(0,r.jsx)(n.code,{children:"[authorization]"})," section, which will allow anyone to connect to moonraker (which is a security risk)."]}),"\n",(0,r.jsx)(n.h2,{id:"get-help",children:"Get help"}),"\n",(0,r.jsx)(n.p,{children:"For further support check out the RatOS-support and klipper channels on Discord. Use the invite link below to join."}),"\n",(0,r.jsx)("a",{href:"https://discord.gg/ratrig",class:"button button--primary",children:"Join the Unnofficial RatRig Discord Community"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},69532:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var o=t(75271);let r={},i=o.createContext(r);function a(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);