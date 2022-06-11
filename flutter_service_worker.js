'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"main.dart.js": "1ee1432ead52724f35bbfcc29a669aec",
"version.json": "c417b43da5b84bc3864583e9c80c0c57",
"assets/assets/images/Asset%252010.png": "0a974b68dbf256f631b344731cd8bead",
"assets/assets/images/Asset%252012.png": "178b77b5f0d04e0a2a661f3fe29fe90a",
"assets/assets/images/Asset%252011.png": "7635d8d5074e07294cfb89cf53fc5bf1",
"assets/assets/images/Asset%252013.png": "ebd6f286bf1557f4f9b834a6ffe65ff6",
"assets/assets/images/Asset%252014.png": "ebc790137d030c0f3cfe750a61b0abf7",
"assets/assets/images/Asset%252016.png": "1d5fcc84499062a8725bbc333a337ca1",
"assets/assets/images/Asset%252017.png": "1a41a6159952378a2e198ee9eefffcd6",
"assets/assets/images/Asset%252015.png": "a782d02667f5855a00b79a04f2ee473f",
"assets/assets/images/Asset%252018.png": "2dc7126cf58c87afb6bee827896a6b5d",
"assets/assets/images/Asset%25202.png": "c5c2cd7d116490c11c6f5fbe6a67017d",
"assets/assets/images/Asset%25203.png": "2d5a1850e82cdc505c79bfbc9c714256",
"assets/assets/images/Asset%25204.png": "7ad302d7ffc510f1d0ff613bccd09768",
"assets/assets/images/Asset%25205.png": "7a808e673460ca4a46ce67d9a148abe8",
"assets/assets/images/Asset%25206.png": "f0457bad1483dcd36061243be33e0e77",
"assets/assets/images/Asset%252019.png": "33b28336f0c405fb01847f86f8d035f0",
"assets/assets/images/Asset%25207.png": "d1202fb7a3f33fa5d629574a47bf78fc",
"assets/assets/images/Asset%25208.png": "d244f188f40824dbf28229463729ceda",
"assets/assets/images/Asset%25209.png": "fac615cee408b691227fde9b41d09bea",
"assets/assets/images/Asset34.png": "792e4dcf6a9ad0145d474b499de5d5b8",
"assets/assets/images/Asset36.png": "792e4dcf6a9ad0145d474b499de5d5b8",
"assets/assets/images/Asset35.png": "792e4dcf6a9ad0145d474b499de5d5b8",
"assets/assets/images/Asset37.png": "792e4dcf6a9ad0145d474b499de5d5b8",
"assets/assets/images/Icon01.png": "f9614dcae34d2bed8fef42cf80486124",
"assets/assets/images/Calendar.png": "f72f78eb5e4f1ce1aadb464a830f3405",
"assets/assets/images/Asset33.png": "792e4dcf6a9ad0145d474b499de5d5b8",
"assets/assets/images/Icon02.png": "8e0e735a7bd5743896da546fdfba261d",
"assets/assets/images/Day1.png": "665aa6b475ad1981ef91baf1333773f5",
"assets/assets/images/Icon03.png": "5718517cf99eca2f24952cc13ebf7660",
"assets/assets/images/Icon_row202.png": "66bd7f973003b8d509051401d3db2992",
"assets/assets/images/Icon_row201.png": "dd7ac853c8121dacf2e46ff89ab09789",
"assets/assets/images/Icon_row203.png": "e02465491a12b7c03dcdefb60103a53c",
"assets/assets/images/Logo11.png": "10e99c193a3337e6089352992fee9c87",
"assets/assets/images/Icon_row302.png": "cf594241e5ded58b7cb22ea8782c946e",
"assets/assets/images/Icon_row204.png": "a04d4ebb444096b0e5cdbe5bc9132c95",
"assets/assets/images/Icon_row301.png": "2a3f3d221d93fbb43c7be2ad7ab3b164",
"assets/assets/images/Logout.png": "64fd8d6f41787085bcafa020e5030870",
"assets/assets/images/Trangch.png": "d988bca7857cb9f8deb3b54009b5a2c0",
"assets/assets/images/plank.jpeg": "ea8039d4c3ef990c1a050712d1d0e6c9",
"assets/assets/images/send.png": "97a92315c2a315b5fc41608ac13691f4",
"assets/assets/images/menu-icon.png": "666168d7d125d380aa1b436c8eabe1f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "a2c9e0ed8c2a27d53b311170760e34b5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "f99825d2df65300b9649bebeb26c4aa2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "339dbeabcd196a3586b4d14695809fd0",
"/": "339dbeabcd196a3586b4d14695809fd0",
"manifest.json": "279bfd2637d58d04ccd3e805c5293728"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
