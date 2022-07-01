
// Collector source thanks to charlieAIO
// Modifications by wadu
// Mobile support by IdekDude

t = {
    PLUGINS: [
      "WebEx64 General Plugin Container",
      "YouTube Plug-in",
      "Java Applet Plug-in",
      "Shockwave Flash",
      "iPhotoPhotocast",
      "SharePoint Browser Plug-in",
      "Chrome Remote Desktop Viewer",
      "Chrome PDF Viewer",
      "Native Client",
      "Unity Player",
      "WebKit-integrierte PDF",
      "QuickTime Plug-in",
      "RealPlayer Version Plugin",
      "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)",
      "Mozilla Default Plug-in",
      "Adobe Acrobat",
      "AdobeAAMDetect",
      "Google Earth Plug-in",
      "Java Plug-in 2 for NPAPI Browsers",
      "Widevine Content Decryption Module",
      "Microsoft Office Live Plug-in",
      "Windows Media Player Plug-in Dynamic Link Library",
      "Google Talk Plugin Video Renderer",
      "Edge PDF Viewer",
      "Shockwave for Director",
      "Default Browser Helper",
      "Silverlight Plug-In",
    ],
    ins: null,
}; 
function sendError() {
    document.getElementById("code").style.backgroundColor = '#ffcccb'

    document.getElementById("image").src = "assets/angrycry.png";

    document.getElementById("statusMessage").style.color = "#A62122";

    document.getElementById("statusMessage").innerHTML = "Something went wrong!"

    document.getElementById("message2").style.color = "#A62122";

    document.getElementById("message2").innerHTML = "We couldn't send your data to our servers :'( "

}
var data = {}
function run() {

    if (window.speechSynthesis) {
        var a = window.speechSynthesis.getVoices();
    
        a = window.speechSynthesis.getVoices();
    
        a = window.speechSynthesis.getVoices();
    }
    


    while(!screen){
        data.screen = window.screen
    }
    data.navigator = {}
    data.window = {}
    data.document = {}
    data.other = {}
    data.performance = performance
    

    data.navigator.appCodeName = navigator.appCodeName
    data.navigator.appName = navigator.appName
    data.navigator.appVersion = navigator.appVersion
    data.navigator.language = navigator.language
    data.navigator.languages = navigator.languages
    data.navigator.userAgent = navigator.userAgent
    data.navigator.vendor = navigator.vendor
    data.navigator.product = navigator.product
    data.navigator.productSub = navigator.productSub
    data.navigator.platform = navigator.platform
    
    data.navigator.vibrate = 'function' == typeof navigator['vibrate']
    data.navigator.getBattery = 'function' == typeof navigator['getBattery']
    data.navigator.credentials = Boolean(navigator['credentials'])
    data.navigator.appMinorVersion = Boolean(navigator['appMinorVersion'])
    data.navigator.bluetooth = Boolean(navigator['bluetooth'])
    data.navigator.storage = Boolean(navigator['storage'])
    data.navigator.getGamepads = Boolean(navigator['getGamepads'])
    data.navigator.getStorageUpdates = Boolean(navigator['getStorageUpdates'])
    data.navigator.hardwareConcurrency = Boolean(navigator['hardwareConcurrency'])
    data.navigator.mediaDevices = Boolean(navigator['mediaDevices'])
    data.navigator.mozAlarms = Boolean(navigator['mozAlarms'])
    data.navigator.mozConnection = Boolean(navigator['mozConnection'])
    data.navigator.mozIsLocallyAvailable = Boolean(navigator['mozIsLocallyAvailable'])
    data.navigator.mozPhoneNumberService = Boolean(navigator['mozPhoneNumberService'])
    data.navigator.msManipulationViewsEnabled = Boolean(navigator['msManipulationViewsEnabled'])
    data.navigator.permissions = Boolean(navigator['permissions'])
    data.navigator.registerProtocolHandler = Boolean(navigator['registerProtocolHandler'])
    data.navigator.requestMediaKeySystemAccess = Boolean(navigator['requestMediaKeySystemAccess'])
    data.navigator.requestWakeLock = Boolean(navigator['requestWakeLock'])
    data.navigator.sendBeacon = Boolean(navigator['sendBeacon'])
    data.navigator.serviceWorker = Boolean(navigator['serviceWorker'])
    data.navigator.storeWebWideTrackingException = Boolean(navigator['storeWebWideTrackingException'])
    data.navigator.webkitGetGamepads = Boolean(navigator['webkitGetGamepads'])
    data.navigator.webkitTemporaryStorage = Boolean(navigator['webkitTemporaryStorage'])
    data.navigator.cookieEnabled = navigator['cookieEnabled'] ? navigator['cookieEnabled'] : -1
    data.navigator.javaEnabled = navigator['javaEnabled'] ? navigator['javaEnabled']() : -1
    data.navigator.doNotTrack = navigator['doNotTrack'] ? navigator['doNotTrack'] : -1;

    data.window.ActiveXObject = Boolean(window['ActiveXObject']) || 'ActiveXObject' in window
    data.window.innerHeight = window.innerHeight;
    data.window.innerWidth = window.innerWidth;
    data.window.outerWidth = window.outerWidth;
    data.window.outerHeight = window.outerHeight;
    data.window.devicePixelRatio = window.devicePixelRatio;
    data.window.addEventListener = Boolean(window['addEventListener'])
    data.window.XMLHttpRequest = Boolean(window['XMLHttpRequest'])
    data.window.XDomainRequest = Boolean(window['XDomainRequest'])
    data.window.emit = window.emit
    data.window.orientation = typeof window['orientation'];
    data.window.DeviceOrientationEvent = Boolean(window['DeviceOrientationEvent'])
    data.window.DeviceMotionEvent = Boolean(window['DeviceMotionEvent'])
    data.window.TouchEvent = Boolean(window['TouchEvent'])
    data.window.spawn = window.spawn
    data.window.chrome = window.chrome
    data.window.prototype_bind = Boolean(Function['prototype']['bind'])
    data.window.Buffer = window.Buffer
    data.window.PointerEvent = Boolean(window['PointerEvent'])
    data.window._phantom = window._phantom
    data.window.webdriver = window.webdriver
    data.window.domAutomation = window.domAutomation
    data.window.callPhantom = window.callPhantom
    data.window.opera = window.opera
    data.window.sessionStorage = !!window['sessionStorage']
    data.window.localStorage = !!window['localStorage']
    data.window.indexedDB = !!window['indexedDB']
    data.window.FileReader = 'FileReader' in window
    data.window.HTMLElement = window['HTMLElement'] && Object['prototype']['toString']['call'](window['HTMLElement'])['indexOf']('Constructor') > 0
    data.window.webRTC = 'function' == typeof window['RTCPeerConnection'] || 'function' == typeof window['mozRTCPeerConnection'] || 'function' == typeof window['webkitRTCPeerConnection']
    data.window.mozInnerScreenY = 'mozInnerScreenY' in window ? window['mozInnerScreenY'] : 0

    data.document.documentMode = typeof document['documentMode']
    data.document.webdriver = window['document']['documentElement']['getAttribute']('webdriver') != null
    data.document.driver = window['document']['documentElement']['getAttribute']('driver') != null
    data.document.selenium = null != window['document']['documentElement']['getAttribute']('selenium')
    data.document.hidden = document['hidden']
    data.document.mozHidden = document['mozHidden']
    data.document.msHidden = document['msHidden']
    data.document.webkitHidden = document['webkitHidden']

    data.other.CC_ON = new Function('return/*@cc_on!@*/!1')()
    data.other.InstallTrigger = 'undefined' != typeof InstallTrigger
    data.other.prototype_forEach = Boolean(Array['prototype']['forEach'])
    data.other.imul = Boolean(Math['imul'])
    data.other.parseInt = Boolean(Number['parseInt'])
    data.other.hypot = Boolean(Math['hypot'])
    data.other.value1 = Boolean(window['$cdc_asdjflasutopfhvcZLmcfl_'] || document['$cdc_asdjflasutopfhvcZLmcfl_'])
    data.other.XPathResult = void 0 !== window['XPathResult'] || void 0 !== document['XPathResult']


    function plugins() {
        var plugins = [];

        for (var i = 0; i < navigator.plugins.length; i++) {
        
            plugins.push(navigator.plugins[i].name);
        
        }
        data.navigator.plugins = plugins
    }
    plugins()

    var rCFP = [];
    var rVal = '';
    
    function canvas(a) {
        try {
          var e = -1;
          if (!sf4()) {
            var n = document.createElement("canvas");
            if (
              ((n.width = 280),
              (n.height = 60),
              (n.style.display = "none"),
              "function" == typeof n.getContext)
            ) {
              var o = n.getContext("2d");
              (o.fillStyle = "rgb(102, 204, 0)"),
                o.fillRect(100, 5, 80, 50),
                (o.fillStyle = "#f60"),
                (o.font = "16pt Arial"),
                o.fillText(a, 10, 40),
                (o.strokeStyle = "rgb(120, 186, 176)"),
                o.arc(80, 10, 20, 0, Math.PI, !1),
                o.stroke();
              var m = n.toDataURL();
              e = 0;
              for (var r = 0; r < m.length; r++) {
                (e = (e << 5) - e + m.charCodeAt(r)), (e &= e);
              }
              e = e.toString();
              var i = document.createElement("canvas");
              (i.width = 16), (i.height = 16);
              var c = i.getContext("2d");
              (c.font = "6pt Arial"),
                (rVal = Math.floor(1e3 * Math.random()).toString()),
                c.fillText(rVal, 1, 12);
              for (var b = i.toDataURL(), d = 0, k = 0; k < b.length; k++) {
                (d = (d << 5) - d + b.charCodeAt(k)), (d &= d);
              }
              rCFP = d.toString();
            }
          }
          return e;
        } catch (a) {
          console.log(a);
          return "exception";
        }
    }
    function uar() {
        return window.navigator.userAgent.replace(/\\|"/g, "");
    }
    function sf4() {
        var a = uar();
        return !(
          !~a.indexOf("Version/4.0") ||
          !(
            ~a.indexOf("iPad;") ||
            ~a.indexOf("iPhone") ||
            ~a.indexOf("Mac OS X 10_5")
          )
        );
    }
    function fonts() {
        var a = [];
        if (!sf4() && document.body) {
          var e = ["serif", "sans-serif", "monospace"],
            n = [0, 0, 0],
            o = [0, 0, 0],
            m = document.createElement("span");
          (m.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-."),
            (m.style.fontSize = "90px");
          var r;
          for (r = 0; r < e.length; r++)
            (m.style.fontFamily = e[r]),
              document.body.appendChild(m),
              (n[r] = m.offsetWidth),
              (o[r] = m.offsetHeight),
              document.body.removeChild(m);
          for (
            var i = [
                "Geneva",
                "Lobster",
                "New York",
                "Century",
                "Apple Gothic",
                "Minion Pro",
                "Apple LiGothic",
                "Century Gothic",
                "Monaco",
                "Lato",
                "Fantasque Sans Mono",
                "Adobe Braille",
                "Cambria",
                "Futura",
                "Bell MT",
                "Courier",
                "Courier New",
                "Calibri",
                "Avenir Next",
                "Birch Std",
                "Palatino",
                "Ubuntu Regular",
                "Oswald",
                "Batang",
                "Ubuntu Medium",
                "Cantarell",
                "Droid Serif",
                "Roboto",
                "Helvetica Neue",
                "Corsiva Hebrew",
                "Adobe Hebrew",
                "TI-Nspire",
                "Comic Neue",
                "Noto",
                "AlNile",
                "Palatino-Bold",
                "ArialHebrew-Light",
                "Avenir",
                "Papyrus",
                "Open Sans",
                "Times",
                "Quicksand",
                "Source Sans Pro",
                "Damascus",
                "Microsoft Sans Serif",
              ],
              c = [],
              b = 0;
            b < i.length;
            b++
          ) {
            var d = !1;
            for (r = 0; r < e.length; r++)
              if (
                ((m.style.fontFamily = i[b] + "," + e[r]),
                document.body.appendChild(m),
                (m.offsetWidth === n[r] && m.offsetHeight === o[r]) || (d = !0),
                document.body.removeChild(m),
                d)
              ) {
                c.push(b);
                break;
              }
          }
          a = c.sort();
        }
        return a.join(",");
    }
    function pluginInfo() {
        if (void 0 === navigator.plugins) return null;
        for (var a = t.PLUGINS.length, e = "", n = 0; n < a; n++) {
        var o = t.PLUGINS[n];
        void 0 !== navigator.plugins[o] && (e = e + "," + n);
        }
        return e;
    }
    function indexedDbKey() {
        return !!hasIndexedDB();
    }
    function sessionStorageKey() {
        return !!hasSessionStorage();
    }
    function localStorageKey() {
        return !!hasLocalStorage();
    }
    function hasSessionStorage() {
        try {
        return !!window.sessionStorage;
        } catch (a) {
        return !1;
        }
    }
    function hasLocalStorage() {
        try {
        return !!window.localStorage;
        } catch (a) {
        return !1;
        }
    }
    function hasIndexedDB() {
        return !!window.indexedDB;
    }
    function timezoneOffsetKey() {
        return new Date().getTimezoneOffset();
    }
    function webrtcKey() {
        return (
          "function" == typeof window.RTCPeerConnection ||
          "function" == typeof window.mozRTCPeerConnection ||
          "function" == typeof window.webkitRTCPeerConnection
        );
    }
    function get_cf_date() {
        return Date["now"] ? Date["now"]() : +new Date();
    }
    function fonts_optm() {
        var a = 200,
          e = get_cf_date(),
          n = [];
        if (!sf4() && document.body) {
          var o = ["sans-serif", "monospace"],
            m = [0, 0],
            r = [0, 0],
            i = document.createElement("div");
          i.style.cssText =
            "position: relative; left: -9999px; visibility: hidden; display: block !important";
          var c;
          for (c = 0; c < o.length; c++) {
            var b = document.createElement("span");
            (b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-."),
              (b.style.fontSize = "90px"),
              (b.style.fontFamily = o[c]),
              i.appendChild(b);
          }
          for (document.body.appendChild(i), c = 0; c < i.childNodes.length; c++)
            (b = i.childNodes[c]), (m[c] = b.offsetWidth), (r[c] = b.offsetHeight);
          if ((document.body.removeChild(i), get_cf_date() - e > a)) return "";
          var d = [
              "Geneva",
              "Lobster",
              "New York",
              "Century",
              "Apple Gothic",
              "Minion Pro",
              "Apple LiGothic",
              "Century Gothic",
              "Monaco",
              "Lato",
              "Fantasque Sans Mono",
              "Adobe Braille",
              "Cambria",
              "Futura",
              "Bell MT",
              "Courier",
              "Courier New",
              "Calibri",
              "Avenir Next",
              "Birch Std",
              "Palatino",
              "Ubuntu Regular",
              "Oswald",
              "Batang",
              "Ubuntu Medium",
              "Cantarell",
              "Droid Serif",
              "Roboto",
              "Helvetica Neue",
              "Corsiva Hebrew",
              "Adobe Hebrew",
              "TI-Nspire",
              "Comic Neue",
              "Noto",
              "AlNile",
              "Palatino-Bold",
              "ArialHebrew-Light",
              "Avenir",
              "Papyrus",
              "Open Sans",
              "Times",
              "Quicksand",
              "Source Sans Pro",
              "Damascus",
              "Microsoft Sans Serif",
            ],
            k = document.createElement("div");
          k.style.cssText =
            "position: relative; left: -9999px; visibility: hidden; display: block !important";
          for (var s = [], l = 0; l < d.length; l++) {
            var u = document.createElement("div");
            for (c = 0; c < o.length; c++) {
              var b = document.createElement("span");
              (b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-."),
                (b.style.fontSize = "90px"),
                (b.style.fontFamily = d[l] + "," + o[c]),
                u.appendChild(b);
            }
            k.appendChild(u);
          }
          if (get_cf_date() - e > a) return "";
          document.body.appendChild(k);
          for (var l = 0; l < k.childNodes.length; l++) {
            var _ = !1,
              u = k.childNodes[l];
            for (c = 0; c < u.childNodes.length; c++) {
              var b = u.childNodes[c];
              if (b.offsetWidth !== m[c] || b.offsetHeight !== r[c]) {
                _ = !0;
                break;
              }
            }
            if ((_ && s.push(l), get_cf_date() - e > a)) break;
          }
          document.body.removeChild(k), (n = s.sort());
        }
        return n.join(",");
    }
    function valStr() {
        var a = screen.colorDepth ? screen.colorDepth : -1,
          e = screen.pixelDepth ? screen.pixelDepth : -1,
          n = navigator.cookieEnabled ? navigator.cookieEnabled : -1,
          o = navigator.javaEnabled ? navigator.javaEnabled() : -1,
          m = navigator.doNotTrack ? navigator.doNotTrack : -1,
          r = "default";
        r = !1 ? (!1 ? fonts_optm() : fonts()) : "dis";
        data["fpValstr"] = [
          canvas("<@nv45. F1n63r,Pr1n71n6!"),
          canvas("m,Ev!xV67BaU> eh2m<f3AG3@"),
          r,
          pluginInfo(),
          sessionStorageKey(),
          localStorageKey(),
          indexedDbKey(),
          timezoneOffsetKey(),
          webrtcKey(),
          a,
          e,
          n,
          o,
          m,
        ]
          .join(";")
          .replace(/\"/g, '\\\\"');
    }
    function brave() {
        if (navigator.brave && navigator.brave.isBrave()) {
          data["brave"] = "1";
        } else {
          data["brave"] = "0";
        }
    }
    function csh() {  
        if (window.speechSynthesis) {
          var a = window.speechSynthesis.getVoices();
    
          if (a.length > 0) {
            for (var t = "", e = 0; e < a.length; e++)
              t += a[e].voiceURI + "_" + a[e].lang;
    
            data["ssh"] = ats(mn_s(t));
            data['ssl'] = (a.length).toString()
          } else data["ssh"] = "0";
        } else data["ssh"] = "n";
    }
    function getmr() {
        try {
          if (
            "undefined" == typeof performance ||
            void 0 === performance["now"] ||
            "undefined" == typeof JSON
          )
            return void (data["mr"] = "undef");
    
          for (
            var a = "",
              t = 1e3,
              e = [
                Math["abs"],
                Math["acos"],
                Math["asin"],
                Math["atanh"],
                Math["cbrt"],
                Math["exp"],
                Math["random"],
                Math["round"],
                Math["sqrt"],
                isFinite,
                isNaN,
                parseFloat,
                parseInt,
    
                JSON["parse"],
              ],
              n = 0;
            n < e["length"];
            n++
          ) {
            var o = [],
              m = 0,
              r = performance["now"](),
              i = 0,
              c = 0;
    
            if (void 0 !== e[n]) {
              for (i = 0; i < t && m < 0.6; i++) {
                for (var b = performance["now"](), d = 0; d < 4e3; d++) e[n](3.14);
    
                var k = performance["now"]();
    
                o["push"](Math["round"](1e3 * (k - b))), (m = k - r);
              }
    
              var l = o["sort"]();
    
              c = l[Math["floor"](l["length"] / 2)] / 5;
            }
    
            a = a + c + ",";
          }
    
          data["mr"] = a;
        } catch (a) {
          data["mr"] = "exception";
        }
    }
    function wgl() {
        try {
          var a = document.createElement("canvas"),
            t = a.getContext("webgl");
    
          (data["wv"] = "n"),
            (data["wr"] = "n"),
            (data["weh"] = "n"),
            (data["wl"] = 0),
            t &&
              ((data["wv"] = "b"),
              (data["wr"] = "b"),
              (data["weh"] = "b"),
              t.getSupportedExtensions() &&
                ((data["weh"] = ats(
                  mn_s(JSON.stringify(t.getSupportedExtensions().sort()))
                )),
                (data["wl"] = t.getSupportedExtensions().length),
                t.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >=
                  0 &&
                  ((data["wv"] = t.getParameter(
                    t.getExtension("WEBGL_debug_renderer_info")
                      .UNMASKED_VENDOR_WEBGL
                  )),
                  (data["wr"] = t.getParameter(
                    t.getExtension("WEBGL_debug_renderer_info")
                      .UNMASKED_RENDERER_WEBGL
                  )))));
        } catch (a) {
          (data["wv"] = "e"),
            (data["wr"] = "e"),
            (data["weh"] = "e"),
            (data["wl"] = 0);
        }
    }
    function np() {
        var a = [],
          t = [
            "geolocation",
            "notifications",
            "push",
            "midi",
            "camera",
            "microphone",
            "speaker",
            "device-info",
            "background-sync",
            "bluetooth",
            "persistent-storage",
            "ambient-light-sensor",
            "accelerometer",
            "gyroscope",
            "magnetometer",
            "clipboard",
            "accessibility-events",
            "clipboard-read",
            "clipboard-write",
            "payment-handler",
          ];
    
        try {
          if (!navigator["permissions"]) return 6;
    
          var e = function (t, e) {
              return navigator["permissions"]
                ["query"]({
                  name: t,
                })
                ["then"](function (t) {
                  switch (t["state"]) {
                    case "prompt":
                      a[e] = 1;
    
                      break;
    
                    case "granted":
                      a[e] = 2;
    
                      break;
    
                    case "denied":
                      a[e] = 0;
    
                      break;
    
                    default:
                      a[e] = 5;
                  }
                })
                ["catch"](function (t) {
                  a[e] =
                    -1 !==
                    t["message"]["indexOf"](
                      "is not a valid enum value of type PermissionName"
                    )
                      ? 4
                      : 3;
                });
            },
            n = t["map"](function (a, t) {
              return e(a, t);
            });
    
          Promise["all"](n)["then"](function () {
            var N = a["join"]("");
    
            data["np"] = N;
    
            load();
          });
        } catch (a) {
          return 7;
        }
    }
    function ats(a) {
        for (var t = "", e = 0; e < a.length; e++)
          t +=
            2 == a[e].toString(16).length
              ? a[e].toString(16)
              : "0" + a[e].toString(16);
    
        return t;
    }
    function fm() {
        var a = ['Monospace', 'Wingdings 2', 'ITC Bodoni 72 Bold', 'Menlo', 'Gill Sans MT', 'Lucida Sans', 'Bodoni 72', 'Serif', 'Shree Devanagari 714', 'Microsoft Tai Le', 'Nimbus Roman No 9 L', 'Candara', 'Press Start 2P', 'Waseem'],
          t = document.createElement("span");
    
        (t.innerHTML = "mmmmmmmmlli"), (t.style.fontSize = "192px");
    
        var e = "",
          n = document.getElementsByTagName("body")[0];
    
        if (n) {
          for (var o in a)
            (t.style.fontFamily = a[o]),
              n.appendChild(t),
              (e += a[o] + ":" + t.offsetWidth + "," + t.offsetHeight + ";"),
              n.removeChild(t);
    
          data["fmh"] = ats(mn_s(e));
        } else fmh = "";
    
        data["fmz"] =
          "devicePixelRatio" in window && void 0 !== window.devicePixelRatio
            ? window.devicePixelRatio
            : -1;
    }
    function mn_s(a) {
        var t = [
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298,
          ],
          e = 1779033703,
          n = 3144134277,
          o = 1013904242,
          m = 2773480762,
          r = 1359893119,
          i = 2600822924,
          c = 528734635,
          b = 1541459225,
          d = encode_utf8(a),
          k = 8 * d.length;
    
        d += String.fromCharCode(128);
    
        for (
          var s = d.length / 4 + 2, l = Math.ceil(s / 16), u = new Array(l), _ = 0;
          _ < l;
          _++
        ) {
          u[_] = new Array(16);
    
          for (var f = 0; f < 16; f++)
            u[_][f] =
              (d.charCodeAt(64 * _ + 4 * f) << 24) |
              (d.charCodeAt(64 * _ + 4 * f + 1) << 16) |
              (d.charCodeAt(64 * _ + 4 * f + 2) << 8) |
              (d.charCodeAt(64 * _ + 4 * f + 3) << 0);
        }
    
        var p = k / Math.pow(2, 32);
    
        (u[l - 1][14] = Math.floor(p)), (u[l - 1][15] = k);
    
        for (var v = 0; v < l; v++) {
          for (
            var h,
              g = new Array(64),
              w = e,
              y = n,
              E = o,
              S = m,
              C = r,
              h = i,
              M = c,
              x = b,
              _ = 0;
            _ < 64;
            _++
          ) {
            var j, A, L, P, T, D;
    
            _ < 16
              ? (g[_] = u[v][_])
              : ((j =
                  rotate_right(g[_ - 15], 7) ^
                  rotate_right(g[_ - 15], 18) ^
                  (g[_ - 15] >>> 3)),
                (A =
                  rotate_right(g[_ - 2], 17) ^
                  rotate_right(g[_ - 2], 19) ^
                  (g[_ - 2] >>> 10)),
                (g[_] = g[_ - 16] + j + g[_ - 7] + A)),
              (A = rotate_right(C, 6) ^ rotate_right(C, 11) ^ rotate_right(C, 25)),
              (L = (C & h) ^ (~C & M)),
              (P = x + A + L + t[_] + g[_]),
              (j = rotate_right(w, 2) ^ rotate_right(w, 13) ^ rotate_right(w, 22)),
              (T = (w & y) ^ (w & E) ^ (y & E)),
              (D = j + T),
              (x = M),
              (M = h),
              (h = C),
              (C = (S + P) >>> 0),
              (S = E),
              (E = y),
              (y = w),
              (w = (P + D) >>> 0);
          }
    
          (e += w),
            (n += y),
            (o += E),
            (m += S),
            (r += C),
            (i += h),
            (c += M),
            (b += x);
        }
    
        return [
          (e >> 24) & 255,
          (e >> 16) & 255,
          (e >> 8) & 255,
          255 & e,
          (n >> 24) & 255,
          (n >> 16) & 255,
          (n >> 8) & 255,
          255 & n,
          (o >> 24) & 255,
          (o >> 16) & 255,
          (o >> 8) & 255,
          255 & o,
          (m >> 24) & 255,
          (m >> 16) & 255,
          (m >> 8) & 255,
          255 & m,
          (r >> 24) & 255,
          (r >> 16) & 255,
          (r >> 8) & 255,
          255 & r,
          (i >> 24) & 255,
          (i >> 16) & 255,
          (i >> 8) & 255,
          255 & i,
          (c >> 24) & 255,
          (c >> 16) & 255,
          (c >> 8) & 255,
          255 & c,
          (b >> 24) & 255,
          (b >> 16) & 255,
          (b >> 8) & 255,
          255 & b,
        ];
    }
    function rotate_right(a, t) {
        return (a >>> t) | (a << (32 - t));
    }
    
    function encode_utf8(a) {
        return unescape(encodeURIComponent(a));
    }
    



    data["canvas"] = {
        value1: canvas("<@nv45. F1n63r,Pr1n71n6!"),
    
        value2: canvas("<@nv45. F1n63r,Pr1n71n6!"),
    };
    data["fonts_optm"] = fonts_optm();

    data["fonts"] = fonts();

    data["rCFP"] = rCFP

    data["rVal"] = rVal

    var chrome_loadtime = function RX() {
      if (window['chrome']) {
          var EX = window['chrome']['loadTimes']()
              , hX = ''
              , BX = ('')['concat']((1 & ('function () { [native code] }' !== (Object['getOwnPropertyDescriptor'](window['chrome'], 'loadTimes'))['value']['toString']())), ',');
          if (EX) {
              var DX = Object['keys'](EX)
                  , IX =ats(mn_s(window['JSON']['stringify'](DX)))
                  , QX = EX['navigationType']
                  , FX = {'requestTime': '0', 'startLoadTime': '1', 'commitLoadTime': '2', 'finishDocumentLoadTime': '3', 'finishLoadTime': '4', 'firstPaintTime': '5', 'firstPaintAfterLoadTime': '6', 'navigationType': '7', 'wasFetchedViaSpdy': '8', 'wasNpnNegotiated': '9', 'npnNegotiatedProtocol': 'A', 'wasAlternateProtocolAvailable': 'B', 'connectionInfo': 'C'};
              for (var pX in DX)
                  hX += (pX in FX) ? FX[pX] : pX;
              BX += ((('')['concat'](IX, ','))['concat'](hX, ','))['concat'](QX);
          } else
              BX += 'nlt';
          return BX;
      }
      return 'nc,,,';
    }()

    var chrome_runtime = function XX() {
        return window['chrome'] && window['chrome']['runtime'] && window['chrome']['runtime']['sendMessage'] && window['chrome']['runtime']['connect'] && ('function' == typeof window['chrome']['runtime']['sendMessage']) && ('function'== typeof window['chrome']['runtime']['sendMessage']) ? (function qX() {
            return !(('prototype' in window['chrome']['runtime']['sendMessage']) || ('prototype' in window['chrome']['runtime']['connect']));
        }() && function VX() {
            try {
                return new window['chrome']['runtime']['sendMessage'](),
                    new window['chrome']['runtime']['connect'](),
                    false;
            } catch (SX) {
                return ('TypeError' !== SX['constructor']['name']);
            }
        }() ? function JX() {
            var xX = [];
            for (var ZX in window['chrome']['runtime'])
                if (Object['prototype']['hasOwnProperty'].call(window['chrome']['runtime'], ZX))
                    for (var jX in xX['push'](ZX),
                        window['chrome']['runtime'][ZX])
                        Object['prototype']['hasOwnProperty'].call(window['chrome']['runtime'][ZX], jX) && xX['push'](jX);
            return ats(mn_s(window['JSON']['stringify'](xX)));
        }() : '0')['toString']() : '-1';
    }()

    var file_path  = function Z0() {
      try {
          var j0 = 0
              , U0 = Object['getOwnPropertyDescriptor'](window['File']['prototype'], 'path');
          return U0 && (j0++,
              U0['get'] && func_dayu((U0['get']['toString']())['indexOf']('() { [native code] }'), -(1)) && j0++),
              j0['toString']();
      } catch (rX) {
          return '-1';
      }
    }()

    var html_iframe_el_data = function z5() {
      return window.HTMLIFrameElement ? Object.getOwnPropertyDescriptor(window.HTMLIFrameElement.prototype, 'loading') ? 1 : -2 : -1;
    }()
    
    var color_ele_data = function g2() {
      try {
          var l2 = window['document']['createElement']('div');
          l2['style']['display'] = 'none',
          window['document']['head']['append'](l2);
          var X2 = {};
          return ['ActiveBorder', 'ActiveCaption', 'ActiveText', 'AppWorkspace', 'Background', 'ButtonBorder', 'ButtonFace', 'ButtonHighlight', 'ButtonShadow', 'ButtonText', 'Canvas', 'CanvasText', 'CaptionText', 'Field', 'FieldText', 'GrayText', 'Highlight', 'HighlightText', 'InactiveBorder', 'InactiveCaption', 'InactiveCaptionText', 'InfoBackground', 'InfoText', 'LinkText', 'Mark', 'MarkText', 'Menu', 'MenuText', 'Scrollbar', 'ThreeDDarkShadow', 'ThreeDFace', 'ThreeDHighlight', 'ThreeDLightShadow', 'ThreeDShadow', 'VisitedText', 'Window', 'WindowFrame', 'WindowText']['forEach'](function(RO) {
              l2['style'] = ('background-color: ')['concat'](RO, ' !important');
              var wO = (window['getComputedStyle'](l2))['backgroundColor'];
              X2[RO] = wO;
          }),
          l2['parentNode']['removeChild'](l2),
          ats(mn_s(window['JSON']['stringify'](X2)));
      } catch (qO) {
          return qO['message'];
      }
    }()

    var plugin_info = function pi() {
      var YJ = function LJ() {
          try {
              return window['navigator']['plugins'] && window['navigator']['plugins'][0] && window['navigator']['plugins'][0][0] && window['navigator']['plugins'][0][0]['enabledPlugin'] ? (window['navigator']['plugins'][0][0]['enabledPlugin'] !== window['navigator']['plugins'][0]) ? '1' : '0' : '-1';
          } catch (pJ) {
            document.write(pJ)
              return '-1';
          }
      }()
          , kJ = function XJ() {
              try {
                  var bJ = (Math['floor']((1000 * Math['random']())))['toString']();
                  return window['navigator']['plugins']['refresh'] = bJ,
                      (window['navigator']['plugins']['refresh'] !== bJ) ? '1' : '0';
              } catch (VJ) {
                document.write(VJ)

                  return '-1';
              }
          }()
          , SJ = function NJ() {
              try {
                  return window['navigator']['plugins'] && window['navigator']['plugins'][0] ? (window['navigator']['plugins']['item'](4294967296) !== window['navigator']['plugins'][0]) ? '1' : '0' : '-1';
              } catch (vJ) {
                document.write(vJ)

                  return '-1';
              }
          }();
        return ((('')['concat'](YJ, ','))['concat'](kJ, ','))['concat'](SJ);
    }()

    var performance_info = function perfinf() {
        try {
            var ping_rtt = function () {
                var AJ = '-1';
                try {
                    return window['navigator'] && window['navigator']['connection'] && window['navigator']['connection']['rtt'] ? window['navigator']['connection']['rtt']['toString']() : AJ;
                } catch (WJ) {
                    return AJ;
                }
            }()
                , temp_str = '-1,-1,-1';
            if (window['performance'] && window['performance']['memory']) {
                var OJ = window['performance']['memory'];
                temp_str = ((('')['concat'](OJ['jsHeapSizeLimit'], ','))['concat'](OJ['totalJSHeapSize'], ','))['concat'](OJ['usedJSHeapSize']);
            }
            return (('')['concat'](temp_str, ','))['concat'](ping_rtt);
        } catch (cJ) {
            return '-1,-1,-1,-1';
        }
    }()

    function device_core_info(obj) {
        return {
            'hardwareConcurrency': obj['navigator']['hardwareConcurrency']['toString'](),
            'plugins': obj['navigator']['plugins']['length'],
            'chromeObj': obj['chrome']};
    }

    var device_info = function dvinf() {
        try {
            var ua = window.navigator.userAgent;
            if (((ua['indexOf']('Trident/7.0') > -(1)) ? 11 : (ua['indexOf']('Trident/6.0') > -(1)) ? 10 : (ua['indexOf']('Trident/5.0') > -(1)) ? 9 : 0 >= 9))
                return '';
            var temp_window = window['document']['createElement']('iframe');
            temp_window['style']['display'] = 'none',
                window['document']['head']['appendChild'](temp_window);
            var content_window = temp_window['contentWindow']
                , Kv = function tv(Wv) {
                    var wv, lv, Gv = 'Maximum call stack size exceeded';
                    try {
                        wv = Wv['srcdoc'];
                    } catch (Cv) {
                        Cv['message']['includes'](Gv) && (wv = 'M');
                    }
                    var gv = (Math['floor']((1000 * Math['random']())))['toString']();
                    return Wv['srcdoc'] = gv,
                        lv = (Wv['srcdoc'] !== gv),
                        (('')['concat'](wv, ','))['concat'](((1 & lv))['toString']());
                }(temp_window)
                , cv = function Yv(cv) {
                    if (cv['chrome'] && ((Object['keys'](cv['chrome']))['length'] > 0)) {
                        var pv = [];
                        for (var kv in cv['chrome'])
                            Object['prototype']['hasOwnProperty'].call(cv['chrome'], kv) && pv['push'](kv);
                        return ats(mn_s(pv['join'](',')));
                    }
                    return '-2';
                }(content_window)
                , Xv = function bv(qv) {
                    var Vv = '-1'
                        , Sv = '-1'
                        , Nv = new window['RegExp'](/function (get )?contentWindow(\(\)) \{(\n {3})? \[native code\][\n ]\}/);
                    try {
                        if (Object && Object['getOwnPropertyDescriptor']) {
                            var Jv = Object['getOwnPropertyDescriptor'](window['HTMLIFrameElement']['prototype'], 'contentWindow');
                            Jv && (Vv = Nv['test'](Jv['get']['toString']()));
                        }
                        Sv = (window !== qv);
                    } catch (xv) {
                        Vv = '-2',
                            Sv = '-2';
                    }
                    return (((Vv + Sv) << 1))['toString']();
                }(content_window)
                , hardware_info = function () {
                    var Uv = window['document']['createElement']('iframe');
                    Uv['src'] = 'https://',
                        Uv['style']['display'] = 'none',
                        window['document']['head']['appendChild'](Uv);
                    var sv = Uv['contentWindow']
                        , zv = device_core_info(sv)
                        , rJ = function TJ(nJ) {
                            var RJ = 'NA'
                                , hJ = 'NA';
                            if (nJ['document']) {
                                var BJ = (nJ['document']['createElement']('canvas'))['getContext']('webgl');
                                if (BJ) {
                                    var DJ = BJ['getExtension']('WEBGL_debug_renderer_info');
                                    DJ && (RJ = BJ['getParameter'](DJ['UNMASKED_VENDOR_WEBGL']),
                                        hJ = BJ['getParameter'](DJ['UNMASKED_RENDERER_WEBGL']));
                                }
                            }
                            return {'webGLVendor': RJ, 'webGLRenderer': hJ};
                        }(sv)
                        , QJ = device_core_info(window)
                        , FJ = '';
                    return Uv['remove'](),
                        FJ += zv['hardwareConcurrency'] + ','+zv['plugins']+','+(1 & zv['chromeObj'])['toString'](),
                        FJ += ',' + QJ['hardwareConcurrency']+ ','+QJ['plugins']+ ','+((1 & QJ['chromeObj']))['toString'](),
                        FJ + (',') + rJ['webGLVendor']+ ','+rJ['webGLRenderer'];
                }();
            return temp_window['remove'](),
                [Kv, cv, Xv, hardware_info]['join'](',');
        } catch (dJ) {
          document.write(dJ)
            return ',,,';
        }
      }()

      var device_data = function () {
        var Qk = 'nikotm'
        var q6 = window.navigator.userAgent
            , N6 = -(1)
            , v6 = -(1)
            , J6 = -(1)
            , x6 = -(1)
            , Z6 = -(1)
            , j6 = -(1)
            , U6 = -(1);
        try {
            N6 = window['screen'] ? window['screen']['availWidth'] : -(1);
        } catch (z6) {
            N6 = -(1);
        }
        try {
            v6 = window['screen'] ? window['screen']['availHeight'] : -(1);
        } catch (rk) {
            v6 = -(1);
        }
        try {
            J6 = window['screen'] ? window['screen']['width'] : -(1);
        } catch (Tk) {
            J6 = -(1);
        }
        try {
            x6 = window['screen'] ? window['screen']['height'] : -(1);
        } catch (Rk) {
            x6 = -(1);
        }
        try {
            Z6 = window['innerHeight'] || (window['document']['body'] && ('clientHeight' in window['document']['body']) ? window['document']['body']['clientHeight'] : window['document']['documentElement'] && ('clientHeight' in window['document']['documentElement']) ? window['document']['documentElement']['clientHeight'] : -(1));
        } catch (Bk) {
            Z6 = -(1);
        }
        try {
            j6 = window['innerWidth'] || (window['document']['body'] && ('clientWidth' in window['document']['body']) ? window['document']['body']['clientWidth'] : window['document']['documentElement'] && ('clientWidth' in window['document']['documentElement']) ? window['document']['documentElement']['clientWidth'] : -(1));
        } catch (Dk) {
            j6 = -(1);
        }
        try {
            U6 = ('outerWidth' in window) && (0 !== window['outerWidth']) ? window['outerWidth'] : -(1);
        } catch (Ik) {
            U6 = -(1);
        }
        var func_plus = function (S3, N3) {
          return S3 + N3;
        };
        var func_xiaoyu_wei = function (VTT, STT) {
          return VTT << STT;
      };
        var Kk = window.navigator.productSub
            , tk = window.navigator.language
            , Wk = window.navigator.product
            , wk = 0
            , lk = window['_phantom'] ? 1 : 0
            , Mk = window['webdriver'] ? 1 : 0
            , Ok = window['domAutomation'] ? 1 : 0;
        return ((((((((((((((((((((('')['concat'](q6, ',uaend,'))['concat'](function ck() {
            var Yk, Lk, pk = window['addEventListener'] ? 1 : 0, kk = window['XMLHttpRequest'] ? 1 : 0, bk = window['XDomainRequest'] ? 1 : 0, Vk = window['emit'] ? 1 : 0, Nk = window['DeviceOrientationEvent'] ? 1 : 0, vk = window['DeviceMotionEvent'] ? 1 : 0, Jk = window['TouchEvent'] ? 1 : 0, xk = window['spawn'] ? 1 : 0, jk = window['chrome'] ? 1 : 0, zk = Function['prototype'].bind ? 1 : 0, n5 = window['Buffer'] ? 1 : 0, R5 = window['PointerEvent'] ? 1 : 0;
            try {
                Yk = window['innerWidth'] ? 1 : 0;
            } catch (h5) {
                Yk = 0;
            }
            try {
                Lk = window['outerWidth'] ? 1 : 0;
            } catch (B5) {
                Lk = 0;
            }
            return func_plus(func_plus(func_plus(func_plus(func_plus(func_plus(func_plus(func_plus(func_plus(func_plus(func_plus(func_plus(func_plus(pk, func_xiaoyu_wei(kk, 1)), func_xiaoyu_wei(bk, 2)), func_xiaoyu_wei(Vk, 3)), func_xiaoyu_wei(Nk, 4)), func_xiaoyu_wei(vk, 5)), func_xiaoyu_wei(Jk, 6)), func_xiaoyu_wei(xk, 7)), func_xiaoyu_wei(Yk, 8)), func_xiaoyu_wei(Lk, 9)), func_xiaoyu_wei(jk, 10)), func_xiaoyu_wei(zk, 11)), func_xiaoyu_wei(n5, 12)), func_xiaoyu_wei(R5, 13));
        }(), ','))['concat'](Kk, ','))['concat'](tk, ','))['concat'](Wk, ','))['concat'](wk, ','))['concat'](lk, ','))['concat'](Mk, ','))['concat'](Ok, ','))['concat'](Qk, ','))['concat'](0, ','))['concat'](N6, ','))['concat'](v6, ','))['concat'](J6, ','))['concat'](x6, ','))['concat'](j6, ','))['concat'](Z6, ','))['concat'](U6, ','))['concat'](function P5() {
            var I5 = [];
            return I5['push']((',cpen:')['concat'](window['callPhantom'] ? 1 : 0)),
                I5['push'](('i1:')['concat'](window['ActiveXObject'] && ('ActiveXObject' in window) ? 1 : 0)),
                I5['push'](('dm:')['concat'](('number' == typeof window['document']['documentMode']) ? 1 : 0)),
                I5['push'](('cwen:')['concat'](window['chrome'] && window['chrome']['webstore'] ? 1 : 0)),
                I5['push'](('non:')['concat'](window['navigator']['onLine'] ? 1 : 0)),
                I5['push'](('opc:')['concat'](window['opera'] ? 1 : 0)),
                I5['push'](('fc:')['concat'](('undefined' != typeof window['InstallTrigger']) ? 1 : 0)),
                I5['push'](('sc:')['concat'](window['HTMLElement'] && ((Object['prototype']['toString'].call(window['HTMLElement']))['indexOf']('Constructor') > 0) ? 1 : 0)),
                I5['push'](('wrc:')['concat'](('function' == typeof window['RTCPeerConnection']) || ('function' == typeof window['mozRTCPeerConnection']) || ('function' == typeof window['webkitRTCPeerConnection']) ? 1 : 0)),
                I5['push'](('isc:')['concat'](('mozInnerScreenY' in window) ? window['mozInnerScreenY'] : 0)),
                I5['push'](('vib:')['concat'](('function' == typeof window['navigator']['vibrate']) ? 1 : 0)),
                I5['push'](('bat:')['concat'](('function' == typeof window['navigator']['getBattery']) ? 1 : 0)),
                I5['push'](('x11:')['concat'](Array['prototype']['forEach'] ? 0 : 1)),
                I5['push'](('x12:')['concat'](('FileReader' in window) ? 1 : 0)),
                I5['join'](',');
        }(), ',')));
    }();


    data['chromeLT'] = chrome_loadtime
    data['chromeRT'] = chrome_runtime
    data['filePath'] = file_path
    data['ifed'] = html_iframe_el_data
    data['ced'] = color_ele_data
    data['plginf'] = plugin_info
    data['perinf'] = performance_info
    data['dvinf'] = device_info
    data['dvdt'] = device_data


    csh();

    getmr();
  
    brave();
  
    wgl();
  
    fm();
  
    csh();
  
    valStr();

    function post(data) {
        console.log("if you're reading this, chav check")
        // console.log(data)
        document.write(JSON.stringify(data))
        try {
            response = fetch("/data/collect", {
            method: "POST",
            mode: "cors",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
            });
            document.getElementById("statusMessage").innerHTML = "Thank you!"
    
            document.getElementById("message2").innerHTML = "We have successfully collected all of the data we needed. We promise we won't use it in a bad way."
            return
        } catch (error) {
            document.write(error)

            sendError()

        }
        
        
    }
    
    function load() {
        setTimeout(function () {
            post(data);
        }, 5000);
    }
    
    setTimeout(function () {
        csh();
    }, 5000);

    setTimeout(function () {
        data.screen = {}
        data.screen.availHeight = screen.availHeight
        data.screen.availLeft = screen.availLeft
        data.screen.availTop = screen.availTop
        data.screen.availWidth = screen.availWidth
        data.screen.colorDepth = screen.colorDepth
        data.screen.height = screen.height
        data.screen.pixelDepth = screen.pixelDepth
        data.screen.width = screen.width
    }, 250);
    
    np();

}
/*
if (typeof window.orientation !== 'undefined') {
  document.getElementById('statusMessage').innerHTML = 'Unfortunately, we do not support mobile yet!'
  document.getElementById('message2').innerHTML = 'But thanks for trying <3'
} else {*/
window.onload = function () {
    setTimeout(function () {
      try {
        run();}
        catch (error) {
          document.write(error)
      }

    }, 2000);

}
