(()=>{const e=document.querySelector("#country-select");fetch("https://restcountries-v1.p.rapidapi.com/all",{headers:{"x-rapidapi-key":"873779bc63mshdc8b486a242fae0p158667jsne5de30e3bbed","x-rapidapi-host":"restcountries-v1.p.rapidapi.com"}}).then((e=>e.json())).then((e=>t(e))).catch((e=>console.error(e)));const t=t=>{t.map((t=>{let r=c("option");r.innerText=t.name,a(r,"value",t.name),n(e,r)}))},a=(e,t,a)=>{let c=document.createAttribute(t);c.value=a,e.setAttributeNode(c)},c=e=>document.createElement(e),n=(e,t)=>e.appendChild(t);e.addEventListener("change",(e=>{let t=e.target.value;fetch(`https://restcountries-v1.p.rapidapi.com/name/${t}`,{headers:{"x-rapidapi-key":"873779bc63mshdc8b486a242fae0p158667jsne5de30e3bbed","x-rapidapi-host":"restcountries-v1.p.rapidapi.com"}}).then((e=>e.json())).then((e=>r(e))).catch((e=>console.error(e)))}));const r=e=>{console.log(e);const t=document.querySelector("#country");e.map((e=>{let a=c("h3");a.innerText=e.capital,n(t,a)}))}})();