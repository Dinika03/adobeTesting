// To create and initialize datalayer object
window.EDC = window.EDC || {};

EDC.datalayerObj = 'digitalData';

if (!window.digitalData) {
    window[EDC.datalayerObj] = {};
    window[EDC.datalayerObj].page = window[EDC.datalayerObj].page || {};
    window[EDC.datalayerObj].user.segment = window[EDC.datalayerObj].page.category || {};
    window[EDC.datalayerObj].user.segment = window[EDC.datalayerObj].page.pageInfo || {};
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

      this.pageInfoTracking = function (objCEDDL, join) {
        if (window[window.EDC.datalayerObj] && objCEDDL) {
            if (!window[window.EDC.datalayerObj].page) {
                window[window.EDC.datalayerObj].page = {};
            }

            if (!window[window.EDC.datalayerObj].page.pageInfo) {
                window[window.EDC.datalayerObj].page.pageInfo = {};
            }

            if (!join) {
                window[window.EDC.datalayerObj].page.pageInfo = objCEDDL;
            } else {
                (window[window.EDC.datalayerObj].page.pageInfo).extend((window[window.EDC.datalayerObj].page.pageInfo), objCEDDL);
            }
        }
    };

    this.pageCategoryTracking = function (objCEDDL, join) {
        if (window[window.EDC.datalayerObj] && objCEDDL) {
            if (!window[window.EDC.datalayerObj].page) {
                window[window.EDC.datalayerObj].page = {};
            }

            if (!window[window.EDC.datalayerObj].page.category) {
                window[window.EDC.datalayerObj].page.category = {};
            }

            if (!join) {
                window[window.EDC.datalayerObj].page.category = objCEDDL;
            } else {
                (window[window.EDC.datalayerObj].page.category).extend((window[window.EDC.datalayerObj].page.category), objCEDDL);
            }
        }
    };
}


 
 
 
