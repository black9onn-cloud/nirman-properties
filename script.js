// Modal for listing property
const modal = document.createElement('div');
modal.id = 'listingModal';
modal.style.cssText = `
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    overflow: auto;
`;
modal.innerHTML = `
    <div style="background-color: white; margin: auto; padding: 30px; border-radius: 10px; width: 90%; max-width: 500px; margin-top: 50px; box-shadow: 0 5px 20px rgba(0,0,0,0.2);">
        <span style="float: right; font-size: 28px; cursor: pointer; color: #aaa;" onclick="closeListingModal()">&times;</span>
        <h2 style="margin-bottom: 20px; color: #2c3e50;">List Your Property</h2>
        <form id="listingForm" onsubmit="handleListing(event)">
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 600;">Property Type *</label>
                <select name="propertyType" required style="width: 100%; padding: 10px; border: 2px solid #ecf0f1; border-radius: 5px;">
                    <option value="">Select Type</option>
                    <option value="Residential">Residential Plot</option>
                    <option value="Commercial">Commercial Land</option>
                    <option value="Industrial">Industrial Plot</option>
                    <option value="Agricultural">Agricultural Land</option>
                </select>
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 600;">Location *</label>
                <input type="text" name="location" required placeholder="Enter location" style="width: 100%; padding: 10px; border: 2px solid #ecf0f1; border-radius: 5px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 600;">Area (Sq.ft) *</label>
                <input type="number" name="area" required placeholder="Enter area" style="width: 100%; padding: 10px; border: 2px solid #ecf0f1; border-radius: 5px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 600;">Price (₹) *</label>
                <input type="number" name="price" required placeholder="Enter price" style="width: 100%; padding: 10px; border: 2px solid #ecf0f1; border-radius: 5px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 600;">Buy or Rent? *</label>
                <select name="type" required style="width: 100%; padding: 10px; border: 2px solid #ecf0f1; border-radius: 5px;">
                    <option value="">Select Option</option>
                    <option value="Buy">Buy</option>
                    <option value="Rent">Rent</option>
                </select>
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 600;">Your Name *</label>
                <input type="text" name="name" required placeholder="Enter your name" style="width: 100%; padding: 10px; border: 2px solid #ecf0f1; border-radius: 5px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 600;">Your Phone *</label>
                <input type="tel" name="phone" required placeholder="Enter your phone" style="width: 100%; padding: 10px; border: 2px solid #ecf0f1; border-radius: 5px;">
            </div>
            <button type="submit" class="btn" style="width: 100%;">Submit Property</button>
        </form>
    </div>
`;
document.body.appendChild(modal);

function openListingModal() {
    document.getElementById('listingModal').style.display = 'block';
}

function closeListingModal() {
    document.getElementById('listingModal').style.display = 'none';
}

function handleListing(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const propertyType = formData.get('propertyType');
    const location = formData.get('location');
    const area = formData.get('area');
    const price = formData.get('price');
    const type = formData.get('type');
    const name = formData.get('name');
    const phone = formData.get('phone');
    
    const message = `Hello Nirman Properties,\n\nI want to list my property:\n\n📋 Property Type: ${propertyType}\n📍 Location: ${location}\n📏 Area: ${area} sq.ft\n💰 Price: ₹${price}\n🏷️ Type: ${type}\n\n👤 My Name: ${name}\n📱 My Phone: ${phone}`;
    
    showWhatsAppModal(message, '919911141314');
    closeListingModal();
}

