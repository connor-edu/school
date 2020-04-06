$(document).ready(() => {
  // get the image URL and caption for each image
  // preload the image for each link
  // set up the event handlers for each link
  // cancel the default action of each link
  // move the focus to the second link
  const mainCaption = $(`#caption`);
  /**
   * I don't like the fact that we can queue new
   * animations before the previous one has finished,
   *
   * So I'm disabling any new animations until it has finished.
   *
   * I could use the `jQuery.prototype.finish` method but with the amount of
   * callbacks that add to the queue, it seems a little out of scope of this assignment.
   */
  let animating = false;
  // eslint-disable-next-line func-names
  $(`li a`).each(function() {
    const a = $(this);
    const src = a.attr(`href`);
    const caption = a.attr(`title`);
    /**
     * Store a copy of each image in memory.
     * This guarantees that each image is preload at page load, and is not
     * fetched again after every click.
     *
     * Otherwise the browser will "preload" the image, but it will always go
     * off to check if the image has been updated when the click event handler
     * below if fired.
     *
     * This would be fine, but the "webserver" these assignments
     * are hosted on don't perform any of the basic web server functions,
     * like static file cache with the correct headers (`Cache-Control`)
     *
     * Setting the id to image is required for
     * any seqential clicks to properly find the image.
     */
    const image = new Image();
    image.src = src;
    image.id = `image`;
    image.alt = `Image Gallery area`;

    a.on(`click`, (evt) => {
      evt.preventDefault();
      if (animating) {
        return;
      }

      animating = true;
      /**
       * Fade out the caption on the screen.
       */
      mainCaption
        .fadeOut(2000, () => {
          /**
           * Once the fade animation is complete,
           * replace the text with the new caption.
           */
          mainCaption.text(caption);
        })
        /**
         * Fade the caption element back in with the updated capation
         */
        .fadeIn(2000);
      /**
       * Get a new reference to the image element.
       */
      const mainImage = $(`#image`);
      /**
       * Fade out the image element.
       */
      mainImage.fadeOut(2000, () => {
        /**
         * Replace the image element with the
         * element we have cached in this closure.
         */
        mainImage.replaceWith(image);
        /**
         * Once we replace it, the new element will not be faded in, so we immediately fade it out.
         */
        $(`#image`)
          .fadeOut(0)
          .fadeIn(2000, () => {
            /**
             * Add a 2 sec delay then change the font size of the caption.
             *
             * Once that animation is complete we reset out `animating` flag.
             */
            mainCaption.delay(2000).animate({ fontSize: `1.5em` }, () => {
              animating = false;
            });
          });
      });
    });
  });
  $(`li:nth-child(1) a`).focus();
});
