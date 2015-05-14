# jquery.loadimages
A JQuery plugin to attach load listeners to images within a container and fire an event when all the images have loaded

Why use this plugin?
======

If you have a container which is has img elements inside and you want the container or other parts of your site to behave differently before and after the img srcs have loaded.

How does it work?
======

The LoadImages plugin attaches load events to all images within a container and waits until all the images are loaded before dispatching the 'loadImages.onImagesLoaded' event. 

The LoadImages plugin will add a class to the target container to notify you of the current images load state: load-images-loading during load and load-images-loaded once the loading has completed. 

By default the LoadImages plugin will show a loader DOM element defined by the class 'load-images-loader' which is a child of the container and set all contained img tags to visibility: hidden; during image load. This is all handled by CSS so you can easily change this behaviour by editing the styles in jquery-loadimages.css.

Usage Instructions
======

Include the LoadImages plugin and CSS by adding the following to the head of you page:

<pre>
    &lt;script type="text/javascript" src="../path/to/jquery-loadimages.js"&gt;
    &lt;link type="text/css" rel="stylesheet" href="../path/to/jquery-loadimages.css"&gt;
</pre>

Next create an instance of the plugin on any container within your page that contains images (you could do attach it to the whole of the document body if you wanted to have a page wide loader display until all the images are ready...)

<pre>
    $("#container-with-images").loadImages();
</pre>

Finally you can listen to the following events so that your page can respond to the LoadImages plugin state changes: 

loadImages.onImagesLoading - Dispatched when image loading starts
loadImages.onImagesLoaded - Dispatched when image loading completes

Enjoy!
