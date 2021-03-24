//=============================================================================
// CommonSave.js
//=============================================================================
// Version    : 1.01
// LastUpdate : 2015.01.14
// Author     : T.Akatsuki
// Website    : http://utakata-no-yume.net/
// License    : MIT License(http://opensource.org/licenses/mit-license.php)
//=============================================================================

//=============================================================================
/*:
 * @plugindesc Create a share save data. Share state of game switch and variables between each save data.
 * @author T.Akatsuki
 * 
 * @param Target Switches
 * @desc Set target switch index number.
 * If you want to set multiple, put comma between indexes.
 * (ex) 11,12,13
 * @default 
 * 
 * @param Target Variables
 * @desc Set target variable index number.
 * If you want to set multiple, put comma between indexes.
 * (ex) 1,2,3,4,5
 * @default 
 * 
 * @param Is Auto
 * @desc Automatically to set save / load common save data on save / load timing.
 * true  : Automatically common save data is saved/loaded on save / load timing.
 * false : Save and load of common save data you do manually.
 * @default true
 * 
 * @param Auto on Gameover
 * @desc If auto saving common save data is enabled , it automatically saves common save data on gameover. 
 *       true  : It save common save data on game over.
 *       false : It do nothing on game over. 
 * @default false
 * 
 * @help If you use plugin command, you can operate common save data at any time.
 * Common save data will be saved with a name "common.rpgsave" below save directory.
 * 
 * Plugin command: 
 *   CommonSave load     # Read GameSwitches and GameVariables from common save data and apply game data.
 *                       # This command is used when you want to load common save data at any time.
 *   CommonSave save     # Save target GameSwitches and GameVariables common save data.
 *                       # This command is used when you want to save in common save data at any time.
 *   CommonSave remove   # Remove common save data file.
 */

/*:ja
 * @plugindesc 共有のセーブデータを作成し、指定したスイッチ・変数の状態をセーブデータ間で共有します。
 * @author 赤月 智平
 * 
 * @param Target Switches
 * @desc 対象となるスイッチの番号を指定します。
 * カンマ区切りで複数の指定が可能です。
 * (例) 11,12,13,20,21
 * @default 
 * 
 * @param Target Variables
 * @desc 対象となる変数の番号を指定します。
 * カンマ区切りで複数の指定が可能です。
 * (例) 11,12,13,14,15
 * @default 
 * 
 * @param Is Auto
 * @desc セーブ・ロード時に自動的に共通セーブデータのセーブ・ロードを行うかを設定します。
 *       true  : セーブ・ロード時に自動的に共有セーブデータにデータのセーブ・ロードを行う。
 *       false : 共通セーブデータのセーブ・ロードは手動で行う。
 * @default true
 * 
 * @param Auto on Gameover
 * @desc 自動セーブ設定がONの時にゲームオーバー時に共有セーブデータの自動セーブを行うかを設定します。
 *       true  : ゲームオーバー時に自動セーブを行う。
 *       false : ゲームオーバー時は自動セーブを行わない。
 * @default false
 * 
 * @help プラグインコマンドを使用すると任意のタイミングで共有セーブデータの操作を行う事ができます。
 * 共有セーブデータはsaveディレクトリ以下に「common.rpgsave」という名前で保存されます。
 * 
 * プラグインコマンド: 
 *   CommonSave load     # 共有セーブデータからスイッチ・変数を読み込み反映させます。
 *                       # 任意のタイミングで共有セーブデータのロードを行いたい場合に使用します。
 *   CommonSave save     # 共有セーブデータにスイッチ・変数の状態を記録します。
 *                       # 任意のタイミングで共有セーブデータのセーブを行いたい場合に使用します。
 *   CommonSave remove   # 共有セーブデータを削除します。
 *                       # 共有セーブデータをリセットしたい場合に使用します。
 */
//=============================================================================

//name space
var utakata = utakata || (utakata = {});

