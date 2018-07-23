'use strict';
/**
 * @return {?}
 */
 
 
 
function proxy_ab() {

	if(navigator.appVersion.indexOf("Chrome") == -1 && navigator.appVersion.indexOf("Firefox") == -1){
		return "";
	}
	
	
  return [{
    name : "Allow nonintrusive advertising",
    code : "a3",
    rules : [{
      type : 1,
      body : 'class="abp_ob_exist"'
    }]
  }, {
    name : "uBlock filters",
    code : "a3",
    rules : [{
      type : 3,
      force : true,
      body : "cdn.deadline.com"
    }, {
      type : 4,
      force : true,
      body : "/?*&callback=callback_json_adblade"
    }]
  }, {
    name : "uBlock filters \u2013 Badware risks",
    code : "a3",
    rules : [{
      type : 3,
      body : "flexytalk.net"
    }]
  }, {
    name : "AAK-Cont Filters For uBlock Origin",
    code : "a3",
    rules : [{
      type : 1,
      body : 'id="WarningCodec"'
    }]
  }, {
    name : "EasyList",
    code : "a3",
    rules : [{
      type : 1,
      body : 'id="Zergnet" class="zergnet"'
    }]
  }, {
    name : "EasyPrivacy",
    code : "a3",
    rules : [{
      type : 2,
      body : "&pageReferrer="
    }]
  }, {
    name : "ABPindo",
    code : "id",
    rules : [{
      type : 1,
      body : 'id="dewiqq"'
    }]
  }, {
    name : "Bulgarian list",
    code : "bg",
    rules : [{
      type : 1,
      body : 'id="ea_intext_div"'
    }]
  }, {
    name : "EasyList China",
    code : "cn",
    rules : [{
      type : 1,
      body : 'class="a_fr"'
    }]
  }, {
    name : "EasyList Dutch",
    code : "nl",
    rules : [{
      type : 1,
      body : 'class="aw_url_admarkt_bottom"'
    }]
  }, {
    name : "EasyList Germany",
    code : "de",
    rules : [{
      type : 1,
      body : 'id="WerbungObenRechts10_GesamtDIV"'
    }]
  }, {
    name : "EasyList Italy",
    code : "it",
    rules : [{
      type : 1,
      body : 'class="modPubblicita"'
    }]
  }, {
    name : "EasyList Hebrew",
    code : "il",
    rules : [{
      type : 0,
      last_child : true,
      body : '<div class="wpvl wpvl-dailymotion"><div class="fblogin lockoverlay ng-scope"></div></div>'
    }]
  }, {
    name : "EasyList Lithuania",
    code : "lt",
    rules : [{
      type : 1,
      body : 'id="delfi-front-right-column"'
    }]
  }, {
    name : "EasyList Spanish",
    code : "es",
    rules : [{
      type : 1,
      body : 'class="promocion_libre"'
    }]
  }, {
    name : "EasyList Czech and Slovak",
    code : "cz",
    rules : [{
      type : 1,
      body : 'class="sklik-block"'
    }]
  }, {
    name : "EasyList Polish",
    code : "pl",
    rules : [{
      type : 1,
      body : 'id="tytul_sponsorowane"'
    }]
  }, {
    name : "Schacks Adblock Plus liste",
    code : "dk",
    rules : [{
      type : 3,
      body : "jubiitag.dk"
    }]
  }, {
    name : "Liste AR",
    code : "ae",
    rules : [{
      type : 1,
      body : 'class="e3lan-code"'
    }]
  }, {
    name : "Liste FR",
    code : "fr",
    rules : [{
      type : 1,
      body : 'id="fixe_plugin"'
    }]
  }, {
    name : "ROList",
    code : "ro",
    rules : [{
      type : 0,
      body : '<DIV id="reclama"/>'
    }]
  }, {
    name : "RU AdList",
    code : "ru",
    rules : [{
      type : 1,
      body : 'class="merc_title_2"'
    }]
  }, {
    name : "Adblock List for Finland",
    code : "fi",
    rules : [{
      type : 1,
      body : 'id="mainos"'
    }]
  }, {
    name : "Dandelion Sprout's Norwegian List",
    code : "no",
    rules : [{
      type : 1,
      body : 'class="full-width daily-offers"'
    }]
  }, {
    name : "Greek AdBlock Filter",
    code : "gr",
    rules : [{
      type : 0,
      body : '<DIV class="agores300"/>'
    }]
  }, {
    name : "Latvian List",
    code : "lv",
    rules : [{
      type : 0,
      body : '<a href="http://www.salidzini.lv/" style="display: block; width: 120px; height: 40px; overflow: hidden; position: relative;" rel="noopener nofollow" style="position:absolute!important;left:-9999px;top:-9999px;pointer-events:none;cursor:default"></a>'
    }]
  }, {
    name : "Czech List",
    code : "cz",
    rules : [{
      type : 0,
      body : '<div id="etargetcontainer"/>'
    }]
  }, {
    name : "Filtros Nauscopicos",
    code : "es",
    rules : [{
      type : 1,
      body : 'id="tads2"'
    }]
  }, {
    name : "hufilter",
    code : "hu",
    rules : [{
      type : 0,
      body : '<DIV id="cemp_doboz"></div>'
    }]
  }, {
    name : "Peter Lowe's list",
    code : "a3",
    rules : [{
      type : 3,
      body : "remox.com"
    }]
  }, {
    name : "ABP X Files",
    code : "it",
    rules : [{
      type : 1,
      body : 'id="zzsliderlayer_tc_box"'
    }]
  }, {
    name : "Malware Domains",
    code : "a3",
    rules : [{
      type : 3,
      body : "stycn.com"
    }]
  }, {
    name : "ABP Japanese Filters",
    code : "jp",
    rules : [{
      type : 2,
      body : "&track_id="
    }]
  }, {
    name : "Icelandic ABP List",
    code : "ie",
    rules : [{
      type : 0,
      body : '<A href="/framework/resources/forms/ads.aspx" rel="noopener nofollow" style="pointer-events:none;cursor:default"></a>'
    }]
  }, {
    name : "Adblock Warning Removal List",
    code : "a3",
    rules : [{
      type : 1,
      body : 'id="adblock-msg"'
    }]
  }, {
    name : "Prebake",
    code : "eu",
    rules : [{
      type : 1,
      body : 'class="cm-message"'
    }]
  }, {
    name : "Spam404",
    code : "a3",
    rules : [{
      type : 0,
      body : '<div onclick="fileice();"></div>'
    }]
  }, {
    name : "AdblockList.org",
    code : "pl",
    rules : [{
      type : 1,
      body : 'id="advertisementCF"'
    }]
  }, {
    name : "Fanboy's Enhanced Tracking List",
    code : "a3",
    rules : [{
      type : 1,
      body : 'class="acn-zero-remaining-overlay"'
    }]
  }, {
    name : "Fanboy's Annoyance List",
    code : "a3",
    rules : [{
      type : 1,
      body : 'id="csm-mailsignup-body-form"'
    }]
  }, {
    name : "Fanboy's Social Blocking List",
    code : "a3",
    rules : [{
      type : 1,
      body : 'class="wx-social-share-ls-wrapper"'
    }]
  }, {
    name : "Fanboy's Thirdparty Fonts Filters",
    code : "a3",
    rules : [{
      type : 3,
      body : "fonts.timeinc.net"
    }]
  }, {
    name : "Fanboy's Espanol/Portuguese",
    code : "es",
    rules : [{
      type : 1,
      body : 'id="queTooltip"'
    }, {
      type : 1,
      body : 'class="adsbox"'
    }]
  }, {
    name : "Fanboy's Indian",
    code : "in",
    rules : [{
      type : 2,
      body : "/cou.php?"
    }]
  }, {
    name : "Fanboy's Japanese",
    code : "jp",
    rules : [{
      type : 3,
      body : "ad.pr.ameba.jp"
    }]
  }, {
    name : "Fanboy's Korean",
    code : "kr",
    rules : [{
      type : 1,
      body : 'id="frameSponser"'
    }]
  }, {
    name : "Fanboy's Polish",
    code : "pl",
    rules : [{
      type : 1,
      body : 'id="under_placead5_1"'
    }]
  }, {
    name : "Fanboy's Swedish",
    code : "se",
    rules : [{
      type : 1,
      body : 'class="nyhet_wrapper_annons"'
    }]
  }, {
    name : "Fanboy's Turkish",
    code : "tr",
    rules : [{
      type : 1,
      body : 'id="Ust-Reklam-Piyasa"'
    }]
  }, {
    name : "Fanboy's Vietnamese",
    code : "vn",
    rules : [{
      type : 1,
      body : 'class="quangcao_rightup"'
    }]
  }, {
    name : "Adversity",
    code : "a3",
    rules : [{
      type : 1,
      body : 'class="vn_sponsblock"'
    }]
  }, {
    name : "Antisocial",
    code : "a3",
    rules : [{
      type : 1,
      body : 'title="Tweet this question"'
    }]
  }, {
    name : "Extreme Measures",
    code : "a3",
    rules : [{
      type : 1,
      body : 'id="ecxIncrediStamp"'
    }]
  }, {
    name : "ABPVN List",
    code : "vn",
    rules : [{
      type : 1,
      body : 'id="qcBallonright"'
    }]
  }, {
    name : "CJX's Annoyance List",
    code : "cn",
    rules : [{
      type : 1,
      body : 'id="qrcodeWrap"'
    }]
  }, {
    name : "AdBlockFarsi",
    code : "ir",
    rules : [{
      type : 1,
      body : 'class="tabligh-left"'
    }]
  }, {
    name : "Blockzilla",
    code : "a3",
    rules : [{
      type : 1,
      body : 'class="plistaAllOuter"'
    }]
  }, {
    name : "Eesti saitidele kohandatud filter",
    code : "ee",
    rules : [{
      type : 0,
      body : '<a href="javascript:void(0);nop=\\\'http://pay4results24.eu\\\'" rel="noopener nofollow" style="pointer-events:none;cursor:default"></a>'
    }]
  }, {
    name : "Estonian filters by Gurud.ee",
    code : "ee",
    rules : [{
      type : 1,
      body : 'class="chilli_layer"'
    }]
  }, {
    name : "Squidblacklist.org Ad Servers",
    code : "a3",
    rules : [{
      type : 3,
      body : "dimaggio.heartlight.org"
    }]
  }, {
    name : "YousList",
    code : "kr",
    rules : [{
      type : 0,
      body : '<div id="adya_area"/>'
    }]
  }, {
    name : "Adware filters",
    code : "a3",
    rules : [{
      type : 3,
      body : "theappsrvr.com"
    }]
  }, {
    name : "I don't care about cookies",
    code : "eu",
    rules : [{
      type : 1,
      body : 'id="AllowCookiesWrapper"'
    }]
  }, {
    name : "Adblock Polska",
    code : "pl",
    rules : [{
      type : 1,
      body : 'class="peeloverlay"'
    }]
  }, {
    name : "Malvertising filter list by Disconnect",
    code : "a3",
    rules : [{
      type : 3,
      body : "oliwei.com"
    }]
  }, {
    name : "Fanboy's Anti-Facebook List",
    code : "a3",
    rules : [{
      type : 3,
      body : "api.facebook.com"
    }]
  }, {
    name : "Adblock-Iran",
    code : "ir",
    rules : [{
      type : 1,
      body : 'id="sabalightBox"'
    }]
  }, {
    name : "Korean Adblock List",
    code : "kr",
    rules : [{
      type : 1,
      body : 'class="da_area_bot"'
    }]
  }, {
    name : "polskie filtry do Adblocka i uBlocka",
    code : "pl",
    rules : [{
      type : 1,
      body : 'id="a_201"'
    }]
  }, {
    name : "Slovenian List",
    code : "si",
    rules : [{
      type : 1,
      body : 'class="pane-uredniski-oglasi-na-naslovnici-custom-ad-300-150"'
    }]
  }, {
    name : "MalwareDomainList.com Hosts List",
    code : "a3",
    rules : [{
      type : 3,
      body : "cope.it"
    }]
  }, {
    name : "MVPS HOSTS",
    code : "a3",
    rules : [{
      type : 3,
      body : "geo.gexo.com"
    }]
  }, {
    name : "hpHosts",
    code : "a3",
    rules : [{
      type : 3,
      body : "images.m0.net"
    }]
  }, {
    name : "Dan Pollock's hosts file",
    code : "a3",
    rules : [{
      type : 3,
      body : "www.travelncs.com"
    }]
  }, {
    name : "Cryptocurrency Mining Protection List",
    code : "a3",
    rules : [{
      type : 2,
      body : "://.coinblind.com/lib/"
    }]
  }, {
    name : "Adguard English",
    code : "a3",
    rules : [{
      type : 0,
      body : '<div id="__BULLETIN__bdiv" style="position"></div>'
    }]
  }, {
    name : "Adguard Mobile",
    code : "a3",
    rules : [{
      type : 0,
      body : '<img width="320" height="50">'
    }]
  }, {
    name : "Adguard Spyware",
    code : "a3",
    rules : [{
      type : 1,
      body : 'id="qoo-counter"'
    }]
  }, {
    name : "Adguard Annoyance",
    code : "a3",
    rules : [{
      type : 1,
      body : 'class="hs-sosyal"'
    }]
  }, {
    name : "Adguard Social media filter",
    code : "a3",
    rules : [{
      type : 1,
      body : 'id="wpbfsb"'
    }]
  }, {
    name : "Adguard Simplified domain names",
    code : "a3",
    rules : [{
      type : 3,
      body : "epi.vn"
    }]
  }, {
    name : "Adguard Experimental",
    code : "a3",
    rules : [{
      type : 2,
      body : "/fbevents.js"
    }]
  }, {
    name : "Adguard Russian",
    code : "ru",
    rules : [{
      type : 1,
      body : 'id="METABAR_IFRAME"'
    }]
  }, {
    name : "Adguard Japan",
    code : "jp",
    rules : [{
      type : 3,
      body : "fivecdm.com"
    }]
  }, {
    name : "Adguard Spanish/Portuguese",
    code : "es",
    rules : [{
      type : 1,
      body : 'class="bannerBox"'
    }]
  }, {
    name : "Adguard Turkish",
    code : "tr",
    rules : [{
      type : 1,
      body : 'id="alt_kayan_reklam"'
    }]
  }, {
    name : "Adguard German",
    code : "de",
    rules : [{
      type : 2,
      body : "/faibl_adblocker_detector/"
    }]
  }, {
    name : "Adguard Safari",
    code : "a3",
    rules : [{
      type : 3,
      body : "vip.sc386.com"
    }]
  }];
  
  
  
  
  

  
  
  
}
/**
 * @param {string} col
 * @param {string} e
 * @param {string} islongclick
 * @return {undefined}
 */
