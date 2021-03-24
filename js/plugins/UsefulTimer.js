//=============================================================================
// UsefulTimer.js
//=============================================================================

/*:
 * @plugindesc
 * v1.1.1 タイマー、ストップウォッチ、現在時刻、現在年月日を
 * 使用することができるようになります。
 * 
 * @author にぎりめし
 * 
 * 
 * @param ●カウントダウンタイマー
 * @desc 
 * @default
 * 
 * @param Timer X
 * @desc タイマーのX座標を指定します。
 * 既定：Graphics.width - this.bitmap.width
 * @default Graphics.width - this.bitmap.width
 * 
 * @param Timer Y
 * @desc タイマーのY座標を指定します。
 * 既定：0
 * @default 0
 * 
 * @param Timer Width
 * @desc タイマーの横幅を指定します。
 * 既定：96
 * @default 96
 * 
 * @param Timer Height
 * @desc タイマーの縦幅を指定します。
 * 既定：48
 * @default 48
 * 
 * @param Timer Font Name
 * @desc フォントを変更します。詳細はヘルプをご覧下さい。
 * 既定：'GameFont'
 * @default 'GameFont'
 * 
 * @param Timer Font Size
 * @desc フォントのサイズを指定します。
 * 既定：32
 * @default 32
 * 
 * @param Timer Font Italic
 * @desc フォントをイタリック（斜体）にしますか？
 * はい：true    いいえ：false    既定：false
 * @default false
 * 
 * @param Timer Text Opacity
 * @desc 文字の不透明度を指定します。
 * 最小：0　　最大：255　　既定：255
 * @default 255
 * 
 * @param Timer Text Color
 * @desc 文字の色を16進数で指定します。
 * 既定：#FFFFFF
 * @default #FFFFFF
 * 
 * @param Timer Outline Width
 * @desc 文字の縁の太さを指定します。
 * 既定：4
 * @default 4
 * 
 * @param Timer Outline Color
 * @desc 文字の縁の色（RGB）と不透明度（alpha）を指定します。
 * 最小：0,0,0,0　最大：255,255,255,1　既定：0,0,0,0.5
 * @default 0,0,0,0.5
 * 
 * @param Timer Hour
 * @desc 時（h）を表示しますか？
 * はい：true    いいえ：false    既定：false
 * @default false
 *
 * @param Timer Hour ZeroPad
 * @desc 時（h）のゼロパディングする桁数を設定します。
 * 最小：1　　最大：∞　　既定：2
 * @default 2
 * 
 * @param Timer Min
 * @desc 分（m）を表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param Timer Min ZeroPad
 * @desc 分（m）のゼロパディングする桁数を設定します。
 * 最小：1　　最大：∞　　既定：2
 * @default 2
 * 
 * @param Timer Sec
 * @desc 秒（s）を表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param Timer Sec ZeroPad
 * @desc 秒（s）のゼロパディングする桁数を設定します。
 * 最小：1　　最大：∞　　既定：2
 * @default 2
 * 
 * @param Timer MSec
 * @desc ミリ秒（ms）を表示しますか？
 * はい：true    いいえ：false    既定：false
 * @default false
 * 
 * @param Timer MSec Digits
 * @desc ミリ秒（ms）の表示する桁数を指定します。
 * 最小：1　　最大：3　　既定：2
 * @default 2
 * 
 * @param Timer More than 60Sec
 * @desc 60以上の秒を表示しますか？
 * はい：true    いいえ：false    既定：false
 * @default false
 * 
 * @param Timer More than 60Min
 * @desc 60以上の分を表示しますか？
 * はい：true    いいえ：false    既定：false
 * @default false
 * 
 * @param Timer Work inBattle
 * @desc 戦闘中も実行しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param Timer Show inBattle
 * @desc 戦闘中も表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param
 * @desc 
 * @default
 * 
 * @param ●ストップウォッチ
 * @desc 
 * @default
 * 
 * @param StWatch X
 * @desc ストップウォッチのX座標を指定します。
 * 既定：Graphics.width - this.bitmap.width
 * @default Graphics.width - this.bitmap.width
 * 
 * @param StWatch Y
 * @desc ストップウォッチのY座標を指定します。
 * 既定：48
 * @default 48
 * 
 * @param StWatch Width
 * @desc タイマーの横幅を指定します。
 * 既定：96
 * @default 96
 * 
 * @param StWatch Height
 * @desc タイマーの縦幅を指定します。
 * 既定：48
 * @default 48
 * 
 * @param StWatch Font Name
 * @desc フォントを変更します。詳細はヘルプをご覧下さい。
 * 既定：'GameFont'
 * @default 'GameFont'
 * 
 * @param StWatch Font Size
 * @desc フォントのサイズを指定します。
 * 既定：32
 * @default 32
 * 
 * @param StWatch Font Italic
 * @desc フォントをイタリック（斜体）にしますか？
 * はい：true    いいえ：false    既定：false
 * @default false
 * 
 * @param StWatch Text Opacity
 * @desc 文字の不透明度を指定します。
 * 最小：0　　最大：255　　既定：255
 * @default 255
 * 
 * @param StWatch Text Color
 * @desc 文字の色を指定します。
 * 既定：#FFFFFF
 * @default #FFFFFF
 * 
 * @param StWatch Outline Width
 * @desc 文字の縁の太さを指定します。
 * 既定：4
 * @default 4
 * 
 * @param StWatch Outline Color
 * @desc 文字の縁の色（RGB）と不透明度（alpha）を指定します。
 * 最小：0,0,0,0　最大：255,255,255,1　既定：0,0,0,0.5
 * @default 0,0,0,0.5
 * 
 * @param StWatch Hours
 * @desc 時（h）を表示しますか？
 * はい：true    いいえ：false    既定：false
 * @default false
 * 
 * @param StWatch Hours ZeroPad
 * @desc 時（h）のゼロパディングする桁数を設定します。
 * 最小：1　　最大：∞　　既定：2
 * @default 2
 * 
 * @param StWatch Min
 * @desc 分（m）を表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param StWatch Min ZeroPad
 * @desc 分（m）のゼロパディングする桁数を設定します。
 * 最小：1　　最大：∞　　既定：2
 * @default 2
 * 
 * @param StWatch Sec
 * @desc 秒（s）を表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param StWatch Sec ZeroPad
 * @desc 秒（s）のゼロパディングする桁数を設定します。
 * 最小：1　　最大：∞　　既定：2
 * @default 2
 * 
 * @param StWatch MSec
 * @desc ミリ秒（ms）を表示しますか？
 * はい：true    いいえ：false    既定：false
 * @default false
 * 
 * @param StWatch MSec Digits
 * @desc ミリ秒（ms）の表示する桁数を指定します。
 * 最小：1　　最大：3　　既定：2
 * @default 2
 * 
 * @param StWatch More than 60Sec
 * @desc 60以上の秒を表示しますか？
 * はい：true    いいえ：false    既定：false
 * @default false
 * 
 * @param StWatch More than 60Min
 * @desc 60以上の分を表示しますか？
 * はい：true    いいえ：false    既定：false
 * @default false
 * 
 * @param StWatch Work inBattle
 * @desc 戦闘中も実行しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param StWatch Show inBattle
 * @desc 戦闘中も表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param
 * @desc 
 * @default
 * 
 * @param ●現在時刻
 * @desc 
 * @default
 * 
 * @param Clock X
 * @desc 時刻のX座標を指定します。
 * 既定：0
 * @default 0
 * 
 * @param Clock Y
 * @desc 時刻のY座標を指定します。
 * 既定：0
 * @default 0
 * 
 * @param Clock Width
 * @desc 時刻の横幅を指定します。
 * 既定：224
 * @default 224
 * 
 * @param Clock Height
 * @desc 時刻の縦幅を指定します。
 * 既定：48
 * @default 48
 * 
 * @param Clock Font Name
 * @desc フォントを変更します。詳細はヘルプをご覧下さい。
 * 既定：'GameFont'
 * @default 'GameFont'
 * 
 * @param Clock Font Size
 * @desc フォントのサイズを指定します。
 * 既定：48
 * @default 48
 * 
 * @param Clock Font Italic
 * @desc フォントをイタリック（斜体）にしますか？
 * はい：true    いいえ：false    既定：false
 * @default false
 * 
 * @param Clock Text Opacity
 * @desc 文字の不透明度を指定します。
 * 最小：0　　最大：255　　既定：255
 * @default 255
 * 
 * @param Clock Text Color
 * @desc 文字の色を指定します。
 * 既定：#FFFFFF
 * @default #FFFFFF
 * 
 * @param Clock Outline Width
 * @desc 文字の縁の太さを指定します。
 * 既定：4
 * @default 4
 * 
 * @param Clock Outline Color
 * @desc 文字の縁の色（RGB）と不透明度（alpha）を指定します。
 * 最小：0,0,0,0　最大：255,255,255,1　既定：0,0,0,0.5
 * @default 0,0,0,0.5
 * 
 * @param Clock Hours
 * @desc 時（h）を表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param Clock Hours ZeroPad
 * @desc 時（h）のゼロパディングを有効にしますか？
 * はい：true　　いいえ：false　　既定：false
 * @default false
 * 
 * @param Clock Min
 * @desc 分（m）を表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param Clock Min ZeroPad
 * @desc 分（m）ゼロパディングを有効にしますか？
 * はい：true　　いいえ：false　　既定：true
 * @default true
 * 
 * @param Clock Sec
 * @desc 秒（s）を表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param Clock Sec ZeroPad
 * @desc 秒（s）のゼロパディングを有効にしますか？
 * はい：true　　いいえ：false　　既定：true
 * @default true
 * 
 * @param Clock MSec
 * @desc ミリ秒（ms）を表示しますか？
 * はい：true    いいえ：false    既定：false
 * @default false
 * 
 * @param Clock MSec Digits
 * @desc ミリ秒（ms）の表示する桁数を指定します。
 * 最小：1　　最大：3　　既定：2
 * @default 2
 * 
 * @param Clock Work inBattle
 * @desc 戦闘中も実行しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param Clock Show inBattle
 * @desc 戦闘中も表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param
 * @desc 
 * @default
 * 
 * @param ●現在年月日
 * @desc 
 * @default
 * 
 * @param Date X
 * @desc 年月日のX座標を指定します。
 * 既定：0
 * @default 0
 * 
 * @param Date Y
 * @desc 年月日のY座標を指定します。
 * 既定：48
 * @default 48
 * 
 * @param Date Width
 * @desc 年月日の横幅を指定します。
 * 既定：224
 * @default 224
 * 
 * @param Date Height
 * @desc 年月日の縦幅を指定します。
 * 既定：48
 * @default 48
 * 
 * @param Date Font Name
 * @desc フォントを変更します。詳細はヘルプをご覧下さい。
 * 既定：'GameFont'
 * @default 'GameFont'
 * 
 * @param Date Font Size
 * @desc フォントのサイズを指定します。
 * 既定：32
 * @default 32
 * 
 * @param Date Font Italic
 * @desc フォントをイタリック（斜体）にしますか？
 * はい：true    いいえ：false    既定：false
 * @default false
 * 
 * @param Date Text Opacity
 * @desc 文字の不透明度を指定します。
 * 最小：0　　最大：255　　既定：255
 * @default 255
 * 
 * @param Date Text Color
 * @desc 文字の色を指定します。
 * 既定：#FFFFFF
 * @default #FFFFFF
 * 
 * @param Date Outline Width
 * @desc 文字の縁の太さを指定します。
 * 既定：4
 * @default 4
 * 
 * @param Date Outline Color
 * @desc 文字の縁の色（RGB）と不透明度（alpha）を指定します。
 * 最小：0,0,0,0　最大：255,255,255,1　既定：0,0,0,0.5
 * @default 0,0,0,0.5
 * 
 * @param Date ZeroPad
 * @desc 月、日のゼロパディングを有効にしますか？
 * はい：true    いいえ：false    既定：false
 * @default false
 * 
 * @param Date Year
 * @desc 年（year）を表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param Date Month
 * @desc 月（month）を表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param Date Date
 * @desc 日（date）を表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param Date Day
 * @desc 曜日（day）を表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param Date Day Sun
 * @desc 日曜日の表記を決めます。
 * 既定：日
 * @default 日
 * 
 * @param Date Day Mon
 * @desc 月曜日の表記を決めます。
 * 既定：月
 * @default 月
 * 
 * @param Date Day Tue
 * @desc 火曜日の表記を決めます。
 * 既定：火
 * @default 火
 * 
 * @param Date Day Wed
 * @desc 水曜日の表記を決めます。
 * 既定：水
 * @default 水
 * 
 * @param Date Day Thu
 * @desc 木曜日の表記を決めます。
 * 既定：木
 * @default 木
 * 
 * @param Date Day Fri
 * @desc 金曜日の表記を決めます。
 * 既定：金
 * @default 金
 * 
 * @param Date Day Sat
 * @desc 土曜日の表記を決めます。
 * 既定：土
 * @default 土
 * 
 * @param Date Work inBattle
 * @desc 戦闘中も実行しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @param Date Show inBattle
 * @desc 戦闘中も表示しますか？
 * はい：true    いいえ：false    既定：true
 * @default true
 * 
 * @help
 * 
 * ●更新履歴
 * 
 * ◎v1.1.1
 *   ○戦闘中の実行および表示の設定機能を
 *     実行・表示それぞれ独立して設定出来るように変更
 * 
 * ◎v1.1.0
 *   ○戦闘中の実行および表示の設定機能を追加
 * 
 * 
 * 
 * ●プラグインコマンドで実行できる機能
 * 
 * ◎カウントダウンタイマー
 * ◎ストップウォッチ
 * ◎現在時刻
 * ◎現在年月日
 * 
 *   ○始動（非表示で始動可）
 * 　○一時停止
 * 　○再開
 * 　○終了
 *   ○任意の時間を代入・加算
 * 　○任意の変数へ時間を記憶（一度・永久）
 * 　○表示・非表示（フェード処理可）
 * 　○位置の変更
 *   ○横幅・縦幅の変更
 * 　○フォントの変更
 * 　○フォントサイズの変更
 * 　○フォントイタリックの変更
 * 　○文字の透明度の変更
 * 　○文字の色の変更
 * 　○文字の縁の太さの変更
 * 　○文字の縁の色と透明度の変更
 * 　○時、年の表示・非表示
 * 　○分、月の表示・非表示
 * 　○秒、日の表示・非表示
 * 　○ミリ秒、曜日の表示・非表示
 *   ○60以上の分、秒の表示・非表示
 * 　○月、日のゼロパディング
 * 　○戦闘中の実行・一時停止
 * 　○戦闘中の表示・非表示
 * 　○一部・全体リセット
 * 
 * 
 * 
 * ●フォント変更について
 * 
 * まず、fontsフォルダにフォントファイルを入れて、
 * gamefont.cssに＠font-face（＠は半角）を追加してください。
 * ========================================================================
 * ＠font-face {
 *     font-family: GameFont;
 *     src: url("mplus-1m-regular.ttf");
 *  }
 * 
 * ＠font-face {                       ←
 *     font-family: ○○○○;          ←このような4行を書き加えてから
 *     src: url("△△△△.□□□");    ←ツクールで'○○○○'を指定します。
 * }                                   ←
 * 
 * ＠font-face {                       ←全角文字やスペースが含まれる場合は
 *     font-family: 'XXX XXX';         ←クォーテーションマークで囲みます。
 *     src: url("YYYY.ZZZ");           ←（囲まなくても、一応認識されます。）
 * }                                   ←
 * ========================================================================
 * フォント名○○○○は好きな名前を付けても大丈夫ですが、
 * 全角文字やスペースが含まれている場合はCSSの決まりに則り、
 * クォーテーションで囲んでおくと良いです。
 * ファイル名YYYYは、拡張子ZZZを含めて厳密に指定します。
 * 
 * 書き終えたら、gamefont.cssの文字コードを「UTF-8」で上書き保存します。
 * 文字コードを間違えると、文字化けして認識されません。
 * 
 * 次に、プラグインでフォント名を指定します。
 * 指定する方法は2通りあります。
 * 
 * 1つ目は、フォント名をそのまま指定する方法です。
 * この際、フォント名をクォーテーションマークで囲みます。（例…'GameFont'）
 * 
 * 2つ目は、フォント名を変数UsefulTimer.fontName[x]で指定する方法です。
 * gamefont.cssに記入されているフォント名は、
 * 上から順番に配列変数に保存されています。
 * 
 * 上記の例で説明しますと、
 * 
 * UsefulTimer.fontName[0] … GameFont
 * UsefulTimer.fontName[1] … ○○○○
 * UsefulTimer.fontName[2] … 'XXX XXX'
 * 
 * といった具合です。[0]から割り当てられているので注意してください。
 * なお、変数指定する場合は、クォーテーションマークで囲んではいけません。
 * 
 * 最後に、プラグインコマンドについてですが、
 * 半角スペースが含まれるフォント名を指定する場合は、
 * 2つ目の方法を利用してください。
 * （仕様により、半角スペースで分割され、正しく認識されないため。）
 * 
 * 
 * 
 * ●ゼロパディングについて
 * 
 * ゼロパディングとは、決まった桁数を表示する際、
 * 足りない桁に0を加えて隙間を埋めることです。
 * 例えば、9時5分の時・分の十の位をゼロパディングすると、09時05分となります。
 * 
 * 
 * 
 * ●16進数カラーコードについて
 * 
 * 文字の色は16進数カラーコードで指定します。
 * 
 * #RRGGBB
 * 
 * RRは赤、GGは緑、BBは青を表します。
 * 数値の範囲は#000000～#FFFFFFFで、
 * 数値が小さいほど暗く、数値が大きいほど明るい色合いになります。
 * 
 * 
 * 
 * ●RGBaカラーコードについて
 * 
 * 文字の縁の色はRGBaカラーコードで指定します。
 * 
 * R,G,B,a
 * 
 * Rは赤、Gは緑、Bは青、aは不透明度を表します。
 * RGBの範囲はそれぞれ0～255で、数値が小さいほど暗く、
 * 数値が大きいほど明るい色合いになります。
 * aの範囲は0～1(例…0.2)で、数値が小さいほど透明になり、
 * 数値が大きいほど不透明になります。
 * ※数値はそれぞれカンマで区切り、ピッタリくっつけて書いて下さい！
 * 
 * 
 * 
 * ●時間記述の基本
 * 
 * フレーム数で処理していますので、秒や分に対応させる必要があります。
 * 
 * 1秒＝60フレームなので、90秒処理する場合は「90*60」と書きます。
 * 1分＝60秒なので、10分処理する場合は「10*60*60」と書きます。
 * 1時間＝60分なので、2時間処理する場合は「2*60*60*60」と書きます。
 * 1日＝24時間なので、3日処理する場合は「3*24*60*60*60」と書きます。
 * 2分50秒の場合は、「2*60*60+50*60」と書きます。
 * ※数値はピッタリくっつけて書いて下さい！
 * 
 * 
 * 
 * ●60以上の分・秒を表示する機能の用途
 * 
 * MVのデフォルトのタイマーで90分カウントダウンする場合、
 * 30分と表示されてしまいます。これは、分を60で剰余しているためです。
 * この現象を避けたい場合は、時を表示するか、
 * 60以上の分を表示する機能をtrueにしてください。
 * 
 * 
 * 
 * ●プラグインコマンドの書き方
 * 
 * ◎カウントダウンタイマー … timer
 * ◎ストップウォッチ       … stopwatch
 * ◎現在時刻               … clock
 * ◎現在年月日             … date
 * 
 *   ○始動-----------------------------------------------
 *   　・表示状態で始動
 *      usefultimer timer start フレーム数
 *      usefultimer stopwatch start
 *      usefultimer clock start
 *      usefultimer date start
 * 
 *     例）usefultimer timer start 38*60*60+5*60
 * 　　    38分+5秒動作するタイマーを始動します。
 * 
 * 
 *   　・非表示状態で始動
 *      usefultimer timer start フレーム数 hide
 *      usefultimer stopwatch start hide
 *      usefultimer clock start hide
 *      usefultimer date start hide
 * 
 *     例）usefultimer stopwatch start hide
 * 　　    ストップウォッチを非表示で始動します。
 * 
 * 
 *   ○一時停止-------------------------------------------
 *      usefultimer timer pause
 *      usefultimer stopwatch pause
 *      usefultimer clock pause
 *      usefultimer date pause
 * 
 * 
 * 　○再開-----------------------------------------------
 *      usefultimer timer resume
 *      usefultimer stopwatch resume
 *      usefultimer clock resume
 *      usefultimer date resume
 * 
 * 
 * 　○終了-----------------------------------------------
 *      usefultimer timer stop
 *      usefultimer stopwatch stop
 *      usefultimer clock stop
 *      usefultimer date stop
 * 
 * 
 *   ○任意の時間を代入・加算-----------------------------
 *   　・代入
 *      usefultimer timer change フレーム数
 *      usefultimer stopwatch change フレーム数
 * 
 *     例）usefultimer stopwatch change 25*60
 * 　　    25秒目からカウントするように変更します。
 * 
 * 
 *   　・加算（負数指定で減算）
 *      usefultimer timer change フレーム数 add
 *      usefultimer stopwatch change フレーム数 add
 * 
 *     例）usefultimer timer change -(30*60) add
 * 　　    残り時間が30秒減少します。
 * 
 *         usefultimer stopwatch change 30*60 add
 * 　　    カウントが30秒増加します。
 * 
 * 
 *   ○任意の変数へ時間を記憶------------------------------------------
 *   　・変数の指定（記憶をする準備）
 *      usefultimer timer setvar 変数ID 変数ID 変数ID 変数ID 変数ID
 *      usefultimer stopwatch setvar 変数ID 変数ID 変数ID 変数ID 変数ID
 *       変数に代入される数値（左から順）
 *      時（hours）分（minutes）秒（seconds）ミリ秒（ms）総フレーム数
 * 
 *      usefultimer clock setvar 変数ID 変数ID 変数ID 変数ID
 *       変数に代入される数値（左から順）
 *      時（hours）分（minutes）秒（seconds）ミリ秒（ms）
 * 
 *      usefultimer date setvar 変数ID 変数ID 変数ID 変数ID
 *       変数に代入される数値（左から順）
 *      年（year）月（month）日（date）曜日（day）
 *       曜日の数値に対応する曜日
 *      0…日  1…月  2…火  3…水  4…木  5…金  6…土
 * 
 *      変数IDに 0以下 を指定すると、その数値は記憶されません。
 * 
 *     例）usefultimer timer setvar 0 41 42 43 44
 * 　　    時…記憶しません　分…変数0041　秒…変数0042
 * 　　    ミリ秒…変数0043　総フレーム数…変数0044
 * 
 * 
 *     ・変数に記憶（一度）
 *      usefultimer timer save once
 *      usefultimer stopwatch save once
 *      usefultimer clock save once
 *      usefultimer date save once
 * 
 * 
 *     ・変数に記憶（永久）
 *      usefultimer timer save endless
 *      usefultimer stopwatch save endless
 *      usefultimer clock save endless
 *      usefultimer date save endless
 * 
 * 
 *     ・永久記憶の中断
 *      usefultimer timer save off
 *      usefultimer stopwatch save off
 *      usefultimer clock save off
 *      usefultimer date save off
 * 
 * 
 * 　○表示・非表示----------------------------------------
 *   　・表示
 *      usefultimer timer show
 *      usefultimer stopwatch show
 *      usefultimer clock show
 *      usefultimer date show
 * 
 * 
 *   　・フェード表示（数値…0～255）
 *      usefultimer timer show fadein 数値
 *      usefultimer stopwatch show fadein 数値
 *      usefultimer clock show fadein 数値
 *      usefultimer date show fadein 数値
 * 
 *     例）usefultimer clock hide fadein 16
 * 　　    現在時刻がゆったり表示されます。
 * 
 *         usefultimer date hide fadein 64
 * 　　    現在年月日が素早く表示されます。
 * 
 * 
 *   　・非表示
 *      usefultimer timer hide
 *      usefultimer stopwatch hide
 *      usefultimer clock hide
 *      usefultimer date hide
 * 
 * 
 *   　・フェード非表示（数値…1～255）
 *      usefultimer timer hide fadeout 数値
 *      usefultimer stopwatch hide fadeout 数値
 *      usefultimer clock hide fadeout 数値
 *      usefultimer date hide fadeout 数値
 * 
 *     例）usefultimer timer hide fadeout 1
 * 　　    タイマーがかなり遅く消えていきます。
 * 
 *         usefultimer stopwatch hide fadeout 200
 * 　　    ストップウォッチがほぼ一瞬で消えます。
 * 
 * 
 *   ○位置の変更・リセット--------------------------------
 *     ・x座標の変更（数値が大きいほど右に移動）
 *      usefultimer timer x set 数値
 *      usefultimer stopwatch x set 数値
 *      usefultimer clock x set 数値
 *      usefultimer date x set 数値
 * 
 * 
 *     ・x座標のリセット
 *      usefultimer timer x reset
 *      usefultimer stopwatch x reset
 *      usefultimer clock x reset
 *      usefultimer date x reset
 * 
 * 
 *     ・y座標の変更（数値が大きいほど下に移動）
 *      usefultimer timer y set 数値
 *      usefultimer stopwatch y set 数値
 *      usefultimer clock y set 数値
 *      usefultimer date y set 数値
 * 
 * 
 *     ・y座標のリセット
 *      usefultimer timer y reset
 *      usefultimer stopwatch y reset
 *      usefultimer clock y reset
 *      usefultimer date y reset
 * 
 * 
 *    ○横幅・縦幅の変更・リセット------------------------
 *     ・横幅の変更（数値が小さいと文字が圧縮されます）
 *      usefultimer timer width set 数値
 *      usefultimer stopwatch width set 数値
 *      usefultimer clock width set 数値
 *      usefultimer date width set 数値
 * 
 * 
 *     ・横幅のリセット
 *      usefultimer timer width reset
 *      usefultimer stopwatch width reset
 *      usefultimer clock width reset
 *      usefultimer date width reset
 * 
 * 
 *     ・縦幅の変更
 *      usefultimer timer height set 数値
 *      usefultimer stopwatch height set 数値
 *      usefultimer clock height set 数値
 *      usefultimer date height set 数値
 * 
 * 
 *     ・縦幅のリセット
 *      usefultimer timer height reset
 *      usefultimer stopwatch height reset
 *      usefultimer clock height reset
 *      usefultimer date height reset
 * 
 * 
 *   ○フォントの変更・リセット----------------------------
 *     ・フォント名で指定（既定…'GameFont'）
 *      usefultimer timer fontname set 'フォント名'
 *      usefultimer stopwatch fontname set 'フォント名'
 *      usefultimer clock fontname set 'フォント名'
 *      usefultimer date fontname set 'フォント名'
 * 
 *      フォント名をそのまま指定する場合は、
 *      必ずクォーテーションで囲んでください！
 * 
 * 
 *     ・変数名で指定（既定…UsefulTimer.fontName[0]）
 *      usefultimer timer fontname set UsefulTimer.fontName[数値]
 *      usefultimer stopwatch fontname set UsefulTimer.fontName[数値]
 *      usefultimer clock fontname set UsefulTimer.fontName[数値]
 *      usefultimer date fontname set UsefulTimer.fontName[数値]
 * 
 *      フォント名を変数で指定する場合は、
 *      クォーテーションで囲まないでください！
 * 
 *     例）usefultimer timer fontname set '○○○○'
 * 　　    タイマーのフォントを○○○○に変更します。     
 * 
 *     例）usefultimer timer fontname set UsefulTimer.fontName[x]
 * 　　    タイマーのフォントを、gamefont.cssのx番目のフォントに変更します。
 *         フォントに半角スペースが含まれている場合は、変数指定してください。
 * 
 * 
 *     ・フォントのリセット
 *      usefultimer timer fontname reset
 *      usefultimer stopwatch fontname reset
 *      usefultimer clock fontname reset
 *      usefultimer date fontname reset
 * 
 * 
 * 　○フォントサイズの変更・リセット----------------------
 *     ・フォントサイズの変更（標準…32）
 *      usefultimer timer fontsize set 数値
 *      usefultimer stopwatch fontsize set 数値
 *      usefultimer clock fontsize set 数値
 *      usefultimer date fontsize set 数値
 * 
 * 
 *     ・フォントサイズのリセット
 *      usefultimer timer fontsize reset
 *      usefultimer stopwatch fontsize reset
 *      usefultimer clock fontsize reset
 *      usefultimer date fontsize reset
 * 
 * 
 * 　○フォントイタリック（斜体）の変更・リセット----------
 *     ・フォントイタリックON
 *      usefultimer timer italic true
 *      usefultimer stopwatch italic true
 *      usefultimer clock italic true
 *      usefultimer date italic true
 * 
 * 
 *     ・フォントイタリックOFF
 *      usefultimer timer italic false
 *      usefultimer stopwatch italic false
 *      usefultimer clock italic false
 *      usefultimer date italic false
 * 
 * 
 *     ・フォントイタリック既定
 *      usefultimer timer italic reset
 *      usefultimer stopwatch italic reset
 *      usefultimer clock italic reset
 *      usefultimer date italic reset
 * 
 * 
 * 　○文字の透明度の変更・リセット------------------------
 *     ・文字の透明度の変更（数値…0～255）
 *      usefultimer timer opacity set 数値
 *      usefultimer stopwatch opacity set 数値
 *      usefultimer clock opacity set 数値
 *      usefultimer date opacity set 数値
 * 
 * 
 *     ・文字の透明度のリセット
 *      usefultimer timer opacity reset
 *      usefultimer stopwatch opacity reset
 *      usefultimer clock opacity reset
 *      usefultimer date opacity reset
 * 
 * 
 * 　○文字の色の変更・リセット-----------------------------
 *     ・文字の色の変更（数値…#000000～#FFFFFF）
 *      usefultimer timer textcolor set 数値
 *      usefultimer stopwatch textcolor set 数値
 *      usefultimer clock textcolor set 数値
 *      usefultimer date textcolor set 数値
 * 
 * 
 *     ・文字の色のリセット
 *      usefultimer timer textcolor reset
 *      usefultimer stopwatch textcolor reset
 *      usefultimer clock textcolor reset
 *      usefultimer date textcolor reset
 * 
 * 
 * 　○文字の縁の太さの変更・リセット------------------------
 *     ・文字の縁の太さの変更（標準…4）
 *      usefultimer timer outlinewidth set 数値
 *      usefultimer stopwatch outlinewidth set 数値
 *      usefultimer clock outlinewidth set 数値
 *      usefultimer date outlinewidth set 数値
 * 
 * 
 *     ・文字の縁の太さのリセット
 *      usefultimer timer outlinewidth reset
 *      usefultimer stopwatch outlinewidth reset
 *      usefultimer clock outlinewidth reset
 *      usefultimer date outlinewidth reset
 * 
 * 
 * 　○文字の縁の色と透明度の変更・リセット--------------------------
 *     ・文字の縁の色と透明度の変更（RGB…0～255　a…0～1）
 *      usefultimer timer outlinecolor set R,G,B,a
 *      usefultimer stopwatch outlinecolor set R,G,B,a
 *      usefultimer clock outlinecolor set R,G,B,a
 *      usefultimer date outlinecolor set R,G,B,a
 * 
 *     例）usefultimer timer outlinecolor set 5,10,200,0.8
 * 　　    タイマーの文字の縁の色を変更します。
 * 
 * 
 *     ・文字の縁の色のリセット
 *      usefultimer timer outlinecolor reset
 *      usefultimer stopwatch outlinecolor reset
 *      usefultimer clock outlinecolor reset
 *      usefultimer date outlinecolor reset
 * 
 * 
 * 　○時、年の表示・非表示-----------------------------------
 *     ・時、年の表示
 * 　　（date以外の文末の値は省略可能。ゼロパディングの設定が出来ます。）
 *      usefultimer timer hour true 数値
 *      usefultimer stopwatch hour true 数値
 *      usefultimer clock hour true 真偽値
 *      usefultimer date year true
 * 
 * 
 *     ・時、年の非表示
 *      usefultimer timer hour false
 *      usefultimer stopwatch hour false
 *      usefultimer clock hour false
 *      usefultimer date year false
 * 
 * 
 *     ・時、年のリセット
 * 　　（ゼロパディングの設定もリセットされます。）
 *      usefultimer timer hour reset
 *      usefultimer stopwatch hour reset
 *      usefultimer clock hour reset
 *      usefultimer date year reset
 * 
 * 
 * 　○分、月の表示・非表示-----------------------------------
 *     ・分、月の表示
 * 　　（date以外の文末の値は省略可能。ゼロパディングの設定が出来ます。）
 *      usefultimer timer min true 数値
 *      usefultimer stopwatch min true 数値
 *      usefultimer clock min true 真偽値
 *      usefultimer date month true
 * 
 * 
 *     ・分、月の非表示
 *      usefultimer timer min false
 *      usefultimer stopwatch min false
 *      usefultimer clock min false
 *      usefultimer date month false
 * 
 * 
 *     ・分、月のリセット
 * 　　（ゼロパディングの設定もリセットされます。）
 *      usefultimer timer min reset
 *      usefultimer stopwatch min reset
 *      usefultimer clock min reset
 *      usefultimer date month reset
 * 
 * 
 * 　○秒、日の表示・非表示-----------------------------------
 *     ・秒、日の表示
 * 　　（date以外の文末の値は省略可能。ゼロパディングの設定が出来ます。）
 *      usefultimer timer sec true 数値
 *      usefultimer stopwatch sec true 数値
 *      usefultimer clock sec true 真偽値
 *      usefultimer date date true
 * 
 * 
 *     ・秒、日の非表示
 *      usefultimer timer sec false
 *      usefultimer stopwatch sec false
 *      usefultimer clock sec false
 *      usefultimer date date false
 * 
 * 
 *     ・秒、日のリセット
 * 　　（ゼロパディングの設定もリセットされます。）
 *      usefultimer timer sec reset
 *      usefultimer stopwatch sec reset
 *      usefultimer clock sec reset
 *      usefultimer date date reset
 * 
 * 
 * 　○ミリ秒、曜日の表示・非表示------------------------------
 *     ・ミリ秒、曜日の表示
 * 　　（date以外の文末の数値は省略可能。ミリ秒の桁数の設定が出来ます。）
 *      usefultimer timer ms true 数値
 *      usefultimer stopwatch ms true 数値
 *      usefultimer clock ms true 数値
 *      usefultimer date day true
 * 
 * 
 *     ・ミリ秒、曜日の非表示
 *      usefultimer timer ms false
 *      usefultimer stopwatch ms false
 *      usefultimer clock ms false
 *      usefultimer date day false
 * 
 * 
 *     ・ミリ秒、曜日のリセット
 * 　　（ミリ秒の桁数の設定もリセットされます。）
 *      usefultimer timer ms reset
 *      usefultimer stopwatch ms reset
 *      usefultimer clock ms reset
 *      usefultimer date day reset
 * 
 * 
 * 　○60以上の分、秒の表示・非表示---------------------------
 *     ・60以上の分、秒の表示
 *      usefultimer timer 60sec true
 *      usefultimer stopwatch 60sec true
 * 
 *      usefultimer timer 60min true
 *      usefultimer stopwatch 60min true
 * 
 * 
 *     ・60以上の分、秒の非表示
 *      usefultimer timer 60sec false
 *      usefultimer stopwatch 60sec false
 * 
 *      usefultimer timer 60min false
 *      usefultimer stopwatch 60min false
 * 
 * 
 *     ・60以上の分、秒の表示設定をリセット
 *      usefultimer timer 60sec reset
 *      usefultimer stopwatch 60sec reset
 * 
 *      usefultimer timer 60min reset
 *      usefultimer stopwatch 60min reset
 * 
 * 
 * 　○月、日のゼロパディング----------------------
 *     ・有効
 *      usefultimer date zeropad true
 * 
 *     ・無効
 *      usefultimer date zeropad false
 * 
 *     ・リセット
 *      usefultimer date zeropad reset
 * 
 * 
 * 　○曜日の表記を変更---------------------------
 *     ・日曜日
 *      usefultimer date sun set 文字列
 *     ・リセット
 *      usefultimer date sun reset
 * 
 * 
 *     ・月曜日
 *      usefultimer date mon set 文字列
 *     ・リセット
 *      usefultimer date mon reset
 * * 
 * 
 *     ・火曜日
 *      usefultimer date tue set 文字列
 *     ・リセット
 *      usefultimer date tue reset
 * 
 * 
 *     ・水曜日
 *      usefultimer date wed set 文字列
 *     ・リセット
 *      usefultimer date wed reset
 * 
 * 
 *     ・木曜日
 *      usefultimer date thu set 文字列
 *     ・リセット
 *      usefultimer date thu reset
 * 
 * 
 *     ・金曜日
 *      usefultimer date fri set 文字列
 *     ・リセット
 *      usefultimer date fri reset
 * 
 * 
 *     ・土曜日
 *      usefultimer date sat set 文字列
 *     ・リセット
 *      usefultimer date sat reset
 * 
 * 
 * 　○戦闘中の実行・一時停止----------------------------------------------
 *     ・戦闘中も実行
 *      usefultimer timer workinbattle true
 *      usefultimer stopwatch workinbattle true
 *      usefultimer clock workinbattle true
 *      usefultimer date workinbattle true
 * 
 * 
 *     ・戦闘中は一時停止
 *      usefultimer timer workinbattle false
 *      usefultimer stopwatch workinbattle false
 *      usefultimer clock workinbattle false
 *      usefultimer date workinbattle false
 * 
 * 
 *     ・リセット
 *      usefultimer timer workinbattle reset
 *      usefultimer stopwatch workinbattle reset
 *      usefultimer clock workinbattle reset
 *      usefultimer date workinbattle reset
 * 
 * 
 * 　○戦闘中の表示・非表示----------------------------------------------
 *     ・戦闘中も表示
 *      usefultimer timer showinbattle true
 *      usefultimer stopwatch showinbattle true
 *      usefultimer clock showinbattle true
 *      usefultimer date showinbattle true
 * 
 * 
 *     ・戦闘中は非表示
 *      usefultimer timer showinbattle false
 *      usefultimer stopwatch showinbattle false
 *      usefultimer clock showinbattle false
 *      usefultimer date showinbattle false
 * 
 * 
 *     ・リセット
 *      usefultimer timer showinbattle reset
 *      usefultimer stopwatch showinbattle reset
 *      usefultimer clock showinbattle reset
 *      usefultimer date showinbattle reset
 * 
 * 
 * 　○一部・全体リセット--------------------------------------
 *      外観に関する変更を一括でリセットします。
 *      基本動作や記録処理、表示・非表示状態はそのままです。
 * 
 *     ・一部リセット
 *      usefultimer timer reset
 *      usefultimer stopwatch reset
 *      usefultimer clock reset
 *      usefultimer date reset
 * 
 *     ・全体リセット
 *      usefultimer all reset
 * 
 * 
 * 
 * ●スクリプトで利用するもの
 * 
 * 　○ゲームオブジェクト
 * 　$gameTimer       …タイマーのオブジェクト
 * 　$gameStopWatch   …ストップウォッチのオブジェクト
 * 　$gameClock       …現在時刻のオブジェクト
 * 　$gameDate        …現在年月日のオブジェクト
 * 
 * 
 * 　○主なプロパティ
 * 　._frames        …カウントしているフレーム数（数値）※1
 * 　._working       …動作しているか（真偽値）
 * 　._pause         …一時停止しているか（真偽値）
 * 　._hide          …非表示状態か（真偽値）
 * 　._x             …X座標（数値）※2
 *   ._y             …Y座標（数値）※2
 * 　._width         …横幅（数値）※2
 *   ._height        …縦幅（数値）※2
 * 
 * 　※1…タイマーとストップウォッチのみ利用可能。
 *   ※2…最終的に数値に変換されるという意味。
 *        プラグインコマンドで指定した数値・変数名は文字列型になる。
 * 
 * 
 * 
 * ●スクリプトで値を操作
 * 
 * 　○フレーム数を操作
 *     ・フレーム数に600を代入
 *      $gameTimer._frames = 600;
 *      $gameStopWatch._frames = 600;
 * 
 *     ・フレーム数に600を加算
 *      $gameTimer._frames += 600;
 *      $gameStopWatch._frames += 600;
 * 
 *     ・フレーム数に600を減算
 *      $gameTimer._frames -= 600;
 *      $gameStopWatch._frames -= 600;
 * 
 * 
 * 　○位置を操作
 *     ・X座標に0を代入
 *      $gameTimer._x = 0;
 *      $gameStopWatch._x = 0;
 *      $gameClock._x = 0;
 *      $gameDate._x = 0;
 * 
 *     ・X座標に1を加算
 *      $gameTimer._x++;
 *      $gameStopWatch._x++;
 *      $gameClock._x++;
 *      $gameDate._x++;
 * 
 *     ・X座標に10を加算
 *      $gameTimer._x += 10;
 *      $gameStopWatch._x += 10;
 *      $gameClock._x += 10;
 *      $gameDate._x += 10;
 * 
 *     ・X座標から1を減算
 *      $gameTimer._x--;
 *      $gameStopWatch._x--;
 *      $gameClock._x--;
 *      $gameDate._x--;
 * 
 *     ・X座標から10を減算
 *      $gameTimer._x -= 10;
 *      $gameStopWatch._x -= 10;
 *      $gameClock._x -= 10;
 *      $gameDate._x -= 10;
 * 
 * 
 *     ・Y座標に0を代入
 *      $gameTimer._y = 0;
 *      $gameStopWatch._y = 0;
 *      $gameClock._y = 0;
 *      $gameDate._y = 0;
 * 
 *     ・Y座標に1を加算
 *      $gameTimer._y++;
 *      $gameStopWatch._y++;
 *      $gameClock._y++;
 *      $gameDate._y++;
 * 
 *     ・Y座標に10を加算
 *      $gameTimer._y += 10;
 *      $gameStopWatch._y += 10;
 *      $gameClock._y += 10;
 *      $gameDate._y += 10;
 * 
 *     ・Y座標から1を減算
 *      $gameTimer._y--;
 *      $gameStopWatch._y--;
 *      $gameClock._y--;
 *      $gameDate._y--;
 * 
 *     ・Y座標から10を減算
 *      $gameTimer._y -= 10;
 *      $gameStopWatch._y -= 10;
 *      $gameClock._y -= 10;
 *      $gameDate._y -= 10;
 * 
 * 
 * 
 * ●条件分岐でのスクリプトの書き方
 * 　○フレーム数確認
 *     ・もしフレーム数が600であれば～
 *      $gameTimer._frames === 600
 *      $gameStopWatch._frames === 600
 * 
 *     ・もしフレーム数が600でなければ～
 *      $gameTimer._frames !== 600
 *      $gameStopWatch._frames !== 600
 * 
 * 
 *     ・もしフレーム数が600以上であれば～
 *      $gameTimer._frames >= 600
 *      $gameStopWatch._frames >= 600
 * 
 *     ・もしフレーム数が600より大きいのであれば～
 *      $gameTimer._frames > 600
 *      $gameStopWatch._frames > 600
 * 
 *     ・もしフレーム数が600以下であれば～
 *      $gameTimer._frames <= 600
 *      $gameStopWatch._frames <= 600
 * 
 *     ・もしフレーム数が600より小さいのであれば～
 *      $gameTimer._frames < 600
 *      $gameStopWatch._frames < 600
 * 
 * 
 * 　○動作確認
 *     ・もし動作しているのであれば～
 *      $gameTimer._working === true
 *      $gameStopWatch._working === true
 *      $gameClock._working === true
 *      $gameDate._working === true
 * 
 * 
 *     ・もし動作していないのであれば～
 *      $gameTimer._working === false
 *      $gameStopWatch._working === false
 *      $gameClock._working === false
 *      $gameDate._working === false
 * 
 * 
 * 　○一時停止確認
 *     ・もし一時停止状態であれば～
 *      $gameTimer._pause === true
 *      $gameStopWatch._pause === true
 *      $gameClock._pause === true
 *      $gameDate._pause === true
 * 
 * 
 *     ・もし一時停止状態でなければ～
 *      $gameTimer._pause === false
 *      $gameStopWatch._pause === false
 *      $gameClock._pause === false
 *      $gameDate._pause === false
 * 
 * 
 * 　○表示確認
 *     ・もし非表示状態であれば～
 *      $gameTimer._hide === true
 *      $gameStopWatch._hide === true
 *      $gameClock._hide === true
 *      $gameDate._hide === true
 * 
 * 
 *     ・もし非表示状態でなければ～
 *      $gameTimer._hide === false
 *      $gameStopWatch._hide === false
 *      $gameClock._hide === false
 *      $gameDate._hide === false
 * 
 * 
 * 　○複合（論理積、論理和）
 *     ・もし、フレーム数が600以下で、なおかつ、非表示状態でなければ～
 *      $gameTimer._frames <= 600 && $gameTimer._hide === false
 *      $gameStopWatch._frames <= 600 && $gameStopWatch._hide === false
 * 
 *     ・もし、動作していない状態、または、非表示状態ならば～
 *      $gameTimer._working === false || $gameTimer._hide === true
 *      $gameStopWatch._working === false || $gameStopWatch._hide === true
 *      $gameClock._working === false || $gameClock._hide === true
 *      $gameDate._working === false || $gameDate._hide === true
 * 
 * 
 * 
 * ●スクリプト使用例
 * 　○徐々に下に移動させながらタイマー始動
 *     ◆プラグインコマンド：usefultimer timer start 120*60 hide
 *     ◆スクリプト：$gameTimer._y = -50;
 *     ◆ウェイト：1フレーム
 *     ◆プラグインコマンド：usefultimer timer show fadein 3
 *     ◆ループ
 *       ◆スクリプト：$gameTimer._y++;
 *       ◆ウェイト：1フレーム
 *       ◆条件分岐：スクリプト：$gameTimer._y >= 0
 *         ◆ループの中断
 *       ：分岐終了
 *     ：以上繰り返し
 * 
 * 
 * 　○徐々に左に移動させながらタイマー始動
 *     ◆プラグインコマンド：usefultimer timer start 120*60 hide
 *     ◆スクリプト：$gameTimer._x = Graphics.width;
 *     ◆ウェイト：1フレーム
 *     ◆プラグインコマンド：usefultimer timer show fadein 4
 *     ◆ループ
 *       ◆スクリプト：$gameTimer._x -= 2;
 *       ◆ウェイト：1フレーム
 *       ◆条件分岐：スクリプト：$gameTimer._x <= Graphics.width - 96
 *         ◆ループの中断
 *       ：分岐終了
 *     ：以上繰り返し
 * 
 * 
 * 
 * ●その他スクリプト覚書
 * 　○変数ID x の変数を参照
 *      $gameVariables.value(x);
 * 
 * 
 * 　○変数ID x の変数に、y を代入
 *      $gameVariables.setValue(x, y);
 * 
 *      ちなみに、y には数値以外に文字列も指定できます。
 *      例…$gameVariables.setValue(30, 'おはよう');
 * 
 * 
 * 　○0分0秒0ミリ秒ちょうどならば実行
 *      $gameTimer._frames === 0
 * 
 *      条件分岐のスクリプトに指定すると、
 *      イベントを0分0秒0ミリ秒ちょうどに実行することができます。
 *      デフォルトの「タイマー≦0分0秒」は秒で判定しているので、
 *      59フレーム程度残した状態でも条件が一致してしまいます。
 * 
 * 
 * 
 * ----------------------------------------------------------
 * Copyright (c) 2016 にぎりめし
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 * ----------------------------------------------------------
 * 
 * にぎりめしのTwitter
 * https://twitter.com/Nigirimeshi4649
 * 
 * にぎりめし備忘録
 * http://nigirimeshidtm.blog.fc2.com/
 * 
 * ----------------------------------------------------------
 * 
 */

