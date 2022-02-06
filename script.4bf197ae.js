// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"P4Zx":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"Zy0T":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.galleryItems = void 0;
var galleryItems = [{
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
  description: 'Hokkaido Flower'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
  description: 'Container Haulage Freight'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
  description: 'Aerial Beach View'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
  description: 'Flower Blooms'
}, {
  preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
  description: 'Alpine Mountains'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
  description: 'Mountain Lake Sailing'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
  description: 'Alpine Spring Meadows'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
  description: 'Nature Landscape'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
  description: 'Lighthouse Coast Sea'
}];
exports.galleryItems = galleryItems;
},{}],"tW6H":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.marcup = void 0;

var marcup = function marcup(list, place) {
  var contentOfGallery = list.map(function (el) {
    return "<li class=\"gallery__item\"><a class=\"gallery__link\"><img class=\"gallery__image\" \n        src=\"".concat(el.preview, "\" alt=\"").concat(el.description, "\"></a></li>");
  }).join("");
  return place.insertAdjacentHTML('afterbegin', contentOfGallery);
};

exports.marcup = marcup;
},{}],"JN7f":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.overlay = exports.modalButton = exports.lightbox = exports.gallery = exports.bigImage = void 0;
var gallery = document.querySelector('.js-gallery');
exports.gallery = gallery;
var lightbox = document.querySelector('.js-lightbox');
exports.lightbox = lightbox;
var bigImage = document.querySelector('.lightbox__image');
exports.bigImage = bigImage;
var modalButton = document.querySelector('button[data-action="close-lightbox"]');
exports.modalButton = modalButton;
var overlay = document.querySelector('.lightbox__overlay');
exports.overlay = overlay;
},{}],"Vhh2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openOrCloseModal = void 0;

var _consts = require("./consts");

var openOrCloseModal = function openOrCloseModal() {
  _consts.lightbox.classList.toggle('is-open');
};

exports.openOrCloseModal = openOrCloseModal;
},{"./consts":"JN7f"}],"dLA0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPictureAtribute = void 0;

var _consts = require("./consts");

var _openOrCloseModal = require("./openOrCloseModal");

var setPictureAtribute = function setPictureAtribute(object) {
  _consts.bigImage.setAttribute('src', object.original);

  _consts.bigImage.setAttribute('alt', object.description);

  (0, _openOrCloseModal.openOrCloseModal)();
};

exports.setPictureAtribute = setPictureAtribute;
},{"./consts":"JN7f","./openOrCloseModal":"Vhh2"}],"HFI6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findTarget = void 0;

var _setPictureAtribute = require("./setPictureAtribute");

var _list = require("./list");

var findTarget = function findTarget(event) {
  event.preventDefault();
  var target = event.target;
  if (target.nodeName !== 'IMG') return;
  var urlOfSmallPicture = target.getAttribute('src');

  var pictureForModal = _list.galleryItems.find(function (el) {
    return urlOfSmallPicture === el.preview;
  });

  (0, _setPictureAtribute.setPictureAtribute)(pictureForModal);
};

exports.findTarget = findTarget;
},{"./setPictureAtribute":"dLA0","./list":"Zy0T"}],"eo33":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePictureAtribute = void 0;

var _consts = require("./consts");

var _openOrCloseModal = require("./openOrCloseModal");

var removePictureAtribute = function removePictureAtribute() {
  (0, _openOrCloseModal.openOrCloseModal)();

  _consts.bigImage.setAttribute('src', '');

  _consts.bigImage.setAttribute('alt', '');
};

exports.removePictureAtribute = removePictureAtribute;
},{"./consts":"JN7f","./openOrCloseModal":"Vhh2"}],"BOTC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeModalWithEscape = void 0;

var _removePictureAtribute = require("./removePictureAtribute");

var closeModalWithEscape = function closeModalWithEscape(e) {
  if (e.key === "Escape") {
    (0, _removePictureAtribute.removePictureAtribute)();
  }
};

