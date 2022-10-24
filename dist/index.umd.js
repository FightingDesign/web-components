(function(t){typeof define=="function"&&define.amd?define(t):t()})(function(){"use strict";const t={default:"#f0f0f0",primary:"#2d5af1",success:"#52b35e",danger:"#ff0200",warning:"#fcc202"};class s extends HTMLElement{constructor(){super();const c=document.getElementById("f-button__template").content,n=this.attachShadow({mode:"open"}),e=document.createElement("button");e.appendChild(c.cloneNode(!0)),e.setAttribute("class","f-button");const o=this.getAttribute("type")||"default",d=o==="default"?"#333":"#fff",i=document.createElement("style");i.textContent=`
      .f-button {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        border: none;
        outline: none;
        user-select: none;
        text-decoration: none;
        height: $middle;
        transition: 0.3s;
        height: 35px;
        line-height: 1;
        cursor: pointer;
        padding: 0 25px;
        background: ${t[o]};
        white-space: nowrap;
        vertical-align: middle;
        border-radius: 3px;
        overflow: hidden;
        color: ${d};
      }
    `,n.appendChild(i),n.appendChild(e)}}customElements.define("f-button",s)});
