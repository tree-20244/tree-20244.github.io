'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "18100edbd6590f2ab657f9066fd592e7",
"assets/AssetManifest.bin.json": "b90d565025ed7d530bc6d8db5f575c0c",
"assets/AssetManifest.json": "acabc13f7686c2ea62e8d3665aa2864c",
"assets/assets/fonts/blogh.otf": "12eaa4f16f0f27333769383220f8e3de",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Manrope-Medium.ttf": "aa9897f9fa37c84d7b9d3d05a8a6bc07",
"assets/assets/fonts/Manrope-SemiBold.ttf": "4410f0d144bea752f9bfb5f33909e0c5",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Urbanist.ttf": "bfeaaa729391fa9dfdfb3ae36cf5429b",
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
"assets/assets/images/sections/ac_section/hager.png": "9fee83e6f9851886b972362b54adcae0",
"assets/assets/images/sections/ac_section/hany.png": "f6d84851b422a1f85c2cbe98d04bfec9",
"assets/assets/images/sections/ac_section/hr_cover.png": "9271a9eedd1bfe4e14cb28b7c94fb3c0",
"assets/assets/images/sections/ac_section/kareem.png": "871b44488e27be663e75d10ba05989dd",
"assets/assets/images/sections/ac_section/markting_cover.png": "43bbbb7a87157f40b15e818756bab718",
"assets/assets/images/sections/ac_section/md_cover.png": "b01e886b81c6839e3dd3821931e3c697",
"assets/assets/images/sections/ac_section/rana.png": "bfaf6a849dea7811016f1111bc11475d",
"assets/assets/images/sections/ac_section/rawan.png": "0b0b8b98c24d9c7c9c32f7d8a5ec175e",
"assets/assets/images/sections/ac_section/rodina.png": "b5f70c8c014d16437fa12407f5bd537e",
"assets/assets/images/sections/ac_section/ui_cover.png": "56cc60c47afa5b0ffe6404f64271c2f0",
"assets/assets/images/sections/hr_section/hr_cover.png": "2b73ec184bb916b670c95a7bf2422375",
"assets/assets/images/sections/hr_section/not_found.png": "30bc2905154b13951c25875e37555097",
"assets/assets/images/sections/multimedia_section/ahmed_marei.png": "0eb2863c7e56a9bd62766240c667b8d5",
"assets/assets/images/sections/multimedia_section/ahmed_shawky.png": "df8f98afc426f1d1a24198b8dd3a419b",
"assets/assets/images/sections/multimedia_section/graphic_design_cover.png": "cab1b5eb5a13f1d2e4641ff737c00810",
"assets/assets/images/sections/multimedia_section/menna.png": "fb488e2e71896e89fd95e67bae13b993",
"assets/assets/images/sections/multimedia_section/pv_cover.png": "7a5af08192954b73de28eb575f855cc0",
"assets/assets/images/sections/multimedia_section/Rahma.png": "eb056936ef5563fdfb02c67016b4ee63",
"assets/assets/images/sections/multimedia_section/shahy.png": "94986f2048488f3723d63cd6a2ebc6ed",
"assets/assets/images/sections/multimedia_section/social_media_cover.png": "497f3c26a9f0660054ae29dd21ccbe55",
"assets/assets/images/sections/operation_section/cnl_cover.png": "406bf48e56fd8ae81cd500576007997e",
"assets/assets/images/sections/operation_section/fr_cover.png": "f451f9378da6fe4fab7bab4e3c296807",
"assets/assets/images/sections/operation_section/not_found.png": "30bc2905154b13951c25875e37555097",
"assets/assets/images/sections/operation_section/nour.png": "4d027c445f956ace9153445d18c76822",
"assets/assets/images/sections/operation_section/pr_cover.png": "6ff9674a1e4d49c1a49c082d2c06ab3c",
"assets/assets/images/sections/operation_section/Youssef.png": "7a8601d911cf6e3c0bbaacdab3ba1629",
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
"assets/assets/images/team/Rawan.png": "441b1c7d8e3913f07c2d74b43b10b890",
"assets/assets/images/team/Sarah.png": "617f4b382cde8649a33b7be2cb040b20",
"assets/assets/images/team/Yehia.png": "c7d910d215f454569da80ac596be12c6",
"assets/assets/images/team/Youssef.png": "b20440b82b5e5eda022b26234e0a3aac",
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
"assets/FontManifest.json": "89f751f7248e8efc1366f8bc9231b59a",
"assets/fonts/MaterialIcons-Regular.otf": "cc10c80795d09365c4a4ef0b7764bb5c",
"assets/NOTICES": "83f0e1d650ebbe9d7a9856ae2c1e3302",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "5f6976be68b61d1a3b6a983596d96229",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2b9fd25791546b77b2bdaeeac5b974bb",
"/": "2b9fd25791546b77b2bdaeeac5b974bb",
"main.dart.js": "f61c7c7a3d57e334a819ffa7d63489d8",
"manifest.json": "70974b44e80dfe28fdc732f54dbae9e7",
"version.json": "9999cf41e5b27254ca36cae6234074ba"};
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
