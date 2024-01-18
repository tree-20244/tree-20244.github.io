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
      "What is your criteria to choose and evaluate someone for a specific job role?",
  };
  function showTextField(name, question) {
    var textField = name + "_question";
    var label = name + "_label";

    document.getElementById(textField).style.display = "block";
    document.getElementById(label).innerHTML = question;
  }

  function selectCommittee(pref) {
    selectElement = document.getElementById(pref);
    value = selectElement.value;
    showTextField(pref, mp[value]);
    console.log(mp[value]);
    console.log(value);
  }