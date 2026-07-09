const postcard = document.querySelector("#postcardCard");
const openPostcard = document.querySelector("#openPostcard");
const sealKiss = document.querySelector("#sealKiss");
const fortuneText = document.querySelector("#fortuneText");
const fortuneButton = document.querySelector("#fortuneButton");
const startHunt = document.querySelector("#startHunt");
const butterfly = document.querySelector("#butterfly");
const butterflyField = document.querySelector("#butterflyField");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#timeLeft");
const chargeLove = document.querySelector("#chargeLove");
const meterFill = document.querySelector("#meterFill");
const briefText = document.querySelector("#briefText");
const briefButton = document.querySelector("#briefButton");

const fortunes = [
  "Today calls for matcha, a perfect outfit, and being obsessed with yourself.",
  "Your gym glow is extremely serious. Your cuteness is a public safety issue.",
  "A flower somewhere just asked for your Pilates routine.",
  "Future fashion editor detected. Please clear the runway.",
  "Dark romance shelf status: dramatic, pretty, and fully booked.",
  "Tonight feels like Chase Atlantic, glossy lights, and you looking unreal.",
  "Your taste is the plot. Everyone else is just reading along."
];

const briefs = [
  "Cover story: matcha-green silk, butterfly clips, soft sunlight, and a headline about falling in love with your own life.",
  "Editorial concept: dark romance heroine after Pilates, black ribbon details, pink flowers, and dangerous confidence.",
  "Runway note: gym-girl strength meets fairy garden glamour with cream tailoring and lilac shimmer.",
  "Beauty direction: golden Stella-style light, Flora-style flowers, glossy lips, and late-night playlist energy.",
  "Designer desk: a capsule collection for the girl who can lift heavy, read darker, and still look delicate."
];

let huntTimer;
let score = 0;
let timeLeft = 20;
let huntActive = false;
let loveLevel = 18;

function flipPostcard() {
  postcard.classList.toggle("is-flipped");
}

function popHeart(x, y, symbol = "\u2665") {
  const heart = document.createElement("span");
  heart.className = "heart-pop";
  heart.textContent = symbol;
  heart.style.setProperty("--x", `${x}px`);
  heart.style.setProperty("--y", `${y}px`);
  document.body.appendChild(heart);
  window.setTimeout(() => heart.remove(), 1200);
}

function moveButterfly() {
  const fieldRect = butterflyField.getBoundingClientRect();
  const maxX = Math.max(fieldRect.width - 60, 0);
  const maxY = Math.max(fieldRect.height - 60, 0);
  butterfly.style.left = `${Math.random() * maxX}px`;
  butterfly.style.top = `${Math.random() * maxY}px`;
}

function resetHunt() {
  window.clearInterval(huntTimer);
  huntActive = false;
  score = 0;
  timeLeft = 20;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  startHunt.textContent = "Start";
}

openPostcard.addEventListener("click", () => {
  document.querySelector("#postcard").scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => postcard.classList.add("is-flipped"), 650);
});

postcard.addEventListener("click", flipPostcard);

sealKiss.addEventListener("click", (event) => {
  event.stopPropagation();
  const rect = sealKiss.getBoundingClientRect();
  popHeart(rect.left + rect.width / 2, rect.top, "\u2665");
  popHeart(rect.left + 20, rect.top + 8, "\u2726");
  popHeart(rect.right - 20, rect.top + 8, "\u2740");
});

fortuneButton.addEventListener("click", (event) => {
  const next = fortunes[Math.floor(Math.random() * fortunes.length)];
  fortuneText.textContent = next;
  popHeart(event.clientX, event.clientY, "\u273f");
});

startHunt.addEventListener("click", () => {
  if (huntActive) {
    resetHunt();
    return;
  }

  huntActive = true;
  score = 0;
  timeLeft = 20;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  startHunt.textContent = "Reset";
  moveButterfly();

  huntTimer = window.setInterval(() => {
    timeLeft -= 1;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0 || score >= 10) {
      window.clearInterval(huntTimer);
      huntActive = false;
      startHunt.textContent = score >= 10 ? "You won!" : "Try again";
    }
  }, 1000);
});

butterfly.addEventListener("click", (event) => {
  if (!huntActive) {
    return;
  }

  score += 1;
  scoreDisplay.textContent = score;
  popHeart(event.clientX, event.clientY, "\ud83e\udd8b");
  moveButterfly();
});

chargeLove.addEventListener("click", () => {
  loveLevel = Math.min(loveLevel + 18 + Math.floor(Math.random() * 14), 100);
  meterFill.style.width = `${loveLevel}%`;

  if (loveLevel === 100) {
    chargeLove.textContent = "Overflowing";
    popHeart(window.innerWidth / 2, window.innerHeight / 2, "\u2665");
  }
});

briefButton.addEventListener("click", () => {
  const next = briefs[Math.floor(Math.random() * briefs.length)];
  briefText.textContent = next;
});
