!function(s,i,n){"use strict";function t(t,a){function l(i){var n=s(i),t=n.closest(".media--background"),a=n.closest(".slide")||n.closest(".unslick");n.parentsUntil(a).removeClass(function(s,i){return(i.match(/(\S+)loading/g)||[]).join(" ")}),t.length&&(t.css("background-image","url("+n.attr("src")+")"),t.find("> img").remove(),t.removeAttr("data-lazy"))}function e(){f.children().sort(function(){return.5-Math.random()}).each(function(){f.append(this)})}function o(s){var i=s.slideCount<=s.options.slidesToShow,n=i||!1===s.options.arrows;if(f.attr("id")===s.$slider.attr("id"))return s.options.centerPadding&&"0"!==s.options.centerPadding||s.$list.css("padding",""),i&&s.$slideTrack.width()<=s.$slider.width()&&s.$slideTrack.css({left:"",transform:""}),k[n?"addClass":"removeClass"]("visually-hidden")}function r(){f.removeClass("is-paused"),f.find(".is-playing").length&&f.find(".is-playing").removeClass("is-playing").find(".media__icon--close").click()}function d(){f.addClass("is-paused").slick("slickPause")}function c(n){return{slide:n.slide,lazyLoad:n.lazyLoad,dotsClass:n.dotsClass,rtl:n.rtl,prevArrow:s(".slick-prev",k),nextArrow:s(".slick-next",k),appendArrows:k,customPaging:function(s,t){var a=s.$slides.eq(t).find("[data-thumb]")||null,l='<img alt="'+i.t(a.attr("alt"))+'" src="'+a.data("thumb")+'">',e=a.length&&n.dotsClass.indexOf("thumbnail")>0?'<div class="slick-dots__thumbnail">'+l+"</div>":"";return s.defaults.customPaging(s,t).add(e)}}}var u,f=s("> .slick__slider",a).length?s("> .slick__slider",a):s(a),k=s("> .slick__arrow",a),g=f.data("slick")?s.extend({},n.slick,f.data("slick")):n.slick,p=!("array"!==s.type(g.responsive)||!g.responsive.length)&&g.responsive,h=g.appendDots;if(g.appendDots=".slick__arrow"===h?k:h||s(f),p)for(u in p)p.hasOwnProperty(u)&&"unslick"!==p[u].settings&&(p[u].settings=s.extend({},n.slick,c(g),p[u].settings));f.data("slick",g),g=f.data("slick"),function(){var n="blazy"===g.lazyLoad&&i.blazy;g.randomize&&!f.hasClass("slick-initiliazed")&&e(),s(".media--loading",f).closest(".slide__content").addClass("is-loading"),".slick__arrow"===h&&f.on("init.sl",function(i,n){s(n.$dots).insertAfter(n.$prevArrow)});var t=s(".b-lazy:not(.b-loaded)",f);n&&f.on("beforeChange.sl",function(){t.length&&i.blazy.init.load(t)}),f.on("setPosition.sl",function(s,a){o(a),n&&t.length&&i.blazy.init.revalidate()})}(),f.slick(c(g)),function(){var i=(f.slick("getSlick"),f.find(".media--player").length);f.parent().on("click.sl",".slick-down",function(i){i.preventDefault();var n=s(this);s("html, body").stop().animate({scrollTop:s(n.data("target")).offset().top-(n.data("offset")||0)},800,g.easing||"swing")}),g.mouseWheel&&f.on("mousewheel.sl",function(s,i){return s.preventDefault(),f.slick(i<0?"slickNext":"slickPrev")}),f.on("lazyLoaded lazyLoadError",function(s,i,n){l(n)}),i&&(f.on("afterChange.sl",r),f.on("click.sl",".media__icon--close",r),f.on("click.sl",".media__icon--play",d))}(),f.hasClass("unslick")&&f.slick("unslick"),s(a).addClass("slick--initialized")}i.behaviors.slick={attach:function(i){s(".slick",i).once("slick").each(t)}}}(jQuery,Drupal,drupalSettings);