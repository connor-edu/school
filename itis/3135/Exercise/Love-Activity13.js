$(document).ready(() => {
  $("#nav_list a").on("click", function a() {
    const name = $(this).attr("title");
    fetch("./json_files/" + name + ".json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const speaker = data.speakers[0];
        $("main h1").text(speaker.title);
        $("main h2").text(speaker.month);
        $("main h3").text(speaker.speaker);
        $("main img").attr("src", speaker.image);
        $("main p").text(speaker.text);
      });
  });
});
