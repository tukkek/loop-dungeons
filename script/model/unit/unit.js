import*as r from"../point.js";import*as t from"../../control/engine.js";class i{constructor(t){if(!t)throw Error("404");this.image=t,this.width=32,this.height=32,this.location=new r.Point,this.zindex=5}place(t,r){this.location.x=t,this.location.y=r}get x(){return this.location.x}get y(){return this.location.y}activate(){}remove(){t.floor.remove(this)}redraw(){return!1}fight(t){return!1}value(){return 0}turn(){}}export{i as Unit};