// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');
  
    if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
      toTop.classList.remove('hidden');
      toTop.classList.add('flex');
    } else {
      header.classList.remove('navbar-fixed');
      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
    }
  };
  
  // Hamburger
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');
  
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });
  
  // Klik di luar hamburger
  window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    }
  });
  
  // Darkmode toggle
  const darkToggle = document.querySelector('#dark-toggle');
  const html = document.querySelector('html');
  
  darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
      html.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      html.classList.remove('dark');
      localStorage.theme = 'light';
    }
  });
  
  // pindahkan posisi toggle sesuai mode
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }
  
  document.getElementById('read-more').addEventListener('click', function() {
        const moreText = document.getElementById('more-text');
        if (moreText.style.display === "none") {
            moreText.style.display = "inline";
            this.innerText = "Baca Lebih Sedikit"; // Ganti teks menjadi 'Baca Lebih Sedikit'
        } else {
            moreText.style.display = "none";
            this.innerText = "Baca Selengkapnya"; // Kembali ke teks awal
        }
    });

// Baca Selengkapnya
function toggleReadMore(id, isSimple = false) {
  const dots = document.getElementById(`dots${id}`);
  const moreText = document.getElementById(`moreText${id}`);
  const moreList = document.getElementById(`moreList${id}`);
  const moreParagraph = document.getElementById(`moreParagraph${id}`);
  const readMore = document.getElementById(`readMore${id}`);

  if (isSimple) {
    // Untuk versi sederhana dengan `dots`
    if (dots && dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.classList.add("hidden");
      readMore.innerText = "Baca Selengkapnya";
    } else if (dots) {
      dots.style.display = "none";
      moreText.classList.remove("hidden");
      readMore.innerText = "Tutup";
    }
  } else {
    // Untuk versi lengkap dengan `moreList` dan `moreParagraph`
    if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden");
      if (moreList) moreList.classList.remove("hidden");
      if (moreParagraph) moreParagraph.classList.remove("hidden");
      readMore.innerText = "Tutup";
    } else {
      moreText.classList.add("hidden");
      if (moreList) moreList.classList.add("hidden");
      if (moreParagraph) moreParagraph.classList.add("hidden");
      readMore.innerText = "Baca Selengkapnya";
    }
  }
}
