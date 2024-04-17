'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1aa4ccb9f49d35a54cb0f0f151e16c85",
"assets/AssetManifest.bin.json": "22b3297ebab50c231e7b4b29d09235b6",
"assets/AssetManifest.json": "0b26defea97a0c55394a80078b4f197c",
"assets/assets/fonts/blogh.otf": "12eaa4f16f0f27333769383220f8e3de",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Manrope-Medium.ttf": "aa9897f9fa37c84d7b9d3d05a8a6bc07",
"assets/assets/fonts/Manrope-SemiBold.ttf": "4410f0d144bea752f9bfb5f33909e0c5",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/icons/black_arrow.svg": "c1e9448300190124a3a34f6ffcffbbb8",
"assets/assets/icons/facebook.svg": "3570a0618f67fb2f164f637609f6879e",
"assets/assets/icons/instagram.svg": "dd46a78cc69b55fd1a96a80a1cacd28f",
"assets/assets/icons/linked_in.svg": "e0e7d1b26a105ddf960e9932d441a9c6",
"assets/assets/icons/menu.svg": "196bd2312808039e14a35a6d9473c392",
"assets/assets/icons/small_tree.svg": "76fb2bd7094479eb075eefe2eb07fb28",
"assets/assets/icons/tree.svg": "a8c92c9de13c32580b5e2867bec45ff9",
"assets/assets/icons/twitter.svg": "8296666198fbc3eaab1a636453f932c8",
"assets/assets/icons/white_arrow.svg": "89ad9f99a15d6adc52d9814a7685c021",
"assets/assets/images/apple_store.png": "45a900346c983704d2eb34658c936a80",
"assets/assets/images/backScreen.png": "9567a61e140eabdc3bdf5ec43d8ea67e",
"assets/assets/images/committes/HR.png": "057ff2b571a2225691d54d59b6ec1817",
"assets/assets/images/committes/MD.png": "268b1392f06d19e70fb67cfd37d3101d",
"assets/assets/images/committes/UIUX.png": "ab94566f1093127daf8a4d3fecdbda96",
"assets/assets/images/first_section01.jpg": "d8c8ce3f65f75dafb1f9edd4b1dbb1f3",
"assets/assets/images/google_play_btn.png": "b31604ac3ba8db15c6415c0e4e14334e",
"assets/assets/images/logo_Screen.png": "0379e8e7af84ab1f375154f3738a3c39",
"assets/assets/images/old_logo_green.png": "8610d4a90f9ac378e2f24ef61df4fb03",
"assets/assets/images/slack.png": "4fa6694d989e06fdb124b15e9cb2a8dd",
"assets/assets/images/sponsors/abdelmaboud.png": "c29b7431f4fd48d53a17f7e6bf9050a2",
"assets/assets/images/sponsors/alx.png": "0b02c9612a2ccc71996cbd8ef5515de7",
"assets/assets/images/sponsors/aqua_delta.png": "2d06c45356b6ca87e611c919912b2093",
"assets/assets/images/sponsors/ArabBankLogo.png": "a04e3f8ef6ba7eb2e40ba3dd6445f5b1",
"assets/assets/images/sponsors/cold_stone.png": "2ce10a93418ed7a3c622bb37462a6458",
"assets/assets/images/sponsors/fawry.png": "20b2293235edfb6f02d925f2e022517c",
"assets/assets/images/sponsors/Indomie.png": "2568c8bd281bf8a0fbb6ec550dc3a6a2",
"assets/assets/images/sponsors/jobzella.png": "e036370e08c5c5aaf3245c25b12d17f9",
"assets/assets/images/sponsors/kelloggs.png": "0ef901c9429530542f12ca1304c32dfe",
"assets/assets/images/sponsors/lino.png": "9c869944a0cbadd717ac839187455f53",
"assets/assets/images/sponsors/nutella.png": "11f69f657c72cf3329480745f34d8593",
"assets/assets/images/sponsors/rabbit.png": "2682ecfe5c0e2b7b810670a46af3beec",
"assets/assets/images/sponsors/Resala-logo.png": "a3d8f0f0a4fda53a406cd5a861335d28",
"assets/assets/images/sponsors/sticker_zone.png": "777b02f06328eca85b96dcddb6e339b3",
"assets/assets/images/sponsors/swvl.png": "52dc9b3078746ebc2f833291fda63267",
"assets/assets/images/sponsors/tree.png": "0c990de0900c9d95b602f96ca9135d03",
"assets/assets/images/sponsors/wuzzuf.png": "21cc11d084bebfec157b8e777d8fae2d",
"assets/assets/images/team/Mohammed_Hesham.jpg": "d5dae2be4949d4ebb9f60e126e2ec613",
"assets/assets/images/team/Rawan.jpg": "698566d780e56284def340c2e5b8c9b7",
"assets/assets/images/team/Saif.jpg": "6aef082e4cd725ffae054dfb6931e918",
"assets/assets/images/team/Sarah.jpg": "5dda2ce7b5026abd190447cde9cae46b",
"assets/assets/images/team/Yehia.jpg": "4011b9d05062a47fad47392cb4762ff9",
"assets/assets/images/team.png": "5f4f2fc4b931c6176340aaa18455936f",
"assets/assets/images/third_section01.png": "7a2d883a9cac3b3b843ae75c72b9a322",
"assets/assets/images/training/second_section01.png": "177377e896f3f5e53ad6c9e8fc6691d2",
"assets/assets/images/training/second_section02.png": "2e6e4a15b91662392d4833a103c662a8",
"assets/assets/images/training/second_section03.png": "f22fb7615fec2469bcf5e45914a67822",
"assets/assets/images/training/second_section04.png": "5bfae1d222d833942accdd60e5385aca",
"assets/assets/images/training/second_section05.jpg": "f1f8ccc5d925783c49b15f2c63dceaaf",
"assets/assets/images/training/second_section06.jpg": "d1fbb8642b2b1491cbee8008a4e1555c",
"assets/assets/images/training/second_section07.jpg": "645206873bc1bea8438054c54343efb4",
"assets/assets/images/training/second_section08.jpg": "82bdc836862dbea4ce41df6acbdc2cfe",
"assets/assets/images/workshops/hr.png": "37118d9f65ee26c68b4436401523f6e0",
"assets/assets/images/workshops/markting.png": "fc5f24a5361efaec5bff1ee39ffdeed7",
"assets/assets/images/workshops/mobile.png": "13f320f07ff1d18e42133f749563f7b0",
"assets/assets/images/workshops/uiux.png": "600cf8f8991586d46d7f119287693f2f",
"assets/FontManifest.json": "d8eab8d90cfbd4c0fa9d948bb2afd2d7",
"assets/fonts/MaterialIcons-Regular.otf": "cc10c80795d09365c4a4ef0b7764bb5c",
"assets/NOTICES": "b2f48508f2449b4a1faf08146a985bc6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ab85e59ce54a5374405678cc1eba9f35",
"/": "ab85e59ce54a5374405678cc1eba9f35",
"main.dart.js": "ea92c4547e98c3a1ad7ddd6175e2f465",
"manifest.json": "70974b44e80dfe28fdc732f54dbae9e7",
"version.json": "9999cf41e5b27254ca36cae6234074ba"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
