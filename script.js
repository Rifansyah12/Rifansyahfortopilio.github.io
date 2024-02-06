document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  showSlide(index);

  setInterval(nextSlide, 10000); // Ganti slide setiap 30 detik
});

// komentar
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("commentForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mengambil data dari formulir
    const formData = new FormData(form);

    // Mengirim data ke backend menggunakan AJAX
    fetch("/komentar", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Terjadi kesalahan saat mengirim komentar.");
        }
        return response.json();
      })
      .then((data) => {
        // Handle response jika diperlukan
        console.log(data); // Contoh: menampilkan respons dari backend
        alert("Komentar berhasil dikirim!");
        form.reset(); // Mengosongkan formulir setelah pengiriman berhasil
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat mengirim komentar.");
      });
  });
});
