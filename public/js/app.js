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

    // ELSE not match -> alerts that Username and/or Password is incorrect.
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

    // resets username and password texbox
    $("#username-input").val("");
    $("#password-input").val("");

    // console.log(newUser);
    // $.post("/api/users", newUser, function(data) {
    //   // console.log(data);
    // });

    $.get("/api/users", function(data) {
      var loginValueTaken = false;
      for (user in data) {
        // console.log(typeof data[user].uname);
        // console.log(typeof data[user].pword);
        // console.log(newUser);
        // console.log(typeof newUser.password);

        console.log("searching");
        // console.log(data[user]);

        if (data[user].uname === newUser.username || data[user].pword === newUser.password) 
        {
          loginValueTaken = true;
          return console.log("username taken");
        }

        // if (data[user].uname === newUser.username || data[user].pword === newUser.password)
        // {
        //   alert("change username or password");
        // } else
        // {
        //   $.post("/api/users", newUser, function(data) {
        //     console.log(data);
        //   });
        // }
      } 
      if (!loginValueTaken) {
        $.post("/api/users", newUser, function(data) {
          console.log("posted");
        });
      }
    });

    // Checks if there is already a Username that is the same as input.

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
