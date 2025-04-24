const translations = {
  kz: { title: "Менің тапсырмалар тізімім", placeholder: "Жаңа тапсырма қосу", addButton: "Қосу", deleteButton: "Жою" },
  ru: { title: "Мой список дел",                 placeholder: "Добавить новую задачу", addButton: "Добавить", deleteButton: "Удалить" }
};

let currentLang = "ru";

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.getElementById("title").textContent      = t.title;
  document.getElementById("taskInput").placeholder = t.placeholder;
  document.getElementById("addTaskBtn").textContent = t.addButton;
  document.querySelectorAll(".delete-btn").forEach(btn => btn.textContent = t.deleteButton);
}

document.addEventListener("DOMContentLoaded", () => {
  const taskInput  = document.getElementById("taskInput");
  const taskList   = document.getElementById("taskList");
  const addTaskBtn = document.getElementById("addTaskBtn");

  function createTask(text) {
    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
      <span>${text}</span>
      <button class="delete-btn">${translations[currentLang].deleteButton}</button>
    `;
    li.querySelector("button").onclick = () => li.remove();
    taskList.appendChild(li);
  }

  addTaskBtn.addEventListener("click", () => {
    const txt = taskInput.value.trim();
    if (!txt) return;
    createTask(txt);
    taskInput.value = "";
  });

  setLanguage(currentLang);
});
