/*  const
    let
    var */

    let metai = 1978;
    let menesis = 9;
    let diena = 19;

    console.log("Mano gimimo diena:",metai,"0"+menesis,diena);

    const metrikai = 'Manogimimo diena:'+metai+' 0'+menesis+diena;
    console.log(metrikai)

//****************2 */

    const vardas = 'Edgaras'
    const pavarde = 'Banaitis'
    const busena = "vedes"
    const statusas = `turi vaiku`

    console.log(vardas, pavarde, `-`,busena, `ir`, statusas,`.`);

//***************1-3 * */    

    let pazymiai = [8,7,6,9,10];
    console.log(`Pažymiai:`, pazymiai);

    let gimt = [1900, 78, 9, 19, 2];
    console.log("Gimimo metai:", gimt[0]+gimt[1],`menesis:`, gimt[2], `diena:`,gimt[3], `savaites diena:`,gimt[4] );

    let mokesciai = [45, 27, 32, 18, 19.25]
    console.log(`Mokesčiai:`, mokesciai);

//*****************1-4 */

    const labels = ['Vardas', 'Pavarde', 'Tevavardis', 'Vaikas1', 'Vaikas2'];
    const value = ['Edgaras', 'Banaitis', 'Antanas', 'Ieva', 'Elžbieta'];
    const sutuok = [`Neringa`, `Samajauskaite`, `Valentinas`, `Neringa`, `Rūta`];

console.log('Aš - ', labels[0], value[0], labels[1], value[1], labels[2], value[2], labels[3], value[3], labels[4], value[4]);
console.log(`Sutuoktinė:`, labels[0], sutuok[0], labels[1], sutuok[1], labels[2], sutuok[2], labels[3], sutuok[3], labels[4], sutuok[4]);

//**********************2-1 */

    console.log(`Rezultatas:`,metai+menesis+diena);

//*********************2-3 */

    console.log("Pirmo array rezultatas:", pazymiai[0]-pazymiai[1]+pazymiai[2]-pazymiai[3]+pazymiai[4]);
    console.log("Antro array rezultatas:", gimt[0]-gimt[1]+gimt[2]-gimt[3]+gimt[4]);
    console.log("Trečio array rezultatas:", mokesciai[0]-mokesciai[1]+mokesciai[2]-mokesciai[3]+mokesciai[4]);

    /*******************2-4 */

console.log()    

/**//*/*////////*******************////////* */ */ */







/*********************3-1 */
/*
if (condition) {
    //  block of code to be executed if the condition is true
  } else {
    //  block of code to be executed if the condition is false
  }
*/
let sk1 = 5;
let sk2 = 2;

if (sk2>sk1) {

console.log("Pomidoras")}

else {console.log("Bandykite kitą kartą")
}

