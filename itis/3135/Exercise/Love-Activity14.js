/* eslint-disable no-alert */
$(document).ready(() => {
  $.ajax({
    type: "get",
    url: "team.json",
    beforeSend() {
      $("#team").html("Loading...");
    },
    timeout: 10000,
    error(xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success(data) {
      $("#team").html("");
      data.teammembers.forEach((teammember) => {
        $("#team").append(
          `<h3>${teammember.name}</h3>${teammember.title}<br>${teammember.bio}<br>`
        );
      });
    },
  });
});
