!function(){var e,t=document.querySelector("body"),d=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");d.addEventListener("click",(function(){e=setInterval((function(){t.style.backgroundColor="#"+Math.floor(16777215*Math.random()).toString(16)}),1e3),d.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(e),d.disabled=!1,n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.a918d449.js.map
