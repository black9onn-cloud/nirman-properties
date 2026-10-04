# 🏢 Nirman Properties - Land Buy & Rent Website

A professional real estate website for buying, selling, and renting land properties in the Manesar area.

## 📂 Project Structure

```
nirman-properties/
├── index.html          # Main HTML file (page structure)
├── style.css          # CSS styling
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## 🚀 Features

✅ **Property Listings** - Display featured properties with details
✅ **Search Functionality** - Filter properties by location and type
✅ **List Your Property** - Modal form to list new properties
✅ **WhatsApp Integration** - Direct messaging with copy-to-clipboard
✅ **Contact Form** - Get customer inquiries via WhatsApp
✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **About Section** - Company information and services
✅ **Company Details** - Address: Sector 1, IMT Manesar | Phone: +91 99111 41314

## 🛠️ Installation

### Option 1: GitHub Pages (Free)

1. **Create a GitHub Account**
   - Go to https://github.com
   - Sign up for free

2. **Create a New Repository**
   - Click "New" button
   - Name: `nirman-properties`
   - Add README file
   - Click "Create repository"

3. **Upload Files**
   - Click "Add file" → "Upload files"
   - Upload all 3 files (index.html, style.css, script.js)
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to Settings
   - Scroll to "Pages" section
   - Select "main" branch
   - Click "Save"
   - Wait 1-2 minutes

5. **Your Website URL**
   ```
   https://yourusername.github.io/nirman-properties
   ```

### Option 2: Netlify (Free)

1. Go to https://netlify.com
2. Click "Deploy" → "Upload your site"
3. Drag and drop the 3 files
4. Done! Your site is live

### Option 3: Local Testing

1. Download all 3 files
2. Put them in the same folder
3. Open `index.html` in your browser
4. Website will work perfectly

## 📋 File Description

### index.html
- Contains the HTML structure
- Links to external CSS and JavaScript files
- All semantic HTML markup

### style.css
- All styling for the website
- Responsive design for mobile/tablet/desktop
- Modern gradient backgrounds
- Animations and transitions

### script.js
- Property listing modal
- Search functionality
- WhatsApp integration (copy & send)
- Contact form handling
- Property details modal
- Smooth scrolling

## 🔧 Customization

### Change Phone Number
In `script.js`, find and replace:
```javascript
'919911141314'
```
With your phone number (without +91)

### Change Address
In `index.html`, find:
```html
<p>Sector 1, IMT Manesar, Gurugram - 122050</p>
```
Update with your address

### Add/Edit Properties
In `script.js`, find the properties array:
```javascript
const properties = [
    { type: 'Buy', title: 'Your Property', price: '₹Price', location: 'Your Location', area: '1,200 Sq.ft', details: 'Your details' },
]
```

### Change Company Name
In `index.html`, find and replace:
```html
<div class="logo">🏢 NIRMAN PROPERTIES</div>
```

## 📱 Features Working

✅ **List Your Property Button** - Opens form, sends to WhatsApp
✅ **Search Properties** - Filter by location/type
✅ **View Details** - Click property to see full details
✅ **Contact Form** - Send message via WhatsApp
✅ **Copy Message** - Copy text to clipboard
✅ **Mobile Responsive** - Works perfectly on all devices

## 🌐 Domain Setup

If you buy a custom domain (nirmanproperties.com):

### GitHub Pages:
1. Go to Settings → Pages
2. Enter custom domain
3. Follow DNS setup

### Netlify:
1. Go to Domain settings
2. Connect your domain
3. Auto setup with HTTPS

## 📞 Contact Integration

All inquiries go to WhatsApp:
- **Phone**: +91 99111 41314
- **Method**: Click any contact/inquiry button → Copy message → Open WhatsApp → Paste

## ✨ Future Improvements

- Add image uploads for properties
- Database integration for dynamic listings
- Admin panel
- Payment integration
- User reviews
- Advanced filters

## 📄 License

Free to use and modify for your business.

## 👤 Support

For any issues or customization needs, contact the developer.

---

**Made with ❤️ for Nirman Properties**

**Website**: https://yourusername.github.io/nirman-properties
**Phone**: +91 99111 41314
**Location**: Sector 1, IMT Manesar, Gurugram
