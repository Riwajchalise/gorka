function changeLanguage(lang) {
  let currentPath = window.location.pathname; 

  // If the current language is "es", remove it to get the base URL
  if (currentPath.startsWith("/es/")) {
      currentPath = currentPath.replace("/es/", "/");
  }

  // Redirect to the same page but in the selected language
  if (lang === "es") {
      window.location.href = "/es" + currentPath;
  } else {
      window.location.href = currentPath; // English has no prefix
  }
}
