//=============================================================================
// SA_AnotherRouteSearch.js
// ----------------------------------------------------------------------------
// Created by seea
// License: MIT License  https://opensource.org/licenses/mit-license.php
//
// Original code copyright:
//  ©2015 KADOKAWA CORPORATION./YOJI OJIMA
//
// Plugin author:
//  Contact: https://nekono.org
//
// Free of charge.
// Allow any encryption or digital rights management.
// The method of copyright notation is left to the user.
//=============================================================================
// History
// 18.0 2018/03/13 Initial release.
// 19.0 2019/01/02 Fixed a problem using illegal route buffer after moving by location move command.
// 19.1 2019/01/03 Improved accuracy of route search. Improved compatibility with HalfMove.js.
// 20.0 2020/10/31 Prevent behavior that goes back and forth on the same route.
// 20.1 2020/12/06 Improved compatibility with HalfMove.js. Fixed to follow the instruction HM8MoveDisable tags.

//=============================================================================
// 更新履歴
// 18.0 2018/03/13 初版
// 19.0 2019/01/02 場所移動コマンドにより移動した後、不正な経路バッファを使用する不具合を修正。
// 19.1 2019/01/03 経路探索の精度を改善。半歩移動プラグインとの互換性を向上。
// 20.0 2020/10/31 同じ経路を行ったり来たりする挙動を防止する設定を追加。（設定によりON/OFF）
// 20.1 2020/12/06 半歩移動プラグインとの互換性を向上。イベントの8方向移動禁止の指定に従うように修正。

