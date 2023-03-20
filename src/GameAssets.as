package {

	import openfl.display.Bitmap;
	import openfl.display.BitmapData;
	import openfl.utils.ByteArray;
	import openfl.utils.Dictionary;
	import openfl.utils.Timer;
	import openfl.utils.clearTimeout;
	import openfl.utils.Future;
	import openfl.display.Loader;
	import openfl.net.URLRequest;
	import openfl.events.Event;
	import openfl.errors.IOError;
	//import starling.texture.Texture;
	
	public class GameAssets {
		
		public function GameAssets() {
			
		}
		
		private static var textures:Dictionary = new Dictionary(); // <id , path>
		private static var textureInstances:Dictionary = new Dictionary(); // <id , Texture>
		private static var bitmapInstances:Dictionary = new Dictionary(); // <id , Bitmap>
		private static var xmlInstances:Dictionary = new Dictionary(); // <id , XML>
		private static var soundInstances:Dictionary = new Dictionary(); // <id , XXX>
		
		private static var updateProgressBar:Function;
		private static var numElementsForLoading:int = 0;
		private static var numLoadedElements:int = 0;

		public static function getBitmap(name:String):Bitmap {
			
			if (bitmapInstances.hasOwnProperty(name)) {
				var bitm:Bitmap = bitmapInstances[name];
				return new Bitmap(bitm.bitmapData);	
			}
			trace("ERROR. BITMAP IS NULL:", name);
				
			return null;
		}
		
		//used by starling code
		/*public static function loadTexture(name:String, path:String, useMipMaps:Boolean = true):void {
			var texture:Texture = null;
			useMipMaps = false;
			//trace("loadTexture",name);

			if (textureInstances.hasOwnProperty(name)) {
				trace("WARNING. TEXTURE ALREADY LOADED:", name);
				return;
			}

			var loader:Loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function(event:Event):void{
				//trace("tex onComplete",event.target.loader.content);

				var bmp:Bitmap = event.target.loader.content as Bitmap;
				if (bmp == null) {
					trace("[ERROR] Cannot load BITMAP texture: "+name);
					return;
				}
				bitmapInstances[name] = bmp;
				//trace("retrieved bmp ",bmp);
				texture = Texture.fromBitmap(bmp, useMipMaps);
				//trace("retrieved texture ",texture);
				textureInstances[name] = texture;

				numLoadedElements++;
				var perc:int = Math.ceil((numLoadedElements / numElementsForLoading) * 100);
				//trace("Loading:",perc+"%");
				updateProgressBar(perc)
			});
			loader.contentLoaderInfo.addEventListener("ioError", function(e:*):void{
				trace("texture load FAILED",e);
			});
			loader.contentLoaderInfo.addEventListener("securityError", function(e:*):void{
				trace("texture load FAILED2",e);
			});
			
			var prefix:String = "";
			loader.load (new URLRequest (prefix + path));
		}

		//used by starling code
		public static function getTexture(name:String, useMipMaps:Boolean = true):Texture {
			var texture:Texture = null;
			useMipMaps = false;
			//trace("getTexture",name);	
			if (textureInstances.hasOwnProperty(name)) {
				var textr:Texture = textureInstances[name];
				return Texture.fromTexture(textr);	
			}
			trace("ERROR. TEXTURE IS NULL:", name);
			return null;		
		}*/
		
		//used to load starling sprite sheet XML files
		public static function loadXML(id:String, path:String):void {
		
			var ldr:Loader = new Loader();
			
			ldr.contentLoaderInfo.addEventListener(Event.COMPLETE, function(event:Event):void{
				//trace("xml onComplete_"+id,event.target.loader.content);
				xmlInstances[id] = event.target.loader.content;

				numLoadedElements++;
				var perc:int = Math.ceil((numLoadedElements / numElementsForLoading) * 100);
				//trace("Loading xml:",perc+"%");
				updateProgressBar(perc)
			});
			ldr.contentLoaderInfo.addEventListener("ioError", function(e:*):void{
				trace("xml load FAILED",id, e);
			});
			ldr.contentLoaderInfo.addEventListener("securityError", function(e:*):void{
				trace("xml load FAILED2",id,e);
			});
			var prefix:String = "";
			//trace("Loading: ",prefix + path);
			ldr.load(new URLRequest(prefix + path));			
			
		}

		//used to get starling sprite sheet XML files
		public static function getXML(name:String):* {
			
			if (xmlInstances.hasOwnProperty(name)) {
				var theXML:* = xmlInstances[name];
				return theXML;	
			}
			trace("ERROR. XML IS NULL:", name);
				
			return null;
		}

		//preload mp3 files into the game
		public static function loadSound(id:String, path:String):void {
			var ldr:Loader = new Loader();	
			ldr.contentLoaderInfo.addEventListener(Event.COMPLETE, function(event:Event):void{
				//trace("Sound onComplete_",id,event.target.loader.content);
				soundInstances[id] = event.target.loader.content;

				numLoadedElements++;
				var perc:int = Math.ceil((numLoadedElements / numElementsForLoading) * 100);
				//trace("Loading snd:",perc+"%");
				updateProgressBar(perc)
			});
			ldr.contentLoaderInfo.addEventListener("ioError", function(e:*):void{
				trace("Sound load FAILED",id);
			});
			ldr.contentLoaderInfo.addEventListener("securityError", function(e:*):void{
				trace("Sound load FAILED2",id);
			});
			var prefix:String = "";
			//trace("Loading: ",prefix + path);
			ldr.load(new URLRequest(prefix + path));				
		}

		//get the preloaded mp3 Sound instances to the game
		public static function getSound(name:String):* {
			//trace("getSound",name);
			if (soundInstances.hasOwnProperty(name)) {
				var theSound:* = soundInstances[name];
				return theSound;	
			}
			trace("ERROR. SOUND IS NULL:", name);
			return null;
		}

		//init all assets
		public static function init(updateProgressBar:Function):void {	

			GameAssets.updateProgressBar = updateProgressBar;

			numElementsForLoading = 1;
			numLoadedElements = 0;
			
			//Music
			loadSound("intro", "assets/intro.mp3");
			
			//load starling textures
			//loadTexture("textureID", "assets/mytexture.jpg");
			
			//load starling XML spritesheet files
			//loadTexture("xmlID", "assets/spritesheet.xml");

		}


		
	}
}