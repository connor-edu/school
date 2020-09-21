$(document).ready(() => {
  fetch("./team.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.teammembers.forEach((member) => {
        $("#team").append(
          $(`<img src="${member.image}">
<h2>${member.first_name}</h2>
<h3>${member.title}</h3>
<p>${member.bio}</p>`)
        );
      });
    });
});
