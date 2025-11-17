// ----- Simple in-memory events list (for first release demo) -----
let EVENTS = [
  {
    id: crypto.randomUUID(),
    title: "Project Check-in",
    date: "2025-11-20",
    location: "Lab A",
    description: "Milestone sync with the team."
  }
];

// ----- DOM elements -----
const tbody = document.getElementById("eventsTbody");
const countBadge = document.getElementById("countBadge");
const modal = document.getElementById("eventModal");
const form = document.getElementById("eventForm");
const modalTitle = document.getElementById("modalTitle");
const btnNew = document.getElementById("btnNew");
const btnCancel = document.getElementById("btnCancel");

// ----- Helper: escape HTML -----
function escapeHtml(str) {
  if (!str) return "";
  return String(str).replace(/[&<>"']/g, (m) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return map[m];
  });
}

// ----- Modal controls -----
function openModal(isEditing = false, data = null) {
  if (!modal || !form) return;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  // Reset form first
  form.reset();

  // Fill form if editing
  document.getElementById("id").value = data?.id || "";
  document.getElementById("title").value = data?.title || "";
  document.getElementById("date").value = data?.date || "";
  document.getElementById("location").value = data?.location || "";
  document.getElementById("description").value = data?.description || "";

  modalTitle.textContent = isEditing ? "Edit Event" : "New Event";

  // Move focus to first input
  setTimeout(() => {
    const titleInput = document.getElementById("title");
    if (titleInput) titleInput.focus();
  }, 0);
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

// ----- Render events table -----
function render() {
  if (!tbody) return;

  tbody.innerHTML = "";

  EVENTS.forEach((ev) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${escapeHtml(ev.title)}</strong></td>
      <td>${ev.date}</td>
      <td>${escapeHtml(ev.location)}</td>
      <td>
        <button class="btn btn-ghost" data-edit="${ev.id}">Edit</button>
        <button class="btn btn-ghost" data-delete="${ev.id}">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  if (countBadge) {
    countBadge.textContent = `${EVENTS.length} total`;
  }
}

// ----- Handle create/edit submit -----
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.id) {
      // Create new event
      data.id = crypto.randomUUID();
      EVENTS.push(data);
    } else {
      // Update existing event
      const index = EVENTS.findIndex((ev) => ev.id === data.id);
      if (index !== -1) {
        EVENTS[index] = data;
      }
    }

    closeModal();
    render();
  });
}

// ----- Handle edit/delete buttons -----
if (tbody) {
  tbody.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const editId = target.getAttribute("data-edit");
    const deleteId = target.getAttribute("data-delete");

    if (editId) {
      const ev = EVENTS.find((x) => x.id === editId);
      if (ev) openModal(true, ev);
    } else if (deleteId) {
      const confirmDelete = window.confirm("Are you sure you want to delete this event?");
      if (confirmDelete) {
        EVENTS = EVENTS.filter((x) => x.id !== deleteId);
        render();
      }
    }
  });
}

// ----- New / Cancel buttons -----
if (btnNew) {
  btnNew.addEventListener("click", () => openModal(false));
}

if (btnCancel) {
  btnCancel.addEventListener("click", () => closeModal());
}

// ----- Open modal if ?new=1 on events.html -----
const params = new URLSearchParams(window.location.search);
if (params.get("new") === "1") {
  openModal(false);
}

// ----- Initial render -----
render();
