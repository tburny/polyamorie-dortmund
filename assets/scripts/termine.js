// https://codegolf.stackexchange.com/questions/178227/get-the-date-of-the-nth-day-of-week-in-a-given-year-and-month
f=
(a,d,n)=>(d+6-new Date(...a,7).getDay())%7+n*7-6;
function thirdSaturdayOfMonthAsDate(d) {
const SATURDAY = 6;

let dm = new Date(d.getFullYear(), d.getMonth(), 1);
dm.setDate(f([dm.getFullYear(), dm.getMonth()], SATURDAY, 3));
return dm;
}

function nextRoundtable() {

let thisMonth = new Date();
let thisSaturday = thirdSaturdayOfMonthAsDate(thisMonth);


let nextMonth = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + 1, 1);
let nextSaturday = thirdSaturdayOfMonthAsDate(nextMonth);

console.log(thisSaturday);
console.log(nextSaturday);

let now = new Date()
now = new Date(now.getFullYear(), now.getMonth(), now.getDate())
return  now <= thisSaturday ? thisSaturday : nextSaturday;
}

let next = nextRoundtable();
document.getElementById('next').innerHTML = next.getDate() + '.' + (next.getMonth() + 1) + '.';
