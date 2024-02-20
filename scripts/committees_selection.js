var mp = {

  "Mobile Development": "What is your current level in programming? And what programming languages are you familiar with?",
  "UI/UX":
    "What is the difference between ui and ux?",
  "AC Marketing": "Why marketing and not the other committees?",
  "AC HR":
    "Is HR one department or several departments?",
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
