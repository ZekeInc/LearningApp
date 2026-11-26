# Kids Learning

Simple offline learning games for ages 3–5: **Math**, **Writing** and **Clock** (Pronunciation coming later).

- Plain HTML, CSS and JavaScript. No libraries, no build step, no accounts.
- Everything is saved only on the device (browser storage). Nothing is sent anywhere.
- Works offline after the first visit. Add it to the home screen to use it like an app.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Home page with the Math, Writing and Clock buttons, and the version number (read from `sw.js`) |
| `math.html` | Math: 10 levels (counting, adding, take away, mixed, within 20, two-digit), unlocking, progress bar |
| `writing.html` | Tracing: capitals, lowercase, numbers and three-letter words, with arrows and stroke order |
| `clock.html` | Telling time: 5 levels (hours, half past, quarter hours, 5 minutes, any minute); pick the time or move the hands |
| `manifest.json` | App name, icon and colours for "Add to home screen" |
| `sw.js` | Service worker that saves the app for offline use |
| `icon.svg` | App icon |

## Grown-up settings

Tap the gear and answer the multiplication question to open settings.

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
| 8 | Adding (two digits, total up to 100) |
| 9 | Take away (two digits) |
| 10 | Mixed (two digits) |

Older devices are upgraded automatically. From the 8-level version: counting to 100 becomes the setting. From the 7-level version: anyone who had reached the two-digit levels goes back to the new level 5 (within 20), and their old two-digit scores are cleared; scores for levels 1–4 are kept.

## Updating

When you change any file, bump the `CACHE` version in `sw.js` (for example `kids-learning-v1` to `kids-learning-v2`). Otherwise devices keep the old saved copy.
