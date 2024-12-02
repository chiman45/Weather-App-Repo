const locations = [
    {
        name: "Sagrada Familia",
        coords: [27.7992343, -15.7173837],
        address: "Sagrada Familia",
        link:
            "https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRDSAfZy5WaAVdbhz0uFVUXtG9pIxMd0I6bkT4T35F1wjM36fbFIKta84Gc7NHjnjih&psig=AOvVaw1pRZNAs4UUu1rNvF73yZiJ&ust=1730039842141000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCICcqu6irIkDFQAAAAAdAAAAABAE",
        image:
            "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRDSAfZy5WaAVdbhz0uFVUXtG9pIxMd0I6bkT4T35F1wjM36fbFIKta84Gc7NHjnjih",
        description: "It is the largest unfinished Catholic church in the world.",    
        country: "Spain"
    },
    {
        name: "Alhambra",
        coords: [27.7992343, -15.7173837],
        address: "Alhambra",
        link:
            "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQInj1N7Ybcgc8gBLT5Z7EXzCmJJ1GQngBPmZoZVclScxHkNifk7NZbnQEzdjNCI2F9",
        image:
            "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQInj1N7Ybcgc8gBLT5Z7EXzCmJJ1GQngBPmZoZVclScxHkNifk7NZbnQEzdjNCI2F9",
        description: "The Alhambra is a palace and fortress complex located in Granada, Spain.",
        country: "Spain"
    },
    {
        name: "Aqueduct of Segovia",
        coords: [27.7992343, -15.7173837],
        address: "Aqueduct of Segovia",
        link:
            "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSIxRzQ_88Jdm4h7ne3lzZIGI5Kgr4PlbxIayYrdHrkZFFiP7XiAPayrRjpV-LpwJgL",
        image:
            "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSIxRzQ_88Jdm4h7ne3lzZIGI5Kgr4PlbxIayYrdHrkZFFiP7XiAPayrRjpV-LpwJgL",
        description: "The Aqueduct of Segovia is a Roman aqueduct in Segovia, Spain.",
        country: "Spain"
    },
    {
        name: "Niagara Falls",
        coords: [49.0117375, -57.6885751],
        address: "Niagara Falls",
        link:
            "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSVXxPQeLPBaW8VSVCSEaj3SJnMDVFsT8EH25VQ9xm9u9JUgd5vgg7zz2B6kKqk8ivu",
        image:
            "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSVXxPQeLPBaW8VSVCSEaj3SJnMDVFsT8EH25VQ9xm9u9JUgd5vgg7zz2B6kKqk8ivu",
        description: "Niagara Falls, Ontario, is a Canadian city at the famous waterfalls of the same name, linked with the U.S. by the Rainbow Bridge",
        country: "Canada"
    },
    {
        name: "The Svanninge Hills",
        coords: [55.7232392, 8.7757964],
        address: "The Svanninge Hills",
        link:
            "https://www.visitdenmark.com/sites/visitdenmark.com/files/styles/map_list/public/2019-03/SvanningeBakker_Photo%20Lars_skaaning_GuideDenmark%20Faaburg%20Turistbureau.jpg?h=c12e0b96&itok=E7FkyUSv",
        image:
            "https://www.visitdenmark.com/sites/visitdenmark.com/files/styles/map_list/public/2019-03/SvanningeBakker_Photo%20Lars_skaaning_GuideDenmark%20Faaburg%20Turistbureau.jpg?h=c12e0b96&itok=E7FkyUSv",
        description: "The Svanninge Hills, just northeast of Faaborg, are epitomized by winding roads, hedgerows and charming half-timbered houses.",
        country: "Denmark"
    },
    {
        name: "Yosemite National Park",
        coords: [29.602788, -98.6225957],
        address: "Yosemite National Park",
        link:
            "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSFRYDb2X4djseMr20tEvKZvwQyX_NAGamDKyR0unqX7zdIQyiGTI_XL7QVkIdwQOaP",
        image:
            "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSFRYDb2X4djseMr20tEvKZvwQyX_NAGamDKyR0unqX7zdIQyiGTI_XL7QVkIdwQOaP",
        description: "Yosemite National Park is in California’s Sierra Nevada mountains. ",
        country: "USA"
    },
    {
        name: "Harihar Fort Trek",
        coords: [19.0760, 72.8777],
        address: "Harihar Fort Trek",
        link:
            "https://media1.thrillophilia.com/filestore/3vgvq960pulicuj13vda71zzb65x_1678973510211.png?h=417&w=auto&dpr=1.25",
        image:
            "https://media1.thrillophilia.com/filestore/3vgvq960pulicuj13vda71zzb65x_1678973510211.png?h=417&w=auto&dpr=1.25",
        description: "Harihar fort / Harshagad is a fort located 40 km from Nashik City, 48 km from Igatpuri, 40 km from Ghoti in Nashik district, of Maharashtra, India.",
        country: "India"
    }
];

