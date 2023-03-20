package {

	import openfl.utils.Timer;
	import openfl.events.TimerEvent;
	
	public class GameUtils {

		//private static var _timers:Array = new Array();
		public static function setTimeout(func:Function, intMS:int, param1:* = null, param2:* = null, param3:* = null, param4:* = null):Timer {
			var timer:Timer = new Timer(intMS, 1);
			//_timers.push(timer);
			timer.addEventListener(TimerEvent.TIMER_COMPLETE, function(e:TimerEvent):void {
				if (param4 != null) func(param1, param2, param3, param4);
				else if (param3 != null) func(param1, param2, param3);
				else if (param2 != null) func(param1, param2);
				else if (param1 != null) func(param1);
				else func();
			});
			timer.start();
			return timer;
		}
		
		
	}
}