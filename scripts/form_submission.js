//https://script.google.com/macros/s/AKfycbzryVTryJPCpBATMHWKW6zo2fE-NyPfnA65IzlP-RH6z_hJLDGhNo0gKlH2tCyDK39g/exec?action=addUser&sheet=Sheet1&name=ahmed&phone=010
var url =
  "https://script.google.com/macros/s/AKfycbyXU06Ex0ilpPSdfo9ZrPYr0LTdJYKhhSsR4-YM4Bp4j9MV17Fnfz9I-sY-vgeQYb69sA/exec";






function submitForm(e) {
  e.preventDefault();

  var submitbtn = document.getElementById("submit_button");
  submitbtn.innerHTML = "Loadding...";
  submitbtn.disabled = true;

  var name = document.getElementById("inputName").value;
  var phone = document.getElementById("inputPhone").value;
  var email = document.getElementById("inputEmail").value;
  var university = document.getElementById("inputUniversity").value;
  var faculty = document.getElementById("inputFaculty").value;
  var year = document.getElementById("inputYear").value;
  var aboutTREE = document.getElementById("aboutTREE").value;
 
  var prevExperience = document.getElementById("prevExperience").value;
  var first_pref = document.getElementById("first_pref").value;
  var first_pref_ans = document.getElementById("first_pref_ans").value;
  var second_pref = document.getElementById("second_pref").value;
  var second_pref_ans = document.getElementById("second_pref_ans").value;
  var inputQuestions = document.getElementById("inputQuestions").value;


  var myForm = document.getElementById("form1");
  url +=
    "?action=addUser&sheet="+
    encodeURIComponent(first_pref)
    +"&name=" +
    encodeURIComponent(name) +
    "&phone=" +
    encodeURIComponent(phone)+
    "&email=" +
    encodeURIComponent(email)+
    "&university=" +
    encodeURIComponent(university)+
    "&faculty=" +
    encodeURIComponent(faculty)+
    "&year=" +
    encodeURIComponent(year)+
    "&aboutTREE=" +
    encodeURIComponent(aboutTREE)+
 
    "&prevExperience=" +
    encodeURIComponent(prevExperience)+
    "&first_pref=" +
    encodeURIComponent(first_pref)+
    "&first_pref_ans=" +
    encodeURIComponent(first_pref_ans)+
    "&second_pref=" +
    encodeURIComponent(second_pref)+
    "&second_pref_ans=" +
    encodeURIComponent(second_pref_ans)+
    "&inputQuestions=" +
    encodeURIComponent(inputQuestions);
  


  // Make a GET request using fetch
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server if needed
      console.log(data);
      document.getElementById("show").style.display = "block";
      myForm.reset();
      submitbtn.disabled = false;
      submitbtn.innerHTML = "Submit";

      
    })
    .catch((error) => {
      alert("Something went wrong please try again later!");
      submitbtn.disabled = false;
      submitbtn.innerHTML = "Send";
      console.error("Error:", error);
    });
}

