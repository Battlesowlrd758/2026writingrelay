# The Ink Trail — Stamp Rally

A small, dependency-free stamp rally site. Visitors scan QR codes to collect
digital stamps; each stamp reveals a piece of a story; collecting all of them
unlocks a link to your Writing Circle site.

## Files

```
ink-trail-stamp-rally/
├── index.html   the page structure (loads style.css and script.js)
├── style.css    all visual styling (colors, layout, fonts)
└── script.js    all behavior: stamp storage, the story, QR generation
```

Everything is plain HTML/CSS/JS — no build step, no npm install, no
frameworks. Open it, edit it, save it, refresh the browser.

## What to customize (all in `script.js`, near the top)

```js
var TOTAL_STAMPS = 13;

var STORY = [
  "...",   // fragment for stamp 1
  "...",   // fragment for stamp 2
  ...       // one string per stamp, 13 total
];
```

- **`STORY`** — one sentence or short paragraph per stamp. I filled in a
  placeholder mystery story about a hidden writing circle so the whole
  mechanic works out of the box — replace each line with your own.
- **`TOTAL_STAMPS`** — change this if you ever want more or fewer than 13
  stamps (keep it equal to `STORY.length`).
- **`TEACHER_STORIES`** — replace the two teacher names, short introductions,
  and stories shown on the unlocked Writing Circle page.
- **`MEMBER_STORIES`** — replace the eleven member names, short
  introductions, and stories shown on the unlocked Writing Circle page.
- **`STORY_JA`** — add Japanese story versions in the same order as `STORY`.
  The top-right language button switches between English and Japanese.
- Add optional `nameJa`, `introJa`, and `storyJa` properties to teacher/member
  objects when you are ready to add their Japanese versions.

Visual tweaks (colors, fonts, spacing) all live in `style.css` — the color
palette is defined once at the top as CSS variables (`--paper`, `--ink`,
`--stamp-red`, etc.), so changing the look is mostly editing those few lines.

## How the stamp mechanic works

- Every visit to the page checks the URL for a `?s=` parameter.
- A QR code that points to `yoursite.com/?s=3` will, the moment it's opened,
  mark stamp 3 as collected **in that visitor's own browser** (using
  `localStorage` — no server, no login, no database).
- The home page (`yoursite.com/` with no parameter) shows the visitor's
  collected stamps and the story fragments unlocked so far.
- Because progress is stored per-browser, if someone switches phones or
  clears their browser data, their stamps reset. That's normal for this kind
  of rally, but tell me if you actually want progress to follow a person
  across devices — that needs a small shared database behind it, which is a
  different build.

## Generating your printable QR codes

The admin page uses a Cloudflare Pages Function. Deploy this project to
Cloudflare Pages, then create a secret environment variable named
`ADMIN_SECRET_PASSWORD`. Do not put that password in `script.js`, HTML, or a
public URL. Open `/admin.html` and sign in; the dashboard and QR data are
created only after the server accepts the password.

Open `/admin.html` on the deployed Cloudflare Pages site. The login form sends
the password to `/api/admin-login`; the password is checked only by the
server-side Function. A wrong password receives `401 Access Denied`, and the
dashboard is not shown.

For local testing, use Cloudflare's Pages development server rather than
`python -m http.server`, because Python does not run Pages Functions:

```text
npx wrangler pages dev .
```

Set `ADMIN_SECRET_PASSWORD` as a local secret for that development command or
configure it in the Cloudflare Pages dashboard for production. After login,
the dashboard shows all 13 QR codes with a **Print** button and local testing
controls. The password is never stored in the repository or URL.

The admin hub also has buttons to add each stamp to the current browser for
testing, plus a reset button. These controls only change local progress; they
do not affect another visitor's device.

### Making more or fewer QR codes

Change `TOTAL_STAMPS` in `script.js`, then add or remove story strings so
`STORY.length` matches it. The admin page's QR loop already runs from 1 to
`TOTAL_STAMPS`, so it will automatically print the new number of codes. For
example, changing `13` to `15` and adding two story strings creates stamps 14
and 15. Changing it to `10` removes codes 11 through 13. Reprint the full QR
sheet after changing the number so every code matches the current setup.

For the two extra codes requested here, they are stamps 12 and 13. Open the
admin URL above, confirm the base URL, and print the sheet; no separate QR code
library setup is needed.

### Introduction and member stories

After all 13 stamps are collected, **Step through** opens the Writing Circle
page inside this website at `?circle=1`. It contains the circle introduction,
the teacher and member names, and a short introduction under each name.
Clicking a name opens that person's individual introduction and story page.
Each individual page has its own **Print or save as PDF** button beneath the
story. Replace the sample content in
`MEMBER_STORIES` before sharing it.

## Testing locally in VS Code

Opening `index.html` directly by double-clicking it works for looking at the
design, but some browsers restrict `localStorage` on `file://` pages, which
can make stamp-collecting flaky while testing. It's more reliable to serve
the folder locally:

- **VS Code**: install the "Live Server" extension, right-click
  `index.html`, choose **Open with Live Server**.
- **Or**, from a terminal in this folder: `python3 -m http.server 8000`,
  then open `http://localhost:8000` in your browser.

Then test a stamp by visiting `http://localhost:8000/?s=1` in your browser.

## Putting it online for real

QR codes need a real, stable URL to point at, so before printing any codes
you'll want to host this folder somewhere public. A few easy, free options:

- **GitHub Pages** — push this folder to a GitHub repo and enable Pages in
  the repo settings.
- **Netlify or Vercel** — drag-and-drop the folder onto their web dashboard.
- Ask me to publish it back as a Claude artifact if you'd like a hosted link
  without setting any of that up yourself.

Once it's live at its real URL, append
`?admin=%25o3kcI%26w.h_jbp%7B%40bXi%2C` there (not on localhost) to generate
QR codes that point at the real address.
