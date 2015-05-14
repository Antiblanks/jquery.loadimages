/**
 * loadImages 0.0.1 - jQuery Plugin
 * http://www.antiblanks.com/
 * Copyright (c) 2014 Daniel Ivanovic
 * Licensed under MIT and GPL
 * Date: Fri, May 24 2015 15:58:56 -0800
 */

if (!window["$"]) {
	var jQueryErrorMessage = "jquery-loadimages.js: Error: JQuery must be defined";
	if (window["console"])
		console.log(jQueryErrorMessage);
	else
		alert(jQueryErrorMessage);
}

(function ($) {
	if (!$.fn.loadImages) {
		$.fn.loadImages = function (options) {
			var self = this,
				options = $.extend({
					"debugLevel": 1,
					"delayAfterLoadedInMs": 500
				}, options),
				imagesLoaded = 0,
				imagesToLoad = [],
				initiated = false,
				$element = $(this);

			// Events

			self.IMAGES_LOADING = "loadImages.onImagesLoading";
			self.IMAGE_LOADED = "loadImages.onImageLoaded";
			self.IMAGES_LOADED = "loadImages.onImagesLoaded";
			
			// Public

			/**
			 * start
			 * Interface to call private start method
			 */
			self.start = function() {
				start();
			};

			/**
			 * getStateData
			 * Returns the current state object
			 */
			self.getStateData = function() {
				return {
					"imagesLoaded": imagesLoaded,
					"imagesToLoad": imagesToLoad
				};
			};

			// Private

			/**
			 * debug
			 * Debug based upon debug level
			 */
			function debug() {
				if (!window["console"])
					return;
				if (options.debugLevel != 0)
					console.log("jquery-loadimages.js:", arguments);
				if (options.debugLevel == 2) {
					if (typeof arguments.join == "function") {
						alert("jquery-loadimages.js: " + arguments.join(",")); 
					}
					else {
						var alertString = "jquery-loadimages.js: ";
						for (var i=0; i<arguments.length; i++) {
							if (i != 0)
								alertString += ", ";
							alertString += arguments[i];
						}
						alert(alertString);
					}
				}
			};

			/**
			 * init
			 * Initiate the plugin
			 */
			function init() {
				debug("Info:", "init();");
				$element.addClass("load-images");
				initiated = true;
				start();
			};

			/**
			 * start
			 * Attaches listeners to all contained images and dispatches
			 * event once all images have loaded
			 */
			function start() {
				debug("Info:", "start();", initiated);
				if (!initiated)
					return;
				var $imagesToLoad = $element.find("img.load-image");
				imagesToLoad = $imagesToLoad.toArray();
				imagesLoaded = 0;
				$element.trigger(self.IMAGES_LOADING, self.getStateData());
				if (imagesToLoad.length == 0) {
					$element.removeClass(".load-images-loading").addClass("load-images-loaded");
					$element.trigger(self.IMAGES_LOADED, self.getStateData());
					return;
				}
				$element.removeClass(".load-images-loaded").addClass("load-images-loading");
				$.each($imagesToLoad, function(index, item) {
					$(item)[0].onload = function() {
						imagesLoaded++;
						$element.trigger(self.IMAGE_LOADED, self.getStateData());
						console.log("loaded", imagesLoaded);
						if (imagesLoaded == imagesToLoad.length) {
							setTimeout(function() {
								$element.removeClass(".load-images-loading").addClass("load-images-loaded");
								$element.trigger(self.IMAGES_LOADED, self.getStateData());
							}, options.delayAfterLoadedInMs);
						}
					};
				});
			};

			// Init

			$element.data("loadImages", self);

			$(document).ready(function(evt) {
				init();
			});

			return this;
		}
	}
}(jQuery));