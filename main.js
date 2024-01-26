// submitting it
form = document.forms.list;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    list_item = document.getElementById("list_tasks");
    let list = document.createElement("li");
    let listcontent = document.createTextNode(form.task.value);
    list.appendChild(listcontent);
    list_item.appendChild(list);
    form.task.value = "";
});

// marking it as complete
const ul = document.getElementById("list_tasks");
let complete = ul.addEventListener("click", function (e) {
    e.target.classList.toggle("checked");
    console.log('task complete!')
});

//if three tasks are completed, send alert to user to take break
// function threeTimes() = {
//     if (complete) {
//         let counter = 0;
//         counter++;
//         console.log({ counter })

//         if (counter === 3) {
//             alert("Hey! You did so much today. Remember to take a break!")
//             counter = 0;
//         }
//     }
// }

// threeTimes();
