# PSD to Responsive Website Example
Conversion of a PSD into a responsive website.

I've converted a PSD design from behance.net into a responsive website.

I've used `rem` units for font-sizes and some margins, and percentage widths on almost everything else which makes it easy to scale the document for smaller screens.

In the work section, the design shows the two boxes side by side overlapping by a small square. I was able to achieve this by making the darker square a child of the larger and positioning it absolutely using `vw` units. This means that the boxes can grow in height for smaller screens and the square is still positioned correctly.

The next light square below it "underlaps" the dark square so I set it's `z-index` accordingly. However to keep it positioned correctly at the base of the dark square I needed to use JavaScript to calculate the top margin.

I added a mobile nav menu with a "hamburger" icon for smaller screens using media queries, with a CSS transition on the max-height property of the `<nav>` so it doesn't look too jerky.

Under the About Creativs section, for large screens the text is in a 3 column layout which changes to 1 column with a larger width for small screens. Also the footer logos are on one line for large screens, changing to two for medium and below.

I used SCSS for this project so check the source on GitHub rather than the page stylesheet (though source maps are enabled).

From: https://www.behance.net/gallery/16951129/FREE-PSD-Multipurpose-Landing-Page