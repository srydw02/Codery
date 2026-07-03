document.addEventListener("DOMContentLoaded", () => {
  const navActions = document.getElementById("navActions");

  if (!navActions) return;

  const loggedUser = JSON.parse(
    localStorage.getItem("coderyLoggedInUser"),
  );

  if (loggedUser) {
    navActions.innerHTML = `
      <div class="cd-user-menu">
        <span class="cd-user-email">
          👤 ${loggedUser.email}
        </span>

        <button id="logoutBtn" class="cd-logout-btn">
          Logout
        </button>
      </div>
    `;

    document
      .getElementById("logoutBtn")
      .addEventListener("click", () => {
        localStorage.removeItem("coderyLoggedInUser");

        alert("Logout berhasil");

        window.location.href = "beranda.html";
      });
  }
});