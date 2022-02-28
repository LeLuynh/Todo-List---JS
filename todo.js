const nametitle = document.querySelector('.input-name');
const btnadd = document.querySelector(".icon-plus");
const todoList = document.querySelector(".item-todo");
const allCout = document.querySelector(".all-count");


function edValueKey() {
    var nameinput = nametitle.value;
    const spanicon = `<i class="fa-solid fa-circle-plus"></i>`
    btnadd.style.display = "none"
    if (nameinput.trim() != 0) {
        btnadd.innerHTML = spanicon;
        btnadd.style.display = "block"
    }
}


btnadd.onclick = () => {
    // lay gia tri input nhap vao
    var username = nametitle.value;
    // luu tru vao bien cuc bo
    let getStores = localStorage.getItem("name todo");
    if (getStores == null) {
        //new getstores == null thi tao 1 mang rong
        listArray = [];
    } else {
        //nguoc lai chuyen json tu string sang obj
        listArray = JSON.parse(getStores);
    }
    listArray.push(username);
    //chuyen json tu obj sang arr
    localStorage.setItem("name todo", JSON.stringify(listArray));

    showTask();
}
showTask();

// ham hien thi ra man hinh
function showTask() {
    // luu tru vao bien cuc bo
    let getStores = localStorage.getItem("name todo");
    if (getStores == null) {
        //new getstores == null thi tao 1 mang rong
        listArray = [];
    } else {
        //nguoc lai chuyen json tu string sang obj
        listArray = JSON.parse(getStores);
    }
    // paddingTask.textContent = listArray.length;
    var newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li class="name-item">${element}<span class="icon-add">
            <i class="fa-solid fa-pencil" onclick="editItem(${element})"></i>
            <i class="fa-solid fa-trash-can icon-remove" onclick="deleteItem(${index})";></i>
            </span>
        </li>`;

        const nameItem = document.querySelector(".name-item");
        console.log(element)
    });
    todoList.innerHTML = newLiTag;
    btnadd.style.display = "none"
    var coutItem = `<p>You are ${listArray.length} item
    <span class="footer"><button type="button" class="btn btn-clear" onclick="deleteAll()">Clear</button></span>
    </p>`
    allCout.innerHTML = coutItem;

    if (listArray.length == 0) {
        document.getElementById("myitem").style.display = 'none';
    } else {
        document.getElementById("myitem").style.display = 'block';
    }
    nametitle.value = "";
}

// for (var i = 0; i < nameItem.length; i++) {
//     nameItem[i].onclick = function() {
//         console.log(this.innerHTML)
//     }
// }

//ham edit
function editItem(element) {
    let getStores = localStorage.getItem("name todo");
    listArray = JSON.parse(getStores);
    //const findItem = listArray.find(element => element = index);
    console.log(element.innerHTML)
}
//ham xoa item
function deleteItem(index) {
    let getStores = localStorage.getItem("name todo");
    listArray = JSON.parse(getStores);
    listArray.splice(index, 1);
    localStorage.setItem("name todo", JSON.stringify(listArray));

    showTask()
}
const deleteAllItem = document.getElementsByClassName("btn-clear");
// xoa tat ca
function deleteAll() {
    listArray = [];
    localStorage.setItem("name todo", JSON.stringify(listArray));
    showTask();
}