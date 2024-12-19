"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["8296"],{14044:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"configuration/advanced-stepper-configuration","title":"Advanced Stepper Configuration","description":"RatOS V1.1 introduced modularized stepper and driver configuration, this can be used for more fine grained control of your steppers. In your printer.cfg you might have noticed a section like this:","source":"@site/versioned_docs/version-2.0.x/configuration/advanced-stepper-configuration.md","sourceDirName":"configuration","slug":"/configuration/advanced-stepper-configuration","permalink":"/docs/2.0.x/configuration/advanced-stepper-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/versioned_docs/version-2.0.x/configuration/advanced-stepper-configuration.md","tags":[],"version":"2.0.x","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Includes & Overrides","permalink":"/docs/2.0.x/configuration/includes-and-overrides"},"next":{"title":"Connecting a 4028 fan","permalink":"/docs/2.0.x/guides/4028"}}'),o=t("52676"),i=t("69532");let s={},a="Advanced Stepper Configuration",c={},d=[];function p(e){let n={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"advanced-stepper-configuration",children:"Advanced Stepper Configuration"})}),"\n",(0,o.jsx)(n.p,{children:"RatOS V1.1 introduced modularized stepper and driver configuration, this can be used for more fine grained control of your steppers. In your printer.cfg you might have noticed a section like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-properties",metastring:'title="printer.cfg"',children:"#############################################################################################################\n### STEPPER MOTORS, DRIVERS & SPEED LIMITS\n### Pick the drivers and stepper motors you're using. See the RatOS documentation for custom combinations.\n#############################################################################################################\n[include RatOS/printers/v-core-3/steppers.cfg]\n\n# UNCOOLED TMC 2209 + LDO-42STH48-2504AC\n[include RatOS/printers/v-core-3/speed-limits-basic.cfg]\n[include RatOS/printers/v-core-3/tmc2209.cfg]\n[include RatOS/steppers/ldo/42sth48-2504ac/2209/24v-1.1a-*.cfg]\n\n# COOLED TMC 2209 + LDO-42STH48-2504AC\n# This increases motor torque, positional accuracy and speed limits.\n# don't enable this before your printer is fully configured and you have a fan blowing on your stepper drivers.\n#[include RatOS/printers/v-core-3/speed-limits-performance.cfg]\n#[include RatOS/printers/v-core-3/tmc2209-performance.cfg]\n#[include RatOS/steppers/ldo/42sth48-2504ac/2209/24v-1.6a-*.cfg]\n\n# STEALTH MODE (Enables stealthchop and limits velocity and acceleration)\n# NOTE: You still need to include one of the above stepper motor definitions.\n# NOTE: This will make your printer quiter but less accurate, it's an inherent side effect of stealthchop.\n#[include RatOS/printers/v-core-3/speed-limits-stealth.cfg]\n#[include RatOS/printers/v-core-3/tmc2209-stealth.cfg]\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can comment out this whole section (except for steppers.cfg) to use your own combination of steppers and drivers. For example, let's say we're using an Octopus Pro with 50V 5160's powering the LDO-42STH48-2504AC on X and Y, and 2209's for the Z's. We could do the following in our user overrides section after commenting out the entire stepper motors, drivers and speed limits section:"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"If you're using 5160's remember to configure your driver jumpers for SPI, refer to your boards manual."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-properties",metastring:'title="printer.cfg"',children:"#############################################################################################################\n### USER OVERRIDES\n### Anything custom you want to add, or RatOS configuration you want to override, do it here.\n#############################################################################################################\n# Set speed limits to performance limits.\n# Include driver and stepper configuration for 50V 5160's on X/Y\n[include RatOS/steppers/ldo/42sth48-2504ac/5160/50v-1.768a-x.cfg]\n[include RatOS/steppers/ldo/42sth48-2504ac/5160/50v-1.768a-y.cfg]\n# Include driver and stepper configuration for Z's\n[include RatOS/steppers/ldo/42sth48-2504ac/2209/24v-1.6a-z.cfg]\n[include RatOS/steppers/ldo/42sth48-2504ac/2209/24v-1.6a-z1.cfg]\n[include RatOS/steppers/ldo/42sth48-2504ac/2209/24v-1.6a-z2.cfg]\n"})}),"\n",(0,o.jsx)(n.p,{children:"Notice how we no longer include a speed limit config or a tmc2209 config. We need to do reproduce the function of these configs ourselves in the user overrides section. The tmc2209 profile's job is to define stealthchop and interpolation. Let's add klipper's recommended defaults to our user overrides section:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-properties",metastring:'title="printer.cfg"',children:"[tmc5160 stepper_x]\nstealthchop_threshold: 0\ninterpolate: False\n\n[tmc5160 stepper_y]\nstealthchop_threshold: 0\ninterpolate: False\n\n[tmc2209 extruder]\ninterpolate: False\nstealthchop_threshold: 0\n\n[tmc2209 stepper_z]\ninterpolate: False\nstealthchop_threshold: 0\n\n[tmc2209 stepper_z1]\ninterpolate: False\nstealthchop_threshold: 0\n\n[tmc2209 stepper_z2]\ninterpolate: False\nstealthchop_threshold: 0\n"})}),"\n",(0,o.jsx)(n.p,{children:"The speed-limits profile is used to set move speeds for built in klipper functionality such as bed mesh calibration and z-tilt calibration (if present). It also sets your printer limits. We have 50V stepper motors now, tuned for maximum performance, so let's go a little crazy:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-properties",metastring:'title="printer.cfg"',children:"[bed_mesh]\nspeed: 1000\n\n[z_tilt]\nspeed: 1000\n\n[printer]\nmax_velocity: 1000\nmax_accel: 20000\nmax_accel_to_decel: 10000\nmax_z_velocity: 30\nmax_z_accel: 1000\nsquare_corner_velocity: 5\n"})}),"\n",(0,o.jsx)(n.p,{children:"We have now configured our printer for running 50V drivers on X/Y at blazing fast speeds! To explore what stepper motor, driver, voltage and current combination comes pre-tuned with RatOS, check the config/steppers folder. Enjoy!"})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},69532:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var r=t(75271);let o={},i=r.createContext(o);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);