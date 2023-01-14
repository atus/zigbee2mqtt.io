"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[11512],{643611:(e,t,c)=>{c.r(t),c.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-41a4bf68","path":"/devices/DMS-300ZB.html","title":"ShinaSystem DMS-300ZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"ShinaSystem DMS-300ZB control via MQTT","description":"Integrate your ShinaSystem DMS-300ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"excerpt":"","headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Occupancy_in (binary)","slug":"occupancy-in-binary","link":"#occupancy-in-binary","children":[]},{"level":3,"title":"Occupancy_out (binary)","slug":"occupancy-out-binary","link":"#occupancy-out-binary","children":[]},{"level":3,"title":"Occupancy_or (binary)","slug":"occupancy-or-binary","link":"#occupancy-or-binary","children":[]},{"level":3,"title":"Occupancy_and (binary)","slug":"occupancy-and-binary","link":"#occupancy-and-binary","children":[]},{"level":3,"title":"Occupancy_timeout (numeric)","slug":"occupancy-timeout-numeric","link":"#occupancy-timeout-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1673689222000},"filePathRelative":"devices/DMS-300ZB.md"}')},76153:(e,t,c)=>{c.r(t),c.d(t,{default:()=>m});var o=c(166252);const a=(0,o._)("h1",{id:"shinasystem-dms-300zb",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#shinasystem-dms-300zb","aria-hidden":"true"},"#"),(0,o.Uk)(" ShinaSystem DMS-300ZB")],-1),i=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"DMS-300ZB")],-1),d=(0,o._)("td",null,"Vendor",-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"SiHAS dual motion sensor")],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, voltage, occupancy_in, occupancy_out, occupancy_or, occupancy_and, occupancy_timeout, linkquality")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DMS-300ZB.jpg",alt:"ShinaSystem DMS-300ZB"})])],-1),s=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),h=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),p=(0,o.uE)('<ul><li><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="occupancy-in-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-in-binary" aria-hidden="true">#</a> Occupancy_in (binary)</h3><p>Indicates whether &quot;IN&quot; Sensor of the device detected occupancy. Value can be found in the published state on the <code>occupancy_in</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy_in is ON, if <code>false</code> OFF.</p><h3 id="occupancy-out-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-out-binary" aria-hidden="true">#</a> Occupancy_out (binary)</h3><p>Indicates whether &quot;OUT&quot; Sensor of the device detected occupancy. Value can be found in the published state on the <code>occupancy_out</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy_out is ON, if <code>false</code> OFF.</p><h3 id="occupancy-or-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-or-binary" aria-hidden="true">#</a> Occupancy_or (binary)</h3><p>Indicates whether &quot;IN or OUT&quot; Sensor of the device detected occupancy. Value can be found in the published state on the <code>occupancy_or</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy_or is ON, if <code>false</code> OFF.</p><h3 id="occupancy-and-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-and-binary" aria-hidden="true">#</a> Occupancy_and (binary)</h3><p>Indicates whether &quot;IN and OUT&quot; Sensor of the device detected occupancy. Value can be found in the published state on the <code>occupancy_and</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy_and is ON, if <code>false</code> OFF.</p><h3 id="occupancy-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-timeout-numeric" aria-hidden="true">#</a> Occupancy_timeout (numeric)</h3><p>Value can be found in the published state on the <code>occupancy_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>second</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),y={},m=(0,c(983744).Z)(y,[["render",function(e,t){const c=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[i,(0,o._)("tbody",null,[n,(0,o._)("tr",null,[d,(0,o._)("td",null,[(0,o.Wm)(c,{to:"/supported-devices/#v=ShinaSystem"},{default:(0,o.w5)((()=>[(0,o.Uk)("ShinaSystem")])),_:1})])]),u,l,r])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),s,(0,o._)("p",null,[(0,o.Uk)("This device supports OTA updates, for more information see "),(0,o.Wm)(c,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("OTA updates")])),_:1}),(0,o.Uk)(".")]),h,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(c,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);