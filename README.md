# The Rhinestone Rambler

A lightweight Nashville vacation-home website, ready for GitHub Pages.

## Preview it

Open `index.html` in Chrome, Safari, Edge, or Firefox. Keep the `assets` folder beside it. The page and photo viewer work locally; the Airbnb and sister-property links need internet access.

The live preview from this Codex task is at [http://127.0.0.1:4173/](http://127.0.0.1:4173/). If that server has stopped, opening `index.html` still works.

## Put it on GitHub

1. Unzip the download and open the `rhinestone-rambler` folder.
2. Create a new GitHub repository named `the-rhinestone-rambler` under `IzzyIsaac`, paired with the existing `the-ramblers-rest` repository. Choose **Public** if you use GitHub Free. Creating it with a README makes the upload interface easy to find.
3. Choose **Add file → Upload files**. Upload the top-level files first and commit them, then upload the `assets` folder in a second commit. Replace the initial README if prompted. Do not upload the ZIP or wrap everything inside another `rhinestone-rambler` folder.
4. Commit the upload to `main`. At the repository’s top level, you should see `index.html`, `photos.html`, and `assets`.
5. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**. Click **Save**.
6. Open the address GitHub shows after deployment, normally `https://IzzyIsaac.github.io/the-rhinestone-rambler/`.

These steps follow [GitHub’s publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). No Node.js, npm, framework, or build command is required.

The empty `.nojekyll` file can be uploaded too. If your computer hides it, the site’s ordinary HTML/assets structure also works without it.

## Connect therhinestonerambler.com

The domain has been purchased through Squarespace. The site’s canonical URLs, sitemap, and `CNAME` file use `therhinestonerambler.com`.

1. In the repository’s **Settings → Pages → Custom domain**, enter `therhinestonerambler.com` and save. GitHub should use the root-level `CNAME` file for branch publishing.
2. In Squarespace Domains, remove the **Squarespace Defaults** DNS preset for this domain, then add these DNS records. Preserve the separate **Squarespace Domain Connect** and **Email Security** presets.

| Type | Host/name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | IzzyIsaac.github.io |

3. Allow time for DNS and certificate setup, then enable **Enforce HTTPS** in Pages settings. Test both the bare domain and `www`; GitHub should redirect `www` to the bare domain.

The `www` value excludes `https://` and the repository name. Keep the root-level `CNAME` when uploading later revisions. See [GitHub’s custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

If you choose another domain, replace `https://therhinestonerambler.com` in `index.html`, `photos.html`, `robots.txt`, and `sitemap.xml`, and use that domain in Pages settings.

## What is included

```text
rhinestone-rambler/
├── index.html           Main website
├── photos.html          All 32 photos; also works without JavaScript
├── README.md            This guide
├── CNAME                GitHub Pages custom domain
├── robots.txt           Search-engine crawling instructions
├── sitemap.xml          Site URLs
├── .nojekyll             Skip Jekyll processing on GitHub Pages
└── assets/
    ├── css/main.css     Responsive styles and colors
    ├── js/main.js       Photo viewer, captions, and copyright year
    ├── fonts/           Local Fraunces font and its license
    ├── images/          Local WebP photos, in responsive sizes
    ├── favicon.svg      Small rhinestone/star browser icon
    ├── logo.svg         Brown wordmark on a transparent background
    └── logo-cream.svg   Light wordmark for dark backgrounds
```

The page’s wordmark uses live text in the same local font for crisp rendering. The two SVG files are standalone copies for reuse.

## Make future edits

- **Words, amenities, and rules:** edit `index.html` in a plain-text/code editor. Keep HTML tags intact. The photo page has its own header/footer; update both when changing shared text or booking links.
- **Colors:** edit the named color values at the beginning of `assets/css/main.css`.
- **Photos:** retain the filenames to replace an image easily. Update its regular, `-small`, and (where present) `-medium` versions. Keep the `srcset` width values aligned with the actual image widths. Also update the relevant alternative text and captions if the subject changes. Photo captions are in `assets/js/main.js` and `photos.html`.
- **Booking link:** replace `https://www.airbnb.com/h/rhinestonerambler` in both HTML files if the listing URL changes.
- **Publish changes:** upload the edited files to the same repository and commit. Preserve the existing folder paths.

## Review before launch

The initial property facts and 32-photo tour came from your [Airbnb listing](https://www.airbnb.com/h/rhinestonerambler), checked September 14, 2026. On September 30, 2026, 27 exact photo matches were upgraded from your local original JPEGs, with full-size images up to 2,048 pixels and responsive smaller versions. Five images without a matching original remain from the listing: two bedroom details, two office views, and the backyard. Your parking and children-policy corrections are included. The brand reference and sister-property photo came from [The Rambler’s Rest](https://theramblersrest.com).

Give the stay details a quick read: king/full beds, couch sleeping space, six-guest maximum, adult-oriented decor, no pets, two entry steps, check-in/out times, quiet hours, cameras, and permit number. The wording reflects the listing and your subsequent corrections and should be updated if your policies change.

Rates, reviews, availability, reservations, and guest messages stay on Airbnb. The site does not sync listing changes automatically. There is no calendar integration, payment form, analytics tracker, or subscription to maintain. It makes no third-party requests to load its photos or font.

The published website should contain only the files in this folder. Research notes, local QA material, and the ZIP itself are not needed in your GitHub repository.

Fraunces is provided under the SIL Open Font License; see `assets/fonts/OFL.txt`. Property photography is included from the owner-provided originals and websites for this project.
