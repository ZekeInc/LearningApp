# Kids Learning

Simple offline learning games for ages 3–5: **Math** and **Writing** (Pronunciation coming later).

- Plain HTML, CSS and JavaScript. No libraries, no build step, no accounts.
- Everything is saved only on the device (browser storage). Nothing is sent anywhere.
- Works offline after the first visit. Add it to the home screen to use it like an app.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Home page with the Math and Writing buttons |
| `math.html` | Math: 7 levels (counting, adding, take away, mixed, two-digit), unlocking, progress bar |
| `writing.html` | Tracing: capitals, lowercase, numbers and three-letter words, with arrows and stroke order |
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
| 5 | Adding (two digits, total up to 100) |
| 6 | Take away (two digits) |
| 7 | Mixed (two digits) |

Devices that already used the older 8-level version are moved over automatically: counting to 100 becomes the setting, and unlocked levels shift down by one.

## Updating

When you change any file, bump the `CACHE` version in `sw.js` (for example `kids-learning-v1` to `kids-learning-v2`). Otherwise devices keep the old saved copy.
