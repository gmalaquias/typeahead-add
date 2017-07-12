'use strict';

function Routing($stateProvider) {
    $stateProvider
        .state('typeahead.home', {
            type: 'module',
            url: '^/',
            displayName: 'Home',
            views: {
                '': {
                    templateProvider: function($q) {
                        return $q(function(resolve) {
                            require.ensure([], function(require) {
                                var template = require(WP_HOST + '/src/templates/layoutTemplate.html');
                                resolve(template);
                            }, "typeahead");
                        });
                    }
                },
                'container@typeahead.home': {
                    controller: 'homeController as vm',
                    templateProvider: function($q) {
                        return $q(function(resolve) {
                            require.ensure([], function(require) {
                                var template = require('../../templates/homeTemplate.html');
                                resolve(template);
                            }, "typeahead");
                        });
                    }
                }
            }
        });

}

module.exports = function(appModule) {
    appModule.config(Routing);
};