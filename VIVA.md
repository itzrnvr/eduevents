# VIVA CHEAT SHEET - Read this before the viva!

This file has the questions the teacher is most likely to ask, with short,
plain-English answers you can memorize. Do NOT read it like a script - just
make sure you understand each answer in your own words.

---

## PART A - The big picture (the teacher WILL ask this)

### Q1. What is your project about?
**Answer:** "It is a Campus Event Registration Portal called EduEvents.
Students can browse campus events, see details of any event, register
for an event by filling a form, and see their saved bookings."

### Q2. Why did you choose this topic?
**Answer:** "We wanted a project with a clear user flow - browse, view,
register, confirm. It is small enough to finish and test fully, but it
shows a real journey that the user walks through, which is what was asked."

### Q3. How is this related to Software Project Management?
**Answer (IMPORTANT - the teacher wants to hear this):**
"This project is NOT just about coding. We applied the SPM steps on it:
  1. We wrote down the requirements and the scope.
  2. We broke the work into tasks (one per page).
  3. We divided the tasks between the two members.
  4. We used version control (GitHub) to manage our code.
  5. We tested every page and wrote down test cases.
  6. We documented the project in the README.
So the project is small, but the process we followed is the same process
you would use on a bigger project."

### Q4. What did you learn from this project?
**Answer:** "We learned how to PLAN before coding - to decide scope, split
work, and write the file structure first. We also learned HTML, CSS and
JavaScript basics, how to validate a form, and how localStorage works."

### Q5. How did you make this? (Process)
**Answer:**
"First we decided the pages and the user flow on paper. Then we created a
folder structure and a shared CSS file and a shared data file. Then each
member built their assigned pages. Finally we tested the full flow together
and wrote the documentation."

---

## PART B - Technical questions (be ready to open the code)

### Q6. What technologies did you use?
**Answer:** "HTML for the structure, CSS for the styling, and JavaScript
for the interactivity. We did NOT use any framework - that was a choice,
so we could explain every line. We use localStorage to save bookings
inside the browser."

### Q7. Open the code and explain a page.
**Pick `events.html` - it is the easiest to explain.**
Say:
- The HTML at the top defines the title and the filter buttons.
- There is an empty `<div id="events-grid">` where the events will appear.
- At the bottom, we load `data.js` (our events), `main.js` (navbar/footer),
  and then our own `<script>`.
- The `showEvents()` function loops through the EVENTS array and builds one
  card per event using string concatenation, then sets `innerHTML`.
- The `filterEvents()` function is called when a filter button is clicked;
  it just calls `showEvents()` with the chosen category.
- On first load we call `showEvents("All")` so all events appear.

### Q8. Where is your data stored?
**Answer:** "There are two kinds of data:
  1. The events themselves are in `js/data.js` as a JavaScript array.
     That is our 'database' for the demo.
  2. The user's bookings are saved in the browser's localStorage.
     When you click Register, we create a booking object, push it into
     the array we read from localStorage, and write it back.
  We chose localStorage so we do not need a server for the demo. A real
  version would use a backend database, but that was out of scope."

### Q9. What is localStorage?
**Answer:** "It is a small storage area built into the browser. You can
save text in it using a key. We use the key `edu_events_bookings`. The
data stays there even if you close or refresh the page. It is per-browser,
so it is not shared between devices - which is fine for a demo."

### Q10. How does the form validation work?
**Answer (open `register.html`):**
"The form's `onsubmit` calls our `validateAndSubmit()` function. That
function:
  - Reads each field's value.
  - Checks each one (name length, email contains @ and ., phone is exactly
    10 digits, dropdowns are not empty).
  - If a field is invalid, it adds the class `invalid` to that field's
    group, which makes the red error message appear.
  - If anything is invalid, it returns false to stop the form.
  - If all valid, it saves the booking and goes to the confirmation page."

### Q11. How does the website know which event to show on the detail page?
**Answer:** "The detail page is `event.html`. When you click an event on
the events page, the link is `event.html?id=3` - the id is passed in the
URL. On the detail page we read that id using `URLSearchParams`, then look
up the matching event in the EVENTS array. This is how one page can show
many different events."

