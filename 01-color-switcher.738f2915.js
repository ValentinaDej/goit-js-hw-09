!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyEl:document.querySelector("body")},n=null;function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",(function(){t.startBtn.disabled=!0,t.stopBtn.disabled=!1,t.bodyEl.style.backgroundColor=o(),n=setInterval((function(){t.bodyEl.style.backgroundColor=o()}),2e3)})),t.stopBtn.addEventListener("click",(function(){t.stopBtn.disabled=!0,t.startBtn.disabled=!1,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.738f2915.js.map