//-----------------------------------------------------------------------------
// class CommonSaveManager
//-----------------------------------------------------------------------------
(function(utakata){
    var CommonSaveManager = (function(){
        //constructor
        function CommonSaveManager(){
            //member variables
            this._targetSwitchList = [];
            this._targetVariableList = [];

            //trace
            this._tr = utakata.UtakataTrace || function(s){ var str = "CommonSaveManager: " + s; console.log(str); } || function(s){ };

            this.initialize();
        }

        //private methods
        CommonSaveManager.prototype.initialize = function(){
            this.parameters = PluginManager.parameters('CommonSave');

            var targetSwitchStr = String(this.parameters['Target Switches']);
            var targetVariableStr = String(this.parameters['Target Variables']);

            this._targetSwitchList = this._parseTargetNumber(targetSwitchStr);
            this._targetVariableList = this._parseTargetNumber(targetVariableStr);
        };

        CommonSaveManager.prototype._parseTargetNumber = function(str){
            if(typeof str === "undefined" || str == "undefined"){ return []; }
            var indexes = str.split(',', -1);
            var ret = [];

            for(var i = 0; i < indexes.length; i++){
                var parseIndex = parseInt(indexes[i]);
                if(parseIndex !== parseIndex){
                    this._tr("_parseTargetNumber: Setting parameter is invalid.");
                    continue;
                }
                ret.push(parseIndex);
            }
            return ret;
        };

        CommonSaveManager.prototype._getTargetSwitchJson = function(){
            var json = { };

            for(var i = 0; i < this._targetSwitchList.length; i++){
                var idx = this._targetSwitchList[i].toString();
                var value = $gameSwitches.value(idx);
                json[idx] = value;
            }

            return json;
        };

        CommonSaveManager.prototype._getTargetVariableJson = function(){
            var json = { };

            for(var i = 0; i < this._targetVariableList.length; i++){
                var idx = this._targetVariableList[i].toString();
                var value = $gameVariables.value(idx);
                json[idx] = value;
            }

            return json;
        };

        CommonSaveManager.prototype.setLoadSwitches = function(switches){
            for(var key in switches){
                var idx = parseInt(key);
                var value = switches[key];
                $gameSwitches.setValue(idx, value);
            }
        };

        CommonSaveManager.prototype.setLoadVariables = function(variables){
            for(var key in variables){
                var idx = parseInt(key);
                var value = variables[key];
                $gameVariables.setValue(idx, value);
            }
        };

        //public methods
        CommonSaveManager.prototype.load = function(){
            this._tr("load common save data.");

            if(!this.exists()){ return false; }

            var loadData = DataManager.loadCommonSave();

            if("gameSwitches" in loadData){
                this.setLoadSwitches(loadData["gameSwitches"]);
            }
            if("gameVariables" in loadData){
                this.setLoadVariables(loadData["gameVariables"]);
            }
        };

        CommonSaveManager.prototype.save = function(){
            this._tr("save common save data.");

            var switchesJson = this._getTargetSwitchJson();
            var variablesJson = this._getTargetVariableJson();

            var json = { "gameSwitches": switchesJson, 
                         "gameVariables": variablesJson };

            DataManager.saveCommonSave(json);
        };

        CommonSaveManager.prototype.exists = function(){
            this._tr("check exists common save data.");
            return StorageManager.existsCommonSave();
        }

        CommonSaveManager.prototype.remove = function(){
            this._tr("remove common save data.");
            StorageManager.removeCommonSave();
        };

        CommonSaveManager.prototype.isAuto = function(){
            return String(this.parameters['Is Auto']) === "true";
        };

        CommonSaveManager.prototype.isAutoOnGameOver = function(){
            return String(this.parameters['Auto on Gameover']) === "true";
        };

        return CommonSaveManager;
    })();
    utakata.CommonSaveManager = new CommonSaveManager();

})(utakata || (utakata = {}));

