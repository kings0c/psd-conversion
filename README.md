# PSD to Responsive Website Example

I've converted a PSD design from behance.net into a responsive website.

I've used `rem` units for font-sizes and some margins, and percentage widths on almost everything else which makes it easy to scale the document for smaller screens.

The full screen image at the top was achieved using `vh` units to match the size to the viewport. Browser support for these is ok - they work in IE > 8 but have issues in Safari 6/7. if this were a production site I'd find some other way of achieving this (either `height: 100%` or a polyfill).

The next section has a standard 3 column layout. For smaller screens I used media queries to extend their width slightly and place the 3rd column below in the centre.

In the next section (Introducing the Fudi App), I encountered a problem. As the image of the iPhone needs to be at the bottom of the parent `div`, I applied `position: absolute` to it. However as absolute positioning removes an element from the normal document flow, it's parent div no longer expanded to wrap around it. To get around this, rather than using JavaScript, I placed a copy of the same element behind it without `position: absolute` and set `visibility: hidden` on it.

For the Cuisines section near the bottom I opted to use flexbox. Again if this was a production site I'd be more hesitant as browser support for this isn't great at the moment.

I used SCSS for this project so check the source on GitHub rather than the page stylesheet (though source maps are enabled).

From: https://www.behance.net/gallery/16951129/FREE-PSD-Multipurpose-Landing-Page