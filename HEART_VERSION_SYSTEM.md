# Heart Version System

## Overview
The website footer uses a **heart icon system** to indicate page versions/updates instead of traditional version numbers (like v2.1, v2.2, etc.).

## How It Works

### Three Heart Variations
- ❤️ Red Heart
- 💙 Blue Heart
- 💚 Green Heart

### Random Selection
- Each time the page loads, it randomly selects one of the three hearts
- **Important:** The system ensures the heart NEVER repeats consecutively
- If current heart is ❤️, next will be either 💙 or 💚 (never ❤️)

### Visual Design
- Heart appears next to "Built with passion" text in footer
- Subtle pulsing animation (scales 1.0 to 1.1 every 2 seconds)
- 60% opacity for subtle appearance
- Slightly larger than text (0.9rem)

## Purpose
- Quick visual indicator that page has been updated/refreshed
- More aesthetically pleasing than version numbers
- Easy to spot changes without reading text
- Maintains clean, modern footer design

## For Developers

### Files Modified
1. **index.html** (line 593)
   - Added heart version span with ID and data attribute
   ```html
   <span class="heart-version" id="heartVersion" data-current="0">❤️</span>
   ```

2. **index.html** (lines 928-947)
   - Added `setRandomHeartVersion()` function
   - Randomly selects heart that differs from current
   - Updates `data-current` attribute to track state

3. **styles/enhanced-footer.css** (lines 172-183)
   - Styled `.heart-version` class
   - Added `heartPulse` animation keyframes

### Function Logic
```javascript
function setRandomHeartVersion() {
    const hearts = ['❤️', '💙', '💚'];
    const heartElement = document.getElementById('heartVersion');
    const currentHeart = heartElement.getAttribute('data-current') || '0';
    let newIndex;

    // Get random heart different from current
    do {
        newIndex = Math.floor(Math.random() * hearts.length);
    } while (newIndex.toString() === currentHeart && hearts.length > 1);

    heartElement.textContent = hearts[newIndex];
    heartElement.setAttribute('data-current', newIndex.toString());
}
```

### Initialization
Function is called on page load in the window load event listener (line 939):
```javascript
window.addEventListener('load', () => {
    // ... other initialization
    setRandomHeartVersion();
});
```

## When Making Changes

**IMPORTANT:** Every time you make changes to the website:
1. The heart will automatically change to a different color on refresh
2. You'll instantly know your update has loaded
3. No need to manually update version numbers
4. No need to remember what version you're on

## Customization

### To Add More Hearts
Edit the `hearts` array in `setRandomHeartVersion()`:
```javascript
const hearts = ['❤️', '💙', '💚', '💜', '🧡']; // Add more colors
```

### To Change Animation Speed
Edit `enhanced-footer.css` animation duration:
```css
animation: heartPulse 3s ease-in-out infinite; /* Change 2s to 3s */
```

### To Remove Animation
Remove the animation line from `.heart-version` class:
```css
.heart-version {
    font-size: 0.9rem;
    opacity: 0.6;
    margin-left: 6px;
    display: inline-block;
    /* animation: heartPulse 2s ease-in-out infinite; */ /* Comment out */
}
```

## Why Hearts Instead of Numbers?

✅ **Visual Appeal** - More friendly and on-brand
✅ **Quick Recognition** - Color change is instant to spot
✅ **Simplicity** - No need to track version numbers
✅ **Subtle** - Doesn't distract from main content
✅ **Fun** - Adds personality to the footer

---

**Status:** ✅ Implemented and Active
**Location:** Footer bottom-right, next to "Built with passion"
**Default:** System starts with random heart on first load
