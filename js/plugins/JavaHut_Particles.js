//=============================================================================
// JavaHut's Particles Plugin
// JavaHut_Particles.js
// 
// Pixi Particles Author: CloudKid
// Pixi Particles License: MIT License
// Pixi Particles GitHub: https://github.com/pixijs/pixi-particles
// 
// Known Issues: None at this time.
//=============================================================================

//=============================================================================
// License for pixi-particles.js:
// 
// The MIT License (MIT)
// 
// Copyright (c) 2015 CloudKid
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//=============================================================================

var Imported = Imported || {};
Imported.JavaHut_Particles = 1.12;

//=============================================================================
 /*:
 * @plugindesc v1.12 This plugin adds the ability to generate particles on a map.
 * @author JavaHut & CloudKid
 * 
 * @param --General--
 * @default ---------------
 * 
 * @param Particle Data Folder
 * @desc The .json data folder name within the project data folder. Leave blank for no subfolder. Default: particles
 * @default particles
 * 
 * @param Particle Image Folder
 * @desc The .png image folder name within the project img folder. Leave blank for no subfolder. Default: particles
 * @default particles
 * 
 * @param Particle Data
 * @desc The particle data file names to load (without the .json extension). Use this format: name1, name2, etc
 * @default
 * 
 * @param Sprite Width
 * @desc The width of each particle sprite in a particle spritesheet. Default: 128
 * @default 128
 * 
 * @param Sprite Height
 * @desc The height of each particle sprite in a particle spritesheet. Default: 128
 * @default 128
 * 
 * @param --Custom Z Points--
 * @default ---------------
 * 
 * @param Particle Z Order
 * @desc below, above, or weather. If the particles should render below or above the character, or just below the weather.
 * @default above
 * 
 * @param Below Z Value
 * @desc The custom z depth value of the layer below the character. Default: 1.1
 * @default 1.1
 * 
 * @param Above Z Value
 * @desc The custom z depth value of the layer above the character. Default: 3.9
 * @default 3.9
 * 
 * @help
 * ============================================================================
 * Dependencies
 * ============================================================================
 * Please make sure the pixi-particles.js file is in your js/libs folder, and
 * that the file is included in your index.html file with this script call:
 * <script type="text/javascript" src="js/libs/pixi-particles.js"></script>
 * 
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin makes use of the Pixi Particles script from CloudKid to allow
 * particle generation on a map. The website and license info is in the
 * JavaHut_Particles.js script file, or you can visit this link for more info:
 * https://github.com/pixijs/pixi-particles
 * 
 * ============================================================================
 * Notetag Instructions
 * ============================================================================
 * Note: Use notetags to override plugin defaults or set functionality.
 *       All tags are case-sensitive.
 * 
 * Map Notetags: Place in the Note section of a map to override the defaults.
 *   :n is the number to set. Example: <belowZ:1.1> will set 1.1 for the value.
 *   <belowZ:n>        Changes the Below Z plugin Parameter for the current
 *                     scene, which changes the z value depth where the
 *                     "below" particles display at
 *   <aboveZ:n>        Changes the Above Z plugin Parameter for the current
 *                     scene, which changes the z value depth where the
 *                     "above" particles display at
 * 
 * ============================================================================
 * Plugin Command Instructions
 * ============================================================================
 * Note: All commands are case sensitive. Any dataName and imgName arguments
 *       are also case sensitive and must be without the .json and .png.
 * 
 * particleSet eventId zOrder dataName imgName x y width height
 *     Function      : Sets up a particle emitter for an event id
 *                     Note: x, y, width and height are for spritesheets.
 *                     Double-check the Sprite Width and Sprite Height
 *                     Parameters when using spritesheets for particles.
 *                     If x and y are null, width and height are required in
 *                     order for the emitter to choose a sprite at random.
 *     Arguments     :
 *         eventId   : The event id that will hold the particle emitter
 *         zOrder    : below, above or weather. Use null to default to the
 *                     Particle Z Order plugin Parameter
 *         dataName  : The .json particle data file name that holds all the
 *                     particle emitter data
 *         imgName   : The .png particle image file name that is used as the
 *                     particle texture for the emitter
 *         x         : (Optional) If spritesheet image, use x frame position
 *         y         : (Optional) If spritesheet image, use y frame position
 *         width     : (Optional) If spritesheet image, use width dimension
 *         height    : (Optional) If spritesheet image, use height dimension
 *     Examples      : particleSet 1 above Firework spark
 *                      will set a particle emitter on event 1 that renders
 *                      above the character. It uses the Firework.json data
 *                      file, and the spark.png as the particle texture.
 *                   : particleSet 1 above Fire flame 100 200
 *                      will set a particle emitter that uses a spritesheet,
 *                      choosing the texture at x=100 and y=200 with
 *                      Sprite Width and Sprite Height plugin Parameters used
 *                      for the texture width and height in the spritesheet.
 * 
 * particleOn eventId dataName follow
 *     Function      : Turns on a particle emitter for an event
 *                     Use null for dataName to turn on all of the event's
 *                     emitters
 *     Arguments     :
 *         eventId   : The event id that was used with the particleSet plugin
 *                     command for the event that holds the particle emitter
 *         dataName  : The particle data file name that was used with the
 *                     particleSet plugin command
 *         follow    : The event id to follow, 0 to follow the player, -1 to
 *                     follow the mouse, or -2 to follow the camera. Omit
 *                     to follow the event that holds the particle emitter
 *     Example       : particleOn 1 Firework
 *                     will turn on the Firework emitter for event 1
 * 
 * particleOff eventId dataName
 *     Function      : Turns off a particle emitter for an event
 *                     Omit dataName to turn off all of the event's emitters
 *     Arguments     :
 *         eventId   : The event id that was used with the particleSet plugin
 *                     command for the event that holds the particle emitter
 *         dataName  : The particle data file name that was used with the
 *                     particleSet plugin command
 *     Example       : particleOff 1 Firework
 *                     will turn off the Firework emitter for event 1
 * 
 * particleClear eventId dataName
 *     Function      : Clear one or all of an event's particle emitters
 *                     Omit dataName to clear all the event's emitters
 *                     Note: This will not wait for the particles to finish
 *     Arguments     :
 *         eventId   : The event id that was used with the particleSet plugin
 *                     command for the event that holds the particle emitter
 *         dataName  : The particle data file name that was used with the
 *                     particleSet plugin command
 *     Example       : particleClear 1 Firework
 *                     will clear only the Firework emitter from event 1
 * 
 * particleUpdate eventId dataName property value1 value2
 *     Function      : Update a particle property after an emitter has been
 *                     set or turned on.
 *                     Use null for dataName to update all emitters
 *                     Note: Where start and end values can be set, you would
 *                     use value1 and value2. You can use null for either
 *                     value to leave the value as is.
 *     Arguments     :
 *         eventId   : The event id that was used with the particleSet plugin
 *                     command for the event that holds the particle emitter
 *         dataName  : The particle data file name that was used with the
 *                     particleSet plugin command
 *         property  : The property to change:
 *                     alpha : Changes the start and end transparency values
 *                     blend : Changes the blend mode value
 *                     color : Changes the start and end color values
 *                     frequency : Changes the emitter frequency value
 *                     lifetime : Changes the min and max lifetime values
 *                     position : Changes the emitter spawn position value
 *                     rotation : Changes the emitter rotation value
 *                     scale : Changes the start and end scale values
 *                     speed : Changes the start and end speed values
 *        value1     : The value or start value to change
 *        value2     : The end value to change
 *     Examples      : particleUpdate 1 Rain scale 2
 *                     will change the scale multiplier for the Rain to 2
 *                   : particleUpdate 1 Rain alpha 1 0
 *                     will change the alpha start and end for Rain to 1 and 0
 * 
 * particleImageLoad imgName
 *     Function      : Allows particle image(s) to be preloaded into the
 *                     JavaHut.Particles.bitmaps array for texture use.
 *                     Important: Image file names cannot have spaces in them.
 *                     It is better to use an _ character instead of spaces in
 *                     any type of file name.
 *     Arguments     : 
 *         imgName   : The image name or multiple image names (without the
 *                     .png extension). Separate each image name with a space.
 *     Example       : particleImageLoad fire smoke spark
 *                     will preload the fire, smoke and spark image files
 * 
 * particleImageUnload imgName
 *     Function      : Warning: can cause errors if texture is in use. It's
 *                     better to use the particleClear command before using
 *                     this one to ensure texture will be freed from use.
 *                   : Allows particle image(s) to be unloaded from the
 *                     JavaHut.Particles.bitmaps array when no longer needed.
 *                     Important: Image file names cannot have spaces in them.
 *                     It is better to use an _ character instead of spaces in
 *                     any type of file name.
 *     Arguments     : 
 *         imgName   : The image name or multiple image names (without the
 *                     .png extension). Separate each image name with a space.
 *     Example       : particleImageUnload fire smoke
 *                     will unload the fire and smoke image files
 * 
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.12: Fixed a bug that prevented encrypted images from loading,
 *   and added particleImageLoad and particleImageUnload plugin commands.
 * Version 1.11: Fixed an issue that caused emitters to reset on Menu load,
 *   and cleaned up some code for the plugin and Generator class.
 * Version 1.10: Reworked the emitter object into a Generator class.
 * Version 1.04: Added x y width height to particleSet command for spritesheets
 * Version 1.03: Fixed a bug that caused wrong positioning when omitting a
 *   value for the particleUpdate position property
 * Version 1.02: Added particleUpdate plugin command to update particle emitter
 * Version 1.01: Added -2 for follow argument on particleOn to allow particle
 *   emitters to follow the camera. This is useful for weather effects, where
 *   the particles follow the map, but the emitter follows the camera.
 * Version 1.00: Plugin completed.
 */
