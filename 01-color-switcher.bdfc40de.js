!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");function a(){var t=r();document.body.style.backgroundColor=t}function o(){clearInterval(t),e.disabled=!1}function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}e.addEventListener("click",(function(){o(),a(),t=setInterval(a,1e3),e.disabled=!0})),n.addEventListener("click",o)}();
//# sourceMappingURL=01-color-switcher.bdfc40de.js.map
