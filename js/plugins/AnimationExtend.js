//=============================================================================
// AnimationExtend.js
//=============================================================================
// Copyright (c) 2017 Thirop
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//============================================================================= 
// Version
// 1.0.1 2017/07/20 パラメータの順序を入れ替え
// 1.0.0 2017/07/20 初版

var Imported = Imported || {};
Imported.AnimationExtend = true;

//=============================================================================
/*:
 * @plugindesc アニメーション表示機能を拡張
 * @author シロップ
 * @help
 * 注意)アニメーション系のプラグインと競合が発生する可能性が高いです。
 * 
 * 【プラグインコマンド】
 * アニメーションIDまでのパラメータは必須で、それ以降は省略することも可能です。
 *
 * □プレイヤーにアニメーション表示
 * animation player アニメーションID 拡大率(%) 角度 x軸のずれ y軸のずれ 反転表示フラグ 遅延フレーム 効果音の音量
 *
 * □実行中のイベントにアニメーション表示
 * animation this アニメーションID 拡大率(%) 角度 x軸のずれ y軸のずれ 反転表示フラグ 遅延フレーム 効果音の音量
 *
 * □マップ上のイベントにアニメーション表示 
 * animation event イベントID アニメーションID 拡大率(%) 角度 x軸のずれ y軸のずれ 反転表示フラグ 遅延フレーム 効果音の音量
 *
 * □戦闘中の敵にアニメーション表示
 * animation enemy 敵のインデックス アニメーションID 拡大率(%) 角度 x軸のずれ y軸のずれ 反転表示フラグ 遅延フレーム 効果音の音量
 *
 * □戦闘中のパーティーメンバーにアニメーション表示（サイドビュー時） 
 * animation party パーティーメンバーのインデックス アニメーションID 拡大率(%) 角度 x軸のずれ y軸のずれ 反転表示フラグ 遅延フレーム 効果音の音量
 *
 * □戦闘中のアクターにアニメーション表示（サイドビュー時） 
 * animation actor アクターID アニメーションID 拡大率(%) 角度 x軸のずれ y軸のずれ 反転表示フラグ 遅延フレーム 効果音の音量
 *
 * 【プラグインコマンド例】
 * animation event 1 2 50 90 20 30 true 0 40
 *   イベントID１のイベントに
 *   アニメーションID2のアニメーションを
 *   拡大率５０％で
 *   ９０度回転して
 *   x軸に20pixel、y軸に30pixelずらして
 *   左右反転して
 *   表示遅延０で
 *   効果音を40%の大きさで再生。
 * 
 * animation player 3 30
 *   プレイヤーに
 *   アニメーションID3のアニメーションを
 *   拡大率３０%で再生
 *
 *
 * 【パラメータ解説】
 * アニメーションID : アニメーションのID
 * 拡大率 : アニメーションを表示する大きさ(%)。デフォルトは100
 * 角度 : アニメーションの表示角度
 * x軸のずれ : アニメーションをx軸にずらして表示するピクセル数
 * y軸のずれ : アニメーションをy軸にずらして表示するピクセル数
 * 反転表示フラグ : trueまたはonで左右反転表示、falseまたはoffで反転無し
 * 遅延フレーム : アニメーションを表示するまでの遅延フレーム
 * 効果音の音量 : 効果音の大きさ(%)。デフォルトは100
 */
//============================================================================= 




