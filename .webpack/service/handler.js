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
/*! exports provided: queryVehicles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryVehicles", function() { return queryVehicles; });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./schema.ts");




const queryVehicles = (event, context, callback) => {
  Object(graphql__WEBPACK_IMPORTED_MODULE_0__["graphql"])(_schema__WEBPACK_IMPORTED_MODULE_1__["schema"], event.body).then(result => callback(null, {
    statusCode: 200,
    body: JSON.stringify(result)
  })).catch(callback);
};

/***/ }),

/***/ "./resolvers/create.ts":
/*!*****************************!*\
  !*** ./resolvers/create.ts ***!
  \*****************************/
/*! exports provided: createVehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVehicle", function() { return createVehicle; });
/* harmony import */ var _dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dynamodb */ "./dynamodb.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);




const createVehicle = data => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      make: data.make,
      model: data.model,
      transmission: data.transmission,
      mileage: data.mileage,
      fuel_type: data.fuel_type,
      vehicle_type: data.vehicle_type,
      vehicle_color: data.vehicle_color,
      id: uuid__WEBPACK_IMPORTED_MODULE_1__["v1"](),
      created_at: Date.now(),
      updated_at: Date.now()
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
  TableName: process.env.DYNAMODB_TABLE
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
    TableName: process.env.DYNAMODB_TABLE,
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
    TableName: process.env.DYNAMODB_TABLE,
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
/* harmony import */ var _types_transmission_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/transmission.type */ "./types/transmission.type.ts");
/* harmony import */ var _types_fuel_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/fuel.type */ "./types/fuel.type.ts");
/* harmony import */ var _types_vehicle_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/vehicle.type */ "./types/vehicle.type.ts");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_7__);










const vehicleType = new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
  name: 'Vehicles',
  fields: {
    id: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLString"])
    },
    make: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLString"])
    },
    model: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLString"])
    },
    transmission: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](_types_transmission_type__WEBPACK_IMPORTED_MODULE_4__["default"])
    },
    mileage: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLInt"])
    },
    fuel_type: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](_types_fuel_type__WEBPACK_IMPORTED_MODULE_5__["default"])
    },
    vehicle_type: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](_types_vehicle_type__WEBPACK_IMPORTED_MODULE_6__["default"])
    },
    vehicle_color: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLString"])
    }
  }
});
const schema = new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLSchema"]({
  query: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
    name: 'Query',
    fields: {
      listVehicles: {
        type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"](vehicleType),
        resolve: (parent, args) => Object(_resolvers_list__WEBPACK_IMPORTED_MODULE_2__["listVehicles"])()
      },
      viewVehicle: {
        args: {
          id: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLString"])
          }
        },
        type: vehicleType,
        resolve: (parent, args) => Object(_resolvers_view__WEBPACK_IMPORTED_MODULE_1__["viewVehicle"])(args.id)
      }
    }
  }),
  mutation: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
    name: 'Mutation',
    fields: {
      createVehicle: {
        args: {
          make: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLString"])
          },
          model: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLString"])
          },
          transmission: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](_types_transmission_type__WEBPACK_IMPORTED_MODULE_4__["default"])
          },
          mileage: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLInt"])
          },
          fuel_type: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](_types_fuel_type__WEBPACK_IMPORTED_MODULE_5__["default"])
          },
          vehicle_type: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](_types_vehicle_type__WEBPACK_IMPORTED_MODULE_6__["default"])
          },
          vehicle_color: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLString"])
          }
        },
        type: vehicleType,
        resolve: (parent, args) => Object(_resolvers_create__WEBPACK_IMPORTED_MODULE_0__["createVehicle"])(args)
      },
      removeVehicle: {
        args: {
          id: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLString"])
          }
        },
        type: graphql__WEBPACK_IMPORTED_MODULE_7__["GraphQLBoolean"],
        resolve: (parent, args) => Object(_resolvers_remove__WEBPACK_IMPORTED_MODULE_3__["removeVehicle"])(args.id)
      }
    }
  })
});

/***/ }),

/***/ "./types/fuel.type.ts":
/*!****************************!*\
  !*** ./types/fuel.type.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);

const FuelEnumType = new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLEnumType"]({
  name: 'FuelEnum',
  values: {
    PETROL: {
      value: 0
    },
    DEISEL: {
      value: 1
    },
    ELECTRIC: {
      value: 2
    },
    LPG: {
      value: 3
    },
    HYBRID: {
      value: 4
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (FuelEnumType);

/***/ }),

/***/ "./types/transmission.type.ts":
/*!************************************!*\
  !*** ./types/transmission.type.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);

const TransmissionEnumType = new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLEnumType"]({
  name: 'TransmissionEnum',
  values: {
    MANUAL_GEARBOX: {
      value: 0
    },
    SEMI_AUTOMATIC: {
      value: 1
    },
    AUTOMATIC_TRANSMISSION: {
      value: 2
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (TransmissionEnumType);

/***/ }),

/***/ "./types/vehicle.type.ts":
/*!*******************************!*\
  !*** ./types/vehicle.type.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);

const VehicleEnumType = new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLEnumType"]({
  name: 'VehicleType',
  values: {
    CABRIOLET: {
      value: 0
    },
    COUPE: {
      value: 1
    },
    ESTATE: {
      value: 2
    },
    SUV: {
      value: 3
    },
    SALOON: {
      value: 4
    },
    VAN: {
      value: 5
    },
    SMALL: {
      value: 6
    },
    OTHER: {
      value: 7
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (VehicleEnumType);

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