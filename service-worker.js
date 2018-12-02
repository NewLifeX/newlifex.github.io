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
    "revision": "1d2f93f19e6bafc03b87c4df3e7a5b62"
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
    "url": "assets/js/10.b1ef7333.js",
    "revision": "406b47602a76ec2d38794e90924544d1"
  },
  {
    "url": "assets/js/11.40ab9c21.js",
    "revision": "9a72a97546ec471e5497e73a640fb16b"
  },
  {
    "url": "assets/js/12.88ee08c1.js",
    "revision": "2e17ca75d4ef50e3a5f75545c470df26"
  },
  {
    "url": "assets/js/13.6a0c3b33.js",
    "revision": "84163138c793a807f4e6bf177e1643fe"
  },
  {
    "url": "assets/js/14.94280112.js",
    "revision": "eefb6b5e20160c0b6f89dc072ea5312b"
  },
  {
    "url": "assets/js/15.02372221.js",
    "revision": "a6ee9fc5f866db10ae61d6b6326c9b7f"
  },
  {
    "url": "assets/js/16.c624b0a6.js",
    "revision": "a696295fef48b87b617eac9063610f3b"
  },
  {
    "url": "assets/js/17.a1e58593.js",
    "revision": "656b6c5e4dec26c4ad96570380fb42f4"
  },
  {
    "url": "assets/js/18.eea8d14d.js",
    "revision": "6c5e0d4a02c6a3c7d72854c621ddff3d"
  },
  {
    "url": "assets/js/19.4277c621.js",
    "revision": "121b60d3f3fce79b66a4c3ae0ac6331d"
  },
  {
    "url": "assets/js/2.a1d6162e.js",
    "revision": "c47c68e63e74c72c1b9080f66c72ccfd"
  },
  {
    "url": "assets/js/20.8db3071c.js",
    "revision": "ca6c9d873f340aadad317ddd9dedc65f"
  },
  {
    "url": "assets/js/21.9288fda8.js",
    "revision": "d143b294b452ac741f4ce58fb0bd8c69"
  },
  {
    "url": "assets/js/22.c1f99814.js",
    "revision": "e37310960a930dc180249481eb222212"
  },
  {
    "url": "assets/js/23.97bc25e0.js",
    "revision": "c6695b4634d7d50b6f97ec7bac5b0c51"
  },
  {
    "url": "assets/js/24.0f608500.js",
    "revision": "4ebdd66a3b2e06dce1bb10bdf62bdeb7"
  },
  {
    "url": "assets/js/25.b80afb7f.js",
    "revision": "87cc4fbc8adb9088b88210e68cac4ae2"
  },
  {
    "url": "assets/js/26.24283fff.js",
    "revision": "065add86c4bb690165c0693a1af03442"
  },
  {
    "url": "assets/js/27.fad9b1f5.js",
    "revision": "23c0a707457c15c957429b5f165f4737"
  },
  {
    "url": "assets/js/28.b193c26d.js",
    "revision": "cb14ec250cdb7c13bd53d03021958c57"
  },
  {
    "url": "assets/js/29.42caf689.js",
    "revision": "f9f2e66ef903c21c773377992c3f41c8"
  },
  {
    "url": "assets/js/3.0b735306.js",
    "revision": "e6f45f40d563f2b61b2785fd1b5220b2"
  },
  {
    "url": "assets/js/30.6d82ab4c.js",
    "revision": "f4e22d5be142ecfa7d613e592d8d33d1"
  },
  {
    "url": "assets/js/31.3043672a.js",
    "revision": "9f49efb87fb84f259cafac0294eefcf5"
  },
  {
    "url": "assets/js/32.cbfc5405.js",
    "revision": "9442f7923075baa72baf02c4cb64903a"
  },
  {
    "url": "assets/js/33.f9afd566.js",
    "revision": "a99b16c539518adf162ed8f743954801"
  },
  {
    "url": "assets/js/34.6abfb19c.js",
    "revision": "e2a0e9ab39a3620374cdb8f9c31510ac"
  },
  {
    "url": "assets/js/35.b8d4025a.js",
    "revision": "5291730c578e270363372a1fcb360545"
  },
  {
    "url": "assets/js/36.83c49b78.js",
    "revision": "c845f3504e0e74390ff606aca04e7d4b"
  },
  {
    "url": "assets/js/37.9fc941ad.js",
    "revision": "8b414db6e5e8d43d712d12d3bb37ede4"
  },
  {
    "url": "assets/js/38.d1b89ff7.js",
    "revision": "27448efa9a61a90982c7d66bf0c32df8"
  },
  {
    "url": "assets/js/39.c59a0910.js",
    "revision": "4b8414a310033698fd83b9706e501171"
  },
  {
    "url": "assets/js/4.dbdf4350.js",
    "revision": "5fcf9364735660664d7daf2cc3c8ff52"
  },
  {
    "url": "assets/js/40.70c7536b.js",
    "revision": "2b0dad99b5b2c14e9dd1ff5e2557400e"
  },
  {
    "url": "assets/js/41.49cf05f6.js",
    "revision": "526259b22fd53e8403fd98c6d3814a58"
  },
  {
    "url": "assets/js/42.a871ee2f.js",
    "revision": "1819febcc96714b700a27cb74896f3f6"
  },
  {
    "url": "assets/js/43.b528f4a7.js",
    "revision": "e9b1d318194b8adafb9cbe248bbfef0f"
  },
  {
    "url": "assets/js/5.5ca19940.js",
    "revision": "8f946c5da6a04c1d1508f613a2bd956f"
  },
  {
    "url": "assets/js/6.386e2017.js",
    "revision": "4f9c7cc922cce224c5ac67cecc4e2f3b"
  },
  {
    "url": "assets/js/7.b79d0c69.js",
    "revision": "07dca1603ede2df42bd11acb7fd48da4"
  },
  {
    "url": "assets/js/8.3ac144e6.js",
    "revision": "ac1721070aba75385bfc8677b9f7e80a"
  },
  {
    "url": "assets/js/9.a6079736.js",
    "revision": "7f545c7eba211ae9ea02e6421e30db9d"
  },
  {
    "url": "assets/js/app.ec624aa8.js",
    "revision": "0075946c9e18ddcdc22adc7f12787689"
  },
  {
    "url": "CubeCore/index.html",
    "revision": "fe5a7a52d7a49cab8b948d3d71764aca"
  },
  {
    "url": "CubeCore/中级教程/index.html",
    "revision": "ba4963cabefd06a1a2a56ef8a605c0d2"
  },
  {
    "url": "CubeCore/中级教程/自定义高级查询.html",
    "revision": "ff2061185ceaafe84597dafbc3f30b02"
  },
  {
    "url": "CubeCore/入门教程/index.html",
    "revision": "c17e145a3369dbc02db3ddb2a296dc74"
  },
  {
    "url": "CubeCore/入门教程/运行.html",
    "revision": "3f284711bdf8e4c30e07a8085433c07c"
  },
  {
    "url": "CubeCore/魔方core.html",
    "revision": "fb2ffe7033684bc0c5dd2ae9581fa0b1"
  },
  {
    "url": "DotNetCore/index.html",
    "revision": "2026f42b4bf631a773d6eee0f91e1cbf"
  },
  {
    "url": "DotNetCore/netcore_centos.html",
    "revision": "b521dd4e846a507780d0b958805b2867"
  },
  {
    "url": "Error/index.html",
    "revision": "98dc16d8c8a66bf1e12b99b319c90be3"
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
    "revision": "20156024d6e3c7773abdbf458e9205b7"
  },
  {
    "url": "logo.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "Net/index.html",
    "revision": "7dc853ba066f9d858533bdb31165d39c"
  },
  {
    "url": "Net/新生命网络库客户端用法.html",
    "revision": "e378688eda4c6aee3681d90c12aa514f"
  },
  {
    "url": "Net/新生命网络库比较典型的简单用法.html",
    "revision": "8a7fa43fd4ec6d772234fc20bf0b5e66"
  },
  {
    "url": "Redis/index.html",
    "revision": "96cf9c204db2242c8c316e340f94e2fb"
  },
  {
    "url": "training/index.html",
    "revision": "a00731708e0a540ed73a25c8d6f6259b"
  },
  {
    "url": "training/net.html",
    "revision": "4d13d24e9fe953e151ce727e4ecba05a"
  },
  {
    "url": "training/newlife.cube.html",
    "revision": "5e4421d071ef3093763ebf4cf5a5b114"
  },
  {
    "url": "training/newlife.redis.html",
    "revision": "42a1507d5da406ec802820783168303b"
  },
  {
    "url": "training/xcode-get-start-1.html",
    "revision": "9a1206c9fbb28b497717c28e242ddb57"
  },
  {
    "url": "XCode/CURD基础使用/index.html",
    "revision": "c1c3bd08e7ebf5008d10742025ed9d16"
  },
  {
    "url": "XCode/EntityCache.html",
    "revision": "29b8059f4857e69ae7ec51709d5778dd"
  },
  {
    "url": "XCode/ExtendProperty.html",
    "revision": "5516b1ea1f64171d26b24c3791457b13"
  },
  {
    "url": "XCode/fundamentals/index.html",
    "revision": "a0c71b2cf078d0dff619d96ff74f2909"
  },
  {
    "url": "XCode/fundamentals/install.html",
    "revision": "fada94e7b4d925400cdbc038a286e331"
  },
  {
    "url": "XCode/Get-Start.html",
    "revision": "330b596c3daa8ed2b06ac6bf8f19f427"
  },
  {
    "url": "XCode/index.html",
    "revision": "710f07a1ddf0a32a471e7b8620912dfc"
  },
  {
    "url": "XCode/Migration.html",
    "revision": "ea1a71e561faab18251e80af652db8b3"
  },
  {
    "url": "XCode/Model.html",
    "revision": "49456c8f4ee04af0cd81fa9a75e533aa"
  },
  {
    "url": "XCode/modeling/index.html",
    "revision": "d8afbd6968d93ba8fd1d09e0f1383a66"
  },
  {
    "url": "XCode/modeling/modeling-file.html",
    "revision": "0febe6b766de534d0e88d9ec3112af7c"
  },
  {
    "url": "XCode/modeling/tt-file.html",
    "revision": "2b240fd619504436dc7fcb20bd608419"
  },
  {
    "url": "XCode/Normal.html",
    "revision": "8a561906d114c2806433c8c62a6138df"
  },
  {
    "url": "XCode/Search.html",
    "revision": "95c2ecfa2228614b5c02ed044b0fcf68"
  },
  {
    "url": "XCode/SingleCache.html",
    "revision": "32568838c5100e58cb14327591c439fc"
  },
  {
    "url": "XCode/XML模型文件/index.html",
    "revision": "ffd4e86acda354c251f046f279e297fd"
  },
  {
    "url": "XCode/入门.html",
    "revision": "834d0ffaee6b8d8211b1802808c1f23d"
  },
  {
    "url": "XCode/分表分库/index.html",
    "revision": "306ae82c81ed6b8d6c952d101344d226"
  },
  {
    "url": "XCode/高级功能/index.html",
    "revision": "83418d00c86d6dde2cf2cdb3a20d363b"
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
    "revision": "7eb20b523f0e06049758b64c4937884b"
  },
  {
    "url": "新生命团队简史/index.html",
    "revision": "a8ae6d0961f214b88a9c581280dddfbc"
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
