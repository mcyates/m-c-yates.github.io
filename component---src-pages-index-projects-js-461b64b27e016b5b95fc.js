(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"Projects",function(){return d});var r=a(198),i=a(0),s=a.n(i),n=a(199),l=a.n(n),d=function(){var e=r.data.allImageSharp.edges,t=[];return e.forEach(function(e){t.push(e.node)}),console.log(t),s.a.createElement("section",{className:"projects"},s.a.createElement("article",{className:"projects__card"},s.a.createElement("h3",{className:"projects__card__title"},"WallWander"),s.a.createElement(l.a,{className:"projects__card__img",fluid:t[0].fluid,alt:"Wallwander project Image"}),s.a.createElement("ul",{className:"projects__card__stack"},s.a.createElement("li",null,"React"),s.a.createElement("li",null,"Redux"),s.a.createElement("li",null,"PostgreSQL"),s.a.createElement("li",null,"Node"),s.a.createElement("li",null,"Typescript(backend only)")),s.a.createElement("p",{className:"projects__card__description"},"A wallpaper sharing app inspired by https://wallhaven.cc/. A React/Redux App powered by an Express api written in Typescript and using Postgres."),s.a.createElement("div",{className:"projects__card__link"},s.a.createElement("a",{href:"https://www.mattcyates.com"},"View Site"),s.a.createElement("a",{href:"https://github.com/M-C-Yates/WallWander-frontend"},"Frontend Code"),s.a.createElement("a",{href:"https://github.com/M-C-Yates/WallWander-backend"},"Backend Code"))),s.a.createElement("article",{className:"projects__card"},s.a.createElement("h3",{className:"projects__card__title"},"BnB"),s.a.createElement(l.a,{className:"projects__card__img",fluid:t[1].fluid,alt:"Bnb project Image"}),s.a.createElement("ul",{className:"projects__card__stack"},s.a.createElement("li",null,"React"),s.a.createElement("li",null,"Graphql(Apollo Client, Graphql-Yoga)"),s.a.createElement("li",null,"PostgreSQL + Prisma"),s.a.createElement("li",null,"Node"),s.a.createElement("li",null,"Typescript(backend only)")),s.a.createElement("p",{className:"projects__card__description"},"A fullstack AirBnB clone implemented with React & Apollo-Client on the frontend, and a graphql server built with graphql-yoga on the backend with all data stored in a postgres container managed by Prisma."),s.a.createElement("div",{className:"projects__card__link"},s.a.createElement("a",{href:""},"View Site"),s.a.createElement("a",{href:"https://github.com/M-C-Yates/bnb-frontend"},"Frontend Code"),s.a.createElement("a",{href:"https://github.com/M-C-Yates/bnb-backend"},"Backend Code"))))};t.default=d},198:function(e){e.exports={data:{allImageSharp:{edges:[{node:{fluid:{srcSet:"/static/0ac6d21040dbafb65371e86ad1e940b0/d6556/Wallwander.jpg 200w,\n/static/0ac6d21040dbafb65371e86ad1e940b0/68393/Wallwander.jpg 400w,\n/static/0ac6d21040dbafb65371e86ad1e940b0/bf963/Wallwander.jpg 800w,\n/static/0ac6d21040dbafb65371e86ad1e940b0/b0758/Wallwander.jpg 1200w,\n/static/0ac6d21040dbafb65371e86ad1e940b0/e4410/Wallwander.jpg 1600w,\n/static/0ac6d21040dbafb65371e86ad1e940b0/2fff7/Wallwander.jpg 1784w",sizes:"(max-width: 800px) 100vw, 800px",aspectRatio:1.590017825311943}}},{node:{fluid:{srcSet:"/static/2e479c07accdc7749eb833802e3528f8/d6556/bnb-screenshot.jpg 200w,\n/static/2e479c07accdc7749eb833802e3528f8/68393/bnb-screenshot.jpg 400w,\n/static/2e479c07accdc7749eb833802e3528f8/bf963/bnb-screenshot.jpg 800w,\n/static/2e479c07accdc7749eb833802e3528f8/b0758/bnb-screenshot.jpg 1200w,\n/static/2e479c07accdc7749eb833802e3528f8/e4410/bnb-screenshot.jpg 1600w,\n/static/2e479c07accdc7749eb833802e3528f8/fb319/bnb-screenshot.jpg 3823w",sizes:"(max-width: 800px) 100vw, 800px",aspectRatio:1.245682632779407}}}]}}}},199:function(e,t,a){"use strict";a(29),a(30),a(13),a(91),a(133),a(200);var r=a(14);t.__esModule=!0,t.default=void 0;var i,s=r(a(68)),n=r(a(69)),l=r(a(136)),d=r(a(137)),c=r(a(0)),o=r(a(52)),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;var w=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+d+a+i+t+n+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},S=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,o=e.onError,u=e.loading,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:i},f,{onLoad:n,onError:o,ref:t,loading:u,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});S.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var E=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&m&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=w(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,l=void 0===n?{}:n,o=e.placeholderStyle,f=void 0===o?{}:o,p=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,w=e.Tag,E=e.itemProp,v=e.loading,_=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,d.default)({opacity:_?1:0,transition:j?"opacity "+b+"ms":"none"},l),I="boolean"==typeof m?"lightgray":m,R={transitionDelay:b+"ms"},N=(0,d.default)({opacity:this.state.imgLoaded?0:1},j&&R,l,f),W={title:t,alt:this.state.isVisible?"":a,style:N,className:p};if(g){var C=g;return c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),I&&c.default.createElement(w,{title:t,style:(0,d.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&R)}),C.base64&&c.default.createElement(S,(0,d.default)({src:C.base64},W)),C.tracedSVG&&c.default.createElement(S,(0,d.default)({src:C.tracedSVG},W)),this.state.isVisible&&c.default.createElement("picture",null,C.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),c.default.createElement(S,{alt:a,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:v})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,d.default)({alt:a,title:t,loading:v},C))}}))}if(h){var k=h,z=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},s);return"inherit"===s.display&&delete z.display,c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},I&&c.default.createElement(w,{title:t,style:(0,d.default)({backgroundColor:I,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},j&&R)}),k.base64&&c.default.createElement(S,(0,d.default)({src:k.base64},W)),k.tracedSVG&&c.default.createElement(S,(0,d.default)({src:k.tracedSVG},W)),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement(S,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:v})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,d.default)({alt:a,title:t,loading:v},k))}}))}return null},t}(c.default.Component);E.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var v=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string}),_=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string});E.propTypes={resolutions:v,sizes:_,fixed:v,fluid:_,fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string,loading:o.default.oneOf(["auto","lazy","eager"])};var j=E;t.default=j},200:function(e,t,a){"use strict";a(201)("fixed",function(e){return function(){return e(this,"tt","","")}})},201:function(e,t,a){var r=a(1),i=a(7),s=a(32),n=/"/g,l=function(e,t,a,r){var i=String(s(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(n,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-projects-js-461b64b27e016b5b95fc.js.map