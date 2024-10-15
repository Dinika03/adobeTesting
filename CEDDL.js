// To create and initialize datalayer object
window.EDC = window.EDC || {};

EDC.datalayerObj = 'digitalData';

if (!window.digitalData) {
    window[EDC.datalayerObj] = {};
    window[EDC.datalayerObj].page = window[EDC.datalayerObj].page || {};
    window[EDC.datalayerObj].events = window[EDC.datalayerObj].events || [];
    window[EDC.datalayerObj].user = window[EDC.datalayerObj].user || {};
    window[EDC.datalayerObj].user.segment = window[EDC.datalayerObj].user.segment || {};
}
 
EDC.utils = EDC.utils || new function () {
    'use strict';
     this.dataLayerTracking = function (objCEDDL) {	
	if (window[window.EDC.datalayerObj] && objCEDDL) {
            window[window.EDC.datalayerObj].events = [];
            window[window.EDC.datalayerObj].events.push(objCEDDL);
        }
    };
}


 
 
 
