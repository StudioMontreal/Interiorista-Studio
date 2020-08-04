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
})({"images/residential/goldenmile-1.jpg":[function(require,module,exports) {
module.exports = "/goldenmile-1.7e86dec8.jpg";
},{}],"images/residential/goldenmile-2.jpg":[function(require,module,exports) {
module.exports = "/goldenmile-2.eb453dc2.jpg";
},{}],"images/residential/goldenmile-3.jpg":[function(require,module,exports) {
module.exports = "/goldenmile-3.c26fe150.jpg";
},{}],"images/residential/goldenmile-4.jpg":[function(require,module,exports) {
module.exports = "/goldenmile-4.bf538c8d.jpg";
},{}],"images/residential/kitchen-1.jpg":[function(require,module,exports) {
module.exports = "/kitchen-1.cbe77fd7.jpg";
},{}],"images/residential/mexicocondo-1.jpg":[function(require,module,exports) {
module.exports = "/mexicocondo-1.2db0990d.jpg";
},{}],"images/residential/mexicocondo-2.jpg":[function(require,module,exports) {
module.exports = "/mexicocondo-2.a162edf1.jpg";
},{}],"images/residential/parisapt-1.jpg":[function(require,module,exports) {
module.exports = "/parisapt-1.6c3cd29d.jpg";
},{}],"images/residential/parisapt-2.jpg":[function(require,module,exports) {
module.exports = "/parisapt-2.09febea2.jpg";
},{}],"images/residential/parisapt-3.jpg":[function(require,module,exports) {
module.exports = "/parisapt-3.d49c9f96.jpg";
},{}],"images/residential/parisapt-4.jpg":[function(require,module,exports) {
module.exports = "/parisapt-4.05211575.jpg";
},{}],"images/residential/parisapt-5.jpg":[function(require,module,exports) {
module.exports = "/parisapt-5.e8c01338.jpg";
},{}],"images/residential/quinzecent-1.jpg":[function(require,module,exports) {
module.exports = "/quinzecent-1.fe80536a.jpg";
},{}],"images/residential/quinzecent-2.jpg":[function(require,module,exports) {
module.exports = "/quinzecent-2.648f0159.jpg";
},{}],"images/residential/valles-1.jpg":[function(require,module,exports) {
module.exports = "/valles-1.44316522.jpg";
},{}],"images/residential/valles-2.jpg":[function(require,module,exports) {
module.exports = "/valles-2.45f81490.jpg";
},{}],"images/residential/valles-3.jpg":[function(require,module,exports) {
module.exports = "/valles-3.d3c78b89.jpg";
},{}],"images/residential/*.jpg":[function(require,module,exports) {
module.exports = {
  "goldenmile-1": require("./goldenmile-1.jpg"),
  "goldenmile-2": require("./goldenmile-2.jpg"),
  "goldenmile-3": require("./goldenmile-3.jpg"),
  "goldenmile-4": require("./goldenmile-4.jpg"),
  "kitchen-1": require("./kitchen-1.jpg"),
  "mexicocondo-1": require("./mexicocondo-1.jpg"),
  "mexicocondo-2": require("./mexicocondo-2.jpg"),
  "parisapt-1": require("./parisapt-1.jpg"),
  "parisapt-2": require("./parisapt-2.jpg"),
  "parisapt-3": require("./parisapt-3.jpg"),
  "parisapt-4": require("./parisapt-4.jpg"),
  "parisapt-5": require("./parisapt-5.jpg"),
  "quinzecent-1": require("./quinzecent-1.jpg"),
  "quinzecent-2": require("./quinzecent-2.jpg"),
  "valles-1": require("./valles-1.jpg"),
  "valles-2": require("./valles-2.jpg"),
  "valles-3": require("./valles-3.jpg")
};
},{"./goldenmile-1.jpg":"images/residential/goldenmile-1.jpg","./goldenmile-2.jpg":"images/residential/goldenmile-2.jpg","./goldenmile-3.jpg":"images/residential/goldenmile-3.jpg","./goldenmile-4.jpg":"images/residential/goldenmile-4.jpg","./kitchen-1.jpg":"images/residential/kitchen-1.jpg","./mexicocondo-1.jpg":"images/residential/mexicocondo-1.jpg","./mexicocondo-2.jpg":"images/residential/mexicocondo-2.jpg","./parisapt-1.jpg":"images/residential/parisapt-1.jpg","./parisapt-2.jpg":"images/residential/parisapt-2.jpg","./parisapt-3.jpg":"images/residential/parisapt-3.jpg","./parisapt-4.jpg":"images/residential/parisapt-4.jpg","./parisapt-5.jpg":"images/residential/parisapt-5.jpg","./quinzecent-1.jpg":"images/residential/quinzecent-1.jpg","./quinzecent-2.jpg":"images/residential/quinzecent-2.jpg","./valles-1.jpg":"images/residential/valles-1.jpg","./valles-2.jpg":"images/residential/valles-2.jpg","./valles-3.jpg":"images/residential/valles-3.jpg"}],"js/resgallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.residentialMarkup = void 0;

const resImg = require('../images/residential/*.jpg'); // RESIDENTIAL GALLERY


const residentialMarkup = `
<img src="${resImg['goldenmile-1']}" alt="Golden Mile Residence Interiorista Studio" title="Golden Mile Residence" class="modal-inner__img hidden">
<img src="${resImg['goldenmile-2']}" alt="Golden Mile Residence Interiorista Studio" title="Golden Mile Residence" class="modal-inner__img hidden">
<img src="${resImg['goldenmile-3']}" alt="Golden Mile Residence Interiorista Studio" title="Golden Mile Residence" class="modal-inner__img hidden">
<img src="${resImg['goldenmile-4']}" alt="Golden Mile Residence Interiorista Studio" title="Golden Mile Residence" class="modal-inner__img hidden">
<img src="${resImg['mexicocondo-1']}" alt="Mexico City Condo Interior Design" title="Mexico City Condo" class="modal-inner__img hidden">
<img src="${resImg['mexicocondo-2']}" alt="Mexico City Condo Interior Design" title="Mexico City Condo" class="modal-inner__img hidden">
<img src="${resImg['kitchen-1']}" alt="Kitchen  Design Montreal" title="Kitchen Concept" class="modal-inner__img hidden">
<img src="${resImg['parisapt-1']}" alt="Dining Room Interior Design Interiorista"  title="Private Apartment" class="modal-inner__img hidden">
<img src="${resImg['parisapt-2']}" alt="Dining Room Design Interiorista Studio"  title="Private Apartment" class="modal-inner__img hidden">
<img src="${resImg['parisapt-3']}" alt="Paris Living Room Interiorista Studio"  title="Private Apartment" class="modal-inner__img hidden">
<img src="${resImg['parisapt-4']}" alt="Interiorista Montreal Interior Design"  title="Private Apartment" class="modal-inner__img hidden">
<img src="${resImg['parisapt-5']}" alt="Kitchen Desing Interiorista Studio"  title="Private Apartment" class="modal-inner__img hidden">
<img src="${resImg['quinzecent-1']}" alt="Montreal Condo Interior Design" title="Quinzecent Condo" class="modal-inner__img hidden">
<img src="${resImg['quinzecent-2']}" alt="Montreal Condo Interior Design" title="Quinzecent Condo" class="modal-inner__img hidden">
<img src="${resImg['valles-1']}" alt="Kitchen Design Interiorista Studio" title="Vallès House" class="modal-inner__img hidden">
<img src="${resImg['valles-2']}" alt="Kitchen Design Interiorista Studio" title="Vallès House" class="modal-inner__img hidden">
<img src="${resImg['valles-3']}" alt="Residential Design Interiorista Studio" title="Vallès House" class="modal-inner__img hidden">
`;
exports.residentialMarkup = residentialMarkup;
},{"../images/residential/*.jpg":"images/residential/*.jpg"}],"images/retail/karaz-alhamra-1.jpg":[function(require,module,exports) {
module.exports = "/karaz-alhamra-1.e0408154.jpg";
},{}],"images/retail/karaz-alhamra-2.jpg":[function(require,module,exports) {
module.exports = "/karaz-alhamra-2.b9bb60f8.jpg";
},{}],"images/retail/karaz-alhamra-3.jpg":[function(require,module,exports) {
module.exports = "/karaz-alhamra-3.edc35370.jpg";
},{}],"images/retail/karaz-alhamra-4.jpg":[function(require,module,exports) {
module.exports = "/karaz-alhamra-4.7105846f.jpg";
},{}],"images/retail/karaz-alhamra-5.jpg":[function(require,module,exports) {
module.exports = "/karaz-alhamra-5.af92a39d.jpg";
},{}],"images/retail/karaz-alhamra-6.jpg":[function(require,module,exports) {
module.exports = "/karaz-alhamra-6.934296fd.jpg";
},{}],"images/retail/karaz-alhamra-7.jpg":[function(require,module,exports) {
module.exports = "/karaz-alhamra-7.5581bf3c.jpg";
},{}],"images/retail/karaz-alhamra-8.jpg":[function(require,module,exports) {
module.exports = "/karaz-alhamra-8.b5407d80.jpg";
},{}],"images/retail/karaz-alhamra-9.jpg":[function(require,module,exports) {
module.exports = "/karaz-alhamra-9.52c585b1.jpg";
},{}],"images/retail/karaz-branding-1.jpg":[function(require,module,exports) {
module.exports = "/karaz-branding-1.b45cb9a1.jpg";
},{}],"images/retail/karaz-branding-2.jpg":[function(require,module,exports) {
module.exports = "/karaz-branding-2.55171617.jpg";
},{}],"images/retail/karaz-branding-3.jpg":[function(require,module,exports) {
module.exports = "/karaz-branding-3.4bba8d8c.jpg";
},{}],"images/retail/karaz-branding-4.jpg":[function(require,module,exports) {
module.exports = "/karaz-branding-4.86171cb0.jpg";
},{}],"images/retail/karaz-branding-5.jpg":[function(require,module,exports) {
module.exports = "/karaz-branding-5.0790a718.jpg";
},{}],"images/retail/karaz-branding-6.jpg":[function(require,module,exports) {
module.exports = "/karaz-branding-6.8e881a15.jpg";
},{}],"images/retail/karaz-branding-7.jpg":[function(require,module,exports) {
module.exports = "/karaz-branding-7.bac25316.jpg";
},{}],"images/retail/karaz-branding-8.jpg":[function(require,module,exports) {
module.exports = "/karaz-branding-8.11211cff.jpg";
},{}],"images/retail/karaz-kids-1.jpg":[function(require,module,exports) {
module.exports = "/karaz-kids-1.22f4baeb.jpg";
},{}],"images/retail/karaz-kids-2.jpg":[function(require,module,exports) {
module.exports = "/karaz-kids-2.5e539bf3.jpg";
},{}],"images/retail/karaz-kids-3.jpg":[function(require,module,exports) {
module.exports = "/karaz-kids-3.20f31a92.jpg";
},{}],"images/retail/karaz-kids-4.jpg":[function(require,module,exports) {
module.exports = "/karaz-kids-4.a336fbce.jpg";
},{}],"images/retail/karaz-kids-5.jpg":[function(require,module,exports) {
module.exports = "/karaz-kids-5.a3cd5a91.jpg";
},{}],"images/retail/karaz-kids-6.jpg":[function(require,module,exports) {
module.exports = "/karaz-kids-6.ec21f3ea.jpg";
},{}],"images/retail/karaz-kids-7.jpg":[function(require,module,exports) {
module.exports = "/karaz-kids-7.608218de.jpg";
},{}],"images/retail/karaz-kids-8.jpg":[function(require,module,exports) {
module.exports = "/karaz-kids-8.84414010.jpg";
},{}],"images/retail/karaz-nakheel-1.jpg":[function(require,module,exports) {
module.exports = "/karaz-nakheel-1.5c26fccc.jpg";
},{}],"images/retail/karaz-nakheel-2.jpg":[function(require,module,exports) {
module.exports = "/karaz-nakheel-2.20c6037e.jpg";
},{}],"images/retail/via-pellegrino-1.jpg":[function(require,module,exports) {
module.exports = "/via-pellegrino-1.f8e8f61d.jpg";
},{}],"images/retail/via-pellegrino-2.jpg":[function(require,module,exports) {
module.exports = "/via-pellegrino-2.8cbda237.jpg";
},{}],"images/retail/via-pellegrino-3.jpg":[function(require,module,exports) {
module.exports = "/via-pellegrino-3.be9a9312.jpg";
},{}],"images/retail/via-pellegrino-4.jpg":[function(require,module,exports) {
module.exports = "/via-pellegrino-4.20f67de7.jpg";
},{}],"images/retail/*.jpg":[function(require,module,exports) {
module.exports = {
  "karaz-alhamra-1": require("./karaz-alhamra-1.jpg"),
  "karaz-alhamra-2": require("./karaz-alhamra-2.jpg"),
  "karaz-alhamra-3": require("./karaz-alhamra-3.jpg"),
  "karaz-alhamra-4": require("./karaz-alhamra-4.jpg"),
  "karaz-alhamra-5": require("./karaz-alhamra-5.jpg"),
  "karaz-alhamra-6": require("./karaz-alhamra-6.jpg"),
  "karaz-alhamra-7": require("./karaz-alhamra-7.jpg"),
  "karaz-alhamra-8": require("./karaz-alhamra-8.jpg"),
  "karaz-alhamra-9": require("./karaz-alhamra-9.jpg"),
  "karaz-branding-1": require("./karaz-branding-1.jpg"),
  "karaz-branding-2": require("./karaz-branding-2.jpg"),
  "karaz-branding-3": require("./karaz-branding-3.jpg"),
  "karaz-branding-4": require("./karaz-branding-4.jpg"),
  "karaz-branding-5": require("./karaz-branding-5.jpg"),
  "karaz-branding-6": require("./karaz-branding-6.jpg"),
  "karaz-branding-7": require("./karaz-branding-7.jpg"),
  "karaz-branding-8": require("./karaz-branding-8.jpg"),
  "karaz-kids-1": require("./karaz-kids-1.jpg"),
  "karaz-kids-2": require("./karaz-kids-2.jpg"),
  "karaz-kids-3": require("./karaz-kids-3.jpg"),
  "karaz-kids-4": require("./karaz-kids-4.jpg"),
  "karaz-kids-5": require("./karaz-kids-5.jpg"),
  "karaz-kids-6": require("./karaz-kids-6.jpg"),
  "karaz-kids-7": require("./karaz-kids-7.jpg"),
  "karaz-kids-8": require("./karaz-kids-8.jpg"),
  "karaz-nakheel-1": require("./karaz-nakheel-1.jpg"),
  "karaz-nakheel-2": require("./karaz-nakheel-2.jpg"),
  "via-pellegrino-1": require("./via-pellegrino-1.jpg"),
  "via-pellegrino-2": require("./via-pellegrino-2.jpg"),
  "via-pellegrino-3": require("./via-pellegrino-3.jpg"),
  "via-pellegrino-4": require("./via-pellegrino-4.jpg")
};
},{"./karaz-alhamra-1.jpg":"images/retail/karaz-alhamra-1.jpg","./karaz-alhamra-2.jpg":"images/retail/karaz-alhamra-2.jpg","./karaz-alhamra-3.jpg":"images/retail/karaz-alhamra-3.jpg","./karaz-alhamra-4.jpg":"images/retail/karaz-alhamra-4.jpg","./karaz-alhamra-5.jpg":"images/retail/karaz-alhamra-5.jpg","./karaz-alhamra-6.jpg":"images/retail/karaz-alhamra-6.jpg","./karaz-alhamra-7.jpg":"images/retail/karaz-alhamra-7.jpg","./karaz-alhamra-8.jpg":"images/retail/karaz-alhamra-8.jpg","./karaz-alhamra-9.jpg":"images/retail/karaz-alhamra-9.jpg","./karaz-branding-1.jpg":"images/retail/karaz-branding-1.jpg","./karaz-branding-2.jpg":"images/retail/karaz-branding-2.jpg","./karaz-branding-3.jpg":"images/retail/karaz-branding-3.jpg","./karaz-branding-4.jpg":"images/retail/karaz-branding-4.jpg","./karaz-branding-5.jpg":"images/retail/karaz-branding-5.jpg","./karaz-branding-6.jpg":"images/retail/karaz-branding-6.jpg","./karaz-branding-7.jpg":"images/retail/karaz-branding-7.jpg","./karaz-branding-8.jpg":"images/retail/karaz-branding-8.jpg","./karaz-kids-1.jpg":"images/retail/karaz-kids-1.jpg","./karaz-kids-2.jpg":"images/retail/karaz-kids-2.jpg","./karaz-kids-3.jpg":"images/retail/karaz-kids-3.jpg","./karaz-kids-4.jpg":"images/retail/karaz-kids-4.jpg","./karaz-kids-5.jpg":"images/retail/karaz-kids-5.jpg","./karaz-kids-6.jpg":"images/retail/karaz-kids-6.jpg","./karaz-kids-7.jpg":"images/retail/karaz-kids-7.jpg","./karaz-kids-8.jpg":"images/retail/karaz-kids-8.jpg","./karaz-nakheel-1.jpg":"images/retail/karaz-nakheel-1.jpg","./karaz-nakheel-2.jpg":"images/retail/karaz-nakheel-2.jpg","./via-pellegrino-1.jpg":"images/retail/via-pellegrino-1.jpg","./via-pellegrino-2.jpg":"images/retail/via-pellegrino-2.jpg","./via-pellegrino-3.jpg":"images/retail/via-pellegrino-3.jpg","./via-pellegrino-4.jpg":"images/retail/via-pellegrino-4.jpg"}],"js/retailgallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retailMarkup = void 0;

