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
    "revision": "3a9a611a07a2416a701bf13578681369"
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
    "url": "assets/js/31.2c647261.js",
    "revision": "60d66b3b700fc0229813081e17660374"
  },
  {
    "url": "assets/js/32.3ccead10.js",
    "revision": "830e8175fc67b5f3bc3a368f9cc72271"
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
    "url": "assets/js/app.c6fcdccf.js",
    "revision": "e72e1db5540520333a7afaacae1732c2"
  },
  {
    "url": "CubeCore/index.html",
    "revision": "a68aea224689c7f673816800e81db730"
  },
  {
    "url": "CubeCore/中级教程/index.html",
    "revision": "98beb363ebfadf4ee7bb94ae805c83fe"
  },
  {
    "url": "CubeCore/中级教程/自定义高级查询.html",
    "revision": "dedb0b19afa257c7b14255163a36c286"
  },
  {
    "url": "CubeCore/入门教程/index.html",
    "revision": "6c44aa509437c24d86c6d779088fcff5"
  },
  {
    "url": "CubeCore/入门教程/运行.html",
    "revision": "214527150f1d1a308e14e51fd98427fd"
  },
  {
    "url": "CubeCore/魔方core.html",
    "revision": "12ff5fe7432fe5861095a6fdcafe685b"
  },
  {
    "url": "DotNetCore/index.html",
    "revision": "e0efc69ed78d93a74485a1ab3daef1a7"
  },
  {
    "url": "DotNetCore/netcore_centos.html",
    "revision": "912b826f8b5ece4bfe733737c622e977"
  },
  {
    "url": "Error/index.html",
    "revision": "dc8c7d8158a355ac0e44fc4f55e3533f"
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
    "revision": "c3fea4298d67ff0f0fc1cda12ce3cf1a"
  },
  {
    "url": "logo.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "Net/index.html",
    "revision": "2224f0e0c752e3d3edc75bb09b158dc1"
  },
  {
    "url": "Net/新生命网络库客户端用法.html",
    "revision": "4c1074b6ce2c40f1e908a6d067af5442"
  },
  {
    "url": "Net/新生命网络库比较典型的简单用法.html",
    "revision": "4ecf962ae3bef68f2f8ea7d9ddbab350"
  },
  {
    "url": "Redis/index.html",
    "revision": "68e403fb2694dc880911cbe171d59276"
  },
  {
    "url": "training/index.html",
    "revision": "3f9d5a3fb95cdd9fe98452e88c2bd85f"
  },
  {
    "url": "training/net.html",
    "revision": "99b63b783e37ed1c9babae52c68e4c7d"
  },
  {
    "url": "training/newlife.cube.html",
    "revision": "e40e7d0915d2c99b26138be987c2c6c9"
  },
  {
    "url": "training/newlife.redis.html",
    "revision": "39ae3d151a43d4823720ff76892cd672"
  },
  {
    "url": "training/xcode-get-start-1.html",
    "revision": "408158dd5c7e613e631252a22a73c749"
  },
  {
    "url": "XCode/CURD基础使用/index.html",
    "revision": "3d61eb6e8ac139f633b8cecd6c986893"
  },
  {
    "url": "XCode/EntityCache.html",
    "revision": "e9d070d0b4f71f088fe03ff4b6bd2e30"
  },
  {
    "url": "XCode/ExtendProperty.html",
    "revision": "80060989e08d4ae3fb6537308eb11233"
  },
  {
    "url": "XCode/fundamentals/index.html",
    "revision": "fceec8a011cbd810da70f32ad55b2070"
  },
  {
    "url": "XCode/fundamentals/install.html",
    "revision": "d86057dbbe4f82e94d0fe9adbfde339c"
  },
  {
    "url": "XCode/Get-Start.html",
    "revision": "2ec890227a094378002a0024416133b6"
  },
  {
    "url": "XCode/index.html",
    "revision": "2b14168af1f80c8ffaaec1ef2ca41c65"
  },
  {
    "url": "XCode/Migration.html",
    "revision": "698d31e8af6a239ff228288b0a329c14"
  },
  {
    "url": "XCode/Model.html",
    "revision": "e42f1c39ae813f29b59a18c6d4df842c"
  },
  {
    "url": "XCode/modeling/index.html",
    "revision": "384cc809304be91d51c5070f7a92ffb0"
  },
  {
    "url": "XCode/modeling/modeling-file.html",
    "revision": "13873382f2225a07462294bc50c08860"
  },
  {
    "url": "XCode/modeling/tt-file.html",
    "revision": "d9e7629ca0a34b70efaef1e18c57f61c"
  },
  {
    "url": "XCode/Normal.html",
    "revision": "635d0fca0216b19cf4deee0345cd5fd3"
  },
  {
    "url": "XCode/Search.html",
    "revision": "7083111a1ad7047bdbe38e0d2463d64f"
  },
  {
    "url": "XCode/SingleCache.html",
    "revision": "30635eb9ba8036c2f0b37b291d5b4d81"
  },
  {
    "url": "XCode/XML模型文件/index.html",
    "revision": "4750ab610ec7a48e8a251b4bd4a11531"
  },
  {
    "url": "XCode/入门.html",
    "revision": "6c2394518d2f83bb59446d3f657a29ca"
  },
  {
    "url": "XCode/分表分库/index.html",
    "revision": "5742a4168c128f3106366d6b3151c75f"
  },
  {
    "url": "XCode/高级功能/index.html",
    "revision": "b7a579a738bc8bb12a160429a113f8f9"
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
    "revision": "08f20dc8b6e948da805a2bfb303f5f00"
  },
  {
    "url": "新生命团队简史/index.html",
    "revision": "122dc0737a7b5e1bdae52849795020d3"
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
