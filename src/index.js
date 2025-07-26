import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

function setActiveTab(tabId) {
  document.querySelectorAll('nav .nav-link').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById(tabId);
  if (activeBtn) activeBtn.classList.add('active');
}

function showHome() {
  setActiveTab('Home-tab');
  HomePage();
}

function showAbout() {
  setActiveTab('About-tab');
  AboutPage();
}

document.getElementById('Home-tab').addEventListener('click', (e) => {
  e.preventDefault();
  showHome();
});

document.getElementById('About-tab').addEventListener('click', (e) => {
  e.preventDefault();
  showAbout();
});

// Show HomePage by default on load
showHome();