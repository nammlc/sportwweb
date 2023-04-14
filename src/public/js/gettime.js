function valid(stringdate){
    stringdate = stringdate.toString();
    const length = stringdate.length;
    if(length <2){
        const string = "0" +stringdate;
        return string;}
    else
        return stringdate;
}

const time = document.getElementById('getTime');

const date = new Date();

const stringdate =valid(date.getUTCDate()) + '-' + valid(date.getUTCMonth() + 1 ) + "-" + valid(date.getUTCFullYear())+ " " + (valid(date.getUTCHours() + 7)) + ':' + valid(date.getUTCMinutes()) +' (GMT + 7)';

time.innerHTML = `${stringdate}`; 
time.style.color = "#841a7a";
time.style.fontSize = "1.3rem";