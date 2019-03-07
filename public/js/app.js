var profileQuery = window.location.pathname.slice(9);
// Displays their name and bio on their account page.
$.ajax({
  type: "GET",
  url: "/api/users/" + profileQuery,
  dataType: "JSON"
}).then(
  res =>
    $("#accountName").text(res.uname) &
    $("#biotext").text(res.bio) &
    res.posts.forEach(elem => {
      console.log(elem.imgid);

      // $(".posts").html(`<div class="col-3><img class="images" data-toggle="modal" data-target="#exampleModalCenter" src="https://drive.google.com/open?id=` + elem.imgid + `"  width="640" height="480" alt="User Post">
      // </div>`)
    })
);

$(function() {
  // Click on LOG IN button on Index
  $("#login-btn").on("click", function(event) {
    // Does not reload page on submit.
    event.preventDefault();
    // Grabs the values in forms.
    var username = $("#username-input")
      .val()
      .trim();
    var password = $("#password-input")
      .val()
      .trim();

    console.log(username + "|" + password);
    // Looks for match in Username and Password.

    // IF match -> successful log in and moves to profile page.
    // Grabs the username at the end of the profile URL.
    // ELSE not match -> alerts that Username and/or Password is incorrect.

    console.log(username + "|" + password);
    // Looks for match in Username and Password.

    //             // IF match -> successful log in and moves to profile page.
    //
    //             // ELSE not match -> alerts that Username and/or Password is incorrect.
    //
  });
  // Click on SIGN UP button on Index
  $("#sign-up-btn").on("click", function(event) {
    // Does not reload page on submit.
    event.preventDefault();
    // Grabs the values in the forms.
    var newUser = {
      username: $("#username-input")
        .val()
        .trim(),
      password: $("#password-input")
        .val()
        .trim()
    };

    // IF Username is not taken -> POSTS info into database.

    // THEN log in is successful and moves to profile page.

    // ELSE Username is taken -> alerts that username is not available and must be changed.
  });
  // Click on UPLOAD button on Upload
  $("#upload-btn").on("click", function(event) {
    // Does not reload page on submit.
    event.preventDefault();
    // Grabs file for photo
    var fileUpload = $("#file-input");
    // Grabs caption
    var caption = $("#bio-text").val();
    // POSTS info into database.
    $.ajax("[[API LINK]]", {
      type: "POST",
      img_id: profilePic,
      caption: caption
    }).then(function() {
      // Move to profile page and alert "Success!".
      location.href = "/profile/:account";
    });
  });
  // Click on UPDATE button on Edit
  $("#update-btn").on("click", function(event) {
    // Does not reload page on submit.
    event.preventDefault();
    // Grabs file for profile
    var profilePic = $("#profile-pic-input");
    // Grabs bio
    var bio = $("#bio-text").val();
    // UPDATES into database.
    $.ajax("[[API LINK]]", {
      type: "PUT",
      pic: profilePic,
      bio: bio
    }).then(function() {
      // Move to profile page and alert "Success!".
      location.href = "/profile/:account";
    });
  });
});
// add hover effect to like button

function hover(element) {
  $(element).attr("src", "/images/heart-outline-color.png");
}

function unhover(element) {
  $(element).attr("src", "/images/heart-outline.png");
}

function hover(element) {
  $(element).attr("src", "/images/heart-outline-color.png");
}

function unhover(element) {
  $(element).attr("src", "/images/heart-outline.png");
}
