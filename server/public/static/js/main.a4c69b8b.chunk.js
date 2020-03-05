(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),l=n.n(o),s=(n(75),n(7)),i=n(9),c=n(11),u=n(10),m=n(12),p=(n(76),n(77),n(30)),h=n(41),d=n.n(h),f=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e){var n=e.username,a=e.password;return t.service.post("/signup",{username:n,password:a}).then((function(e){return e.data}))},this.login=function(e){var n=e.username,a=e.password;return t.service.post("/login",{username:n,password:a}).then((function(e){return e.data}))},this.logout=function(){return t.service.post("/logout").then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.service=d.a.create({baseURL:"".concat("https://project-physio-app.herokuapp.com/api","/auth"),withCredentials:!0})},E=n(40),g=n(26),b=n(19),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).logout=function(){n.services.logout().then((function(e){n.setState({username:"",password:""}),n.props.setTheUser(!1)})).catch((function(e){return console.log(e)}))},n.state={},n.services=new f,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.loggedInUser?r.a.createElement(r.a.Fragment,null,"Hi, ",this.props.loggedInUser.username,"!"):r.a.createElement(r.a.Fragment,null," ");return r.a.createElement(E.a,{className:"navbar",expand:"lg",bg:"light"},r.a.createElement(E.a.Brand,{href:"/"},"PhysioApp"),r.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"ml-auto"},r.a.createElement(g.a.Link,{as:"div"}," ",r.a.createElement(b.b,{to:"/"},"Inicio")),r.a.createElement(g.a.Link,{as:"div"}," ",r.a.createElement(b.b,{to:"/appointment"},"Cita Online")),this.props.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a.Link,{onClick:this.logout},"LogOut"),r.a.createElement(g.a.Link,{as:"div"},r.a.createElement(b.b,{to:"/admin"},e))):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a.Link,{as:"div"}," ",r.a.createElement(b.b,{to:"/signup"},"SignUp")),r.a.createElement(g.a.Link,{as:"div"}," ",r.a.createElement(b.b,{to:"/login"},"LogIn")),r.a.createElement(g.a.Link,{as:"div"},e)))))}}]),t}(a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"  Profesional experto en salud y bienestar"),r.a.createElement("hr",null))}}]),t}(a.Component),O=n(28),y=n(6),_=n(23),C=n(47),L=n(29),w=n(48),S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(O.a)({},a,r))},n.postUser=function(){n.services.login(n.state).then((function(e){n.setState({username:"",password:""}),n.props.setTheUser(e),n.props.history.push("/admin")})).catch((function(e){return console.log({err:e})}))},n.handleSubmit=function(e){e.preventDefault(),n.postUser()},n.state={username:"",password:""},n.services=new f,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{className:"auth-div"},r.a.createElement("h1",null,"Log In"),r.a.createElement(w.a,{className:"justify-content-md-center"},r.a.createElement(L.a,{md:4},r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,null,"Username"),r.a.createElement(y.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,null,"Password"),r.a.createElement(y.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(_.a,{variant:"info",type:"submit"},"Log In")))))}}]),t}(a.Component),U=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(O.a)({},a,r))},n.postUser=function(){n.services.signup(n.state).then((function(e){n.setState({username:"",password:""}),n.props.setTheUser(e),n.props.history.push("/")})).catch((function(e){return console.log({err:e})}))},n.handleSubmit=function(e){e.preventDefault(),n.postUser()},n.state={username:"",password:""},n.services=new f,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{className:"auth-div"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement(w.a,{className:"justify-content-md-center"},r.a.createElement(L.a,{md:4},r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,null,"Username"),r.a.createElement(y.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,null,"Password"),r.a.createElement(y.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(_.a,{variant:"info",type:"submit"},"Sign Up")))))}}]),t}(a.Component),k=n(69),T=n(39),M=function e(){var t=this;Object(s.a)(this,e),this.getAllAppointments=function(){return t.service.get("/appointment").then((function(e){return e.data}))},this.getAppointmentDetails=function(e){return t.service.get("/appointment/".concat(e)).then((function(e){return e.data}))},this.createAppointment=function(e){return t.service.post("/appointment",e).then((function(e){return e.data}))},this.getAppointmentByReference=function(e){return t.service.get("/appointment?reference=".concat(e)).then((function(e){return e.data[0]}))},this.service=d.a.create({baseURL:"".concat("https://project-physio-app.herokuapp.com/api"),withCredentials:!0})},A=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState({appointment:Object(k.a)({},n.state.appointment,Object(O.a)({},a,r))})},n.createAppointment=function(e){return console.log("DATA:",e),n.service.createAppointment(e).then((function(e){return console.log(e),n.setState({createdAppointment:e.data}),e})).catch((function(e){return console.log(e)}))},n.handleSubmit=function(e){e.preventDefault(),n.createAppointment(n.state.appointment).then((function(e){n.props.history.push("/appointment/created/".concat(e.data.reference))})).catch((function(e){return console.log(e)}))},n.handleClose=function(){return n.setState({showForm:!1})},n.handleShow=function(){return n.setState({showForm:!0})},n.service=new M,n.state={appointment:{name:"",surname:"",email:"",date:"",motive:""},showForm:!1,createdAppointment:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_.a,{variant:"success",onClick:this.handleShow},"Pedir Cita"),r.a.createElement(T.a,{show:this.state.showForm,onHide:this.handleClose},r.a.createElement(T.a.Header,{closeButton:!0},r.a.createElement(T.a.Title,null,"Solicitar Cita")),r.a.createElement(T.a.Body,null,r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,null,"Nombre"),r.a.createElement(y.a.Control,{type:"text",name:"name",value:this.state.appointment.name,onChange:this.handleChange})),r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,null,"Apellidos"),r.a.createElement(y.a.Control,{type:"text",name:"surname",value:this.state.appointment.surname,onChange:this.handleChange})),r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,null,"Email"),r.a.createElement(y.a.Control,{type:"email",name:"email",value:this.state.appointment.email,onChange:this.handleChange})),r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,null,"Fecha"),r.a.createElement(y.a.Control,{type:"date",name:"date",value:this.state.appointment.date,onChange:this.handleChange})),r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,null,"Hora"),r.a.createElement(y.a.Control,{type:"time",name:"time",value:this.state.appointment.time,onChange:this.handleChange})),r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,null,"Motivo de la consulta"),r.a.createElement(y.a.Control,{type:"text",name:"motive",value:this.state.appointment.motive,onChange:this.handleChange})),r.a.createElement(_.a,{variant:"info",type:"submit"},"Solicitar cita")))))}}]),t}(a.Component),D=n(38),I=n.n(D);!function(e){var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return/-MMM-/.test(a)?n[e.month()]:t[e.month()]},weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_S\xe1".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},ordinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}})}(I.a);var x=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return n.getAppointmentByReference(n.state.reference)},n.getAppointmentByReference=function(e){n.service.getAppointmentByReference(e).then((function(e){console.log(e),e?n.setState({appointment:e}):n.props.history.push("/appointment")})).catch((function(e){return console.log(e)}))},n.dateParse=function(e,t){return I.a.locale("es"),I()(e).format(t)},n.state={reference:e.match.params.reference,appointment:{}},n.service=new M,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"Su cita para el d\xeda ",this.dateParse(this.state.appointment.date,"LL")," a las ",this.dateParse(this.state.appointment.date,"LT")," ha sido creada y se encuentra pendiente de confirmaci\xf3n"),r.a.createElement("hr",null),r.a.createElement("p",null,"Su n\xba de referencia asignado es: ",r.a.createElement("strong",null,this.state.reference),"."),r.a.createElement("p",null,"En breve recibir\xe1 un email confirm\xe1ndole la cita o nos pondremos en contacto con usted si fuese necesario."),r.a.createElement("br",null),r.a.createElement(_.a,{variant:"outline-info",size:"sm"},r.a.createElement(b.b,{to:"/"},"Volver")))}}]),t}(a.Component),Y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,"AdminIndex")}}]),t}(a.Component),F=n(35),G=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={item:e.item},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{md:4},r.a.createElement(F.a,{className:"card-appointment"},r.a.createElement(F.a.Body,null,r.a.createElement(F.a.Title,null,this.state.item.patientId.name),r.a.createElement(F.a.Text,null,this.state.item.patientId.surname),r.a.createElement("hr",null),r.a.createElement(F.a.Text,null,this.state.item.date)))))}}]),t}(a.Component),B=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){n.getAppointments()},n.getAppointments=function(){return n.service.getAllAppointments().then((function(e){n.setState({appointments:e}),console.log(e)}))},n.state={appointments:[]},n.service=new M,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"AppointmentList"),this.state.appointments.map((function(e){return r.a.createElement(G,{item:e})})))}}]),t}(a.Component),N=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).componentDidUpdate=function(t,n){return console.log("El estado de App se ha actualizado:",e.state)},e.componentDidMount=function(){return e.fetchUser()},e.setTheUser=function(t){return e.setState({loggedInUser:t})},e.fetchUser=function(){e.services.loggedin().then((function(t){return e.setState({loggedInUser:t})})).catch((function(){return e.setState({loggedInUser:!1})}))},e.state={loggedInUser:!1},e.services=new f,e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"bg"},r.a.createElement(v,{setTheUser:this.setTheUser,loggedInUser:this.state.loggedInUser}),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(p.a,{exact:!0,path:"/appointment",render:function(e){return r.a.createElement(A,e)}}),r.a.createElement(p.a,{path:"/appointment/created/:reference",render:function(e){return r.a.createElement(x,e)}}),r.a.createElement(p.a,{path:"/signup",render:function(){return r.a.createElement(U,{setTheUser:e.setTheUser})}}),r.a.createElement(p.a,{path:"/login",render:function(t){return r.a.createElement(S,Object.assign({setTheUser:e.setTheUser},t))}}),r.a.createElement(p.a,{exact:!0,path:"/admin",render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(p.a,{path:"/admin/appointments",render:function(){return r.a.createElement(B,null)}})))}}]),t}(a.Component);l.a.render(r.a.createElement(b.a,null,r.a.createElement(N,null)),document.getElementById("root"))},70:function(e,t,n){e.exports=n(102)},75:function(e,t,n){},77:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.a4c69b8b.chunk.js.map