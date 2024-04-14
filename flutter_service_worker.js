'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1df5ee28c9955544f2ebe06a6c829b57",
".git/config": "bd05f5fa4bce45e4a930cbe580cad1cd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1ad88c5f1a3ad4ebc6661044c274736a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9216591511f4b17e700862bb70ef6ac4",
".git/logs/refs/heads/master": "9216591511f4b17e700862bb70ef6ac4",
".git/objects/18/47cf3dd29f8a71dbe78cdc86428ef8753fdd50": "170f4b9c867b3ed86bd5ecca016f6700",
".git/objects/24/ebc0e5ebc76019995a89a7bc2dccdd841d9b5e": "88811a9fbe94a1287f69dac27883341e",
".git/objects/26/5759e612d88feab3df32142d01f5550da47114": "878aa76518174cc2c14282a91befd3cd",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/446455e5667c30f53b6ab07008a218df2422b9": "3b27fffae7013b099dc404d2cb68360f",
".git/objects/39/5751414ae488b082ec8f53d48493f9a61af657": "75bf39be23d4ed40ba0acfd08817ca10",
".git/objects/41/448aed60c41ab2b89890b132e771b571682ec7": "d17ab00bcf51408fc60afbbb3581433e",
".git/objects/42/747124fe936066e8e1e01b5ffd3356e15e4530": "07eb75d3792f5f36f1bb0abbe48dbb56",
".git/objects/44/bbac0d97968506819ce9d71c95f365bc5bf8dc": "803dfd1af3d0e0caaa5481d72fc8dba2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/63/8b1862464d55ddb3558bfd33220589afbbbf14": "060756155225d37bb3e6e3a2c6bb7272",
".git/objects/6b/9b1251f2ab6849caa3222e879b1d9d9bb31ff6": "d8969cadc6ad6a017bd3e62bdd7cf275",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/70/2cb7b8af1a458172e8edf18eae0673375b8f62": "217ff36c91177c3636fede6cd38fa514",
".git/objects/74/6c567ff4d304835d4eedab5c73dc60acabbd7f": "a40e649904521ed0c96cc503e00fbc1c",
".git/objects/77/f966522b875e884ebcecad3e6ea3d081851e5f": "5aed5b77a21a480cbb1d23cda631ca12",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/df9d9a4098c3061434040351b55ae2b87586a9": "8ce6a94f1a3c66392c4d7f1adc6efccd",
".git/objects/99/a863995eed5abfa0b140d71a79c43661759eac": "7dbd220fb5e5242c951fe3bf38d88793",
".git/objects/9c/370af1349f08e25879b778ba90bde3f3f1abb6": "8ee18a2c1a5fc12f090c4dd002064f2e",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/91e9d20197e17fe5cafb96c3912e36b308e0ac": "46b861c388a66e1c89695521a706d127",
".git/objects/9f/8e8f88ccda1f1a7679f5adf61f4a9064b9715a": "8a9d8cb6bd1ec7ff1eea5f524f746939",
".git/objects/a2/c53cca3180558a800279b50a86d0c023d05d7f": "c2baf0eaf00c79b3d50f0cd2bee64bef",
".git/objects/ac/0183993fba487ffbedb68efea80e8980b9e089": "82f3185241fc19cfc298fa17fa15102f",
".git/objects/b2/c9a8d15971ee18931031516b29733982699102": "3e39f84e756d390b51a03bf225ef7b9a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2c76abe11cc52523b82312112126c0ce2178ad": "d60a5c2e7d72c688ab584aec34c4cc41",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/ef4675053b5b468cdb477053e28b1c698ba08e": "fab0fd41338c5615dc3f6c9f4639a958",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c9/2859ead3c9113fd2379d7a556bd572d3e60d92": "eaaec01cb7ec66884e3ddc4ffef3d036",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/0656d544a4da51d25b1353956453ce0f237536": "ffa9ffafd1953af492dacde17fa92cbd",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/5f43559e5edf0722a0f978a506d9786976d89a": "37d1ba7f707129d415ddd5622d057e8e",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/fe/1bbe6e66253a526f18b51498b90ca32d449ad5": "e33047f771632bed0aa9369a0ef82a7c",
".git/refs/heads/master": "2caf6b7f11794fad1e2724900c2fe22c",
"assets/AssetManifest.bin": "8a0733df361800041ebc7b336cb45991",
"assets/AssetManifest.json": "004bb71e71eb562695a180efbb93760e",
"assets/assets/aw.png": "17ae6e0de08c988c3d4ce210bc7945e3",
"assets/assets/tessdata/eng.traineddata": "d1be414fbb296b3ad777bfca655e194e",
"assets/assets/tessdata/letsgodigital.traineddata": "516562c5fb61d6783cea85d980126d6d",
"assets/assets/tessdata_config.json": "54c26a783a667da653b2bc56bd976004",
"assets/assets/test.png": "952782329608851337c3977e02640519",
"assets/assets/test1.png": "796f96c7783489f209da5280c20a5ee2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "913afd5eff3b4b5c65b22d6025b0a674",
"assets/NOTICES": "f9f0fb441701a3e412c1f36ef58e56dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_tesseract_ocr/images/test_1.jpg": "0a2be1304ca3660cbd959ab65d45f98f",
"assets/packages/flutter_tesseract_ocr/images/test_11.jpg": "0d635defc90b9fa1df0ba9def0eeb9cb",
"assets/packages/flutter_tesseract_ocr/images/test_16.jpg": "35314971c77f915dd1bf0b9579a84960",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "77cc4a2baed59d78ed076f64a1f756da",
"/": "77cc4a2baed59d78ed076f64a1f756da",
"main.dart.js": "ed94cbbcb42c264cb34e0f4a6a349ac5",
"manifest.json": "8d77a396a2f8247ea74ae0eefbfd2f92",
"version.json": "b75d80a30d92d1dc1b25c5b56458c383"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
