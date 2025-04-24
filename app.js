// 🔠 Переводы на два языка
const translations = {
    kz: {
      title: "Менің тапсырмалар тізімім",
      placeholder: "Жаңа тапсырма қосу",
      addButton: "Қосу",
      deleteButton: "Жою"
    },
    ru: {
      title: "Мой список дел",
      placeholder: "Добавить новую задачу",
      addButton: "Добавить",
      deleteButton: "Удалить"
    }
  };
  
  // 🌐 Установка языка
  function setLanguage(lang) {
    const t = translations[lang];
  
    document.querySelector("#title").innerText = t.title;
    document.querySelector("#taskInput").placeholder = t.placeholder;
    document.querySelector("#addButton").innerText = t.addButton;
  
    document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.innerText = t.deleteButton;
    });
  
    localStorage.setItem("lang", lang);
  }
  
  // ✅ Добавление задачи
  function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;
  
    const taskList = document.getElementById("taskList");
  
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
  
    const span = document.createElement("span");
    span.innerText = taskText;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = translations[getCurrentLang()].deleteButton;
    deleteBtn.onclick = () => taskItem.remove();
  
    taskItem.appendChild(span);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
  
    input.value = "";
  }
  
  // 🧠 Получить текущий язык
  function getCurrentLang() {
    return localStorage.getItem("lang") || "ru";
  }
  
  // ▶️ Запускаем при загрузке страницы
  window.onload = () => {
    setLanguage(getCurrentLang());
  
    document.getElementById("addButton").addEventListener("click", addTask);
  };
  