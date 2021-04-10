
let name;
document.forms.welcome_form.onsubmit = function () {
  name = this.name.value;
  console.log(name);
  this.style.display = 'none';
  let text=document.getElementById('welcome-text');
  text.innerText=name + ', добро пожаловать в мир JavaScript!';
  text.style.width='100%';
  localStorage.setItem('name', name);
  return false;
};

document.getElementById('area').onsubmit = function() {
	let baseT = this.triangle_a.value;
	let heightT = this.triangle_h.value;
	let areaT = baseT*heightT/2;
	console.log(areaT);
  let res=document.getElementById('area_result');
  res.innerText = areaT;
 	return false;
};

let str1;
let str2;
let strRes = document.getElementById('strings_result');
document.getElementById('strings-form').onsubmit = function() {
	let stringText = this.string.value;
    let text = document.getElementById('strings-text');
	if(str1==null){
    text.innerText = 'Введите вторую строку';
    str1=stringText;
    this.string.value = "";
    if(strRes.innerText!=null) strRes.innerText=null;
  }
	else{
    str2=stringText;
        text.innerText = 'Введите первую строку';
        if (str1.length == str2.length) strRes.innerText = "Количество символов совпадает";
        else strRes.innerText = "Количество символов не совпадает";
    str1 = null;
    str2 = null;
    this.string.value = "";
	}
 	return false;
};


let max, min;
let resArray = '';
let resOutput = document.getElementById('array_result');
function ArrayAdd() {
    let numArray = parseInt(document.getElementById('array').num.value, 10);
    if (numArray > max || max == null) {
        max = numArray;
        console.log(max);
    }
    if (numArray < min || min == null) min = numArray;
    resArray += '      ' + numArray;
    resOutput.innerText = resArray + "\n Max: " + max + " Min: " +min;
    return false;
}

function ArrayD() {
    max = null;
    min = null;
    resArray = '';
    resOutput.innerText = '';
    document.getElementById('array').num.value = null;
}

let hourT, minT, secT;
function timer() {
    document.getElementById("timerStart").style.display = 'none';
    document.getElementById("timerStop").style.display = 'block';
    let timeRes = document.getElementById("timeCount");
    let form = document.getElementById("timer");
    hourT = form.hour.value;
    minT = form.min.value;
    secT = form.sec.value;
    console.log("20485762");
    setTimeout(pusk, 1000);
    function pusk() {
        let Timer1 = new Count();

        timeRes.innerText = `${Timer1.h}:${Timer1.m}:${Timer1.s}`;
        console.log(`${Timer1.h}:${Timer1.m}:${Timer1.s}`);
        if (Timer1.h > 0 || Timer1.m > 0 || Timer1.s > 0) setTimeout(pusk, 1000);
        else timeRes.innerText = `0:0:0`;
    }

    function Count() {
        if (minT == 0 && secT == 0 && hourT > 0) {
            hourT--;
            minT = 59;
            secT = 59;
        } else {
            if (secT == 0 && minT > 0) {
                minT--;
                secT = 59;
            }
            else { secT--; }
        }
        this.h = hourT;
        this.m = minT;
        this.s = secT;
    }
}
function timerEnd() {
    let timeRes = document.getElementById("timeCount");
    let form = document.getElementById("timer");
    hourT = 0;
    minT = 0;
    secT = 0;
    form.hour.value = 0;
    form.min.value = 0;
    form.sec.value = 0;
    timeRes.innerText = "0:0:0";
    document.getElementById("timerStop").style.display = 'none';
    document.getElementById("timerStart").style.display = 'block';
}

function splashScreenOn() {
    document.getElementById("image").style.display = "flex";
    document.getElementById("image").style.flexDirection = "column"
    document.getElementById("image").style.alignItems = "center";
    if (name != null) document.getElementById("name_user").innerText = name;
    Data = new Date();
    Year = Data.getFullYear();
    Month = Data.getMonth();
    Day = Data.getDate();
    
    switch (Month) {
        case 0: fMonth = "января"; break;
        case 1: fMonth = "февраля"; break;
        case 2: fMonth = "марта"; break;
        case 3: fMonth = "апреля"; break;
        case 4: fMonth = "мае"; break;
        case 5: fMonth = "июня"; break;
        case 6: fMonth = "июля"; break;
        case 7: fMonth = "августа"; break;
        case 8: fMonth = "сентября"; break;
        case 9: fMonth = "октября"; break;
        case 10: fMonth = "ноября"; break;
        case 11: fMonth = "декабря"; break;
    }
    document.getElementById("date").innerText = "Сегодня " + Day + " " + fMonth + " " + Year + " года";
 
}
function splashScreenOff() {
    document.getElementById("image").style.display = "none";
}

