// --------------------------------------------------------------------------
// minRPG_DamageEffect.js
// --------------------------------------------------------------------------
/*:
 * @plugindesc ダメージポップアップの動的な表示／非表示、会心・痛恨時の演出を変更するプラグイン
 * @author 地球のみんな（クレジット記載不要）
 *
 * @help
 * 【更新履歴】
 * 2016/03/17 初版公開（merusia, Ver.0.1）
 * 2016/07/12 ポップアップ表示のON/OFFを、ゲーム内スイッチで指定し、
 *            ゲーム中に動的に変更できるように対応 （merusia, Ver.0.1.1）
 * 2017/04/19 ヘルプを修正、パラメータのデフォルト値や名前を
 *            わかりやすいものに変更              （merusia, Ver.1.0）
 * 
 * 
 * 【プラグインコマンド】
 * このプラグインにはプラグインコマンドはありません。
 *
 * 【概要】
 * ダメージエフェクトを自分好みに変えられます。
 * 例えば、
 * ・クリティカルヒット時、会心・痛恨時で別々の演出に変えたり
 * ・ダメージポップアップ（敵味方グラフィックに出るフォント）を
 *   ゲーム内スイッチで、表示／非表示を切り替えたり
 * できます。
 *
 * 【詳細（上記でわかりにくいところの説明など）】
 * 
 * ■クリティカル演出について
 * ・パラメータ「Actor_CriticalAnimationID」に戦闘アニメーションのIDを入れると、
 *   会心時だけ、スキル固有アニメーションの後に、
 *   追加で、別のアニメーションを流すことができます。
 * ・パラメータ「Enemy_CriticalAnimationID」に戦闘アニメーションのIDを入れると、
 *   痛恨時だけ、追加で、別のアニメーションを流すことができます。
 *   ※ただし、敵の痛恨アニメーションはサイドビューのみ有効です。
 *     通常のスキルと違い、フロントビューでは音声も再生されないのでご注意を。
 * ・パラメータ「CtricalDamagePopUp_FlashEffectFrameNum」にフレーム数を入れると、
 *   会心・痛恨時ポップアップダメージのフラッシュ時間を変えることができます。
 *   通常ダメージ時は60フレーム（１秒）ですが、
 *   会心時だけ120フレームにするなどして、余韻を残せます。
 * ・パラメータ「CriticalDamagePopUp_FlashEffectColor」に色配列を入れると、
 *   会心・痛恨時ポップアップダメージの色を変更することができます。
 *   デフォルトは真っ赤（怖い…）ですが、
 *   青、緑、黄色なんかにすると、ちょっと違った印象になるかもしれません。
 *   
 * ■ダメージポップアップの表示／非表示について
 * ・パラメータ「HP_DamagePopUp_ON」を0にすると、
 *  対象グラフィック中心に表示される、HPダメージポップアップ
 *  （HP回復・自動再生値を含む）が表示されなくなります。
 * ・「MP_DamagePopUp_ON」を0にすると、
 *  対象グラフィック中心に表示される、MPのダメージポップアップ
 *  （MP回復・自動再生値を含む）が表示されなくなります。
 * ・パラメータ「Miss_PopUp_ON」を0にすると、
 *  「Miss」のポップアップが表示されなくなります。
 * ・なお、上記のパラメータに指定したスイッチ番号を入れることで、
 *   ゲーム中にON/OFFすることも出来ます（Ver.0.1.1～）。
 *  ※ダメージポップアップを表示したい場合は、
 *   ずっとONになるスイッチ番号を割り当ててください。
 * 
 * 
 * 【ダメージポップアップの問題点】
 * ・ダメージポップアップは、ターン終了後のステート効果「HP自動回復〇%」も
 *   実際の回復量が数値で表示されるため、
 *   その数値から、ボスの最大HPが推測出来ていまいます。
 *   →　ドラクエなど、ボスの最大HPがわからない状態で、
 *      純粋に戦闘を楽しみたい場合に使ってください。
 * ・また、エルシャダイみたく、極力数字を表示せず、
 *   感覚重視っぽい戦闘にしたい時などにも使えます。
 *　　→　ただ、バトルログのダメージ数は、このプラグインでは非表示にできません。
 *　　　 バトルログのHPダメージの数値だけを見せたくない場合は、
 *      「用語」タブから、
 *　　　「敵／味方HPダメージ」の"%1に %2 のダメージ！"を、 "%1にダメージ！" や
 *       "" に変えるといいと思います。
 *　　　 MPや各種能力の増減値も見せたくない場合は、
 *      「敵／味方ポイント減少」の"%1の%2が %3 減少！"を、"%1の%2が減少！" や
 *       "" に変えるといいと思います。
 *　　→　状態異常のメッセージすら表示したくなければ、
 *       jsフォルダにデフォルトで入っている
 *       サスケさんのSimpleMsgSideView.jsプラグインを使うか、
 *      「用語」タブの関連メッセージを全て消してください（"" にする）。
 *
 * 【競合について】
 * ※rpg_sprite.jsのSprite_Damage.prototype.setupを上書きしています。
 *   戦闘系プラグインとの競合に注意してください。
 *
 * 【著作権フリーについて】
 * このプラグインは「地球の共有物（パブリックドメイン）」です。
 * 　　・無償・有償問わず、あらゆる作品に使用でき、
 *      また自由に改変・改良・二次配布できます。
 * 　　・著作表示のわずらわしさを回避するため、著作権は放棄します。
 *      事後報告、クレジット記載も不要です。
 * 　　・もちろんクローズドに使っていただいてもOKです。
 *      是非、自分好みに改造してお使いください。
 * 
 *【謝礼】
 * kotonoha (http://ktnh5108.pw/)さんの記事を参考にしました。感謝！
 * 
 *【連作先】
 * merusaiaが雛形を作成しました。
 * バグ報告などはtwitter（https://twitter.com/merusaia）までお気軽に。
 *
 * 
 * @param HP_DamagePopUp_ON
 * @desc HPポップアップダメージ（自動再生値を含む）をグラフィック中心に表示するかのスイッチ番号（デフォルトは0で表示無し）
 * @default 0
 *
 * @param MP_DamagePopUp_ON
 * @desc MPポップアップダメージ（自動再生値を含む）をグラフィック中心に表示するかのスイッチ番号（デフォルトは0で表示無し）
 * @default 0
 *
 * @param Miss_PopUp_ON
 * @desc 「Miss」ポップアップをグラフィック中心に表示するかのスイッチ番号（デフォルトは0で表示無し）
 * @default 0
 *
 * @param Actor_CriticalAnimationID
 * @desc 味方の会心時に流すアニメーションID（フロントビュー・サイドビュー戦闘共通）。デフォルトは26(刺突/必殺技1)
 * @default 26
 * 
 * @param Enemy_CriticalAnimationID
 * @desc 敵の痛恨時に追加で流すアニメーションID（※サイドビュー戦闘のみ動作）。デフォルトは27(刺突/必殺技2)
 * @default 27
 * 
 * @param CtricalDamagePopUp_FlashEffectFrameNum
 * @desc 会心・痛恨時ポップアップダメージをフラッシュさせるフレーム数（デフォルト=60。0でフラッシュ無し）
 * @default 60
 *
 * @param CriticalDamagePopUp_FlashEffectColor
 * @desc 会心・痛恨時ポップアップダメージをフラッシュさせる色(「赤,緑,青,不透明度」の順。デフォルト「255, 0, 0, 160」)
 * @default 255, 0, 0, 160
 * 
*/

