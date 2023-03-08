import*as t from"../view/map.js";import*as e from"../view/sidebar.js";import*as r from"../view/hotbar.js";import*as s from"../model/unit/actor/hero/hero.js";import*as a from"../model/dungeon/dungeon.js";import*as i from"../model/point.js";import*as n from"./driver.js";import*as m from"../model/unit/actor/hero/kit.js";import*as p from"./audio.js";import*as o from"./keyboard.js";import*as u from"./spawner.js";import*as f from"./mechanic/traversal.js";import*as d from"./mechanic/combat.js";class c{constructor(){this.map=!1,this.power=!1,this.combat=!1,this.audio=!1,this.tick=100}reveal(o){if(this.map)for(let e of i.range(0,0,t.width,t.height))o.seen.find(o=>o.equals(e))||o.seen.push(e)}}var l=!1,h=!1,w=!1,g=!1,j=!1,v=new URL(document.location).searchParams.has("debug")&&new c;function b(o){var e,r;t.setup(),n.reset(),w&&(e=w.units.indexOf(l),w.units.splice(e,1)),(w=o).enter(l),v&&v.reveal(o);for(r of Array.from(o.seen))t.see(r.x,r.y);n.reset()}function y(){e.warn("Welcome to Loop Dungeons!"),e.warn("Press h for help.")}function k(){if(!l){if(l=new s.Hero,m.knight.apply(l),v&&v.power)for(var o of l.gear)o.level=v.power;y(),v&&!v.audio||p.loop(p.gameplay)}b((h=new a.Dungeon).floors[0])}function x(){v&&document.body.classList.add("debug"),t.setup(),f.setup(),p.setup(),u.setup(),k(),e.setup(),n.setup(),r.setup(),o.setup()}function L(o){g=o}function D(o){j=o}function P(){window.alert("Game over!"),l=!1,k()}function q(){l.dead&&P(),t.update(),e.update(),r.update(),d.autofight();for(var o of w.units)o.turn();e.log("")}export{l as hero,h as dungeon,w as floor,g as explore,j as fight,v as debug,b as enter,k as start,x as setup,L as autoexplore,D as autofight,q as turn};