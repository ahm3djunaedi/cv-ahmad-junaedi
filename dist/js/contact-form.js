document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Mencegah refresh halaman
  
    const form = e.target;
    const data = new FormData(form); // Ambil semua data dari form
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzz3rPwmRsuFMT13GJvPGYnO3E5H6QOd_LXFNjhkRcKcZJXP2Rr1eeG9Y59lT2oJ6LuFQ/exec", {
        method: "POST",
        body: data,
      });
  
      const result = await response.json();
      if (result.status === "success") {
        alert("Pesan berhasil dikirim!");
        form.reset(); // Reset form setelah berhasil
      } else {
        alert("Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Gagal mengirim pesan. Silakan cek koneksi internet Anda.");
    }
  });
  
  