'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6a67389467967c3dfa7c06158d5754cd",
"main.dart.js_79.part.js": "862b9c72909cf98a3de94e4a6c9234ff",
"main.dart.js_69.part.js": "d1ef5951c0b242b39f108fd8068fe8bf",
"main.dart.js_24.part.js": "d2e97f81b94e2ca52eddb8a69b8576a4",
"main.dart.js_34.part.js": "d6d61cd7e49377adfb4f7fb58192e663",
"main.dart.js_46.part.js": "a205a12940f3ccc85e9731293558e541",
"main.dart.js_56.part.js": "7d587e338659c6847e67b2ce69bb9f08",
"version.json": "056a45de1b3e8de8e11d14377726076c",
"main.dart.js_7.part.js": "b654b72b76ebc96bb931009a1ede18cf",
"main.dart.js_60.part.js": "92ee24834b8c2e9342bcec5ed340a5b2",
"main.dart.js_70.part.js": "601254d9246945a27fbd51dc091e02b7",
"main.dart.js_12.part.js": "fc4042ab93b7f224cb138a96436184d3",
"main.dart.js_71.part.js": "93c042d76dd89dc323782a7f6dbbba7a",
"main.dart.js_61.part.js": "a7f4eaf25472db234990b67a0f92c4de",
"index.html": "2d9870f3d473dbe90a370270d88de9e8",
"/": "2d9870f3d473dbe90a370270d88de9e8",
"main.dart.js_13.part.js": "d91d31de01cd5602e55b9e6744039e62",
"main.dart.js_68.part.js": "5a7de7ae4f75f38f2b82bdef131d6f72",
"main.dart.js_35.part.js": "97557e12b70cc3badde1813b2071e99c",
"main.dart.js_25.part.js": "cd01b189bc7178bdad627bbb227b75b4",
"main.dart.js_57.part.js": "06ab4427a99ed7384e3fce1bf59a94b9",
"main.dart.js_47.part.js": "c77fb313126f1726a5516d1f44b9c025",
"main.dart.js_11.part.js": "84e47dad4d1f29285d03f58a558c8129",
"main.dart.js_63.part.js": "8eac02a37569dfceaaf8c6ab4dda9abf",
"main.dart.js_4.part.js": "09e1a939aca928dc733fffc1a6e6739a",
"main.dart.js_73.part.js": "86250e2d51a5d057759d15e2e4045b48",
"main.dart.js": "fa3c8fc5b0e4ead9910898d7a42b33c3",
"main.dart.js_45.part.js": "1c670bede6514f5bec1552c2aa9219dd",
"main.dart.js_55.part.js": "f351eb60af4480d2a913b1fb7a56c5b2",
"main.dart.js_27.part.js": "0109fc5b79b178f09a7cc3c0ddcb711a",
"main.dart.js_37.part.js": "af9674d86b27cf448154a6ca53017bf0",
"main.dart.js_19.part.js": "7bc1922b22078de72f39c99d82fefca4",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"main.dart.js_44.part.js": "c06b047ae00dc8dd237b1c1e432f2883",
"main.dart.js_36.part.js": "a52efc9f04fe2c063961788e176fc16f",
"main.dart.js_26.part.js": "3d0fb9fc1b90287e7166eded9f6d0e83",
"main.dart.js_10.part.js": "0050f55b3ea0701ad9572ac8a6b9e1fc",
"main.dart.js_72.part.js": "4f5ca96961e215320ce98c84f1ff32b8",
"main.dart.js_5.part.js": "8a5ceedf0d9cf02b06bea9e68b319f8d",
"main.dart.js_62.part.js": "cdf464cbed2784c111052d3801f857ef",
"main.dart.js_58.part.js": "7a2dd1687126a562939ae7a2f1ee7e0f",
"main.dart.js_48.part.js": "db226744968b25e1e0befd37cfa63a8e",
"main.dart.js_15.part.js": "5e3cc7b09e221528598b2a315253e01a",
"main.dart.js_67.part.js": "1c337a8905f1aaecdd5b7f4ad1068bbc",
"main.dart.js_77.part.js": "65480c91bad8b199adcf77988a93bf50",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_41.part.js": "174c731ca50013a9297a409b8c4aa573",
"main.dart.js_23.part.js": "ae2a828847c7d2e325edff85eea97cd5",
"main.dart.js_33.part.js": "391acde502f8991055631c300ddffa1d",
"main.dart.js_9.part.js": "6481b1ea6e13d1be629c9a23e3dcf431",
"main.dart.js_50.part.js": "e439dfd3be1f811cbabad4ae18de4b28",
"main.dart.js_40.part.js": "363c072ea144664c2243ffde0ce5c91f",
"main.dart.js_32.part.js": "5b4f424c60acc6fedc656fa969d5ec6e",
"main.dart.js_22.part.js": "d1126f93bdfd03e18f0a25cf78d0e68e",
"main.dart.js_8.part.js": "ab275c1d32c27f03d12238b486842a75",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f8908dc153006a126d70d34062ce9bd6",
"main.dart.js_49.part.js": "769a99a569e3e372b40f4a8cf05b8877",
"main.dart.js_59.part.js": "5a039be7ebf33a73f3ecff7f8d0334b8",
"main.dart.js_76.part.js": "3beaa221ea85d8240beba30775151622",
"main.dart.js_66.part.js": "81a708e338534eb2d520cf5810d86d29",
"main.dart.js_1.part.js": "570a27b5cd81f1cf7dc23729e1001bea",
"main.dart.js_20.part.js": "3a870c01e14b4c0d17a8630225589f5f",
"main.dart.js_30.part.js": "499b5717328633d3ad0e3a01894dee2c",
"main.dart.js_42.part.js": "3703e19f912b09b1ed8647724faf0d9f",
"main.dart.js_52.part.js": "f2a29a09776ed4a97e4466ab33656827",
"main.dart.js_39.part.js": "ba7f9661e0854157ed72810c3d6cc495",
"main.dart.js_29.part.js": "dd1acdd3d1df26c23f8bb8a28f7fd2c0",
"main.dart.js_64.part.js": "8d4d59f390b957ac9acce74cf19fcc72",
"main.dart.js_74.part.js": "9a3fb2ca129f5964c3da94d73da5373c",
"main.dart.js_16.part.js": "ad50f1a4922e8cdd5caf6c9cd09f627b",
"assets/NOTICES": "a91afbffef5b9262e20331f9617bed14",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f3ffd91c2039cbe2698e2868733c627b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_kinescope_sdk/assets/web/web_support.html": "87da4132f068b3016e437fcadbea51a3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "7d01e79693ecccc23a63e581566f6531",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/8.jpg": "fdb8f3352973a734b4bf400678e2550d",
"assets/assets/images/9.jpg": "e7bcfd286e5b4b9a42b6aaf5945e4a86",
"assets/assets/images/14.jpg": "e76ef6c44212122f9c19b4e40a913224",
"assets/assets/images/15.jpg": "0a1bac7b95e55810ea7480e4f279f628",
"assets/assets/images/17.jpg": "e35ef6d63364c09a544d7b39d1bbc8a0",
"assets/assets/images/16.jpg": "8688bfc91921baebd00d41209d7e6ef7",
"assets/assets/images/12.jpg": "a1d7cdc2c48f6e4537aa1f959d254f93",
"assets/assets/images/13.jpg": "7344cef98c5c0486e6277c15f27137e0",
"assets/assets/images/11.jpg": "21cb49769899813b30117a5ccc3f1175",
"assets/assets/images/10.jpg": "4d6b96e9949a57c4e9a02ec785b9f2e1",
"assets/assets/images/4.jpg": "8bb78780559451df6e932d55764ef1cd",
"assets/assets/images/5.jpg": "7d99795b2f5770a7e74ae16254d18193",
"assets/assets/images/7.jpg": "654a7b9ce2f8a540d46269bffa58c6c9",
"assets/assets/images/6.jpg": "6a04a992afa6019eeb787b658a65c8fd",
"assets/assets/images/2.jpg": "1b601273d533177ecebff052b75d0dc0",
"assets/assets/images/3.jpg": "cdb66cd0b88e31f741d3542586bee0b8",
"assets/assets/images/1.jpg": "36958adbcf2cd1cb3447688d22452b2d",
"main.dart.js_38.part.js": "57672717035d7513ae8e1f29149e9aaa",
"main.dart.js_75.part.js": "7a5f8a91335300258ff6fa0da0067187",
"main.dart.js_2.part.js": "a3111dc35ed1768b865010b5a6fd45a8",
"main.dart.js_65.part.js": "971e3230bb00ed89811bb9c9361d5e16",
"main.dart.js_17.part.js": "a66400ea64713fab255d29aed9e11d27",
"main.dart.js_31.part.js": "575cd80c55fbb241ecf3b58313e9610e",
"main.dart.js_21.part.js": "25cc192a9a4865e9fe8dde163bbe25ab",
"main.dart.js_53.part.js": "eb287b02ca7e8d12e85b6008e2419fe3",
"main.dart.js_43.part.js": "72c55946aaa547ee0138c01b83f1305c",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
