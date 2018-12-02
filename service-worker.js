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
    "revision": "602ea65ade70a69e971393bb9701de00"
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
    "url": "assets/js/10.8eb913e8.js",
    "revision": "0237931d1757a71eaa829a506c7312ee"
  },
  {
    "url": "assets/js/11.4d9005a2.js",
    "revision": "1ea1ba7c55fcd5c2ffb7fd977fae933a"
  },
  {
    "url": "assets/js/12.a2f15d39.js",
    "revision": "2c6eda3cd956eb5bc3bf55b07528cb22"
  },
  {
    "url": "assets/js/13.0409c19d.js",
    "revision": "a99aec35bfa8d012f33a868026afc954"
  },
  {
    "url": "assets/js/14.441484ff.js",
    "revision": "774a62635c8ca04129541c8da79af44b"
  },
  {
    "url": "assets/js/15.1f09951e.js",
    "revision": "2a605766ac92d15612c2d6666ea456ae"
  },
  {
    "url": "assets/js/16.9544af7f.js",
    "revision": "aa5b697182ea579b3032e30e783d1909"
  },
  {
    "url": "assets/js/17.1ab226e7.js",
    "revision": "75f3d4ea39630b1413e91799e64f5029"
  },
  {
    "url": "assets/js/18.3346cca9.js",
    "revision": "3e50fb9e631a1a208b15b2c51a4fdf35"
  },
  {
    "url": "assets/js/19.eef08465.js",
    "revision": "0b57499a49e0f4bf4cc5c7759813814b"
  },
  {
    "url": "assets/js/2.9cfe3d37.js",
    "revision": "e324ea7c92aab13d53aead18f928d57e"
  },
  {
    "url": "assets/js/20.381910b3.js",
    "revision": "31e1c300bb945c4f066dfadef65c9aaa"
  },
  {
    "url": "assets/js/21.709a0ae2.js",
    "revision": "55852981e8c4e30efb6b5d7b6e8cdb37"
  },
  {
    "url": "assets/js/22.29b17b5a.js",
    "revision": "c1844c4c79b829062c722382ca3cb4f7"
  },
  {
    "url": "assets/js/23.8d655b47.js",
    "revision": "135fe14d95f1d56fbe200ab92b68833f"
  },
  {
    "url": "assets/js/24.51d366c8.js",
    "revision": "773f434a7656fa5731438807dd47cb48"
  },
  {
    "url": "assets/js/25.493c8849.js",
    "revision": "2a4749db401191c1e777b3d09171cd94"
  },
  {
    "url": "assets/js/26.b2a4e60e.js",
    "revision": "586d6e2eba35feaf58768ab2ecba0137"
  },
  {
    "url": "assets/js/27.d8e28683.js",
    "revision": "6be980b6b716f6ce59775961495f2dc5"
  },
  {
    "url": "assets/js/28.745b7729.js",
    "revision": "5f9ceb7fb5bac40715ff7d9ff90fd6be"
  },
  {
    "url": "assets/js/29.c14d6683.js",
    "revision": "fccfe0ad85ba5c234a7b6770ecd59442"
  },
  {
    "url": "assets/js/3.16b46f5b.js",
    "revision": "b55741cdd24af265835fcbc9b0970680"
  },
  {
    "url": "assets/js/30.944d68c2.js",
    "revision": "ad4a40217d6d5474a8a503108ec7dc77"
  },
  {
    "url": "assets/js/31.95ca69ec.js",
    "revision": "5aa3c042165a77a0ea452096705fe081"
  },
  {
    "url": "assets/js/32.bb48e743.js",
    "revision": "56ff88aabc7701129d488b6cb4ee8a20"
  },
  {
    "url": "assets/js/33.4fcd48ee.js",
    "revision": "592e115e795f60f8e624752fe7080ab7"
  },
  {
    "url": "assets/js/34.5db88d04.js",
    "revision": "27f1a99e64540ff03f825ba7cefc7552"
  },
  {
    "url": "assets/js/35.79faef4f.js",
    "revision": "b5d4937324b7c269d9ca8787ef874719"
  },
  {
    "url": "assets/js/36.06cea7b3.js",
    "revision": "19c8faa55106607014df98bd08c6dfc5"
  },
  {
    "url": "assets/js/37.79457d4b.js",
    "revision": "7ba4ff95d49ccb7932e9f2678b3aa0dc"
  },
  {
    "url": "assets/js/38.e1f7b4f2.js",
    "revision": "21dd55b87b0a9e28eb9304746f09fcac"
  },
  {
    "url": "assets/js/39.4dc48aec.js",
    "revision": "013f91d8569eb913721e9a5edc4e9efa"
  },
  {
    "url": "assets/js/4.189d1ef2.js",
    "revision": "bd72e3376619a526d0a3b3b91034f509"
  },
  {
    "url": "assets/js/40.f47a5b3e.js",
    "revision": "2dfe80aea0619320931fad10737884fc"
  },
  {
    "url": "assets/js/41.dfbe0290.js",
    "revision": "6dd0bfe7ec3cb4b934450462db31973d"
  },
  {
    "url": "assets/js/42.c06db45b.js",
    "revision": "cf5133c5bf839ba6052f7ad798f0870a"
  },
  {
    "url": "assets/js/5.ccd71b4a.js",
    "revision": "de167acd1fb011f3393888946cb514ca"
  },
  {
    "url": "assets/js/6.386e2017.js",
    "revision": "4f9c7cc922cce224c5ac67cecc4e2f3b"
  },
  {
    "url": "assets/js/7.5ac85b11.js",
    "revision": "345808421777a632a932cf479c59939d"
  },
  {
    "url": "assets/js/8.9ca39c0e.js",
    "revision": "67e15343a0c2395d9b3808c6fcc37a3c"
  },
  {
    "url": "assets/js/9.9ee54157.js",
    "revision": "52b12674ab65c6cf814293100e8f1e0b"
  },
  {
    "url": "assets/js/app.8ca51b1a.js",
    "revision": "2083bb00d199cfc0ec1e6251d9262c36"
  },
  {
    "url": "CubeCore/index.html",
    "revision": "2a3bcb6d7d2d064e9441aff56af5b26e"
  },
  {
    "url": "CubeCore/中级教程/index.html",
    "revision": "30d4a4d8471031ca2b086f4d7970234b"
  },
  {
    "url": "CubeCore/中级教程/自定义高级查询.html",
    "revision": "eb67bd6c608d47024dbfa8f1ca7cf03a"
  },
  {
    "url": "CubeCore/入门教程/index.html",
    "revision": "1f4cf965093249b180c392eba8f997ac"
  },
  {
    "url": "CubeCore/入门教程/运行.html",
    "revision": "4e2e408c51eb6dcaf17bd6fa3b3e0894"
  },
  {
    "url": "CubeCore/魔方core.html",
    "revision": "5676a1b826424879e015008d5f7034be"
  },
  {
    "url": "DotNetCore/index.html",
    "revision": "81853932f99a5e9881baf094ed4d4235"
  },
  {
    "url": "DotNetCore/netcore_centos.html",
    "revision": "79e96bf9cb2431be0b5b5ff7a6b4998d"
  },
  {
    "url": "Error/index.html",
    "revision": "c8e9d9f4fc1742a0242d36616ba77d86"
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
    "revision": "ffdda4190cd288004de30c959862abe8"
  },
  {
    "url": "logo.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "Net/index.html",
    "revision": "f06cbe92d1b42f0428f227e58ff367fc"
  },
  {
    "url": "Net/新生命网络库客户端用法.html",
    "revision": "cd58c9bdc9670af8409207d1957d894a"
  },
  {
    "url": "Net/新生命网络库比较典型的简单用法.html",
    "revision": "4bb20e859d34116149274e833cc2844e"
  },
  {
    "url": "Redis/index.html",
    "revision": "10ef57029cfcb71c760bed0e0b794b31"
  },
  {
    "url": "training/index.html",
    "revision": "d8546b9f3d76cdf860257cd850d24f8b"
  },
  {
    "url": "training/net.html",
    "revision": "6b2c52cb59b6c354034d142afaf4556d"
  },
  {
    "url": "training/newlife.redis.html",
    "revision": "ebde3d0a1c90eebac3d2579a298e7478"
  },
  {
    "url": "training/xcode-get-start-1.html",
    "revision": "16b16710bd53e2b5f4a6ab3ef3c87298"
  },
  {
    "url": "XCode/CURD基础使用/index.html",
    "revision": "f982201a129c0b791346077fed540657"
  },
  {
    "url": "XCode/EntityCache.html",
    "revision": "68cc373ab28970e672bbfc7af730bb2e"
  },
  {
    "url": "XCode/ExtendProperty.html",
    "revision": "f8863dedf129319f5750bd7f4559cfa3"
  },
  {
    "url": "XCode/fundamentals/index.html",
    "revision": "a9d7b3d156e98df6c843d6262c911e72"
  },
  {
    "url": "XCode/fundamentals/install.html",
    "revision": "d7bf953eae986115423d69b6a1db5992"
  },
  {
    "url": "XCode/Get-Start.html",
    "revision": "dc175e8518c7329fef0e8bf3fa3162a6"
  },
  {
    "url": "XCode/index.html",
    "revision": "ef32189cae03c8319a7b107e73a0c8fb"
  },
  {
    "url": "XCode/Migration.html",
    "revision": "ccaed9bc20bd2a06cfbd3ec1767a0809"
  },
  {
    "url": "XCode/Model.html",
    "revision": "bd3a8417eebea22f2999fd8fc393272e"
  },
  {
    "url": "XCode/modeling/index.html",
    "revision": "546f62470718ce9fda963089efecbf82"
  },
  {
    "url": "XCode/modeling/modeling-file.html",
    "revision": "91388c006c368b6a25f030843e37bac9"
  },
  {
    "url": "XCode/modeling/tt-file.html",
    "revision": "d6eda0d13b66e1275b60df06b6f2b998"
  },
  {
    "url": "XCode/Normal.html",
    "revision": "d504c881f907614ab2a8beca9070324f"
  },
  {
    "url": "XCode/Search.html",
    "revision": "61b60a12ea5b7312050f3c2a0797f4b7"
  },
  {
    "url": "XCode/SingleCache.html",
    "revision": "1e3870f8d5402127f1e041d9aebc4150"
  },
  {
    "url": "XCode/XML模型文件/index.html",
    "revision": "6b7df77b17c45eca80799f292707da29"
  },
  {
    "url": "XCode/入门.html",
    "revision": "17ed563fda701cb3a2cb9e8a0f4e0ef3"
  },
  {
    "url": "XCode/分表分库/index.html",
    "revision": "6e0f27eee923dba62098617843d2fd58"
  },
  {
    "url": "XCode/高级功能/index.html",
    "revision": "378cbd28721a4b80d498ac6e094ee325"
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
    "revision": "84318777b3fee65ba0d519719b318b5b"
  },
  {
    "url": "新生命团队简史/index.html",
    "revision": "434b5dcbaa57325dfb2a8938449e7094"
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
