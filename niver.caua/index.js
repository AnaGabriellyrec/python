const memories = [
  {
    src: "imgs/f1sorrindo.jpeg",
    alt: "Cauã sorrindo",
    caption: "🔆"
  },
  {
    src: "imgs/f2lingua.jpeg",
    alt: "Cauã fazendo careta",
    caption: "🔆"
  },
  {
    src: "imgs/f3vermelho.jpeg",
    alt: "Cauã de vermelho",
    caption: "🔆"
  },
  {
    src: "imgs/f4rosa.jpeg",
    alt: "Cauã em momento especial",
    caption: "🔆"
  },
  {
    src: "imgs/f5moto.jpeg",
    alt: "Cauã na moto",
    caption: "🔆"
  },
  {
    src: "imgs/ft7natal.jpeg",
    alt: "Cauã no Natal",
    caption: "🔆"
  }
];

const letters = [
  {
    kicker: "Abra se quiser ver um CLT se lascando",
    title: "Eu amo esse vídeo de uma maneira surreal",
    message: "Claramente mostra seu jeitinho de ser, a pessoa leve e sorridente com quem eu convivo. Espero que te faça sorrir tanto quanto me fez sorrir.",
    video: "videos/vd1sombrinha.mp4"
  },
  {
    kicker: "Esperando o best virar 244",
    title: "Eu AMEI esse dia",
    message: "Sempre topando tudo, e me fazendo rir.",
    video: "videos/v2moto.mp4"
  },
  {
    kicker: "O dia que a gente se aproximou ainda mais",
    title: "Para guardar no peito",
    message: "Esse aqui mostra bem a nossa amizade, nesse dia a gente tava escutando sem parar extraordinária e cantando. Espero que te traga boas lembranças e um sorriso no rosto.",
    video: "videos/v3onibus.mp4"
  }
];

const canvas = document.querySelector("#partyCanvas");
const ctx = canvas.getContext("2d");
const surpriseButton = document.querySelector("#surpriseButton");
const letterGrid = document.querySelector("#letterGrid");
const galleryGrid = document.querySelector("#galleryGrid");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const closeLightbox = document.querySelector("#closeLightbox");
const letterModal = document.querySelector("#letterModal");
const closeLetter = document.querySelector("#closeLetter");
const letterKicker = document.querySelector("#letterKicker");
const letterTitle = document.querySelector("#letterTitle");
const letterMessage = document.querySelector("#letterMessage");
const letterVideo = document.querySelector("#letterVideo");
const backToTop = document.querySelector("#backToTop");
const themeToggle = document.querySelector("#themeToggle");
const musicToggle = document.querySelector("#musicToggle");
const birthdaySong = document.querySelector("#birthdaySong");
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

let particles = [];
let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const birthdayStartSeconds = 110;

function applySavedTheme() {
  const savedTheme = localStorage.getItem("birthday-theme");
  const shouldUseDark = savedTheme === "dark";

  document.body.classList.toggle("dark-theme", shouldUseDark);
  themeToggle.textContent = shouldUseDark ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", shouldUseDark ? "Ativar tema claro" : "Ativar tema escuro");
}

function resizeCanvas() {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
}

function createParticle(x, y, burst = false) {
  const colors = ["#ff4fd8", "#ebe7e7", "#33d6ff", "#ffe45c", "#51ffb2"];
  return {
    x,
    y,
    size: Math.random() * (burst ? 8 : 4) + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedX: (Math.random() - 0.5) * (burst ? 10 : 1.2),
    speedY: Math.random() * (burst ? -8 : 1.4) + (burst ? -2 : 0.4),
    gravity: burst ? 0.18 : 0.02,
    rotation: Math.random() * 360,
    spin: (Math.random() - 0.5) * 12,
    life: burst ? 130 : 260,
    shape: Math.random() > 0.5 ? "rect" : "star"
  };
}

function seedParticles() {
  particles = [];
  for (let i = 0; i < 90; i++) {
    particles.push(createParticle(Math.random() * window.innerWidth, Math.random() * window.innerHeight));
  }
}

function drawStar(x, y, radius) {
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 5) * i;
    const r = i % 2 === 0 ? radius : radius / 2;
    ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
  }
  ctx.closePath();
  ctx.fill();
}

function animateParticles() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  particles.forEach((particle, index) => {
    particle.x += particle.speedX + (pointer.x - window.innerWidth / 2) * 0.0009;
    particle.y += particle.speedY;
    particle.speedY += particle.gravity;
    particle.rotation += particle.spin;
    particle.life -= 1;

    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate((particle.rotation * Math.PI) / 180);
    ctx.fillStyle = particle.color;
    ctx.globalAlpha = Math.max(particle.life / 260, 0.18);

    if (particle.shape === "star") {
      drawStar(0, 0, particle.size);
    } else {
      ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size * 1.4, particle.size);
    }

    ctx.restore();

    if (particle.y > window.innerHeight + 40 || particle.life <= 0) {
      particles[index] = createParticle(Math.random() * window.innerWidth, -20);
    }
  });

  requestAnimationFrame(animateParticles);
}