exports.closeModalWithEscape = closeModalWithEscape;
},{"./removePictureAtribute":"eo33"}],"atWa":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCurrentElementIndex = void 0;

var _consts = require("./consts");

var _list = require("./list");

var findCurrentElementIndex = function findCurrentElementIndex() {
  var currentElement = _list.galleryItems.find(function (el) {
    return _consts.bigImage.getAttribute('src') === el.original;
  });

  return _list.galleryItems.indexOf(currentElement);
};

exports.findCurrentElementIndex = findCurrentElementIndex;
},{"./consts":"JN7f","./list":"Zy0T"}],"WYo6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openPreviousImage = void 0;

var _consts = require("./consts");

var _list = require("./list");

var openPreviousImage = function openPreviousImage(el) {
  _consts.bigImage.setAttribute('src', _list.galleryItems[el - 1].original);

  _consts.bigImage.setAttribute('alt', _list.galleryItems[el - 1].description);
};

exports.openPreviousImage = openPreviousImage;
},{"./consts":"JN7f","./list":"Zy0T"}],"XQi0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openNextImage = void 0;

var _consts = require("./consts");

var _list = require("./list");

var openNextImage = function openNextImage(el) {
  _consts.bigImage.setAttribute('src', _list.galleryItems[el + 1].original);

  _consts.bigImage.setAttribute('alt', _list.galleryItems[el + 1].description);
};

exports.openNextImage = openNextImage;
},{"./consts":"JN7f","./list":"Zy0T"}],"kUMP":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openNextOrPreviousImage = void 0;

var _list = require("./list");

var _findCurrentElementIndex = require("./findCurrentElementIndex");

var _openPreviousImage = require("./openPreviousImage");

var _openNextImage = require("./openNextImage");

var openNextOrPreviousImage = function openNextOrPreviousImage(event) {
  var currentElementIndex = (0, _findCurrentElementIndex.findCurrentElementIndex)();

  if (event.key === "ArrowLeft" && currentElementIndex > 0) {
    (0, _openPreviousImage.openPreviousImage)(currentElementIndex);
  } else if (event.key === "ArrowRight" && currentElementIndex < _list.galleryItems.length - 1) {
    (0, _openNextImage.openNextImage)(currentElementIndex);
  }
};

exports.openNextOrPreviousImage = openNextOrPreviousImage;
},{"./list":"Zy0T","./findCurrentElementIndex":"atWa","./openPreviousImage":"WYo6","./openNextImage":"XQi0"}],"mpVp":[function(require,module,exports) {
"use strict";

require("./style/style.css");

var _list = require("./js/list");

var _markup = require("./js/markup");

var _consts = require("./js/consts");

var _delegation = require("./js/delegation");

var _removePictureAtribute = require("./js/removePictureAtribute");

var _closeModalWithEscape = require("./js/closeModalWithEscape");

var _openNextOrPreviousImage = require("./js/openNextOrPreviousImage");

(0, _markup.marcup)(_list.galleryItems, _consts.gallery);

_consts.gallery.addEventListener('click', _delegation.findTarget);

_consts.modalButton.addEventListener('click', _removePictureAtribute.removePictureAtribute);

_consts.overlay.addEventListener('click', _removePictureAtribute.removePictureAtribute);

window.addEventListener('keydown', _closeModalWithEscape.closeModalWithEscape);
window.addEventListener('keydown', _openNextOrPreviousImage.openNextOrPreviousImage);
},{"./style/style.css":"P4Zx","./js/list":"Zy0T","./js/markup":"tW6H","./js/consts":"JN7f","./js/delegation":"HFI6","./js/removePictureAtribute":"eo33","./js/closeModalWithEscape":"BOTC","./js/openNextOrPreviousImage":"kUMP"}]},{},["mpVp"], null)
//# sourceMappingURL=/gallery/script.4bf197ae.js.map