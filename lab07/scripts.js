document.addEventListener("DOMContentLoaded", function () {
    // รับอ้างอิงไปยัง HTML elements ที่ใช้
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");

    // อาร์เรย์สำหรับเก็บรายการ Todo
    let todos = [];

    // ฟังก์ชั่นเพิ่มรายการ Todo
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            // สร้างอ็อบเจ็กต์ Todo และเพิ่มลงในอาร์เรย์
            const todoItem = {
    
                text: todoText,
                completed: false,
            };
            todos.push(todoItem);
             // รีเรนเดอร์รายการ Todo ใหม่และล้าง input
            renderTodoList();
            todoInput.value = "";
        }
    }

    // ฟังก์ชั่นลบรายการ Todo
    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodoList();
    }

    // ฟังก์ชั่นตรวจสอบ/ยกเลิกการเสร็จสิ้นรายการ Todo
    function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        renderTodoList();
    }

    // ฟังก์ชั่นแสดงรายการ Todo บนหน้าเว็บ
    function renderTodoList() {
        // ล้าง HTML ของรายการ Todo ทั้งหมด
        console.log(todos);
        todoList.innerHTML = "";

        // วนลูปทุกรายการ Todo และสร้าง HTML element สำหรับแต่ละรายการ
        for (let i = 0; i < todos.length; i++) {
            const todoItem = todos[i];
            const listItem = document.createElement("li");

            // ตั้งข้อความของรายการ Todo
            listItem.textContent = todoItem.text;

            // ตรวจสอบว่ารายการ Todo เสร็จสิ้นหรือไม่ และเพิ่มคลาสตาม
            if (todoItem.completed) {
                listItem.classList.add("completed");
            }

            // สร้างปุ่มลบและปุ่มตรวจสอบ/ยกเลิก
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "ลบ";
            deleteButton.addEventListener("click", () => deleteTodo(i));

            const completeButton = document.createElement("button");
            completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";
            completeButton.addEventListener("click", () => toggleComplete(i));

            // เพิ่มปุ่มลบและปุ่มตรวจสอบ/ยกเลิกเข้าไปใน HTML element ของรายการ Todo
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);

            // เพิ่ม HTML element ของรายการ Todo เข้าไปในรายการ Todo ทั้งหมด
            todoList.appendChild(listItem);
        }
    }

    // ปุ่ม "เพิ่ม"
    addButton.addEventListener("click", addTodo);

    // Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });
    
    // แสดงรายการ Todo คร้ังแรก
        renderTodoList();

});