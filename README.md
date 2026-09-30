# The Rhinestone Rambler

A lightweight Nashville vacation-home website hosted on GitHub Pages.

Live site: [therhinestonerambler.com](https://therhinestonerambler.com)  
Repository: [IzzyIsaac/the-rhinestone-rambler](https://github.com/IzzyIsaac/the-rhinestone-rambler)  
Publishing source: `main` branch, repository root.

## Preview it

Open `index.html` in Chrome, Safari, Edge, or Firefox. Keep the `assets` folder beside it. The page and photo viewer work locally; the Airbnb and sister-property links need internet access.

The live preview from this Codex task is at [http://127.0.0.1:4173/](http://127.0.0.1:4173/). If that server has stopped, opening `index.html` still works.

## Keep it organized on GitHub

This site has its own public repository, paired with the existing `the-ramblers-rest` repository. The live files are at the repository root: `index.html`, `photos.html`, `assets`, and the domain files. The ZIP is a backup for handoff; it is not part of the repository.

To publish future changes, edit the files in your local clone of `the-rhinestone-rambler`, commit, and push `main` in GitHub Desktop. GitHub Pages deploys the commit automatically. You can also edit a small text file directly on GitHub and commit it there.

These steps follow [GitHub’s publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). No Node.js, npm, framework, or build command is required.

The empty `.nojekyll` file can be uploaded too. If your computer hides it, the site’s ordinary HTML/assets structure also works without it.

## Domain setup

The domain is registered at Squarespace. The site’s canonical URLs, sitemap, and root-level `CNAME` file use `therhinestonerambler.com`. In **Settings → Pages**, the custom domain is the bare domain, so GitHub redirects `www` there.

Squarespace’s **Squarespace Defaults** parking preset was removed for this domain. Its separate **Squarespace Domain Connect** and **Email Security** presets remain. The custom DNS records are:

| Type | Host/name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | IzzyIsaac.github.io |

The custom records use a 30-minute TTL. GitHub may need time to issue its certificate after a DNS change. Once **Enforce HTTPS** is available in Pages settings, turn it on. Both the bare domain and `www` should then redirect to HTTPS on the bare domain.

The `www` value excludes `https://` and the repository name. Keep the root-level `CNAME` when uploading later revisions. See [GitHub’s custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

If you choose another domain, replace `https://therhinestonerambler.com` in `index.html`, `photos.html`, `robots.txt`, and `sitemap.xml`, and use that domain in Pages settings.

## Google Analytics

This site has its own Google Analytics 4 property, **The Rhinestone Rambler**, in the existing Google Analytics account. The web stream uses measurement ID `G-GVCBTM1FSR`, separate from The Rambler’s Rest. Enhanced measurement is on, including page views, scrolls, and outbound clicks to Airbnb.

The small privacy choice shown to new visitors controls `assets/js/analytics.js`. It saves the visitor’s choice in this browser and does not load Google’s tag until they choose **Allow analytics**. Visitors can reopen it using **Privacy choices** in the footer. As a result, Google Analytics reports only consenting visits. You can view activity in Google Analytics under **The Rhinestone Rambler → Reports → Realtime**; new reports can take a little time to populate. If you change the measurement ID later, update it in `assets/js/analytics.js`.

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
    ├── js/analytics.js  Consent choice and this site's GA4 tag
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

Rates, reviews, availability, reservations, and guest messages stay on Airbnb. The site does not sync listing changes automatically. There is no calendar integration, payment form, or subscription to maintain. Photos and font load locally; the Google Analytics tag loads only after a visitor opts in.

The published website should contain only the files in this folder. Research notes, local QA material, and the ZIP itself are not needed in your GitHub repository.

Fraunces is provided under the SIL Open Font License; see `assets/fonts/OFL.txt`. Property photography is included from the owner-provided originals and websites for this project.
