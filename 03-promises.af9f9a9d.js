!function(){function e(e,n){return new Promise((function(o,t){var u=Math.random()>.3;setTimeout((function(){u?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var o=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),u=document.querySelector('input[name="amount"]');!function(n,o,t){for(var u=1;u<=t;u++)e(u,n).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=o}(Number(o.value),Number(t.value),Number(u.value))}))}();
//# sourceMappingURL=03-promises.af9f9a9d.js.map
