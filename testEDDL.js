window.EDCTest = window.EDCTest || [];

EDCTest.datalayerObj = 'adobeDataLayer';

if (!window.adobeDataLayer) {
    window[EDCTest.datalayerObj] = [];
    //window[EDCTest.datalayerObj].events = window[EDCTest.datalayerObj].events || {};
    //window[EDCTest.datalayerObj].user = window[EDCTest.datalayerObj].user || {};
    //window[EDCTest.datalayerObj].user.segment = window[EDCTest.datalayerObj].user.segment || {};
}
EDCTest.utils = EDCTest.utils || new function () {
    'use strict';
	this.dataLayerTracking = function (obj) {
        if (window[window.EDCTest.datalayerObj] && obj) {
        
            window[window.EDCTest.datalayerObj].push(obj);
        }

    };


}