/* UsefulTimerがすでに定義されているのであれば、その内容を代入し、
   定義されていないのであれば、名前空間を作成。
   名前空間を作成しないとプロパティを作成出来ない。*/
var UsefulTimer         = UsefulTimer || {};

UsefulTimer.parameters  = PluginManager.parameters('UsefulTimer');
UsefulTimer.param       = UsefulTimer.param || {};
UsefulTimer.func        = UsefulTimer.func  || {};
UsefulTimer.fontName    = UsefulTimer.fontName || {};


/* フォント変更時に読み込みラグが生じないよう、
   事前にgamefont.cssの内容を取得する。*/
(function(){
	for(var i = 0; i < document.styleSheets.length; i++){
        if (document.styleSheets[i].href.match(/fonts\/gamefont\.css$/)){
            for(var j = 0; j < document.styleSheets[i].cssRules.length; j++){
                UsefulTimer.fontName[j] = document.styleSheets[i].cssRules[j].style.fontFamily;
                Graphics._createFontLoader(UsefulTimer.fontName[j]);
            }
        }
	}
})();


UsefulTimer.param.position           = String(UsefulTimer.parameters['Lock Position'] || 'true');

UsefulTimer.param.timer_x            = String(UsefulTimer.parameters['Timer X'] || 'Graphics.width - this.bitmap.width');
UsefulTimer.param.timer_y            = String(UsefulTimer.parameters['Timer Y'] || 0);
UsefulTimer.param.timer_width        = String(UsefulTimer.parameters['Timer Width'] || 96);
UsefulTimer.param.timer_height       = String(UsefulTimer.parameters['Timer Height'] || 48);
UsefulTimer.param.timer_fface        = String(eval(UsefulTimer.parameters['Timer Font Name']) || 'GameFont');
UsefulTimer.param.timer_fsize        = Number(UsefulTimer.parameters['Timer Font Size'] || 32);
//UsefulTimer.param.timer_fbold        = String(UsefulTimer.parameters['Timer Font Bold'] || 'false');
UsefulTimer.param.timer_fitalic      = String(UsefulTimer.parameters['Timer Font Italic'] || 'false');
UsefulTimer.param.timer_owidth       = Number(UsefulTimer.parameters['Timer Outline Width'] || 4);
UsefulTimer.param.timer_tcolor       = String(UsefulTimer.parameters['Timer Text Color'] || '#FFFFFF');
UsefulTimer.param.timer_ocolor       = String(UsefulTimer.parameters['Timer Outline Color'] || '0,0,0,0.5');
UsefulTimer.param.timer_popa         = Number(UsefulTimer.parameters['Timer Text Opacity'] || 255);

