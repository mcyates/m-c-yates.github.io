(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{192:function(e,a,t){"use strict";t.r(a),t.d(a,"Info",function(){return c});var l=t(0),n=t.n(l),c=function(){return n.a.createElement("div",{className:"home__info"},n.a.createElement("h2",null,"Fullstack developer"),n.a.createElement("a",{href:"https://github.com/M-C-Yates"},"Github"))};a.default=c},193:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(192),r=t(198),s=t.n(r),i=function(){return n.a.createElement("div",{className:"home__header__hero",style:{backgroundImage:"url("+s.a+")"}})};t.d(a,"HomeHeader",function(){return o});var o=function(){return n.a.createElement("section",{className:"home__header"},n.a.createElement(i,null),n.a.createElement(c.default,null))};a.default=o},197:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(203),r=t(212),s=t(66),i=t.n(s);t(205),t(9).default.enqueue,n.a.createContext({});var o=t(214),d=t.n(o),m=t(215),u=t.n(m),p=t(216),A=t.n(p),E=function(){var e=r.data.site.siteMetadata.title;return n.a.createElement("header",{className:"header"},n.a.createElement(c.Helmet,{title:e,meta:[{name:"charSet",content:"utf-8"}],link:[{rel:"icon",type:"image/png",sizes:"16x16",href:""+d.a},{rel:"icon",type:"image/png",sizes:"32x32",href:""+u.a},{rel:"shortcut icon",type:"image/png",href:""+A.a}]}),n.a.createElement("nav",{role:"navigation",className:"header__nav"},n.a.createElement(i.a,{className:"header__link",activeClassName:"header__link__active",to:"/index/Index"},"Home"),n.a.createElement("a",{className:"header__link",href:Object(s.withPrefix)("/resume.pdf")},"Resume")))},g=t(217),h=function(){var e=g.data.site.siteMetadata.author;return n.a.createElement("footer",{className:"footer"},n.a.createElement("p",null,"Created by ",e,", © ",(new Date).getFullYear()))},f=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"content"},n.a.createElement(E,null),e.children),n.a.createElement(h,null))},b=function(){return n.a.createElement("section",{className:"home__skills"},n.a.createElement("div",{className:"home__skills__card"},n.a.createElement("p",null,"Html"),n.a.createElement("p",null,"Css"),n.a.createElement("p",null,"Sass"),n.a.createElement("p",null,"Responsive Design")),n.a.createElement("div",{className:"home__skills__card"},n.a.createElement("p",null,"JS"),n.a.createElement("p",null,"Graphql"),n.a.createElement("p",null,"React"),n.a.createElement("p",null,"SSR(Gatsby)"),n.a.createElement("p",null,"Node")),n.a.createElement("div",{className:"home__skills__card"},n.a.createElement("p",null,"NoSQL(MongoDB, Firebase)"),n.a.createElement("p",null,"SQL(PostgreSQL)"),n.a.createElement("p",null,"Webpack"),n.a.createElement("p",null,"Git")))},w=t(193),C=t(199),B=t(200),R=t.n(B),k=function(){var e=C.data.allImageSharp.edges,a=[];return e.forEach(function(e){a.push(e.node)}),console.log(a),n.a.createElement("section",{className:"projects"},n.a.createElement("article",{className:"projects__card"},n.a.createElement(R.a,{className:"projects__card__img",fluid:a[0].fluid,alt:"Wallwander project Image"}),n.a.createElement("div",{className:"projects__card__info"},n.a.createElement("h3",{className:"projects__card__title"},"WallWander"),n.a.createElement("ul",{className:"projects__card__stack"},n.a.createElement("li",null,"React"),n.a.createElement("li",null,"Redux"),n.a.createElement("li",null,"PostgreSQL"),n.a.createElement("li",null,"Node"),n.a.createElement("li",null,"Typescript(backend only)")),n.a.createElement("p",{className:"projects__card__description"},"A wallpaper sharing app inspired by https://wallhaven.cc/. A React/Redux App powered by an Express api written in Typescript and using Postgres."),n.a.createElement("div",{className:"projects__card__link"},n.a.createElement("a",{href:"https://wallwander.net"},"View Site"),n.a.createElement("a",{href:"https://github.com/M-C-Yates/WallWander-frontend"},"Frontend Code"),n.a.createElement("a",{href:"https://github.com/M-C-Yates/WallWander-backend"},"Backend Code")))),n.a.createElement("article",{className:"projects__card"},n.a.createElement(R.a,{className:"projects__card__img",fluid:a[1].fluid,alt:"Bnb project Image"}),n.a.createElement("div",{className:"projects__card__info"},n.a.createElement("h3",{className:"projects__card__title"},"BnB"),n.a.createElement("ul",{className:"projects__card__stack"},n.a.createElement("li",null,"React"),n.a.createElement("li",null,"Graphql(Apollo Client, Graphql-Yoga)"),n.a.createElement("li",null,"PostgreSQL + Prisma"),n.a.createElement("li",null,"Node"),n.a.createElement("li",null,"Typescript(backend only)")),n.a.createElement("p",{className:"projects__card__description"},"A fullstack AirBnB clone implemented with React & Apollo-Client on the frontend, and a graphql server built with graphql-yoga on the backend with all data stored in a postgres container managed by Prisma."),n.a.createElement("div",{className:"projects__card__link"},n.a.createElement("a",{href:"https://github.com/M-C-Yates/bnb-frontend"},"Frontend Code"),n.a.createElement("a",{href:"https://github.com/M-C-Yates/bnb-backend"},"Backend Code")))))};a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,null,n.a.createElement(c.Helmet,null),n.a.createElement("main",{className:"home"},n.a.createElement(w.default,null),n.a.createElement(b,null),n.a.createElement(k,null))))}},198:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAALVBMVEX09PTm5ubn5+fy8vLz8/Pt7e3q6urw8PDr6+vp6env7+/o6Ojx8fHu7u7s7OyuSqpvAAAIlElEQVR4Xu3dT2sb5xrG4ccd/THGLrpHSJEiuzD2png1VZyCyWYMgrZkY4XAga4kujnLUQlZW+DFgWZh0S67iPMJqm9gd9Wl6D6Q9pOcGSu5d61f2cz4fcTzW/vl4r1HseQkJPLvWZZlWZZVeZKl2GA7yIoVG0T29/cR6zZYFCsw7CKqjMp7IqoNCcLVkWedUozCkSDCyDeDyPvEHel3J22fDCLMdaxf6hj5ZhBZZaxEOJcHBpHVxxLhXN4YEiD78LBYcSzhXB4YRLIWK47FuTww2JOsZMWxOFfhRmFVorYI59JrSACMhHMpNNgcDnMpMKTvMJcGQ4KIc+FMgeE0V0OzwbmkMvtNpcF+/zjXd2Gs2dj+CUD7ZqwDzYZsIm/EsdQZbAxEaHMstYbUgPwVzLHUGWzcCyK0OZZaQ2od6QNhrNZgbySIcKDaYM/CWLfBjlQalmVZloWsQ1fgHbL8PCHICl2RCFl+npB8LLgi+BOAnycE6CTuyGAK+HlC0Lv62h35YXsOP08ITqtwR/Kv9vOE5Iu5I/lSfp6QyhSrIOgkfp6Qd1gNwaGfJwSrIvDzhF3EIbuIXWQdPjSuz8d4LVmWZVmWZR1343Uw+CfA2g3poxfGqg2O9Wp+oNngWI/keRgrNjhWKhXOpdLgWMK59BoyRSrCuRQaRLKxOJdiQy5bIpxLsSFVnHIulQYbci7dBueahLFmg3MFES40G5yrDzQUG5wr2AcuFBucq/+Br1+NBucKovSzA8UG5/obv76I9RpsCOBAtcG5EMaaDTa861jHWNaNvTBk6793HGuGj12UYhQXPtXQbQiOBjedNHQbgmSJbTQ0G3YRu4gqxC5iF7GL2EXsIpMzd8Rno46OO+KxIVXgzBnx2Kgvhmg4I/4aMtmr4q3zDz3+GnVg8b04IC+HRHw0ZALsiQuSnBDx0agDeHwrMvu01oWHBsfC2xV+q8ZLg2O556XBsfQa9kDsgRTcRgljnZRgyEYJY52UYMhGCWOdlGDIRgljnZRgSGWQPLhhWZZlWZZlWZYVr4lR/UK3wYb4eS2MKoCFaoNjZfXeqDeqWHau3JCvAHRefTPtJroN+RwIr0S2ozOlBpthN8eud5Ub0sfNTpsdbw3Hf7RnB2mO1HsFGls07oOETn/voAJPDSJHcEQ8NYgktyHz5WPHwk/DHZkufyGi6aHh/vrlN8VrdL003L+jyObyzQr44KVB5EhuqTLLPz4AaHppEEnktr7FslM/DXdE/pgjq+WnQURc2ok4lneGjJHXFqeO0fLVkGvk7Ypbf/3LWPXFQxqyPQbQvnJEgn82nkbpwxhsMBjI/XuNsBSj4IIXQOthDfCN5B7VxwCapRiFIk8j4EuMSjGK7DWA7o9I9Rp86QLns1C7MUbW4SZaSg2WI734Ek3lhtQAnAcRRnoNzrUnz4FUuyG13pVMEeo12EvZAVqaDXYNNNfBqMyBkWKDVQGkmg02RqjaYDW0dBts3NRtsNpIucFiTw3LsizLsizLsizLqjzJUmywHWTFig0i+/v7iHUbLIoVGHYRVUblPRHVhgTh6sizTilG4UgQYeSbQeR94o70u5O2TwYR5jrWL3WMfDOIrDJWIpzLA4PI6mOJcC5vDAmQfXhYrDiWcC4PDCJZixXH4lweGOxJVrLiWJyrcKOwKlFbhHPpNSQARsK5FBpsDoe5FBjSd5hLgyFBxLlwpsBwmquh2eBcUpn9ptJgv3+c67sw1mxs/wSgfTPWgWZDNpE34ljqDDYGIrQ5llpDakD+CuZY6gw27gUR2hxLrSG1jvSBMFZrsDf83+PVGuxZGOs22JFKw7Isy7KQdegKvEOWnycEWaErEiHLzxOSjwVXBH8C8POEAJ3EHRlMAT9PCHpXX7sjP2zP4ecJwWkV7kj+1X6ekHwxdyRfys8TUpliFQSdxM8T8g6rITj084RgVQR+nrCLOGQXsYusw4fG9fkYryXLsizLsqzjbrwOBv8EWLshffTCWLXBsV7NDzQbHOuRPA9jxQbHSqXCuVQaHEs4l15DpkhFOJdCg0g2FudSbMhlS4RzKTakilPOpdJgQ86l2+BckzDWbHCuIMKFZoNz9YGGYoNzBfvAhWKDc/U/8PWr0eBcQZR+dqDY4Fx/49cXsV6DDQEcqDY4F8JYs8GGdx3rGMu6sReGbP3vjmPN8LGLUoziwqcaug3B0eCmk4ZuQ5AssY2GZsMuYhdRhdhF7CJ2EbuIXWRyVjxyWYJRR6dwZKsEQ6rAmTPisVFfDNEoGNkqwZDJXhVvC/6h5zIz0oKNOrD4XhyQl8M7I1uZ8Z+CDZkAe+KCJCd3Ri5LMOoAHt+KzD6tdXHHB4JHxRl8IHh719+qcX8gSIs0+EAKjA+kyPhACowPpJDsgdgDKbiNEh7ICYC0hIs8luIv8khKuMjbEi6SlnCRx1L8RR5J4VUGyYMblmVZlmVZlmVZ8ZoY1S90G2yIn9fCqAJYqDY4VlbvjXqjimXnyg35CkDn1TfTbqLbkM+B8EpkOzpTarAZdnPsele5IX3c7LTZ8dZw/Ed7dpDmSL1XoLFF4z5I6PT3Dirw1CByBEfEU4NIchsyXz52LPw03JHp8hcimh4a7q9fflO8RtdLw/07imwu36yAD14aRI7kliqz/OMDgKaXBpFEbutbLDv103BH5I85slp+GkTEpa2IY3lnyBh5bXHqGC1fDblG3q649de/jFVfPKQh22MA7StHJPhn42mUPozBBoOB3L/XCEsxCi54AbQe1gDfSO5RfQygWYpRKPI0Ar7EqBSjyF4D6P6IVK/Bly5wPgu1G2NkHW6ipdRgOdKLL9FUbkgNwHkQYaTX4Fx78hxItRtS613JFKFeg72UHaCl2WDXQHMdjMocGCk2WBVAqtlgY4SqDVZDS7fBxk3dBquNlBssfijDsizLsqz/A2fSA26Xp/lGAAAAAElFTkSuQmCC"},199:function(e){e.exports={data:{allImageSharp:{edges:[{node:{fluid:{srcSet:"/static/a5e575c2828075ab52c4749e43fc31ca/d6556/Wallwander.jpg 200w,\n/static/a5e575c2828075ab52c4749e43fc31ca/68393/Wallwander.jpg 400w,\n/static/a5e575c2828075ab52c4749e43fc31ca/bf963/Wallwander.jpg 800w,\n/static/a5e575c2828075ab52c4749e43fc31ca/b0758/Wallwander.jpg 1200w,\n/static/a5e575c2828075ab52c4749e43fc31ca/e4410/Wallwander.jpg 1600w,\n/static/a5e575c2828075ab52c4749e43fc31ca/79888/Wallwander.jpg 3832w",sizes:"(max-width: 800px) 100vw, 800px",aspectRatio:2.235705950991832}}},{node:{fluid:{srcSet:"/static/2e479c07accdc7749eb833802e3528f8/d6556/bnb-screenshot.jpg 200w,\n/static/2e479c07accdc7749eb833802e3528f8/68393/bnb-screenshot.jpg 400w,\n/static/2e479c07accdc7749eb833802e3528f8/bf963/bnb-screenshot.jpg 800w,\n/static/2e479c07accdc7749eb833802e3528f8/b0758/bnb-screenshot.jpg 1200w,\n/static/2e479c07accdc7749eb833802e3528f8/e4410/bnb-screenshot.jpg 1600w,\n/static/2e479c07accdc7749eb833802e3528f8/fb319/bnb-screenshot.jpg 3823w",sizes:"(max-width: 800px) 100vw, 800px",aspectRatio:1.245682632779407}}}]}}}},205:function(e,a,t){var l;e.exports=(l=t(213))&&l.default||l},212:function(e){e.exports={data:{site:{siteMetadata:{title:"Matthew Yates"}}}}},213:function(e,a,t){"use strict";t.r(a);t(23);var l=t(0),n=t.n(l),c=t(126);a.default=function(e){var a=e.location,t=e.pageResources;return t?n.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null}},214:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQklEQVQ4T8WTMauBURjHf+/CRJSdMogMxIewmLxKJjtKNulOXFKSySCjMhiUxaKsFpEMrErhA+BmeG/Huby5unXl1j3TOef5n9/zP89zjqKq2huQVxSMPDE0jQ/gXVFV7fTs4WseAVGiUU17IvGD9G8Afj8sl3A83ifw+WC1Ao8H5nM4n2XcZAK7HRYLuDioVmE2g3ZbBzidUCpBNguBABiN0O3KeDIJkwmMx18AITwcoNmE/V6K8nkwGOTedgvFItRqYLVCJALlstRdHIhFqwXhMNTrEAxK22Yz9Hqw2YDbDaEQWCzQaMBu9w2Qy0E6DcMhxONQqUAioQOEPJORBzsd/ao3BwJgs0GhAIMB9PuQSt0DYjEJGI1+AIhtr1dWXlT81wDRxun08Tm5XLBe6+11OOT8ev9bEf/3Jb78mV79zp/A1J13eHZcVQAAAABJRU5ErkJggg=="},215:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACnUlEQVRYR+2XzSvlYRTHP4+3hcJCaUYsRCEvIRZYiSwkpdyFWGChNAvkfeYiYuQtIdnYkLK4yr9AZCFiobyVl2RmhGykUPObTk+XuXPvdW/T3Plt7tnec57nc77ne37dR4GhLBY+GwafgA9KofBhGAYG8EMpZmw2viqLxfgCDPjwzveOtqqKCuObUnw0A8Aw+C4AP30tu7vmZBwyApmJaeEH8CvwqkBZGSQlwcoKnJx49mRpKaSk6PzjY6ishJgYWFiA62vX9dnZUFgI6+uwualzXgEaGyE/H05PoasL3tuN6GgYH4fAQBgbg60tSEyE/n7Y24OhIWeA0FCYnNTnNjXB46MLgLw8UApmZmBtzb0Kra2Qk6Nz7QCS3dAABQUwPAw7O471NTVQUgJTU7Cx8fabgwLp6XBzAxERmvLpyRlCxtTXB/v7kJbmCBAWprt8eICWFnh50fUymtFRODjQKv0eDgAZGTqxtxdsNlhedgYYHITISJibg/Z2RwDJLiqC+npYWtL+kOjuhuRkaGuDqysPALW1OlG6E1/c378V5OZCczPMzsLdHVitzgAyloEBiI3VuQkJWg2BEag/w0kBARCTyWzFrXKZRFAQTEzosUjnqamuASQ3Lk4bcXVVdy61AvP87CWApNXVQXExdHbC+bk2kBhJDt7dBfGLKwXsV9jrAwJgZAS2t12b2qUCkiqGEsfKWsrKTU/DxcWbiTwBhIdrn5ydQUeH+41yCyAl8nGqrtYrlZWlvw8CJOEJICQEFhfh8BB6ev4SIDhYzz0qSvtBVLDHfwGQyzIzobxcj+P21gQAd+L9cwWky/h4vX7ehKxaVZX+YB0dOVfI6skGXV7C/LwXHvDmUl/k+P+Q+BUw/2Fi+tPM9Mep2c/zX5jcXJyYDlmYAAAAAElFTkSuQmCC"},216:function(e,a,t){e.exports=t.p+"static/favicon-e96241a9088d8adc4e86a8fcbda9b640.ico"},217:function(e){e.exports={data:{site:{siteMetadata:{author:"Matthew Yates"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-4626d9eb1ef43e52b254.js.map