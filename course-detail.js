const courses = {
  "html-css": {
    category: "Frontend",
    title: "HTML & CSS Fundamental",
    description:
      "Pelajari dasar pembuatan website dari nol menggunakan HTML dan CSS hingga mampu membuat landing page responsive.",
    rating: "⭐ 4.8",
    modules: "📚 12 Modul",
    duration: "🕒 6 Minggu",
    price: "Gratis",
    projectTitle: "Landing Page Responsive",
    project:
      "Di akhir kelas, kamu akan membuat landing page modern yang responsive untuk desktop dan mobile.",
    learning: [
      ["HTML", "Membuat struktur halaman website dengan semantic HTML."],
      ["CSS", "Mengatur warna, layout, spacing, typography, dan komponen."],
      ["Flexbox & Grid", "Membuat layout website yang rapi dan fleksibel."],
      [
        "Responsive",
        "Menyesuaikan tampilan website untuk berbagai ukuran layar.",
      ],
    ],
    roadmap: [
      ["Pengenalan HTML", "Memahami struktur dasar halaman website."],
      ["Semantic HTML", "Membuat struktur konten yang rapi dan mudah dibaca."],
      ["Dasar CSS", "Mengatur tampilan halaman dengan styling modern."],
      ["Layout Website", "Membuat layout menggunakan Flexbox dan Grid."],
      ["Responsive Design", "Membuat website nyaman dibuka di HP dan laptop."],
    ],
    mentor: {
      initials: "FA",
      name: "Fajar Aditya",
      role: "Frontend Mentor",
      bio: "Berpengalaman membimbing pembuatan tampilan website modern, responsive, dan siap portfolio.",
    },
  },

  javascript: {
    category: "Frontend",
    title: "JavaScript Modern",
    description:
      "Kuasai JavaScript modern mulai dari ES6+, DOM, event, async/await, hingga membuat website interaktif.",
    rating: "⭐ 4.9",
    modules: "📚 16 Modul",
    duration: "🕒 8 Minggu",
    price: "Rp 299K",
    projectTitle: "Website Interaktif",
    project:
      "Kamu akan membuat website interaktif dengan fitur pencarian, filter, dan manipulasi data sederhana.",
    learning: [
      ["ES6+", "Memahami syntax JavaScript modern."],
      ["DOM", "Mengubah elemen HTML menggunakan JavaScript."],
      ["Event", "Membuat interaksi tombol, input, dan user action."],
      ["Async", "Mengambil data menggunakan fetch dan async/await."],
    ],
    roadmap: [
      ["JavaScript Dasar", "Variabel, function, array, dan object."],
      ["DOM Manipulation", "Mengatur elemen halaman secara dinamis."],
      ["Event Handling", "Menangani aksi user pada halaman."],
      ["Fetch API", "Mengambil data dari sumber eksternal."],
      ["Mini Project", "Membangun fitur interaktif sederhana."],
    ],
    mentor: {
      initials: "FA",
      name: "Fajar Aditya",
      role: "Frontend Mentor",
      bio: "Membantu learner memahami JavaScript dari dasar hingga siap dipakai membangun project nyata.",
    },
  },

  react: {
    category: "Frontend",
    title: "React.js Masterclass",
    description:
      "Belajar React dari dasar component, props, state, hooks, routing, hingga membangun project frontend modern.",
    rating: "⭐ 4.9",
    modules: "📚 20 Modul",
    duration: "🕒 10 Minggu",
    price: "Rp 499K",
    projectTitle: "Dashboard React",
    project:
      "Kamu akan membuat dashboard sederhana menggunakan React dengan komponen reusable dan data dinamis.",
    learning: [
      ["Component", "Membagi UI menjadi komponen yang rapi."],
      ["Props & State", "Mengelola data dan perubahan tampilan."],
      ["Hooks", "Menggunakan useState dan useEffect."],
      ["Routing", "Membuat navigasi halaman dengan React Router."],
    ],
    roadmap: [
      ["React Fundamental", "Memahami konsep dasar React."],
      ["Component & Props", "Membuat komponen reusable."],
      ["State & Hooks", "Mengelola data di dalam aplikasi."],
      ["Routing", "Membuat halaman dan navigasi."],
      ["Final Project", "Membangun dashboard React."],
    ],
    mentor: {
      initials: "FA",
      name: "Fajar Aditya",
      role: "Frontend Mentor",
      bio: "Spesialis React, UI slicing, dan modern web development.",
    },
  },

  sql: {
    category: "Data",
    title: "SQL untuk Data Analyst",
    description:
      "Belajar SQL untuk mengambil, mengolah, dan menganalisis data menggunakan query yang rapi dan efektif.",
    rating: "⭐ 4.7",
    modules: "📚 10 Modul",
    duration: "🕒 4 Minggu",
    price: "Rp 199K",
    projectTitle: "Analisis Data Penjualan",
    project:
      "Kamu akan membuat analisis data penjualan menggunakan query SQL, agregasi, dan join antar tabel.",
    learning: [
      ["SELECT", "Mengambil data dari tabel."],
      ["WHERE", "Memfilter data sesuai kebutuhan."],
      ["JOIN", "Menggabungkan beberapa tabel."],
      ["Aggregation", "Menghitung total, rata-rata, dan ringkasan data."],
    ],
    roadmap: [
      ["Dasar SQL", "Mengenal database dan tabel."],
      ["Query Dasar", "Mengambil dan memfilter data."],
      ["JOIN", "Menghubungkan data dari banyak tabel."],
      ["Aggregate Function", "Membuat ringkasan data."],
      ["Case Study", "Analisis data sederhana."],
    ],
    mentor: {
      initials: "NR",
      name: "Nadia Rahma",
      role: "Data Mentor",
      bio: "Berpengalaman di SQL, Python, dashboard, dan data storytelling.",
    },
  },

  "python-data": {
    category: "Data",
    title: "Python untuk Data Science",
    description:
      "Pelajari Python, Pandas, NumPy, visualisasi data, dan dasar machine learning untuk kebutuhan analisis data.",
    rating: "⭐ 4.8",
    modules: "📚 18 Modul",
    duration: "🕒 8 Minggu",
    price: "Rp 399K",
    projectTitle: "Data Analysis Notebook",
    project:
      "Kamu akan membuat notebook analisis data lengkap dengan cleaning, eksplorasi, dan visualisasi.",
    learning: [
      ["Python Dasar", "Memahami syntax dan struktur data Python."],
      ["Pandas", "Mengolah data berbentuk tabel."],
      ["NumPy", "Mengolah data numerik."],
      ["Visualisasi", "Membuat grafik untuk membaca pola data."],
    ],
    roadmap: [
      ["Python Basic", "Variabel, function, list, dan dictionary."],
      ["Pandas", "Membaca dan membersihkan data."],
      ["NumPy", "Mengolah data numerik."],
      ["Visualization", "Membuat grafik sederhana."],
      ["Final Project", "Analisis dataset nyata."],
    ],
    mentor: {
      initials: "NR",
      name: "Nadia Rahma",
      role: "Data Mentor",
      bio: "Membimbing learner membangun portfolio data yang relevan dengan kebutuhan industri.",
    },
  },

  "ethical-hacking": {
    category: "Cyber",
    title: "Ethical Hacking Dasar",
    description:
      "Kenali dasar keamanan web, networking, Linux, vulnerability, dan alur penetration testing secara etis.",
    rating: "⭐ 4.8",
    modules: "📚 14 Modul",
    duration: "🕒 8 Minggu",
    price: "Rp 449K",
    projectTitle: "Mini Security Assessment",
    project:
      "Kamu akan membuat laporan pengujian keamanan sederhana pada lab yang aman dan legal.",
    learning: [
      ["Linux", "Menggunakan command dasar untuk security testing."],
      ["Networking", "Memahami IP, port, DNS, dan HTTP."],
      ["Web Security", "Mengenal celah umum pada aplikasi web."],
      ["Reporting", "Membuat laporan temuan yang rapi."],
    ],
    roadmap: [
      ["Linux Dasar", "Mengenal terminal dan command penting."],
      ["Networking", "Memahami cara kerja jaringan."],
      ["Web Security", "Mengenal konsep keamanan web."],
      ["Recon", "Mengumpulkan informasi secara legal."],
      ["Report", "Menyusun laporan hasil pengujian."],
    ],
    mentor: {
      initials: "RS",
      name: "Rizky Saputra",
      role: "Cyber Mentor",
      bio: "Membimbing dasar networking, Linux, web security, dan pentesting.",
    },
  },

  "machine-learning": {
    category: "AI",
    title: "Machine Learning Fundamentals",
    description:
      "Pelajari konsep machine learning, training model, evaluasi model, dan implementasi project sederhana.",
    rating: "⭐ 4.9",
    modules: "📚 15 Modul",
    duration: "🕒 10 Minggu",
    price: "Rp 599K",
    projectTitle: "Model Prediksi Sederhana",
    project:
      "Kamu akan membuat model prediksi sederhana dengan data nyata dan mengevaluasi hasil modelnya.",
    learning: [
      ["Data Preparation", "Membersihkan dan menyiapkan dataset."],
      ["Model Training", "Melatih model machine learning."],
      ["Evaluation", "Mengukur performa model."],
      ["Prediction", "Membuat prediksi dari data baru."],
    ],
    roadmap: [
      ["Konsep ML", "Memahami supervised dan unsupervised learning."],
      ["Data Cleaning", "Menyiapkan data sebelum training."],
      ["Training", "Melatih model sederhana."],
      ["Evaluation", "Membaca hasil evaluasi model."],
      ["Final Project", "Membangun model prediksi."],
    ],
    mentor: {
      initials: "NR",
      name: "Nadia Rahma",
      role: "AI Mentor",
      bio: "Membantu learner memahami data, model, dan implementasi AI secara bertahap.",
    },
  },

  docker: {
    category: "DevOps",
    title: "Docker & Kubernetes",
    description:
      "Pelajari containerization, Docker, Kubernetes, dan deployment aplikasi modern.",
    rating: "⭐ 4.7",
    modules: "📚 12 Modul",
    duration: "🕒 6 Minggu",
    price: "Rp 499K",
    projectTitle: "Deploy App dengan Container",
    project:
      "Kamu akan menjalankan aplikasi menggunakan Docker dan memahami dasar deployment modern.",
    learning: [
      ["Docker", "Membuat dan menjalankan container."],
      ["Image", "Membangun image aplikasi."],
      ["Kubernetes", "Memahami dasar orchestration."],
      ["Deployment", "Menjalankan aplikasi secara lebih rapi."],
    ],
    roadmap: [
      ["Docker Basic", "Memahami konsep container."],
      ["Dockerfile", "Membuat image aplikasi."],
      ["Compose", "Menjalankan multi-container."],
      ["Kubernetes", "Mengenal pod dan service."],
      ["Deployment", "Deploy aplikasi sederhana."],
    ],
    mentor: {
      initials: "AP",
      name: "Andi Prakoso",
      role: "DevOps Mentor",
      bio: "Berpengalaman membantu learner memahami deployment, container, dan workflow modern.",
    },
  },

  git: {
    category: "DevOps",
    title: "Git & Deployment Dasar",
    description:
      "Pelajari Git, GitHub, workflow project, branching, pull request, dan cara deploy website.",
    rating: "⭐ 4.8",
    modules: "📚 10 Modul",
    duration: "🕒 4 Minggu",
    price: "Rp 249K",
    projectTitle: "Publish Portfolio Website",
    project:
      "Kamu akan mengelola project dengan GitHub dan mempublikasikan website portfolio sederhana.",
    learning: [
      ["Git Basic", "Mengenal commit, status, log, dan repository."],
      ["GitHub", "Menyimpan project secara online."],
      ["Branching", "Mengelola fitur dengan branch."],
      ["Deployment", "Mempublikasikan website ke internet."],
    ],
    roadmap: [
      ["Git Dasar", "Memahami repository dan commit."],
      ["GitHub", "Push project ke GitHub."],
      ["Branch", "Mengelola perubahan project."],
      ["Collaboration", "Memahami pull request."],
      ["Deploy", "Publish website sederhana."],
    ],
    mentor: {
      initials: "AP",
      name: "Andi Prakoso",
      role: "DevOps Mentor",
      bio: "Membimbing learner memahami Git, GitHub, workflow project, dan deployment dasar.",
    },
  },
};

