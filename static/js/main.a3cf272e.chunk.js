(this["webpackJsonpcovid19-daily-data"]=this["webpackJsonpcovid19-daily-data"]||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},26:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),s=a(1),l=a(2),i=a(13),u=a(14),d=a(3),m={allData:[],showData:[]};var p=Object(s.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA/SET_ALL_DATA":return Object(d.a)(Object(d.a)({},e),{},{allData:t.allData});case"DATA/SHOW_ALL_DATA":return Object(d.a)(Object(d.a)({},e),{},{showData:e.allData});case"DATA/ADD_SHOW_DATA":return Object(d.a)(Object(d.a)({},e),{},{showData:[].concat(Object(u.a)(e.showData),[t.showData])});default:return e}}});var h=function(e){return c.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 p-0"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.country.country),c.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"deaths: ",e.country.deaths.total),c.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."))))};var b=Object(l.b)((function(e){return{allData:e.data.showData}}),null)((function(e){var t=Object(l.c)(),a=e.allData.map((function(e){return c.a.createElement(h,{country:e,key:e.country})}));return c.a.createElement("div",{className:"data"},c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){t((function(e){var t=[];fetch("https://covid-193.p.rapidapi.com/statistics",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"7827889b5bmsh5d1ac9ac9c7b80bp1401dejsnfcde920261bb"}}).then((function(e){return e.json()})).then((function(a){t=a.response.slice(0,40),e(function(e){return{type:"DATA/SET_ALL_DATA",allData:e}}(t))})).then((function(){return e({type:"DATA/SHOW_ALL_DATA"})}))}))}},"Load All Data"),c.a.createElement("div",{className:"cards-section mt-4"},c.a.createElement("div",{className:"row m-0"},a)))})),v=a(7);var f=function(e){var t=Object(l.c)();return c.a.createElement("div",{className:"col-12 py-2 text-left btn btn-outline-danger border",onClick:function(){t({type:"DATA/ADD_SHOW_DATA",showData:e.country})}},e.country.country)};var D=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),s=Object(v.a)(o,2),l=s[0],i=s[1],u=Object(n.useState)([]),d=Object(v.a)(u,2),m=d[0],p=d[1];Object(n.useEffect)((function(){fetch("https://covid-193.p.rapidapi.com/statistics",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"7827889b5bmsh5d1ac9ac9c7b80bp1401dejsnfcde920261bb"}}).then((function(e){return e.json()})).then((function(e){var t=[];e.response.map((function(e){t.push(e)})),r(t)})).catch((function(e){console.log(e)}))}),[]);var h=m.map((function(e){return c.a.createElement(f,{country:e,key:e.country})}));return c.a.createElement("div",{className:"search-area"},c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search for countries manually",onChange:function(e){var t=e.target.value;i((function(e){return t}));var n=[];a.map((function(e){""!==t&&0===e.country.toLowerCase().indexOf(t.toLowerCase())&&n.push(e)})),p(n)},value:l})),c.a.createElement("div",{className:"row mx-0 my-3 found-countries-block"},h))};var A=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"text-center my-4"},"COVID19 DAILY INFO"),c.a.createElement(D,null),c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=Object(s.d)(p,Object(s.a)(i.a)),E=c.a.createElement(l.a,{store:y},c.a.createElement(A,null));window.store=y,o.a.render(E,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.a3cf272e.chunk.js.map