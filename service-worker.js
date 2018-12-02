/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "08ee733dd6d0060f7e41ac3213a6f7fe"
  },
  {
    "url": "assets/css/0.styles.fbaa6bc2.css",
    "revision": "dab80211c2646ffcac8adfbe0a73b88b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2776c351.js",
    "revision": "e65b8065151139017db4ebc65175ace3"
  },
  {
    "url": "assets/js/11.3a958b17.js",
    "revision": "82886287661ec463aa755c446b70a08a"
  },
  {
    "url": "assets/js/12.6acc23c2.js",
    "revision": "9888fc6387af057be9d4121d0da875f5"
  },
  {
    "url": "assets/js/13.108cb11b.js",
    "revision": "f9abb1d2f422457d5b8e8aef869f1622"
  },
  {
    "url": "assets/js/14.8b5d3973.js",
    "revision": "3caecdb299d011229d470028601926e0"
  },
  {
    "url": "assets/js/15.b951df13.js",
    "revision": "14a019a35246c6a5fdde755b277c0d1f"
  },
  {
    "url": "assets/js/16.19703a03.js",
    "revision": "df5b6503ee2f6cc883feb572462b976e"
  },
  {
    "url": "assets/js/17.79673efd.js",
    "revision": "d4a212e594ab8669cb32e34c088498a8"
  },
  {
    "url": "assets/js/18.5a69705d.js",
    "revision": "2efc135cc12e4aabdb29258d08800fa2"
  },
  {
    "url": "assets/js/19.03f437ba.js",
    "revision": "798115f0de98951d046a412a329f14c8"
  },
  {
    "url": "assets/js/2.6fc1c38a.js",
    "revision": "f52c16d7097d5e90ae41f171ab76acb8"
  },
  {
    "url": "assets/js/20.a5975a54.js",
    "revision": "05de07d6bb7994aa265111fccb515ad8"
  },
  {
    "url": "assets/js/21.775163fa.js",
    "revision": "559eee43a1b834b71e428848f1683924"
  },
  {
    "url": "assets/js/22.939a7630.js",
    "revision": "2c0288f62106c203e21285daee45b428"
  },
  {
    "url": "assets/js/23.5aee3f38.js",
    "revision": "6edb224d619836667a0c209d87e016b4"
  },
  {
    "url": "assets/js/24.9e7525a9.js",
    "revision": "7df6896da77e6dcf3de7b22f459c37b9"
  },
  {
    "url": "assets/js/25.ad49b71d.js",
    "revision": "4a2570fd5fad2bee20c34c961b12704d"
  },
  {
    "url": "assets/js/26.5087a471.js",
    "revision": "f4d60fb7f2aa6b3d4f6e9f014a795905"
  },
  {
    "url": "assets/js/27.99464a10.js",
    "revision": "09979a1c66215cb3ec53905205d8b7c5"
  },
  {
    "url": "assets/js/28.3c62a983.js",
    "revision": "aa9495a7dac8bc38bf7f3399884ff2ce"
  },
  {
    "url": "assets/js/29.da4eb5f0.js",
    "revision": "fcbcc8b30f9c6cd2207ed7f4f5c127d0"
  },
  {
    "url": "assets/js/3.ff2dc864.js",
    "revision": "9d1e1941b0d2554cd44c029585337e6a"
  },
  {
    "url": "assets/js/30.dfeb1306.js",
    "revision": "ed3a10128e0b64e799c362c40a38eb8d"
  },
  {
    "url": "assets/js/31.d0dfac39.js",
    "revision": "d9d693d1b2000a69500e402dde1c7af4"
  },
  {
    "url": "assets/js/32.d85c3ce2.js",
    "revision": "108c8e272ad7ba062b1f56063a195b8e"
  },
  {
    "url": "assets/js/33.b4c29930.js",
    "revision": "410056ed14da015b46bee1dfd4e18573"
  },
  {
    "url": "assets/js/34.d8127317.js",
    "revision": "31733656f76b405613824a8d6523a2d0"
  },
  {
    "url": "assets/js/35.e94dd36b.js",
    "revision": "c2350be9b0748a8ee1902c10f970d948"
  },
  {
    "url": "assets/js/36.1e7d4493.js",
    "revision": "ecc30a7c9dc765ea56d5c05935b87b3d"
  },
  {
    "url": "assets/js/37.72c73f94.js",
    "revision": "1e1f5e13178602e2564cd0ee3fed8a75"
  },
  {
    "url": "assets/js/38.fd67c8f0.js",
    "revision": "4f2fc65a3b127d1d63ee959442791e15"
  },
  {
    "url": "assets/js/39.05c1aa9d.js",
    "revision": "622cca27bb7689c916973c0ab70b6a01"
  },
  {
    "url": "assets/js/4.094781ec.js",
    "revision": "b5ec754e7ed009457679405e6eefd515"
  },
  {
    "url": "assets/js/40.d6e5296f.js",
    "revision": "aa3c80ab9de9a98dad3a5f2166342556"
  },
  {
    "url": "assets/js/5.3b5cadd9.js",
    "revision": "774cedc32f5b645f114498d4c915e312"
  },
  {
    "url": "assets/js/6.8fbb1460.js",
    "revision": "e09749f28f56f35c3e9a47d23b44bda6"
  },
  {
    "url": "assets/js/7.3da5958d.js",
    "revision": "5827b3bf759380228a39086781af99c4"
  },
  {
    "url": "assets/js/8.613e2a78.js",
    "revision": "cf7c2359322d87cb70f83f4c2fd5e270"
  },
  {
    "url": "assets/js/9.1dc2524d.js",
    "revision": "ab18dff74263946c6793fc46e2b66219"
  },
  {
    "url": "assets/js/app.5c886aa4.js",
    "revision": "02c61c3d24ebc925806eab3e7d5d0e94"
  },
  {
    "url": "CubeCore/index.html",
    "revision": "d157cbfe21126777c0f001522e8d1158"
  },
  {
    "url": "CubeCore/中级教程/index.html",
    "revision": "4a6afe297df6c0e5b21d2d95494ddf9f"
  },
  {
    "url": "CubeCore/中级教程/自定义高级查询.html",
    "revision": "c1223eb2c7c13771c08caaf014a8d5fa"
  },
  {
    "url": "CubeCore/入门教程/index.html",
    "revision": "a571b1293ef0fb9ab9b81e68d437b30d"
  },
  {
    "url": "CubeCore/入门教程/运行.html",
    "revision": "95257a8bd59523f25c6af224343d1e41"
  },
  {
    "url": "CubeCore/魔方core.html",
    "revision": "dd74f79e1b94d7b854a63b988ea819eb"
  },
  {
    "url": "DotNetCore/index.html",
    "revision": "e6240d16a027f4a5a1d5e2cffe655669"
  },
  {
    "url": "DotNetCore/netcore_centos.html",
    "revision": "ec8672e714cc8de0bd7688ca7af06f2e"
  },
  {
    "url": "Error/index.html",
    "revision": "51eff3cf0fe339301773ded8fdf82d36"
  },
  {
    "url": "icons/logo-256x256.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "images/logo.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "images/xcode/fundamentals/install/1.png",
    "revision": "ea0dbca124df68cb2aed7024d8ce7081"
  },
  {
    "url": "images/xcode/fundamentals/install/2.png",
    "revision": "ca4c98ee023155b28ce39e49d580472d"
  },
  {
    "url": "images/xcode/fundamentals/install/3.png",
    "revision": "af8eec8ab80056cd3e3237bd0875c4ab"
  },
  {
    "url": "images/xcode/fundamentals/install/4.png",
    "revision": "1e492d07dde8eec724aeeb86567396f5"
  },
  {
    "url": "images/xcode/fundamentals/install/5.png",
    "revision": "2b518a3ab100b411178316c065ab8441"
  },
  {
    "url": "images/xcode/fundamentals/install/6.png",
    "revision": "abbc6dd251eba64f1d2de4d67a764576"
  },
  {
    "url": "images/xcode/modeling/modeling-file/1.png",
    "revision": "ebfeb16c968e8911dbe885a91f368279"
  },
  {
    "url": "index.html",
    "revision": "7b41d7595c2048e79d3095fa7118d9c4"
  },
  {
    "url": "logo.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "Net/index.html",
    "revision": "52ffa4b96bdc83c9fdfd28c0302d4570"
  },
  {
    "url": "Net/新生命网络库客户端用法.html",
    "revision": "2450a427d606641395733b75da4f26b4"
  },
  {
    "url": "Net/新生命网络库比较典型的简单用法.html",
    "revision": "ce49de51f886ba856ae009565d379215"
  },
  {
    "url": "Redis/index.html",
    "revision": "0ddd6fcc1094c5d70fb634befbbc1f07"
  },
  {
    "url": "training/index.html",
    "revision": "d3fb00cd69ae0034cebf50d2cc27db2c"
  },
  {
    "url": "training/xcode-get-start-1.html",
    "revision": "56beb7080703dfe20f872c7c6aab68b9"
  },
  {
    "url": "XCode/CURD基础使用/index.html",
    "revision": "67362e291b2a17794afac724ce2d2cf8"
  },
  {
    "url": "XCode/EntityCache.html",
    "revision": "2c9fcc2cbf266a9ded7c54176d41d506"
  },
  {
    "url": "XCode/ExtendProperty.html",
    "revision": "755dcfe52036d23ff387d385ef820be3"
  },
  {
    "url": "XCode/fundamentals/index.html",
    "revision": "7a31fbaf6375331d131ff7df035e7c77"
  },
  {
    "url": "XCode/fundamentals/install.html",
    "revision": "d00fdb8d27f55748330aceee4545a85e"
  },
  {
    "url": "XCode/Get-Start.html",
    "revision": "cd197b51af1ef7d56815cfeee70eaf4b"
  },
  {
    "url": "XCode/index.html",
    "revision": "c598568fd1382eeb4d2128b132afef1a"
  },
  {
    "url": "XCode/Migration.html",
    "revision": "bb50c571bfd4e35ba0475f7c73c6086c"
  },
  {
    "url": "XCode/Model.html",
    "revision": "0fc7bb02daba3fc87227d41530a93347"
  },
  {
    "url": "XCode/modeling/index.html",
    "revision": "155f30882292e29a4a46d34002b92c43"
  },
  {
    "url": "XCode/modeling/modeling-file.html",
    "revision": "00bd2b49ce1f3af035c5a85d6ffd1fcd"
  },
  {
    "url": "XCode/modeling/tt-file.html",
    "revision": "680adf9c2c97d82556f8256cd3b0693a"
  },
  {
    "url": "XCode/Normal.html",
    "revision": "f4a09f04d61e96769a9a10fd5ef95a69"
  },
  {
    "url": "XCode/Search.html",
    "revision": "98118b0ae382f1887a5559b4ce7442cb"
  },
  {
    "url": "XCode/SingleCache.html",
    "revision": "ff5f620accefb64797da609e440fc84d"
  },
  {
    "url": "XCode/XML模型文件/index.html",
    "revision": "f0c46e70d713e5ec342dd2877d05f97e"
  },
  {
    "url": "XCode/入门.html",
    "revision": "6f7eddc8b97e12a81b9796fb9108c6e8"
  },
  {
    "url": "XCode/分表分库/index.html",
    "revision": "abf5139411fec80569a1ac6a93ffe973"
  },
  {
    "url": "XCode/高级功能/index.html",
    "revision": "b641d583e27b8de7ff52b4b5e25c0e00"
  },
  {
    "url": "XDoc/icons/logo-256x256.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "XDoc/logo.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "XScript/index.html",
    "revision": "1d670f95bad995a60e8ba419dc85ac01"
  },
  {
    "url": "新生命团队简史/index.html",
    "revision": "34287ff4ac6f22bc13f18cf9f9083910"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
