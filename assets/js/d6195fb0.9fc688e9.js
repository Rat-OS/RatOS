"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["1838"],{7431:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>r,metadata:()=>i,assets:()=>l,toc:()=>h,contentTitle:()=>s});var i=JSON.parse('{"id":"configuration","title":"Configuring RatOS","description":"RatOS only needs minimal configuration to work, but comes with a lot of optional functionality that you can enable manually.","source":"@site/versioned_docs/version-1.2.x/configuration.md","sourceDirName":".","slug":"/configuration","permalink":"/docs/1.2.x/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/versioned_docs/version-1.2.x/configuration.md","tags":[],"version":"1.2.x","sidebarPosition":2,"frontMatter":{"sidebar_label":"Initial Configuration","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Installation","permalink":"/docs/1.2.x/installation"},"next":{"title":"Slicer Configuration","permalink":"/docs/1.2.x/slicers"}}'),o=n("52676"),a=n("69532");let r={sidebar_label:"Initial Configuration",sidebar_position:2},s="Configuring RatOS",l={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Mainsail",id:"mainsail",level:2},{value:"Initial Configuration",id:"initial-configuration",level:2},{value:"Verify Stepper Directions",id:"verify-stepper-directions",level:2},{value:"Verify Endstops and Z-Probe",id:"verify-endstops-and-z-probe",level:2},{value:"Z-Offset",id:"z-offset",level:2},{value:"Updating",id:"updating",level:2},{value:"Update",id:"update",level:3},{value:"Tuning",id:"tuning",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"configuring-ratos",children:"Configuring RatOS"})}),"\n",(0,o.jsx)(t.p,{children:"RatOS only needs minimal configuration to work, but comes with a lot of optional functionality that you can enable manually."}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["Once you have completed the initial ",(0,o.jsx)(t.a,{href:"installation",children:"setup"})," and opened ",(0,o.jsx)(t.a,{href:"http://RatOS.local/",children:"http://RatOS.local/"})," in your browser, you are almost ready to print. There's a just a few things to go over to make sure the configuration matches your particular setup."]}),"\n",(0,o.jsx)(t.h2,{id:"mainsail",children:"Mainsail"}),"\n",(0,o.jsxs)(t.p,{children:["Mainsail is the control interface for your printer. Mainsail is a web application that talks to Klipper through Moonraker (the Klipper API). Mainsail is what you'll be using to start prints, monitor progress, configure klipper and much more. Mainsail is what you see when you open ",(0,o.jsx)(t.a,{href:"http://RatOS.local/",children:"http://RatOS.local/"}),";"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Mainsail",src:n(37670).Z+"",width:"1510",height:"1191"})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["To learn more about mainsail, ",(0,o.jsx)(t.a,{href:"https://docs.mainsail.xyz/",children:"read the mainsail documentation"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"initial-configuration",children:"Initial Configuration"}),"\n",(0,o.jsx)(t.p,{children:"On the dashboard of Mainsail you'll see 3 macros in the Macros section."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Initial Config Macros",src:n(59569).Z+"",width:"420",height:"210"})}),"\n",(0,o.jsx)(t.p,{children:"Click on the button that corresponds to your printer to install the configuration."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you accidentally clicked the wrong button you can install another printer config by copying the contents of the template found in ",(0,o.jsx)(t.code,{children:"config/templates/"})," and pasting it into printer.cfg."]})}),"\n",(0,o.jsxs)(t.p,{children:["Now navigate to the ",(0,o.jsx)(t.code,{children:"Machine"})," page in Mainsail (the webinterface you just opened in your browser), there's a list of files, among them is ",(0,o.jsx)(t.code,{children:"printer.cfg"}),'. Right click it and choose "Edit". This is where your klipper configuration lives. As you can see, it\'s prepopulated with all you need to get your printer up and running quick and easy. ',(0,o.jsx)(t.strong,{children:"Follow the instructions in the file to make sure the configuration matches your setup."})]}),"\n",(0,o.jsx)(t.h2,{id:"verify-stepper-directions",children:"Verify Stepper Directions"}),"\n",(0,o.jsxs)(t.p,{children:["!> Do NOT use RatOS with other than stock steppers. If you are using different steppers please make sure to check their rating, and configure their currents accordingly (",(0,o.jsx)(t.a,{href:"configuration/includes-and-overrides",children:"see Includes & Overrides"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:["Make sure your steppers are running in the correct direction. To do this, center all your axes by moving the carriage and bed manually, then type ",(0,o.jsx)(t.code,{children:"SET_CENTER_KINEMATIC_POSITION"})," in the console. You can now use the Mainsail controls to move the axes. Check that your bed moves down when Z is ",(0,o.jsx)(t.strong,{children:"increased"}),". By default, the Z controls in the Mainsail interface will increase Z when you click the up arrow. This will lower the bed on a CoreXY machine with a moving bed such as the V-Core 3, and raise the X gantry on a bedslinger such as the V-Minion or V-Cast. If your bed does not move down (or your x gantry doesn't raise) when you click the up arrow, change the direction of your Z steppers in printer.cfg. There's instructions on how to do that at the top of printer.cfg."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:['If you want to invert the Z behavior in the Mainsail interface (ie. making the bed move down when you click the down arrow), click the cogs (settings) in the upper right part of the interface, then "control", and then enable "Invert Z Control". This will ',(0,o.jsx)(t.strong,{children:"NOT"})," change your stepper directions, it will only change what gcode the buttons execute."]})}),"\n",(0,o.jsx)(t.h2,{id:"verify-endstops-and-z-probe",children:"Verify Endstops and Z-Probe"}),"\n",(0,o.jsx)(t.p,{children:"Navigate to the Machine tab. In here you can see your endstop state. Refresh the endstop state and verify that all endstops are open, and that the state changes to triggered when you manually trigger the endstops or z-probe and refresh the endstop state."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["To test, debug and/or verify a BLTouch, refer to the ",(0,o.jsx)(t.a,{href:"https://www.klipper3d.org/BLTouch.html",children:"BLTouch klipper documentation"})]})}),"\n",(0,o.jsx)(t.h2,{id:"z-offset",children:"Z-Offset"}),"\n",(0,o.jsxs)(t.p,{children:['An easy way to do probe z-offset calibration is to home the printer, then put a piece of paper underneath the nozzle. Now babystep Z through the Mainsail interface (or by issuing G0 commands through the console) until the nozzle touches the paper and there\'s a bit of resistance when you pull on it. Then write "GET_POSITION" in the console and find the line that says ',(0,o.jsx)(t.code,{children:"// kinematic: ..."})," And use the Z coordinate from that line, multiplied by -1. So if it says ",(0,o.jsx)(t.code,{children:"// kinematic: X:0.000000 Y:0.000000 Z:-0.400000"})," you need to add 0.4 to your probe's z_offset in printer.cfg."]}),"\n",(0,o.jsxs)(t.p,{children:["Alternatively you can use the ",(0,o.jsx)(t.code,{children:"PROBE_CALIBRATE"})," command, read more in the ",(0,o.jsx)(t.a,{href:"https://www.klipper3d.org/Probe_Calibrate.html#calibrating-probe-z-offset",children:"klipper probe calibration documentation"})]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"The z-offset is the distance in Z between your probe's trigger point and your nozzle in gcode space. This is typically within 0-4mm, if you get a larger value or a negative value, something is wrong, and you should investigate further."})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:'in Mainsail 2.1 you can enable the Z-Offset panel outside of printing in your interface settings, and it now has a "Save" button, which means you can use those buttons to babystep until the nozzle touches the paper and just hit "Save" and you\'re done.'})}),"\n",(0,o.jsx)(t.h2,{id:"updating",children:"Updating"}),"\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.code,{children:"MACHINE"})," tab in Mainsail, you'll see a sheet with the title \"Update Manager\", if you're familiar with Fluidd or Mainsail, you'll notice a new entry called ",(0,o.jsx)(t.code,{children:"RatOS"}),". This ",(0,o.jsx)(t.code,{children:"RatOS"})," package will update all the config files in the config folder, improvements, support for hotends, macros, extruders, new boards etc, will be coming to your printer this way in the future. ",(0,o.jsx)(t.strong,{children:"Be sure to keep this up to date, especially if you update klipper"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["In general, it's advisable to keep all your packages up to date, but if you're happy with how your printer works and there's nothing interesting to you in the updates, it's OK to delay updating until a later time. Klipper is a rapdily evolving project, that also means that bugs ",(0,o.jsx)(t.em,{children:"do happen"}),", they're usually fixed very quickly, but if you have a bunch of important prints coming up, maybe delay the updates till afterwards."]}),"\n",(0,o.jsx)(t.h3,{id:"update",children:"Update"}),"\n",(0,o.jsx)(t.p,{children:"Now we've got that out of the way, please go ahead and update everything to the latest version."}),"\n",(0,o.jsx)(t.h2,{id:"tuning",children:"Tuning"}),"\n",(0,o.jsxs)(t.p,{children:["When you've verified that everything works, and you have your ",(0,o.jsx)(t.a,{href:"slicers",children:"slicer configured"})," to use the ",(0,o.jsx)(t.code,{children:"START_PRINT"})," and ",(0,o.jsx)(t.code,{children:"END_PRINT"})," macros, you can now start tuning. Refer to the klipper documentation for ",(0,o.jsx)(t.a,{href:"https://www.klipper3d.org/Config_checks.html#calibrate-pid-settings",children:"PID Tuning"}),", ",(0,o.jsx)(t.a,{href:"https://www.klipper3d.org/Pressure_Advance.html",children:"Pressure Advance tuning"}),", ",(0,o.jsx)(t.a,{href:"https://www.klipper3d.org/Resonance_Compensation.html",children:"manual Input Shaper calibration"})," or ",(0,o.jsx)(t.a,{href:"https://www.klipper3d.org/Measuring_Resonances.html",children:"automatic Input Shaper calibration via an ADXL345"}),", and ",(0,o.jsx)(t.a,{href:"https://www.klipper3d.org/Skew_Correction.html",children:"Skew Correction"})," respectively."]}),"\n",(0,o.jsxs)(t.admonition,{title:"Using an accelerometer (ADXL345)",type:"info",children:[(0,o.jsx)(t.p,{children:"See the wiring diagram for you board on how to connect your ADXL345, RatOS primarily uses an SPI connection on the MCU itself instead of the RPi, for ease of use. Some printers may require more than one ADXL345, and in that case a config for the ADXL345 connected to the Raspberry Pi is also available."}),(0,o.jsx)(t.p,{children:"If you want to use an ADXL345 for automatic input shaper calibration, all the software you need is already preinstalled on the pi, you just need to wire and map the pins for your ADXL345, and you're good to go."}),(0,o.jsx)(t.p,{children:"To enable resonance testing, uncomment the adxl include section at the top of printer.cfg. To verify that your ADXL is properly connected, write MEASURE_AXES_NOISE in the Fluidd console, if the values are below 100, you're good to go. To calibrate input shaper, write SHAPER_CALIBRATE in the console."}),(0,o.jsx)(t.p,{children:"For more information on automatic input shaper calibration, check out the official klipper documentation."})]})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},59569:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/initial-macros-bbe0a754a9a9550fa29a1d6c23151c5d.png"},37670:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/mainsail-922eed60016d364ccb150fa05701430e.jpg"},69532:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return r}});var i=n(75271);let o={},a=i.createContext(o);function r(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);