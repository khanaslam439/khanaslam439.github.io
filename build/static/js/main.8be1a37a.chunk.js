(this.webpackJsonpcrudapp=this.webpackJsonpcrudapp||[]).push([[0],{25:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(7),i=c.n(s),r=c(6),l=c(2),o=c(5),d=c(3),j=c(0),u=Object(o.b)((function(e){return{user:e.user}}),(function(e){return{login:function(){return e({type:"USER_LOGIN"})}}}))((function(e){var t=Object(n.useState)(""),c=Object(d.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),r=Object(d.a)(i,2),o=r[0],u=r[1],b=Object(n.useState)("alert-danger"),O=Object(d.a)(b,2),h=O[0],m=O[1],p=Object(n.useState)("Please enter valid credential."),x=Object(d.a)(p,2),g=x[0],f=x[1],v=Object(n.useState)("none"),y=Object(d.a)(v,2),N=y[0],S=y[1],L=Object(n.useState)(e.user.isLogged),_=Object(d.a)(L,2),k=_[0],P=_[1];return k?Object(j.jsx)(l.a,{to:"/"}):Object(j.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),a===e.user.name&&o===e.user.email?(S("block"),m("alert-success"),f("Login successfully"),e.login(),setTimeout((function(){S("none"),P(!0)}),1500)):(S("block"),P(!1),setTimeout((function(){S("none"),document.querySelector("form").reset()}),1500))}(t)},className:"login--form",children:[Object(j.jsx)("h2",{className:"login--form__title",children:"Login Please!"}),Object(j.jsx)("p",{className:"login--form__description",children:"Please login to proceed next."}),Object(j.jsx)("div",{className:"alert ".concat(h),style:{display:N},children:g}),Object(j.jsx)("label",{className:"login--form__label",children:"Name"}),Object(j.jsx)("input",{type:"name",onChange:function(e){return s(e.target.value)},className:"login--form__input"}),Object(j.jsx)("label",{className:"login--form__label",children:"Email"}),Object(j.jsx)("input",{type:"email",onChange:function(e){return u(e.target.value)},className:"login--form__input"}),Object(j.jsx)("button",{className:"login--form__btn",type:"submit",children:"Login"})]})})),b=function(){return Object(j.jsxs)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center"},children:[Object(j.jsx)("h1",{className:"display-4",children:"Page Not Found"}),Object(j.jsx)("p",{className:"lead muted",children:"The page you visited either not available or you have missed spelled the page url."}),Object(j.jsx)(r.b,{className:"add--product__btn",to:"/",children:"Go to home"})]})},O=function(e){return Object(j.jsx)("header",{className:"page--header",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"d-flex flex-wrap justify-content-between align-items-center",children:[Object(j.jsxs)("h2",{className:"header--title",children:[Object(j.jsx)("img",{src:"/logo192.png",width:30,style:{marginRight:10},alt:""}),"Hi ",e.name]}),Object(j.jsxs)("button",{className:"header--btn__logout",onClick:e.clickme,children:[Object(j.jsx)("i",{className:"material-icons",children:"logout"}),"logout"]})]})})})},h=Object(o.b)((function(e){return{products:e.products,user:e.user}}),(function(e){return{deleteProduct:function(t){return e({type:"DELETE_PRODUCT",id:t})},logout:function(){return e({type:"USER_LOGOUT"})}}}))((function(e){var t=Object(n.useState)(e.user.isLogged),c=Object(d.a)(t,2),s=c[0],i=c[1],o=Object(n.useState)(0),u=Object(d.a)(o,2),b=u[0],h=u[1],m=function(){i(!1),e.logout()};Object(n.useEffect)((function(){0===e.user.isLogged&&m()}));return s?Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(O,{name:"Aslam khan",clickme:function(){return m()}}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h4",{className:"text-center display-4 py-3",children:"Product Listing"}),Object(j.jsxs)("div",{className:"row mt-3 align-items-center justify-content-between",children:[Object(j.jsx)("div",{className:"col-md-3",children:Object(j.jsxs)("div",{className:"search--product",children:[Object(j.jsx)("input",{type:"text",onKeyUp:function(e){return function(e){var t=e.target.value;document.querySelectorAll("table tbody tr td:nth-child(2)").forEach((function(e){return e.parentElement.style.display=e.innerHTML.includes(t)?"table-row":"none"}))}(e)}}),Object(j.jsx)("i",{className:"material-icons",children:"search"})]})}),Object(j.jsx)("div",{className:"col-md-3 text-end",children:Object(j.jsx)(r.b,{to:"/add-product",className:"text-md-right add--product__btn",children:"Add Product"})})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)("section",{children:Object(j.jsxs)("table",{className:"table table-hover product--list",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"S.No"}),Object(j.jsx)("th",{style:{width:"30%"},children:"Product"}),Object(j.jsx)("th",{style:{width:"45%"},children:"Description"}),Object(j.jsx)("th",{children:"Price"}),Object(j.jsx)("th",{children:"Quantity"}),Object(j.jsx)("th",{children:"Action"})]})}),Object(j.jsx)("tbody",{children:e.products.map((function(t,c){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[c+1,"."]}),Object(j.jsx)("td",{children:Object(j.jsxs)("div",{className:"d-flex align-items-start",children:[Object(j.jsx)("img",{src:""===t.imgURL?"https://via.placeholder.com/50":t.imgURL,alt:""}),Object(j.jsx)("p",{children:t.name})]})}),Object(j.jsx)("td",{children:t.detail}),Object(j.jsx)("td",{children:t.price}),Object(j.jsx)("td",{children:t.quantity}),Object(j.jsxs)("td",{children:[Object(j.jsx)(r.b,{to:"/edit-product/"+t.id,children:Object(j.jsx)("i",{className:"material-icons",children:"edit"})}),Object(j.jsx)(r.b,{to:"",onClick:function(){return c=t.id,e.deleteProduct(c),h(b+1),void console.log(e.user);var c},children:Object(j.jsx)("i",{className:"material-icons",children:"delete"})})]})]},c)}))})]})})})})]})]}):Object(j.jsx)(l.a,{to:"/login"})})),m=Object(o.b)((function(e){return{products:e.products,user:e.user}}),(function(e){return{getProduct:function(){return e({type:"GET_PRODUCT"})},updateProduct:function(t,c){return e({type:"EDIT_PRODUCT",payload:{id:parseInt(t),product:c}})}}}))((function(e){var t=Object(l.h)().id,c=Object(n.useState)(!1),s=Object(d.a)(c,2),i=s[0],r=s[1],o=Object(n.useState)([]),u=Object(d.a)(o,2),b=u[0],h=u[1],m=Object(n.useState)(""),p=Object(d.a)(m,2),x=p[0],g=p[1],f=Object(n.useState)(""),v=Object(d.a)(f,2),y=v[0],N=v[1],S=Object(n.useState)(0),L=Object(d.a)(S,2),_=L[0],k=L[1],P=Object(n.useState)(0),U=Object(d.a)(P,2),C=U[0],R=U[1],w=Object(n.useState)(""),D=Object(d.a)(w,2),T=D[0],E=D[1];Object(n.useEffect)((function(){h(e.products);var c=b.filter((function(e){return e.id===parseInt(t)}));c.length>0&&(g(c[0].name),N(c[0].detail),k(c[0].price),R(c[0].quantity),E(c[0].imgURL))}),[e.products,t,b]);return i||!1===e.user.isLogged?Object(j.jsx)(l.a,{to:"/"}):Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(O,{name:"Aslam khan"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"text-center py-md-3",children:[Object(j.jsx)("h3",{className:"display-4",children:"Edit Product"}),Object(j.jsx)("p",{children:"edit product detail and hit submit to save it."})]}),Object(j.jsxs)("form",{onSubmit:function(c){return function(c){c.preventDefault();var n={name:x,detail:y,price:_,quantity:C,imgURL:T};localStorage.setItem("product",JSON.stringify([n,t])),e.updateProduct(t,n),r(!0)}(c)},className:"add--product__form",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Product Title"}),Object(j.jsx)("input",{type:"text",onChange:function(e){return g(e.target.value)},value:x})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("textarea",{onChange:function(e){return N(e.target.value)},rows:4,value:y})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Price"}),Object(j.jsx)("input",{type:"text",onChange:function(e){return k(e.target.value)},value:_})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Quantity"}),Object(j.jsx)("input",{type:"text",onChange:function(e){return R(e.target.value)},value:C})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Image"}),Object(j.jsx)("img",{src:T,style:{width:150,objectFit:"contain",marginBottom:10},alt:""}),Object(j.jsx)("input",{type:"file",onChange:function(e){return function(e){var t=e.target.files[0],c=new FileReader;c.readAsDataURL(t),c.onloadend=function(e){E(c.result)}}(e)}})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"Save changes"})})]})]})]})})),p=Object(o.b)((function(e){return{products:e.products,user:e.user}}),(function(e){return{addProduct:function(t){return e({type:"ADD_PRODUCT",payload:{data:t}})}}}))((function(e){var t=Object(n.useState)(!1),c=Object(d.a)(t,2),s=c[0],i=c[1],r=e.user.isLogged,o=Object(n.useState)(""),u=Object(d.a)(o,2),b=u[0],h=u[1],m=Object(n.useState)(""),p=Object(d.a)(m,2),x=p[0],g=p[1],f=Object(n.useState)(0),v=Object(d.a)(f,2),y=v[0],N=v[1],S=Object(n.useState)(0),L=Object(d.a)(S,2),_=L[0],k=L[1],P=Object(n.useState)(""),U=Object(d.a)(P,2),C=U[0],R=U[1];return s||!1===r?Object(j.jsx)(l.a,{to:"/"}):Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(O,{name:"Aslam khan"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"text-center py-md-3",children:[Object(j.jsx)("h3",{className:"display-4",children:"Add Product"}),Object(j.jsx)("p",{children:"Add product detail and hit submit to save it."})]}),Object(j.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault();var c={id:e.products.length,name:b,detail:x,price:y,quantity:_,imgURL:C};e.addProduct(c),i(!0)}(t)},className:"add--product__form",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Product Title"}),Object(j.jsx)("input",{type:"text",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("textarea",{onChange:function(e){return g(e.target.value)},rows:4})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Price"}),Object(j.jsx)("input",{type:"text",onChange:function(e){return N(e.target.value)}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Quantity"}),Object(j.jsx)("input",{type:"text",onChange:function(e){return k(e.target.value)}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Image"}),Object(j.jsx)("input",{type:"file",onChange:function(e){return function(e){var t=e.target.files[0],c=new FileReader;c.readAsDataURL(t),c.onloadend=function(e){R(c.result)}}(e)}})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"Add product"})})]})]})]})}));var x=Object(o.b)((function(e){return{user:e.user}}),null)((function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{path:"/build/",element:Object(j.jsx)(h,{})}),Object(j.jsx)(l.b,{path:"/build/login",element:Object(j.jsx)(u,{})}),Object(j.jsx)(l.b,{path:"/build/add-product",element:Object(j.jsx)(p,{})}),Object(j.jsx)(l.b,{path:"/build/edit-product/:id",element:Object(j.jsx)(m,{})}),Object(j.jsx)(l.b,{path:"*",element:Object(j.jsx)(b,{})})]})})})),g=c(13),f={user:{name:"Aslam",email:"khanaslam439@gmail.com",isLogged:!1},products:[{id:1,name:"Fjallraven - Foldsack No. 1 Backpack, Fits 10 Laptops",detail:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",price:109.95,quantity:30,imgURL:""},{id:2,name:"Opna Women's Short Sleeve Moisture",detail:"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",price:229.95,quantity:22,imgURL:""},{id:3,name:"DANVOUY Womens T Shirt Casual Cotton Short",detail:"95% Cotton,5% Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",price:322.95,quantity:14,imgURL:""},{id:4,name:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",price:109.95,quantity:30,imgURL:""}]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,c=Object(g.a)({},e);switch(t.type){case"USER_LOGIN":c.user.isLogged=!0;break;case"USER_LOGOUT":c.user.isLogged=!1;break;case"ADD_PRODUCT":c.products.push(t.payload.data);break;case"EDIT_PRODUCT":c.products.filter((function(e){if(e.id===t.payload.id){var c=t.payload.product;e.name=c.name,e.detail=c.detail,e.price=c.price,e.quantity=c.quantity,e.imgURL=c.imgURL}return!0}));break;case"GET_PRODUCT":console.log("..all product sent");break;case"DELETE_PRODUCT":c.products.splice(t.id-1,1),console.log(c.products);break;default:console.log("Everything is fine")}return c},y=c(12),N=Object(y.a)(v);i.a.render(Object(j.jsx)(o.a,{store:N,children:Object(j.jsx)(x,{})}),document.getElementById("ecom-root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.8be1a37a.chunk.js.map
