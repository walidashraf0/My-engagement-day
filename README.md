# Our Forever — W & H

A static, editable romantic engagement website. Start at `gateway.html`; it opens the main story after five seconds, or use **Enter Our Story** to skip.

## Personalize it

Open `js/main.js` and edit the `STORY` object at the top. It contains every name, date, card, meeting detail, memory, letter, future dream, and final message. Keep dates as `YYYY-MM-DD` to enable the live countdown (or elapsed-time counter after the day).

To add photos, put your image files in `assets/images/` and replace the associated image paths in `STORY`, plus the hero and engagement image paths in `index.html`. The included SVGs are visual placeholders and can be replaced safely.

Music is configured in `STORY.musicPath` and starts automatically when the story opens. Use the Sound control to pause or resume it. Some browsers block audio that starts without a user gesture; if that happens, the first tap or click on the page starts the music.

## Run locally

Open `gateway.html` in any modern browser. For a local server, from the project folder run `python -m http.server 8000`, then visit `http://localhost:8000/gateway.html`.

## Deploy

Deploy this folder to Netlify, or use GitHub Pages. For GitHub Pages, the `Deploy to GitHub Pages` workflow publishes the static site from the `main` branch. In the repository's **Settings → Pages**, set the build and deployment source to **GitHub Actions**. Share the generated Pages URL ending in `/gateway.html`.

## Final check

- Gateway auto-transitions after five seconds and can be skipped.
- Navigation, scroll reveal, gallery lightbox, touch gallery, letter, cards, promise, counters, and back-to-top work.
- Check your own images and copy on a phone before publishing.
- Ensure all personal image alt text and dates are accurate.
