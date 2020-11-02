/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js-tic-tac-toe/./src/styles/style.css?");

/***/ }),

/***/ "./src/js/addPlayers.js":
/*!******************************!*\
  !*** ./src/js/addPlayers.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst addPlayers = (() => {\n  const player = (name, symbol) => {\n    const getName = () => name;\n    const getSymbol = () => symbol;\n    const setName = (playerName) => {\n      name = playerName;\n    };\n    return { getName, getSymbol, setName };\n  };\n\n  const player1 = player('', 'X');\n  const player2 = player('', 'O');\n  const txtPlayer1 = document.getElementById('firstname');\n  const txtPlayer2 = document.getElementById('secondname');\n\n  const setPlayerInfo = (txtPlayer1, txtPlayer2) => {\n    player1.setName(txtPlayer1.value);\n    player2.setName(txtPlayer2.value);\n    document.getElementById('p1-title').innerHTML = player1.getName();\n    document.getElementById('p2-title').innerHTML = player2.getName();\n  };\n\n  return {\n    player1,\n    player2,\n    txtPlayer1,\n    txtPlayer2,\n    setPlayerInfo,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addPlayers);\n\n//# sourceURL=webpack://js-tic-tac-toe/./src/js/addPlayers.js?");

/***/ }),

/***/ "./src/js/domManipulation.js":
/*!***********************************!*\
  !*** ./src/js/domManipulation.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _gameBoardController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardController */ \"./src/js/gameBoardController.js\");\n/* harmony import */ var _addPlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPlayers */ \"./src/js/addPlayers.js\");\n\n\n\nconst domManipulation = (() => {\n  const btnAddPlayers = document.getElementById('btnplayers');\n  const btnStart = document.getElementById('start-game');\n  const boardSection = document.querySelector('.board');\n  const boardContainer = document.querySelector('.board-container');\n  const endGameBtnContainer = document.querySelector('.end-btn-container');\n  const btnEndGame = document.getElementById('end-game');\n  const btnChangePlayers = document.getElementById('change-game');\n  const playersInputContainer = document.querySelector('.players');\n  const btnConfirmChange = document.getElementById('btn-confirm-change');\n  const p1Wins = document.getElementById('p1-wins');\n  const p2Wins = document.getElementById('p2-wins');\n  const p1WinPopup = document.getElementById('p1-win-popup');\n  const p2WinPopup = document.getElementById('p2-win-popup');\n  const tiePopup = document.getElementById('tie-popup');\n\n\n  const hideElement = element => { element.classList.toggle('is-hidden'); };\n\n  const showWinPopup = (popup) => {\n    popup.classList.remove('is-hidden');\n    const hideWinPopUp = () => {\n      popup.classList.add('is-hidden');\n    };\n    setTimeout(hideWinPopUp, 1500);\n  };\n\n  const setWins = (p1Wins, p2Wins) => {\n    if (_gameBoardController__WEBPACK_IMPORTED_MODULE_0__.default.checkWinner() === 1) {\n      let text1Int = Number(p1Wins.textContent);\n      text1Int += 1;\n      p1Wins.textContent = text1Int;\n    } else if (_gameBoardController__WEBPACK_IMPORTED_MODULE_0__.default.checkWinner() === 2) {\n      let text2Int = Number(p2Wins.textContent);\n      text2Int += 1;\n      p2Wins.textContent = text2Int;\n    }\n  };\n\n  const resetWins = (p1Wins, p2Wins) => {\n    p1Wins.textContent = 0;\n    p2Wins.textContent = 0;\n  };\n\n  const showBoard = (btnEndGame, boardSection) => {\n    if (btnEndGame.innerHTML === 'Start Game') {\n      btnEndGame.innerHTML = 'Stop Game';\n    } else {\n      btnEndGame.innerHTML = 'Start Game';\n    }\n    hideElement(boardSection);\n  };\n\n  const startGame = () => {\n    const playersInput = document.querySelector('.players');\n    const introContainer = document.querySelector('.intro-container');\n    introContainer.classList.add('is-hidden');\n    playersInput.classList.remove('is-hidden');\n  };\n\n  const stopGame = (p1Wins, p2Wins, btnEndGame, btnChangePlayers, boardSection) => {\n    resetWins(p1Wins, p2Wins);\n    _gameBoardController__WEBPACK_IMPORTED_MODULE_0__.default.endGame();\n    showBoard(btnEndGame, boardSection);\n    hideElement(btnChangePlayers);\n    if (btnEndGame.innerHTML === 'Start Game') {\n      btnEndGame.classList.add('is-success');\n      btnEndGame.classList.remove('is-error');\n    } else {\n      btnEndGame.classList.add('is-error');\n      btnEndGame.classList.remove('is-success');\n    }\n  };\n\n  const toggleStartStop = (playersInputContainer, endGameBtnContainer,\n    btnChangePlayers, btnConfirmChange) => {\n    hideElement(playersInputContainer);\n    hideElement(endGameBtnContainer);\n    hideElement(btnChangePlayers);\n    hideElement(btnConfirmChange);\n  };\n\n  const togglePlayerInfo = (txtPlayer1, txtPlayer2, boardSection,\n    playersInputContainer, boardContainer, endGameBtnContainer, btnAddPlayers) => {\n    _addPlayers__WEBPACK_IMPORTED_MODULE_1__.default.setPlayerInfo(txtPlayer1, txtPlayer2);\n    hideElement(boardSection);\n    hideElement(playersInputContainer);\n    hideElement(boardContainer);\n    hideElement(endGameBtnContainer);\n    btnAddPlayers.remove();\n  };\n\n  return {\n    btnAddPlayers,\n    btnStart,\n    btnEndGame,\n    boardSection,\n    btnConfirmChange,\n    btnChangePlayers,\n    p1Wins,\n    p2Wins,\n    p1WinPopup,\n    p2WinPopup,\n    tiePopup,\n    playersInputContainer,\n    endGameBtnContainer,\n    boardContainer,\n    startGame,\n    stopGame,\n    toggleStartStop,\n    togglePlayerInfo,\n    setWins,\n    showWinPopup,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManipulation);\n\n//# sourceURL=webpack://js-tic-tac-toe/./src/js/domManipulation.js?");

