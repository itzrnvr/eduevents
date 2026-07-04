/* ============================================================
   EduEvents - Shared UI script
   ------------------------------------------------------------
   This file is loaded on every page. It does two things:
     1) Builds the top navbar and footer (so we don't repeat
        the same HTML on every page).
     2) Marks the current page link as "active".
   ============================================================ */

// Build the navbar and insert it at the top of the page.
function buildNavbar() {
  const current = location.pathname.split("/").pop() || "index.html";

  const links = [
    { href: "index.html",         label: "Home" },
    { href: "events.html",        label: "Events" },
    { href: "my-bookings.html",   label: "My Bookings" }
  ];

  // For each link, mark it active if it matches the current page.
  const linkHtml = links.map(function (l) {
    const active = (l.href === current) ? ' style="background:rgba(255,255,255,0.2);"' : "";
    return '<a href="' + l.href + '"' + active + '>' + l.label + '</a>';
  }).join("");

  const nav = document.createElement("nav");
  nav.className = "navbar";
  nav.innerHTML =
    '<a href="index.html" class="logo">Edu<span>Events</span></a>' +
    '<div class="nav-links">' + linkHtml + '</div>';
  document.body.insertBefore(nav, document.body.firstChild);
}

// Build the footer at the bottom of the page.
function buildFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML =
    "<p>&copy; 2026 EduEvents &middot; Campus Event Registration Portal</p>" +
    "<p>Software Project Management &middot; Summer Term Project</p>";
  document.body.appendChild(footer);
}

// Run both as soon as the HTML finishes loading.
document.addEventListener("DOMContentLoaded", function () {
  buildNavbar();
  buildFooter();
});
