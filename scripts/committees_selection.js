var mp = {
    HR: "Describe for me a time that you handled criticism well.",
    Marketing: "What the difference between marketing and advertising ?",
    Photography: "Tell me 5 elements of video ",
    "Graphic design": "What do you know about color theory ?",
    PR: "How would you approach and convince public figures to participate in our events and ensuring that they also enjoy it.",
    FR: "financial and catering sponsors fits TREE mega event ( educational event )",
    CNL: "Places for decoration materials and packing",
    "Mobile Development": "Tell us your experience with flutter",
    "UI/UX":
      "What's your UX workflow? (the process you go through to take a product from conceptualization to launch)",
    "AC Marketing": "What do you think when you hear the marketing name?",
    "AC HR":
      "What is your criteria to choose and evaluate someone for a specific job role? And What is the process to hire someone in the organization?",
  };

  function showTextField(name, question) {
    var textField = name + "_question";
    var label = name + "_label";

    document.getElementById(textField).style.display = "block";
    document.getElementById(label).innerHTML = question;
  }

  function showPortfolio(value) {
    if(document.getElementById("portfolio_question").style.display != "block"){
      if (value == "Mobile Development" ){
        document.getElementById("portfolio_question").style.display = "block";
        document.getElementById("portfolio_label").innerHTML = "Please provide a link to your Github account";
        document.getElementById("portfolio_ans").placeholder = "Github link";
        document.getElementById("portfolio_ans").required = true;

      }
      else if (value == "UI/UX"){
        document.getElementById("portfolio_question").style.display = "block";
        document.getElementById("portfolio_label").innerHTML = "Please provide a link to your Behance account";
        document.getElementById("portfolio_ans").placeholder = "Behance link";
        document.getElementById("portfolio_ans").required = true;
      }
    }

  }

  function selectCommittee(pref) {
    selectElement = document.getElementById(pref); 
    value = selectElement.value; 

    if  (pref == "first_pref") {
      document.getElementById("second_pref").options[selectElement.selectedIndex].disabled = true;
    }else{
      document.getElementById("first_pref").options[selectElement.selectedIndex].disabled = true;
    }

    showPortfolio(value);
    showTextField(pref, mp[value]);
  }