const params = new URLSearchParams(window.location.search);
const courseId = params.get("course") || "html-css";
const course = courses[courseId] || courses["html-css"];

document.getElementById("courseCategory").textContent = course.category;
document.getElementById("courseTitle").textContent = course.title;
document.getElementById("courseDescription").textContent = course.description;
document.getElementById("courseRating").textContent = course.rating;
document.getElementById("courseModules").textContent = course.modules;
document.getElementById("courseDuration").textContent = course.duration;
document.getElementById("coursePrice").textContent = course.price;
document.getElementById("courseProjectTitle").textContent = course.projectTitle;
document.getElementById("courseProject").textContent = course.project;

document.getElementById("courseLearning").innerHTML = course.learning
  .map(
    (item, index) => `
      <div class="cd-learning-item">
        <span>${index + 1}</span>
        <h3>${item[0]}</h3>
        <p>${item[1]}</p>
      </div>
    `,
  )
  .join("");

document.getElementById("courseRoadmap").innerHTML = course.roadmap
  .map(
    (item, index) => `
      <div class="cd-roadmap-step">
        <div class="cd-roadmap-number">${String(index + 1).padStart(2, "0")}</div>
        <div>
          <h3>${item[0]}</h3>
          <p>${item[1]}</p>
        </div>
      </div>
    `,
  )
  .join("");

