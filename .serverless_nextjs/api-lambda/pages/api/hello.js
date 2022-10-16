"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 5477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 1576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 4979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_serverless_loaderabsolute404Path_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolutePagePath_private_next_pages_2Fapi_2Fhello_js_assetPrefix_basePath_buildId_k6Qa3uECNOldD6MKO7ajv_canonicalBase_distDir_private_dot_next_generateEtags_true_i18n_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYubG9jYWwiLCJjb250ZW50cyI6IuOCouOCr_2BOCu_2BOCueOCreODvCBJRDpcbkFLSUE1T1pUTVZRTUc2Q1lYMlRXXG7jgrfjg7zjgq_2Fjg6zjg4Pjg4jjgqLjgq_2Fjgrvjgrnjgq3jg7w6XG43OC83UzhrNE8vVDhVR0Rxd2pkWG5kRUE1RWVLcU4wVTU0SnE1NHh2In1d_page_2Fapi_2Fhello_poweredByHeader_true_previewProps_7B_22previewModeId_22_3A_2268e541b3926506f49eb948b81b9ff13b_22_2C_22previewModeSigningKey_22_3A_22c2a21a2c9102036e8fe2f8343bccddbe7913e2f987462c34fa8d8b0e73c91ac4_22_2C_22previewModeEncryptionKey_22_3A_224f6902f69e4bfb6db3a7cc1d5c3169ddc03b93e0ecf5cfa19f4f01355f0bf89b_22_7D_runtimeConfig_)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-fetch.js
var node_polyfill_fetch = __webpack_require__(7157);
;// CONCATENATED MODULE: ./.next/routes-manifest.json
const routes_manifest_namespaceObject = {"Dg":[]};
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/api-handler.js
var api_handler = __webpack_require__(6249);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?absolute404Path=&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolutePagePath=private-next-pages%2Fapi%2Fhello.js&assetPrefix=&basePath=&buildId=k6Qa3uECNOldD6MKO7ajv&canonicalBase=&distDir=private-dot-next&generateEtags=true&i18n=&loadedEnvFiles=W3sicGF0aCI6Ii5lbnYubG9jYWwiLCJjb250ZW50cyI6IuOCouOCr%2BOCu%2BOCueOCreODvCBJRDpcbkFLSUE1T1pUTVZRTUc2Q1lYMlRXXG7jgrfjg7zjgq%2Fjg6zjg4Pjg4jjgqLjgq%2Fjgrvjgrnjgq3jg7w6XG43OC83UzhrNE8vVDhVR0Rxd2pkWG5kRUE1RWVLcU4wVTU0SnE1NHh2In1d&page=%2Fapi%2Fhello&poweredByHeader=true&previewProps=%7B%22previewModeId%22%3A%2268e541b3926506f49eb948b81b9ff13b%22%2C%22previewModeSigningKey%22%3A%22c2a21a2c9102036e8fe2f8343bccddbe7913e2f987462c34fa8d8b0e73c91ac4%22%2C%22previewModeEncryptionKey%22%3A%224f6902f69e4bfb6db3a7cc1d5c3169ddc03b93e0ecf5cfa19f4f01355f0bf89b%22%7D&runtimeConfig=!

        
      const { processEnv } = __webpack_require__(9936)
      processEnv([{"path":".env.local","contents":"アクセスキー ID:\nAKIA5OZTMVQMG6CYX2TW\nシークレットアクセスキー:\n78/7S8k4O/T8UGDqwjdXndEA5EeKqN0U54Jq54xv"}])
    
        
        const runtimeConfig = {}
        ;
        

        

        const rewrites = Array.isArray(routes_manifest_namespaceObject.Dg)
          ? {
            afterFiles: routes_manifest_namespaceObject.Dg
          }
          : routes_manifest_namespaceObject.Dg

        const apiHandler = (0,api_handler/* getApiHandler */.Y)({
          pageModule: __webpack_require__(2677),
          rewrites: rewrites,
          i18n: undefined,
          page: "/api/hello",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"68e541b3926506f49eb948b81b9ff13b",previewModeSigningKey:"c2a21a2c9102036e8fe2f8343bccddbe7913e2f987462c34fa8d8b0e73c91ac4",previewModeEncryptionKey:"4f6902f69e4bfb6db3a7cc1d5c3169ddc03b93e0ecf5cfa19f4f01355f0bf89b"}
        })
        /* harmony default export */ const next_serverless_loaderabsolute404Path_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolutePagePath_private_next_pages_2Fapi_2Fhello_js_assetPrefix_basePath_buildId_k6Qa3uECNOldD6MKO7ajv_canonicalBase_distDir_private_dot_next_generateEtags_true_i18n_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYubG9jYWwiLCJjb250ZW50cyI6IuOCouOCr_2BOCu_2BOCueOCreODvCBJRDpcbkFLSUE1T1pUTVZRTUc2Q1lYMlRXXG7jgrfjg7zjgq_2Fjg6zjg4Pjg4jjgqLjgq_2Fjgrvjgrnjgq3jg7w6XG43OC83UzhrNE8vVDhVR0Rxd2pkWG5kRUE1RWVLcU4wVTU0SnE1NHh2In1d_page_2Fapi_2Fhello_poweredByHeader_true_previewProps_7B_22previewModeId_22_3A_2268e541b3926506f49eb948b81b9ff13b_22_2C_22previewModeSigningKey_22_3A_22c2a21a2c9102036e8fe2f8343bccddbe7913e2f987462c34fa8d8b0e73c91ac4_22_2C_22previewModeEncryptionKey_22_3A_224f6902f69e4bfb6db3a7cc1d5c3169ddc03b93e0ecf5cfa19f4f01355f0bf89b_22_7D_runtimeConfig_ = (apiHandler);
      

/***/ }),

/***/ 2677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function handler(req, res) {
    res.status(200).json({
        name: "John Doe"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [458], () => (__webpack_exec__(4979)));
module.exports = __webpack_exports__;

})();