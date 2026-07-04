# EduEvents - Campus Event Registration Portal

A Software Project Management (SPM) summer term project.

A simple website where students can browse campus events, see details, and
register for them. Built with plain HTML, CSS and JavaScript - no framework,
no backend. All bookings are stored in the browser using `localStorage`.

---

## 1. Project Objective

Build a small, working website that demonstrates a clear user flow
(browse -> view -> register -> confirm -> track), and to plan and document
it the way a real software project would be planned in an SPM course.

The aim is NOT to build something fancy. The aim is to show the full
software lifecycle on a project that is small enough to fully understand:

  - Plan it
  - Break it into pages / tasks
  - Assign roles inside the team
  - Build it
  - Test it
  - Document it

---

## 2. Scope

### In scope
- Browse a list of campus events
- Filter events by category
- View the full details of one event
- Fill in a registration form (with validation)
- See a confirmation page with a booking ID
- View all saved bookings

### Out of scope (clearly stated in viva)
- No user login / authentication
- No payment gateway (prices are shown only)
- No real server or database (data lives in the browser)
- No admin panel to add/remove events

Stating what is OUT of scope is part of good project management - it shows
we made a conscious decision about what to build in the time we had.

---

## 3. User Flow

The website has one main user journey:

```
Home  ->  Events list  ->  Event detail  ->  Registration form
   |                                                      |
   |                                                      v
   +---------------------------------------->  Confirmation  ->  My Bookings
```

This is the "flow" the teacher asked for. Every page links to the next
logical step, so the user never gets stuck.

---

## 4. File Structure

```
eduevents/
  index.html            Home page (welcome + featured events)
  events.html           Browse all events, filter by category
  event.html            Details of one event (uses ?id=)
  register.html         Registration form with validation
  confirmation.html     Shows the booking confirmation + booking ID
  my-bookings.html      Lists all saved bookings
  css/
    style.css           All styles (one shared stylesheet)
  js/
    data.js             Event list + localStorage helpers (shared)
    main.js             Builds the navbar and footer (shared)
  README.md             This file (project report)
  VIVA.md               Viva Q&A cheat sheet (read this before viva!)
```

---

## 5. Tech Stack (and why)

| Choice            | Why we picked it                                  |
|-------------------|---------------------------------------------------|
| HTML              | The structure / content of every page             |
| CSS               | The look (colours, layout, spacing)               |
| JavaScript (JS)   | Interactivity - filtering, form check, saving     |
| localStorage      | Saves bookings in the browser, no server needed   |
| No framework      | Easier to explain; we understand every line       |
| GitHub (optional) | Version control - a real PM practice               |

We did NOT use React, Bootstrap, jQuery or any backend. That was a
deliberate choice: we wanted to be able to explain every line in the viva.

---

## 6. How the Data Works (important for viva)

We do NOT have a database. Instead:

1. The list of events lives in `js/data.js` as a JavaScript array called
   `EVENTS`. This is our "database" for the demo.

2. When someone registers, their booking is saved into the browser's
   `localStorage` (a small built-in storage area). This means the booking
   is still there if you refresh the page.

3. The "My Bookings" page reads from `localStorage` and shows the list.

This is enough for a demo. A real version would send the booking to a
server, but that was out of scope for this project.

---

## 7. Roles (team of 2)

This split is just an example - change it to match your team.

| Person    | Pages / tasks                                            |
|-----------|----------------------------------------------------------|
| Person A  | Home, Events list, Event detail; shared CSS; data.js     |
| Person B  | Register form, Confirmation, My Bookings; main.js; docs  |

Both people tested the site together and reviewed each other's code.

---

## 8. Software Project Management activities

These are the SPM activities we did on this project - the teacher may
ask about any of them:

1. **Requirement gathering** - decided what pages and features we need.
2. **Scope statement** - wrote down what is in and out of scope (above).
3. **Work breakdown** - split the work into pages, one task per page.
4. **Task assignment** - divided the pages between the two members.
5. **Version control** - used GitHub to commit work in small steps.
6. **Testing** - manually tested each page and the full flow (see below).
7. **Documentation** - this README + the VIVA cheat sheet.
8. **Risk handling** - kept the scope small so we could finish on time.

---

## 9. Testing

We tested the following scenarios by hand:

| # | Test case                                      | Expected result                         |
|---|------------------------------------------------|-----------------------------------------|
| 1 | Open index.html                                | 3 featured events shown                 |
| 2 | Click "Browse Events"                          | All 6 events shown                      |
| 3 | Click "Workshop" filter                        | Only Workshop events shown              |
| 4 | Click an event                                 | Detail page shows correct event         |
| 5 | Submit empty form                              | Errors shown, form NOT submitted        |
| 6 | Enter email without "@"                        | Email error shown                       |
| 7 | Enter phone with letters                       | Phone error shown                       |
| 8 | Fill all fields correctly                      | Confirmation page shown with booking ID |
| 9 | Open "My Bookings"                             | Saved booking appears in the list       |
| 10| Refresh the page                               | Bookings still there (localStorage)     |

---

## 10. How to run it

Just open `index.html` in any browser (Chrome, Edge, Firefox). That's it -
no installation, no server.

For the demo, do this flow live:

1. Open `index.html` -> show the home page.
2. Click "Browse Events" -> show the list and the filters.
3. Click any event -> show its details.
4. Click "Register Now" -> fill the form, show validation by leaving
   fields empty first.
5. Submit -> show the confirmation page with the booking ID.
6. Click "My Bookings" -> show the saved booking.
7. Refresh the page -> show the booking is still there.

---

## 11. What we learned

- How to plan a project before coding (scope, flow, file structure).
- How to split work between team members.
- How to build a multi-page website using HTML/CSS/JS.
- How to use `localStorage` to keep data after refresh.
- How to validate a form on the client side.
- How to test a website by walking through the user flow.
- How version control (GitHub) helps when working as a team.
