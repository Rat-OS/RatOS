"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["3371"],{4447:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"type":"mdx","permalink":"/changelog","source":"@site/src/pages/changelog.mdx","description":"RatOS 2.1","frontMatter":{},"unlisted":false}'),t=i("52676"),a=i("69532");let o={},s="Changelog",l={},d=[{value:"RatOS 2.1",id:"ratos-21",level:2},{value:"Features",id:"features",level:3},{value:"Expanding the configurator - beyond the wizard",id:"expanding-the-configurator---beyond-the-wizard",level:3},{value:"Realtime Analysis Tool (RAT)",id:"realtime-analysis-tool-rat",level:4},{value:"IDEX Support",id:"idex-support",level:3},{value:"Toolshift",id:"toolshift",level:4},{value:"Visually Assisted Offset Calibration (VAOC)",id:"visually-assisted-offset-calibration-vaoc",level:4},{value:"Single Toolhead Hybrid CoreXY support",id:"single-toolhead-hybrid-corexy-support",level:3},{value:"Macros: new built-in features",id:"macros-new-built-in-features",level:3},{value:"Adaptive Meshing and Priming",id:"adaptive-meshing-and-priming",level:3},{value:"New boards",id:"new-boards",level:3},{value:"Minor changes and improvements",id:"minor-changes-and-improvements",level:3},{value:"Backwards compatibility",id:"backwards-compatibility",level:3},{value:"RatOS V2.0",id:"ratos-v20",level:2},{value:"Major new features",id:"major-new-features",level:3},{value:"Minor new features",id:"minor-new-features",level:3},{value:"Minor changes",id:"minor-changes",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"New supported printers",id:"new-supported-printers",level:3},{value:"New supported boards",id:"new-supported-boards",level:3},{value:"New supported toolboards",id:"new-supported-toolboards",level:3},{value:"Bug fixes",id:"bug-fixes-1",level:3},{value:"RatOS V1.2",id:"ratos-v12",level:2},{value:"RatOS V1.1",id:"ratos-v11",level:2},{value:"KlipperScreen",id:"klipperscreen",level:3},{value:"General",id:"general",level:3},{value:"Updating from RatOS V1.0",id:"updating-from-ratos-v10",level:3},{value:"Sensorless homing",id:"sensorless-homing",level:4},{value:"Stepper Motors",id:"stepper-motors",level:4},{value:"New Templates (Optional)",id:"new-templates-optional",level:4},{value:"RatOS V1.0",id:"ratos-v10",level:2},{value:"Updating from V-CoreOS-RC2",id:"updating-from-v-coreos-rc2",level:3},{value:"General",id:"general-1",level:3},{value:"Printers",id:"printers",level:3},{value:"Boards",id:"boards",level:3},{value:"Macros",id:"macros",level:3}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"changelog",children:"Changelog"})}),(0,t.jsx)(n.h2,{id:"ratos-21",children:"RatOS 2.1"}),(0,t.jsxs)(n.p,{children:["RatOS now simplifies the klipper configuration process by automatically generating and updating the ",(0,t.jsx)(n.code,{children:"RatOS.cfg"})," file based on your selections in the configurator. This file becomes the sole inclusion in ",(0,t.jsx)(n.code,{children:"printer.cfg"}),", eliminating the need for managing multiple includes or modifying lines of code. RatOS intelligently recognizes your hardware and adjusts the configuration and macros accordingly."]}),(0,t.jsxs)(n.p,{children:["Should you make any changes to your hardware, RatOS will simply update ",(0,t.jsx)(n.code,{children:"RatOS.cfg"})," and display the changes for your review. This ensures that your have more confidence in tinkering, and can try out new things quickly without worrying about configuration."]}),(0,t.jsx)(n.h3,{id:"features",children:"Features"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Point and click klipper config generation"}),"\n",(0,t.jsxs)(n.li,{children:["The wizard will now ask you about your hardware configuration","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Select from 12 printers and 32 control boards"}),"\n",(0,t.jsx)(n.li,{children:"Configure toolhead hardware (up to 2 toolheads per printer)"}),"\n",(0,t.jsx)(n.li,{children:"Support for multiple instances of 12 supported toolboards."}),"\n",(0,t.jsx)(n.li,{children:"Printer configuration"}),"\n",(0,t.jsxs)(n.li,{children:["Motor / driver configuration","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reconfigurable motor slot allocations, you decide which slot is used for which axis."}),"\n",(0,t.jsx)(n.li,{children:"Supports 24V, 36V, 48V, 56V, and 60V setups"}),"\n",(0,t.jsx)(n.li,{children:"Supports a variety of 2130, 2209, 2240, 2160 and 5160 drivers."}),"\n",(0,t.jsx)(n.li,{children:'Supports a variety of stepper motors, including a "generic" stepper using klipper defaults.'}),"\n",(0,t.jsx)(n.li,{children:"Current adjustment"}),"\n",(0,t.jsx)(n.li,{children:"Automatically applied tuning presets for known configurations."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"RatOS.cfg does not use pin aliases, the pins match the board's pinout diagram."}),"\n"]}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-1 [&_img]:!m-0 mb-6",children:[(0,t.jsx)("div",{children:(0,t.jsx)(n.img,{src:"https://github.com/Rat-OS/RatOS/assets/751171/56fca6f5-2125-4d88-a8df-65add61c9054",alt:"RatOS 2.1 Printer Selection"})}),(0,t.jsx)("div",{children:(0,t.jsx)(n.img,{src:"https://github.com/Rat-OS/RatOS/assets/751171/3bca093d-cc2e-4487-9287-a92da7577367",alt:"RatOS 2.1 Hardware Configuration"})}),(0,t.jsx)("div",{children:(0,t.jsx)(n.img,{src:"https://github.com/Rat-OS/RatOS/assets/751171/9b4d0cf5-f5e3-45e6-ba1f-04ea4cef599b",alt:"RatOS 2.1 Board Selection"})}),(0,t.jsx)("div",{children:(0,t.jsx)(n.img,{src:"https://github.com/Rat-OS/RatOS/assets/751171/bccc03ca-1f9c-461d-a9d0-e3f8f3b2a523",alt:"RatOS 2.1 Advanced Stepper Configuration"})})]}),(0,t.jsx)(n.h3,{id:"expanding-the-configurator---beyond-the-wizard",children:"Expanding the configurator - beyond the wizard"}),(0,t.jsx)(n.p,{children:"RatOS 2.1 has evolved into a comprehensive application that interfaces with Klipper and Moonraker. It is set to expand its capabilities with various tools aimed at enhancing interactive analysis and calibration. The initial offerings will include VAOC (Visually Assisted Offset Calibration) and RAT (Realtime Analysis Tool), promising to elevate the user experience further."}),(0,t.jsx)(n.h4,{id:"realtime-analysis-tool-rat",children:"Realtime Analysis Tool (RAT)"}),(0,t.jsx)(n.p,{children:"Power spectral density graphs, live, real-time, in your browser!"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/Rat-OS/RatOS/assets/751171/d8703630-98d3-443b-9f76-39de97c2a037",alt:"ratos-minion local_configure_wizard_step=1(1080p) (4)"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://youtu.be/_wU6VtUO7Ks",children:"Create your own macros for analysing different aspects of your printer"}),"."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/Tdz_CtPEFzY",children:"Hunt down sources of mechanical issues using the Oscillator by monitoring the realtime PSD while touching different parts of your motion system."})}),"\n",(0,t.jsx)(n.li,{children:"Works on phones, use it like a Star Trek Tricorder."}),"\n",(0,t.jsxs)(n.li,{children:["Supplies two new g-code commands, ",(0,t.jsx)(n.code,{children:"OSCILLATE"})," and ",(0,t.jsx)(n.code,{children:"GENERATE_RESONANCES"}),"."]}),"\n"]}),(0,t.jsx)(n.h3,{id:"idex-support",children:"IDEX Support"}),(0,t.jsx)(n.p,{children:"Helge Keck's outstanding contributions to RatOS 2.1 have made all RatOS macros fully IDEX compatible, offering numerous advantages compared to other implementations."}),(0,t.jsx)(n.h4,{id:"toolshift",children:"Toolshift"}),(0,t.jsx)(n.p,{children:"RatOS features an integrated gcode postprocessor compatible with PrusaSlicer, OrcaSlicer, and SuperSlicer. It leverages the rapid toolshift macros for synchronous toolhead swapping and advancing to the subsequent print position in just two swift actions. This results in almost instantaneous tool changes, drastically cutting down on the time typically required for purge towers, and may even render them unnecessary. Additionally, Toolshift is customizable to execute a hotend purge during a tool change if the upcoming toolhead has been inactive past a predefined duration."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Intelligent priming / purging"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=TDj1bnmQkBQ",children:"Single toolhead + spool join mode"})}),"\n",(0,t.jsx)(n.li,{children:"Multi color mode"}),"\n",(0,t.jsx)(n.li,{children:"Copy/Mirror mode"}),"\n",(0,t.jsx)(n.li,{children:"Experimental auto centering of print on the build plate for copy and mirror mode"}),"\n",(0,t.jsx)(n.li,{children:"Toolhead remapping"}),"\n",(0,t.jsxs)(n.li,{children:["IDEX aware ",(0,t.jsx)(n.code,{children:"SET_PRESSURE_ADVANCE"})," with toolhead syncing capabilities"]}),"\n",(0,t.jsx)(n.li,{children:"Automatic toolhead deactivation after last use in print."}),"\n",(0,t.jsx)(n.li,{children:"Fan synchronization"}),"\n",(0,t.jsx)(n.li,{children:"Optional automatic toolhead standby"}),"\n",(0,t.jsx)(n.li,{children:"Retraction control"}),"\n",(0,t.jsx)(n.li,{children:"Fully automated z-offset calibration before printing"}),"\n",(0,t.jsx)(n.li,{children:"Live speed and acceleration control while printing"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/Rat-OS/RatOS/assets/751171/e2359e5b-fa0c-4051-bc57-1aba74be2d29",alt:"IDEX Live Configuration Macro"})}),(0,t.jsx)(n.h4,{id:"visually-assisted-offset-calibration-vaoc",children:"Visually Assisted Offset Calibration (VAOC)"}),(0,t.jsxs)(n.p,{children:["RatOS features a Visually Assisted Offset Calibration interface, complete with z offset probe support, making toolhead offset calibration a breeze, blazing fast and extremely precise.\n",(0,t.jsx)(n.img,{src:"https://github.com/Rat-OS/RatOS/assets/751171/17ca17b7-f960-474c-836e-1ed07c93bc09",alt:"VAOC"})]}),(0,t.jsx)(n.h3,{id:"single-toolhead-hybrid-corexy-support",children:"Single Toolhead Hybrid CoreXY support"}),(0,t.jsx)(n.p,{children:"RatOS is equipped with specialized Hybrid CoreXY kinematics, which include the capability to operate two additional Cartesian motors on the Y-axis. This feature significantly enhances performance scaling in CoreXY configurations. By carefully tensioning the belts, users can achieve more than a twofold increase in the recommended shaper accelerations for the Y-axis."}),(0,t.jsx)(n.h3,{id:"macros-new-built-in-features",children:"Macros: new built-in features"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Beacon contact auto calibration"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=bknUX7KBBfg",children:"Automatic hotend/nozzle thermal expansion calibration (Beacon Contact or Z offset probe)"})}),"\n",(0,t.jsx)(n.li,{children:"Primeblob is now significantly faster, takes less space and adapts to nozzle size."}),"\n",(0,t.jsx)(n.li,{children:"Sensorless homing supported for all driver types."}),"\n",(0,t.jsx)(n.li,{children:"Toolhead temperature offsets."}),"\n",(0,t.jsx)(n.li,{children:"LED Status effects"}),"\n",(0,t.jsxs)(n.li,{children:["Filament sensor support (on-toolhead, off-toolhead or both)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Up to 3 sensor in series: on-toolhead switch sensor, on-toolhead motion sensor, off-toolhead bowden switch sensor"}),"\n",(0,t.jsx)(n.li,{children:"Insert, runout and clog detection"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=GludTdr6n-U",children:"Automatic loading / unloading with on-toolhead sensor"})}),"\n",(0,t.jsx)(n.li,{children:"Automatic print resume on insert"}),"\n",(0,t.jsx)(n.li,{children:"Optional purge before unload or after load"}),"\n",(0,t.jsx)(n.li,{children:"Sanity checks before print starts, checks for filament presence"}),"\n",(0,t.jsx)(n.li,{children:"Filament grabbing on insert even if the hotend is cold"}),"\n",(0,t.jsx)(n.li,{children:"Filament status color in Mainsail"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Hotend type and nozzle aware tip forming when unloading"}),"\n",(0,t.jsx)(n.li,{children:"New calibratron macros, PID tuning and pa tower."}),"\n",(0,t.jsx)(n.li,{children:"Tons of user adjustable macro variables for customization and further tuning."}),"\n",(0,t.jsx)(n.li,{children:"Many small usability improvements and sanity checks."}),"\n"]}),(0,t.jsx)(n.h3,{id:"adaptive-meshing-and-priming",children:"Adaptive Meshing and Priming"}),(0,t.jsx)(n.p,{children:"Adaptive meshing and priming is now officially out of beta and enabled by default. Beacon adaptive priming and full IDEX support has been added."}),(0,t.jsx)(n.h3,{id:"new-boards",children:"New boards"}),(0,t.jsx)(n.p,{children:"BTT Kraken\nBTT Manta M8P V2.0\nBTT Manta M5P\nBTT EBB SB2240 STM32\nBTT EBB SB2240 RP2040\nBTT EBB SB2209 STM32\nBTT EBB SB2209 RP2040\nBTT SKR v1.4\nBTT SKR v1.4 Turbo\nFysetc Spider v2.2\nLDO Leviathan v1.2"}),(0,t.jsx)(n.h3,{id:"minor-changes-and-improvements",children:"Minor changes and improvements"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Primeline has been removed."}),"\n",(0,t.jsx)(n.li,{children:"Use ENABLE_DEBUG to log additional information, download all debug information by using the debug zip link in the RatOS Configurator."}),"\n",(0,t.jsx)(n.li,{children:"User hooks are now supplied with the full params of the calling macro"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ratos"})," CLI tool for utility functions, advanced usage and third party integrations. Use it to regenerate configuration, flash connected boards, tail logs, register / unregister / symlink klippy and moonraker extensions and more."]}),"\n"]}),(0,t.jsx)(n.h3,{id:"backwards-compatibility",children:"Backwards compatibility"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"RatOS 2.0 configurations will still work in 2.1 (As for RC2 this is unknown.. will need testing)"}),"\n",(0,t.jsx)(n.li,{children:"Generating a new configuration will require that you reflash your toolboard via the configurator."}),"\n"]}),(0,t.jsx)(n.p,{children:"Huge shutout to @HelgeKeck for his tireless work, and @3dprintpt for all the new boards and wiring diagrams!"}),(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)("div",{className:"w-auto border-t border-zinc-700 m-12"})}),(0,t.jsx)(n.h2,{id:"ratos-v20",children:"RatOS V2.0"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"RatOS v2 is not backwards compatible with RatOS v1, you will have to reflash your Raspberry Pi and start over with a new configuration template. Use your old printer.cfg for reference values."})}),(0,t.jsx)(n.h3,{id:"major-new-features",children:"Major new features"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Now based on bullseye"}),"\n",(0,t.jsx)(n.li,{children:"The RatOS configurator will now help you flash your controlboard and toolboards, greatly simplifying installation."}),"\n",(0,t.jsx)(n.li,{children:"Toolboards are now supported."}),"\n",(0,t.jsx)(n.li,{children:"Stowable probes like euclid and klicky are now support."}),"\n",(0,t.jsx)(n.li,{children:"Unified homing: everything is now handled through a single homing override. Sensorless homing now requires no tinkering with homing macros (you still need to tweak current and sensitivities). Including a stowable probe config automatically enables deploying and stowing. Axes can now use individual homing procedures, such as sensorless on X and endstops on Y."}),"\n",(0,t.jsx)(n.li,{children:"MainsailOS has been merged which brings timelapse and crowsnest."}),"\n",(0,t.jsxs)(n.li,{children:["Preinstalled: ",(0,t.jsx)(n.a,{href:"https://github.com/worksasintended/klipper_linear_movement_analysis",children:"https://github.com/worksasintended/klipper_linear_movement_analysis"})]}),"\n",(0,t.jsx)(n.li,{children:"Klipper now runs Python 3"}),"\n",(0,t.jsx)(n.li,{children:"Experimental BTT CB1 support"}),"\n",(0,t.jsx)(n.li,{children:"RatOS notifications in Mainsail."}),"\n"]}),(0,t.jsx)(n.h3,{id:"minor-new-features",children:"Minor new features"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A bunch of new macro variables to tweak the RatOS macros (see ",(0,t.jsx)(n.a,{href:"http://os.ratrig.com/docs/configuration/macros",children:"http://os.ratrig.com/docs/configuration/macros"}),"), including end park z hop, prime positions, etc etc."]}),"\n",(0,t.jsx)(n.li,{children:"Configurator now maintains klipper and moonraker extension symlinks (will automatically restore in case of a hard reset, can also be triggered automatically through the configurator actions menu at RatOS.local/configure)"}),"\n",(0,t.jsx)(n.li,{children:"Configurator now in charge of flashing all connected boards when klipper is updated."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"START_PRINT"})," can now use the hotend to measure chamber temp. For example to wait for chamber to reach 40 degrees, use ",(0,t.jsx)(n.code,{children:"START_PRINT CHAMBER_TEMP=40"}),". The bed temperature during chamber heating is configurable via the macro variable ",(0,t.jsx)(n.code,{children:"variable_start_print_heat_chamber_bed_temp"}),"."]}),"\n"]}),(0,t.jsx)(n.h3,{id:"minor-changes",children:"Minor changes"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Primeblob has changed sides for stowable probe support."}),"\n",(0,t.jsx)(n.li,{children:"The toolhead now moves along the edge of the buildplate when navigating to the primeline/primeblob start position, and only lowers the nozzle when it has arrived."}),"\n",(0,t.jsx)(n.li,{children:"config repository directory has been renamed to RatOS."}),"\n"]}),(0,t.jsx)(n.h3,{id:"bug-fixes",children:"Bug fixes"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"IPv6 has been disabled (hopefully no more issues with RatOS.local / moonraker not working on IPv6 capable networks)."}),"\n"]}),(0,t.jsx)(n.h3,{id:"new-supported-printers",children:"New supported printers"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Voron V2.4 support (Experimental)"}),"\n",(0,t.jsx)(n.li,{children:"Voron V0.1 Support (Experimental)"}),"\n",(0,t.jsx)(n.li,{children:"Prusa Mini (Experimental)"}),"\n",(0,t.jsx)(n.li,{children:"Prusa MK3S (Experimental)"}),"\n"]}),(0,t.jsx)(n.h3,{id:"new-supported-boards",children:"New supported boards"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"BTT Manta M8P"}),"\n",(0,t.jsx)(n.li,{children:"BTT Manta M4P"}),"\n",(0,t.jsx)(n.li,{children:"BTT Manta E3EZ"}),"\n",(0,t.jsx)(n.li,{children:"BTT SKR 3"}),"\n",(0,t.jsx)(n.li,{children:"BTT SKR 3 EZ"}),"\n",(0,t.jsx)(n.li,{children:"BTT SKR Mini E3 3.0"}),"\n",(0,t.jsx)(n.li,{children:"BTT SKRat 1.0"}),"\n",(0,t.jsx)(n.li,{children:"BTT Octopus Pro H723"}),"\n"]}),(0,t.jsx)(n.h3,{id:"new-supported-toolboards",children:"New supported toolboards"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"BTT EBB42 v1.0"}),"\n",(0,t.jsx)(n.li,{children:"BTT EBB42 v1.1"}),"\n",(0,t.jsx)(n.li,{children:"BTT EBB42 v1.2"}),"\n",(0,t.jsx)(n.li,{children:"BTT EBB36 v1.0"}),"\n",(0,t.jsx)(n.li,{children:"BTT EBB36 v1.1"}),"\n",(0,t.jsx)(n.li,{children:"BTT EBB36 v1.2"}),"\n",(0,t.jsx)(n.li,{children:"Mellow Fly SHT42 v1"}),"\n",(0,t.jsx)(n.li,{children:"Mellow Fly SHT36 v1"}),"\n"]}),(0,t.jsx)(n.h3,{id:"bug-fixes-1",children:"Bug fixes"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"IPv6 has been disabled (no more issues with RatOS.local / moonraker not working on some IPv6 capable networks)."}),"\n",(0,t.jsx)(n.li,{children:"Automatic flashing is now more resilient and will detect and attempt to recover if the board gets stuck in DFU mode."}),"\n",(0,t.jsx)(n.li,{children:"Configurator now correctly restarts on updates."}),"\n",(0,t.jsx)(n.li,{children:"Since the initial flashing is now done via the configurator, the issues with broken firmware should now be eliminated."}),"\n"]}),(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)("div",{className:"w-auto border-t border-zinc-700 m-12"})}),(0,t.jsx)(n.h2,{id:"ratos-v12",children:"RatOS V1.2"}),(0,t.jsx)(n.p,{children:"This release adds a wifi connection configurator and hotspot functionality so users no longer have to edit the wpa-supplicant files, the syntax of which has been challenging for many. The hotspot also enables printing in areas with no wifi or ethernet connectivity."}),(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)("div",{className:"w-auto border-t border-zinc-700 m-12"})}),(0,t.jsx)(n.h2,{id:"ratos-v11",children:"RatOS V1.1"}),(0,t.jsxs)(n.p,{children:["This release mainly revolves around the new stepper/stepper driver setting recommendations from Klipper. ",(0,t.jsx)(n.code,{children:"hold_current"})," has been removed, stealthchop is now entirely disabled by default, interpolation has been disabled and microsteps have been increased to 64 to counteract the additional noise. V-Minion template has now been optimized for the final hardware in the release kit. Keep reading to see the complete list of changes."]}),(0,t.jsx)(n.h3,{id:"klipperscreen",children:"KlipperScreen"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["KlipperScreen now correctly installed as Pi user. This makes KlipperScreen.conf (next to your printer.cfg) work again. ",(0,t.jsx)(n.strong,{children:"This change requires flashing RatOS V1.1 to your Pi."})]}),"\n"]}),(0,t.jsx)(n.h3,{id:"general",children:"General"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Stepper motors, drivers and speed limits have now been made more modular, allowing for easier configuration of, for example, 48V steppers. See ",(0,t.jsx)(n.a,{href:"/docs/1.2.x/configuration/advanced-stepper-configuration",children:"Advanced Stepper Configuration"})," for more information."]}),"\n",(0,t.jsx)(n.li,{children:"Driver / Stepper settings now adopt the new recommended klipper defaults. This also means that your steppers might make a bit more noise than they did before, since the stealthchop_threshold has been set to 0. You can manually set stealthchop_threshold back to 1 if that's unacceptable to you, just be aware that it will reduce the stepper's positional accuracy."}),"\n",(0,t.jsx)(n.li,{children:"Rapido and Dragonfly configs added."}),"\n",(0,t.jsx)(n.li,{children:"LGX Lite config added."}),"\n",(0,t.jsx)(n.li,{children:"Printer templates have been improved for better organization and now includes the new stepper configurations."}),"\n",(0,t.jsx)(n.li,{children:"SKR2 Documentation added"}),"\n",(0,t.jsx)(n.li,{children:"V-Minion printer template optimized for the release of V-Minion full kit."}),"\n"]}),(0,t.jsx)(n.h3,{id:"updating-from-ratos-v10",children:"Updating from RatOS V1.0"}),(0,t.jsx)(n.p,{children:"Generally you don't have to do anything to use RatOS v1.1, unless you use sensorless homing."}),(0,t.jsx)(n.h4,{id:"sensorless-homing",children:"Sensorless homing"}),(0,t.jsx)(n.p,{children:"If you are using sensorless homing, you'll now need to remove the HOLDCURRENT parameters from you SET_TMC_CURRENT commands. This has no effect on functionality, it didn't do anything useful before. However, if you include the new stepper configs you may have to retune your currents and sensitivity settings."}),(0,t.jsx)(n.h4,{id:"stepper-motors",children:"Stepper Motors"}),(0,t.jsxs)(n.p,{children:["On V-Core 3 and V-Core Pro printers using the stock 48mm steppers on all axes add ",(0,t.jsx)(n.code,{children:"[include RatOS/steppers/ldo/42sth48-2504ac/2209/24v-1.6a-*.cfg]"})," (cooled drivers) or ",(0,t.jsx)(n.code,{children:"[include RatOS/steppers/ldo/42sth48-2504ac/2209/24v-1.1a-*.cfg]"})," (uncooled drivers) to your USER OVERRIDES section. You can skip this step if you're migrating your printer.cfg (see below).\nIf you only use the stock steppers on some axes, or want different currents, voltages etc you can include the stepper config for specific steppers like this:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:"[include RatOS/steppers/ldo/42sth48-2504ac/2209/24v-1.6a-x.cfg]\n[include RatOS/steppers/ldo/42sth48-2504ac/2209/24v-1.6a-y.cfg]\n[include RatOS/steppers/ldo/42sth48-2504ac/2209/24v-1.1a-z.cfg]\n[include RatOS/steppers/ldo/42sth48-2504ac/2209/24v-1.1a-z1.cfg]\n[include RatOS/steppers/ldo/42sth48-2504ac/2209/24v-1.1a-z2.cfg]\n"})}),(0,t.jsx)(n.p,{children:"These stepper specific configs have their DRIVER_* settings tuned for the given driver, voltage and amperage. Take a look in the config/steppers folders to see which options are available."}),(0,t.jsx)(n.p,{children:"If you want to go back to the way it was in v1.0 (stealthchop_threshold: 1) simply add this to your user overrides section:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:"[tmc2209 stepper_x]\nstealthchop_threshold: 1\ninterpolate: True\n\n[tmc2209 stepper_y]\nstealthchop_threshold: 1\ninterpolate: True\n\n[tmc2209 extruder]\ninterpolate: True\nstealthchop_threshold: 1\n\n[tmc2209 stepper_z]\ninterpolate: True\nstealthchop_threshold: 1\n\n[tmc2209 stepper_z1]\ninterpolate: True\nstealthchop_threshold: 1\n\n[tmc2209 stepper_z2]\ninterpolate: True\nstealthchop_threshold: 1\n"})}),(0,t.jsx)(n.p,{children:"Be aware that this comes with disadvantage of less precise motion, and it will not work at all with Fysetc and Mellow drivers."}),(0,t.jsx)(n.h4,{id:"new-templates-optional",children:"New Templates (Optional)"}),(0,t.jsxs)(n.p,{children:["RatOS v1.1 comes with new improved and reorganized templates. If you want the new templates but don't want to reflash your Pi, you can migrate manually. To do so, start by making a backup of your printer.cfg (download it, and put it somewhere safe), then replace printer.cfg with the contents of config/templates/[your-printer]-printer.template.cfg. Go through your new printer.cfg and use your old config as a reference for the values you need. You can copy / paste the klipper config block at the bottom to your new printer.cfg to retain all the settings you've saved via ",(0,t.jsx)(n.code,{children:"SAVE_CONFIG"}),"."]}),(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)("div",{className:"w-auto border-t border-zinc-700 m-12"})}),(0,t.jsx)(n.h2,{id:"ratos-v10",children:"RatOS V1.0"}),(0,t.jsx)(n.h3,{id:"updating-from-v-coreos-rc2",children:"Updating from V-CoreOS-RC2"}),(0,t.jsxs)(n.p,{children:["Updating to RatOS v1.0 requires you to flash the SD Card in your Raspberry Pi, as well as your control board following the usual steps (has to be done manually via SD card transfer) found in the ",(0,t.jsx)(n.a,{href:"docs/installation",children:"Installation Section"}),". That also means that any changes you've made to your Raspberry Pi setup will be lost unless you make a backup first. If you want to be absolutely sure you don't loose something, you can use a new SD card for RatOS v1.0. These are common things you'll probably want to backup:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"printer.cfg (you can download this from Fluidd)"}),"\n",(0,t.jsx)(n.li,{children:".moonraker_database/* (located in /home/pi/.moonraker_database on your Raspberry Pi. Download data.mdb and lock.mdb with SCP/WinSCP then upload them to that same location after installation of RatOS v1.0)"}),"\n",(0,t.jsx)(n.li,{children:"Any custom setup you've done, that isn't replaced with native RatOS functionality."}),"\n"]}),(0,t.jsx)(n.p,{children:"If you're reuploading your printer.cfg from V-CoreOS-RC2 you can (optionally) add this to the bottom of printer.cfg (right above the ### USER OVERRIDES section):"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:'### MACRO CONFIGURATION\n[gcode_macro RatOS]\n# Use relative extrusion mode\n# Set to False to use absolute extrusion mode\nvariable_relative_extrusion: True\n# Wait for extruder to reach 150 so an inductive probe (if present) is at a predictable temp.\n# Also allows the bed heat to spread a little, and softens any plastic that might be stuck to the nozzle.\n# Set to False to disable\nvariable_preheat_extruder: True\n# Calibrate the bed mesh in the START_PRINT macro.\n# Set to false to skip BED_MESH_CALIBRATE, it will still load the BED_MESH\n# with the name "ratos", be sure to save your bed_mesh profile with that name.\n# or override the _START_PRINT_BED_MESH macro to implement your own mesh handling logic.\nvariable_calibrate_bed_mesh: True\n# Print a prime line at the end of the START_PRINT macro\n# set to False to disable nozzle_priming.\nvariable_nozzle_priming: "primeline"\n# Park in the back when waiting for the extruder to heat up\n# set to "front" to park in the front, or "center" to park in the center.\nvariable_start_print_park_in: "back"\n# Height to park it when waiting for extruder to heat.\nvariable_start_print_park_z_height: 50\n# Skew profile to load before starting the print\n# uncomment this to use your calibrated skew correction profile.\n#variable_skew_profile: "my_skew_profile"\n# Park in the back after the print has ended or was cancelled.\n# set to "front" to park in the front, or "center" to park in the center.\nvariable_end_print_park_in: "back"\n# Park in the back when the print is paused.\n# set to "front" to park in the front, or "center" to park in the center.\nvariable_pause_print_park_in: "back"\n# Set the speed for travel moves in RatOS Macros in mm/s.\nvariable_macro_travel_speed: 150\n'})}),(0,t.jsxs)(n.p,{children:["If the section is not present in your printer.cfg the default values will be used. See ",(0,t.jsx)(n.a,{href:"/docs/configuration/macros",children:"Macro Configuration"})," for information on how to use the variables."]}),(0,t.jsx)(n.h3,{id:"general-1",children:"General"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Since the future of Fluidd is uncertain, RatOS has migrated to Mainsail."}),"\n",(0,t.jsx)(n.li,{children:"KlipperScreen now comes preinstalled."}),"\n",(0,t.jsx)(n.li,{children:"Picking your printer is now done via Macros on first startup."}),"\n"]}),(0,t.jsx)(n.h3,{id:"printers",children:"Printers"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Add V-Core Pro 1.3 support"}),"\n"]}),(0,t.jsx)(n.h3,{id:"boards",children:"Boards"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Firmware compilation has been automated! Firmware compilation and flashing is now attempted when the klipper repository is updated."}),"\n",(0,t.jsx)(n.li,{children:"Fysetc Spider v1.1 support added"}),"\n",(0,t.jsx)(n.li,{children:"SKR 2 /w STM32F429 support added"}),"\n",(0,t.jsx)(n.li,{children:"Udev symlinks are now automatically updated when the ratos config is updated. That means new boards are mapped automatically."}),"\n",(0,t.jsx)(n.li,{children:"RPi MCU added (automatically updated with klipper)"}),"\n",(0,t.jsx)(n.li,{children:"make-and-flash-mcu.sh now copies the firmware binary into a firmware_binaries folder browsable in mainsail for manual flashing via SD Card if needed."}),"\n"]}),(0,t.jsx)(n.h3,{id:"macros",children:"Macros"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"gcode_shell_command.py has been added."}),"\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.code,{children:"INSTALL_VCORE_THREE_CONFIG"}),", ",(0,t.jsx)(n.code,{children:"INSTALL_VCORE_PRO_CONFIG"}),", ",(0,t.jsx)(n.code,{children:"INSTALL_VMINION_CONFIG"})," macro's for initial setup."]}),"\n",(0,t.jsx)(n.li,{children:"Added COMPILE_BINARIES macro to compile binaries for all supported boards in case the user got himself into a bad situation and needs the newest firmware."}),"\n",(0,t.jsxs)(n.li,{children:["Added GENERATE_SHAPER_GRAPHS which runs resonance test and generates graphs which are placed in the ",(0,t.jsx)(n.code,{children:"input_shaper"})," folder."]}),"\n",(0,t.jsxs)(n.li,{children:["Macro's now have configurable behavior, the following variables are available: ",(0,t.jsx)(n.code,{children:"relative_extrusion"}),", ",(0,t.jsx)(n.code,{children:"preheat_extruder"}),", ",(0,t.jsx)(n.code,{children:"calibrate_bed_mesh"}),", ",(0,t.jsx)(n.code,{children:"nozzle_priming"}),", ",(0,t.jsx)(n.code,{children:"start_print_park_in"}),", ",(0,t.jsx)(n.code,{children:"start_print_park_z_height"}),", ",(0,t.jsx)(n.code,{children:"end_print_park_in"}),", ",(0,t.jsx)(n.code,{children:"pause_print_park_in"})," and ",(0,t.jsx)(n.code,{children:"macro_travel_speed"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"START_PRINT"})," now has 4 hooks: ",(0,t.jsx)(n.code,{children:"_START_PRINT_AFTER_HEATING_BED"}),", ",(0,t.jsx)(n.code,{children:"_START_PRINT_BED_MESH"}),", ",(0,t.jsx)(n.code,{children:"_START_PRINT_PARK"})," and ",(0,t.jsx)(n.code,{children:"_START_PRINT_AFTER_HEATING_EXTRUDER"}),". You can override these in your printer.cfg to further customize the way your ",(0,t.jsx)(n.code,{children:"START_PRINT"})," macro behaves."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"END_PRINT"})," now has 2 hooks: ",(0,t.jsx)(n.code,{children:"_END_PRINT_AFTER_HEATERS_OFF"})," and ",(0,t.jsx)(n.code,{children:"_END_PRINT_PARK"}),". You can override these in your printer.cfg to further customize the way your END_PRINT macro behaves."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"END_PRINT"})," and PAUSE now moves to a safe Z distance instead of always moving the same distance which could lead to errors."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"M600"})," is now supported."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},69532:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return o}});var r=i(75271);let t={},a=r.createContext(t);function o(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);