//=============================================================================
// マップキャプチャープラグイン
// AltMenuScreen.js
// Copyright (c) 2018 村人Ａ
//=============================================================================

/*:ja
 * @plugindesc 選択肢を表示中にマップのイベント、遠景の処理を止め、メニュー画面を開いた時のようなぼかしたマップキャプチャーを入れます
 * @author 村人Ａ
 *
 * @help 
 */

(function() {
	choicemode = false
	snapBack = false
	
	Game_Interpreter.prototype.command102 = function() {
		if (!$gameMessage.isBusy()) {
			choicemode = true
			console.log("choicemode")
			this.setupChoices(this._params);
			this._index++;
			this.setWaitMode('message');
		}
		return false;
	};

	Game_Interpreter.prototype.command101 = function() {
		if (!$gameMessage.isBusy()) {
			$gameMessage.setFaceImage(this._params[0], this._params[1]);
			$gameMessage.setBackground(this._params[2]);
			$gameMessage.setPositionType(this._params[3]);
			while (this.nextEventCode() === 401) {  // Text data
				this._index++;
				$gameMessage.add(this.currentCommand().parameters[0]);
			}
			switch (this.nextEventCode()) {
			case 102:  // Show Choices
				choicemode = true
				this._index++;
				this.setupChoices(this.currentCommand().parameters);
				break;
			case 103:  // Input Number
				this._index++;
				this.setupNumInput(this.currentCommand().parameters);
				break;
			case 104:  // Select Item
				this._index++;
				this.setupItemChoice(this.currentCommand().parameters);
				break;
			}
			this._index++;
			this.setWaitMode('message');
		}
		return false;
	};

	Game_Interpreter.prototype.setupChoices = function(params) {
		var choices = params[0].clone();
		var cancelType = params[1];
		var defaultType = params.length > 2 ? params[2] : 0;
		var positionType = params.length > 3 ? params[3] : 2;
		var background = params.length > 4 ? params[4] : 0;
		if (cancelType >= choices.length) {
			cancelType = -2;
		}
		$gameMessage.setChoices(choices, defaultType, cancelType);
		$gameMessage.setChoiceBackground(background);
		$gameMessage.setChoicePositionType(positionType);
		$gameMessage.setChoiceCallback(function(n) {
			this._branch[this._indent] = n;
				choicemode = false
				snapBack = false
				console.log("point1")
				choice_back_sprite.visible = false;
				console.log("point2")
		}.bind(this));
	};
	
	Game_Map.prototype.update = function(sceneActive) {
		this.refreshIfNeeded();
		if (sceneActive) {
			this.updateInterpreter();
		}
		this.updateScroll();
		if(choicemode == false){
			this.updateEvents();
			this.updateParallax();
		}
		this.updateVehicles();
	}

	Spriteset_Base.prototype.update = function() {
		Sprite.prototype.update.call(this);
		this.updateScreenSprites();
		this.updateToneChanger();
		this.updatePosition();
		if(choicemode == true){
			if(snapBack == false){
			console.log("dothat")
		
			choice_back_sprite = new Sprite();
			choice_back_sprite.bitmap = SceneManager.snap();
			choice_back_sprite.bitmap.blur();
			choice_back_sprite.visible = true;
			this.addChild(choice_back_sprite);
			snapBack = true
			}
		}
	};
})();
