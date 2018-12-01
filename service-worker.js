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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1d2a8d6d38b9e688dc938b20f4f989c8"
  },
  {
    "url": "assets/css/0.styles.ca81c8eb.css",
    "revision": "26079042b395827fed51e0a8cf03679f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.97e9aa63.js",
    "revision": "11ffe33c64806efdca39d64864faf626"
  },
  {
    "url": "assets/js/11.a69e3aae.js",
    "revision": "428cb8b4f1a0dfeecd203e9a4a0d1282"
  },
  {
    "url": "assets/js/12.fee5f054.js",
    "revision": "e83def8f7224e0f1f7d7a742e9378ffd"
  },
  {
    "url": "assets/js/13.5e2202fb.js",
    "revision": "e6cf83135fa5dc4caf005e3f8e57dff1"
  },
  {
    "url": "assets/js/14.143783f7.js",
    "revision": "0acbf1ce60adf5d8b18c0f2b3303b053"
  },
  {
    "url": "assets/js/15.33841c96.js",
    "revision": "6ca8ed863451c94ea019f1d389a33b0b"
  },
  {
    "url": "assets/js/16.7d69b336.js",
    "revision": "8897c1dd5cc03ba4924cbb8385645ca7"
  },
  {
    "url": "assets/js/17.10c4ebd8.js",
    "revision": "9218df2f8cae06196a97a806e4ae9df5"
  },
  {
    "url": "assets/js/18.550f67d9.js",
    "revision": "a47088a83841adc02ecaa648d839d181"
  },
  {
    "url": "assets/js/19.d43a5194.js",
    "revision": "71c27ddbe1957c60042d66f66f34c1af"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.f25aa37c.js",
    "revision": "02fb4882a99094d1263636038aa32761"
  },
  {
    "url": "assets/js/21.8cd4c74d.js",
    "revision": "8c84200b18f07448546207a7c1b8b7fa"
  },
  {
    "url": "assets/js/22.96c7fe6f.js",
    "revision": "72d2879381cc57c305f86897f1c05824"
  },
  {
    "url": "assets/js/23.d2e4fc92.js",
    "revision": "ddea59c3860fedc886a729276fb58e87"
  },
  {
    "url": "assets/js/24.4a020ac9.js",
    "revision": "dbf1a460872254e18c8681ce7de5e3f1"
  },
  {
    "url": "assets/js/25.c0fdf408.js",
    "revision": "3e0e306d624112ecf9aa5926c8940429"
  },
  {
    "url": "assets/js/26.82275c1c.js",
    "revision": "fced3a961d4a82db27bcd5c7e1e70e29"
  },
  {
    "url": "assets/js/27.f7108c07.js",
    "revision": "b5c228e55cf88b089fd20be7a8f9a4b7"
  },
  {
    "url": "assets/js/28.868ab46f.js",
    "revision": "6baaaf1f3062b717c7771480d980f318"
  },
  {
    "url": "assets/js/29.b7d0aa6c.js",
    "revision": "b8ae18c44640fae6e0abbf70c77418a0"
  },
  {
    "url": "assets/js/3.d30acce8.js",
    "revision": "90399455d50e3ec5a5b2f2089a77bba4"
  },
  {
    "url": "assets/js/30.9a5f68f0.js",
    "revision": "938349557df9073d7c33fca1f07bc5f5"
  },
  {
    "url": "assets/js/31.b0195c43.js",
    "revision": "cef264a865feeb3f72ce87bf878784ef"
  },
  {
    "url": "assets/js/32.da0b9d42.js",
    "revision": "e93d9fbcdafeeb4ec39da1034acde380"
  },
  {
    "url": "assets/js/33.5bf15016.js",
    "revision": "aa7f4af52db53fe2a0590f8e4c5137fc"
  },
  {
    "url": "assets/js/34.0b252232.js",
    "revision": "3963e45688c04d7b0e297100a78477a8"
  },
  {
    "url": "assets/js/35.8e117106.js",
    "revision": "3bfd5638b6d95e3c5a25cc13dd602bd3"
  },
  {
    "url": "assets/js/36.28894df3.js",
    "revision": "7fe33beeab5c900f5b9ce406d19b654d"
  },
  {
    "url": "assets/js/37.6caa4248.js",
    "revision": "f7e70538b651496de8df71dc5881a33d"
  },
  {
    "url": "assets/js/38.bff14845.js",
    "revision": "cab5c9c5002085e8a3c8689a7e0a9b16"
  },
  {
    "url": "assets/js/39.87adbd8d.js",
    "revision": "75e64c230d2101d0eabe9b30d371d9b8"
  },
  {
    "url": "assets/js/4.35bcbe28.js",
    "revision": "84213a7f7a923513ba2db3061a20966c"
  },
  {
    "url": "assets/js/40.186a2f61.js",
    "revision": "cf44011653f421a58ccef9612e8d7566"
  },
  {
    "url": "assets/js/5.7f76498e.js",
    "revision": "92b5f0cb191a16cda262811bfd14288f"
  },
  {
    "url": "assets/js/6.89fa9cf4.js",
    "revision": "4c8f759a53aaca26a60927b9272307bf"
  },
  {
    "url": "assets/js/7.5d689343.js",
    "revision": "7f59416df5dfe9b75d3487596e3d73b8"
  },
  {
    "url": "assets/js/8.f28a93ab.js",
    "revision": "39ae7bbc4991ba757d75593a1dcb09b2"
  },
  {
    "url": "assets/js/9.19cea77c.js",
    "revision": "e3c5f9adfa71c1d5b30b09d2840f7116"
  },
  {
    "url": "assets/js/app.002cd9dd.js",
    "revision": "4d518b2dbddc7aace0579657672f96a7"
  },
  {
    "url": "CubeCore/index.html",
    "revision": "f4769757be7a89049018635e5e991f10"
  },
  {
    "url": "CubeCore/中级教程/index.html",
    "revision": "587cb07dd95e4ea37525b6ae95c841c6"
  },
  {
    "url": "CubeCore/中级教程/自定义高级查询.html",
    "revision": "1cdbd5e03a5b16ac1c8bb1309532518f"
  },
  {
    "url": "CubeCore/入门教程/index.html",
    "revision": "3d447eb5547c93b37aaa578546586054"
  },
  {
    "url": "CubeCore/入门教程/运行.html",
    "revision": "12626a6c014c5fe392b7ab51d1694715"
  },
  {
    "url": "CubeCore/魔方core.html",
    "revision": "997b32a2caabdc2d5cc6a333c16c8876"
  },
  {
    "url": "DotNetCore/index.html",
    "revision": "734112a412839e9bd1a6be6cc7c0aed0"
  },
  {
    "url": "DotNetCore/netcore_centos.html",
    "revision": "2c82e5b31696b4d0c6859b369a116f89"
  },
  {
    "url": "Error/index.html",
    "revision": "b0b9b4405d13a4b8eadb57c84d97bb05"
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
    "revision": "7c0e363f9a0f09ba864c19c17a224032"
  },
  {
    "url": "logo.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "Net/index.html",
    "revision": "8098970a0df0eadc6398d29b59027531"
  },
  {
    "url": "Net/新生命网络库客户端用法.html",
    "revision": "551b817622ec4a60eecbaacedd8c29a5"
  },
  {
    "url": "Net/新生命网络库比较典型的简单用法.html",
    "revision": "899d4a7988bdb8697cd5379e6451f118"
  },
  {
    "url": "Redis/index.html",
    "revision": "93de5e8c708057f62e7085ec532392df"
  },
  {
    "url": "training/index.html",
    "revision": "974d251b31f74a5e15ffdd0f0c67ec01"
  },
  {
    "url": "training/xcode-get-start-1.html",
    "revision": "f8573bd4937e75ac1e3db9ac8de7bfac"
  },
  {
    "url": "XCode/CURD基础使用/index.html",
    "revision": "498d9ec5e4a4542f9d88aa5abc874d23"
  },
  {
    "url": "XCode/EntityCache.html",
    "revision": "745c12280e3e43edc5648b16067f71be"
  },
  {
    "url": "XCode/ExtendProperty.html",
    "revision": "9111257e60dc761cad7a30d175341590"
  },
  {
    "url": "XCode/fundamentals/index.html",
    "revision": "a8acd46c435f5b6374a35627ae303759"
  },
  {
    "url": "XCode/fundamentals/install.html",
    "revision": "c1065a6e91bc4a32fa6091bc09bbebb7"
  },
  {
    "url": "XCode/Get-Start.html",
    "revision": "f66068f09a30a48a2d10edc940c10120"
  },
  {
    "url": "XCode/index.html",
    "revision": "92c3ca436ccc9faf0a60a1ddc5555ae3"
  },
  {
    "url": "XCode/Migration.html",
    "revision": "e864e074bb562c76ce0679b1c9945b62"
  },
  {
    "url": "XCode/Model.html",
    "revision": "8b4d2758f436f5ad06f24f212179c541"
  },
  {
    "url": "XCode/modeling/index.html",
    "revision": "e3680d0fdda921118c193b4fa37f22d4"
  },
  {
    "url": "XCode/modeling/modeling-file.html",
    "revision": "5a6a6f9fdefdb0a9cb2aceff9d2d967b"
  },
  {
    "url": "XCode/modeling/tt-file.html",
    "revision": "c5994a48e82249d2d7d9d40265a90f79"
  },
  {
    "url": "XCode/Normal.html",
    "revision": "48dc146995b87b27e391a1578559c7cf"
  },
  {
    "url": "XCode/Search.html",
    "revision": "5573a4d9a81ceb8fac94741df2891563"
  },
  {
    "url": "XCode/SingleCache.html",
    "revision": "4cbf35701a9835d8529565e91efe78c3"
  },
  {
    "url": "XCode/XML模型文件/index.html",
    "revision": "03880a3343928ebec24ccf7486e28d43"
  },
  {
    "url": "XCode/入门.html",
    "revision": "1098f6ff17735d036b0b2fb1666371ef"
  },
  {
    "url": "XCode/分表分库/index.html",
    "revision": "eaa560488e95db82cf1fcdd612fe4f2a"
  },
  {
    "url": "XCode/高级功能/index.html",
    "revision": "5952095886b6a706046b95e463cde41c"
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
    "revision": "00e8a623ecaa7e82dc3ee95a1c58c72f"
  },
  {
    "url": "新生命团队简史/index.html",
    "revision": "370e2540a048f73cba737a78c7392ac1"
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
