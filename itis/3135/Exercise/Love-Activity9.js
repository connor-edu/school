$(document).ready(() => {
  // get the image URL and caption for each image
  // preload the image for each link
  // set up the event handlers for each link
  // cancel the default action of each link
  // move the focus to the second link
  const mainCaption = $(`#caption`);
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
     * Setting the id to image is required for
     * any seqential clicks to properly find the image.
     */
    const image = new Image();
    image.src = src;
    image.id = `image`;
    image.alt = `Image Gallery area`;

    a.on(`click`, (evt) => {
      evt.preventDefault();
      const mainImage = $(`#image`);
      mainImage.replaceWith(image);
      mainCaption.text(caption);
    });
  });
  $(`li:nth-child(2) a`).focus();
});
