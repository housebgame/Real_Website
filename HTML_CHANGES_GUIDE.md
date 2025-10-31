# HTML Changes Guide - Version 2

## Quick Reference: What to Change in index-enhanced.html

### 1. ADD Hamburger Menu CSS and JS (in <head>)

**Find this line:**
```html
<link rel="stylesheet" href="styles/enhanced-footer.css">
```

**Add AFTER it:**
```html
<link rel="stylesheet" href="styles/hamburger-menu.css">
```

**Find this line (near bottom):**
```html
<script src="scripts/back-to-top.js"></script>
```

**Add AFTER it:**
```html
<script src="scripts/hamburger-menu.js"></script>
```

---

### 2. ADD Hamburger Button to Navigation

**Find this section:**
```html
<ul class="nav-links">
    <li><a href="#featured">Home</a></li>
    <li><a href="#discover">Discover</a></li>
    <li><a href="#hire">Collaborate</a></li>
    <li><a href="#socials">Connect</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
```

**Replace WITH:**
```html
<ul class="nav-links">
    <li><a href="#featured">Home</a></li>
    <li><a href="#discover">Discover</a></li>
    <li><a href="#hire">Collaborate</a></li>
    <li><a href="#socials">Connect</a></li>
</ul>

<!-- Hamburger Button for Mobile -->
<button class="hamburger-btn" aria-label="Menu">
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
</button>
```

---

### 3. ADD Mobile Menu (after </nav>)

**Find this:**
```html
</nav>
```

**Add AFTER it:**
```html
<!-- Mobile Menu Overlay -->
<div class="mobile-menu-overlay"></div>

<!-- Mobile Menu -->
<div class="mobile-menu">
    <div class="mobile-menu-header">
        <div class="mobile-menu-logo">HBG</div>
        <button class="mobile-menu-close" aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>

    <ul class="mobile-menu-links">
        <li><a href="#featured">Home</a></li>
        <li><a href="#discover">Discover</a></li>
        <li><a href="#hire">Collaborate</a></li>
        <li><a href="#socials">Connect</a></li>
    </ul>

    <div class="mobile-menu-footer">
        <div class="mobile-menu-social-title">Follow Me</div>
        <div class="mobile-menu-socials">
            <a href="https://www.youtube.com/@HouseBoatGame" target="_blank" class="mobile-social-link youtube">
                <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://x.com/Lakshay_mothwal" target="_blank" class="mobile-social-link twitter">
                <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://in.linkedin.com/in/lakshay-mothwal-b6210b198" target="_blank" class="mobile-social-link linkedin">
                <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://github.com/housebgame" target="_blank" class="mobile-social-link github">
                <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
        </div>
    </div>
</div>
```

---

### 4. REMOVE "Featured Projects" Header

**Find and DELETE this entire section:**
```html
<div class="featured-header">
    <h2>Featured Projects</h2>
    <p>Discover my latest and greatest educational games</p>
</div>
```

**Keep everything else in the featured section.**

---

### 5. REMOVE Third Discover Category (Assets)

**Find this entire section and DELETE it:**
```html
<!-- Category 3: Game Assets -->
<div class="discover-category assets">
    ... (entire section)
</div>
```

---

### 6. UPDATE Second Discover Category (Tools → Tools & Assets)

**Find:**
```html
<!-- Category 2: Unity Tools -->
<div class="discover-category tools">
```

**Change to:**
```html
<!-- Category 2: Tools & Assets -->
<div class="discover-category tools">
```

**In the same section, find:**
```html
<span class="discover-category-tag">Build Better</span>
<h2>Unity Tools & Extensions</h2>
<p>Powerful Unity editor tools and plugins designed to enhance your game development workflow and productivity.</p>
```

**Replace WITH:**
```html
<span class="discover-category-tag">Create Better</span>
<h2>Tools & Assets</h2>
<p>Unity editor tools, plugins, and high-quality game assets to enhance your game development workflow and projects.</p>
```

**In the same section, find:**
```html
<a href="#tools-section" class="discover-btn">
    Browse Tools
    <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
</a>
```

**Replace WITH:**
```html
<a href="#tools-section" class="discover-btn">
    Explore Tools & Assets
    <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
</a>
```

**Change the ID from `toolsThumbnails` to `toolsAndAssetsThumbnails`:**
```html
<div class="discover-thumbnail-track" id="toolsAndAssetsThumbnails">
```

