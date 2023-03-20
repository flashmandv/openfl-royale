# openfl-royale




<br />
<p align="center"><img src="assets/openfl.png"/></p>


Introduction
============

This is enhanced npm copy of the original [OpenFL](https://github.com/openfl/openfl) open source project made to work with pure ActionScript and Apache Royale compiler.
Using npm version of OpenFL and Royale compiler it is possible to port AS games to HTML5/JS.
Latest version of [OpenFL (8.9.6) for npm](https://www.npmjs.com/package/openfl) (as of 20 March 2023) is used to add functionality to load swf MovieClips and control their timeline (play, stop, gotoAndPlay, etc..)

Haxe OpenFL currently supports loading of swf bundles (after openfl process movie.swf command) but Haxe requires rewriting your entire ActionScript code.
The goal of this repository is to use Apache Royale compiler to directly port your AS games to JS/html5

What was added
==============

 * SWF MovieClip loading and timeline is supported (adopting the code from Haxe OpenFL version).
   swf_exporters_animate_AnimateLibrary and other classes from animate namespace are now supported
 * Dynamic MovieClip access from loaded SWF MovieClips (loadedMovie.child.subchild.text = '')
 * Auto timeline stop when frame label 'stop' is found
 * Improved mp3 files support. The original library was not able to play some mp3 files. This is more of a bug fix

 

Compatibility
=============

This version of OpenFL is compatible with:

 * [npm Starling](https://www.npmjs.com/package/starling)
 * [GreenSock GSAP Timeline](https://greensock.com/docs/v3/GSAP/Timeline) Sample in the Demo project
 
 
 

Running the Demo project
========================
### 1. Install Apache Royale SDK (https://royale.apache.org/download/) and Visual Studio Code
Follow their instructions on installing, setting environment variables, etc..

### 2. Install nodejs, npm and all npm dependencies that are shown in package.json file (asconfigc, lime, motion, howler, gsap, cpx, ..)
Basically any flash plugins that you need, must have npm package 
### 3. Set your Royale SDK path to the OPENFL_DEMO.code-workspace file
This project is tested with latest Royale version 0.9.9
### 4. In visual Studio Code terminal run command: npm start
This will run several commands (described in package.json file) among one is #### openfl process assets.swf bin/js-debug/assets.bundle
This will convert the swf file to usable bundle package.
You need have to go inside the bin/js-debug/assets.bundle folder and extract the produced assets.zip file in the same folder

### 5. The npm start command already launched your browser with http://localhost:3000/ so simply reload it so the demo game can load the MovieClip assets


Known Issues
============

 * The timeline autostop when label 'stop' is set, can cause issues when timeline is also controled with AS and the stop label is placed at frame 1.
 * The dynamic movieclip access (movie.subChild.subSubChild..) will not work when the MovieClip is not present at frame 1. In this case, use movie.getChildByName("name").
 * hitTest methos aren't working, despite the code being there. It needs further inverstigation and debugging.
 * Feathers UI is not working with the npm Starling version that currently works. Maybe [joshtynjala](https://github.com/joshtynjala) can help 
 * Release buils with `asconfigc --debug=false` commands are failing in the console, but working Main.js file is produced. That is probably bug to the [asconfigc compiler] (https://github.com/BowlerHatLLC/asconfigc)

Other Notes
===========

 * Most browsers will block the autoplay of audio, so you must link the audio start to user click or other interaction
 * Font embeding (loading) from AS is not working. Workaround is shown in the html template file - simply JS load it and add it to the document  
 
This library was produced by directly editing the openfl.js npm version 8.9.6

Wanna help?
===========
Do not hesitate to contribute to this repository as I don't have much time on it.
It was used to port two flash AS games to html5/js. 
 * https://boardgamesonline.net/Online/wonders  (Made with Starling)
 * https://boardgamesonline.net/Online/warsheep (Made with pure AS and dosens of Flash swf MovieClips)