const retailImg = require('../images/retail/*.jpg'); // RETAIL GALLERY


const retailMarkup = `
<img src="${retailImg['karaz-alhamra-1']}" alt="Karaz Linen Saudi Arabia Interiorista Studio" title="Karaz Linen AlHamra Mall" class="modal-inner__img hidden">
<img src="${retailImg['karaz-alhamra-2']}" alt="Karaz Linen AlHamra Mall Interiorista Studio" title="Karaz Linen AlHamra Mall" class="modal-inner__img hidden">
<img src="${retailImg['karaz-alhamra-3']}" alt="Karaz Linen AlHamra Mall Interiorista Studio" title="Karaz Linen AlHamra Mall" class="modal-inner__img hidden">
<img src="${retailImg['karaz-alhamra-4']}" alt="Karaz Linen AlHamra Mall Interiorista Studio" title="Karaz Linen AlHamra Mall" class="modal-inner__img hidden">
<img src="${retailImg['karaz-alhamra-5']}" alt="Karaz Linen AlHamra Mall Interiorista Studio" title="Karaz Linen AlHamra Mall" class="modal-inner__img hidden">
<img src="${retailImg['karaz-alhamra-6']}" alt="Karaz Linen AlHamra Mall Interiorista Studio" title="Karaz Linen AlHamra Mall" class="modal-inner__img hidden">
<img src="${retailImg['karaz-alhamra-7']}" alt="Karaz Linen AlHamra Mall Interiorista Studio" title="Karaz Linen AlHamra Mall" class="modal-inner__img hidden">
<img src="${retailImg['karaz-alhamra-8']}" alt="Karaz Linen AlHamra Mall Interiorista Studio" title="Karaz Linen AlHamra Mall" class="modal-inner__img hidden">
<img src="${retailImg['karaz-alhamra-9']}" alt="Karaz Linen AlHamra Mall Interiorista Studio" title="Karaz Linen AlHamra Mall" class="modal-inner__img hidden">

<img src="${retailImg['karaz-kids-1']}" alt="Karaz Kids Store" title="Karaz Kids Store" class="modal-inner__img hidden">
<img src="${retailImg['karaz-kids-2']}" alt="Karaz Kids Store" title="Karaz Kids Store" class="modal-inner__img hidden">
<img src="${retailImg['karaz-kids-3']}" alt="Karaz Kids Store" title="Karaz Kids Store" class="modal-inner__img hidden">
<img src="${retailImg['karaz-kids-4']}" alt="Karaz Kids Store" title="Karaz Kids Store" class="modal-inner__img hidden">
<img src="${retailImg['karaz-kids-5']}" alt="Karaz Kids Store" title="Karaz Kids Store" class="modal-inner__img hidden">
<img src="${retailImg['karaz-kids-6']}" alt="Karaz Kids Store" title="Karaz Kids Store" class="modal-inner__img hidden">
<img src="${retailImg['karaz-kids-7']}" alt="Karaz Kids Store" title="Karaz Kids Store" class="modal-inner__img hidden">

<img src="${retailImg['karaz-nakheel-1']}" alt="Via Pellegrino Design Interiorista"  title="Karaz Linen Nahkheel Mall" class="modal-inner__img hidden">
<img src="${retailImg['karaz-nakheel-2']}" alt="Via Pellegrino Design Interiorista"  title="Karaz Linen Nahkheel Mall" class="modal-inner__img hidden">


<img src="${retailImg['via-pellegrino-1']}" alt="Via Pellegrino Design Interiorista Studio"  title="Via Pellegrino" class="modal-inner__img hidden">
<img src="${retailImg['via-pellegrino-2']}" alt="Via Pellegrino Interiorista Studio"  title="Via Pellegrino" class="modal-inner__img hidden">
<img src="${retailImg['via-pellegrino-3']}" alt="Via Pellegrino Interior Design"  title="Via Pellegrino" class="modal-inner__img hidden">
<img src="${retailImg['via-pellegrino-4']}" alt="Via Pellegrino Interiorista Studio"  title="Via Pellegrino" class="modal-inner__img hidden">

<img src="${retailImg['karaz-branding-1']}" alt="Karaz Linen Branding" title="Karaz Linen Branding" class="modal-inner__img hidden">
<img src="${retailImg['karaz-branding-2']}" alt="Karaz Linen Branding" title="Karaz Linen Branding" class="modal-inner__img hidden">
<img src="${retailImg['karaz-branding-3']}" alt="Karaz Linen Branding" title="Karaz Linen Branding" class="modal-inner__img hidden">
<img src="${retailImg['karaz-branding-4']}" alt="Karaz Linen Branding" title="Karaz Linen Branding" class="modal-inner__img hidden">
<img src="${retailImg['karaz-branding-5']}" alt="Karaz Linen Branding" title="Karaz Linen Branding" class="modal-inner__img hidden">
<img src="${retailImg['karaz-branding-6']}" alt="Karaz Linen Branding" title="Karaz Linen Branding" class="modal-inner__img hidden">
<img src="${retailImg['karaz-branding-7']}" alt="Karaz Linen Branding" title="Karaz Linen Branding" class="modal-inner__img hidden">
<img src="${retailImg['karaz-branding-8']}" alt="Karaz Linen Branding" title="Karaz Linen Branding" class="modal-inner__img hidden">
`;
exports.retailMarkup = retailMarkup;
},{"../images/retail/*.jpg":"images/retail/*.jpg"}],"images/kiosk/nosh-cupcake-1.jpg":[function(require,module,exports) {
module.exports = "/nosh-cupcake-1.b7ef61d4.jpg";
},{}],"images/kiosk/nosh-cupcake-2.jpg":[function(require,module,exports) {
module.exports = "/nosh-cupcake-2.e570376d.jpg";
},{}],"images/kiosk/noshbox-1.jpg":[function(require,module,exports) {
module.exports = "/noshbox-1.0ff8bdb1.jpg";
},{}],"images/kiosk/noshbox-2.jpg":[function(require,module,exports) {
module.exports = "/noshbox-2.64816d8a.jpg";
},{}],"images/kiosk/*.jpg":[function(require,module,exports) {
module.exports = {
  "nosh-cupcake-1": require("./nosh-cupcake-1.jpg"),
  "nosh-cupcake-2": require("./nosh-cupcake-2.jpg"),
  "noshbox-1": require("./noshbox-1.jpg"),
  "noshbox-2": require("./noshbox-2.jpg")
};
},{"./nosh-cupcake-1.jpg":"images/kiosk/nosh-cupcake-1.jpg","./nosh-cupcake-2.jpg":"images/kiosk/nosh-cupcake-2.jpg","./noshbox-1.jpg":"images/kiosk/noshbox-1.jpg","./noshbox-2.jpg":"images/kiosk/noshbox-2.jpg"}],"js/kioskgallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kioskMarkup = void 0;

