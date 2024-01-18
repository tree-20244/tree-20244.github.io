//https://script.google.com/macros/s/AKfycbzryVTryJPCpBATMHWKW6zo2fE-NyPfnA65IzlP-RH6z_hJLDGhNo0gKlH2tCyDK39g/exec?action=addUser&sheet=Sheet1&name=ahmed&phone=010
var url =
  "https://script.google.com/macros/s/AKfycbzryVTryJPCpBATMHWKW6zo2fE-NyPfnA65IzlP-RH6z_hJLDGhNo0gKlH2tCyDK39g/exec";

function submitForm(e) {
  e.preventDefault();
  var name = document.getElementById("inputName").value;
  var phone = document.getElementById("inputPhone").value;
  var email = document.getElementById("inputEmail").value;
  var university = document.getElementById("inputUniversity").value;
  var faculty = document.getElementById("inputFaculty").value;
  var year = document.getElementById("inputYear").value;
  var aboutTREE = document.getElementById("aboutTREE").value;
  var generalQ = document.getElementById("generalQ").value;
  var prevExperience = document.getElementById("prevExperience").value;
  var first_pref = document.getElementById("first_pref").value;
  var first_pref_ans = document.getElementById("first_pref_ans").value;
  var second_pref = document.getElementById("second_pref").value;
  var second_pref_ans = document.getElementById("second_pref_ans").value;
  var inputQuestions = document.getElementById("inputQuestions").value;

  console.log(phone);
  console.log(name);
  console.log(email);
  console.log(university);
  console.log(faculty);
  console.log(year);
  console.log(aboutTREE);
  console.log(generalQ);
  console.log(prevExperience);
  console.log(first_pref);
  console.log(first_pref_ans);
  console.log(second_pref);
  console.log(second_pref_ans);
  console.log(inputQuestions);

  var myForm = document.getElementById("form1");
  url +=
    "?action=addUser&sheet=Sheet1&name=" +
    encodeURIComponent(name) +
    "&phone=" +
    encodeURIComponent(phone);

  // Make a GET request using fetch
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server if needed
      console.log(data);
      alert("Successfully submitted form!");
      myForm.reset();
      // Hide loading spinner and display success message
      //document.getElementById("loadingSpinner").style.display = "none";
      // document.getElementById("successMessage").style.display = "block";
    })
    .catch((error) => {
      alert("Something went wrong please try again later!");
      // Hide loading spinner and handle errors
      // document.getElementById("loadingSpinner").style.display = "none";
      console.error("Error:", error);
    });
}
