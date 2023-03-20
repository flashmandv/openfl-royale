package {

	import openfl.display3D.Context3DRenderMode;
	import openfl.display.SimpleButton;
	import openfl.display.Sprite;
	import openfl.display.StageAlign;
	import openfl.display.StageScaleMode;
	import openfl.events.ErrorEvent;
	import openfl.events.Event;
	import openfl.events.MouseEvent;
	import openfl.events.UncaughtErrorEvent;
	import openfl.geom.Rectangle;
	//import org.apache.royale.reflection.getDefinitionByName;
	import openfl.utils.Future;
	import openfl.utils.AssetLibrary;
	import openfl.display.MovieClip;
	import org.apache.royale.reflection.getQualifiedClassName;
	import openfl.media.SoundChannel;
	import openfl.media.Sound;
	import openfl.utils.ByteArray;
	import openfl.media.SoundTransform;
	//import openfl.utils.getDefinitionByName;
	import GameUtils;

	//[SWF(frameRate="60", backgroundColor="0x000000", width="1000" , height="600")]
	public class OpenflDemoWeb extends openfl.display.Sprite {
		
		public static const GAME_WIDTH:Number = 1000;
		public static const GAME_HEIGHT:Number = 600;
		
		private var assetLibrary:AssetLibrary;
		private var introMC:MovieClip; 
		private var _introMusicChannel:SoundChannel;
		//private var _starling:Starling;
		
		public function OpenflDemoWeb() {
			super();
			
			stage.align = StageAlign.TOP_LEFT;
			stage.scaleMode = StageScaleMode.NO_SCALE;
			

			GameAssets.init(updateProgressBar);


		}
		
		public function updateProgressBar(perc:int):void {
			trace("Assets loaded %", perc);
			if (perc == 100)
				assetsLoaded();
		}
		
		private function assetsLoaded():void {
			loadSWFLibrary(function(library:AssetLibrary):void{
				assetLibrary = library;
				
				trace("ASSETS LOADED");
				//get MovieClip from SWF assets bundle file
				introMC = assetLibrary.getMovieClip ("DemoFlashScene"); //gets the MovieClip with class name of DemoFlashScene from the assets.bundle swf exported package
				introMC.width = GAME_WIDTH;
				introMC.height = GAME_HEIGHT;
				introMC.gotoAndStop(1);//'stop' frame labels are supported but placing them on first frame causes bugs, so use gotoAndStop(1) instead
				stage.addChild(introMC);
				//dynamic movieclip/button access IS supported for MCs/buttons placed at the first frame
				introMC.start_btn.addEventListener(MouseEvent.CLICK, onStart); //note that most browsers require to have interaction (button press) to allow you to play music/audio

				MovieClip(introMC.online_btn).addEventListener(MouseEvent.CLICK, onOnlineBtnClick);
				MovieClip(introMC.solo_btn).addEventListener(MouseEvent.CLICK, onSoloBtnClick);
				MovieClip(introMC.pass_btn).addEventListener(MouseEvent.CLICK, onPassBtnClick);

				//starling games should initialize starling here
				/*var viewPort:Rectangle = new Rectangle(0, 0, GAME_WIDTH, GAME_HEIGHT);
				_starling = new Starling(StarlingGame, stage, viewPort, null, Context3DRenderMode.AUTO);
				_starling.antiAliasing = 1;
				_starling.start();	*/

			});
		}

		public static function loadSWFLibrary(callback:Function):void {			
			var rootPath:String = ""; 
			trace("Loading assets bundle:"+rootPath);
			var future:Future = AssetLibrary.loadFromFile (rootPath+"assets.bundle");
			future.onComplete (function(library:AssetLibrary):void{
				trace("Assets bundle loaded!");
				callback(library);
			});
			future.onProgress (function (loaded:int, total:int):void {
				trace("library_onProgress: " + loaded + " / " + total);
			});
			future.onError (function (err:*):void {
				trace("loadAssets ERROR", err);
			});
		}
		
		
		private function playIntroMusic():SoundChannel {
			
			var _sound:Sound = new Sound();
			var bytes:ByteArray = GameAssets.getSound("intro") as ByteArray;
			_sound.loadCompressedDataFromByteArray(bytes, bytes.length);

			var _soundChannel = _sound.play(0, 0);
			if (!_soundChannel) return null;
			var sndTransform:SoundTransform = _soundChannel.soundTransform;
			if (!sndTransform) return null;
			sndTransform.volume = 0.8;
			_soundChannel.soundTransform = sndTransform;
			return _soundChannel;
		}

		private function onStart(e:MouseEvent=null):void {
			_introMusicChannel = playIntroMusic();
			introMC.gotoAndPlay(2);
			//dynamic movieclip access is not supported for MCs placed after first frame, so movieclips are got with getChildByName
			introMC.getChildByName("skipIntroBtn").addEventListener(MouseEvent.CLICK, skipIntro); 
		}	
		
		private function skipIntro(e:MouseEvent=null):void {
			if (_introMusicChannel)
				_introMusicChannel.stop();
			introMC.gotoAndPlay("game");
		}		

		protected function onOnlineBtnClick(event:MouseEvent):void {
			MovieClip(introMC.getChildByName("online_icon")).play();			
			GameUtils.setTimeout(function():void{
				trace("Set timeout now works");
				//greensock timeline can be called by making dummy AS class so the compiler does not throw error and on the JS side it gets found and executed
				gsap.to(introMC.getChildByName("logo"), {duration:1, x:10});
			}, 500);
		}

		protected function onSoloBtnClick(event:MouseEvent):void {
			MovieClip(introMC.getChildByName("solo_icon")).play();			
			gsap.to(introMC.getChildByName("logo"), {duration:1, y:30});//greensock timeline can be called by making dummy AS class so the compiler does not throw error and on the JS side it gets found and executed
		}

		protected function onPassBtnClick(event:MouseEvent):void {
			MovieClip(introMC.getChildByName("pass_icon")).play();			
			gsap.to(introMC.getChildByName("logo"), {duration:1, rotation:90});
		}
		
		
	}
}