!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("iU1Pc");e(r).Notify.init({timeout:2e3,clickToClose:!0});var l={formEl:document.querySelector(".form"),delayEl:document.querySelector('input[name="delay"]'),stepEl:document.querySelector('input[name="step"]')};function a(e,t){return new Promise((function(n,o){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l.formEl.addEventListener("submit",(function(t){t.preventDefault(),function(t){for(var n=t.delayStart,o=t.amount,i=t.step,l=1;l<=o;l+=1)delay=Number(n)+Number(i)*(Number(l)-1),a(l,delay).then((function(t){var n=t.position,o=t.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}({delayStart:l.delayEl.value,amount:5,step:l.stepEl.value})}))}();
//# sourceMappingURL=03-promises.19c3235c.js.map