function burstConfetti(x = window.innerWidth / 2, y = window.innerHeight / 2) {
  for (let i = 0; i < 120; i++) {
    particles.push(createParticle(x, y, true));
  }
}

function buildLetters() {
  letters.forEach((letter, index) => {
    const card = document.createElement("button");
    card.className = "envelope-card reveal";
    card.type = "button";
    card.innerHTML = `
      <span class="envelope" aria-hidden="true">
        <span class="envelope-flap"></span>
        <span class="envelope-paper">💌</span>
      </span>
      <span class="letter-number">${letter.kicker}</span>
      <strong>${letter.title}</strong>
      <small>Clique para abrir</small>
    `;

    card.style.setProperty("--delay", `${index * 120}ms`);
    card.addEventListener("click", () => openLetter(letter));
    letterGrid.appendChild(card);
  });
}

function buildGallery() {
  const rotations = ["-3deg", "2deg", "-1deg", "3deg", "-2deg", "1deg"];

  memories.forEach((memory, index) => {
    const card = document.createElement("button");
    card.className = "polaroid reveal";
    card.type = "button";
    card.style.setProperty("--rotation", rotations[index % rotations.length]);
    card.innerHTML = `
      <span class="photo-frame">
        <img src="${memory.src}" alt="${memory.alt}">
      </span>
      <p>${memory.caption}</p>
    `;

    card.addEventListener("click", () => openLightbox(memory));
    galleryGrid.appendChild(card);
  });
}

function openLightbox(memory) {
  lightboxImage.src = memory.src;
  lightboxImage.alt = memory.alt;
  lightboxCaption.textContent = memory.caption;
  lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closePhoto() {
  lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
}

function openLetter(letter) {
  letterKicker.textContent = letter.kicker;
  letterTitle.textContent = letter.title;
  letterMessage.textContent = letter.message;
  letterVideo.src = letter.video;
  letterModal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeLetterModal() {
  letterModal.classList.remove("is-open");
  letterVideo.pause();
  letterVideo.removeAttribute("src");
  letterVideo.load();
  document.body.style.overflow = "";
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

function setupTiltCards() {
  document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const rotateX = ((y / bounds.height) - 0.5) * -10;
      const rotateY = ((x / bounds.width) - 0.5) * 10;
      card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function setupCursor() {
  if (!cursorDot || !cursorRing) return;

  window.addEventListener("mousemove", (event) => {
    pointer = { x: event.clientX, y: event.clientY };
    cursorDot.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
    cursorRing.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
  });

  document.querySelectorAll("a, button, .polaroid").forEach((item) => {
    item.addEventListener("mouseenter", () => cursorRing.classList.add("is-hovering"));
    item.addEventListener("mouseleave", () => cursorRing.classList.remove("is-hovering"));
  });
}

function setupParallax() {
  const hero = document.querySelector(".hero-content");
  const badges = document.querySelector(".floating-badges");

  window.addEventListener("mousemove", (event) => {
    pointer = { x: event.clientX, y: event.clientY };
    const x = (event.clientX / window.innerWidth - 0.5) * 22;
    const y = (event.clientY / window.innerHeight - 0.5) * 22;
    hero.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    badges.style.transform = `translate(${x * -0.45}px, ${y * -0.45}px)`;
  });
}

function setupMusic() {
  musicToggle.addEventListener("click", async () => {
    if (!birthdaySong.paused) {
      birthdaySong.pause();
      musicToggle.classList.remove("is-playing");
      musicToggle.setAttribute("aria-label", "Tocar música");
      return;
    }

    try {
      if (birthdaySong.currentTime < birthdayStartSeconds) {
        birthdaySong.currentTime = birthdayStartSeconds;
      }

      await birthdaySong.play();
      musicToggle.classList.add("is-playing");
      musicToggle.setAttribute("aria-label", "Pausar música");
    } catch {
      musicToggle.setAttribute("aria-label", "Não foi possível tocar a música");
    }
  });
}

function setupThemeToggle() {
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");

    localStorage.setItem("birthday-theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "☀" : "☾";
    themeToggle.setAttribute("aria-label", isDark ? "Ativar tema claro" : "Ativar tema escuro");
  });
}

function setupEvents() {
  surpriseButton.addEventListener("click", () => {
    burstConfetti(window.innerWidth / 2, window.innerHeight * 0.38);
    document.querySelector("#galeria").scrollIntoView({ behavior: "smooth" });
  });

  closeLightbox.addEventListener("click", closePhoto);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closePhoto();
  });

  closeLetter.addEventListener("click", closeLetterModal);
  letterModal.addEventListener("click", (event) => {
    if (event.target === letterModal) closeLetterModal();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePhoto();
      closeLetterModal();
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 520);
  });

  window.addEventListener("resize", () => {
    resizeCanvas();
    seedParticles();
  });
}

resizeCanvas();
applySavedTheme();
seedParticles();
buildLetters();
buildGallery();
setupRevealAnimation();
setupTiltCards();
setupCursor();
setupParallax();
setupMusic();
setupThemeToggle();
setupEvents();
animateParticles();

window.addEventListener("load", () => {
  setTimeout(() => burstConfetti(window.innerWidth / 2, window.innerHeight * 0.28), 450);
});
