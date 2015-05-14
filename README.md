# jquery.loadimages
A JQuery plugin to attach load listeners to images within a container and fire an event when all the images have loaded.

Why use this plugin?
======

If you have a container which has img elements inside and you want the container or other parts of your site to behave differently before and after the img srcs have loaded.

How does it work?
======

The LoadImages plugin attaches load events to all images within a container that have the class 'load-image' and waits until all the images are loaded before dispatching the 'loadImages.onImagesLoaded' event. 

The LoadImages plugin will add a class to the target container to notify you of the current images load state: load-images-loading during load and load-images-loaded once the loading has completed. 

Usage Instructions
======

Include the LoadImages plugin and CSS by adding the following to the head of you page:

<pre>
    &lt;script type="text/javascript" src="../path/to/jquery-loadimages.js"&gt;
    &lt;link type="text/css" rel="stylesheet" href="../path/to/jquery-loadimages.css"&gt;
</pre>

Next add the class 'load-image' to the images within the container that you want to track loading:

<pre>
    &lt;img src="../path/to/image1.jpg" class="load-image" /&gt;
    &lt;img src="../path/to/image2.jpg" class="load-image" /&gt;
    &lt;img src="../path/to/image3.jpg" class="load-image" /&gt;
</pre>

Next create an instance of the plugin on the container that contains the images (you could attach it to the whole of the document body if you wanted to have a page wide loader display until all the images are ready...)

<pre>
    $("#container-with-images").loadImages();
</pre>

Finally you can listen to the following events so that your page can respond to the LoadImages plugin state changes: 

loadImages.onImagesLoading - Dispatched when image loading starts

<pre>
    var $loadImages = $("#container-with-images").loadImages();
    $loadImages.on("loadImages.onImagesLoading", function() {
        // show a loader or do something else...
    });
</pre>

loadImages.onImagesLoaded - Dispatched when image loading completes

<pre>
    var $loadImages = $("#container-with-images").loadImages();
    $loadImages.on("loadImages.onImagesLoaded", function() {
        // Hide a loader or do something else...
    });
</pre>

Enjoy!
