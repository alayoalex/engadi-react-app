(this["webpackJsonpengadi-react-app"]=this["webpackJsonpengadi-react-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(8),i=n.n(a),l=(n(15),n(2)),o=n(3),d=n(5),u=n(4),j=function(e){return e.children},h=(n(16),n.p+"static/media/burger-logo.ec69c7f6.png"),b=(n(17),function(e){return Object(c.jsx)("div",{className:"Logo",style:{height:e.height},children:Object(c.jsx)("img",{src:h,alt:"MyBurger"})})}),p=(n(18),n(19),function(e){return Object(c.jsx)("li",{className:"NavigationItem",children:Object(c.jsx)("a",{href:e.link,className:e.active?"active":null,children:e.children})})}),O=function(e){return Object(c.jsxs)("ul",{className:"NavigationItems",children:[Object(c.jsx)(p,{link:"/",active:!0,children:"BurguerBuilder"}),Object(c.jsx)(p,{link:"/",children:"Checkout"})]})},f=(n(20),n(21),function(e){return Object(c.jsxs)("div",{className:"DrawerToggle",onClick:e.clicked,children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})}),x=function(e){return Object(c.jsxs)("header",{className:"Toolbar",children:[Object(c.jsx)(f,{clicked:e.drawerToggleClicked}),Object(c.jsx)("div",{className:"LogoToolbar",children:Object(c.jsx)(b,{})}),Object(c.jsx)("nav",{className:"DesktopOnly",children:Object(c.jsx)(O,{})})]})},g=(n(22),n(23),function(e){return e.show?Object(c.jsx)("div",{className:"Backdrop",onClick:e.clicked}):null}),v=function(e){var t=["SideDrawer","Close"];return e.open&&(t=["SideDrawer","Open"]),Object(c.jsxs)(j,{children:[Object(c.jsx)(g,{show:e.open,clicked:e.closed}),Object(c.jsxs)("div",{className:t.join(" "),children:[Object(c.jsx)("div",{className:"LogoSidedrawer",children:Object(c.jsx)(b,{})}),Object(c.jsx)("nav",{children:Object(c.jsx)(O,{})})]})]})},m=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(j,{children:[Object(c.jsx)(x,{drawerToggleClicked:this.sideDrawerToggleHandler}),Object(c.jsx)(v,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),Object(c.jsx)("main",{className:"Content",children:this.props.children})]})}}]),n}(r.Component),C=n(6),k=n(9),y=(n(24),n(25),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(c.jsx)("div",{className:"BreadBottom"});break;case"bread-top":e=Object(c.jsxs)("div",{className:"BreadTop",children:[Object(c.jsx)("div",{className:"Seeds1"}),Object(c.jsx)("div",{className:"Seeds2"})]});break;case"meat":e=Object(c.jsx)("div",{className:"Meat"});break;case"cheese":e=Object(c.jsx)("div",{className:"Cheese"});break;case"bacon":e=Object(c.jsx)("div",{className:"Bacon"});break;case"salad":e=Object(c.jsx)("div",{className:"Salad"});break;default:e=null}return e}}]),n}(r.Component)),w=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(k.a)(Array(e.ingredients[t])).map((function(e,n){return Object(c.jsx)(y,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(c.jsx)("p",{children:"Pleasse start adding ingredients!"})),Object(c.jsxs)("div",{className:"Burger",children:[Object(c.jsx)(y,{type:"bread-top"}),t,Object(c.jsx)(y,{type:"bread-bottom"})]})},N=(n(26),n(27),function(e){return Object(c.jsxs)("div",{className:"BuildControl",children:[Object(c.jsx)("div",{className:"BuildControl",children:e.label}),Object(c.jsx)("button",{className:"Less",onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(c.jsx)("button",{className:"More",onClick:e.added,children:"More"})]})}),S=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],D=function(e){return Object(c.jsxs)("div",{className:"BuildControls",children:[Object(c.jsxs)("p",{children:["Current Price: ",Object(c.jsx)("strong",{children:e.price.toFixed(2)})]}),S.map((function(t){return Object(c.jsx)(N,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(c.jsx)("button",{className:"OrderButton",disabled:!e.purchasable,onClick:e.ordered,children:"ORDER NOW"})]})},B=(n(28),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show}},{key:"componentWillUpdate",value:function(){console.log("[Modal] will update")}},{key:"render",value:function(){return Object(c.jsxs)(j,{children:[Object(c.jsx)(g,{show:this.props.show,clicked:this.props.modalClosed}),Object(c.jsx)("div",{className:"Modal",style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(r.Component)),T=(n(29),function(e){var t=["Button"];return"Danger"===e.btnType?t.push("Danger"):t.push("Success"),t.join(" ")}),P=function(e){return Object(c.jsx)("button",{className:T(e),onClick:e.clicked,children:e.children})},H=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentWillUpdate",value:function(){console.log("[OrderSummary ] will update")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{style:{textTransform:"capitalize"},children:t}),": ",e.props.ingredients[t]]},t)}));return Object(c.jsxs)(j,{children:[Object(c.jsx)("h3",{children:"Your Order"}),Object(c.jsx)("p",{children:"A delicious burger with the following ingredients:"}),Object(c.jsx)("ul",{children:t}),Object(c.jsx)("p",{children:Object(c.jsxs)("strong",{children:["Total Price: ",this.props.price.toFixed(2)]})}),Object(c.jsx)("p",{children:"Continue to Checkout"}),Object(c.jsx)(P,{btnType:"Danger",clicked:this.props.purchaseCancelled,children:"CANCEL"}),Object(c.jsx)(P,{btnType:"Success",clicked:this.props.purchaseContinued,children:"CONTINUE"})]})}}]),n}(r.Component),I={salad:.5,cheese:.4,meat:1.3,bacon:.7},L=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},e.addIngredientHandler=function(t){var n=e.state.ingredients[t]+1,c=Object(C.a)({},e.state.ingredients);c[t]=n;var r=I[t],s=e.state.totalPrice+r;e.setState({totalPrice:s,ingredients:c}),e.updatePurchaseState(c)},e.removeIngredientHandler=function(t){var n=e.state.ingredients[t];if(!(n<=0)){var c=n-1,r=Object(C.a)({},e.state.ingredients);r[t]=c;var s=I[t],a=e.state.totalPrice-s;e.setState({totalPrice:a,ingredients:r}),e.updatePurchaseState(r)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinue=function(){alert("You continue!")},e}return Object(o.a)(n,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(C.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return Object(c.jsxs)(j,{children:[Object(c.jsx)(B,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:Object(c.jsx)(H,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinue})}),Object(c.jsx)(w,{ingredients:this.state.ingredients}),Object(c.jsx)(D,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice})]})}}]),n}(r.Component),M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(m,{children:Object(c.jsx)(L,{})})})}}]),n}(r.Component),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),A()}],[[30,1,2]]]);
//# sourceMappingURL=main.c082f3e1.chunk.js.map