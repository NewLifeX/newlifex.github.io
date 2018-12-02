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
    "revision": "115a46fba0ed0f499c2284dad520c3c2"
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
    "url": "assets/js/app.1b2c3bcc.js",
    "revision": "8c0261febebd054134d21d9f66166f00"
  },
  {
    "url": "CubeCore/index.html",
    "revision": "15566c7b16c7be4fa6b190996961ef3d"
  },
  {
    "url": "CubeCore/中级教程/index.html",
    "revision": "5c018b9779e3a0c20dac78f41207b84d"
  },
  {
    "url": "CubeCore/中级教程/自定义高级查询.html",
    "revision": "3c7568f6d45a76fe6d6faf8c7286b50e"
  },
  {
    "url": "CubeCore/入门教程/index.html",
    "revision": "fb2584a247d6c8c8289fb0477f0f46ed"
  },
  {
    "url": "CubeCore/入门教程/运行.html",
    "revision": "22920862de92ce049d5f7b45543b9bd2"
  },
  {
    "url": "CubeCore/魔方core.html",
    "revision": "76ed6b715e1348f8a3403e494b4c5914"
  },
  {
    "url": "DotNetCore/index.html",
    "revision": "f95e42d4e8f3bd72249a66a82cda02c8"
  },
  {
    "url": "DotNetCore/netcore_centos.html",
    "revision": "1773bd8a4c8ed29bfcb8c89e1acaee67"
  },
  {
    "url": "Error/index.html",
    "revision": "69eec3204bcd83e065b6460761ad04e1"
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
    "revision": "f7585febee16978e3e9448386872cc9c"
  },
  {
    "url": "logo.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "Net/index.html",
    "revision": "9be8af78b8352091de3d3054ea0eb284"
  },
  {
    "url": "Net/新生命网络库客户端用法.html",
    "revision": "ede95c7cdacfb68b6c47ca4553eb6467"
  },
  {
    "url": "Net/新生命网络库比较典型的简单用法.html",
    "revision": "aeac23803fe436ad7a2b2f0717ac4375"
  },
  {
    "url": "Redis/index.html",
    "revision": "a5ff07e4526a3b53555e87dd1580a256"
  },
  {
    "url": "training/index.html",
    "revision": "d6dfd3d992d2b7d4a805badbba2f88cb"
  },
  {
    "url": "training/net.html",
    "revision": "f15479e57bdaf26e5febc36192d94e3f"
  },
  {
    "url": "training/newlife.cube.html",
    "revision": "c2eccdc7d11ff66c6762449f12163a8b"
  },
  {
    "url": "training/newlife.redis.html",
    "revision": "4a905d58a0e623813367bf73d3f64441"
  },
  {
    "url": "training/xcode-get-start-1.html",
    "revision": "de6a7cc4d5c005050028dc85573b32e8"
  },
  {
    "url": "XCode/CURD基础使用/index.html",
    "revision": "ed4e0fbbb031683b5ae6918c66f0d542"
  },
  {
    "url": "XCode/EntityCache.html",
    "revision": "c53ba282edcca4e667935081d5c07fb6"
  },
  {
    "url": "XCode/ExtendProperty.html",
    "revision": "50ec0edcfe10eae99aedef58fc84f5ff"
  },
  {
    "url": "XCode/fundamentals/index.html",
    "revision": "39cd5d4de80c661f6c6f13aab6928743"
  },
  {
    "url": "XCode/fundamentals/install.html",
    "revision": "d4075013079016227797f53aec6e4da7"
  },
  {
    "url": "XCode/Get-Start.html",
    "revision": "9c2a43340544fae20b768cc407ea7b29"
  },
  {
    "url": "XCode/index.html",
    "revision": "e84ce53a679fe09eea9af4867b44e9d2"
  },
  {
    "url": "XCode/Migration.html",
    "revision": "a51d7a5fc2686066b6cd9b1d41c999ee"
  },
  {
    "url": "XCode/Model.html",
    "revision": "157284d291cf563613114981750d6e74"
  },
  {
    "url": "XCode/modeling/index.html",
    "revision": "f9b75b0841c2aff538652afb75e83b94"
  },
  {
    "url": "XCode/modeling/modeling-file.html",
    "revision": "adc4144f6d1761466931697c701c4dfc"
  },
  {
    "url": "XCode/modeling/tt-file.html",
    "revision": "264971f66c312a0106592217b0296e63"
  },
  {
    "url": "XCode/Normal.html",
    "revision": "be98d9cf0a23450bc252407235f7269f"
  },
  {
    "url": "XCode/Search.html",
    "revision": "ae9a86eaf71ec717ff66174b8b332b14"
  },
  {
    "url": "XCode/SingleCache.html",
    "revision": "6ba4c705a8af37f770dd0289074241b1"
  },
  {
    "url": "XCode/XML模型文件/index.html",
    "revision": "d938b7806a1a828b86ec96bc24221465"
  },
  {
    "url": "XCode/入门.html",
    "revision": "96a935b529d96394e7027a5e6fc203d6"
  },
  {
    "url": "XCode/分表分库/index.html",
    "revision": "de87ecb6d72b5b36b36ff587ec3c74f3"
  },
  {
    "url": "XCode/高级功能/index.html",
    "revision": "220969d799aefa1deea122370ee55122"
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
    "revision": "c40db1caddb0d38e88fd5a1b4ef3e32e"
  },
  {
    "url": "新生命团队简史/index.html",
    "revision": "1fc3a56e0309336cc1bdc9d1b9673911"
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
