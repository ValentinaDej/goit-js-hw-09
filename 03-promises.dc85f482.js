function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var l=i("eWCmQ");e(l).Notify.init({timeout:2e3,clickToClose:!0});const r={formEl:document.querySelector(".form"),delayEl:document.querySelector('input[name="delay"]'),stepEl:document.querySelector('input[name="step"]')};function u(e,t){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}r.formEl.addEventListener("submit",(function(t){t.preventDefault(),function({delayStart:t,amount:o,step:n}){for(let i=1;i<=o;i+=1)delay=Number(t)+Number(n)*(Number(i)-1),u(i,delay).then((({position:t,delay:o})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}))}({delayStart:r.delayEl.value,amount:5,step:r.stepEl.value})}));
//# sourceMappingURL=03-promises.dc85f482.js.map