function initMap() {
    const map = new mapboxgl.Map({
        container: "earth_div",
        style: "mapbox://styles/mapbox/satellite-v9",
        projection: "globe",
        zoom: 1.5,
        center: [0, 20]
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.FullscreenControl());

    map.on("style.load", () => {
        map.setFog({
            color: "rgb(186, 210, 235)",
            "high-color": "rgb(36, 92, 223)",
            "horizon-blend": 0.02,
            "space-color": "rgb(11, 11, 25)",
            "star-intensity": 0.6
        });
    });

    return map;
}

function addLocationMarkers(map, locations) {
    locations.forEach((location) => {
        if (!Array.isArray(location.coords) || location.coords.length !== 2) return;

        const [lat, lon] = location.coords;
        if (
            isNaN(lat) ||
            isNaN(lon) ||
            lat < -90 ||
            lat > 90 ||
            lon < -180 ||
            lon > 180
        )
            return;

        const el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundImage = `url(${location.image})`;
        el.style.width = "40px";
        el.style.height = "40px";
        el.style.backgroundSize = "cover";
        el.style.borderRadius = "50%";
        el.style.cursor = "pointer";

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
      <h3>${location.name}</h3>
      <p>${location.description}</p>
      <a href="${location.link}" target="_blank">View Image</a>
    `);

        new mapboxgl.Marker(el).setLngLat([lon, lat]).setPopup(popup).addTo(map);
    });
}

function populateSidebar(map, locations) {
    const sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = "";

    const countries = [...new Set(locations.map((location) => location.country))];

    countries.forEach((country, index) => {
        const countryLocations = locations.filter(
            (location) => location.country === country
        );
        const countrySection = document.createElement("div");
        countrySection.className = "country-section";
        countrySection.innerHTML = `
      <div class="country-header" data-country="${country}">
        <span class="country-name">${country}</span>
        <span class="location-count">${countryLocations.length}</span>
      </div>
      <div class="location-list" id="country-${index}">
        ${countryLocations
                .map(
                    (location) => `
          <div class="location-item">
            <h3>${location.name}</h3>
            <img src="${location.image}" alt="${location.name}" loading="lazy">
            <p>${location.description}</p>
            <div class="button-group">
              <button class="btn btn-primary view-on-map" data-lat="${location.coords[0]}" data-lon="${location.coords[1]}">View on Map</button>
              <a href="${location.link}" target="_blank" class="btn btn-secondary">View Image</a>
            </div>
          </div>
        `
                )
                .join("")}
      </div>
    `;
        sidebar.appendChild(countrySection);
    });

    document.querySelectorAll(".country-header").forEach((header) => {
        header.addEventListener("click", () => {
            const locationList = header.nextElementSibling;
            locationList.style.display =
                locationList.style.display === "block" ? "none" : "block";
        });
    });

    document.querySelectorAll(".view-on-map").forEach((button) => {
        button.addEventListener("click", (e) => {
            const lat = parseFloat(e.target.dataset.lat);
            const lon = parseFloat(e.target.dataset.lon);
            if (!isNaN(lat) && !isNaN(lon)) {
                map.flyTo({
                    center: [lon, lat],
                    zoom: 5,
                    essential: true
                });
                if (window.innerWidth < 768) {
                    toggleSidebar();
                }
            }
        });
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const earthDiv = document.getElementById("earth_div");
    sidebar.classList.toggle("collapsed");

    if (window.innerWidth >= 768) {
        earthDiv.style.left = sidebar.classList.contains("collapsed")
            ? "0"
            : "var(--sidebar-width)";
    } else {
        earthDiv.style.left = "0";
    }

    setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
    }, 300);
}

function handleResponsiveDesign(map) {
    window.addEventListener("resize", () => {
        const sidebar = document.getElementById("sidebar");
        const earthDiv = document.getElementById("earth_div");

        if (window.innerWidth >= 768) {
            earthDiv.style.left = sidebar.classList.contains("collapsed")
                ? "0"
                : "var(--sidebar-width)";
        } else {
            earthDiv.style.left = "0";
        }

        map.resize();
    });
}

function initializeMapbox() {
    const scrambledToken =
        "Z29LYWRIb3VIY0t5OXhPVTJDWTM2YS5RZmljSGU2TmpkMkVUYTVNM2F5Y3pOMkFqYTJsWGF6a0dNdE5tSTZJU1lpd2lJb05XYXlObmFpb2pJMUp5ZS5rcA==";
    mapboxgl.accessToken = atob(scrambledToken).split("").reverse().join("");

    const map = initMap();

    document.addEventListener("DOMContentLoaded", () => {
        map.on("load", () => addLocationMarkers(map, locations));
        populateSidebar(map, locations);

        const toggleButton = document.getElementById("toggle-sidebar");
        toggleButton.addEventListener("click", () => toggleSidebar());

        handleResponsiveDesign(map);
    });
}
function openNewPage1() {
    // Get the URL of the page you want to open
    const newPageUrl = "Wether/index.html"; // Replace with your desired URL

    // Open the new page in a new tab
    window.open(newPageUrl);
}

initializeMapbox();

