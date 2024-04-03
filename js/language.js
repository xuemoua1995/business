function switchLanguage(lang) {
     console.log("lang:...", lang)
  // Set the HTML lang attribute
  document.documentElement.lang = lang;

  // Update content based on the selected language
  if (lang === "en") {
    document.getElementById("greeting").textContent = "Get In Touch";
  } else if (lang === "la") {
    document.getElementById("greeting").textContent = "ຂໍ້ມູນຕິດຕໍ່";
  }

  localStorage.setItem("selectedLanguage", lang);
}

// Check if language was previously selected and apply it on page load
document.addEventListener("DOMContentLoaded", () => {
  const selectedLanguage = localStorage.getItem("selectedLanguage");
  console.log('selectedLanguage:....', selectedLanguage)
  if (selectedLanguage) {
    switchLanguage(selectedLanguage);
  }
});
