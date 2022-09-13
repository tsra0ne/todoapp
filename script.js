const tasksubmit = document.querySelector('.tasksubmit');
const taskinput = document.querySelector('.taskinput');
const todos = document.querySelector('.todos');

function addToDo() {
  const div = document.createElement('div');
  const p = document.createElement('p');
  const deletebtn = document.createElement('button');
  const donebtn = document.createElement('button');

  div.classList.add('todo');

  p.innerText = `${taskinput.value}`;
  div.append(p);

  deletebtn.innerText = '❌';
  deletebtn.classList.add('delete');

  deletebtn.addEventListener('click', () => {
    deletebtn.parentElement.remove();
  });

  div.append(deletebtn);

  donebtn.innerText = '✔️';
  donebtn.classList.add('done');

  donebtn.addEventListener('click', () => {
    p.style.textDecoration = 'line-through';
    p.style.textDecorationColor = '#46c46e';
    p.style.textDecorationThickness = '3px';
  });

  div.append(donebtn);

  todos.append(div);
}

tasksubmit.addEventListener('click', () => {
  addToDo();
});