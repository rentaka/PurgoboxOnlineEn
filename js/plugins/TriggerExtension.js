//===================================================================
//TriggerExtension.js
//トリガー拡張プラグイン
//===================================================================
//Copyright (c) 2017 蔦森くいな
//Released under the MIT license.
//http://opensource.org/licenses/mit-license.php
//-------------------------------------------------------------------
//blog   : http://paradre.com/
//Twitter: https://twitter.com/Kuina_T
//===================================================================

/*:
 * @plugindesc タッチでイベントを実行するなど、イベントページのトリガーを拡張します
 * @author 蔦森くいな
 *
 * @help プラグイントリガーを設定したいイベントページの実行内容一行目に
 * イベントコマンド「ラベル」を追加し、そこに使用したいコマンドを記入して下さい。
 * コマンド名は英語と日本語どちらで入力してもＯＫです。
 * また、コマンド間にスペースをはさむ事で複数のコマンドを使用できます。
 * 
 * ===================================================================
 * Touch[スイッチ番号]
 * タッチ[スイッチ番号]
 * -------------------------------------------------------------------
 * このコマンドを設定したイベントページはタッチするだけで実行されます。
 * 
 * パラメータ[]は省略可能。
 * []内に数値を入力すると、イベント実行前にその番号のスイッチをＯＮにします。
 * []内にA,B,C,Dのいずれかを入力するとセルフスイッチをＯＮにします。
 * []内に例えば[V5,10]と入力すると「変数5番に10を代入」します。
 * -------------------------------------------------------------------
 * 例）タッチ[1]
 * ===================================================================
 * 
 * ===================================================================
 * triggerdisable
 * トリガー無効
 * -------------------------------------------------------------------
 * 「決定ボタン」「プレイヤーから接触」といった通常のトリガーを無効にします。
 * ===================================================================
 * 
 * ===================================================================
 * Tag[タグ名]
 * タグ[タグ名]
 * -------------------------------------------------------------------
 * []内に文字を入力すると、イベントページにその名称のタグが付きます。
 * [タグ名][タグ名]のように続けて入力すると複数のタグを付けられます。
 * -------------------------------------------------------------------
 * 例）タグ[炎系モンスター][水系モンスター][草系モンスター]
 * ===================================================================
 * 
 * ===================================================================
 * ToEvent[スイッチ番号][タグ名]
 * イベントに接触[スイッチ番号][タグ名]
 * -------------------------------------------------------------------
 * このコマンドを設定したイベントページは他イベントに接触した時実行されます。
 * 
 * パラメータ[]は省略可能。
 * 一つ目のパラメータは実行前にＯＮにするスイッチ。空欄[]で省略できます。
 * 二つ目のパラメータは、接触判定をさせたい相手イベントのタグ名です。
 * タグ名を指定すると、同じタグ名のイベントと接触した時だけ実行されます。
 * [タグ名][タグ名]のように続けて入力すると複数のタグを指定できます。
 * -------------------------------------------------------------------
 * 例）イベントに接触[1][炎系モンスター][水系モンスター][草系モンスター]
 * ===================================================================
 * 
 * ===================================================================
 * FromEvent[スイッチ番号][タグ名]
 * イベントが接触[スイッチ番号][タグ名]
 * -------------------------------------------------------------------
 * このコマンドを設定したイベントページは他イベントから接触された時実行されます。
 * 
 * パラメータ[]は省略可能。
 * 一つ目のパラメータは実行前にＯＮにするスイッチ。空欄[]で省略できます。
 * 二つ目のパラメータは、接触判定をさせたい相手イベントのタグ名です。
 * タグ名を指定すると、同じタグ名のイベントと接触した時だけ実行されます。
 * [タグ名][タグ名]のように続けて入力すると複数のタグを指定できます。
 * -------------------------------------------------------------------
 * 例）イベントが接触[1][炎系モンスター][水系モンスター][草系モンスター]
 * ===================================================================
 * 
 * ===================================================================
 * Exception
 * 除外
 * -------------------------------------------------------------------
 * このコマンドを設定したイベントページは、
 * 上記の「イベントが接触」コマンドの接触判定対象から除外されます。
 * 
 * 「イベントが接触」コマンドを使用するイベントがあるマップでは、
 * 接触判定を行う必要の無いイベントにこのコマンドを設定しておく事で
 * 処理の負荷が低減されます。もしも動作が重いと感じた場合にお試し下さい。
 * ===================================================================
 *
 * ===================================================================
 * ToRegion[スイッチ番号][リージョン番号]
 * リージョンに接触[スイッチ番号][リージョン番号]
 * -------------------------------------------------------------------
 * このコマンドを設定したイベントページはリージョンに接触した時実行されます。
 * 
 * パラメータ[]は省略可能。
 * 一つ目のパラメータは実行前にＯＮにするスイッチ。空欄[]で省略できます。
 * 二つ目のパラメータは、接触判定をさせたいリージョン番号です。
 * [リージョン番号][リージョン番号]のように続けて入力する事で複数指定できます。
 * -------------------------------------------------------------------
 * 例）リージョンに接触[1][1][23][45]
 * ===================================================================
 *
 * ===================================================================
 * ForceRun
 * 強制実行
 * -------------------------------------------------------------------
 * このコマンドを設定したイベントページは、
 * 「イベントに接触」「イベントが接触」「リージョンに接触」を使用した際に
 * 他のイベントが実行中でもイベント内容を実行します。
 * 
 * ただし、複数のイベントが同時に実行された際の正常な動作は保証されません。
 * このコマンドを設定する際は、実行内容をスイッチや変数の操作だけにするなど、
 * なるべく１フレーム以内に全ての処理が完了するようにすると良いでしょう。
 * ===================================================================
 *
 * ===================================================================
 * #コマンド
 * -------------------------------------------------------------------
 * 上記までに紹介したコマンドの前に　#　を付けると、
 * そのコマンドは指定のスイッチだけをＯＮにし、イベント内容を実行しなくなります。
 * 並列処理イベントにトリガーを設定したい場合に便利です。
 * -------------------------------------------------------------------
 * 例）#イベントに接触[1][モンスター]
 * ===================================================================
 *
 *
 * ※上級機能
 *
 * ・各コマンドのパラメータ[スイッチ番号]部分に、
 * 　任意の文字列を使って[abcdef,テスト]のように入力すると
 * 　キー「abcdef」値「テスト」となるプロパティを新たにイベントに追加できます。
 * 　ただし、この機能を活用するにはスクリプトを理解している必要があります。
 * 
 *
 * 利用規約：
 * このプラグインは商用・非商用を問わず無料でご利用いただけます。
 * どのようなゲームに使っても、どのように加工していただいても構いません。
 * MIT Licenseにつき著作権表示とライセンスURLは残しておいて下さい。
 */