const kioskImg = require('../images/kiosk/*.jpg'); // RETAIL GALLERY


const kioskMarkup = `
<img src="${kioskImg['noshbox-1']}" alt="Noshbox Kiosk Interiorista Studio" title="Noshbox Kiosk" class="modal-inner__img hidden">
<img src="${kioskImg['noshbox-2']}" alt="Karaz Linen Saudi Arabia Interiorista Studio" title="Noshbox Kiosk" class="modal-inner__img hidden">
<img src="${kioskImg['nosh-cupcake-1']}" alt="Karaz Linen Saudi Arabia Interiorista Studio" title="Nosh Cupcake Kiosk" class="modal-inner__img hidden">
<img src="${kioskImg['nosh-cupcake-2']}" alt="Karaz Linen Saudi Arabia Interiorista Studio" title="Nosh Cupcake Kiosk" class="modal-inner__img hidden">
`;
exports.kioskMarkup = kioskMarkup;
},{"../images/kiosk/*.jpg":"images/kiosk/*.jpg"}],"js/app.js":[function(require,module,exports) {
"use strict";

var _resgallery = require("./resgallery");

var _retailgallery = require("./retailgallery");

var _kioskgallery = require("./kioskgallery");

//UI elements
const gallery1 = document.querySelector('.gallery');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
const modalTitle = modalOuter.querySelector('.modal-inner__text');
const sliderUI = document.querySelector('.slider');
const nextButton = document.querySelector('.goToNext');
const prevButton = document.querySelector('.goToPrev');
const loader = document.querySelector('.loader');
const thumbs = gallery1.querySelector('.gallery__img');

function Gallery(gallery) {
  //Phone media query
  let phoneMedia = window.matchMedia("(min-width: 571px)");
  let sliderHTML;
  let current;
  let prev;
  let next; //Pick the corresponding gallery markup 

  if (gallery.classList.contains('g1')) {
    //g1 residential
    sliderHTML = _resgallery.residentialMarkup;
  } else if (gallery.classList.contains('g2')) {
    //g1 retail
    sliderHTML = _retailgallery.retailMarkup;
  } else if (gallery.classList.contains('g3')) {
    //g1 retail
    sliderHTML = _kioskgallery.kioskMarkup;
  }

  function showImage(el) {
    if (!el || !phoneMedia.matches) {
      console.info('no image to show');
      return;
    }

    console.log(el); //Insert the corresponding image menu to the modal slider

    sliderUI.insertAdjacentHTML('afterbegin', sliderHTML);
    console.log(sliderUI); //Grab the image to the correspoding thumb and make it current 

    current = sliderUI.querySelector(`img[title="${el.title}"]`); //Open the Modal

    openModal();
    current.addEventListener('load', function () {
      //when image loads
      modalOuter.querySelector('.modal-loader').style.opacity = '0'; //hide loader

      setTimeout(() => {
        current.classList.remove('hidden'); //make image visible
      }, 300);
    }); //Add the title to the image

    modalTitle.textContent = current.title; //Asign the values of the previos and next elements

    prev = current.previousElementSibling || sliderUI.lastElementChild;
    next = current.nextElementSibling || sliderUI.firstElementChild;
  }

  function openModal() {
    modalOuter.classList.remove('hidden');
    gallery.classList.add('hidden');
    gallery.classList.remove('show'); // Event listeners to be bound when we open the modal:

    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    gallery.classList.remove('hidden');
    modalOuter.classList.add('hidden');
    setTimeout(() => {
      modalOuter.querySelector('.modal-loader').style.opacity = '1';
    }, 1600); //Remove image menu

    sliderUI.innerHTML = ''; //Remove event listeners

    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function showNextImage() {
    current.classList.add('hidden');
    [prev, current, next] = [current, next, // get the next slide, or if it's at the end, loop around and grab the first slide
    next.nextElementSibling || sliderUI.firstElementChild];
    current.classList.remove('hidden');
    modalTitle.textContent = current.title;
  }

  function showPrevImage() {
    current.classList.add('hidden'); // make an new array of the new values, and destructure them over and into the prev, current and next variables

    [prev, current, next] = [// get the prev slide, if there is none, get the last slide from the entire slider for wrapping
    prev.previousElementSibling || sliderUI.lastElementChild, prev, current];
    current.classList.remove('hidden');
    modalTitle.textContent = current.title;
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  } //Event Listeners
  //Modal Evenlistener


  modalOuter.addEventListener('click', e => {
    if (!e.target.closest('.modal-inner') && !e.target.closest('.modal-outer__icon')) {
      closeModal();
    }
  }); //Open gallery when clickin thumb event listener

  const galleryImg = gallery.querySelectorAll('img');
  galleryImg.forEach(photo => photo.addEventListener('click', e => showImage(e.currentTarget)));
}

Gallery(gallery1); //load images with loader

function imagesLoaded() {
  loader.classList.add('hidden');
  setTimeout(() => {
    gallery1.classList.add('show'); //make it visible
  }, 300);
}

window.addEventListener('load', imagesLoaded);
},{"./resgallery":"js/resgallery.js","./retailgallery":"js/retailgallery.js","./kioskgallery":"js/kioskgallery.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52830" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map