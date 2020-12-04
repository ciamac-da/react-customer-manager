(this["webpackJsonpreact-customer-manager"]=this["webpackJsonpreact-customer-manager"]||[]).push([[0],{80:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(1),o=n(10),s=n(38),i=n(52),c=n(53),l=n(66),h=n(65),d=n(113),m=Object(d.a)((function(e){return{myCard:{maxWidth:345,width:345,height:240,backgroundColor:"orange !important",marginBottom:"1rem"},input:{textAlign:"center !important",backgroundColor:"white !important",justifyContent:"center !important",display:"flex !important",alignItems:"center !important"},grid:{display:"flex",justifyContent:"center"},buttons:{display:"flex",justifyContent:"center !important",alignItems:"center",padding:"0px"},buttonSave:{color:"white !important",backgroundColor:"green !important",marginRight:"2rem !important","&:hover":{backgroundColor:"silver !important"}},buttonDel:{color:"white !important",backgroundColor:"red !important","&:hover":{backgroundColor:"silver !important"}},names:{marginTop:".5rem",marginBottom:".5rem",fontWeight:"bolder !important",wordBreak:"break-word",color:"white !important",fontSize:"1.4rem !important",height:"6.3rem",justifyContent:"center",textAlign:"center",textShadow:".2rem .2rem .3rem black"}}})),u=n(84),p=n(117),j=n(118),b=n(126),f=n(121),g=n(122),x=n(123),O=n(124),v=n(57),w=n.n(v),C=n(64),y=n(119),S=n(61),N=n(60),k=n(59),P=n.n(k),D=n(36),I=Object(C.a)({palette:{primary:D.a}}),B=function(e){var t=e.fullname,n=e.personSave,a=e.personDelete,o=e.personChange,s=m();return Object(r.jsx)(w.a,{loader:"bar",color:"white",size:9,duration:1,children:Object(r.jsx)(u.a,{children:Object(r.jsxs)(p.a,{className:s.myCard,children:[Object(r.jsx)("div",{className:s.input,children:Object(r.jsxs)(j.a,{container:!0,alignItems:"flex-end",className:s.grid,children:[Object(r.jsxs)(j.a,{item:!0,children:[Object(r.jsx)(P.a,{}),"\xa0 \xa0"]}),Object(r.jsx)(j.a,{item:!0,children:Object(r.jsx)(y.a,{theme:I,children:Object(r.jsx)(b.a,{id:"input-with-icon-grid",label:"Click here to modify",placeholder:t,onChange:o})})})]})}),Object(r.jsx)(f.a,{children:Object(r.jsx)(g.a,{variant:"body2",color:"textSecondary",component:"p",className:s.names,children:"".concat(t)})}),Object(r.jsx)(x.a,{children:Object(r.jsxs)("div",{className:s.buttons,children:[Object(r.jsxs)(O.a,{variant:"contained",onClick:n,className:s.buttonSave,children:[Object(r.jsx)(N.a,{}),"\xa0 Save..."]}),Object(r.jsxs)(O.a,{onClick:a,variant:"contained",className:s.buttonDel,children:[Object(r.jsx)(S.a,{}),"\xa0 Delete"]})]})})]})})})},W=function(e){var t=e.persons,n=e.personSave,a=e.personDelete,o=e.personChange;return Object(r.jsx)(r.Fragment,{children:t.map((function(e){return Object(r.jsx)(B,{fullname:e.fullname,personSave:function(){return n(e.id)},personDelete:function(){return a(e.id)},personChange:function(t){return o(t,e.id)}},e.id)}))})},z=n(125),A=n(120),M=Object(d.a)((function(e){return{h2:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"white",fontWeight:"bolder",fontSize:"2.5rem"},h3:{color:"white",fontWeight:"bolder",fontSize:"1.5rem"},span:{color:"orange"}}})),T=n(62),F=function(e){var t=e.personsLenght,n=e.appTitle,a=M();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(g.a,{className:a.h2,component:"h2",children:[n,Object(r.jsx)(T.a,{})]}),Object(r.jsxs)(g.a,{className:a.h3,component:"h3",children:["Number of customers \xa0",Object(r.jsx)("span",{className:a.span,children:t})]})]})},J=n(63),L=n.n(J),R=n(5),E=Object(R.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},header:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",margin:"auto"},fab:{color:"white",backgroundColor:"orange",marginRight:"1rem","&:hover":{color:"orange"}},fabIn:{display:"flex",justifyContent:"center",margin:"1rem"},showBtn:{backgroundColor:"orange",margin:"2rem",fontSize:"1.2rem",color:"white",fontWeight:"bolder","&:hover":{color:"orange",fontWeight:"bolder"}},input:{color:"white",textDecoration:"none"}}})),q=n(37),G=E(function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={persons:[],showPersons:!1},e.handleShowPerson=function(){e.setState({showPersons:!e.state.showPersons})},e.handleSavePerson=function(){e.setState({showPersons:!e.state.showPersons})},e.handleDeletePerson=function(t){var n=Object(s.a)(e.state.persons),r=n.filter((function(e){return e.id!==t}));e.setState({persons:r});var a=n.findIndex((function(e){return e.id===t})),o=n[a];q.b.error("".concat(o.fullname," was deleted successfully!"),{position:"bottom-right"})},e.handleNameChange=function(t,n){var r=e.state.persons,a=r.findIndex((function(e){return e.id===n})),o=r[a];o.fullname=t.target.value;var i=Object(s.a)(r);i[a]=o,e.setState({persons:i})},e.handleNewPerson=function(){var t=Object(s.a)(e.state.persons),n={id:Math.floor(1e4*Math.random()),fullname:e.state.person};""!==n.fullname&&" "!==n.fullname&&(e.setState({persons:t,person:""}),t.push(n),q.b.success("".concat(n.fullname," was added successfully"),{position:"bottom-right",closeButton:!0}))},e.setPerson=function(t){e.setState({person:t.target.value})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.persons,a=null;return t.showPersons&&(a=Object(r.jsx)(W,{persons:n,personDelete:this.handleDeletePerson,personChange:this.handleNameChange,personSave:this.handleSavePerson})),Object(r.jsxs)("div",{className:e.header,children:[Object(r.jsx)(F,{personsLenght:n.length,appTitle:this.props.title}),Object(r.jsxs)("div",{className:e.fabIn,children:[Object(r.jsx)(z.a,{className:e.fab,"aria-label":"add",onClick:this.handleNewPerson,children:Object(r.jsx)(L.a,{})}),Object(r.jsx)(A.a,{type:"text",placeholder:"Add New Customer",onChange:this.setPerson,value:this.state.person,className:e.input})]}),Object(r.jsx)(O.a,{className:e.showBtn,onClick:this.handleShowPerson,variant:"contained",children:"Show Customers"}),Object(r.jsx)(q.a,{}),a]})}}]),n}(a.Component));n(80),n(81);Object(o.render)(Object(r.jsx)(G,{title:"Customer Manager"}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.5dc41c32.chunk.js.map