// Properties data
const properties = [
    { type: 'Buy', title: 'Residential Plot', price: '₹25,00,000', location: 'North Delhi', area: '1,200 Sq.ft', details: 'Gated Community, Water & Power' },
    { type: 'Rent', title: 'Commercial Land', price: '₹50,000/Month', location: 'East Delhi', area: '2,500 Sq.ft', details: 'Main Road Access, Flexible Terms' },
    { type: 'Buy', title: 'Agricultural Land', price: '₹18,50,000', location: 'Outer Delhi', area: '5,000 Sq.ft', details: 'Fertile Soil, Irrigation Ready' },
    { type: 'Buy', title: 'Industrial Plot', price: '₹45,00,000', location: 'West Delhi', area: '3,500 Sq.ft', details: 'Industrial Zone, JNNURM Approved' },
    { type: 'Rent', title: 'Investment Plot', price: '₹35,000/Month', location: 'South Delhi', area: '2,000 Sq.ft', details: 'High Appreciation, Metro Adjacent' },
    { type: 'Buy', title: 'Luxury Residential Plot', price: '₹95,00,000', location: 'Premium Zone', area: '8,000 Sq.ft', details: 'Prime Location, Golf Course View' }
];

function handleSearch(event) {
    event.preventDefault();
    const form = event.target;
    const location = form.querySelector('input[placeholder="City, Area, or Landmark"]').value.toLowerCase();
    const type = form.querySelectorAll('select')[0].value;
    const priceRange = form.querySelectorAll('select')[1].value;
    
    const filtered = properties.filter(prop => {
        const locMatch = !location || prop.location.toLowerCase().includes(location);
        const typeMatch = !type || prop.type === type;
        return locMatch && typeMatch;
    });

    if (filtered.length > 0) {
        const propertiesSection = document.querySelector('#properties');
        propertiesSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            alert(`Found ${filtered.length} properties matching your criteria!`);
        }, 500);
    } else {
        alert('No properties found matching your criteria. Please try different filters.');
    }
}

function showWhatsAppModal(message, phoneNumber) {
    const whatsappModal = document.createElement('div');
    whatsappModal.style.cssText = `
        display: block;
        position: fixed;
        z-index: 1001;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
        overflow: auto;
    `;
    whatsappModal.innerHTML = `
        <div style="background-color: white; margin: auto; padding: 30px; border-radius: 10px; width: 90%; max-width: 500px; margin-top: 50px; box-shadow: 0 5px 20px rgba(0,0,0,0.2);">
            <span style="float: right; font-size: 28px; cursor: pointer; color: #aaa;" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2 style="color: #2c3e50; margin-bottom: 10px;">📱 Send via WhatsApp</h2>
            <p style="color: #666; font-size: 13px; margin-bottom: 15px;">Choose one of the options below to send your message:</p>
            
            <div style="background: #f0f0f0; padding: 12px; border-radius: 5px; margin-bottom: 15px; max-height: 150px; overflow-y: auto; font-size: 12px; line-height: 1.5; white-space: pre-wrap; word-wrap: break-word; border-left: 4px solid #25d366;">
                ${message}
            </div>
            
            <div style="margin-bottom: 15px; padding: 12px; background: #fff3cd; border-radius: 5px; text-align: center; border: 1px solid #ffc107;">
                <p style="margin: 0; font-size: 13px; color: #856404;"><strong>📞 Send to:</strong></p>
                <p style="margin: 8px 0 0 0; font-size: 16px; color: #25d366; font-weight: bold;">+91 99111 41314</p>
            </div>
            
            <button onclick="copyToClipboard('${message.replace(/'/g, "\\'")}');" class="btn" style="width: 100%; margin-bottom: 8px; background: #3498db;">📋 Copy Message</button>
            
            <button onclick="openWhatsApp('${phoneNumber}', '${message.replace(/'/g, "\\'")}');" class="btn" style="width: 100%; margin-bottom: 8px; background: #25d366;">💬 Open WhatsApp App</button>
            
            <p style="text-align: center; font-size: 12px; color: #666; margin: 10px 0; line-height: 1.5;">
                <strong>Not working?</strong><br>
                1. Click "Copy Message"<br>
                2. Open WhatsApp manually<br>
                3. Paste the message to +91 99111 41314
            </p>
            
            <button onclick="this.parentElement.parentElement.remove();" class="btn btn-secondary" style="width: 100%;">Close</button>
        </div>
    `;
    document.body.appendChild(whatsappModal);
}

