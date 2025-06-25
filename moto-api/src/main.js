document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/trips")
    .then((res) => res.json())
    .then((trips) => {
      const tripList = document.getElementById("tripList");

      if (trips.length === 0) {
        tripList.innerHTML = "<li class='trip-list__item'>No trips found.</li>";
        return;
      }

      trips.forEach((trip, index) => {
        const li = document.createElement("li");
        li.className = "trip-list__item";
        li.textContent = `${trip.title} - ${trip.start_location} ➜ ${trip.end_location}`;
        li.style.animationDelay = `${index * 0.1}s`; // ✅ fix index reference
        tripList.appendChild(li);
      });
    })
    .catch((err) => {
      console.error("Error loading trips:", err);
      Toastify({
        text: "❌ Failed to load trips",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#dc3545",
      }).showToast();
    });
});

const form = document.getElementById("newTripForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newTrip = {
    title: document.getElementById("title").value,
    start_location: document.getElementById("start_location").value,
    end_location: document.getElementById("end_location").value,
    description: document.getElementById("description").value,
  };

  try {
    const res = await fetch("http://localhost:3000/api/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTrip),
    });

    const data = await res.json();

    if (res.ok) {
      Toastify({
        text: "✅ Trip created successfully!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#28a745",
      }).showToast();
      setTimeout(() => window.location.reload(), 1500);
    } else {
      Toastify({
        text: "❌ Failed to create trip: " + data.error,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#dc3545",
      }).showToast();
    }
  } catch (err) {
    console.error("Error creating trip:", err);
    Toastify({
      text: "🚫 Server error. Try again later.",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "#ff0000",
    }).showToast();
  }
});