/*:
 * ==============================================================================
 * @plugindesc v20.1 SA Another route search
 * @author seea
 * @require rpg_core.js v1.6.1 or 1.6.2, HalfMove.js 1.16.1
 *
 * @help
 * SA Another route search -- 別の経路探索システム
 *
 * 必須 - rpg_core.js v1.6.1 または 1.6.2, HalfMove.js 1.16.1
 * 推奨 - SA_CoreSpeedImprovement.js 18.1
 *
 * RPGツクールMV標準の経路探索とは別の経路探索を導入するプラグインです。
 * MV標準の経路探索を置き換えるものです。
 * 半歩移動プラグインと組み合わせての利用に限りサポートしています。
 *
 * 8方向移動専用です。8方向移動を利用しない場合は、本プラグインは不要です。
 *
 * コアスクリプト速度改善(SA_CoreSpeedImprovement.js)と組み合わせることで
 * マウスを使って移動するときのMVの速度が大きく改善されます。
 *
 * ★プラグインの順序に注意!!
 *
 * ＿人人人人人人＿
 * ＞　競合注意　＜
 * ￣Y^Y^Y^Y^Y^Y￣
 *
 *   プラグイン管理では、
 *
 *     SA_AnotherRouteSearch   ON    v20.1 SA Another route search
 *     HalfMove                ON    半歩移動プラグイン
 *
 *   の順に登録してください。
 *
 *   二つのプラグインの間に何か別のプラグインが入っていても問題ないですが
 *   順序を逆にすると、SA_AnotherRouteSearch は正しく動作しません。
 *   プラグインが意図した通りに動かないときは、プラグイン管理の画面の
 *   登録順序を間違えていないかを確認してください。
 *
 * ★半歩移動プラグインの設定に注意!
 *   半歩移動プラグインの「8方向移動」が true になっているか確認してください。
 *
 *
 * 【補足】
 * ・本プラグインの内容がコアスクリプトに適用されることを望みます。
 *   むしろ最初からどうしてこう作らなかった？　という疑問が込められています。
 * ・v19.1以降、別物になってきたのでコアスクリプトには入れない方が良いかも。
 *
 * 【今後の改善予定】
 * ・マウスを使った移動の補助としては、本プラグインは十分な性能があります。
 *   課題は長距離の移動に findDirectionTo が使われた場合です。
 *   （デフォルトでは、長距離移動に使われることはありません）
 * ・キャラクターを引っ掛ける狙いで作られた特定の迷路地形に弱いです。
 * ・RPGツクールMZ への対応状況が不明です。MZでは動作確認していません。
 *   （MZは所持していますので、そのうちに）
 *
 *
 * パラメータの解説
 *
 *   Stop if unreachable dest
 *     【自動停止A】（ON/OFF）
 *       ON：目的地にたどり着けないと分かったときは自動移動を停止します。
 *           自動停止Bよりも早い段階で判断します。
 *      OFF：何もしません。
 *
 *     「座標」を判断の基準として、目的地までの経路が見つからないと分かった時に
 *     自動移動を打ち切ります。別の経路の可能性は考慮しません。
 *
 *   Stop if unreachable route
 *     【自動停止B】（ON/OFF）
 *       ON：目的地にたどり着けず右往左往する状況になると自動移動を停止します。
 *      OFF：何もしません。
 *
 *     「経路」を判断の基準として、同じ経路を使った自動移動を繰り返した時に
 *     自動移動を打ち切ります。別の経路の可能性を試すことがありますので、
 *     自動停止Aよりも判断が遅れることがあります。
 *
 *     キャラクターが何度も行ったり来たりする現象を防ぐには、
 *     この設定を ON にしてください。
 *
 *   Max search count
 *       最大探索回数（目安）  数値を増やすと正しい道順を見つけやすいですが、
 *     PCの負荷が高くなります。
 *       数値を減らすと誤った道順を選ぶ可能性が高くなりますが、負荷は軽いです。
 *
 *     減らしすぎに注意してください。とても軽くなりますが、ちょっとした建物にも
 *   引っ掛かるようになります。
 *     無限ループ防止のため、引っ掛かると自動移動を諦めますので、プレイヤーから
 *   タップしたのにその場所まで移動してくれないと言われかねません……。
 *
 *     増やしすぎも注意してください。かなり長距離の移動もルートを見つけますが、
 *   PCのスペックが高くても、しばらく固まることがあります。
 *
 *     いくつが良いか一概に言えないため、サポートする動作環境（PCのスペック）を
 *     考慮して設定します。
 *       既定値：2000
 *
 *   目安（プラグイン制作者の場合）
 *     300 …… 超軽量だが、まるで使えない。建物に角にあっさり引っ掛かる。
 *     500 …… 袋小路に入り込むなど無駄な動きをするが意外と目的地に着ける。
 *    1000 …… 軽い。小さな建物なら裏に回り込める。でも無駄な動きはする。
 *    2000 …… そこそこ軽い。無駄な動きが減り、やや賢い感じ。
 *    3000 …… 無駄な動きがほぼ見られなくなる。
 *    5000 …… 正確。道順が見つけられない場合にちょっと重い感じもする。
 *   10000 …… やばい。プレイヤー本人も簡単に見つけられない道順を見つけてくる。
 *   20000 …… 入り込めるルートが存在しないかのテストに使えるレベル。重いけど。
 *
 *   Logging level
 *       ログ出力量を指定します。通常は 3 または 4 を設定します。
 *     5 はログ出力の分だけで重くなります。プラグイン開発者用の設定値です。
 *     ゲームの制作者は 4 以下を設定します。
 *     4 を設定すると、ログ出力で重くならない範囲で情報を出力します。
 *     それも不要なら 3 を設定します。
 *     ゲームを公開するときは 3 以下を設定するのが良いかもしれません。
 *
 * @param Stop if unreachable dest
 * @desc 【自動停止A】目的地の座標が到達不可能と分かったときは自動移動を停止します。（ON/OFF）  既定値：OFF
 * @default false
 * @type boolean
 *
 * @param Stop if unreachable route
 * @desc 【自動停止B】目的地に到達できず右往左往しそうなときは自動移動を停止します。（ON/OFF）  既定値：ON
 * @default true
 * @type boolean
 *
 * @param Max search count
 * @desc 最大探索回数（目安）  数値を増やすと正しい道順を見つけやすいですが、PCの負荷が高くなります。  既定値：2000
 * @default 2000
 * @type number
 *
 * @param Logging level
 * @desc ログ出力量を指定します  0:No Log 1:Fatal 2:+Error 3:+Warning 4:+Info 5:+Debug
 * @default 4
 * @type number
 */

