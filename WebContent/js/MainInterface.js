(function() {
	"use strict";
	/**
	 * MainInterface Class : This class act as interface(Controller) between UI(View) and GameBoard class. This helps in creating MVC structure.
	 * All UI events are handled here. This interface in turn calls the gameBoard class for all operations.
	 * 
	 * Why this interface is needed ? Please refer below link
	 * @link http://stackoverflow.com/questions/5871640/why-is-using-onclick-in-html-a-bad-practice
	 * 
	 * 
	 * TODO : Document
	 * 
	 */
	require([
		"jquery", "GameBoard"
	], function($, GameBoard) {

		// Helper method to get GameBoard class
		function getGameBoard() {
			var oGameBoard = new GameBoard();
			oGameBoard.Test();
		}

		// Event Handler for testing button
		$("#testing_button").click(function() {
			// Create GameBoard class
			getGameBoard();
		});
	});
	
})();
