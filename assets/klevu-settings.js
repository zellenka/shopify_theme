//startup settings
function startup(klevu) {
    var options = {
        url : {
            //search: klevu.settings.url.protocol + '//eucs18v2.ksearchnet.com/cs/v2/search', 
            search: klevu.settings.url.protocol + '//eucs24v2.ksearchnet.com/cs/v2/search', //original
            landing : '/pages/search-results',
            protocolFull: klevu.settings.url.protocol + "//"

        },
        localSettings: true,
        search : {
            searchBoxSelector : "input.search-form__input" ,
            searchBoxTarget: false,
            minChars : 0 ,
            placeholder : "Search" ,
            showQuickOnEnter : true ,
            fullPageLayoutEnabled : false,
            personalisation: false,
            redirects: [],
            //apiKey: 'klevu-158134692284111613'
            apiKey: 'klevu-161044807077013122', //original
            // redirects: {
            //     klevu: "https://www.klevu.com/",
            //     klevublogs: "https://info.klevu.com/blog",
            // },
        },
        analytics: {
            //apiKey: 'klevu-158134692284111613'
            apiKey: 'klevu-161044807077013122' //original
        }
    };

    klevu(options);
}
//once klevu is interactive, setup the settings
klevu.interactive(function(){
    startup(klevu);
});
//check if klevu is interactive and also if all necessary search instances are powered up
klevu.coreEvent.build({
    name : "bindLocalBoxes",
    fire: function(){
        if ( !klevu.isInteractive || klevu.isUndefined(klevu.search) || klevu.isUndefined(klevu.search.build) || klevu.isUndefined(klevu.searchEvents) || klevu.isUndefined(klevu.searchEvents.functions) || klevu.isUndefined(klevu.searchEvents.functions.bindAllSearchBoxes) ) {return false;} return true;
    },
    maxCount: 500,
    delay:30
});
//attach to all search boxes on the page
klevu.coreEvent.attach("bindLocalBoxes",{
    name: "search-boxes-local-boxes" ,
    fire: function(){
        klevu.searchEvents.functions.bindAllSearchBoxes.fire();
    }
});

// function startup(klevu) {
//   var options = {
//     search: {
//       apiKey: "klevu-161044807077013122",
//       redirects: {
//         klevu: "https://www.klevu.com/",
//         klevublogs: "https://info.klevu.com/blog",
//       },
//     },
//   };
// }