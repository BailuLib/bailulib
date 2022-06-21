let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
    let myName = prompt('请输入你的名字！');
    localStorage.setItem('name', myName);
    myHeading.textContent = '白露酷毙了!' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '来看看有什么想看的吧，' + storedName;
  }