//=============================================================================

// ==============================
// * JavaHut
// ==============================

var JavaHut = JavaHut || {};
JavaHut.Particles = JavaHut.Particles || {};

/**
 * Checks if a value is undefined, null or "null"
 * @param {Mixed} value The value to check
 * @returns {Bool} If the value was omitted or not
 */
JavaHut._omitted = JavaHut._omitted || function (value) {
    return (value === undefined || value === null || value === "null");
};

/**
 * Checks if a value is "true" or true
 * @param {Mixed} value
 * @returns {Boolean} If the value is true, otherwise false
 */
JavaHut._bool = JavaHut._bool || function (value) {
    return (value === "true" || value === true) ? true : false;
};

/**
 * Chooses a random number between min and max, including mix and max
 * @param {Number} min The minimum number to choose a random from
 * @param {Number} max The maximum number to choose a random from
 * @returns {Number} The random number between min and max
 */
JavaHut._rnd = JavaHut._rnd || function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Returns the value of the specified notetag (no comments) in the dataObj object
 * @param {Object} dataObj The object that contains a .meta object
 * @param {String} tagName The tag name to search for
 * @returns {Mixed} The value of the tag or null
 */
JavaHut._getNoteValueOnly = JavaHut._getNoteValueOnly || function (dataObj, tagName) {
    var tagValue = null;
    if (dataObj && dataObj.meta && dataObj.meta[tagName] !== undefined) {
        tagValue = String(dataObj.meta[tagName]).trim();
    }
    tagValue = (tagValue === "true" || tagValue === "false")
            ? JavaHut._bool(tagValue) : tagValue;
    
    return tagValue;
};

/**
 * Loops through properties of an object to process them.
 * @param {Mixed} data The data object to process
 * @param {Function} cb The function that processes the data
 */
JavaHut._forEach = JavaHut._forEach || function (data, cb) {
    if (!data) { return false; }
    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; i += 1) {
        cb(data[keys[i]], keys[i]);
    }
};

// ==============================
// * Plugin Scope
// ==============================

