(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../handler.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../dynamodb.ts":
/*!***************************************!*\
  !*** C:/work/instamotion/dynamodb.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dynamodb = void 0;

const aws_sdk_1 = __webpack_require__(/*! aws-sdk */ "aws-sdk");

let options = {}; // connect to local DB if running offline

if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'DEFAULT_ACCESS_KEY',
    secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env

  };
}

const dynamodb = new aws_sdk_1.DynamoDB.DocumentClient(options);
exports.dynamodb = dynamodb;

/***/ }),

/***/ "../../../handler.ts":
/*!**************************************!*\
  !*** C:/work/instamotion/handler.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);



Object.defineProperty(exports, "__esModule", {
  value: true
});

const graphql_1 = __webpack_require__(/*! graphql */ "../../graphql/index.mjs");

const schema_1 = __webpack_require__(/*! ./schema */ "../../../schema.ts");

module.exports.queryVehicles = (event, context, callback) => {
  graphql_1.graphql(schema_1.schema, event.body).then(result => callback(null, {
    statusCode: 200,
    body: JSON.stringify(result)
  })).catch(callback);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "../../webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../../../resolvers/create.ts":
/*!***********************************************!*\
  !*** C:/work/instamotion/resolvers/create.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addVehicles = void 0;

const dynamodb_1 = __webpack_require__(/*! ../dynamodb */ "../../../dynamodb.ts");

const uuid = __webpack_require__(/*! uuid */ "../../uuid/index.js");

const addVehicles = data => {
  const params = {
    TableName: 'vehicles',
    Item: {
      name: data.name,
      quantity: data.quantity,
      id: uuid.v1(),
      addedAt: Date.now()
    }
  };
  return dynamodb_1.dynamodb.put(params).promise().then(result => params.Item);
};

exports.addVehicles = addVehicles;

/***/ }),

/***/ "../../../resolvers/list.ts":
/*!*********************************************!*\
  !*** C:/work/instamotion/resolvers/list.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listVehicles = void 0;

const dynamodb_1 = __webpack_require__(/*! ../dynamodb */ "../../../dynamodb.ts");

const listVehicles = () => dynamodb_1.dynamodb.scan({
  TableName: 'vehicles'
}).promise().then(r => r.Items);

exports.listVehicles = listVehicles;

/***/ }),

/***/ "../../../resolvers/remove.ts":
/*!***********************************************!*\
  !*** C:/work/instamotion/resolvers/remove.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeVehicle = void 0;

const dynamodb_1 = __webpack_require__(/*! ../dynamodb */ "../../../dynamodb.ts");

const removeVehicle = id => {
  const params = {
    TableName: 'vehicles',
    Key: {
      id
    }
  };
  return dynamodb_1.dynamodb.delete(params).promise();
};

exports.removeVehicle = removeVehicle;

/***/ }),

/***/ "../../../resolvers/view.ts":
/*!*********************************************!*\
  !*** C:/work/instamotion/resolvers/view.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewVehicle = void 0;

const dynamodb_1 = __webpack_require__(/*! ../dynamodb */ "../../../dynamodb.ts");

const viewVehicle = id => {
  const params = {
    TableName: 'vehicles',
    Key: {
      id
    }
  };
  return dynamodb_1.dynamodb.get(params).promise().then(r => r.Item);
};

exports.viewVehicle = viewVehicle;

/***/ }),

/***/ "../../../schema.ts":
/*!*************************************!*\
  !*** C:/work/instamotion/schema.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = void 0;

const create_1 = __webpack_require__(/*! ./resolvers/create */ "../../../resolvers/create.ts");

const view_1 = __webpack_require__(/*! ./resolvers/view */ "../../../resolvers/view.ts");

const list_1 = __webpack_require__(/*! ./resolvers/list */ "../../../resolvers/list.ts");

const remove_1 = __webpack_require__(/*! ./resolvers/remove */ "../../../resolvers/remove.ts");

const graphql_1 = __webpack_require__(/*! graphql */ "../../graphql/index.mjs");

const vehicleType = new graphql_1.GraphQLObjectType({
  name: 'Vehicles',
  fields: {
    id: {
      type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
    },
    name: {
      type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
    },
    quantity: {
      type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
    },
    addedAt: {
      type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
    }
  }
});
exports.schema = new graphql_1.GraphQLSchema({
  query: new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
      listVehicles: {
        type: new graphql_1.GraphQLList(vehicleType),
        resolve: (parent, args) => list_1.listVehicles()
      },
      viewVehicle: {
        args: {
          id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
          }
        },
        type: vehicleType,
        resolve: (parent, args) => view_1.viewVehicle(args.id)
      }
    }
  }),
  mutation: new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createVehicle: {
        args: {
          name: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
          },
          quantity: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
          }
        },
        type: vehicleType,
        resolve: (parent, args) => create_1.addVehicles(args)
      },
      removeVehicle: {
        args: {
          id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
          }
        },
        type: graphql_1.GraphQLBoolean,
        resolve: (parent, args) => remove_1.removeVehicle(args.id)
      }
    }
  })
});

/***/ }),

/***/ "../../buffer-from/index.js":
/*!*************************************************************!*\
  !*** C:/work/instamotion/node_modules/buffer-from/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = Object.prototype.toString

var isModern = (
  typeof Buffer.alloc === 'function' &&
  typeof Buffer.allocUnsafe === 'function' &&
  typeof Buffer.from === 'function'
)

function isArrayBuffer (input) {
  return toString.call(input).slice(8, -1) === 'ArrayBuffer'
}

function fromArrayBuffer (obj, byteOffset, length) {
  byteOffset >>>= 0

  var maxLength = obj.byteLength - byteOffset

  if (maxLength < 0) {
    throw new RangeError("'offset' is out of bounds")
  }

  if (length === undefined) {
    length = maxLength
  } else {
    length >>>= 0

    if (length > maxLength) {
      throw new RangeError("'length' is out of bounds")
    }
  }

  return isModern
    ? Buffer.from(obj.slice(byteOffset, byteOffset + length))
    : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)))
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  return isModern
    ? Buffer.from(string, encoding)
    : new Buffer(string, encoding)
}

function bufferFrom (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return isModern
    ? Buffer.from(value)
    : new Buffer(value)
}

module.exports = bufferFrom


/***/ }),

/***/ "../../graphql/error/GraphQLError.mjs":
/*!***********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/error/GraphQLError.mjs ***!
  \***********************************************************************/
/*! exports provided: GraphQLError, printError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return GraphQLError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return printError; });
/* harmony import */ var _jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/isObjectLike */ "../../graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _language_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/location */ "../../graphql/language/location.mjs");
/* harmony import */ var _language_printLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/printLocation */ "../../graphql/language/printLocation.mjs");



/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


  var _source = source;

  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;

  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }

      return list;
    }, []);
  }

  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations;

  if (positions && source) {
    _locations = positions.map(function (pos) {
      return Object(_language_location__WEBPACK_IMPORTED_MODULE_1__["getLocation"])(source, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(Object(_language_location__WEBPACK_IMPORTED_MODULE_1__["getLocation"])(node.loc.source, node.loc.start));
      }

      return list;
    }, []);
  }

  var _extensions = extensions;

  if (_extensions == null && originalError != null) {
    var originalExtensions = originalError.extensions;

    if (Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_0__["default"])(originalExtensions)) {
      _extensions = originalExtensions;
    }
  }

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_locations)
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(path)
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _extensions || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_extensions)
    }
  }); // Include (non-enumerable) stack trace.

  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}
GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: GraphQLError
  },
  name: {
    value: 'GraphQLError'
  },
  toString: {
    value: function toString() {
      return printError(this);
    }
  }
});
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + Object(_language_printLocation__WEBPACK_IMPORTED_MODULE_2__["printLocation"])(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + Object(_language_printLocation__WEBPACK_IMPORTED_MODULE_2__["printSourceLocation"])(error.source, location);
    }
  }

  return output;
}


/***/ }),

/***/ "../../graphql/error/formatError.mjs":
/*!**********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/error/formatError.mjs ***!
  \**********************************************************************/
/*! exports provided: formatError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatError", function() { return formatError; });
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert */ "../../graphql/jsutils/devAssert.mjs");


/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  error || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'Received null or undefined error.');
  var message = error.message || 'An unknown error occurred.';
  var locations = error.locations;
  var path = error.path;
  var extensions = error.extensions;
  return extensions ? {
    message: message,
    locations: locations,
    path: path,
    extensions: extensions
  } : {
    message: message,
    locations: locations,
    path: path
  };
}
/**
 * @see https://github.com/graphql/graphql-spec/blob/master/spec/Section%207%20--%20Response.md#errors
 */


/***/ }),

/***/ "../../graphql/error/index.mjs":
/*!****************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/error/index.mjs ***!
  \****************************************************************/
/*! exports provided: GraphQLError, printError, syntaxError, locatedError, formatError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["printError"]; });

/* harmony import */ var _syntaxError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syntaxError */ "../../graphql/error/syntaxError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return _syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"]; });

/* harmony import */ var _locatedError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locatedError */ "../../graphql/error/locatedError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locatedError", function() { return _locatedError__WEBPACK_IMPORTED_MODULE_2__["locatedError"]; });

/* harmony import */ var _formatError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatError */ "../../graphql/error/formatError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatError", function() { return _formatError__WEBPACK_IMPORTED_MODULE_3__["formatError"]; });







/***/ }),

/***/ "../../graphql/error/locatedError.mjs":
/*!***********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/error/locatedError.mjs ***!
  \***********************************************************************/
/*! exports provided: locatedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locatedError", function() { return locatedError; });
/* harmony import */ var _GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError */ "../../graphql/error/GraphQLError.mjs");

/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */

function locatedError(originalError, nodes, path) {
  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  if (originalError && Array.isArray(originalError.path)) {
    return originalError;
  }

  return new _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
}


/***/ }),

/***/ "../../graphql/error/syntaxError.mjs":
/*!**********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/error/syntaxError.mjs ***!
  \**********************************************************************/
/*! exports provided: syntaxError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return syntaxError; });
/* harmony import */ var _GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError */ "../../graphql/error/GraphQLError.mjs");

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Syntax Error: ".concat(description), undefined, source, [position]);
}


/***/ }),

/***/ "../../graphql/execution/execute.mjs":
/*!**********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/execution/execute.mjs ***!
  \**********************************************************************/
/*! exports provided: execute, assertValidExecutionArguments, buildExecutionContext, collectFields, buildResolveInfo, resolveFieldValueOrError, defaultTypeResolver, defaultFieldResolver, getFieldDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidExecutionArguments", function() { return assertValidExecutionArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildExecutionContext", function() { return buildExecutionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectFields", function() { return collectFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildResolveInfo", function() { return buildResolveInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveFieldValueOrError", function() { return resolveFieldValueOrError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTypeResolver", function() { return defaultTypeResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFieldResolver", function() { return defaultFieldResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldDef", function() { return getFieldDef; });
/* harmony import */ var iterall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iterall */ "../../iterall/index.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_memoize3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/memoize3 */ "../../graphql/jsutils/memoize3.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant */ "../../graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/devAssert */ "../../graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/isInvalid */ "../../graphql/jsutils/isInvalid.mjs");
/* harmony import */ var _jsutils_isNullish__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/isNullish */ "../../graphql/jsutils/isNullish.mjs");
/* harmony import */ var _jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/isPromise */ "../../graphql/jsutils/isPromise.mjs");
/* harmony import */ var _jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/isObjectLike */ "../../graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_promiseReduce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../jsutils/promiseReduce */ "../../graphql/jsutils/promiseReduce.mjs");
/* harmony import */ var _jsutils_promiseForObject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jsutils/promiseForObject */ "../../graphql/jsutils/promiseForObject.mjs");
/* harmony import */ var _jsutils_Path__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../jsutils/Path */ "../../graphql/jsutils/Path.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _error_locatedError__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../error/locatedError */ "../../graphql/error/locatedError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _type_validate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../type/validate */ "../../graphql/type/validate.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../type/introspection */ "../../graphql/type/introspection.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../type/directives */ "../../graphql/type/directives.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utilities/typeFromAST */ "../../graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_getOperationRootType__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utilities/getOperationRootType */ "../../graphql/utilities/getOperationRootType.mjs");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./values */ "../../graphql/execution/values.mjs");






















/**
 * Terminology
 *
 * "Definitions" are the generic name for top-level statements in the document.
 * Examples of this include:
 * 1) Operations (such as a query)
 * 2) Fragments
 *
 * "Operations" are a generic name for requests in the document.
 * Examples of this include:
 * 1) query,
 * 2) mutation
 *
 * "Selections" are the definitions that can appear legally and at
 * single level of the query. These include:
 * 1) field references e.g "a"
 * 2) fragment "spreads" e.g. "...c"
 * 3) inline fragment "spreads" e.g. "...on Type { a }"
 */

/**
 * Data that must be available at all points during query execution.
 *
 * Namely, schema of the type system that is currently executing,
 * and the fragments defined in the query document
 */

function execute(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? executeImpl(argsOrSchema) : executeImpl({
    schema: argsOrSchema,
    document: document,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    typeResolver: typeResolver
  });
}

function executeImpl(args) {
  var schema = args.schema,
      document = args.document,
      rootValue = args.rootValue,
      contextValue = args.contextValue,
      variableValues = args.variableValues,
      operationName = args.operationName,
      fieldResolver = args.fieldResolver,
      typeResolver = args.typeResolver; // If arguments are missing or incorrect, throw an error.

  assertValidExecutionArguments(schema, document, variableValues); // If a valid execution context cannot be created due to incorrect arguments,
  // a "Response" with only errors is returned.

  var exeContext = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver); // Return early errors if execution context failed.

  if (Array.isArray(exeContext)) {
    return {
      errors: exeContext
    };
  } // Return a Promise that will eventually resolve to the data described by
  // The "Response" section of the GraphQL specification.
  //
  // If errors are encountered while executing a GraphQL field, only that
  // field and its descendants will be omitted, and sibling fields will still
  // be executed. An execution which encounters errors will still result in a
  // resolved Promise.


  var data = executeOperation(exeContext, exeContext.operation, rootValue);
  return buildResponse(exeContext, data);
}
/**
 * Given a completed execution context and data, build the { errors, data }
 * response defined by the "Response" section of the GraphQL specification.
 */


function buildResponse(exeContext, data) {
  if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(data)) {
    return data.then(function (resolved) {
      return buildResponse(exeContext, resolved);
    });
  }

  return exeContext.errors.length === 0 ? {
    data: data
  } : {
    errors: exeContext.errors,
    data: data
  };
}
/**
 * Essential assertions before executing to provide developer feedback for
 * improper use of the GraphQL library.
 */


function assertValidExecutionArguments(schema, document, rawVariableValues) {
  document || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_4__["default"])(0, 'Must provide document'); // If the schema used for execution is invalid, throw an error.

  Object(_type_validate__WEBPACK_IMPORTED_MODULE_15__["assertValidSchema"])(schema); // Variables, if provided, must be an object.

  rawVariableValues == null || Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_8__["default"])(rawVariableValues) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_4__["default"])(0, 'Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.');
}
/**
 * Constructs a ExecutionContext object from the arguments passed to
 * execute, which we will pass throughout the other execution methods.
 *
 * Throws a GraphQLError if a valid execution context cannot be created.
 */

function buildExecutionContext(schema, document, rootValue, contextValue, rawVariableValues, operationName, fieldResolver, typeResolver) {
  var operation;
  var hasMultipleAssumedOperations = false;
  var fragments = Object.create(null);

  for (var _i2 = 0, _document$definitions2 = document.definitions; _i2 < _document$definitions2.length; _i2++) {
    var definition = _document$definitions2[_i2];

    switch (definition.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_14__["Kind"].OPERATION_DEFINITION:
        if (!operationName && operation) {
          hasMultipleAssumedOperations = true;
        } else if (!operationName || definition.name && definition.name.value === operationName) {
          operation = definition;
        }

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_14__["Kind"].FRAGMENT_DEFINITION:
        fragments[definition.name.value] = definition;
        break;
    }
  }

  if (!operation) {
    if (operationName) {
      return [new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_12__["GraphQLError"]("Unknown operation named \"".concat(operationName, "\"."))];
    }

    return [new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_12__["GraphQLError"]('Must provide an operation.')];
  }

  if (hasMultipleAssumedOperations) {
    return [new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_12__["GraphQLError"]('Must provide operation name if query contains multiple operations.')];
  }

  var coercedVariableValues = Object(_values__WEBPACK_IMPORTED_MODULE_21__["getVariableValues"])(schema, operation.variableDefinitions || [], rawVariableValues || {}, {
    maxErrors: 50
  });

  if (coercedVariableValues.errors) {
    return coercedVariableValues.errors;
  }

  return {
    schema: schema,
    fragments: fragments,
    rootValue: rootValue,
    contextValue: contextValue,
    operation: operation,
    variableValues: coercedVariableValues.coerced,
    fieldResolver: fieldResolver || defaultFieldResolver,
    typeResolver: typeResolver || defaultTypeResolver,
    errors: []
  };
}
/**
 * Implements the "Evaluating operations" section of the spec.
 */

function executeOperation(exeContext, operation, rootValue) {
  var type = Object(_utilities_getOperationRootType__WEBPACK_IMPORTED_MODULE_20__["getOperationRootType"])(exeContext.schema, operation);
  var fields = collectFields(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));
  var path = undefined; // Errors from sub-fields of a NonNull type may propagate to the top level,
  // at which point we still log the error and null the parent field, which
  // in this case is the entire response.
  //
  // Similar to completeValueCatchingError.

  try {
    var result = operation.operation === 'mutation' ? executeFieldsSerially(exeContext, type, rootValue, path, fields) : executeFields(exeContext, type, rootValue, path, fields);

    if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(result)) {
      return result.then(undefined, function (error) {
        exeContext.errors.push(error);
        return Promise.resolve(null);
      });
    }

    return result;
  } catch (error) {
    exeContext.errors.push(error);
    return null;
  }
}
/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "write" mode.
 */


function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
  return Object(_jsutils_promiseReduce__WEBPACK_IMPORTED_MODULE_9__["default"])(Object.keys(fields), function (results, responseName) {
    var fieldNodes = fields[responseName];
    var fieldPath = Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_11__["addPath"])(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);

    if (result === undefined) {
      return results;
    }

    if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(result)) {
      return result.then(function (resolvedResult) {
        results[responseName] = resolvedResult;
        return results;
      });
    }

    results[responseName] = result;
    return results;
  }, Object.create(null));
}
/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "read" mode.
 */


function executeFields(exeContext, parentType, sourceValue, path, fields) {
  var results = Object.create(null);
  var containsPromise = false;

  for (var _i4 = 0, _Object$keys2 = Object.keys(fields); _i4 < _Object$keys2.length; _i4++) {
    var responseName = _Object$keys2[_i4];
    var fieldNodes = fields[responseName];
    var fieldPath = Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_11__["addPath"])(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);

    if (result !== undefined) {
      results[responseName] = result;

      if (!containsPromise && Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(result)) {
        containsPromise = true;
      }
    }
  } // If there are no promises, we can just return the object


  if (!containsPromise) {
    return results;
  } // Otherwise, results is a map from field name to the result of resolving that
  // field, which is possibly a promise. Return a promise that will return this
  // same map, but with any promises replaced with the values they resolved to.


  return Object(_jsutils_promiseForObject__WEBPACK_IMPORTED_MODULE_10__["default"])(results);
}
/**
 * Given a selectionSet, adds all of the fields in that selection to
 * the passed in map of fields, and returns it at the end.
 *
 * CollectFields requires the "runtime type" of an object. For a field which
 * returns an Interface or Union type, the "runtime type" will be the actual
 * Object type returned by that field.
 */


function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
  for (var _i6 = 0, _selectionSet$selecti2 = selectionSet.selections; _i6 < _selectionSet$selecti2.length; _i6++) {
    var selection = _selectionSet$selecti2[_i6];

    switch (selection.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_14__["Kind"].FIELD:
        {
          if (!shouldIncludeNode(exeContext, selection)) {
            continue;
          }

          var name = getFieldEntryKey(selection);

          if (!fields[name]) {
            fields[name] = [];
          }

          fields[name].push(selection);
          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_14__["Kind"].INLINE_FRAGMENT:
        {
          if (!shouldIncludeNode(exeContext, selection) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
            continue;
          }

          collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_14__["Kind"].FRAGMENT_SPREAD:
        {
          var fragName = selection.name.value;

          if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection)) {
            continue;
          }

          visitedFragmentNames[fragName] = true;
          var fragment = exeContext.fragments[fragName];

          if (!fragment || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
            continue;
          }

          collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
          break;
        }
    }
  }

  return fields;
}
/**
 * Determines if a field should be included based on the @include and @skip
 * directives, where @skip has higher precedence than @include.
 */

function shouldIncludeNode(exeContext, node) {
  var skip = Object(_values__WEBPACK_IMPORTED_MODULE_21__["getDirectiveValues"])(_type_directives__WEBPACK_IMPORTED_MODULE_17__["GraphQLSkipDirective"], node, exeContext.variableValues);

  if (skip && skip.if === true) {
    return false;
  }

  var include = Object(_values__WEBPACK_IMPORTED_MODULE_21__["getDirectiveValues"])(_type_directives__WEBPACK_IMPORTED_MODULE_17__["GraphQLIncludeDirective"], node, exeContext.variableValues);

  if (include && include.if === false) {
    return false;
  }

  return true;
}
/**
 * Determines if a fragment is applicable to the given type.
 */


function doesFragmentConditionMatch(exeContext, fragment, type) {
  var typeConditionNode = fragment.typeCondition;

  if (!typeConditionNode) {
    return true;
  }

  var conditionalType = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_19__["typeFromAST"])(exeContext.schema, typeConditionNode);

  if (conditionalType === type) {
    return true;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_18__["isAbstractType"])(conditionalType)) {
    return exeContext.schema.isPossibleType(conditionalType, type);
  }

  return false;
}
/**
 * Implements the logic to compute the key of a given field's entry
 */


function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}
/**
 * Resolves the field on the given source object. In particular, this
 * figures out the value that the field returns by calling its resolve function,
 * then calls completeValue to complete promises, serialize scalars, or execute
 * the sub-selection-set for objects.
 */


function resolveField(exeContext, parentType, source, fieldNodes, path) {
  var fieldNode = fieldNodes[0];
  var fieldName = fieldNode.name.value;
  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);

  if (!fieldDef) {
    return;
  }

  var resolveFn = fieldDef.resolve || exeContext.fieldResolver;
  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path); // Get the resolve function, regardless of if its result is normal
  // or abrupt (error).

  var result = resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info);
  return completeValueCatchingError(exeContext, fieldDef.type, fieldNodes, info, path, result);
}

function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
  // The resolve function's optional fourth argument is a collection of
  // information about the current execution state.
  return {
    fieldName: fieldDef.name,
    fieldNodes: fieldNodes,
    returnType: fieldDef.type,
    parentType: parentType,
    path: path,
    schema: exeContext.schema,
    fragments: exeContext.fragments,
    rootValue: exeContext.rootValue,
    operation: exeContext.operation,
    variableValues: exeContext.variableValues
  };
} // Isolates the "ReturnOrAbrupt" behavior to not de-opt the `resolveField`
// function. Returns the result of resolveFn or the abrupt-return Error object.

function resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info) {
  try {
    // Build a JS object of arguments from the field.arguments AST, using the
    // variables scope to fulfill any variable references.
    // TODO: find a way to memoize, in case this field is within a List type.
    var args = Object(_values__WEBPACK_IMPORTED_MODULE_21__["getArgumentValues"])(fieldDef, fieldNodes[0], exeContext.variableValues); // The resolve function's optional third argument is a context value that
    // is provided to every resolve function within an execution. It is commonly
    // used to represent an authenticated user, or request-specific caches.

    var _contextValue = exeContext.contextValue;
    var result = resolveFn(source, args, _contextValue, info);
    return Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(result) ? result.then(undefined, asErrorInstance) : result;
  } catch (error) {
    return asErrorInstance(error);
  }
} // Sometimes a non-error is thrown, wrap it as an Error instance to ensure a
// consistent Error interface.

function asErrorInstance(error) {
  if (error instanceof Error) {
    return error;
  }

  return new Error('Unexpected error value: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(error));
} // This is a small wrapper around completeValue which detects and logs errors
// in the execution context.


function completeValueCatchingError(exeContext, returnType, fieldNodes, info, path, result) {
  try {
    var completed;

    if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(result)) {
      completed = result.then(function (resolved) {
        return completeValue(exeContext, returnType, fieldNodes, info, path, resolved);
      });
    } else {
      completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
    }

    if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(completed)) {
      // Note: we don't rely on a `catch` method, but we do expect "thenable"
      // to take a second callback for the error case.
      return completed.then(undefined, function (error) {
        return handleFieldError(error, fieldNodes, path, returnType, exeContext);
      });
    }

    return completed;
  } catch (error) {
    return handleFieldError(error, fieldNodes, path, returnType, exeContext);
  }
}

function handleFieldError(rawError, fieldNodes, path, returnType, exeContext) {
  var error = Object(_error_locatedError__WEBPACK_IMPORTED_MODULE_13__["locatedError"])(asErrorInstance(rawError), fieldNodes, Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_11__["pathToArray"])(path)); // If the field type is non-nullable, then it is resolved without any
  // protection from errors, however it still properly locates the error.

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_18__["isNonNullType"])(returnType)) {
    throw error;
  } // Otherwise, error protection is applied, logging the error and resolving
  // a null value for this field if one is encountered.


  exeContext.errors.push(error);
  return null;
}
/**
 * Implements the instructions for completeValue as defined in the
 * "Field entries" section of the spec.
 *
 * If the field type is Non-Null, then this recursively completes the value
 * for the inner type. It throws a field error if that completion returns null,
 * as per the "Nullability" section of the spec.
 *
 * If the field type is a List, then this recursively completes the value
 * for the inner type on each item in the list.
 *
 * If the field type is a Scalar or Enum, ensures the completed value is a legal
 * value of the type by calling the `serialize` method of GraphQL type
 * definition.
 *
 * If the field is an abstract type, determine the runtime type of the value
 * and then complete based on that type
 *
 * Otherwise, the field type expects a sub-selection set, and will complete the
 * value by evaluating all sub-selections.
 */


function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If result is an Error, throw a located error.
  if (result instanceof Error) {
    throw result;
  } // If field type is NonNull, complete for inner type, and throw field error
  // if result is null.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_18__["isNonNullType"])(returnType)) {
    var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);

    if (completed === null) {
      throw new Error("Cannot return null for non-nullable field ".concat(info.parentType.name, ".").concat(info.fieldName, "."));
    }

    return completed;
  } // If result value is null-ish (null, undefined, or NaN) then return null.


  if (Object(_jsutils_isNullish__WEBPACK_IMPORTED_MODULE_6__["default"])(result)) {
    return null;
  } // If field type is List, complete each item in the list with the inner type


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_18__["isListType"])(returnType)) {
    return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
  } // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
  // returning null if serialization is not possible.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_18__["isLeafType"])(returnType)) {
    return completeLeafValue(returnType, result);
  } // If field type is an abstract type, Interface or Union, determine the
  // runtime Object type and complete for that type.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_18__["isAbstractType"])(returnType)) {
    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
  } // If field type is Object, execute and complete all sub-selections.


  /* istanbul ignore else */
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_18__["isObjectType"])(returnType)) {
    return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
  } // Not reachable. All possible output types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Cannot complete value of unexpected output type: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(returnType));
}
/**
 * Complete a list value by completing each item in the list with the
 * inner type
 */


function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
  if (!Object(iterall__WEBPACK_IMPORTED_MODULE_0__["isCollection"])(result)) {
    throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_12__["GraphQLError"]("Expected Iterable, but did not find one for field ".concat(info.parentType.name, ".").concat(info.fieldName, "."));
  } // This is specified as a simple map, however we're optimizing the path
  // where the list contains no Promises by avoiding creating another Promise.


  var itemType = returnType.ofType;
  var containsPromise = false;
  var completedResults = [];
  Object(iterall__WEBPACK_IMPORTED_MODULE_0__["forEach"])(result, function (item, index) {
    // No need to modify the info object containing the path,
    // since from here on it is not ever accessed by resolver functions.
    var fieldPath = Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_11__["addPath"])(path, index);
    var completedItem = completeValueCatchingError(exeContext, itemType, fieldNodes, info, fieldPath, item);

    if (!containsPromise && Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(completedItem)) {
      containsPromise = true;
    }

    completedResults.push(completedItem);
  });
  return containsPromise ? Promise.all(completedResults) : completedResults;
}
/**
 * Complete a Scalar or Enum by serializing to a valid value, returning
 * null if serialization is not possible.
 */


function completeLeafValue(returnType, result) {
  var serializedResult = returnType.serialize(result);

  if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_5__["default"])(serializedResult)) {
    throw new Error("Expected a value of type \"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(returnType), "\" but ") + "received: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(result)));
  }

  return serializedResult;
}
/**
 * Complete a value of an abstract type by determining the runtime object type
 * of that value, then complete the value for that type.
 */


function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
  var resolveTypeFn = returnType.resolveType || exeContext.typeResolver;
  var contextValue = exeContext.contextValue;
  var runtimeType = resolveTypeFn(result, contextValue, info, returnType);

  if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(runtimeType)) {
    return runtimeType.then(function (resolvedRuntimeType) {
      return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
    });
  }

  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
}

function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
  var runtimeType = typeof runtimeTypeOrName === 'string' ? exeContext.schema.getType(runtimeTypeOrName) : runtimeTypeOrName;

  if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_18__["isObjectType"])(runtimeType)) {
    throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_12__["GraphQLError"]("Abstract type ".concat(returnType.name, " must resolve to an Object type at runtime for field ").concat(info.parentType.name, ".").concat(info.fieldName, " with ") + "value ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(result), ", received \"").concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(runtimeType), "\". ") + "Either the ".concat(returnType.name, " type should provide a \"resolveType\" function or each possible type should provide an \"isTypeOf\" function."), fieldNodes);
  }

  if (!exeContext.schema.isPossibleType(returnType, runtimeType)) {
    throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_12__["GraphQLError"]("Runtime Object type \"".concat(runtimeType.name, "\" is not a possible type for \"").concat(returnType.name, "\"."), fieldNodes);
  }

  return runtimeType;
}
/**
 * Complete an Object value by executing all sub-selections.
 */


function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If there is an isTypeOf predicate function, call it with the
  // current result. If isTypeOf returns false, then raise an error rather
  // than continuing execution.
  if (returnType.isTypeOf) {
    var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);

    if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(isTypeOf)) {
      return isTypeOf.then(function (resolvedIsTypeOf) {
        if (!resolvedIsTypeOf) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }

        return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
      });
    }

    if (!isTypeOf) {
      throw invalidReturnTypeError(returnType, result, fieldNodes);
    }
  }

  return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
}

function invalidReturnTypeError(returnType, result, fieldNodes) {
  return new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_12__["GraphQLError"]("Expected value of type \"".concat(returnType.name, "\" but got: ").concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(result), "."), fieldNodes);
}

function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result) {
  // Collect sub-fields to execute to complete this value.
  var subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
  return executeFields(exeContext, returnType, result, path, subFieldNodes);
}
/**
 * A memoized collection of relevant subfields with regard to the return
 * type. Memoizing ensures the subfields are not repeatedly calculated, which
 * saves overhead when resolving lists of values.
 */


var collectSubfields = Object(_jsutils_memoize3__WEBPACK_IMPORTED_MODULE_2__["default"])(_collectSubfields);

function _collectSubfields(exeContext, returnType, fieldNodes) {
  var subFieldNodes = Object.create(null);
  var visitedFragmentNames = Object.create(null);

  for (var _i8 = 0; _i8 < fieldNodes.length; _i8++) {
    var node = fieldNodes[_i8];

    if (node.selectionSet) {
      subFieldNodes = collectFields(exeContext, returnType, node.selectionSet, subFieldNodes, visitedFragmentNames);
    }
  }

  return subFieldNodes;
}
/**
 * If a resolveType function is not given, then a default resolve behavior is
 * used which attempts two strategies:
 *
 * First, See if the provided value has a `__typename` field defined, if so, use
 * that value as name of the resolved type.
 *
 * Otherwise, test each possible type for the abstract type by calling
 * isTypeOf for the object being coerced, returning the first type that matches.
 */


var defaultTypeResolver = function defaultTypeResolver(value, contextValue, info, abstractType) {
  // First, look for `__typename`.
  if (Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_8__["default"])(value) && typeof value.__typename === 'string') {
    return value.__typename;
  } // Otherwise, test each possible type.


  var possibleTypes = info.schema.getPossibleTypes(abstractType);
  var promisedIsTypeOfResults = [];

  for (var i = 0; i < possibleTypes.length; i++) {
    var type = possibleTypes[i];

    if (type.isTypeOf) {
      var isTypeOfResult = type.isTypeOf(value, contextValue, info);

      if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(isTypeOfResult)) {
        promisedIsTypeOfResults[i] = isTypeOfResult;
      } else if (isTypeOfResult) {
        return type;
      }
    }
  }

  if (promisedIsTypeOfResults.length) {
    return Promise.all(promisedIsTypeOfResults).then(function (isTypeOfResults) {
      for (var _i9 = 0; _i9 < isTypeOfResults.length; _i9++) {
        if (isTypeOfResults[_i9]) {
          return possibleTypes[_i9];
        }
      }
    });
  }
};
/**
 * If a resolve function is not given, then a default resolve behavior is used
 * which takes the property of the source object of the same name as the field
 * and returns it as the result, or if it's a function, returns the result
 * of calling that function while passing along args and context value.
 */

var defaultFieldResolver = function defaultFieldResolver(source, args, contextValue, info) {
  // ensure source is a value for which property access is acceptable.
  if (Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_8__["default"])(source) || typeof source === 'function') {
    var property = source[info.fieldName];

    if (typeof property === 'function') {
      return source[info.fieldName](args, contextValue, info);
    }

    return property;
  }
};
/**
 * This method looks up the field on the given type definition.
 * It has special casing for the two introspection fields, __schema
 * and __typename. __typename is special because it can always be
 * queried as a field, even in situations where no other fields
 * are allowed, like on a Union. __schema could get automatically
 * added to the query type, but that would require mutating type
 * definitions, which would cause issues.
 */

function getFieldDef(schema, parentType, fieldName) {
  if (fieldName === _type_introspection__WEBPACK_IMPORTED_MODULE_16__["SchemaMetaFieldDef"].name && schema.getQueryType() === parentType) {
    return _type_introspection__WEBPACK_IMPORTED_MODULE_16__["SchemaMetaFieldDef"];
  } else if (fieldName === _type_introspection__WEBPACK_IMPORTED_MODULE_16__["TypeMetaFieldDef"].name && schema.getQueryType() === parentType) {
    return _type_introspection__WEBPACK_IMPORTED_MODULE_16__["TypeMetaFieldDef"];
  } else if (fieldName === _type_introspection__WEBPACK_IMPORTED_MODULE_16__["TypeNameMetaFieldDef"].name) {
    return _type_introspection__WEBPACK_IMPORTED_MODULE_16__["TypeNameMetaFieldDef"];
  }

  return parentType.getFields()[fieldName];
}


/***/ }),

/***/ "../../graphql/execution/index.mjs":
/*!********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/execution/index.mjs ***!
  \********************************************************************/
/*! exports provided: responsePathAsArray, execute, defaultFieldResolver, defaultTypeResolver, getDirectiveValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsutils_Path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/Path */ "../../graphql/jsutils/Path.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responsePathAsArray", function() { return _jsutils_Path__WEBPACK_IMPORTED_MODULE_0__["pathToArray"]; });

/* harmony import */ var _execute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./execute */ "../../graphql/execution/execute.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _execute__WEBPACK_IMPORTED_MODULE_1__["execute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultFieldResolver", function() { return _execute__WEBPACK_IMPORTED_MODULE_1__["defaultFieldResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTypeResolver", function() { return _execute__WEBPACK_IMPORTED_MODULE_1__["defaultTypeResolver"]; });

/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./values */ "../../graphql/execution/values.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDirectiveValues", function() { return _values__WEBPACK_IMPORTED_MODULE_2__["getDirectiveValues"]; });






/***/ }),

/***/ "../../graphql/execution/values.mjs":
/*!*********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/execution/values.mjs ***!
  \*********************************************************************/
/*! exports provided: getVariableValues, getArgumentValues, getDirectiveValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVariableValues", function() { return getVariableValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArgumentValues", function() { return getArgumentValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveValues", function() { return getDirectiveValues; });
/* harmony import */ var _polyfills_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/find */ "../../graphql/polyfills/find.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/keyMap */ "../../graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_printPathArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/printPathArray */ "../../graphql/jsutils/printPathArray.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language/printer */ "../../graphql/language/printer.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/typeFromAST */ "../../graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_valueFromAST__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/valueFromAST */ "../../graphql/utilities/valueFromAST.mjs");
/* harmony import */ var _utilities_coerceInputValue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/coerceInputValue */ "../../graphql/utilities/coerceInputValue.mjs");












/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
function getVariableValues(schema, varDefNodes, inputs, options) {
  var maxErrors = options && options.maxErrors;
  var errors = [];

  try {
    var coerced = coerceVariableValues(schema, varDefNodes, inputs, function (error) {
      if (maxErrors != null && errors.length >= maxErrors) {
        throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]('Too many errors processing variables, error limit reached. Execution aborted.');
      }

      errors.push(error);
    });

    if (errors.length === 0) {
      return {
        coerced: coerced
      };
    }
  } catch (error) {
    errors.push(error);
  }

  return {
    errors: errors
  };
}

function coerceVariableValues(schema, varDefNodes, inputs, onError) {
  var coercedValues = {};

  var _loop = function _loop(_i2) {
    var varDefNode = varDefNodes[_i2];
    var varName = varDefNode.variable.name.value;
    var varType = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_8__["typeFromAST"])(schema, varDefNode.type);

    if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isInputType"])(varType)) {
      // Must use input types for variables. This should be caught during
      // validation, however is checked again here for safety.
      var varTypeStr = Object(_language_printer__WEBPACK_IMPORTED_MODULE_6__["print"])(varDefNode.type);
      onError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Variable \"$".concat(varName, "\" expected value of type \"").concat(varTypeStr, "\" which cannot be used as an input type."), varDefNode.type));
      return "continue";
    }

    if (!hasOwnProperty(inputs, varName)) {
      if (varDefNode.defaultValue) {
        coercedValues[varName] = Object(_utilities_valueFromAST__WEBPACK_IMPORTED_MODULE_9__["valueFromAST"])(varDefNode.defaultValue, varType);
      } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(varType)) {
        var _varTypeStr = Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(varType);

        onError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Variable \"$".concat(varName, "\" of required type \"").concat(_varTypeStr, "\" was not provided."), varDefNode));
      }

      return "continue";
    }

    var value = inputs[varName];

    if (value === null && Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(varType)) {
      var _varTypeStr2 = Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(varType);

      onError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Variable \"$".concat(varName, "\" of non-null type \"").concat(_varTypeStr2, "\" must not be null."), varDefNode));
      return "continue";
    }

    coercedValues[varName] = Object(_utilities_coerceInputValue__WEBPACK_IMPORTED_MODULE_10__["coerceInputValue"])(value, varType, function (path, invalidValue, error) {
      var prefix = "Variable \"$".concat(varName, "\" got invalid value ") + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(invalidValue);

      if (path.length > 0) {
        prefix += " at \"".concat(varName).concat(Object(_jsutils_printPathArray__WEBPACK_IMPORTED_MODULE_3__["default"])(path), "\"");
      }

      onError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"](prefix + '; ' + error.message, varDefNode, undefined, undefined, undefined, error.originalError));
    });
  };

  for (var _i2 = 0; _i2 < varDefNodes.length; _i2++) {
    var _ret = _loop(_i2);

    if (_ret === "continue") continue;
  }

  return coercedValues;
}
/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */


function getArgumentValues(def, node, variableValues) {
  var coercedValues = {};
  var argNodeMap = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__["default"])(node.arguments || [], function (arg) {
    return arg.name.value;
  });

  for (var _i4 = 0, _def$args2 = def.args; _i4 < _def$args2.length; _i4++) {
    var argDef = _def$args2[_i4];
    var name = argDef.name;
    var argType = argDef.type;
    var argumentNode = argNodeMap[name];

    if (!argumentNode) {
      if (argDef.defaultValue !== undefined) {
        coercedValues[name] = argDef.defaultValue;
      } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(argType)) {
        throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Argument \"".concat(name, "\" of required type \"").concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(argType), "\" ") + 'was not provided.', node);
      }

      continue;
    }

    var valueNode = argumentNode.value;
    var isNull = valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].NULL;

    if (valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].VARIABLE) {
      var variableName = valueNode.name.value;

      if (variableValues == null || !hasOwnProperty(variableValues, variableName)) {
        if (argDef.defaultValue !== undefined) {
          coercedValues[name] = argDef.defaultValue;
        } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(argType)) {
          throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Argument \"".concat(name, "\" of required type \"").concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(argType), "\" ") + "was provided the variable \"$".concat(variableName, "\" which was not provided a runtime value."), valueNode);
        }

        continue;
      }

      isNull = variableValues[variableName] == null;
    }

    if (isNull && Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(argType)) {
      throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Argument \"".concat(name, "\" of non-null type \"").concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(argType), "\" ") + 'must not be null.', valueNode);
    }

    var coercedValue = Object(_utilities_valueFromAST__WEBPACK_IMPORTED_MODULE_9__["valueFromAST"])(valueNode, argType, variableValues);

    if (coercedValue === undefined) {
      // Note: ValuesOfCorrectType validation should catch this before
      // execution. This is a runtime check to ensure execution does not
      // continue with an invalid argument value.
      throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Argument \"".concat(name, "\" has invalid value ").concat(Object(_language_printer__WEBPACK_IMPORTED_MODULE_6__["print"])(valueNode), "."), valueNode);
    }

    coercedValues[name] = coercedValue;
  }

  return coercedValues;
}
/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */

function getDirectiveValues(directiveDef, node, variableValues) {
  var directiveNode = node.directives && Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(node.directives, function (directive) {
    return directive.name.value === directiveDef.name;
  });

  if (directiveNode) {
    return getArgumentValues(directiveDef, directiveNode, variableValues);
  }
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}


/***/ }),

/***/ "../../graphql/graphql.mjs":
/*!************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/graphql.mjs ***!
  \************************************************************/
/*! exports provided: graphql, graphqlSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphqlSync", function() { return graphqlSync; });
/* harmony import */ var _jsutils_isPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsutils/isPromise */ "../../graphql/jsutils/isPromise.mjs");
/* harmony import */ var _language_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language/parser */ "../../graphql/language/parser.mjs");
/* harmony import */ var _validation_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation/validate */ "../../graphql/validation/validate.mjs");
/* harmony import */ var _type_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type/validate */ "../../graphql/type/validate.mjs");
/* harmony import */ var _execution_execute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./execution/execute */ "../../graphql/execution/execute.mjs");





/**
 * This is the primary entry point function for fulfilling GraphQL operations
 * by parsing, validating, and executing a GraphQL document along side a
 * GraphQL schema.
 *
 * More sophisticated GraphQL servers, such as those which persist queries,
 * may wish to separate the validation and execution phases to a static time
 * tooling step, and a server runtime step.
 *
 * Accepts either an object with named arguments, or individual arguments:
 *
 * schema:
 *    The GraphQL type system to use when validating and executing a query.
 * source:
 *    A GraphQL language formatted string representing the requested operation.
 * rootValue:
 *    The value provided as the first argument to resolver functions on the top
 *    level type (e.g. the query object type).
 * contextValue:
 *    The context value is provided as an argument to resolver functions after
 *    field arguments. It is used to pass shared information useful at any point
 *    during executing this query, for example the currently logged in user and
 *    connections to databases or other services.
 * variableValues:
 *    A mapping of variable name to runtime value to use for all variables
 *    defined in the requestString.
 * operationName:
 *    The name of the operation to use if requestString contains multiple
 *    possible operations. Can be omitted if requestString contains only
 *    one operation.
 * fieldResolver:
 *    A resolver function to use when one is not provided by the schema.
 *    If not provided, the default field resolver is used (which looks for a
 *    value or method on the source value with the field's name).
 * typeResolver:
 *    A type resolver function to use when none is provided by the schema.
 *    If not provided, the default type resolver is used (which looks for a
 *    `__typename` field or alternatively calls the `isTypeOf` method).
 */

function graphql(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  var _arguments = arguments;

  /* eslint-enable no-redeclare */
  // Always return a Promise for a consistent API.
  return new Promise(function (resolve) {
    return resolve( // Extract arguments from object args if provided.
    _arguments.length === 1 ? graphqlImpl(argsOrSchema) : graphqlImpl({
      schema: argsOrSchema,
      source: source,
      rootValue: rootValue,
      contextValue: contextValue,
      variableValues: variableValues,
      operationName: operationName,
      fieldResolver: fieldResolver,
      typeResolver: typeResolver
    }));
  });
}
/**
 * The graphqlSync function also fulfills GraphQL operations by parsing,
 * validating, and executing a GraphQL document along side a GraphQL schema.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */

function graphqlSync(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  var result = arguments.length === 1 ? graphqlImpl(argsOrSchema) : graphqlImpl({
    schema: argsOrSchema,
    source: source,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    typeResolver: typeResolver
  }); // Assert that the execution was synchronous.

  if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_0__["default"])(result)) {
    throw new Error('GraphQL execution failed to complete synchronously.');
  }

  return result;
}

function graphqlImpl(args) {
  var schema = args.schema,
      source = args.source,
      rootValue = args.rootValue,
      contextValue = args.contextValue,
      variableValues = args.variableValues,
      operationName = args.operationName,
      fieldResolver = args.fieldResolver,
      typeResolver = args.typeResolver; // Validate Schema

  var schemaValidationErrors = Object(_type_validate__WEBPACK_IMPORTED_MODULE_3__["validateSchema"])(schema);

  if (schemaValidationErrors.length > 0) {
    return {
      errors: schemaValidationErrors
    };
  } // Parse


  var document;

  try {
    document = Object(_language_parser__WEBPACK_IMPORTED_MODULE_1__["parse"])(source);
  } catch (syntaxError) {
    return {
      errors: [syntaxError]
    };
  } // Validate


  var validationErrors = Object(_validation_validate__WEBPACK_IMPORTED_MODULE_2__["validate"])(schema, document);

  if (validationErrors.length > 0) {
    return {
      errors: validationErrors
    };
  } // Execute


  return Object(_execution_execute__WEBPACK_IMPORTED_MODULE_4__["execute"])({
    schema: schema,
    document: document,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    typeResolver: typeResolver
  });
}


/***/ }),

/***/ "../../graphql/index.mjs":
/*!**********************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/index.mjs ***!
  \**********************************************************/
/*! exports provided: version, versionInfo, graphql, graphqlSync, GraphQLSchema, GraphQLDirective, GraphQLScalarType, GraphQLObjectType, GraphQLInterfaceType, GraphQLUnionType, GraphQLEnumType, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, specifiedScalarTypes, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLBoolean, GraphQLID, specifiedDirectives, GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective, TypeKind, DEFAULT_DEPRECATION_REASON, introspectionTypes, __Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind, SchemaMetaFieldDef, TypeMetaFieldDef, TypeNameMetaFieldDef, isSchema, isDirective, isType, isScalarType, isObjectType, isInterfaceType, isUnionType, isEnumType, isInputObjectType, isListType, isNonNullType, isInputType, isOutputType, isLeafType, isCompositeType, isAbstractType, isWrappingType, isNullableType, isNamedType, isRequiredArgument, isRequiredInputField, isSpecifiedScalarType, isIntrospectionType, isSpecifiedDirective, assertSchema, assertDirective, assertType, assertScalarType, assertObjectType, assertInterfaceType, assertUnionType, assertEnumType, assertInputObjectType, assertListType, assertNonNullType, assertInputType, assertOutputType, assertLeafType, assertCompositeType, assertAbstractType, assertWrappingType, assertNullableType, assertNamedType, getNullableType, getNamedType, validateSchema, assertValidSchema, Source, getLocation, printLocation, printSourceLocation, createLexer, TokenKind, parse, parseValue, parseType, print, visit, visitInParallel, visitWithTypeInfo, getVisitFn, BREAK, Kind, DirectiveLocation, isDefinitionNode, isExecutableDefinitionNode, isSelectionNode, isValueNode, isTypeNode, isTypeSystemDefinitionNode, isTypeDefinitionNode, isTypeSystemExtensionNode, isTypeExtensionNode, execute, defaultFieldResolver, defaultTypeResolver, responsePathAsArray, getDirectiveValues, subscribe, createSourceEventStream, validate, ValidationContext, specifiedRules, ExecutableDefinitionsRule, FieldsOnCorrectTypeRule, FragmentsOnCompositeTypesRule, KnownArgumentNamesRule, KnownDirectivesRule, KnownFragmentNamesRule, KnownTypeNamesRule, LoneAnonymousOperationRule, NoFragmentCyclesRule, NoUndefinedVariablesRule, NoUnusedFragmentsRule, NoUnusedVariablesRule, OverlappingFieldsCanBeMergedRule, PossibleFragmentSpreadsRule, ProvidedRequiredArgumentsRule, ScalarLeafsRule, SingleFieldSubscriptionsRule, UniqueArgumentNamesRule, UniqueDirectivesPerLocationRule, UniqueFragmentNamesRule, UniqueInputFieldNamesRule, UniqueOperationNamesRule, UniqueVariableNamesRule, ValuesOfCorrectTypeRule, VariablesAreInputTypesRule, VariablesInAllowedPositionRule, LoneSchemaDefinitionRule, UniqueOperationTypesRule, UniqueTypeNamesRule, UniqueEnumValueNamesRule, UniqueFieldDefinitionNamesRule, UniqueDirectiveNamesRule, PossibleTypeExtensionsRule, GraphQLError, syntaxError, locatedError, printError, formatError, getIntrospectionQuery, introspectionQuery, getOperationAST, getOperationRootType, introspectionFromSchema, buildClientSchema, buildASTSchema, buildSchema, getDescription, extendSchema, lexicographicSortSchema, printSchema, printType, printIntrospectionSchema, typeFromAST, valueFromAST, valueFromASTUntyped, astFromValue, TypeInfo, coerceInputValue, coerceValue, isValidJSValue, isValidLiteralValue, concatAST, separateOperations, stripIgnoredCharacters, isEqualType, isTypeSubTypeOf, doTypesOverlap, assertValidName, isValidNameError, BreakingChangeType, DangerousChangeType, findBreakingChanges, findDangerousChanges, findDeprecatedUsages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "../../graphql/version.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version__WEBPACK_IMPORTED_MODULE_0__["version"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "versionInfo", function() { return _version__WEBPACK_IMPORTED_MODULE_0__["versionInfo"]; });

/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql */ "../../graphql/graphql.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return _graphql__WEBPACK_IMPORTED_MODULE_1__["graphql"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphqlSync", function() { return _graphql__WEBPACK_IMPORTED_MODULE_1__["graphqlSync"]; });

/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "../../graphql/type/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLSchema", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLDirective", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLScalarType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLObjectType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInterfaceType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLUnionType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLEnumType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInputObjectType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLList", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLNonNull", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLNonNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedScalarTypes", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["specifiedScalarTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInt", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLFloat", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLString", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLBoolean", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLID", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedDirectives", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["specifiedDirectives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLIncludeDirective", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLIncludeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLSkipDirective", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLSkipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLDeprecatedDirective", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["GraphQLDeprecatedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeKind", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["TypeKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DEPRECATION_REASON", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_DEPRECATION_REASON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionTypes", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["introspectionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Schema", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["__Schema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Directive", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["__Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__DirectiveLocation", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["__DirectiveLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Type", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["__Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Field", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["__Field"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__InputValue", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["__InputValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__EnumValue", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["__EnumValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__TypeKind", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["__TypeKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchemaMetaFieldDef", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["SchemaMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeMetaFieldDef", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["TypeMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeNameMetaFieldDef", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["TypeNameMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSchema", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isScalarType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInterfaceType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUnionType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnumType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputObjectType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isListType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isListType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNonNullType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isNonNullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isInputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOutputType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLeafType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isLeafType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCompositeType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAbstractType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isAbstractType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWrappingType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isWrappingType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullableType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNamedType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRequiredArgument", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isRequiredArgument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRequiredInputField", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isRequiredInputField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedScalarType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isSpecifiedScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIntrospectionType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isIntrospectionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedDirective", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["isSpecifiedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertSchema", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertDirective", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertScalarType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertObjectType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInterfaceType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertUnionType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertEnumType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInputObjectType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertListType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertListType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNonNullType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertNonNullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInputType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertInputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertOutputType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertLeafType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertLeafType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertCompositeType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertCompositeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertAbstractType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertAbstractType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertWrappingType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertWrappingType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNullableType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNamedType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNullableType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["getNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNamedType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["getNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateSchema", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["validateSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertValidSchema", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["assertValidSchema"]; });

/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language */ "../../graphql/language/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["Source"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printLocation", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["printLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printSourceLocation", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["printSourceLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLexer", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["createLexer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["TokenKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["parseValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["parseType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "print", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["print"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["visit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["visitInParallel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visitWithTypeInfo", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["visitWithTypeInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["getVisitFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["BREAK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["Kind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["DirectiveLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefinitionNode", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["isDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExecutableDefinitionNode", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["isExecutableDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSelectionNode", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["isSelectionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValueNode", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["isValueNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeNode", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["isTypeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemDefinitionNode", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["isTypeSystemDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeDefinitionNode", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["isTypeDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemExtensionNode", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["isTypeSystemExtensionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeExtensionNode", function() { return _language__WEBPACK_IMPORTED_MODULE_3__["isTypeExtensionNode"]; });

/* harmony import */ var _execution__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./execution */ "../../graphql/execution/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _execution__WEBPACK_IMPORTED_MODULE_4__["execute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultFieldResolver", function() { return _execution__WEBPACK_IMPORTED_MODULE_4__["defaultFieldResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTypeResolver", function() { return _execution__WEBPACK_IMPORTED_MODULE_4__["defaultTypeResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responsePathAsArray", function() { return _execution__WEBPACK_IMPORTED_MODULE_4__["responsePathAsArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDirectiveValues", function() { return _execution__WEBPACK_IMPORTED_MODULE_4__["getDirectiveValues"]; });

/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription */ "../../graphql/subscription/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return _subscription__WEBPACK_IMPORTED_MODULE_5__["subscribe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSourceEventStream", function() { return _subscription__WEBPACK_IMPORTED_MODULE_5__["createSourceEventStream"]; });

/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validation */ "../../graphql/validation/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["validate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationContext", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["ValidationContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedRules", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["specifiedRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutableDefinitionsRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["ExecutableDefinitionsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldsOnCorrectTypeRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["FieldsOnCorrectTypeRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FragmentsOnCompositeTypesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["FragmentsOnCompositeTypesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownArgumentNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["KnownArgumentNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownDirectivesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["KnownDirectivesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownFragmentNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["KnownFragmentNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownTypeNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["KnownTypeNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoneAnonymousOperationRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["LoneAnonymousOperationRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoFragmentCyclesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["NoFragmentCyclesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUndefinedVariablesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["NoUndefinedVariablesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUnusedFragmentsRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["NoUnusedFragmentsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUnusedVariablesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["NoUnusedVariablesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlappingFieldsCanBeMergedRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["OverlappingFieldsCanBeMergedRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PossibleFragmentSpreadsRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["PossibleFragmentSpreadsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProvidedRequiredArgumentsRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["ProvidedRequiredArgumentsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScalarLeafsRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["ScalarLeafsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleFieldSubscriptionsRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["SingleFieldSubscriptionsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueArgumentNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["UniqueArgumentNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectivesPerLocationRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["UniqueDirectivesPerLocationRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueFragmentNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["UniqueFragmentNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueInputFieldNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["UniqueInputFieldNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["UniqueOperationNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueVariableNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["UniqueVariableNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValuesOfCorrectTypeRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["ValuesOfCorrectTypeRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariablesAreInputTypesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["VariablesAreInputTypesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariablesInAllowedPositionRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["VariablesInAllowedPositionRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoneSchemaDefinitionRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["LoneSchemaDefinitionRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationTypesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["UniqueOperationTypesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueTypeNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["UniqueTypeNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueEnumValueNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["UniqueEnumValueNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueFieldDefinitionNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["UniqueFieldDefinitionNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectiveNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["UniqueDirectiveNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PossibleTypeExtensionsRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_6__["PossibleTypeExtensionsRule"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error */ "../../graphql/error/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return _error__WEBPACK_IMPORTED_MODULE_7__["GraphQLError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return _error__WEBPACK_IMPORTED_MODULE_7__["syntaxError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locatedError", function() { return _error__WEBPACK_IMPORTED_MODULE_7__["locatedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return _error__WEBPACK_IMPORTED_MODULE_7__["printError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatError", function() { return _error__WEBPACK_IMPORTED_MODULE_7__["formatError"]; });

/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities */ "../../graphql/utilities/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIntrospectionQuery", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["getIntrospectionQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionQuery", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["introspectionQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationAST", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["getOperationAST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationRootType", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["getOperationRootType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionFromSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["introspectionFromSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClientSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["buildClientSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildASTSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["buildASTSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["buildSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDescription", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["getDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["extendSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lexicographicSortSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["lexicographicSortSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["printSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printType", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["printType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printIntrospectionSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["printIntrospectionSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeFromAST", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["typeFromAST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueFromAST", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["valueFromAST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueFromASTUntyped", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["valueFromASTUntyped"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "astFromValue", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["astFromValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeInfo", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["TypeInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceInputValue", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["coerceInputValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceValue", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["coerceValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidJSValue", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["isValidJSValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidLiteralValue", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["isValidLiteralValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatAST", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["concatAST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "separateOperations", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["separateOperations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripIgnoredCharacters", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["stripIgnoredCharacters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqualType", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["isEqualType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSubTypeOf", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["isTypeSubTypeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doTypesOverlap", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["doTypesOverlap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertValidName", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["assertValidName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidNameError", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["isValidNameError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakingChangeType", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["BreakingChangeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DangerousChangeType", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["DangerousChangeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findBreakingChanges", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["findBreakingChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDangerousChanges", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["findDangerousChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDeprecatedUsages", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["findDeprecatedUsages"]; });

/**
 * GraphQL.js provides a reference implementation for the GraphQL specification
 * but is also a useful utility for operating on GraphQL files and building
 * sophisticated tools.
 *
 * This primary module exports a general purpose function for fulfilling all
 * steps of the GraphQL specification in a single operation, but also includes
 * utilities for every part of the GraphQL specification:
 *
 *   - Parsing the GraphQL language.
 *   - Building a GraphQL type schema.
 *   - Validating a GraphQL request against a type schema.
 *   - Executing a GraphQL request against a type schema.
 *
 * This also includes utility functions for operating on GraphQL types and
 * GraphQL documents to facilitate building tools.
 *
 * You may also import from each sub-directory directly. For example, the
 * following two import statements are equivalent:
 *
 *     import { parse } from 'graphql';
 *     import { parse } from 'graphql/language';
 */
// The GraphQL.js version info.
 // The primary entry point into fulfilling a GraphQL request.

 // Create and operate on GraphQL type definitions and schema.


// Parse and operate on GraphQL language source files.

// Execute GraphQL queries.


// Validate GraphQL documents.

// Create, format, and print GraphQL errors.

// Utilities for operating on GraphQL type schema and parsed sources.



/***/ }),

/***/ "../../graphql/jsutils/Path.mjs":
/*!*****************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/Path.mjs ***!
  \*****************************************************************/
/*! exports provided: addPath, pathToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPath", function() { return addPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathToArray", function() { return pathToArray; });
/**
 * Given a Path and a key, return a new Path containing the new key.
 */
function addPath(prev, key) {
  return {
    prev: prev,
    key: key
  };
}
/**
 * Given a Path, return an Array of the path keys.
 */

function pathToArray(path) {
  var flattened = [];
  var curr = path;

  while (curr) {
    flattened.push(curr.key);
    curr = curr.prev;
  }

  return flattened.reverse();
}


/***/ }),

/***/ "../../graphql/jsutils/defineToJSON.mjs":
/*!*************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/defineToJSON.mjs ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defineToJSON; });
/* harmony import */ var _nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol */ "../../graphql/jsutils/nodejsCustomInspectSymbol.mjs");

/**
 * The `defineToJSON()` function defines toJSON() and inspect() prototype
 * methods, if no function provided they become aliases for toString().
 */

function defineToJSON(classObject) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : classObject.prototype.toString;
  classObject.prototype.toJSON = fn;
  classObject.prototype.inspect = fn;

  if (_nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    classObject.prototype[_nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__["default"]] = fn;
  }
}


/***/ }),

/***/ "../../graphql/jsutils/defineToStringTag.mjs":
/*!******************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/defineToStringTag.mjs ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defineToStringTag; });
/**
 * The `defineToStringTag()` function checks first to see if the runtime
 * supports the `Symbol` class and then if the `Symbol.toStringTag` constant
 * is defined as a `Symbol` instance. If both conditions are met, the
 * Symbol.toStringTag property is defined as a getter that returns the
 * supplied class constructor's name.
 *
 * @method defineToStringTag
 *
 * @param {Class<any>} classObject a class such as Object, String, Number but
 * typically one of your own creation through the class keyword; `class A {}`,
 * for example.
 */
function defineToStringTag(classObject) {
  if (typeof Symbol === 'function' && Symbol.toStringTag) {
    Object.defineProperty(classObject.prototype, Symbol.toStringTag, {
      get: function get() {
        return this.constructor.name;
      }
    });
  }
}


/***/ }),

/***/ "../../graphql/jsutils/devAssert.mjs":
/*!**********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/devAssert.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return devAssert; });
function devAssert(condition, message) {
  var booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(message);
  }
}


/***/ }),

/***/ "../../graphql/jsutils/didYouMean.mjs":
/*!***********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/didYouMean.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return didYouMean; });
var MAX_SUGGESTIONS = 5;
/**
 * Given [ A, B, C ] return ' Did you mean A, B, or C?'.
 */

// eslint-disable-next-line no-redeclare
function didYouMean(firstArg, secondArg) {
  var _ref = typeof firstArg === 'string' ? [firstArg, secondArg] : [undefined, firstArg],
      subMessage = _ref[0],
      suggestions = _ref[1];

  var message = ' Did you mean ';

  if (subMessage) {
    message += subMessage + ' ';
  }

  switch (suggestions.length) {
    case 0:
      return '';

    case 1:
      return message + suggestions[0] + '?';

    case 2:
      return message + suggestions[0] + ' or ' + suggestions[1] + '?';
  }

  var selected = suggestions.slice(0, MAX_SUGGESTIONS);
  var lastItem = selected.pop();
  return message + selected.join(', ') + ', or ' + lastItem + '?';
}


/***/ }),

/***/ "../../graphql/jsutils/identityFunc.mjs":
/*!*************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/identityFunc.mjs ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identityFunc; });
/**
 * Returns the first argument it receives.
 */
function identityFunc(x) {
  return x;
}


/***/ }),

/***/ "../../graphql/jsutils/inspect.mjs":
/*!********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/inspect.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inspect; });
/* harmony import */ var _nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol */ "../../graphql/jsutils/nodejsCustomInspectSymbol.mjs");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    // $FlowFixMe(>=0.90.0)
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(_nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__["default"])];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}


/***/ }),

/***/ "../../graphql/jsutils/instanceOf.mjs":
/*!***********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/instanceOf.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
/* harmony default export */ __webpack_exports__["default"] = ( false ? // eslint-disable-next-line no-shadow
undefined : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (value) {
    var valueClass = value.constructor;
    var className = constructor.name;

    if (className && valueClass && valueClass.name === className) {
      throw new Error("Cannot use ".concat(className, " \"").concat(value, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
});


/***/ }),

/***/ "../../graphql/jsutils/invariant.mjs":
/*!**********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/invariant.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invariant; });
function invariant(condition, message) {
  var booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(message || 'Unexpected invariant triggered');
  }
}


/***/ }),

/***/ "../../graphql/jsutils/isInvalid.mjs":
/*!**********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/isInvalid.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isInvalid; });
/**
 * Returns true if a value is undefined, or NaN.
 */
function isInvalid(value) {
  return value === undefined || value !== value;
}


/***/ }),

/***/ "../../graphql/jsutils/isNullish.mjs":
/*!**********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/isNullish.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNullish; });
/**
 * Returns true if a value is null, undefined, or NaN.
 */
function isNullish(value) {
  return value === null || value === undefined || value !== value;
}


/***/ }),

/***/ "../../graphql/jsutils/isObjectLike.mjs":
/*!*************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/isObjectLike.mjs ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObjectLike; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}


/***/ }),

/***/ "../../graphql/jsutils/isPromise.mjs":
/*!**********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/isPromise.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPromise; });
/**
 * Returns true if the value acts like a Promise, i.e. has a "then" function,
 * otherwise returns false.
 */
// eslint-disable-next-line no-redeclare
function isPromise(value) {
  return Boolean(value && typeof value.then === 'function');
}


/***/ }),

/***/ "../../graphql/jsutils/keyMap.mjs":
/*!*******************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/keyMap.mjs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyMap; });
/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: { name: 'Jon', num: '555-1234' },
 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
 *     const entriesByName = keyMap(
 *       phoneBook,
 *       entry => entry.name
 *     )
 *
 *     // { name: 'Jenny', num: '857-6309' }
 *     const jennyEntry = entriesByName['Jenny']
 *
 */
function keyMap(list, keyFn) {
  return list.reduce(function (map, item) {
    map[keyFn(item)] = item;
    return map;
  }, Object.create(null));
}


/***/ }),

/***/ "../../graphql/jsutils/keyValMap.mjs":
/*!**********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/keyValMap.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyValMap; });
/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: '555-1234', Jenny: '867-5309' }
 *     const phonesByName = keyValMap(
 *       phoneBook,
 *       entry => entry.name,
 *       entry => entry.num
 *     )
 *
 */
function keyValMap(list, keyFn, valFn) {
  return list.reduce(function (map, item) {
    map[keyFn(item)] = valFn(item);
    return map;
  }, Object.create(null));
}


/***/ }),

/***/ "../../graphql/jsutils/mapValue.mjs":
/*!*********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/mapValue.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapValue; });
/* harmony import */ var _polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries */ "../../graphql/polyfills/objectEntries.mjs");


/**
 * Creates an object map with the same keys as `map` and values generated by
 * running each value of `map` thru `fn`.
 */
function mapValue(map, fn) {
  var result = Object.create(null);

  for (var _i2 = 0, _objectEntries2 = Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__["default"])(map); _i2 < _objectEntries2.length; _i2++) {
    var _ref2 = _objectEntries2[_i2];
    var _key = _ref2[0];
    var _value = _ref2[1];
    result[_key] = fn(_value, _key);
  }

  return result;
}


/***/ }),

/***/ "../../graphql/jsutils/memoize3.mjs":
/*!*********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/memoize3.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memoize3; });
/**
 * Memoizes the provided three-argument function.
 */
function memoize3(fn) {
  var cache0;

  function memoized(a1, a2, a3) {
    if (!cache0) {
      cache0 = new WeakMap();
    }

    var cache1 = cache0.get(a1);
    var cache2;

    if (cache1) {
      cache2 = cache1.get(a2);

      if (cache2) {
        var cachedValue = cache2.get(a3);

        if (cachedValue !== undefined) {
          return cachedValue;
        }
      }
    } else {
      cache1 = new WeakMap();
      cache0.set(a1, cache1);
    }

    if (!cache2) {
      cache2 = new WeakMap();
      cache1.set(a2, cache2);
    }

    var newValue = fn(a1, a2, a3);
    cache2.set(a3, newValue);
    return newValue;
  }

  return memoized;
}


/***/ }),

/***/ "../../graphql/jsutils/nodejsCustomInspectSymbol.mjs":
/*!**************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
/* harmony default export */ __webpack_exports__["default"] = (nodejsCustomInspectSymbol);


/***/ }),

/***/ "../../graphql/jsutils/printPathArray.mjs":
/*!***************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/printPathArray.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printPathArray; });
/**
 * Build a string describing the path.
 */
function printPathArray(path) {
  return path.map(function (key) {
    return typeof key === 'number' ? '[' + key.toString() + ']' : '.' + key;
  }).join('');
}


/***/ }),

/***/ "../../graphql/jsutils/promiseForObject.mjs":
/*!*****************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/promiseForObject.mjs ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return promiseForObject; });
/**
 * This function transforms a JS object `ObjMap<Promise<T>>` into
 * a `Promise<ObjMap<T>>`
 *
 * This is akin to bluebird's `Promise.props`, but implemented only using
 * `Promise.all` so it will work with any implementation of ES6 promises.
 */
function promiseForObject(object) {
  var keys = Object.keys(object);
  var valuesAndPromises = keys.map(function (name) {
    return object[name];
  });
  return Promise.all(valuesAndPromises).then(function (values) {
    return values.reduce(function (resolvedObject, value, i) {
      resolvedObject[keys[i]] = value;
      return resolvedObject;
    }, Object.create(null));
  });
}


/***/ }),

/***/ "../../graphql/jsutils/promiseReduce.mjs":
/*!**************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/promiseReduce.mjs ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return promiseReduce; });
/* harmony import */ var _isPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPromise */ "../../graphql/jsutils/isPromise.mjs");


/**
 * Similar to Array.prototype.reduce(), however the reducing callback may return
 * a Promise, in which case reduction will continue after each promise resolves.
 *
 * If the callback does not return a Promise, then this function will also not
 * return a Promise.
 */
function promiseReduce(values, callback, initialValue) {
  return values.reduce(function (previous, value) {
    return Object(_isPromise__WEBPACK_IMPORTED_MODULE_0__["default"])(previous) ? previous.then(function (resolved) {
      return callback(resolved, value);
    }) : callback(previous, value);
  }, initialValue);
}


/***/ }),

/***/ "../../graphql/jsutils/suggestionList.mjs":
/*!***************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/suggestionList.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return suggestionList; });
/**
 * Given an invalid input string and a list of valid options, returns a filtered
 * list of valid options sorted based on their similarity with the input.
 */
function suggestionList(input, options) {
  var optionsByDistance = Object.create(null);
  var inputThreshold = input.length / 2;

  for (var _i2 = 0; _i2 < options.length; _i2++) {
    var option = options[_i2];
    var distance = lexicalDistance(input, option);
    var threshold = Math.max(inputThreshold, option.length / 2, 1);

    if (distance <= threshold) {
      optionsByDistance[option] = distance;
    }
  }

  return Object.keys(optionsByDistance).sort(function (a, b) {
    return optionsByDistance[a] - optionsByDistance[b];
  });
}
/**
 * Computes the lexical distance between strings A and B.
 *
 * The "distance" between two strings is given by counting the minimum number
 * of edits needed to transform string A into string B. An edit can be an
 * insertion, deletion, or substitution of a single character, or a swap of two
 * adjacent characters.
 *
 * Includes a custom alteration from Damerau-Levenshtein to treat case changes
 * as a single edit which helps identify mis-cased values with an edit distance
 * of 1.
 *
 * This distance can be useful for detecting typos in input or sorting
 *
 * @param {string} a
 * @param {string} b
 * @return {int} distance in number of edits
 */

function lexicalDistance(aStr, bStr) {
  if (aStr === bStr) {
    return 0;
  }

  var d = [];
  var a = aStr.toLowerCase();
  var b = bStr.toLowerCase();
  var aLength = a.length;
  var bLength = b.length; // Any case change counts as a single edit

  if (a === b) {
    return 1;
  }

  for (var i = 0; i <= aLength; i++) {
    d[i] = [i];
  }

  for (var j = 1; j <= bLength; j++) {
    d[0][j] = j;
  }

  for (var _i3 = 1; _i3 <= aLength; _i3++) {
    for (var _j = 1; _j <= bLength; _j++) {
      var cost = a[_i3 - 1] === b[_j - 1] ? 0 : 1;
      d[_i3][_j] = Math.min(d[_i3 - 1][_j] + 1, d[_i3][_j - 1] + 1, d[_i3 - 1][_j - 1] + cost);

      if (_i3 > 1 && _j > 1 && a[_i3 - 1] === b[_j - 2] && a[_i3 - 2] === b[_j - 1]) {
        d[_i3][_j] = Math.min(d[_i3][_j], d[_i3 - 2][_j - 2] + cost);
      }
    }
  }

  return d[aLength][bLength];
}


/***/ }),

/***/ "../../graphql/jsutils/toObjMap.mjs":
/*!*********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/jsutils/toObjMap.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toObjMap; });
/* harmony import */ var _polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries */ "../../graphql/polyfills/objectEntries.mjs");

function toObjMap(obj) {
  /* eslint-enable no-redeclare */
  if (Object.getPrototypeOf(obj) === null) {
    return obj;
  }

  var map = Object.create(null);

  for (var _i2 = 0, _objectEntries2 = Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__["default"])(obj); _i2 < _objectEntries2.length; _i2++) {
    var _ref2 = _objectEntries2[_i2];
    var key = _ref2[0];
    var value = _ref2[1];
    map[key] = value;
  }

  return map;
}


/***/ }),

/***/ "../../graphql/language/blockString.mjs":
/*!*************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/language/blockString.mjs ***!
  \*************************************************************************/
/*! exports provided: dedentBlockStringValue, getBlockStringIndentation, printBlockString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dedentBlockStringValue", function() { return dedentBlockStringValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockStringIndentation", function() { return getBlockStringIndentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printBlockString", function() { return printBlockString; });
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(lines);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  while (lines.length > 0 && isBlank(lines[0])) {
    lines.shift();
  }

  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  } // Return a string of the lines joined with U+000A.


  return lines.join('\n');
} // @internal

function getBlockStringIndentation(lines) {
  var commonIndent = null;

  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    var indent = leadingWhitespace(line);

    if (indent === line.length) {
      continue; // skip empty lines
    }

    if (commonIndent === null || indent < commonIndent) {
      commonIndent = indent;

      if (commonIndent === 0) {
        break;
      }
    }
  }

  return commonIndent === null ? 0 : commonIndent;
}

function leadingWhitespace(str) {
  var i = 0;

  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
    i++;
  }

  return i;
}

function isBlank(str) {
  return leadingWhitespace(str) === str.length;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 */


function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}


/***/ }),

/***/ "../../graphql/language/directiveLocation.mjs":
/*!*******************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/language/directiveLocation.mjs ***!
  \*******************************************************************************/
/*! exports provided: DirectiveLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return DirectiveLocation; });
/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */


/***/ }),

/***/ "../../graphql/language/index.mjs":
/*!*******************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/language/index.mjs ***!
  \*******************************************************************/
/*! exports provided: Source, getLocation, printLocation, printSourceLocation, Kind, TokenKind, createLexer, parse, parseValue, parseType, print, visit, visitInParallel, visitWithTypeInfo, getVisitFn, BREAK, isDefinitionNode, isExecutableDefinitionNode, isSelectionNode, isValueNode, isTypeNode, isTypeSystemDefinitionNode, isTypeDefinitionNode, isTypeSystemExtensionNode, isTypeExtensionNode, DirectiveLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "../../graphql/language/source.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return _source__WEBPACK_IMPORTED_MODULE_0__["Source"]; });

/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ "../../graphql/language/location.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _location__WEBPACK_IMPORTED_MODULE_1__["getLocation"]; });

/* harmony import */ var _printLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printLocation */ "../../graphql/language/printLocation.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printLocation", function() { return _printLocation__WEBPACK_IMPORTED_MODULE_2__["printLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printSourceLocation", function() { return _printLocation__WEBPACK_IMPORTED_MODULE_2__["printSourceLocation"]; });

/* harmony import */ var _kinds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kinds */ "../../graphql/language/kinds.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return _kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"]; });

/* harmony import */ var _tokenKind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokenKind */ "../../graphql/language/tokenKind.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return _tokenKind__WEBPACK_IMPORTED_MODULE_4__["TokenKind"]; });

/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lexer */ "../../graphql/language/lexer.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLexer", function() { return _lexer__WEBPACK_IMPORTED_MODULE_5__["createLexer"]; });

/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parser */ "../../graphql/language/parser.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parser__WEBPACK_IMPORTED_MODULE_6__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _parser__WEBPACK_IMPORTED_MODULE_6__["parseValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return _parser__WEBPACK_IMPORTED_MODULE_6__["parseType"]; });

/* harmony import */ var _printer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./printer */ "../../graphql/language/printer.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "print", function() { return _printer__WEBPACK_IMPORTED_MODULE_7__["print"]; });

/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visitor */ "../../graphql/language/visitor.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return _visitor__WEBPACK_IMPORTED_MODULE_8__["visit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return _visitor__WEBPACK_IMPORTED_MODULE_8__["visitInParallel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visitWithTypeInfo", function() { return _visitor__WEBPACK_IMPORTED_MODULE_8__["visitWithTypeInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return _visitor__WEBPACK_IMPORTED_MODULE_8__["getVisitFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return _visitor__WEBPACK_IMPORTED_MODULE_8__["BREAK"]; });

/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./predicates */ "../../graphql/language/predicates.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefinitionNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_9__["isDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExecutableDefinitionNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_9__["isExecutableDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSelectionNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_9__["isSelectionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValueNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_9__["isValueNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_9__["isTypeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemDefinitionNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_9__["isTypeSystemDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeDefinitionNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_9__["isTypeDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemExtensionNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_9__["isTypeSystemExtensionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeExtensionNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_9__["isTypeExtensionNode"]; });

/* harmony import */ var _directiveLocation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directiveLocation */ "../../graphql/language/directiveLocation.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return _directiveLocation__WEBPACK_IMPORTED_MODULE_10__["DirectiveLocation"]; });














/***/ }),

/***/ "../../graphql/language/kinds.mjs":
/*!*******************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/language/kinds.mjs ***!
  \*******************************************************************/
/*! exports provided: Kind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */


/***/ }),

/***/ "../../graphql/language/lexer.mjs":
/*!*******************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/language/lexer.mjs ***!
  \*******************************************************************/
/*! exports provided: createLexer, isPunctuatorToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLexer", function() { return createLexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPunctuatorToken", function() { return isPunctuatorToken; });
/* harmony import */ var _jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/defineToJSON */ "../../graphql/jsutils/defineToJSON.mjs");
/* harmony import */ var _error_syntaxError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error/syntaxError */ "../../graphql/error/syntaxError.mjs");
/* harmony import */ var _blockString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockString */ "../../graphql/language/blockString.mjs");
/* harmony import */ var _tokenKind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokenKind */ "../../graphql/language/tokenKind.mjs");




/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

function createLexer(source, options) {
  var startOfFileToken = new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer,
    lookahead: lookahead
  };
  return lexer;
}

function advanceLexer() {
  this.lastToken = this.token;
  var token = this.token = this.lookahead();
  return token;
}

function lookahead() {
  var token = this.token;

  if (token.kind !== _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF) {
    do {
      // Note: next is only mutable during parsing, so we cast to allow this.
      token = token.next || (token.next = readToken(this, token));
    } while (token.kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COMMENT);
  }

  return token;
}
/**
 * The return type of createLexer.
 */


// @internal
function isPunctuatorToken(token) {
  var kind = token.kind;
  return kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BANG || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].DOLLAR || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AMP || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_R || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SPREAD || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EQUALS || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AT || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_L || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_R || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PIPE || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R;
}
/**
 * Helper function for constructing the Token object.
 */

function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
} // Print a simplified form when appearing in JSON/util.inspect.


Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_0__["default"])(Tok, function () {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
});

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;

  if (pos >= bodyLength) {
    return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = body.charCodeAt(pos); // SourceCharacter

  switch (code) {
    // !
    case 33:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BANG, pos, pos + 1, line, col, prev);
    // #

    case 35:
      return readComment(source, pos, line, col, prev);
    // $

    case 36:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].DOLLAR, pos, pos + 1, line, col, prev);
    // &

    case 38:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AMP, pos, pos + 1, line, col, prev);
    // (

    case 40:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L, pos, pos + 1, line, col, prev);
    // )

    case 41:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_R, pos, pos + 1, line, col, prev);
    // .

    case 46:
      if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
        return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SPREAD, pos, pos + 3, line, col, prev);
      }

      break;
    // :

    case 58:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON, pos, pos + 1, line, col, prev);
    // =

    case 61:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EQUALS, pos, pos + 1, line, col, prev);
    // @

    case 64:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AT, pos, pos + 1, line, col, prev);
    // [

    case 91:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_L, pos, pos + 1, line, col, prev);
    // ]

    case 93:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_R, pos, pos + 1, line, col, prev);
    // {

    case 123:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, pos, pos + 1, line, col, prev);
    // |

    case 124:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PIPE, pos, pos + 1, line, col, prev);
    // }

    case 125:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R, pos, pos + 1, line, col, prev);
    // A-Z _ a-z

    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(source, pos, line, col, prev);
    // - 0-9

    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(source, pos, code, line, col, prev);
    // "

    case 34:
      if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
        return readBlockString(source, pos, line, col, prev, lexer);
      }

      return readString(source, pos, line, col, prev);
  }

  throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, pos, unexpectedCharacterMessage(code));
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * character, then returns the position of that character for lexing.
 */


function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;

  while (position < bodyLength) {
    var code = body.charCodeAt(position); // tab | space | comma | BOM

    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }

  return position;
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or e


  if (code === 46 || code === 69 || code === 101) {
    throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new Tok(isFloat ? _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].FLOAT : _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BLOCK_STRING, start, position + 3, line, col, prev, Object(_blockString__WEBPACK_IMPORTED_MODULE_2__["dedentBlockStringValue"])(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME, start, position, line, col, prev, body.slice(start, position));
}


/***/ }),

/***/ "../../graphql/language/location.mjs":
/*!**********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/language/location.mjs ***!
  \**********************************************************************/
/*! exports provided: getLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}


/***/ }),

/***/ "../../graphql/language/parser.mjs":
/*!********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/language/parser.mjs ***!
  \********************************************************************/
/*! exports provided: parse, parseValue, parseType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return parseType; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/devAssert */ "../../graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/defineToJSON */ "../../graphql/jsutils/defineToJSON.mjs");
/* harmony import */ var _error_syntaxError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error/syntaxError */ "../../graphql/error/syntaxError.mjs");
/* harmony import */ var _kinds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./source */ "../../graphql/language/source.mjs");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lexer */ "../../graphql/language/lexer.mjs");
/* harmony import */ var _directiveLocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directiveLocation */ "../../graphql/language/directiveLocation.mjs");
/* harmony import */ var _tokenKind__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tokenKind */ "../../graphql/language/tokenKind.mjs");










/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].SOF);
  var value = parser.parseValueLiteral(false);
  parser.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].SOF);
  var type = parser.parseTypeReference();
  parser.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].EOF);
  return type;
}

var Parser =
/*#__PURE__*/
function () {
  function Parser(source, options) {
    var sourceObj = typeof source === 'string' ? new _source__WEBPACK_IMPORTED_MODULE_5__["Source"](source) : source;
    sourceObj instanceof _source__WEBPACK_IMPORTED_MODULE_5__["Source"] || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_1__["default"])(0, "Must provide Source. Received: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceObj)));
    this._lexer = Object(_lexer__WEBPACK_IMPORTED_MODULE_6__["createLexer"])(sourceObj);
    this._options = options || {};
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].DOCUMENT,
      definitions: this.many(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].SOF, this.parseDefinition, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L)) {
      return {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME)) {
      name = this.parseName();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PAREN_L, this.parseVariableDefinition, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].DOLLAR);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SELECTION_SET,
      selections: this.many(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L, this.parseSelection, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PAREN_L, item, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME)) {
      return {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (this._options.experimentalFragmentVariables) {
      return {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACKET_L:
        return this.parseList(isConst);

      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L:
        return this.parseObject(isConst);

      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].INT:
        this._lexer.advance();

        return {
          kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].FLOAT:
        this._lexer.advance();

        return {
          kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].STRING:
      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BLOCK_STRING:
        return this.parseStringLiteral();

      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME:
        if (token.value === 'true' || token.value === 'false') {
          this._lexer.advance();

          return {
            kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].BOOLEAN,
            value: token.value === 'true',
            loc: this.loc(token)
          };
        } else if (token.value === 'null') {
          this._lexer.advance();

          return {
            kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NULL,
            loc: this.loc(token)
          };
        }

        this._lexer.advance();

        return {
          kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].STRING,
      value: token.value,
      block: token.kind === _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].LIST,
      values: this.any(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACKET_L, item, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT,
      fields: this.any(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L, item, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].AT);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACKET_R);
      type = {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BANG)) {
      return {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].STRING) || this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L, this.parseOperationTypeDefinition, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SCHEMA_DEFINITION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON);
    var type = this.parseNamedType();
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var types = [];

    if (this.expectOptionalKeyword('implements')) {
      // Optional leading ampersand
      this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].AMP) || // Legacy support for the SDL?
      this._options.allowLegacySDLImplementsInterfaces && this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME));
    }

    return types;
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    // Legacy support for the SDL?
    if (this._options.allowLegacySDLEmptyFields && this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L) && this._lexer.lookahead().kind === _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L, this.parseFieldDefinition, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PAREN_L, this.parseInputValueDef, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    var types = [];

    if (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].EQUALS)) {
      // Optional leading pipe
      this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PIPE);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PIPE));
    }

    return types;
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L, this.parseEnumValueDefinition, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L, this.parseInputValueDef, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L, this.parseOperationTypeDefinition, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *   - extend interface Name Directives[Const]? FieldsDefinition
   *   - extend interface Name Directives[Const]
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INTERFACE_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    // Optional leading pipe
    this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PIPE);
    var locations = [];

    do {
      locations.push(this.parseDirectiveLocation());
    } while (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PIPE));

    return locations;
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (_directiveLocation__WEBPACK_IMPORTED_MODULE_7__["DirectiveLocation"][name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in
   * the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    if (!this._options.noLocation) {
      return new Loc(startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing
   * the lexer. Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_3__["syntaxError"])(this._lexer.source, token.start, "Expected ".concat(kind, ", found ").concat(getTokenDesc(token)));
  }
  /**
   * If the next token is of the given kind, return that token after advancing
   * the lexer. Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_3__["syntaxError"])(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token)));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing
   * the lexer. Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token
   * is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken || this._lexer.token;
    return Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_3__["syntaxError"])(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token)));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by
   * the parseFn. This list begins with a lex token of openKind
   * and ends with a lex token of closeKind. Advances the parser
   * to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always
   * return non-empty list that begins with a lex token of openKind and ends
   * with a lex token of closeKind. Advances the parser to the next lex token
   * after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by
   * the parseFn. This list begins with a lex token of openKind
   * and ends with a lex token of closeKind. Advances the parser
   * to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  };

  return Parser;
}();

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
} // Print a simplified form when appearing in JSON/util.inspect.


Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_2__["default"])(Loc, function () {
  return {
    start: this.start,
    end: this.end
  };
});
/**
 * A helper function to describe a token as a string for debugging
 */

function getTokenDesc(token) {
  var value = token.value;
  return value ? "".concat(token.kind, " \"").concat(value, "\"") : token.kind;
}


/***/ }),

/***/ "../../graphql/language/predicates.mjs":
/*!************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/language/predicates.mjs ***!
  \************************************************************************/
/*! exports provided: isDefinitionNode, isExecutableDefinitionNode, isSelectionNode, isValueNode, isTypeNode, isTypeSystemDefinitionNode, isTypeDefinitionNode, isTypeSystemExtensionNode, isTypeExtensionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefinitionNode", function() { return isDefinitionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExecutableDefinitionNode", function() { return isExecutableDefinitionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelectionNode", function() { return isSelectionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueNode", function() { return isValueNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeNode", function() { return isTypeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemDefinitionNode", function() { return isTypeSystemDefinitionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeDefinitionNode", function() { return isTypeDefinitionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemExtensionNode", function() { return isTypeSystemExtensionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeExtensionNode", function() { return isTypeExtensionNode; });
/* harmony import */ var _kinds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kinds */ "../../graphql/language/kinds.mjs");

function isDefinitionNode(node) {
  return isExecutableDefinitionNode(node) || isTypeSystemDefinitionNode(node) || isTypeSystemExtensionNode(node);
}
function isExecutableDefinitionNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].OPERATION_DEFINITION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].FRAGMENT_DEFINITION;
}
function isSelectionNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].FIELD || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].FRAGMENT_SPREAD || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].INLINE_FRAGMENT;
}
function isValueNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].VARIABLE || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].INT || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].FLOAT || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].STRING || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].BOOLEAN || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].NULL || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].ENUM || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].LIST || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].OBJECT;
}
function isTypeNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].NAMED_TYPE || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].LIST_TYPE || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].NON_NULL_TYPE;
}
function isTypeSystemDefinitionNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].DIRECTIVE_DEFINITION;
}
function isTypeDefinitionNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].SCALAR_TYPE_DEFINITION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].OBJECT_TYPE_DEFINITION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].INTERFACE_TYPE_DEFINITION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].UNION_TYPE_DEFINITION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].ENUM_TYPE_DEFINITION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].INPUT_OBJECT_TYPE_DEFINITION;
}
function isTypeSystemExtensionNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].SCHEMA_EXTENSION || isTypeExtensionNode(node);
}
function isTypeExtensionNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].SCALAR_TYPE_EXTENSION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].OBJECT_TYPE_EXTENSION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].INTERFACE_TYPE_EXTENSION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].UNION_TYPE_EXTENSION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].ENUM_TYPE_EXTENSION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].INPUT_OBJECT_TYPE_EXTENSION;
}


/***/ }),

/***/ "../../graphql/language/printLocation.mjs":
/*!***************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/language/printLocation.mjs ***!
  \***************************************************************************/
/*! exports provided: printLocation, printSourceLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLocation", function() { return printLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printSourceLocation", function() { return printSourceLocation; });
/* harmony import */ var _language_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/location */ "../../graphql/language/location.mjs");

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, Object(_language_location__WEBPACK_IMPORTED_MODULE_0__["getLocation"])(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var sublineIndex = Math.floor(columnNum / 80);
    var sublineColumnNum = columnNum % 80;
    var sublines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      sublines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), sublines[0]]].concat(sublines.slice(1, sublineIndex + 1).map(function (subline) {
      return ['', subline];
    }), [[' ', whitespace(sublineColumnNum - 1) + '^'], ['', sublines[sublineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return lpad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}


/***/ }),

/***/ "../../graphql/language/printer.mjs":
/*!*********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/language/printer.mjs ***!
  \*********************************************************************/
/*! exports provided: print */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitor */ "../../graphql/language/visitor.mjs");
/* harmony import */ var _blockString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockString */ "../../graphql/language/blockString.mjs");


/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return Object(_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(ast, {
    leave: printDocASTReducer
  });
} // TODO: provide better type coverage in future

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? Object(_blockString__WEBPACK_IMPORTED_MODULE_1__["printBlockString"])(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return array && array.length !== 0 ? '{\n' + indent(join(array, '\n')) + '\n}' : '';
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */


function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ');
}

function isMultiline(string) {
  return string.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray && maybeArray.some(isMultiline);
}


/***/ }),

/***/ "../../graphql/language/source.mjs":
/*!********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/language/source.mjs ***!
  \********************************************************************/
/*! exports provided: Source */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert */ "../../graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/defineToStringTag */ "../../graphql/jsutils/defineToStringTag.mjs");



/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */
var Source = function Source(body, name, locationOffset) {
  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || {
    line: 1,
    column: 1
  };
  this.locationOffset.line > 0 || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'line in locationOffset is 1-indexed and must be positive');
  this.locationOffset.column > 0 || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'column in locationOffset is 1-indexed and must be positive');
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_1__["default"])(Source);


/***/ }),

/***/ "../../graphql/language/tokenKind.mjs":
/*!***********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/language/tokenKind.mjs ***!
  \***********************************************************************/
/*! exports provided: TokenKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return TokenKind; });
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */


/***/ }),

/***/ "../../graphql/language/visitor.mjs":
/*!*********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/language/visitor.mjs ***!
  \*********************************************************************/
/*! exports provided: QueryDocumentKeys, BREAK, visit, visitInParallel, visitWithTypeInfo, getVisitFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryDocumentKeys", function() { return QueryDocumentKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return BREAK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return visitInParallel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitWithTypeInfo", function() { return visitWithTypeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return getVisitFn; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return Boolean(maybeNode && typeof maybeNode.kind === 'string');
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */


function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);
  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          false);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          true);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}
/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */

function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind,
      /* isLeaving */
      false);

      if (fn) {
        var result = fn.apply(visitor, arguments);

        if (result !== undefined) {
          typeInfo.leave(node);

          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }

        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind,
      /* isLeaving */
      true);
      var result;

      if (fn) {
        result = fn.apply(visitor, arguments);
      }

      typeInfo.leave(node);
      return result;
    }
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}


/***/ }),

/***/ "../../graphql/polyfills/find.mjs":
/*!*******************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/polyfills/find.mjs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe
var find = Array.prototype.find ? function (list, predicate) {
  return Array.prototype.find.call(list, predicate);
} : function (list, predicate) {
  for (var _i2 = 0; _i2 < list.length; _i2++) {
    var value = list[_i2];

    if (predicate(value)) {
      return value;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (find);


/***/ }),

/***/ "../../graphql/polyfills/flatMap.mjs":
/*!**********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/polyfills/flatMap.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Workaround to make older Flow versions happy
var flatMapMethod = Array.prototype.flatMap;
/* eslint-disable no-redeclare */
// $FlowFixMe

var flatMap = flatMapMethod ? function (list, fn) {
  return flatMapMethod.call(list, fn);
} : function (list, fn) {
  var result = [];

  for (var _i2 = 0; _i2 < list.length; _i2++) {
    var _item = list[_i2];
    var value = fn(_item);

    if (Array.isArray(value)) {
      result = result.concat(value);
    } else {
      result.push(value);
    }
  }

  return result;
};
/* harmony default export */ __webpack_exports__["default"] = (flatMap);


/***/ }),

/***/ "../../graphql/polyfills/isFinite.mjs":
/*!***********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/polyfills/isFinite.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/4441
var isFinitePolyfill = Number.isFinite || function (value) {
  return typeof value === 'number' && isFinite(value);
};

/* harmony default export */ __webpack_exports__["default"] = (isFinitePolyfill);


/***/ }),

/***/ "../../graphql/polyfills/isInteger.mjs":
/*!************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/polyfills/isInteger.mjs ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/4441
var isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

/* harmony default export */ __webpack_exports__["default"] = (isInteger);


/***/ }),

/***/ "../../graphql/polyfills/objectEntries.mjs":
/*!****************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/polyfills/objectEntries.mjs ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/5838
var objectEntries = Object.entries || function (obj) {
  return Object.keys(obj).map(function (key) {
    return [key, obj[key]];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (objectEntries);


/***/ }),

/***/ "../../graphql/polyfills/objectValues.mjs":
/*!***************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/polyfills/objectValues.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/2221
var objectValues = Object.values || function (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (objectValues);


/***/ }),

/***/ "../../graphql/subscription/index.mjs":
/*!***********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/subscription/index.mjs ***!
  \***********************************************************************/
/*! exports provided: subscribe, createSourceEventStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribe */ "../../graphql/subscription/subscribe.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return _subscribe__WEBPACK_IMPORTED_MODULE_0__["subscribe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSourceEventStream", function() { return _subscribe__WEBPACK_IMPORTED_MODULE_0__["createSourceEventStream"]; });




/***/ }),

/***/ "../../graphql/subscription/mapAsyncIterator.mjs":
/*!**********************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/subscription/mapAsyncIterator.mjs ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapAsyncIterator; });
/* harmony import */ var iterall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iterall */ "../../iterall/index.mjs");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */
function mapAsyncIterator(iterable, callback, rejectCallback) {
  var iterator = Object(iterall__WEBPACK_IMPORTED_MODULE_0__["getAsyncIterator"])(iterable);
  var $return;
  var abruptClose; // $FlowFixMe(>=0.68.0)

  if (typeof iterator.return === 'function') {
    $return = iterator.return;

    abruptClose = function abruptClose(error) {
      var rethrow = function rethrow() {
        return Promise.reject(error);
      };

      return $return.call(iterator).then(rethrow, rethrow);
    };
  }

  function mapResult(result) {
    return result.done ? result : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
  }

  var mapReject;

  if (rejectCallback) {
    // Capture rejectCallback to ensure it cannot be null.
    var reject = rejectCallback;

    mapReject = function mapReject(error) {
      return asyncMapValue(error, reject).then(iteratorResult, abruptClose);
    };
  }
  /* TODO: Flow doesn't support symbols as keys:
     https://github.com/facebook/flow/issues/3258 */


  return _defineProperty({
    next: function next() {
      return iterator.next().then(mapResult, mapReject);
    },
    return: function _return() {
      return $return ? $return.call(iterator).then(mapResult, mapReject) : Promise.resolve({
        value: undefined,
        done: true
      });
    },
    throw: function _throw(error) {
      // $FlowFixMe(>=0.68.0)
      if (typeof iterator.throw === 'function') {
        return iterator.throw(error).then(mapResult, mapReject);
      }

      return Promise.reject(error).catch(abruptClose);
    }
  }, iterall__WEBPACK_IMPORTED_MODULE_0__["$$asyncIterator"], function () {
    return this;
  });
}

function asyncMapValue(value, callback) {
  return new Promise(function (resolve) {
    return resolve(callback(value));
  });
}

function iteratorResult(value) {
  return {
    value: value,
    done: false
  };
}


/***/ }),

/***/ "../../graphql/subscription/subscribe.mjs":
/*!***************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/subscription/subscribe.mjs ***!
  \***************************************************************************/
/*! exports provided: subscribe, createSourceEventStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSourceEventStream", function() { return createSourceEventStream; });
/* harmony import */ var iterall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iterall */ "../../iterall/index.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_Path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/Path */ "../../graphql/jsutils/Path.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _error_locatedError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/locatedError */ "../../graphql/error/locatedError.mjs");
/* harmony import */ var _execution_execute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../execution/execute */ "../../graphql/execution/execute.mjs");
/* harmony import */ var _utilities_getOperationRootType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/getOperationRootType */ "../../graphql/utilities/getOperationRootType.mjs");
/* harmony import */ var _mapAsyncIterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mapAsyncIterator */ "../../graphql/subscription/mapAsyncIterator.mjs");








function subscribe(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? subscribeImpl(argsOrSchema) : subscribeImpl({
    schema: argsOrSchema,
    document: document,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    subscribeFieldResolver: subscribeFieldResolver
  });
}
/**
 * This function checks if the error is a GraphQLError. If it is, report it as
 * an ExecutionResult, containing only errors and no data. Otherwise treat the
 * error as a system-class error and re-throw it.
 */

function reportGraphQLError(error) {
  if (error instanceof _error_GraphQLError__WEBPACK_IMPORTED_MODULE_3__["GraphQLError"]) {
    return {
      errors: [error]
    };
  }

  throw error;
}

function subscribeImpl(args) {
  var schema = args.schema,
      document = args.document,
      rootValue = args.rootValue,
      contextValue = args.contextValue,
      variableValues = args.variableValues,
      operationName = args.operationName,
      fieldResolver = args.fieldResolver,
      subscribeFieldResolver = args.subscribeFieldResolver;
  var sourcePromise = createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver); // For each payload yielded from a subscription, map it over the normal
  // GraphQL `execute` function, with `payload` as the rootValue.
  // This implements the "MapSourceToResponseEvent" algorithm described in
  // the GraphQL specification. The `execute` function provides the
  // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
  // "ExecuteQuery" algorithm, for which `execute` is also used.

  var mapSourceToResponse = function mapSourceToResponse(payload) {
    return Object(_execution_execute__WEBPACK_IMPORTED_MODULE_5__["execute"])(schema, document, payload, contextValue, variableValues, operationName, fieldResolver);
  }; // Resolve the Source Stream, then map every source value to a
  // ExecutionResult value as described above.


  return sourcePromise.then(function (resultOrStream) {
    return (// Note: Flow can't refine isAsyncIterable, so explicit casts are used.
      Object(iterall__WEBPACK_IMPORTED_MODULE_0__["isAsyncIterable"])(resultOrStream) ? Object(_mapAsyncIterator__WEBPACK_IMPORTED_MODULE_7__["default"])(resultOrStream, mapSourceToResponse, reportGraphQLError) : resultOrStream
    );
  });
}
/**
 * Implements the "CreateSourceEventStream" algorithm described in the
 * GraphQL specification, resolving the subscription source event stream.
 *
 * Returns a Promise which resolves to either an AsyncIterable (if successful)
 * or an ExecutionResult (error). The promise will be rejected if the schema or
 * other arguments to this function are invalid, or if the resolved event stream
 * is not an async iterable.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to the AsyncIterable for the
 * event stream returned by the resolver.
 *
 * A Source Event Stream represents a sequence of events, each of which triggers
 * a GraphQL execution for that event.
 *
 * This may be useful when hosting the stateful subscription service in a
 * different process or machine than the stateless GraphQL execution engine,
 * or otherwise separating these two steps. For more on this, see the
 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
 */


function createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // If arguments are missing or incorrectly typed, this is an internal
  // developer mistake which should throw an early error.
  Object(_execution_execute__WEBPACK_IMPORTED_MODULE_5__["assertValidExecutionArguments"])(schema, document, variableValues);

  try {
    // If a valid context cannot be created due to incorrect arguments,
    // this will throw an error.
    var exeContext = Object(_execution_execute__WEBPACK_IMPORTED_MODULE_5__["buildExecutionContext"])(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver); // Return early errors if execution context failed.

    if (Array.isArray(exeContext)) {
      return Promise.resolve({
        errors: exeContext
      });
    }

    var type = Object(_utilities_getOperationRootType__WEBPACK_IMPORTED_MODULE_6__["getOperationRootType"])(schema, exeContext.operation);
    var fields = Object(_execution_execute__WEBPACK_IMPORTED_MODULE_5__["collectFields"])(exeContext, type, exeContext.operation.selectionSet, Object.create(null), Object.create(null));
    var responseNames = Object.keys(fields);
    var responseName = responseNames[0];
    var fieldNodes = fields[responseName];
    var fieldNode = fieldNodes[0];
    var fieldName = fieldNode.name.value;
    var fieldDef = Object(_execution_execute__WEBPACK_IMPORTED_MODULE_5__["getFieldDef"])(schema, type, fieldName);

    if (!fieldDef) {
      throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_3__["GraphQLError"]("The subscription field \"".concat(fieldName, "\" is not defined."), fieldNodes);
    } // Call the `subscribe()` resolver or the default resolver to produce an
    // AsyncIterable yielding raw payloads.


    var resolveFn = fieldDef.subscribe || exeContext.fieldResolver;
    var path = Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_2__["addPath"])(undefined, responseName);
    var info = Object(_execution_execute__WEBPACK_IMPORTED_MODULE_5__["buildResolveInfo"])(exeContext, fieldDef, fieldNodes, type, path); // resolveFieldValueOrError implements the "ResolveFieldEventStream"
    // algorithm from GraphQL specification. It differs from
    // "ResolveFieldValue" due to providing a different `resolveFn`.

    var result = Object(_execution_execute__WEBPACK_IMPORTED_MODULE_5__["resolveFieldValueOrError"])(exeContext, fieldDef, fieldNodes, resolveFn, rootValue, info); // Coerce to Promise for easier error handling and consistent return type.

    return Promise.resolve(result).then(function (eventStream) {
      // If eventStream is an Error, rethrow a located error.
      if (eventStream instanceof Error) {
        return {
          errors: [Object(_error_locatedError__WEBPACK_IMPORTED_MODULE_4__["locatedError"])(eventStream, fieldNodes, Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_2__["pathToArray"])(path))]
        };
      } // Assert field returned an event stream, otherwise yield an error.


      if (Object(iterall__WEBPACK_IMPORTED_MODULE_0__["isAsyncIterable"])(eventStream)) {
        // Note: isAsyncIterable above ensures this will be correct.
        return eventStream;
      }

      throw new Error('Subscription field must return Async Iterable. Received: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(eventStream));
    });
  } catch (error) {
    // As with reportGraphQLError above, if the error is a GraphQLError, report
    // it as an ExecutionResult; otherwise treat it as a system-class error and
    // re-throw it.
    return error instanceof _error_GraphQLError__WEBPACK_IMPORTED_MODULE_3__["GraphQLError"] ? Promise.resolve({
      errors: [error]
    }) : Promise.reject(error);
  }
}


/***/ }),

/***/ "../../graphql/type/definition.mjs":
/*!********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/type/definition.mjs ***!
  \********************************************************************/
/*! exports provided: isType, assertType, isScalarType, assertScalarType, isObjectType, assertObjectType, isInterfaceType, assertInterfaceType, isUnionType, assertUnionType, isEnumType, assertEnumType, isInputObjectType, assertInputObjectType, isListType, assertListType, isNonNullType, assertNonNullType, isInputType, assertInputType, isOutputType, assertOutputType, isLeafType, assertLeafType, isCompositeType, assertCompositeType, isAbstractType, assertAbstractType, GraphQLList, GraphQLNonNull, isWrappingType, assertWrappingType, isNullableType, assertNullableType, getNullableType, isNamedType, assertNamedType, getNamedType, GraphQLScalarType, GraphQLObjectType, argsToArgsConfig, isRequiredArgument, GraphQLInterfaceType, GraphQLUnionType, GraphQLEnumType, GraphQLInputObjectType, isRequiredInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertType", function() { return assertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScalarType", function() { return isScalarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertScalarType", function() { return assertScalarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectType", function() { return isObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertObjectType", function() { return assertObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInterfaceType", function() { return isInterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertInterfaceType", function() { return assertInterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnionType", function() { return isUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertUnionType", function() { return assertUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnumType", function() { return isEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertEnumType", function() { return assertEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInputObjectType", function() { return isInputObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertInputObjectType", function() { return assertInputObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isListType", function() { return isListType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertListType", function() { return assertListType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonNullType", function() { return isNonNullType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNonNullType", function() { return assertNonNullType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInputType", function() { return isInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertInputType", function() { return assertInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOutputType", function() { return isOutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertOutputType", function() { return assertOutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeafType", function() { return isLeafType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertLeafType", function() { return assertLeafType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCompositeType", function() { return isCompositeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertCompositeType", function() { return assertCompositeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAbstractType", function() { return isAbstractType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertAbstractType", function() { return assertAbstractType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLList", function() { return GraphQLList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLNonNull", function() { return GraphQLNonNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWrappingType", function() { return isWrappingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertWrappingType", function() { return assertWrappingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullableType", function() { return isNullableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNullableType", function() { return assertNullableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNullableType", function() { return getNullableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNamedType", function() { return isNamedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNamedType", function() { return assertNamedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNamedType", function() { return getNamedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLScalarType", function() { return GraphQLScalarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLObjectType", function() { return GraphQLObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argsToArgsConfig", function() { return argsToArgsConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequiredArgument", function() { return isRequiredArgument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInterfaceType", function() { return GraphQLInterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLUnionType", function() { return GraphQLUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLEnumType", function() { return GraphQLEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInputObjectType", function() { return GraphQLInputObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequiredInputField", function() { return isRequiredInputField; });
/* harmony import */ var _polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries */ "../../graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/keyMap */ "../../graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/mapValue */ "../../graphql/jsutils/mapValue.mjs");
/* harmony import */ var _jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/toObjMap */ "../../graphql/jsutils/toObjMap.mjs");
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/devAssert */ "../../graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/keyValMap */ "../../graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/instanceOf */ "../../graphql/jsutils/instanceOf.mjs");
/* harmony import */ var _jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/isObjectLike */ "../../graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_identityFunc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../jsutils/identityFunc */ "../../graphql/jsutils/identityFunc.mjs");
/* harmony import */ var _jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jsutils/defineToJSON */ "../../graphql/jsutils/defineToJSON.mjs");
/* harmony import */ var _jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../jsutils/defineToStringTag */ "../../graphql/jsutils/defineToStringTag.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _utilities_valueFromASTUntyped__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utilities/valueFromASTUntyped */ "../../graphql/utilities/valueFromASTUntyped.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function isType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
}
function assertType(type) {
  if (!isType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL type."));
  }

  return type;
}
/**
 * There are predicates for each kind of GraphQL type.
 */

// eslint-disable-next-line no-redeclare
function isScalarType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLScalarType);
}
function assertScalarType(type) {
  if (!isScalarType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL Scalar type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isObjectType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLObjectType);
}
function assertObjectType(type) {
  if (!isObjectType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL Object type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isInterfaceType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLInterfaceType);
}
function assertInterfaceType(type) {
  if (!isInterfaceType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL Interface type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isUnionType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLUnionType);
}
function assertUnionType(type) {
  if (!isUnionType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL Union type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isEnumType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLEnumType);
}
function assertEnumType(type) {
  if (!isEnumType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL Enum type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isInputObjectType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLInputObjectType);
}
function assertInputObjectType(type) {
  if (!isInputObjectType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL Input Object type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isListType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLList);
}
function assertListType(type) {
  if (!isListType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL List type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isNonNullType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLNonNull);
}
function assertNonNullType(type) {
  if (!isNonNullType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL Non-Null type."));
  }

  return type;
}
/**
 * These types may be used as input types for arguments and directives.
 */

function isInputType(type) {
  return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
}
function assertInputType(type) {
  if (!isInputType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL input type."));
  }

  return type;
}
/**
 * These types may be used as output types as the result of fields.
 */

function isOutputType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
}
function assertOutputType(type) {
  if (!isOutputType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL output type."));
  }

  return type;
}
/**
 * These types may describe types which may be leaf values.
 */

function isLeafType(type) {
  return isScalarType(type) || isEnumType(type);
}
function assertLeafType(type) {
  if (!isLeafType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL leaf type."));
  }

  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */

function isCompositeType(type) {
  return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
}
function assertCompositeType(type) {
  if (!isCompositeType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL composite type."));
  }

  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */

function isAbstractType(type) {
  return isInterfaceType(type) || isUnionType(type);
}
function assertAbstractType(type) {
  if (!isAbstractType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL abstract type."));
  }

  return type;
}
/**
 * List Type Wrapper
 *
 * A list is a wrapping type which points to another type.
 * Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         parents: { type: GraphQLList(PersonType) },
 *         children: { type: GraphQLList(PersonType) },
 *       })
 *     })
 *
 */

// eslint-disable-next-line no-redeclare
function GraphQLList(ofType) {
  if (this instanceof GraphQLList) {
    this.ofType = assertType(ofType);
  } else {
    return new GraphQLList(ofType);
  }
} // Need to cast through any to alter the prototype.

GraphQLList.prototype.toString = function toString() {
  return '[' + String(this.ofType) + ']';
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLList);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLList);
/**
 * Non-Null Type Wrapper
 *
 * A non-null is a wrapping type which points to another type.
 * Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 *     const RowType = new GraphQLObjectType({
 *       name: 'Row',
 *       fields: () => ({
 *         id: { type: GraphQLNonNull(GraphQLString) },
 *       })
 *     })
 *
 * Note: the enforcement of non-nullability occurs within the executor.
 */

// eslint-disable-next-line no-redeclare
function GraphQLNonNull(ofType) {
  if (this instanceof GraphQLNonNull) {
    this.ofType = assertNullableType(ofType);
  } else {
    return new GraphQLNonNull(ofType);
  }
} // Need to cast through any to alter the prototype.

GraphQLNonNull.prototype.toString = function toString() {
  return String(this.ofType) + '!';
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLNonNull);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLNonNull);
/**
 * These types wrap and modify other types
 */

function isWrappingType(type) {
  return isListType(type) || isNonNullType(type);
}
function assertWrappingType(type) {
  if (!isWrappingType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL wrapping type."));
  }

  return type;
}
/**
 * These types can all accept null as a value.
 */

function isNullableType(type) {
  return isType(type) && !isNonNullType(type);
}
function assertNullableType(type) {
  if (!isNullableType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL nullable type."));
  }

  return type;
}
/* eslint-disable no-redeclare */

function getNullableType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    return isNonNullType(type) ? type.ofType : type;
  }
}
/**
 * These named types do not include modifiers like List or NonNull.
 */

function isNamedType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type);
}
function assertNamedType(type) {
  if (!isNamedType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL named type."));
  }

  return type;
}
/* eslint-disable no-redeclare */

function getNamedType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    var unwrappedType = type;

    while (isWrappingType(unwrappedType)) {
      unwrappedType = unwrappedType.ofType;
    }

    return unwrappedType;
  }
}
/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */

function resolveThunk(thunk) {
  // $FlowFixMe(>=0.90.0)
  return typeof thunk === 'function' ? thunk() : thunk;
}

function undefineIfEmpty(arr) {
  return arr && arr.length > 0 ? arr : undefined;
}
/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * If a type's serialize function does not return a value (i.e. it returns
 * `undefined`) then an error will be raised and a `null` value will be returned
 * in the response. If the serialize function returns `null`, then no error will
 * be included in the response.
 *
 * Example:
 *
 *     const OddType = new GraphQLScalarType({
 *       name: 'Odd',
 *       serialize(value) {
 *         if (value % 2 === 1) {
 *           return value;
 *         }
 *       }
 *     });
 *
 */


var GraphQLScalarType =
/*#__PURE__*/
function () {
  function GraphQLScalarType(config) {
    var parseValue = config.parseValue || _jsutils_identityFunc__WEBPACK_IMPORTED_MODULE_9__["default"];
    this.name = config.name;
    this.description = config.description;
    this.serialize = config.serialize || _jsutils_identityFunc__WEBPACK_IMPORTED_MODULE_9__["default"];
    this.parseValue = parseValue;

    this.parseLiteral = config.parseLiteral || function (node) {
      return parseValue(Object(_utilities_valueFromASTUntyped__WEBPACK_IMPORTED_MODULE_13__["valueFromASTUntyped"])(node));
    };

    this.extensions = config.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    typeof config.name === 'string' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.');
    config.serialize == null || typeof config.serialize === 'function' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide \"serialize\" function. If this custom Scalar is also used as an input type, ensure \"parseValue\" and \"parseLiteral\" functions are also provided."));

    if (config.parseLiteral) {
      typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide both \"parseValue\" and \"parseLiteral\" functions."));
    }
  }

  var _proto = GraphQLScalarType.prototype;

  _proto.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      serialize: this.serialize,
      parseValue: this.parseValue,
      parseLiteral: this.parseLiteral,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto.toString = function toString() {
    return this.name;
  };

  return GraphQLScalarType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLScalarType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLScalarType);

/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 *     const AddressType = new GraphQLObjectType({
 *       name: 'Address',
 *       fields: {
 *         street: { type: GraphQLString },
 *         number: { type: GraphQLInt },
 *         formatted: {
 *           type: GraphQLString,
 *           resolve(obj) {
 *             return obj.number + ' ' + obj.street
 *           }
 *         }
 *       }
 *     });
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         name: { type: GraphQLString },
 *         bestFriend: { type: PersonType },
 *       })
 *     });
 *
 */
var GraphQLObjectType =
/*#__PURE__*/
function () {
  function GraphQLObjectType(config) {
    this.name = config.name;
    this.description = config.description;
    this.isTypeOf = config.isTypeOf;
    this.extensions = config.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineFieldMap.bind(undefined, config);
    this._interfaces = defineInterfaces.bind(undefined, config);
    typeof config.name === 'string' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.');
    config.isTypeOf == null || typeof config.isTypeOf === 'function' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide \"isTypeOf\" as a function, ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(config.isTypeOf), "."));
  }

  var _proto2 = GraphQLObjectType.prototype;

  _proto2.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto2.getInterfaces = function getInterfaces() {
    if (typeof this._interfaces === 'function') {
      this._interfaces = this._interfaces();
    }

    return this._interfaces;
  };

  _proto2.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: fieldsToFieldsConfig(this.getFields()),
      isTypeOf: this.isTypeOf,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto2.toString = function toString() {
    return this.name;
  };

  return GraphQLObjectType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLObjectType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLObjectType);

function defineInterfaces(config) {
  var interfaces = resolveThunk(config.interfaces) || [];
  Array.isArray(interfaces) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, " interfaces must be an Array or a function which returns an Array."));
  return interfaces;
}

function defineFieldMap(config) {
  var fieldMap = resolveThunk(config.fields) || {};
  isPlainObj(fieldMap) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
  return Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__["default"])(fieldMap, function (fieldConfig, fieldName) {
    isPlainObj(fieldConfig) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " field config must be an object"));
    !('isDeprecated' in fieldConfig) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " should provide \"deprecationReason\" instead of \"isDeprecated\"."));
    fieldConfig.resolve == null || typeof fieldConfig.resolve === 'function' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " field resolver must be a function if ") + "provided, but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(fieldConfig.resolve), "."));
    var argsConfig = fieldConfig.args || {};
    isPlainObj(argsConfig) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " args must be an object with argument names as keys."));
    var args = Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__["default"])(argsConfig).map(function (_ref) {
      var argName = _ref[0],
          arg = _ref[1];
      return {
        name: argName,
        description: arg.description === undefined ? null : arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        extensions: arg.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(arg.extensions),
        astNode: arg.astNode
      };
    });
    return _objectSpread({}, fieldConfig, {
      name: fieldName,
      description: fieldConfig.description,
      type: fieldConfig.type,
      args: args,
      resolve: fieldConfig.resolve,
      subscribe: fieldConfig.subscribe,
      isDeprecated: Boolean(fieldConfig.deprecationReason),
      deprecationReason: fieldConfig.deprecationReason,
      extensions: fieldConfig.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(fieldConfig.extensions),
      astNode: fieldConfig.astNode
    });
  });
}

function isPlainObj(obj) {
  return Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_8__["default"])(obj) && !Array.isArray(obj);
}

function fieldsToFieldsConfig(fields) {
  return Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__["default"])(fields, function (field) {
    return {
      description: field.description,
      type: field.type,
      args: argsToArgsConfig(field.args),
      resolve: field.resolve,
      subscribe: field.subscribe,
      deprecationReason: field.deprecationReason,
      extensions: field.extensions,
      astNode: field.astNode
    };
  });
}

function argsToArgsConfig(args) {
  return Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_6__["default"])(args, function (arg) {
    return arg.name;
  }, function (arg) {
    return {
      description: arg.description,
      type: arg.type,
      defaultValue: arg.defaultValue,
      extensions: arg.extensions,
      astNode: arg.astNode
    };
  });
}
function isRequiredArgument(arg) {
  return isNonNullType(arg.type) && arg.defaultValue === undefined;
}

/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 *     const EntityType = new GraphQLInterfaceType({
 *       name: 'Entity',
 *       fields: {
 *         name: { type: GraphQLString }
 *       }
 *     });
 *
 */
var GraphQLInterfaceType =
/*#__PURE__*/
function () {
  function GraphQLInterfaceType(config) {
    this.name = config.name;
    this.description = config.description;
    this.resolveType = config.resolveType;
    this.extensions = config.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineFieldMap.bind(undefined, config);
    typeof config.name === 'string' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.');
    config.resolveType == null || typeof config.resolveType === 'function' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(config.resolveType), "."));
  }

  var _proto3 = GraphQLInterfaceType.prototype;

  _proto3.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto3.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      fields: fieldsToFieldsConfig(this.getFields()),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto3.toString = function toString() {
    return this.name;
  };

  return GraphQLInterfaceType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLInterfaceType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLInterfaceType);

/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 *     const PetType = new GraphQLUnionType({
 *       name: 'Pet',
 *       types: [ DogType, CatType ],
 *       resolveType(value) {
 *         if (value instanceof Dog) {
 *           return DogType;
 *         }
 *         if (value instanceof Cat) {
 *           return CatType;
 *         }
 *       }
 *     });
 *
 */
var GraphQLUnionType =
/*#__PURE__*/
function () {
  function GraphQLUnionType(config) {
    this.name = config.name;
    this.description = config.description;
    this.resolveType = config.resolveType;
    this.extensions = config.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._types = defineTypes.bind(undefined, config);
    typeof config.name === 'string' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.');
    config.resolveType == null || typeof config.resolveType === 'function' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(config.resolveType), "."));
  }

  var _proto4 = GraphQLUnionType.prototype;

  _proto4.getTypes = function getTypes() {
    if (typeof this._types === 'function') {
      this._types = this._types();
    }

    return this._types;
  };

  _proto4.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      types: this.getTypes(),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto4.toString = function toString() {
    return this.name;
  };

  return GraphQLUnionType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLUnionType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLUnionType);

function defineTypes(config) {
  var types = resolveThunk(config.types) || [];
  Array.isArray(types) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Must provide Array of types or a function which returns such an array for Union ".concat(config.name, "."));
  return types;
}

/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 *     const RGBType = new GraphQLEnumType({
 *       name: 'RGB',
 *       values: {
 *         RED: { value: 0 },
 *         GREEN: { value: 1 },
 *         BLUE: { value: 2 }
 *       }
 *     });
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */
var GraphQLEnumType
/* <T> */
=
/*#__PURE__*/
function () {
  function GraphQLEnumType(config) {
    this.name = config.name;
    this.description = config.description;
    this.extensions = config.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._values = defineEnumValues(this.name, config.values);
    this._valueLookup = new Map(this._values.map(function (enumValue) {
      return [enumValue.value, enumValue];
    }));
    this._nameLookup = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_2__["default"])(this._values, function (value) {
      return value.name;
    });
    typeof config.name === 'string' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.');
  }

  var _proto5 = GraphQLEnumType.prototype;

  _proto5.getValues = function getValues() {
    return this._values;
  };

  _proto5.getValue = function getValue(name) {
    return this._nameLookup[name];
  };

  _proto5.serialize = function serialize(value) {
    var enumValue = this._valueLookup.get(value);

    if (enumValue) {
      return enumValue.name;
    }
  };

  _proto5.parseValue = function parseValue(value)
  /* T */
  {
    if (typeof value === 'string') {
      var enumValue = this.getValue(value);

      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  _proto5.parseLiteral = function parseLiteral(valueNode, _variables)
  /* T */
  {
    // Note: variables will be resolved to a value before calling this function.
    if (valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_12__["Kind"].ENUM) {
      var enumValue = this.getValue(valueNode.value);

      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  _proto5.toConfig = function toConfig() {
    var values = Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_6__["default"])(this.getValues(), function (value) {
      return value.name;
    }, function (value) {
      return {
        description: value.description,
        value: value.value,
        deprecationReason: value.deprecationReason,
        extensions: value.extensions,
        astNode: value.astNode
      };
    });
    return {
      name: this.name,
      description: this.description,
      values: values,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto5.toString = function toString() {
    return this.name;
  };

  return GraphQLEnumType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLEnumType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLEnumType);

function defineEnumValues(typeName, valueMap) {
  isPlainObj(valueMap) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(typeName, " values must be an object with value names as keys."));
  return Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__["default"])(valueMap).map(function (_ref2) {
    var valueName = _ref2[0],
        value = _ref2[1];
    isPlainObj(value) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(typeName, ".").concat(valueName, " must refer to an object with a \"value\" key ") + "representing an internal value but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(value), "."));
    !('isDeprecated' in value) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(typeName, ".").concat(valueName, " should provide \"deprecationReason\" instead of \"isDeprecated\"."));
    return {
      name: valueName,
      description: value.description,
      value: 'value' in value ? value.value : valueName,
      isDeprecated: Boolean(value.deprecationReason),
      deprecationReason: value.deprecationReason,
      extensions: value.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(value.extensions),
      astNode: value.astNode
    };
  });
}

/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 *     const GeoPoint = new GraphQLInputObjectType({
 *       name: 'GeoPoint',
 *       fields: {
 *         lat: { type: GraphQLNonNull(GraphQLFloat) },
 *         lon: { type: GraphQLNonNull(GraphQLFloat) },
 *         alt: { type: GraphQLFloat, defaultValue: 0 },
 *       }
 *     });
 *
 */
var GraphQLInputObjectType =
/*#__PURE__*/
function () {
  function GraphQLInputObjectType(config) {
    this.name = config.name;
    this.description = config.description;
    this.extensions = config.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineInputFieldMap.bind(undefined, config);
    typeof config.name === 'string' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.');
  }

  var _proto6 = GraphQLInputObjectType.prototype;

  _proto6.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto6.toConfig = function toConfig() {
    var fields = Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__["default"])(this.getFields(), function (field) {
      return {
        description: field.description,
        type: field.type,
        defaultValue: field.defaultValue,
        extensions: field.extensions,
        astNode: field.astNode
      };
    });
    return {
      name: this.name,
      description: this.description,
      fields: fields,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto6.toString = function toString() {
    return this.name;
  };

  return GraphQLInputObjectType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLInputObjectType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLInputObjectType);

function defineInputFieldMap(config) {
  var fieldMap = resolveThunk(config.fields) || {};
  isPlainObj(fieldMap) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
  return Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__["default"])(fieldMap, function (fieldConfig, fieldName) {
    !('resolve' in fieldConfig) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " field has a resolve property, but Input Types cannot define resolvers."));
    return _objectSpread({}, fieldConfig, {
      name: fieldName,
      description: fieldConfig.description,
      type: fieldConfig.type,
      defaultValue: fieldConfig.defaultValue,
      extensions: fieldConfig.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(fieldConfig.extensions),
      astNode: fieldConfig.astNode
    });
  });
}

function isRequiredInputField(field) {
  return isNonNullType(field.type) && field.defaultValue === undefined;
}


/***/ }),

/***/ "../../graphql/type/directives.mjs":
/*!********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/type/directives.mjs ***!
  \********************************************************************/
/*! exports provided: isDirective, assertDirective, GraphQLDirective, GraphQLIncludeDirective, GraphQLSkipDirective, DEFAULT_DEPRECATION_REASON, GraphQLDeprecatedDirective, specifiedDirectives, isSpecifiedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertDirective", function() { return assertDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLDirective", function() { return GraphQLDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLIncludeDirective", function() { return GraphQLIncludeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLSkipDirective", function() { return GraphQLSkipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DEPRECATION_REASON", function() { return DEFAULT_DEPRECATION_REASON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLDeprecatedDirective", function() { return GraphQLDeprecatedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedDirectives", function() { return specifiedDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedDirective", function() { return isSpecifiedDirective; });
/* harmony import */ var _polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries */ "../../graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/toObjMap */ "../../graphql/jsutils/toObjMap.mjs");
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/devAssert */ "../../graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/instanceOf */ "../../graphql/jsutils/instanceOf.mjs");
/* harmony import */ var _jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/defineToJSON */ "../../graphql/jsutils/defineToJSON.mjs");
/* harmony import */ var _jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/isObjectLike */ "../../graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/defineToStringTag */ "../../graphql/jsutils/defineToStringTag.mjs");
/* harmony import */ var _language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../language/directiveLocation */ "../../graphql/language/directiveLocation.mjs");
/* harmony import */ var _scalars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scalars */ "../../graphql/type/scalars.mjs");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./definition */ "../../graphql/type/definition.mjs");











/**
 * Test if the given value is a GraphQL directive.
 */

// eslint-disable-next-line no-redeclare
function isDirective(directive) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_4__["default"])(directive, GraphQLDirective);
}
function assertDirective(directive) {
  if (!isDirective(directive)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(directive), " to be a GraphQL directive."));
  }

  return directive;
}
/**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */

var GraphQLDirective =
/*#__PURE__*/
function () {
  function GraphQLDirective(config) {
    this.name = config.name;
    this.description = config.description;
    this.locations = config.locations;
    this.isRepeatable = config.isRepeatable != null && config.isRepeatable;
    this.extensions = config.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_2__["default"])(config.extensions);
    this.astNode = config.astNode;
    config.name || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_3__["default"])(0, 'Directive must be named.');
    Array.isArray(config.locations) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_3__["default"])(0, "@".concat(config.name, " locations must be an Array."));
    var args = config.args || {};
    Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_6__["default"])(args) && !Array.isArray(args) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_3__["default"])(0, "@".concat(config.name, " args must be an object with argument names as keys."));
    this.args = Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__["default"])(args).map(function (_ref) {
      var argName = _ref[0],
          arg = _ref[1];
      return {
        name: argName,
        description: arg.description === undefined ? null : arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        extensions: arg.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_2__["default"])(arg.extensions),
        astNode: arg.astNode
      };
    });
  }

  var _proto = GraphQLDirective.prototype;

  _proto.toString = function toString() {
    return '@' + this.name;
  };

  _proto.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: Object(_definition__WEBPACK_IMPORTED_MODULE_10__["argsToArgsConfig"])(this.args),
      isRepeatable: this.isRepeatable,
      extensions: this.extensions,
      astNode: this.astNode
    };
  };

  return GraphQLDirective;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_7__["default"])(GraphQLDirective);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_5__["default"])(GraphQLDirective);

/**
 * Used to conditionally include fields or fragments.
 */
var GraphQLIncludeDirective = new GraphQLDirective({
  name: 'include',
  description: 'Directs the executor to include this field or fragment only when the `if` argument is true.',
  locations: [_language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FIELD, _language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FRAGMENT_SPREAD, _language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].INLINE_FRAGMENT],
  args: {
    if: {
      type: Object(_definition__WEBPACK_IMPORTED_MODULE_10__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_9__["GraphQLBoolean"]),
      description: 'Included when true.'
    }
  }
});
/**
 * Used to conditionally skip (exclude) fields or fragments.
 */

var GraphQLSkipDirective = new GraphQLDirective({
  name: 'skip',
  description: 'Directs the executor to skip this field or fragment when the `if` argument is true.',
  locations: [_language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FIELD, _language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FRAGMENT_SPREAD, _language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].INLINE_FRAGMENT],
  args: {
    if: {
      type: Object(_definition__WEBPACK_IMPORTED_MODULE_10__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_9__["GraphQLBoolean"]),
      description: 'Skipped when true.'
    }
  }
});
/**
 * Constant string used for default reason for a deprecation.
 */

var DEFAULT_DEPRECATION_REASON = 'No longer supported';
/**
 * Used to declare element of a GraphQL schema as deprecated.
 */

var GraphQLDeprecatedDirective = new GraphQLDirective({
  name: 'deprecated',
  description: 'Marks an element of a GraphQL schema as no longer supported.',
  locations: [_language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FIELD_DEFINITION, _language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].ENUM_VALUE],
  args: {
    reason: {
      type: _scalars__WEBPACK_IMPORTED_MODULE_9__["GraphQLString"],
      description: 'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/).',
      defaultValue: DEFAULT_DEPRECATION_REASON
    }
  }
});
/**
 * The full list of specified directives.
 */

var specifiedDirectives = Object.freeze([GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective]);
function isSpecifiedDirective(directive) {
  return isDirective(directive) && specifiedDirectives.some(function (_ref2) {
    var name = _ref2.name;
    return name === directive.name;
  });
}


/***/ }),

/***/ "../../graphql/type/index.mjs":
/*!***************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/type/index.mjs ***!
  \***************************************************************/
/*! exports provided: isSchema, assertSchema, GraphQLSchema, isType, isScalarType, isObjectType, isInterfaceType, isUnionType, isEnumType, isInputObjectType, isListType, isNonNullType, isInputType, isOutputType, isLeafType, isCompositeType, isAbstractType, isWrappingType, isNullableType, isNamedType, isRequiredArgument, isRequiredInputField, assertType, assertScalarType, assertObjectType, assertInterfaceType, assertUnionType, assertEnumType, assertInputObjectType, assertListType, assertNonNullType, assertInputType, assertOutputType, assertLeafType, assertCompositeType, assertAbstractType, assertWrappingType, assertNullableType, assertNamedType, getNullableType, getNamedType, GraphQLScalarType, GraphQLObjectType, GraphQLInterfaceType, GraphQLUnionType, GraphQLEnumType, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, isDirective, assertDirective, GraphQLDirective, isSpecifiedDirective, specifiedDirectives, GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective, DEFAULT_DEPRECATION_REASON, isSpecifiedScalarType, specifiedScalarTypes, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLBoolean, GraphQLID, isIntrospectionType, introspectionTypes, __Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind, TypeKind, SchemaMetaFieldDef, TypeMetaFieldDef, TypeNameMetaFieldDef, validateSchema, assertValidSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "../../graphql/type/schema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSchema", function() { return _schema__WEBPACK_IMPORTED_MODULE_0__["isSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertSchema", function() { return _schema__WEBPACK_IMPORTED_MODULE_0__["assertSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLSchema", function() { return _schema__WEBPACK_IMPORTED_MODULE_0__["GraphQLSchema"]; });

/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition */ "../../graphql/type/definition.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isScalarType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInterfaceType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUnionType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnumType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputObjectType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isListType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isListType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNonNullType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isNonNullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isInputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOutputType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLeafType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isLeafType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCompositeType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isCompositeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAbstractType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isAbstractType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWrappingType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isWrappingType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullableType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNamedType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRequiredArgument", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isRequiredArgument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRequiredInputField", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isRequiredInputField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertScalarType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertObjectType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInterfaceType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertUnionType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertEnumType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInputObjectType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertListType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertListType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNonNullType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertNonNullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInputType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertInputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertOutputType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertLeafType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertLeafType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertCompositeType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertCompositeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertAbstractType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertAbstractType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertWrappingType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertWrappingType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNullableType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNamedType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNullableType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["getNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNamedType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["getNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLScalarType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLObjectType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInterfaceType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLUnionType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLEnumType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInputObjectType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLList", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLNonNull", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLNonNull"]; });

/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives */ "../../graphql/type/directives.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["assertDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["GraphQLDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["isSpecifiedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedDirectives", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["specifiedDirectives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLIncludeDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["GraphQLIncludeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLSkipDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["GraphQLSkipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLDeprecatedDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["GraphQLDeprecatedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DEPRECATION_REASON", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_DEPRECATION_REASON"]; });

/* harmony import */ var _scalars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scalars */ "../../graphql/type/scalars.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedScalarType", function() { return _scalars__WEBPACK_IMPORTED_MODULE_3__["isSpecifiedScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedScalarTypes", function() { return _scalars__WEBPACK_IMPORTED_MODULE_3__["specifiedScalarTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInt", function() { return _scalars__WEBPACK_IMPORTED_MODULE_3__["GraphQLInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLFloat", function() { return _scalars__WEBPACK_IMPORTED_MODULE_3__["GraphQLFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLString", function() { return _scalars__WEBPACK_IMPORTED_MODULE_3__["GraphQLString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLBoolean", function() { return _scalars__WEBPACK_IMPORTED_MODULE_3__["GraphQLBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLID", function() { return _scalars__WEBPACK_IMPORTED_MODULE_3__["GraphQLID"]; });

/* harmony import */ var _introspection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./introspection */ "../../graphql/type/introspection.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIntrospectionType", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["isIntrospectionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionTypes", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["introspectionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Schema", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__Schema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Directive", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__DirectiveLocation", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__DirectiveLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Type", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Field", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__Field"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__InputValue", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__InputValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__EnumValue", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__EnumValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__TypeKind", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__TypeKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeKind", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["TypeKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchemaMetaFieldDef", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["SchemaMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeMetaFieldDef", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["TypeMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeNameMetaFieldDef", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["TypeNameMetaFieldDef"]; });

/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validate */ "../../graphql/type/validate.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateSchema", function() { return _validate__WEBPACK_IMPORTED_MODULE_5__["validateSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertValidSchema", function() { return _validate__WEBPACK_IMPORTED_MODULE_5__["assertValidSchema"]; });




// Common built-in scalar instances.


// Validate GraphQL schema.



/***/ }),

/***/ "../../graphql/type/introspection.mjs":
/*!***********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/type/introspection.mjs ***!
  \***********************************************************************/
/*! exports provided: __Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, TypeKind, __TypeKind, SchemaMetaFieldDef, TypeMetaFieldDef, TypeNameMetaFieldDef, introspectionTypes, isIntrospectionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Schema", function() { return __Schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Directive", function() { return __Directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DirectiveLocation", function() { return __DirectiveLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Type", function() { return __Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Field", function() { return __Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__InputValue", function() { return __InputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__EnumValue", function() { return __EnumValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeKind", function() { return TypeKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__TypeKind", function() { return __TypeKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaMetaFieldDef", function() { return SchemaMetaFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeMetaFieldDef", function() { return TypeMetaFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeNameMetaFieldDef", function() { return TypeNameMetaFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introspectionTypes", function() { return introspectionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIntrospectionType", function() { return isIntrospectionType; });
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues */ "../../graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/invariant */ "../../graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/printer */ "../../graphql/language/printer.mjs");
/* harmony import */ var _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/directiveLocation */ "../../graphql/language/directiveLocation.mjs");
/* harmony import */ var _utilities_astFromValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/astFromValue */ "../../graphql/utilities/astFromValue.mjs");
/* harmony import */ var _scalars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scalars */ "../../graphql/type/scalars.mjs");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./definition */ "../../graphql/type/definition.mjs");








var __Schema = new _definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
  name: '__Schema',
  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
  fields: function fields() {
    return {
      types: {
        description: 'A list of all types supported by this server.',
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Type))),
        resolve: function resolve(schema) {
          return Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(schema.getTypeMap());
        }
      },
      queryType: {
        description: 'The type that query operations will be rooted at.',
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Type),
        resolve: function resolve(schema) {
          return schema.getQueryType();
        }
      },
      mutationType: {
        description: 'If this server supports mutation, the type that mutation operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getMutationType();
        }
      },
      subscriptionType: {
        description: 'If this server support subscription, the type that subscription operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getSubscriptionType();
        }
      },
      directives: {
        description: 'A list of all directives supported by this server.',
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Directive))),
        resolve: function resolve(schema) {
          return schema.getDirectives();
        }
      }
    };
  }
});
var __Directive = new _definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
  name: '__Directive',
  description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
  fields: function fields() {
    return {
      name: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"]),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      locations: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__DirectiveLocation))),
        resolve: function resolve(obj) {
          return obj.locations;
        }
      },
      args: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__InputValue))),
        resolve: function resolve(directive) {
          return directive.args;
        }
      }
    };
  }
});
var __DirectiveLocation = new _definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLEnumType"]({
  name: '__DirectiveLocation',
  description: 'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
  values: {
    QUERY: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].QUERY,
      description: 'Location adjacent to a query operation.'
    },
    MUTATION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].MUTATION,
      description: 'Location adjacent to a mutation operation.'
    },
    SUBSCRIPTION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].SUBSCRIPTION,
      description: 'Location adjacent to a subscription operation.'
    },
    FIELD: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].FIELD,
      description: 'Location adjacent to a field.'
    },
    FRAGMENT_DEFINITION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].FRAGMENT_DEFINITION,
      description: 'Location adjacent to a fragment definition.'
    },
    FRAGMENT_SPREAD: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].FRAGMENT_SPREAD,
      description: 'Location adjacent to a fragment spread.'
    },
    INLINE_FRAGMENT: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].INLINE_FRAGMENT,
      description: 'Location adjacent to an inline fragment.'
    },
    VARIABLE_DEFINITION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].VARIABLE_DEFINITION,
      description: 'Location adjacent to a variable definition.'
    },
    SCHEMA: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].SCHEMA,
      description: 'Location adjacent to a schema definition.'
    },
    SCALAR: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].SCALAR,
      description: 'Location adjacent to a scalar definition.'
    },
    OBJECT: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].OBJECT,
      description: 'Location adjacent to an object type definition.'
    },
    FIELD_DEFINITION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].FIELD_DEFINITION,
      description: 'Location adjacent to a field definition.'
    },
    ARGUMENT_DEFINITION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].ARGUMENT_DEFINITION,
      description: 'Location adjacent to an argument definition.'
    },
    INTERFACE: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].INTERFACE,
      description: 'Location adjacent to an interface definition.'
    },
    UNION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].UNION,
      description: 'Location adjacent to a union definition.'
    },
    ENUM: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].ENUM,
      description: 'Location adjacent to an enum definition.'
    },
    ENUM_VALUE: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].ENUM_VALUE,
      description: 'Location adjacent to an enum value definition.'
    },
    INPUT_OBJECT: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].INPUT_OBJECT,
      description: 'Location adjacent to an input object type definition.'
    },
    INPUT_FIELD_DEFINITION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].INPUT_FIELD_DEFINITION,
      description: 'Location adjacent to an input object field definition.'
    }
  }
});
var __Type = new _definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
  name: '__Type',
  description: 'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
  fields: function fields() {
    return {
      kind: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__TypeKind),
        resolve: function resolve(type) {
          if (Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isScalarType"])(type)) {
            return TypeKind.SCALAR;
          } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isObjectType"])(type)) {
            return TypeKind.OBJECT;
          } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isInterfaceType"])(type)) {
            return TypeKind.INTERFACE;
          } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isUnionType"])(type)) {
            return TypeKind.UNION;
          } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isEnumType"])(type)) {
            return TypeKind.ENUM;
          } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isInputObjectType"])(type)) {
            return TypeKind.INPUT_OBJECT;
          } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isListType"])(type)) {
            return TypeKind.LIST;
          } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(type)) {
            return TypeKind.NON_NULL;
          } // Not reachable. All possible types have been considered.


          /* istanbul ignore next */
          Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "Unexpected type: \"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), "\"."));
        }
      },
      name: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.name !== undefined ? obj.name : undefined;
        }
      },
      description: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.description !== undefined ? obj.description : undefined;
        }
      },
      fields: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Field)),
        args: {
          includeDeprecated: {
            type: _scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLBoolean"],
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref) {
          var includeDeprecated = _ref.includeDeprecated;

          if (Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isObjectType"])(type) || Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isInterfaceType"])(type)) {
            var fields = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(type.getFields());

            if (!includeDeprecated) {
              fields = fields.filter(function (field) {
                return !field.deprecationReason;
              });
            }

            return fields;
          }

          return null;
        }
      },
      interfaces: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Type)),
        resolve: function resolve(type) {
          if (Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isObjectType"])(type)) {
            return type.getInterfaces();
          }
        }
      },
      possibleTypes: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Type)),
        resolve: function resolve(type, args, context, _ref2) {
          var schema = _ref2.schema;

          if (Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isAbstractType"])(type)) {
            return schema.getPossibleTypes(type);
          }
        }
      },
      enumValues: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__EnumValue)),
        args: {
          includeDeprecated: {
            type: _scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLBoolean"],
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref3) {
          var includeDeprecated = _ref3.includeDeprecated;

          if (Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isEnumType"])(type)) {
            var values = type.getValues();

            if (!includeDeprecated) {
              values = values.filter(function (value) {
                return !value.deprecationReason;
              });
            }

            return values;
          }
        }
      },
      inputFields: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__InputValue)),
        resolve: function resolve(type) {
          if (Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isInputObjectType"])(type)) {
            return Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(type.getFields());
          }
        }
      },
      ofType: {
        type: __Type,
        resolve: function resolve(obj) {
          return obj.ofType !== undefined ? obj.ofType : undefined;
        }
      }
    };
  }
});
var __Field = new _definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
  name: '__Field',
  description: 'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
  fields: function fields() {
    return {
      name: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"]),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      args: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__InputValue))),
        resolve: function resolve(field) {
          return field.args;
        }
      },
      type: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Type),
        resolve: function resolve(obj) {
          return obj.type;
        }
      },
      isDeprecated: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLBoolean"]),
        resolve: function resolve(obj) {
          return obj.isDeprecated;
        }
      },
      deprecationReason: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.deprecationReason;
        }
      }
    };
  }
});
var __InputValue = new _definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
  name: '__InputValue',
  description: 'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
  fields: function fields() {
    return {
      name: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"]),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      type: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Type),
        resolve: function resolve(obj) {
          return obj.type;
        }
      },
      defaultValue: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        description: 'A GraphQL-formatted string representing the default value for this input value.',
        resolve: function resolve(inputVal) {
          var valueAST = Object(_utilities_astFromValue__WEBPACK_IMPORTED_MODULE_5__["astFromValue"])(inputVal.defaultValue, inputVal.type);
          return valueAST ? Object(_language_printer__WEBPACK_IMPORTED_MODULE_3__["print"])(valueAST) : null;
        }
      }
    };
  }
});
var __EnumValue = new _definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
  name: '__EnumValue',
  description: 'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
  fields: function fields() {
    return {
      name: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"]),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      isDeprecated: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLBoolean"]),
        resolve: function resolve(obj) {
          return obj.isDeprecated;
        }
      },
      deprecationReason: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.deprecationReason;
        }
      }
    };
  }
});
var TypeKind = Object.freeze({
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  INPUT_OBJECT: 'INPUT_OBJECT',
  LIST: 'LIST',
  NON_NULL: 'NON_NULL'
});
var __TypeKind = new _definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLEnumType"]({
  name: '__TypeKind',
  description: 'An enum describing what kind of type a given `__Type` is.',
  values: {
    SCALAR: {
      value: TypeKind.SCALAR,
      description: 'Indicates this type is a scalar.'
    },
    OBJECT: {
      value: TypeKind.OBJECT,
      description: 'Indicates this type is an object. `fields` and `interfaces` are valid fields.'
    },
    INTERFACE: {
      value: TypeKind.INTERFACE,
      description: 'Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.'
    },
    UNION: {
      value: TypeKind.UNION,
      description: 'Indicates this type is a union. `possibleTypes` is a valid field.'
    },
    ENUM: {
      value: TypeKind.ENUM,
      description: 'Indicates this type is an enum. `enumValues` is a valid field.'
    },
    INPUT_OBJECT: {
      value: TypeKind.INPUT_OBJECT,
      description: 'Indicates this type is an input object. `inputFields` is a valid field.'
    },
    LIST: {
      value: TypeKind.LIST,
      description: 'Indicates this type is a list. `ofType` is a valid field.'
    },
    NON_NULL: {
      value: TypeKind.NON_NULL,
      description: 'Indicates this type is a non-null. `ofType` is a valid field.'
    }
  }
});
/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */

var SchemaMetaFieldDef = {
  name: '__schema',
  type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Schema),
  description: 'Access the current type schema of this server.',
  args: [],
  resolve: function resolve(source, args, context, _ref4) {
    var schema = _ref4.schema;
    return schema;
  },
  deprecationReason: undefined,
  extensions: undefined,
  astNode: undefined
};
var TypeMetaFieldDef = {
  name: '__type',
  type: __Type,
  description: 'Request the type information of a single type.',
  args: [{
    name: 'name',
    description: undefined,
    type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"]),
    defaultValue: undefined,
    extensions: undefined,
    astNode: undefined
  }],
  resolve: function resolve(source, _ref5, context, _ref6) {
    var name = _ref5.name;
    var schema = _ref6.schema;
    return schema.getType(name);
  },
  deprecationReason: undefined,
  extensions: undefined,
  astNode: undefined
};
var TypeNameMetaFieldDef = {
  name: '__typename',
  type: Object(_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"]),
  description: 'The name of the current Object type at runtime.',
  args: [],
  resolve: function resolve(source, args, context, _ref7) {
    var parentType = _ref7.parentType;
    return parentType.name;
  },
  deprecationReason: undefined,
  extensions: undefined,
  astNode: undefined
};
var introspectionTypes = Object.freeze([__Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind]);
function isIntrospectionType(type) {
  return Object(_definition__WEBPACK_IMPORTED_MODULE_7__["isNamedType"])(type) && introspectionTypes.some(function (_ref8) {
    var name = _ref8.name;
    return type.name === name;
  });
}


/***/ }),

/***/ "../../graphql/type/scalars.mjs":
/*!*****************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/type/scalars.mjs ***!
  \*****************************************************************/
/*! exports provided: GraphQLInt, GraphQLFloat, GraphQLString, GraphQLBoolean, GraphQLID, specifiedScalarTypes, isSpecifiedScalarType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInt", function() { return GraphQLInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLFloat", function() { return GraphQLFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLString", function() { return GraphQLString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLBoolean", function() { return GraphQLBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLID", function() { return GraphQLID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedScalarTypes", function() { return specifiedScalarTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedScalarType", function() { return isSpecifiedScalarType; });
/* harmony import */ var _polyfills_isFinite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/isFinite */ "../../graphql/polyfills/isFinite.mjs");
/* harmony import */ var _polyfills_isInteger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/isInteger */ "../../graphql/polyfills/isInteger.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/isObjectLike */ "../../graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./definition */ "../../graphql/type/definition.mjs");





 // As per the GraphQL Spec, Integers are only treated as valid when a valid
// 32-bit signed integer, providing the broadest support across platforms.
//
// n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
// they are internally represented as IEEE 754 doubles.

var MAX_INT = 2147483647;
var MIN_INT = -2147483648;

function serializeInt(value) {
  if (typeof value === 'boolean') {
    return value ? 1 : 0;
  }

  var num = value;

  if (typeof value === 'string' && value !== '') {
    num = Number(value);
  }

  if (!Object(_polyfills_isInteger__WEBPACK_IMPORTED_MODULE_1__["default"])(num)) {
    throw new TypeError("Int cannot represent non-integer value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  if (num > MAX_INT || num < MIN_INT) {
    throw new TypeError("Int cannot represent non 32-bit signed integer value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  return num;
}

function coerceInt(value) {
  if (!Object(_polyfills_isInteger__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    throw new TypeError("Int cannot represent non-integer value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  if (value > MAX_INT || value < MIN_INT) {
    throw new TypeError("Int cannot represent non 32-bit signed integer value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  return value;
}

var GraphQLInt = new _definition__WEBPACK_IMPORTED_MODULE_5__["GraphQLScalarType"]({
  name: 'Int',
  description: 'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
  serialize: serializeInt,
  parseValue: coerceInt,
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INT) {
      var num = parseInt(ast.value, 10);

      if (num <= MAX_INT && num >= MIN_INT) {
        return num;
      }
    }

    return undefined;
  }
});

function serializeFloat(value) {
  if (typeof value === 'boolean') {
    return value ? 1 : 0;
  }

  var num = value;

  if (typeof value === 'string' && value !== '') {
    num = Number(value);
  }

  if (!Object(_polyfills_isFinite__WEBPACK_IMPORTED_MODULE_0__["default"])(num)) {
    throw new TypeError("Float cannot represent non numeric value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  return num;
}

function coerceFloat(value) {
  if (!Object(_polyfills_isFinite__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    throw new TypeError("Float cannot represent non numeric value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  return value;
}

var GraphQLFloat = new _definition__WEBPACK_IMPORTED_MODULE_5__["GraphQLScalarType"]({
  name: 'Float',
  description: 'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',
  serialize: serializeFloat,
  parseValue: coerceFloat,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FLOAT || ast.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INT ? parseFloat(ast.value) : undefined;
  }
}); // Support serializing objects with custom valueOf() or toJSON() functions -
// a common way to represent a complex value which can be represented as
// a string (ex: MongoDB id objects).

function serializeObject(value) {
  if (Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
    if (typeof value.valueOf === 'function') {
      var valueOfResult = value.valueOf();

      if (!Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_3__["default"])(valueOfResult)) {
        return valueOfResult;
      }
    }

    if (typeof value.toJSON === 'function') {
      // $FlowFixMe(>=0.90.0)
      return value.toJSON();
    }
  }

  return value;
}

function serializeString(rawValue) {
  var value = serializeObject(rawValue); // Serialize string, boolean and number values to a string, but do not
  // attempt to coerce object, function, symbol, or other types as strings.

  if (typeof value === 'string') {
    return value;
  }

  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  if (Object(_polyfills_isFinite__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value.toString();
  }

  throw new TypeError("String cannot represent value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(rawValue)));
}

function coerceString(value) {
  if (typeof value !== 'string') {
    throw new TypeError("String cannot represent a non string value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  return value;
}

var GraphQLString = new _definition__WEBPACK_IMPORTED_MODULE_5__["GraphQLScalarType"]({
  name: 'String',
  description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
  serialize: serializeString,
  parseValue: coerceString,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].STRING ? ast.value : undefined;
  }
});

function serializeBoolean(value) {
  if (typeof value === 'boolean') {
    return value;
  }

  if (Object(_polyfills_isFinite__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value !== 0;
  }

  throw new TypeError("Boolean cannot represent a non boolean value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
}

function coerceBoolean(value) {
  if (typeof value !== 'boolean') {
    throw new TypeError("Boolean cannot represent a non boolean value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  return value;
}

var GraphQLBoolean = new _definition__WEBPACK_IMPORTED_MODULE_5__["GraphQLScalarType"]({
  name: 'Boolean',
  description: 'The `Boolean` scalar type represents `true` or `false`.',
  serialize: serializeBoolean,
  parseValue: coerceBoolean,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].BOOLEAN ? ast.value : undefined;
  }
});

function serializeID(rawValue) {
  var value = serializeObject(rawValue);

  if (typeof value === 'string') {
    return value;
  }

  if (Object(_polyfills_isInteger__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return String(value);
  }

  throw new TypeError("ID cannot represent value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(rawValue)));
}

function coerceID(value) {
  if (typeof value === 'string') {
    return value;
  }

  if (Object(_polyfills_isInteger__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return value.toString();
  }

  throw new TypeError("ID cannot represent value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
}

var GraphQLID = new _definition__WEBPACK_IMPORTED_MODULE_5__["GraphQLScalarType"]({
  name: 'ID',
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize: serializeID,
  parseValue: coerceID,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].STRING || ast.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INT ? ast.value : undefined;
  }
});
var specifiedScalarTypes = Object.freeze([GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID]);
function isSpecifiedScalarType(type) {
  return Object(_definition__WEBPACK_IMPORTED_MODULE_5__["isScalarType"])(type) && specifiedScalarTypes.some(function (_ref) {
    var name = _ref.name;
    return type.name === name;
  });
}


/***/ }),

/***/ "../../graphql/type/schema.mjs":
/*!****************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/type/schema.mjs ***!
  \****************************************************************/
/*! exports provided: isSchema, assertSchema, GraphQLSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSchema", function() { return isSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertSchema", function() { return assertSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLSchema", function() { return GraphQLSchema; });
/* harmony import */ var _polyfills_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/find */ "../../graphql/polyfills/find.mjs");
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectValues */ "../../graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/toObjMap */ "../../graphql/jsutils/toObjMap.mjs");
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/devAssert */ "../../graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/instanceOf */ "../../graphql/jsutils/instanceOf.mjs");
/* harmony import */ var _jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/isObjectLike */ "../../graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/defineToStringTag */ "../../graphql/jsutils/defineToStringTag.mjs");
/* harmony import */ var _introspection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./introspection */ "../../graphql/type/introspection.mjs");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives */ "../../graphql/type/directives.mjs");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./definition */ "../../graphql/type/definition.mjs");











/**
 * Test if the given value is a GraphQL schema.
 */

// eslint-disable-next-line no-redeclare
function isSchema(schema) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_5__["default"])(schema, GraphQLSchema);
}
function assertSchema(schema) {
  if (!isSchema(schema)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(schema), " to be a GraphQL schema."));
  }

  return schema;
}
/**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       query: MyAppQueryRootType,
 *       mutation: MyAppMutationRootType,
 *     })
 *
 * Note: When the schema is constructed, by default only the types that are
 * reachable by traversing the root types are included, other types must be
 * explicitly referenced.
 *
 * Example:
 *
 *     const characterInterface = new GraphQLInterfaceType({
 *       name: 'Character',
 *       ...
 *     });
 *
 *     const humanType = new GraphQLObjectType({
 *       name: 'Human',
 *       interfaces: [characterInterface],
 *       ...
 *     });
 *
 *     const droidType = new GraphQLObjectType({
 *       name: 'Droid',
 *       interfaces: [characterInterface],
 *       ...
 *     });
 *
 *     const schema = new GraphQLSchema({
 *       query: new GraphQLObjectType({
 *         name: 'Query',
 *         fields: {
 *           hero: { type: characterInterface, ... },
 *         }
 *       }),
 *       ...
 *       // Since this schema references only the `Character` interface it's
 *       // necessary to explicitly list the types that implement it if
 *       // you want them to be included in the final schema.
 *       types: [humanType, droidType],
 *     })
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. @include and
 * @skip) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       ...
 *       directives: specifiedDirectives.concat([ myCustomDirective ]),
 *     })
 *
 */

var GraphQLSchema =
/*#__PURE__*/
function () {
  // Used as a cache for validateSchema().
  // Referenced by validateSchema().
  function GraphQLSchema(config) {
    // If this schema was built from a source known to be valid, then it may be
    // marked with assumeValid to avoid an additional type system validation.
    if (config && config.assumeValid) {
      this.__validationErrors = [];
    } else {
      this.__validationErrors = undefined; // Otherwise check for common mistakes during construction to produce
      // clear and early error messages.

      Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_6__["default"])(config) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_4__["default"])(0, 'Must provide configuration object.');
      !config.types || Array.isArray(config.types) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_4__["default"])(0, "\"types\" must be Array if provided but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(config.types), "."));
      !config.directives || Array.isArray(config.directives) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_4__["default"])(0, '"directives" must be Array if provided but got: ' + "".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(config.directives), "."));
      !config.allowedLegacyNames || Array.isArray(config.allowedLegacyNames) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_4__["default"])(0, '"allowedLegacyNames" must be Array if provided but got: ' + "".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(config.allowedLegacyNames), "."));
    }

    this.extensions = config.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_3__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = config.extensionASTNodes;
    this.__allowedLegacyNames = config.allowedLegacyNames || [];
    this._queryType = config.query;
    this._mutationType = config.mutation;
    this._subscriptionType = config.subscription; // Provide specified directives (e.g. @include and @skip) by default.

    this._directives = config.directives || _directives__WEBPACK_IMPORTED_MODULE_9__["specifiedDirectives"]; // Build type map now to detect any errors within this schema.

    var initialTypes = [this._queryType, this._mutationType, this._subscriptionType, _introspection__WEBPACK_IMPORTED_MODULE_8__["__Schema"]].concat(config.types); // Keep track of all types referenced within the schema.

    var typeMap = Object.create(null); // First by deeply visiting all initial types.

    typeMap = initialTypes.reduce(typeMapReducer, typeMap); // Then by deeply visiting all directive types.

    typeMap = this._directives.reduce(typeMapDirectiveReducer, typeMap); // Storing the resulting map for reference by the schema.

    this._typeMap = typeMap;
    this._possibleTypeMap = Object.create(null); // Keep track of all implementations by interface name.

    this._implementations = Object.create(null);

    for (var _i2 = 0, _objectValues2 = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(this._typeMap); _i2 < _objectValues2.length; _i2++) {
      var type = _objectValues2[_i2];

      if (Object(_definition__WEBPACK_IMPORTED_MODULE_10__["isObjectType"])(type)) {
        for (var _i4 = 0, _type$getInterfaces2 = type.getInterfaces(); _i4 < _type$getInterfaces2.length; _i4++) {
          var iface = _type$getInterfaces2[_i4];

          if (Object(_definition__WEBPACK_IMPORTED_MODULE_10__["isInterfaceType"])(iface)) {
            var impls = this._implementations[iface.name];

            if (impls) {
              impls.push(type);
            } else {
              this._implementations[iface.name] = [type];
            }
          }
        }
      }
    }
  }

  var _proto = GraphQLSchema.prototype;

  _proto.getQueryType = function getQueryType() {
    return this._queryType;
  };

  _proto.getMutationType = function getMutationType() {
    return this._mutationType;
  };

  _proto.getSubscriptionType = function getSubscriptionType() {
    return this._subscriptionType;
  };

  _proto.getTypeMap = function getTypeMap() {
    return this._typeMap;
  };

  _proto.getType = function getType(name) {
    return this.getTypeMap()[name];
  };

  _proto.getPossibleTypes = function getPossibleTypes(abstractType) {
    if (Object(_definition__WEBPACK_IMPORTED_MODULE_10__["isUnionType"])(abstractType)) {
      return abstractType.getTypes();
    }

    return this._implementations[abstractType.name] || [];
  };

  _proto.isPossibleType = function isPossibleType(abstractType, possibleType) {
    if (this._possibleTypeMap[abstractType.name] == null) {
      var map = Object.create(null);

      for (var _i6 = 0, _this$getPossibleType2 = this.getPossibleTypes(abstractType); _i6 < _this$getPossibleType2.length; _i6++) {
        var type = _this$getPossibleType2[_i6];
        map[type.name] = true;
      }

      this._possibleTypeMap[abstractType.name] = map;
    }

    return Boolean(this._possibleTypeMap[abstractType.name][possibleType.name]);
  };

  _proto.getDirectives = function getDirectives() {
    return this._directives;
  };

  _proto.getDirective = function getDirective(name) {
    return Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(this.getDirectives(), function (directive) {
      return directive.name === name;
    });
  };

  _proto.toConfig = function toConfig() {
    return {
      query: this.getQueryType(),
      mutation: this.getMutationType(),
      subscription: this.getSubscriptionType(),
      types: Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(this.getTypeMap()),
      directives: this.getDirectives().slice(),
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || [],
      assumeValid: this.__validationErrors !== undefined,
      allowedLegacyNames: this.__allowedLegacyNames
    };
  };

  return GraphQLSchema;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_7__["default"])(GraphQLSchema);

function typeMapReducer(map, type) {
  if (!type) {
    return map;
  }

  var namedType = Object(_definition__WEBPACK_IMPORTED_MODULE_10__["getNamedType"])(type);
  var seenType = map[namedType.name];

  if (seenType) {
    if (seenType !== namedType) {
      throw new Error("Schema must contain uniquely named types but contains multiple types named \"".concat(namedType.name, "\"."));
    }

    return map;
  }

  map[namedType.name] = namedType;
  var reducedMap = map;

  if (Object(_definition__WEBPACK_IMPORTED_MODULE_10__["isUnionType"])(namedType)) {
    reducedMap = namedType.getTypes().reduce(typeMapReducer, reducedMap);
  }

  if (Object(_definition__WEBPACK_IMPORTED_MODULE_10__["isObjectType"])(namedType)) {
    reducedMap = namedType.getInterfaces().reduce(typeMapReducer, reducedMap);
  }

  if (Object(_definition__WEBPACK_IMPORTED_MODULE_10__["isObjectType"])(namedType) || Object(_definition__WEBPACK_IMPORTED_MODULE_10__["isInterfaceType"])(namedType)) {
    for (var _i8 = 0, _objectValues4 = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(namedType.getFields()); _i8 < _objectValues4.length; _i8++) {
      var field = _objectValues4[_i8];
      var fieldArgTypes = field.args.map(function (arg) {
        return arg.type;
      });
      reducedMap = fieldArgTypes.reduce(typeMapReducer, reducedMap);
      reducedMap = typeMapReducer(reducedMap, field.type);
    }
  }

  if (Object(_definition__WEBPACK_IMPORTED_MODULE_10__["isInputObjectType"])(namedType)) {
    for (var _i10 = 0, _objectValues6 = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(namedType.getFields()); _i10 < _objectValues6.length; _i10++) {
      var _field = _objectValues6[_i10];
      reducedMap = typeMapReducer(reducedMap, _field.type);
    }
  }

  return reducedMap;
}

function typeMapDirectiveReducer(map, directive) {
  // Directives are not validated until validateSchema() is called.
  if (!Object(_directives__WEBPACK_IMPORTED_MODULE_9__["isDirective"])(directive)) {
    return map;
  }

  return directive.args.reduce(function (_map, arg) {
    return typeMapReducer(_map, arg.type);
  }, map);
}


/***/ }),

/***/ "../../graphql/type/validate.mjs":
/*!******************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/type/validate.mjs ***!
  \******************************************************************/
/*! exports provided: validateSchema, assertValidSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSchema", function() { return validateSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidSchema", function() { return assertValidSchema; });
/* harmony import */ var _polyfills_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/find */ "../../graphql/polyfills/find.mjs");
/* harmony import */ var _polyfills_flatMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/flatMap */ "../../graphql/polyfills/flatMap.mjs");
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/objectValues */ "../../graphql/polyfills/objectValues.mjs");
/* harmony import */ var _polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfills/objectEntries */ "../../graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _utilities_assertValidName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/assertValidName */ "../../graphql/utilities/assertValidName.mjs");
/* harmony import */ var _utilities_typeComparators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/typeComparators */ "../../graphql/utilities/typeComparators.mjs");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives */ "../../graphql/type/directives.mjs");
/* harmony import */ var _introspection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./introspection */ "../../graphql/type/introspection.mjs");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schema */ "../../graphql/type/schema.mjs");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./definition */ "../../graphql/type/definition.mjs");












/**
 * Implements the "Type Validation" sub-sections of the specification's
 * "Type System" section.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the Schema is valid.
 */

function validateSchema(schema) {
  // First check to ensure the provided value is in fact a GraphQLSchema.
  Object(_schema__WEBPACK_IMPORTED_MODULE_10__["assertSchema"])(schema); // If this Schema has already been validated, return the previous results.

  if (schema.__validationErrors) {
    return schema.__validationErrors;
  } // Validate the schema, producing a list of errors.


  var context = new SchemaValidationContext(schema);
  validateRootTypes(context);
  validateDirectives(context);
  validateTypes(context); // Persist the results of validation before returning to ensure validation
  // does not run multiple times for this schema.

  var errors = context.getErrors();
  schema.__validationErrors = errors;
  return errors;
}
/**
 * Utility function which asserts a schema is valid by throwing an error if
 * it is invalid.
 */

function assertValidSchema(schema) {
  var errors = validateSchema(schema);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}

var SchemaValidationContext =
/*#__PURE__*/
function () {
  function SchemaValidationContext(schema) {
    this._errors = [];
    this.schema = schema;
  }

  var _proto = SchemaValidationContext.prototype;

  _proto.reportError = function reportError(message, nodes) {
    var _nodes = Array.isArray(nodes) ? nodes.filter(Boolean) : nodes;

    this.addError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_5__["GraphQLError"](message, _nodes));
  };

  _proto.addError = function addError(error) {
    this._errors.push(error);
  };

  _proto.getErrors = function getErrors() {
    return this._errors;
  };

  return SchemaValidationContext;
}();

function validateRootTypes(context) {
  var schema = context.schema;
  var queryType = schema.getQueryType();

  if (!queryType) {
    context.reportError('Query root type must be provided.', schema.astNode);
  } else if (!Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isObjectType"])(queryType)) {
    context.reportError("Query root type must be Object type, it cannot be ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(queryType), "."), getOperationTypeNode(schema, queryType, 'query'));
  }

  var mutationType = schema.getMutationType();

  if (mutationType && !Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isObjectType"])(mutationType)) {
    context.reportError('Mutation root type must be Object type if provided, it cannot be ' + "".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(mutationType), "."), getOperationTypeNode(schema, mutationType, 'mutation'));
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType && !Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isObjectType"])(subscriptionType)) {
    context.reportError('Subscription root type must be Object type if provided, it cannot be ' + "".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(subscriptionType), "."), getOperationTypeNode(schema, subscriptionType, 'subscription'));
  }
}

function getOperationTypeNode(schema, type, operation) {
  var operationNodes = getAllSubNodes(schema, function (node) {
    return node.operationTypes;
  });

  for (var _i2 = 0; _i2 < operationNodes.length; _i2++) {
    var node = operationNodes[_i2];

    if (node.operation === operation) {
      return node.type;
    }
  }

  return type.astNode;
}

function validateDirectives(context) {
  for (var _i4 = 0, _context$schema$getDi2 = context.schema.getDirectives(); _i4 < _context$schema$getDi2.length; _i4++) {
    var directive = _context$schema$getDi2[_i4];

    // Ensure all directives are in fact GraphQL directives.
    if (!Object(_directives__WEBPACK_IMPORTED_MODULE_8__["isDirective"])(directive)) {
      context.reportError("Expected directive but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(directive), "."), directive && directive.astNode);
      continue;
    } // Ensure they are named correctly.


    validateName(context, directive); // TODO: Ensure proper locations.
    // Ensure the arguments are valid.

    var argNames = Object.create(null);

    var _loop = function _loop(_i6, _directive$args2) {
      var arg = _directive$args2[_i6];
      var argName = arg.name; // Ensure they are named correctly.

      validateName(context, arg); // Ensure they are unique per directive.

      if (argNames[argName]) {
        context.reportError("Argument @".concat(directive.name, "(").concat(argName, ":) can only be defined once."), directive.astNode && directive.args.filter(function (_ref) {
          var name = _ref.name;
          return name === argName;
        }).map(function (_ref2) {
          var astNode = _ref2.astNode;
          return astNode;
        }));
        return "continue";
      }

      argNames[argName] = true; // Ensure the type is an input type.

      if (!Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isInputType"])(arg.type)) {
        context.reportError("The type of @".concat(directive.name, "(").concat(argName, ":) must be Input Type ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(arg.type), "."), arg.astNode);
      }
    };

    for (var _i6 = 0, _directive$args2 = directive.args; _i6 < _directive$args2.length; _i6++) {
      var _ret = _loop(_i6, _directive$args2);

      if (_ret === "continue") continue;
    }
  }
}

function validateName(context, node) {
  // If a schema explicitly allows some legacy name which is no longer valid,
  // allow it to be assumed valid.
  if (context.schema.__allowedLegacyNames.indexOf(node.name) !== -1) {
    return;
  } // Ensure names are valid, however introspection types opt out.


  var error = Object(_utilities_assertValidName__WEBPACK_IMPORTED_MODULE_6__["isValidNameError"])(node.name, node.astNode || undefined);

  if (error) {
    context.addError(error);
  }
}

function validateTypes(context) {
  var validateInputObjectCircularRefs = createInputObjectCircularRefsValidator(context);
  var typeMap = context.schema.getTypeMap();

  for (var _i8 = 0, _objectValues2 = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_2__["default"])(typeMap); _i8 < _objectValues2.length; _i8++) {
    var type = _objectValues2[_i8];

    // Ensure all provided types are in fact GraphQL type.
    if (!Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isNamedType"])(type)) {
      context.reportError("Expected GraphQL named type but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), "."), type && type.astNode);
      continue;
    } // Ensure it is named correctly (excluding introspection types).


    if (!Object(_introspection__WEBPACK_IMPORTED_MODULE_9__["isIntrospectionType"])(type)) {
      validateName(context, type);
    }

    if (Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isObjectType"])(type)) {
      // Ensure fields are valid
      validateFields(context, type); // Ensure objects implement the interfaces they claim to.

      validateObjectInterfaces(context, type);
    } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isInterfaceType"])(type)) {
      // Ensure fields are valid.
      validateFields(context, type);
    } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isUnionType"])(type)) {
      // Ensure Unions include valid member types.
      validateUnionMembers(context, type);
    } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isEnumType"])(type)) {
      // Ensure Enums have valid values.
      validateEnumValues(context, type);
    } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isInputObjectType"])(type)) {
      // Ensure Input Object fields are valid.
      validateInputFields(context, type); // Ensure Input Objects do not contain non-nullable circular references

      validateInputObjectCircularRefs(type);
    }
  }
}

function validateFields(context, type) {
  var fields = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_2__["default"])(type.getFields()); // Objects and Interfaces both must define one or more fields.

  if (fields.length === 0) {
    context.reportError("Type ".concat(type.name, " must define one or more fields."), getAllNodes(type));
  }

  for (var _i10 = 0; _i10 < fields.length; _i10++) {
    var field = fields[_i10];
    // Ensure they are named correctly.
    validateName(context, field); // Ensure the type is an output type

    if (!Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isOutputType"])(field.type)) {
      context.reportError("The type of ".concat(type.name, ".").concat(field.name, " must be Output Type ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(field.type), "."), field.astNode && field.astNode.type);
    } // Ensure the arguments are valid


    var argNames = Object.create(null);

    var _loop2 = function _loop2(_i12, _field$args2) {
      var arg = _field$args2[_i12];
      var argName = arg.name; // Ensure they are named correctly.

      validateName(context, arg); // Ensure they are unique per field.

      if (argNames[argName]) {
        context.reportError("Field argument ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) can only be defined once."), field.args.filter(function (_ref3) {
          var name = _ref3.name;
          return name === argName;
        }).map(function (_ref4) {
          var astNode = _ref4.astNode;
          return astNode;
        }));
      }

      argNames[argName] = true; // Ensure the type is an input type

      if (!Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isInputType"])(arg.type)) {
        context.reportError("The type of ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) must be Input ") + "Type but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(arg.type), "."), arg.astNode && arg.astNode.type);
      }
    };

    for (var _i12 = 0, _field$args2 = field.args; _i12 < _field$args2.length; _i12++) {
      _loop2(_i12, _field$args2);
    }
  }
}

function validateObjectInterfaces(context, object) {
  var implementedTypeNames = Object.create(null);

  for (var _i14 = 0, _object$getInterfaces2 = object.getInterfaces(); _i14 < _object$getInterfaces2.length; _i14++) {
    var iface = _object$getInterfaces2[_i14];

    if (!Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isInterfaceType"])(iface)) {
      context.reportError("Type ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(object), " must only implement Interface types, ") + "it cannot implement ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(iface), "."), getAllImplementsInterfaceNodes(object, iface));
      continue;
    }

    if (implementedTypeNames[iface.name]) {
      context.reportError("Type ".concat(object.name, " can only implement ").concat(iface.name, " once."), getAllImplementsInterfaceNodes(object, iface));
      continue;
    }

    implementedTypeNames[iface.name] = true;
    validateObjectImplementsInterface(context, object, iface);
  }
}

function validateObjectImplementsInterface(context, object, iface) {
  var objectFieldMap = object.getFields();
  var ifaceFieldMap = iface.getFields(); // Assert each interface field is implemented.

  for (var _i16 = 0, _objectEntries2 = Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_3__["default"])(ifaceFieldMap); _i16 < _objectEntries2.length; _i16++) {
    var _ref6 = _objectEntries2[_i16];
    var fieldName = _ref6[0];
    var ifaceField = _ref6[1];
    var objectField = objectFieldMap[fieldName]; // Assert interface field exists on object.

    if (!objectField) {
      context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expected but ").concat(object.name, " does not provide it."), [ifaceField.astNode].concat(getAllNodes(object)));
      continue;
    } // Assert interface field type is satisfied by object field type, by being
    // a valid subtype. (covariant)


    if (!Object(_utilities_typeComparators__WEBPACK_IMPORTED_MODULE_7__["isTypeSubTypeOf"])(context.schema, objectField.type, ifaceField.type)) {
      context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expects type ") + "".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(ifaceField.type), " but ").concat(object.name, ".").concat(fieldName, " ") + "is type ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(objectField.type), "."), [ifaceField.astNode && ifaceField.astNode.type, objectField.astNode && objectField.astNode.type]);
    } // Assert each interface field arg is implemented.


    var _loop3 = function _loop3(_i18, _ifaceField$args2) {
      var ifaceArg = _ifaceField$args2[_i18];
      var argName = ifaceArg.name;
      var objectArg = Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(objectField.args, function (arg) {
        return arg.name === argName;
      }); // Assert interface field arg exists on object field.

      if (!objectArg) {
        context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) expected but ").concat(object.name, ".").concat(fieldName, " does not provide it."), [ifaceArg.astNode, objectField.astNode]);
        return "continue";
      } // Assert interface field arg type matches object field arg type.
      // (invariant)
      // TODO: change to contravariant?


      if (!Object(_utilities_typeComparators__WEBPACK_IMPORTED_MODULE_7__["isEqualType"])(ifaceArg.type, objectArg.type)) {
        context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) ") + "expects type ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(ifaceArg.type), " but ") + "".concat(object.name, ".").concat(fieldName, "(").concat(argName, ":) is type ") + "".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(objectArg.type), "."), [ifaceArg.astNode && ifaceArg.astNode.type, objectArg.astNode && objectArg.astNode.type]);
      } // TODO: validate default values?

    };

    for (var _i18 = 0, _ifaceField$args2 = ifaceField.args; _i18 < _ifaceField$args2.length; _i18++) {
      var _ret2 = _loop3(_i18, _ifaceField$args2);

      if (_ret2 === "continue") continue;
    } // Assert additional arguments must not be required.


    var _loop4 = function _loop4(_i20, _objectField$args2) {
      var objectArg = _objectField$args2[_i20];
      var argName = objectArg.name;
      var ifaceArg = Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(ifaceField.args, function (arg) {
        return arg.name === argName;
      });

      if (!ifaceArg && Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isRequiredArgument"])(objectArg)) {
        context.reportError("Object field ".concat(object.name, ".").concat(fieldName, " includes required argument ").concat(argName, " that is missing from the Interface field ").concat(iface.name, ".").concat(fieldName, "."), [objectArg.astNode, ifaceField.astNode]);
      }
    };

    for (var _i20 = 0, _objectField$args2 = objectField.args; _i20 < _objectField$args2.length; _i20++) {
      _loop4(_i20, _objectField$args2);
    }
  }
}

function validateUnionMembers(context, union) {
  var memberTypes = union.getTypes();

  if (memberTypes.length === 0) {
    context.reportError("Union type ".concat(union.name, " must define one or more member types."), getAllNodes(union));
  }

  var includedTypeNames = Object.create(null);

  for (var _i22 = 0; _i22 < memberTypes.length; _i22++) {
    var memberType = memberTypes[_i22];

    if (includedTypeNames[memberType.name]) {
      context.reportError("Union type ".concat(union.name, " can only include type ").concat(memberType.name, " once."), getUnionMemberTypeNodes(union, memberType.name));
      continue;
    }

    includedTypeNames[memberType.name] = true;

    if (!Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isObjectType"])(memberType)) {
      context.reportError("Union type ".concat(union.name, " can only include Object types, ") + "it cannot include ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(memberType), "."), getUnionMemberTypeNodes(union, String(memberType)));
    }
  }
}

function validateEnumValues(context, enumType) {
  var enumValues = enumType.getValues();

  if (enumValues.length === 0) {
    context.reportError("Enum type ".concat(enumType.name, " must define one or more values."), getAllNodes(enumType));
  }

  for (var _i24 = 0; _i24 < enumValues.length; _i24++) {
    var enumValue = enumValues[_i24];
    var valueName = enumValue.name; // Ensure valid name.

    validateName(context, enumValue);

    if (valueName === 'true' || valueName === 'false' || valueName === 'null') {
      context.reportError("Enum type ".concat(enumType.name, " cannot include value: ").concat(valueName, "."), enumValue.astNode);
    }
  }
}

function validateInputFields(context, inputObj) {
  var fields = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_2__["default"])(inputObj.getFields());

  if (fields.length === 0) {
    context.reportError("Input Object type ".concat(inputObj.name, " must define one or more fields."), getAllNodes(inputObj));
  } // Ensure the arguments are valid


  for (var _i26 = 0; _i26 < fields.length; _i26++) {
    var field = fields[_i26];
    // Ensure they are named correctly.
    validateName(context, field); // Ensure the type is an input type

    if (!Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isInputType"])(field.type)) {
      context.reportError("The type of ".concat(inputObj.name, ".").concat(field.name, " must be Input Type ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(field.type), "."), field.astNode && field.astNode.type);
    }
  }
}

function createInputObjectCircularRefsValidator(context) {
  // Modified copy of algorithm from 'src/validation/rules/NoFragmentCycles.js'.
  // Tracks already visited types to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedTypes = Object.create(null); // Array of types nodes used to produce meaningful errors

  var fieldPath = []; // Position in the type path

  var fieldPathIndexByTypeName = Object.create(null);
  return detectCycleRecursive; // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.

  function detectCycleRecursive(inputObj) {
    if (visitedTypes[inputObj.name]) {
      return;
    }

    visitedTypes[inputObj.name] = true;
    fieldPathIndexByTypeName[inputObj.name] = fieldPath.length;
    var fields = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_2__["default"])(inputObj.getFields());

    for (var _i28 = 0; _i28 < fields.length; _i28++) {
      var field = fields[_i28];

      if (Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isNonNullType"])(field.type) && Object(_definition__WEBPACK_IMPORTED_MODULE_11__["isInputObjectType"])(field.type.ofType)) {
        var fieldType = field.type.ofType;
        var cycleIndex = fieldPathIndexByTypeName[fieldType.name];
        fieldPath.push(field);

        if (cycleIndex === undefined) {
          detectCycleRecursive(fieldType);
        } else {
          var cyclePath = fieldPath.slice(cycleIndex);
          var pathStr = cyclePath.map(function (fieldObj) {
            return fieldObj.name;
          }).join('.');
          context.reportError("Cannot reference Input Object \"".concat(fieldType.name, "\" within itself through a series of non-null fields: \"").concat(pathStr, "\"."), cyclePath.map(function (fieldObj) {
            return fieldObj.astNode;
          }));
        }

        fieldPath.pop();
      }
    }

    fieldPathIndexByTypeName[inputObj.name] = undefined;
  }
}

function getAllNodes(object) {
  var astNode = object.astNode,
      extensionASTNodes = object.extensionASTNodes;
  return astNode ? extensionASTNodes ? [astNode].concat(extensionASTNodes) : [astNode] : extensionASTNodes || [];
}

function getAllSubNodes(object, getter) {
  return Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_1__["default"])(getAllNodes(object), function (item) {
    return getter(item) || [];
  });
}

function getAllImplementsInterfaceNodes(type, iface) {
  return getAllSubNodes(type, function (typeNode) {
    return typeNode.interfaces;
  }).filter(function (ifaceNode) {
    return ifaceNode.name.value === iface.name;
  });
}

function getUnionMemberTypeNodes(union, typeName) {
  return getAllSubNodes(union, function (unionNode) {
    return unionNode.types;
  }).filter(function (typeNode) {
    return typeNode.name.value === typeName;
  });
}


/***/ }),

/***/ "../../graphql/utilities/TypeInfo.mjs":
/*!***********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/TypeInfo.mjs ***!
  \***********************************************************************/
/*! exports provided: TypeInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeInfo", function() { return TypeInfo; });
/* harmony import */ var _polyfills_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/find */ "../../graphql/polyfills/find.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/introspection */ "../../graphql/type/introspection.mjs");
/* harmony import */ var _typeFromAST__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typeFromAST */ "../../graphql/utilities/typeFromAST.mjs");





/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */

var TypeInfo =
/*#__PURE__*/
function () {
  function TypeInfo(schema, // NOTE: this experimental optional second parameter is only needed in order
  // to support non-spec-compliant codebases. You should never need to use it.
  // It may disappear in the future.
  getFieldDefFn, // Initial type may be provided in rare cases to facilitate traversals
  // beginning somewhere other than documents.
  initialType) {
    this._schema = schema;
    this._typeStack = [];
    this._parentTypeStack = [];
    this._inputTypeStack = [];
    this._fieldDefStack = [];
    this._defaultValueStack = [];
    this._directive = null;
    this._argument = null;
    this._enumValue = null;
    this._getFieldDef = getFieldDefFn || getFieldDef;

    if (initialType) {
      if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputType"])(initialType)) {
        this._inputTypeStack.push(initialType);
      }

      if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(initialType)) {
        this._parentTypeStack.push(initialType);
      }

      if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isOutputType"])(initialType)) {
        this._typeStack.push(initialType);
      }
    }
  }

  var _proto = TypeInfo.prototype;

  _proto.getType = function getType() {
    if (this._typeStack.length > 0) {
      return this._typeStack[this._typeStack.length - 1];
    }
  };

  _proto.getParentType = function getParentType() {
    if (this._parentTypeStack.length > 0) {
      return this._parentTypeStack[this._parentTypeStack.length - 1];
    }
  };

  _proto.getInputType = function getInputType() {
    if (this._inputTypeStack.length > 0) {
      return this._inputTypeStack[this._inputTypeStack.length - 1];
    }
  };

  _proto.getParentInputType = function getParentInputType() {
    if (this._inputTypeStack.length > 1) {
      return this._inputTypeStack[this._inputTypeStack.length - 2];
    }
  };

  _proto.getFieldDef = function getFieldDef() {
    if (this._fieldDefStack.length > 0) {
      return this._fieldDefStack[this._fieldDefStack.length - 1];
    }
  };

  _proto.getDefaultValue = function getDefaultValue() {
    if (this._defaultValueStack.length > 0) {
      return this._defaultValueStack[this._defaultValueStack.length - 1];
    }
  };

  _proto.getDirective = function getDirective() {
    return this._directive;
  };

  _proto.getArgument = function getArgument() {
    return this._argument;
  };

  _proto.getEnumValue = function getEnumValue() {
    return this._enumValue;
  };

  _proto.enter = function enter(node) {
    var schema = this._schema; // Note: many of the types below are explicitly typed as "mixed" to drop
    // any assumptions of a valid schema to ensure runtime types are properly
    // checked before continuing since TypeInfo is used as part of validation
    // which occurs before guarantees of schema and document validity.

    switch (node.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SELECTION_SET:
        {
          var namedType = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["getNamedType"])(this.getType());

          this._parentTypeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(namedType) ? namedType : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FIELD:
        {
          var parentType = this.getParentType();
          var fieldDef;
          var fieldType;

          if (parentType) {
            fieldDef = this._getFieldDef(schema, parentType, node);

            if (fieldDef) {
              fieldType = fieldDef.type;
            }
          }

          this._fieldDefStack.push(fieldDef);

          this._typeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isOutputType"])(fieldType) ? fieldType : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE:
        this._directive = schema.getDirective(node.name.value);
        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION:
        {
          var type;

          if (node.operation === 'query') {
            type = schema.getQueryType();
          } else if (node.operation === 'mutation') {
            type = schema.getMutationType();
          } else if (node.operation === 'subscription') {
            type = schema.getSubscriptionType();
          }

          this._typeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(type) ? type : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INLINE_FRAGMENT:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_DEFINITION:
        {
          var typeConditionAST = node.typeCondition;
          var outputType = typeConditionAST ? Object(_typeFromAST__WEBPACK_IMPORTED_MODULE_4__["typeFromAST"])(schema, typeConditionAST) : Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["getNamedType"])(this.getType());

          this._typeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isOutputType"])(outputType) ? outputType : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].VARIABLE_DEFINITION:
        {
          var inputType = Object(_typeFromAST__WEBPACK_IMPORTED_MODULE_4__["typeFromAST"])(schema, node.type);

          this._inputTypeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputType"])(inputType) ? inputType : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].ARGUMENT:
        {
          var argDef;
          var argType;
          var fieldOrDirective = this.getDirective() || this.getFieldDef();

          if (fieldOrDirective) {
            argDef = Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(fieldOrDirective.args, function (arg) {
              return arg.name === node.name.value;
            });

            if (argDef) {
              argType = argDef.type;
            }
          }

          this._argument = argDef;

          this._defaultValueStack.push(argDef ? argDef.defaultValue : undefined);

          this._inputTypeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputType"])(argType) ? argType : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].LIST:
        {
          var listType = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["getNullableType"])(this.getInputType());
          var itemType = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isListType"])(listType) ? listType.ofType : listType; // List positions never have a default value.

          this._defaultValueStack.push(undefined);

          this._inputTypeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputType"])(itemType) ? itemType : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_FIELD:
        {
          var objectType = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["getNamedType"])(this.getInputType());
          var inputFieldType;
          var inputField;

          if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputObjectType"])(objectType)) {
            inputField = objectType.getFields()[node.name.value];

            if (inputField) {
              inputFieldType = inputField.type;
            }
          }

          this._defaultValueStack.push(inputField ? inputField.defaultValue : undefined);

          this._inputTypeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputType"])(inputFieldType) ? inputFieldType : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM:
        {
          var enumType = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["getNamedType"])(this.getInputType());
          var enumValue;

          if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isEnumType"])(enumType)) {
            enumValue = enumType.getValue(node.value);
          }

          this._enumValue = enumValue;
          break;
        }
    }
  };

  _proto.leave = function leave(node) {
    switch (node.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SELECTION_SET:
        this._parentTypeStack.pop();

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FIELD:
        this._fieldDefStack.pop();

        this._typeStack.pop();

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE:
        this._directive = null;
        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INLINE_FRAGMENT:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_DEFINITION:
        this._typeStack.pop();

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].VARIABLE_DEFINITION:
        this._inputTypeStack.pop();

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].ARGUMENT:
        this._argument = null;

        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].LIST:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_FIELD:
        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM:
        this._enumValue = null;
        break;
    }
  };

  return TypeInfo;
}();
/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */

function getFieldDef(schema, parentType, fieldNode) {
  var name = fieldNode.name.value;

  if (name === _type_introspection__WEBPACK_IMPORTED_MODULE_3__["SchemaMetaFieldDef"].name && schema.getQueryType() === parentType) {
    return _type_introspection__WEBPACK_IMPORTED_MODULE_3__["SchemaMetaFieldDef"];
  }

  if (name === _type_introspection__WEBPACK_IMPORTED_MODULE_3__["TypeMetaFieldDef"].name && schema.getQueryType() === parentType) {
    return _type_introspection__WEBPACK_IMPORTED_MODULE_3__["TypeMetaFieldDef"];
  }

  if (name === _type_introspection__WEBPACK_IMPORTED_MODULE_3__["TypeNameMetaFieldDef"].name && Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(parentType)) {
    return _type_introspection__WEBPACK_IMPORTED_MODULE_3__["TypeNameMetaFieldDef"];
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(parentType) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInterfaceType"])(parentType)) {
    return parentType.getFields()[name];
  }
}


/***/ }),

/***/ "../../graphql/utilities/assertValidName.mjs":
/*!******************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/assertValidName.mjs ***!
  \******************************************************************************/
/*! exports provided: assertValidName, isValidNameError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidName", function() { return assertValidName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidNameError", function() { return isValidNameError; });
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert */ "../../graphql/jsutils/devAssert.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");


var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
/**
 * Upholds the spec rules about naming.
 */

function assertValidName(name) {
  var error = isValidNameError(name);

  if (error) {
    throw error;
  }

  return name;
}
/**
 * Returns an Error if a name is invalid.
 */

function isValidNameError(name, node) {
  typeof name === 'string' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'Expected string');

  if (name.length > 1 && name[0] === '_' && name[1] === '_') {
    return new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Name \"".concat(name, "\" must not begin with \"__\", which is reserved by GraphQL introspection."), node);
  }

  if (!NAME_RX.test(name)) {
    return new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but \"".concat(name, "\" does not."), node);
  }
}


/***/ }),

/***/ "../../graphql/utilities/astFromValue.mjs":
/*!***************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/astFromValue.mjs ***!
  \***************************************************************************/
/*! exports provided: astFromValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "astFromValue", function() { return astFromValue; });
/* harmony import */ var iterall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iterall */ "../../iterall/index.mjs");
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectValues */ "../../graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant */ "../../graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_isNullish__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/isNullish */ "../../graphql/jsutils/isNullish.mjs");
/* harmony import */ var _jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/isInvalid */ "../../graphql/jsutils/isInvalid.mjs");
/* harmony import */ var _jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/isObjectLike */ "../../graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _type_scalars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../type/scalars */ "../../graphql/type/scalars.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");










/**
 * Produces a GraphQL Value AST given a JavaScript value.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Mixed         | Enum Value           |
 * | null          | NullValue            |
 *
 */

function astFromValue(value, type) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_9__["isNonNullType"])(type)) {
    var astValue = astFromValue(value, type.ofType);

    if (astValue && astValue.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].NULL) {
      return null;
    }

    return astValue;
  } // only explicit null, not undefined, NaN


  if (value === null) {
    return {
      kind: _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].NULL
    };
  } // undefined, NaN


  if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_5__["default"])(value)) {
    return null;
  } // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
  // the value is not an array, convert the value using the list's item type.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_9__["isListType"])(type)) {
    var itemType = type.ofType;

    if (Object(iterall__WEBPACK_IMPORTED_MODULE_0__["isCollection"])(value)) {
      var valuesNodes = [];
      Object(iterall__WEBPACK_IMPORTED_MODULE_0__["forEach"])(value, function (item) {
        var itemNode = astFromValue(item, itemType);

        if (itemNode) {
          valuesNodes.push(itemNode);
        }
      });
      return {
        kind: _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].LIST,
        values: valuesNodes
      };
    }

    return astFromValue(value, itemType);
  } // Populate the fields of the input object by creating ASTs from each value
  // in the JavaScript object according to the fields in the input type.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_9__["isInputObjectType"])(type)) {
    if (!Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_6__["default"])(value)) {
      return null;
    }

    var fieldNodes = [];

    for (var _i2 = 0, _objectValues2 = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(type.getFields()); _i2 < _objectValues2.length; _i2++) {
      var field = _objectValues2[_i2];
      var fieldValue = astFromValue(value[field.name], field.type);

      if (fieldValue) {
        fieldNodes.push({
          kind: _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].OBJECT_FIELD,
          name: {
            kind: _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].NAME,
            value: field.name
          },
          value: fieldValue
        });
      }
    }

    return {
      kind: _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].OBJECT,
      fields: fieldNodes
    };
  }

  /* istanbul ignore else */
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_9__["isLeafType"])(type)) {
    // Since value is an internally represented value, it must be serialized
    // to an externally represented value before converting into an AST.
    var serialized = type.serialize(value);

    if (Object(_jsutils_isNullish__WEBPACK_IMPORTED_MODULE_4__["default"])(serialized)) {
      return null;
    } // Others serialize based on their corresponding JavaScript scalar types.


    if (typeof serialized === 'boolean') {
      return {
        kind: _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].BOOLEAN,
        value: serialized
      };
    } // JavaScript numbers can be Int or Float values.


    if (typeof serialized === 'number') {
      var stringNum = String(serialized);
      return integerStringRegExp.test(stringNum) ? {
        kind: _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].INT,
        value: stringNum
      } : {
        kind: _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].FLOAT,
        value: stringNum
      };
    }

    if (typeof serialized === 'string') {
      // Enum types use Enum literals.
      if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_9__["isEnumType"])(type)) {
        return {
          kind: _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].ENUM,
          value: serialized
        };
      } // ID types can use Int literals.


      if (type === _type_scalars__WEBPACK_IMPORTED_MODULE_8__["GraphQLID"] && integerStringRegExp.test(serialized)) {
        return {
          kind: _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].INT,
          value: serialized
        };
      }

      return {
        kind: _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].STRING,
        value: serialized
      };
    }

    throw new TypeError("Cannot convert value to AST: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(serialized)));
  } // Not reachable. All possible input types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Unexpected input type: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type));
}
/**
 * IntValue:
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit ( Digit+ )?
 */

var integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;


/***/ }),

/***/ "../../graphql/utilities/buildASTSchema.mjs":
/*!*****************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/buildASTSchema.mjs ***!
  \*****************************************************************************/
/*! exports provided: buildASTSchema, ASTDefinitionBuilder, getDescription, buildSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildASTSchema", function() { return buildASTSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASTDefinitionBuilder", function() { return ASTDefinitionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDescription", function() { return getDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSchema", function() { return buildSchema; });
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues */ "../../graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/keyMap */ "../../graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant */ "../../graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/devAssert */ "../../graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/keyValMap */ "../../graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _language_tokenKind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../language/tokenKind */ "../../graphql/language/tokenKind.mjs");
/* harmony import */ var _language_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../language/parser */ "../../graphql/language/parser.mjs");
/* harmony import */ var _language_predicates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../language/predicates */ "../../graphql/language/predicates.mjs");
/* harmony import */ var _language_blockString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language/blockString */ "../../graphql/language/blockString.mjs");
/* harmony import */ var _validation_validate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../validation/validate */ "../../graphql/validation/validate.mjs");
/* harmony import */ var _execution_values__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../execution/values */ "../../graphql/execution/values.mjs");
/* harmony import */ var _type_scalars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../type/scalars */ "../../graphql/type/scalars.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../type/introspection */ "../../graphql/type/introspection.mjs");
/* harmony import */ var _type_schema__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../type/schema */ "../../graphql/type/schema.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../type/directives */ "../../graphql/type/directives.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");
/* harmony import */ var _valueFromAST__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./valueFromAST */ "../../graphql/utilities/valueFromAST.mjs");




















/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query
 * and Mutation.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function buildASTSchema(documentAST, options) {
  documentAST && documentAST.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_6__["Kind"].DOCUMENT || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_4__["default"])(0, 'Must provide valid Document AST');

  if (!options || !(options.assumeValid || options.assumeValidSDL)) {
    Object(_validation_validate__WEBPACK_IMPORTED_MODULE_11__["assertValidSDL"])(documentAST);
  }

  var schemaDef;
  var typeDefs = [];
  var directiveDefs = [];

  for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
    var def = _documentAST$definiti2[_i2];

    if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_6__["Kind"].SCHEMA_DEFINITION) {
      schemaDef = def;
    } else if (Object(_language_predicates__WEBPACK_IMPORTED_MODULE_9__["isTypeDefinitionNode"])(def)) {
      typeDefs.push(def);
    } else if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_6__["Kind"].DIRECTIVE_DEFINITION) {
      directiveDefs.push(def);
    }
  }

  var astBuilder = new ASTDefinitionBuilder(options, function (typeName) {
    var type = typeMap[typeName];

    if (type === undefined) {
      throw new Error("Type \"".concat(typeName, "\" not found in document."));
    }

    return type;
  });
  var typeMap = keyByNameNode(typeDefs, function (node) {
    return astBuilder.buildType(node);
  });
  var operationTypes = schemaDef ? getOperationTypes(schemaDef) : {
    query: 'Query',
    mutation: 'Mutation',
    subscription: 'Subscription'
  };
  var directives = directiveDefs.map(function (def) {
    return astBuilder.buildDirective(def);
  }); // If specified directives were not explicitly declared, add them.

  if (!directives.some(function (directive) {
    return directive.name === 'skip';
  })) {
    directives.push(_type_directives__WEBPACK_IMPORTED_MODULE_16__["GraphQLSkipDirective"]);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'include';
  })) {
    directives.push(_type_directives__WEBPACK_IMPORTED_MODULE_16__["GraphQLIncludeDirective"]);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'deprecated';
  })) {
    directives.push(_type_directives__WEBPACK_IMPORTED_MODULE_16__["GraphQLDeprecatedDirective"]);
  }

  return new _type_schema__WEBPACK_IMPORTED_MODULE_15__["GraphQLSchema"]({
    // Note: While this could make early assertions to get the correctly
    // typed values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    query: operationTypes.query ? typeMap[operationTypes.query] : null,
    mutation: operationTypes.mutation ? typeMap[operationTypes.mutation] : null,
    subscription: operationTypes.subscription ? typeMap[operationTypes.subscription] : null,
    types: Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(typeMap),
    directives: directives,
    astNode: schemaDef,
    assumeValid: options && options.assumeValid,
    allowedLegacyNames: options && options.allowedLegacyNames
  });

  function getOperationTypes(schema) {
    var opTypes = {};

    for (var _i4 = 0, _schema$operationType2 = schema.operationTypes; _i4 < _schema$operationType2.length; _i4++) {
      var operationType = _schema$operationType2[_i4];
      opTypes[operationType.operation] = operationType.type.name.value;
    }

    return opTypes;
  }
}
var stdTypeMap = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__["default"])(_type_scalars__WEBPACK_IMPORTED_MODULE_13__["specifiedScalarTypes"].concat(_type_introspection__WEBPACK_IMPORTED_MODULE_14__["introspectionTypes"]), function (type) {
  return type.name;
});
var ASTDefinitionBuilder =
/*#__PURE__*/
function () {
  function ASTDefinitionBuilder(options, resolveType) {
    this._options = options;
    this._resolveType = resolveType;
  }

  var _proto = ASTDefinitionBuilder.prototype;

  _proto.getNamedType = function getNamedType(node) {
    var name = node.name.value;
    return stdTypeMap[name] || this._resolveType(name);
  };

  _proto.getWrappedType = function getWrappedType(node) {
    if (node.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_6__["Kind"].LIST_TYPE) {
      return new _type_definition__WEBPACK_IMPORTED_MODULE_17__["GraphQLList"](this.getWrappedType(node.type));
    }

    if (node.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_6__["Kind"].NON_NULL_TYPE) {
      return new _type_definition__WEBPACK_IMPORTED_MODULE_17__["GraphQLNonNull"](this.getWrappedType(node.type));
    }

    return this.getNamedType(node);
  };

  _proto.buildDirective = function buildDirective(directive) {
    var _this = this;

    var locations = directive.locations.map(function (_ref) {
      var value = _ref.value;
      return value;
    });
    return new _type_directives__WEBPACK_IMPORTED_MODULE_16__["GraphQLDirective"]({
      name: directive.name.value,
      description: getDescription(directive, this._options),
      locations: locations,
      isRepeatable: directive.repeatable,
      args: keyByNameNode(directive.arguments || [], function (arg) {
        return _this.buildArg(arg);
      }),
      astNode: directive
    });
  };

  _proto.buildField = function buildField(field) {
    var _this2 = this;

    return {
      // Note: While this could make assertions to get the correctly typed
      // value, that would throw immediately while type system validation
      // with validateSchema() will produce more actionable results.
      type: this.getWrappedType(field.type),
      description: getDescription(field, this._options),
      args: keyByNameNode(field.arguments || [], function (arg) {
        return _this2.buildArg(arg);
      }),
      deprecationReason: getDeprecationReason(field),
      astNode: field
    };
  };

  _proto.buildArg = function buildArg(value) {
    // Note: While this could make assertions to get the correctly typed
    // value, that would throw immediately while type system validation
    // with validateSchema() will produce more actionable results.
    var type = this.getWrappedType(value.type);
    return {
      type: type,
      description: getDescription(value, this._options),
      defaultValue: Object(_valueFromAST__WEBPACK_IMPORTED_MODULE_18__["valueFromAST"])(value.defaultValue, type),
      astNode: value
    };
  };

  _proto.buildInputField = function buildInputField(value) {
    // Note: While this could make assertions to get the correctly typed
    // value, that would throw immediately while type system validation
    // with validateSchema() will produce more actionable results.
    var type = this.getWrappedType(value.type);
    return {
      type: type,
      description: getDescription(value, this._options),
      defaultValue: Object(_valueFromAST__WEBPACK_IMPORTED_MODULE_18__["valueFromAST"])(value.defaultValue, type),
      astNode: value
    };
  };

  _proto.buildEnumValue = function buildEnumValue(value) {
    return {
      description: getDescription(value, this._options),
      deprecationReason: getDeprecationReason(value),
      astNode: value
    };
  };

  _proto.buildType = function buildType(astNode) {
    var name = astNode.name.value;

    if (stdTypeMap[name]) {
      return stdTypeMap[name];
    }

    switch (astNode.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_6__["Kind"].OBJECT_TYPE_DEFINITION:
        return this._makeTypeDef(astNode);

      case _language_kinds__WEBPACK_IMPORTED_MODULE_6__["Kind"].INTERFACE_TYPE_DEFINITION:
        return this._makeInterfaceDef(astNode);

      case _language_kinds__WEBPACK_IMPORTED_MODULE_6__["Kind"].ENUM_TYPE_DEFINITION:
        return this._makeEnumDef(astNode);

      case _language_kinds__WEBPACK_IMPORTED_MODULE_6__["Kind"].UNION_TYPE_DEFINITION:
        return this._makeUnionDef(astNode);

      case _language_kinds__WEBPACK_IMPORTED_MODULE_6__["Kind"].SCALAR_TYPE_DEFINITION:
        return this._makeScalarDef(astNode);

      case _language_kinds__WEBPACK_IMPORTED_MODULE_6__["Kind"].INPUT_OBJECT_TYPE_DEFINITION:
        return this._makeInputObjectDef(astNode);
    } // Not reachable. All possible type definition nodes have been considered.


    /* istanbul ignore next */
    Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Unexpected type definition node: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(astNode));
  };

  _proto._makeTypeDef = function _makeTypeDef(astNode) {
    var _this3 = this;

    var interfaceNodes = astNode.interfaces;
    var fieldNodes = astNode.fields; // Note: While this could make assertions to get the correctly typed
    // values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.

    var interfaces = interfaceNodes && interfaceNodes.length > 0 ? function () {
      return interfaceNodes.map(function (ref) {
        return _this3.getNamedType(ref);
      });
    } : [];
    var fields = fieldNodes && fieldNodes.length > 0 ? function () {
      return keyByNameNode(fieldNodes, function (field) {
        return _this3.buildField(field);
      });
    } : Object.create(null);
    return new _type_definition__WEBPACK_IMPORTED_MODULE_17__["GraphQLObjectType"]({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      interfaces: interfaces,
      fields: fields,
      astNode: astNode
    });
  };

  _proto._makeInterfaceDef = function _makeInterfaceDef(astNode) {
    var _this4 = this;

    var fieldNodes = astNode.fields;
    var fields = fieldNodes && fieldNodes.length > 0 ? function () {
      return keyByNameNode(fieldNodes, function (field) {
        return _this4.buildField(field);
      });
    } : Object.create(null);
    return new _type_definition__WEBPACK_IMPORTED_MODULE_17__["GraphQLInterfaceType"]({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      fields: fields,
      astNode: astNode
    });
  };

  _proto._makeEnumDef = function _makeEnumDef(astNode) {
    var _this5 = this;

    var valueNodes = astNode.values || [];
    return new _type_definition__WEBPACK_IMPORTED_MODULE_17__["GraphQLEnumType"]({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      values: keyByNameNode(valueNodes, function (value) {
        return _this5.buildEnumValue(value);
      }),
      astNode: astNode
    });
  };

  _proto._makeUnionDef = function _makeUnionDef(astNode) {
    var _this6 = this;

    var typeNodes = astNode.types; // Note: While this could make assertions to get the correctly typed
    // values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.

    var types = typeNodes && typeNodes.length > 0 ? function () {
      return typeNodes.map(function (ref) {
        return _this6.getNamedType(ref);
      });
    } : [];
    return new _type_definition__WEBPACK_IMPORTED_MODULE_17__["GraphQLUnionType"]({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      types: types,
      astNode: astNode
    });
  };

  _proto._makeScalarDef = function _makeScalarDef(astNode) {
    return new _type_definition__WEBPACK_IMPORTED_MODULE_17__["GraphQLScalarType"]({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      astNode: astNode
    });
  };

  _proto._makeInputObjectDef = function _makeInputObjectDef(def) {
    var _this7 = this;

    var fields = def.fields;
    return new _type_definition__WEBPACK_IMPORTED_MODULE_17__["GraphQLInputObjectType"]({
      name: def.name.value,
      description: getDescription(def, this._options),
      fields: fields ? function () {
        return keyByNameNode(fields, function (field) {
          return _this7.buildInputField(field);
        });
      } : Object.create(null),
      astNode: def
    });
  };

  return ASTDefinitionBuilder;
}();

function keyByNameNode(list, valFn) {
  return Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_5__["default"])(list, function (_ref2) {
    var name = _ref2.name;
    return name.value;
  }, valFn);
}
/**
 * Given a field or enum value node, returns the string value for the
 * deprecation reason.
 */


function getDeprecationReason(node) {
  var deprecated = Object(_execution_values__WEBPACK_IMPORTED_MODULE_12__["getDirectiveValues"])(_type_directives__WEBPACK_IMPORTED_MODULE_16__["GraphQLDeprecatedDirective"], node);
  return deprecated && deprecated.reason;
}
/**
 * Given an ast node, returns its string description.
 * @deprecated: provided to ease adoption and will be removed in v16.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */


function getDescription(node, options) {
  if (node.description) {
    return node.description.value;
  }

  if (options && options.commentDescriptions) {
    var rawValue = getLeadingCommentBlock(node);

    if (rawValue !== undefined) {
      return Object(_language_blockString__WEBPACK_IMPORTED_MODULE_10__["dedentBlockStringValue"])('\n' + rawValue);
    }
  }
}

function getLeadingCommentBlock(node) {
  var loc = node.loc;

  if (!loc) {
    return;
  }

  var comments = [];
  var token = loc.startToken.prev;

  while (token && token.kind === _language_tokenKind__WEBPACK_IMPORTED_MODULE_7__["TokenKind"].COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line) {
    var value = String(token.value);
    comments.push(value);
    token = token.prev;
  }

  return comments.reverse().join('\n');
}
/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */


function buildSchema(source, options) {
  return buildASTSchema(Object(_language_parser__WEBPACK_IMPORTED_MODULE_8__["parse"])(source, options), options);
}


/***/ }),

/***/ "../../graphql/utilities/buildClientSchema.mjs":
/*!********************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/buildClientSchema.mjs ***!
  \********************************************************************************/
/*! exports provided: buildClientSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildClientSchema", function() { return buildClientSchema; });
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues */ "../../graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/devAssert */ "../../graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/keyValMap */ "../../graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/isObjectLike */ "../../graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _language_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/parser */ "../../graphql/language/parser.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/directives */ "../../graphql/type/directives.mjs");
/* harmony import */ var _type_scalars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/scalars */ "../../graphql/type/scalars.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../type/introspection */ "../../graphql/type/introspection.mjs");
/* harmony import */ var _type_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../type/schema */ "../../graphql/type/schema.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");
/* harmony import */ var _valueFromAST__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./valueFromAST */ "../../graphql/utilities/valueFromAST.mjs");













/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 *
 * This function expects a complete introspection result. Don't forget to check
 * the "errors" field of a server response before calling this function.
 */
function buildClientSchema(introspection, options) {
  Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_4__["default"])(introspection) && Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_4__["default"])(introspection.__schema) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 'Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(introspection)); // Get the schema from the introspection result.

  var schemaIntrospection = introspection.__schema; // Iterate through all types, getting the type definition for each.

  var typeMap = Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_3__["default"])(schemaIntrospection.types, function (typeIntrospection) {
    return typeIntrospection.name;
  }, function (typeIntrospection) {
    return buildType(typeIntrospection);
  });

  for (var _i2 = 0, _ref2 = [].concat(_type_scalars__WEBPACK_IMPORTED_MODULE_7__["specifiedScalarTypes"], _type_introspection__WEBPACK_IMPORTED_MODULE_8__["introspectionTypes"]); _i2 < _ref2.length; _i2++) {
    var stdType = _ref2[_i2];

    if (typeMap[stdType.name]) {
      typeMap[stdType.name] = stdType;
    }
  } // Get the root Query, Mutation, and Subscription types.


  var queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;
  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;
  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null; // Get the directives supported by Introspection, assuming empty-set if
  // directives were not queried for.

  var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : []; // Then produce and return a Schema with these types.

  return new _type_schema__WEBPACK_IMPORTED_MODULE_9__["GraphQLSchema"]({
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(typeMap),
    directives: directives,
    assumeValid: options && options.assumeValid,
    allowedLegacyNames: options && options.allowedLegacyNames
  }); // Given a type reference in introspection, return the GraphQLType instance.
  // preferring cached instances before building new instances.

  function getType(typeRef) {
    if (typeRef.kind === _type_introspection__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].LIST) {
      var itemRef = typeRef.ofType;

      if (!itemRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }

      return Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["GraphQLList"])(getType(itemRef));
    }

    if (typeRef.kind === _type_introspection__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].NON_NULL) {
      var nullableRef = typeRef.ofType;

      if (!nullableRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }

      var nullableType = getType(nullableRef);
      return Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["GraphQLNonNull"])(Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["assertNullableType"])(nullableType));
    }

    if (!typeRef.name) {
      throw new Error('Unknown type reference: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(typeRef));
    }

    return getNamedType(typeRef.name);
  }

  function getNamedType(typeName) {
    var type = typeMap[typeName];

    if (!type) {
      throw new Error("Invalid or incomplete schema, unknown type: ".concat(typeName, ". Ensure that a full introspection query is used in order to build a client schema."));
    }

    return type;
  }

  function getInputType(typeRef) {
    var type = getType(typeRef);

    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["isInputType"])(type)) {
      return type;
    }

    throw new Error('Introspection must provide input type for arguments, but received: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type) + '.');
  }

  function getOutputType(typeRef) {
    var type = getType(typeRef);

    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["isOutputType"])(type)) {
      return type;
    }

    throw new Error('Introspection must provide output type for fields, but received: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type) + '.');
  }

  function getObjectType(typeRef) {
    var type = getType(typeRef);
    return Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["assertObjectType"])(type);
  }

  function getInterfaceType(typeRef) {
    var type = getType(typeRef);
    return Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["assertInterfaceType"])(type);
  } // Given a type's introspection result, construct the correct
  // GraphQLType instance.


  function buildType(type) {
    if (type && type.name && type.kind) {
      switch (type.kind) {
        case _type_introspection__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].SCALAR:
          return buildScalarDef(type);

        case _type_introspection__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].OBJECT:
          return buildObjectDef(type);

        case _type_introspection__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].INTERFACE:
          return buildInterfaceDef(type);

        case _type_introspection__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].UNION:
          return buildUnionDef(type);

        case _type_introspection__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].ENUM:
          return buildEnumDef(type);

        case _type_introspection__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].INPUT_OBJECT:
          return buildInputObjectDef(type);
      }
    }

    throw new Error('Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema:' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type));
  }

  function buildScalarDef(scalarIntrospection) {
    return new _type_definition__WEBPACK_IMPORTED_MODULE_10__["GraphQLScalarType"]({
      name: scalarIntrospection.name,
      description: scalarIntrospection.description
    });
  }

  function buildObjectDef(objectIntrospection) {
    if (!objectIntrospection.interfaces) {
      throw new Error('Introspection result missing interfaces: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(objectIntrospection));
    }

    return new _type_definition__WEBPACK_IMPORTED_MODULE_10__["GraphQLObjectType"]({
      name: objectIntrospection.name,
      description: objectIntrospection.description,
      interfaces: function interfaces() {
        return objectIntrospection.interfaces.map(getInterfaceType);
      },
      fields: function fields() {
        return buildFieldDefMap(objectIntrospection);
      }
    });
  }

  function buildInterfaceDef(interfaceIntrospection) {
    return new _type_definition__WEBPACK_IMPORTED_MODULE_10__["GraphQLInterfaceType"]({
      name: interfaceIntrospection.name,
      description: interfaceIntrospection.description,
      fields: function fields() {
        return buildFieldDefMap(interfaceIntrospection);
      }
    });
  }

  function buildUnionDef(unionIntrospection) {
    if (!unionIntrospection.possibleTypes) {
      throw new Error('Introspection result missing possibleTypes: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(unionIntrospection));
    }

    return new _type_definition__WEBPACK_IMPORTED_MODULE_10__["GraphQLUnionType"]({
      name: unionIntrospection.name,
      description: unionIntrospection.description,
      types: function types() {
        return unionIntrospection.possibleTypes.map(getObjectType);
      }
    });
  }

  function buildEnumDef(enumIntrospection) {
    if (!enumIntrospection.enumValues) {
      throw new Error('Introspection result missing enumValues: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(enumIntrospection));
    }

    return new _type_definition__WEBPACK_IMPORTED_MODULE_10__["GraphQLEnumType"]({
      name: enumIntrospection.name,
      description: enumIntrospection.description,
      values: Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_3__["default"])(enumIntrospection.enumValues, function (valueIntrospection) {
        return valueIntrospection.name;
      }, function (valueIntrospection) {
        return {
          description: valueIntrospection.description,
          deprecationReason: valueIntrospection.deprecationReason
        };
      })
    });
  }

  function buildInputObjectDef(inputObjectIntrospection) {
    if (!inputObjectIntrospection.inputFields) {
      throw new Error('Introspection result missing inputFields: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(inputObjectIntrospection));
    }

    return new _type_definition__WEBPACK_IMPORTED_MODULE_10__["GraphQLInputObjectType"]({
      name: inputObjectIntrospection.name,
      description: inputObjectIntrospection.description,
      fields: function fields() {
        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
      }
    });
  }

  function buildFieldDefMap(typeIntrospection) {
    if (!typeIntrospection.fields) {
      throw new Error('Introspection result missing fields: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(typeIntrospection));
    }

    return Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_3__["default"])(typeIntrospection.fields, function (fieldIntrospection) {
      return fieldIntrospection.name;
    }, function (fieldIntrospection) {
      if (!fieldIntrospection.args) {
        throw new Error('Introspection result missing field args: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(fieldIntrospection));
      }

      return {
        description: fieldIntrospection.description,
        deprecationReason: fieldIntrospection.deprecationReason,
        type: getOutputType(fieldIntrospection.type),
        args: buildInputValueDefMap(fieldIntrospection.args)
      };
    });
  }

  function buildInputValueDefMap(inputValueIntrospections) {
    return Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_3__["default"])(inputValueIntrospections, function (inputValue) {
      return inputValue.name;
    }, buildInputValue);
  }

  function buildInputValue(inputValueIntrospection) {
    var type = getInputType(inputValueIntrospection.type);
    var defaultValue = inputValueIntrospection.defaultValue ? Object(_valueFromAST__WEBPACK_IMPORTED_MODULE_11__["valueFromAST"])(Object(_language_parser__WEBPACK_IMPORTED_MODULE_5__["parseValue"])(inputValueIntrospection.defaultValue), type) : undefined;
    return {
      description: inputValueIntrospection.description,
      type: type,
      defaultValue: defaultValue
    };
  }

  function buildDirective(directiveIntrospection) {
    if (!directiveIntrospection.args) {
      throw new Error('Introspection result missing directive args: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(directiveIntrospection));
    }

    if (!directiveIntrospection.locations) {
      throw new Error('Introspection result missing directive locations: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(directiveIntrospection));
    }

    return new _type_directives__WEBPACK_IMPORTED_MODULE_6__["GraphQLDirective"]({
      name: directiveIntrospection.name,
      description: directiveIntrospection.description,
      locations: directiveIntrospection.locations.slice(),
      args: buildInputValueDefMap(directiveIntrospection.args)
    });
  }
}


/***/ }),

/***/ "../../graphql/utilities/coerceInputValue.mjs":
/*!*******************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/coerceInputValue.mjs ***!
  \*******************************************************************************/
/*! exports provided: coerceInputValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceInputValue", function() { return coerceInputValue; });
/* harmony import */ var iterall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iterall */ "../../iterall/index.mjs");
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectValues */ "../../graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant */ "../../graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/didYouMean */ "../../graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/isObjectLike */ "../../graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/suggestionList */ "../../graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _jsutils_printPathArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/printPathArray */ "../../graphql/jsutils/printPathArray.mjs");
/* harmony import */ var _jsutils_Path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/Path */ "../../graphql/jsutils/Path.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");












/**
 * Coerces a JavaScript value given a GraphQL Input Type.
 */
function coerceInputValue(inputValue, type) {
  var onError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOnError;
  return coerceInputValueImpl(inputValue, type, onError);
}

function defaultOnError(path, invalidValue, error) {
  var errorPrefix = 'Invalid value ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(invalidValue);

  if (path.length > 0) {
    errorPrefix += " at \"value".concat(Object(_jsutils_printPathArray__WEBPACK_IMPORTED_MODULE_7__["default"])(path), "\": ");
  }

  error.message = errorPrefix + ': ' + error.message;
  throw error;
}

function coerceInputValueImpl(inputValue, type, onError, path) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["isNonNullType"])(type)) {
    if (inputValue != null) {
      return coerceInputValueImpl(inputValue, type.ofType, onError, path);
    }

    onError(Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_8__["pathToArray"])(path), inputValue, new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_9__["GraphQLError"]("Expected non-nullable type ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " not to be null.")));
    return;
  }

  if (inputValue == null) {
    // Explicitly return the value null.
    return null;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["isListType"])(type)) {
    var itemType = type.ofType;

    if (Object(iterall__WEBPACK_IMPORTED_MODULE_0__["isCollection"])(inputValue)) {
      var coercedValue = [];
      Object(iterall__WEBPACK_IMPORTED_MODULE_0__["forEach"])(inputValue, function (itemValue, index) {
        coercedValue.push(coerceInputValueImpl(itemValue, itemType, onError, Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_8__["addPath"])(path, index)));
      });
      return coercedValue;
    } // Lists accept a non-list value as a list of one.


    return [coerceInputValueImpl(inputValue, itemType, onError, path)];
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["isInputObjectType"])(type)) {
    if (!Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_5__["default"])(inputValue)) {
      onError(Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_8__["pathToArray"])(path), inputValue, new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_9__["GraphQLError"]("Expected type ".concat(type.name, " to be an object.")));
      return;
    }

    var _coercedValue = {};
    var fieldDefs = type.getFields();

    for (var _i2 = 0, _objectValues2 = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(fieldDefs); _i2 < _objectValues2.length; _i2++) {
      var field = _objectValues2[_i2];
      var fieldValue = inputValue[field.name];

      if (fieldValue === undefined) {
        if (field.defaultValue !== undefined) {
          _coercedValue[field.name] = field.defaultValue;
        } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["isNonNullType"])(field.type)) {
          var typeStr = Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(field.type);
          onError(Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_8__["pathToArray"])(path), inputValue, new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_9__["GraphQLError"]("Field ".concat(field.name, " of required type ").concat(typeStr, " was not provided.")));
        }

        continue;
      }

      _coercedValue[field.name] = coerceInputValueImpl(fieldValue, field.type, onError, Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_8__["addPath"])(path, field.name));
    } // Ensure every provided field is defined.


    for (var _i4 = 0, _Object$keys2 = Object.keys(inputValue); _i4 < _Object$keys2.length; _i4++) {
      var fieldName = _Object$keys2[_i4];

      if (!fieldDefs[fieldName]) {
        var suggestions = Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_6__["default"])(fieldName, Object.keys(type.getFields()));
        onError(Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_8__["pathToArray"])(path), inputValue, new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_9__["GraphQLError"]("Field \"".concat(fieldName, "\" is not defined by type ").concat(type.name, ".") + Object(_jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_4__["default"])(suggestions)));
      }
    }

    return _coercedValue;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["isScalarType"])(type)) {
    var parseResult; // Scalars determine if a input value is valid via parseValue(), which can
    // throw to indicate failure. If it throws, maintain a reference to
    // the original error.

    try {
      parseResult = type.parseValue(inputValue);
    } catch (error) {
      onError(Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_8__["pathToArray"])(path), inputValue, new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_9__["GraphQLError"]("Expected type ".concat(type.name, ". ") + error.message, undefined, undefined, undefined, undefined, error));
      return;
    }

    if (parseResult === undefined) {
      onError(Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_8__["pathToArray"])(path), inputValue, new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_9__["GraphQLError"]("Expected type ".concat(type.name, ".")));
    }

    return parseResult;
  }

  /* istanbul ignore else */
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["isEnumType"])(type)) {
    if (typeof inputValue === 'string') {
      var enumValue = type.getValue(inputValue);

      if (enumValue) {
        return enumValue.value;
      }
    }

    var _suggestions = Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_6__["default"])(String(inputValue), type.getValues().map(function (enumValue) {
      return enumValue.name;
    }));

    onError(Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_8__["pathToArray"])(path), inputValue, new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_9__["GraphQLError"]("Expected type ".concat(type.name, ".") + Object(_jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_4__["default"])(_suggestions)));
    return;
  } // Not reachable. All possible input types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Unexpected input type: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type));
}


/***/ }),

/***/ "../../graphql/utilities/coerceValue.mjs":
/*!**************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/coerceValue.mjs ***!
  \**************************************************************************/
/*! exports provided: coerceValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceValue", function() { return coerceValue; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_printPathArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/printPathArray */ "../../graphql/jsutils/printPathArray.mjs");
/* harmony import */ var _jsutils_Path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/Path */ "../../graphql/jsutils/Path.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _coerceInputValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coerceInputValue */ "../../graphql/utilities/coerceInputValue.mjs");
/* istanbul ignore file */






/**
 * Deprecated. Use coerceInputValue() directly for richer information.
 *
 * This function will be removed in v15
 */
function coerceValue(inputValue, type, blameNode, path) {
  var errors = [];
  var value = Object(_coerceInputValue__WEBPACK_IMPORTED_MODULE_4__["coerceInputValue"])(inputValue, type, function (errorPath, invalidValue, error) {
    var errorPrefix = 'Invalid value ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(invalidValue);
    var pathArray = [].concat(Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_2__["pathToArray"])(path), errorPath);

    if (pathArray.length > 0) {
      errorPrefix += " at \"value".concat(Object(_jsutils_printPathArray__WEBPACK_IMPORTED_MODULE_1__["default"])(pathArray), "\"");
    }

    errors.push(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_3__["GraphQLError"](errorPrefix + ': ' + error.message, blameNode, undefined, undefined, undefined, error.originalError));
  });
  return errors.length > 0 ? {
    errors: errors,
    value: undefined
  } : {
    errors: undefined,
    value: value
  };
}


/***/ }),

/***/ "../../graphql/utilities/concatAST.mjs":
/*!************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/concatAST.mjs ***!
  \************************************************************************/
/*! exports provided: concatAST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAST", function() { return concatAST; });
/* harmony import */ var _polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/flatMap */ "../../graphql/polyfills/flatMap.mjs");


/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */
function concatAST(asts) {
  return {
    kind: 'Document',
    definitions: Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(asts, function (ast) {
      return ast.definitions;
    })
  };
}


/***/ }),

/***/ "../../graphql/utilities/extendSchema.mjs":
/*!***************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/extendSchema.mjs ***!
  \***************************************************************************/
/*! exports provided: extendSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendSchema", function() { return extendSchema; });
/* harmony import */ var _polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/flatMap */ "../../graphql/polyfills/flatMap.mjs");
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectValues */ "../../graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/mapValue */ "../../graphql/jsutils/mapValue.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/invariant */ "../../graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/devAssert */ "../../graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/keyValMap */ "../../graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _language_predicates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../language/predicates */ "../../graphql/language/predicates.mjs");
/* harmony import */ var _validation_validate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../validation/validate */ "../../graphql/validation/validate.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../type/directives */ "../../graphql/type/directives.mjs");
/* harmony import */ var _type_scalars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../type/scalars */ "../../graphql/type/scalars.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../type/introspection */ "../../graphql/type/introspection.mjs");
/* harmony import */ var _type_schema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../type/schema */ "../../graphql/type/schema.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");
/* harmony import */ var _buildASTSchema__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./buildASTSchema */ "../../graphql/utilities/buildASTSchema.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 *
 * Accepts options as a third argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function extendSchema(schema, documentAST, options) {
  Object(_type_schema__WEBPACK_IMPORTED_MODULE_13__["assertSchema"])(schema);
  documentAST && documentAST.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].DOCUMENT || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide valid Document AST');

  if (!options || !(options.assumeValid || options.assumeValidSDL)) {
    Object(_validation_validate__WEBPACK_IMPORTED_MODULE_9__["assertValidSDLExtension"])(documentAST, schema);
  } // Collect the type definitions and extensions found in the document.


  var typeDefs = [];
  var typeExtsMap = Object.create(null); // New directives and types are separate because a directives and types can
  // have the same name. For example, a type named "skip".

  var directiveDefs = [];
  var schemaDef; // Schema extensions are collected which may add additional operation types.

  var schemaExts = [];

  for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
    var def = _documentAST$definiti2[_i2];

    if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].SCHEMA_DEFINITION) {
      schemaDef = def;
    } else if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].SCHEMA_EXTENSION) {
      schemaExts.push(def);
    } else if (Object(_language_predicates__WEBPACK_IMPORTED_MODULE_8__["isTypeDefinitionNode"])(def)) {
      typeDefs.push(def);
    } else if (Object(_language_predicates__WEBPACK_IMPORTED_MODULE_8__["isTypeExtensionNode"])(def)) {
      var extendedTypeName = def.name.value;
      var existingTypeExts = typeExtsMap[extendedTypeName];
      typeExtsMap[extendedTypeName] = existingTypeExts ? existingTypeExts.concat([def]) : [def];
    } else if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_7__["Kind"].DIRECTIVE_DEFINITION) {
      directiveDefs.push(def);
    }
  } // If this document contains no new types, extensions, or directives then
  // return the same unmodified GraphQLSchema instance.


  if (Object.keys(typeExtsMap).length === 0 && typeDefs.length === 0 && directiveDefs.length === 0 && schemaExts.length === 0 && !schemaDef) {
    return schema;
  }

  var schemaConfig = schema.toConfig();
  var astBuilder = new _buildASTSchema__WEBPACK_IMPORTED_MODULE_15__["ASTDefinitionBuilder"](options, function (typeName) {
    var type = typeMap[typeName];

    if (type === undefined) {
      throw new Error("Unknown type: \"".concat(typeName, "\"."));
    }

    return type;
  });
  var typeMap = Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_6__["default"])(typeDefs, function (node) {
    return node.name.value;
  }, function (node) {
    return astBuilder.buildType(node);
  });

  for (var _i4 = 0, _schemaConfig$types2 = schemaConfig.types; _i4 < _schemaConfig$types2.length; _i4++) {
    var existingType = _schemaConfig$types2[_i4];
    typeMap[existingType.name] = extendNamedType(existingType);
  } // Get the extended root operation types.


  var operationTypes = {
    query: schemaConfig.query && schemaConfig.query.name,
    mutation: schemaConfig.mutation && schemaConfig.mutation.name,
    subscription: schemaConfig.subscription && schemaConfig.subscription.name
  };

  if (schemaDef) {
    for (var _i6 = 0, _schemaDef$operationT2 = schemaDef.operationTypes; _i6 < _schemaDef$operationT2.length; _i6++) {
      var _ref2 = _schemaDef$operationT2[_i6];
      var operation = _ref2.operation;
      var type = _ref2.type;
      operationTypes[operation] = type.name.value;
    }
  } // Then, incorporate schema definition and all schema extensions.


  for (var _i8 = 0; _i8 < schemaExts.length; _i8++) {
    var schemaExt = schemaExts[_i8];

    if (schemaExt.operationTypes) {
      for (var _i10 = 0, _schemaExt$operationT2 = schemaExt.operationTypes; _i10 < _schemaExt$operationT2.length; _i10++) {
        var _ref4 = _schemaExt$operationT2[_i10];
        var _operation = _ref4.operation;
        var _type = _ref4.type;
        operationTypes[_operation] = _type.name.value;
      }
    }
  } // Support both original legacy names and extended legacy names.


  var allowedLegacyNames = schemaConfig.allowedLegacyNames.concat(options && options.allowedLegacyNames || []); // Then produce and return a Schema with these types.

  return new _type_schema__WEBPACK_IMPORTED_MODULE_13__["GraphQLSchema"]({
    // Note: While this could make early assertions to get the correctly
    // typed values, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    query: getMaybeTypeByName(operationTypes.query),
    mutation: getMaybeTypeByName(operationTypes.mutation),
    subscription: getMaybeTypeByName(operationTypes.subscription),
    types: Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(typeMap),
    directives: getMergedDirectives(),
    astNode: schemaDef || schemaConfig.astNode,
    extensionASTNodes: schemaConfig.extensionASTNodes.concat(schemaExts),
    allowedLegacyNames: allowedLegacyNames
  }); // Below are functions used for producing this schema that have closed over
  // this scope and have access to the schema, cache, and newly defined types.

  function replaceType(type) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_14__["isListType"])(type)) {
      return new _type_definition__WEBPACK_IMPORTED_MODULE_14__["GraphQLList"](replaceType(type.ofType));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_14__["isNonNullType"])(type)) {
      return new _type_definition__WEBPACK_IMPORTED_MODULE_14__["GraphQLNonNull"](replaceType(type.ofType));
    }

    return replaceNamedType(type);
  }

  function replaceNamedType(type) {
    return typeMap[type.name];
  }

  function getMaybeTypeByName(typeName) {
    return typeName ? typeMap[typeName] : null;
  }

  function getMergedDirectives() {
    var existingDirectives = schema.getDirectives().map(extendDirective);
    existingDirectives || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'schema must have default directives');
    return existingDirectives.concat(directiveDefs.map(function (node) {
      return astBuilder.buildDirective(node);
    }));
  }

  function extendNamedType(type) {
    if (Object(_type_introspection__WEBPACK_IMPORTED_MODULE_12__["isIntrospectionType"])(type) || Object(_type_scalars__WEBPACK_IMPORTED_MODULE_11__["isSpecifiedScalarType"])(type)) {
      // Builtin types are not extended.
      return type;
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_14__["isScalarType"])(type)) {
      return extendScalarType(type);
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_14__["isObjectType"])(type)) {
      return extendObjectType(type);
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_14__["isInterfaceType"])(type)) {
      return extendInterfaceType(type);
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_14__["isUnionType"])(type)) {
      return extendUnionType(type);
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_14__["isEnumType"])(type)) {
      return extendEnumType(type);
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_14__["isInputObjectType"])(type)) {
      return extendInputObjectType(type);
    } // Not reachable. All possible types have been considered.


    /* istanbul ignore next */
    Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Unexpected type: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type));
  }

  function extendDirective(directive) {
    var config = directive.toConfig();
    return new _type_directives__WEBPACK_IMPORTED_MODULE_10__["GraphQLDirective"](_objectSpread({}, config, {
      args: Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__["default"])(config.args, extendArg)
    }));
  }

  function extendInputObjectType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    var fieldNodes = Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions, function (node) {
      return node.fields || [];
    });
    return new _type_definition__WEBPACK_IMPORTED_MODULE_14__["GraphQLInputObjectType"](_objectSpread({}, config, {
      fields: function fields() {
        return _objectSpread({}, Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__["default"])(config.fields, function (field) {
          return _objectSpread({}, field, {
            type: replaceType(field.type)
          });
        }), {}, Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_6__["default"])(fieldNodes, function (field) {
          return field.name.value;
        }, function (field) {
          return astBuilder.buildInputField(field);
        }));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendEnumType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[type.name] || [];
    var valueNodes = Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions, function (node) {
      return node.values || [];
    });
    return new _type_definition__WEBPACK_IMPORTED_MODULE_14__["GraphQLEnumType"](_objectSpread({}, config, {
      values: _objectSpread({}, config.values, {}, Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_6__["default"])(valueNodes, function (value) {
        return value.name.value;
      }, function (value) {
        return astBuilder.buildEnumValue(value);
      })),
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendScalarType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    return new _type_definition__WEBPACK_IMPORTED_MODULE_14__["GraphQLScalarType"](_objectSpread({}, config, {
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendObjectType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    var interfaceNodes = Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions, function (node) {
      return node.interfaces || [];
    });
    var fieldNodes = Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions, function (node) {
      return node.fields || [];
    });
    return new _type_definition__WEBPACK_IMPORTED_MODULE_14__["GraphQLObjectType"](_objectSpread({}, config, {
      interfaces: function interfaces() {
        return [].concat(type.getInterfaces().map(replaceNamedType), interfaceNodes.map(function (node) {
          return astBuilder.getNamedType(node);
        }));
      },
      fields: function fields() {
        return _objectSpread({}, Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__["default"])(config.fields, extendField), {}, Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_6__["default"])(fieldNodes, function (node) {
          return node.name.value;
        }, function (node) {
          return astBuilder.buildField(node);
        }));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendInterfaceType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    var fieldNodes = Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions, function (node) {
      return node.fields || [];
    });
    return new _type_definition__WEBPACK_IMPORTED_MODULE_14__["GraphQLInterfaceType"](_objectSpread({}, config, {
      fields: function fields() {
        return _objectSpread({}, Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__["default"])(config.fields, extendField), {}, Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_6__["default"])(fieldNodes, function (node) {
          return node.name.value;
        }, function (node) {
          return astBuilder.buildField(node);
        }));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendUnionType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    var typeNodes = Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions, function (node) {
      return node.types || [];
    });
    return new _type_definition__WEBPACK_IMPORTED_MODULE_14__["GraphQLUnionType"](_objectSpread({}, config, {
      types: function types() {
        return [].concat(type.getTypes().map(replaceNamedType), typeNodes.map(function (node) {
          return astBuilder.getNamedType(node);
        }));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendField(field) {
    return _objectSpread({}, field, {
      type: replaceType(field.type),
      args: Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__["default"])(field.args, extendArg)
    });
  }

  function extendArg(arg) {
    return _objectSpread({}, arg, {
      type: replaceType(arg.type)
    });
  }
}


/***/ }),

/***/ "../../graphql/utilities/findBreakingChanges.mjs":
/*!**********************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/findBreakingChanges.mjs ***!
  \**********************************************************************************/
/*! exports provided: BreakingChangeType, DangerousChangeType, findBreakingChanges, findDangerousChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakingChangeType", function() { return BreakingChangeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DangerousChangeType", function() { return DangerousChangeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBreakingChanges", function() { return findBreakingChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDangerousChanges", function() { return findDangerousChanges; });
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues */ "../../graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/keyMap */ "../../graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant */ "../../graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/printer */ "../../graphql/language/printer.mjs");
/* harmony import */ var _language_visitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/visitor */ "../../graphql/language/visitor.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");
/* harmony import */ var _astFromValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./astFromValue */ "../../graphql/utilities/astFromValue.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var BreakingChangeType = Object.freeze({
  TYPE_REMOVED: 'TYPE_REMOVED',
  TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND',
  TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION',
  VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM',
  REQUIRED_INPUT_FIELD_ADDED: 'REQUIRED_INPUT_FIELD_ADDED',
  INTERFACE_REMOVED_FROM_OBJECT: 'INTERFACE_REMOVED_FROM_OBJECT',
  FIELD_REMOVED: 'FIELD_REMOVED',
  FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND',
  REQUIRED_ARG_ADDED: 'REQUIRED_ARG_ADDED',
  ARG_REMOVED: 'ARG_REMOVED',
  ARG_CHANGED_KIND: 'ARG_CHANGED_KIND',
  DIRECTIVE_REMOVED: 'DIRECTIVE_REMOVED',
  DIRECTIVE_ARG_REMOVED: 'DIRECTIVE_ARG_REMOVED',
  REQUIRED_DIRECTIVE_ARG_ADDED: 'REQUIRED_DIRECTIVE_ARG_ADDED',
  DIRECTIVE_LOCATION_REMOVED: 'DIRECTIVE_LOCATION_REMOVED'
});
var DangerousChangeType = Object.freeze({
  VALUE_ADDED_TO_ENUM: 'VALUE_ADDED_TO_ENUM',
  TYPE_ADDED_TO_UNION: 'TYPE_ADDED_TO_UNION',
  OPTIONAL_INPUT_FIELD_ADDED: 'OPTIONAL_INPUT_FIELD_ADDED',
  OPTIONAL_ARG_ADDED: 'OPTIONAL_ARG_ADDED',
  INTERFACE_ADDED_TO_OBJECT: 'INTERFACE_ADDED_TO_OBJECT',
  ARG_DEFAULT_VALUE_CHANGE: 'ARG_DEFAULT_VALUE_CHANGE'
});

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
function findBreakingChanges(oldSchema, newSchema) {
  var breakingChanges = findSchemaChanges(oldSchema, newSchema).filter(function (change) {
    return change.type in BreakingChangeType;
  });
  return breakingChanges;
}
/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of potentially dangerous changes covered by the other functions down below.
 */

function findDangerousChanges(oldSchema, newSchema) {
  var dangerousChanges = findSchemaChanges(oldSchema, newSchema).filter(function (change) {
    return change.type in DangerousChangeType;
  });
  return dangerousChanges;
}

function findSchemaChanges(oldSchema, newSchema) {
  return [].concat(findTypeChanges(oldSchema, newSchema), findDirectiveChanges(oldSchema, newSchema));
}

function findDirectiveChanges(oldSchema, newSchema) {
  var schemaChanges = [];
  var directivesDiff = diff(oldSchema.getDirectives(), newSchema.getDirectives());

  for (var _i2 = 0, _directivesDiff$remov2 = directivesDiff.removed; _i2 < _directivesDiff$remov2.length; _i2++) {
    var oldDirective = _directivesDiff$remov2[_i2];
    schemaChanges.push({
      type: BreakingChangeType.DIRECTIVE_REMOVED,
      description: "".concat(oldDirective.name, " was removed.")
    });
  }

  for (var _i4 = 0, _directivesDiff$persi2 = directivesDiff.persisted; _i4 < _directivesDiff$persi2.length; _i4++) {
    var _ref2 = _directivesDiff$persi2[_i4];
    var _oldDirective = _ref2[0];
    var newDirective = _ref2[1];
    var argsDiff = diff(_oldDirective.args, newDirective.args);

    for (var _i6 = 0, _argsDiff$added2 = argsDiff.added; _i6 < _argsDiff$added2.length; _i6++) {
      var newArg = _argsDiff$added2[_i6];

      if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isRequiredArgument"])(newArg)) {
        schemaChanges.push({
          type: BreakingChangeType.REQUIRED_DIRECTIVE_ARG_ADDED,
          description: "A required arg ".concat(newArg.name, " on directive ").concat(_oldDirective.name, " was added.")
        });
      }
    }

    for (var _i8 = 0, _argsDiff$removed2 = argsDiff.removed; _i8 < _argsDiff$removed2.length; _i8++) {
      var oldArg = _argsDiff$removed2[_i8];
      schemaChanges.push({
        type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
        description: "".concat(oldArg.name, " was removed from ").concat(_oldDirective.name, ".")
      });
    }

    for (var _i10 = 0, _oldDirective$locatio2 = _oldDirective.locations; _i10 < _oldDirective$locatio2.length; _i10++) {
      var location = _oldDirective$locatio2[_i10];

      if (newDirective.locations.indexOf(location) === -1) {
        schemaChanges.push({
          type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
          description: "".concat(location, " was removed from ").concat(_oldDirective.name, ".")
        });
      }
    }
  }

  return schemaChanges;
}

function findTypeChanges(oldSchema, newSchema) {
  var schemaChanges = [];
  var typesDiff = diff(Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(oldSchema.getTypeMap()), Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(newSchema.getTypeMap()));

  for (var _i12 = 0, _typesDiff$removed2 = typesDiff.removed; _i12 < _typesDiff$removed2.length; _i12++) {
    var oldType = _typesDiff$removed2[_i12];
    schemaChanges.push({
      type: BreakingChangeType.TYPE_REMOVED,
      description: "".concat(oldType.name, " was removed.")
    });
  }

  for (var _i14 = 0, _typesDiff$persisted2 = typesDiff.persisted; _i14 < _typesDiff$persisted2.length; _i14++) {
    var _ref4 = _typesDiff$persisted2[_i14];
    var _oldType = _ref4[0];
    var newType = _ref4[1];

    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isEnumType"])(_oldType) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isEnumType"])(newType)) {
      schemaChanges.push.apply(schemaChanges, findEnumTypeChanges(_oldType, newType));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isUnionType"])(_oldType) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isUnionType"])(newType)) {
      schemaChanges.push.apply(schemaChanges, findUnionTypeChanges(_oldType, newType));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isInputObjectType"])(_oldType) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isInputObjectType"])(newType)) {
      schemaChanges.push.apply(schemaChanges, findInputObjectTypeChanges(_oldType, newType));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isObjectType"])(_oldType) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isObjectType"])(newType)) {
      schemaChanges.push.apply(schemaChanges, findObjectTypeChanges(_oldType, newType));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isInterfaceType"])(_oldType) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isInterfaceType"])(newType)) {
      schemaChanges.push.apply(schemaChanges, findFieldChanges(_oldType, newType));
    } else if (_oldType.constructor !== newType.constructor) {
      schemaChanges.push({
        type: BreakingChangeType.TYPE_CHANGED_KIND,
        description: "".concat(_oldType.name, " changed from ") + "".concat(typeKindName(_oldType), " to ").concat(typeKindName(newType), ".")
      });
    }
  }

  return schemaChanges;
}

function findInputObjectTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var fieldsDiff = diff(Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(oldType.getFields()), Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(newType.getFields()));

  for (var _i16 = 0, _fieldsDiff$added2 = fieldsDiff.added; _i16 < _fieldsDiff$added2.length; _i16++) {
    var newField = _fieldsDiff$added2[_i16];

    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isRequiredInputField"])(newField)) {
      schemaChanges.push({
        type: BreakingChangeType.REQUIRED_INPUT_FIELD_ADDED,
        description: "A required field ".concat(newField.name, " on input type ").concat(oldType.name, " was added.")
      });
    } else {
      schemaChanges.push({
        type: DangerousChangeType.OPTIONAL_INPUT_FIELD_ADDED,
        description: "An optional field ".concat(newField.name, " on input type ").concat(oldType.name, " was added.")
      });
    }
  }

  for (var _i18 = 0, _fieldsDiff$removed2 = fieldsDiff.removed; _i18 < _fieldsDiff$removed2.length; _i18++) {
    var oldField = _fieldsDiff$removed2[_i18];
    schemaChanges.push({
      type: BreakingChangeType.FIELD_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " was removed.")
    });
  }

  for (var _i20 = 0, _fieldsDiff$persisted2 = fieldsDiff.persisted; _i20 < _fieldsDiff$persisted2.length; _i20++) {
    var _ref6 = _fieldsDiff$persisted2[_i20];
    var _oldField = _ref6[0];
    var _newField = _ref6[1];
    var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(_oldField.type, _newField.type);

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.FIELD_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(_oldField.name, " changed type from ") + "".concat(String(_oldField.type), " to ").concat(String(_newField.type), ".")
      });
    }
  }

  return schemaChanges;
}

function findUnionTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var possibleTypesDiff = diff(oldType.getTypes(), newType.getTypes());

  for (var _i22 = 0, _possibleTypesDiff$ad2 = possibleTypesDiff.added; _i22 < _possibleTypesDiff$ad2.length; _i22++) {
    var newPossibleType = _possibleTypesDiff$ad2[_i22];
    schemaChanges.push({
      type: DangerousChangeType.TYPE_ADDED_TO_UNION,
      description: "".concat(newPossibleType.name, " was added to union type ").concat(oldType.name, ".")
    });
  }

  for (var _i24 = 0, _possibleTypesDiff$re2 = possibleTypesDiff.removed; _i24 < _possibleTypesDiff$re2.length; _i24++) {
    var oldPossibleType = _possibleTypesDiff$re2[_i24];
    schemaChanges.push({
      type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
      description: "".concat(oldPossibleType.name, " was removed from union type ").concat(oldType.name, ".")
    });
  }

  return schemaChanges;
}

function findEnumTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var valuesDiff = diff(oldType.getValues(), newType.getValues());

  for (var _i26 = 0, _valuesDiff$added2 = valuesDiff.added; _i26 < _valuesDiff$added2.length; _i26++) {
    var newValue = _valuesDiff$added2[_i26];
    schemaChanges.push({
      type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
      description: "".concat(newValue.name, " was added to enum type ").concat(oldType.name, ".")
    });
  }

  for (var _i28 = 0, _valuesDiff$removed2 = valuesDiff.removed; _i28 < _valuesDiff$removed2.length; _i28++) {
    var oldValue = _valuesDiff$removed2[_i28];
    schemaChanges.push({
      type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
      description: "".concat(oldValue.name, " was removed from enum type ").concat(oldType.name, ".")
    });
  }

  return schemaChanges;
}

function findObjectTypeChanges(oldType, newType) {
  var schemaChanges = findFieldChanges(oldType, newType);
  var interfacesDiff = diff(oldType.getInterfaces(), newType.getInterfaces());

  for (var _i30 = 0, _interfacesDiff$added2 = interfacesDiff.added; _i30 < _interfacesDiff$added2.length; _i30++) {
    var newInterface = _interfacesDiff$added2[_i30];
    schemaChanges.push({
      type: DangerousChangeType.INTERFACE_ADDED_TO_OBJECT,
      description: "".concat(newInterface.name, " added to interfaces implemented by ").concat(oldType.name, ".")
    });
  }

  for (var _i32 = 0, _interfacesDiff$remov2 = interfacesDiff.removed; _i32 < _interfacesDiff$remov2.length; _i32++) {
    var oldInterface = _interfacesDiff$remov2[_i32];
    schemaChanges.push({
      type: BreakingChangeType.INTERFACE_REMOVED_FROM_OBJECT,
      description: "".concat(oldType.name, " no longer implements interface ").concat(oldInterface.name, ".")
    });
  }

  return schemaChanges;
}

function findFieldChanges(oldType, newType) {
  var schemaChanges = [];
  var fieldsDiff = diff(Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(oldType.getFields()), Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(newType.getFields()));

  for (var _i34 = 0, _fieldsDiff$removed4 = fieldsDiff.removed; _i34 < _fieldsDiff$removed4.length; _i34++) {
    var oldField = _fieldsDiff$removed4[_i34];
    schemaChanges.push({
      type: BreakingChangeType.FIELD_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " was removed.")
    });
  }

  for (var _i36 = 0, _fieldsDiff$persisted4 = fieldsDiff.persisted; _i36 < _fieldsDiff$persisted4.length; _i36++) {
    var _ref8 = _fieldsDiff$persisted4[_i36];
    var _oldField2 = _ref8[0];
    var newField = _ref8[1];
    schemaChanges.push.apply(schemaChanges, findArgChanges(oldType, _oldField2, newField));
    var isSafe = isChangeSafeForObjectOrInterfaceField(_oldField2.type, newField.type);

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.FIELD_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(_oldField2.name, " changed type from ") + "".concat(String(_oldField2.type), " to ").concat(String(newField.type), ".")
      });
    }
  }

  return schemaChanges;
}

function findArgChanges(oldType, oldField, newField) {
  var schemaChanges = [];
  var argsDiff = diff(oldField.args, newField.args);

  for (var _i38 = 0, _argsDiff$removed4 = argsDiff.removed; _i38 < _argsDiff$removed4.length; _i38++) {
    var oldArg = _argsDiff$removed4[_i38];
    schemaChanges.push({
      type: BreakingChangeType.ARG_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(oldArg.name, " was removed.")
    });
  }

  for (var _i40 = 0, _argsDiff$persisted2 = argsDiff.persisted; _i40 < _argsDiff$persisted2.length; _i40++) {
    var _ref10 = _argsDiff$persisted2[_i40];
    var _oldArg = _ref10[0];
    var newArg = _ref10[1];
    var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(_oldArg.type, newArg.type);

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.ARG_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " has changed type from ") + "".concat(String(_oldArg.type), " to ").concat(String(newArg.type), ".")
      });
    } else if (_oldArg.defaultValue !== undefined) {
      if (newArg.defaultValue === undefined) {
        schemaChanges.push({
          type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
          description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " defaultValue was removed.")
        });
      } else {
        // Since we looking only for client's observable changes we should
        // compare default values in the same representation as they are
        // represented inside introspection.
        var oldValueStr = stringifyValue(_oldArg.defaultValue, _oldArg.type);
        var newValueStr = stringifyValue(newArg.defaultValue, newArg.type);

        if (oldValueStr !== newValueStr) {
          schemaChanges.push({
            type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
            description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " has changed defaultValue from ").concat(oldValueStr, " to ").concat(newValueStr, ".")
          });
        }
      }
    }
  }

  for (var _i42 = 0, _argsDiff$added4 = argsDiff.added; _i42 < _argsDiff$added4.length; _i42++) {
    var _newArg = _argsDiff$added4[_i42];

    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isRequiredArgument"])(_newArg)) {
      schemaChanges.push({
        type: BreakingChangeType.REQUIRED_ARG_ADDED,
        description: "A required arg ".concat(_newArg.name, " on ").concat(oldType.name, ".").concat(oldField.name, " was added.")
      });
    } else {
      schemaChanges.push({
        type: DangerousChangeType.OPTIONAL_ARG_ADDED,
        description: "An optional arg ".concat(_newArg.name, " on ").concat(oldType.name, ".").concat(oldField.name, " was added.")
      });
    }
  }

  return schemaChanges;
}

function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isListType"])(oldType)) {
    return (// if they're both lists, make sure the underlying types are compatible
      Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isListType"])(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) || // moving from nullable to non-null of the same underlying type is safe
      Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(oldType)) {
    // if they're both non-null, make sure the underlying types are compatible
    return Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
  }

  return (// if they're both named types, see if their names are equivalent
    Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNamedType"])(newType) && oldType.name === newType.name || // moving from nullable to non-null of the same underlying type is safe
    Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
  );
}

function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isListType"])(oldType)) {
    // if they're both lists, make sure the underlying types are compatible
    return Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isListType"])(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(oldType)) {
    return (// if they're both non-null, make sure the underlying types are
      // compatible
      Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) || // moving from non-null to nullable of the same underlying type is safe
      !Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType)
    );
  } // if they're both named types, see if their names are equivalent


  return Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNamedType"])(newType) && oldType.name === newType.name;
}

function typeKindName(type) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isScalarType"])(type)) {
    return 'a Scalar type';
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isObjectType"])(type)) {
    return 'an Object type';
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isInterfaceType"])(type)) {
    return 'an Interface type';
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isUnionType"])(type)) {
    return 'a Union type';
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isEnumType"])(type)) {
    return 'an Enum type';
  }

  /* istanbul ignore else */
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isInputObjectType"])(type)) {
    return 'an Input type';
  } // Not reachable. All possible named types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Unexpected type: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type));
}

function stringifyValue(value, type) {
  var ast = Object(_astFromValue__WEBPACK_IMPORTED_MODULE_7__["astFromValue"])(value, type);

  /* istanbul ignore next */
  ast != null || Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(0);
  var sortedAST = Object(_language_visitor__WEBPACK_IMPORTED_MODULE_5__["visit"])(ast, {
    ObjectValue: function ObjectValue(objectNode) {
      var fields = [].concat(objectNode.fields).sort(function (fieldA, fieldB) {
        return fieldA.name.value.localeCompare(fieldB.name.value);
      });
      return _objectSpread({}, objectNode, {
        fields: fields
      });
    }
  });
  return Object(_language_printer__WEBPACK_IMPORTED_MODULE_4__["print"])(sortedAST);
}

function diff(oldArray, newArray) {
  var added = [];
  var removed = [];
  var persisted = [];
  var oldMap = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__["default"])(oldArray, function (_ref11) {
    var name = _ref11.name;
    return name;
  });
  var newMap = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__["default"])(newArray, function (_ref12) {
    var name = _ref12.name;
    return name;
  });

  for (var _i44 = 0; _i44 < oldArray.length; _i44++) {
    var oldItem = oldArray[_i44];
    var newItem = newMap[oldItem.name];

    if (newItem === undefined) {
      removed.push(oldItem);
    } else {
      persisted.push([oldItem, newItem]);
    }
  }

  for (var _i46 = 0; _i46 < newArray.length; _i46++) {
    var _newItem = newArray[_i46];

    if (oldMap[_newItem.name] === undefined) {
      added.push(_newItem);
    }
  }

  return {
    added: added,
    persisted: persisted,
    removed: removed
  };
}


/***/ }),

/***/ "../../graphql/utilities/findDeprecatedUsages.mjs":
/*!***********************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/findDeprecatedUsages.mjs ***!
  \***********************************************************************************/
/*! exports provided: findDeprecatedUsages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDeprecatedUsages", function() { return findDeprecatedUsages; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_visitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/visitor */ "../../graphql/language/visitor.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");
/* harmony import */ var _TypeInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TypeInfo */ "../../graphql/utilities/TypeInfo.mjs");




/**
 * A validation rule which reports deprecated usages.
 *
 * Returns a list of GraphQLError instances describing each deprecated use.
 */

function findDeprecatedUsages(schema, ast) {
  var errors = [];
  var typeInfo = new _TypeInfo__WEBPACK_IMPORTED_MODULE_3__["TypeInfo"](schema);
  Object(_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visit"])(ast, Object(_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visitWithTypeInfo"])(typeInfo, {
    Field: function Field(node) {
      var fieldDef = typeInfo.getFieldDef();

      if (fieldDef && fieldDef.isDeprecated) {
        var parentType = typeInfo.getParentType();

        if (parentType) {
          var reason = fieldDef.deprecationReason;
          errors.push(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("The field ".concat(parentType.name, ".").concat(fieldDef.name, " is deprecated.") + (reason ? ' ' + reason : ''), node));
        }
      }
    },
    EnumValue: function EnumValue(node) {
      var enumVal = typeInfo.getEnumValue();

      if (enumVal && enumVal.isDeprecated) {
        var type = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["getNamedType"])(typeInfo.getInputType());

        if (type) {
          var reason = enumVal.deprecationReason;
          errors.push(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("The enum value ".concat(type.name, ".").concat(enumVal.name, " is deprecated.") + (reason ? ' ' + reason : ''), node));
        }
      }
    }
  }));
  return errors;
}


/***/ }),

/***/ "../../graphql/utilities/getOperationAST.mjs":
/*!******************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/getOperationAST.mjs ***!
  \******************************************************************************/
/*! exports provided: getOperationAST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationAST", function() { return getOperationAST; });
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds */ "../../graphql/language/kinds.mjs");


/**
 * Returns an operation AST given a document AST and optionally an operation
 * name. If a name is not provided, an operation is only returned if only one is
 * provided in the document.
 */
function getOperationAST(documentAST, operationName) {
  var operation = null;

  for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
    var definition = _documentAST$definiti2[_i2];

    if (definition.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].OPERATION_DEFINITION) {
      if (!operationName) {
        // If no operation name was provided, only return an Operation if there
        // is one defined in the document. Upon encountering the second, return
        // null.
        if (operation) {
          return null;
        }

        operation = definition;
      } else if (definition.name && definition.name.value === operationName) {
        return definition;
      }
    }
  }

  return operation;
}


/***/ }),

/***/ "../../graphql/utilities/getOperationRootType.mjs":
/*!***********************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/getOperationRootType.mjs ***!
  \***********************************************************************************/
/*! exports provided: getOperationRootType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationRootType", function() { return getOperationRootType; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");


/**
 * Extracts the root type of the operation from the schema.
 */
function getOperationRootType(schema, operation) {
  if (operation.operation === 'query') {
    var queryType = schema.getQueryType();

    if (!queryType) {
      throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('Schema does not define the required query root type.', operation);
    }

    return queryType;
  }

  if (operation.operation === 'mutation') {
    var mutationType = schema.getMutationType();

    if (!mutationType) {
      throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('Schema is not configured for mutations.', operation);
    }

    return mutationType;
  }

  if (operation.operation === 'subscription') {
    var subscriptionType = schema.getSubscriptionType();

    if (!subscriptionType) {
      throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('Schema is not configured for subscriptions.', operation);
    }

    return subscriptionType;
  }

  throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('Can only have query, mutation and subscription operations.', operation);
}


/***/ }),

/***/ "../../graphql/utilities/index.mjs":
/*!********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/index.mjs ***!
  \********************************************************************/
/*! exports provided: getIntrospectionQuery, introspectionQuery, getOperationAST, getOperationRootType, introspectionFromSchema, buildClientSchema, buildASTSchema, buildSchema, getDescription, extendSchema, lexicographicSortSchema, printSchema, printType, printIntrospectionSchema, typeFromAST, valueFromAST, valueFromASTUntyped, astFromValue, TypeInfo, coerceInputValue, coerceValue, isValidJSValue, isValidLiteralValue, concatAST, separateOperations, stripIgnoredCharacters, isEqualType, isTypeSubTypeOf, doTypesOverlap, assertValidName, isValidNameError, BreakingChangeType, DangerousChangeType, findBreakingChanges, findDangerousChanges, findDeprecatedUsages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _introspectionQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./introspectionQuery */ "../../graphql/utilities/introspectionQuery.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIntrospectionQuery", function() { return _introspectionQuery__WEBPACK_IMPORTED_MODULE_0__["getIntrospectionQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionQuery", function() { return _introspectionQuery__WEBPACK_IMPORTED_MODULE_0__["introspectionQuery"]; });

/* harmony import */ var _getOperationAST__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getOperationAST */ "../../graphql/utilities/getOperationAST.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationAST", function() { return _getOperationAST__WEBPACK_IMPORTED_MODULE_1__["getOperationAST"]; });

/* harmony import */ var _getOperationRootType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getOperationRootType */ "../../graphql/utilities/getOperationRootType.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationRootType", function() { return _getOperationRootType__WEBPACK_IMPORTED_MODULE_2__["getOperationRootType"]; });

/* harmony import */ var _introspectionFromSchema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introspectionFromSchema */ "../../graphql/utilities/introspectionFromSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionFromSchema", function() { return _introspectionFromSchema__WEBPACK_IMPORTED_MODULE_3__["introspectionFromSchema"]; });

/* harmony import */ var _buildClientSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buildClientSchema */ "../../graphql/utilities/buildClientSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClientSchema", function() { return _buildClientSchema__WEBPACK_IMPORTED_MODULE_4__["buildClientSchema"]; });

/* harmony import */ var _buildASTSchema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buildASTSchema */ "../../graphql/utilities/buildASTSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildASTSchema", function() { return _buildASTSchema__WEBPACK_IMPORTED_MODULE_5__["buildASTSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildSchema", function() { return _buildASTSchema__WEBPACK_IMPORTED_MODULE_5__["buildSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDescription", function() { return _buildASTSchema__WEBPACK_IMPORTED_MODULE_5__["getDescription"]; });

/* harmony import */ var _extendSchema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extendSchema */ "../../graphql/utilities/extendSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendSchema", function() { return _extendSchema__WEBPACK_IMPORTED_MODULE_6__["extendSchema"]; });

/* harmony import */ var _lexicographicSortSchema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lexicographicSortSchema */ "../../graphql/utilities/lexicographicSortSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lexicographicSortSchema", function() { return _lexicographicSortSchema__WEBPACK_IMPORTED_MODULE_7__["lexicographicSortSchema"]; });

/* harmony import */ var _schemaPrinter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schemaPrinter */ "../../graphql/utilities/schemaPrinter.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printSchema", function() { return _schemaPrinter__WEBPACK_IMPORTED_MODULE_8__["printSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printType", function() { return _schemaPrinter__WEBPACK_IMPORTED_MODULE_8__["printType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printIntrospectionSchema", function() { return _schemaPrinter__WEBPACK_IMPORTED_MODULE_8__["printIntrospectionSchema"]; });

/* harmony import */ var _typeFromAST__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typeFromAST */ "../../graphql/utilities/typeFromAST.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeFromAST", function() { return _typeFromAST__WEBPACK_IMPORTED_MODULE_9__["typeFromAST"]; });

/* harmony import */ var _valueFromAST__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./valueFromAST */ "../../graphql/utilities/valueFromAST.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueFromAST", function() { return _valueFromAST__WEBPACK_IMPORTED_MODULE_10__["valueFromAST"]; });

/* harmony import */ var _valueFromASTUntyped__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./valueFromASTUntyped */ "../../graphql/utilities/valueFromASTUntyped.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueFromASTUntyped", function() { return _valueFromASTUntyped__WEBPACK_IMPORTED_MODULE_11__["valueFromASTUntyped"]; });

/* harmony import */ var _astFromValue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./astFromValue */ "../../graphql/utilities/astFromValue.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "astFromValue", function() { return _astFromValue__WEBPACK_IMPORTED_MODULE_12__["astFromValue"]; });

/* harmony import */ var _TypeInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TypeInfo */ "../../graphql/utilities/TypeInfo.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeInfo", function() { return _TypeInfo__WEBPACK_IMPORTED_MODULE_13__["TypeInfo"]; });

/* harmony import */ var _coerceInputValue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./coerceInputValue */ "../../graphql/utilities/coerceInputValue.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceInputValue", function() { return _coerceInputValue__WEBPACK_IMPORTED_MODULE_14__["coerceInputValue"]; });

/* harmony import */ var _coerceValue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./coerceValue */ "../../graphql/utilities/coerceValue.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceValue", function() { return _coerceValue__WEBPACK_IMPORTED_MODULE_15__["coerceValue"]; });

/* harmony import */ var _isValidJSValue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./isValidJSValue */ "../../graphql/utilities/isValidJSValue.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidJSValue", function() { return _isValidJSValue__WEBPACK_IMPORTED_MODULE_16__["isValidJSValue"]; });

/* harmony import */ var _isValidLiteralValue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./isValidLiteralValue */ "../../graphql/utilities/isValidLiteralValue.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidLiteralValue", function() { return _isValidLiteralValue__WEBPACK_IMPORTED_MODULE_17__["isValidLiteralValue"]; });

/* harmony import */ var _concatAST__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./concatAST */ "../../graphql/utilities/concatAST.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatAST", function() { return _concatAST__WEBPACK_IMPORTED_MODULE_18__["concatAST"]; });

/* harmony import */ var _separateOperations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./separateOperations */ "../../graphql/utilities/separateOperations.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "separateOperations", function() { return _separateOperations__WEBPACK_IMPORTED_MODULE_19__["separateOperations"]; });

/* harmony import */ var _stripIgnoredCharacters__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./stripIgnoredCharacters */ "../../graphql/utilities/stripIgnoredCharacters.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripIgnoredCharacters", function() { return _stripIgnoredCharacters__WEBPACK_IMPORTED_MODULE_20__["stripIgnoredCharacters"]; });

/* harmony import */ var _typeComparators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./typeComparators */ "../../graphql/utilities/typeComparators.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqualType", function() { return _typeComparators__WEBPACK_IMPORTED_MODULE_21__["isEqualType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSubTypeOf", function() { return _typeComparators__WEBPACK_IMPORTED_MODULE_21__["isTypeSubTypeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doTypesOverlap", function() { return _typeComparators__WEBPACK_IMPORTED_MODULE_21__["doTypesOverlap"]; });

/* harmony import */ var _assertValidName__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assertValidName */ "../../graphql/utilities/assertValidName.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertValidName", function() { return _assertValidName__WEBPACK_IMPORTED_MODULE_22__["assertValidName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidNameError", function() { return _assertValidName__WEBPACK_IMPORTED_MODULE_22__["isValidNameError"]; });

/* harmony import */ var _findBreakingChanges__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./findBreakingChanges */ "../../graphql/utilities/findBreakingChanges.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakingChangeType", function() { return _findBreakingChanges__WEBPACK_IMPORTED_MODULE_23__["BreakingChangeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DangerousChangeType", function() { return _findBreakingChanges__WEBPACK_IMPORTED_MODULE_23__["DangerousChangeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findBreakingChanges", function() { return _findBreakingChanges__WEBPACK_IMPORTED_MODULE_23__["findBreakingChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDangerousChanges", function() { return _findBreakingChanges__WEBPACK_IMPORTED_MODULE_23__["findDangerousChanges"]; });

/* harmony import */ var _findDeprecatedUsages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./findDeprecatedUsages */ "../../graphql/utilities/findDeprecatedUsages.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDeprecatedUsages", function() { return _findDeprecatedUsages__WEBPACK_IMPORTED_MODULE_24__["findDeprecatedUsages"]; });

// The GraphQL query recommended for a full schema introspection.

// Gets the target Operation from a Document.
 // Gets the Type for the target Operation AST.

 // Convert a GraphQLSchema to an IntrospectionQuery.

 // Build a GraphQLSchema from an introspection result.

 // Build a GraphQLSchema from GraphQL Schema language.


// Extends an existing GraphQLSchema from a parsed GraphQL Schema language AST.
 // Sort a GraphQLSchema.

 // Print a GraphQLSchema to GraphQL Schema language.

 // Create a GraphQLType from a GraphQL language AST.

 // Create a JavaScript value from a GraphQL language AST with a type.

 // Create a JavaScript value from a GraphQL language AST without a type.

 // Create a GraphQL language AST from a JavaScript value.

 // A helper to use within recursive-descent visitors which need to be aware of
// the GraphQL type system.

 // Coerces a JavaScript value to a GraphQL type, or produces errors.

 // @deprecated use coerceInputValue - will be removed in v15.

 // @deprecated use coerceInputValue - will be removed in v15.

 // @deprecated use validation - will be removed in v15

 // Concatenates multiple AST together.

 // Separates an AST into an AST per Operation.

 // Strips characters that are not significant to the validity or execution
// of a GraphQL document.

 // Comparators for types

 // Asserts that a string is a valid GraphQL name

 // Compares two GraphQLSchemas and detects breaking changes.


// Report all deprecated usage within a GraphQL document.



/***/ }),

/***/ "../../graphql/utilities/introspectionFromSchema.mjs":
/*!**************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/introspectionFromSchema.mjs ***!
  \**************************************************************************************/
/*! exports provided: introspectionFromSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introspectionFromSchema", function() { return introspectionFromSchema; });
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/invariant */ "../../graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_isPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/isPromise */ "../../graphql/jsutils/isPromise.mjs");
/* harmony import */ var _language_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/parser */ "../../graphql/language/parser.mjs");
/* harmony import */ var _execution_execute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../execution/execute */ "../../graphql/execution/execute.mjs");
/* harmony import */ var _introspectionQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./introspectionQuery */ "../../graphql/utilities/introspectionQuery.mjs");





/**
 * Build an IntrospectionQuery from a GraphQLSchema
 *
 * IntrospectionQuery is useful for utilities that care about type and field
 * relationships, but do not need to traverse through those relationships.
 *
 * This is the inverse of buildClientSchema. The primary use case is outside
 * of the server context, for instance when doing schema comparisons.
 */

function introspectionFromSchema(schema, options) {
  var queryAST = Object(_language_parser__WEBPACK_IMPORTED_MODULE_2__["parse"])(Object(_introspectionQuery__WEBPACK_IMPORTED_MODULE_4__["getIntrospectionQuery"])(options));
  var result = Object(_execution_execute__WEBPACK_IMPORTED_MODULE_3__["execute"])(schema, queryAST);

  /* istanbul ignore next */
  !Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_1__["default"])(result) && !result.errors && result.data || Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(0);
  return result.data;
}


/***/ }),

/***/ "../../graphql/utilities/introspectionQuery.mjs":
/*!*********************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/introspectionQuery.mjs ***!
  \*********************************************************************************/
/*! exports provided: getIntrospectionQuery, introspectionQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntrospectionQuery", function() { return getIntrospectionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introspectionQuery", function() { return introspectionQuery; });
function getIntrospectionQuery(options) {
  var descriptions = !(options && options.descriptions === false);
  return "\n    query IntrospectionQuery {\n      __schema {\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ".concat(descriptions ? 'description' : '', "\n          locations\n          args {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ").concat(descriptions ? 'description' : '', "\n      fields(includeDeprecated: true) {\n        name\n        ").concat(descriptions ? 'description' : '', "\n        args {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ").concat(descriptions ? 'description' : '', "\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ").concat(descriptions ? 'description' : '', "\n      type { ...TypeRef }\n      defaultValue\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ");
}
/**
 * Deprecated, call getIntrospectionQuery directly.
 *
 * This function will be removed in v15
 */

var introspectionQuery = getIntrospectionQuery();


/***/ }),

/***/ "../../graphql/utilities/isValidJSValue.mjs":
/*!*****************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/isValidJSValue.mjs ***!
  \*****************************************************************************/
/*! exports provided: isValidJSValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidJSValue", function() { return isValidJSValue; });
/* harmony import */ var _coerceValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coerceValue */ "../../graphql/utilities/coerceValue.mjs");
/* istanbul ignore file */

/**
 * Deprecated. Use coerceInputValue() directly for richer information.
 *
 * This function will be removed in v15
 */

function isValidJSValue(value, type) {
  var errors = Object(_coerceValue__WEBPACK_IMPORTED_MODULE_0__["coerceValue"])(value, type).errors;
  return errors ? errors.map(function (error) {
    return error.message;
  }) : [];
}


/***/ }),

/***/ "../../graphql/utilities/isValidLiteralValue.mjs":
/*!**********************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/isValidLiteralValue.mjs ***!
  \**********************************************************************************/
/*! exports provided: isValidLiteralValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidLiteralValue", function() { return isValidLiteralValue; });
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _language_visitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/visitor */ "../../graphql/language/visitor.mjs");
/* harmony import */ var _validation_rules_ValuesOfCorrectType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation/rules/ValuesOfCorrectType */ "../../graphql/validation/rules/ValuesOfCorrectType.mjs");
/* harmony import */ var _validation_ValidationContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation/ValidationContext */ "../../graphql/validation/ValidationContext.mjs");
/* harmony import */ var _type_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/schema */ "../../graphql/type/schema.mjs");
/* harmony import */ var _TypeInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TypeInfo */ "../../graphql/utilities/TypeInfo.mjs");






/**
 * Utility which determines if a value literal node is valid for an input type.
 *
 * Deprecated. Rely on validation for documents containing literal values.
 *
 * This function will be removed in v15
 */

function isValidLiteralValue(type, valueNode) {
  var emptySchema = new _type_schema__WEBPACK_IMPORTED_MODULE_4__["GraphQLSchema"]({});
  var emptyDoc = {
    kind: _language_kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].DOCUMENT,
    definitions: []
  };
  var typeInfo = new _TypeInfo__WEBPACK_IMPORTED_MODULE_5__["TypeInfo"](emptySchema, undefined, type);
  var context = new _validation_ValidationContext__WEBPACK_IMPORTED_MODULE_3__["ValidationContext"](emptySchema, emptyDoc, typeInfo);
  var visitor = Object(_validation_rules_ValuesOfCorrectType__WEBPACK_IMPORTED_MODULE_2__["ValuesOfCorrectType"])(context);
  Object(_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visit"])(valueNode, Object(_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visitWithTypeInfo"])(typeInfo, visitor));
  return context.getErrors();
}


/***/ }),

/***/ "../../graphql/utilities/lexicographicSortSchema.mjs":
/*!**************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/lexicographicSortSchema.mjs ***!
  \**************************************************************************************/
/*! exports provided: lexicographicSortSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lexicographicSortSchema", function() { return lexicographicSortSchema; });
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues */ "../../graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/invariant */ "../../graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/keyValMap */ "../../graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _type_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/schema */ "../../graphql/type/schema.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/directives */ "../../graphql/type/directives.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/introspection */ "../../graphql/type/introspection.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/**
 * Sort GraphQLSchema.
 */

function lexicographicSortSchema(schema) {
  var schemaConfig = schema.toConfig();
  var typeMap = Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_3__["default"])(sortByName(schemaConfig.types), function (type) {
    return type.name;
  }, sortNamedType);
  return new _type_schema__WEBPACK_IMPORTED_MODULE_4__["GraphQLSchema"](_objectSpread({}, schemaConfig, {
    types: Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(typeMap),
    directives: sortByName(schemaConfig.directives).map(sortDirective),
    query: replaceMaybeType(schemaConfig.query),
    mutation: replaceMaybeType(schemaConfig.mutation),
    subscription: replaceMaybeType(schemaConfig.subscription)
  }));

  function replaceType(type) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isListType"])(type)) {
      return new _type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"](replaceType(type.ofType));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(type)) {
      return new _type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](replaceType(type.ofType));
    }

    return replaceNamedType(type);
  }

  function replaceNamedType(type) {
    return typeMap[type.name];
  }

  function replaceMaybeType(maybeType) {
    return maybeType && replaceNamedType(maybeType);
  }

  function sortDirective(directive) {
    var config = directive.toConfig();
    return new _type_directives__WEBPACK_IMPORTED_MODULE_5__["GraphQLDirective"](_objectSpread({}, config, {
      locations: sortBy(config.locations, function (x) {
        return x;
      }),
      args: sortArgs(config.args)
    }));
  }

  function sortArgs(args) {
    return sortObjMap(args, function (arg) {
      return _objectSpread({}, arg, {
        type: replaceType(arg.type)
      });
    });
  }

  function sortFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return _objectSpread({}, field, {
        type: replaceType(field.type),
        args: sortArgs(field.args)
      });
    });
  }

  function sortInputFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return _objectSpread({}, field, {
        type: replaceType(field.type)
      });
    });
  }

  function sortTypes(arr) {
    return sortByName(arr).map(replaceNamedType);
  }

  function sortNamedType(type) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isScalarType"])(type) || Object(_type_introspection__WEBPACK_IMPORTED_MODULE_6__["isIntrospectionType"])(type)) {
      return type;
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isObjectType"])(type)) {
      var config = type.toConfig();
      return new _type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"](_objectSpread({}, config, {
        interfaces: function interfaces() {
          return sortTypes(config.interfaces);
        },
        fields: function fields() {
          return sortFields(config.fields);
        }
      }));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isInterfaceType"])(type)) {
      var _config = type.toConfig();

      return new _type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLInterfaceType"](_objectSpread({}, _config, {
        fields: function fields() {
          return sortFields(_config.fields);
        }
      }));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isUnionType"])(type)) {
      var _config2 = type.toConfig();

      return new _type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLUnionType"](_objectSpread({}, _config2, {
        types: function types() {
          return sortTypes(_config2.types);
        }
      }));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isEnumType"])(type)) {
      var _config3 = type.toConfig();

      return new _type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLEnumType"](_objectSpread({}, _config3, {
        values: sortObjMap(_config3.values)
      }));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isInputObjectType"])(type)) {
      var _config4 = type.toConfig();

      return new _type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLInputObjectType"](_objectSpread({}, _config4, {
        fields: function fields() {
          return sortInputFields(_config4.fields);
        }
      }));
    } // Not reachable. All possible types have been considered.


    /* istanbul ignore next */
    Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'Unexpected type: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type));
  }
}

function sortObjMap(map, sortValueFn) {
  var sortedMap = Object.create(null);
  var sortedKeys = sortBy(Object.keys(map), function (x) {
    return x;
  });

  for (var _i2 = 0; _i2 < sortedKeys.length; _i2++) {
    var key = sortedKeys[_i2];
    var value = map[key];
    sortedMap[key] = sortValueFn ? sortValueFn(value) : value;
  }

  return sortedMap;
}

function sortByName(array) {
  return sortBy(array, function (obj) {
    return obj.name;
  });
}

function sortBy(array, mapToKey) {
  return array.slice().sort(function (obj1, obj2) {
    var key1 = mapToKey(obj1);
    var key2 = mapToKey(obj2);
    return key1.localeCompare(key2);
  });
}


/***/ }),

/***/ "../../graphql/utilities/schemaPrinter.mjs":
/*!****************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/schemaPrinter.mjs ***!
  \****************************************************************************/
/*! exports provided: printSchema, printIntrospectionSchema, printType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printSchema", function() { return printSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printIntrospectionSchema", function() { return printIntrospectionSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printType", function() { return printType; });
/* harmony import */ var _polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/flatMap */ "../../graphql/polyfills/flatMap.mjs");
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectValues */ "../../graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant */ "../../graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/printer */ "../../graphql/language/printer.mjs");
/* harmony import */ var _language_blockString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/blockString */ "../../graphql/language/blockString.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/introspection */ "../../graphql/type/introspection.mjs");
/* harmony import */ var _type_scalars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/scalars */ "../../graphql/type/scalars.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../type/directives */ "../../graphql/type/directives.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");
/* harmony import */ var _utilities_astFromValue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/astFromValue */ "../../graphql/utilities/astFromValue.mjs");












/**
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function printSchema(schema, options) {
  return printFilteredSchema(schema, function (n) {
    return !Object(_type_directives__WEBPACK_IMPORTED_MODULE_8__["isSpecifiedDirective"])(n);
  }, isDefinedType, options);
}
function printIntrospectionSchema(schema, options) {
  return printFilteredSchema(schema, _type_directives__WEBPACK_IMPORTED_MODULE_8__["isSpecifiedDirective"], _type_introspection__WEBPACK_IMPORTED_MODULE_6__["isIntrospectionType"], options);
}

function isDefinedType(type) {
  return !Object(_type_scalars__WEBPACK_IMPORTED_MODULE_7__["isSpecifiedScalarType"])(type) && !Object(_type_introspection__WEBPACK_IMPORTED_MODULE_6__["isIntrospectionType"])(type);
}

function printFilteredSchema(schema, directiveFilter, typeFilter, options) {
  var directives = schema.getDirectives().filter(directiveFilter);
  var typeMap = schema.getTypeMap();
  var types = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(typeMap).sort(function (type1, type2) {
    return type1.name.localeCompare(type2.name);
  }).filter(typeFilter);
  return [printSchemaDefinition(schema)].concat(directives.map(function (directive) {
    return printDirective(directive, options);
  }), types.map(function (type) {
    return printType(type, options);
  })).filter(Boolean).join('\n\n') + '\n';
}

function printSchemaDefinition(schema) {
  if (isSchemaOfCommonNames(schema)) {
    return;
  }

  var operationTypes = [];
  var queryType = schema.getQueryType();

  if (queryType) {
    operationTypes.push("  query: ".concat(queryType.name));
  }

  var mutationType = schema.getMutationType();

  if (mutationType) {
    operationTypes.push("  mutation: ".concat(mutationType.name));
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType) {
    operationTypes.push("  subscription: ".concat(subscriptionType.name));
  }

  return "schema {\n".concat(operationTypes.join('\n'), "\n}");
}
/**
 * GraphQL schema define root types for each type of operation. These types are
 * the same as any other type and can be named in any manner, however there is
 * a common naming convention:
 *
 *   schema {
 *     query: Query
 *     mutation: Mutation
 *   }
 *
 * When using this naming convention, the schema description can be omitted.
 */


function isSchemaOfCommonNames(schema) {
  var queryType = schema.getQueryType();

  if (queryType && queryType.name !== 'Query') {
    return false;
  }

  var mutationType = schema.getMutationType();

  if (mutationType && mutationType.name !== 'Mutation') {
    return false;
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType && subscriptionType.name !== 'Subscription') {
    return false;
  }

  return true;
}

function printType(type, options) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_9__["isScalarType"])(type)) {
    return printScalar(type, options);
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_9__["isObjectType"])(type)) {
    return printObject(type, options);
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_9__["isInterfaceType"])(type)) {
    return printInterface(type, options);
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_9__["isUnionType"])(type)) {
    return printUnion(type, options);
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_9__["isEnumType"])(type)) {
    return printEnum(type, options);
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_9__["isInputObjectType"])(type)) {
    return printInputObject(type, options);
  } // Not reachable. All possible types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Unexpected type: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type));
}

function printScalar(type, options) {
  return printDescription(options, type) + "scalar ".concat(type.name);
}

function printObject(type, options) {
  var interfaces = type.getInterfaces();
  var implementedInterfaces = interfaces.length ? ' implements ' + interfaces.map(function (i) {
    return i.name;
  }).join(' & ') : '';
  return printDescription(options, type) + "type ".concat(type.name).concat(implementedInterfaces) + printFields(options, type);
}

function printInterface(type, options) {
  return printDescription(options, type) + "interface ".concat(type.name) + printFields(options, type);
}

function printUnion(type, options) {
  var types = type.getTypes();
  var possibleTypes = types.length ? ' = ' + types.join(' | ') : '';
  return printDescription(options, type) + 'union ' + type.name + possibleTypes;
}

function printEnum(type, options) {
  var values = type.getValues().map(function (value, i) {
    return printDescription(options, value, '  ', !i) + '  ' + value.name + printDeprecated(value);
  });
  return printDescription(options, type) + "enum ".concat(type.name) + printBlock(values);
}

function printInputObject(type, options) {
  var fields = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(type.getFields()).map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + printInputValue(f);
  });
  return printDescription(options, type) + "input ".concat(type.name) + printBlock(fields);
}

function printFields(options, type) {
  var fields = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(type.getFields()).map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + f.name + printArgs(options, f.args, '  ') + ': ' + String(f.type) + printDeprecated(f);
  });
  return printBlock(fields);
}

function printBlock(items) {
  return items.length !== 0 ? ' {\n' + items.join('\n') + '\n}' : '';
}

function printArgs(options, args) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (args.length === 0) {
    return '';
  } // If every arg does not have a description, print them on one line.


  if (args.every(function (arg) {
    return !arg.description;
  })) {
    return '(' + args.map(printInputValue).join(', ') + ')';
  }

  return '(\n' + args.map(function (arg, i) {
    return printDescription(options, arg, '  ' + indentation, !i) + '  ' + indentation + printInputValue(arg);
  }).join('\n') + '\n' + indentation + ')';
}

function printInputValue(arg) {
  var defaultAST = Object(_utilities_astFromValue__WEBPACK_IMPORTED_MODULE_10__["astFromValue"])(arg.defaultValue, arg.type);
  var argDecl = arg.name + ': ' + String(arg.type);

  if (defaultAST) {
    argDecl += " = ".concat(Object(_language_printer__WEBPACK_IMPORTED_MODULE_4__["print"])(defaultAST));
  }

  return argDecl;
}

function printDirective(directive, options) {
  return printDescription(options, directive) + 'directive @' + directive.name + printArgs(options, directive.args) + (directive.isRepeatable ? ' repeatable' : '') + ' on ' + directive.locations.join(' | ');
}

function printDeprecated(fieldOrEnumVal) {
  if (!fieldOrEnumVal.isDeprecated) {
    return '';
  }

  var reason = fieldOrEnumVal.deprecationReason;
  var reasonAST = Object(_utilities_astFromValue__WEBPACK_IMPORTED_MODULE_10__["astFromValue"])(reason, _type_scalars__WEBPACK_IMPORTED_MODULE_7__["GraphQLString"]);

  if (reasonAST && reason !== '' && reason !== _type_directives__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_DEPRECATION_REASON"]) {
    return ' @deprecated(reason: ' + Object(_language_printer__WEBPACK_IMPORTED_MODULE_4__["print"])(reasonAST) + ')';
  }

  return ' @deprecated';
}

function printDescription(options, def) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var firstInBlock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!def.description) {
    return '';
  }

  var lines = descriptionLines(def.description, 120 - indentation.length);

  if (options && options.commentDescriptions) {
    return printDescriptionWithComments(lines, indentation, firstInBlock);
  }

  var text = lines.join('\n');
  var preferMultipleLines = text.length > 70;
  var blockString = Object(_language_blockString__WEBPACK_IMPORTED_MODULE_5__["printBlockString"])(text, '', preferMultipleLines);
  var prefix = indentation && !firstInBlock ? '\n' + indentation : indentation;
  return prefix + blockString.replace(/\n/g, '\n' + indentation) + '\n';
}

function printDescriptionWithComments(lines, indentation, firstInBlock) {
  var description = indentation && !firstInBlock ? '\n' : '';

  for (var _i2 = 0; _i2 < lines.length; _i2++) {
    var line = lines[_i2];

    if (line === '') {
      description += indentation + '#\n';
    } else {
      description += indentation + '# ' + line + '\n';
    }
  }

  return description;
}

function descriptionLines(description, maxLen) {
  var rawLines = description.split('\n');
  return Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(rawLines, function (line) {
    if (line.length < maxLen + 5) {
      return line;
    } // For > 120 character long lines, cut at space boundaries into sublines
    // of ~80 chars.


    return breakLine(line, maxLen);
  });
}

function breakLine(line, maxLen) {
  var parts = line.split(new RegExp("((?: |^).{15,".concat(maxLen - 40, "}(?= |$))")));

  if (parts.length < 4) {
    return [line];
  }

  var sublines = [parts[0] + parts[1] + parts[2]];

  for (var i = 3; i < parts.length; i += 2) {
    sublines.push(parts[i].slice(1) + parts[i + 1]);
  }

  return sublines;
}


/***/ }),

/***/ "../../graphql/utilities/separateOperations.mjs":
/*!*********************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/separateOperations.mjs ***!
  \*********************************************************************************/
/*! exports provided: separateOperations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateOperations", function() { return separateOperations; });
/* harmony import */ var _language_visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/visitor */ "../../graphql/language/visitor.mjs");


/**
 * separateOperations accepts a single AST document which may contain many
 * operations and fragments and returns a collection of AST documents each of
 * which contains a single operation as well the fragment definitions it
 * refers to.
 */
function separateOperations(documentAST) {
  var operations = [];
  var fragments = Object.create(null);
  var positions = new Map();
  var depGraph = Object.create(null);
  var fromName;
  var idx = 0; // Populate metadata and build a dependency graph.

  Object(_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(documentAST, {
    OperationDefinition: function OperationDefinition(node) {
      fromName = opName(node);
      operations.push(node);
      positions.set(node, idx++);
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fromName = node.name.value;
      fragments[fromName] = node;
      positions.set(node, idx++);
    },
    FragmentSpread: function FragmentSpread(node) {
      var toName = node.name.value;
      (depGraph[fromName] || (depGraph[fromName] = Object.create(null)))[toName] = true;
    }
  }); // For each operation, produce a new synthesized AST which includes only what
  // is necessary for completing that operation.

  var separatedDocumentASTs = Object.create(null);

  for (var _i2 = 0; _i2 < operations.length; _i2++) {
    var operation = operations[_i2];
    var operationName = opName(operation);
    var dependencies = Object.create(null);
    collectTransitiveDependencies(dependencies, depGraph, operationName); // The list of definition nodes to be included for this operation, sorted
    // to retain the same order as the original document.

    var definitions = [operation];

    for (var _i4 = 0, _Object$keys2 = Object.keys(dependencies); _i4 < _Object$keys2.length; _i4++) {
      var name = _Object$keys2[_i4];
      definitions.push(fragments[name]);
    }

    definitions.sort(function (n1, n2) {
      return (positions.get(n1) || 0) - (positions.get(n2) || 0);
    });
    separatedDocumentASTs[operationName] = {
      kind: 'Document',
      definitions: definitions
    };
  }

  return separatedDocumentASTs;
}

// Provides the empty string for anonymous operations.
function opName(operation) {
  return operation.name ? operation.name.value : '';
} // From a dependency graph, collects a list of transitive dependencies by
// recursing through a dependency graph.


function collectTransitiveDependencies(collected, depGraph, fromName) {
  var immediateDeps = depGraph[fromName];

  if (immediateDeps) {
    for (var _i6 = 0, _Object$keys4 = Object.keys(immediateDeps); _i6 < _Object$keys4.length; _i6++) {
      var toName = _Object$keys4[_i6];

      if (!collected[toName]) {
        collected[toName] = true;
        collectTransitiveDependencies(collected, depGraph, toName);
      }
    }
  }
}


/***/ }),

/***/ "../../graphql/utilities/stripIgnoredCharacters.mjs":
/*!*************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/stripIgnoredCharacters.mjs ***!
  \*************************************************************************************/
/*! exports provided: stripIgnoredCharacters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripIgnoredCharacters", function() { return stripIgnoredCharacters; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _language_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/source */ "../../graphql/language/source.mjs");
/* harmony import */ var _language_tokenKind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/tokenKind */ "../../graphql/language/tokenKind.mjs");
/* harmony import */ var _language_lexer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/lexer */ "../../graphql/language/lexer.mjs");
/* harmony import */ var _language_blockString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/blockString */ "../../graphql/language/blockString.mjs");





/**
 * Strips characters that are not significant to the validity or execution
 * of a GraphQL document:
 *   - UnicodeBOM
 *   - WhiteSpace
 *   - LineTerminator
 *   - Comment
 *   - Comma
 *   - BlockString indentation
 *
 * Note: It is required to have a delimiter character between neighboring
 * non-punctuator tokens and this function always uses single space as delimiter.
 *
 * It is guaranteed that both input and output documents if parsed would result
 * in the exact same AST except for nodes location.
 *
 * Warning: It is guaranteed that this function will always produce stable results.
 * However, it's not guaranteed that it will stay the same between different
 * releases due to bugfixes or changes in the GraphQL specification.
 *
 * Query example:
 *
 * query SomeQuery($foo: String!, $bar: String) {
 *   someField(foo: $foo, bar: $bar) {
 *     a
 *     b {
 *       c
 *       d
 *     }
 *   }
 * }
 *
 * Becomes:
 *
 * query SomeQuery($foo:String!$bar:String){someField(foo:$foo bar:$bar){a b{c d}}}
 *
 * SDL example:
 *
 * """
 * Type description
 * """
 * type Foo {
 *   """
 *   Field description
 *   """
 *   bar: String
 * }
 *
 * Becomes:
 *
 * """Type description""" type Foo{"""Field description""" bar:String}
 */

function stripIgnoredCharacters(source) {
  var sourceObj = typeof source === 'string' ? new _language_source__WEBPACK_IMPORTED_MODULE_1__["Source"](source) : source;

  if (!(sourceObj instanceof _language_source__WEBPACK_IMPORTED_MODULE_1__["Source"])) {
    throw new TypeError("Must provide string or Source. Received: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceObj)));
  }

  var body = sourceObj.body;
  var lexer = Object(_language_lexer__WEBPACK_IMPORTED_MODULE_3__["createLexer"])(sourceObj);
  var strippedBody = '';
  var wasLastAddedTokenNonPunctuator = false;

  while (lexer.advance().kind !== _language_tokenKind__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EOF) {
    var currentToken = lexer.token;
    var tokenKind = currentToken.kind;
    /**
     * Every two non-punctuator tokens should have space between them.
     * Also prevent case of non-punctuator token following by spread resulting
     * in invalid token (e.g. `1...` is invalid Float token).
     */

    var isNonPunctuator = !Object(_language_lexer__WEBPACK_IMPORTED_MODULE_3__["isPunctuatorToken"])(currentToken);

    if (wasLastAddedTokenNonPunctuator) {
      if (isNonPunctuator || currentToken.kind === _language_tokenKind__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].SPREAD) {
        strippedBody += ' ';
      }
    }

    var tokenBody = body.slice(currentToken.start, currentToken.end);

    if (tokenKind === _language_tokenKind__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BLOCK_STRING) {
      strippedBody += dedentBlockString(tokenBody);
    } else {
      strippedBody += tokenBody;
    }

    wasLastAddedTokenNonPunctuator = isNonPunctuator;
  }

  return strippedBody;
}

function dedentBlockString(blockStr) {
  // skip leading and trailing triple quotations
  var rawStr = blockStr.slice(3, -3);
  var body = Object(_language_blockString__WEBPACK_IMPORTED_MODULE_4__["dedentBlockStringValue"])(rawStr);
  var lines = body.split(/\r\n|[\n\r]/g);

  if (Object(_language_blockString__WEBPACK_IMPORTED_MODULE_4__["getBlockStringIndentation"])(lines) > 0) {
    body = '\n' + body;
  }

  var lastChar = body[body.length - 1];
  var hasTrailingQuote = lastChar === '"' && body.slice(-4) !== '\\"""';

  if (hasTrailingQuote || lastChar === '\\') {
    body += '\n';
  }

  return '"""' + body + '"""';
}


/***/ }),

/***/ "../../graphql/utilities/typeComparators.mjs":
/*!******************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/typeComparators.mjs ***!
  \******************************************************************************/
/*! exports provided: isEqualType, isTypeSubTypeOf, doTypesOverlap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualType", function() { return isEqualType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeSubTypeOf", function() { return isTypeSubTypeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doTypesOverlap", function() { return doTypesOverlap; });
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");

/**
 * Provided two types, return true if the types are equal (invariant).
 */

function isEqualType(typeA, typeB) {
  // Equivalent types are equal.
  if (typeA === typeB) {
    return true;
  } // If either type is non-null, the other must also be non-null.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(typeA) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // If either type is a list, the other must also be a list.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(typeA) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // Otherwise the types are not equal.


  return false;
}
/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */

function isTypeSubTypeOf(schema, maybeSubType, superType) {
  // Equivalent type is a valid subtype
  if (maybeSubType === superType) {
    return true;
  } // If superType is non-null, maybeSubType must also be non-null.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(superType)) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }

    return false;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(maybeSubType)) {
    // If superType is nullable, maybeSubType may be non-null or nullable.
    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
  } // If superType type is a list, maybeSubType type must also be a list.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(superType)) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }

    return false;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(maybeSubType)) {
    // If superType is not a list, maybeSubType must also be not a list.
    return false;
  } // If superType type is an abstract type, maybeSubType type may be a currently
  // possible object type.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(superType) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isObjectType"])(maybeSubType) && schema.isPossibleType(superType, maybeSubType)) {
    return true;
  } // Otherwise, the child type is not a valid subtype of the parent type.


  return false;
}
/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */

function doTypesOverlap(schema, typeA, typeB) {
  // Equivalent types overlap
  if (typeA === typeB) {
    return true;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(typeA)) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(typeB)) {
      // If both types are abstract, then determine if there is any intersection
      // between possible concrete types of each.
      return schema.getPossibleTypes(typeA).some(function (type) {
        return schema.isPossibleType(typeB, type);
      });
    } // Determine if the latter type is a possible concrete type of the former.


    return schema.isPossibleType(typeA, typeB);
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(typeB)) {
    // Determine if the former type is a possible concrete type of the latter.
    return schema.isPossibleType(typeB, typeA);
  } // Otherwise the types do not overlap.


  return false;
}


/***/ }),

/***/ "../../graphql/utilities/typeFromAST.mjs":
/*!**************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/typeFromAST.mjs ***!
  \**************************************************************************/
/*! exports provided: typeFromAST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeFromAST", function() { return typeFromAST; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/invariant */ "../../graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");




/**
 * Given a Schema and an AST node describing a type, return a GraphQLType
 * definition which applies to that type. For example, if provided the parsed
 * AST node for `[User]`, a GraphQLList instance will be returned, containing
 * the type called "User" found in the schema. If a type called "User" is not
 * found in the schema, then undefined will be returned.
 */

/* eslint-disable no-redeclare */

function typeFromAST(schema, typeNode) {
  /* eslint-enable no-redeclare */
  var innerType;

  if (typeNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_2__["Kind"].LIST_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["GraphQLList"])(innerType);
  }

  if (typeNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_2__["Kind"].NON_NULL_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["GraphQLNonNull"])(innerType);
  }

  /* istanbul ignore else */
  if (typeNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_2__["Kind"].NAMED_TYPE) {
    return schema.getType(typeNode.name.value);
  } // Not reachable. All possible type nodes have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Unexpected type node: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(typeNode));
}


/***/ }),

/***/ "../../graphql/utilities/valueFromAST.mjs":
/*!***************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/valueFromAST.mjs ***!
  \***************************************************************************/
/*! exports provided: valueFromAST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromAST", function() { return valueFromAST; });
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues */ "../../graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/keyMap */ "../../graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant */ "../../graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/isInvalid */ "../../graphql/jsutils/isInvalid.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/definition */ "../../graphql/type/definition.mjs");







/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * GraphQL Value literals.
 *
 * Returns `undefined` when the value could not be validly coerced according to
 * the provided type.
 *
 * | GraphQL Value        | JSON Value    |
 * | -------------------- | ------------- |
 * | Input Object         | Object        |
 * | List                 | Array         |
 * | Boolean              | Boolean       |
 * | String               | String        |
 * | Int / Float          | Number        |
 * | Enum Value           | Mixed         |
 * | NullValue            | null          |
 *
 */

function valueFromAST(valueNode, type, variables) {
  if (!valueNode) {
    // When there is no node, then there is also no value.
    // Importantly, this is different from returning the value null.
    return;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(type)) {
    if (valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].NULL) {
      return; // Invalid: intentionally return no value.
    }

    return valueFromAST(valueNode, type.ofType, variables);
  }

  if (valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].NULL) {
    // This is explicitly returning the value null.
    return null;
  }

  if (valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].VARIABLE) {
    var variableName = valueNode.name.value;

    if (!variables || Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_4__["default"])(variables[variableName])) {
      // No valid return value.
      return;
    }

    var variableValue = variables[variableName];

    if (variableValue === null && Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(type)) {
      return; // Invalid: intentionally return no value.
    } // Note: This does no further checking that this variable is correct.
    // This assumes that this query has been validated and the variable
    // usage here is of the correct type.


    return variableValue;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isListType"])(type)) {
    var itemType = type.ofType;

    if (valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].LIST) {
      var coercedValues = [];

      for (var _i2 = 0, _valueNode$values2 = valueNode.values; _i2 < _valueNode$values2.length; _i2++) {
        var itemNode = _valueNode$values2[_i2];

        if (isMissingVariable(itemNode, variables)) {
          // If an array contains a missing variable, it is either coerced to
          // null or if the item type is non-null, it considered invalid.
          if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(itemType)) {
            return; // Invalid: intentionally return no value.
          }

          coercedValues.push(null);
        } else {
          var itemValue = valueFromAST(itemNode, itemType, variables);

          if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_4__["default"])(itemValue)) {
            return; // Invalid: intentionally return no value.
          }

          coercedValues.push(itemValue);
        }
      }

      return coercedValues;
    }

    var coercedValue = valueFromAST(valueNode, itemType, variables);

    if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_4__["default"])(coercedValue)) {
      return; // Invalid: intentionally return no value.
    }

    return [coercedValue];
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isInputObjectType"])(type)) {
    if (valueNode.kind !== _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].OBJECT) {
      return; // Invalid: intentionally return no value.
    }

    var coercedObj = Object.create(null);
    var fieldNodes = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__["default"])(valueNode.fields, function (field) {
      return field.name.value;
    });

    for (var _i4 = 0, _objectValues2 = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(type.getFields()); _i4 < _objectValues2.length; _i4++) {
      var field = _objectValues2[_i4];
      var fieldNode = fieldNodes[field.name];

      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
        if (field.defaultValue !== undefined) {
          coercedObj[field.name] = field.defaultValue;
        } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(field.type)) {
          return; // Invalid: intentionally return no value.
        }

        continue;
      }

      var fieldValue = valueFromAST(fieldNode.value, field.type, variables);

      if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_4__["default"])(fieldValue)) {
        return; // Invalid: intentionally return no value.
      }

      coercedObj[field.name] = fieldValue;
    }

    return coercedObj;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isEnumType"])(type)) {
    if (valueNode.kind !== _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].ENUM) {
      return; // Invalid: intentionally return no value.
    }

    var enumValue = type.getValue(valueNode.value);

    if (!enumValue) {
      return; // Invalid: intentionally return no value.
    }

    return enumValue.value;
  }

  /* istanbul ignore else */
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isScalarType"])(type)) {
    // Scalars fulfill parsing a literal value via parseLiteral().
    // Invalid values represent a failure to parse correctly, in which case
    // no value is returned.
    var result;

    try {
      result = type.parseLiteral(valueNode, variables);
    } catch (_error) {
      return; // Invalid: intentionally return no value.
    }

    if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_4__["default"])(result)) {
      return; // Invalid: intentionally return no value.
    }

    return result;
  } // Not reachable. All possible input types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Unexpected input type: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type));
} // Returns true if the provided valueNode is a variable which is not defined
// in the set of variables.

function isMissingVariable(valueNode, variables) {
  return valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].VARIABLE && (!variables || Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_4__["default"])(variables[valueNode.name.value]));
}


/***/ }),

/***/ "../../graphql/utilities/valueFromASTUntyped.mjs":
/*!**********************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/utilities/valueFromASTUntyped.mjs ***!
  \**********************************************************************************/
/*! exports provided: valueFromASTUntyped */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromASTUntyped", function() { return valueFromASTUntyped; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/invariant */ "../../graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/keyValMap */ "../../graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/isInvalid */ "../../graphql/jsutils/isInvalid.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/kinds */ "../../graphql/language/kinds.mjs");






/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 */
function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NULL:
      return null;

    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INT:
      return parseInt(valueNode.value, 10);

    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FLOAT:
      return parseFloat(valueNode.value);

    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].STRING:
    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM:
    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].BOOLEAN:
      return valueNode.value;

    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].LIST:
      return valueNode.values.map(function (node) {
        return valueFromASTUntyped(node, variables);
      });

    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT:
      return Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_2__["default"])(valueNode.fields, function (field) {
        return field.name.value;
      }, function (field) {
        return valueFromASTUntyped(field.value, variables);
      });

    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].VARIABLE:
      {
        var variableName = valueNode.name.value;
        return variables && !Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__["default"])(variables[variableName]) ? variables[variableName] : undefined;
      }
  } // Not reachable. All possible value nodes have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Unexpected value node: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(valueNode));
}


/***/ }),

/***/ "../../graphql/validation/ValidationContext.mjs":
/*!*********************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/ValidationContext.mjs ***!
  \*********************************************************************************/
/*! exports provided: ASTValidationContext, SDLValidationContext, ValidationContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASTValidationContext", function() { return ASTValidationContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDLValidationContext", function() { return SDLValidationContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationContext", function() { return ValidationContext; });
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _language_visitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/visitor */ "../../graphql/language/visitor.mjs");
/* harmony import */ var _utilities_TypeInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/TypeInfo */ "../../graphql/utilities/TypeInfo.mjs");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
var ASTValidationContext =
/*#__PURE__*/
function () {
  function ASTValidationContext(ast, onError) {
    this._ast = ast;
    this._errors = [];
    this._fragments = undefined;
    this._fragmentSpreads = new Map();
    this._recursivelyReferencedFragments = new Map();
    this._onError = onError;
  }

  var _proto = ASTValidationContext.prototype;

  _proto.reportError = function reportError(error) {
    this._errors.push(error);

    if (this._onError) {
      this._onError(error);
    }
  } // @deprecated: use onError callback instead - will be removed in v15.
  ;

  _proto.getErrors = function getErrors() {
    return this._errors;
  };

  _proto.getDocument = function getDocument() {
    return this._ast;
  };

  _proto.getFragment = function getFragment(name) {
    var fragments = this._fragments;

    if (!fragments) {
      this._fragments = fragments = this.getDocument().definitions.reduce(function (frags, statement) {
        if (statement.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].FRAGMENT_DEFINITION) {
          frags[statement.name.value] = statement;
        }

        return frags;
      }, Object.create(null));
    }

    return fragments[name];
  };

  _proto.getFragmentSpreads = function getFragmentSpreads(node) {
    var spreads = this._fragmentSpreads.get(node);

    if (!spreads) {
      spreads = [];
      var setsToVisit = [node];

      while (setsToVisit.length !== 0) {
        var set = setsToVisit.pop();

        for (var _i2 = 0, _set$selections2 = set.selections; _i2 < _set$selections2.length; _i2++) {
          var selection = _set$selections2[_i2];

          if (selection.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].FRAGMENT_SPREAD) {
            spreads.push(selection);
          } else if (selection.selectionSet) {
            setsToVisit.push(selection.selectionSet);
          }
        }
      }

      this._fragmentSpreads.set(node, spreads);
    }

    return spreads;
  };

  _proto.getRecursivelyReferencedFragments = function getRecursivelyReferencedFragments(operation) {
    var fragments = this._recursivelyReferencedFragments.get(operation);

    if (!fragments) {
      fragments = [];
      var collectedNames = Object.create(null);
      var nodesToVisit = [operation.selectionSet];

      while (nodesToVisit.length !== 0) {
        var node = nodesToVisit.pop();

        for (var _i4 = 0, _this$getFragmentSpre2 = this.getFragmentSpreads(node); _i4 < _this$getFragmentSpre2.length; _i4++) {
          var spread = _this$getFragmentSpre2[_i4];
          var fragName = spread.name.value;

          if (collectedNames[fragName] !== true) {
            collectedNames[fragName] = true;
            var fragment = this.getFragment(fragName);

            if (fragment) {
              fragments.push(fragment);
              nodesToVisit.push(fragment.selectionSet);
            }
          }
        }
      }

      this._recursivelyReferencedFragments.set(operation, fragments);
    }

    return fragments;
  };

  return ASTValidationContext;
}();
var SDLValidationContext =
/*#__PURE__*/
function (_ASTValidationContext) {
  _inheritsLoose(SDLValidationContext, _ASTValidationContext);

  function SDLValidationContext(ast, schema, onError) {
    var _this;

    _this = _ASTValidationContext.call(this, ast, onError) || this;
    _this._schema = schema;
    return _this;
  }

  var _proto2 = SDLValidationContext.prototype;

  _proto2.getSchema = function getSchema() {
    return this._schema;
  };

  return SDLValidationContext;
}(ASTValidationContext);
var ValidationContext =
/*#__PURE__*/
function (_ASTValidationContext2) {
  _inheritsLoose(ValidationContext, _ASTValidationContext2);

  function ValidationContext(schema, ast, typeInfo, onError) {
    var _this2;

    _this2 = _ASTValidationContext2.call(this, ast, onError) || this;
    _this2._schema = schema;
    _this2._typeInfo = typeInfo;
    _this2._variableUsages = new Map();
    _this2._recursiveVariableUsages = new Map();
    return _this2;
  }

  var _proto3 = ValidationContext.prototype;

  _proto3.getSchema = function getSchema() {
    return this._schema;
  };

  _proto3.getVariableUsages = function getVariableUsages(node) {
    var usages = this._variableUsages.get(node);

    if (!usages) {
      var newUsages = [];
      var typeInfo = new _utilities_TypeInfo__WEBPACK_IMPORTED_MODULE_2__["TypeInfo"](this._schema);
      Object(_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visit"])(node, Object(_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visitWithTypeInfo"])(typeInfo, {
        VariableDefinition: function VariableDefinition() {
          return false;
        },
        Variable: function Variable(variable) {
          newUsages.push({
            node: variable,
            type: typeInfo.getInputType(),
            defaultValue: typeInfo.getDefaultValue()
          });
        }
      }));
      usages = newUsages;

      this._variableUsages.set(node, usages);
    }

    return usages;
  };

  _proto3.getRecursiveVariableUsages = function getRecursiveVariableUsages(operation) {
    var usages = this._recursiveVariableUsages.get(operation);

    if (!usages) {
      usages = this.getVariableUsages(operation);

      for (var _i6 = 0, _this$getRecursivelyR2 = this.getRecursivelyReferencedFragments(operation); _i6 < _this$getRecursivelyR2.length; _i6++) {
        var frag = _this$getRecursivelyR2[_i6];
        usages = usages.concat(this.getVariableUsages(frag));
      }

      this._recursiveVariableUsages.set(operation, usages);
    }

    return usages;
  };

  _proto3.getType = function getType() {
    return this._typeInfo.getType();
  };

  _proto3.getParentType = function getParentType() {
    return this._typeInfo.getParentType();
  };

  _proto3.getInputType = function getInputType() {
    return this._typeInfo.getInputType();
  };

  _proto3.getParentInputType = function getParentInputType() {
    return this._typeInfo.getParentInputType();
  };

  _proto3.getFieldDef = function getFieldDef() {
    return this._typeInfo.getFieldDef();
  };

  _proto3.getDirective = function getDirective() {
    return this._typeInfo.getDirective();
  };

  _proto3.getArgument = function getArgument() {
    return this._typeInfo.getArgument();
  };

  return ValidationContext;
}(ASTValidationContext);


/***/ }),

/***/ "../../graphql/validation/index.mjs":
/*!*********************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/index.mjs ***!
  \*********************************************************************/
/*! exports provided: validate, ValidationContext, specifiedRules, ExecutableDefinitionsRule, FieldsOnCorrectTypeRule, FragmentsOnCompositeTypesRule, KnownArgumentNamesRule, KnownDirectivesRule, KnownFragmentNamesRule, KnownTypeNamesRule, LoneAnonymousOperationRule, NoFragmentCyclesRule, NoUndefinedVariablesRule, NoUnusedFragmentsRule, NoUnusedVariablesRule, OverlappingFieldsCanBeMergedRule, PossibleFragmentSpreadsRule, ProvidedRequiredArgumentsRule, ScalarLeafsRule, SingleFieldSubscriptionsRule, UniqueArgumentNamesRule, UniqueDirectivesPerLocationRule, UniqueFragmentNamesRule, UniqueInputFieldNamesRule, UniqueOperationNamesRule, UniqueVariableNamesRule, ValuesOfCorrectTypeRule, VariablesAreInputTypesRule, VariablesInAllowedPositionRule, LoneSchemaDefinitionRule, UniqueOperationTypesRule, UniqueTypeNamesRule, UniqueEnumValueNamesRule, UniqueFieldDefinitionNamesRule, UniqueDirectiveNamesRule, PossibleTypeExtensionsRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate */ "../../graphql/validation/validate.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate__WEBPACK_IMPORTED_MODULE_0__["validate"]; });

/* harmony import */ var _ValidationContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValidationContext */ "../../graphql/validation/ValidationContext.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationContext", function() { return _ValidationContext__WEBPACK_IMPORTED_MODULE_1__["ValidationContext"]; });

/* harmony import */ var _specifiedRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specifiedRules */ "../../graphql/validation/specifiedRules.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedRules", function() { return _specifiedRules__WEBPACK_IMPORTED_MODULE_2__["specifiedRules"]; });

/* harmony import */ var _rules_ExecutableDefinitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rules/ExecutableDefinitions */ "../../graphql/validation/rules/ExecutableDefinitions.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutableDefinitionsRule", function() { return _rules_ExecutableDefinitions__WEBPACK_IMPORTED_MODULE_3__["ExecutableDefinitions"]; });

/* harmony import */ var _rules_FieldsOnCorrectType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rules/FieldsOnCorrectType */ "../../graphql/validation/rules/FieldsOnCorrectType.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldsOnCorrectTypeRule", function() { return _rules_FieldsOnCorrectType__WEBPACK_IMPORTED_MODULE_4__["FieldsOnCorrectType"]; });

/* harmony import */ var _rules_FragmentsOnCompositeTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rules/FragmentsOnCompositeTypes */ "../../graphql/validation/rules/FragmentsOnCompositeTypes.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FragmentsOnCompositeTypesRule", function() { return _rules_FragmentsOnCompositeTypes__WEBPACK_IMPORTED_MODULE_5__["FragmentsOnCompositeTypes"]; });

/* harmony import */ var _rules_KnownArgumentNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules/KnownArgumentNames */ "../../graphql/validation/rules/KnownArgumentNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownArgumentNamesRule", function() { return _rules_KnownArgumentNames__WEBPACK_IMPORTED_MODULE_6__["KnownArgumentNames"]; });

/* harmony import */ var _rules_KnownDirectives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules/KnownDirectives */ "../../graphql/validation/rules/KnownDirectives.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownDirectivesRule", function() { return _rules_KnownDirectives__WEBPACK_IMPORTED_MODULE_7__["KnownDirectives"]; });

/* harmony import */ var _rules_KnownFragmentNames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rules/KnownFragmentNames */ "../../graphql/validation/rules/KnownFragmentNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownFragmentNamesRule", function() { return _rules_KnownFragmentNames__WEBPACK_IMPORTED_MODULE_8__["KnownFragmentNames"]; });

/* harmony import */ var _rules_KnownTypeNames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rules/KnownTypeNames */ "../../graphql/validation/rules/KnownTypeNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownTypeNamesRule", function() { return _rules_KnownTypeNames__WEBPACK_IMPORTED_MODULE_9__["KnownTypeNames"]; });

/* harmony import */ var _rules_LoneAnonymousOperation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rules/LoneAnonymousOperation */ "../../graphql/validation/rules/LoneAnonymousOperation.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoneAnonymousOperationRule", function() { return _rules_LoneAnonymousOperation__WEBPACK_IMPORTED_MODULE_10__["LoneAnonymousOperation"]; });

/* harmony import */ var _rules_NoFragmentCycles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rules/NoFragmentCycles */ "../../graphql/validation/rules/NoFragmentCycles.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoFragmentCyclesRule", function() { return _rules_NoFragmentCycles__WEBPACK_IMPORTED_MODULE_11__["NoFragmentCycles"]; });

/* harmony import */ var _rules_NoUndefinedVariables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rules/NoUndefinedVariables */ "../../graphql/validation/rules/NoUndefinedVariables.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUndefinedVariablesRule", function() { return _rules_NoUndefinedVariables__WEBPACK_IMPORTED_MODULE_12__["NoUndefinedVariables"]; });

/* harmony import */ var _rules_NoUnusedFragments__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rules/NoUnusedFragments */ "../../graphql/validation/rules/NoUnusedFragments.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUnusedFragmentsRule", function() { return _rules_NoUnusedFragments__WEBPACK_IMPORTED_MODULE_13__["NoUnusedFragments"]; });

/* harmony import */ var _rules_NoUnusedVariables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rules/NoUnusedVariables */ "../../graphql/validation/rules/NoUnusedVariables.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUnusedVariablesRule", function() { return _rules_NoUnusedVariables__WEBPACK_IMPORTED_MODULE_14__["NoUnusedVariables"]; });

/* harmony import */ var _rules_OverlappingFieldsCanBeMerged__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rules/OverlappingFieldsCanBeMerged */ "../../graphql/validation/rules/OverlappingFieldsCanBeMerged.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlappingFieldsCanBeMergedRule", function() { return _rules_OverlappingFieldsCanBeMerged__WEBPACK_IMPORTED_MODULE_15__["OverlappingFieldsCanBeMerged"]; });

/* harmony import */ var _rules_PossibleFragmentSpreads__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rules/PossibleFragmentSpreads */ "../../graphql/validation/rules/PossibleFragmentSpreads.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PossibleFragmentSpreadsRule", function() { return _rules_PossibleFragmentSpreads__WEBPACK_IMPORTED_MODULE_16__["PossibleFragmentSpreads"]; });

/* harmony import */ var _rules_ProvidedRequiredArguments__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rules/ProvidedRequiredArguments */ "../../graphql/validation/rules/ProvidedRequiredArguments.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProvidedRequiredArgumentsRule", function() { return _rules_ProvidedRequiredArguments__WEBPACK_IMPORTED_MODULE_17__["ProvidedRequiredArguments"]; });

/* harmony import */ var _rules_ScalarLeafs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rules/ScalarLeafs */ "../../graphql/validation/rules/ScalarLeafs.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScalarLeafsRule", function() { return _rules_ScalarLeafs__WEBPACK_IMPORTED_MODULE_18__["ScalarLeafs"]; });

/* harmony import */ var _rules_SingleFieldSubscriptions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rules/SingleFieldSubscriptions */ "../../graphql/validation/rules/SingleFieldSubscriptions.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleFieldSubscriptionsRule", function() { return _rules_SingleFieldSubscriptions__WEBPACK_IMPORTED_MODULE_19__["SingleFieldSubscriptions"]; });

/* harmony import */ var _rules_UniqueArgumentNames__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rules/UniqueArgumentNames */ "../../graphql/validation/rules/UniqueArgumentNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueArgumentNamesRule", function() { return _rules_UniqueArgumentNames__WEBPACK_IMPORTED_MODULE_20__["UniqueArgumentNames"]; });

/* harmony import */ var _rules_UniqueDirectivesPerLocation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rules/UniqueDirectivesPerLocation */ "../../graphql/validation/rules/UniqueDirectivesPerLocation.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectivesPerLocationRule", function() { return _rules_UniqueDirectivesPerLocation__WEBPACK_IMPORTED_MODULE_21__["UniqueDirectivesPerLocation"]; });

/* harmony import */ var _rules_UniqueFragmentNames__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rules/UniqueFragmentNames */ "../../graphql/validation/rules/UniqueFragmentNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueFragmentNamesRule", function() { return _rules_UniqueFragmentNames__WEBPACK_IMPORTED_MODULE_22__["UniqueFragmentNames"]; });

/* harmony import */ var _rules_UniqueInputFieldNames__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./rules/UniqueInputFieldNames */ "../../graphql/validation/rules/UniqueInputFieldNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueInputFieldNamesRule", function() { return _rules_UniqueInputFieldNames__WEBPACK_IMPORTED_MODULE_23__["UniqueInputFieldNames"]; });

/* harmony import */ var _rules_UniqueOperationNames__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rules/UniqueOperationNames */ "../../graphql/validation/rules/UniqueOperationNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationNamesRule", function() { return _rules_UniqueOperationNames__WEBPACK_IMPORTED_MODULE_24__["UniqueOperationNames"]; });

/* harmony import */ var _rules_UniqueVariableNames__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rules/UniqueVariableNames */ "../../graphql/validation/rules/UniqueVariableNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueVariableNamesRule", function() { return _rules_UniqueVariableNames__WEBPACK_IMPORTED_MODULE_25__["UniqueVariableNames"]; });

/* harmony import */ var _rules_ValuesOfCorrectType__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./rules/ValuesOfCorrectType */ "../../graphql/validation/rules/ValuesOfCorrectType.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValuesOfCorrectTypeRule", function() { return _rules_ValuesOfCorrectType__WEBPACK_IMPORTED_MODULE_26__["ValuesOfCorrectType"]; });

/* harmony import */ var _rules_VariablesAreInputTypes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rules/VariablesAreInputTypes */ "../../graphql/validation/rules/VariablesAreInputTypes.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariablesAreInputTypesRule", function() { return _rules_VariablesAreInputTypes__WEBPACK_IMPORTED_MODULE_27__["VariablesAreInputTypes"]; });

/* harmony import */ var _rules_VariablesInAllowedPosition__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rules/VariablesInAllowedPosition */ "../../graphql/validation/rules/VariablesInAllowedPosition.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariablesInAllowedPositionRule", function() { return _rules_VariablesInAllowedPosition__WEBPACK_IMPORTED_MODULE_28__["VariablesInAllowedPosition"]; });

/* harmony import */ var _rules_LoneSchemaDefinition__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./rules/LoneSchemaDefinition */ "../../graphql/validation/rules/LoneSchemaDefinition.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoneSchemaDefinitionRule", function() { return _rules_LoneSchemaDefinition__WEBPACK_IMPORTED_MODULE_29__["LoneSchemaDefinition"]; });

/* harmony import */ var _rules_UniqueOperationTypes__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./rules/UniqueOperationTypes */ "../../graphql/validation/rules/UniqueOperationTypes.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationTypesRule", function() { return _rules_UniqueOperationTypes__WEBPACK_IMPORTED_MODULE_30__["UniqueOperationTypes"]; });

/* harmony import */ var _rules_UniqueTypeNames__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./rules/UniqueTypeNames */ "../../graphql/validation/rules/UniqueTypeNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueTypeNamesRule", function() { return _rules_UniqueTypeNames__WEBPACK_IMPORTED_MODULE_31__["UniqueTypeNames"]; });

/* harmony import */ var _rules_UniqueEnumValueNames__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./rules/UniqueEnumValueNames */ "../../graphql/validation/rules/UniqueEnumValueNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueEnumValueNamesRule", function() { return _rules_UniqueEnumValueNames__WEBPACK_IMPORTED_MODULE_32__["UniqueEnumValueNames"]; });

/* harmony import */ var _rules_UniqueFieldDefinitionNames__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./rules/UniqueFieldDefinitionNames */ "../../graphql/validation/rules/UniqueFieldDefinitionNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueFieldDefinitionNamesRule", function() { return _rules_UniqueFieldDefinitionNames__WEBPACK_IMPORTED_MODULE_33__["UniqueFieldDefinitionNames"]; });

/* harmony import */ var _rules_UniqueDirectiveNames__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./rules/UniqueDirectiveNames */ "../../graphql/validation/rules/UniqueDirectiveNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectiveNamesRule", function() { return _rules_UniqueDirectiveNames__WEBPACK_IMPORTED_MODULE_34__["UniqueDirectiveNames"]; });

/* harmony import */ var _rules_PossibleTypeExtensions__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./rules/PossibleTypeExtensions */ "../../graphql/validation/rules/PossibleTypeExtensions.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PossibleTypeExtensionsRule", function() { return _rules_PossibleTypeExtensions__WEBPACK_IMPORTED_MODULE_35__["PossibleTypeExtensions"]; });



// All validation rules in the GraphQL Specification.
 // Spec Section: "Executable Definitions"

 // Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"

 // Spec Section: "Fragments on Composite Types"

 // Spec Section: "Argument Names"

 // Spec Section: "Directives Are Defined"

 // Spec Section: "Fragment spread target defined"

 // Spec Section: "Fragment Spread Type Existence"

 // Spec Section: "Lone Anonymous Operation"

 // Spec Section: "Fragments must not form cycles"

 // Spec Section: "All Variable Used Defined"

 // Spec Section: "Fragments must be used"

 // Spec Section: "All Variables Used"

 // Spec Section: "Field Selection Merging"

 // Spec Section: "Fragment spread is possible"

 // Spec Section: "Argument Optionality"

 // Spec Section: "Leaf Field Selections"

 // Spec Section: "Subscriptions with Single Root Field"

 // Spec Section: "Argument Uniqueness"

 // Spec Section: "Directives Are Unique Per Location"

 // Spec Section: "Fragment Name Uniqueness"

 // Spec Section: "Input Object Field Uniqueness"

 // Spec Section: "Operation Name Uniqueness"

 // Spec Section: "Variable Uniqueness"

 // Spec Section: "Values Type Correctness"

 // Spec Section: "Variables are Input Types"

 // Spec Section: "All Variable Usages Are Allowed"

 // SDL-specific validation rules










/***/ }),

/***/ "../../graphql/validation/rules/ExecutableDefinitions.mjs":
/*!*******************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/ExecutableDefinitions.mjs ***!
  \*******************************************************************************************/
/*! exports provided: nonExecutableDefinitionMessage, ExecutableDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonExecutableDefinitionMessage", function() { return nonExecutableDefinitionMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutableDefinitions", function() { return ExecutableDefinitions; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _language_predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../language/predicates */ "../../graphql/language/predicates.mjs");



function nonExecutableDefinitionMessage(defName) {
  return "The ".concat(defName, " definition is not executable.");
}
/**
 * Executable definitions
 *
 * A GraphQL document is only valid for execution if all definitions are either
 * operation or fragment definitions.
 */

function ExecutableDefinitions(context) {
  return {
    Document: function Document(node) {
      for (var _i2 = 0, _node$definitions2 = node.definitions; _i2 < _node$definitions2.length; _i2++) {
        var definition = _node$definitions2[_i2];

        if (!Object(_language_predicates__WEBPACK_IMPORTED_MODULE_2__["isExecutableDefinitionNode"])(definition)) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](nonExecutableDefinitionMessage(definition.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_DEFINITION || definition.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_EXTENSION ? 'schema' : definition.name.value), definition));
        }
      }

      return false;
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/FieldsOnCorrectType.mjs":
/*!*****************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/FieldsOnCorrectType.mjs ***!
  \*****************************************************************************************/
/*! exports provided: undefinedFieldMessage, FieldsOnCorrectType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undefinedFieldMessage", function() { return undefinedFieldMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsOnCorrectType", function() { return FieldsOnCorrectType; });
/* harmony import */ var _jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/didYouMean */ "../../graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/suggestionList */ "../../graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../type/definition */ "../../graphql/type/definition.mjs");




function undefinedFieldMessage(fieldName, type, suggestedTypeNames, suggestedFieldNames) {
  var quotedTypeNames = suggestedTypeNames.map(function (x) {
    return "\"".concat(x, "\"");
  });
  var quotedFieldNames = suggestedFieldNames.map(function (x) {
    return "\"".concat(x, "\"");
  });
  return "Cannot query field \"".concat(fieldName, "\" on type \"").concat(type, "\".") + (Object(_jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_0__["default"])('to use an inline fragment on', quotedTypeNames) || Object(_jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_0__["default"])(quotedFieldNames));
}
/**
 * Fields on correct type
 *
 * A GraphQL document is only valid if all fields selected are defined by the
 * parent type, or are an allowed meta field such as __typename.
 */

function FieldsOnCorrectType(context) {
  return {
    Field: function Field(node) {
      var type = context.getParentType();

      if (type) {
        var fieldDef = context.getFieldDef();

        if (!fieldDef) {
          // This field doesn't exist, lets look for suggestions.
          var schema = context.getSchema();
          var fieldName = node.name.value; // First determine if there are any suggested types to condition on.

          var suggestedTypeNames = getSuggestedTypeNames(schema, type, fieldName); // If there are no suggested types, then perhaps this was a typo?

          var suggestedFieldNames = suggestedTypeNames.length !== 0 ? [] : getSuggestedFieldNames(schema, type, fieldName); // Report an error, including helpful suggestions.

          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"](undefinedFieldMessage(fieldName, type.name, suggestedTypeNames, suggestedFieldNames), node));
        }
      }
    }
  };
}
/**
 * Go through all of the implementations of type, as well as the interfaces that
 * they implement. If any of those types include the provided field, suggest
 * them, sorted by how often the type is referenced, starting with Interfaces.
 */

function getSuggestedTypeNames(schema, type, fieldName) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isAbstractType"])(type)) {
    var suggestedObjectTypes = [];
    var interfaceUsageCount = Object.create(null);

    for (var _i2 = 0, _schema$getPossibleTy2 = schema.getPossibleTypes(type); _i2 < _schema$getPossibleTy2.length; _i2++) {
      var possibleType = _schema$getPossibleTy2[_i2];

      if (!possibleType.getFields()[fieldName]) {
        continue;
      } // This object type defines this field.


      suggestedObjectTypes.push(possibleType.name);

      for (var _i4 = 0, _possibleType$getInte2 = possibleType.getInterfaces(); _i4 < _possibleType$getInte2.length; _i4++) {
        var possibleInterface = _possibleType$getInte2[_i4];

        if (!possibleInterface.getFields()[fieldName]) {
          continue;
        } // This interface type defines this field.


        interfaceUsageCount[possibleInterface.name] = (interfaceUsageCount[possibleInterface.name] || 0) + 1;
      }
    } // Suggest interface types based on how common they are.


    var suggestedInterfaceTypes = Object.keys(interfaceUsageCount).sort(function (a, b) {
      return interfaceUsageCount[b] - interfaceUsageCount[a];
    }); // Suggest both interface and object types.

    return suggestedInterfaceTypes.concat(suggestedObjectTypes);
  } // Otherwise, must be an Object type, which does not have possible fields.


  return [];
}
/**
 * For the field name provided, determine if there are any similar field names
 * that may be the result of a typo.
 */


function getSuggestedFieldNames(schema, type, fieldName) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isObjectType"])(type) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isInterfaceType"])(type)) {
    var possibleFieldNames = Object.keys(type.getFields());
    return Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__["default"])(fieldName, possibleFieldNames);
  } // Otherwise, must be a Union type, which does not define fields.


  return [];
}


/***/ }),

/***/ "../../graphql/validation/rules/FragmentsOnCompositeTypes.mjs":
/*!***********************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/FragmentsOnCompositeTypes.mjs ***!
  \***********************************************************************************************/
/*! exports provided: inlineFragmentOnNonCompositeErrorMessage, fragmentOnNonCompositeErrorMessage, FragmentsOnCompositeTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlineFragmentOnNonCompositeErrorMessage", function() { return inlineFragmentOnNonCompositeErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fragmentOnNonCompositeErrorMessage", function() { return fragmentOnNonCompositeErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FragmentsOnCompositeTypes", function() { return FragmentsOnCompositeTypes; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/printer */ "../../graphql/language/printer.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/definition */ "../../graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/typeFromAST */ "../../graphql/utilities/typeFromAST.mjs");




function inlineFragmentOnNonCompositeErrorMessage(type) {
  return "Fragment cannot condition on non composite type \"".concat(type, "\".");
}
function fragmentOnNonCompositeErrorMessage(fragName, type) {
  return "Fragment \"".concat(fragName, "\" cannot condition on non composite type \"").concat(type, "\".");
}
/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 */

function FragmentsOnCompositeTypes(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var typeCondition = node.typeCondition;

      if (typeCondition) {
        var type = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__["typeFromAST"])(context.getSchema(), typeCondition);

        if (type && !Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(type)) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](inlineFragmentOnNonCompositeErrorMessage(Object(_language_printer__WEBPACK_IMPORTED_MODULE_1__["print"])(typeCondition)), typeCondition));
        }
      }
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var type = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__["typeFromAST"])(context.getSchema(), node.typeCondition);

      if (type && !Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(type)) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](fragmentOnNonCompositeErrorMessage(node.name.value, Object(_language_printer__WEBPACK_IMPORTED_MODULE_1__["print"])(node.typeCondition)), node.typeCondition));
      }
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/KnownArgumentNames.mjs":
/*!****************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/KnownArgumentNames.mjs ***!
  \****************************************************************************************/
/*! exports provided: unknownArgMessage, unknownDirectiveArgMessage, KnownArgumentNames, KnownArgumentNamesOnDirectives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownArgMessage", function() { return unknownArgMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownDirectiveArgMessage", function() { return unknownDirectiveArgMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownArgumentNames", function() { return KnownArgumentNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownArgumentNamesOnDirectives", function() { return KnownArgumentNamesOnDirectives; });
/* harmony import */ var _jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/didYouMean */ "../../graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/suggestionList */ "../../graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../type/directives */ "../../graphql/type/directives.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function unknownArgMessage(argName, fieldName, typeName, suggestedArgs) {
  return "Unknown argument \"".concat(argName, "\" on field \"").concat(fieldName, "\" of type \"").concat(typeName, "\".") + Object(_jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_0__["default"])(suggestedArgs.map(function (x) {
    return "\"".concat(x, "\"");
  }));
}
function unknownDirectiveArgMessage(argName, directiveName, suggestedArgs) {
  return "Unknown argument \"".concat(argName, "\" on directive \"@").concat(directiveName, "\".") + Object(_jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_0__["default"])(suggestedArgs.map(function (x) {
    return "\"".concat(x, "\"");
  }));
}
/**
 * Known argument names
 *
 * A GraphQL field is only valid if all supplied arguments are defined by
 * that field.
 */

function KnownArgumentNames(context) {
  return _objectSpread({}, KnownArgumentNamesOnDirectives(context), {
    Argument: function Argument(argNode) {
      var argDef = context.getArgument();
      var fieldDef = context.getFieldDef();
      var parentType = context.getParentType();

      if (!argDef && fieldDef && parentType) {
        var argName = argNode.name.value;
        var knownArgsNames = fieldDef.args.map(function (arg) {
          return arg.name;
        });
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"](unknownArgMessage(argName, fieldDef.name, parentType.name, Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__["default"])(argName, knownArgsNames)), argNode));
      }
    }
  });
} // @internal

function KnownArgumentNamesOnDirectives(context) {
  var directiveArgs = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives__WEBPACK_IMPORTED_MODULE_4__["specifiedDirectives"];

  for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
    var directive = definedDirectives[_i2];
    directiveArgs[directive.name] = directive.args.map(function (arg) {
      return arg.name;
    });
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
    var def = astDefinitions[_i4];

    if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].DIRECTIVE_DEFINITION) {
      directiveArgs[def.name.value] = def.arguments ? def.arguments.map(function (arg) {
        return arg.name.value;
      }) : [];
    }
  }

  return {
    Directive: function Directive(directiveNode) {
      var directiveName = directiveNode.name.value;
      var knownArgs = directiveArgs[directiveName];

      if (directiveNode.arguments && knownArgs) {
        for (var _i6 = 0, _directiveNode$argume2 = directiveNode.arguments; _i6 < _directiveNode$argume2.length; _i6++) {
          var argNode = _directiveNode$argume2[_i6];
          var argName = argNode.name.value;

          if (knownArgs.indexOf(argName) === -1) {
            var suggestions = Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__["default"])(argName, knownArgs);
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"](unknownDirectiveArgMessage(argName, directiveName, suggestions), argNode));
          }
        }
      }

      return false;
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/KnownDirectives.mjs":
/*!*************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/KnownDirectives.mjs ***!
  \*************************************************************************************/
/*! exports provided: unknownDirectiveMessage, misplacedDirectiveMessage, KnownDirectives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownDirectiveMessage", function() { return unknownDirectiveMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "misplacedDirectiveMessage", function() { return misplacedDirectiveMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownDirectives", function() { return KnownDirectives; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../language/directiveLocation */ "../../graphql/language/directiveLocation.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../type/directives */ "../../graphql/type/directives.mjs");




function unknownDirectiveMessage(directiveName) {
  return "Unknown directive \"".concat(directiveName, "\".");
}
function misplacedDirectiveMessage(directiveName, location) {
  return "Directive \"".concat(directiveName, "\" may not be used on ").concat(location, ".");
}
/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 */

function KnownDirectives(context) {
  var locationsMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives__WEBPACK_IMPORTED_MODULE_3__["specifiedDirectives"];

  for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
    var directive = definedDirectives[_i2];
    locationsMap[directive.name] = directive.locations;
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
    var def = astDefinitions[_i4];

    if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE_DEFINITION) {
      locationsMap[def.name.value] = def.locations.map(function (name) {
        return name.value;
      });
    }
  }

  return {
    Directive: function Directive(node, key, parent, path, ancestors) {
      var name = node.name.value;
      var locations = locationsMap[name];

      if (!locations) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](unknownDirectiveMessage(name), node));
        return;
      }

      var candidateLocation = getDirectiveLocationForASTPath(ancestors);

      if (candidateLocation && locations.indexOf(candidateLocation) === -1) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](misplacedDirectiveMessage(name, candidateLocation), node));
      }
    }
  };
}

function getDirectiveLocationForASTPath(ancestors) {
  var appliedTo = ancestors[ancestors.length - 1];

  if (!Array.isArray(appliedTo)) {
    switch (appliedTo.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION:
        switch (appliedTo.operation) {
          case 'query':
            return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].QUERY;

          case 'mutation':
            return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].MUTATION;

          case 'subscription':
            return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].SUBSCRIPTION;
        }

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FIELD:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].FIELD;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_SPREAD:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].FRAGMENT_SPREAD;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INLINE_FRAGMENT:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].INLINE_FRAGMENT;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_DEFINITION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].FRAGMENT_DEFINITION;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].VARIABLE_DEFINITION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].VARIABLE_DEFINITION;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_EXTENSION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].SCHEMA;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCALAR_TYPE_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCALAR_TYPE_EXTENSION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].SCALAR;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_TYPE_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_TYPE_EXTENSION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].OBJECT;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FIELD_DEFINITION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].FIELD_DEFINITION;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INTERFACE_TYPE_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INTERFACE_TYPE_EXTENSION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].INTERFACE;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].UNION_TYPE_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].UNION_TYPE_EXTENSION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].UNION;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM_TYPE_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM_TYPE_EXTENSION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].ENUM;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM_VALUE_DEFINITION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].ENUM_VALUE;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INPUT_OBJECT_TYPE_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INPUT_OBJECT_TYPE_EXTENSION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].INPUT_OBJECT;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INPUT_VALUE_DEFINITION:
        {
          var parentNode = ancestors[ancestors.length - 3];
          return parentNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INPUT_OBJECT_TYPE_DEFINITION ? _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].INPUT_FIELD_DEFINITION : _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].ARGUMENT_DEFINITION;
        }
    }
  }
}


/***/ }),

/***/ "../../graphql/validation/rules/KnownFragmentNames.mjs":
/*!****************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/KnownFragmentNames.mjs ***!
  \****************************************************************************************/
/*! exports provided: unknownFragmentMessage, KnownFragmentNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownFragmentMessage", function() { return unknownFragmentMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownFragmentNames", function() { return KnownFragmentNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function unknownFragmentMessage(fragName) {
  return "Unknown fragment \"".concat(fragName, "\".");
}
/**
 * Known fragment names
 *
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
 * to fragments defined in the same document.
 */

function KnownFragmentNames(context) {
  return {
    FragmentSpread: function FragmentSpread(node) {
      var fragmentName = node.name.value;
      var fragment = context.getFragment(fragmentName);

      if (!fragment) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](unknownFragmentMessage(fragmentName), node.name));
      }
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/KnownTypeNames.mjs":
/*!************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/KnownTypeNames.mjs ***!
  \************************************************************************************/
/*! exports provided: unknownTypeMessage, KnownTypeNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownTypeMessage", function() { return unknownTypeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownTypeNames", function() { return KnownTypeNames; });
/* harmony import */ var _jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/didYouMean */ "../../graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/suggestionList */ "../../graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_predicates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../language/predicates */ "../../graphql/language/predicates.mjs");
/* harmony import */ var _type_scalars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../type/scalars */ "../../graphql/type/scalars.mjs");





function unknownTypeMessage(typeName, suggestedTypes) {
  return "Unknown type \"".concat(typeName, "\".") + Object(_jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_0__["default"])(suggestedTypes.map(function (x) {
    return "\"".concat(x, "\"");
  }));
}
/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 */

function KnownTypeNames(context) {
  var schema = context.getSchema();
  var existingTypesMap = schema ? schema.getTypeMap() : Object.create(null);
  var definedTypes = Object.create(null);

  for (var _i2 = 0, _context$getDocument$2 = context.getDocument().definitions; _i2 < _context$getDocument$2.length; _i2++) {
    var def = _context$getDocument$2[_i2];

    if (Object(_language_predicates__WEBPACK_IMPORTED_MODULE_3__["isTypeDefinitionNode"])(def)) {
      definedTypes[def.name.value] = true;
    }
  }

  var typeNames = Object.keys(existingTypesMap).concat(Object.keys(definedTypes));
  return {
    NamedType: function NamedType(node, _1, parent, _2, ancestors) {
      var typeName = node.name.value;

      if (!existingTypesMap[typeName] && !definedTypes[typeName]) {
        var definitionNode = ancestors[2] || parent;
        var isSDL = isSDLNode(definitionNode);

        if (isSDL && isSpecifiedScalarName(typeName)) {
          return;
        }

        var suggestedTypes = Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__["default"])(typeName, isSDL ? specifiedScalarsNames.concat(typeNames) : typeNames);
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"](unknownTypeMessage(typeName, suggestedTypes), node));
      }
    }
  };
}
var specifiedScalarsNames = _type_scalars__WEBPACK_IMPORTED_MODULE_4__["specifiedScalarTypes"].map(function (type) {
  return type.name;
});

function isSpecifiedScalarName(typeName) {
  return specifiedScalarsNames.indexOf(typeName) !== -1;
}

function isSDLNode(value) {
  return Boolean(value && !Array.isArray(value) && (Object(_language_predicates__WEBPACK_IMPORTED_MODULE_3__["isTypeSystemDefinitionNode"])(value) || Object(_language_predicates__WEBPACK_IMPORTED_MODULE_3__["isTypeSystemExtensionNode"])(value)));
}


/***/ }),

/***/ "../../graphql/validation/rules/LoneAnonymousOperation.mjs":
/*!********************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/LoneAnonymousOperation.mjs ***!
  \********************************************************************************************/
/*! exports provided: anonOperationNotAloneMessage, LoneAnonymousOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anonOperationNotAloneMessage", function() { return anonOperationNotAloneMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoneAnonymousOperation", function() { return LoneAnonymousOperation; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/kinds */ "../../graphql/language/kinds.mjs");


function anonOperationNotAloneMessage() {
  return 'This anonymous operation must be the only defined operation.';
}
/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 */

function LoneAnonymousOperation(context) {
  var operationCount = 0;
  return {
    Document: function Document(node) {
      operationCount = node.definitions.filter(function (definition) {
        return definition.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION;
      }).length;
    },
    OperationDefinition: function OperationDefinition(node) {
      if (!node.name && operationCount > 1) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](anonOperationNotAloneMessage(), node));
      }
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/LoneSchemaDefinition.mjs":
/*!******************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/LoneSchemaDefinition.mjs ***!
  \******************************************************************************************/
/*! exports provided: schemaDefinitionNotAloneMessage, canNotDefineSchemaWithinExtensionMessage, LoneSchemaDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schemaDefinitionNotAloneMessage", function() { return schemaDefinitionNotAloneMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canNotDefineSchemaWithinExtensionMessage", function() { return canNotDefineSchemaWithinExtensionMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoneSchemaDefinition", function() { return LoneSchemaDefinition; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function schemaDefinitionNotAloneMessage() {
  return 'Must provide only one schema definition.';
}
function canNotDefineSchemaWithinExtensionMessage() {
  return 'Cannot define a new schema within a schema extension.';
}
/**
 * Lone Schema definition
 *
 * A GraphQL document is only valid if it contains only one schema definition.
 */

function LoneSchemaDefinition(context) {
  var oldSchema = context.getSchema();
  var alreadyDefined = oldSchema && (oldSchema.astNode || oldSchema.getQueryType() || oldSchema.getMutationType() || oldSchema.getSubscriptionType());
  var schemaDefinitionsCount = 0;
  return {
    SchemaDefinition: function SchemaDefinition(node) {
      if (alreadyDefined) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](canNotDefineSchemaWithinExtensionMessage(), node));
        return;
      }

      if (schemaDefinitionsCount > 0) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](schemaDefinitionNotAloneMessage(), node));
      }

      ++schemaDefinitionsCount;
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/NoFragmentCycles.mjs":
/*!**************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/NoFragmentCycles.mjs ***!
  \**************************************************************************************/
/*! exports provided: cycleErrorMessage, NoFragmentCycles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cycleErrorMessage", function() { return cycleErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoFragmentCycles", function() { return NoFragmentCycles; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function cycleErrorMessage(fragName, spreadNames) {
  var via = spreadNames.length ? ' via ' + spreadNames.join(', ') : '';
  return "Cannot spread fragment \"".concat(fragName, "\" within itself").concat(via, ".");
}
function NoFragmentCycles(context) {
  // Tracks already visited fragments to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedFrags = Object.create(null); // Array of AST nodes used to produce meaningful errors

  var spreadPath = []; // Position in the spread path

  var spreadPathIndexByName = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      detectCycleRecursive(node);
      return false;
    }
  }; // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.

  function detectCycleRecursive(fragment) {
    if (visitedFrags[fragment.name.value]) {
      return;
    }

    var fragmentName = fragment.name.value;
    visitedFrags[fragmentName] = true;
    var spreadNodes = context.getFragmentSpreads(fragment.selectionSet);

    if (spreadNodes.length === 0) {
      return;
    }

    spreadPathIndexByName[fragmentName] = spreadPath.length;

    for (var _i2 = 0; _i2 < spreadNodes.length; _i2++) {
      var spreadNode = spreadNodes[_i2];
      var spreadName = spreadNode.name.value;
      var cycleIndex = spreadPathIndexByName[spreadName];
      spreadPath.push(spreadNode);

      if (cycleIndex === undefined) {
        var spreadFragment = context.getFragment(spreadName);

        if (spreadFragment) {
          detectCycleRecursive(spreadFragment);
        }
      } else {
        var cyclePath = spreadPath.slice(cycleIndex);
        var fragmentNames = cyclePath.slice(0, -1).map(function (s) {
          return s.name.value;
        });
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](cycleErrorMessage(spreadName, fragmentNames), cyclePath));
      }

      spreadPath.pop();
    }

    spreadPathIndexByName[fragmentName] = undefined;
  }
}


/***/ }),

/***/ "../../graphql/validation/rules/NoUndefinedVariables.mjs":
/*!******************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/NoUndefinedVariables.mjs ***!
  \******************************************************************************************/
/*! exports provided: undefinedVarMessage, NoUndefinedVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undefinedVarMessage", function() { return undefinedVarMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUndefinedVariables", function() { return NoUndefinedVariables; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function undefinedVarMessage(varName, opName) {
  return opName ? "Variable \"$".concat(varName, "\" is not defined by operation \"").concat(opName, "\".") : "Variable \"$".concat(varName, "\" is not defined.");
}
/**
 * No undefined variables
 *
 * A GraphQL operation is only valid if all variables encountered, both directly
 * and via fragment spreads, are defined by that operation.
 */

function NoUndefinedVariables(context) {
  var variableNameDefined = Object.create(null);
  return {
    OperationDefinition: {
      enter: function enter() {
        variableNameDefined = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);

        for (var _i2 = 0; _i2 < usages.length; _i2++) {
          var _ref2 = usages[_i2];
          var node = _ref2.node;
          var varName = node.name.value;

          if (variableNameDefined[varName] !== true) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](undefinedVarMessage(varName, operation.name && operation.name.value), [node, operation]));
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      variableNameDefined[node.variable.name.value] = true;
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/NoUnusedFragments.mjs":
/*!***************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/NoUnusedFragments.mjs ***!
  \***************************************************************************************/
/*! exports provided: unusedFragMessage, NoUnusedFragments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unusedFragMessage", function() { return unusedFragMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUnusedFragments", function() { return NoUnusedFragments; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function unusedFragMessage(fragName) {
  return "Fragment \"".concat(fragName, "\" is never used.");
}
/**
 * No unused fragments
 *
 * A GraphQL document is only valid if all fragment definitions are spread
 * within operations, or spread within other fragments spread within operations.
 */

function NoUnusedFragments(context) {
  var operationDefs = [];
  var fragmentDefs = [];
  return {
    OperationDefinition: function OperationDefinition(node) {
      operationDefs.push(node);
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fragmentDefs.push(node);
      return false;
    },
    Document: {
      leave: function leave() {
        var fragmentNameUsed = Object.create(null);

        for (var _i2 = 0; _i2 < operationDefs.length; _i2++) {
          var operation = operationDefs[_i2];

          for (var _i4 = 0, _context$getRecursive2 = context.getRecursivelyReferencedFragments(operation); _i4 < _context$getRecursive2.length; _i4++) {
            var fragment = _context$getRecursive2[_i4];
            fragmentNameUsed[fragment.name.value] = true;
          }
        }

        for (var _i6 = 0; _i6 < fragmentDefs.length; _i6++) {
          var fragmentDef = fragmentDefs[_i6];
          var fragName = fragmentDef.name.value;

          if (fragmentNameUsed[fragName] !== true) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](unusedFragMessage(fragName), fragmentDef));
          }
        }
      }
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/NoUnusedVariables.mjs":
/*!***************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/NoUnusedVariables.mjs ***!
  \***************************************************************************************/
/*! exports provided: unusedVariableMessage, NoUnusedVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unusedVariableMessage", function() { return unusedVariableMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUnusedVariables", function() { return NoUnusedVariables; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function unusedVariableMessage(varName, opName) {
  return opName ? "Variable \"$".concat(varName, "\" is never used in operation \"").concat(opName, "\".") : "Variable \"$".concat(varName, "\" is never used.");
}
/**
 * No unused variables
 *
 * A GraphQL operation is only valid if all variables defined by an operation
 * are used, either directly or within a spread fragment.
 */

function NoUnusedVariables(context) {
  var variableDefs = [];
  return {
    OperationDefinition: {
      enter: function enter() {
        variableDefs = [];
      },
      leave: function leave(operation) {
        var variableNameUsed = Object.create(null);
        var usages = context.getRecursiveVariableUsages(operation);
        var opName = operation.name ? operation.name.value : null;

        for (var _i2 = 0; _i2 < usages.length; _i2++) {
          var _ref2 = usages[_i2];
          var node = _ref2.node;
          variableNameUsed[node.name.value] = true;
        }

        for (var _i4 = 0, _variableDefs2 = variableDefs; _i4 < _variableDefs2.length; _i4++) {
          var variableDef = _variableDefs2[_i4];
          var variableName = variableDef.variable.name.value;

          if (variableNameUsed[variableName] !== true) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](unusedVariableMessage(variableName, opName), variableDef));
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(def) {
      variableDefs.push(def);
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/OverlappingFieldsCanBeMerged.mjs":
/*!**************************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/OverlappingFieldsCanBeMerged.mjs ***!
  \**************************************************************************************************/
/*! exports provided: fieldsConflictMessage, OverlappingFieldsCanBeMerged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldsConflictMessage", function() { return fieldsConflictMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlappingFieldsCanBeMerged", function() { return OverlappingFieldsCanBeMerged; });
/* harmony import */ var _polyfills_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfills/find */ "../../graphql/polyfills/find.mjs");
/* harmony import */ var _polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../polyfills/objectEntries */ "../../graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../language/printer */ "../../graphql/language/printer.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../type/definition */ "../../graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/typeFromAST */ "../../graphql/utilities/typeFromAST.mjs");








function fieldsConflictMessage(responseName, reason) {
  return "Fields \"".concat(responseName, "\" conflict because ").concat(reasonMessage(reason), ". ") + 'Use different aliases on the fields to fetch both if this was intentional.';
}

function reasonMessage(reason) {
  if (Array.isArray(reason)) {
    return reason.map(function (_ref) {
      var responseName = _ref[0],
          subreason = _ref[1];
      return "subfields \"".concat(responseName, "\" conflict because ").concat(reasonMessage(subreason));
    }).join(' and ');
  }

  return reason;
}
/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 */


function OverlappingFieldsCanBeMerged(context) {
  // A memoization for when two fragments are compared "between" each other for
  // conflicts. Two fragments may be compared many times, so memoizing this can
  // dramatically improve the performance of this validator.
  var comparedFragmentPairs = new PairSet(); // A cache for the "field map" and list of fragment names found in any given
  // selection set. Selection sets may be asked for this information multiple
  // times, so this improves the performance of this validator.

  var cachedFieldsAndFragmentNames = new Map();
  return {
    SelectionSet: function SelectionSet(selectionSet) {
      var conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, context.getParentType(), selectionSet);

      for (var _i2 = 0; _i2 < conflicts.length; _i2++) {
        var _ref3 = conflicts[_i2];
        var _ref2$ = _ref3[0];
        var responseName = _ref2$[0];
        var reason = _ref2$[1];
        var fields1 = _ref3[1];
        var fields2 = _ref3[2];
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_3__["GraphQLError"](fieldsConflictMessage(responseName, reason), fields1.concat(fields2)));
      }
    }
  };
}

/**
 * Algorithm:
 *
 * Conflicts occur when two fields exist in a query which will produce the same
 * response name, but represent differing values, thus creating a conflict.
 * The algorithm below finds all conflicts via making a series of comparisons
 * between fields. In order to compare as few fields as possible, this makes
 * a series of comparisons "within" sets of fields and "between" sets of fields.
 *
 * Given any selection set, a collection produces both a set of fields by
 * also including all inline fragments, as well as a list of fragments
 * referenced by fragment spreads.
 *
 * A) Each selection set represented in the document first compares "within" its
 * collected set of fields, finding any conflicts between every pair of
 * overlapping fields.
 * Note: This is the *only time* that a the fields "within" a set are compared
 * to each other. After this only fields "between" sets are compared.
 *
 * B) Also, if any fragment is referenced in a selection set, then a
 * comparison is made "between" the original set of fields and the
 * referenced fragment.
 *
 * C) Also, if multiple fragments are referenced, then comparisons
 * are made "between" each referenced fragment.
 *
 * D) When comparing "between" a set of fields and a referenced fragment, first
 * a comparison is made between each field in the original set of fields and
 * each field in the the referenced set of fields.
 *
 * E) Also, if any fragment is referenced in the referenced selection set,
 * then a comparison is made "between" the original set of fields and the
 * referenced fragment (recursively referring to step D).
 *
 * F) When comparing "between" two fragments, first a comparison is made between
 * each field in the first referenced set of fields and each field in the the
 * second referenced set of fields.
 *
 * G) Also, any fragments referenced by the first must be compared to the
 * second, and any fragments referenced by the second must be compared to the
 * first (recursively referring to step F).
 *
 * H) When comparing two fields, if both have selection sets, then a comparison
 * is made "between" both selection sets, first comparing the set of fields in
 * the first selection set with the set of fields in the second.
 *
 * I) Also, if any fragment is referenced in either selection set, then a
 * comparison is made "between" the other set of fields and the
 * referenced fragment.
 *
 * J) Also, if two fragments are referenced in both selection sets, then a
 * comparison is made "between" the two fragments.
 *
 */
// Find all conflicts found "within" a selection set, including those found
// via spreading in fragments. Called when visiting each SelectionSet in the
// GraphQL Document.
function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentType, selectionSet) {
  var conflicts = [];

  var _getFieldsAndFragment = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet),
      fieldMap = _getFieldsAndFragment[0],
      fragmentNames = _getFieldsAndFragment[1]; // (A) Find find all conflicts "within" the fields of this selection set.
  // Note: this is the *only place* `collectConflictsWithin` is called.


  collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap);

  if (fragmentNames.length !== 0) {
    // (B) Then collect conflicts between these fields and those represented by
    // each spread fragment name found.
    var comparedFragments = Object.create(null);

    for (var i = 0; i < fragmentNames.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, false, fieldMap, fragmentNames[i]); // (C) Then compare this fragment with all other fragments found in this
      // selection set to collect conflicts between fragments spread together.
      // This compares each item in the list of fragment names to every other
      // item in that same list (except for itself).

      for (var j = i + 1; j < fragmentNames.length; j++) {
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fragmentNames[i], fragmentNames[j]);
      }
    }
  }

  return conflicts;
} // Collect all conflicts found between a set of fields and a fragment reference
// including via spreading in any nested fragments.


function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
  // Memoize so a fragment is not compared for conflicts more than once.
  if (comparedFragments[fragmentName]) {
    return;
  }

  comparedFragments[fragmentName] = true;
  var fragment = context.getFragment(fragmentName);

  if (!fragment) {
    return;
  }

  var _getReferencedFieldsA = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment),
      fieldMap2 = _getReferencedFieldsA[0],
      fragmentNames2 = _getReferencedFieldsA[1]; // Do not compare a fragment's fieldMap to itself.


  if (fieldMap === fieldMap2) {
    return;
  } // (D) First collect any conflicts between the provided collection of fields
  // and the collection of fields represented by the given fragment.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fieldMap2); // (E) Then collect any conflicts between the provided collection of fields
  // and any fragment names found in the given fragment.

  for (var i = 0; i < fragmentNames2.length; i++) {
    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentNames2[i]);
  }
} // Collect all conflicts found between two fragments, including via spreading in
// any nested fragments.


function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
  // No need to compare a fragment to itself.
  if (fragmentName1 === fragmentName2) {
    return;
  } // Memoize so two fragments are not compared for conflicts more than once.


  if (comparedFragmentPairs.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
    return;
  }

  comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);
  var fragment1 = context.getFragment(fragmentName1);
  var fragment2 = context.getFragment(fragmentName2);

  if (!fragment1 || !fragment2) {
    return;
  }

  var _getReferencedFieldsA2 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1),
      fieldMap1 = _getReferencedFieldsA2[0],
      fragmentNames1 = _getReferencedFieldsA2[1];

  var _getReferencedFieldsA3 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2),
      fieldMap2 = _getReferencedFieldsA3[0],
      fragmentNames2 = _getReferencedFieldsA3[1]; // (F) First, collect all conflicts between these two collections of fields
  // (not including any nested fragments).


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (G) Then collect conflicts between the first fragment and any nested
  // fragments spread in the second fragment.

  for (var j = 0; j < fragmentNames2.length; j++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentNames2[j]);
  } // (G) Then collect conflicts between the second fragment and any nested
  // fragments spread in the first fragment.


  for (var i = 0; i < fragmentNames1.length; i++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[i], fragmentName2);
  }
} // Find all conflicts found between two selection sets, including those found
// via spreading in fragments. Called when determining if conflicts exist
// between the sub-fields of two overlapping fields.


function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
  var conflicts = [];

  var _getFieldsAndFragment2 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1),
      fieldMap1 = _getFieldsAndFragment2[0],
      fragmentNames1 = _getFieldsAndFragment2[1];

  var _getFieldsAndFragment3 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2),
      fieldMap2 = _getFieldsAndFragment3[0],
      fragmentNames2 = _getFieldsAndFragment3[1]; // (H) First, collect all conflicts between these two collections of field.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (I) Then collect conflicts between the first collection of fields and
  // those referenced by each fragment name associated with the second.

  if (fragmentNames2.length !== 0) {
    var comparedFragments = Object.create(null);

    for (var j = 0; j < fragmentNames2.length; j++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fragmentNames2[j]);
    }
  } // (I) Then collect conflicts between the second collection of fields and
  // those referenced by each fragment name associated with the first.


  if (fragmentNames1.length !== 0) {
    var _comparedFragments = Object.create(null);

    for (var i = 0; i < fragmentNames1.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, _comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap2, fragmentNames1[i]);
    }
  } // (J) Also collect conflicts between any fragment names by the first and
  // fragment names by the second. This compares each item in the first set of
  // names to each item in the second set of names.


  for (var _i3 = 0; _i3 < fragmentNames1.length; _i3++) {
    for (var _j = 0; _j < fragmentNames2.length; _j++) {
      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[_i3], fragmentNames2[_j]);
    }
  }

  return conflicts;
} // Collect all Conflicts "within" one collection of fields.


function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For every response name, if there are multiple fields, they
  // must be compared to find a potential conflict.
  for (var _i5 = 0, _objectEntries2 = Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_1__["default"])(fieldMap); _i5 < _objectEntries2.length; _i5++) {
    var _ref5 = _objectEntries2[_i5];
    var responseName = _ref5[0];
    var fields = _ref5[1];

    // This compares every field in the list to every other field in this list
    // (except to itself). If the list only has one item, nothing needs to
    // be compared.
    if (fields.length > 1) {
      for (var i = 0; i < fields.length; i++) {
        for (var j = i + 1; j < fields.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, // within one collection is never mutually exclusive
          responseName, fields[i], fields[j]);

          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  }
} // Collect all Conflicts between two collections of fields. This is similar to,
// but different from the `collectConflictsWithin` function above. This check
// assumes that `collectConflictsWithin` has already been called on each
// provided collection of fields. This is true because this validator traverses
// each individual selection set.


function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For any response name which appears in both provided field
  // maps, each field from the first field map must be compared to every field
  // in the second field map to find potential conflicts.
  for (var _i7 = 0, _Object$keys2 = Object.keys(fieldMap1); _i7 < _Object$keys2.length; _i7++) {
    var responseName = _Object$keys2[_i7];
    var fields2 = fieldMap2[responseName];

    if (fields2) {
      var fields1 = fieldMap1[responseName];

      for (var i = 0; i < fields1.length; i++) {
        for (var j = 0; j < fields2.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, fields1[i], fields2[j]);

          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  }
} // Determines if there is a conflict between two particular fields, including
// comparing their sub-fields.


function findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
  var parentType1 = field1[0],
      node1 = field1[1],
      def1 = field1[2];
  var parentType2 = field2[0],
      node2 = field2[1],
      def2 = field2[2]; // If it is known that two fields could not possibly apply at the same
  // time, due to the parent types, then it is safe to permit them to diverge
  // in aliased field or arguments used as they will not present any ambiguity
  // by differing.
  // It is known that two parent types could never overlap if they are
  // different Object types. Interface or Union types might overlap - if not
  // in the current state of the schema, then perhaps in some future version,
  // thus may not safely diverge.

  var areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isObjectType"])(parentType1) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isObjectType"])(parentType2); // The return type for each field.

  var type1 = def1 && def1.type;
  var type2 = def2 && def2.type;

  if (!areMutuallyExclusive) {
    // Two aliases must refer to the same field.
    var name1 = node1.name.value;
    var name2 = node2.name.value;

    if (name1 !== name2) {
      return [[responseName, "".concat(name1, " and ").concat(name2, " are different fields")], [node1], [node2]];
    } // Two field calls must have the same arguments.


    if (!sameArguments(node1.arguments || [], node2.arguments || [])) {
      return [[responseName, 'they have differing arguments'], [node1], [node2]];
    }
  }

  if (type1 && type2 && doTypesConflict(type1, type2)) {
    return [[responseName, "they return conflicting types ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type1), " and ").concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type2))], [node1], [node2]];
  } // Collect and compare sub-fields. Use the same "visited fragment names" list
  // for both collections so fields in a fragment reference are never
  // compared to themselves.


  var selectionSet1 = node1.selectionSet;
  var selectionSet2 = node2.selectionSet;

  if (selectionSet1 && selectionSet2) {
    var conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["getNamedType"])(type1), selectionSet1, Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["getNamedType"])(type2), selectionSet2);
    return subfieldConflicts(conflicts, responseName, node1, node2);
  }
}

function sameArguments(arguments1, arguments2) {
  if (arguments1.length !== arguments2.length) {
    return false;
  }

  return arguments1.every(function (argument1) {
    var argument2 = Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments2, function (argument) {
      return argument.name.value === argument1.name.value;
    });

    if (!argument2) {
      return false;
    }

    return sameValue(argument1.value, argument2.value);
  });
}

function sameValue(value1, value2) {
  return !value1 && !value2 || Object(_language_printer__WEBPACK_IMPORTED_MODULE_5__["print"])(value1) === Object(_language_printer__WEBPACK_IMPORTED_MODULE_5__["print"])(value2);
} // Two types conflict if both types could not apply to a value simultaneously.
// Composite types are ignored as their individual field types will be compared
// later recursively. However List and Non-Null types must match.


function doTypesConflict(type1, type2) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isListType"])(type1)) {
    return Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isListType"])(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isListType"])(type2)) {
    return true;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(type1)) {
    return Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(type2)) {
    return true;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isLeafType"])(type1) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isLeafType"])(type2)) {
    return type1 !== type2;
  }

  return false;
} // Given a selection set, return the collection of fields (a mapping of response
// name to field nodes and definitions) as well as a list of fragment names
// referenced via fragment spreads.


function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
  var cached = cachedFieldsAndFragmentNames.get(selectionSet);

  if (!cached) {
    var nodeAndDefs = Object.create(null);
    var fragmentNames = Object.create(null);

    _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);

    cached = [nodeAndDefs, Object.keys(fragmentNames)];
    cachedFieldsAndFragmentNames.set(selectionSet, cached);
  }

  return cached;
} // Given a reference to a fragment, return the represented collection of fields
// as well as a list of nested fragment names referenced via fragment spreads.


function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
  // Short-circuit building a type from the node if possible.
  var cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);

  if (cached) {
    return cached;
  }

  var fragmentType = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_7__["typeFromAST"])(context.getSchema(), fragment.typeCondition);
  return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
}

function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
  for (var _i9 = 0, _selectionSet$selecti2 = selectionSet.selections; _i9 < _selectionSet$selecti2.length; _i9++) {
    var selection = _selectionSet$selecti2[_i9];

    switch (selection.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FIELD:
        {
          var fieldName = selection.name.value;
          var fieldDef = void 0;

          if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isObjectType"])(parentType) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isInterfaceType"])(parentType)) {
            fieldDef = parentType.getFields()[fieldName];
          }

          var responseName = selection.alias ? selection.alias.value : fieldName;

          if (!nodeAndDefs[responseName]) {
            nodeAndDefs[responseName] = [];
          }

          nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FRAGMENT_SPREAD:
        fragmentNames[selection.name.value] = true;
        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INLINE_FRAGMENT:
        {
          var typeCondition = selection.typeCondition;
          var inlineFragmentType = typeCondition ? Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_7__["typeFromAST"])(context.getSchema(), typeCondition) : parentType;

          _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);

          break;
        }
    }
  }
} // Given a series of Conflicts which occurred between two sub-fields, generate
// a single Conflict.


function subfieldConflicts(conflicts, responseName, node1, node2) {
  if (conflicts.length > 0) {
    return [[responseName, conflicts.map(function (_ref6) {
      var reason = _ref6[0];
      return reason;
    })], conflicts.reduce(function (allFields, _ref7) {
      var fields1 = _ref7[1];
      return allFields.concat(fields1);
    }, [node1]), conflicts.reduce(function (allFields, _ref8) {
      var fields2 = _ref8[2];
      return allFields.concat(fields2);
    }, [node2])];
  }
}
/**
 * A way to keep track of pairs of things when the ordering of the pair does
 * not matter. We do this by maintaining a sort of double adjacency sets.
 */


var PairSet =
/*#__PURE__*/
function () {
  function PairSet() {
    this._data = Object.create(null);
  }

  var _proto = PairSet.prototype;

  _proto.has = function has(a, b, areMutuallyExclusive) {
    var first = this._data[a];
    var result = first && first[b];

    if (result === undefined) {
      return false;
    } // areMutuallyExclusive being false is a superset of being true,
    // hence if we want to know if this PairSet "has" these two with no
    // exclusivity, we have to ensure it was added as such.


    if (areMutuallyExclusive === false) {
      return result === false;
    }

    return true;
  };

  _proto.add = function add(a, b, areMutuallyExclusive) {
    _pairSetAdd(this._data, a, b, areMutuallyExclusive);

    _pairSetAdd(this._data, b, a, areMutuallyExclusive);
  };

  return PairSet;
}();

function _pairSetAdd(data, a, b, areMutuallyExclusive) {
  var map = data[a];

  if (!map) {
    map = Object.create(null);
    data[a] = map;
  }

  map[b] = areMutuallyExclusive;
}


/***/ }),

/***/ "../../graphql/validation/rules/PossibleFragmentSpreads.mjs":
/*!*********************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/PossibleFragmentSpreads.mjs ***!
  \*********************************************************************************************/
/*! exports provided: typeIncompatibleSpreadMessage, typeIncompatibleAnonSpreadMessage, PossibleFragmentSpreads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeIncompatibleSpreadMessage", function() { return typeIncompatibleSpreadMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeIncompatibleAnonSpreadMessage", function() { return typeIncompatibleAnonSpreadMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossibleFragmentSpreads", function() { return PossibleFragmentSpreads; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/definition */ "../../graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/typeFromAST */ "../../graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_typeComparators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/typeComparators */ "../../graphql/utilities/typeComparators.mjs");





function typeIncompatibleSpreadMessage(fragName, parentType, fragType) {
  return "Fragment \"".concat(fragName, "\" cannot be spread here as objects of type \"").concat(parentType, "\" can never be of type \"").concat(fragType, "\".");
}
function typeIncompatibleAnonSpreadMessage(parentType, fragType) {
  return "Fragment cannot be spread here as objects of type \"".concat(parentType, "\" can never be of type \"").concat(fragType, "\".");
}
/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */

function PossibleFragmentSpreads(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var fragType = context.getType();
      var parentType = context.getParentType();

      if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(fragType) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(parentType) && !Object(_utilities_typeComparators__WEBPACK_IMPORTED_MODULE_4__["doTypesOverlap"])(context.getSchema(), fragType, parentType)) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](typeIncompatibleAnonSpreadMessage(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(parentType), Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(fragType)), node));
      }
    },
    FragmentSpread: function FragmentSpread(node) {
      var fragName = node.name.value;
      var fragType = getFragmentType(context, fragName);
      var parentType = context.getParentType();

      if (fragType && parentType && !Object(_utilities_typeComparators__WEBPACK_IMPORTED_MODULE_4__["doTypesOverlap"])(context.getSchema(), fragType, parentType)) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](typeIncompatibleSpreadMessage(fragName, Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(parentType), Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(fragType)), node));
      }
    }
  };
}

function getFragmentType(context, name) {
  var frag = context.getFragment(name);

  if (frag) {
    var type = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__["typeFromAST"])(context.getSchema(), frag.typeCondition);

    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(type)) {
      return type;
    }
  }
}


/***/ }),

/***/ "../../graphql/validation/rules/PossibleTypeExtensions.mjs":
/*!********************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/PossibleTypeExtensions.mjs ***!
  \********************************************************************************************/
/*! exports provided: extendingUnknownTypeMessage, extendingDifferentTypeKindMessage, PossibleTypeExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendingUnknownTypeMessage", function() { return extendingUnknownTypeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendingDifferentTypeKindMessage", function() { return extendingDifferentTypeKindMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossibleTypeExtensions", function() { return PossibleTypeExtensions; });
/* harmony import */ var _jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/didYouMean */ "../../graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/suggestionList */ "../../graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _language_predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/predicates */ "../../graphql/language/predicates.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../type/definition */ "../../graphql/type/definition.mjs");
var _defKindToExtKind;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function extendingUnknownTypeMessage(typeName, suggestedTypes) {
  return "Cannot extend type \"".concat(typeName, "\" because it is not defined.") + Object(_jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_0__["default"])(suggestedTypes.map(function (x) {
    return "\"".concat(x, "\"");
  }));
}
function extendingDifferentTypeKindMessage(typeName, kind) {
  return "Cannot extend non-".concat(kind, " type \"").concat(typeName, "\".");
}
/**
 * Possible type extension
 *
 * A type extension is only valid if the type is defined and has the same kind.
 */

function PossibleTypeExtensions(context) {
  var schema = context.getSchema();
  var definedTypes = Object.create(null);

  for (var _i2 = 0, _context$getDocument$2 = context.getDocument().definitions; _i2 < _context$getDocument$2.length; _i2++) {
    var def = _context$getDocument$2[_i2];

    if (Object(_language_predicates__WEBPACK_IMPORTED_MODULE_4__["isTypeDefinitionNode"])(def)) {
      definedTypes[def.name.value] = def;
    }
  }

  return {
    ScalarTypeExtension: checkExtension,
    ObjectTypeExtension: checkExtension,
    InterfaceTypeExtension: checkExtension,
    UnionTypeExtension: checkExtension,
    EnumTypeExtension: checkExtension,
    InputObjectTypeExtension: checkExtension
  };

  function checkExtension(node) {
    var typeName = node.name.value;
    var defNode = definedTypes[typeName];
    var existingType = schema && schema.getType(typeName);

    if (defNode) {
      var expectedKind = defKindToExtKind[defNode.kind];

      if (expectedKind !== node.kind) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"](extendingDifferentTypeKindMessage(typeName, extensionKindToTypeName(expectedKind)), [defNode, node]));
      }
    } else if (existingType) {
      var _expectedKind = typeToExtKind(existingType);

      if (_expectedKind !== node.kind) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"](extendingDifferentTypeKindMessage(typeName, extensionKindToTypeName(_expectedKind)), node));
      }
    } else {
      var allTypeNames = Object.keys(definedTypes);

      if (schema) {
        allTypeNames = allTypeNames.concat(Object.keys(schema.getTypeMap()));
      }

      var suggestedTypes = Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__["default"])(typeName, allTypeNames);
      context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"](extendingUnknownTypeMessage(typeName, suggestedTypes), node.name));
    }
  }
}
var defKindToExtKind = (_defKindToExtKind = {}, _defineProperty(_defKindToExtKind, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCALAR_TYPE_DEFINITION, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCALAR_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT_TYPE_DEFINITION, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INTERFACE_TYPE_DEFINITION, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INTERFACE_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].UNION_TYPE_DEFINITION, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].UNION_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM_TYPE_DEFINITION, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_OBJECT_TYPE_DEFINITION, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_OBJECT_TYPE_EXTENSION), _defKindToExtKind);

function typeToExtKind(type) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isScalarType"])(type)) {
    return _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCALAR_TYPE_EXTENSION;
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isObjectType"])(type)) {
    return _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT_TYPE_EXTENSION;
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isInterfaceType"])(type)) {
    return _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INTERFACE_TYPE_EXTENSION;
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isUnionType"])(type)) {
    return _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].UNION_TYPE_EXTENSION;
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isEnumType"])(type)) {
    return _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM_TYPE_EXTENSION;
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isInputObjectType"])(type)) {
    return _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_OBJECT_TYPE_EXTENSION;
  }
}

function extensionKindToTypeName(kind) {
  switch (kind) {
    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCALAR_TYPE_EXTENSION:
      return 'scalar';

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT_TYPE_EXTENSION:
      return 'object';

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INTERFACE_TYPE_EXTENSION:
      return 'interface';

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].UNION_TYPE_EXTENSION:
      return 'union';

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM_TYPE_EXTENSION:
      return 'enum';

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_OBJECT_TYPE_EXTENSION:
      return 'input object';

    default:
      return 'unknown type';
  }
}


/***/ }),

/***/ "../../graphql/validation/rules/ProvidedRequiredArguments.mjs":
/*!***********************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/ProvidedRequiredArguments.mjs ***!
  \***********************************************************************************************/
/*! exports provided: missingFieldArgMessage, missingDirectiveArgMessage, ProvidedRequiredArguments, ProvidedRequiredArgumentsOnDirectives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missingFieldArgMessage", function() { return missingFieldArgMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missingDirectiveArgMessage", function() { return missingDirectiveArgMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidedRequiredArguments", function() { return ProvidedRequiredArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidedRequiredArgumentsOnDirectives", function() { return ProvidedRequiredArgumentsOnDirectives; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/keyMap */ "../../graphql/jsutils/keyMap.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/printer */ "../../graphql/language/printer.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../type/directives */ "../../graphql/type/directives.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../type/definition */ "../../graphql/type/definition.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function missingFieldArgMessage(fieldName, argName, type) {
  return "Field \"".concat(fieldName, "\" argument \"").concat(argName, "\" of type \"").concat(type, "\" is required, but it was not provided.");
}
function missingDirectiveArgMessage(directiveName, argName, type) {
  return "Directive \"@".concat(directiveName, "\" argument \"").concat(argName, "\" of type \"").concat(type, "\" is required, but it was not provided.");
}
/**
 * Provided required arguments
 *
 * A field or directive is only valid if all required (non-null without a
 * default value) field arguments have been provided.
 */

function ProvidedRequiredArguments(context) {
  return _objectSpread({}, ProvidedRequiredArgumentsOnDirectives(context), {
    Field: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(fieldNode) {
        var fieldDef = context.getFieldDef();

        if (!fieldDef) {
          return false;
        }

        var argNodes = fieldNode.arguments || [];
        var argNodeMap = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__["default"])(argNodes, function (arg) {
          return arg.name.value;
        });

        for (var _i2 = 0, _fieldDef$args2 = fieldDef.args; _i2 < _fieldDef$args2.length; _i2++) {
          var argDef = _fieldDef$args2[_i2];
          var argNode = argNodeMap[argDef.name];

          if (!argNode && Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isRequiredArgument"])(argDef)) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"](missingFieldArgMessage(fieldDef.name, argDef.name, Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(argDef.type)), fieldNode));
          }
        }
      }
    }
  });
} // @internal

function ProvidedRequiredArgumentsOnDirectives(context) {
  var requiredArgsMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives__WEBPACK_IMPORTED_MODULE_5__["specifiedDirectives"];

  for (var _i4 = 0; _i4 < definedDirectives.length; _i4++) {
    var directive = definedDirectives[_i4];
    requiredArgsMap[directive.name] = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__["default"])(directive.args.filter(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isRequiredArgument"]), function (arg) {
      return arg.name;
    });
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i6 = 0; _i6 < astDefinitions.length; _i6++) {
    var def = astDefinitions[_i6];

    if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].DIRECTIVE_DEFINITION) {
      requiredArgsMap[def.name.value] = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__["default"])(def.arguments ? def.arguments.filter(isRequiredArgumentNode) : [], function (arg) {
        return arg.name.value;
      });
    }
  }

  return {
    Directive: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(directiveNode) {
        var directiveName = directiveNode.name.value;
        var requiredArgs = requiredArgsMap[directiveName];

        if (requiredArgs) {
          var argNodes = directiveNode.arguments || [];
          var argNodeMap = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__["default"])(argNodes, function (arg) {
            return arg.name.value;
          });

          for (var _i8 = 0, _Object$keys2 = Object.keys(requiredArgs); _i8 < _Object$keys2.length; _i8++) {
            var argName = _Object$keys2[_i8];

            if (!argNodeMap[argName]) {
              var argType = requiredArgs[argName].type;
              context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"](missingDirectiveArgMessage(directiveName, argName, Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isType"])(argType) ? Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(argType) : Object(_language_printer__WEBPACK_IMPORTED_MODULE_4__["print"])(argType)), directiveNode));
            }
          }
        }
      }
    }
  };
}

function isRequiredArgumentNode(arg) {
  return arg.type.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].NON_NULL_TYPE && arg.defaultValue == null;
}


/***/ }),

/***/ "../../graphql/validation/rules/ScalarLeafs.mjs":
/*!*********************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/ScalarLeafs.mjs ***!
  \*********************************************************************************/
/*! exports provided: noSubselectionAllowedMessage, requiredSubselectionMessage, ScalarLeafs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noSubselectionAllowedMessage", function() { return noSubselectionAllowedMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredSubselectionMessage", function() { return requiredSubselectionMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScalarLeafs", function() { return ScalarLeafs; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/definition */ "../../graphql/type/definition.mjs");



function noSubselectionAllowedMessage(fieldName, type) {
  return "Field \"".concat(fieldName, "\" must not have a selection since type \"").concat(type, "\" has no subfields.");
}
function requiredSubselectionMessage(fieldName, type) {
  return "Field \"".concat(fieldName, "\" of type \"").concat(type, "\" must have a selection of subfields. Did you mean \"").concat(fieldName, " { ... }\"?");
}
/**
 * Scalar leafs
 *
 * A GraphQL document is valid only if all leaf fields (fields without
 * sub selections) are of scalar or enum types.
 */

function ScalarLeafs(context) {
  return {
    Field: function Field(node) {
      var type = context.getType();
      var selectionSet = node.selectionSet;

      if (type) {
        if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isLeafType"])(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["getNamedType"])(type))) {
          if (selectionSet) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](noSubselectionAllowedMessage(node.name.value, Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(type)), selectionSet));
          }
        } else if (!selectionSet) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](requiredSubselectionMessage(node.name.value, Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(type)), node));
        }
      }
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/SingleFieldSubscriptions.mjs":
/*!**********************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/SingleFieldSubscriptions.mjs ***!
  \**********************************************************************************************/
/*! exports provided: singleFieldOnlyMessage, SingleFieldSubscriptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleFieldOnlyMessage", function() { return singleFieldOnlyMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleFieldSubscriptions", function() { return SingleFieldSubscriptions; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function singleFieldOnlyMessage(name) {
  return name ? "Subscription \"".concat(name, "\" must select only one top level field.") : 'Anonymous Subscription must select only one top level field.';
}
/**
 * Subscriptions must only include one field.
 *
 * A GraphQL subscription is valid only if it contains a single root field.
 */

function SingleFieldSubscriptions(context) {
  return {
    OperationDefinition: function OperationDefinition(node) {
      if (node.operation === 'subscription') {
        if (node.selectionSet.selections.length !== 1) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](singleFieldOnlyMessage(node.name && node.name.value), node.selectionSet.selections.slice(1)));
        }
      }
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/UniqueArgumentNames.mjs":
/*!*****************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/UniqueArgumentNames.mjs ***!
  \*****************************************************************************************/
/*! exports provided: duplicateArgMessage, UniqueArgumentNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateArgMessage", function() { return duplicateArgMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueArgumentNames", function() { return UniqueArgumentNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function duplicateArgMessage(argName) {
  return "There can be only one argument named \"".concat(argName, "\".");
}
/**
 * Unique argument names
 *
 * A GraphQL field or directive is only valid if all supplied arguments are
 * uniquely named.
 */

function UniqueArgumentNames(context) {
  var knownArgNames = Object.create(null);
  return {
    Field: function Field() {
      knownArgNames = Object.create(null);
    },
    Directive: function Directive() {
      knownArgNames = Object.create(null);
    },
    Argument: function Argument(node) {
      var argName = node.name.value;

      if (knownArgNames[argName]) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateArgMessage(argName), [knownArgNames[argName], node.name]));
      } else {
        knownArgNames[argName] = node.name;
      }

      return false;
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/UniqueDirectiveNames.mjs":
/*!******************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/UniqueDirectiveNames.mjs ***!
  \******************************************************************************************/
/*! exports provided: duplicateDirectiveNameMessage, existedDirectiveNameMessage, UniqueDirectiveNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateDirectiveNameMessage", function() { return duplicateDirectiveNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existedDirectiveNameMessage", function() { return existedDirectiveNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectiveNames", function() { return UniqueDirectiveNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function duplicateDirectiveNameMessage(directiveName) {
  return "There can be only one directive named \"".concat(directiveName, "\".");
}
function existedDirectiveNameMessage(directiveName) {
  return "Directive \"".concat(directiveName, "\" already exists in the schema. It cannot be redefined.");
}
/**
 * Unique directive names
 *
 * A GraphQL document is only valid if all defined directives have unique names.
 */

function UniqueDirectiveNames(context) {
  var knownDirectiveNames = Object.create(null);
  var schema = context.getSchema();
  return {
    DirectiveDefinition: function DirectiveDefinition(node) {
      var directiveName = node.name.value;

      if (schema && schema.getDirective(directiveName)) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](existedDirectiveNameMessage(directiveName), node.name));
        return;
      }

      if (knownDirectiveNames[directiveName]) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateDirectiveNameMessage(directiveName), [knownDirectiveNames[directiveName], node.name]));
      } else {
        knownDirectiveNames[directiveName] = node.name;
      }

      return false;
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/UniqueDirectivesPerLocation.mjs":
/*!*************************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/UniqueDirectivesPerLocation.mjs ***!
  \*************************************************************************************************/
/*! exports provided: duplicateDirectiveMessage, UniqueDirectivesPerLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateDirectiveMessage", function() { return duplicateDirectiveMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectivesPerLocation", function() { return UniqueDirectivesPerLocation; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/directives */ "../../graphql/type/directives.mjs");



function duplicateDirectiveMessage(directiveName) {
  return "The directive \"".concat(directiveName, "\" can only be used once at this location.");
}
/**
 * Unique directive names per location
 *
 * A GraphQL document is only valid if all non-repeatable directives at
 * a given location are uniquely named.
 */

function UniqueDirectivesPerLocation(context) {
  var uniqueDirectiveMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives__WEBPACK_IMPORTED_MODULE_2__["specifiedDirectives"];

  for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
    var directive = definedDirectives[_i2];
    uniqueDirectiveMap[directive.name] = !directive.isRepeatable;
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
    var def = astDefinitions[_i4];

    if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE_DEFINITION) {
      uniqueDirectiveMap[def.name.value] = !def.repeatable;
    }
  }

  return {
    // Many different AST nodes may contain directives. Rather than listing
    // them all, just listen for entering any node, and check to see if it
    // defines any directives.
    enter: function enter(node) {
      // Flow can't refine that node.directives will only contain directives,
      // so we cast so the rest of the code is well typed.
      var directives = node.directives;

      if (directives) {
        var knownDirectives = Object.create(null);

        for (var _i6 = 0; _i6 < directives.length; _i6++) {
          var _directive = directives[_i6];
          var directiveName = _directive.name.value;

          if (uniqueDirectiveMap[directiveName]) {
            if (knownDirectives[directiveName]) {
              context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateDirectiveMessage(directiveName), [knownDirectives[directiveName], _directive]));
            } else {
              knownDirectives[directiveName] = _directive;
            }
          }
        }
      }
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/UniqueEnumValueNames.mjs":
/*!******************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/UniqueEnumValueNames.mjs ***!
  \******************************************************************************************/
/*! exports provided: duplicateEnumValueNameMessage, existedEnumValueNameMessage, UniqueEnumValueNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateEnumValueNameMessage", function() { return duplicateEnumValueNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existedEnumValueNameMessage", function() { return existedEnumValueNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueEnumValueNames", function() { return UniqueEnumValueNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../type/definition */ "../../graphql/type/definition.mjs");


function duplicateEnumValueNameMessage(typeName, valueName) {
  return "Enum value \"".concat(typeName, ".").concat(valueName, "\" can only be defined once.");
}
function existedEnumValueNameMessage(typeName, valueName) {
  return "Enum value \"".concat(typeName, ".").concat(valueName, "\" already exists in the schema. It cannot also be defined in this type extension.");
}
/**
 * Unique enum value names
 *
 * A GraphQL enum type is only valid if all its values are uniquely named.
 */

function UniqueEnumValueNames(context) {
  var schema = context.getSchema();
  var existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
  var knownValueNames = Object.create(null);
  return {
    EnumTypeDefinition: checkValueUniqueness,
    EnumTypeExtension: checkValueUniqueness
  };

  function checkValueUniqueness(node) {
    var typeName = node.name.value;

    if (!knownValueNames[typeName]) {
      knownValueNames[typeName] = Object.create(null);
    }

    if (node.values) {
      var valueNames = knownValueNames[typeName];

      for (var _i2 = 0, _node$values2 = node.values; _i2 < _node$values2.length; _i2++) {
        var valueDef = _node$values2[_i2];
        var valueName = valueDef.name.value;
        var existingType = existingTypeMap[typeName];

        if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_1__["isEnumType"])(existingType) && existingType.getValue(valueName)) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](existedEnumValueNameMessage(typeName, valueName), valueDef.name));
        } else if (valueNames[valueName]) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateEnumValueNameMessage(typeName, valueName), [valueNames[valueName], valueDef.name]));
        } else {
          valueNames[valueName] = valueDef.name;
        }
      }
    }

    return false;
  }
}


/***/ }),

/***/ "../../graphql/validation/rules/UniqueFieldDefinitionNames.mjs":
/*!************************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/UniqueFieldDefinitionNames.mjs ***!
  \************************************************************************************************/
/*! exports provided: duplicateFieldDefinitionNameMessage, existedFieldDefinitionNameMessage, UniqueFieldDefinitionNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateFieldDefinitionNameMessage", function() { return duplicateFieldDefinitionNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existedFieldDefinitionNameMessage", function() { return existedFieldDefinitionNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueFieldDefinitionNames", function() { return UniqueFieldDefinitionNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../type/definition */ "../../graphql/type/definition.mjs");


function duplicateFieldDefinitionNameMessage(typeName, fieldName) {
  return "Field \"".concat(typeName, ".").concat(fieldName, "\" can only be defined once.");
}
function existedFieldDefinitionNameMessage(typeName, fieldName) {
  return "Field \"".concat(typeName, ".").concat(fieldName, "\" already exists in the schema. It cannot also be defined in this type extension.");
}
/**
 * Unique field definition names
 *
 * A GraphQL complex type is only valid if all its fields are uniquely named.
 */

function UniqueFieldDefinitionNames(context) {
  var schema = context.getSchema();
  var existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
  var knownFieldNames = Object.create(null);
  return {
    InputObjectTypeDefinition: checkFieldUniqueness,
    InputObjectTypeExtension: checkFieldUniqueness,
    InterfaceTypeDefinition: checkFieldUniqueness,
    InterfaceTypeExtension: checkFieldUniqueness,
    ObjectTypeDefinition: checkFieldUniqueness,
    ObjectTypeExtension: checkFieldUniqueness
  };

  function checkFieldUniqueness(node) {
    var typeName = node.name.value;

    if (!knownFieldNames[typeName]) {
      knownFieldNames[typeName] = Object.create(null);
    }

    if (node.fields) {
      var fieldNames = knownFieldNames[typeName];

      for (var _i2 = 0, _node$fields2 = node.fields; _i2 < _node$fields2.length; _i2++) {
        var fieldDef = _node$fields2[_i2];
        var fieldName = fieldDef.name.value;

        if (hasField(existingTypeMap[typeName], fieldName)) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](existedFieldDefinitionNameMessage(typeName, fieldName), fieldDef.name));
        } else if (fieldNames[fieldName]) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateFieldDefinitionNameMessage(typeName, fieldName), [fieldNames[fieldName], fieldDef.name]));
        } else {
          fieldNames[fieldName] = fieldDef.name;
        }
      }
    }

    return false;
  }
}

function hasField(type, fieldName) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_1__["isObjectType"])(type) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_1__["isInterfaceType"])(type) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_1__["isInputObjectType"])(type)) {
    return type.getFields()[fieldName];
  }

  return false;
}


/***/ }),

/***/ "../../graphql/validation/rules/UniqueFragmentNames.mjs":
/*!*****************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/UniqueFragmentNames.mjs ***!
  \*****************************************************************************************/
/*! exports provided: duplicateFragmentNameMessage, UniqueFragmentNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateFragmentNameMessage", function() { return duplicateFragmentNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueFragmentNames", function() { return UniqueFragmentNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function duplicateFragmentNameMessage(fragName) {
  return "There can be only one fragment named \"".concat(fragName, "\".");
}
/**
 * Unique fragment names
 *
 * A GraphQL document is only valid if all defined fragments have unique names.
 */

function UniqueFragmentNames(context) {
  var knownFragmentNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var fragmentName = node.name.value;

      if (knownFragmentNames[fragmentName]) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateFragmentNameMessage(fragmentName), [knownFragmentNames[fragmentName], node.name]));
      } else {
        knownFragmentNames[fragmentName] = node.name;
      }

      return false;
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/UniqueInputFieldNames.mjs":
/*!*******************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/UniqueInputFieldNames.mjs ***!
  \*******************************************************************************************/
/*! exports provided: duplicateInputFieldMessage, UniqueInputFieldNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateInputFieldMessage", function() { return duplicateInputFieldMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueInputFieldNames", function() { return UniqueInputFieldNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function duplicateInputFieldMessage(fieldName) {
  return "There can be only one input field named \"".concat(fieldName, "\".");
}
/**
 * Unique input field names
 *
 * A GraphQL input object value is only valid if all supplied fields are
 * uniquely named.
 */

function UniqueInputFieldNames(context) {
  var knownNameStack = [];
  var knownNames = Object.create(null);
  return {
    ObjectValue: {
      enter: function enter() {
        knownNameStack.push(knownNames);
        knownNames = Object.create(null);
      },
      leave: function leave() {
        knownNames = knownNameStack.pop();
      }
    },
    ObjectField: function ObjectField(node) {
      var fieldName = node.name.value;

      if (knownNames[fieldName]) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateInputFieldMessage(fieldName), [knownNames[fieldName], node.name]));
      } else {
        knownNames[fieldName] = node.name;
      }
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/UniqueOperationNames.mjs":
/*!******************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/UniqueOperationNames.mjs ***!
  \******************************************************************************************/
/*! exports provided: duplicateOperationNameMessage, UniqueOperationNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateOperationNameMessage", function() { return duplicateOperationNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationNames", function() { return UniqueOperationNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function duplicateOperationNameMessage(operationName) {
  return "There can be only one operation named \"".concat(operationName, "\".");
}
/**
 * Unique operation names
 *
 * A GraphQL document is only valid if all defined operations have unique names.
 */

function UniqueOperationNames(context) {
  var knownOperationNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition(node) {
      var operationName = node.name;

      if (operationName) {
        if (knownOperationNames[operationName.value]) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateOperationNameMessage(operationName.value), [knownOperationNames[operationName.value], operationName]));
        } else {
          knownOperationNames[operationName.value] = operationName;
        }
      }

      return false;
    },
    FragmentDefinition: function FragmentDefinition() {
      return false;
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/UniqueOperationTypes.mjs":
/*!******************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/UniqueOperationTypes.mjs ***!
  \******************************************************************************************/
/*! exports provided: duplicateOperationTypeMessage, existedOperationTypeMessage, UniqueOperationTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateOperationTypeMessage", function() { return duplicateOperationTypeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existedOperationTypeMessage", function() { return existedOperationTypeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationTypes", function() { return UniqueOperationTypes; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function duplicateOperationTypeMessage(operation) {
  return "There can be only one ".concat(operation, " type in schema.");
}
function existedOperationTypeMessage(operation) {
  return "Type for ".concat(operation, " already defined in the schema. It cannot be redefined.");
}
/**
 * Unique operation types
 *
 * A GraphQL document is only valid if it has only one type per operation.
 */

function UniqueOperationTypes(context) {
  var schema = context.getSchema();
  var definedOperationTypes = Object.create(null);
  var existingOperationTypes = schema ? {
    query: schema.getQueryType(),
    mutation: schema.getMutationType(),
    subscription: schema.getSubscriptionType()
  } : {};
  return {
    SchemaDefinition: checkOperationTypes,
    SchemaExtension: checkOperationTypes
  };

  function checkOperationTypes(node) {
    if (node.operationTypes) {
      for (var _i2 = 0, _ref2 = node.operationTypes || []; _i2 < _ref2.length; _i2++) {
        var operationType = _ref2[_i2];
        var operation = operationType.operation;
        var alreadyDefinedOperationType = definedOperationTypes[operation];

        if (existingOperationTypes[operation]) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](existedOperationTypeMessage(operation), operationType));
        } else if (alreadyDefinedOperationType) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateOperationTypeMessage(operation), [alreadyDefinedOperationType, operationType]));
        } else {
          definedOperationTypes[operation] = operationType;
        }
      }
    }

    return false;
  }
}


/***/ }),

/***/ "../../graphql/validation/rules/UniqueTypeNames.mjs":
/*!*************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/UniqueTypeNames.mjs ***!
  \*************************************************************************************/
/*! exports provided: duplicateTypeNameMessage, existedTypeNameMessage, UniqueTypeNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateTypeNameMessage", function() { return duplicateTypeNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existedTypeNameMessage", function() { return existedTypeNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueTypeNames", function() { return UniqueTypeNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function duplicateTypeNameMessage(typeName) {
  return "There can be only one type named \"".concat(typeName, "\".");
}
function existedTypeNameMessage(typeName) {
  return "Type \"".concat(typeName, "\" already exists in the schema. It cannot also be defined in this type definition.");
}
/**
 * Unique type names
 *
 * A GraphQL document is only valid if all defined types have unique names.
 */

function UniqueTypeNames(context) {
  var knownTypeNames = Object.create(null);
  var schema = context.getSchema();
  return {
    ScalarTypeDefinition: checkTypeName,
    ObjectTypeDefinition: checkTypeName,
    InterfaceTypeDefinition: checkTypeName,
    UnionTypeDefinition: checkTypeName,
    EnumTypeDefinition: checkTypeName,
    InputObjectTypeDefinition: checkTypeName
  };

  function checkTypeName(node) {
    var typeName = node.name.value;

    if (schema && schema.getType(typeName)) {
      context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](existedTypeNameMessage(typeName), node.name));
      return;
    }

    if (knownTypeNames[typeName]) {
      context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateTypeNameMessage(typeName), [knownTypeNames[typeName], node.name]));
    } else {
      knownTypeNames[typeName] = node.name;
    }

    return false;
  }
}


/***/ }),

/***/ "../../graphql/validation/rules/UniqueVariableNames.mjs":
/*!*****************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/UniqueVariableNames.mjs ***!
  \*****************************************************************************************/
/*! exports provided: duplicateVariableMessage, UniqueVariableNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateVariableMessage", function() { return duplicateVariableMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueVariableNames", function() { return UniqueVariableNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");

function duplicateVariableMessage(variableName) {
  return "There can be only one variable named \"".concat(variableName, "\".");
}
/**
 * Unique variable names
 *
 * A GraphQL operation is only valid if all its variables are uniquely named.
 */

function UniqueVariableNames(context) {
  var knownVariableNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      knownVariableNames = Object.create(null);
    },
    VariableDefinition: function VariableDefinition(node) {
      var variableName = node.variable.name.value;

      if (knownVariableNames[variableName]) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateVariableMessage(variableName), [knownVariableNames[variableName], node.variable.name]));
      } else {
        knownVariableNames[variableName] = node.variable.name;
      }
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/ValuesOfCorrectType.mjs":
/*!*****************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/ValuesOfCorrectType.mjs ***!
  \*****************************************************************************************/
/*! exports provided: badValueMessage, badEnumValueMessage, requiredFieldMessage, unknownFieldMessage, ValuesOfCorrectType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badValueMessage", function() { return badValueMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badEnumValueMessage", function() { return badEnumValueMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFieldMessage", function() { return requiredFieldMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownFieldMessage", function() { return unknownFieldMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesOfCorrectType", function() { return ValuesOfCorrectType; });
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfills/objectValues */ "../../graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/keyMap */ "../../graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jsutils/isInvalid */ "../../graphql/jsutils/isInvalid.mjs");
/* harmony import */ var _jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../jsutils/didYouMean */ "../../graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../jsutils/suggestionList */ "../../graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../language/printer */ "../../graphql/language/printer.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../type/definition */ "../../graphql/type/definition.mjs");









function badValueMessage(typeName, valueName, message) {
  return "Expected type ".concat(typeName, ", found ").concat(valueName) + (message ? "; ".concat(message) : '.');
}
function badEnumValueMessage(typeName, valueName, suggestedValues) {
  return "Expected type ".concat(typeName, ", found ").concat(valueName, ".") + Object(_jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_4__["default"])('the enum value', suggestedValues);
}
function requiredFieldMessage(typeName, fieldName, fieldTypeName) {
  return "Field ".concat(typeName, ".").concat(fieldName, " of required type ").concat(fieldTypeName, " was not provided.");
}
function unknownFieldMessage(typeName, fieldName, suggestedFields) {
  return "Field \"".concat(fieldName, "\" is not defined by type ").concat(typeName, ".") + Object(_jsutils_didYouMean__WEBPACK_IMPORTED_MODULE_4__["default"])(suggestedFields);
}
/**
 * Value literals of correct type
 *
 * A GraphQL document is only valid if all value literals are of the type
 * expected at their position.
 */

function ValuesOfCorrectType(context) {
  return {
    NullValue: function NullValue(node) {
      var type = context.getInputType();

      if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_8__["isNonNullType"])(type)) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"](badValueMessage(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type), Object(_language_printer__WEBPACK_IMPORTED_MODULE_7__["print"])(node)), node));
      }
    },
    ListValue: function ListValue(node) {
      // Note: TypeInfo will traverse into a list's item type, so look to the
      // parent input type to check if it is a list.
      var type = Object(_type_definition__WEBPACK_IMPORTED_MODULE_8__["getNullableType"])(context.getParentInputType());

      if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_8__["isListType"])(type)) {
        isValidScalar(context, node);
        return false; // Don't traverse further.
      }
    },
    ObjectValue: function ObjectValue(node) {
      var type = Object(_type_definition__WEBPACK_IMPORTED_MODULE_8__["getNamedType"])(context.getInputType());

      if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_8__["isInputObjectType"])(type)) {
        isValidScalar(context, node);
        return false; // Don't traverse further.
      } // Ensure every required field exists.


      var fieldNodeMap = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_1__["default"])(node.fields, function (field) {
        return field.name.value;
      });

      for (var _i2 = 0, _objectValues2 = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(type.getFields()); _i2 < _objectValues2.length; _i2++) {
        var fieldDef = _objectValues2[_i2];
        var fieldNode = fieldNodeMap[fieldDef.name];

        if (!fieldNode && Object(_type_definition__WEBPACK_IMPORTED_MODULE_8__["isRequiredInputField"])(fieldDef)) {
          var typeStr = Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(fieldDef.type);
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"](requiredFieldMessage(type.name, fieldDef.name, typeStr), node));
        }
      }
    },
    ObjectField: function ObjectField(node) {
      var parentType = Object(_type_definition__WEBPACK_IMPORTED_MODULE_8__["getNamedType"])(context.getParentInputType());
      var fieldType = context.getInputType();

      if (!fieldType && Object(_type_definition__WEBPACK_IMPORTED_MODULE_8__["isInputObjectType"])(parentType)) {
        var suggestions = Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_5__["default"])(node.name.value, Object.keys(parentType.getFields()));
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"](unknownFieldMessage(parentType.name, node.name.value, suggestions), node));
      }
    },
    EnumValue: function EnumValue(node) {
      var type = Object(_type_definition__WEBPACK_IMPORTED_MODULE_8__["getNamedType"])(context.getInputType());

      if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_8__["isEnumType"])(type)) {
        isValidScalar(context, node);
      } else if (!type.getValue(node.value)) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"](badEnumValueMessage(type.name, Object(_language_printer__WEBPACK_IMPORTED_MODULE_7__["print"])(node), enumTypeSuggestion(type, node)), node));
      }
    },
    IntValue: function IntValue(node) {
      return isValidScalar(context, node);
    },
    FloatValue: function FloatValue(node) {
      return isValidScalar(context, node);
    },
    StringValue: function StringValue(node) {
      return isValidScalar(context, node);
    },
    BooleanValue: function BooleanValue(node) {
      return isValidScalar(context, node);
    }
  };
}
/**
 * Any value literal may be a valid representation of a Scalar, depending on
 * that scalar type.
 */

function isValidScalar(context, node) {
  // Report any error at the full type expected by the location.
  var locationType = context.getInputType();

  if (!locationType) {
    return;
  }

  var type = Object(_type_definition__WEBPACK_IMPORTED_MODULE_8__["getNamedType"])(locationType);

  if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_8__["isScalarType"])(type)) {
    var message = Object(_type_definition__WEBPACK_IMPORTED_MODULE_8__["isEnumType"])(type) ? badEnumValueMessage(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(locationType), Object(_language_printer__WEBPACK_IMPORTED_MODULE_7__["print"])(node), enumTypeSuggestion(type, node)) : badValueMessage(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(locationType), Object(_language_printer__WEBPACK_IMPORTED_MODULE_7__["print"])(node));
    context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"](message, node));
    return;
  } // Scalars determine if a literal value is valid via parseLiteral() which
  // may throw or return an invalid value to indicate failure.


  try {
    var parseResult = type.parseLiteral(node, undefined
    /* variables */
    );

    if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__["default"])(parseResult)) {
      context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"](badValueMessage(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(locationType), Object(_language_printer__WEBPACK_IMPORTED_MODULE_7__["print"])(node)), node));
    }
  } catch (error) {
    // Ensure a reference to the original error is maintained.
    context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"](badValueMessage(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(locationType), Object(_language_printer__WEBPACK_IMPORTED_MODULE_7__["print"])(node), error.message), node, undefined, undefined, undefined, error));
  }
}

function enumTypeSuggestion(type, node) {
  var allNames = type.getValues().map(function (value) {
    return value.name;
  });
  return Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_language_printer__WEBPACK_IMPORTED_MODULE_7__["print"])(node), allNames);
}


/***/ }),

/***/ "../../graphql/validation/rules/VariablesAreInputTypes.mjs":
/*!********************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/VariablesAreInputTypes.mjs ***!
  \********************************************************************************************/
/*! exports provided: nonInputTypeOnVarMessage, VariablesAreInputTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonInputTypeOnVarMessage", function() { return nonInputTypeOnVarMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesAreInputTypes", function() { return VariablesAreInputTypes; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/printer */ "../../graphql/language/printer.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/definition */ "../../graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/typeFromAST */ "../../graphql/utilities/typeFromAST.mjs");




function nonInputTypeOnVarMessage(variableName, typeName) {
  return "Variable \"$".concat(variableName, "\" cannot be non-input type \"").concat(typeName, "\".");
}
/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 */

function VariablesAreInputTypes(context) {
  return {
    VariableDefinition: function VariableDefinition(node) {
      var type = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__["typeFromAST"])(context.getSchema(), node.type); // If the variable type is not an input type, return an error.

      if (type && !Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputType"])(type)) {
        var variableName = node.variable.name.value;
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](nonInputTypeOnVarMessage(variableName, Object(_language_printer__WEBPACK_IMPORTED_MODULE_1__["print"])(node.type)), node.type));
      }
    }
  };
}


/***/ }),

/***/ "../../graphql/validation/rules/VariablesInAllowedPosition.mjs":
/*!************************************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/rules/VariablesInAllowedPosition.mjs ***!
  \************************************************************************************************/
/*! exports provided: badVarPosMessage, VariablesInAllowedPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badVarPosMessage", function() { return badVarPosMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesInAllowedPosition", function() { return VariablesInAllowedPosition; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/inspect */ "../../graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../language/kinds */ "../../graphql/language/kinds.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../type/definition */ "../../graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/typeFromAST */ "../../graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_typeComparators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/typeComparators */ "../../graphql/utilities/typeComparators.mjs");






function badVarPosMessage(varName, varType, expectedType) {
  return "Variable \"$".concat(varName, "\" of type \"").concat(varType, "\" used in position expecting type \"").concat(expectedType, "\".");
}
/**
 * Variables passed to field arguments conform to type
 */

function VariablesInAllowedPosition(context) {
  var varDefMap = Object.create(null);
  return {
    OperationDefinition: {
      enter: function enter() {
        varDefMap = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);

        for (var _i2 = 0; _i2 < usages.length; _i2++) {
          var _ref2 = usages[_i2];
          var node = _ref2.node;
          var type = _ref2.type;
          var defaultValue = _ref2.defaultValue;
          var varName = node.name.value;
          var varDef = varDefMap[varName];

          if (varDef && type) {
            // A var type is allowed if it is the same or more strict (e.g. is
            // a subtype of) than the expected type. It can be more strict if
            // the variable type is non-null when the expected type is nullable.
            // If both are list types, the variable item type can be more strict
            // than the expected item type (contravariant).
            var schema = context.getSchema();
            var varType = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_4__["typeFromAST"])(schema, varDef.type);

            if (varType && !allowedVariableUsage(schema, varType, varDef.defaultValue, type, defaultValue)) {
              context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](badVarPosMessage(varName, Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(varType), Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(type)), [varDef, node]));
            }
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      varDefMap[node.variable.name.value] = node;
    }
  };
}
/**
 * Returns true if the variable is allowed in the location it was found,
 * which includes considering if default values exist for either the variable
 * or the location at which it is located.
 */

function allowedVariableUsage(schema, varType, varDefaultValue, locationType, locationDefaultValue) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isNonNullType"])(locationType) && !Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isNonNullType"])(varType)) {
    var hasNonNullVariableDefaultValue = varDefaultValue != null && varDefaultValue.kind !== _language_kinds__WEBPACK_IMPORTED_MODULE_2__["Kind"].NULL;
    var hasLocationDefaultValue = locationDefaultValue !== undefined;

    if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
      return false;
    }

    var nullableLocationType = locationType.ofType;
    return Object(_utilities_typeComparators__WEBPACK_IMPORTED_MODULE_5__["isTypeSubTypeOf"])(schema, varType, nullableLocationType);
  }

  return Object(_utilities_typeComparators__WEBPACK_IMPORTED_MODULE_5__["isTypeSubTypeOf"])(schema, varType, locationType);
}


/***/ }),

/***/ "../../graphql/validation/specifiedRules.mjs":
/*!******************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/specifiedRules.mjs ***!
  \******************************************************************************/
/*! exports provided: specifiedRules, specifiedSDLRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedRules", function() { return specifiedRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedSDLRules", function() { return specifiedSDLRules; });
/* harmony import */ var _rules_ExecutableDefinitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rules/ExecutableDefinitions */ "../../graphql/validation/rules/ExecutableDefinitions.mjs");
/* harmony import */ var _rules_UniqueOperationNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules/UniqueOperationNames */ "../../graphql/validation/rules/UniqueOperationNames.mjs");
/* harmony import */ var _rules_LoneAnonymousOperation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules/LoneAnonymousOperation */ "../../graphql/validation/rules/LoneAnonymousOperation.mjs");
/* harmony import */ var _rules_SingleFieldSubscriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rules/SingleFieldSubscriptions */ "../../graphql/validation/rules/SingleFieldSubscriptions.mjs");
/* harmony import */ var _rules_KnownTypeNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rules/KnownTypeNames */ "../../graphql/validation/rules/KnownTypeNames.mjs");
/* harmony import */ var _rules_FragmentsOnCompositeTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rules/FragmentsOnCompositeTypes */ "../../graphql/validation/rules/FragmentsOnCompositeTypes.mjs");
/* harmony import */ var _rules_VariablesAreInputTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules/VariablesAreInputTypes */ "../../graphql/validation/rules/VariablesAreInputTypes.mjs");
/* harmony import */ var _rules_ScalarLeafs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules/ScalarLeafs */ "../../graphql/validation/rules/ScalarLeafs.mjs");
/* harmony import */ var _rules_FieldsOnCorrectType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rules/FieldsOnCorrectType */ "../../graphql/validation/rules/FieldsOnCorrectType.mjs");
/* harmony import */ var _rules_UniqueFragmentNames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rules/UniqueFragmentNames */ "../../graphql/validation/rules/UniqueFragmentNames.mjs");
/* harmony import */ var _rules_KnownFragmentNames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rules/KnownFragmentNames */ "../../graphql/validation/rules/KnownFragmentNames.mjs");
/* harmony import */ var _rules_NoUnusedFragments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rules/NoUnusedFragments */ "../../graphql/validation/rules/NoUnusedFragments.mjs");
/* harmony import */ var _rules_PossibleFragmentSpreads__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rules/PossibleFragmentSpreads */ "../../graphql/validation/rules/PossibleFragmentSpreads.mjs");
/* harmony import */ var _rules_NoFragmentCycles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rules/NoFragmentCycles */ "../../graphql/validation/rules/NoFragmentCycles.mjs");
/* harmony import */ var _rules_UniqueVariableNames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rules/UniqueVariableNames */ "../../graphql/validation/rules/UniqueVariableNames.mjs");
/* harmony import */ var _rules_NoUndefinedVariables__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rules/NoUndefinedVariables */ "../../graphql/validation/rules/NoUndefinedVariables.mjs");
/* harmony import */ var _rules_NoUnusedVariables__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rules/NoUnusedVariables */ "../../graphql/validation/rules/NoUnusedVariables.mjs");
/* harmony import */ var _rules_KnownDirectives__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rules/KnownDirectives */ "../../graphql/validation/rules/KnownDirectives.mjs");
/* harmony import */ var _rules_UniqueDirectivesPerLocation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rules/UniqueDirectivesPerLocation */ "../../graphql/validation/rules/UniqueDirectivesPerLocation.mjs");
/* harmony import */ var _rules_KnownArgumentNames__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rules/KnownArgumentNames */ "../../graphql/validation/rules/KnownArgumentNames.mjs");
/* harmony import */ var _rules_UniqueArgumentNames__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rules/UniqueArgumentNames */ "../../graphql/validation/rules/UniqueArgumentNames.mjs");
/* harmony import */ var _rules_ValuesOfCorrectType__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rules/ValuesOfCorrectType */ "../../graphql/validation/rules/ValuesOfCorrectType.mjs");
/* harmony import */ var _rules_ProvidedRequiredArguments__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rules/ProvidedRequiredArguments */ "../../graphql/validation/rules/ProvidedRequiredArguments.mjs");
/* harmony import */ var _rules_VariablesInAllowedPosition__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./rules/VariablesInAllowedPosition */ "../../graphql/validation/rules/VariablesInAllowedPosition.mjs");
/* harmony import */ var _rules_OverlappingFieldsCanBeMerged__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rules/OverlappingFieldsCanBeMerged */ "../../graphql/validation/rules/OverlappingFieldsCanBeMerged.mjs");
/* harmony import */ var _rules_UniqueInputFieldNames__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rules/UniqueInputFieldNames */ "../../graphql/validation/rules/UniqueInputFieldNames.mjs");
/* harmony import */ var _rules_LoneSchemaDefinition__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./rules/LoneSchemaDefinition */ "../../graphql/validation/rules/LoneSchemaDefinition.mjs");
/* harmony import */ var _rules_UniqueOperationTypes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rules/UniqueOperationTypes */ "../../graphql/validation/rules/UniqueOperationTypes.mjs");
/* harmony import */ var _rules_UniqueTypeNames__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rules/UniqueTypeNames */ "../../graphql/validation/rules/UniqueTypeNames.mjs");
/* harmony import */ var _rules_UniqueEnumValueNames__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./rules/UniqueEnumValueNames */ "../../graphql/validation/rules/UniqueEnumValueNames.mjs");
/* harmony import */ var _rules_UniqueFieldDefinitionNames__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./rules/UniqueFieldDefinitionNames */ "../../graphql/validation/rules/UniqueFieldDefinitionNames.mjs");
/* harmony import */ var _rules_UniqueDirectiveNames__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./rules/UniqueDirectiveNames */ "../../graphql/validation/rules/UniqueDirectiveNames.mjs");
/* harmony import */ var _rules_PossibleTypeExtensions__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./rules/PossibleTypeExtensions */ "../../graphql/validation/rules/PossibleTypeExtensions.mjs");
// Spec Section: "Executable Definitions"
 // Spec Section: "Operation Name Uniqueness"

 // Spec Section: "Lone Anonymous Operation"

 // Spec Section: "Subscriptions with Single Root Field"

 // Spec Section: "Fragment Spread Type Existence"

 // Spec Section: "Fragments on Composite Types"

 // Spec Section: "Variables are Input Types"

 // Spec Section: "Leaf Field Selections"

 // Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"

 // Spec Section: "Fragment Name Uniqueness"

 // Spec Section: "Fragment spread target defined"

 // Spec Section: "Fragments must be used"

 // Spec Section: "Fragment spread is possible"

 // Spec Section: "Fragments must not form cycles"

 // Spec Section: "Variable Uniqueness"

 // Spec Section: "All Variable Used Defined"

 // Spec Section: "All Variables Used"

 // Spec Section: "Directives Are Defined"

 // Spec Section: "Directives Are Unique Per Location"

 // Spec Section: "Argument Names"

 // Spec Section: "Argument Uniqueness"

 // Spec Section: "Value Type Correctness"

 // Spec Section: "Argument Optionality"

 // Spec Section: "All Variable Usages Are Allowed"

 // Spec Section: "Field Selection Merging"

 // Spec Section: "Input Object Field Uniqueness"


/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */

var specifiedRules = Object.freeze([_rules_ExecutableDefinitions__WEBPACK_IMPORTED_MODULE_0__["ExecutableDefinitions"], _rules_UniqueOperationNames__WEBPACK_IMPORTED_MODULE_1__["UniqueOperationNames"], _rules_LoneAnonymousOperation__WEBPACK_IMPORTED_MODULE_2__["LoneAnonymousOperation"], _rules_SingleFieldSubscriptions__WEBPACK_IMPORTED_MODULE_3__["SingleFieldSubscriptions"], _rules_KnownTypeNames__WEBPACK_IMPORTED_MODULE_4__["KnownTypeNames"], _rules_FragmentsOnCompositeTypes__WEBPACK_IMPORTED_MODULE_5__["FragmentsOnCompositeTypes"], _rules_VariablesAreInputTypes__WEBPACK_IMPORTED_MODULE_6__["VariablesAreInputTypes"], _rules_ScalarLeafs__WEBPACK_IMPORTED_MODULE_7__["ScalarLeafs"], _rules_FieldsOnCorrectType__WEBPACK_IMPORTED_MODULE_8__["FieldsOnCorrectType"], _rules_UniqueFragmentNames__WEBPACK_IMPORTED_MODULE_9__["UniqueFragmentNames"], _rules_KnownFragmentNames__WEBPACK_IMPORTED_MODULE_10__["KnownFragmentNames"], _rules_NoUnusedFragments__WEBPACK_IMPORTED_MODULE_11__["NoUnusedFragments"], _rules_PossibleFragmentSpreads__WEBPACK_IMPORTED_MODULE_12__["PossibleFragmentSpreads"], _rules_NoFragmentCycles__WEBPACK_IMPORTED_MODULE_13__["NoFragmentCycles"], _rules_UniqueVariableNames__WEBPACK_IMPORTED_MODULE_14__["UniqueVariableNames"], _rules_NoUndefinedVariables__WEBPACK_IMPORTED_MODULE_15__["NoUndefinedVariables"], _rules_NoUnusedVariables__WEBPACK_IMPORTED_MODULE_16__["NoUnusedVariables"], _rules_KnownDirectives__WEBPACK_IMPORTED_MODULE_17__["KnownDirectives"], _rules_UniqueDirectivesPerLocation__WEBPACK_IMPORTED_MODULE_18__["UniqueDirectivesPerLocation"], _rules_KnownArgumentNames__WEBPACK_IMPORTED_MODULE_19__["KnownArgumentNames"], _rules_UniqueArgumentNames__WEBPACK_IMPORTED_MODULE_20__["UniqueArgumentNames"], _rules_ValuesOfCorrectType__WEBPACK_IMPORTED_MODULE_21__["ValuesOfCorrectType"], _rules_ProvidedRequiredArguments__WEBPACK_IMPORTED_MODULE_22__["ProvidedRequiredArguments"], _rules_VariablesInAllowedPosition__WEBPACK_IMPORTED_MODULE_23__["VariablesInAllowedPosition"], _rules_OverlappingFieldsCanBeMerged__WEBPACK_IMPORTED_MODULE_24__["OverlappingFieldsCanBeMerged"], _rules_UniqueInputFieldNames__WEBPACK_IMPORTED_MODULE_25__["UniqueInputFieldNames"]]);






 // @internal

var specifiedSDLRules = Object.freeze([_rules_LoneSchemaDefinition__WEBPACK_IMPORTED_MODULE_26__["LoneSchemaDefinition"], _rules_UniqueOperationTypes__WEBPACK_IMPORTED_MODULE_27__["UniqueOperationTypes"], _rules_UniqueTypeNames__WEBPACK_IMPORTED_MODULE_28__["UniqueTypeNames"], _rules_UniqueEnumValueNames__WEBPACK_IMPORTED_MODULE_29__["UniqueEnumValueNames"], _rules_UniqueFieldDefinitionNames__WEBPACK_IMPORTED_MODULE_30__["UniqueFieldDefinitionNames"], _rules_UniqueDirectiveNames__WEBPACK_IMPORTED_MODULE_31__["UniqueDirectiveNames"], _rules_KnownTypeNames__WEBPACK_IMPORTED_MODULE_4__["KnownTypeNames"], _rules_KnownDirectives__WEBPACK_IMPORTED_MODULE_17__["KnownDirectives"], _rules_UniqueDirectivesPerLocation__WEBPACK_IMPORTED_MODULE_18__["UniqueDirectivesPerLocation"], _rules_PossibleTypeExtensions__WEBPACK_IMPORTED_MODULE_32__["PossibleTypeExtensions"], _rules_KnownArgumentNames__WEBPACK_IMPORTED_MODULE_19__["KnownArgumentNamesOnDirectives"], _rules_UniqueArgumentNames__WEBPACK_IMPORTED_MODULE_20__["UniqueArgumentNames"], _rules_UniqueInputFieldNames__WEBPACK_IMPORTED_MODULE_25__["UniqueInputFieldNames"], _rules_ProvidedRequiredArguments__WEBPACK_IMPORTED_MODULE_22__["ProvidedRequiredArgumentsOnDirectives"]]);


/***/ }),

/***/ "../../graphql/validation/validate.mjs":
/*!************************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/validation/validate.mjs ***!
  \************************************************************************/
/*! exports provided: ABORT_VALIDATION, validate, validateSDL, assertValidSDL, assertValidSDLExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABORT_VALIDATION", function() { return ABORT_VALIDATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSDL", function() { return validateSDL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidSDL", function() { return assertValidSDL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidSDLExtension", function() { return assertValidSDLExtension; });
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert */ "../../graphql/jsutils/devAssert.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error/GraphQLError */ "../../graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_visitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/visitor */ "../../graphql/language/visitor.mjs");
/* harmony import */ var _type_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/validate */ "../../graphql/type/validate.mjs");
/* harmony import */ var _utilities_TypeInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/TypeInfo */ "../../graphql/utilities/TypeInfo.mjs");
/* harmony import */ var _specifiedRules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./specifiedRules */ "../../graphql/validation/specifiedRules.mjs");
/* harmony import */ var _ValidationContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ValidationContext */ "../../graphql/validation/ValidationContext.mjs");







var ABORT_VALIDATION = Object.freeze({});
/**
 * Implements the "Validation" section of the spec.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the document is valid.
 *
 * A list of specific validation rules may be provided. If not provided, the
 * default list of rules defined by the GraphQL specification will be used.
 *
 * Each validation rules is a function which returns a visitor
 * (see the language/visitor API). Visitor methods are expected to return
 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
 *
 * Optionally a custom TypeInfo instance may be provided. If not provided, one
 * will be created from the provided schema.
 */

function validate(schema, documentAST) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _specifiedRules__WEBPACK_IMPORTED_MODULE_5__["specifiedRules"];
  var typeInfo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _utilities_TypeInfo__WEBPACK_IMPORTED_MODULE_4__["TypeInfo"](schema);
  var options = arguments.length > 4 ? arguments[4] : undefined;
  documentAST || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'Must provide document'); // If the schema used for validation is invalid, throw an error.

  Object(_type_validate__WEBPACK_IMPORTED_MODULE_3__["assertValidSchema"])(schema);
  var abortObj = Object.freeze({});
  var errors = [];
  var maxErrors = options && options.maxErrors;
  var context = new _ValidationContext__WEBPACK_IMPORTED_MODULE_6__["ValidationContext"](schema, documentAST, typeInfo, function (error) {
    if (maxErrors != null && errors.length >= maxErrors) {
      errors.push(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]('Too many validation errors, error limit reached. Validation aborted.'));
      throw abortObj;
    }

    errors.push(error);
  }); // This uses a specialized visitor which runs multiple visitors in parallel,
  // while maintaining the visitor skip and break API.

  var visitor = Object(_language_visitor__WEBPACK_IMPORTED_MODULE_2__["visitInParallel"])(rules.map(function (rule) {
    return rule(context);
  })); // Visit the whole document with each instance of all provided rules.

  try {
    Object(_language_visitor__WEBPACK_IMPORTED_MODULE_2__["visit"])(documentAST, Object(_language_visitor__WEBPACK_IMPORTED_MODULE_2__["visitWithTypeInfo"])(typeInfo, visitor));
  } catch (e) {
    if (e !== abortObj) {
      throw e;
    }
  }

  return errors;
} // @internal

function validateSDL(documentAST, schemaToExtend) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _specifiedRules__WEBPACK_IMPORTED_MODULE_5__["specifiedSDLRules"];
  var errors = [];
  var context = new _ValidationContext__WEBPACK_IMPORTED_MODULE_6__["SDLValidationContext"](documentAST, schemaToExtend, function (error) {
    errors.push(error);
  });
  var visitors = rules.map(function (rule) {
    return rule(context);
  });
  Object(_language_visitor__WEBPACK_IMPORTED_MODULE_2__["visit"])(documentAST, Object(_language_visitor__WEBPACK_IMPORTED_MODULE_2__["visitInParallel"])(visitors));
  return errors;
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */

function assertValidSDL(documentAST) {
  var errors = validateSDL(documentAST);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */

function assertValidSDLExtension(documentAST, schema) {
  var errors = validateSDL(documentAST, schema);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}


/***/ }),

/***/ "../../graphql/version.mjs":
/*!************************************************************!*\
  !*** C:/work/instamotion/node_modules/graphql/version.mjs ***!
  \************************************************************/
/*! exports provided: version, versionInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "versionInfo", function() { return versionInfo; });
/**
 * Note: This file is autogenerated using "resources/gen-version.js" script and
 * automatically updated by "yarn version" command.
 */

/**
 * A string containing the version of the GraphQL.js library
 */
var version = '14.7.0';
/**
 * An object containing the components of the GraphQL.js version string
 */

var versionInfo = Object.freeze({
  major: 14,
  minor: 7,
  patch: 0,
  preReleaseTag: null
});


/***/ }),

/***/ "../../iterall/index.mjs":
/*!**********************************************************!*\
  !*** C:/work/instamotion/node_modules/iterall/index.mjs ***!
  \**********************************************************/
/*! exports provided: $$iterator, isIterable, isArrayLike, isCollection, getIterator, getIteratorMethod, createIterator, forEach, $$asyncIterator, isAsyncIterable, getAsyncIterator, getAsyncIteratorMethod, createAsyncIterator, forAwaitEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$iterator", function() { return $$iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCollection", function() { return isCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIterator", function() { return getIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIteratorMethod", function() { return getIteratorMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIterator", function() { return createIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$asyncIterator", function() { return $$asyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAsyncIterable", function() { return isAsyncIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAsyncIterator", function() { return getAsyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAsyncIteratorMethod", function() { return getAsyncIteratorMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncIterator", function() { return createAsyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAwaitEach", function() { return forAwaitEach; });
/**
 * Copyright (c) 2016, Lee Byron
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @ignore
 */

/**
 * [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)
 * is a *protocol* which describes a standard way to produce a sequence of
 * values, typically the values of the Iterable represented by this Iterator.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterator-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @external Iterator
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator|MDN Iteration protocols}
 */

/**
 * [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * their iteration behavior, such as what values are looped over in a
 * [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
 * loop or `iterall`'s `forEach` function. Many [built-in types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Builtin_iterables)
 * implement the Iterable protocol, including `Array` and `Map`.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @external Iterable
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable|MDN Iteration protocols}
 */

// In ES2015 environments, Symbol exists
var SYMBOL /*: any */ = typeof Symbol === 'function' ? Symbol : void 0

// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
var SYMBOL_ITERATOR = SYMBOL && SYMBOL.iterator

/**
 * A property name to be used as the name of an Iterable's method responsible
 * for producing an Iterator, referred to as `@@iterator`. Typically represents
 * the value `Symbol.iterator` but falls back to the string `"@@iterator"` when
 * `Symbol.iterator` is not defined.
 *
 * Use `$$iterator` for defining new Iterables instead of `Symbol.iterator`,
 * but do not use it for accessing existing Iterables, instead use
 * {@link getIterator} or {@link isIterable}.
 *
 * @example
 *
 * var $$iterator = require('iterall').$$iterator
 *
 * function Counter (to) {
 *   this.to = to
 * }
 *
 * Counter.prototype[$$iterator] = function () {
 *   return {
 *     to: this.to,
 *     num: 0,
 *     next () {
 *       if (this.num >= this.to) {
 *         return { value: undefined, done: true }
 *       }
 *       return { value: this.num++, done: false }
 *     }
 *   }
 * }
 *
 * var counter = new Counter(3)
 * for (var number of counter) {
 *   console.log(number) // 0 ... 1 ... 2
 * }
 *
 * @type {Symbol|string}
 */
/*:: declare export var $$iterator: '@@iterator'; */
var $$iterator = SYMBOL_ITERATOR || '@@iterator'

/**
 * Returns true if the provided object implements the Iterator protocol via
 * either implementing a `Symbol.iterator` or `"@@iterator"` method.
 *
 * @example
 *
 * var isIterable = require('iterall').isIterable
 * isIterable([ 1, 2, 3 ]) // true
 * isIterable('ABC') // true
 * isIterable({ length: 1, 0: 'Alpha' }) // false
 * isIterable({ key: 'value' }) // false
 * isIterable(new Map()) // true
 *
 * @param obj
 *   A value which might implement the Iterable protocol.
 * @return {boolean} true if Iterable.
 */
/*:: declare export function isIterable(obj: any): boolean; */
function isIterable(obj) {
  return !!getIteratorMethod(obj)
}

/**
 * Returns true if the provided object implements the Array-like protocol via
 * defining a positive-integer `length` property.
 *
 * @example
 *
 * var isArrayLike = require('iterall').isArrayLike
 * isArrayLike([ 1, 2, 3 ]) // true
 * isArrayLike('ABC') // true
 * isArrayLike({ length: 1, 0: 'Alpha' }) // true
 * isArrayLike({ key: 'value' }) // false
 * isArrayLike(new Map()) // false
 *
 * @param obj
 *   A value which might implement the Array-like protocol.
 * @return {boolean} true if Array-like.
 */
/*:: declare export function isArrayLike(obj: any): boolean; */
function isArrayLike(obj) {
  var length = obj != null && obj.length
  return typeof length === 'number' && length >= 0 && length % 1 === 0
}

/**
 * Returns true if the provided object is an Object (i.e. not a string literal)
 * and is either Iterable or Array-like.
 *
 * This may be used in place of [Array.isArray()][isArray] to determine if an
 * object should be iterated-over. It always excludes string literals and
 * includes Arrays (regardless of if it is Iterable). It also includes other
 * Array-like objects such as NodeList, TypedArray, and Buffer.
 *
 * @example
 *
 * var isCollection = require('iterall').isCollection
 * isCollection([ 1, 2, 3 ]) // true
 * isCollection('ABC') // false
 * isCollection({ length: 1, 0: 'Alpha' }) // true
 * isCollection({ key: 'value' }) // false
 * isCollection(new Map()) // true
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 * if (isCollection(obj)) {
 *   forEach(obj, function (value) {
 *     console.log(value)
 *   })
 * }
 *
 * @param obj
 *   An Object value which might implement the Iterable or Array-like protocols.
 * @return {boolean} true if Iterable or Array-like Object.
 */
/*:: declare export function isCollection(obj: any): boolean; */
function isCollection(obj) {
  return Object(obj) === obj && (isArrayLike(obj) || isIterable(obj))
}

/**
 * If the provided object implements the Iterator protocol, its Iterator object
 * is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getIterator = require('iterall').getIterator
 * var iterator = getIterator([ 1, 2, 3 ])
 * iterator.next() // { value: 1, done: false }
 * iterator.next() // { value: 2, done: false }
 * iterator.next() // { value: 3, done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which is the source of an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
/*:: declare export var getIterator:
  & (<+TValue>(iterable: Iterable<TValue>) => Iterator<TValue>)
  & ((iterable: mixed) => void | Iterator<mixed>); */
function getIterator(iterable) {
  var method = getIteratorMethod(iterable)
  if (method) {
    return method.call(iterable)
  }
}

/**
 * If the provided object implements the Iterator protocol, the method
 * responsible for producing its Iterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getIteratorMethod = require('iterall').getIteratorMethod
 * var myArray = [ 1, 2, 3 ]
 * var method = getIteratorMethod(myArray)
 * if (method) {
 *   var iterator = method.call(myArray)
 * }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which defines an `@@iterator` method.
 * @return {function(): Iterator<T>} `@@iterator` method.
 */
/*:: declare export var getIteratorMethod:
  & (<+TValue>(iterable: Iterable<TValue>) => (() => Iterator<TValue>))
  & ((iterable: mixed) => (void | (() => Iterator<mixed>))); */
function getIteratorMethod(iterable) {
  if (iterable != null) {
    var method =
      (SYMBOL_ITERATOR && iterable[SYMBOL_ITERATOR]) || iterable['@@iterator']
    if (typeof method === 'function') {
      return method
    }
  }
}

/**
 * Similar to {@link getIterator}, this method returns a new Iterator given an
 * Iterable. However it will also create an Iterator for a non-Iterable
 * Array-like collection, such as Array in a non-ES2015 environment.
 *
 * `createIterator` is complimentary to `forEach`, but allows a "pull"-based
 * iteration as opposed to `forEach`'s "push"-based iteration.
 *
 * `createIterator` produces an Iterator for Array-likes with the same behavior
 * as ArrayIteratorPrototype described in the ECMAScript specification, and
 * does *not* skip over "holes".
 *
 * @example
 *
 * var createIterator = require('iterall').createIterator
 *
 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
 * var iterator = createIterator(myArraylike)
 * iterator.next() // { value: 'Alpha', done: false }
 * iterator.next() // { value: 'Bravo', done: false }
 * iterator.next() // { value: 'Charlie', done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   An Iterable or Array-like object to produce an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
/*:: declare export var createIterator:
  & (<+TValue>(collection: Iterable<TValue>) => Iterator<TValue>)
  & ((collection: {length: number}) => Iterator<mixed>)
  & ((collection: mixed) => (void | Iterator<mixed>)); */
function createIterator(collection) {
  if (collection != null) {
    var iterator = getIterator(collection)
    if (iterator) {
      return iterator
    }
    if (isArrayLike(collection)) {
      return new ArrayLikeIterator(collection)
    }
  }
}

// When the object provided to `createIterator` is not Iterable but is
// Array-like, this simple Iterator is created.
function ArrayLikeIterator(obj) {
  this._o = obj
  this._i = 0
}

// Note: all Iterators are themselves Iterable.
ArrayLikeIterator.prototype[$$iterator] = function() {
  return this
}

// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
ArrayLikeIterator.prototype.next = function() {
  if (this._o === void 0 || this._i >= this._o.length) {
    this._o = void 0
    return { value: void 0, done: true }
  }
  return { value: this._o[this._i++], done: false }
}

/**
 * Given an object which either implements the Iterable protocol or is
 * Array-like, iterate over it, calling the `callback` at each iteration.
 *
 * Use `forEach` where you would expect to use a `for ... of` loop in ES6.
 * However `forEach` adheres to the behavior of [Array#forEach][] described in
 * the ECMAScript specification, skipping over "holes" in Array-likes. It will
 * also delegate to a `forEach` method on `collection` if one is defined,
 * ensuring native performance for `Arrays`.
 *
 * Similar to [Array#forEach][], the `callback` function accepts three
 * arguments, and is provided with `thisArg` as the calling context.
 *
 * Note: providing an infinite Iterator to forEach will produce an error.
 *
 * [Array#forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 *
 * forEach(myIterable, function (value, index, iterable) {
 *   console.log(value, index, iterable === myIterable)
 * })
 *
 * @example
 *
 * // ES6:
 * for (let value of myIterable) {
 *   console.log(value)
 * }
 *
 * // Any JavaScript environment:
 * forEach(myIterable, function (value) {
 *   console.log(value)
 * })
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   The Iterable or array to iterate over.
 * @param {function(T, number, object)} callback
 *   Function to execute for each iteration, taking up to three arguments
 * @param [thisArg]
 *   Optional. Value to use as `this` when executing `callback`.
 */
/*:: declare export var forEach:
  & (<+TValue, TCollection: Iterable<TValue>>(
      collection: TCollection,
      callbackFn: (value: TValue, index: number, collection: TCollection) => any,
      thisArg?: any
    ) => void)
  & (<TCollection: {length: number}>(
      collection: TCollection,
      callbackFn: (value: mixed, index: number, collection: TCollection) => any,
      thisArg?: any
    ) => void); */
function forEach(collection, callback, thisArg) {
  if (collection != null) {
    if (typeof collection.forEach === 'function') {
      return collection.forEach(callback, thisArg)
    }
    var i = 0
    var iterator = getIterator(collection)
    if (iterator) {
      var step
      while (!(step = iterator.next()).done) {
        callback.call(thisArg, step.value, i++, collection)
        // Infinite Iterators could cause forEach to run forever.
        // After a very large number of iterations, produce an error.
        /* istanbul ignore if */
        if (i > 9999999) {
          throw new TypeError('Near-infinite iteration.')
        }
      }
    } else if (isArrayLike(collection)) {
      for (; i < collection.length; i++) {
        if (collection.hasOwnProperty(i)) {
          callback.call(thisArg, collection[i], i, collection)
        }
      }
    }
  }
}

/////////////////////////////////////////////////////
//                                                 //
//                 ASYNC ITERATORS                 //
//                                                 //
/////////////////////////////////////////////////////

/**
 * [AsyncIterable](https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * an asynchronous iteration behavior, such as what values are looped over in
 * a [`for-await-of`](https://tc39.github.io/proposal-async-iteration/#sec-for-in-and-for-of-statements)
 * loop or `iterall`'s {@link forAwaitEach} function.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @external AsyncIterable
 * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface|Async Iteration Proposal}
 * @template T The type of each iterated value
 * @property {function (): AsyncIterator<T>} Symbol.asyncIterator
 *   A method which produces an AsyncIterator for this AsyncIterable.
 */

/**
 * [AsyncIterator](https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface)
 * is a *protocol* which describes a standard way to produce and consume an
 * asynchronous sequence of values, typically the values of the
 * {@link AsyncIterable} represented by this {@link AsyncIterator}.
 *
 * AsyncIterator is similar to Observable or Stream. Like an {@link Iterator} it
 * also as a `next()` method, however instead of an IteratorResult,
 * calling this method returns a {@link Promise} for a IteratorResult.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @external AsyncIterator
 * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface|Async Iteration Proposal}
 */

// In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
var SYMBOL_ASYNC_ITERATOR = SYMBOL && SYMBOL.asyncIterator

/**
 * A property name to be used as the name of an AsyncIterable's method
 * responsible for producing an Iterator, referred to as `@@asyncIterator`.
 * Typically represents the value `Symbol.asyncIterator` but falls back to the
 * string `"@@asyncIterator"` when `Symbol.asyncIterator` is not defined.
 *
 * Use `$$asyncIterator` for defining new AsyncIterables instead of
 * `Symbol.asyncIterator`, but do not use it for accessing existing Iterables,
 * instead use {@link getAsyncIterator} or {@link isAsyncIterable}.
 *
 * @example
 *
 * var $$asyncIterator = require('iterall').$$asyncIterator
 *
 * function Chirper (to) {
 *   this.to = to
 * }
 *
 * Chirper.prototype[$$asyncIterator] = function () {
 *   return {
 *     to: this.to,
 *     num: 0,
 *     next () {
 *       return new Promise(resolve => {
 *         if (this.num >= this.to) {
 *           resolve({ value: undefined, done: true })
 *         } else {
 *           setTimeout(() => {
 *             resolve({ value: this.num++, done: false })
 *           }, 1000)
 *         }
 *       })
 *     }
 *   }
 * }
 *
 * var chirper = new Chirper(3)
 * for await (var number of chirper) {
 *   console.log(number) // 0 ...wait... 1 ...wait... 2
 * }
 *
 * @type {Symbol|string}
 */
/*:: declare export var $$asyncIterator: '@@asyncIterator'; */
var $$asyncIterator = SYMBOL_ASYNC_ITERATOR || '@@asyncIterator'

/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * either implementing a `Symbol.asyncIterator` or `"@@asyncIterator"` method.
 *
 * @example
 *
 * var isAsyncIterable = require('iterall').isAsyncIterable
 * isAsyncIterable(myStream) // true
 * isAsyncIterable('ABC') // false
 *
 * @param obj
 *   A value which might implement the AsyncIterable protocol.
 * @return {boolean} true if AsyncIterable.
 */
/*:: declare export function isAsyncIterable(obj: any): boolean; */
function isAsyncIterable(obj) {
  return !!getAsyncIteratorMethod(obj)
}

/**
 * If the provided object implements the AsyncIterator protocol, its
 * AsyncIterator object is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getAsyncIterator = require('iterall').getAsyncIterator
 * var asyncIterator = getAsyncIterator(myStream)
 * asyncIterator.next().then(console.log) // { value: 1, done: false }
 * asyncIterator.next().then(console.log) // { value: 2, done: false }
 * asyncIterator.next().then(console.log) // { value: 3, done: false }
 * asyncIterator.next().then(console.log) // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>} asyncIterable
 *   An AsyncIterable object which is the source of an AsyncIterator.
 * @return {AsyncIterator<T>} new AsyncIterator instance.
 */
/*:: declare export var getAsyncIterator:
  & (<+TValue>(asyncIterable: AsyncIterable<TValue>) => AsyncIterator<TValue>)
  & ((asyncIterable: mixed) => (void | AsyncIterator<mixed>)); */
function getAsyncIterator(asyncIterable) {
  var method = getAsyncIteratorMethod(asyncIterable)
  if (method) {
    return method.call(asyncIterable)
  }
}

/**
 * If the provided object implements the AsyncIterator protocol, the method
 * responsible for producing its AsyncIterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getAsyncIteratorMethod = require('iterall').getAsyncIteratorMethod
 * var method = getAsyncIteratorMethod(myStream)
 * if (method) {
 *   var asyncIterator = method.call(myStream)
 * }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>} asyncIterable
 *   An AsyncIterable object which defines an `@@asyncIterator` method.
 * @return {function(): AsyncIterator<T>} `@@asyncIterator` method.
 */
/*:: declare export var getAsyncIteratorMethod:
  & (<+TValue>(asyncIterable: AsyncIterable<TValue>) => (() => AsyncIterator<TValue>))
  & ((asyncIterable: mixed) => (void | (() => AsyncIterator<mixed>))); */
function getAsyncIteratorMethod(asyncIterable) {
  if (asyncIterable != null) {
    var method =
      (SYMBOL_ASYNC_ITERATOR && asyncIterable[SYMBOL_ASYNC_ITERATOR]) ||
      asyncIterable['@@asyncIterator']
    if (typeof method === 'function') {
      return method
    }
  }
}

/**
 * Similar to {@link getAsyncIterator}, this method returns a new AsyncIterator
 * given an AsyncIterable. However it will also create an AsyncIterator for a
 * non-async Iterable as well as non-Iterable Array-like collection, such as
 * Array in a pre-ES2015 environment.
 *
 * `createAsyncIterator` is complimentary to `forAwaitEach`, but allows a
 * buffering "pull"-based iteration as opposed to `forAwaitEach`'s
 * "push"-based iteration.
 *
 * `createAsyncIterator` produces an AsyncIterator for non-async Iterables as
 * described in the ECMAScript proposal [Async-from-Sync Iterator Objects](https://tc39.github.io/proposal-async-iteration/#sec-async-from-sync-iterator-objects).
 *
 * > Note: Creating `AsyncIterator`s requires the existence of `Promise`.
 * > While `Promise` has been available in modern browsers for a number of
 * > years, legacy browsers (like IE 11) may require a polyfill.
 *
 * @example
 *
 * var createAsyncIterator = require('iterall').createAsyncIterator
 *
 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
 * var iterator = createAsyncIterator(myArraylike)
 * iterator.next().then(console.log) // { value: 'Alpha', done: false }
 * iterator.next().then(console.log) // { value: 'Bravo', done: false }
 * iterator.next().then(console.log) // { value: 'Charlie', done: false }
 * iterator.next().then(console.log) // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>|Iterable<T>|{ length: number }} source
 *   An AsyncIterable, Iterable, or Array-like object to produce an Iterator.
 * @return {AsyncIterator<T>} new AsyncIterator instance.
 */
/*:: declare export var createAsyncIterator:
  & (<+TValue>(
      collection: Iterable<Promise<TValue> | TValue> | AsyncIterable<TValue>
    ) => AsyncIterator<TValue>)
  & ((collection: {length: number}) => AsyncIterator<mixed>)
  & ((collection: mixed) => (void | AsyncIterator<mixed>)); */
function createAsyncIterator(source) {
  if (source != null) {
    var asyncIterator = getAsyncIterator(source)
    if (asyncIterator) {
      return asyncIterator
    }
    var iterator = createIterator(source)
    if (iterator) {
      return new AsyncFromSyncIterator(iterator)
    }
  }
}

// When the object provided to `createAsyncIterator` is not AsyncIterable but is
// sync Iterable, this simple wrapper is created.
function AsyncFromSyncIterator(iterator) {
  this._i = iterator
}

// Note: all AsyncIterators are themselves AsyncIterable.
AsyncFromSyncIterator.prototype[$$asyncIterator] = function() {
  return this
}

// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
AsyncFromSyncIterator.prototype.next = function(value) {
  return unwrapAsyncFromSync(this._i, 'next', value)
}

AsyncFromSyncIterator.prototype.return = function(value) {
  return this._i.return
    ? unwrapAsyncFromSync(this._i, 'return', value)
    : Promise.resolve({ value: value, done: true })
}

AsyncFromSyncIterator.prototype.throw = function(value) {
  return this._i.throw
    ? unwrapAsyncFromSync(this._i, 'throw', value)
    : Promise.reject(value)
}

function unwrapAsyncFromSync(iterator, fn, value) {
  var step
  return new Promise(function(resolve) {
    step = iterator[fn](value)
    resolve(step.value)
  }).then(function(value) {
    return { value: value, done: step.done }
  })
}

/**
 * Given an object which either implements the AsyncIterable protocol or is
 * Array-like, iterate over it, calling the `callback` at each iteration.
 *
 * Use `forAwaitEach` where you would expect to use a [for-await-of](https://tc39.github.io/proposal-async-iteration/#sec-for-in-and-for-of-statements) loop.
 *
 * Similar to [Array#forEach][], the `callback` function accepts three
 * arguments, and is provided with `thisArg` as the calling context.
 *
 * > Note: Using `forAwaitEach` requires the existence of `Promise`.
 * > While `Promise` has been available in modern browsers for a number of
 * > years, legacy browsers (like IE 11) may require a polyfill.
 *
 * @example
 *
 * var forAwaitEach = require('iterall').forAwaitEach
 *
 * forAwaitEach(myIterable, function (value, index, iterable) {
 *   console.log(value, index, iterable === myIterable)
 * })
 *
 * @example
 *
 * // ES2017:
 * for await (let value of myAsyncIterable) {
 *   console.log(await doSomethingAsync(value))
 * }
 * console.log('done')
 *
 * // Any JavaScript environment:
 * forAwaitEach(myAsyncIterable, function (value) {
 *   return doSomethingAsync(value).then(console.log)
 * }).then(function () {
 *   console.log('done')
 * })
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>|Iterable<Promise<T> | T>|{ length: number }} source
 *   The AsyncIterable or array to iterate over.
 * @param {function(T, number, object)} callback
 *   Function to execute for each iteration, taking up to three arguments
 * @param [thisArg]
 *   Optional. Value to use as `this` when executing `callback`.
 */
/*:: declare export var forAwaitEach:
  & (<+TValue, TCollection: Iterable<Promise<TValue> | TValue> | AsyncIterable<TValue>>(
      collection: TCollection,
      callbackFn: (value: TValue, index: number, collection: TCollection) => any,
      thisArg?: any
    ) => Promise<void>)
  & (<TCollection: { length: number }>(
      collection: TCollection,
      callbackFn: (value: mixed, index: number, collection: TCollection) => any,
      thisArg?: any
    ) => Promise<void>); */
function forAwaitEach(source, callback, thisArg) {
  var asyncIterator = createAsyncIterator(source)
  if (asyncIterator) {
    var i = 0
    return new Promise(function(resolve, reject) {
      function next() {
        asyncIterator
          .next()
          .then(function(step) {
            if (!step.done) {
              Promise.resolve(callback.call(thisArg, step.value, i++, source))
                .then(next)
                .catch(reject)
            } else {
              resolve()
            }
            // Explicitly return null, silencing bluebird-style warnings.
            return null
          })
          .catch(reject)
        // Explicitly return null, silencing bluebird-style warnings.
        return null
      }
      next()
    })
  }
}


/***/ }),

/***/ "../../source-map-support/register.js":
/*!***********************************************************************!*\
  !*** C:/work/instamotion/node_modules/source-map-support/register.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./ */ "../../source-map-support/source-map-support.js").install();


/***/ }),

/***/ "../../source-map-support/source-map-support.js":
/*!*********************************************************************************!*\
  !*** C:/work/instamotion/node_modules/source-map-support/source-map-support.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var SourceMapConsumer = __webpack_require__(/*! source-map */ "../../source-map/source-map.js").SourceMapConsumer;
var path = __webpack_require__(/*! path */ "path");

var fs;
try {
  fs = __webpack_require__(/*! fs */ "fs");
  if (!fs.existsSync || !fs.readFileSync) {
    // fs doesn't have all methods we need
    fs = null;
  }
} catch (err) {
  /* nop */
}

var bufferFrom = __webpack_require__(/*! buffer-from */ "../../buffer-from/index.js");

/**
 * Requires a module which is protected against bundler minification.
 *
 * @param {NodeModule} mod
 * @param {string} request
 */
function dynamicRequire(mod, request) {
  return mod.require(request);
}

// Only install once if called multiple times
var errorFormatterInstalled = false;
var uncaughtShimInstalled = false;

// If true, the caches are reset before a stack trace formatting operation
var emptyCacheBetweenOperations = false;

// Supports {browser, node, auto}
var environment = "auto";

// Maps a file path to a string containing the file contents
var fileContentsCache = {};

// Maps a file path to a source map for that file
var sourceMapCache = {};

// Regex for detecting source maps
var reSourceMap = /^data:application\/json[^,]+base64,/;

// Priority list of retrieve handlers
var retrieveFileHandlers = [];
var retrieveMapHandlers = [];

function isInBrowser() {
  if (environment === "browser")
    return true;
  if (environment === "node")
    return false;
  return ((typeof window !== 'undefined') && (typeof XMLHttpRequest === 'function') && !(window.require && window.module && window.process && window.process.type === "renderer"));
}

function hasGlobalProcessEventEmitter() {
  return ((typeof process === 'object') && (process !== null) && (typeof process.on === 'function'));
}

function handlerExec(list) {
  return function(arg) {
    for (var i = 0; i < list.length; i++) {
      var ret = list[i](arg);
      if (ret) {
        return ret;
      }
    }
    return null;
  };
}

var retrieveFile = handlerExec(retrieveFileHandlers);

retrieveFileHandlers.push(function(path) {
  // Trim the path to make sure there is no extra whitespace.
  path = path.trim();
  if (/^file:/.test(path)) {
    // existsSync/readFileSync can't handle file protocol, but once stripped, it works
    path = path.replace(/file:\/\/\/(\w:)?/, function(protocol, drive) {
      return drive ?
        '' : // file:///C:/dir/file -> C:/dir/file
        '/'; // file:///root-dir/file -> /root-dir/file
    });
  }
  if (path in fileContentsCache) {
    return fileContentsCache[path];
  }

  var contents = '';
  try {
    if (!fs) {
      // Use SJAX if we are in the browser
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path, /** async */ false);
      xhr.send(null);
      if (xhr.readyState === 4 && xhr.status === 200) {
        contents = xhr.responseText;
      }
    } else if (fs.existsSync(path)) {
      // Otherwise, use the filesystem
      contents = fs.readFileSync(path, 'utf8');
    }
  } catch (er) {
    /* ignore any errors */
  }

  return fileContentsCache[path] = contents;
});

// Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://" or "file:///")
function supportRelativeURL(file, url) {
  if (!file) return url;
  var dir = path.dirname(file);
  var match = /^\w+:\/\/[^\/]*/.exec(dir);
  var protocol = match ? match[0] : '';
  var startPath = dir.slice(protocol.length);
  if (protocol && /^\/\w\:/.test(startPath)) {
    // handle file:///C:/ paths
    protocol += '/';
    return protocol + path.resolve(dir.slice(protocol.length), url).replace(/\\/g, '/');
  }
  return protocol + path.resolve(dir.slice(protocol.length), url);
}

function retrieveSourceMapURL(source) {
  var fileData;

  if (isInBrowser()) {
     try {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', source, false);
       xhr.send(null);
       fileData = xhr.readyState === 4 ? xhr.responseText : null;

       // Support providing a sourceMappingURL via the SourceMap header
       var sourceMapHeader = xhr.getResponseHeader("SourceMap") ||
                             xhr.getResponseHeader("X-SourceMap");
       if (sourceMapHeader) {
         return sourceMapHeader;
       }
     } catch (e) {
     }
  }

  // Get the URL of the source map
  fileData = retrieveFile(source);
  var re = /(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg;
  // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.
  var lastMatch, match;
  while (match = re.exec(fileData)) lastMatch = match;
  if (!lastMatch) return null;
  return lastMatch[1];
};

// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
var retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push(function(source) {
  var sourceMappingURL = retrieveSourceMapURL(source);
  if (!sourceMappingURL) return null;

  // Read the contents of the source map
  var sourceMapData;
  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
    sourceMapData = bufferFrom(rawData, "base64").toString();
    sourceMappingURL = source;
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
    sourceMapData = retrieveFile(sourceMappingURL);
  }

  if (!sourceMapData) {
    return null;
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData
  };
});

function mapSourcePosition(position) {
  var sourceMap = sourceMapCache[position.source];
  if (!sourceMap) {
    // Call the (overrideable) retrieveSourceMap function to get the source map.
    var urlAndMap = retrieveSourceMap(position.source);
    if (urlAndMap) {
      sourceMap = sourceMapCache[position.source] = {
        url: urlAndMap.url,
        map: new SourceMapConsumer(urlAndMap.map)
      };

      // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.
      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach(function(source, i) {
          var contents = sourceMap.map.sourcesContent[i];
          if (contents) {
            var url = supportRelativeURL(sourceMap.url, source);
            fileContentsCache[url] = contents;
          }
        });
      }
    } else {
      sourceMap = sourceMapCache[position.source] = {
        url: null,
        map: null
      };
    }
  }

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map && typeof sourceMap.map.originalPositionFor === 'function') {
    var originalPosition = sourceMap.map.originalPositionFor(position);

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source = supportRelativeURL(
        sourceMap.url, originalPosition.source);
      return originalPosition;
    }
  }

  return position;
}

// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' +
      position.line + ':' + (position.column + 1) + ')';
  }

  // Parse nested eval() calls using recursion
  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  }

  // Make sure we still return useful information if we didn't find anything
  return origin;
}

// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
  var fileName;
  var fileLocation = "";
  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();
    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", ";  // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }
    var lineNumber = this.getLineNumber();
    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();
      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);
  if (isMethodCall) {
    var typeName = this.getTypeName();
    // Fixes shim to be backward compatable with Node v0 to v4
    if (typeName === "[object Object]") {
      typeName = "null";
    }
    var methodName = this.getMethodName();
    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }
      line += functionName;
      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }
  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }
  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
    object[name] = /^(?:is|get)/.test(name) ? function() { return frame[name].call(frame); } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

function wrapCallSite(frame, state) {
  // provides interface backward compatibility
  if (state === undefined) {
    state = { nextPosition: null, curPosition: null }
  }
  if(frame.isNative()) {
    state.curPosition = null;
    return frame;
  }

  // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead
  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1;

    // Fix position in Node where some (internal) code is prepended.
    // See https://github.com/evanw/node-source-map-support/issues/36
    // Header removed in node at ^10.16 || >=11.11.0
    // v11 is not an LTS candidate, we can just test the one version with it.
    // Test node versions for: 10.16-19, 10.20+, 12-19, 20-99, 100+, or 11.11
    var noHeader = /^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/;
    var headerLength = noHeader.test(process.version) ? 0 : 62;
    if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
      column -= headerLength;
    }

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    state.curPosition = position;
    frame = cloneCallSite(frame);
    var originalFunctionName = frame.getFunctionName;
    frame.getFunctionName = function() {
      if (state.nextPosition == null) {
        return originalFunctionName();
      }
      return state.nextPosition.name || originalFunctionName();
    };
    frame.getFileName = function() { return position.source; };
    frame.getLineNumber = function() { return position.line; };
    frame.getColumnNumber = function() { return position.column + 1; };
    frame.getScriptNameOrSourceURL = function() { return position.source; };
    return frame;
  }

  // Code called using eval() needs special handling
  var origin = frame.isEval() && frame.getEvalOrigin();
  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);
    frame.getEvalOrigin = function() { return origin; };
    return frame;
  }

  // If we get here then we were unable to change the source position
  return frame;
}

// This function is part of the V8 stack trace API, for more info see:
// https://v8.dev/docs/stack-trace-api
function prepareStackTrace(error, stack) {
  if (emptyCacheBetweenOperations) {
    fileContentsCache = {};
    sourceMapCache = {};
  }

  var name = error.name || 'Error';
  var message = error.message || '';
  var errorString = name + ": " + message;

  var state = { nextPosition: null, curPosition: null };
  var processedStack = [];
  for (var i = stack.length - 1; i >= 0; i--) {
    processedStack.push('\n    at ' + wrapCallSite(stack[i], state));
    state.nextPosition = state.curPosition;
  }
  state.curPosition = state.nextPosition = null;
  return errorString + processedStack.reverse().join('');
}

// Generate position and snippet of original source with pointer
function getErrorSource(error) {
  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
  if (match) {
    var source = match[1];
    var line = +match[2];
    var column = +match[3];

    // Support the inline sourceContents inside the source map
    var contents = fileContentsCache[source];

    // Support files on disk
    if (!contents && fs && fs.existsSync(source)) {
      try {
        contents = fs.readFileSync(source, 'utf8');
      } catch (er) {
        contents = '';
      }
    }

    // Format the line from the original source code like node does
    if (contents) {
      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
      if (code) {
        return source + ':' + line + '\n' + code + '\n' +
          new Array(column).join(' ') + '^';
      }
    }
  }
  return null;
}

function printErrorAndExit (error) {
  var source = getErrorSource(error);

  // Ensure error is printed synchronously and not truncated
  if (process.stderr._handle && process.stderr._handle.setBlocking) {
    process.stderr._handle.setBlocking(true);
  }

  if (source) {
    console.error();
    console.error(source);
  }

  console.error(error.stack);
  process.exit(1);
}

function shimEmitUncaughtException () {
  var origEmit = process.emit;

  process.emit = function (type) {
    if (type === 'uncaughtException') {
      var hasStack = (arguments[1] && arguments[1].stack);
      var hasListeners = (this.listeners(type).length > 0);

      if (hasStack && !hasListeners) {
        return printErrorAndExit(arguments[1]);
      }
    }

    return origEmit.apply(this, arguments);
  };
}

var originalRetrieveFileHandlers = retrieveFileHandlers.slice(0);
var originalRetrieveMapHandlers = retrieveMapHandlers.slice(0);

exports.wrapCallSite = wrapCallSite;
exports.getErrorSource = getErrorSource;
exports.mapSourcePosition = mapSourcePosition;
exports.retrieveSourceMap = retrieveSourceMap;

exports.install = function(options) {
  options = options || {};

  if (options.environment) {
    environment = options.environment;
    if (["node", "browser", "auto"].indexOf(environment) === -1) {
      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}")
    }
  }

  // Allow sources to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveFile) {
    if (options.overrideRetrieveFile) {
      retrieveFileHandlers.length = 0;
    }

    retrieveFileHandlers.unshift(options.retrieveFile);
  }

  // Allow source maps to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveSourceMap) {
    if (options.overrideRetrieveSourceMap) {
      retrieveMapHandlers.length = 0;
    }

    retrieveMapHandlers.unshift(options.retrieveSourceMap);
  }

  // Support runtime transpilers that include inline source maps
  if (options.hookRequire && !isInBrowser()) {
    // Use dynamicRequire to avoid including in browser bundles
    var Module = dynamicRequire(module, 'module');
    var $compile = Module.prototype._compile;

    if (!$compile.__sourceMapSupport) {
      Module.prototype._compile = function(content, filename) {
        fileContentsCache[filename] = content;
        sourceMapCache[filename] = undefined;
        return $compile.call(this, content, filename);
      };

      Module.prototype._compile.__sourceMapSupport = true;
    }
  }

  // Configure options
  if (!emptyCacheBetweenOperations) {
    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ?
      options.emptyCacheBetweenOperations : false;
  }

  // Install the error reformatter
  if (!errorFormatterInstalled) {
    errorFormatterInstalled = true;
    Error.prepareStackTrace = prepareStackTrace;
  }

  if (!uncaughtShimInstalled) {
    var installHandler = 'handleUncaughtExceptions' in options ?
      options.handleUncaughtExceptions : true;

    // Do not override 'uncaughtException' with our own handler in Node.js
    // Worker threads. Workers pass the error to the main thread as an event,
    // rather than printing something to stderr and exiting.
    try {
      // We need to use `dynamicRequire` because `require` on it's own will be optimized by WebPack/Browserify.
      var worker_threads = dynamicRequire(module, 'worker_threads');
      if (worker_threads.isMainThread === false) {
        installHandler = false;
      }
    } catch(e) {}

    // Provide the option to not install the uncaught exception handler. This is
    // to support other uncaught exception handlers (in test frameworks, for
    // example). If this handler is not installed and there are no other uncaught
    // exception handlers, uncaught exceptions will be caught by node's built-in
    // exception handler and the process will still be terminated. However, the
    // generated JavaScript code will be shown above the stack trace instead of
    // the original source code.
    if (installHandler && hasGlobalProcessEventEmitter()) {
      uncaughtShimInstalled = true;
      shimEmitUncaughtException();
    }
  }
};

exports.resetRetrieveHandlers = function() {
  retrieveFileHandlers.length = 0;
  retrieveMapHandlers.length = 0;

  retrieveFileHandlers = originalRetrieveFileHandlers.slice(0);
  retrieveMapHandlers = originalRetrieveMapHandlers.slice(0);

  retrieveSourceMap = handlerExec(retrieveMapHandlers);
  retrieveFile = handlerExec(retrieveFileHandlers);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../source-map/lib/array-set.js":
/*!********************************************************************!*\
  !*** C:/work/instamotion/node_modules/source-map/lib/array-set.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;


/***/ }),

/***/ "../../source-map/lib/base64-vlq.js":
/*!*********************************************************************!*\
  !*** C:/work/instamotion/node_modules/source-map/lib/base64-vlq.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(/*! ./base64 */ "../../source-map/lib/base64.js");

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),

/***/ "../../source-map/lib/base64.js":
/*!*****************************************************************!*\
  !*** C:/work/instamotion/node_modules/source-map/lib/base64.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),

/***/ "../../source-map/lib/binary-search.js":
/*!************************************************************************!*\
  !*** C:/work/instamotion/node_modules/source-map/lib/binary-search.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),

/***/ "../../source-map/lib/mapping-list.js":
/*!***********************************************************************!*\
  !*** C:/work/instamotion/node_modules/source-map/lib/mapping-list.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;


/***/ }),

/***/ "../../source-map/lib/quick-sort.js":
/*!*********************************************************************!*\
  !*** C:/work/instamotion/node_modules/source-map/lib/quick-sort.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),

/***/ "../../source-map/lib/source-map-consumer.js":
/*!******************************************************************************!*\
  !*** C:/work/instamotion/node_modules/source-map/lib/source-map-consumer.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");
var binarySearch = __webpack_require__(/*! ./binary-search */ "../../source-map/lib/binary-search.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "../../source-map/lib/array-set.js").ArraySet;
var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "../../source-map/lib/base64-vlq.js");
var quickSort = __webpack_require__(/*! ./quick-sort */ "../../source-map/lib/quick-sort.js").quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ }),

/***/ "../../source-map/lib/source-map-generator.js":
/*!*******************************************************************************!*\
  !*** C:/work/instamotion/node_modules/source-map/lib/source-map-generator.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "../../source-map/lib/base64-vlq.js");
var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "../../source-map/lib/array-set.js").ArraySet;
var MappingList = __webpack_require__(/*! ./mapping-list */ "../../source-map/lib/mapping-list.js").MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;


/***/ }),

/***/ "../../source-map/lib/source-node.js":
/*!**********************************************************************!*\
  !*** C:/work/instamotion/node_modules/source-map/lib/source-node.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = __webpack_require__(/*! ./source-map-generator */ "../../source-map/lib/source-map-generator.js").SourceMapGenerator;
var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex] || '';
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || '';
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;


/***/ }),

/***/ "../../source-map/lib/util.js":
/*!***************************************************************!*\
  !*** C:/work/instamotion/node_modules/source-map/lib/util.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;


/***/ }),

/***/ "../../source-map/source-map.js":
/*!*****************************************************************!*\
  !*** C:/work/instamotion/node_modules/source-map/source-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(/*! ./lib/source-map-generator */ "../../source-map/lib/source-map-generator.js").SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(/*! ./lib/source-map-consumer */ "../../source-map/lib/source-map-consumer.js").SourceMapConsumer;
exports.SourceNode = __webpack_require__(/*! ./lib/source-node */ "../../source-map/lib/source-node.js").SourceNode;


/***/ }),

/***/ "../../uuid/index.js":
/*!******************************************************!*\
  !*** C:/work/instamotion/node_modules/uuid/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "../../uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "../../uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "../../uuid/lib/bytesToUuid.js":
/*!****************************************************************!*\
  !*** C:/work/instamotion/node_modules/uuid/lib/bytesToUuid.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../uuid/lib/rng.js":
/*!********************************************************!*\
  !*** C:/work/instamotion/node_modules/uuid/lib/rng.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.

var crypto = __webpack_require__(/*! crypto */ "crypto");

module.exports = function nodeRNG() {
  return crypto.randomBytes(16);
};


/***/ }),

/***/ "../../uuid/v1.js":
/*!***************************************************!*\
  !*** C:/work/instamotion/node_modules/uuid/v1.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../uuid/lib/rng.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "../../uuid/v4.js":
/*!***************************************************!*\
  !*** C:/work/instamotion/node_modules/uuid/v4.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../uuid/lib/rng.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "../../webpack/buildin/harmony-module.js":
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

/***/ "../../webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
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
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ })));
//# sourceMappingURL=handler.js.map