/***/ }),

/***/ "./src/js/gameBoardController.js":
/*!***************************************!*\
  !*** ./src/js/gameBoardController.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\nconst gameBoardController = (() => {\n  let counterPlays = 0;\n  const gameBoard = {\n    board: ['', '', '', '', '', '', '', '', ''],\n  };\n\n  const winConditions = {\n    con_1: [0, 1, 2],\n    con_2: [3, 4, 5],\n    con_3: [6, 7, 8],\n    con_4: [0, 3, 6],\n    con_5: [1, 4, 7],\n    con_6: [2, 5, 8],\n    con_7: [0, 4, 8],\n    con_8: [2, 4, 6],\n  };\n  const conds = Object.values(winConditions);\n\n  const checkWinner = () => {\n    let winner = 0;\n    conds.forEach(element => {\n      let countX = 0;\n      let countO = 0;\n      for (let index = 0; index < element.length; index += 1) {\n        if (gameBoard.board[element[index]] === 'X') {\n          countX += 1;\n        } else if (gameBoard.board[element[index]] === 'O') {\n          countO += 1;\n        }\n      }\n      if (countX === 3) {\n        winner = 1;\n      } else if (countO === 3) {\n        winner = 2;\n      }\n      if (counterPlays > 8 && winner === 0) {\n        winner = 3;\n      }\n    });\n    return winner;\n  };\n\n  const setSymbol = (p1Symbol, p2Symbol) => {\n    if (window.event.target.nodeName === 'DIV') {\n      const { target } = window.event;\n      const id = target.getAttribute('id');\n      if (counterPlays % 2 === 0 && gameBoard.board[id] === '') {\n        target.innerHTML = p1Symbol;\n        gameBoard.board[id] = p1Symbol;\n        target.classList.add('is-yellow');\n        target.classList.remove('is-neon');\n        counterPlays += 1;\n      } else if (gameBoard.board[id] === '') {\n        target.innerHTML = p2Symbol;\n        gameBoard.board[id] = p2Symbol;\n        target.classList.add('is-neon');\n        target.classList.remove('is-yellow');\n        counterPlays += 1;\n      }\n    }\n  };\n\n  const endGame = () => {\n    for (let index = 0; index < gameBoard.board.length; index += 1) {\n      gameBoard.board[index] = '';\n    }\n    const gameUi = document.getElementsByClassName('square');\n    for (let index = 0; index < gameUi.length; index += 1) {\n      gameUi[index].innerHTML = '';\n    }\n    counterPlays = 0;\n  };\n\n  return {\n    setSymbol,\n    checkWinner,\n    endGame,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoardController);\n\n//# sourceURL=webpack://js-tic-tac-toe/./src/js/gameBoardController.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _addPlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPlayers */ \"./src/js/addPlayers.js\");\n/* harmony import */ var _gameBoardController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoardController */ \"./src/js/gameBoardController.js\");\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domManipulation */ \"./src/js/domManipulation.js\");\n\n\n\n\n\n\nconst gameLogic = (p1, p2) => {\n  _gameBoardController__WEBPACK_IMPORTED_MODULE_2__.default.setSymbol(p1.getSymbol(), p2.getSymbol());\n  const gameWinner = _gameBoardController__WEBPACK_IMPORTED_MODULE_2__.default.checkWinner();\n  if (gameWinner === 1) {\n    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.setWins(_domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.p1Wins, _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.p2Wins);\n    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.showWinPopup(_domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.p1WinPopup);\n    _gameBoardController__WEBPACK_IMPORTED_MODULE_2__.default.endGame();\n  }\n  if (gameWinner === 2) {\n    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.setWins(_domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.p1Wins, _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.p2Wins);\n    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.showWinPopup(_domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.p2WinPopup);\n    _gameBoardController__WEBPACK_IMPORTED_MODULE_2__.default.endGame();\n  }\n  if (gameWinner === 3) {\n    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.showWinPopup(_domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.tiePopup);\n    _gameBoardController__WEBPACK_IMPORTED_MODULE_2__.default.endGame();\n  }\n};\n\nconst showIntro = () => {\n  const ticTitle = document.getElementById('tic');\n  const tacTitle = document.getElementById('tac');\n  const toeTitle = document.getElementById('toe');\n\n  const showTic = () => {\n    ticTitle.classList.remove('is-hidden');\n  };\n  const showTac = () => {\n    tacTitle.classList.remove('is-hidden');\n  };\n  const showToe = () => {\n    toeTitle.classList.remove('is-hidden');\n  };\n  const showBtn = () => {\n    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.btnStart.classList.remove('is-hidden');\n  };\n\n  setTimeout(showTic, 2000);\n  setTimeout(showTac, 2700);\n  setTimeout(showToe, 3200);\n  setTimeout(showBtn, 3700);\n};\n\nconst inputValidation = (input1, input2) => {\n  const alertMessage = document.getElementById('alertMessage');\n  if (input1.value === '' || input2.value === '') {\n    alertMessage.classList.remove('is-hidden');\n    return false;\n  }\n\n  alertMessage.classList.add('is-hidden');\n  return true;\n};\n\nshowIntro();\n\n_domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.boardSection.addEventListener('click', gameLogic.bind(window.event, _addPlayers__WEBPACK_IMPORTED_MODULE_1__.default.player1, _addPlayers__WEBPACK_IMPORTED_MODULE_1__.default.player2));\n_domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.btnAddPlayers.addEventListener('click', () => {\n  if (inputValidation(_addPlayers__WEBPACK_IMPORTED_MODULE_1__.default.txtPlayer1, _addPlayers__WEBPACK_IMPORTED_MODULE_1__.default.txtPlayer2) === true) {\n    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.togglePlayerInfo(_addPlayers__WEBPACK_IMPORTED_MODULE_1__.default.txtPlayer1, _addPlayers__WEBPACK_IMPORTED_MODULE_1__.default.txtPlayer2,\n      _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.boardSection, _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.playersInputContainer,\n      _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.boardContainer, _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.endGameBtnContainer,\n      _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.btnAddPlayers);\n  }\n});\n\n_domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.btnEndGame.addEventListener('click', (e) => {\n  _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.stopGame(_domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.p1Wins, _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.p2Wins, e.target,\n    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.btnChangePlayers, _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.boardSection);\n});\n_domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.btnChangePlayers.addEventListener('click', () => {\n  _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.toggleStartStop(_domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.playersInputContainer,\n    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.endGameBtnContainer,\n    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.btnChangePlayers, _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.btnConfirmChange);\n});\n\n_domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.btnStart.addEventListener('click', _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.startGame);\n_domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.btnConfirmChange.addEventListener('click', () => {\n  if (inputValidation(_addPlayers__WEBPACK_IMPORTED_MODULE_1__.default.txtPlayer1, _addPlayers__WEBPACK_IMPORTED_MODULE_1__.default.txtPlayer2) === true) {\n    _addPlayers__WEBPACK_IMPORTED_MODULE_1__.default.setPlayerInfo(_addPlayers__WEBPACK_IMPORTED_MODULE_1__.default.txtPlayer1, _addPlayers__WEBPACK_IMPORTED_MODULE_1__.default.txtPlayer2);\n    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.toggleStartStop(_domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.playersInputContainer,\n      _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.endGameBtnContainer,\n      _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.btnChangePlayers, _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.btnConfirmChange);\n  }\n});\n\n//# sourceURL=webpack://js-tic-tac-toe/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;