function img_onload(col, e, islongclick) {
  $("<img>").attr("rel", "prefetch").attr("src", col).load(function() {
    $(e).html('<span class="bad">!</span> ' + islongclick);
  });
}
/**
 * @return {undefined}
 */
function init_muncher() {
  if ("undefined" != typeof ADM_PUSH) {
    $("#falsep").removeClass("absolute");
    $("#ab-type").addClass("falsep");
    $("#muncher").html('<span class="true">&#10004;</span> Ad Muncher');
    setTimeout(function() {
      /** @type {string} */
      var s = "";
      if (s = $("a").attr("href", "http://www.admuncher.com/").attr("title").match(/\d\.\//)) {
        $("#muncher").append(" " + s);
      } else {
        /** @type {string} */
        s = "";
        var property;
        for (property in window) {
          if (String(window[property]).match(/am_version/)) {
            var e;
            /** @type {string} */
            var d = String(window[property]);
            if (e = /am_version=([\d\.]+)"/.exec(d)) {
              /** @type {string} */
              s = s + e[1];
            }
            if (e = /am_build=([\d]+)"/.exec(d)) {
              /** @type {string} */
              s = s + ("." + e[1]);
            }
            if (e = /am_list_build=([\d]+)"/.exec(d)) {
              /** @type {string} */
              s = s + ("/" + e[1]);
            }
            if (!(e = /am_is_beta=0"/.exec(d))) {
              /** @type {string} */
              s = s + " (beta)";
            }
            break;
          }
        }
        if ("" != s) {
          $("#muncher").append(" " + s);
        }
      }
    }, 10);
  }
}
/**
 * @return {undefined}
 */
function init_ghostery() {
  if (void 0 !== $("#ghostery-box")[0]) {
    $("#ghostery").html('<span class="bad">!</span> Detected');
  }
}
/**
 * @return {undefined}
 */
function init_guard() {
  if (void 0 !== $(".adguard-alert")[0]) {
    $("#falsep").removeClass("absolute");
    $("#ab-type").addClass("falsep");
    $("#guard").html('<span class="bad">!</span> Detected');
  }
}
!function() {
  var results = proxy_ab();
  $("#ab-load").show();
  /** @type {string} */
  var result = "";
  /** @type {number} */
  var c = 0;
  /** @type {number} */
  var j = 0;
  var resultCount = results.length;
  for (; j < resultCount; j++) {
    /** @type {string} */
    result = result + ('<div id="n' + j + '">');
    /** @type {number} */
    var i = 0;
    for (; i < results[j].rules.length; i++) {
      if (0 == results[j].rules[i].type) {
        /** @type {string} */
        result = result + results[j].rules[i].body;
      } else {
        if (1 == results[j].rules[i].type) {
          /** @type {string} */
          result = result + ("<img " + results[j].rules[i].body + ' height="2" />');
        } else {
          if (2 == results[j].rules[i].type) {
            /** @type {string} */
            result = result + ('<img src="/img/1.gif?q' + results[j].rules[i].body + '"  height="2" />');
          } else {
            if (3 == results[j].rules[i].type) {
              if (-1 == results[j].rules[i].body.indexOf("/")) {
                results[j].rules[i].body += ":1/1.gif";
              } else {
                results[j].rules[i].body = results[j].rules[i].body.replace("/", ":1/");
              }
              /** @type {string} */
              result = result + ('<img src="https://dummy.net.err.' + results[j].rules[i].body + '" height="2" />');
            } else {
              if (4 == results[j].rules[i].type) {
                /** @type {!Element} */
                var liveReload = document.createElement("script");
                /** @type {string} */
                liveReload.src = "/img/i/ab/" + c + ".js?" + results[j].rules[i].body + "?ts=" + (new Date).getTime();
                document.getElementsByTagName("head")[0].appendChild(liveReload);
                /** @type {string} */
                result = result + ('<data><span class="n">ab' + c + "</span></data>");
                c++;
              }
            }
          }
        }
      }
    }
    /** @type {string} */
    result = result + "</div>";
  }
  $("#ab-rules").html(result);
  setTimeout(function() {
    var numberOfConnections;
    /** @type {number} */
    var geoJSON_str = 0;
    /** @type {number} */
    var activeActivity = 0;
    /** @type {number} */
    var k = 0;
    var l = results.length;
    for (; k < l; k++) {
      /** @type {number} */
      numberOfConnections = 0;
      /** @type {number} */
      var i = 0;
      for (; i < results[k].rules.length; i++) {
        if (results[k].rules[i].last_child && " > :last-child", function(div) {
          /** @type {boolean} */
          var name = false;
          return !div.css("-moz-binding") || -1 == div.css("-moz-binding").indexOf("dummy") && -1 == div.css("-moz-binding").indexOf("ab") ? div.is("img") ? (1 != div.height() && "none" != div.css("display") || (name = 3), "0px 0px" == div.css("-o-transform-origin") && (name = "opera")) : "none" == div.css("display") ? name = 2 : div.is("data") && void 0 === window[div.text()] ? name = 3 : null == div.parent().html() && (name = 3) : name = 1, !!name && (activeActivity = name, true);
        }($("#n" + k + " :nth-child(" + (i + 1) + ")" + (results[k].rules[i].last_child ? " > :last-child" : ""))) && (numberOfConnections++, results[k].rules[i].force)) {
          numberOfConnections = results[k].rules.length;
          break;
        }
      }
      if (results[k].rules.length == numberOfConnections) {
        if (0 == geoJSON_str) {
          $("#rules").append('<tr><td colspan="1" rowspan="90"></td></tr>');
        }
        geoJSON_str++;
        $("#rules").append('<tr><td style="width:95%"><span class="f" style="background-image:url(/img/flags/' + results[k].code + '.png)">' + results[k].name + "</td></tr>");
      }
    }
    if (geoJSON_str > 0) {
      /** @type {string} */
      var th_field = "";
      if (1 === activeActivity || $("body").css("-moz-binding")) {
        /** @type {string} */
        th_field = "Adblock for Mozilla Firefox";
      } else {
        if ($("#ab-type span").hasClass("good")) {
			
			
          /** @type {string} */
          th_field = void 0 !== window.chrome ? '<script> document.getElementById("myNav").style.height = "100%";</script>' : navigator.userAgent.indexOf("Safari/") > -1 ? "Adblock For Safari" : "opera" == activeActivity ? "Adblock For Opera" : "Generic Adblock version";
		  
		  
		  
		  
        }
      }
      $("#ab-type").html('<span class="bad">!</span>' + th_field + '<span id="falsep" class="absolute"> [or some generic ads blocking software]<span>');
      if ($("#ab-type").hasClass("falsep")) {
        $("#falsep").removeClass("absolute");
      }
    }
    $("#ab-count").text(geoJSON_str);
    $("#ab-rules").remove();
  }, 1024);
}(), $(document).ready(function() {
  init_ghostery();
  init_guard();
  init_muncher();
  img_onload("//local.ptron/killed.gif?" + Math.random(), "#onload-ptron", "Detected");
  img_onload("/img/i/PRIVOXY-FORCE/smile.gif?" + Math.random(), "#onload-privoxy", "Detected");
}), function() {
  if (window.postMessage && !eval("/*@cc_on!@*/!1")) {
    /** @type {!Element} */
    var tbb_check$jscomp$0 = document.createElement("iframe");
    /** @type {string} */
    tbb_check$jscomp$0.style.display = "none";
    document.body.appendChild(tbb_check$jscomp$0);
    tbb_check$jscomp$0.contentWindow.document.write('<body><script>(function(){function d(){var a=document.createElement("span");a.style.fontFamily="arial,sans-serif";a.innerHTML="mmmmmmmmmmmlli";c.appendChild(a);var b=a.offsetWidth;c.removeChild(a);return b}for(var c=document.documentElement,e=d(),a=0,b={};25>a;a++)b[a]=document.createElement("span"),b[a].style.fontFamily="a"+a,c.appendChild(b[a]);window.parent.postMessage(e!==d(),"*")})();\x3c/script>');
    $(window).bind("message.t", function(event) {
      if (true === event.originalEvent.data) {
        $("#tbb-fonts").html('<span class="bad">!</span> Detected');
      }
      $(window).unbind("message.t");
      document.body.removeChild(tbb_check$jscomp$0);
    });
  }
}(), function() {
  if (window.WebGLRenderingContext) {
    /** @type {!Element} */
    var canvas = document.createElement("canvas");
    /** @type {!Array} */
    var names = ["webgl", "experimental-webgl", "moz-webgl"];
    /** @type {boolean} */
    var childStatement = false;
    /** @type {number} */
    var ii = 0;
    for (; ii < 4; ii++) {
      try {
        if ((childStatement = canvas.getContext(names[ii])) && "function" != typeof childStatement.getParameter) {
          return $("#noscript-webgl").html('<span class="bad">!</span> Detected'), false;
        }
      } catch (a) {
      }
    }
  }
}(), function() {
  if (function() {
    try {
      var ctx = document.createElement("canvas").getContext("2d");
      return ctx.fillStyle = "rgb(3,3,7)", ctx.fillRect(0, 0, 1, 1), ctx.fill(), 3 !== ctx.getImageData(0, 0, 1, 1).data[0];
    } catch (a) {
      return false;
    }
  }()) {
    $("#tbb-canvas").html('<span class="bad">!</span> Detected');
  }
}(), function() {
  var self = $("<img>");
  if (self.css("-moz-binding")) {
    self.attr("rel", "prefetch").attr("src", window.location.origin + ":9050").error(function() {
      $("#tbb-banned-ports").html('<span class="bad">!</span> Detected');
    });
  }
}();
