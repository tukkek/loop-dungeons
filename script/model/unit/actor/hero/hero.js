import*as r from"../actor.js";import*as o from"../../../gear/gear.js";import*as t from"../../../../view/sidebar.js";import*as i from"../../../../view/hotbar.js";import*as s from"../../../../control/rpg.js";import*as e from"../../../../control/engine.js";const a="player/hero/Hero_idle_down.gif";class g extends r.Actor{constructor(){super("Hero",a,3),this.zindex+=1,this.hp=5,this.xp=0,this.gear=new Array(o.slots.length),this.bag=[]}equip(r){this.gear[r.slot]=r}value(){return 0}learn(r){r==this||5<=this.xp||s.roll()>r.level||(this.xp+=1,this.gear.find(r=>r.canupgrade)&&t.log("You can upgrade items."))}cool(){for(var r of this.gear)r.cooling&&this.roll(this.magic)&&this.roll(this.magic)&&(r.cooling=!1)}turn(){for(var r of this.gear)r.cooling=!1}dodge(r,o){var t=i.active;return!t||t.dodge(r,o)}hit(r,o){var t=i.active;return!t||t.hit(r,o)}grab(r){return 6<=this.bag.length?(t.log("Your bag is full..."),!1):(this.bag.push(r),!0)}}export{g as Hero};