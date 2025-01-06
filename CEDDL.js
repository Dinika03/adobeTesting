// To create and initialize datalayer object
window.EDC = window.EDC || {};

EDC.datalayerObj = 'digitalData';
var dataLayerQueue = [];
var isProcessing = false;

if (!window.digitalData) {
    window[EDC.datalayerObj] = {};
    window[EDC.datalayerObj].page = window[EDC.datalayerObj].page || {};
    window[EDC.datalayerObj].events = window[EDC.datalayerObj].events || [];
    window[EDC.datalayerObj].user = window[EDC.datalayerObj].user || {};
    window[EDC.datalayerObj].user.segment = window[EDC.datalayerObj].user.segment || {};
    
}
 function processQueue() {
        if (isProcessing || dataLayerQueue.length === 0) return;
        
        isProcessing = true;
        var item = dataLayerQueue.shift();
        
        digitalData.events.push(item);
        
        var customEvent = new CustomEvent('dataLayerUpdated', { detail: item });
        document.dispatchEvent(customEvent);
        
        console.log('Event processed from queue:', item);
        
        setTimeout(function() {
            isProcessing = false;
            processQueue();
        }, 100);
} 
EDC.utils = EDC.utils || new function () {
    'use strict';
     this.dataLayerTracking = function (objCEDDL) {	
	if (window[window.EDC.datalayerObj] && objCEDDL) {
            window[window.EDC.datalayerObj].events = [];
            dataLayerQueue.push({
		    eventInfo: {
			eventComponent: objCEDDL.eventInfo.eventComponent,
			eventType: objCEDDL.eventInfo.eventType,
			eventName: objCEDDL.eventInfo.eventName,
			eventText: objCEDDL.eventInfo.eventText,
			eventPage: objCEDDL.eventInfo.eventPage
		    
		    }
		    
	    });
	    processQueue();
        }
    };
    /*this.userSegmentTracking = function (objCEDDL, join) {
        if (window[window.EDC.datalayerObj] && objCEDDL) {
            if (!window[window.EDC.datalayerObj].user) {
                window[window.EDC.datalayerObj].user = {};
            }

            if (!join) {
                window[window.EDC.datalayerObj].user.segment = objCEDDL;
            } else {
                (window[window.EDC.datalayerObj].user.segment).extend((window[window.EDC.datalayerObj].user.segment), objCEDDL);
            }
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
    };*/
}


 
 
 