(function(){
var supplement = function(default_value, opt_arg, opt_callback) {
    if (opt_arg === undefined) {
        return default_value;
    }
    if (opt_callback === undefined) {  
        return opt_arg;
    }
    return opt_callback(default_value, opt_arg);
};

var supplementNum = function(default_value, opt_arg, opt_callback) {
    return Number(supplement(default_value,opt_arg,opt_callback));
};


//=============================================================================
// Game_Interpareter
//=============================================================================
var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_Game_Interpreter_pluginCommand.call(this, command, args);
	var waitMode = null;

	if (command.toLowerCase() === 'animation') {
		var idx = 0;
		var targetType = args[idx++].toLowerCase();
		var target;
		if(targetType === '0' || targetType === 'this'){
			target = this.character();
		}else if(targetType === 'player'){
			target = $gamePlayer;
		}else{
		    var targetId = args[idx++];	
		    if(targetType === 'event'){
		    	target = $gameMap.event(targetId);
		    }else if(targetType === 'party'){
		    	target = $gameParty.members()[targetId-1];
		    }else if(targetType === 'enemy'){
		    	target = $gameTroop.members()[targetId-1];
		    }else if(targetType === 'actor'){
		    	target = $gameActor.actor(targetId);
		    }
		}

		if(!target)return;

		var animationId = Number(args[idx++]);
		if(!animationId)return;

		var scale = supplementNum(100,args[idx++])/100;
		var rotation = supplementNum(0,args[idx++])/180*Math.PI;
		var offsetX = supplementNum(0,args[idx++]);
		var offsetY = supplementNum(0,args[idx++]);

		var argMirror = args[idx++];
		argMirror = argMirror ? argMirror.toLowerCase() : null;
		var mirror = argMirror === 'true' || argMirror === 'on';
		var delay = supplementNum(0,args[idx++]);

		var seVolume = supplementNum(100,args[idx++]);

		if(target.requestAnimation){
			target.requestAnimation(animationId, mirror, delay, scale, rotation, offsetX, offsetY, seVolume);
		}else if(target.startAnimation){
			target.startAnimation(animationId, mirror, delay, scale, rotation, offsetX, offsetY, seVolume);    
		}
	}
};






//=============================================================================
// Game_CharacterBase
//=============================================================================
Game_CharacterBase.prototype.requestAnimation = function(animationId, mirror, delay, scale, rotation, offsetX, offsetY, seVolume){
	var data = { animationId: animationId, mirror: mirror, delay: delay , scale:scale, rotation:rotation, offsetX:offsetX, offsetY:offsetY, seVolume:seVolume};
	if(!this._animations)this._animations = [];

    this._animations.unshift(0,0,data);
};
Game_CharacterBase.prototype.nextAnimation = function() {
    return this._animations ? this._animations.pop() : null;
};
Game_CharacterBase.prototype.isAnimationPlaying = function() {
    return this._animations && (this._animations.length || this._animationPlaying);
};



//=============================================================================
// Game_Battler
//=============================================================================
Game_Battler.prototype.startAnimation = function(animationId, mirror, delay, scale, rotation, offsetX, offsetY, seVolume) {
    var data = { animationId: animationId, mirror: mirror, delay: delay , scale:scale, rotation:rotation, offsetX:offsetX, offsetY:offsetY, seVolume:seVolume};
    this._animations.push(data);
};



//=============================================================================
// Sprite_Base
//=============================================================================
Sprite_Base.prototype.startAnimation = function(animation, mirror, delay, scale, rotation, offsetX, offsetY,seVolume) {
    var sprite = new Sprite_Animation();
    sprite.setup(this._effectTarget, animation, mirror, delay);
    sprite.setupExtend(mirror,scale,rotation,offsetX,offsetY,seVolume);
    this.parent.addChild(sprite);    	
    this._animationSprites.push(sprite);
};


//=============================================================================
// Sprite_Battler
//=============================================================================
Sprite_Battler.prototype.setupAnimation = function() {
    while (this._battler.isAnimationRequested()) {
        var data = this._battler.shiftAnimation();

        var animation = $dataAnimations[data.animationId];
        var mirror = data.mirror;
        var delay = animation.position === 3 ? 0 : data.delay;
        var scale = data.scale;
        var rotation = data.rotation;
        var offsetX = data.offsetX;
        var offsetY = data.offsetY;
        var seVolume = data.seVolume;
        this.startAnimation(animation, mirror, delay, scale,rotation,offsetX,offsetY,seVolume);
        for (var i = 0; i < this._animationSprites.length; i++) {
            var sprite = this._animationSprites[i];
            sprite.visible = this._battler.isSpriteVisible();
        }
    }
};




//=============================================================================
// Sprite_Character
//=============================================================================
Sprite_Character.prototype.setupAnimation = function() {
	var data = this._character.nextAnimation();
	for( ; data ; data = this._character.nextAnimation()){
        var animation = $dataAnimations[data.animationId];
        var mirror = data.mirror;
        var delay = animation.position === 3 ? 0 : data.delay;
        var scale = data.scale;
        var rotation = data.rotation;
        var offsetX = data.offsetX;
        var offsetY = data.offsetY;
        var seVolume = data.seVolume;
        this.startAnimation(animation, mirror, delay, scale,rotation,offsetX,offsetY,seVolume);
    }
};




//=============================================================================
// Sprite_Animation
//=============================================================================
var _Sprite_Animation_initMembers = Sprite_Animation.prototype.initMembers;
Sprite_Animation.prototype.initMembers = function() {
	_Sprite_Animation_initMembers.call(this);

	this._scale = 1;
	this._offsetX = 0;
	this._offsetY = 0;
	this._rotation = 0;
	this._rate = 4;
};


Sprite_Animation.prototype.setupRate = function(){
	var name = this._animation.name;

	var match = name.match(/\[F([0-9]+)\]/);
	this._rate = (match ? Number(match[1]) : 4);
};



var _Sprite_Animation_updatePosition_ = Sprite_Animation.prototype.updatePosition;
Sprite_Animation.prototype.updatePosition = function() {
	_Sprite_Animation_updatePosition_.call(this);			

	this.x += this._offsetX;
	this.y += this._offsetY;
};




Sprite_Animation.prototype.setupExtend = function(mirror,scale, rotation, offsetX, offsetY,seVolume) {
	this._scale = supplementNum(1, scale);
	this._offsetX = supplementNum(0, offsetX);
	this._offsetY = supplementNum(0, offsetY);
	this._rotation = supplementNum(0, rotation);
	this._seVolume = supplementNum(100, seVolume);

	if(mirror){
		this._rotation *= -1;
		this._offsetX *= -1;
	}

	this.rotation = this._rotation;
	this.scale.x = this._scale;
	this.scale.y = this._scale;
};



/* seVolumeの調整
===================================*/
var _Sprite_Animation_processTimingData = Sprite_Animation.prototype.processTimingData;
Sprite_Animation.prototype.processTimingData = function(timing) {
	var volume;
	if(timing.se){
		volume = timing.se.volume;
		timing.se.volume *= this._seVolume/100;
	}
	_Sprite_Animation_processTimingData.call(this,timing);

	if(volume){
		timing.se.volume = volume;
	}
};


})();