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
    "revision": "b6ab22697df0c25e32ea52018e008e14"
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
    "url": "assets/js/38.033e320b.js",
    "revision": "ff567ba099736fb234df6c5b9f21e3bd"
  },
  {
    "url": "assets/js/39.41bd844a.js",
    "revision": "0be82b74f369fc434eb712ea291d201c"
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
    "url": "assets/js/41.ba5920ba.js",
    "revision": "104897261653a0b4befc356351bc39bf"
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
    "url": "assets/js/app.5bab5efb.js",
    "revision": "352b50b7638b86f74a728e7e73f5fde4"
  },
  {
    "url": "CubeCore/index.html",
    "revision": "1f7d205edc84d95903d7977a9b8029e7"
  },
  {
    "url": "CubeCore/中级教程/index.html",
    "revision": "c97066896a2f2d44a68069b51ebad85a"
  },
  {
    "url": "CubeCore/中级教程/自定义高级查询.html",
    "revision": "0918126b9dfe5158f64f26602ce06d0d"
  },
  {
    "url": "CubeCore/入门教程/index.html",
    "revision": "aaaf3ccac0e498fa2af9f576c42f5f71"
  },
  {
    "url": "CubeCore/入门教程/运行.html",
    "revision": "567c05cda00a84ec3f2ecfe5acf10653"
  },
  {
    "url": "CubeCore/魔方core.html",
    "revision": "bb889a2aefe1894b626b30d12da16bbd"
  },
  {
    "url": "DotNetCore/index.html",
    "revision": "42bbf0ad6c4cf8569ce60ba545c61e4c"
  },
  {
    "url": "DotNetCore/netcore_centos.html",
    "revision": "d16f89fc8e5c83fa15541a3f625296ea"
  },
  {
    "url": "Error/index.html",
    "revision": "514ece516b889995bdd270915c3a88b6"
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
    "revision": "527f091d22c8d679896db450c10971f5"
  },
  {
    "url": "logo.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "Net/index.html",
    "revision": "9dc29da0a306e675c0833cf295404fe3"
  },
  {
    "url": "Net/新生命网络库客户端用法.html",
    "revision": "1f658f6e39e4232833c1c5e35e6142f2"
  },
  {
    "url": "Net/新生命网络库比较典型的简单用法.html",
    "revision": "c82d316d2f9aa2e81045941fdf55f63d"
  },
  {
    "url": "Redis/index.html",
    "revision": "395cc23b14626b0c590061c4e4b8f4b3"
  },
  {
    "url": "training/index.html",
    "revision": "f4655d2cd1dae09fa962c8b9b2abb9e2"
  },
  {
    "url": "training/net.html",
    "revision": "120a4e01eb7958d74e993eb7f5a4fe9f"
  },
  {
    "url": "training/newlife.cube.html",
    "revision": "bfd580a57ee222291335ae6b70c221cb"
  },
  {
    "url": "training/newlife.redis.html",
    "revision": "a0ba4059a39032f7de06af315a096d8b"
  },
  {
    "url": "training/xcode-get-start-1.html",
    "revision": "4c51bf1c253ee6f82917ea0cc74352de"
  },
  {
    "url": "XCode/CURD基础使用/index.html",
    "revision": "2f5fcb3c53f98b7b9d408e854b83fd5d"
  },
  {
    "url": "XCode/EntityCache.html",
    "revision": "3faba2878d181188452be3e9e756ba22"
  },
  {
    "url": "XCode/ExtendProperty.html",
    "revision": "0bdaf41ccd5fd7f5853612b66e221b4a"
  },
  {
    "url": "XCode/fundamentals/index.html",
    "revision": "5ebe8f8bae9e04ab656352c096aef7b5"
  },
  {
    "url": "XCode/fundamentals/install.html",
    "revision": "99c9d3f90600e31dcaa15bf1f11b700f"
  },
  {
    "url": "XCode/Get-Start.html",
    "revision": "3183c1c5246364061feb977e6255abf2"
  },
  {
    "url": "XCode/index.html",
    "revision": "4905223ca45c722b95a8e8276b9b88f7"
  },
  {
    "url": "XCode/Migration.html",
    "revision": "8a746bfea277eff0a0a196dc84a68434"
  },
  {
    "url": "XCode/Model.html",
    "revision": "3c207c089814eac29097db84a86b7f5d"
  },
  {
    "url": "XCode/modeling/index.html",
    "revision": "d333b871e02eef4d7b5e51dcd2bb2bd9"
  },
  {
    "url": "XCode/modeling/modeling-file.html",
    "revision": "c581b4d618a9f3dbe41cf1e1a3809ae8"
  },
  {
    "url": "XCode/modeling/tt-file.html",
    "revision": "973284c434d60f23a6c6823addaa1be0"
  },
  {
    "url": "XCode/Normal.html",
    "revision": "fe2a14a930640fc1b14c140d8bccf77d"
  },
  {
    "url": "XCode/Search.html",
    "revision": "29c678abf244ddab01727684e645fc60"
  },
  {
    "url": "XCode/SingleCache.html",
    "revision": "43ebf719910fbe6665f791d3af4ff007"
  },
  {
    "url": "XCode/XML模型文件/index.html",
    "revision": "a52d6e7c2e5be5d51b4c8adc76868ff4"
  },
  {
    "url": "XCode/入门.html",
    "revision": "980f1a05d01065b10eef414449bb0caa"
  },
  {
    "url": "XCode/分表分库/index.html",
    "revision": "8343334891b59784fcab28b51d4aa0dc"
  },
  {
    "url": "XCode/高级功能/index.html",
    "revision": "7e4b8e6c57b3c365ef03e9d98f4c46ce"
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
    "revision": "93fbcf9cd8cb2e0edcac329279882fc4"
  },
  {
    "url": "新生命团队简史/index.html",
    "revision": "0b453a4571817e95b008b2849d03f510"
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
