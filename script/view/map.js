import*as s from"../model/point.js";import*as l from"../control/engine.js";import*as e from"./dressing.js";const r=32,t=document.querySelector("template#cell").content.children[0],n=new Map;var i=document.querySelector("#map"),a=Math.floor(983.7/r),f=Math.floor(.8*768/r),c=Array.from(new Array(a),()=>new Array(f));class d{constructor(e,r){this.x=e,this.y=r,this.view=t.cloneNode(!0)}get location(){return new s.Point(this.x,this.y)}draw(){l.floor.wall(this.x,this.y)||(this.view.style["background-image"]='url("assets/stages/purple/Purple_tiles.png")')}get position(){return this.view.getBoundingClientRect()}dress(){this.wall||e.dress(this)}}function m(e){var r,t=n.get(e);t&&(r=c[e.x][e.y].position,t.style.left=32-e.width+r.left+"px",t.style.top=24-e.height+r.top+"px")}function o(r,t){var e,o;new s.Point(r,t).validate(0,0,a,f)&&!l.floor.wall(r,t)&&((e=c[r][t]).draw(),e.dress(),e=l.floor.units.find(e=>e.x==r&&e.y==t))&&((o=document.createElement("img")).src="assets/"+e.image,e.zindex&&(o.style["z-index"]=e.zindex),e==l.hero&&o.classList.add("hero"),n.set(e,o),m(e),i.appendChild(o))}function p(){for(var e of i.querySelectorAll("div.cell"))e.remove();for(var r of i.querySelectorAll("img"))r.remove();i.style["grid-template-columns"]=`repeat(${a},32px)`;for(let r=f-1;0<=r;r--)for(let e=0;e<a;e++){var t=new d(e,r,l.floor);c[e][r]=t,i.appendChild(t.view)}for(var o of n.values())o.remove();n.clear()}function u(e,r){e.hp?(r.src="assets/enemies/Despawn.gif",setTimeout(()=>r.remove(),300)):r.remove()}function h(){for(var e of c)for(let r of e)l.floor.seen.find(e=>e.x==r.x&&e.y==r.y)&&r.draw();var r,t,o=l.floor.units;for(r of n.keys()){var s,i=n.get(r);o.indexOf(r)<0?u(r,i):(s=r.redraw())&&(i.src="assets/"+s)}for(t of o)m(t)}export{i as container,a as width,f as height,o as see,p as setup,h as update};