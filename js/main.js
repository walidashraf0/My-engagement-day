/*
  OUR FOREVER CONTENT CONFIGURATION
  Replace only the values in this object to personalize the site. Photo paths
  are relative to index.html. Keep placeholders until your photos are ready.
*/
const STORY = {
    myName: "Walid",
    herName: "Hager",
    initials: "W & H",
    firstMeetingDate: "2026-10-21",
    firstMeetingPlace: "Her Uncle Home",
    // Use ISO format (YYYY-MM-DD) to enable the countdown. Keep placeholder while undecided.
    engagementDate: "2026-11-06",
    // Optional: add an MP3 in assets/music/ then set its relative path here.
    // Example: musicPath: 'assets/music/our-song.mp3'
    musicPath: "assets/music/our-song.m4a",
    childhood: [{
            person: "My childhood",
            title: "The beginning of my story",
            text: "[A SHORT, EDITABLE CHILDHOOD MEMORY]",
            image: "assets/images/childhood-w-placeholder.svg",
        },
        {
            person: "Her childhood",
            title: "The beginning of her story",
            text: "[A SHORT, EDITABLE CHILDHOOD MEMORY]",
            image: "assets/images/childhood-h-placeholder.svg",
        },
    ],
    meetingMoments: [
        "As a Date",
        "Talked about ourselves and our needs",
        "First Meeting, First glances, and a little bit of nervousness",
    ],
    memories: [{
            title: "A meaningful conversation",
            date: "[DATE]",
            caption: "[WHAT MADE THIS MOMENT STAY WITH YOU]",
            image: "assets/images/memory-1-placeholder.svg",
        },
        {
            title: "The moments that made us laugh",
            date: "[DATE]",
            caption: "[YOUR FUNNIEST OR SWEETEST SHARED MEMORY]",
            image: "assets/images/memory-2-placeholder.svg",
        },
        {
            title: "A place that feels like us",
            date: "[DATE]",
            caption: "[A FAVORITE PLACE AND WHY IT MATTERS]",
            image: "assets/images/memory-3-placeholder.svg",
        },
        {
            title: "The first photo together",
            date: "[DATE]",
            caption: "[THE STORY BEHIND YOUR FIRST PHOTO]",
            image: "assets/images/memory-4-placeholder.svg",
        },
        {
            title: "The moment I knew",
            date: "[DATE]",
            caption: "[THE MOMENT YOU REALIZED SHE WAS SPECIAL]",
            image: "assets/images/memory-5-placeholder.svg",
        },
    ],
    loveLetter: "[YOUR LOVE LETTER]\n\n[Write this in your own words. This text appears gradually when the letter is opened.]",
    universe: [{
            icon: "✦",
            title: "Your Smile",
            text: "[A LITTLE THING ABOUT HER THAT MAKES YOU SMILE]",
        },
        {
            icon: "♫",
            title: "Our Little Moments",
            text: "[A FAVORITE SONG, ROUTINE, OR SHARED DETAIL]",
        },
        {
            icon: "⌁",
            title: "The Way You Understand Me",
            text: "[AN EDITABLE NOTE ABOUT YOUR CONNECTION]",
        },
        {
            icon: "✧",
            title: "Dreams We Share",
            text: "[A HOPE YOU WANT TO BUILD TOGETHER]",
        },
        {
            icon: "⌂",
            title: "My Favorite Place",
            text: "[MY FAVORITE PLACE IS BESIDE YOU]",
        },
        {
            icon: "∞",
            title: "Our Private Language",
            text: "[AN INSIDE JOKE OR A WORD ONLY YOU TWO UNDERSTAND]",
        },
    ],
    future: [{
            title: "More memories",
            text: "[LITTLE DAYS, BIG FEELINGS, AND EVERYTHING BETWEEN]",
        },
        {
            title: "Places to see",
            text: "[A PLACE OR TWO YOU HOPE TO EXPLORE TOGETHER]",
        },
        { title: "Dreams to build", text: "[A GOAL THAT MATTERS TO BOTH OF YOU]" },
        {
            title: "A life together",
            text: "[LOVE, RESPECT, TRUST, AND PARTNERSHIP]",
        },
    ],
    finalMessage: "[YOUR FINAL ENGAGEMENT MESSAGE]",
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [
    ...parent.querySelectorAll(selector),
];

function escapeHtml(value) {
    const el = document.createElement("div");
    el.textContent = value;
    return el.innerHTML;
}

function setText(selector, value) {
    $$(selector).forEach((el) => {
        el.textContent = value;
    });
}

function imageMarkup(src, alt) {
    return `<img src="${src}" alt="${escapeHtml(alt)}" loading="lazy">`;
}

function populateContent() {
    setText("[data-my-name]", STORY.myName);
    setText("[data-her-name]", STORY.herName);
    setText("[data-initials]", STORY.initials);
    setText("[data-meeting-date]", STORY.firstMeetingDate);
    setText("[data-meeting-place]", STORY.firstMeetingPlace);
    setText("[data-engagement-date]", STORY.engagementDate);
    setText("[data-final-message]", STORY.finalMessage);
    $("#childhoodCards").innerHTML = STORY.childhood
        .map(
            (item) =>
            `<article class="origin-card reveal">${imageMarkup(item.image, `Placeholder for ${item.person}`)}<small>${escapeHtml(item.person)}</small><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></article>`,
    )
    .join("");
  $("#meetingStory").innerHTML = STORY.meetingMoments
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  $("#memoryRail").innerHTML = STORY.memories
    .map(
      (item, i) =>
        `<button class="memory-card" type="button" data-memory="${i}" aria-label="Open memory: ${escapeHtml(item.title)}">${imageMarkup(item.image, `Placeholder for ${item.title}`)}<span class="memory-label"><small>${escapeHtml(item.date)}</small><h3>${escapeHtml(item.title)}</h3></span></button>`,
    )
    .join("");
  $("#universeCards").innerHTML = STORY.universe
    .map(
      (item, i) =>
        `<button class="universe-card reveal" type="button" aria-expanded="false" aria-controls="universe-note-${i}"><span class="card-icon" aria-hidden="true">${item.icon}</span><h3>${escapeHtml(item.title)}</h3><p id="universe-note-${i}">${escapeHtml(item.text)}</p></button>`,
    )
    .join("");
  $("#futureLine").innerHTML = STORY.future
    .map(
      (item, i) =>
        `<article class="future-item reveal"><i>${i + 1}</i><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></article>`,
    )
    .join("");
}

function setupReveals() {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  $$(".reveal").forEach((el) => observer.observe(el));
}

function setupGallery() {
  const rail = $("#memoryRail");
  const dialog = $("#lightbox");
  let current = 0;
  const show = (index) => {
    current = (index + STORY.memories.length) % STORY.memories.length;
    const m = STORY.memories[current];
    $("#lightboxImage").src = m.image;
    $("#lightboxImage").alt = `Placeholder for ${m.title}`;
    $("#lightboxDate").textContent = m.date;
    $("#lightboxTitle").textContent = m.title;
    $("#lightboxCaption").textContent = m.caption;
    if (!dialog.open) dialog.showModal();
  };
  rail.addEventListener("click", (e) => {
    const card = e.target.closest("[data-memory]");
    if (card) show(Number(card.dataset.memory));
  });
  $(".lightbox-close").addEventListener("click", () => dialog.close());
  $(".lightbox-prev").addEventListener("click", () => show(current - 1));
  $(".lightbox-next").addEventListener("click", () => show(current + 1));
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
  $(".rail-arrow.prev").addEventListener("click", () =>
    rail.scrollBy({ left: -360, behavior: "smooth" }),
  );
  $(".rail-arrow.next").addEventListener("click", () =>
    rail.scrollBy({ left: 360, behavior: "smooth" }),
  );
  let startX = 0;
  rail.addEventListener(
    "touchstart",
    (e) => {
      startX = e.changedTouches[0].clientX;
    },
    { passive: true },
  );
  rail.addEventListener(
    "touchend",
    (e) => {
      const dx = startX - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 35)
        rail.scrollBy({ left: dx > 0 ? 300 : -300, behavior: "smooth" });
    },
    { passive: true },
  );
}