UsefulTimer.param.timer_ms           = String(UsefulTimer.parameters['Timer MSec'] || 'false');
UsefulTimer.param.timer_s            = String(UsefulTimer.parameters['Timer Sec'] || 'true');
UsefulTimer.param.timer_m            = String(UsefulTimer.parameters['Timer Min'] || 'true');
UsefulTimer.param.timer_h            = String(UsefulTimer.parameters['Timer Hour'] || 'false');
UsefulTimer.param.timer_ms_d         = Number(UsefulTimer.parameters['Timer MSec Digits'] || 2);
UsefulTimer.param.timer_s_zpad       = Number(UsefulTimer.parameters['Timer Sec ZeroPad'] || 2);
UsefulTimer.param.timer_m_zpad       = Number(UsefulTimer.parameters['Timer Min ZeroPad'] || 2);
UsefulTimer.param.timer_h_zpad       = Number(UsefulTimer.parameters['Timer Hour ZeroPad'] || 2);
UsefulTimer.param.timer_60sec        = String(UsefulTimer.parameters['Timer More than 60Sec'] || 'false');
UsefulTimer.param.timer_60min        = String(UsefulTimer.parameters['Timer More than 60Min'] || 'false');
UsefulTimer.param.timer_workinB      = eval(UsefulTimer.parameters['Timer Work inBattle'] || 'true');
UsefulTimer.param.timer_showinB      = eval(UsefulTimer.parameters['Timer Show inBattle'] || 'true');


UsefulTimer.param.stopWatch_x        = String(UsefulTimer.parameters['StWatch X'] || 'Graphics.width - this.bitmap.width');
UsefulTimer.param.stopWatch_y        = String(UsefulTimer.parameters['StWatch Y'] || 48);
UsefulTimer.param.stopWatch_width    = String(UsefulTimer.parameters['StWatch Width'] || 96);
UsefulTimer.param.stopWatch_height   = String(UsefulTimer.parameters['StWatch Height'] || 48);
UsefulTimer.param.stopWatch_fface    = String(eval(UsefulTimer.parameters['StWatch Font Name']) || 'GameFont');
UsefulTimer.param.stopWatch_fsize    = Number(UsefulTimer.parameters['StWatch Font Size'] || 32);
//UsefulTimer.param.stopWatch_fbold    = String(UsefulTimer.parameters['StWatch Font Bold'] || 'false');
UsefulTimer.param.stopWatch_fitalic  = String(UsefulTimer.parameters['StWatch Font Italic'] || 'false');
UsefulTimer.param.stopWatch_owidth   = Number(UsefulTimer.parameters['StWatch Outline Width'] || 4);
UsefulTimer.param.stopWatch_tcolor   = String(UsefulTimer.parameters['StWatch Text Color'] || '#FFFFFF');
UsefulTimer.param.stopWatch_ocolor   = String(UsefulTimer.parameters['StWatch Outline Color'] || '0,0,0,0.5');
UsefulTimer.param.stopWatch_popa     = Number(UsefulTimer.parameters['StWatch Text Opacity'] || 255);

UsefulTimer.param.stopWatch_ms       = String(UsefulTimer.parameters['StWatch MSec'] || 'false');
UsefulTimer.param.stopWatch_s        = String(UsefulTimer.parameters['StWatch Sec'] || 'true');
UsefulTimer.param.stopWatch_m        = String(UsefulTimer.parameters['StWatch Min'] || 'true');
UsefulTimer.param.stopWatch_h        = String(UsefulTimer.parameters['StWatch Hours'] || 'false');
UsefulTimer.param.stopWatch_ms_d     = Number(UsefulTimer.parameters['StWatch MSec Digits'] || 2);
UsefulTimer.param.stopWatch_s_zpad   = Number(UsefulTimer.parameters['StWatch Sec ZeroPad'] || 2);
UsefulTimer.param.stopWatch_m_zpad   = Number(UsefulTimer.parameters['StWatch Min ZeroPad'] || 2);
UsefulTimer.param.stopWatch_h_zpad   = Number(UsefulTimer.parameters['StWatch Hours ZeroPad'] || 2);
UsefulTimer.param.stopWatch_60sec    = String(UsefulTimer.parameters['StWatch More than 60Sec'] || 'false');
UsefulTimer.param.stopWatch_60min    = String(UsefulTimer.parameters['StWatch More than 60Min'] || 'false');
UsefulTimer.param.stopWatch_workinB  = eval(UsefulTimer.parameters['StWatch Work inBattle'] || 'true');
UsefulTimer.param.stopWatch_showinB  = eval(UsefulTimer.parameters['StWatch Show inBattle'] || 'true');


UsefulTimer.param.clock_x            = String(UsefulTimer.parameters['Clock X'] || 0);
UsefulTimer.param.clock_y            = String(UsefulTimer.parameters['Clock Y'] || 0);
UsefulTimer.param.clock_width        = String(UsefulTimer.parameters['Clock Width'] || 224);
UsefulTimer.param.clock_height       = String(UsefulTimer.parameters['Clock Height'] || 48);
UsefulTimer.param.clock_fface        = String(eval(UsefulTimer.parameters['Clock Font Name']) || 'GameFont');
UsefulTimer.param.clock_fsize        = Number(UsefulTimer.parameters['Clock Font Size'] || 48);
//UsefulTimer.param.clock_fbold        = String(UsefulTimer.parameters['Clock Font Bold'] || 'false');
UsefulTimer.param.clock_fitalic      = String(UsefulTimer.parameters['Clock Font Italic'] || 'false');
UsefulTimer.param.clock_owidth       = Number(UsefulTimer.parameters['Clock Outline Width'] || 4);
UsefulTimer.param.clock_tcolor       = String(UsefulTimer.parameters['Clock Text Color'] || '#FFFFFF');
UsefulTimer.param.clock_ocolor       = String(UsefulTimer.parameters['Clock Outline Color'] || '0,0,0,0.5');
UsefulTimer.param.clock_popa         = Number(UsefulTimer.parameters['Clock Text Opacity'] || 255);

UsefulTimer.param.clock_ms           = String(UsefulTimer.parameters['Clock MSec'] || 'false');
UsefulTimer.param.clock_s            = String(UsefulTimer.parameters['Clock Sec'] || 'true');
UsefulTimer.param.clock_m            = String(UsefulTimer.parameters['Clock Min'] || 'true');
UsefulTimer.param.clock_h            = String(UsefulTimer.parameters['Clock Hours'] || 'true');
UsefulTimer.param.clock_ms_d         = Number(UsefulTimer.parameters['Clock MSec Digits'] || 2);
UsefulTimer.param.clock_s_zpad       = String(UsefulTimer.parameters['Clock Sec ZeroPad'] || 'true');
UsefulTimer.param.clock_m_zpad       = String(UsefulTimer.parameters['Clock Min ZeroPad'] || 'true');
UsefulTimer.param.clock_h_zpad       = String(UsefulTimer.parameters['Clock Hours ZeroPad'] || 'false');
UsefulTimer.param.clock_workinB      = eval(UsefulTimer.parameters['Clock Work inBattle'] || 'true');
UsefulTimer.param.clock_showinB      = eval(UsefulTimer.parameters['Clock Show inBattle'] || 'true');


UsefulTimer.param.date_x             = String(UsefulTimer.parameters['Date X'] || 0);
UsefulTimer.param.date_y             = String(UsefulTimer.parameters['Date Y'] || 48);
UsefulTimer.param.date_width         = String(UsefulTimer.parameters['Date Width'] || 224);
UsefulTimer.param.date_height        = String(UsefulTimer.parameters['Date Height'] || 48);
UsefulTimer.param.date_fface         = String(eval(UsefulTimer.parameters['Date Font Name']) || 'GameFont');
UsefulTimer.param.date_fsize         = Number(UsefulTimer.parameters['Date Font Size'] || 32);
//UsefulTimer.param.date_fbold         = String(UsefulTimer.parameters['Date Font Bold'] || 'false');
UsefulTimer.param.date_fitalic       = String(UsefulTimer.parameters['Date Font Italic'] || 'false');
UsefulTimer.param.date_owidth        = Number(UsefulTimer.parameters['Date Outline Width'] || 4);
UsefulTimer.param.date_tcolor        = String(UsefulTimer.parameters['Date Text Color'] || '#FFFFFF');
UsefulTimer.param.date_ocolor        = String(UsefulTimer.parameters['Date Outline Color'] || '0,0,0,0.5');
UsefulTimer.param.date_popa          = Number(UsefulTimer.parameters['Date Text Opacity'] || 255);

UsefulTimer.param.date_zpad          = String(UsefulTimer.parameters['Date ZeroPad'] || 'false');
UsefulTimer.param.date_year          = String(UsefulTimer.parameters['Date Year'] || 'true');
UsefulTimer.param.date_month         = String(UsefulTimer.parameters['Date Month'] || 'true');
UsefulTimer.param.date_date          = String(UsefulTimer.parameters['Date Date'] || 'true');
UsefulTimer.param.date_day           = String(UsefulTimer.parameters['Date Day'] || 'true');
UsefulTimer.param.date_day_sun       = String(UsefulTimer.parameters['Date Day Sun'] || '日');
UsefulTimer.param.date_day_mon       = String(UsefulTimer.parameters['Date Day Mon'] || '月');
UsefulTimer.param.date_day_tue       = String(UsefulTimer.parameters['Date Day Tue'] || '火');
UsefulTimer.param.date_day_wed       = String(UsefulTimer.parameters['Date Day Wed'] || '水');
UsefulTimer.param.date_day_thu       = String(UsefulTimer.parameters['Date Day Thu'] || '木');
UsefulTimer.param.date_day_fri       = String(UsefulTimer.parameters['Date Day Fri'] || '金');
UsefulTimer.param.date_day_sat       = String(UsefulTimer.parameters['Date Day Sat'] || '土');
UsefulTimer.param.date_workinB       = eval(UsefulTimer.parameters['Date Work inBattle'] || 'true');
UsefulTimer.param.date_showinB       = eval(UsefulTimer.parameters['Date Show inBattle'] || 'true');


