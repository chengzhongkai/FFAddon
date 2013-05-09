/*global Components */
var Cc = Components.classes;
var Ci = Components.interfaces;
var prompts = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);

function install(aData, aReason) {
  'use strict';
    prompts.alert(null, "supper", "install");
}

function startup(aData, aReason) {
	'use strict';
    prompts.alert(null, "supper", "main");
}

function shutdown(aData, aReason) {
	'use strict';
    prompts.alert(null, "supper", "shutdown");
}

function uninstall(aData, aReason) {
	'use strict';
    prompts.alert(null, "supper", "uninstall");
}
