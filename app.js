// app.js
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Render Summary Cards
    const summaryContainer = document.getElementById("summary-container");
    if(tripData.theme && summaryContainer) {
        const items = [
            { label: "Duration", value: tripData.theme.duration },
            { label: "When", value: tripData.theme.dates },
            { label: "Vibe", value: tripData.theme.vibe },
            { label: "Dietary", value: tripData.theme.dietary }
        ];
        
        items.forEach(item => {
            const card = document.createElement("div");
            card.className = "summary-card";
            card.innerHTML = `
                <h4>${item.label}</h4>
                <p>${item.value}</p>
            `;
            summaryContainer.appendChild(card);
        });
    }

    // 2. Render Timeline
    const timelineContainer = document.getElementById("timeline-container");
    if(tripData.days && timelineContainer) {
        tripData.days.forEach(day => {
            const item = document.createElement("div");
            item.className = "timeline-item";
            
            // Build lists
            const planList = day.plan.map(p => `<li>${p}</li>`).join("");
            const stopsList = day.stops.length > 0 ? `<div class="detail-row"><strong>Stops:</strong></div>
                <div class="detail-list" style="list-style: none; margin-left: 0;">
                    ${day.stops.map(s => `
                        <div class="stop-item" style="margin-bottom: 12px;">
                            <div>
                                <span style="font-weight: 500;">${s.name}</span>
                                <span style="margin-left: 8px; font-size: 0.9em;">
                                    (<a href="${s.link}" target="_blank" style="color: var(--clr-light-blue); text-decoration: underline;">Map</a> | 
                                     <a href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(s.name + ' Greece')}" target="_blank" style="color: var(--clr-light-blue); text-decoration: underline;">Photos</a>)
                                </span>
                            </div>
                            ${s.desc ? `<div style="font-size: 0.9em; color: var(--clr-text-light); margin-top: 4px; line-height: 1.4;">${s.desc}</div>` : ''}
                        </div>
                    `).join("")}
                </div>
                <div id="map-day-${day.day}" class="day-map"></div>
            ` : "";
            
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <span class="day-badge">Day ${day.day}</span>
                        <h3 class="timeline-title">${day.title}</h3>
                    </div>
                    <div class="timeline-preview">${day.stay !== "None" ? `Stay: ${day.stay} | ` : ''}Travel: ${day.travel}</div>
                    
                    <div class="timeline-details">
                        ${day.stay !== "None" ? `<div class="detail-row"><strong>Hotel:</strong> ${day.stay}</div>` : ''}
                        <div class="detail-row"><strong>Plan:</strong></div>
                        <ul class="detail-list">${planList}</ul>
                        ${stopsList}
                        ${day.dinner !== "None" ? `<div class="detail-row"><strong>Dinner:</strong> ${typeof day.dinner === 'object' ? `<a href="${day.dinner.link}" target="_blank" style="color: var(--clr-light-blue); text-decoration: underline;">${day.dinner.name}</a>` : day.dinner}</div>` : ''}
                        <a href="${day.map}" target="_blank" class="map-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>
                            Get Daily Directions on Google Maps
                        </a>
                    </div>
                </div>
            `;
            
            // Add click event for expanding
            const content = item.querySelector('.timeline-content');
            content.addEventListener('click', (e) => {
                // Ignore clicks on links
                if(e.target.tagName.toLowerCase() === 'a') return;

                const isActive = item.classList.contains('active');
                
                // Optional: Close others
                document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
                
                if(!isActive) {
                    item.classList.add('active');
                    
                    // Initialize Leaflet map if we have stops
                    if(day.stops && day.stops.length > 0) {
                        const mapEl = document.getElementById(`map-day-${day.day}`);
                        if(mapEl && !mapEl.classList.contains('leaflet-container')) {
                            // Small timeout to ensure the container is visible and has height
                            setTimeout(() => {
                                const map = L.map(`map-day-${day.day}`);
                                L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                                    attribution: '&copy; OpenStreetMap contributors, &copy; CARTO'
                                }).addTo(map);
                                
                                const bounds = L.latLngBounds();
                                let hasMarkers = false;
                                const latlngs = [];
                                
                                day.stops.forEach((stop, index) => {
                                    if(stop.lat && stop.lng) {
                                        // Drop a pin with a numbered label for the route order
                                        L.marker([stop.lat, stop.lng]).addTo(map).bindPopup(`<strong>${index + 1}. ${stop.name}</strong>`);
                                        bounds.extend([stop.lat, stop.lng]);
                                        latlngs.push([stop.lat, stop.lng]);
                                        hasMarkers = true;
                                    }
                                });
                                
                                if(hasMarkers) {
                                    // Draw a line connecting the stops to show the route order
                                    if(latlngs.length > 1) {
                                        L.polyline(latlngs, {color: 'var(--clr-accent)', weight: 3, dashArray: '5, 10'}).addTo(map);
                                    }
                                    map.fitBounds(bounds, {padding: [30, 30], maxZoom: 15});
                                }
                            }, 50);
                        }
                    }
                }
            });
            
            timelineContainer.appendChild(item);
        });
    }

    // 3. Render Hotels
    const hotelsContainer = document.getElementById("hotels-container");
    if(tripData.hotels && hotelsContainer) {
        tripData.hotels.forEach(hotel => {
            const card = document.createElement("div");
            card.className = "card";
            
            // Map image key to our assets
            const imagePath = `assets/${hotel.imageKey}.png`;

            card.innerHTML = `
                <div class="card-img" style="background-image: url('${imagePath}');"></div>
                <div class="card-content">
                    <h3 class="card-title">${hotel.name}</h3>
                    <p class="card-subtitle">${hotel.location} • ${hotel.room}</p>
                    <div class="card-actions">
                        <a href="${hotel.link}" target="_blank" class="card-btn primary">Website</a>
                        <a href="${hotel.map}" target="_blank" class="card-btn">Map</a>
                    </div>
                </div>
            `;
            hotelsContainer.appendChild(card);
        });
    }

    // 4. Render Dining
    const diningContainer = document.getElementById("dining-container");
    if(tripData.dining && diningContainer) {
        tripData.dining.forEach(place => {
            const item = document.createElement("div");
            item.className = "list-item";
            item.innerHTML = `
                <div>
                    <div class="list-item-title">${place.name}</div>
                    <div class="list-item-loc">${place.location}</div>
                </div>
                <a href="${place.link}" target="_blank" class="list-item-link">Visit Site →</a>
            `;
            diningContainer.appendChild(item);
        });
    }

    // 5. Render Tours
    const toursContainer = document.getElementById("tours-container");
    if(tripData.tours && toursContainer) {
        tripData.tours.forEach(tour => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <div class="card-content">
                    <h3 class="card-title">${tour.name}</h3>
                    <p class="card-subtitle" style="margin-bottom: 1rem;">${tour.desc}</p>
                    <a href="${tour.link}" target="_blank" class="card-btn primary" style="width: fit-content; padding-left: 1.5rem; padding-right: 1.5rem;">Book / View Details</a>
                </div>
            `;
            toursContainer.appendChild(card);
        });
    }

    // Header scroll effect
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "none";
        }
    });

});
