/**
 * Created by lcom48 on 5/1/17.
 */
var today = new Date();
var dd = today.getDate();
//The value returned by getMonth is an integer between 0 and 11, referring 0 to January, 1 to February, and so on.
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
{
    dd='0'+dd;
}

if(mm<10)
{
    mm='0'+mm;
}
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);