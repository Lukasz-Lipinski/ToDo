(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(6),r=n.n(a),s=(n(18),n(2)),o=n(13),d=n(3),l="mainView/addElement",u="app/showAddElementWindow",j="app/hideAddElementWindow",b="mainView/takeConditionToFilter",m="mainView/removeElement",O="mainView/setDone",f={list:[],showAddElementWindow:!1,filterCondition:"All",id:0,doneList:[]};var h=n(1),x=Object(s.b)((function(e){return{}}),(function(e){return{setAddElementWindowOnTrue:function(){return e({type:u})}}}))((function(e){var t=e.setAddElementWindowOnTrue;return Object(h.jsx)("button",{role:"button",onClick:t,children:"Add Element"})})),p={classess:{app:"app",list:"list",listElement:"listElement",doneListElement:"doneListElement",addButton:"addButton",container:"container",topMenu:"topMenu",addElementWindow:"addElementWindow",sidebar:"sidebar",sidebarElement:"sidebarElement"},categoryList:["Home","Job","Tasks","Today","Urgent","Done"],sidebarLinks:[{name:"All"},{name:"Urgent"},{name:"Home"},{name:"Today"},{name:"Job"},{name:"Tasks"},{name:"Done"}]},g=Object(c.createContext)(p),y=function(e){var t=Object(c.useContext)(g).classess,n=t.list,i=t.doneListElement,a=e.description,r=e.date,s=e.category;e.id;return Object(h.jsxs)("li",{className:"".concat(n,"__").concat(i),children:[Object(h.jsx)("span",{children:a})," ",Object(h.jsx)("span",{children:r})," ",Object(h.jsx)("span",{children:s})]})},v=Object(s.b)((function(e){return{taskList:e.list.list,filterCondition:e.list.filterCondition,doneList:e.list.doneList}}),(function(e){return{}}))((function(e){var t=e.taskList,n=e.filterCondition,i=e.doneList,a=Object(c.useContext)(g).classess.list,r=Object(c.useCallback)((function(e,t){var n=e;switch(t){case"All":return n.filter((function(e){return!0!==e.done})).map((function(e,t){return Object(h.jsx)(w,{description:e.element,date:e.date,category:e.category,id:e.id},"list--element--".concat(t))}));case"Urgent":return n.filter((function(e){return"Urgent"===e.category})).map((function(e,t){return Object(h.jsx)(w,{description:e.element,date:e.date,category:e.category,id:e.id},"list--element--".concat(t))}));case"Home":return n.filter((function(e){return"Home"===e.category})).map((function(e,t){return Object(h.jsx)(w,{description:e.element,date:e.date,category:e.category,id:e.id},"list--element--".concat(t))}));case"Today":return n.filter((function(e){return"Today"===e.category})).map((function(e,t){return Object(h.jsx)(w,{description:e.element,date:e.date,category:e.category,id:e.id},"list--element--".concat(t))}));case"Job":return n.filter((function(e){return"Job"===e.category})).map((function(e,t){return Object(h.jsx)(w,{description:e.element,date:e.date,category:e.category,id:e.id},"list--element--".concat(t))}));case"Tasks":return n.filter((function(e){return"Tasks"===e.category})).map((function(e,t){return Object(h.jsx)(w,{description:e.element,date:e.date,category:e.category,id:e.id},"list--element--".concat(t))}));case"Done":return i.map((function(e,t){return Object(h.jsx)(y,{description:e.element,date:e.date,category:e.category,id:e.id},"doneList--element--".concat(t))}));default:return n}}),[t,n]);return console.log(i),Object(h.jsx)("ul",{className:a,children:r(t,n)})})),E=n(12),w=Object(s.b)((function(e){return{elementsList:e.list.list}}),(function(e){return{setNewList:function(t){return e({type:m,payload:t})},addToDoneList:function(t){return e({type:O,payload:t})}}}))((function(e){var t=e.description,n=e.date,i=e.category,a=e.id,r=e.elementsList,s=e.setNewList,o=e.addToDoneList,d=Object(c.useContext)(g).classess,l=d.list,u=d.listElement;return Object(h.jsxs)("li",{className:"".concat(l,"__").concat(u),children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:t})," ",Object(h.jsx)("span",{children:n})," ",Object(h.jsx)("span",{children:i})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{id:a,onClick:function(e){var t=parseInt(e.target.id),n=r.filter((function(e){return e.id===t}));o(n);var c=r.filter((function(e){return e.id!==t}));s(c)},children:Object(h.jsx)(E.a,{})}),Object(h.jsx)("button",{id:a,onClick:function(e){var t=parseInt(e.target.id),n=r.filter((function(e){return e.id!==t}));s(n)},children:"\xd7"})]})]})})),C=Object(s.b)((function(e){return{amountOfListElements:e.list.list.length}}),(function(){return{}}))((function(e){var t=e.amountOfListElements,n=Object(c.useContext)(g).classess;return Object(h.jsxs)("div",{className:n.container,children:[Object(h.jsx)(T,{}),t?Object(h.jsx)(v,{}):null]})})),L=n(4),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(c.useState)(e),n=Object(L.a)(t,2),i=n[0],a=n[1],r=function(e){a(e.target.value)};return[i,r]},A=Object(s.b)((function(e){return{addedElement:e.list.list}}),(function(e){return{setAddElementWindowOnFalse:function(){return e({type:j})},addElementToList:function(t){var n=t.element,c=t.date,i=t.category;return e({type:l,payload:{element:n,date:c,category:i}})}}}))((function(e){var t=e.setAddElementWindowOnFalse,n=e.addElementToList,a=Object(c.useContext)(g),r=k(),s=Object(L.a)(r,2),o=s[0],d=s[1],l=k(),u=Object(L.a)(l,2),j=u[0],b=u[1],m=k(),O=Object(L.a)(m,2),f=O[0],x=O[1],p=a.classess,y=a.categoryList,v=p.addElementWindow;return Object(h.jsxs)("div",{className:v,children:[Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:t,className:"".concat(v,"__closeBtn"),children:"\xd7"})}),Object(h.jsxs)("div",{className:"".concat(v,"__form"),children:[Object(h.jsx)("label",{htmlFor:"eventName",children:"Name"}),Object(h.jsx)("input",{id:"eventName",type:"text",value:o,onChange:d,required:!0}),Object(h.jsx)("label",{htmlFor:"date",children:"Date"}),Object(h.jsx)("input",{id:"date",type:"date",value:j,onChange:b,required:!0}),Object(h.jsxs)("fieldset",{onChange:x,children:[Object(h.jsx)("legend",{children:"Category"}),Object(h.jsx)("div",{children:y.map((function(e,t){return 0===t?Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsx)("label",{htmlFor:e,children:e}),Object(h.jsx)("input",{type:"radio",id:e,name:"category",value:e,checked:!0})]},"radio--element--".concat(t)):Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsx)("label",{htmlFor:e,children:e}),Object(h.jsx)("input",{type:"radio",id:e,name:"category",value:e})]},"radio--element--".concat(t))}))})]})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{role:"button",onClick:function(){n({element:o,date:j,category:f})},children:"Add"})})]})})),T=function(){var e=Object(c.useContext)(g).classess.topMenu;return Object(h.jsxs)("nav",{className:e,children:[Object(h.jsx)(N,{}),Object(h.jsx)(x,{})]})},N=function(){var e=function(){var e=new Date;return"".concat(e.getDate(),".").concat(e.getMonth()+1,".").concat(e.getFullYear())}();return Object(h.jsxs)("span",{children:["Today: ",e]})},W=Object(s.b)((function(e){return{checking:e.list.filterCondition}}),(function(e){return{setCondition:function(t){return e({type:b,payload:t})}}}))((function(e){var t=e.setCondition,n=(e.checking,Object(c.useContext)(g)),i=n.sidebarLinks,a=n.classess,r=a.sidebar,s=a.sidebarElement,o=function(e){t(e.target.innerText)};return Object(h.jsx)("nav",{className:r,children:Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:i.map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{onClick:o,className:"".concat(r,"__").concat(s),children:e.name})},"sidebar--links--".concat(t))}))})})})}));n(26);var F=Object(s.b)((function(e){return{setAddElementWindow:e.list.showAddElementWindow}}),(function(){return{}}))((function(e){var t=e.setAddElementWindow,n=Object(c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?Object(h.jsx)(A,{}):Object(h.jsx)(C,{})}),[t]);return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(g.Provider,{value:p,children:[Object(h.jsx)(W,{}),n(t)]})})})),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))},_=n(10),J=Object(_.a)({list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(d.a)(Object(d.a)({},e),{},{list:[].concat(Object(o.a)(e.list),[{element:t.payload.element,date:t.payload.date,category:t.payload.category,id:e.id}]),showAddElementWindow:!1,id:e.id+1});case m:return Object(d.a)(Object(d.a)({},e),{},{list:t.payload});case u:return Object(d.a)(Object(d.a)({},e),{},{showAddElementWindow:!0});case j:return Object(d.a)(Object(d.a)({},e),{},{showAddElementWindow:!1});case b:return Object(d.a)(Object(d.a)({},e),{},{filterCondition:t.payload});case O:return Object(d.a)(Object(d.a)({},e),{},{doneList:t.payload});default:return e}}}),B=Object(_.b)(J);r.a.render(Object(h.jsx)(s.a,{store:B,children:Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(F,{})})}),document.getElementById("root")),D()}},[[27,1,2]]]);
//# sourceMappingURL=main.59bc94a5.chunk.js.map