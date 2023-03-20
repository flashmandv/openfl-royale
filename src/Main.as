package {
	
	
	import openfl.display.Stage;
	import openfl.display.Sprite;
	import bg.lan.sheepwar.Game;
	
	
	public class Main extends Sprite { 
		
		
		
		public function Main () { 
			super();

			

			var stage:Stage = new Stage (OpenflDemoWeb.GAME_WIDTH, OpenflDemoWeb.GAME_HEIGHT, 0x564F58, OpenflDemoWeb);
			stage.frameRate = 24;
			document.getElementById("game-holder").innerHTML = '';
			document.getElementById("game-holder").appendChild(stage.element);
			//document.body.appendChild(stage.element);
		}

		

	}
	
	
}