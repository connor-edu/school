const API_URL =
  "https://www.flickr.com/services/feeds/photos_public.gne?id=" +
  encodeURIComponent("82407828@N07") +
  "&tags=" +
  encodeURIComponent(["vectacorpbuilding"].join(",")) +
  "&format=json";

$(document).ready(() => {
  $.ajax(API_URL, {
    dataType: "jsonp",
    jsonp: "jsoncallback",
  }).done((data) => {
    data.items.forEach((item) => {
      $("#new_building").append(
        `<a href="${item.media.m}" data-lightbox="images" data-title="${item.title}"><img src="${item.media.m}" /></a>`
      );
    });
  });
});
