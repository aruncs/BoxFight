(function() {
	"use strict";

	/**
	 * Box class : Class to define box information and handles operations on top of the box. TODO : Document
	 */

	define(function() {

		/**
		 * Constructor for BOX class TODO : Enhance
		 */
		var Box = function() {
			// Initialize the box class
			this.init();
		};

		/**
		 * Initialization function TODO : Enhance
		 * 
		 * @public
		 */
		Box.prototype.init = function() {
			console.log("In Init of Box js");
		};

		/**
		 * Testing function (only for testing) TODO : Remove
		 * 
		 * @public
		 */
		Box.prototype.Test = function() {
			console.log("Testing Box js");
		};

		return Box;
	});

})();
