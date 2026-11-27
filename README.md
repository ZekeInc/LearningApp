# Kids Learning

**Open the app: https://zekeinc.github.io/LearningApp/**

Simple offline learning games for ages 3–5: **Math**, **Writing**, **Clock** and **Reading** (Pronunciation coming later).

- Plain HTML, CSS and JavaScript. No libraries, no build step, no accounts.
- Everything is saved only on the device (browser storage). Nothing is sent anywhere.
- Works offline after the first visit. Add it to the home screen to use it like an app.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Home page with the Math, Writing, Clock and Reading buttons, and the version number (read from `sw.js`) |
| `math.html` | Math: 19 levels (counting, adding, take away, mixed, then within 20, 40, 60, 80 and 100), unlocking, progress bar |
| `writing.html` | Tracing: capitals, lowercase, numbers and three-letter words, with arrows and stroke order |
| `clock.html` | Telling time: 5 levels (hours, half past, quarter hours, 5 minutes, any minute); pick the time or move the hands |
| `reading.html` | Reading: hear a word (device voice), then pick it from 4 or spell it; 150 lesson words plus the -s, -ing and -ed endings, starts with 20, the next item needs 5 correct per word in play (20 words → 100), a setting; an unlocked ending adds a copy of every word that takes it (cat → cats) |
| `manifest.json` | App name, icon and colours for "Add to home screen" |
| `sw.js` | Service worker that saves the app for offline use |
| `icon.svg` | App icon (the design; the PNGs below are made from it) |
| `icon-192.png`, `icon-512.png` | App icon for Android and "Add to home screen" |
| `apple-touch-icon.png` | App icon for iPhone and iPad home screens |

## Grown-up settings

Tap the gear and answer the multiplication question to open settings. Each app keeps its own settings and progress on the device.

| App | Settings |
| --- | --- |
| Math | Starting level, blocks on or off, counting up to 100, answer style (number buttons or 4 choices), correct answers to unlock the next level, auto-advance or Next button |
| Writing | Letters, numbers or words, capitals or lowercase, order, stroke order check, starting strictness (1–10), good traces before strictness goes up |
| Clock | Starting level, answer style (pick the time or move the hands), digital or words, small minute numbers, correct answers to unlock, auto-advance or Next button |
| Reading | Pick the word or spell it, words to start with, correct answers per word in play, say the word automatically, talking speed, auto-advance or Next button |

### Math levels

| Level | What it practises |
| --- | --- |
| 1 | Counting 0–10 (or 0–100 with the **Counting goes up to: 100** setting, off by default) |
| 2 | Adding (single digits) |
| 3 | Take away (from 10 or less) |
| 4 | Mixed adding and take away |
| 5 | Adding (total up to 20) |
| 6 | Take away (from 20 or less) |
| 7 | Mixed (within 20) |
| 8 | Adding (total up to 40) |
| 9 | Take away (from 40 or less) |
| 10 | Mixed (within 40) |
| 11 | Adding (total up to 60) |
| 12 | Take away (from 60 or less) |
| 13 | Mixed (within 60) |
| 14 | Adding (total up to 80) |
| 15 | Take away (from 80 or less) |
| 16 | Mixed (within 80) |
| 17 | Adding (two digits, total up to 100) |
| 18 | Take away (two digits) |
| 19 | Mixed (two digits) |

Older devices are upgraded automatically. From the 8-level version: counting to 100 becomes the setting. From the 7-level version: anyone who had reached the two-digit levels goes back to the new level 5 (within 20), and their old two-digit scores are cleared; scores for levels 1–4 are kept. From the 10-level version: anyone who had reached the up-to-100 levels goes back to the new level 8 (within 40), and their old up-to-100 scores are cleared; scores for levels 1–7 are kept.

## Updating

When you change any file, bump the `CACHE` version in `sw.js` (for example `kids-learning-v1` to `kids-learning-v2`). Otherwise devices keep the old saved copy. The home page shows this version in the top right corner, so you can check which version a device has.

If you add a new file, also add it to the `FILES` list in `sw.js` so it works offline.

Make changes on a branch and open a pull request into `main`. GitHub Pages publishes `main`, so merging the pull request updates the live app.