(function() {
    
    Game_Event.prototype.pd_TE_resetPropaty = function() {
        this.__pd_TE.touchTriggerType = 0;
        this.__pd_TE.touchSwitchIndex = ["",""];
        this.__pd_TE.Hash = {};
        this.__pd_TE.triggerDisable = false;
        this.__pd_TE.tag = [];
        this.__pd_TE.ETE_TriggerType = 0;
        this.__pd_TE.ETE_Tag = [];
        this.__pd_TE.ETE_SwitchIndex = ["",""];
        this.__pd_TE.EFE_TriggerType = 0;
        this.__pd_TE.EFE_Tag = [];
        this.__pd_TE.EFE_SwitchIndex = ["",""];
        this.__pd_TE.EFE_exception = false;
        this.__pd_TE.Touch_forceRun = false;
        this.__pd_TE.lastTouchedEvent = null;
        this.__pd_TE.ETR_TriggerType = 0;
        this.__pd_TE.ETR_Num = [];
        this.__pd_TE.ETR_SwitchIndex = ["",""];
    };
    
    var pd_TE_Game_Event_initialize = Game_Event.prototype.initialize;
    Game_Event.prototype.initialize = function(mapId, eventId) {
        this.__pd_TE = {};
        this.pd_TE_resetPropaty();
        pd_TE_Game_Event_initialize.call(this, mapId, eventId);
    };

    var pd_TE_Game_Map_setupEvents = Game_Map.prototype.setupEvents;
    Game_Map.prototype.setupEvents = function() {
        if($gameMap._pd_TE_EFE_Enable === true){
            $gameMap._pd_TE_EFE_Enable = false;
        }
        pd_TE_Game_Map_setupEvents.call(this);
    };
    
    var pd_TE_Game_Event_clearPageSettings = Game_Event.prototype.clearPageSettings;
    Game_Event.prototype.clearPageSettings = function() {
        pd_TE_Game_Event_clearPageSettings.call(this);
        this.pd_TE_resetPropaty();
    };
    
    var pd_TE_Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings;
    Game_Event.prototype.setupPageSettings = function() {
        pd_TE_Game_Event_setupPageSettings.call(this);
        this.pd_TE_resetPropaty();
        var pd_TE_Plugin_Command_List_Top = this.list()[0];
        if(pd_TE_Plugin_Command_List_Top.code === 118){
            var pd_TE_command = pd_TE_Plugin_Command_List_Top.parameters[0].toLowerCase().replace(/　/g," ").replace(/\(/g,"[").split(" ");
            for(var i = 0; i < pd_TE_command.length; i++){
                var pd_TE_header = pd_TE_command[i].substr(0,1);
                if(pd_TE_header === "#") pd_TE_command[i] = pd_TE_command[i].substr(1);
                if(pd_TE_command[i] === "タッチ" || pd_TE_command[i] === "touch"){
                    this.__pd_TE.touchTriggerType = 1;
                }
                else if(pd_TE_command[i] === "トリガー無効" || pd_TE_command[i] === "triggerdisable"){
                    this.__pd_TE.triggerDisable = true;
                }
                else if(pd_TE_command[i] === "イベントに接触" || pd_TE_command[i] === "toevent"){
                    this.__pd_TE.ETE_Tag[0] = "";
                }
                else if(pd_TE_command[i] === "イベントが接触" || pd_TE_command[i] === "fromevent"){
                    this.__pd_TE.EFE_Tag[0] = "";
                    $gameMap._pd_TE_EFE_Enable = true;
                }
                else if(pd_TE_command[i] === "リージョンに接触" || pd_TE_command[i] === "toregion"){
                    this.__pd_TE.ETR_Num[0] = "";
                }
                else if(pd_TE_command[i] === "除外" || pd_TE_command[i] === "exception"){
                    this.__pd_TE.EFE_exception = true;
                }
                else if(pd_TE_command[i] === "強制実行" || pd_TE_command[i] === "forcerun"){
                    this.__pd_TE.Touch_forceRun = true;
                }
                else if(pd_TE_command[i].contains("[")){
                    pd_TE_command[i] = pd_TE_command[i].split("[");
                    for(var j = 1; j < pd_TE_command[i].length; j++){
                        pd_TE_command[i][j] = pd_TE_command[i][j].slice(0,-1);
                    }
                    if(pd_TE_command[i][0] === "タッチ" || pd_TE_command[i][0] === "touch"){
                        if(pd_TE_header === "#"){
                            this.__pd_TE.touchTriggerType = 2;
                        }else{
                            this.__pd_TE.touchTriggerType = 1;
                        }
                        this.__pd_TE.touchSwitchIndex = this.pd_TE_CheckSwitchIndex(pd_TE_command[i][1]);
                    }
                    else if(pd_TE_command[i][0] === "タグ" || pd_TE_command[i][0] === "tag"){
                        if(pd_TE_command[i].length >= 2){
                            for(var j = 1; j < pd_TE_command[i].length; j++){
                                this.__pd_TE.tag[j-1] = pd_TE_command[i][j];
                            }
                        }
                    }
                    else if(pd_TE_command[i][0] === "イベントに接触" || pd_TE_command[i][0] === "toevent"){
                        if(pd_TE_header === "#"){
                            this.__pd_TE.ETE_TriggerType = 2;
                        }else{
                            this.__pd_TE.ETE_TriggerType = 1;
                        }
                        this.__pd_TE.ETE_SwitchIndex = this.pd_TE_CheckSwitchIndex(pd_TE_command[i][1]);
                        if(pd_TE_command[i].length >= 3){
                            for(var j = 2; j < pd_TE_command[i].length; j++){
                                this.__pd_TE.ETE_Tag[j-2] = pd_TE_command[i][j];
                            }
                        }else{
                            this.__pd_TE.ETE_Tag[0] = "";
                        }
                    }
                    else if(pd_TE_command[i][0] === "イベントが接触" || pd_TE_command[i][0] === "fromevent"){
                        if(pd_TE_header === "#"){
                            this.__pd_TE.EFE_TriggerType = 2;
                        }else{
                            this.__pd_TE.EFE_TriggerType = 1;
                        }
                        this.__pd_TE.EFE_SwitchIndex = this.pd_TE_CheckSwitchIndex(pd_TE_command[i][1]);
                        $gameMap._pd_TE_EFE_Enable = true;
                        if(pd_TE_command[i].length >= 3){
                            for(var j = 2; j < pd_TE_command[i].length; j++){
                                this.__pd_TE.EFE_Tag[j-2] = pd_TE_command[i][j];
                            }
                        }else{
                            this.__pd_TE.EFE_Tag[0] = "";
                        }
                    }
                    else if(pd_TE_command[i][0] === "リージョンに接触" || pd_TE_command[i][0] === "toregion"){
                        if(pd_TE_header === "#"){
                            this.__pd_TE.ETR_TriggerType = 2;
                        }else{
                            this.__pd_TE.ETR_TriggerType = 1;
                        }
                        this.__pd_TE.ETR_SwitchIndex = this.pd_TE_CheckSwitchIndex(pd_TE_command[i][1]);
                        if(pd_TE_command[i].length >= 3){
                            for(var j = 2; j < pd_TE_command[i].length; j++){
                                this.__pd_TE.ETR_Num[j-2] = pd_TE_command[i][j];
                            }
                        }else{
                            this.__pd_TE.ETR_Num[0] = "";
                        }
                    }
                    
                }
                
            }
        }
    };
    
    Game_Event.prototype.pd_TE_CheckSwitchIndex = function(switchIndex) {
        if(isNaN(switchIndex)){
            if(switchIndex === ""){
                return ["", ""];
            }
            else if(switchIndex.contains(",")){
                switchIndex = switchIndex.split(",");
                if(switchIndex.length > 2){
                    throw new Error("TriggerExtension Plugin : 「,」の数が多すぎます");
                }else{
                    return switchIndex;
                }
            }
            else if(switchIndex === "a" || switchIndex === "b" || switchIndex === "c" || switchIndex === "d"){
                return ["SelfSwitch", switchIndex.toUpperCase()];
            }else{
                throw new Error("TriggerExtension Plugin : セルフスイッチに指定できる文字はA,B,C,Dだけです : ["+switchIndex.toUpperCase()+"]");
            }
        }else{
            return ["Switch", switchIndex];
        }
        
    };
    
    var pd_TE_Game_Event_update = Game_Event.prototype.update;
    Game_Event.prototype.update = function() {
        pd_TE_Game_Event_update.call(this);
        if (!$gameMap.isEventRunning()) {
            if (this.pd_TE_CheckTouchEvent()) {
                this.pd_TE_SetSwitchIndex(this.__pd_TE.touchSwitchIndex);
                if(this.__pd_TE.touchTriggerType === 1){
                    this.start("pd_TE_enable");
                    this.unlock();
                }
            }
        }
    };
    
    Game_Event.prototype.pd_TE_CheckTouchEvent = function() {
        if (this.__pd_TE.touchTriggerType >= 1 && TouchInput.isTriggered()) {
            if($gameTemp._pd_TE_realTouchMapX >= this._realX && $gameTemp._pd_TE_realTouchMapX < this._realX + 1 &&
              $gameTemp._pd_TE_realTouchMapY >= this._realY && $gameTemp._pd_TE_realTouchMapY < this._realY + 1){
                return true;
            }
        }
        return false;
    };
    
    var pd_TE_Game_Event_start = Game_Event.prototype.start;
    Game_Event.prototype.start = function() {
        if(this.__pd_TE.triggerDisable && arguments[0] != "pd_TE_enable"){
            return;
        }
        pd_TE_Game_Event_start.call(this);
    };
    
    var pd_TE_Game_Event_moveStraight = Game_Event.prototype.moveStraight;
    Game_Event.prototype.moveStraight = function(d) {
        var _pd_TE_x = $gameMap.roundXWithDirection(this._x, d);
        var _pd_TE_y = $gameMap.roundYWithDirection(this._y, d);
        pd_TE_Game_Event_moveStraight.call(this, d);
        if(this.__pd_TE.ETE_Tag.length >= 1 ||
           ($gameMap._pd_TE_EFE_Enable === true && this.__pd_TE.EFE_exception === false)){
            $gameMap.eventsXy(_pd_TE_x, _pd_TE_y).forEach(function(event) {
                if(event != this){
                    if (this.__pd_TE.ETE_Tag.length >= 1 && (this.__pd_TE.ETE_Tag[0] === "" || this.pd_TE_CheckTag(this.__pd_TE.ETE_Tag, event.__pd_TE.tag))) {
                        this.pd_TE_EventTouchEvent_Start(this, this.__pd_TE.ETE_SwitchIndex, event, this.__pd_TE.ETE_TriggerType);
                    }
                    else if($gameMap._pd_TE_EFE_Enable === true && event.__pd_TE.EFE_Tag.length >= 1 && this.__pd_TE.EFE_exception === false && (event.__pd_TE.EFE_Tag[0] === "" || this.pd_TE_CheckTag(this.__pd_TE.tag, event.__pd_TE.EFE_Tag))){
                        this.pd_TE_EventTouchEvent_Start(event, event.__pd_TE.EFE_SwitchIndex, this, event.__pd_TE.EFE_TriggerType);
                    }
                }
            },this);
        }
        if (this.__pd_TE.ETR_Num.length >= 1 && (!$gameMap.isEventRunning() || this.__pd_TE.Touch_forceRun === true) && this.pd_TE_CheckRegionId(this.__pd_TE.ETR_Num, _pd_TE_x, _pd_TE_y)) {
            if (!this.isJumping()) {
                this.pd_TE_SetSwitchIndex(this.__pd_TE.ETR_SwitchIndex);
                if(this.__pd_TE.EFR_TriggerType === 1){
                    this.start("pd_TE_enable");
                    this.unlock();
                }
            }
        }
        
    };
    
    Game_Event.prototype.pd_TE_CheckTag = function(tagList1, tagList2) {
        for(var i = 0; i < tagList1.length; i++){
            for(var j = 0; j < tagList2.length; j++){
                if(tagList1[i] === tagList2[j]) return true;
            }
        }
        return false;
    };

    Game_Event.prototype.pd_TE_CheckRegionId = function(regionList, x, y) {
        var reg = $gameMap.regionId(x, y);
        if(regionList[0] === ""){
            if(reg >= 1) return true;
        }else{
            for(var i = 0; i < regionList.length; i++){
                if(regionList[i] == reg) return true;
            }
        }
        return false;
    };
    
    Game_Event.prototype.pd_TE_EventTouchEvent_Start = function(obj, indexVar, touchEvent, triggerType) {
        if (!$gameMap.isEventRunning() || obj.__pd_TE.Touch_forceRun === true) {
            if (!obj.isJumping()) {
                obj.__pd_TE.lastTouchedEvent = touchEvent;
                obj.pd_TE_SetSwitchIndex(indexVar);
                if(triggerType === 1){
                    obj.start("pd_TE_enable");
                    obj.unlock();
                }
            }
        }
    };
    
    Game_Event.prototype.pd_TE_SetSwitchIndex = function(indexVar) {
        if(indexVar[0] === ""){
            
        }
        else if(indexVar[0] === "Switch"){
            $gameSwitches.setValue(indexVar[1], true);
        }
        else if(indexVar[0] === "SelfSwitch"){
            $gameSelfSwitches.setValue([this._mapId, this.eventId(), indexVar[1]], true);
        }
        else if(indexVar[0].substr(0,1) === "v"){
            if(isNaN(indexVar[1])){
                $gameVariables.setValue(parseInt(indexVar[0].substr(1)), indexVar[1]);
            }else{
                $gameVariables.setValue(parseInt(indexVar[0].substr(1)), parseInt(indexVar[1]));
            }
        }
        else{
            this.__pd_TE.Hash[indexVar[0]] = indexVar[1];
        }
    }
    
    var pd_TE_Game_Temp_initialize = Game_Temp.prototype.initialize;
    Game_Temp.prototype.initialize = function() {
        pd_TE_Game_Temp_initialize.call(this);
        this._pd_TE_realTouchMapX = null;
        this._pd_TE_realTouchMapY = null;
    };
    
    var pd_TE_Game_Map_initialize = Game_Map.prototype.initialize;
    Game_Map.prototype.initialize = function() {
        pd_TE_Game_Map_initialize.call(this);
        this._pd_TE_EFE_Enable = false;
    };
    
    var pd_TE_Game_Temp_setDestination = Game_Temp.prototype.setDestination;
    Game_Temp.prototype.setDestination = function(x, y) {
        pd_TE_Game_Temp_setDestination.call(this,x,y);
        this._pd_TE_realTouchMapX = ($gameMap._displayX * $gameMap.tileWidth() + TouchInput.x) / $gameMap.tileWidth();
        this._pd_TE_realTouchMapY = ($gameMap._displayY * $gameMap.tileHeight() + TouchInput.y) / $gameMap.tileHeight();
    };
    
    var pd_TE_Game_Temp_clearDestination = Game_Temp.prototype.clearDestination;
    Game_Temp.prototype.clearDestination = function() {
        pd_TE_Game_Temp_clearDestination.call(this);
        this._pd_TE_realTouchMapX = null;
        this._pd_TE_realTouchMapY = null;
    };
    
})();