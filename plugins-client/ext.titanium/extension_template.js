/**
 * Extension Template for Cloud9 IDE
 * 
 * Inserts a context menu item under the "Edit" menu, which, when
 * clicked, displays a simple window with a "Close" button.
 * 
 * This file is stripped of comments in order to provide a quick template for 
 * future extensions. Please reference our documentation for a list of what's
 * going on.
 *
 * @copyright 2012, Ajax.org B.V.
 * @license GPLv3 <http://www.gnu.org/licenses/gpl.txt>
 */
 
define(function(require, exports, module) {

var ext = require("core/ext");
var ide = require("core/ide");

var menus = require("ext/menus/menus");
var commands = require("ext/commands/commands");
var markup = require("text!ext/titanium/titaniumGui.xml");

module.exports = ext.register("ext/titanium/titaniumGui", {
    name     : "Titanium Build",
    dev      : "dotnetCarpenter",
    alone    : true,
    deps     : [],
    type     : ext.GENERAL,
    markup   : markup,

    nodes : [],

    init : function(){
        var _self = this;
        //this.winExtensionTemplate = winExtensionTemplate;
        
        commands.addCommand({
            name: "buildApp",
            hint: "Will build a Titanium app",
            msg: "Popping window!",
            bindKey: {mac: "Command-Shift-b", win: "Ctrl-Shift-b"},
            isAvailable : function() {
                return true;
            },
            exec: function() {
                _self.show()
            }
        });
        
        this.nodes.push(
            menus.addItemByPath("Edit/Titanium Build", new apf.item({
                command : "buildApp"
            }), 5400)
        ); 

       /* Just a plain menu...
        this.nodes.push(
            menus.addItemByPath("Edit/Extension Template", new apf.item({
                onclick : function(){
                    _self.winExtensionTemplate.show();
                }
            }), 5400)
        ); */
    },

    hook : function(){
        var _self = this;
        ext.initExtension(this);
    },

    enable : function(){
        this.nodes.each(function(item){
            item.enable();
        });
    },

    disable : function(){
        this.nodes.each(function(item){
            item.disable();
        });
    },

    destroy : function(){
        this.nodes.each(function(item){
            item.destroy(true, true);
        });
        this.nodes = [];
    },

     closeExtensionTemplateWindow : function(){
        this.winExtensionTemplate.hide();
     }
});

});