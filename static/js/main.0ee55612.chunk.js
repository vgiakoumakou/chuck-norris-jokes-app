(this["webpackJsonpchuck-norris-jokes-app"]=this["webpackJsonpchuck-norris-jokes-app"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),r=n.n(s),a=n(18),i=n.n(a),o=n(8),l=n(11),u=n(13),d=n(29),j=n(14),O=n(2),b="ASYNC_FETCH_CATEGORIES_REQUEST",h="ASYNC_FETCH_CATEGORIES_SUCCESS",k="ASYNC_FETCH_CATEGORIES_ERROR",f="ASYNC_FETCH_JOKES_REQUEST",_="ASYNC_FETCH_JOKES_SUCCESS",g="ASYNC_FETCH_JOKES_ERROR",v="SELECT_CATEGORY",m="DESELECT_CATEGORY",x="CHANGE_SEARCH_TERM",C="SELECT_JOKE",N="ADD_LIKE",S="ADD_DISLIKE",J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e,t){var n=e.categories[0]?e.categories[0]:"uncategorized";return{id:e.id,category:n,value:e.value,index:t,likes:0,dislikes:0}}));return t},E={categories:[],jokes:[],isLoadingCategories:!1,isLoadingJokes:!1,selectedCategory:"",selectedJokeIndex:null,searchTerm:""};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(O.a)(Object(O.a)({},e),{},{isLoadingCategories:!0});case h:return Object(O.a)(Object(O.a)({},e),{},{categories:t.categories,isLoadingCategories:!1});case k:return Object(O.a)(Object(O.a)({},e),{},{error:t.error,isLoadingCategories:!1});case f:return Object(O.a)(Object(O.a)({},e),{},{isLoadingJokes:!0});case _:return Object(O.a)(Object(O.a)({},e),{},{jokes:J(t.jokes),isLoadingJokes:!1});case g:return Object(O.a)(Object(O.a)({},e),{},{error:t.error,isLoadingJokes:!1});case v:return Object(O.a)(Object(O.a)({},e),{},{selectedCategory:t.selectedCategory});case m:return Object(O.a)(Object(O.a)({},e),{},{selectedCategory:""});case x:return Object(O.a)(Object(O.a)({},e),{},{searchTerm:t.searchTerm});case C:return Object(O.a)(Object(O.a)({},e),{},{selectedJokeIndex:t.index});case N:var n=Object(j.a)(e.jokes);return n[t.index]=Object(O.a)(Object(O.a)({},n[t.index]),{},{likes:n[t.index].likes+1}),Object(O.a)(Object(O.a)({},e),{},{jokes:n});case S:var c=Object(j.a)(e.jokes);return c[t.index]=Object(O.a)(Object(O.a)({},c[t.index]),{},{dislikes:c[t.index].dislikes+1}),Object(O.a)(Object(O.a)({},e),{},{jokes:c});default:return e}},T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,y=Object(u.d)(p,T(Object(u.a)(d.a))),L=n(4),B=n(9);function I(e){var t=Object(s.useState)(e),n=Object(B.a)(t,2),c=n[0],r=n[1],a=Object(s.useRef)(null),i=function(e){"Escape"===e.key&&r(!1)},o=function(e){a.current&&!a.current.contains(e.target)&&r(!1)};return Object(s.useEffect)((function(){return document.addEventListener("keydown",i,!0),document.addEventListener("click",o,!0),function(){document.removeEventListener("keydown",i,!0),document.removeEventListener("click",o,!0)}})),{ref:a,isComponentNotFocusedOut:c,setIsComponentNotFocusedOut:r}}var R=n.p+"static/media/vehiculum-logo.9b1f2342.svg",w=n.p+"static/media/mobile-menu-icon.b6db1f82.svg";n(39);var A=function(){var e=Object(s.useState)(!1),t=Object(B.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(s.useState)(!1),t=Object(B.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){function e(){c(window.innerWidth<768)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),i=I(!0),o=i.ref,l=i.isComponentNotFocusedOut,u=i.setIsComponentNotFocusedOut;return Object(s.useEffect)((function(){a&&r(!1)}),[a]),Object(s.useEffect)((function(){l||r(!1)}),[l]),Object(c.jsx)("div",{className:"NavBar",children:Object(c.jsxs)("div",{className:"NavBar__Inner",children:[Object(c.jsx)("img",{src:R,alt:"Vehiculum Logo"}),!a&&Object(c.jsxs)("nav",{className:"NavBar__Nav",children:[Object(c.jsx)("div",{className:"NavBar__NavItem",children:Object(c.jsx)("a",{href:"#",className:"NavBar__Link",children:"SO FUNKTIONIERT\u2019S"})}),Object(c.jsx)("div",{className:"NavBar__NavItem",children:Object(c.jsx)("a",{href:"#",className:"NavBar__Link",children:"SONDERANGEBOTE"})}),Object(c.jsxs)("div",{className:"NavBar__NavItem NavBar__NavItem--HasSubMenu",onClick:function(e){!function(){var e=!n;r(e),e&&u(!0)}()},children:[Object(c.jsx)("a",{href:"#",className:"NavBar__Link NavBar__Link--with-icons",children:"MEIN BEREICH"}),n&&l&&Object(c.jsxs)("div",{className:"NavBar__SubLinks",ref:o,children:[Object(c.jsx)("a",{href:"#",className:"NavBar__SubLink",children:"My published jokes"}),Object(c.jsx)("a",{href:"#",className:"NavBar__SubLink",children:"My saved jokes"}),Object(c.jsx)("a",{href:"#",className:"NavBar__SubLink",children:"Account Information"}),Object(c.jsx)("a",{href:"#",className:"NavBar__SubLink",children:"Publish new joke"})]})]})]}),a&&Object(c.jsx)("img",{src:w,alt:"Menu",className:"NavBar__MobileMenuIcon"})]})})};n(40);var F=Object(L.f)((function(e){var t=e.onChangeTerm,n=e.location,r=e.history,a=e.onSelectJoke,i=e.jokes,o=e.searchTerm,l=Object(s.useState)(!1),u=Object(B.a)(l,2),d=u[0],j=u[1],O=I(!0),b=O.ref,h=O.isComponentNotFocusedOut,k=O.setIsComponentNotFocusedOut;return Object(s.useEffect)((function(){k(!0)}),[o]),Object(c.jsxs)("div",{className:"SearchBar",children:[Object(c.jsx)("h1",{className:"SearchBar__Title",children:"The Joke Bible"}),Object(c.jsx)("h2",{className:"SearchBar__SubTitle",children:"Daily Laughs for you and yours"}),Object(c.jsxs)("div",{className:"SearchBar__InputWrapper",ref:b,children:[Object(c.jsx)("input",{className:"SearchBar__Input",placeholder:"How can we make you laugh today?",value:o,onChange:function(e){t(e.target.value),"/"!==n.pathname&&j(!0)}}),d&&i.length>0&&(h?Object(c.jsx)("div",{className:"SearchBar__Suggestions",ref:b,children:Object(c.jsx)("div",{className:"SearchBar__SuggestionsInner",children:i.map((function(e){return Object(c.jsx)("div",{className:"SearchBar__Suggestion",onClick:function(){a(e.index),r.push("/".concat(e.id))},children:e.value},e.index)}))})}):null)]})]})})),D=n(17),M=n.n(D),H=n(26),K="https://api.chucknorris.io/jokes",G=function(){return{type:m}},U=function(e){return{type:x,searchTerm:e}},V=function(e){return{type:C,index:e}},Y=function(e){var t=e.jokes;return e.selectedCategory.length>0&&(t=t.filter((function(t){return t.category===e.selectedCategory}))),e.searchTerm.length>0&&(t=t.filter((function(t){return t.value.search(new RegExp(e.searchTerm,"i"))>0}))),t},P=function(e){return e.jokes[e.selectedJokeIndex]||{}},W=function(e){var t=e.jokes;return(t=(t=t.filter((function(e){return e.likes>=e.dislikes}))).sort((function(e,t){return t.likes-e.likes}))).slice(0,10)},z=function(e){return Y(e).map((function(e){return e.index}))},X=Object(o.b)((function(e){return{jokes:Y(e),searchTerm:e.searchTerm}}),(function(e){return{onChangeTerm:function(t){return e(U(t))},onSelectJoke:function(t){return e(V(t))}}}))(F),Q=n.p+"static/media/arrow-right-beige-icon.ed622f8d.svg";n(43);var q=function(){return Object(c.jsxs)("div",{className:"Footer",children:[Object(c.jsx)("h6",{className:"Footer__Title",children:"GOT JOKES? GET PAID FOR SUBMITTING!"}),Object(c.jsxs)("a",{link:"#",className:"Footer__Link",children:[Object(c.jsx)("span",{className:"Footer__LinkText",children:"SUBMIT JOKE"}),Object(c.jsx)("img",{src:Q,alt:"Arrow Right"})]})]})},Z={text:"CHESTNUT",class:"chestnut"},$={text:"NEW IN TOWN",class:"new-in-town"},ee={text:"TRENDING",class:"trending"},te={text:"HALL OF FAME",class:"hall-of-fame"},ne=n.p+"static/media/arrow-left.6a4a2c2d.svg";n(44);var ce=Object(L.f)((function(e){var t=e.joke,n=e.history,s=e.onAddLike,r=e.onAddDislike,a=e.onSelectJoke,i=e.topJokes,o=e.filteredJokesIndexes,l=e.onDeselectCategory,u=e.onDeselectSearchTerm;return Object(c.jsxs)("div",{className:"SingleJokeContent",children:[Object(c.jsx)("div",{className:"SingleJokeContent__BackBtn",onClick:function(){1===o.length&&(l(),u()),n.push("/")},children:Object(c.jsx)("img",{className:"SingleJokeContent__BackBtn--Img",src:ne,alt:"Back Icon"})}),Object(c.jsxs)("div",{className:"SingleJokeContent__Main",children:[Object(c.jsxs)("div",{className:"SingleJokeContent__JokeSection",children:[function(){var e=function(e){var t=e.likes;return e.dislikes>t?Z:t<=50?$:t>50&&t<=100?ee:te}(t);return Object(c.jsxs)("div",{className:"SingleJokeContent__JokeCard",children:[Object(c.jsxs)("div",{className:"SingleJokeContent__JokeCardTop",children:[Object(c.jsx)("div",{className:"SingleJokeContent__Category",children:t.category}),Object(c.jsx)("div",{className:"SingleJokeContent__Label SingleJokeContent__Label--".concat(e.class),children:Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:e.text})})})]}),Object(c.jsx)("div",{className:"SingleJokeContent__Value",children:t.value})]})}(),Object(c.jsxs)("div",{className:"SingleJokeContent__JokeActions",children:[Object(c.jsxs)("div",{className:"SingleJokeContent__ReactionBtns",children:[Object(c.jsxs)("div",{className:"SingleJokeContent__ReactionBtn--Container",children:[Object(c.jsx)("div",{className:"SingleJokeContent__ReactionBtn SingleJokeContent__ReactionBtn--Like",onClick:function(){return s(t.index)}}),Object(c.jsx)("span",{className:"SingleJokeContent__ReactionBtn--LikeCounter",children:t.likes})]}),Object(c.jsxs)("div",{className:"SingleJokeContent__ReactionBtn--Container",children:[Object(c.jsx)("div",{className:"SingleJokeContent__ReactionBtn SingleJokeContent__ReactionBtn--Dislike",onClick:function(){r(t.index)}}),Object(c.jsx)("span",{className:"SingleJokeContent__ReactionBtn--DislikeCounter",children:t.dislikes})]})]}),function(){var e=o.indexOf(t.index),n=0===e,s=e===o.length-1,r=0===o.length,i=!n&&!r,l=!s&&!r;return Object(c.jsxs)("div",{className:"SingleJokeContent__JokeNav",children:[i&&Object(c.jsx)("div",{className:"SingleJokeContent__NavBtn SingleJokeContent__PrevBtn",onClick:function(){a(o[e-1])},children:"PREV. JOKE"}),l&&Object(c.jsx)("div",{className:"SingleJokeContent__NavBtn SingleJokeContent__NextBtn",onClick:function(){return a(o[e+1])},children:"NEXT JOKE"})]})}()]})]}),Object(c.jsxs)("div",{className:"SingleJokeContent__Chart",children:[Object(c.jsx)("h6",{className:"SingleJokeContent__ChartTitle",children:"THE TOP 10 JOKES THIS WEEK"}),i.map((function(e){return Object(c.jsx)("div",{className:"SingleJokeContent__ChartJoke",onClick:function(){return a(e.index)},children:e.value},e.index)}))]})]})]})})),se=Object(o.b)((function(e){return{joke:P(e),filteredJokesIndexes:z(e),topJokes:W(e)}}),(function(e){return{onAddLike:function(t){return e(function(e){return{type:N,index:e}}(t))},onAddDislike:function(t){return e(function(e){return{type:S,index:e}}(t))},onSelectJoke:function(t){return e(V(t))},onDeselectCategory:function(){return e(G())},onDeselectSearchTerm:function(){return e(U(""))}}}))(ce);n(45);var re=function(e){var t=e.text,n=void 0===t?"More":t,s=e.onClick,r=e.className;return Object(c.jsxs)("div",{className:"".concat(r," SharedElement SharedElement__ViewMoreButton"),onClick:s,children:["View ",n]})};n(46);var ae=function(e){var t=e.categories,n=e.isLoading,r=e.isLoadingJokes,a=e.onFetchCategories,i=e.onSelectCategory,o=e.onDeselectCategory,l=e.selectedCategory,u=Object(s.useState)(!1),d=Object(B.a)(u,2),j=d[0],O=d[1];Object(s.useEffect)((function(){a()}),[]);var b=j?t:t.slice(0,7);if(n||r)return null;var h=function(e){var t=e===l,n=t?"Selected":"";return Object(c.jsx)("div",{className:"Categories__Category ".concat(n),onClick:function(){t?o():i(e)},children:e},e)};return Object(c.jsxs)("div",{className:"Categories",children:[b.map((function(e){return h(e)})),j&&h("uncategorized"),!j&&Object(c.jsx)(re,{text:"All",className:"Categories__Category",onClick:function(){return O(!0)}})]})},ie=Object(o.b)((function(e){return{categories:e.categories,isLoading:e.isLoadingCategories,isLoadingJokes:e.isLoadingJokes,selectedCategory:e.selectedCategory}}),(function(e){return{onFetchCategories:function(){return e(function(){var e=Object(H.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:b}),e.next=3,fetch("".concat(K,"/categories")).then((function(e){return e.json()})).then((function(e){return t({type:h,categories:e})}),(function(e){alert(e),t({type:k,error:e})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},onSelectCategory:function(t){return e(function(e){return{type:v,selectedCategory:e}}(t))},onDeselectCategory:function(){return e(G())}}}))(ae);n(47);var oe=function(){return Object(c.jsx)("div",{className:"Loader"})},le=re,ue=n.p+"static/media/thunder-icon.541f9db2.svg";n(48);var de=Object(L.f)((function(e){var t=e.jokes,n=e.isLoading,r=e.onFetchJokes,a=e.onSelectJoke,i=e.history,o=Object(s.useState)([]),l=Object(B.a)(o,2),u=l[0],d=l[1],O=u<t;return Object(s.useEffect)((function(){d(t.slice(0,6)),1===t.length&&(a(t[0].index),i.push("/".concat(t[0].id)))}),[t]),Object(s.useEffect)((function(){null===e.selectedJokeIndex&&r()}),[]),n?Object(c.jsx)(oe,{}):0===t.length?Object(c.jsx)("div",{className:"Joke__NoJokesMsg",children:"We couldn't find any jokes..."}):Object(c.jsxs)("div",{className:"Jokes",children:[Object(c.jsx)("div",{className:"Jokes__List",children:u.map((function(e){return function(e){return Object(c.jsxs)("div",{className:"Jokes__JokeCard",children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("h6",{className:"Jokes__JokeCardTitle",children:[Object(c.jsx)("img",{className:"Jokes__JokeCardIcon",src:ue,alt:"Thunder"}),e.category]}),Object(c.jsx)("p",{className:"Jokes__JokeCardValue",children:e.value})]}),Object(c.jsxs)("div",{className:"Jokes__JokeCardLink",onClick:function(){a(e.index),i.push("/".concat(e.id))},children:[Object(c.jsx)("span",{className:"Jokes__JokeCardLink__Text",children:"SEE STATS"}),Object(c.jsx)("img",{src:Q,alt:"Arrow Right"})]})]},e.id)}(e)}))}),O&&Object(c.jsx)("div",{className:"Jokes__ViewButtonContainer",children:Object(c.jsx)(le,{className:"Jokes__ViewButton",onClick:function(){return function(){var e=[].concat(Object(j.a)(u),Object(j.a)(t.slice(u.length,u.length+6)));d(e)}()}})})]})})),je=Object(o.b)((function(e){return{jokes:Y(e),isLoading:e.isLoadingJokes,selectedJokeIndex:e.selectedJokeIndex}}),(function(e){return{onFetchJokes:function(){return e(function(){var e=Object(H.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:f}),e.next=3,fetch("".concat(K,"/search?query=chuck")).then((function(e){return e.json()})).then((function(e){return t((n=e.result,{type:_,jokes:n}));var n}),(function(e){alert(e),t({type:g,error:e})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},onSelectJoke:function(t){return e(V(t))}}}))(de);n(49);var Oe=function(e){var t=e.selectedCategory,n=e.isLoading;return 0===t.length||n?null:Object(c.jsx)("div",{className:"SelectedCategory",children:Object(c.jsx)("div",{className:"SelectedCategory__Chip",children:t})})},be=Object(o.b)((function(e){return{selectedCategory:e.selectedCategory,isLoading:e.isLoadingJokes}}),null)(Oe);n(50);var he=function(){return Object(c.jsxs)("div",{className:"JokesContent",children:[Object(c.jsx)(ie,{}),Object(c.jsx)(be,{}),Object(c.jsx)(je,{})]})};n(51);var ke=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(A,{}),Object(c.jsx)(X,{}),Object(c.jsxs)(L.c,{children:[Object(c.jsx)(L.a,{path:"/:id",component:se}),Object(c.jsx)(L.a,{path:"/",component:he})]}),Object(c.jsx)(q,{})]})},fe=(n(52),document.getElementById("root"));i.a.render(Object(c.jsx)(o.a,{store:y,children:Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(ke,{})})})}),fe)}},[[53,1,2]]]);
//# sourceMappingURL=main.0ee55612.chunk.js.map