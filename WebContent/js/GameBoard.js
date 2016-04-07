(function() {
	"use strict";

	/**
	 * GameBoard Class : This class is the main core for application and handles node connection status and formation of boxes. This class validates
	 * the user input and form the node (GRID) structure initially and once game has started, it will validate user input and form the nodes
	 * connection and boxes. TODO : DOCUMENT
	 */

	define([
		"Box"
	], function(Box) {

		/**
		 * Constructor for GameBoard class TODO : Enhance
		 */
		var GameBoard = function() {
			// Initialize the class
			this.init();
		};

		/**
		 * Initialization function
		 * 
		 * @public TODO : Enhance
		 */
		GameBoard.prototype.init = function() {
			console.log("Im in GameBoard.js");

			// Call Box class (only for testing)
			var oBox = new Box();
			oBox.Test();
		};

		/**
		 * Test function (Only for Testing) TODO : Remove
		 * 
		 * @public
		 */
		GameBoard.prototype.Test = function() {
			console.log("Sample Test method in GameBoard");
		};

		return GameBoard;
	});

})();