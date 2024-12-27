"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["4275"],{21317:function(e,r,n){n.r(r),n.d(r,{default:()=>d,frontMatter:()=>o,metadata:()=>t,assets:()=>h,toc:()=>s,contentTitle:()=>c});var t=JSON.parse('{"id":"configuration/chamber_heater","title":"Chamber Heater Control","description":"RatOS includes built-in chamber heater control that supports three different scenarios:","source":"@site/docs/configuration/chamber_heater.md","sourceDirName":"configuration","slug":"/configuration/chamber_heater","permalink":"/docs/configuration/chamber_heater","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/docs/configuration/chamber_heater.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Chamber Filter Control","permalink":"/docs/configuration/chamber_filter"},"next":{"title":"Filament Sensors","permalink":"/docs/configuration/filament_sensors"}}'),a=n("52676"),i=n("23663");let o={},c="Chamber Heater Control",h={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Bed Heater",id:"1-bed-heater",level:2},{value:"Configuration",id:"configuration",level:3},{value:"2. Internal (Klipper/RatOS Controlled) Heater",id:"2-internal-klipperratos-controlled-heater",level:2},{value:"Configuration",id:"configuration-1",level:3},{value:"3. External (stand-alone controller) heater",id:"3-external-stand-alone-controller-heater",level:2},{value:"Configuration",id:"configuration-2",level:3},{value:"Extra Chamber Heater Fan",id:"extra-chamber-heater-fan",level:2},{value:"User Macro Hooks",id:"user-macro-hooks",level:2},{value:"RatOS Configuration",id:"ratos-configuration",level:3}];function l(e){let r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"chamber-heater-control",children:"Chamber Heater Control"})}),"\n",(0,a.jsx)(r.p,{children:"RatOS includes built-in chamber heater control that supports three different scenarios:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"#1-bed-heater",children:"1. Bed Heater"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"#2-internal-klipperratos-controlled-heater",children:"2. Internal Heater"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"#3-external-stand-alone-controller-heater",children:"3. External Heater"})}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Configure your slicer according to the ",(0,a.jsx)(r.a,{href:"/docs/slicers",children:"official RatOS slicer configuration"})]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"1-bed-heater",children:"1. Bed Heater"}),"\n",(0,a.jsx)(r.p,{children:"By default, RatOS uses the bed heater to heat the chamber. Either the hotend thermistor or a chamber thermistor will be used to monitor the initial chamber temperature."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["If no ",(0,a.jsx)(r.code,{children:"temperature_sensor chamber"})," is defined, the hotend thermistor will be used."]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.em,{children:"Use these exact device names in your configuration:"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"[temperature_sensor chamber]\nsensor_type: ATC Semitec 104GT-2\nsensor_pin: PF4\n"})}),"\n",(0,a.jsx)(r.h2,{id:"2-internal-klipperratos-controlled-heater",children:"2. Internal (Klipper/RatOS Controlled) Heater"}),"\n",(0,a.jsx)(r.p,{children:"Uses a PWM-controlled chamber heater, heater fan, and chamber thermistor."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["If no ",(0,a.jsx)(r.code,{children:"temperature_sensor chamber"})," is defined, the hotend thermistor will be used"]}),"\n",(0,a.jsxs)(r.li,{children:["If ",(0,a.jsx)(r.code,{children:"temperature_sensor chamber"})," is defined, it will be used for automatic temperature control"]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"configuration-1",children:"Configuration"}),"\n",(0,a.jsx)("div",{className:"text-amber-300 font-medium",children:(0,a.jsx)(r.p,{children:(0,a.jsx)(r.em,{children:"Use these exact device names in your configuration:"})})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"[temperature_sensor chamber]\nsensor_type: ATC Semitec 104GT-2\nsensor_pin: PF4\n\n[heater_generic chamber_heater]\ngcode_id: chamber_heater\nheater_pin: PA2\nsmooth_time: 10\nsensor_type: PT1000\nsensor_pin: PF5\ncontrol: pid\npid_kp: 24.750\npid_ki: 2.578\npid_kd: 59.400\npwm_cycle_time: 0.25\nmin_temp: 0\nmax_temp: 200\nmax_power: 1.0\n\n[heater_fan chamber_heater_fan]\npin: PE14\nheater: chamber_heater\nheater_temp: 40\n"})}),"\n",(0,a.jsx)(r.h2,{id:"3-external-stand-alone-controller-heater",children:"3. External (stand-alone controller) heater"}),"\n",(0,a.jsx)(r.p,{children:"A dedicated heater device with or without its own temperature control that can be switched on/off by a relais/output_pin and a chamber thermistor to control the initial chamber temperature."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["if no ",(0,a.jsx)(r.code,{children:"temperature_sensor chamber"})," is defined, the hotend thermistor will be used to wait for the initial chamber temperature."]}),"\n",(0,a.jsxs)(r.li,{children:["a ",(0,a.jsx)(r.code,{children:"temperature_sensor chamber"})," can be used for the automatic chamber temperature control. In this case set ",(0,a.jsx)(r.code,{children:"chamber_heater_control_external_heater"})," to ",(0,a.jsx)(r.code,{children:"True"}),". This will turn the heater on/off when needed."]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"configuration-2",children:"Configuration"}),"\n",(0,a.jsx)("div",{className:"text-amber-300 font-medium",children:(0,a.jsx)(r.p,{children:(0,a.jsx)(r.em,{children:"Use these exact device names in your configuration:"})})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"[temperature_sensor chamber]\nsensor_type: ATC Semitec 104GT-2\nsensor_pin: PF4\n\n[output_pin chamber_heater_pin]\npin: PE14\n"})}),"\n",(0,a.jsx)(r.h2,{id:"extra-chamber-heater-fan",children:"Extra Chamber Heater Fan"}),"\n",(0,a.jsxs)(r.p,{children:["A extra fan can be configured to support the chamber heating process, control its speed with the ",(0,a.jsx)(r.code,{children:"chamber_heater_extra_fan_speed"})," variable."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"[fan_generic chamber_heater_extra_fan]\n"})}),"\n",(0,a.jsx)(r.p,{children:"To support more usecases the chamber heater extra fan control comes with two macro hooks that can be overwritten."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:'[gcode_macro _CHAMBER_HEATER_EXTRA_FAN_ON]\ngcode:\n	# config\n	{% set chamber_heater_extra_fan_speed = printer["gcode_macro RatOS"].chamber_heater_extra_fan_speed|default(0.0)|float %}\n\n	# turn chamber heater extra fan on\n	{% if printer["fan_generic chamber_heater_extra_fan"] is defined %}\n		{% if chamber_heater_extra_fan_speed > 0 %}\n			SET_FAN_SPEED FAN=chamber_heater_extra_fan SPEED={chamber_heater_extra_fan_speed}\n		{% endif %}\n	{% endif %}\n'})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:'[gcode_macro _CHAMBER_HEATER_EXTRA_FAN_OFF]\ngcode:\n	# turn chamber heater extra fan off\n	{% if printer["fan_generic chamber_heater_extra_fan"] is defined %}\n		SET_FAN_SPEED FAN=chamber_heater_extra_fan SPEED=0\n	{% endif %}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"user-macro-hooks",children:"User Macro Hooks"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"[gcode_macro _USER_CHAMBER_HEATER_BEFORE_PREHEATING]\ndescription: Will be executed before chamber preheating, only if heating is needed.\ngcode:\n\n[gcode_macro _USER_CHAMBER_HEATER_AFTER_PREHEATING]\ndescription: Will be executed after chamber preheating, only if heating was needed.\ngcode:\n"})}),"\n",(0,a.jsx)(r.h3,{id:"ratos-configuration",children:"RatOS Configuration"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"[gcode_macro RatOS]\nvariable_chamber_heater_enable: True                      # Enable/disable chamber heater control\nvariable_chamber_heater_bed_temp: 115                     # Bed temperature during chamber preheating (\xb0C)\nvariable_chamber_heater_preheating_temp: 150              # Generic heater temperature for chamber preheating (\xb0C)\nvariable_chamber_heater_heating_temp_offset: 25           # Temperature offset for generic heater while printing (\xb0C)\nvariable_chamber_heater_control_external_heater: False    # Enable automatic control for external heater devices\nvariable_chamber_heater_air_circulation_enable: True      # Use part cooling for air circulation during preheating\nvariable_chamber_heater_air_circulation_fan_speed: 0.35   # Part cooling fan speed for air circulation (0.0-1.0)\nvariable_chamber_heater_air_circulation_y_pos: 0          # Toolhead Y-position for air circulation\nvariable_chamber_heater_air_circulation_z_pos: 100        # Toolhead Z-position for air circulation\nvariable_chamber_heater_extra_fan_speed: 1.0              # Extra chamber heater fan speed (0.0-1.0)\nvariable_chamber_heater_filter_fan_speed: 1.0             # Filter fan speed for air circulation (0.0-1.0)\n"})})]})}function d(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},23663:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return o}});var t=n(75271);let a={},i=t.createContext(a);function o(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);