(function ($) {
    
    "use strict";
    
    // Check the pixi-particles availability
    if (!PIXI.particles || !PIXI.particles.Emitter) {
        console.error("The pixi-particles.js file is not loaded. Please double-"
            + "check that the file is placed in your js/libs folder and that your"
            + " index.html file includes the script.");
    }
    
// ==============================
// * Parameters
// ==============================
    
    $.Parameters = PluginManager.parameters("JavaHut_Particles");
    $.Param = $.Param || {};
    // General
    $.Param.PARTdataFolder = String($.Parameters["Particle Data Folder"]);
    $.Param.PARTimgFolder = String($.Parameters["Particle Image Folder"]);
    $.Param.PARTload = String($.Parameters["Particle Data"]);
    $.Param.PARTspriteWidth = Number($.Parameters["Sprite Width"]);
    $.Param.PARTspriteHeight = Number($.Parameters["Sprite Height"]);
    // Z Orders
    $.Param.PARTzOrder = String($.Parameters["Particle Z Order"]);
    $.Param.PARTbelowZ = Number($.Parameters["Below Z Value"]);
    $.Param.PARTaboveZ = Number($.Parameters["Above Z Value"]);
    // Adjustments
    if ($.Param.PARTdataFolder !== "") { $.Param.PARTdataFolder += "/"; }
    if ($.Param.PARTimgFolder !== "") { $.Param.PARTimgFolder += "/"; }
    
// ==============================
// * Game_Interpreter
// ==============================
    
    // Overwritten Methods
    
    // Get commands sent to this plugin
    $.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        switch (command) {
            case "particleSet" :
                $._particleSet(args);
                break;
            case "particleOn" :
                $._particleOn(args);
                break;
            case "particleOff" :
                $._particleOff(args);
                break;
            case "particleClear" :
                $._particleClear(args);
                break;
            case "particleUpdate" :
                $._particleUpdate(args);
                break;
            case "particleImageLoad" :
                $._updateBitmap(args, "add");
                break;
            case "particleImageUnload" :
                $._updateBitmap(args, "remove");
                break;
            default :
                $.Game_Interpreter_pluginCommand.call(this, command, args);
        }
    };
    
// ==============================
// * DataManager
// ==============================
    
    // Overwritten Methods
    
    // Allow $particles array for database load
    $.DataManager_loadDataFile = DataManager.loadDataFile;
    DataManager.loadDataFile = function (name, src) {
        if (name.indexOf("$particle") === 0) {
            // Custom particle data
            // Extract just the name part without $particle
            name = name.substring(10, name.length);
            src = (this.isBattleTest()) ? src.substring(5, src.length) : src;
            var xhr = new XMLHttpRequest();
            var url = "data/" + src;
            
            xhr.open("GET", url);
            xhr.overrideMimeType("application/json");
            xhr.onload = function () {
                if (xhr.status < 400) {
                    window.$particles[name] = JSON.parse(xhr.responseText);
                }
            };
            xhr.onerror = function () {
                DataManager._errorUrl = DataManager._errorUrl || url;
            };
            xhr.send();
        } else {
            $.DataManager_loadDataFile.call(this, name, src);
        }
    };
    DataManager.isDatabaseLoaded = function () {
        var name = "";
        for (var i = 0; i < this._databaseFiles.length; i += 1) {
            name = this._databaseFiles[i].name;
            if (name.indexOf("$particle") === 0) {
                // Custom particle data
                // Extract just the name part without $particle
                name = name.substring(10, name.length);
                if (!window.$particles[name]) { return false; }
            } else if (!window[this._databaseFiles[i].name]) {
                return false;
            }
        }
        
        return true;
    };
    
    // Allow Z order data from Map Notes
    $.DataManager_onLoad = DataManager.onLoad;
    DataManager.onLoad = function (object) {
        $.DataManager_onLoad.call(this, object);
        if (object === $dataMap) {
            var belowZ = JavaHut._getNoteValueOnly(object, "belowZ");
            var aboveZ = JavaHut._getNoteValueOnly(object, "aboveZ");
            $._currentBelowZ = (belowZ !== null) ? Number(belowZ) : $.Param.PARTbelowZ;
            $._currentAboveZ = (aboveZ !== null) ? Number(aboveZ) : $.Param.PARTaboveZ;
        }
    };
    
    // Allow destroying/reloading of particle gens when loading a saved game
    $.DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function (contents) {
        $.destroyGenerators();
        $.DataManager_extractSaveContents.call(this, contents);
        $._reloadParticles();
    };
    
// ==============================
// * Game_Map
// ==============================
    
    // Overwritten Methods
    
    // Allow destroying of particle gens on new map
    // No particle reload on $gameMap setup because events should control setup
    // and emit for particle generators for each map
    $.Game_Map_setupEvents = Game_Map.prototype.setupEvents;
    Game_Map.prototype.setupEvents = function () {
        $.destroyGenerators();
        $.Game_Map_setupEvents.call(this);
    };
    
// ==============================
// * Spriteset_Map
// ==============================
    
    // Overwritten Methods
    
    // Allow for particle containers below and above characters, or below the weather
    // For every new scene, the containers have to be added again
    $.Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
    Spriteset_Map.prototype.createLowerLayer = function () {
        $.Spriteset_Map_createLowerLayer.call(this);
        
        SceneManager.generatorCtrA.z = $._currentBelowZ;
        SceneManager.generatorCtrB.z = $._currentAboveZ;
        this._tilemap.addChild(SceneManager.generatorCtrA);
        this._tilemap.addChild(SceneManager.generatorCtrB);
        this.addChildAt(SceneManager.generatorCtrC, this.children.indexOf(this._weather));
    };
    
// ==============================
// * TouchInput
// ==============================
    
    // Overwritten Methods
    
    // Allow mouse coordinates for emitters that follow the mouse
    $.TouchInput__onMouseMove = TouchInput._onMouseMove;
    TouchInput._onMouseMove = function (event) {
        $.mouseX = Graphics.pageToCanvasX(event.pageX);
        $.mouseY = Graphics.pageToCanvasY(event.pageY);
        $.TouchInput__onMouseMove.call(this, event);
    };
    
// ==============================
// * Public Properties
// ==============================
    
    $.mouseX = 0; // The mouse x coordinate
    $.mouseY = 0; // The mouse y coordinate
    $.bitmaps = []; // The array of texture bitmaps
    
// ==============================
// * Private Properties
// ==============================
    
    // The Z values for containers below and above the character
    $._currentBelowZ = $.Param.PARTbelowZ;
    $._currentAboveZ = $.Param.PARTaboveZ;
    
// ==============================
// * Public Methods
// ==============================
    
    /**
     * Gets the full path to an image file.
     * @param {String} imgName The name of the image without .png extension
     * @returns {String} The resolved image path
     */
    $.resolveImage = function (imgName) {
        return "img/" + $.Param.PARTimgFolder + imgName + ".png";
    };
    
    /**
     * Destroys the current generators on the SceneManager.particleGens.
     */
    $.destroyGenerators = function () {
        var gens = SceneManager.particleGens;
        for (var i = 0; i < gens.length; i += 1) {
            if (gens[i]) { gens[i].destroy(); }
            gens[i] = null;
        }
        SceneManager.particleGens = [];
    };
    
    /**
     * Gets the index number for the image in the JavaHut.Particles.bitmaps array.
     * @param {String} name The image name
     * @returns {Mixed} The index number, or null if image doesn't exist
     */
    $.getBitmapIndex = function (name) {
        var len = $.bitmaps.length;
        for (var i = 0; i < len; i += 1) {
            if ($.bitmaps[i] && $.bitmaps[i]._imgName === name) {
                return i;
            }
        }
        return null;
    };
    
// ==============================
// * Private Methods
// ==============================
    
    /**
     * Removes any non-word characters from a string for variable name use.
     * @param {String} name The name to adjust
     * @returns {String} The adjusted name
     */
    $._getVarName = function (name) {
        if (JavaHut._omitted(name)) { return ""; }
        return name.replace(/\W/g, "");
    };
    
    /**
     * Sets up the DataManager to load the particle data files.
     */
    $._loadParticleData = function () {
        var data = $.Param.PARTload.split(/,+ */);
        
        window.$particles = [];
        for (var i = 0; i < data.length; i += 1) {
            DataManager._databaseFiles.push({
                name : "$particles" + $._getVarName(data[i]),
                src : $.Param.PARTdataFolder + data[i] + ".json"
            });
        }
    };
    
    /**
     * Inits the SceneManager containers and gen array.
     */
    $._initSceneManager = function () {
        SceneManager.generatorCtrA = new PIXI.Container(); // The lower PIXI particle container
        SceneManager.generatorCtrB = new PIXI.Container(); // The upper PIXI particle container
        SceneManager.generatorCtrC = new PIXI.Container(); // The weather PIXI particle container
        SceneManager.particleGens = [];
    };
    
    /**
     * Checks if a $gameMap event has particle data.
     * @param {Object} evt The $gameMap event object
     * @returns {Boolean} If the event has particle data
     */
    $._hasParticleData = function (evt) {
        if (!evt) { return false; }
        return (!!evt._particleData);
    };
    
    /**
     * Re-initializes particle emitters for an event.
     * @param {Object} evt The $gameMap event object
     */
    $._reinitGameEvent = function (evt) {
        if (!evt) { return false; }
        var data = evt._particleData;
        if (!data) { return false; }
        var id = 0;
        
        JavaHut._forEach(data, function (e, k) {
            if (e !== null) {
                $._particleSet(
                    [evt._eventId, e.zOrder, k, e.imgName,
                    e.x, e.y, e.width, e.height],
                    e.emit, e.follow, e.genData
                );
            }
        });
    };
    
    /**
     * Reloads particle data for events if available.
     */
    $._reloadParticles = function () {
        if ($gameMap && $gameMap._events) {
            var evts = $gameMap._events;
            for (var i = 0; i < evts.length; i += 1) {
                if ($._hasParticleData(evts[i])) {
                    $._reinitGameEvent(evts[i]);
                }
            }
            evts = null;
        }
    };
    
    /**
     * Updates a Bitmap in the JavaHut.Particles.bitmaps array.
     * @param {Mixed} name The image name or array of names
     * @param {String} task The task to complete: "add" or "remove"
     * @returns {Mixed} The index id of the new Bitmap if adding
     */
    $._updateBitmap = function (name, task) {
        if (Array.isArray(name) && name.length > 1) {
            for (var i = 0; i < name.length; i += 1) {
                $._updateBitmap(name[i], task);
            }
            return true;
        }
        var id = $.getBitmapIndex(name);
        if (task === "add") {
            if (id === null) {
                $.bitmaps.push(Bitmap.load($.resolveImage(name)));
                id = $.bitmaps.length - 1;
                $.bitmaps[id]._imgName = name;
            }
            
            return id;
        } else {
            if (id !== null) {
                $.bitmaps[id]._baseTexture.destroy();
                $.bitmaps[id] = null;
                $.bitmaps.splice(id, 1);
            }
        }
    };
    
    // See Plugin Command Instructions for info
    // Internal use:
    // @param emit {Bool} If the particles should emit automatically
    // @param follow {Number} The follow id
    // @param genData {Object} The generator data object
    //                (properties for the $._particleUpdate method)
    $._particleSet = function (args, emit, follow, genData) {
        if (JavaHut._omitted(args[3])) {
            console.error("Image name was omitted in the particleSet command "
                + "for event #" + args[0] + ".");
            return false;
        }
        var id = Number(args[0]);
        var gen = SceneManager.particleGens[id];
        var zOrder = (JavaHut._omitted(args[1])) ? $.Param.PARTzOrder : String(args[1]);
        var imgName = String(args[3]);
        var imgId = $._updateBitmap(imgName, "add");
        var data = {
            name : String($._getVarName(args[2])),
            imgName : imgName,
            emit : emit || false,
            follow : (JavaHut._omitted(follow)) ? null : Number(follow),
            x : (JavaHut._omitted(args[4])) ? null : Number(args[4]),
            y : (JavaHut._omitted(args[5])) ? null : Number(args[5]),
            width : (JavaHut._omitted(args[6])) ? null : Number(args[6]),
            height : (JavaHut._omitted(args[7])) ? null : Number(args[7])
        };
        
        if (!gen || gen.isDead()) {
            gen = SceneManager.particleGens[id] = new $.Generator(zOrder, id);
        }
        // Defer the emitter until the texture bitmap is loaded
        gen.deferEmitter(data.name);
        // Add the emitter when the texture bitmap is ready
        $.bitmaps[imgId].addLoadListener(gen.addEmitter.bind(gen, data));
        // Setup gen data if needed
        if (genData) {
            JavaHut._forEach(genData, function (data, k) {
                $._particleUpdate(id, data[0], data[1], data[2], data[3]);
            });
        }
    };
    $._particleOn = function (args) {
        var id = Number(args[0]);
        var gen = SceneManager.particleGens[id];
        var name = String($._getVarName(args[1]));
        var follow = Number(args[2]);
        
        if (!gen) { return false; }
        gen.emit(name, follow);
    };
    $._particleOff = function (args) {
        var id = Number(args[0]);
        var gen = SceneManager.particleGens[id];
        var name = String($._getVarName(args[1]));
        
        if (!gen) { return false; }
        gen.stopEmit(name);
    };
    $._particleClear = function (args) {
        var id = Number(args[0]);
        var gen = SceneManager.particleGens[id];
        var name = String($._getVarName(args[1]));
        
        if (!gen) { return false; }
        gen.removeEmitter(id, name);
    };
    $._particleUpdate = function (args) {
        var id = Number(args[0]);
        var gen = SceneManager.particleGens[id];
        var name = String($._getVarName(args[1]));
        var key = String(args[2]).toLowerCase();
        var value = (JavaHut._omitted(args[3])) ? null : String(args[3]);
        var value2 = (JavaHut._omitted(args[4])) ? null : String(args[4]);
        
        if (!gen) { return false; }
        gen.updateEmitterData(name, key, value, value2);
    };
    
    // Load the particle data files
    $._loadParticleData();
    // Init the particleGens array and containers
    $._initSceneManager();
    
//=============================================================================
// New Classes
//=============================================================================

// ==============================
// * JavaHut.Particles.Generator
// ==============================
    
    /**
     * Creates a generator for particle emitters.
     * @param {String} zOrder The Z layer order: below, above, or weather
     * @param {Number} id The id for generator and save data storage
     * @param {Object} data (Optional) The data for a new emitter:
     *        name   : {String} The particle data file name
     *        imgName: {String} The image name used in the JavaHut.Particles.bitmaps array
     *        emit   : {Bool} If the emitter should start emitting automatically
     *        follow : {Number} The follow target id for the emitter
     *        x      : {Number} The x coordinate for a spritesheet particle texture
     *        y      : {Number} The y coordinate for a spritesheet particle texture
     *        width  : {Number} The overall width of a spritesheet
     *        height : {Number} The overall height of a spritesheet
     * @returns {JavaHut.Particles.Generator}
     */
    JavaHut.Particles.Generator = function (zOrder, id, data) {
        this.initialize.call(this, zOrder, id, data);
    };
    
    JavaHut.Particles.Generator.prototype.constructor = JavaHut.Particles.Generator;
    JavaHut.Particles.Generator.prototype.initialize = function (zOrder, id, data) {
        this.zOrder = zOrder;
        this.evtId = id;
        this._status = 1;
        this._container = new PIXI.Container();
        this._particleZRef = "";
        this._emitters = {};
        this._particleContain();
        if (data) { this.addEmitter(data); }
    };
    
    /**
     * Checks if a generator data file name is valid in the window.$particles array.
     * @param {String} name The data file name
     * @returns {Boolean} True if valid, false if not
     */
    JavaHut.Particles.Generator.prototype.isValidDataName = function (name) {
        if (!window.$particles[name]) {
            console.error("Invalid particle data name (" + name
                + "). Please check that the name is set in the Particle Data plugin Parameter.");
            return false;
        } else {
            return true;
        }
    };
    
    /**
     * Checks for a valid parent for an emitter to emit particles.
     * @returns {Bool} If the Generator has a valid parent for the emitter
     */
    JavaHut.Particles.Generator.prototype.validateParent = function () {
        return (!!this.getParentObject() && this._container);
    };
    
    /**
     * Gets the parent object for this generator.
     * @returns {Mixed} The parent event object or null
     */
    JavaHut.Particles.Generator.prototype.getParentObject = function () {
        return (SceneManager && SceneManager.particleGens)
            ? SceneManager.particleGens[this.evtId] : null;
    };
    
    /**
     * Gets the game event to save data on.
     * @returns {Mixed} The Game_Event to save data on or null
     */
    JavaHut.Particles.Generator.prototype.getSaveEvent = function () {
        return ($gameMap && $gameMap._events) ? $gameMap._events[this.evtId] : null;
    };
    
    /**
     * Gets a default game event to follow for this generator.
     * @returns {Mixed} The default Game_Event to follow or null
     */
    JavaHut.Particles.Generator.prototype.getDefaultFollowEvent = function () {
        return ($gameMap && $gameMap._events) ? $gameMap._events[this.evtId] : null;
    };
    
    /**
     * Gets a custom event to follow for this generator.
     * @param {Number} id The event id to follow
     * @returns {Mixed} The default Game_Event to follow or null
     */
    JavaHut.Particles.Generator.prototype.getCustomFollowEvent = function (id) {
        return ($gameMap && $gameMap._events) ? $gameMap._events[id] : null;
    };
    
    /**
     * Gets a dummy event at x:0 and y:0 to follow.
     * @returns {Object} A dummy object with _realX and _realY set to 0
     */
    JavaHut.Particles.Generator.prototype.getScreenFollowEvent = function () {
        return {_realX : 0, _realY : 0};
    };
    
    /**
     * Gets the width and height for all sprites in a particle spritesheet.
     * @returns {Array} The width and height array for sprite size
     */
    JavaHut.Particles.Generator.prototype.getSpriteSize = function () {
        return [JavaHut.Particles.Param.PARTspriteWidth,
            JavaHut.Particles.Param.PARTspriteHeight];
    };
    
    /**
     * Checks if an emitter exists already in this._emitters.
     * @param {String} name The name of the emitter
     * @returns {Boolean} True if emitter exists, false if not
     */
    JavaHut.Particles.Generator.prototype.emitterExists = function (name) {
        return (!!this._emitters[name] && !this.isDeferredEmitter(name));
    };
    
    /**
     * Checks if an emitter is deferred for loading.
     * @param {String} name The emitter name
     * @returns {Boolean} True if the emitter is deferred, false if not
     */
    JavaHut.Particles.Generator.prototype.isDeferredEmitter = function (name) {
        return (Array.isArray(this._emitters[name]));
    };
    
    /**
     * Checks if the generator has been destroyed.
     * @returns {Boolean} True if the generator has been destroyed, false if not
     */
    JavaHut.Particles.Generator.prototype.isDead = function () {
        return (this._status === 0);
    };
    
    /**
     * Gets the PIXI.BaseTexture for particle textures.
     * @param {String} name The image name in the JavaHut.Particles.bitmaps array
     * @returns {PIXI.BaseTexture} The base texture
     */
    JavaHut.Particles.Generator.prototype.getBaseTexture = function (name) {
        var id = JavaHut.Particles.getBitmapIndex(name);
        return (id !== null) ? JavaHut.Particles.bitmaps[id].baseTexture
            : new Bitmap().baseTexture;
    };
    
    /**
     * Ensures that this._container is contained in a spriteset map container.
     */
    JavaHut.Particles.Generator.prototype.contain = function () {
        if (this.isDead()) { return false; }
        this._particleContain();
    };
    
    /**
     * Releases this._container from the spriteset map container.
     */
    JavaHut.Particles.Generator.prototype.release = function () {
        if (this.isDead() || !SceneManager[this._particleZRef] || !this._container) {
            return false;
        }
        SceneManager[this._particleZRef].removeChild(this._container);
    };
    
    /**
     * Sets up a deferred emitter to hold loader functions.
     * @param {String} name The name of the emitter
     */
    JavaHut.Particles.Generator.prototype.deferEmitter = function (name) {
        if (this.isDead() || this.emitterExists()) { return null; }
        this._emitters[name] = [];
    };
    
    /**
     * Adds a function to execute when the emitter is added to the generator.
     * @param {String} name The emitter name
     * @param {Function} fn The function to execute when the emitter is loaded
     */
    JavaHut.Particles.Generator.prototype.addEmitterLoad = function (name, fn) {
        if (this.isDeferredEmitter(name)) {
            this._emitters[name].push(fn);
        }
    };
    
    /**
     * Adds an emitter to the generator. If the emitter has been deferred, this
     * method must only be called after any load processes are complete.
     * @param {Object} data The data for the emitter. See JavaHut.Particles.Generator
     * @returns {null} If generator is dead
     */
    JavaHut.Particles.Generator.prototype.addEmitter = function (data) {
        var name = data.name;
        if (this.isDead()) { return null; }
        if (!this.isValidDataName(name)) { return false; }
        // Check if emitter elready exists and is not a deferred emitter
        if (this.emitterExists()) { return false; }
        
        var emitter = null;
        var loaders = this._emitters[name];
        var textures = this.getTextures(data.imgName, data.x, data.y, data.width, data.height);
        
        data.zOrder = this.zOrder;
        this.updateEmitterSave(data);
        emitter = this._emitters[name] = new PIXI.particles.Emitter(
            this._container, textures, window.$particles[name]
        );
        emitter.emit = data.emit;
        emitter._updateId = null;
        emitter._follow = data.follow;
        emitter._dataName = name;
        emitter._elapsed = Date.now();
        // Bind the _particleUpdate method to the emitter and send in this generator object
        emitter._update = this._particleUpdate.bind(emitter, this);
        
        // Check if emit start is needed
        if (data.emit) { emitter._update(); }
        // Check if any emitter load functions were set
        if (Array.isArray(loaders)) {
            for (var i = 0; i < loaders.length; i += 1) {
                if (typeof loaders[i] === "function") { loaders[i](); }
            }
        }
    };
    
    /**
     * Removes an emitter (or all emitters/container if name is omitted).
     * @param {Number} id The $gameMap event id to remove save data from
     * @param {String} name The particle data file name
     */
    JavaHut.Particles.Generator.prototype.removeEmitter = function (id, name) {
        if (JavaHut._omitted(name) || name === "") {
            // Destroy the generator
            this.updateEmitterSave({id : id});
            this.destroy();
        } else if (this._emitters[name]) {
            if (this.isDeferredEmitter(name)) {
                this.addEmitterLoad(name, this.removeEmitter.bind(this, id, name));
                return true;
            }
            // Destroy a specific emitter
            this.updateEmitterSave({id : id, name : name}, true);
            this._destroyEmitters(this._emitters[name]);
            this._emitters[name] = null;
        }
    };
    
    /**
     * Starts emitting for a particle emitter.
     * @param {String} name The emitter name
     * @param {Number} follow The follow id
     */
    JavaHut.Particles.Generator.prototype.emit = function (name, follow) {
        if (this.isDead()) { return false; }
        if (JavaHut._omitted(name) || name === "") {
            // Iterate through the emitters
            JavaHut._forEach(this._emitters, function (e, k) {
                this.emit(k, follow);
            }.bind(this));
            return true;
        }
        
        var emitter = this._emitters[name];
        if (!emitter) { return false; }
        if (this.isDeferredEmitter(name)) {
            this.addEmitterLoad(name, this.emit.bind(this, name, follow));
            return true;
        }
        
        var emitting = emitter.emit;
        emitter._elapsed = Date.now();
        emitter._follow = follow;
        emitter.emit = true;
        this.updateEmitterSave({
                id : this.evtId,
                name : name,
                emit : true,
                follow : follow
            });
        if (!emitting) { emitter._update(); }
    };
    
    /**
     * Stops emitting for a particle emitter.
     * @param {String} name The emitter name
     */
    JavaHut.Particles.Generator.prototype.stopEmit = function (name) {
        if (this.isDead()) { return false; }
        if (JavaHut._omitted(name) || name === "") {
            // Iterate through the emitters
            JavaHut._forEach(this._emitters, function (e, k) {
                this.stopEmit(k);
            }.bind(this));
            return true;
        }
        
        var emitter = this._emitters[name];
        if (!emitter) { return false; }
        if (this.isDeferredEmitter(name)) {
            this.addEmitterLoad(name, this.stopEmit.bind(this, name));
            return true;
        }
        
        this._emitters[name].emit = false;
        this.updateEmitterSave({
                id : this.evtId,
                name : name,
                emit : false
            });
    };
    
    /**
     * Updates a particle emitter's data.
     * @param {String} name The particle data file name
     * @param {String} key The key property to update
     * @param {Mixed} value The value of the key to update to
     * @param {Mixed} value2 The second value to update if needed
     */
    JavaHut.Particles.Generator.prototype.updateEmitterData = function (name, key, value, value2) {
        if (this.isDead()) { return false; }
        if (JavaHut._omitted(name) || name === "") {
            // Iterate through the emitters
            JavaHut._forEach(this._emitters, function (e, k) {
                this.updateEmitterData(k, key, value, value2);
            }.bind(this));
            return true;
        }
        
        var emitter = this._emitters[name];
        if (!emitter) { return false; }
        if (this.isDeferredEmitter(name)) {
            this.addEmitterLoad(name, this.updateEmitterData.bind(this, name, key, value, value2));
            return true;
        }
        
        var key2 = null;
        var saveData = {
            name : name,
            genData : [name, key, value, value2]
        };
        
        switch (key) {
            case "alpha" :
                key = "startAlpha";
                key2 = "endAlpha";
                value = (value === null) ? emitter.startAlpha : Number(value);
                value2 = (value2 === null) ? emitter.endAlpha : Number(value2);
                break;
            case "blend" :
                key = "particleBlendMode";
                value = PIXI.particles.ParticleUtils.getBlendMode(value);
                break;
            case "color" :
                key = "startColor";
                key2 = "endColor";
                value = (value === null) ? emitter.startColor
                    : PIXI.particles.ParticleUtils.hexToRGB("#" + value.replace("#", ""));
                value2 = (value2 === null) ? emitter.endColor
                    : PIXI.particles.ParticleUtils.hexToRGB("#" + value2.replace("#", ""));
                break;
            case "frequency" :
                value = Number(value);
                break;
            case "lifetime" :
                key = "minLifetime";
                key2 = "maxLifetime";
                value = (value === null) ? emitter.minLifetime : Number(value);
                value2 = (value2 === null) ? emitter.maxLifetime : Number(value2);
                break;
            case "position" :
                value = (value === null) ? emitter.spawnPos.x : Number(value);
                value2 = (value2 === null) ? emitter.spawnPos.y : Number(value2);
                emitter.updateSpawnPos(value, value2);
                this.updateEmitterSave(saveData);
                return true;
            case "rotation" :
                value = Number(value);
                emitter.rotate(value);
                this.updateEmitterSave(saveData);
                return true;
            case "scale" :
                key = "startScale";
                key2 = "endScale";
                value = (value === null) ? emitter.startScale : Number(value);
                value2 = (value2 === null) ? emitter.endScale : Number(value2);
                break;
            case "speed" :
                key = "startSpeed";
                key2 = "endSpeed";
                value = (value === null) ? emitter.startSpeed : Number(value);
                value2 = (value2 === null) ? emitter.endSpeed : Number(value2);
                break;
            default:
                return false;
        }
        
        if (key in emitter) {
            this.updateEmitterSave(saveData);
            emitter[key] = value;
        }
        if (key2 !== null && key2 in emitter) { emitter[key2] = value2; }
    };
    
    /**
     * Saves the emitter data to a save event. If data.name is omitted, all save
     * data for the emitter will be reset.
     * @param {Object} data The data for the emitter. See JavaHut.Particles.Generator
     * @param {Bool} destroy If the saved data should be destroyed for an emitter
     */
    JavaHut.Particles.Generator.prototype.updateEmitterSave = function (data, destroy) {
        var evt = this.getSaveEvent();
        if (!evt) { return false; }
        var name = data.name;
        if (JavaHut._omitted(name)) {
            // Remove all data if data.name is omitted
            evt._particleData = null;
            return true;
        }
        
        // Check if new particle data is needed
        if (!evt._particleData) { evt._particleData = {}; }
        if (!evt._particleData[name]) { evt._particleData[name] = {}; }
        if (!evt._particleData[name].genData) { evt._particleData[name].genData = {}; }
        if (destroy) {
            evt._particleData[name] = null;
        } else {
            if (!JavaHut._omitted(data.zOrder)) { evt._particleData[name].zOrder = data.zOrder; }
            if (!JavaHut._omitted(data.imgName)) { evt._particleData[name].imgName = data.imgName; }
            if (!JavaHut._omitted(data.emit)) { evt._particleData[name].emit = data.emit; }
            if (!JavaHut._omitted(data.follow)) { evt._particleData[name].follow = data.follow; }
            if (!JavaHut._omitted(data.x)) { evt._particleData[name].x = data.x; }
            if (!JavaHut._omitted(data.y)) { evt._particleData[name].y = data.y; }
            if (!JavaHut._omitted(data.width)) { evt._particleData[name].width = data.width; }
            if (!JavaHut._omitted(data.height)) { evt._particleData[name].height = data.height; }
            if (!JavaHut._omitted(data.genData)) {
                // Save the data array using the key in the array
                evt._particleData[name].genData[data.genData[1]] = data.genData;
            }
        }
    };
    
    /**
     * Get the textures for an image. If width/height or x/y are set, it will get the sprite
     * textures from the spritesheet, otherwise the image itself is used as the texture.
     * If x or y is null, all sprites in the spritesheet will be used at random.
     * @param {String} imgName The image name used in the JavaHut.Particles.bitmaps array
     * @param {Mixed} x Can be null or the x position of the sprite
     * @param {Mixed} y Can be null or the y position of the sprite
     * @param {Number} width Can be null or the width of the spritesheet
     * @param {Number} height Can be null or the height of the spritesheet
     * @returns {Array} The array of PIXI.Texture(s)
     */
    JavaHut.Particles.Generator.prototype.getTextures = function (imgName, x, y, width, height) {
        var texture = this.getBaseTexture(imgName);
        var textures = [];
        var size = this.getSpriteSize();
        var spriteW = size[0];
        var spriteH = size[1];
        var xAmount = 0;
        var yAmount = 0;
        var j = 0;
        var frame = null;
        var spriteSet = function () {
            frame = new PIXI.Rectangle(x, y, spriteW, spriteH);
            textures.push(new PIXI.Texture(texture, frame));
        };
        
        if (width !== null && height !== null) {
            if (x === null || y === null) {
                // Get all textures in the spritesheet
                xAmount = width / spriteW;
                yAmount = height / spriteH;
                for (var i = 0; i < yAmount; i += 1) {
                    for (j = 0; j < xAmount; j += 1) {
                        frame = new PIXI.Rectangle(
                            spriteW * j, spriteH * i, spriteW, spriteH
                        );
                        textures.push(new PIXI.Texture(texture, frame));
                    }
                }
            } else {
                // Get specific texture in the spritesheet
                spriteSet();
            }
        } else if (x !== null && y !== null) {
            // Get sprite from x and y values
            spriteSet();
        } else {
            textures.push(new PIXI.Texture(texture));
        }
        
        return textures;
    };
    
    /**
     * Moves the particle container to an event's position.
     * @param {PIXI.particle.Emitter} emitter The particle emitter
     * @param {Number} follow The follow id
     */
    JavaHut.Particles.Generator.prototype.followEvent = function (emitter, follow) {
        if (this.isDead()) { return false; }
        var tw = $gameMap.tileWidth();
        var ctr = this._container;
        var evt = null;
        var screen = false;
        
        if (follow !== null && follow > 0) {
            // Follow is a custom event number
            evt = this.getCustomFollowEvent(follow);
        } else {
            switch (follow) {
                case 0 : // Player event
                    evt = $gamePlayer;
                    break;
                case -1 : // Mouse event
                    ctr.x = JavaHut.Particles.mouseX;
                    ctr.y = JavaHut.Particles.mouseY;
                    return true;
                case -2 : // Screen event
                    screen = true;
                    evt = this.getScreenFollowEvent();
                    break;
                default:
                    // Original event
                    evt = this.getDefaultFollowEvent();
            }
        }
        
        if (evt) {
            ctr.x = (evt._realX - $gameMap._displayX) * tw;
            ctr.y = (evt._realY - $gameMap._displayY) * tw;
        }
        if (screen) {
            // Keep the emitter attached to the camera. Since the container
            // is attached to the map, we invert the x and y of ctr to get the
            // position of the camera = (evt._realX + $gameMap._displayX) * tw
            emitter.resetPositionTracking();
            emitter.updateOwnerPos(-ctr.x, -ctr.y);
        }
    };
    
    /**
     * Destroys the emitters and container in the generator.
     */
    JavaHut.Particles.Generator.prototype.destroy = function () {
        this._destroyEmitters();
        this._destroyContainer();
    };
    
    /**
     * Destroys any emitters for the generator.
     * @param {PIXI.particles.Emitter} emitter The emitter object
     * @returns {Bool} False if no emitters to destroy
     */
    JavaHut.Particles.Generator.prototype._destroyEmitters = function (emitter) {
        if (!this._emitters || emitter === null) { return false; }
        
        if (emitter !== undefined) {
            emitter.destroy();
            emitter.emit = false;
            cancelAnimationFrame(emitter._updateId);
            emitter = null;
        } else {
            // Iterate through the emitters and run them through this method
            JavaHut._forEach(this._emitters, function (e, k) {
                this._destroyEmitters(e);
                this._emitters[k] = null;
            }.bind(this));
            return true;
        }
    };
    
    /**
     * Destroys this._container, releasing it from the parent container, and sets
     * the generator's status to dead.
     */
    JavaHut.Particles.Generator.prototype._destroyContainer = function () {
        this._status = 0;
        this.release();
        this._container = null;
    };
    
    /**
     * Sets the particle container into one of the parent containers.
     */
    JavaHut.Particles.Generator.prototype._particleContain = function () {
        // Check if container is already added
        if (SceneManager.generatorCtrA.children.indexOf(this._container) >= 0
                || SceneManager.generatorCtrB.children.indexOf(this._container) >= 0
                || SceneManager.generatorCtrC.children.indexOf(this._container) >= 0) {
            return true;
        }
        
        if (this.zOrder === "below") {
            this._particleZRef = "generatorCtrA";
        } else if (this.zOrder === "above") {
            this._particleZRef = "generatorCtrB";
        } else {
            this._particleZRef = "generatorCtrC";
        }
        SceneManager[this._particleZRef].addChild(this._container);
    };
    
    /**
     * Updates a particle emitter. Bind to the PIXI.particles.Emitter.
     * @param {JavaHut.Particles.Generator} generator The generator that has the emitter
     */
    JavaHut.Particles.Generator.prototype._particleUpdate = function (generator) {
        if (generator.isDead()) { return false; }
        var now = null;
        if (this.emit || this.particleCount > 0) {
            // Continue update only if emitting or has particles
            this._updateId = requestAnimationFrame(this._update);
        } else {
            this._updateId = null;
            // Update saved emit data
            generator.updateEmitterSave({
                    id : generator.evtId,
                    name : this._dataName,
                    emit : this.emit
                });
        }
        // Make sure the parent is still available
        if (generator.validateParent()) {
            now = Date.now();
            // The emitter requires the elapsed
            // number of seconds since the last update
            this.update((now - this._elapsed) * 0.001);
            this._elapsed = now;
            // Keep the container on the event
            generator.followEvent(this, this._follow);
        }
    };
    
}(JavaHut.Particles));