UsefulTimer.func.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    UsefulTimer.func.Game_Interpreter_pluginCommand.call(this, command, args);
    
    if (command === 'usefultimer'){
        args[0] = String(args[0]　|| '');
        //========================================
        //カウントダウンタイマー
        //========================================
        if (args[0] === 'timer') {
            args[1] = String(args[1]　|| ' ');

            if (args[1] === 'start'){
                args[2] = Number(eval(args[2]) || 0);
                args[3] = String(args[3] || ' ');
                if (args[3] === 'hide'){
                    $gameTimer._hideStart = true;
                    $gameTimer.start(args[2]);
                } else {
                    $gameTimer.start(args[2]);
                }
            }

            if (args[1] === 'pause'){
                if ($gameTimer._working === true){
                    $gameTimer.pause();
                }
            }

            if (args[1] === 'resume'){
                if ($gameTimer._working === true){
                    $gameTimer.resume();
                }
            }

            if (args[1] === 'stop'){
                if ($gameTimer._working === true){
                    $gameTimer.stop();
                }
            }

            if (args[1] === 'change'){
                args[2] = Number(eval(args[2]) || 0);
                args[3] = String(args[3] || ' ');
                if (args[3] === 'add'){
                    $gameTimer._frames += args[2];
                } else {
                    $gameTimer._frames = args[2];
                }
            }

            if (args[1] === 'setvar'){
                args[2] = Number(eval(args[2]) || 0);
                args[3] = Number(eval(args[3]) || 0);
                args[4] = Number(eval(args[4]) || 0);
                args[5] = Number(eval(args[5]) || 0);
                args[6] = Number(eval(args[6]) || 0);
                //args[7] = Number(eval(args[7]) || 0);
                $gameTimer._varID._h  = args[2];
                $gameTimer._varID._m  = args[3];
                $gameTimer._varID._s  = args[4];
                $gameTimer._varID._ms = args[5];
                $gameTimer._varID._f  = args[6];
                //$gameTimer._varID._d  = args[7];
            }

            if (args[1] === 'save'){
                args[2] = String(args[2] || 'off');
                if (args[2] ==='endless'){
                    $gameTimer.setValue();
                    $gameTimer._save._on = true;
                }else if (args[2] ==='once') {
                    $gameTimer.setValue();
                    $gameTimer._save._on = false;
                }else {
                    $gameTimer._save._on = false;
                }
            }

            if (args[1] === 'hide'){
                if ($gameTimer._working === true){
                    args[2] = String(args[2] || '');
                    if (args[2] === 'fadeout'){
                        args[3] = Math.abs(Number(eval(args[3])) || 1);
                        if (args[3] > 255){
                            args[3] = 255;
                        }else if(args[3] <= 0){
                            args[3] = 1;
                        }
                        $gameTimer._opaSet = -args[3];
                    }else{
                        $gameTimer._hide = true;
                        $gameTimer._show = false;
                        $gameTimer._opaSet = -255;
                    }
                }
            }

            if (args[1] === 'show'){
                if ($gameTimer._working === true){
                    args[2] = String(args[2] || '');
                    if (args[2] === 'fadein'){
                        args[3] = Math.abs(Number(eval(args[3])) || 1);
                        if (args[3] > 255){
                            args[3] = 255;
                        }else if(args[3] <= 0){
                            args[3] = 1;
                        }
                        $gameTimer._hide = false;
                        $gameTimer._show = false;
                        $gameTimer._opaSet = args[3];
                    }else{
                        $gameTimer._hide = false;
                        $gameTimer._show = false;
                        $gameTimer._opaSet = 255;
                    }
                }
            }

            if (args[1] === 'x'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameTimer._x = args[3];
                } else if (args[2] === 'reset'){
                    $gameTimer._x = UsefulTimer.param.timer_x;
                }
            }

            if (args[1] === 'y'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameTimer._y = args[3];
                } else if (args[2] === 'reset'){
                    $gameTimer._y = UsefulTimer.param.timer_y;
                }
            }

            if (args[1] === 'width'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameTimer._width = args[3];
                } else if (args[2] === 'reset'){
                    $gameTimer._width = UsefulTimer.param.timer_width;
                }
            }

            if (args[1] === 'height'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameTimer._height = args[3];
                } else if (args[2] === 'reset'){
                    $gameTimer._height = UsefulTimer.param.timer_height;
                }
            }

            if (args[1] === 'fontname'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(eval(args[3]));
                    $gameTimer._fFace = args[3];
                } else if (args[2] === 'reset'){
                    $gameTimer._fFace = UsefulTimer.param.timer_fface;
                }
            }

            if (args[1] === 'fontsize'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = Number(eval(args[3]));
                    $gameTimer._fSize = args[3];
                } else if (args[2] === 'reset'){
                    $gameTimer._fSize = UsefulTimer.param.timer_fsize;
                }
            }

            if (args[1] === 'italic'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameTimer._fItalic = true;
                } else if (args[2] === 'false'){
                    $gameTimer._fItalic = false;
                } else if (args[2] === 'reset'){
                    $gameTimer._fItalic = UsefulTimer.param.timer_fitalic;
                }
            }

            if (args[1] === 'outlinewidth'){
                if (args[2] === 'set'){
                    args[3] = Number(eval(args[3]));
                    $gameTimer._olWidth = args[3];
                } else if (args[2] === 'reset'){
                    $gameTimer._olWidth = UsefulTimer.param.timer_owidth;
                }
            }

            if (args[1] === 'textcolor'){
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameTimer._tColor = args[3];
                } else if (args[2] === 'reset'){
                    $gameTimer._tColor = UsefulTimer.param.timer_tcolor;
                }
            }

            if (args[1] === 'outlinecolor'){
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameTimer._olColor = args[3];
                } else if (args[2] === 'reset'){
                    $gameTimer._olColor = UsefulTimer.param.timer_ocolor;
                }
            }

            if (args[1] === 'opacity'){
                if (args[2] === 'set'){
                    args[3] = Number(eval(args[3]));
                    if(args[3] > 255){
                        args[3] = 255;
                    }else if(args[3] < 0){
                        args[3] = 0;
                    }
                    $gameTimer._pOpa = args[3];
                } else if (args[2] === 'reset'){
                    $gameTimer._pOpa = UsefulTimer.param.timer_popa;
                }
            }

            if (args[1] === 'hour'){
                args[2] = String(args[2] || '');
                args[3] = Number(eval(args[3]))
                if (args[2] === 'true'){
                    $gameTimer._h = 'true';
                } else if (args[2] === 'false'){
                    $gameTimer._h = 'false';
                } else if (args[2] === 'reset'){
                    $gameTimer._h = UsefulTimer.param.timer_h;
                    $gameTimer._h_zpad = UsefulTimer.param.timer_h_zpad;
                }
                if (args[3] >= 1){
                    $gameTimer._h_zpad = args[3];
                }
                $gameTimer._show = false;
            }

            if (args[1] === 'min'){
                args[2] = String(args[2] || '');
                args[3] = Number(eval(args[3]))
                if (args[2] === 'true'){
                    $gameTimer._m = 'true';
                } else if (args[2] === 'false'){
                    $gameTimer._m = 'false';
                } else if (args[2] === 'reset'){
                    $gameTimer._m = UsefulTimer.param.timer_m;
                    $gameTimer._m_zpad = UsefulTimer.param.timer_m_zpad;
                }
                if (args[3] >= 1){
                    $gameTimer._m_zpad = args[3];
                }
                $gameTimer._show = false;
            }

            if (args[1] === 'sec'){
                args[2] = String(args[2] || '');
                args[3] = Number(eval(args[3]))
                if (args[2] === 'true'){
                    $gameTimer._s = 'true';
                } else if (args[2] === 'false'){
                    $gameTimer._s = 'false';
                } else if (args[2] === 'reset'){
                    $gameTimer._s = UsefulTimer.param.timer_s;
                    $gameTimer._s_zpad = UsefulTimer.param.timer_s_zpad;
                }
                if (args[3] >= 1){
                    $gameTimer._s_zpad = args[3];
                }
                $gameTimer._show = false;
            }

            if (args[1] === 'ms'){
                args[2] = String(args[2] || '');
                args[3] = Number(eval(args[3]))
                if (args[2] === 'true'){
                    $gameTimer._ms = 'true';
                } else if (args[2] === 'false'){
                    $gameTimer._ms = 'false';
                } else if (args[2] === 'reset'){
                    $gameTimer._ms = UsefulTimer.param.timer_ms;
                    $gameTimer._ms_d = UsefulTimer.param.timer_ms_d;
                }
                if (args[3] >= 1){
                    $gameTimer._ms_d = args[3];
                }
                $gameTimer._show = false;
            }

            if (args[1] === '60sec'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameTimer._60sec = 'true';
                } else if (args[2] === 'false'){
                    $gameTimer._60sec = 'false';
                } else if (args[2] === 'reset'){
                    $gameTimer._60sec = UsefulTimer.param.timer_60sec;
                }
                $gameTimer._show = false;
            }

            if (args[1] === '60min'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameTimer._60min = 'true';
                } else if (args[2] === 'false'){
                    $gameTimer._60min = 'false';
                } else if (args[2] === 'reset'){
                    $gameTimer._60min = UsefulTimer.param.timer_60min;
                }
                $gameTimer._show = false;
            }

            if (args[1] === 'workinbattle'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameTimer._workinB = true;
                } else if (args[2] === 'false'){
                    $gameTimer._workinB = false;
                } else if (args[2] === 'reset'){
                    $gameTimer._workinB = UsefulTimer.param.timer_workinB;
                }
                $gameTimer._show = false;
            }

            if (args[1] === 'showinbattle'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameTimer._showinB = true;
                } else if (args[2] === 'false'){
                    $gameTimer._showinB = false;
                } else if (args[2] === 'reset'){
                    $gameTimer._showinB = UsefulTimer.param.timer_showinB;
                }
                $gameTimer._show = false;
            }

            if (args[1] === 'reset'){
                $gameTimer._opaSet    = 0;

                $gameTimer._width     = UsefulTimer.param.timer_width;
                $gameTimer._height    = UsefulTimer.param.timer_height;
                $gameTimer._x         = UsefulTimer.param.timer_x;
                $gameTimer._y         = UsefulTimer.param.timer_y;
                $gameTimer._fFace     = UsefulTimer.param.timer_fface;
                $gameTimer._fSize     = UsefulTimer.param.timer_fsize;
                //$gameTimer._fBold     = UsefulTimer.param.timer_fbold;
                $gameTimer._fItalic   = UsefulTimer.param.timer_fitalic;
                $gameTimer._olWidth   = UsefulTimer.param.timer_owidth;
                $gameTimer._tColor    = UsefulTimer.param.timer_tcolor;
                $gameTimer._olColor   = UsefulTimer.param.timer_ocolor;
                $gameTimer._olCDef    = UsefulTimer.param.timer_ocolor;
                $gameTimer._pOpa      = UsefulTimer.param.timer_popa;
                $gameTimer._pOpaMax   = UsefulTimer.param.timer_popa;

                $gameTimer._ms        = UsefulTimer.param.timer_ms;
                $gameTimer._s         = UsefulTimer.param.timer_s;
                $gameTimer._m         = UsefulTimer.param.timer_m;
                $gameTimer._h         = UsefulTimer.param.timer_h;
                $gameTimer._ms_d      = UsefulTimer.param.timer_ms_d;
                $gameTimer._s_zpad    = UsefulTimer.param.timer_s_zpad;
                $gameTimer._m_zpad    = UsefulTimer.param.timer_m_zpad;
                $gameTimer._h_zpad    = UsefulTimer.param.timer_h_zpad;
                $gameTimer._60sec     = UsefulTimer.param.timer_60sec;
                $gameTimer._60min     = UsefulTimer.param.timer_60min;

                $gameTimer._show      = false;
            }

        }

        //========================================
        //ストップウォッチ
        //========================================
        if (args[0] === 'stopwatch') {

            args[1] = String(args[1]　|| ' ');

            if (args[1] === 'start'){
                args[2] = String(args[2] || ' ');
                if (args[2] ==='hide'){
                    $gameStopWatch._hideStart = true;
                    $gameStopWatch.start();
                }else{
                    $gameStopWatch.start();
                }
            }

            if (args[1] === 'pause'){
                if ($gameStopWatch._working === true){
                    $gameStopWatch.pause();
                }
            }

            if (args[1] === 'resume'){
                if ($gameStopWatch._working === true){
                    $gameStopWatch.resume();
                }
            }

            if (args[1] === 'stop'){
                if ($gameStopWatch._working === true){
                    $gameStopWatch.stop();
                }
            }

            if (args[1] === 'change'){
                args[2] = Number(eval(args[2]) || 0);
                args[3] = String(args[3] || ' ');
                if (args[3] === 'add'){
                    $gameStopWatch._frames += args[2];
                } else {
                    $gameStopWatch._frames = args[2];
                }
            }

            if (args[1] === 'setvar'){
                args[2] = Number(eval(args[2]) || 0);
                args[3] = Number(eval(args[3]) || 0);
                args[4] = Number(eval(args[4]) || 0);
                args[5] = Number(eval(args[5]) || 0);
                args[6] = Number(eval(args[6]) || 0);
                //args[7] = Number(eval(args[7]) || 0);
                $gameStopWatch._varID._h  = args[2];
                $gameStopWatch._varID._m  = args[3];
                $gameStopWatch._varID._s  = args[4];
                $gameStopWatch._varID._ms = args[5];
                $gameStopWatch._varID._f  = args[6];
                //$gameStopWatch._varID._d  = args[7];
            }

            if (args[1] === 'save'){
                args[2] = String(args[2] || 'off');
                if (args[2] ==='endless'){
                    $gameStopWatch.setValue();
                    $gameStopWatch._save._on = true;
                }else if (args[2] ==='once') {
                    $gameStopWatch.setValue();
                    $gameStopWatch._save._on = false;
                }else {
                    $gameStopWatch._save._on = false;
                }
            }  

            if (args[1] === 'hide'){
                if ($gameStopWatch._working === true){
                    args[2] = String(args[2] || '');
                    if (args[2] === 'fadeout'){
                        args[3] = Math.abs(Number(eval(args[3])) || 1);
                        if (args[3] > 255){
                            args[3] = 255;
                        }else if(args[3] <= 0){
                            args[3] = 1;
                        }
                        $gameStopWatch._opaSet = -args[3];
                    }else{
                        $gameStopWatch._hide = true;
                        $gameStopWatch._show = false;
                        $gameStopWatch._opaSet = -255;
                    }
                }
            }

            if (args[1] === 'show'){
                if ($gameStopWatch._working === true){
                    args[2] = String(args[2] || '');
                    if (args[2] === 'fadein'){
                        args[3] = Math.abs(Number(eval(args[3])) || 1);
                        if (args[3] > 255){
                            args[3] = 255;
                        }else if(args[3] <= 0){
                            args[3] = 1;
                        }
                        $gameStopWatch._hide = false;
                        $gameStopWatch._show = false;
                        $gameStopWatch._opaSet = args[3];
                    }else{
                        $gameStopWatch._hide = false;
                        $gameStopWatch._show = false;
                        $gameStopWatch._opaSet = 255;
                    }
                }
            }

            if (args[1] === 'x'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameStopWatch._x = args[3];
                } else if (args[2] === 'reset'){
                    $gameStopWatch._x = UsefulTimer.param.stopWatch_x;
                }
            }

            if (args[1] === 'y'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameStopWatch._y = args[3];
                } else if (args[2] === 'reset'){
                    $gameStopWatch._y = UsefulTimer.param.stopWatch_y;
                }
            }

            if (args[1] === 'width'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameStopWatch._width = args[3];
                } else if (args[2] === 'reset'){
                    $gameStopWatch._width = UsefulTimer.param.stopWatch_width;
                }
            }

            if (args[1] === 'height'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameStopWatch._height = args[3];
                } else if (args[2] === 'reset'){
                    $gameStopWatch._height = UsefulTimer.param.stopWatch_height;
                }
            }

            if (args[1] === 'fontname'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(eval(args[3]));
                    $gameStopWatch._fFace = args[3];
                } else if (args[2] === 'reset'){
                    $gameStopWatch._fFace = UsefulTimer.param.stopWatch_fface;
                }
            }

            if (args[1] === 'fontsize'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = Number(eval(args[3]));
                    $gameStopWatch._fSize = args[3];
                } else if (args[2] === 'reset'){
                    $gameStopWatch._fSize = UsefulTimer.param.stopWatch_fsize;
                }
            }

            if (args[1] === 'italic'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameStopWatch._fItalic = true;
                } else if (args[2] === 'false'){
                    $gameStopWatch._fItalic = false;
                } else if (args[2] === 'reset'){
                    $gameStopWatch._fItalic = UsefulTimer.param.stopWatch_fitalic;
                }
            }

            if (args[1] === 'outlinewidth'){
                if (args[2] === 'set'){
                    args[3] = Number(eval(args[3]));
                    $gameStopWatch._olWidth = args[3];
                } else if (args[2] === 'reset'){
                    $gameStopWatch._olWidth = UsefulTimer.param.stopWatch_owidth;
                }
            }

            if (args[1] === 'textcolor'){
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameStopWatch._tColor = args[3];
                } else if (args[2] === 'reset'){
                    $gameStopWatch._tColor = UsefulTimer.param.stopWatch_tcolor;
                }
            }

            if (args[1] === 'outlinecolor'){
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameStopWatch._olColor = args[3];
                } else if (args[2] === 'reset'){
                    $gameStopWatch._olColor = UsefulTimer.param.stopWatch_ocolor;
                }
            }

            if (args[1] === 'opacity'){
                if (args[2] === 'set'){
                    args[3] = Number(eval(args[3]));
                    if(args[3] > 255){
                        args[3] = 255;
                    }else if(args[3] < 0){
                        args[3] = 0;
                    }
                    $gameStopWatch._pOpa = args[3];
                } else if (args[2] === 'reset'){
                    $gameStopWatch._pOpa = UsefulTimer.param.stopWatch_popa;
                }
            }

            if (args[1] === 'hour'){
                args[2] = String(args[2] || '');
                args[3] = Number(eval(args[3]))
                if (args[2] === 'true'){
                    $gameStopWatch._h = 'true';
                } else if (args[2] === 'false'){
                    $gameStopWatch._h = 'false';
                } else if (args[2] === 'reset'){
                    $gameStopWatch._h = UsefulTimer.param.stopWatch_h;
                    $gameStopWatch._h_zpad = UsefulTimer.param.stopWatch_h_zpad;
                }
                if (args[3] >= 1){
                    $gameStopWatch._h_zpad = args[3];
                }
                $gameStopWatch._show = false;
            }

            if (args[1] === 'min'){
                args[2] = String(args[2] || '');
                args[3] = Number(eval(args[3]))
                if (args[2] === 'true'){
                    $gameStopWatch._m = 'true';
                } else if (args[2] === 'false'){
                    $gameStopWatch._m = 'false';
                } else if (args[2] === 'reset'){
                    $gameStopWatch._m = UsefulTimer.param.stopWatch_m;
                    $gameStopWatch._m_zpad = UsefulTimer.param.stopWatch_m_zpad;
                }
                if (args[3] >= 1){
                    $gameStopWatch._m_zpad = args[3];
                }
                $gameStopWatch._show = false;
            }

            if (args[1] === 'sec'){
                args[2] = String(args[2] || '');
                args[3] = Number(eval(args[3]))
                if (args[2] === 'true'){
                    $gameStopWatch._s = 'true';
                } else if (args[2] === 'false'){
                    $gameStopWatch._s = 'false';
                } else if (args[2] === 'reset'){
                    $gameStopWatch._s = UsefulTimer.param.stopWatch_s;
                    $gameStopWatch._s_zpad = UsefulTimer.param.stopWatch_s_zpad;
                }
                if (args[3] >= 1){
                    $gameStopWatch._s_zpad = args[3];
                }
                $gameStopWatch._show = false;
            }

            if (args[1] === 'ms'){
                args[2] = String(args[2] || '');
                args[3] = Number(eval(args[3]))
                if (args[2] === 'true'){
                    $gameStopWatch._ms = 'true';
                } else if (args[2] === 'false'){
                    $gameStopWatch._ms = 'false';
                } else if (args[2] === 'reset'){
                    $gameStopWatch._ms = UsefulTimer.param.stopWatch_ms;
                    $gameStopWatch._ms_d = UsefulTimer.param.stopWatch_ms_d;
                }
                if (args[3] >= 1){
                    $gameStopWatch._ms_d = args[3];
                }
                $gameStopWatch._show = false;
            }

            if (args[1] === '60sec'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameStopWatch._60sec = 'true';
                } else if (args[2] === 'false'){
                    $gameStopWatch._60sec = 'false';
                } else if (args[2] === 'reset'){
                    $gameStopWatch._60sec = UsefulTimer.param.stopWatch_60sec;
                }
                $gameStopWatch._show = false;
            }

            if (args[1] === '60min'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameStopWatch._60min = 'true';
                } else if (args[2] === 'false'){
                    $gameStopWatch._60min = 'false';
                } else if (args[2] === 'reset'){
                    $gameStopWatch._60min = UsefulTimer.param.stopWatch_60min;
                }
                $gameStopWatch._show = false;
            }

            if (args[1] === 'workinbattle'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameStopWatch._workinB = true;
                } else if (args[2] === 'false'){
                    $gameStopWatch._workinB = false;
                } else if (args[2] === 'reset'){
                    $gameStopWatch._workinB = UsefulTimer.param.stopWatch_workinB;
                }
                $gameStopWatch._show = false;
            }

            if (args[1] === 'showinbattle'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameStopWatch._showinB = true;
                } else if (args[2] === 'false'){
                    $gameStopWatch._showinB = false;
                } else if (args[2] === 'reset'){
                    $gameStopWatch._showinB = UsefulTimer.param.stopWatch_showinB;
                }
                $gameStopWatch._show = false;
            }

            if (args[1] === 'reset'){
                $gameStopWatch._opaSet    = 0;

                $gameStopWatch._width     = UsefulTimer.param.stopWatch_width;
                $gameStopWatch._height    = UsefulTimer.param.stopWatch_height;
                $gameStopWatch._x         = UsefulTimer.param.stopWatch_x;
                $gameStopWatch._y         = UsefulTimer.param.stopWatch_y;
                $gameStopWatch._fFace     = UsefulTimer.param.stopWatch_fface;
                $gameStopWatch._fSize     = UsefulTimer.param.stopWatch_fsize;
                //$gameStopWatch._fBold     = UsefulTimer.param.stopWatch_fbold;
                $gameStopWatch._fItalic   = UsefulTimer.param.stopWatch_fitalic;
                $gameStopWatch._olWidth   = UsefulTimer.param.stopWatch_owidth;
                $gameStopWatch._tColor    = UsefulTimer.param.stopWatch_tcolor;
                $gameStopWatch._olColor   = UsefulTimer.param.stopWatch_ocolor;
                $gameStopWatch._olCDef    = UsefulTimer.param.stopWatch_ocolor;
                $gameStopWatch._pOpa      = UsefulTimer.param.stopWatch_popa;
                $gameStopWatch._pOpaMax   = UsefulTimer.param.stopWatch_popa;

                $gameStopWatch._ms        = UsefulTimer.param.stopWatch_ms;
                $gameStopWatch._s         = UsefulTimer.param.stopWatch_s;
                $gameStopWatch._m         = UsefulTimer.param.stopWatch_m;
                $gameStopWatch._h         = UsefulTimer.param.stopWatch_h;
                $gameStopWatch._ms_d      = UsefulTimer.param.stopWatch_ms_d;
                $gameStopWatch._s_zpad    = UsefulTimer.param.stopWatch_s_zpad;
                $gameStopWatch._m_zpad    = UsefulTimer.param.stopWatch_m_zpad;
                $gameStopWatch._h_zpad    = UsefulTimer.param.stopWatch_h_zpad;
                $gameStopWatch._60sec     = UsefulTimer.param.stopWatch_60sec;
                $gameStopWatch._60min     = UsefulTimer.param.stopWatch_60min;

                $gameStopWatch._show      = false;
            }

        }

        //========================================
        //現在時刻
        //========================================
        if (args[0] === 'clock') {
            args[1] = String(args[1]　|| ' ');

            if (args[1] === 'start'){
                args[2] = String(args[2] || ' ');
                if (args[2] ==='hide'){
                    $gameClock._hideStart = true;
                    $gameClock.start();
                }else{
                    $gameClock.start();
                }
            }

            if (args[1] === 'pause'){
                if ($gameClock._working === true){
                    $gameClock.pause();
                }
            }

            if (args[1] === 'resume'){
                if ($gameClock._working === true){
                    $gameClock.resume();
                }
            }

            if (args[1] === 'stop'){
                if ($gameClock._working === true){
                    $gameClock.stop();
                }
            }

            if (args[1] === 'show'){
                args[2] = String(args[2] || '');
                if (args[2] === 'fadein'){
                    args[3] = Math.abs(Number(eval(args[3])) || 1);
                    if (args[3] > 255){
                        args[3] = 255;
                    }else if(args[3] <= 0){
                        args[3] = 1;
                    }
                    $gameClock._hide = false;
                    $gameClock._show = false;
                    $gameClock._opaSet = args[3];
                }else{
                    $gameClock._hide = false;
                    $gameClock._show = false;
                    $gameClock._opaSet = 255;
                }
            }

            if (args[1] === 'hide'){
                args[2] = String(args[2] || '');
                if (args[2] === 'fadeout'){
                    args[3] = Math.abs(Number(eval(args[3])) || 1);
                    if (args[3] > 255){
                        args[3] = 255;
                    }else if(args[3] <= 0){
                        args[3] = 1;
                    }
                    $gameClock._opaSet = -args[3];
                }else{
                    $gameClock._hide = true;
                    $gameClock._show = false;
                    $gameClock._opaSet = -255;
                }
            }

            if (args[1] === 'setvar'){
                args[2] = Number(eval(args[2]) || 0);
                args[3] = Number(eval(args[3]) || 0);
                args[4] = Number(eval(args[4]) || 0);
                args[5] = Number(eval(args[5]) || 0);
                $gameClock._varID._h  = args[2];
                $gameClock._varID._m  = args[3];
                $gameClock._varID._s  = args[4];
                $gameClock._varID._ms = args[5];
            }

            if (args[1] === 'save'){
                args[2] = String(args[2] || 'off');
                if (args[2] ==='endless'){
                    $gameClock.setValue();
                    $gameClock._save._on = true;
                }else if (args[2] ==='once') {
                    $gameClock.setValue();
                    $gameClock._save._on = false;
                }else {
                    $gameClock._save._on = false;
                }
            }

            if (args[1] === 'x'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameClock._x = args[3];
                } else if (args[2] === 'reset'){
                    $gameClock._x = UsefulTimer.param.clock_x;
                }
            }

            if (args[1] === 'y'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameClock._y = args[3];
                } else if (args[2] === 'reset'){
                    $gameClock._y = UsefulTimer.param.clock_y;
                }
            }

            if (args[1] === 'width'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameClock._width = args[3];
                } else if (args[2] === 'reset'){
                    $gameClock._width = UsefulTimer.param.clock_width;
                }
            }

            if (args[1] === 'height'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameClock._height = args[3];
                } else if (args[2] === 'reset'){
                    $gameClock._height = UsefulTimer.param.clock_height;
                }
            }

            if (args[1] === 'fontname'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(eval(args[3]));
                    $gameClock._fFace = args[3];
                } else if (args[2] === 'reset'){
                    $gameClock._fFace = UsefulTimer.param.clock_fface;
                }
            }

            if (args[1] === 'fontsize'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = Number(eval(args[3]));
                    $gameClock._fSize = args[3];
                } else if (args[2] === 'reset'){
                    $gameClock._fSize = UsefulTimer.param.clock_fsize;
                }
            }

            if (args[1] === 'italic'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameClock._fItalic = true;
                } else if (args[2] === 'false'){
                    $gameClock._fItalic = false;
                } else if (args[2] === 'reset'){
                    $gameClock._fItalic = UsefulTimer.param.clock_fitalic;
                }
            }

            if (args[1] === 'outlinewidth'){
                if (args[2] === 'set'){
                    args[3] = Number(eval(args[3]));
                    $gameClock._olWidth = args[3];
                } else if (args[2] === 'reset'){
                    $gameClock._olWidth = UsefulTimer.param.clock_owidth;
                }
            }

            if (args[1] === 'textcolor'){
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameClock._tColor = args[3];
                } else if (args[2] === 'reset'){
                    $gameClock._tColor = UsefulTimer.param.clock_tcolor;
                }
            }

            if (args[1] === 'outlinecolor'){
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameClock._olColor = args[3];
                } else if (args[2] === 'reset'){
                    $gameClock._olColor = UsefulTimer.param.clock_ocolor;
                }
            }

            if (args[1] === 'opacity'){
                if (args[2] === 'set'){
                    args[3] = Number(eval(args[3]));
                    if(args[3] > 255){
                        args[3] = 255;
                    }else if(args[3] < 0){
                        args[3] = 0;
                    }
                    $gameClock._pOpa = args[3];
                } else if (args[2] === 'reset'){
                    $gameClock._pOpa = UsefulTimer.param.clock_popa;
                }
            }

            if (args[1] === 'hour'){
                args[2] = String(args[2] || '');
                args[3] = String(args[3] || '');
                if (args[2] === 'true'){
                    $gameClock._h = 'true';
                } else if (args[2] === 'false'){
                    $gameClock._h = 'false';
                } else if (args[2] === 'reset'){
                    $gameClock._h = UsefulTimer.param.clock_h;
                    $gameClock._h_zpad = UsefulTimer.param.clock_h_zpad;
                }
                if (args[3] === 'true'){
                    $gameClock._h_zpad = 'true';
                } else if (args[3] === 'false'){
                    $gameClock._h_zpad = 'false';
                }
                $gameClock._show = false;
            }

            if (args[1] === 'min'){
                args[2] = String(args[2] || '');
                args[3] = String(args[3] || '');
                if (args[2] === 'true'){
                    $gameClock._m = 'true';
                } else if (args[2] === 'false'){
                    $gameClock._m = 'false';
                } else if (args[2] === 'reset'){
                    $gameClock._m = UsefulTimer.param.clock_m;
                    $gameClock._m_zpad = UsefulTimer.param.clock_m_zpad;
                }
                if (args[3] === 'true'){
                    $gameClock._m_zpad = 'true';
                } else if (args[3] === 'false'){
                    $gameClock._m_zpad = 'false';
                }
                $gameClock._show = false;
            }

            if (args[1] === 'sec'){
                args[2] = String(args[2] || '');
                args[3] = String(args[3] || '');
                if (args[2] === 'true'){
                    $gameClock._s = 'true';
                } else if (args[2] === 'false'){
                    $gameClock._s = 'false';
                } else if (args[2] === 'reset'){
                    $gameClock._s = UsefulTimer.param.clock_s;
                    $gameClock._s_zpad = UsefulTimer.param.clock_s_zpad;
                }
                if (args[3] === 'true'){
                    $gameClock._s_zpad = 'true';
                } else if (args[3] === 'false'){
                    $gameClock._s_zpad = 'false';
                }
                $gameClock._show = false;
            }

            if (args[1] === 'ms'){
                args[2] = String(args[2] || '');
                args[3] = Number(eval(args[3]))
                if (args[2] === 'true'){
                    $gameClock._ms = 'true';
                } else if (args[2] === 'false'){
                    $gameClock._ms = 'false';
                } else if (args[2] === 'reset'){
                    $gameClock._ms = UsefulTimer.param.clock_ms;
                    $gameClock._ms_d = UsefulTimer.param.clock_ms_d;
                }
                if (args[3] >= 1){
                    $gameClock._ms_d = args[3];
                }
                $gameClock._show = false;
            }

            if (args[1] === 'workinbattle'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameClock._workinB = true;
                } else if (args[2] === 'false'){
                    $gameClock._workinB = false;
                } else if (args[2] === 'reset'){
                    $gameClock._workinB = UsefulTimer.param.clock_workinB;
                }
                $gameClock._show = false;
            }

            if (args[1] === 'showinbattle'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameClock._showinB = true;
                } else if (args[2] === 'false'){
                    $gameClock._showinB = false;
                } else if (args[2] === 'reset'){
                    $gameClock._showinB = UsefulTimer.param.clock_showinB;
                }
                $gameClock._show = false;
            }

            if (args[1] === 'reset'){
                $gameClock._opaSet    = 0;

                $gameClock._width     = UsefulTimer.param.clock_width;
                $gameClock._height    = UsefulTimer.param.clock_height;
                $gameClock._x         = UsefulTimer.param.clock_x;
                $gameClock._y         = UsefulTimer.param.clock_y;
                $gameClock._fFace     = UsefulTimer.param.clock_fface;
                $gameClock._fSize     = UsefulTimer.param.clock_fsize;
                //$gameClock._fBold     = UsefulTimer.param.clock_fbold;
                $gameClock._fItalic   = UsefulTimer.param.clock_fitalic;
                $gameClock._olWidth   = UsefulTimer.param.clock_owidth;
                $gameClock._tColor    = UsefulTimer.param.clock_tcolor;
                $gameClock._olColor   = UsefulTimer.param.clock_ocolor;
                $gameClock._olCDef    = UsefulTimer.param.clock_ocolor;
                $gameClock._pOpa      = UsefulTimer.param.clock_popa;
                $gameClock._pOpaMax   = UsefulTimer.param.clock_popa;

                $gameClock._ms        = UsefulTimer.param.clock_ms;
                $gameClock._s         = UsefulTimer.param.clock_s;
                $gameClock._m         = UsefulTimer.param.clock_m;
                $gameClock._h         = UsefulTimer.param.clock_h;
                $gameClock._ms_d      = UsefulTimer.param.clock_ms_d;
                $gameClock._s_zpad    = UsefulTimer.param.clock_s_zpad;
                $gameClock._m_zpad    = UsefulTimer.param.clock_m_zpad;
                $gameClock._h_zpad    = UsefulTimer.param.clock_h_zpad;

                $gameClock._show      = false;
            }

        }

        //========================================
        //現在年月日
        //========================================
        if (args[0] === 'date') {
            args[1] = String(args[1]　|| ' ');

            if (args[1] === 'start'){
                args[2] = String(args[2] || ' ');
                if (args[2] ==='hide'){
                    $gameDate._hideStart = true;
                    $gameDate.start();
                }else{
                    $gameDate.start();
                }
            }

            if (args[1] === 'pause'){
                if ($gameDate._working === true){
                    $gameDate.pause();
                }
            }

            if (args[1] === 'resume'){
                if ($gameDate._working === true){
                    $gameDate.resume();
                }
            }

            if (args[1] === 'stop'){
                if ($gameDate._working === true){
                    $gameDate.stop();
                }
            }

            if (args[1] === 'show'){
                args[2] = String(args[2] || '');
                if (args[2] === 'fadein'){
                    args[3] = Math.abs(Number(eval(args[3])) || 1);
                    if (args[3] > 255){
                        args[3] = 255;
                    }else if(args[3] <= 0){
                        args[3] = 1;
                    }
                    $gameDate._hide = false;
                    $gameDate._show = false;
                    $gameDate._opaSet = args[3];
                }else{
                    $gameDate._hide = false;
                    $gameDate._show = false;
                    $gameDate._opaSet = 255;
                }
            }

            if (args[1] === 'hide'){
                args[2] = String(args[2] || '');
                if (args[2] === 'fadeout'){
                    args[3] = Math.abs(Number(eval(args[3])) || 1);
                    if (args[3] > 255){
                        args[3] = 255;
                    }else if(args[3] <= 0){
                        args[3] = 1;
                    }
                    $gameDate._opaSet = -args[3];
                }else{
                    $gameDate._hide = true;
                    $gameDate._show = false;
                    $gameDate._opaSet = -255;
                }
            }

            if (args[1] === 'setvar'){
                args[2] = Number(eval(args[2]) || 0);
                args[3] = Number(eval(args[3]) || 0);
                args[4] = Number(eval(args[4]) || 0);
                args[5] = Number(eval(args[5]) || 0);
                $gameDate._varID._year  = args[2];
                $gameDate._varID._month = args[3];
                $gameDate._varID._date  = args[4];
                $gameDate._varID._day   = args[5];
            }

            if (args[1] === 'save'){
                args[2] = String(args[2] || 'off');
                if (args[2] ==='endless'){
                    $gameDate.setValue();
                    $gameDate._save._on = true;
                }else if (args[2] ==='once') {
                    $gameDate.setValue();
                    $gameDate._save._on = false;
                }else {
                    $gameDate._save._on = false;
                }
            }

            if (args[1] === 'x'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameDate._x = args[3];
                } else if (args[2] === 'reset'){
                    $gameDate._x = UsefulTimer.param.date_x;
                }
            }

            if (args[1] === 'y'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameDate._y = args[3];
                } else if (args[2] === 'reset'){
                    $gameDate._y = UsefulTimer.param.date_y;
                }
            }

            if (args[1] === 'width'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameDate._width = args[3];
                } else if (args[2] === 'reset'){
                    $gameDate._width = UsefulTimer.param.date_width;
                }
            }

            if (args[1] === 'height'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameDate._height = args[3];
                } else if (args[2] === 'reset'){
                    $gameDate._height = UsefulTimer.param.date_height;
                }
            }

            if (args[1] === 'fontname'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(eval(args[3]));
                    $gameDate._fFace = args[3];
                } else if (args[2] === 'reset'){
                    $gameDate._fFace = UsefulTimer.param.date_fface;
                }
            }

            if (args[1] === 'fontsize'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = Number(eval(args[3]));
                    $gameDate._fSize = args[3];
                } else if (args[2] === 'reset'){
                    $gameDate._fSize = UsefulTimer.param.date_fsize;
                }
            }

            if (args[1] === 'italic'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameDate._fItalic = true;
                } else if (args[2] === 'false'){
                    $gameDate._fItalic = false;
                } else if (args[2] === 'reset'){
                    $gameDate._fItalic = UsefulTimer.param.date_fitalic;
                }
            }

            if (args[1] === 'outlinewidth'){
                if (args[2] === 'set'){
                    args[3] = Number(eval(args[3]));
                    $gameDate._olWidth = args[3];
                } else if (args[2] === 'reset'){
                    $gameDate._olWidth = UsefulTimer.param.date_owidth;
                }
            }

            if (args[1] === 'textcolor'){
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameDate._tColor = args[3];
                } else if (args[2] === 'reset'){
                    $gameDate._tColor = UsefulTimer.param.date_tcolor;
                }
            }

            if (args[1] === 'outlinecolor'){
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameDate._olColor = args[3];
                } else if (args[2] === 'reset'){
                    $gameDate._olColor = UsefulTimer.param.date_ocolor;
                }
            }

            if (args[1] === 'opacity'){
                if (args[2] === 'set'){
                    args[3] = Number(eval(args[3]));
                    if(args[3] > 255){
                        args[3] = 255;
                    }else if(args[3] < 0){
                        args[3] = 0;
                    }
                    $gameDate._pOpa = args[3];
                } else if (args[2] === 'reset'){
                    $gameDate._pOpa = UsefulTimer.param.date_popa;
                }
            }

            if (args[1] === 'year'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameDate._year = 'true';
                } else if (args[2] === 'false'){
                    $gameDate._year = 'false';
                } else if (args[2] === 'reset'){
                    $gameDate._year = UsefulTimer.param.date_year;
                }
                $gameDate._show = false;
            }

            if (args[1] === 'month'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameDate._month = 'true';
                } else if (args[2] === 'false'){
                    $gameDate._month = 'false';
                } else if (args[2] === 'reset'){
                    $gameDate._month = UsefulTimer.param.date_month;
                }
                $gameDate._show = false;
            }

            if (args[1] === 'date'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameDate._date = 'true';
                } else if (args[2] === 'false'){
                    $gameDate._date = 'false';
                } else if (args[2] === 'reset'){
                    $gameDate._date = UsefulTimer.param.date_date;
                }
                $gameDate._show = false;
            }

            if (args[1] === 'day'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameDate._day = 'true';
                } else if (args[2] === 'false'){
                    $gameDate._day = 'false';
                } else if (args[2] === 'reset'){
                    $gameDate._day = UsefulTimer.param.date_day;
                }
                $gameDate._show = false;
            }

            if (args[1] === 'zeropad'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameDate._zpad = 'true';
                } else if (args[2] === 'false'){
                    $gameDate._zpad = 'false';
                } else if (args[2] === 'reset'){
                    $gameDate._zpad = UsefulTimer.param.date_zpad;
                }
                $gameDate._show = false;
            }

            if (args[1] === 'sun'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameDate._sun = args[3];
                }  else if (args[2] === 'reset'){
                    $gameDate._sun = UsefulTimer.param.date_day_sun;
                }
                $gameDate._show = false;
            }

            if (args[1] === 'mon'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameDate._mon = args[3];
                }  else if (args[2] === 'reset'){
                    $gameDate._mon = UsefulTimer.param.date_day_mon;
                }
                $gameDate._show = false;
            }

            if (args[1] === 'tue'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameDate._tue = args[3];
                }  else if (args[2] === 'reset'){
                    $gameDate._tue = UsefulTimer.param.date_day_tue;
                }
                $gameDate._show = false;
            }

            if (args[1] === 'wed'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameDate._wed = args[3];
                }  else if (args[2] === 'reset'){
                    $gameDate._wed = UsefulTimer.param.date_day_wed;
                }
                $gameDate._show = false;
            }

            if (args[1] === 'thu'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameDate._thu = args[3];
                }  else if (args[2] === 'reset'){
                    $gameDate._thu = UsefulTimer.param.date_day_thu;
                }
                $gameDate._show = false;
            }

            if (args[1] === 'fri'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameDate._fri = args[3];
                }  else if (args[2] === 'reset'){
                    $gameDate._fri = UsefulTimer.param.date_day_fri;
                }
                $gameDate._show = false;
            }

            if (args[1] === 'sat'){
                args[2] = String(args[2] || '');
                if (args[2] === 'set'){
                    args[3] = String(args[3]);
                    $gameDate._sat = args[3];
                }  else if (args[2] === 'reset'){
                    $gameDate._sat = UsefulTimer.param.date_day_sat;
                }
                $gameDate._show = false;
            }

            if (args[1] === 'workinbattle'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameDate._workinB = true;
                } else if (args[2] === 'false'){
                    $gameDate._workinB = false;
                } else if (args[2] === 'reset'){
                    $gameDate._workinB = UsefulTimer.param.date_workinB;
                }
                $gameDate._show = false;
            }

            if (args[1] === 'showinbattle'){
                args[2] = String(args[2] || '');
                if (args[2] === 'true'){
                    $gameDate._showinB = true;
                } else if (args[2] === 'false'){
                    $gameDate._showinB = false;
                } else if (args[2] === 'reset'){
                    $gameDate._showinB = UsefulTimer.param.date_showinB;
                }
                $gameDate._show = false;
            }

            if (args[1] === 'reset'){
                $gameDate._opaSet        = 0;

                $gameDate._width     = UsefulTimer.param.date_width;
                $gameDate._height    = UsefulTimer.param.date_height;
                $gameDate._x         = UsefulTimer.param.date_x;
                $gameDate._y         = UsefulTimer.param.date_y;
                $gameDate._fFace     = UsefulTimer.param.date_fface;
                $gameDate._fSize     = UsefulTimer.param.date_fsize;
                //$gameDate._fBold     = UsefulTimer.param.date_fbold;
                $gameDate._fItalic   = UsefulTimer.param.date_fitalic;
                $gameDate._olWidth   = UsefulTimer.param.date_owidth;
                $gameDate._tColor    = UsefulTimer.param.date_tcolor;
                $gameDate._olColor   = UsefulTimer.param.date_ocolor;
                $gameDate._olCDef    = UsefulTimer.param.date_ocolor;
                $gameDate._pOpa      = UsefulTimer.param.date_popa;
                $gameDate._pOpaMax   = UsefulTimer.param.date_popa;

                $gameDate._zpad      = UsefulTimer.param.date_zpad;
                $gameDate._year      = UsefulTimer.param.date_year;
                $gameDate._month     = UsefulTimer.param.date_month;
                $gameDate._date      = UsefulTimer.param.date_date;
                $gameDate._day       = UsefulTimer.param.date_day;

                $gameDate._sun       = UsefulTimer.param.date_day_sun;
                $gameDate._mon       = UsefulTimer.param.date_day_mon;
                $gameDate._tue       = UsefulTimer.param.date_day_tue;
                $gameDate._wed       = UsefulTimer.param.date_day_wed;
                $gameDate._thu       = UsefulTimer.param.date_day_thu;
                $gameDate._fri       = UsefulTimer.param.date_day_fri;
                $gameDate._sat       = UsefulTimer.param.date_day_sat;

                $gameDate._show     = false;
            }

        }

        if (args[0] === 'all') {
            args[1] = String(args[1]　|| ' ');
            if (args[1] === 'reset'){
                $gameTimer._opaSet    = 0;

                $gameTimer._width     = UsefulTimer.param.timer_width;
                $gameTimer._height    = UsefulTimer.param.timer_height;
                $gameTimer._x         = UsefulTimer.param.timer_x;
                $gameTimer._y         = UsefulTimer.param.timer_y;
                $gameTimer._fFace     = UsefulTimer.param.timer_fface;
                $gameTimer._fSize     = UsefulTimer.param.timer_fsize;
                //$gameTimer._fBold     = UsefulTimer.param.timer_fbold;
                $gameTimer._fItalic   = UsefulTimer.param.timer_fitalic;
                $gameTimer._olWidth   = UsefulTimer.param.timer_owidth;
                $gameTimer._tColor    = UsefulTimer.param.timer_tcolor;
                $gameTimer._olColor   = UsefulTimer.param.timer_ocolor;
                $gameTimer._olCDef    = UsefulTimer.param.timer_ocolor;
                $gameTimer._pOpa      = UsefulTimer.param.timer_popa;
                $gameTimer._pOpaMax   = UsefulTimer.param.timer_popa;

                $gameTimer._ms        = UsefulTimer.param.timer_ms;
                $gameTimer._s         = UsefulTimer.param.timer_s;
                $gameTimer._m         = UsefulTimer.param.timer_m;
                $gameTimer._h         = UsefulTimer.param.timer_h;
                $gameTimer._ms_d      = UsefulTimer.param.timer_ms_d;
                $gameTimer._s_zpad    = UsefulTimer.param.timer_s_zpad;
                $gameTimer._m_zpad    = UsefulTimer.param.timer_m_zpad;
                $gameTimer._h_zpad    = UsefulTimer.param.timer_h_zpad;
                $gameTimer._60sec     = UsefulTimer.param.timer_60sec;
                $gameTimer._60min     = UsefulTimer.param.timer_60min;

                $gameTimer._show      = false;


                $gameStopWatch._opaSet    = 0;

                $gameStopWatch._width     = UsefulTimer.param.stopWatch_width;
                $gameStopWatch._height    = UsefulTimer.param.stopWatch_height;
                $gameStopWatch._x         = UsefulTimer.param.stopWatch_x;
                $gameStopWatch._y         = UsefulTimer.param.stopWatch_y;
                $gameStopWatch._fFace     = UsefulTimer.param.stopWatch_fface;
                $gameStopWatch._fSize     = UsefulTimer.param.stopWatch_fsize;
                //$gameStopWatch._fBold     = UsefulTimer.param.stopWatch_fbold;
                $gameStopWatch._fItalic   = UsefulTimer.param.stopWatch_fitalic;
                $gameStopWatch._olWidth   = UsefulTimer.param.stopWatch_owidth;
                $gameStopWatch._tColor    = UsefulTimer.param.stopWatch_tcolor;
                $gameStopWatch._olColor   = UsefulTimer.param.stopWatch_ocolor;
                $gameStopWatch._olCDef    = UsefulTimer.param.stopWatch_ocolor;
                $gameStopWatch._pOpa      = UsefulTimer.param.stopWatch_popa;
                $gameStopWatch._pOpaMax   = UsefulTimer.param.stopWatch_popa;

                $gameStopWatch._ms        = UsefulTimer.param.stopWatch_ms;
                $gameStopWatch._s         = UsefulTimer.param.stopWatch_s;
                $gameStopWatch._m         = UsefulTimer.param.stopWatch_m;
                $gameStopWatch._h         = UsefulTimer.param.stopWatch_h;
                $gameStopWatch._ms_d      = UsefulTimer.param.stopWatch_ms_d;
                $gameStopWatch._s_zpad    = UsefulTimer.param.stopWatch_s_zpad;
                $gameStopWatch._m_zpad    = UsefulTimer.param.stopWatch_m_zpad;
                $gameStopWatch._h_zpad    = UsefulTimer.param.stopWatch_h_zpad;
                $gameStopWatch._60sec     = UsefulTimer.param.stopWatch_60sec;
                $gameStopWatch._60min     = UsefulTimer.param.stopWatch_60min;

                $gameStopWatch._show      = false;


                $gameClock._opaSet    = 0;

                $gameClock._width     = UsefulTimer.param.clock_width;
                $gameClock._height    = UsefulTimer.param.clock_height;
                $gameClock._x         = UsefulTimer.param.clock_x;
                $gameClock._y         = UsefulTimer.param.clock_y;
                $gameClock._fFace     = UsefulTimer.param.clock_fface;
                $gameClock._fSize     = UsefulTimer.param.clock_fsize;
                //$gameClock._fBold     = UsefulTimer.param.clock_fbold;
                $gameClock._fItalic   = UsefulTimer.param.clock_fitalic;
                $gameClock._olWidth   = UsefulTimer.param.clock_owidth;
                $gameClock._tColor    = UsefulTimer.param.clock_tcolor;
                $gameClock._olColor   = UsefulTimer.param.clock_ocolor;
                $gameClock._olCDef    = UsefulTimer.param.clock_ocolor;
                $gameClock._pOpa      = UsefulTimer.param.clock_popa;
                $gameClock._pOpaMax   = UsefulTimer.param.clock_popa;

                $gameClock._ms        = UsefulTimer.param.clock_ms;
                $gameClock._s         = UsefulTimer.param.clock_s;
                $gameClock._m         = UsefulTimer.param.clock_m;
                $gameClock._h         = UsefulTimer.param.clock_h;
                $gameClock._ms_d      = UsefulTimer.param.clock_ms_d;
                $gameClock._s_zpad    = UsefulTimer.param.clock_s_zpad;
                $gameClock._m_zpad    = UsefulTimer.param.clock_m_zpad;
                $gameClock._h_zpad    = UsefulTimer.param.clock_h_zpad;

                $gameClock._show      = false;


                $gameDate._opaSet        = 0;

                $gameDate._width     = UsefulTimer.param.date_width;
                $gameDate._height    = UsefulTimer.param.date_height;
                $gameDate._x         = UsefulTimer.param.date_x;
                $gameDate._y         = UsefulTimer.param.date_y;
                $gameDate._fFace     = UsefulTimer.param.date_fface;
                $gameDate._fSize     = UsefulTimer.param.date_fsize;
                //$gameDate._fBold     = UsefulTimer.param.date_fbold;
                $gameDate._fItalic   = UsefulTimer.param.date_fitalic;
                $gameDate._olWidth   = UsefulTimer.param.date_owidth;
                $gameDate._tColor    = UsefulTimer.param.date_tcolor;
                $gameDate._olColor   = UsefulTimer.param.date_ocolor;
                $gameDate._olCDef    = UsefulTimer.param.date_ocolor;
                $gameDate._pOpa      = UsefulTimer.param.date_popa;
                $gameDate._pOpaMax       = UsefulTimer.param.date_popa;

                $gameDate._zpad      = UsefulTimer.param.date_zpad;
                $gameDate._year      = UsefulTimer.param.date_year;
                $gameDate._month     = UsefulTimer.param.date_month;
                $gameDate._date      = UsefulTimer.param.date_date;
                $gameDate._day       = UsefulTimer.param.date_day;

                $gameDate._sun       = UsefulTimer.param.date_day_sun;
                $gameDate._mon       = UsefulTimer.param.date_day_mon;
                $gameDate._tue       = UsefulTimer.param.date_day_tue;
                $gameDate._wed       = UsefulTimer.param.date_day_wed;
                $gameDate._thu       = UsefulTimer.param.date_day_thu;
                $gameDate._fri       = UsefulTimer.param.date_day_fri;
                $gameDate._sat       = UsefulTimer.param.date_day_sat;

                $gameDate._show     = false;
            }
        }

    }
};

