module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dynamodb.ts":
/*!*********************!*\
  !*** ./dynamodb.ts ***!
  \*********************/
/*! exports provided: dynamodb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamodb", function() { return dynamodb; });
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);



let options = {}; // connect to local DB if running offline

if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'DEFAULT_ACCESS_KEY',
    // needed if you don't have aws credentials at all in env
    secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env

  };
}

const dynamodb = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["DynamoDB"].DocumentClient(options);


/***/ }),

/***/ "./handler.ts":
/*!********************!*\
  !*** ./handler.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./schema.ts");





module.exports.queryVehicles = (event, context, callback) => {
  Object(graphql__WEBPACK_IMPORTED_MODULE_0__["graphql"])(_schema__WEBPACK_IMPORTED_MODULE_1__["schema"], event.body).then(result => callback(null, {
    statusCode: 200,
    body: JSON.stringify(result)
  })).catch(callback);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resolvers/create.ts":
/*!*****************************!*\
  !*** ./resolvers/create.ts ***!
  \*****************************/
/*! exports provided: addVehicles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVehicles", function() { return addVehicles; });
/* harmony import */ var _dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dynamodb */ "./dynamodb.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);




const addVehicles = data => {
  const params = {
    TableName: 'vehicles',
    Item: {
      name: data.name,
      quantity: data.quantity,
      id: uuid__WEBPACK_IMPORTED_MODULE_1__["v1"](),
      addedAt: Date.now()
    }
  };
  return _dynamodb__WEBPACK_IMPORTED_MODULE_0__["dynamodb"].put(params).promise().then(result => params.Item);
};

/***/ }),

/***/ "./resolvers/list.ts":
/*!***************************!*\
  !*** ./resolvers/list.ts ***!
  \***************************/
/*! exports provided: listVehicles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listVehicles", function() { return listVehicles; });
/* harmony import */ var _dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dynamodb */ "./dynamodb.ts");



const listVehicles = () => _dynamodb__WEBPACK_IMPORTED_MODULE_0__["dynamodb"].scan({
  TableName: 'vehicles'
}).promise().then(r => r.Items);

/***/ }),

/***/ "./resolvers/remove.ts":
/*!*****************************!*\
  !*** ./resolvers/remove.ts ***!
  \*****************************/
/*! exports provided: removeVehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeVehicle", function() { return removeVehicle; });
/* harmony import */ var _dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dynamodb */ "./dynamodb.ts");



const removeVehicle = id => {
  const params = {
    TableName: 'vehicles',
    Key: {
      id
    }
  };
  return _dynamodb__WEBPACK_IMPORTED_MODULE_0__["dynamodb"].delete(params).promise();
};

/***/ }),

/***/ "./resolvers/view.ts":
/*!***************************!*\
  !*** ./resolvers/view.ts ***!
  \***************************/
/*! exports provided: viewVehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewVehicle", function() { return viewVehicle; });
/* harmony import */ var _dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dynamodb */ "./dynamodb.ts");



const viewVehicle = id => {
  const params = {
    TableName: 'vehicles',
    Key: {
      id
    }
  };
  return _dynamodb__WEBPACK_IMPORTED_MODULE_0__["dynamodb"].get(params).promise().then(r => r.Item);
};

/***/ }),

/***/ "./schema.ts":
/*!*******************!*\
  !*** ./schema.ts ***!
  \*******************/
/*! exports provided: schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schema", function() { return schema; });
/* harmony import */ var _resolvers_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolvers/create */ "./resolvers/create.ts");
/* harmony import */ var _resolvers_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvers/view */ "./resolvers/view.ts");
/* harmony import */ var _resolvers_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers/list */ "./resolvers/list.ts");
/* harmony import */ var _resolvers_remove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers/remove */ "./resolvers/remove.ts");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_4__);







const vehicleType = new graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLObjectType"]({
  name: 'Vehicles',
  fields: {
    id: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLString"])
    },
    name: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLString"])
    },
    quantity: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLInt"])
    },
    addedAt: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLString"])
    }
  }
});
const schema = new graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLSchema"]({
  query: new graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLObjectType"]({
    name: 'Query',
    fields: {
      listVehicles: {
        type: new graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLList"](vehicleType),
        resolve: (parent, args) => Object(_resolvers_list__WEBPACK_IMPORTED_MODULE_2__["listVehicles"])()
      },
      viewVehicle: {
        args: {
          id: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLString"])
          }
        },
        type: vehicleType,
        resolve: (parent, args) => Object(_resolvers_view__WEBPACK_IMPORTED_MODULE_1__["viewVehicle"])(args.id)
      }
    }
  }),
  mutation: new graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLObjectType"]({
    name: 'Mutation',
    fields: {
      createVehicle: {
        args: {
          name: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLString"])
          },
          quantity: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLInt"])
          }
        },
        type: vehicleType,
        resolve: (parent, args) => Object(_resolvers_create__WEBPACK_IMPORTED_MODULE_0__["addVehicles"])(args)
      },
      removeVehicle: {
        args: {
          id: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLString"])
          }
        },
        type: graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLBoolean"],
        resolve: (parent, args) => Object(_resolvers_remove__WEBPACK_IMPORTED_MODULE_3__["removeVehicle"])(args.id)
      }
    }
  })
});

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=handler.js.map