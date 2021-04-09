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
	let areaT = baseT*heightT;
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

let i = 0;
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
    i++;
    return false;
}

function ArrayD() {
    i = 0;
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
    //Конструктор
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



