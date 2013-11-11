define(function (require) {
    'use strict';
    
    var $ = require('jquery'),
        foundation = require('foundation'),
    
    /**
     * Views
     */
    home = require('home');
    
    $(document).foundation();
    $(document).ready(function(){
        home.init();
    });
});