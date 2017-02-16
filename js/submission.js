function validateContent() {
    var artist1 = document.forms["myForm"]["artist1"].value;
    var artist2 = document.forms["myForm"]["artist2"].value;
    var artist3 = document.forms["myForm"]["artist3"].value;
    var artist4 = document.forms["myForm"]["artist4"].value;
    var artist5 = document.forms["myForm"]["artist5"].value;
    var album1 = document.forms["myForm"]["album1"].value;
    var album2 = document.forms["myForm"]["album2"].value;
    var album3 = document.forms["myForm"]["album3"].value;
    var album4 = document.forms["myForm"]["album4"].value;
    var album5 = document.forms["myForm"]["album5"].value;

    if (artist1 == "") {
      alert("artist1 must be filled out");
      return false;
    }

    if (album1 == "") {
      alert("album1 must be filled out");
      return false;
    }

    if (artist2 == "") {
      alert("artist2 must be filled out");
      return false;
    }

    if (album2 == "") {
      alert("album2 must be filled out");
      return false;
    }

    if (artist3 == "") {
      alert("artist3 must be filled out");
      return false;
    }

    if (album3 == "") {
      alert("album3 must be filled out");
      return false;
    }

    if (artist4 == "") {
      alert("artist4 must be filled out");
      return false;
    }

    if (album4 == "") {
      alert("album4 must be filled out");
      return false;
    }

    if (artist5 == "") {
      alert("artist5 must be filled out");
      return false;
    }

    if (album5 == "") {
      alert("album5 must be filled out");
      return false;
    }

    alert("Submission successful!");
    return true;
}
