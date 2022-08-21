<template>
  <div>
    <!-- Toolbar -->
    <nav class="toolbar" role="banner">
      <span>{{appName}}</span>
    </nav>

    <div class="container-right">      
      <input type="text" name="worktodoinput" class="worktodo-input" v-model="worktodovalue" placeholder="فعالیت مورد نظر را وارد کنید..." />
       <input type="date"  class="date-input" v-model="datevalue" placeholder="تاریخ مورد نظر را وارد کنید..." />
      <button class="btn" @click="storelocal">ذخیره</button>
    </div>
  </div>
  <div>
  <table id="mytable" class="mytable">
        <thead>
            <tr>
                <th>فعالیت</th>
                <th>تاریخ </th>
                <th>انجام شد</th>
            </tr>
        </thead>
        <tbody id="tbody">

        </tbody>
    </table>
  </div>
</template>

<style>
body {
  direction:rtl;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  box-sizing: border-box;  
}

.toolbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #1976d2;
  color: white;
  font-weight: 600;
}

.container-right {
  
  margin-left:30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.worktodo-input {
  height: 80px;
  width: 630px;
  margin-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
  border: 2px solid rgba(100, 100, 100, 0.3);
  border-radius: 5px;
  outline: none;
  font-size: 16px;

  transition: 200ms;
}

.worktodo-input:hover {
  border: 2px solid rgba(117, 177, 226, 0.4);
}

.worktodo-input:focus {
  border: 2px solid rgba(0, 86, 156, 0.4);
}

.btn {
  cursor: pointer;
  margin-top: 100px;
  width: 250px;
  height: 40px;
  border-radius: 5px;
  border: 0;
  outline: 0;
  font-size: 16px;
  color: white;
  background-color: #3ba5ec;

  transition: 200ms;
}

.btn:hover {
  background-color: #2a8cce;
}

.btn:active {
  background-color: #176da7;
}
table, td, th {
  
  border: 1px solid black;
  padding: 15px;
  border-radius: 10px;
  background-color: beige;
}
</style>
<script>
export default {
  name: "App",
  data() {
    return {
      appName: 'Todo planner',
      rialValue: 0,
      usdValue: 0,
      worktodoData: ''
    }
  },
  methods: {
    storelocal() {

// retrive from localstorage
let rjson = localStorage.getItem("todolist");
let obj = JSON.parse(rjson);
const worklist = obj;

////////////////SHOW IN TABLE
let txt = "";
let txt1 = "";
for (let x in obj) {

    txt = obj[x].work + " ";
    txt1 = obj[x].date + " ";

    showtable(txt, txt1);
};


if((this.worktodovalue!= null) && (this.worktodovalue!= "")&&(this.datevalue!= null) && (this.datevalue!= "")){ 
  
    worklist.push({
        work: this.worktodovalue,
        date: this.datevalue,
    });
    
    //store in local storage
    const myjson = JSON.stringify(worklist)
    localStorage.setItem('todolist', myjson);

   showtable(this.worktodovalue,this.datevalue);
    this.worktodovalue = "";
    this.datevalue = "";
  }//end if
  else{alert ("fill the blanks");}


     alert("hi");

function showtable(work, date) {

    var table = document.getElementById("tbody");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // let action 
    let action=document.createElement('td');
    let btn=document.createElement('button');
    btn.classList.add("classdelbtn");
    btn.innerText="انجام شد";
    action.appendChild(btn);  
    row.appendChild(action);      

    cell1.innerHTML = work;
    cell2.innerHTML = date;
    //
   
}
    }
  }
};
</script>

