(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{192:function(e,a,t){"use strict";t.r(a),t.d(a,"Info",function(){return c});var n=t(0),l=t.n(n),c=function(){return l.a.createElement("div",{className:"home__info"},l.a.createElement("h1",{className:"home__info__title"},"Hello!"),l.a.createElement("h2",{className:"home__info__subtitle"},"I'm a fullstack developer in Lynchburg, Va"))};a.default=c},193:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(192),r=function(){return l.a.createElement("div",{className:"home__header__hero"})};t.d(a,"HomeHeader",function(){return s});var s=function(){return l.a.createElement("section",{className:"home__header"},l.a.createElement(r,null),l.a.createElement(c.default,null))};a.default=s},197:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(202),r=t(211),s=t(66),i=t.n(s);t(204),t(9).default.enqueue,l.a.createContext({});var o=t(213),d=t.n(o),m=t(214),u=t.n(m),p=t(215),E=t.n(p),h=function(){var e=r.data.site.siteMetadata.title;return l.a.createElement("header",{className:"header"},l.a.createElement(c.Helmet,{title:e,meta:[{name:"charSet",content:"utf-8"}],link:[{rel:"icon",type:"image/png",sizes:"16x16",href:""+d.a},{rel:"icon",type:"image/png",sizes:"32x32",href:""+u.a},{rel:"shortcut icon",type:"image/png",href:""+E.a}]}),l.a.createElement("nav",{role:"navigation",className:"header__nav"},l.a.createElement(i.a,{className:"header__link",activeClassName:"header__link__active",to:"/index/Index"},"Home")))},f=t(216),A=function(){var e=f.data.site.siteMetadata.author;return l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"Created by ",e,", © ",(new Date).getFullYear()))},b=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content"},l.a.createElement(h,null),e.children),l.a.createElement(A,null))},g=function(){return l.a.createElement("section",{className:"home__skills"},l.a.createElement("div",{className:"home__skills__card"},l.a.createElement("p",null,"Html"),l.a.createElement("p",null,"Css"),l.a.createElement("p",null,"Sass"),l.a.createElement("p",null,"Responsive Design")),l.a.createElement("div",{className:"home__skills__card"},l.a.createElement("p",null,"JS"),l.a.createElement("p",null,"Graphql"),l.a.createElement("p",null,"React"),l.a.createElement("p",null,"SSR(Gatsby)"),l.a.createElement("p",null,"Node")),l.a.createElement("div",{className:"home__skills__card"},l.a.createElement("p",null,"NoSQL(MongoDB, Firebase)"),l.a.createElement("p",null,"SQL(PostgreSQL)"),l.a.createElement("p",null,"Webpack"),l.a.createElement("p",null,"Git")))},_=t(193),w=t(198),v=t(199),C=t.n(v),N=function(){var e=w.data.allImageSharp.edges,a=[];return e.forEach(function(e){a.push(e.node)}),console.log(a),l.a.createElement("section",{className:"projects"},l.a.createElement("article",{className:"projects__card"},l.a.createElement("h3",{className:"projects__card__title"},"WallWander"),l.a.createElement(C.a,{className:"projects__card__img",fluid:a[0].fluid,alt:"Wallwander project Image"}),l.a.createElement("ul",{className:"projects__card__stack"},l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Redux"),l.a.createElement("li",null,"PostgreSQL"),l.a.createElement("li",null,"Node"),l.a.createElement("li",null,"Typescript(backend only)")),l.a.createElement("p",{className:"projects__card__description"},"A wallpaper sharing app inspired by https://wallhaven.cc/. A React/Redux App powered by an Express api written in Typescript and using Postgres."),l.a.createElement("div",{className:"projects__card__link"},l.a.createElement("a",{href:"https://www.mattcyates.com"},"View Site"),l.a.createElement("a",{href:"https://github.com/M-C-Yates/WallWander-frontend"},"Frontend Code"),l.a.createElement("a",{href:"https://github.com/M-C-Yates/WallWander-backend"},"Backend Code"))),l.a.createElement("article",{className:"projects__card"},l.a.createElement("h3",{className:"projects__card__title"},"BnB"),l.a.createElement(C.a,{className:"projects__card__img",fluid:a[1].fluid,alt:"Bnb project Image"}),l.a.createElement("ul",{className:"projects__card__stack"},l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Graphql(Apollo Client, Graphql-Yoga)"),l.a.createElement("li",null,"PostgreSQL + Prisma"),l.a.createElement("li",null,"Node"),l.a.createElement("li",null,"Typescript(backend only)")),l.a.createElement("p",{className:"projects__card__description"},"A fullstack AirBnB clone implemented with React & Apollo-Client on the frontend, and a graphql server built with graphql-yoga on the backend with all data stored in a postgres container managed by Prisma."),l.a.createElement("div",{className:"projects__card__link"},l.a.createElement("a",{href:""},"View Site"),l.a.createElement("a",{href:"https://github.com/M-C-Yates/bnb-frontend"},"Frontend Code"),l.a.createElement("a",{href:"https://github.com/M-C-Yates/bnb-backend"},"Backend Code"))))};a.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null,l.a.createElement(c.Helmet,null),l.a.createElement("main",{className:"home"},l.a.createElement(_.default,null),l.a.createElement(g,null),l.a.createElement(N,null))))}},198:function(e){e.exports={data:{allImageSharp:{edges:[{node:{fluid:{srcSet:"/static/0ac6d21040dbafb65371e86ad1e940b0/d6556/Wallwander.jpg 200w,\n/static/0ac6d21040dbafb65371e86ad1e940b0/68393/Wallwander.jpg 400w,\n/static/0ac6d21040dbafb65371e86ad1e940b0/bf963/Wallwander.jpg 800w,\n/static/0ac6d21040dbafb65371e86ad1e940b0/b0758/Wallwander.jpg 1200w,\n/static/0ac6d21040dbafb65371e86ad1e940b0/e4410/Wallwander.jpg 1600w,\n/static/0ac6d21040dbafb65371e86ad1e940b0/2fff7/Wallwander.jpg 1784w",sizes:"(max-width: 800px) 100vw, 800px",aspectRatio:1.590017825311943}}},{node:{fluid:{srcSet:"/static/2e479c07accdc7749eb833802e3528f8/d6556/bnb-screenshot.jpg 200w,\n/static/2e479c07accdc7749eb833802e3528f8/68393/bnb-screenshot.jpg 400w,\n/static/2e479c07accdc7749eb833802e3528f8/bf963/bnb-screenshot.jpg 800w,\n/static/2e479c07accdc7749eb833802e3528f8/b0758/bnb-screenshot.jpg 1200w,\n/static/2e479c07accdc7749eb833802e3528f8/e4410/bnb-screenshot.jpg 1600w,\n/static/2e479c07accdc7749eb833802e3528f8/fb319/bnb-screenshot.jpg 3823w",sizes:"(max-width: 800px) 100vw, 800px",aspectRatio:1.245682632779407}}}]}}}},204:function(e,a,t){var n;e.exports=(n=t(212))&&n.default||n},211:function(e){e.exports={data:{site:{siteMetadata:{title:"portfolio"}}}}},212:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),l=t.n(n),c=t(126);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null}},213:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQklEQVQ4T8WTMauBURjHf+/CRJSdMogMxIewmLxKJjtKNulOXFKSySCjMhiUxaKsFpEMrErhA+BmeG/Huby5unXl1j3TOef5n9/zP89zjqKq2huQVxSMPDE0jQ/gXVFV7fTs4WseAVGiUU17IvGD9G8Afj8sl3A83ifw+WC1Ao8H5nM4n2XcZAK7HRYLuDioVmE2g3ZbBzidUCpBNguBABiN0O3KeDIJkwmMx18AITwcoNmE/V6K8nkwGOTedgvFItRqYLVCJALlstRdHIhFqwXhMNTrEAxK22Yz9Hqw2YDbDaEQWCzQaMBu9w2Qy0E6DcMhxONQqUAioQOEPJORBzsd/ao3BwJgs0GhAIMB9PuQSt0DYjEJGI1+AIhtr1dWXlT81wDRxun08Tm5XLBe6+11OOT8ev9bEf/3Jb78mV79zp/A1J13eHZcVQAAAABJRU5ErkJggg=="},214:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACnUlEQVRYR+2XzSvlYRTHP4+3hcJCaUYsRCEvIRZYiSwkpdyFWGChNAvkfeYiYuQtIdnYkLK4yr9AZCFiobyVl2RmhGykUPObTk+XuXPvdW/T3Plt7tnec57nc77ne37dR4GhLBY+GwafgA9KofBhGAYG8EMpZmw2viqLxfgCDPjwzveOtqqKCuObUnw0A8Aw+C4AP30tu7vmZBwyApmJaeEH8CvwqkBZGSQlwcoKnJx49mRpKaSk6PzjY6ishJgYWFiA62vX9dnZUFgI6+uwualzXgEaGyE/H05PoasL3tuN6GgYH4fAQBgbg60tSEyE/n7Y24OhIWeA0FCYnNTnNjXB46MLgLw8UApmZmBtzb0Kra2Qk6Nz7QCS3dAABQUwPAw7O471NTVQUgJTU7Cx8fabgwLp6XBzAxERmvLpyRlCxtTXB/v7kJbmCBAWprt8eICWFnh50fUymtFRODjQKv0eDgAZGTqxtxdsNlhedgYYHITISJibg/Z2RwDJLiqC+npYWtL+kOjuhuRkaGuDqysPALW1OlG6E1/c378V5OZCczPMzsLdHVitzgAyloEBiI3VuQkJWg2BEag/w0kBARCTyWzFrXKZRFAQTEzosUjnqamuASQ3Lk4bcXVVdy61AvP87CWApNXVQXExdHbC+bk2kBhJDt7dBfGLKwXsV9jrAwJgZAS2t12b2qUCkiqGEsfKWsrKTU/DxcWbiTwBhIdrn5ydQUeH+41yCyAl8nGqrtYrlZWlvw8CJOEJICQEFhfh8BB6ev4SIDhYzz0qSvtBVLDHfwGQyzIzobxcj+P21gQAd+L9cwWky/h4vX7ehKxaVZX+YB0dOVfI6skGXV7C/LwXHvDmUl/k+P+Q+BUw/2Fi+tPM9Mep2c/zX5jcXJyYDlmYAAAAAElFTkSuQmCC"},215:function(e,a,t){e.exports=t.p+"static/favicon-e96241a9088d8adc4e86a8fcbda9b640.ico"},216:function(e){e.exports={data:{site:{siteMetadata:{author:"Matthew Yates"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-9af13af37a4d15918e1e.js.map