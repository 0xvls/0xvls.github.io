'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fc2a9acf64aa21fc2746ff0f140d63d7",
"main.dart.js_69.part.js": "3ec4a130b8001f3b3c9637a6a548c111",
"main.dart.js_24.part.js": "bfc185678c1a48a80dfaa07f028f6d9e",
"main.dart.js_34.part.js": "ea0d7e5fc593635f42d33d7e969616b7",
"main.dart.js_46.part.js": "ef2007a341f402904e7da98b38ffb34b",
"main.dart.js_56.part.js": "9957618424a994e6a68681ab49b3150a",
"version.json": "056a45de1b3e8de8e11d14377726076c",
"main.dart.js_7.part.js": "616f1dd30728a001541b066ef67fad03",
"main.dart.js_60.part.js": "35c927963adef031d18bb572c9b3f712",
"main.dart.js_70.part.js": "b9664eb61fa12b76ea20d831baf3fba3",
"main.dart.js_12.part.js": "25cedf8bc8d18aa7d543d4565c23c71a",
"main.dart.js_71.part.js": "7251a18ee5c483ad99e0a6d1cb91771d",
"main.dart.js_61.part.js": "487d5842a424868de422dd0390179877",
"index.html": "2d9870f3d473dbe90a370270d88de9e8",
"/": "2d9870f3d473dbe90a370270d88de9e8",
"main.dart.js_13.part.js": "df670ca90972e0e4b018c9a6bda924d9",
"main.dart.js_68.part.js": "8e3577f78e08009c7f28dcc200f3f1b7",
"main.dart.js_78.part.js": "ac23de8962ed8065d6dd3aeba41bea2c",
"main.dart.js_35.part.js": "06229ad85e64e5aaed915f352e26fb56",
"main.dart.js_25.part.js": "d38e9862a8a976af2e5e5e12cfdc2506",
"main.dart.js_57.part.js": "4c2b9b38f0d396a64acc9af3876253f8",
"main.dart.js_47.part.js": "dd9b9de5657ec2152e69e9b3007ea8e6",
"main.dart.js_11.part.js": "27d4b6f2c903a81eb4cdd390a324e235",
"main.dart.js_63.part.js": "3ad64e649aaba4ab910d91c4f42bdaf1",
"main.dart.js_4.part.js": "7d98107a297b37c70ecb57aa3ac24816",
"main.dart.js_73.part.js": "35e8c5a6ca1ea4a6c34db9a0b9e05900",
"main.dart.js": "9887ca29e395eb44a83d65774310a8e0",
"main.dart.js_45.part.js": "b7d3eca11df6175bca0af2961b30dbd1",
"main.dart.js_27.part.js": "3223c48384001ce53d6666258c66d24e",
"main.dart.js_37.part.js": "06d3ce31ee87d8a05d6ca1c0218e9927",
"main.dart.js_19.part.js": "ada936093b0178c0689fa74ef08092b7",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"main.dart.js_54.part.js": "a90d503da7492985c54d37fbd2b1bb66",
"main.dart.js_44.part.js": "1718d50afa135ed13760d799d4b1b1ae",
"main.dart.js_36.part.js": "a52efc9f04fe2c063961788e176fc16f",
"main.dart.js_26.part.js": "c50063d38eb7836a8fc7b5ff092582b7",
"main.dart.js_10.part.js": "e618d5d2dd9a04c0e719d3221ed17937",
"main.dart.js_72.part.js": "179c11494bf86d1d88cbee8b8b147a6f",
"main.dart.js_5.part.js": "6b767e1d59433264ca746072f38061a5",
"main.dart.js_62.part.js": "1b8dc89b9b2a6989d91666c255b745d7",
"main.dart.js_58.part.js": "c4bce3b624c84a8a4a10fb1721a5514c",
"main.dart.js_48.part.js": "74faef0b2069a1ac795807daa687f858",
"main.dart.js_15.part.js": "7a686620ff10c03014553869e74fcf82",
"main.dart.js_67.part.js": "6a0fc63203e301d88a24a97fe97c6382",
"main.dart.js_77.part.js": "c3aab3132dbf9b1373403a237a7f64bb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_41.part.js": "e008f7ac75f30a3a85d08a2d794159d4",
"main.dart.js_51.part.js": "e0477fc7624ea138168a8ff3a8a37895",
"main.dart.js_23.part.js": "5a6fa00c0faf1fc6a2f77b48da8e4750",
"main.dart.js_33.part.js": "8e416be2d73a5184cf7f26a3ddb021ec",
"main.dart.js_9.part.js": "f3974e865ba463cc0baf13fba2aa5d89",
"main.dart.js_50.part.js": "9c252083a1f132657fc77e867602c8b3",
"main.dart.js_40.part.js": "779ad3c51159e690e09e5701369bb63d",
"main.dart.js_32.part.js": "d68ef564699c24bd5a222b5a285df127",
"main.dart.js_22.part.js": "aeca63974caeebc978981d0a13e41788",
"main.dart.js_8.part.js": "1b9020fcb8c170b582a72b0694fe41d4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f8908dc153006a126d70d34062ce9bd6",
"main.dart.js_49.part.js": "06b0d68e70b02ce2308208313dd269cf",
"main.dart.js_59.part.js": "1ab92831c40d075a0b87297fde6234b2",
"main.dart.js_76.part.js": "0cae873bd3c976ffc6ef86a3d22bbae1",
"main.dart.js_66.part.js": "35f5a6a197df9fd456c132b1a3e1b94c",
"main.dart.js_1.part.js": "9ff55a52d8f698f966367aa267a70f40",
"main.dart.js_20.part.js": "fa8e8e901b6f9176f172d60611a73ceb",
"main.dart.js_30.part.js": "6845f80f43144c0ce6242a541d21932a",
"main.dart.js_42.part.js": "370ab7f5627f3a099c07d311cefb9260",
"main.dart.js_39.part.js": "b52734380081e3222cbce390b70156c3",
"main.dart.js_29.part.js": "bd85dfe44f3d475ee8ffacb66cc7e02e",
"main.dart.js_80.part.js": "669d42fd26ddcf31f8f9726f1151746a",
"main.dart.js_64.part.js": "2c7fb5e72cf468c1afdde0781f061a70",
"main.dart.js_74.part.js": "59ac7dce4e637bc0e5b2d6765bf2e486",
"main.dart.js_16.part.js": "014d18983f59a85c4de4096f50ed4d63",
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
"main.dart.js_38.part.js": "318581b4f4dbe101c078eca4dffd038a",
"main.dart.js_75.part.js": "380c3d5e2e5a09feca0f337b76dff7ed",
"main.dart.js_2.part.js": "61e1ace224c091e6b25f349239b6b4e1",
"main.dart.js_65.part.js": "1e6a1c684db3e7f2780ee28e0c805262",
"main.dart.js_17.part.js": "db943a2b96fb8cb89f3ac949b1ce28b3",
"main.dart.js_31.part.js": "e9d2867c95a020514002c43b1b9ddb0c",
"main.dart.js_21.part.js": "20e5bb3806aff099bfa8a636cda307a6",
"main.dart.js_53.part.js": "cc35ab2bbf4817c6f82454fc1c48791d",
"main.dart.js_43.part.js": "99db5e7c47e0fc309156a66f81ac9d9c",
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