function setupLetter() {
  const button = $("#letterButton");
  const letter = $("#loveLetter");
  const target = $("#typedLetter");
  let running = false;
  button.addEventListener("click", () => {
    if (running) return;
    const isOpen = letter.classList.toggle("open");
    button.setAttribute("aria-expanded", isOpen);
    button.textContent = isOpen
      ? "Keep This Close to Your Heart"
      : "Read What My Heart Wanted to Say";
    if (!isOpen) {
      target.textContent = "";
      return;
    }
    running = true;
    let pos = 0;
    const type = () => {
      target.innerHTML = `<p>${escapeHtml(STORY.loveLetter.slice(0, pos)).replace(/\n/g, "<br>")}</p>`;
      if (pos++ <= STORY.loveLetter.length) window.setTimeout(type, 16);
      else running = false;
    };
    type();
  });
}

function setupUniverse() {
  $("#universeCards").addEventListener("click", (e) => {
    const card = e.target.closest(".universe-card");
    if (card)
      card.setAttribute(
        "aria-expanded",
        card.getAttribute("aria-expanded") !== "true",
      );
  });
}
function makeCounter() {
  const target = new Date(`${STORY.engagementDate}T00:00:00`);
  const output = $("#engagementCounter");
  if (Number.isNaN(target.getTime())) {
    output.innerHTML =
      "<p>Set an engagement date in <code>js/main.js</code> to begin this count.</p>";
    return;
  }
  const update = () => {
    const delta = target - new Date();
    const past = delta < 0;
    let seconds = Math.floor(Math.abs(delta) / 1000);
    const units = [
      ["day", 86400],
      ["hour", 3600],
      ["minute", 60],
      ["second", 1],
    ];
    const values = units.map(([name, amount]) => {
      const n = Math.floor(seconds / amount);
      seconds %= amount;
      return `<div>${String(n).padStart(2, "0")}<small>${name}${n === 1 ? "" : "s"}</small></div>`;
    });
    output.innerHTML = `<p class="counter-label">${past ? "Together since this beautiful day" : "Until our beautiful day"}</p>${values.join("")}`;
  };
  update();
  window.setInterval(update, 1000);
}
function setupControls() {
  const progress = $(".page-progress span");
  const back = $(".back-top");
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max ? (scrollY / max) * 100 : 0}%`;
    back.classList.toggle("show", scrollY > 600);
  };
  addEventListener("scroll", update, { passive: true });
  update();
  back.addEventListener("click", () =>
    scrollTo({ top: 0, behavior: "smooth" }),
  );
  $("#promiseButton").addEventListener("click", (e) => {
    const text = $("#promiseText");
    text.hidden = !text.hidden;
    e.currentTarget.setAttribute("aria-expanded", String(!text.hidden));
  });
  const musicButton = $(".music-toggle");
  const music = STORY.musicPath ? new Audio(STORY.musicPath) : null;
  let isStarting = false;
  const startOnPointer = (event) => {
    if (!musicButton.contains(event.target)) startMusic();
  };
  const startOnKey = (event) => {
    if (event.target !== musicButton) startMusic();
  };
  const enableGestureFallback = () => {
    document.addEventListener("pointerdown", startOnPointer);
    document.addEventListener("keydown", startOnKey);
  };
  const removeGestureFallback = () => {
    document.removeEventListener("pointerdown", startOnPointer);
    document.removeEventListener("keydown", startOnKey);
  };
  const setMusicState = (isPlaying) => {
    musicButton.setAttribute("aria-pressed", String(isPlaying));
    musicButton.lastElementChild.textContent = isPlaying
      ? "Sound on"
      : "Sound off";
  };
  const startMusic = async () => {
    if (!music || !music.paused || isStarting) return;
    isStarting = true;
    try {
      await music.play();
      setMusicState(true);
      musicButton.title = "Pause ambient music";
      removeGestureFallback();
    } catch (error) {
      setMusicState(false);
      if (error.name === "NotAllowedError" || error.name === "AbortError") {
        musicButton.title =
          "Autoplay was blocked. Tap or click anywhere to start the music.";
        enableGestureFallback();
      } else {
        musicButton.title =
          "The selected music file could not be played. Check its path in js/main.js.";
      }
    } finally {
      isStarting = false;
    }
  };

  musicButton.title = STORY.musicPath
    ? "Ambient music starts automatically"
    : "Add an MP3 path in js/main.js to enable music.";
  if (music) {
    music.loop = true;
    music.addEventListener("ended", () => setMusicState(false));
    music.addEventListener("error", () => {
      musicButton.title =
        "The selected music file could not be played. Check its path in js/main.js.";
    });

    musicButton.addEventListener("click", async () => {
      if (!music.paused) {
        music.pause();
        setMusicState(false);
        musicButton.title = "Play ambient music";
      } else {
        await startMusic();
      }
    });
    startMusic();
  } else {
    musicButton.addEventListener("click", () => {
      musicButton.title =
        "Add an MP3 path in js/main.js to enable music.";
    });
  }
}

populateContent();
setupReveals();
setupGallery();
setupLetter();
setupUniverse();
makeCounter();
setupControls();