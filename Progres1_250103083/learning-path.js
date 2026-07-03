document.addEventListener(
  "DOMContentLoaded",
  () => {
    const chips =
      document.querySelectorAll(
        ".cd-lp-chip",
      );

    const cards =
      document.querySelectorAll(
        ".cd-lp-card",
      );

    const empty =
      document.getElementById(
        "lpEmpty",
      );

    chips.forEach((chip) => {
      chip.addEventListener(
        "click",
        () => {
          chips.forEach((c) =>
            c.classList.remove(
              "active",
            ),
          );

          chip.classList.add(
            "active",
          );

          const filter =
            chip.dataset.filter.toLowerCase();

          let found = false;

          cards.forEach(
            (card) => {
              const category =
                card.dataset.category.toLowerCase();

              if (
                filter ===
                  "semua" ||
                category ===
                  filter
              ) {
                card.style.display =
                  "block";

                found = true;
              } else {
                card.style.display =
                  "none";
              }
            },
          );

          if (empty) {
            empty.style.display =
              found
                ? "none"
                : "block";
          }
        },
      );
    });
  },
);