(function() {
  // パラメーターを宣言します。
  var parameters = PluginManager.parameters('minRPG_DamageEffect'); // ファイル名を変更したらここの変更も忘れないようにね。
	var HP_DamagePopUp_ON = Number(parameters['HP_DamagePopUp_ON']);
	var MP_DamagePopUp_ON = Number(parameters['MP_DamagePopUp_ON']);
	var Miss_PopUp_ON = Number(parameters['Miss_PopUp_ON']);
	var Actor_CriticalAnimationID = Number(parameters['Actor_CriticalAnimationID']);
	var Enemy_CriticalAnimationID = Number(parameters['Enemy_CriticalAnimationID']);
	var CriticalDamagePopUp_FlashEffectFrameNum = Number(parameters['CtricalDamagePopUp_FlashEffectFrameNumm']);
	var CriticalDamagePopUp_FlashEffectColor = String(parameters['CriticalDamagePopUp_FlashEffectColor']);

    // プロトタイプを上書きするよ。競合に注意してね。
    // 変更前: Miss、HP、MPダメージのポップアップを管理してるよ。クリティカル演出は、敵も味方も、ポップアップが赤にフラッシュするだけだよ。
    // Sprite_Damage.prototype.setup = function(target) {
    //     var result = target.result();
    //     if (result.missed || result.evaded) {
    //         this.createMiss();
    //     } else if (result.hpAffected) {
    //         this.createDigits(0, result.hpDamage);
    //     } else if (target.isAlive() && result.mpDamage !== 0) {
    //         this.createDigits(2, result.mpDamage);
    //     }
    //     if (result.critical) {
    //         this.setupCriticalEffect();
    //     }
    // };
	// 変更後:  Miss、HP、MPダメージのポップアップを消したり、敵や味方で違うアニメーションIDを再生したり、クリティカルダメージをフラッシュさせる色を変えたり、フラッシュさせなかったりできるよ。
    Sprite_Damage.prototype.setup = function(target) {
          var result = target.result();
          if (result.missed || result.evaded) {                          // 結果がミスや回避だったら（回避の場合も「miss」と出る模倣）、
              if(Miss_PopUp_ON == null || Miss_PopUp_ON !== 0) {         // 指定パラメータが未定義か、0でなかったら
                if($gameSwitches.value(Miss_PopUp_ON) === true){         // スイッチの値がONの時だけ（スイッチ番号は-1でも10万でもfalse）
                  this.createMiss();                                     // missのポップアップ文字を生成
                }
              }
          } else if (result.hpAffected) {                                // HPに変化があれば（-100とか回復もあり）
              if(HP_DamagePopUp_ON == null || HP_DamagePopUp_ON !== 0) { // 指定パラメータが未定義か、0でなかったら
                if($gameSwitches.value(HP_DamagePopUp_ON) === true){     // スイッチの値がONの時だけ（スイッチ番号は-1でも10万でもfalse）
                  this.createDigits(0, result.hpDamage);                 // HPのダメージポップアップ文字を生成
                }
              }
          } else if (target.isAlive() && result.mpDamage !== 0) {        // ターゲットが生きていて、かつMPダメージが0じゃなかったら（-100とか回復もあり）
              if(MP_DamagePopUp_ON == null || MP_DamagePopUp_ON !== 0) { // 指定パラメータが未定義か、0でなかったら
                if($gameSwitches.value(MP_DamagePopUp_ON) === true){     // スイッチの値がONの時だけ（スイッチ番号は-1でも10万でもfalse）
                  this.createDigits(2, result.mpDamage);                 // MPのダメージポップアップ文字を生成
                }
              }
          }
          if (result.critical) {                          // クリティカルなら
              // アニメーションIDが1以上なら、ターゲット（被攻撃者）が敵と味方で、違うアニメーションIDを再生するよ。
              var _isBattlerEnemy = target instanceof Game_Enemy;
              if(_isBattlerEnemy) {                       // ターゲットが敵なので、会心エフェクト
                  if (Actor_CriticalAnimationID != null && Actor_CriticalAnimationID >= 1) {
                      target.startAnimation(Actor_CriticalAnimationID, false, 0);
                  }
              }else{                                      // ターゲットが味方なので、痛恨エフェクト
                  if (Enemy_CriticalAnimationID != null && Enemy_CriticalAnimationID >= 1) {
                      target.startAnimation(Enemy_CriticalAnimationID, false, 0);
                  }
              }
              // クリティカル時のダメージポップアップのフラッシュフレームが1未満なら、フラッシュさせるかよ。処理速度アップ対策だよ。
              if (CriticalDamagePopUp_FlashEffectFrameNum != null && CriticalDamagePopUp_FlashEffectFrameNum >= 1) {
                  // フラッシュカラーを設定するよ。カラーが未定義だったら、デフォルトの赤にするよ。
                  var _criticalFlashColor = [255, 0, 0, 160]; // メモ: javascriptでは配列は参照渡しなので、メソッドまたがると値が消えてしまいます。右のように直接代入（参照渡し）すると、Sprite.prototype.setBlendColorでAgument must be an arrayのエラーになります。 this._flashColor = CtiricalDamagePopUp_FlashEffectColor;
                  if(CriticalDamagePopUp_FlashEffectColor != null){ // undefinedでもnullでもなかったら、
                        // 文字列（"a, b, c, d"）を、数値配列_array = [a, b, c, d]に変換します。メモ: 一行で書きたいなら、var _array = eval('[' + _string + ']')を使っても出来ますが、低速で非推奨とのことで、めんどくさいですが自前でつくっています。
                        var _array = []; // 要素数0の配列を定義
                        var _items = CriticalDamagePopUp_FlashEffectColor.split(","); // 「,」で分割した文字列配列を作成
                        for( var i=0 ; i<_items.length ; i++ ){ // それぞれの値を数値として格納
                            _array.push(_items[i]);
                        }
                        // 要素数が4個じゃなければ、デフォルトの赤にするよ。
                        if(_array.length != 4){
                             _criticalFlashColor = [255, 0, 0, 160];
                        }else{
                            _criticalFlashColor = _array.concat(); // メモ: javascriptでは配列の値渡しをするなら、concat()が便利です。Array.concatは配列に要素を追加した配列を返すものですが、要素を追加しなければ 元々の配列のコピーが返されますので、それを利用しています。 
                        }
                  }
                  //フラッシュカラーを代入するよ。
                  this._flashColor = _criticalFlashColor.concat(); // 配列の値渡しはconcat()
                  
                  // フラッシュ時間を変えるよ。
                  this._flashDuration = CriticalDamagePopUp_FlashEffectFrameNum;
                  // メモ: デフォルトのクリティカルエフェクト（フラッシュ）は呼び出してないよ。 
                  // this.setupCriticalEffect();
                  // 参考: デフォルトのクリティカルエフェクトの中身はこんな感じだよ。フラッシュ色を赤、時間60フレームに設定。
                  // Sprite_Damage.prototype.setupCriticalEffect = function() {
                  //   this._flashColor = [255, 0, 0, 160];
                  //   this._flashDuration = 60;
                  // };
              }
          }
	};

})();