//-----------------------------------------------------------------------------
// DataManager
//

UsefulTimer.func.DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function(){
    UsefulTimer.func.DataManager_createGameObjects.call(this);
    $gameStopWatch = new Game_StopWatch();
    $gameClock     = new Game_Clock();
    $gameDate      = new Game_Date();
};

UsefulTimer.func.DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
    var contents = UsefulTimer.func.DataManager_makeSaveContents();
    contents.stopWatch = $gameStopWatch;
    contents.clock     = $gameClock;
    contents.date      = $gameDate;
    return contents;
};

UsefulTimer.func.DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents){
    UsefulTimer.func.DataManager_extractSaveContents(contents);
    $gameStopWatch = contents.stopWatch;
    $gameClock     = contents.clock;
    $gameDate      = contents.date;
};



//-----------------------------------------------------------------------------
// Game_Timer
//

UsefulTimer.func.Game_Timer_prototype_initialize = Game_Timer.prototype.initialize;
Game_Timer.prototype.initialize = function(){

    this._hideStart = false;
    this._hide      = false;
    this._pause     = false;
    this._show      = false;
    this._varID     = {};
    this._save      = {};

    this._width     = UsefulTimer.param.timer_width;
    this._height    = UsefulTimer.param.timer_height;
    this._x         = UsefulTimer.param.timer_x;
    this._y         = UsefulTimer.param.timer_y;
    this._fFace     = UsefulTimer.param.timer_fface;
    this._fSize     = UsefulTimer.param.timer_fsize;
    //this._fBold     = UsefulTimer.param.timer_fbold;
    this._fItalic   = UsefulTimer.param.timer_fitalic;
    this._olWidth   = UsefulTimer.param.timer_owidth;
    this._tColor    = UsefulTimer.param.timer_tcolor;
    this._olColor   = UsefulTimer.param.timer_ocolor;
    this._olCDef    = UsefulTimer.param.timer_ocolor;
    this._pOpa      = UsefulTimer.param.timer_popa;
    this._pOpaMax   = UsefulTimer.param.timer_popa;
    this._opaSet    = 0;

    this._ms        = UsefulTimer.param.timer_ms;
    this._s         = UsefulTimer.param.timer_s;
    this._m         = UsefulTimer.param.timer_m;
    this._h         = UsefulTimer.param.timer_h;
    this._ms_d      = UsefulTimer.param.timer_ms_d;
    this._s_zpad    = UsefulTimer.param.timer_s_zpad;
    this._m_zpad    = UsefulTimer.param.timer_m_zpad;
    this._h_zpad    = UsefulTimer.param.timer_h_zpad;
    this._60sec     = UsefulTimer.param.timer_60sec;
    this._60min     = UsefulTimer.param.timer_60min;
    this._workinB   = UsefulTimer.param.timer_workinB;
    this._showinB   = UsefulTimer.param.timer_showinB;

    UsefulTimer.func.Game_Timer_prototype_initialize.call(this);
};

