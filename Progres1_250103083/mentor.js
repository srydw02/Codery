const user = JSON.parse(localStorage.getItem("coderyLoggedInUser"));

document.querySelectorAll(".cd-mentor-card").forEach((card) => {
  const mentor = card.dataset.mentor;
  const ratingBox = card.querySelector(".mentor-rating");
  const button = card.querySelector(".rate-btn");

  if (!user) {
    button.style.display = "none";
  }

  render();

  function render() {
    if (!user) {
      ratingBox.innerHTML = "";
      button.style.display = "none";
      return;
    }

    button.style.display = "block";

    const reviews = JSON.parse(localStorage.getItem("mentorReviews")) || [];

    const list = reviews.filter((x) => x.mentor === mentor);

    if (list.length === 0) {
      ratingBox.innerHTML = "Belum ada penilaian";
      return;
    }

    ratingBox.innerHTML = list
      .map(
        (r) => `
            <div class="review-item">
              <div>${"⭐".repeat(r.rating)}</div>
              <div>${r.comment}</div>
            </div>
          `,
      )
      .join("");
  }

  button.onclick = () => {
    const rating = prompt("Masukkan rating 1-5");

    if (!rating) {
      return;
    }

    const comment = prompt("Tulis komentar");

    if (!comment) {
      return;
    }

    const data = JSON.parse(localStorage.getItem("mentorReviews")) || [];

    data.push({
      mentor,
      rating: Number(rating),
      comment,
    });

    localStorage.setItem("mentorReviews", JSON.stringify(data));

    render();
  };
});