### Q12. Why is there one shared CSS file and one shared data file?
**Answer:** "To avoid repeating code. If we put the same styles on every
page, fixing a colour would mean editing 6 files. With one `style.css`,
we change it once and it updates everywhere. Same for `data.js` - all
pages share the same event list and the same helper functions."

### Q13. How does the navbar appear on every page?
**Answer:** "It is built by `js/main.js`. On every page, when the page
finishes loading, the script creates a `<nav>` element with the links and
inserts it at the top of the body. That way we write the navbar once and
it shows on all 6 pages."

### Q14. What is a booking ID and how is it made?
**Answer:** "When a booking is saved, we generate an id using the current
timestamp plus a small random number, like `EDU1688543210123`. We show
this id on the confirmation page. It is unique enough for a demo."

---

## PART C - SPM-specific questions

### Q15. What was your scope? What did you leave OUT?
**Answer:** "In scope: browse, filter, view detail, register, confirm,
view bookings. Out of scope on purpose: login/authentication, payment
gateway, real server database, admin panel. We wrote down the out-of-scope
items so it was clear we made a deliberate decision, not just forgot them."

### Q16. How did you split the work in your team?
**Answer (change to match YOUR team):**
"Person A built the home page, the events list, and the event detail page,
plus the shared CSS and the data file. Person B built the register form,
the confirmation page, and the My Bookings page, plus the navbar script
and the documentation. We tested everything together."

### Q17. What risks did you plan for?
**Answer:**
"One of us was less familiar with web development, so the main risk was
scope creep - trying to build too much. We handled this by keeping the
project small and not using any framework. Another risk was losing work,
which is why we used GitHub to commit often."

### Q18. How did you test the project?
**Answer:** "We tested manually by walking through the full flow. The
README has a table of 10 test cases - things like 'submit empty form',
'enter email without @', 'refresh and check booking still there'. We went
through each one and confirmed it works."

### Q19. Did you use version control?
**Answer:** "Yes, we used Git and GitHub. We committed work in small
steps, with messages like 'add registration form', 'add validation',
'fix filter button styling'. This is a standard SPM practice."

### Q20. If you had more time, what would you add?
**Answer:** "A login system so each student sees only their own bookings,
a real backend database instead of localStorage, an admin panel to add or
edit events, and email confirmation when someone registers."

---

## PART D - Demo walkthrough (practice this 2-3 times before viva)

Do these steps in order, out loud:

1. Open `index.html` - say "This is the home page, it shows featured events."
2. Click "Browse Events" - say "This lists all events, with filters."
3. Click a category filter - say "The list updates to only that category."
4. Click any event - say "This is the detail page for one event.
   The id comes from the URL."
5. Click "Register Now" - say "This is the registration form."
6. Click submit WITHOUT filling anything - say "Validation stops empty
   submissions and shows error messages."
7. Fill the form with one bad email - say "See, it caught the bad email."
8. Fill everything correctly and submit - say "It saved the booking and
   took us to the confirmation page with a booking ID."
9. Click "My Bookings" - say "Here is the saved booking."
10. Refresh the page - say "The booking is still here because we used
    localStorage."

---

## PART E - Quick definitions to memorize

- **HTML** = the structure/content of a web page (text, images, buttons).
- **CSS** = the styling (colours, layout, spacing).
- **JavaScript** = the programming language that runs in the browser and
  makes the page interactive.
- **localStorage** = a small storage area in the browser; data stays after
  refresh.
- **Validation** = checking that the user filled the form correctly before
  accepting it.
- **URL parameter** = the `?id=3` part of a URL; used to pass information
  between pages.
- **Array** = an ordered list of values, e.g. our list of events.
- **Function** = a reusable block of code that does one job.
- **Scope** = what the project will and will NOT include.
- **Work breakdown** = splitting the project into smaller tasks.
- **User flow** = the path the user takes through the website.

---

## Final tip

If the teacher asks something you don't know, do NOT make things up.
Say: "I'm not 100% sure about that, but I think it works like..." and
then reason out loud. Honest reasoning beats a confident wrong answer.

Good luck!