UsefulTimer.func.Game_Timer_prototype_update = Game_Timer.prototype.update;
Game_Timer.prototype.update = function(sceneActive) {
    if (this._frames < 0) this._frames = 0;
    if (this._pause) return;
    if (!this._workinB){
        if($gameParty.inBattle()) return;
    }

    if (sceneActive && this._working && this._frames > 0) {
        this._frames--;
        if (this._save._on === true) this.setValue();
        if (this._frames === 0) this.onExpire();
    }
};

Game_Timer.prototype.setValue = function() {
    if (this._varID._f >= 1){
        $gameVariables.setValue(this._varID._f, this._frames);
    }
    if (this._varID._ms >= 1){
        $gameVariables.setValue(this._varID._ms,this.mSeconds());
    }
    if (this._varID._s >= 1){
        $gameVariables.setValue(this._varID._s, this.seconds() % 60);
    }
    if (this._varID._m >= 1){
        $gameVariables.setValue(this._varID._m, this.minutes() % 60);
    }
    if (this._varID._h >= 1){
        $gameVariables.setValue(this._varID._h, this.hours()/* % 24 */);
    }
    if (this._varID._d >= 1){
        $gameVariables.setValue(this._varID._d, this.days());
    }
};

UsefulTimer.func.Game_Timer_prototype_start = Game_Timer.prototype.start;
Game_Timer.prototype.start = function(count) {
    if (this._hideStart === true){
        this._hide      = true;
        this._hideStart = false;
        this._opaSet    = -255;
    }else{
        this._hide      = false;
        this._opaSet    = 255;
    }
    this._show  = false;
    UsefulTimer.func.Game_Timer_prototype_start.call(this,count);
};

UsefulTimer.func.Game_Timer_prototype_stop = Game_Timer.prototype.stop;
Game_Timer.prototype.stop = function() {
    UsefulTimer.func.Game_Timer_prototype_stop.call(this);
};

Game_Timer.prototype.pause = function() {
    this._pause = true;
};

Game_Timer.prototype.resume = function() {
    this._pause = false;
};

Game_Timer.prototype.isPaused = function() {
    return this._pause;
};

Game_Timer.prototype.mSeconds = function() {
    var ms  = Math.floor(((this._frames % 60) * (1000 / 60)));
        ms  = String(ms);
        ms  = ms.slice(-3);
        ms  = Number(ms);
    return ms;
};

Game_Timer.prototype.minutes = function() {
    return Math.floor(this.seconds() / 60);
};

Game_Timer.prototype.hours = function() {
    return Math.floor(this.minutes() / 60);
};

Game_Timer.prototype.days = function() {
    return Math.floor(this.hours() / 24);
};



//=============================================================================
// Game_StopWatch
//=============================================================================

function Game_StopWatch() {
    this.initialize.apply(this, arguments);
}

Game_StopWatch.prototype.initialize = function() {
    this._hideStart = false;
    this._hide      = false;
    this._pause     = false;
    this._show      = false;
    this._varID     = {};
    this._save      = {};

    this._width     = UsefulTimer.param.stopWatch_width;
    this._height    = UsefulTimer.param.stopWatch_height;
    this._x         = UsefulTimer.param.stopWatch_x;
    this._y         = UsefulTimer.param.stopWatch_y;
    this._fFace     = UsefulTimer.param.stopWatch_fface;
    this._fSize     = UsefulTimer.param.stopWatch_fsize;
    //this._fBold     = UsefulTimer.param.stopWatch_fbold;
    this._fItalic   = UsefulTimer.param.stopWatch_fitalic;
    this._olWidth   = UsefulTimer.param.stopWatch_owidth;
    this._tColor    = UsefulTimer.param.stopWatch_tcolor;
    this._olColor   = UsefulTimer.param.stopWatch_ocolor;
    this._olCDef    = UsefulTimer.param.stopWatch_ocolor;
    this._pOpa      = UsefulTimer.param.stopWatch_popa;
    this._pOpaMax   = UsefulTimer.param.stopWatch_popa;
    this._opaSet    = 0;

    this._ms        = UsefulTimer.param.stopWatch_ms;
    this._s         = UsefulTimer.param.stopWatch_s;
    this._m         = UsefulTimer.param.stopWatch_m;
    this._h         = UsefulTimer.param.stopWatch_h;
    this._ms_d      = UsefulTimer.param.stopWatch_ms_d;
    this._s_zpad    = UsefulTimer.param.stopWatch_s_zpad;
    this._m_zpad    = UsefulTimer.param.stopWatch_m_zpad;
    this._h_zpad    = UsefulTimer.param.stopWatch_h_zpad;
    this._60sec     = UsefulTimer.param.stopWatch_60sec;
    this._60min     = UsefulTimer.param.stopWatch_60min;
    this._workinB   = UsefulTimer.param.stopWatch_workinB;
    this._showinB   = UsefulTimer.param.stopWatch_showinB;

    this._frames    = 0;
    this._working   = false;
};

Game_StopWatch.prototype.update = function(sceneActive) {
    if (this._frames < 0) this._frames = 0;
    if (this._pause) return;
    if (!this._workinB){
        if($gameParty.inBattle()) return;
    }

    if (sceneActive && this._working) {
        this._frames++;
        if (this._save._on === true) this.setValue();
    }
};

Game_StopWatch.prototype.setValue = function() {
    if (this._varID._f >= 1){
        $gameVariables.setValue(this._varID._f, this._frames);
    }
    if (this._varID._ms >= 1){
        $gameVariables.setValue(this._varID._ms,this.mSeconds());
    }
    if (this._varID._s >= 1){
        $gameVariables.setValue(this._varID._s, this.seconds() % 60);
    }
    if (this._varID._m >= 1){
        $gameVariables.setValue(this._varID._m, this.minutes() % 60);
    }
    if (this._varID._h >= 1){
        $gameVariables.setValue(this._varID._h, this.hours()/* % 24 */);
    }
    if (this._varID._d >= 1){
        $gameVariables.setValue(this._varID._d, this.days());
    }
};

Game_StopWatch.prototype.start = function() {
    if (this._hideStart === true){
        this._hide = true;
        this._hideStart = false;
        this._opaSet = -255;
    }else{
        this._hide = false;
        this._opaSet = 255;
    }
    this._frames = 0;
    this._show = false;
    this._working = true;
};

Game_StopWatch.prototype.stop = function() {
    this._working = false;
};

Game_StopWatch.prototype.pause = function() {
    this._pause = true;
};

Game_StopWatch.prototype.resume = function() {
    this._pause = false;
};

Game_StopWatch.prototype.isWorking = function() {
    return this._working;
};

Game_StopWatch.prototype.isPaused = function() {
    return this._pause;
};

Game_StopWatch.prototype.mSeconds = function() {
    var ms  = Math.floor(((this._frames % 60) * (1000 / 60)));
        ms  = String(ms);
        ms  = ms.slice(-3);
        ms  = Number(ms);
    return ms;
};

Game_StopWatch.prototype.seconds = function() {
    return Math.floor(this._frames / 60);
};

Game_StopWatch.prototype.minutes = function() {
    return Math.floor(this.seconds() / 60);
};

Game_StopWatch.prototype.hours = function() {
    return Math.floor(this.minutes() / 60);
};

Game_StopWatch.prototype.days = function() {
    return Math.floor(this.hours() / 24);
};

Game_StopWatch.prototype.onExpire = function() {
    BattleManager.abort();
};



//=============================================================================
// Game_Clock
//=============================================================================

function Game_Clock() {
    this.initialize.apply(this, arguments);
}

Game_Clock.prototype.initialize = function() {
    this._NowTimes = new Date();

    this._hideStart = false;
    this._hide      = true
    this._pause     = false;
    this._show      = false;
    this._varID     = {};
    this._save      = {};

    this._width     = UsefulTimer.param.clock_width;
    this._height    = UsefulTimer.param.clock_height;
    this._x         = UsefulTimer.param.clock_x;
    this._y         = UsefulTimer.param.clock_y;
    this._fFace     = UsefulTimer.param.clock_fface;
    this._fSize     = UsefulTimer.param.clock_fsize;
    //this._fBold     = UsefulTimer.param.clock_fbold;
    this._fItalic   = UsefulTimer.param.clock_fitalic;
    this._olWidth   = UsefulTimer.param.clock_owidth;
    this._tColor    = UsefulTimer.param.clock_tcolor;
    this._olColor   = UsefulTimer.param.clock_ocolor;
    this._olCDef    = UsefulTimer.param.clock_ocolor;
    this._pOpa      = UsefulTimer.param.clock_popa;
    this._pOpaMax   = UsefulTimer.param.clock_popa;
    this._opaSet    = -255;

    this._ms        = UsefulTimer.param.clock_ms;
    this._s         = UsefulTimer.param.clock_s;
    this._m         = UsefulTimer.param.clock_m;
    this._h         = UsefulTimer.param.clock_h;
    this._ms_d      = UsefulTimer.param.clock_ms_d;
    this._s_zpad    = UsefulTimer.param.clock_s_zpad;
    this._m_zpad    = UsefulTimer.param.clock_m_zpad;
    this._h_zpad    = UsefulTimer.param.clock_h_zpad;
    this._workinB   = UsefulTimer.param.clock_workinB;
    this._showinB   = UsefulTimer.param.clock_showinB;

    this._nowHours      = this._NowTimes.getHours();
    this._nowMinutes    = this._NowTimes.getMinutes();
    this._nowSeconds    = this._NowTimes.getSeconds();
    this._nowMSeconds   = this._NowTimes.getMilliseconds();

    this._working = false;
};

Game_Clock.prototype.update = function(sceneActive) {
    if (this._pause) return;
    if (!this._workinB){
        if($gameParty.inBattle()) return;
    }

    if (sceneActive && this._working) {
        this._NowTimes = new Date();
        this._nowHours   = this._NowTimes.getHours();
        this._nowMinutes = this._NowTimes.getMinutes();
        this._nowSeconds = this._NowTimes.getSeconds();
        this._nowMSeconds = this._NowTimes.getMilliseconds();
        if (this._save._on === true) this.setValue();
    }
};

Game_Clock.prototype.setValue = function() {
    if (this._varID._h >= 1){
        $gameVariables.setValue(this._varID._h, this._nowHours);
    }
    if (this._varID._m >= 1){
        $gameVariables.setValue(this._varID._m, this._nowMinutes);
    }
    if (this._varID._s >= 1){
        $gameVariables.setValue(this._varID._s, this._nowSeconds);
    }
    if (this._varID._ms >= 1){
        $gameVariables.setValue(this._varID._ms, this._nowMSeconds);
    }
};

Game_Clock.prototype.start = function() {
    if (this._hideStart === true){
        this._hide = true;
        this._hideStart = false;
        this._opaSet = -255;
    }else{
        this._hide = false;
        this._opaSet = 255;
    }
    this._show = false;
    this._working = true;
};

Game_Clock.prototype.stop = function() {
    this._working = false;
};

Game_Clock.prototype.pause = function() {
    this._pause = true;
};

Game_Clock.prototype.resume = function() {
    this._pause = false;
};

Game_Clock.prototype.isWorking = function() {
    return this._working;
};

Game_Clock.prototype.isPaused = function() {
    return this._pause;
};

Game_Clock.prototype.onExpire = function() {
    BattleManager.abort();
};



//=============================================================================
// Game_Date
//=============================================================================

function Game_Date() {
    this.initialize.apply(this, arguments);
}

Game_Date.prototype.initialize = function() {
    this._NowTimes = new Date();

    this._hideStart     = false;
    this._hide          = true
    this._pause         = false;
    this._show          = false;
    this._varID         = {};
    this._save          = {};

    this._width         = UsefulTimer.param.date_width;
    this._height        = UsefulTimer.param.date_height;
    this._x             = UsefulTimer.param.date_x;
    this._y             = UsefulTimer.param.date_y;
    this._fFace         = UsefulTimer.param.date_fface;
    this._fSize         = UsefulTimer.param.date_fsize;
    //this._fBold       = UsefulTimer.param.date_fbold;
    this._fItalic       = UsefulTimer.param.date_fitalic;
    this._olWidth       = UsefulTimer.param.date_owidth;
    this._tColor        = UsefulTimer.param.date_tcolor;
    this._olColor       = UsefulTimer.param.date_ocolor;
    this._olCDef        = UsefulTimer.param.date_ocolor;
    this._pOpa          = UsefulTimer.param.date_popa;
    this._pOpaMax       = UsefulTimer.param.date_popa;
    this._opaSet        = -255;

    this._zpad          = UsefulTimer.param.date_zpad;
    this._year          = UsefulTimer.param.date_year;
    this._month         = UsefulTimer.param.date_month;
    this._date          = UsefulTimer.param.date_date;
    this._day           = UsefulTimer.param.date_day;
    this._workinB       = UsefulTimer.param.date_workinB;
    this._showinB       = UsefulTimer.param.date_showinB;

    this._nowYear       = this._NowTimes.getFullYear();
    this._nowMonth      = this._NowTimes.getMonth() + 1;
    this._nowDate       = this._NowTimes.getDate();
    this._nowDay        = this._NowTimes.getDay();

    this._dayStr        = new Array("日","月","火","水","木","金","土");
    this._sun           = UsefulTimer.param.date_day_sun;
    this._mon           = UsefulTimer.param.date_day_mon;
    this._tue           = UsefulTimer.param.date_day_tue;
    this._wed           = UsefulTimer.param.date_day_wed;
    this._thu           = UsefulTimer.param.date_day_thu;
    this._fri           = UsefulTimer.param.date_day_fri;
    this._sat           = UsefulTimer.param.date_day_sat;

    this._working       = false;
};

Game_Date.prototype.update = function(sceneActive) {
    if (this._pause) return;
    if (!this._workinB){
        if($gameParty.inBattle()) return;
    }

    if (sceneActive && this._working) {
        this._NowTimes  = new Date();
        this._nowYear   = this._NowTimes.getFullYear();
        this._nowMonth  = this._NowTimes.getMonth() + 1;
        this._nowDate   = this._NowTimes.getDate();
        this._nowDay    = this._NowTimes.getDay();
        if (this._save._on === true) this.setValue();
    }
};

Game_Date.prototype.setValue = function() {
    if (this._varID._year >= 1){
        $gameVariables.setValue(this._varID._year, this._nowYear);
    }
    if (this._varID._month >= 1){
        $gameVariables.setValue(this._varID._month,this._nowMonth);
    }
    if (this._varID._date >= 1){
        $gameVariables.setValue(this._varID._date, this._nowDate);
    }
    if (this._varID._day >= 1){
        $gameVariables.setValue(this._varID._day, this._nowDay);
    }
};

Game_Date.prototype.start = function() {
    if (this._hideStart === true){
        this._hide      = true;
        this._hideStart = false;
        this._opaSet    = -255;
    }else{
        this._hide      = false;
        this._opaSet    = 255;
    }
    this._show      = false;
    this._working   = true;
};

