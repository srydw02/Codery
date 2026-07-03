const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

document.querySelectorAll(".cd-toggle-password").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.target);
    if (!input) return;

    input.type = input.type === "password" ? "text" : "password";
    button.classList.toggle("active", input.type === "text");
  });
});

function getUsers() {
  return JSON.parse(localStorage.getItem("coderyUsers")) || [];
}

function saveUsers(users) {
  localStorage.setItem("coderyUsers", JSON.stringify(users));
}

if (registerForm) {
  const usernameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  const passwordHint = document.getElementById("passwordHint");
  const confirmPasswordHint = document.getElementById("confirmPasswordHint");

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    passwordHint.textContent = "";
    confirmPasswordHint.textContent = "";
    passwordHint.classList.remove("invalid");
    confirmPasswordHint.classList.remove("invalid");

    let isValid = true;

    if (passwordInput.value.length < 8) {
      passwordHint.textContent = "Password minimal 8 karakter.";
      passwordHint.classList.add("invalid");
      isValid = false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordHint.textContent =
        "Confirm password harus sama dengan password.";
      confirmPasswordHint.classList.add("invalid");
      isValid = false;
    }

    if (!isValid) return;

    const users = getUsers();

    const emailAlreadyUsed = users.some(
      (user) => user.email === emailInput.value,
    );

    if (emailAlreadyUsed) {
      confirmPasswordHint.textContent = "Email sudah terdaftar. Silakan login.";
      confirmPasswordHint.classList.add("invalid");
      return;
    }

    users.push({
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    });

    saveUsers(users);

    alert("Akun berhasil dibuat. Silakan login.");
    window.location.href = "login.html";
  });
}

if (loginForm) {
  const emailInput = document.getElementById("email");
  const loginPasswordInput = document.getElementById("loginPassword");
  const loginPasswordHint = document.getElementById("loginPasswordHint");
  const loginErrorHint = document.getElementById("loginErrorHint");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    loginPasswordHint.textContent = "";
    loginErrorHint.textContent = "";

    loginPasswordHint.classList.remove("invalid");
    loginErrorHint.classList.remove("invalid");

    if (loginPasswordInput.value.length < 8) {
      loginPasswordHint.textContent = "Password minimal 8 karakter.";
      loginPasswordHint.classList.add("invalid");
      return;
    }

    const users = getUsers();

    const foundUser = users.find(
      (user) =>
        user.email === emailInput.value &&
        user.password === loginPasswordInput.value,
    );

    if (!foundUser) {
      loginErrorHint.textContent =
        "Email atau password salah. Pastikan akun sudah terdaftar.";
      loginErrorHint.classList.add("invalid");
      return;
    }

    localStorage.setItem("coderyLoggedInUser", JSON.stringify(foundUser));

    alert(`Login berhasil. Selamat datang, ${foundUser.username}!`);
    window.location.href = "beranda.html";
  });
}
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
    // sembunyikan hero mentor jika sudah login
  const mentorHero =
    document.getElementById(
      "mentorHero",
    );

  if (mentorHero) {
      mentorHero.style.display =
      "none";
  }
  const mentorCta =
  document.querySelector(
    ".cd-mentor-cta",
  );

  if (mentorCta) {
    mentorCta.style.display =
    "none";
}
    //sembunyaikan CTA jika sudah login
const newsletter =
  document.getElementById(
    "newsletterSection",
  );

const finalCta =
  document.querySelector(
    ".cd-final-cta",
  );

if (newsletter) {
  newsletter.style.display =
    "none";
}

if (finalCta) {
  finalCta.style.display =
    "none";
}
 const logoutBtn =
  document.getElementById(
    "logoutBtn",
  );

if (logoutBtn) {
  logoutBtn.addEventListener(
    "click",
    () => {
      localStorage.removeItem(
        "coderyLoggedInUser",
      );

      alert(
        "Logout berhasil",
      );

      window.location.href =
        "beranda.html";
    },
  );
}}
});