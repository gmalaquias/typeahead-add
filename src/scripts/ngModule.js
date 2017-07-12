'use strict';

var pkg = require("../../package.json");
var moduleConfig = require('../../moduleConfig.json');

var appModule = angular.module(
    pkg.metadata.productNameMin, 
    moduleConfig.ngDependences || []
);

var loader = require('./loader');
loader.loadComponents(appModule);

module.exports = appModule;