function resultTest() {
    let result = document.getElementById('resTest');
    let score = 0;
    check();
    result.innerText = score + "/5 правильных ответов";

    function check() {
        let arr = [];
        arr[0] = document.getElementsByName('q1');
        arr[1] = document.getElementsByName('q2');
        arr[2] = document.getElementsByName('q3');
        arr[3] = document.getElementsByName('q4');
        arr[4] = document.getElementsByName('q5');

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j].checked && arr[i][j].value == 'a') {
                    score++;
                    break;
                }
            }
        }

    }
    
}

let maxStr='';
let resString = '';
let resOutputStr = document.getElementById('array_res_str');
function arrayAddStr(){
    let strArr = document.getElementById('arr_str').value;
    if (strArr.length > maxStr.length) {
        maxStr = strArr;
        console.log(maxStr);
    }
    resString += strArr + "\n";
    resOutputStr.innerText = resString + "Самая длинная строка: " + maxStr;
    document.getElementById('arr_str').value = "";
    return false;
}
function arrayDStr() {
    maxStr = '';
    resString ='';
    resOutputStr.innerText = "";
    document.getElementById('arr_str').value = "";
}

let strChar;
let maxChar;
function oftenChar() {
    strChar = document.getElementById("str_ch").value;
    let max = 0;
    maxChar = '';
    strChar.split('').forEach(function (char) {
        if (strChar.split(char).length > max) {
            max = strChar.split(char).length;
            maxChar = char;
            console.log(max);
            console.log(char);
            console.log(strChar.split(char));
        }
    });
    document.getElementById("char_res").innerText = strChar + '\n Самый частый символ в строке:' + maxChar;
    document.getElementById("change_char").style.display = "block";
    document.getElementById("char_change").innerText = '';
};
function changeChar() {
    let ch = prompt("Введите один символ");
    while (ch.length != 1) {
        ch = prompt("Введите один символ");
    }
    document.getElementById("char_change").innerText = "Результат: " + сhangeStr(ch);
}
function сhangeStr(new_symbol) {
    let arr = toArray(strChar);

    for (let i = 0; i < arr.length; i++) {
       if (arr[i] == maxChar) {
           arr[i] = new_symbol;
           console.log(arr);
       }
    }
    return arr.join('');
  
}
function toArray(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }

    return arr;
}


let strA1;
let strA2;
let strResA = document.getElementById('strings_result_a');
document.getElementById('strings-form-an').onsubmit = function () {
    let stringText = this.string_a.value;
    let text = document.getElementById('task_an');
    if (strA1 == null) {
        text.innerText = 'Введите вторую строку';
        strA1 = stringText;
        this.string_a.value = "";
        if (strResA.innerText != null) strResA.innerText = null;
    }
    else {
        strA2 = stringText;
        text.innerText = 'Введите первую строку';
        if (anagramma(strA1, strA2)) strResA.innerText = "Строки являются аннаграммами";
        else strResA.innerText = "Строки не являются аннаграммами";
        strA1 = null;
        strA2 = null;
        this.string_a.value = "";
    }
    return false;
};

function anagramma(strA1, strA2) {
    if (strA1.length != strA2.length) return false;
    if (compare(strA1, strA2)) return false;
    let arr1 = sortArray(strA1);
    let arr2 = sortArray(strA2);

    if (compare(arr1, arr2)) return true;
    else return false;
}
function sortArray(strSort) {
    let arr = new Array();
    for (let i = 0; i < strSort.length; i++) {
        arr[i] = strSort[i];
    }
    arr.sort();
    return arr;
}

function compare(arrComp1, arrComp2) {

    for (let i = 0; i < arrComp1.length; i++) {
        if (arrComp1[i] != arrComp2[i]) {
            return false;
        }
    }

    return true;
}