(function(){
    //parse and dispatch plugin command
    var _Game_Interpreter_pluginCommand = 
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args){
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if(command === 'CommonSave'){
            switch(args[0]){
                case 'load':
                    utakata.CommonSaveManager.load();
                    break;
                case 'save':
                    utakata.CommonSaveManager.save();
                    break;
                case 'exists':
                    utakata.CommonSaveManager.exists();
                    break;
                case 'remove':
                    utakata.CommonSaveManager.remove();
                    break;
                default:
                    break;
            }
        }
    };

    //-----------------------------------------------------------------------------
    // DataManager
    //-----------------------------------------------------------------------------
    // # extension
    var _Data_Manager_loadGame = DataManager.loadGame;
    DataManager.loadGame = function(savefileId){
        var ret = _Data_Manager_loadGame.call(this, savefileId);

        if(utakata.CommonSaveManager.isAuto()){ utakata.CommonSaveManager.load(); }
        return ret;
    };

    var _Data_Manager_saveGame = DataManager.saveGame;
    DataManager.saveGame = function(savefileId){
        var ret = _Data_Manager_saveGame.call(this, savefileId)

        if(utakata.CommonSaveManager.isAuto()){ utakata.CommonSaveManager.save(); }
        return ret;
    };

    var _Data_Manager_setupNewGame = DataManager.setupNewGame;
    DataManager.setupNewGame = function(){
        _Data_Manager_setupNewGame.call(this);
        if(utakata.CommonSaveManager.isAuto()){ utakata.CommonSaveManager.load(); }
    };

    // # add methods
    DataManager.loadCommonSave = function(){
        var json;
        try{
            json = StorageManager.loadCommonSave();
        }catch(e){
            console.error(e);
            return [];
        }
        if(json){
            var commonInfo = JSON.parse(json);
            return commonInfo;
        }else{
            return [];
        }
    };

    DataManager.saveCommonSave = function(json){
        var jsonStr = JsonEx.stringify(json);
        if(jsonStr.length >= 200000){
            console.warn('Common Save too big!');
        }
        StorageManager.saveCommonSave(jsonStr);
        return true;
    };

    //-----------------------------------------------------------------------------
    // StorageManager
    //-----------------------------------------------------------------------------
    //load methods ----------------------------------------------------------------
    StorageManager.loadCommonSave = function(){
        if(this.isLocalMode()){
            return this.loadFromLocalFileCommonSave();
        }else{
            return this.loadFromWebStorageCommonSave();
        }
    };

    StorageManager.loadFromLocalFileCommonSave = function(){
        var data = null;
        var fs = require('fs');
        var filePath = this.localFilePathCommonSave();
        if (fs.existsSync(filePath)) {
            data = fs.readFileSync(filePath, { encoding: 'utf8' });
        }
        return LZString.decompressFromBase64(data);
    };

    StorageManager.loadFromWebStorageCommonSave = function(){
        var key = this.webStorageKeyCommonSave();
        var data = localStorage.getItem(key);
        return LZString.decompressFromBase64(data);
    };

    // save methods ---------------------------------------------------------------
    StorageManager.saveCommonSave = function(json){
        if(this.isLocalMode()){
            this.saveToLocalFileCommonSave(json);
        }else{
            this.saveToWebStorageCommonSave(json);
        }
    };

    StorageManager.saveToLocalFileCommonSave = function(json){
        var data = LZString.compressToBase64(json);
        var fs = require('fs');
        var dirPath = this.localFileDirectoryPath();
        var filePath = this.localFilePathCommonSave();
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }
        fs.writeFileSync(filePath, data);
    };

    StorageManager.saveToWebStorageCommonSave = function(json){
        var key = this.webStorageKeyCommonSave();
        var data = LZString.compressToBase64(json);
        localStorage.setItem(key, data);
    };

    //check exists ----------------------------------------------------------------
    StorageManager.existsCommonSave = function(){
        if(this.isLocalMode()){
            return this.localFileExistsCommonSave();
        }else{
            return this.webStorageExistsCommonSave();
        }
    };

    StorageManager.localFileExistsCommonSave = function(){
        var fs = require('fs');
        return fs.existsSync(this.localFilePathCommonSave());
    };

    StorageManager.webStorageExistsCommonSave = function(){
        var key = this.webStorageKeyCommonSave();
        return !!localStorage.getItem(key);
    };

    //remove ----------------------------------------------------------------------
    StorageManager.removeCommonSave = function(){
        if(this.isLocalMode()){
            this.removeLocalFileCommonSave();
        }else{
            this.removeWebStorageCommonSave();
        }
    };

    StorageManager.removeLocalFileCommonSave = function(){
        var fs = require('fs');
        var filePath = this.localFilePathCommonSave();
        if(fs.existsSync(filePath)){
            fs.unlinkSync(filePath);
        }
    };

    StorageManager.removeWebStorageCommonSave = function(){
        var key = this.webStorageKeyCommonSave();
        localStorage.removeItem(key);
    };

    StorageManager.localFilePathCommonSave = function(){ return this.localFileDirectoryPath() + 'common.rpgsave'; };
    StorageManager.webStorageKeyCommonSave = function(){ return 'RPG Common'; };


    //-----------------------------------------------------------------------------
    // Scene_Gameover
    //-----------------------------------------------------------------------------
    var _Scene_Gameover_Start = Scene_Gameover.prototype.start;
    Scene_Gameover.prototype.start = function(){
        if(utakata.CommonSaveManager.isAutoOnGameOver()){
            utakata.CommonSaveManager.save();
        }
        _Scene_Gameover_Start.call(this);
    };

})();