function copyToClipboard(text) {
    try {
        // Modern clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                alert('✓ Message copied!\n\nNext steps:\n1. Open WhatsApp\n2. Search for +91 99111 41314\n3. Paste the message');
            }).catch(err => {
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    } catch (e) {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        alert('✓ Message copied!\n\nNext steps:\n1. Open WhatsApp\n2. Search for +91 99111 41314\n3. Paste the message');
    } catch (err) {
        alert('Could not copy. Please:\n1. Open WhatsApp\n2. Search for +91 99111 41314\n3. Send your message manually');
    }
    document.body.removeChild(textarea);
}

function openWhatsApp(phoneNumber, message) {
    try {
        // Try multiple WhatsApp link formats
        const encodedMessage = encodeURIComponent(message);
        const links = [
            `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
            `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`,
            `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
        ];
        
        // Try to open WhatsApp
        let opened = false;
        for (let link of links) {
            try {
                const win = window.open(link, '_blank');
                if (win) {
                    opened = true;
                    break;
                }
            } catch (e) {
                continue;
            }
        }
        
        if (!opened) {
            // If WhatsApp didn't open, show manual option
            alert('If WhatsApp did not open:\n\n1. Copy the message above\n2. Open WhatsApp\n3. Search for: +91 99111 41314\n4. Paste the message');
        }
    } catch (e) {
        alert('WhatsApp API is blocked. Please:\n\n1. Copy the message\n2. Open WhatsApp manually\n3. Send to: +91 99111 41314');
    }
}

function handleContactForm(event) {
    event.preventDefault();
    const formInputs = event.target.querySelectorAll('input, textarea');
    const name = formInputs[0].value;
    const email = formInputs[1].value;
    const phone = formInputs[2].value;
    const message = formInputs[3].value;
    
    const whatsappMessage = `Hello Nirman Properties,\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n\n💬 Message:\n${message}`;
    
    showWhatsAppModal(whatsappMessage, '919911141314');
    event.target.reset();
}

function showPropertyDetails(title, price, location, area, details) {
    const detailsModal = document.createElement('div');
    detailsModal.style.cssText = `
        display: block;
        position: fixed;
        z-index: 1001;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
        overflow: auto;
    `;
    detailsModal.innerHTML = `
        <div style="background-color: white; margin: auto; padding: 30px; border-radius: 10px; width: 90%; max-width: 600px; margin-top: 50px; box-shadow: 0 5px 20px rgba(0,0,0,0.2);">
            <span style="float: right; font-size: 28px; cursor: pointer; color: #aaa;" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2 style="color: #2c3e50; margin-bottom: 20px;">${title}</h2>
            <div style="line-height: 2; font-size: 16px; color: #555; margin-bottom: 20px;">
                <p><strong>📍 Location:</strong> ${location}</p>
                <p><strong>💰 Price:</strong> ${price}</p>
                <p><strong>📏 Area:</strong> ${area}</p>
                <p><strong>✨ Features:</strong> ${details}</p>
            </div>
            <button onclick="contactForProperty('${title}', '${price}')" class="btn" style="width: 100%; margin-bottom: 10px;">Inquire via WhatsApp</button>
            <button onclick="this.parentElement.parentElement.remove()" class="btn btn-secondary" style="width: 100%;">Close</button>
        </div>
    `;
    document.body.appendChild(detailsModal);
}

function contactForProperty(propertyTitle, price) {
    const message = `Hello Nirman Properties,\n\nI am interested in the property:\n\n🏠 Property: ${propertyTitle}\n💰 Price: ${price}\n\nPlease provide more details and availability.`;
    showWhatsAppModal(message, '919911141314');
}

// Add scroll smooth behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('listingModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
