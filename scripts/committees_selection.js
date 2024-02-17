var mp = {

  "Mobile Development": "Tell us your experience with flutter",
  "UI/UX":
    "What's your UX workflow? (the process you go through to take a product from conceptualization to launch)",
  "AC Marketing": "What do you think when you hear the marketing name?",
  "AC HR":
    "What is your criteria to choose and evaluate someone for a specific job role? And What is the process to hire someone in the organization?",
};

function showTextField(name, question) {
  console.log(name);
  var textField = name + "_question";
  var label = name + "_label";
  document.getElementById(name+"_ans").value = '';
  document.getElementById(textField).style.display = "block";
  document.getElementById(label).innerHTML = question;
}

function showPortfolio(value, isFirst) {
  if (
    document.getElementById("portfolio_question").style.display != "block" ||
    isFirst ||
    (document.getElementById("first_pref").value != "Mobile Development" &&
      document.getElementById("first_pref").value != "UI/UX")
  ) {
    if (value == "Mobile Development") {
      document.getElementById("portfolio_question").style.display = "block";
      document.getElementById("portfolio_label").innerHTML =
        "Please provide a link to your Github account";
      document.getElementById("portfolio_ans").placeholder = "Github link";
      document.getElementById("portfolio_ans").required = true;
    } else if (value == "UI/UX") {
      document.getElementById("portfolio_question").style.display = "block";
      document.getElementById("portfolio_label").innerHTML =
        "Please provide a link to your Behance account";
      document.getElementById("portfolio_ans").placeholder = "Behance link";
      document.getElementById("portfolio_ans").required = true;
    } else {
      document.getElementById("portfolio_question").style.display = "none";
    }
  }
}

function activeAllOptions(pref) {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(pref).options[i].disabled = false;
  }
}

function selectCommittee(pref) {
  selectElement = document.getElementById(pref);
  value = selectElement.value;

  if (pref == "first_pref") {

    activeAllOptions("second_pref");
    document.getElementById("second_pref").options[
      selectElement.selectedIndex
    ].disabled = true;
  } else {
    activeAllOptions("first_pref");

    document.getElementById("first_pref").options[
      selectElement.selectedIndex
    ].disabled = true;
  }

  showTextField(pref, mp[value]);
}
