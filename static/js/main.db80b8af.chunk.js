(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(2),c=a.n(s),r=(a(14),a(3)),i=a(4),u=a(6),d=a(5),m=a(7),l=(a(16),a(18),function(e){var t=e.seconds<10?"0".concat(e.seconds):e.seconds,a=e.minutes<10?"0".concat(e.minutes):e.minutes,n=e.hours<10?"0".concat(e.hours):e.hours;return o.a.createElement("span",{className:"time"},n,":",a,":",t)}),h=(a(20),function(e){var t=e.day<10?"0".concat(e.day):e.day,a=e.month<10?"0".concat(e.month):e.month,n=e.year<10?"0".concat(e.year):e.year;return o.a.createElement("span",{className:"date"},e.dayName,", ",t,"-",a,"-",n)}),y=(a(22),function(){return o.a.createElement("span",{className:"description"},"Digital clock with React.JS")}),f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={time:a.getTime(),date:a.getDate()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getDate",value:function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return{dayName:f[e.getDay()],day:t,year:n,month:a}}},{key:"getTime",value:function(){var e=new Date;return{seconds:e.getSeconds(),minutes:e.getMinutes(),hours:e.getHours()}}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.setState({time:e.getTime(),date:e.getDate()})},1e3)}},{key:"render",value:function(){return o.a.createElement("div",{className:"clock"},o.a.createElement(h,{dayName:this.state.date.dayName,day:this.state.date.day,year:this.state.date.year,month:this.state.date.month}),o.a.createElement(l,{seconds:this.state.time.seconds,minutes:this.state.time.minutes,hours:this.state.time.hours}),o.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.db80b8af.chunk.js.map