document.getElementById("courseMentor").innerHTML = `
  <div class="cd-mentor-avatar-large">${course.mentor.initials}</div>
  <div>
    <span>${course.mentor.role}</span>
    <h3>${course.mentor.name}</h3>
    <p>${course.mentor.bio}</p>
  </div>
`;

// ==========================================
// LOGIKA TOMBOL IKUTI KELAS & AKSES MATERI
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const enrollBtn = document.querySelector(".cd-enroll-btn");

  if (enrollBtn) {
    // 1. Cek apakah ada data user yang sedang login di localStorage
    const loggedUser = JSON.parse(localStorage.getItem("coderyLoggedInUser"));
    
    // 2. Mengambil ID kelas dari URL (contoh: ?course=html-css)
    const urlParams = new URLSearchParams(window.location.search);
    const currentCourseId = urlParams.get("course") || "html-css"; 

    if (loggedUser) {
      // JIKA USER SUDAH LOGIN
      
      const storageKey = `enrolledCourses_${loggedUser.email}`;
      let enrolledCourses = JSON.parse(localStorage.getItem(storageKey)) || [];
      const isEnrolled = enrolledCourses.includes(currentCourseId);

      if (isEnrolled) {
        // Jika sudah pernah klik "Ikuti Kelas" sebelumnya
        enrollBtn.textContent = "Lanjutkan Belajar ➔";
        enrollBtn.style.background = "#16a34a"; // Ubah warna jadi hijau (feedback visual)
        enrollBtn.style.boxShadow = "none";
        enrollBtn.href = `materi.html?course=${currentCourseId}`; 
        
      } else {
        // Jika sudah login tapi BARU PERTAMA KALI membuka kelas ini
        enrollBtn.textContent = "Ikuti Kelas";
        enrollBtn.href = "#"; // Mencegah loncat ke halaman lain secara default

        // Eksekusi saat tombol Ikuti Kelas diklik
        enrollBtn.addEventListener("click", (e) => {
          e.preventDefault();

          // Simpan ID kelas ke dalam daftar kelas milik user ini
          enrolledCourses.push(currentCourseId);
          localStorage.setItem(storageKey, JSON.stringify(enrolledCourses));

          const courseTitle = document.getElementById("courseTitle").textContent;
          alert(`Berhasil! ${loggedUser.username}, Anda sekarang terdaftar di kelas: ${courseTitle}. Mari mulai belajar!`);

          // Langsung arahkan user ke halaman materi
          window.location.href = `materi.html?course=${currentCourseId}`;
        });
      }
    } else {
      // JIKA USER BELUM LOGIN
      // Pastikan tombol tetap "Daftar Sekarang" dan mengarah ke login
      enrollBtn.textContent = "Daftar Sekarang";
      enrollBtn.href = "login.html"; 
    }
  }
});