Game_Date.prototype.stop = function() {
    this._working = false;
};

Game_Date.prototype.pause = function() {
    this._pause = true;
};

Game_Date.prototype.resume = function() {
    this._pause = false;
};

Game_Date.prototype.isWorking = function() {
    return this._working;
};

Game_Date.prototype.isPaused = function() {
    return this._pause;
};

Game_Date.prototype.day = function() {
    return this._dayStr[this._nowDay];
};

Game_Date.prototype.onExpire = function() {
    BattleManager.abort();
};



//-----------------------------------------------------------------------------
// Sprite_Timer
//

UsefulTimer.func.Sprite_Timer_prototype_createBitmap = Sprite_Timer.prototype.createBitmap;
Sprite_Timer.prototype.createBitmap = function(){
    var w  = Number(eval($gameTimer._width));
    var h  = Number(eval($gameTimer._height));

    this.bitmap = new Bitmap(w, h);

    this.bitmap.fontFace     = $gameTimer._fFace;
    this.bitmap.fontSize     = $gameTimer._fSize;
    //this.bitmap.fontBold     = eval($gameTimer._fBold);
    this.bitmap.fontItalic   = eval($gameTimer._fItalic);
    this.bitmap.outlineWidth = $gameTimer._olWidth;
    this.bitmap.textColor    = $gameTimer._tColor;
    this.olColor             = $gameTimer._olColor;
    this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
    this.bitmap.paintOpacity = $gameTimer._pOpa;
};

UsefulTimer.func.Sprite_Timer_prototype_updateBitmap = Sprite_Timer.prototype.updateBitmap;
Sprite_Timer.prototype.updateBitmap = function() {
    this.textStatusUpdate();

    if ($gameTimer._opaSet !== 0){
        this._seconds = $gameTimer.seconds();
        this.textFade();
    } else if ($gameTimer._ms === 'true' && this.visible === true){
        this._seconds = $gameTimer.seconds();
        this.redraw();
    } else if (this._seconds !== $gameTimer.seconds() || $gameTimer._show === false) {
        if ($gameTimer._show === false) $gameTimer._show = true;
        this._seconds = $gameTimer.seconds();
        this.redraw();
    }
};

Sprite_Timer.prototype.textStatusUpdate = function() {
    if (Number(eval($gameTimer._width)) !== this.bitmap.width ||
    Number(eval($gameTimer._height)) !== this.bitmap.height){
        this.createBitmap();
        this.redraw();
    }
    if ($gameTimer._fFace !== this.bitmap.fontFace){
        this.bitmap.fontFace = $gameTimer._fFace;
        this.redraw();
    }
    if ($gameTimer._fSize !== this.bitmap.fontSize){
        this.bitmap.fontSize = $gameTimer._fSize;
        this.redraw();
    }
    /*
    if (eval($gameTimer._fBold) !== this.bitmap.fontBold){
        this.bitmap.fontBold = eval($gameTimer._fBold);
        this.redraw();
    }
    */
    if (eval($gameTimer._fItalic) !== this.bitmap.fontItalic){
        this.bitmap.fontItalic = eval($gameTimer._fItalic);
        this.redraw();
    }
    if ($gameTimer._olWidth !== this.bitmap.outlineWidth){
        this.bitmap.outlineWidth = $gameTimer._olWidth;
        this.redraw();
    }
    if ($gameTimer._tColor !== this.bitmap.textColor){
        this.bitmap.textColor = $gameTimer._tColor;
        this.redraw();
    }
    if ($gameTimer._olColor !== this.olColor){
        $gameTimer._olCDef = $gameTimer._olColor;
        this.olColor = $gameTimer._olCDef;
        this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
        this.redraw();
    }
    if ($gameTimer._pOpa !== this.bitmap.paintOpacity){
        $gameTimer._pOpaMax = $gameTimer._pOpa;
        this.bitmap.paintOpacity = $gameTimer._pOpaMax;
        this.redraw();
    }
}

Sprite_Timer.prototype.textFade = function() {
    //==================================================
    //文字の縁のフェード処理
    //==================================================
    var olCDef = [];
    var olCNow = [];
    var comma = ',';
    olCDef = $gameTimer._olCDef.split(comma);
    olCNow = this.olColor.split(comma)
    olCDef[3] = Number(olCDef[3]);
    olCNow[3] = Number(olCNow[3]);
    var pOp = Math.round((Math.abs($gameTimer._opaSet) / $gameTimer._pOpaMax) * 100 * 10000) / 10000;
    var olCaSet = Math.round(olCDef[3] * pOp * 100000) / 10000000
    if ($gameTimer._opaSet > 0){
        olCNow[3] += olCaSet;
        if (olCNow[3] > olCDef[3]) olCNow[3] = olCDef[3];
    } else if($gameTimer._opaSet < 0){
        olCNow[3] -= olCaSet;
        if (olCNow[3] < 0) olCNow[3] = 0;
    }
    olCNow[3] = Math.round(olCNow[3] * 1000000) / 1000000;
    olCDef[3] = String(olCDef[3]);
    olCNow[3] = String(olCNow[3]);
    this.olColor = olCDef[0] + ',' + olCDef[1] + ',' + olCDef[2] + ',' + olCNow[3];
    this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';

    //==================================================
    //文字のフェード処理
    //==================================================
    this.bitmap.paintOpacity += $gameTimer._opaSet;

    if(this.bitmap.paintOpacity >= $gameTimer._pOpaMax){
        this.bitmap.paintOpacity = $gameTimer._pOpaMax;
        this.olColor = olCDef[0] + ',' + olCDef[1] + ',' + olCDef[2] + ',' + olCDef[3];
        this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
        $gameTimer._opaSet = 0;
    }else if(this.bitmap.paintOpacity <= 0){
        this.bitmap.paintOpacity = 0;
        $gameTimer._opaSet = 0;
        this.olColor = olCDef[0] + ',' + olCDef[1] + ',' + olCDef[2] + ',' + '0';
        this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
        $gameTimer._hide = true;
        $gameTimer._show = false;
    }
    $gameTimer._olColor = this.olColor;
    $gameTimer._pOpa = this.bitmap.paintOpacity;

    this.redraw();
}

UsefulTimer.func.Sprite_Timer_prototype_timerText = Sprite_Timer.prototype.timerText;
Sprite_Timer.prototype.timerText = function(){

    var pH  = $gameTimer._h_zpad;
    var pM  = $gameTimer._m_zpad;
    var pS  = $gameTimer._s_zpad;
    var pMS = $gameTimer._ms_d;

    if (pH < 1) pH = 1;
    if (pM < 1) pM = 1;
    if (pS < 1) pS = 1;
    if (pMS > 3) pMS = 3;
    else if (pMS < 1) pMS = 1;

    var hour = Math.floor(this._seconds / ( 60 * 60 ));
    var min  = Math.floor(this._seconds / 60) % 60;
    var sec  = this._seconds % 60;
    var ms;

    if (pMS === 3){
        ms  = Math.floor((($gameTimer._frames % 60) * (1000 / 60)));
        ms  = String(ms);
        ms  = ms.slice(-pMS);
        ms  = Number(ms);
    }else if(pMS === 2){
        ms  = Math.floor((($gameTimer._frames % 60) * (1000 / 60)) / 10);
        ms  = String(ms);
        ms  = ms.slice(-pMS);
        ms  = Number(ms);
    }else if(pMS === 1){
        ms  = Math.floor((($gameTimer._frames % 60) * (1000 / 60)) / 100);
        ms  = String(ms);
        ms  = ms.slice(-pMS);
        ms  = Number(ms);
    }else{
        ms  = Math.floor((($gameTimer._frames % 60) * (1000 / 60)) / 10);
        ms  = String(ms);
        ms  = ms.slice(-2);
        ms  = Number(ms);
    }

    if ($gameTimer._60min === 'true') min = Math.floor(this._seconds / 60);
    else min = Math.floor(this._seconds / 60) % 60;

    if ($gameTimer._60sec === 'true') sec  = this._seconds;
    else sec = this._seconds % 60;

    if ($gameTimer._ms === 'true' || $gameTimer._s === 'true' ||
        $gameTimer._m === 'true' || $gameTimer._h === 'true'){

        if ($gameTimer._ms === 'true' && $gameTimer._s === 'true' &&
            $gameTimer._m === 'true' && $gameTimer._h === 'true'){
            return hour.padZero(pH) + ':' + min.padZero(pM) + ':' + sec.padZero(pS) + '.' + ms.padZero(pMS);

        } else if($gameTimer._ms === 'true' && $gameTimer._s === 'true' && $gameTimer._m === 'true'){
            return min.padZero(pM) + ':' + sec.padZero(pS) + '.' + ms.padZero(pMS);
        } else if($gameTimer._ms === 'true' && $gameTimer._s === 'true' && $gameTimer._h === 'true'){
            return hour.padZero(pH) + ':' + sec.padZero(pS) + '.' + ms.padZero(pMS);
        } else if($gameTimer._ms === 'true' && $gameTimer._m === 'true' && $gameTimer._h === 'true'){
            return hour.padZero(pH) + ':' + min.padZero(pM) + '.' + ms.padZero(pMS);
        } else if($gameTimer._s === 'true' && $gameTimer._m === 'true' && $gameTimer._h === 'true'){
            return hour.padZero(pH) + ':' + min.padZero(pM) + ':' + sec.padZero(pS);

        } else if($gameTimer._ms === 'true' && $gameTimer._s === 'true'){
            return sec.padZero(pS) + '.' + ms.padZero(pMS);
        } else if($gameTimer._ms === 'true' && $gameTimer._m === 'true'){
            return min.padZero(pM) + '.' + ms.padZero(pMS);
        } else if($gameTimer._ms === 'true' && $gameTimer._h === 'true'){
            return hour.padZero(pH) + '.' + ms.padZero(pMS);
        } else if($gameTimer._s === 'true' && $gameTimer._m === 'true'){
            return min.padZero(pM) + ':' + sec.padZero(pS);
        } else if($gameTimer._s === 'true' && $gameTimer._h === 'true'){
            return hour.padZero(pH) + ':' + sec.padZero(pS);
        } else if($gameTimer._m === 'true' && $gameTimer._h === 'true'){
            return hour.padZero(pH) + ':' + min.padZero(pM);

        } else if($gameTimer._ms === 'true'){
            return ms.padZero(pMS);
        } else if($gameTimer._s === 'true'){
            return sec.padZero(pS);
        } else if($gameTimer._m === 'true'){
            return min.padZero(pM);
        } else if($gameTimer._h === 'true'){
            return hour.padZero(pH);
        }

    } else {
        return;
    }

};

UsefulTimer.func.Sprite_Timer_prototype_updatePosition = Sprite_Timer.prototype.updatePosition;
Sprite_Timer.prototype.updatePosition = function() {
    this.x = Number(eval($gameTimer._x));
    this.y = Number(eval($gameTimer._y));
};

UsefulTimer.func.Sprite_Timer_prototype_updateVisibility = Sprite_Timer.prototype.updateVisibility;
Sprite_Timer.prototype.updateVisibility = function() {
    if ($gameTimer.isWorking() === false || $gameTimer._hide) this.visible = false;
    else this.visible = $gameTimer.isWorking();

    if (!$gameTimer._showinB){
        if($gameParty.inBattle()) this.visible = false;
    }
};


//=============================================================================
// Sprite_StopWatch
//=============================================================================

function Sprite_StopWatch() {
    this.initialize.apply(this, arguments);
}

Sprite_StopWatch.prototype = Object.create(Sprite.prototype);
Sprite_StopWatch.prototype.constructor = Sprite_StopWatch;

Sprite_StopWatch.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this._seconds = 0;
    this.createBitmap();
    this.update();
};

Sprite_StopWatch.prototype.createBitmap = function() {
    var w  = Number(eval($gameStopWatch._width));
    var h  = Number(eval($gameStopWatch._height));

    this.bitmap = new Bitmap(w, h);

    this.bitmap.fontFace     = $gameStopWatch._fFace;
    this.bitmap.fontSize     = $gameStopWatch._fSize;
    //this.bitmap.fontBold     = eval($gameStopWatch._fBold);
    this.bitmap.fontItalic   = eval($gameStopWatch._fItalic);
    this.bitmap.outlineWidth = $gameStopWatch._olWidth;
    this.bitmap.textColor    = $gameStopWatch._tColor;
    this.olColor             = $gameStopWatch._olColor;
    this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
    this.bitmap.paintOpacity = $gameStopWatch._pOpa;
};

Sprite_StopWatch.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.updateBitmap();
    this.updatePosition();
    this.updateVisibility();
};

Sprite_StopWatch.prototype.updateBitmap = function() {
    this.textStatusUpdate();

    if ($gameStopWatch._opaSet !== 0){
        this._seconds = $gameStopWatch.seconds();
        this.textFade();
    } else if ($gameStopWatch._ms === 'true' && this.visible === true){
        this._seconds = $gameStopWatch.seconds();
        this.redraw();
    } else if (this._seconds !== $gameStopWatch.seconds() || $gameStopWatch._show === false) {
        if ($gameStopWatch._show === false) $gameStopWatch._show = true;
        this._seconds = $gameStopWatch.seconds();
        this.redraw();
    }
};

Sprite_StopWatch.prototype.textStatusUpdate = function() {
    if (Number(eval($gameStopWatch._width)) !== this.bitmap.width ||
    Number(eval($gameStopWatch._height)) !== this.bitmap.height){
        this.createBitmap();
        this.redraw();
    }
    if ($gameStopWatch._fFace !== this.bitmap.fontFace){
        this.bitmap.fontFace = $gameStopWatch._fFace;
        this.redraw();
    }
    if ($gameStopWatch._fSize !== this.bitmap.fontSize){
        this.bitmap.fontSize = $gameStopWatch._fSize;
        this.redraw();
    }
    /*
    if (eval($gameStopWatch._fBold) !== this.bitmap.fontBold){
        this.bitmap.fontBold = eval($gameStopWatch._fBold);
        this.redraw();
    }
    */
    if (eval($gameStopWatch._fItalic) !== this.bitmap.fontItalic){
        this.bitmap.fontItalic = eval($gameStopWatch._fItalic);
        this.redraw();
    }
    if ($gameStopWatch._olWidth !== this.bitmap.outlineWidth){
        this.bitmap.outlineWidth = $gameStopWatch._olWidth;
        this.redraw();
    }
    if ($gameStopWatch._tColor !== this.bitmap.textColor){
        this.bitmap.textColor = $gameStopWatch._tColor;
        this.redraw();
    }
    if ($gameStopWatch._olColor !== this.olColor){
        $gameStopWatch._olCDef = $gameStopWatch._olColor;
        this.olColor = $gameStopWatch._olCDef;
        this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
        this.redraw();
    }
    if ($gameStopWatch._pOpa !== this.bitmap.paintOpacity){
        $gameStopWatch._pOpaMax = $gameStopWatch._pOpa;
        this.bitmap.paintOpacity = $gameStopWatch._pOpaMax;
        this.redraw();
    }
}

Sprite_StopWatch.prototype.textFade = function() {
    //==================================================
    //文字の縁のフェード処理
    //==================================================
    var olCDef = [];
    var olCNow = [];
    var comma = ',';
    olCDef = $gameStopWatch._olCDef.split(comma);
    olCNow = this.olColor.split(comma)
    olCDef[3] = Number(olCDef[3]);
    olCNow[3] = Number(olCNow[3]);
    var pOp = Math.round((Math.abs($gameStopWatch._opaSet) / $gameStopWatch._pOpaMax) * 100 * 10000) / 10000;
    var olCaSet = Math.round(olCDef[3] * pOp * 100000) / 10000000
    if ($gameStopWatch._opaSet > 0){
        olCNow[3] += olCaSet;
        if (olCNow[3] > olCDef[3]) olCNow[3] = olCDef[3];
    }else if($gameStopWatch._opaSet < 0){
        olCNow[3] -= olCaSet;
        if (olCNow[3] < 0) olCNow[3] = 0;
    }
    olCNow[3] = Math.round(olCNow[3] * 1000000) / 1000000;
    olCDef[3] = String(olCDef[3]);
    olCNow[3] = String(olCNow[3]);
    this.olColor = olCDef[0] + ',' + olCDef[1] + ',' + olCDef[2] + ',' + olCNow[3];
    this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';

    //==================================================
    //文字のフェード処理
    //==================================================
    this.bitmap.paintOpacity += $gameStopWatch._opaSet;

    if(this.bitmap.paintOpacity >= $gameStopWatch._pOpaMax){
        this.bitmap.paintOpacity = $gameStopWatch._pOpaMax;
        this.olColor = olCDef[0] + ',' + olCDef[1] + ',' + olCDef[2] + ',' + olCDef[3];
        this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
        $gameStopWatch._opaSet = 0;
    }else if(this.bitmap.paintOpacity <= 0){
        this.bitmap.paintOpacity = 0;
        $gameStopWatch._opaSet = 0;
        this.olColor = olCDef[0] + ',' + olCDef[1] + ',' + olCDef[2] + ',' + '0';
        this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
        $gameStopWatch._hide = true;
        $gameStopWatch._show = false;
    }
    $gameStopWatch._olColor = this.olColor;
    $gameStopWatch._pOpa = this.bitmap.paintOpacity;

    this.redraw();
}

Sprite_StopWatch.prototype.redraw = function() {
    var text = this.timerText();
    var width = this.bitmap.width;
    var height = this.bitmap.height;
    this.bitmap.clear();
    this.bitmap.drawText(text, 0, 0, width, height, 'center');
};

Sprite_StopWatch.prototype.timerText = function() {

    var pH  = $gameStopWatch._h_zpad;
    var pM  = $gameStopWatch._m_zpad;
    var pS  = $gameStopWatch._s_zpad;
    var pMS = $gameStopWatch._ms_d;

    if (pH < 1) pH = 1;
    if (pM < 1) pM = 1;
    if (pS < 1) pS = 1;
    if (pMS > 3) pMS = 3;
    else if (pMS < 1) pMS = 1;

    var hour = Math.floor(this._seconds / ( 60 * 60 ));
    var min  = Math.floor(this._seconds / 60) % 60;
    var sec  = this._seconds % 60;
    var ms;

    if (pMS === 3){
        ms  = Math.floor((($gameStopWatch._frames % 60) * (1000 / 60)));
        ms  = String(ms);
        ms  = ms.slice(-pMS);
        ms  = Number(ms);
    } else if (pMS === 2){
        ms  = Math.floor((($gameStopWatch._frames % 60) * (1000 / 60)) / 10);
        ms  = String(ms);
        ms  = ms.slice(-pMS);
        ms  = Number(ms);
    } else if (pMS === 1){
        ms  = Math.floor((($gameStopWatch._frames % 60) * (1000 / 60)) / 100);
        ms  = String(ms);
        ms  = ms.slice(-pMS);
        ms  = Number(ms);
    } else {
        ms  = Math.floor((($gameStopWatch._frames % 60) * (1000 / 60)) / 10);
        ms  = String(ms);
        ms  = ms.slice(-2);
        ms  = Number(ms);
    }

    if ($gameStopWatch._60min === 'true') min  = Math.floor(this._seconds / 60);
    else min  = Math.floor(this._seconds / 60) % 60;

    if ($gameStopWatch._60sec === 'true') sec  = this._seconds;
    else sec  = this._seconds % 60;

    if ($gameStopWatch._ms === 'true' || $gameStopWatch._s === 'true' ||
        $gameStopWatch._m === 'true' || $gameStopWatch._h === 'true'){

        if ($gameStopWatch._ms === 'true' && $gameStopWatch._s === 'true' &&
            $gameStopWatch._m === 'true' && $gameStopWatch._h === 'true'){
            return hour.padZero(pH) + ':' + min.padZero(pM) + ':' + sec.padZero(pS) + '.' + ms.padZero(pMS);

        } else if($gameStopWatch._ms === 'true' && $gameStopWatch._s === 'true' && $gameStopWatch._m === 'true'){
            return min.padZero(pM) + ':' + sec.padZero(pS) + '.' + ms.padZero(pMS);
        } else if($gameStopWatch._ms === 'true' && $gameStopWatch._s === 'true' && $gameStopWatch._h === 'true'){
            return hour.padZero(pH) + ':' + sec.padZero(pS) + '.' + ms.padZero(pMS);
        } else if($gameStopWatch._ms === 'true' && $gameStopWatch._m === 'true' && $gameStopWatch._h === 'true'){
            return hour.padZero(pH) + ':' + min.padZero(pM) + '.' + ms.padZero(pMS);
        } else if($gameStopWatch._s === 'true' && $gameStopWatch._m === 'true' && $gameStopWatch._h === 'true'){
            return hour.padZero(pH) + ':' + min.padZero(pM) + ':' + sec.padZero(pS);

        } else if($gameStopWatch._ms === 'true' && $gameStopWatch._s === 'true'){
            return sec.padZero(pS) + '.' + ms.padZero(pMS);
        } else if($gameStopWatch._ms === 'true' && $gameStopWatch._m === 'true'){
            return min.padZero(pM) + '.' + ms.padZero(pMS);
        } else if($gameStopWatch._ms === 'true' && $gameStopWatch._h === 'true'){
            return hour.padZero(pH) + '.' + ms.padZero(pMS);
        } else if($gameStopWatch._s === 'true' && $gameStopWatch._m === 'true'){
            return min.padZero(pM) + ':' + sec.padZero(pS);
        } else if($gameStopWatch._s === 'true' && $gameStopWatch._h === 'true'){
            return hour.padZero(pH) + ':' + sec.padZero(pS);
        } else if($gameStopWatch._m === 'true' && $gameStopWatch._h === 'true'){
            return hour.padZero(pH) + ':' + min.padZero(pM);

        } else if($gameStopWatch._ms === 'true'){
            return ms.padZero(pMS);
        } else if($gameStopWatch._s === 'true'){
            return sec.padZero(pS);
        } else if($gameStopWatch._m === 'true'){
            return min.padZero(pM);
        } else if($gameStopWatch._h === 'true'){
            return hour.padZero(pH);
        }
    } else {
        return;
    }
    
};