**Change the ID from `toolsMainImage` to `toolsAndAssetsMainImage`:**
```html
<img src="images/letro.png" alt="Tools & Assets" class="discover-main-image" id="toolsAndAssetsMainImage">
```

---

### 7. REMOVE Old Contact Section

**Find and DELETE this entire section:**
```html
<!-- Contact Section (Keep your existing one) -->
<section class="contact" id="contact">
    ... (entire section with service boxes)
</section>
```

**Keep the Video Modal section!**

---

### 8. UPDATE JavaScript at Bottom

**Find this function:**
```javascript
function populateDiscoverSection() {
    // Populate games thumbnails
    const gamesThumbnails = document.getElementById('gamesThumbnails');
    if (gamesThumbnails) {
        projectsData.games.forEach((game, index) => {
            const thumb = document.createElement('div');
            thumb.className = `discover-thumbnail ${index === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${game.image}" alt="${game.title}">`;
            gamesThumbnails.appendChild(thumb);
        });
    }

    // Populate tools thumbnails
    const toolsThumbnails = document.getElementById('toolsThumbnails');
    if (toolsThumbnails && projectsData.tools.length > 0) {
        projectsData.tools.forEach((tool, index) => {
            const thumb = document.createElement('div');
            thumb.className = `discover-thumbnail ${index === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${tool.image}" alt="${tool.title}">`;
            toolsThumbnails.appendChild(thumb);
        });
    }

    // Populate assets thumbnails
    const assetsThumbnails = document.getElementById('assetsThumbnails');
    if (assetsThumbnails && projectsData.assets.length > 0) {
        projectsData.assets.forEach((asset, index) => {
            const thumb = document.createElement('div');
            thumb.className = `discover-thumbnail ${index === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${asset.image}" alt="${asset.title}">`;
            assetsThumbnails.appendChild(thumb);
        });
    }
}
```

**Replace WITH:**
```javascript
function populateDiscoverSection() {
    // Populate games thumbnails
    const gamesThumbnails = document.getElementById('gamesThumbnails');
    if (gamesThumbnails) {
        projectsData.games.forEach((game, index) => {
            const thumb = document.createElement('div');
            thumb.className = `discover-thumbnail ${index === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${game.image}" alt="${game.title}">`;
            gamesThumbnails.appendChild(thumb);
        });
    }

    // Populate tools & assets thumbnails
    const toolsAndAssetsThumbnails = document.getElementById('toolsAndAssetsThumbnails');
    if (toolsAndAssetsThumbnails && projectsData.toolsAndAssets.length > 0) {
        projectsData.toolsAndAssets.forEach((item, index) => {
            const thumb = document.createElement('div');
            thumb.className = `discover-thumbnail ${index === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${item.image}" alt="${item.title}">`;
            toolsAndAssetsThumbnails.appendChild(thumb);
        });
    }
}
```

---

### 9. UPDATE Footer - Remove Tools Column

**Find this section in footer:**
```html
<!-- Tools Column -->
<div class="footer-links-column">
    <h4 class="footer-links-title">Tools</h4>
    <ul class="footer-links-list">
        <li><a href="#tools-section">Unity Extensions</a></li>
        <li><a href="#tools-section">Plugins</a></li>
        <li><a href="#tools-section">Browse All</a></li>
    </ul>
</div>
```

**Replace WITH:**
```html
<!-- Tools & Assets Column -->
<div class="footer-links-column">
    <h4 class="footer-links-title">Tools & Assets</h4>
    <ul class="footer-links-list">
        <li><a href="#discover">Unity Extensions</a></li>
        <li><a href="#discover">Plugins</a></li>
        <li><a href="#discover">Game Assets</a></li>
    </ul>
</div>
```

---

## Summary of Changes:

✅ 1. Added hamburger menu CSS link
✅ 2. Added hamburger menu JS link
✅ 3. Added hamburger button to nav
✅ 4. Added mobile menu HTML
✅ 5. Removed "Featured Projects" heading
✅ 6. Removed third discover category (assets)
✅ 7. Updated second category to "Tools & Assets"
✅ 8. Removed old Contact section
✅ 9. Updated JavaScript to populate merged category
✅ 10. Updated footer

---

## Result:

You'll now have:
- ✅ No "Featured Projects" heading - just carousel
- ✅ 2 Discover sections: **Games** + **Tools & Assets**
- ✅ Hamburger menu on mobile
- ✅ Compact Connect section
- ✅ Compact footer
- ✅ No old contact section
- ✅ All sections auto-carousel

All using YOUR exact style and colors! 🎨
