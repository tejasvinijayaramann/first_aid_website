console.log("✅ script.js is connected!");

// -------------------- Emergency Call --------------------
function callEmergency() {
  window.location.href = "tel:100";
}

// -------------------- Find Nearby Hospitals --------------------
function findNearbyHospitals() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      window.open(
        `https://www.google.com/maps/search/hospitals/@${latitude},${longitude},14z`
      );
    });
  } else {
    alert("Geolocation not supported.");
  }
}

// -------------------- Search Products --------------------
function searchProducts() {
  const query = document.getElementById("searchQuery").value.trim();
  if (query) {
    window.open(
      `https://www.amazon.in/s?k=${encodeURIComponent(query)}`,
      "_blank"
    );
    window.open(
      `https://www.flipkart.com/search?q=${encodeURIComponent(query)}`,
      "_blank"
    );
  }
}

// -------------------- Voice Assist Simulation --------------------
function startListening() {
  const status = document.getElementById("voiceStatus");
  status.textContent = "Status: Listening...";
  setTimeout(() => {
    status.textContent = "Status: Idle";
  }, 3000);
}

// -------- Accordion: First Aid --------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const panel = btn.nextElementSibling;

      if (panel.style.maxHeight && panel.style.maxHeight !== "0px") {
        panel.style.maxHeight = null;  // collapse
      } else {
        document.querySelectorAll(".panel").forEach((p) => p.style.maxHeight = null);
        panel.style.maxHeight = panel.scrollHeight + "px"; // expand
      }
    });
  });
});


