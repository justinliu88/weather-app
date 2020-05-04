(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),s=(a(24),a(6)),o=a.n(s),l=a(17),m=a(2),u=a(3),h=a(5),p=a(4),d=(a(26),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("img",{className:"header__logo",src:"./icon/logo.png",alt:"logo"}),r.a.createElement("h1",{className:"header__title"},"Weather Channel"))}}]),a}(r.a.Component)),f=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"weather-channel__footer"},r.a.createElement("p",null,"Powered by React"))}}]),a}(r.a.Component);var w=function(e){return r.a.createElement("button",{className:"temp-switch"},r.a.createElement("i",{className:"fa fa-thermometer-empty","aria-hidden":"true"}),r.a.createElement("sup",null,"\xb0"),"C")},E=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement("input",{className:"search-input",type:"text",onChange:this.props.getCityValue})),r.a.createElement("button",{className:"search-btn",onClick:this.props.getWeather},r.a.createElement("i",{className:"fa fa-search"})),r.a.createElement(w,null))}}]),a}(r.a.Component),v=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"weather-condition"},"undefined"!==typeof this.props.weather&&""!==this.props.city?r.a.createElement("div",null,r.a.createElement("div",{className:"weather-condition__location"},this.props.city),r.a.createElement("div",{className:"weather-condition__visibility"},this.props.weather),r.a.createElement("div",{className:"weather-condition__temp"},"".concat(Math.round(this.props.temperature)," c")),r.a.createElement("div",{className:"weather-condition__desc"},r.a.createElement("div",null,r.a.createElement("img",{src:"icon/icon-umberella.png",alt:"umb"}),r.a.createElement("span",{className:"citem"},"20%")),r.a.createElement("div",null,r.a.createElement("img",{src:"icon/icon-wind.png",alt:"wind"})," ",r.a.createElement("span",{className:"citem"},"".concat(this.props.windSpeed," km/h"))),r.a.createElement("div",null,r.a.createElement("img",{src:"icon/icon-compass.png",alt:"compass"})," ",r.a.createElement("span",{className:"citem"},"NE")))):"")}}]),a}(r.a.Component),b=a(18),y=a.n(b),_=a(46);var g=function(e){return r.a.createElement("div",{className:"weather-forecast__row"},r.a.createElement("span",{className:"weather-forecast__day"},e.day),r.a.createElement("span",{className:"weather-forecast__icon"},r.a.createElement("i",{className:"fa fa-clock-o"}),e.time),r.a.createElement("span",{className:"weather-forecast__high"},e.high),r.a.createElement("span",{className:"weather-forecast__low"},e.low))},j=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={forecasts:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;y()("https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane").then((function(t){var a=t.data.data.forecast.slice(0,10);e.setState({forecasts:a})}))}},{key:"render",value:function(){return r.a.createElement("section",{className:"weather-forecast"},r.a.createElement("div",{className:"forecast__switch"},r.a.createElement("button",{className:"forecast__switch_0 switch-active"},"5 items"),r.a.createElement("button",{className:"forecast__switch_1"},"10 items")),this.state.forecasts.map((function(e){var t=new Date(1e3*e.time),a=Object(_.a)(t,"EEE"),n=Object(_.a)(t,"HH:mm");return r.a.createElement(g,{key:e.time,day:a,high:e.maxCelsius,low:e.minCelsius,time:n})})))}}]),a}(r.a.Component),N="6e41c655f9339921c7ebd5bad96fd981",O=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={city:"",unit:"metric",temperature:void 0,weather:void 0,windSpeed:void 0},e.getCityValue=function(t){e.setState({city:t.target.value})},e.getWeather=function(){var t=Object(l.a)(o.a.mark((function t(a){var n,r,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state.city,r=e.state.unit,t.next=5,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat(N,"&units=").concat(r));case 5:return c=t.sent,t.next=8,c.json();case 8:i=t.sent,console.log(i),n&&(e.setState({temperature:i.main.temp,city:i.name,weather:i.weather[0].main,windSpeed:i.wind.speed}),console.table(e.state.temperature,e.state.city,e.state.weather));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"weather-channel__container"},r.a.createElement(d,null),r.a.createElement("section",null,r.a.createElement(E,{getCityValue:this.getCityValue,getWeather:this.getWeather})," "),r.a.createElement("section",null,r.a.createElement(v,{temperature:this.state.temperature,city:this.state.city,weather:this.state.weather,windSpeed:this.state.windSpeed})," ",r.a.createElement(j,null)),r.a.createElement(f,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a7a61839.chunk.js.map