Sprite_StopWatch.prototype.updatePosition = function() {
    this.x = Number(eval($gameStopWatch._x));
    this.y = Number(eval($gameStopWatch._y));
};

Sprite_StopWatch.prototype.updateVisibility = function() {
    if ($gameStopWatch.isWorking() === false || $gameStopWatch._hide) this.visible = false;
    else this.visible = $gameStopWatch.isWorking();

    if (!$gameStopWatch._showinB){
        if($gameParty.inBattle()) this.visible = false;
    }
};



//=============================================================================
// Sprite_Clock
//=============================================================================

function Sprite_Clock() {
    this.initialize.apply(this, arguments);
}

Sprite_Clock.prototype = Object.create(Sprite.prototype);
Sprite_Clock.prototype.constructor = Sprite_Clock;

Sprite_Clock.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this._seconds = 0;
    this.createBitmap();

    this.update();
};

Sprite_Clock.prototype.createBitmap = function() {
    var w  = Number(eval($gameClock._width));
    var h  = Number(eval($gameClock._height));
    this.bitmap = new Bitmap(w, h);

    this.bitmap.fontFace     = $gameClock._fFace;
    this.bitmap.fontSize     = $gameClock._fSize;
    //this.bitmap.fontBold     = eval($gameClock._fBold);
    this.bitmap.fontItalic   = eval($gameClock._fItalic);
    this.bitmap.outlineWidth = $gameClock._olWidth;
    this.bitmap.textColor    = $gameClock._tColor;
    this.olColor             = $gameClock._olColor;
    this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
    this.bitmap.paintOpacity = $gameClock._pOpa;
};

Sprite_Clock.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.updateBitmap();
    this.updatePosition();
    this.updateVisibility();
};

Sprite_Clock.prototype.updateBitmap = function() {
    this.textStatusUpdate();

    if ($gameClock._opaSet !== 0){
        this._seconds = $gameClock._nowSeconds;
        this.textFade();
    } else if ($gameClock._ms === 'true' && this.visible === true){
        this._seconds = $gameClock._nowSeconds;
        this.redraw();
    } else if (this._seconds !== $gameClock._nowSeconds || $gameClock._show === false) {
        if ($gameClock._show === false) $gameClock._show = true;
        this._seconds = $gameClock._nowSeconds;
        this.redraw();
    }
};

Sprite_Clock.prototype.textStatusUpdate = function() {
    if (Number(eval($gameClock._width)) !== this.bitmap.width ||
    Number(eval($gameClock._height)) !== this.bitmap.height){
        this.createBitmap();
        this.redraw();
    }
    if ($gameClock._fFace !== this.bitmap.fontFace){
        this.bitmap.fontFace = $gameClock._fFace;
        this.redraw();
    }
    if ($gameClock._fSize !== this.bitmap.fontSize){
        this.bitmap.fontSize = $gameClock._fSize;
        this.redraw();
    }
    /*
    if (eval($gameClock._fBold) !== this.bitmap.fontBold){
        this.bitmap.fontBold = eval($gameClock._fBold);
        this.redraw();
    }
    */
    if (eval($gameClock._fItalic) !== this.bitmap.fontItalic){
        this.bitmap.fontItalic = eval($gameClock._fItalic);
        this.redraw();
    }
    if ($gameClock._olWidth !== this.bitmap.outlineWidth){
        this.bitmap.outlineWidth = $gameClock._olWidth;
        this.redraw();
    }
    if ($gameClock._tColor !== this.bitmap.textColor){
        this.bitmap.textColor = $gameClock._tColor;
        this.redraw();
    }
    if ($gameClock._olColor !== this.olColor){
        $gameClock._olCDef = $gameClock._olColor;
        this.olColor = $gameClock._olCDef;
        this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
        this.redraw();
    }
    if ($gameClock._pOpa !== this.bitmap.paintOpacity){
        $gameClock._pOpaMax = $gameClock._pOpa;
        this.bitmap.paintOpacity = $gameClock._pOpaMax;
        this.redraw();
    }
}

Sprite_Clock.prototype.textFade = function() {
    //==================================================
    //文字の縁のフェード処理
    //==================================================
    var olCDef = [];
    var olCNow = [];
    var comma = ',';
    olCDef = $gameClock._olCDef.split(comma);
    olCNow = this.olColor.split(comma)
    olCDef[3] = Number(olCDef[3]);
    olCNow[3] = Number(olCNow[3]);
    var pOp = Math.round((Math.abs($gameClock._opaSet) / $gameClock._pOpaMax) * 100 * 10000) / 10000;
    var olCaSet = Math.round(olCDef[3] * pOp * 100000) / 10000000
    if ($gameClock._opaSet > 0){
        olCNow[3] += olCaSet;
        if (olCNow[3] > olCDef[3]) olCNow[3] = olCDef[3];
    } else if ($gameClock._opaSet < 0){
        olCNow[3] -= olCaSet;
        if (olCNow[3] < 0) olCNow[3] = 0;
    }
    olCNow[3] = Math.round(olCNow[3] * 1000000) / 1000000;
    olCDef[3] = String(olCDef[3]);
    olCNow[3] = String(olCNow[3]);
    this.olColor = olCDef[0] + ',' + olCDef[1] + ',' + olCDef[2] + ',' + olCNow[3];
    this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';

    //==================================================
    //文字のフェード処理
    //==================================================
    this.bitmap.paintOpacity += $gameClock._opaSet;

    if (this.bitmap.paintOpacity >= $gameClock._pOpaMax){
        this.bitmap.paintOpacity = $gameClock._pOpaMax;
        this.olColor = olCDef[0] + ',' + olCDef[1] + ',' + olCDef[2] + ',' + olCDef[3];
        this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
        $gameClock._opaSet = 0;
    } else if (this.bitmap.paintOpacity <= 0){
        this.bitmap.paintOpacity = 0;
        $gameClock._opaSet = 0;
        this.olColor = olCDef[0] + ',' + olCDef[1] + ',' + olCDef[2] + ',' + '0';
        this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
        $gameClock._hide = true;
        $gameClock._show = false;
    }
    $gameClock._olColor = this.olColor;
    $gameClock._pOpa = this.bitmap.paintOpacity;

    this.redraw();
}

Sprite_Clock.prototype.redraw = function() {
    var text = this.timerText();
    var width = this.bitmap.width;
    var height = this.bitmap.height;
    this.bitmap.clear();
    this.bitmap.drawText(text, 0, 0, width, height, 'center');
};

Sprite_Clock.prototype.timerText = function() {
    var pHb = $gameClock._h_zpad;
    var pMb = $gameClock._m_zpad;
    var pSb = $gameClock._s_zpad;

    var pH;
    var pM;
    var pS;
    var pMS = $gameClock._ms_d;

    if (pHb === 'false') pH = 1;
    else pH = 2;

    if (pMb === 'false') pM = 1;
    else pM = 2;
    
    if(pSb === 'false') pS = 1;
    else pS = 2;

    if (pMS > 3) pMS = 3;
    else if (pMS < 1) pMS = 1;

    var hour = $gameClock._nowHours;
    var min  = $gameClock._nowMinutes;
    var sec  = $gameClock._nowSeconds;
    var ms   = $gameClock._nowMSeconds;

    if (pMS === 3){
        ms  = String(ms);
        ms  = ms.slice(-pMS);
        ms  = Number(ms);
    }else if(pMS === 2){
        ms  = Math.floor(ms / 10);
        ms  = String(ms);
        ms  = ms.slice(-pMS);
        ms  = Number(ms);
    }else if(pMS === 1){
        ms  = Math.floor(ms / 100);
        ms  = String(ms);
        ms  = ms.slice(-pMS);
        ms  = Number(ms);
    }else{
        ms  = Math.floor(ms / 10);
        ms  = String(ms);
        ms  = ms.slice(-pMS);
        ms  = Number(ms);
    }

    if ($gameClock._ms === 'true' || $gameClock._s === 'true' ||
        $gameClock._m === 'true' || $gameClock._h === 'true'){

        if ($gameClock._ms === 'true' && $gameClock._s === 'true' &&
            $gameClock._m === 'true' && $gameClock._h === 'true'){
            return hour.padZero(pH) + ':' + min.padZero(pM) + ':' + sec.padZero(pS) + '.' + ms.padZero(pMS);

        } else if($gameClock._ms === 'true' && $gameClock._s === 'true' && $gameClock._m === 'true'){
            return min.padZero(pM) + ':' + sec.padZero(pS) + '.' + ms.padZero(pMS);
        } else if($gameClock._ms === 'true' && $gameClock._s === 'true' && $gameClock._h === 'true'){
            return hour.padZero(pH) + ':' + sec.padZero(pS) + '.' + ms.padZero(pMS);
        } else if($gameClock._ms === 'true' && $gameClock._m === 'true' && $gameClock._h === 'true'){
            return hour.padZero(pH) + ':' + min.padZero(pM) + '.' + ms.padZero(pMS);
        } else if($gameClock._s === 'true' && $gameClock._m === 'true' && $gameClock._h === 'true'){
            return hour.padZero(pH) + ':' + min.padZero(pM) + ':' + sec.padZero(pS);

        } else if($gameClock._ms === 'true' && $gameClock._s === 'true'){
            return sec.padZero(pS) + '.' + ms.padZero(pMS);
        } else if($gameClock._ms === 'true' && $gameClock._m === 'true'){
            return min.padZero(pM) + '.' + ms.padZero(pMS);
        } else if($gameClock._ms === 'true' && $gameClock._h === 'true'){
            return hour.padZero(pH) + '.' + ms.padZero(pMS);
        } else if($gameClock._s === 'true' && $gameClock._m === 'true'){
            return min.padZero(pM) + ':' + sec.padZero(pS);
        } else if($gameClock._s === 'true' && $gameClock._h === 'true'){
            return hour.padZero(pH) + ':' + sec.padZero(pS);
        } else if($gameClock._m === 'true' && $gameClock._h === 'true'){
            return hour.padZero(pH) + ':' + min.padZero(pM);

        } else if($gameClock._ms === 'true'){
            return ms.padZero(pMS);
        } else if($gameClock._s === 'true'){
            return sec.padZero(pS);
        } else if($gameClock._m === 'true'){
            return min.padZero(pM);
        } else if($gameClock._h === 'true'){
            return hour.padZero(pH);
        }
    } else {
        return;
    }

};

Sprite_Clock.prototype.updatePosition = function() {
    this.x = Number(eval($gameClock._x));
    this.y = Number(eval($gameClock._y));
};

Sprite_Clock.prototype.updateVisibility = function() {
    if ($gameClock.isWorking() === false || $gameClock._hide) this.visible = false;
    else this.visible = $gameClock.isWorking();

    if (!$gameClock._showinB){
        if($gameParty.inBattle()) this.visible = false;
    }
};



//=============================================================================
// Sprite_Date
//=============================================================================

function Sprite_Date() {
    this.initialize.apply(this, arguments);
}

Sprite_Date.prototype = Object.create(Sprite.prototype);
Sprite_Date.prototype.constructor = Sprite_Date;

Sprite_Date.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this._date = 0;
    this.createBitmap();

    this.update();
};

Sprite_Date.prototype.createBitmap = function() {
    var w  = Number(eval($gameDate._width));
    var h  = Number(eval($gameDate._height));
    this.bitmap = new Bitmap(w, h);

    this.bitmap.fontFace     = $gameDate._fFace;
    this.bitmap.fontSize     = $gameDate._fSize;
    //this.bitmap.fontBold     = eval($gameDate._fBold);
    this.bitmap.fontItalic   = eval($gameDate._fItalic);
    this.bitmap.outlineWidth = $gameDate._olWidth;
    this.bitmap.textColor    = $gameDate._tColor;
    this.olColor             = $gameDate._olColor;
    this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
    this.bitmap.paintOpacity = $gameDate._pOpa;
};

Sprite_Date.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.updateBitmap();
    this.updatePosition();
    this.updateVisibility();
};

Sprite_Date.prototype.updateBitmap = function() {
    this.textStatusUpdate();

    if ($gameDate._opaSet !== 0){
        this._date = $gameDate._nowDate;
        this.textFade();
    } else if (this._date !== $gameDate._nowDate || $gameDate._show === false) {
        if ($gameDate._show === false) $gameDate._show = true;
        this._date = $gameDate._nowDate;
        this.redraw();
    }
};

Sprite_Date.prototype.textStatusUpdate = function() {
    if (Number(eval($gameDate._width)) !== this.bitmap.width ||
    Number(eval($gameDate._height)) !== this.bitmap.height){
        this.createBitmap();
        this.redraw();
    }
    if ($gameDate._fFace !== this.bitmap.fontFace){
        this.bitmap.fontFace = $gameDate._fFace;
        this.redraw();
    }
    if ($gameDate._fSize !== this.bitmap.fontSize){
        this.bitmap.fontSize = $gameDate._fSize;
        this.redraw();
    }
    /*
    if (eval($gameDate._fBold) !== this.bitmap.fontBold){
        this.bitmap.fontBold = eval($gameDate._fBold);
        this.redraw();
    }
    */
    if (eval($gameDate._fItalic) !== this.bitmap.fontItalic){
        this.bitmap.fontItalic = eval($gameDate._fItalic);
        this.redraw();
    }
    if ($gameDate._olWidth !== this.bitmap.outlineWidth){
        this.bitmap.outlineWidth = $gameDate._olWidth;
        this.redraw();
    }
    if ($gameDate._tColor !== this.bitmap.textColor){
        this.bitmap.textColor = $gameDate._tColor;
        this.redraw();
    }
    if ($gameDate._olColor !== this.olColor){
        $gameDate._olCDef = $gameDate._olColor;
        this.olColor = $gameDate._olCDef;
        this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
        this.redraw();
    }
    if ($gameDate._pOpa !== this.bitmap.paintOpacity){
        $gameDate._pOpaMax = $gameDate._pOpa;
        this.bitmap.paintOpacity = $gameDate._pOpaMax;
        this.redraw();
    }
}

Sprite_Date.prototype.textFade = function() {
    //==================================================
    //文字の縁のフェード処理
    //==================================================
    var olCDef = [];
    var olCNow = [];
    var comma = ',';
    olCDef = $gameDate._olCDef.split(comma);
    olCNow = this.olColor.split(comma)
    olCDef[3] = Number(olCDef[3]);
    olCNow[3] = Number(olCNow[3]);
    var pOp = Math.round((Math.abs($gameDate._opaSet) / $gameDate._pOpaMax) * 100 * 10000) / 10000;
    var olCaSet = Math.round(olCDef[3] * pOp * 100000) / 10000000
    if ($gameDate._opaSet > 0){
        olCNow[3] += olCaSet;
        if (olCNow[3] > olCDef[3]) olCNow[3] = olCDef[3];
    } else if ($gameDate._opaSet < 0){
        olCNow[3] -= olCaSet;
        if (olCNow[3] < 0) olCNow[3] = 0;
    }
    olCNow[3] = Math.round(olCNow[3] * 1000000) / 1000000;
    olCDef[3] = String(olCDef[3]);
    olCNow[3] = String(olCNow[3]);
    this.olColor = olCDef[0] + ',' + olCDef[1] + ',' + olCDef[2] + ',' + olCNow[3];
    this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';

    //==================================================
    //文字のフェード処理
    //==================================================
    this.bitmap.paintOpacity += $gameDate._opaSet;

    if(this.bitmap.paintOpacity >= $gameDate._pOpaMax){
        this.bitmap.paintOpacity = $gameDate._pOpaMax;
        this.olColor = olCDef[0] + ',' + olCDef[1] + ',' + olCDef[2] + ',' + olCDef[3];
        this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
        $gameDate._opaSet = 0;
    } else if (this.bitmap.paintOpacity <= 0){
        this.bitmap.paintOpacity = 0;
        $gameDate._opaSet = 0;
        this.olColor = olCDef[0] + ',' + olCDef[1] + ',' + olCDef[2] + ',' + '0';
        this.bitmap.outlineColor = 'rgba(' + this.olColor + ')';
        $gameDate._hide = true;
        $gameDate._show = false;
    }
    $gameDate._olColor = this.olColor;
    $gameDate._pOpa = this.bitmap.paintOpacity;

    this.redraw();
}

Sprite_Date.prototype.redraw = function() {
    var text = this.timerText();
    var width = this.bitmap.width;
    var height = this.bitmap.height;
    this.bitmap.clear();
    this.bitmap.drawText(text, 0, 0, width, height, 'center');
};

Sprite_Date.prototype.timerText = function() {
    var pY     = 4;
    var pM     = 1;
    var pD     = 1;
    var pDY    = 1;

    var year   = $gameDate._nowYear;
    var month  = $gameDate._nowMonth;
    var date   = $gameDate._nowDate;
    var dayStr = new Array($gameDate._sun,$gameDate._mon,$gameDate._tue,$gameDate._wed,$gameDate._thu,$gameDate._fri,$gameDate._sat);
    var day    = dayStr[$gameDate._nowDay];

    var space  ='';

    if ($gameDate._zpad === 'true'){
        pM = 2;
        pD = 2;
    }

    if ($gameDate._year === 'true' || $gameDate._month === 'true' ||
        $gameDate._date === 'true' || $gameDate._day === 'true'){

        if ($gameDate._year === 'true' && $gameDate._month === 'true' &&
            $gameDate._date === 'true' && $gameDate._day === 'true'){
            return year.padZero(pY) + '/' + month.padZero(pM) + '/' + date.padZero(pD) + '(' +  day.padZero(pDY) + ')';

        } else if($gameDate._year === 'true' && $gameDate._month === 'true' && $gameDate._date === 'true'){
            return year.padZero(pY) + '/' + month.padZero(pM) + '/' + date.padZero(pD);
        } else if($gameDate._year === 'true' && $gameDate._month === 'true' && $gameDate._day === 'true'){
            return year.padZero(pY) + '/' + month.padZero(pM) + '(' +  day.padZero(pDY) + ')';
        } else if($gameDate._year === 'true' && $gameDate._date === 'true' && $gameDate._day === 'true'){
            return year.padZero(pY) + '/' + date.padZero(pD) + '(' +  day.padZero(pDY) + ')';
        } else if($gameDate._month === 'true' && $gameDate._date === 'true' && $gameDate._day === 'true'){
            return month.padZero(pM) + '/' + date.padZero(pD) + '(' +  day.padZero(pDY) + ')';

        } else if($gameDate._year === 'true' && $gameDate._month === 'true'){
            return year.padZero(pY) + '/' + month.padZero(pM);
        } else if($gameDate._year === 'true' && $gameDate._date === 'true'){
            return year.padZero(pY) + '/' + date.padZero(pD);
        } else if($gameDate._year === 'true' && $gameDate._day === 'true'){
            return year.padZero(pY) + '(' +  day.padZero(pDY) + ')';
        } else if($gameDate._month === 'true' && $gameDate._date === 'true'){
            return month.padZero(pM) + '/' + date.padZero(pD);
        } else if($gameDate._month === 'true' && $gameDate._day === 'true'){
            return month.padZero(pM) + '(' +  day.padZero(pDY) + ')';
        } else if($gameDate._date === 'true' && $gameDate._day === 'true'){
            return date.padZero(pD) + '(' +  day.padZero(pDY) + ')';

        } else if($gameDate._year === 'true'){
            return year.padZero(pY);
        } else if($gameDate._month === 'true'){
            return month.padZero(pM);
        } else if($gameDate._date === 'true'){
            return date.padZero(pD);
        } else if($gameDate._day === 'true'){
            return day.padZero(pDY);
        }

    } else {
        return;
    }
};

Sprite_Date.prototype.updatePosition = function() {
    this.x = Number(eval($gameDate._x));
    this.y = Number(eval($gameDate._y));
};

Sprite_Date.prototype.updateVisibility = function() {
    if ($gameDate.isWorking() === false || $gameDate._hide) this.visible = false;
    else this.visible = $gameDate.isWorking();

    if (!$gameDate._showinB){
        if($gameParty.inBattle()) this.visible = false;
    }
};

//-----------------------------------------------------------------------------

UsefulTimer.func.Spriteset_Base_prototype_createUpperLayer = Spriteset_Base.prototype.createUpperLayer;
Spriteset_Base.prototype.createUpperLayer = function(){
    UsefulTimer.func.Spriteset_Base_prototype_createUpperLayer.call(this);
    this.createStopWatch();
    this.createClock();
    this.createDate();
};

Spriteset_Base.prototype.createStopWatch = function() {
    this._stopWatchSprite = new Sprite_StopWatch();
    this.addChild(this._stopWatchSprite);
};

Spriteset_Base.prototype.createClock = function() {
    this._clockSprite = new Sprite_Clock();
    this.addChild(this._clockSprite);
};

Spriteset_Base.prototype.createDate = function() {
    this._dateSprite = new Sprite_Date();
    this.addChild(this._dateSprite);
};

//-----------------------------------------------------------------------------

UsefulTimer.func.Scene_Map_prototype_updateMain = Scene_Map.prototype.updateMain;
Scene_Map.prototype.updateMain = function(){
    UsefulTimer.func.Scene_Map_prototype_updateMain.call(this);
    var active = this.isActive();
    $gameStopWatch.update(active);
    $gameClock.update(active);
    $gameDate.update(active);
    //$gameScreen.update();
};

//-----------------------------------------------------------------------------

UsefulTimer.func.Scene_Battle_prototype_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function(){
    UsefulTimer.func.Scene_Battle_prototype_update.call(this);
    var active = this.isActive();
    $gameStopWatch.update(active);
    $gameClock.update(active);
    $gameDate.update(active);
    //Scene_Base.prototype.update.call(this);
};

//-----------------------------------------------------------------------------
