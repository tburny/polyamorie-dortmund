## Willkommen auf dem Polystammtisch Dortmund!
 
🕖 **Wann:** Jeden 3. Samstag im Monat um 19 Uhr.

📌 **Wo:** Aktuell per Jitsi unter [https://8x8.vc/polydo/Hausflur](https://8x8.vc/polydo/Hausflur)

💡 Sobald sich die Ansteckungsgefahr für Corona wieder ausreichend reduziert hat suchen wir uns eine feste Örtlichkeit für unsere Treffen.

### Termine 2019: 
16.5., 20.6., 18.7., 15.8., 19.9., 17.10., 21.11., 19.12. 

Nächster Stammtisch: <span id='next'></span>

iCal: [Zum Kalender hinzufügen](/Polystammtisch_Dortmund.ics)


## Wie nehme ich teil?
**Wichtig:** Der _Hausflur_ ist nur der Vorraum und dient dem Schutz vor Trollen. Wir schicken dir den Link zum richtigen Raum dann per Direkt-Nachricht im Videochat.

**... 💻 per Computer**
Klicke auf den Link. Die Aufforderung zum Installieren der Chrome-Erweiterung kannst du getrost ignorieren.

**... 📲 per Smartphone**
1. Tippe auf den Link oben. Es erscheint ein Fenster.
2. Tippe auf "Continue to the App". Installiere diese (du musst dich nicht registrieren)
3. Tippe erneut auf den Link oben

## Telegram-Gruppe
Damit unsere Gruppe nicht zugespammt oder getrollt wird, trete unserem _Hausflur_ bei: https://t.me/joinchat/HIGCOFcKw4eQbhBY3PeCIQ

Dort schicken wir dir eine Nachricht mit dem richtigen Link oder fügen dich direkt hinzu. 

## Andere Stammtische in der Region Nordrhein-Westfalen
... findest du auf [dieser Seite](/andere-stammtische)

<script>
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
</script>

