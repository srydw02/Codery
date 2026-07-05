const title = document.getElementById("title");
const desc = document.getElementById("desc");
const meta = document.getElementById("meta");
const roadmap = document.getElementById("roadmap");

const paths = {
  frontend: {
    title: "💻 Frontend Developer",

    desc:
      "Belajar membangun website modern dari HTML hingga React.",

    meta: [
      "📚 4 Kelas",
      "⏳ 12 Minggu",
      "📊 850+ Learner",
    ],

    roadmap: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Portfolio Project",
    ],

    materials: [
      {
        title: "Materi HTML Dasar",
        link: "https://youtu.be/0oA1Z6UKM5M?si=QzSCV5zB3P4gNk5e",
      },

      {
        title: "Materi CSS Dasar",
        link: "https://youtu.be/V-DD30lGAL0?si=-OahqyGOxY01dQPB",
      },

      {
        title: "Materi JavaScript",
        link: "https://youtu.be/sNLadea-tLU?si=pWRtBX2GjHBfPNEB",
      },
    ],
  },

  data: {
    title: "📊 Data Analyst",

    desc:
      "Belajar analisis data dari dasar hingga visualisasi.",

    meta: [
      "📚 4 Kelas",
      "⏳ 10 Minggu",
      "📊 720+ Learner",
    ],

    roadmap: [
      "Excel",
      "SQL",
      "Python",
      "Dashboard",
      "Data Storytelling",
    ],

    materials: [
      {
        title: "Materi Excel",
        link: "https://youtu.be/6WgvzCU3TI8?si=YAB-TOTGvXNf4SyGk",
      },

      {
        title: "Materi SQL",
        link: "https://youtu.be/DPGMBa0srPA?si=FkmL8ZUp4yyyMGiG",
      },

      {
        title: "Materi Python Data",
        link: "https://youtu.be/poZtdyC24P4?si=t5C0SM3r_VhM2URv",
      },
    ],
  },

  cyber: {
    title: "🛡️ Cyber Security",

    desc:
      "Belajar keamanan sistem dan penetration testing.",

    meta: [
      "📚 5 Kelas",
      "⏳ 14 Minggu",
      "📊 410+ Learner",
    ],

    roadmap: [
      "Networking",
      "Linux",
      "Web Security",
      "Pentesting",
      "Bug Bounty",
    ],

    materials: [
      {
        title: "Materi Networking",
        link: "https://youtu.be/IvBfxSJWx6A?si=aiTYDT1BNDQLVFh0",
      },

      {
        title: "Materi Linux",
        link: "https://youtu.be/p0UBn2J1y-Y?si=e9AGdkH9h6fVuvJo",
      },

      {
        title: "Materi Pentesting",
        link: "https://youtu.be/eMjoxaTpOgM?si=2MRM1eSBKoclSSe6",
      },
    ],
  },

  ai: {
    title: "🤖 AI Engineer",

    desc:
      "Belajar Machine Learning hingga project AI.",

    meta: [
      "📚 5 Kelas",
      "⏳ 16 Minggu",
      "📊 500+ Learner",
    ],

    roadmap: [
      "Python",
      "Data Science",
      "Machine Learning",
      "Deep Learning",
      "AI Project",
    ],

    materials: [
      {
        title: "Materi Python AI",
        link: "https://youtu.be/oQu5uowvQOo?si=nSgVVl0UpMABrcBX",
      },

      {
        title: "Materi Machine Learning",
        link: "../materi.html",
      },
    ],
  },

  devops: {
    title: "⚙️ DevOps Engineer",

    desc:
      "Belajar deployment modern dan cloud.",

    meta: [
      "📚 4 Kelas",
      "⏳ 12 Minggu",
      "📊 320+ Learner",
    ],

    roadmap: [
      "Linux",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Cloud",
    ],

    materials: [
      {
        title: "Materi Docker",
        link: "https://youtu.be/MtkXWErov50?si=2fNUfHNJu2GjvBtk",
      },

      {
        title: "Materi Kubernetes",
        link: "../materi.html",
      },
    ],
  },
};

const key =
  new URLSearchParams(window.location.search).get("path") ||
  "frontend";

const data = paths[key];

if (data) {
  title.textContent =
    data.title;

  desc.textContent =
    data.desc;

  meta.innerHTML =
    data.meta
      .map(
        (item) =>
          `<span>${item}</span>`
      )
      .join("");

  roadmap.innerHTML =
    data.roadmap
      .map(
        (item) =>
          `<span>${item}</span>`
      )
      .join("");

  const loggedUser =
    JSON.parse(
      localStorage.getItem(
        "coderyLoggedInUser"
      )
    );

  const materialArea =
    document.getElementById(
      "materials"
    );

  if (
    loggedUser &&
    data.materials
  ) {
    materialArea.innerHTML =
      `
      <h2 style="margin-top:40px">
        Materi
      </h2>

      ${
        data.materials
          .map(
            (item) =>
              `
              <a
                href="${item.link}"
                target="_blank"
                class="cd-back"
                style="
                  display:block;
                  margin-bottom:12px;
                "
              >
                📘 ${item.title}
              </a>
              `
          )
          .join("")
      }
      `;
  }
}