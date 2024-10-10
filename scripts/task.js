document
  .querySelector(".tasks__input")
  .addEventListener("keypress", function (evt) {
    const listLenghtn = document.querySelectorAll(".task").length;
    if (listLenghtn === 0) {
      document.querySelector(".deleteAllTasksButton").style.display = "none";
    } else {
      document.querySelector(".deleteAllTasksButton").style.display = "block";
    }

    if (listLenghtn >= 0 && listLenghtn < 10) {
      if (evt.key === "Enter" && this.value.trim() !== "") {
        const taskDescription = this.value.trim();
        const template = document
          .querySelector(".task-template")
          .content.cloneNode(true);
        template.querySelector(".task__text").textContent = taskDescription;

        const deleteButton = template.querySelector(".task__button");
        deleteButton.addEventListener("click", () => {
          const taskItem = deleteButton.closest(".task");
          taskItem.remove();
        });

        const checkbox = template.querySelector(".task__checkbox");
        const textTask = template.querySelector(".task__text");

        checkbox.addEventListener("change", function () {
          if (checkbox.checked) {
            textTask.classList.add("strikethrough");
          } else {
            textTask.classList.remove("strikethrough");
          }
        });
        document.querySelector(".tasks__list").appendChild(template);
        this.value = "";
      } else if (evt.key === "Enter" && this.value.trim() === "") {
        alert("Ошибка, заполните поле");
      }
    } else {
      alert("Кол-во задач ограничено 10 строками");
    }
  });

setInterval(function () {
  const listLenghtn = document.querySelectorAll(".task").length;
  if (listLenghtn === 0) {
    document.querySelector(".deleteAllTasksButton").style.display = "none";
  } else {
    document.querySelector(".deleteAllTasksButton").style.display = "block";
  }
}, 1);

document
  .querySelector(".deleteAllTasksButton")
  .addEventListener("click", () => {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((element) => {
      const checkbox = element.querySelector(".task__checkbox");
      if (checkbox.checked) {
        element.remove();
      }
    });
  });
