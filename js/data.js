/* ============================================================
   EduEvents - Shared Data Layer
   ------------------------------------------------------------
   This file holds:
     1) The list of events (our "database")
     2) Helper functions to read/write bookings in localStorage
   Every page loads this file so the data is the same everywhere.
   ============================================================ */

// Our "database" of events. In a real project this would come
// from a server, but for the demo we keep it in a JS array.
const EVENTS = [
  {
    id: 1,
    title: "Hackathon 2026",
    category: "Technical",
    date: "2026-07-20",
    time: "09:00 AM",
    venue: "Main Auditorium",
    price: 0,
    seats: 120,
    image: "💻",
    description: "A 24-hour coding marathon. Form teams, build projects, win prizes. Open to all departments."
  },
  {
    id: 2,
    title: "AI & ML Workshop",
    category: "Workshop",
    date: "2026-07-25",
    time: "10:00 AM",
    venue: "CS Lab 2",
    price: 50,
    seats: 60,
    image: "🤖",
    description: "Hands-on introduction to machine learning using Python. Laptops required. Certificate provided."
  },
  {
    id: 3,
    title: "Cultural Night",
    category: "Cultural",
    date: "2026-08-02",
    time: "06:00 PM",
    venue: "Open Air Theatre",
    price: 100,
    seats: 300,
    image: "🎭",
    description: "An evening of music, dance and drama performed by students. Food stalls available."
  },
  {
    id: 4,
    title: "Inter-Department Football",
    category: "Sports",
    date: "2026-07-28",
    time: "04:00 PM",
    venue: "Sports Ground",
    price: 0,
    seats: 50,
    image: "⚽",
    description: "Knockout tournament between departments. Register your team of 11."
  },
  {
    id: 5,
    title: "Web Development Bootcamp",
    category: "Workshop",
    date: "2026-08-05",
    time: "11:00 AM",
    venue: "IT Lab 1",
    price: 75,
    seats: 40,
    image: "🌐",
    description: "Build and deploy your first website using HTML, CSS and JavaScript in one day."
  },
  {
    id: 6,
    title: "Robotics Challenge",
    category: "Technical",
    date: "2026-08-10",
    time: "09:30 AM",
    venue: "Innovation Hall",
    price: 150,
    seats: 25,
    image: "🤖",
    description: "Design a robot to complete an obstacle course. Components provided. Team of up to 4."
  }
];

/* ---------- Helper functions for bookings ---------- */

// localStorage is a small storage area inside the browser.
// We save all bookings under the key "edu_events_bookings".
const STORAGE_KEY = "edu_events_bookings";

// Read all bookings from localStorage. Returns an array.
function getBookings() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === null) {
    return [];                 // nothing saved yet
  }
  return JSON.parse(raw);      // convert text back to array
}

// Save the bookings array back to localStorage.
function saveBookings(bookings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

// Add a new booking. Returns the saved booking (with a booking id).
function addBooking(booking) {
  const bookings = getBookings();
  // Generate a simple unique id: current timestamp + random number
  booking.id = "EDU" + Date.now() + Math.floor(Math.random() * 100);
  booking.bookedAt = new Date().toISOString();
  bookings.push(booking);
  saveBookings(bookings);
  return booking;
}

// Find a single event by its id. Returns the event object or null.
function getEventById(id) {
  return EVENTS.find(function (e) { return e.id === Number(id); }) || null;
}

// Read a query parameter from the URL, e.g. event.html?id=3 -> getParam("id") = "3"
function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}
