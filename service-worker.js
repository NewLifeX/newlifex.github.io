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
    "revision": "c22c5989cec39df348bf963ed42cdbf2"
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
    "url": "assets/js/37.48fd5105.js",
    "revision": "e650cb2cb4b32a701c4e945e2be9682d"
  },
  {
    "url": "assets/js/38.e1f7b4f2.js",
    "revision": "21dd55b87b0a9e28eb9304746f09fcac"
  },
  {
    "url": "assets/js/39.da07436d.js",
    "revision": "077ceb46cd8bb6a5b5c81123f99df2dd"
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
    "url": "assets/js/app.e6b074fb.js",
    "revision": "40cd20f9014f6fc3cf48839dd4059ac5"
  },
  {
    "url": "CubeCore/index.html",
    "revision": "03395774c44b1ef0413f5081549209c8"
  },
  {
    "url": "CubeCore/中级教程/index.html",
    "revision": "6ad29e394ce16b1bf385be4a93ca1072"
  },
  {
    "url": "CubeCore/中级教程/自定义高级查询.html",
    "revision": "63ea5b3ec200b759ddb21b4df37ca702"
  },
  {
    "url": "CubeCore/入门教程/index.html",
    "revision": "8db02b396f69fed5e68104c168a417e2"
  },
  {
    "url": "CubeCore/入门教程/运行.html",
    "revision": "1a0137943cf3839917af1c2553daf52b"
  },
  {
    "url": "CubeCore/魔方core.html",
    "revision": "92c3f42c892b9aeacc466b138aec41f4"
  },
  {
    "url": "DotNetCore/index.html",
    "revision": "5754e305a4b0685b0d67f4216f394096"
  },
  {
    "url": "DotNetCore/netcore_centos.html",
    "revision": "414645b8a23a0ae97373ad600e6ec6cb"
  },
  {
    "url": "Error/index.html",
    "revision": "0fa71d10e7043e89216239c69dd0908b"
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
    "revision": "927ab0845f07faffeff492dea5c3a06c"
  },
  {
    "url": "logo.png",
    "revision": "54777ef74089f77764def0145619805c"
  },
  {
    "url": "Net/index.html",
    "revision": "1e9f3c5fc31f043d5a96e547a54ecf2e"
  },
  {
    "url": "Net/新生命网络库客户端用法.html",
    "revision": "b62e5c336745797335d8455e1d25f076"
  },
  {
    "url": "Net/新生命网络库比较典型的简单用法.html",
    "revision": "25ca34a4878a22ae2aab02b726b5a338"
  },
  {
    "url": "Redis/index.html",
    "revision": "248c0f24dd8634b6f3806bd8ae340f16"
  },
  {
    "url": "training/index.html",
    "revision": "483f83216c5ab529c4d0c28a38112183"
  },
  {
    "url": "training/net.html",
    "revision": "61e974408db5d97034ddadd934be08f0"
  },
  {
    "url": "training/newlife.redis.html",
    "revision": "c17ee8c6fa79b66697ac98ba4c40a64d"
  },
  {
    "url": "training/xcode-get-start-1.html",
    "revision": "fbb772a537d5e0fb342ff688cf739359"
  },
  {
    "url": "XCode/CURD基础使用/index.html",
    "revision": "1c57ad4bf3f9159ba4957ffa865143c6"
  },
  {
    "url": "XCode/EntityCache.html",
    "revision": "0fcbdb81e1c05fc9d4367eaa0e7d063f"
  },
  {
    "url": "XCode/ExtendProperty.html",
    "revision": "a22f5e29a66a615e732d0c58312540e4"
  },
  {
    "url": "XCode/fundamentals/index.html",
    "revision": "b3139a1da66f0bf49bafa75f95c0c2a8"
  },
  {
    "url": "XCode/fundamentals/install.html",
    "revision": "dc1714ff50be080dcea855fbd32c627c"
  },
  {
    "url": "XCode/Get-Start.html",
    "revision": "2478cd152b94f6936f2591c8b17affa5"
  },
  {
    "url": "XCode/index.html",
    "revision": "f7d54eb5cbdd2eb6fd7809751c4a2fd1"
  },
  {
    "url": "XCode/Migration.html",
    "revision": "448557c63bab44f35ff365303bfa0de5"
  },
  {
    "url": "XCode/Model.html",
    "revision": "2752015836c7db427734925c48bed27c"
  },
  {
    "url": "XCode/modeling/index.html",
    "revision": "137c077d79598c2d14e8622ec3627703"
  },
  {
    "url": "XCode/modeling/modeling-file.html",
    "revision": "dfb8052d617f9131e225ab4ecd5de292"
  },
  {
    "url": "XCode/modeling/tt-file.html",
    "revision": "514a8855ecd9bc8c95ce6bb478722a12"
  },
  {
    "url": "XCode/Normal.html",
    "revision": "e9babff29292635fb63b855ff1635a4e"
  },
  {
    "url": "XCode/Search.html",
    "revision": "43fcee62cc5d50b1dad7e943f46a145a"
  },
  {
    "url": "XCode/SingleCache.html",
    "revision": "7d8b4cb5578df917801213cdaacf8851"
  },
  {
    "url": "XCode/XML模型文件/index.html",
    "revision": "2124a5a4885d36270fd1239267543c82"
  },
  {
    "url": "XCode/入门.html",
    "revision": "8fe0d0356252c3d46600478e465512dc"
  },
  {
    "url": "XCode/分表分库/index.html",
    "revision": "71ad4665b57a64210be21a78dec8ff76"
  },
  {
    "url": "XCode/高级功能/index.html",
    "revision": "d77748eab9aa362b08d669e7145ba2b5"
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
    "revision": "0292e3f9bcf90254e0fc37a03d460131"
  },
  {
    "url": "新生命团队简史/index.html",
    "revision": "0e9778c1ef75d4511a9946d040a80267"
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
