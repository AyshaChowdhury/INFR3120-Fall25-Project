# INFR3120-Fall25-Project

INFR 3120 Fall 2025 Project Part 1

Timely — Event Planner Web Application

**Overview**

Timely is a simple web application designed to help users create, view, edit, and delete events. This first release focuses on demonstrating full CRUD functionality using HTML, CSS and JavaScript without a backend database. The application aims to provide a clean and intuitive interface for managing personal, academic or community events.


**Features**
*Create Events*
Users can create new events with a title, date, location and description

*View Events*
All events are displayed in a dashboard table with clear formatting

*Edit Events*
Users can update event details through a modal form

*Delete Events*
Events can be removed from the dashboard with confirmation

*Responsive UI*
Built with custom CSS to maintain usability across screen sizes


**Project Structure**

/Public
  |--index.html        -> Landing page with project intro and navigation
  │--events.html       -> Event dashboard + event creation/editing modal
  │--styles.css        -> Styling for layout, components, tables, modal, etc.
  │--app.js            -> JavaScript controlling CRUD logic and UI updates
  │--assets/logo.png   -> Team logo


**File Explanation**

*index.html*
- Serves as the landing page of the application
- Displays the team logo and project name
- Includes a brief description of Timely’s purpose
- Contains navigation buttons:
  - View Events
  - Create Event
- Introduces the project features for this release

*events.html*
- Displays all existing events in a table layout
- Shows the total number of events using a badge
- Provides Edit and Delete buttons for each event
- Includes a modal popup with a form for adding or editing events
- Form fields include:
  - Title
  - Date
  - Location
  - Description

*styles.css*
This file provides all the visual design for the project:
- Layout (grid system, spacing, container sizes)
- Team branding (logo area, color palette)
- Buttons (primary and ghost styles)
- Table design (rounded rows, spacing)
- Modal styling (overlay, card layout)
- Typography (Google Fonts: Inter)
- Responsive breakpoints for mobile devices


*app.js*
This file contains all the application logic and main functionality:

1. Event Storage
Events are stored temporarily in an in-memory JavaScript array named EVENTS.
Each event contains:
- id 
- title
- date
- location
- description

2. Rendering Events
- The render() function updates the events table dynamically.
- It clears the <tbody> and regenerates rows based on the EVENTS array.
- Updates the event count badge.

3. Creating & Editing Events
- The modal form is used for both adding and editing.
- If the form submits without an ID, a new event is created.
- If the form submits with an existing ID, that event is updated.

4. Deleting Events
- Clicking a Delete button prompts the user for confirmation.
- If confirmed, the event is removed from the EVENTS array.

5. Modal Controls
- openModal() and closeModal() show and hide the modal.
- Form fields are populated automatically when editing.

6. Event Listeners
- The script listens for:
  - Form submission
  - Edit/Delete button clicks
  - “Create Event” button
  - “Cancel” button inside the modal
  - URL query ?new=1 to auto-open the form on page load
 
**Technology Used**
- HTML5 – Structure and layout
- CSS3 – Custom styling and responsive design
- JavaScript – Application logic, DOM manipulation
- Google Fonts (Inter) – Typography


Team Members & Contributions — Part 1
- Aysha Chowdhury
    - Repository creation and collaborator permissions
    - Documentation writing
    - Project description and structure explanation

- Chidimma Onumaegbu
    - Frontend development (HTML/CSS)
    - UI design for landing page, events dashboard, and modal
    - Asset and layout integration

- Tanzib Riasad Krishty
    - Cloud deployment setup (planned for Part 2)
    - GitHub repository setup support
    - Final integration and testing