var Imported = Imported || {};
Imported.SA_AnotherRouteSearch = true;

//-----------------------------------------------------------------------------
(function() {
'use strict';

	// Get parameters
	var params = PluginManager.parameters('SA_AnotherRouteSearch');
	const paramStopIfUnreachableDest = (params['Stop if unreachable dest'] === 'true');
	const paramStopIfUnreachableRoute = (params['Stop if unreachable route'] === 'true');
	const paramMaxSearchCount = Number(params['Max search count'] || 2000);
	const paramLoggingLevel = Number(params['Logging level'] || 4);
	const LDEBUG = paramLoggingLevel >= 5 ? true : false;
	const LINFO  = paramLoggingLevel >= 4 ? true : false;
	const LWARN  = paramLoggingLevel >= 3 ? true : false;
	const LERROR = paramLoggingLevel >= 2 ? true : false;
	const LFATAL = paramLoggingLevel >= 1 ? true : false;

	// Log parameters
	if (LDEBUG) {
		console.log('== SA_AnotherRouteSearch ==');
		console.log('paramStopIfUnreachableDest = ' + paramStopIfUnreachableDest);
		console.log('paramStopIfUnreachableRoute = ' + paramStopIfUnreachableRoute);
		console.log('paramMaxSearchCount = ' + paramMaxSearchCount);
		console.log('paramLoggingLevel = ' + paramLoggingLevel);
	}

	//-----------------------------------------------------------------------------
	// Game_Temp
	//
	/* 放っておいても問題ない気もする。
	var _Game_Temp_clearDestination = Game_Temp.prototype.clearDestination;
	Game_Temp.prototype.clearDestination = function() {
		_Game_Temp_clearDestination.apply(this, arguments);
		if (LDEBUG) {
			console.log('SA_AnotherRouteSearch: clearDestination');
		}
		$gamePlayer.clearActiveRouteBuffer();
	};
	*/

	//-----------------------------------------------------------------------------
	// Game_Character
	//

	var _Game_Character_initMembers = Game_Character.prototype.initMembers;
	Game_Character.prototype.initMembers = function() {
		_Game_Character_initMembers.apply(this, arguments);
		this._activeRouteBuffer = null;
		this._activeRouteGoalX = -1;
		this._activeRouteGoalY = -1;
		this._unreachableDestCoordList = [];
		this._unreachableRouteList = [];
	};

	/**
	 * 経路バッファをクリアする
	 */
	Game_Character.prototype.clearActiveRouteBuffer = function() {
		if (this._activeRouteBuffer) {
			if (this._activeRouteBuffer.length > 0) {
				this._activeRouteBuffer.length = 0; // 配列の内容をクリアする
				if (LDEBUG) {
					console.log('SA_AnotherRouteSearch: _activeRouteBuffer cleared');
				}
			}
		}
	};

	/**
	 * 到達不可能な目的地の座標のリストをクリアする
	 */
	Game_Character.prototype.clearUnreachableDestCoordList = function() {
		if (this._unreachableDestCoordList) {
			if (this._unreachableDestCoordList.length > 0) {
				this._unreachableDestCoordList.length = 0; // 配列の内容をクリアする
				if (LDEBUG) {
					console.log('SA_AnotherRouteSearch: _unreachableDestCoordList cleared');
				}
			}
		}
	};

	/**
	 * 目的地に到達不可能な経路のリストをクリアする
	 */
	Game_Character.prototype.clearUnreachableRouteList = function() {
		if (this._unreachableRouteList) {
			if (this._unreachableRouteList.length > 0) {
				this._unreachableRouteList.length = 0; // 配列の内容をクリアする
				if (LDEBUG) {
					console.log('SA_AnotherRouteSearch: _unreachableRouteList cleared');
				}
			}
		}
	};

	/**
	 * 到達不可能な座標のリストに座標を一つ追加する
	 */
	Game_Character.prototype.addUnreachableDestCoord = function(coord_x, coord_y) {
		if (this._unreachableDestCoordList && paramStopIfUnreachableDest) {
			var coord_str = coord_x + ',' + coord_y;
			this._unreachableDestCoordList.push(coord_str);
			if (LDEBUG) {
				console.log('SA_AnotherRouteSearch: Unreachable destination coord: ' + coord_str);
				console.log(this._unreachableDestCoordList);
			}
		}
	};

	/**
	 * 目的地に到達不可能な経路のリストに経路を一つ追加する
	 */
	Game_Character.prototype.addUnreachableRoute = function(route) {
		if (this._unreachableRouteList && paramStopIfUnreachableRoute) {
			this._unreachableRouteList.push(route);
			if (LDEBUG) {
				console.log('SA_AnotherRouteSearch: Unreachable route: ' + route);
			}
		}
	};

	/**
	 * 到達不可能な座標のリストに含まれる場合は true を返す
	 */
	Game_Character.prototype.containsUnreachableDestCoord = function(coord_x, coord_y) {
		if (this._unreachableDestCoordList) {
			var coord_str = coord_x + ',' + coord_y;
			return this._unreachableDestCoordList.includes(coord_str);
		}
		return false;
	};

	/**
	 * 目的地に到達不可能な経路のリストに含まれる場合は true を返す
	 */
	Game_Character.prototype.containsUnreachableRoute = function(route) {
		if (this._unreachableRouteList) {
			return this._unreachableRouteList.includes(route);
		}
		return false;
	};

	/**
	 * 次の移動方向（斜め移動を含む方向）を検索して返す  ★半歩移動(8方向移動ON)対応
	 *
	 * ■注意点
	 *   半歩移動プラグインとの組み合わせを想定していますが、プラグイン管理の順序に制限があります。
	 *   本プラグイン(SA_AnotherRouteSearch.js) → 半歩移動プラグイン(HalfMove.js) の順に
	 *   登録してください。逆に登録すると、ルート検索に失敗します。
	 *
	 * @param {number} goalX - X-coord of the goal
	 * @param {number} goalY - Y-coord of the goal
	 * @return {number} Return direction to
	 * @override 完全に上書きします。注意!
	 */
	Game_Character.prototype.findDirectionTo = function(goalX, goalY) {
		if (LDEBUG) {
			console.log('SA_AnotherRouteSearch: findDirectionTo start');
			console.log('SA_AnotherRouteSearch: start:(' + this.x + ',' + this.y + ') - goal:(' + goalX + ',' + goalY + ')');
		}

		// 経路バッファを調べる
		if (typeof this._activeRouteBuffer === 'undefined' || this._activeRouteBuffer == null) {
			// initialize
			this._activeRouteBuffer = [];
			if (LDEBUG) {
				console.log('SA_AnotherRouteSearch: _activeRouteBuffer initialized');
			}
		} else {
			// if initialized
			if (this._activeRouteBuffer.length > 0) {
				// 経路バッファに何か残っている場合
				if (LDEBUG) {
					console.log('SA_AnotherRouteSearch: _activeRouteBuffer size:' + this._activeRouteBuffer.length);
				}
				// 何らかの理由でゴールが変化している場合は経路バッファを破棄する
				// （移動中に新たに別の座標をタップされた場合など）
				if (this._activeRouteGoalX !== goalX || this._activeRouteGoalY !== goalY) {
					if (LDEBUG) {
						console.log('SA_AnotherRouteSearch: Goal updated');
					}
					this.clearActiveRouteBuffer();
					this.clearUnreachableDestCoordList();
					this.clearUnreachableRouteList();
				} else {
					// 経路バッファを使用して、次の行き先を決める
					var nextRoute = this._activeRouteBuffer.shift();
					while (this._activeRouteBuffer.length > 0 && nextRoute.x === this.x && nextRoute.y === this.y) {
						nextRoute = this._activeRouteBuffer.shift();
					}
					if (nextRoute.x === this.x && nextRoute.y === this.y) {
						// 行き先が見つからなかった
						if (LDEBUG) {
							console.log('SA_AnotherRouteSearch: findDirectionTo return 0 (No route)');
						}
						return 0;
					} else {
						if (LDEBUG) {
							console.log('SA_AnotherRouteSearch: Next route:(' + nextRoute.x + ',' + nextRoute.y + ')');
						}
						var sx = $gameMap.deltaX(nextRoute.x, this.x);
						var sy = $gameMap.deltaY(nextRoute.y, this.y);
						var direction = this.getDirectionFromDelta(sx, sy);
						if (direction > 0) {
							if (LDEBUG) {
								console.log('SA_AnotherRouteSearch: findDirectionTo #4 return ' + direction + ' (Buffer)');
							}
							return direction;
						}
					}
				}
			}
		}

		this._activeRouteGoalX = goalX;
		this._activeRouteGoalY = goalY;

		// Improved compatibility with HalfMove.js
		this._searchHighPrecision = true;
		// 半歩移動プラグインでは、探索の深さ(searchLimit)制限を変更することで負荷を調整していますが
		// 本プラグインの探索では探索の深さを無制限で探索するため、searchLimitの設定は無視されます。

		//var searchLimit = this.searchLimit(); // searchLimitを廃止
		var mapWidth = $gameMap.width();
		var nodeList = [];
		var openList = [];
		var closedList = [];
		var start = {};
		var best = start;
		var searchCount = 0; // 探索回数（推定される計算量に近い値）
		var searchStartDate = new Date();

		if (this.x === goalX && this.y === goalY) {
			if (LDEBUG) {
				console.log('SA_AnotherRouteSearch: findDirectionTo return 0 (same coord)');
			}
			return 0;
		}

		// 移動後の座標を求めるための変換テーブル
		//               (index) 0  1  2  3  4  5  6  7  8  9
		const xDirectionTable = [0, 4, 2, 6, 4, 0, 6, 4, 8, 6];
		const yDirectionTable = [0, 2, 2, 2, 4, 0, 6, 8, 8, 8];

		start.parent = null;
		start.x = this.x;
		start.y = this.y;
		start.g = 0;
		start.f = $gameMap.distance8(start.x, start.y, goalX, goalY);
		if (LDEBUG) {
			console.log('SA_AnotherRouteSearch: findDirectionTo start.f = ' + start.f);
		}
		nodeList.push(start);
		openList.push(start.y * 2 * mapWidth + start.x); // 半歩移動対応

		// 斜め移動を許可するか（半歩移動プラグイン(HalfMove.js)の情報を読み取る）
		var allowDiagonalRoute = this.canDiagonalMove();
		if (LINFO) {
			console.log('SA_AnotherRouteSearch: allowDiagonalRoute: ' + allowDiagonalRoute);
		}

		var isArrived = false; // true if arrived at destination
		var searchTerminated = false; // true if search terminated
		while (nodeList.length > 0) {
			var bestIndex = 0;
			for (var i = 0; i < nodeList.length; i++) {
				if (nodeList[i].f < nodeList[bestIndex].f) {
					bestIndex = i;
				}
			}

			var current = nodeList[bestIndex];
			var x1 = current.x;
			var y1 = current.y;
			var pos1 = y1 * mapWidth * 2 + x1;
			var g1 = current.g;

			nodeList.splice(bestIndex, 1);
			openList.splice(openList.indexOf(pos1), 1);
			closedList.push(pos1);

			if (current.x === goalX && current.y === goalY) {
				best = current;
				isArrived = true;
				if (LDEBUG) {
					console.log('SA_AnotherRouteSearch: Can reach specified destination.');
				}
				break;
			}

			// searchLimitを廃止
			//if (g1 >= searchLimit) {
			//	continue;
			//}
			if (searchCount > paramMaxSearchCount) {
				searchTerminated = true;
				if (LDEBUG) {
					console.log('SA_AnotherRouteSearch: Route search has been terminated. (Max count: ' + paramMaxSearchCount + ')');
				}
				break;
			}

			for (var k = 1; k < 10; k++) {
				if (k === 5) {
					continue; // 何もしない
				}
				if (!allowDiagonalRoute) {
					if ((k % 2) !== 0) {
						// 斜め移動なしの場合
						continue; // 何もしない
					}
				}

				// 移動後の座標を求める
				var x_direction = xDirectionTable[k];
				var y_direction = yDirectionTable[k];
				//
				// 半歩移動プラグイン(HalfMove.js)と併用する前提で
				// roundXWithDirection(), roundYWithDirection() の注意点:
				//   第2引数は2,4,6,8のいずれかの値でなくてはならない。0を渡してはいけない。
				//   東に移動（X軸に変更がない場合）でも、東移動をあらわす「6」を渡す。
				var x2 = $gameMap.roundXWithDirection(x1, x_direction);
				var y2 = $gameMap.roundYWithDirection(y1, y_direction);
				var pos2 = y2 * mapWidth * 2 + x2;

				if (closedList.contains(pos2)) {
					continue;
				}
				// 斜め移動かを判定する、少々トリッキーなif文（仕様通りに動作する）
				// 丁寧に書くなら、条件式を並べたほうが良い。
				if (x_direction === y_direction) {
					// 斜め移動ではない
					if (!this.canPass(x1, y1, k)) {
						continue;
					}
				} else {
					// 斜め移動
					if (!this.canPassDiagonally(x1, y1, x_direction, y_direction)) {
						continue;
					}
				}

				searchCount++;
				// ■四方向移動と斜め移動
				// ゲーム画面上では、斜め移動の歩く速度を下げない方が良い（ゲーマーのテクニックとしたほうが良い）ため、
				// 実際の移動コストは、四方向移動と斜め移動は特に変わらないこと（同じ速度で移動）を推定していますが
				// ルート選択において四方向移動と斜め移動のどちらでも良い場合は、四方向移動を選択するようにします。
				// この調整を行わないと、特定の地形で斜め移動を駆使した謎の挙動をすることがあります。
				// 斜め移動のコストを増やすことで、斜め移動が最適でない場合は四方向移動を選ぶように仕向けます。
				var g2 = g1 + ((x_direction === y_direction) ? 1 : 1.5); // 斜め移動のコストを増やす(1.5倍)
				var index2 = openList.indexOf(pos2);

				if (index2 < 0 || g2 < nodeList[index2].g) {
					var neighbor; // 隣接ノード
					if (index2 >= 0) {
						neighbor = nodeList[index2];
					} else {
						neighbor = {};
						nodeList.push(neighbor);
						openList.push(pos2);
					}
					neighbor.parent = current;
					neighbor.x = x2;
					neighbor.y = y2;
					neighbor.g = g2;
					neighbor.f = g2 + $gameMap.distance8(x2, y2, goalX, goalY);
					if (!best || neighbor.f - neighbor.g < best.f - best.g) {
						best = neighbor;
					}
				}
			}
		}

		var searchEndDate = new Date();
		var searchElapsedTime = searchEndDate - searchStartDate;
		if (LINFO) {
			var result_text = isArrived ? ' [Arrived]' : ' [Near]';
			if (searchTerminated) {
				result_text = ' [Limit]';
			}
			// [Arrived] : 目的地への道順が判明した。確実にたどり着ける。
			// [Near]    : 目的地への道順は分からないので目的地の近くに移動する。
			// [Limit]   : 探索回数を使い切ったので本当は分からないが、一番合ってそうな道順を使って移動する。
			console.log('SA_AnotherRouteSearch: Searched ' + searchCount + ' times, elapsed ' + searchElapsedTime + ' msec. ( ' + Math.round(searchCount / searchElapsedTime) + ' times / msec)' + result_text);
		}
		var node = best;
		var pathsAry = []; // 経路
		while (node.parent && node.parent !== start) {
			var path = {};
			path.x = node.x;
			path.y = node.y;
			pathsAry.push(path);
			node = node.parent;
		}
		if (node) {
			pathsAry.push(node);
		}
		// 経路は goal から辿っているので、逆順にする。
		var pathsAryRev = pathsAry.reverse();
		var pathStrAry = [];
		pathsAryRev.forEach(function(path) {
			pathStrAry.push('(' + path.x + ',' + path.y + ')');
		});
		var pathsText = pathStrAry.join('-');
		if (LDEBUG) {
			console.log('SA_AnotherRouteSearch: ' + pathsText);
		}
		this._activeRouteBuffer = pathsAryRev;
		if (isArrived) {
			this.clearUnreachableDestCoordList();
			this.clearUnreachableRouteList();
		} else {
			// 目的地に到達できない場合
			if (paramStopIfUnreachableDest) {
				if (this.containsUnreachableDestCoord(goalX, goalY)) {
					this.terminateAutoMove('A');
					return 0;
				}
			}
			if (paramStopIfUnreachableRoute) {
				if (this.containsUnreachableRoute(pathsText)) {
					this.terminateAutoMove('B');
					return 0;
				}
			}
			// 到達不可能を記録する
			this.addUnreachableDestCoord(goalX, goalY);
			this.addUnreachableRoute(pathsText);
		}

		var deltaX1 = $gameMap.deltaX(node.x, start.x);
		var deltaY1 = $gameMap.deltaY(node.y, start.y);
		if (LDEBUG) {
			console.log('SA_AnotherRouteSearch: deltaX1=' + deltaX1 + ', deltaY1=' + deltaY1);
		}
		var direction = this.getDirectionFromDelta(deltaX1, deltaY1);
		if (direction > 0) {
			if (LDEBUG) {
				console.log('SA_AnotherRouteSearch: findDirectionTo #1 return ' + direction);
			}
			return direction;
		}

		var deltaX2 = this.deltaXFrom(goalX);
		var deltaY2 = this.deltaYFrom(goalY);
		// deltaX2, deltaY2 は goalX, goalY からの移動方向なので、符号を反転させる。
		direction = this.getDirectionFromDelta(-deltaX2, -deltaY2);
		if (direction > 0) {
			if (LDEBUG) {
				console.log('SA_AnotherRouteSearch: findDirectionTo #2 return ' + direction);
			}
			return direction;
		}
		if (LDEBUG) {
			console.log('SA_AnotherRouteSearch: findDirectionTo #3 return 0 (No route)');
		}
		return 0;
	};

	/**
	 * 目的地に到達できないため自動移動を終了する
	 */
	Game_Character.prototype.terminateAutoMove = function(type) {
		if (LINFO) {
			console.log('SA_AnotherRouteSearch: terminateAutoMove (' + type + ')');
		}
	};

	/**
	 * Deltaの値を元に、方向を返す（汎用）
	 *
	 * @param {number} deltaX
	 * @param {number} deltaY
	 * @return {number} Return direction to
	 */
	Game_Character.prototype.getDirectionFromDelta = function(deltaX, deltaY) {
		const directionTable = [
			[7, 8, 9],
			[4, 0, 6],
			[1, 2, 3]
		];
		var snX = Math.sign(deltaX); // -1 or 0 or 1
		var snY = Math.sign(deltaY); // -1 or 0 or 1
		return directionTable[1 + snY][1 + snX];
	};

	//-----------------------------------------------------------------------------
	// Game_Player
	//

	var _Game_Player_reserveTransfer = Game_Player.prototype.reserveTransfer;
	Game_Player.prototype.reserveTransfer = function(mapId, x, y, d, fadeType) {
		_Game_Player_reserveTransfer.apply(this, arguments); // オリジナルの処理
		if (LDEBUG) {
			console.log('SA_AnotherRouteSearch: Game_Player.prototype.reserveTransfer');
		}
		// プレイヤーキャラクターが移動した場合、経路バッファをクリアする。
		this.clearActiveRouteBuffer();
		// 到達不可能な目的地の座標のリストをクリアする。
		this.clearUnreachableDestCoordList();
		// 到達不可能な経路のリストをクリアする。
		this.clearUnreachableRouteList();
	};

	//-----------------------------------------------------------------------------
	// Game_Map
	//

	/**
	 * 2点間の正確な距離を返す  ★半歩移動(8方向移動ON)対応
	 * 歩数は返しません。
	 *
	 * @param {number} x1
	 * @param {number} y1
	 * @param {number} x2
	 * @param {number} y2
	 * @return {number} Return distance
	 */
	Game_Map.prototype.distance8 = function(x1, y1, x2, y2) {
		var a = this.deltaX(x1, x2);
		var b = this.deltaY(y1, y2);
		return Math.sqrt(a * a + b * b);
	};

})();
