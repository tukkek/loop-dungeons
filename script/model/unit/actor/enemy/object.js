import*as e from"../actor.js";import*as i from"../../../../view/sidebar.js";const r="enemies/living_armor/living_teacan1_idle.gif",s="enemies/living_armor/living_sword1_idle.gif",t="enemies/living_armor/living_armor1_idle_down.gif";class a extends e.Actor{constructor(e,r,i){super(e,r,i)}validate(e,r){return r==this&&this.roll(this.speed)}hit(e,r){return!this.validate(e,r)||(i.warn(`The ${this.name.toLowerCase()} swoops away from harm!`),!1)}}class o extends a{constructor(){super("Living teapot",r,1)}}class n extends a{constructor(){super("Living sword",s,3)}}class l extends a{constructor(){super("Living armor",t,4),this.height=48}hit(e,r){return this.validate(e,r)&&(i.warn("The flames burn you!"),e.damage()),!0}}export{o as Teapot,n as Sword,l as Armor};