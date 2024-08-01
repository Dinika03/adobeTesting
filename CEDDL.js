// To create and initialize datalayer object
window.EDC = window.EDC || {};

EDC.datalayerObj = 'digitalData';

if (!window.digitalData) {
    window[EDC.datalayerObj] = {};
    window[EDC.datalayerObj].events = window[EDC.datalayerObj].events || [];
    window[EDC.datalayerObj].user = window[EDC.datalayerObj].user || {};
    window[EDC.datalayerObj].user.segment = window[EDC.datalayerObj].user.segment || {};
}
 
EDCTest.utils = EDCTest.utils || new function () {
    'use strict';
		if (window[window.EDC.datalayerObj] && obj) {
            window[window.EDC.datalayerObj].events = [];
            window[window.EDC.datalayerObj].events.push(obj);
        }
    };


 
 
 
