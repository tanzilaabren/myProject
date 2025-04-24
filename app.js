// 1) Найдём элементы на странице
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list  = document.getElementById('todo-list');

// 2) Загрузить сохранённые задачи из localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];
renderTodos();

// 3) Обработчик отправки формы
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  todos.push({ text, done: false });
  saveAndRender();
  input.value = '';
});

// 4) Функция сохранения и перерисовки
function saveAndRender() {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}

// 5) Рендер списка
function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todo, i) => {
    const li = document.createElement('li');
    li.className = todo.done ? 'completed' : '';
    li.innerHTML = `
      <span class="text">${todo.text}</span>
      <span class="todo-btns">
        <button data-action="toggle" title="Выполнить">✓</button>
        <button data-action="delete" title="Удалить">🗑</button>
      </span>
    `;
    // Кнопки «выполнить» и «удалить»
    li.querySelector('[data-action="toggle"]').addEventListener('click', () => {
      todos[i].done = !todos[i].done;
      saveAndRender();
    });
    li.querySelector('[data-action="delete"]').addEventListener('click', () => {
      todos.splice(i, 1);
      saveAndRender();
    });
    list.append(li);
  });
}
