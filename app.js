let son = parseInt(prompt("Butun son kiriting:"));

if (son > 0) {
    son = son + 1;
}

console.log(son);

let qiymat = parseInt(prompt("Butun son kiriting:"));

if (qiymat > 0) {
    qiymat = qiymat + 1;
} else if (qiymat < 0) {
    qiymat = qiymat - 2;
} else {
    qiymat = 10;
}

console.log(qiymat);

let a = parseInt(prompt("Birinchi sonni kiriting:"));
let b = parseInt(prompt("Ikkinchi sonni kiriting:"));
let c = parseInt(prompt("Uchinchi sonni kiriting:"));

let musbatSoni = 0;

if (a > 0) {
    musbatSoni = musbatSoni + 1;
}
if (b > 0) {
    musbatSoni = musbatSoni + 1;
}
if (c > 0) {
    musbatSoni = musbatSoni + 1;
}

console.log("Musbat sonlar soni:", musbatSoni);

let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));

let katta;

if (son1 > son2) {
    katta = son1;
} else {
    katta = son2;
}

console.log("Kattasi:", katta);

let sonA = parseInt(prompt("Birinchi sonni kiriting:"));
let sonB = parseInt(prompt("Ikkinchi sonni kiriting:"));

let kichikRaqam;

if (sonA < sonB) {
    kichikRaqam = 1;  // Birinchi son kichik bo'lsa, tartib raqami 1
} else {
    kichikRaqam = 2;  // Ikkinchi son kichik bo'lsa, tartib raqami 2
}

console.log("Kichik son tartib raqami:", kichikRaqam);

let birinchiSon = parseInt(prompt("Birinchi sonni kiriting:"));
let ikkinchiSon = parseInt(prompt("Ikkinchi sonni kiriting:"));

let kattaSon, kichikSon;

if (birinchiSon > ikkinchiSon) {
    kattaSon = birinchiSon;
    kichikSon = ikkinchiSon;
} else {
    kattaSon = ikkinchiSon;
    kichikSon = birinchiSon;
}

console.log("Katta son:", kattaSon);
console.log("Kichik son:", kichikSon);

let A = parseFloat(prompt("A sonini kiriting:"));
let B = parseFloat(prompt("B sonini kiriting:"));

if (A > B) {
    let vaqtinchalik = A;
    A = B;
    B = vaqtinchalik;
}

console.log("A =", A);
console.log("B =", B);

let sonA1 = parseInt(prompt("A sonini kiriting:"));
let sonB1 = parseInt(prompt("B sonini kiriting:"));

if (sonA1 !== sonB1) {
    let yigindi = sonA1 + sonB1;
    sonA1 = yigindi;
    sonB1 = yigindi;
} else {
    sonA1 = 0;
    sonB1 = 0;
}

console.log("A =", sonA1);
console.log("B =", sonB1);

let numA = parseInt(prompt("A sonini kiriting:"));
let numB = parseInt(prompt("B sonini kiriting:"));

if (numA !== numB) {
    let katta = (numA > numB) ? numA : numB;
    numA = katta;
    numB = katta;
} else {
    numA = 0;
    numB = 0;
}

console.log("A =", numA);
console.log("B =", numB);

let sonX = parseInt(prompt("Birinchi sonni kiriting:"));
let sonY = parseInt(prompt("Ikkinchi sonni kiriting:"));
let sonZ = parseInt(prompt("Uchinchi sonni kiriting:"));

let kichik = sonX;

if (sonY < kichik) {
    kichik = sonY;
}
if (sonZ < kichik) {
    kichik = sonZ;
}

console.log("Eng kichik son:", kichik);

let s1 = parseInt(prompt("Birinchi sonni kiriting:"));
let s2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
let s3 = parseInt(prompt("Uchinchi sonni kiriting:"));

let birinchiMax, ikkinchiMax;

if (s1 >= s2 && s1 >= s3) {
    birinchiMax = s1;
    ikkinchiMax = (s2 >= s3) ? s2 : s3;
} else if (s2 >= s1 && s2 >= s3) {
    birinchiMax = s2;
    ikkinchiMax = (s1 >= s3) ? s1 : s3;
} else {
    birinchiMax = s3;
    ikkinchiMax = (s1 >= s2) ? s1 : s2;
}

console.log("Yig'indisi eng katta bo'lgan sonlar:", birinchiMax, ikkinchiMax);

let alfa = parseFloat(prompt("Alfa sonini kiriting:"));
let beta = parseFloat(prompt("Beta sonini kiriting:"));
let gamma = parseFloat(prompt("Gamma sonini kiriting:"));

if (alfa < beta && beta < gamma) {
    alfa = alfa * 2;
    beta = beta * 2;
    gamma = gamma * 2;
} else {
    alfa = -alfa;
    beta = -beta;
    gamma = -gamma;
}

console.log("Alfa =", alfa);
console.log("Beta =", beta);
console.log("Gamma =", gamma);

let xVal = parseFloat(prompt("Birinchi sonni kiriting:"));
let yVal = parseFloat(prompt("Ikkinchi sonni kiriting:"));
let zVal = parseFloat(prompt("Uchinchi sonni kiriting:"));

if ((xVal < yVal && yVal < zVal) || (xVal > yVal && yVal > zVal)) {
    xVal = xVal * 2;
    yVal = yVal * 2;
    zVal = zVal * 2;
} else {
    xVal = -xVal;
    yVal = -yVal;
    zVal = -zVal;
}

console.log("Birinchi son =", xVal);
console.log("Ikkinchi son =", yVal);
console.log("Uchinchi son =", zVal);

let p = parseInt(prompt("Birinchi sonni kiriting:"));
let q = parseInt(prompt("Ikkinchi sonni kiriting:"));
let r = parseInt(prompt("Uchinchi sonni kiriting:"));
let s = parseInt(prompt("To‘rtinchi sonni kiriting:"));

let tartibNoyob;

if (p === q && q === r && p !== s) {
    tartibNoyob = 4;
} else if (p === q && q === s && p !== r) {
    tartibNoyob = 3;
} else if (p === r && r === s && p !== q) {
    tartibNoyob = 2;
} else if (q === r && r === s && q !== p) {
    tartibNoyob = 1;
} else {
    tartibNoyob = 0; // Agar uchtasi teng bo‘lmasa
}

console.log("Noyob son tartib raqami:", tartibNoyob);

let alfaNum = parseFloat(prompt("Alfa sonini kiriting:"));
let funNatija;

if (alfaNum <= 0) {
    funNatija = -alfaNum;
} else if (alfaNum > 0 && alfaNum < 2) {
    funNatija = alfaNum ** 2;
} else { // alfaNum >= 2
    funNatija = 4;
}

console.log("F(alfa) =", funNatija);

let yilBerilgan = parseInt(prompt("Yilni kiriting:"));
let kunlarSoni;

if ((yilBerilgan % 4 === 0 && yilBerilgan % 100 !== 0) || (yilBerilgan % 400 === 0)) {
    kunlarSoni = 366;
} else {
    kunlarSoni = 365;
}

console.log("Yilda kunlar soni:", kunlarSoni);

let sonKirit = parseInt(prompt("1 dan 999 gacha bo'lgan sonni kiriting:"));
let turNatija;

if (sonKirit >= 1 && sonKirit <= 999) {
    if (sonKirit < 10) {
        turNatija = (sonKirit % 2 === 0) ? "bir xonali juft son" : "bir xonali toq son";
    } else if (sonKirit < 100) {
        turNatija = (sonKirit % 2 === 0) ? "ikki xonali juft son" : "ikki xonali toq son";
    } else {
        turNatija = (sonKirit % 2 === 0) ? "uch xonali juft son" : "uch xonali toq son";
    }
} else {
    turNatija = "Son 1-999 oralig'ida emas";
}

console.log(turNatija);

let bahoKirit = parseInt(prompt("Baho sonini kiriting (1-5):"));
let natijaBaho;

switch (bahoKirit) {
    case 1:
        natijaBaho = "yomon";
        break;
    case 2:
        natijaBaho = "qoniqarsiz";
        break;
    case 3:
        natijaBaho = "qoniqarli";
        break;
    case 4:
        natijaBaho = "yahshi";
        break;
    case 5:
        natijaBaho = "a'lo";
        break;
    default:
        natijaBaho = "xato";
}

console.log(natijaBaho);

let oyRaqam = parseInt(prompt("Oy raqamini kiriting (1-12):"));
let faslNatija;

switch (oyRaqam) {
    case 12:
    case 1:
    case 2:
        faslNatija = "qish";
        break;
    case 3:
    case 4:
    case 5:
        faslNatija = "bahor";
        break;
    case 6:
    case 7:
    case 8:
        faslNatija = "yoz";
        break;
    case 9:
    case 10:
    case 11:
        faslNatija = "kuz";
        break;
    default:
        faslNatija = "xato";
}

console.log(`Kiritilgan oy (${oyRaqam}) fasli: ${faslNatija}`);

let oyKirit = parseInt(prompt("Oy raqamini kiriting (1-12):"));
let oyKunlari;

switch (oyKirit) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        oyKunlari = 31;
        break;
    case 4: case 6: case 9: case 11:
        oyKunlari = 30;
        break;
    case 2:
        oyKunlari = 28; // Kabisa yil emasligini faraz qilamiz
        break;
    default:
        oyKunlari = "xato";
}

console.log(`Kiritilgan oy (${oyKirit}) kunlari: ${oyKunlari}`);

let birlikTuri = parseInt(prompt("Uzunlik birligi raqamini kiriting (1-5):"));
let kesmaUzunlik = parseFloat(prompt("Kesma uzunligini kiriting:"));
let uzunlikMetrlarda;

switch (birlikTuri) {
    case 1: // desimetr
        uzunlikMetrlarda = kesmaUzunlik / 10;
        break;
    case 2: // kilometr
        uzunlikMetrlarda = kesmaUzunlik * 1000;
        break;
    case 3: // metr
        uzunlikMetrlarda = kesmaUzunlik;
        break;
    case 4: // millimetr
        uzunlikMetrlarda = kesmaUzunlik / 1000;
        break;
    case 5: // santimetr
        uzunlikMetrlarda = kesmaUzunlik / 100;
        break;
    default:
        uzunlikMetrlarda = "xato";
}

console.log("Kesma uzunligi metrlarda:", uzunlikMetrlarda);

let ogirlikBirligi = parseInt(prompt("Og'irlik birligi raqamini kiriting (1-5):"));
let ogirlikQiymat = parseFloat(prompt("Og'irlik qiymatini kiriting:"));
let ogirlikKg;

switch (ogirlikBirligi) {
    case 1: // kilogramm
        ogirlikKg = ogirlikQiymat;
        break;
    case 2: // milligramm
        ogirlikKg = ogirlikQiymat / 1e6;
        break;
    case 3: // gramm
        ogirlikKg = ogirlikQiymat / 1000;
        break;
    case 4: // tonna
        ogirlikKg = ogirlikQiymat * 1000;
        break;
    case 5: // sentner
        ogirlikKg = ogirlikQiymat * 100;
        break;
    default:
        ogirlikKg = "xato";
}

console.log("Og'irlik kilogramda:", ogirlikKg);

let kun = parseInt(prompt("Kunni kiriting:"));
let oy = parseInt(prompt("Oyni kiriting:"));
let kunlarOy = 0;

// Kabisa yil emasligini faraz qilamiz
switch (oy) {
    case 1:
        kunlarOy = 31;
        break;
    case 2:
        kunlarOy = 28;
        break;
    case 3:
        kunlarOy = 31;
        break;
    case 4:
        kunlarOy = 30;
        break;
    case 5:
        kunlarOy = 31;
        break;
    case 6:
        kunlarOy = 30;
        break;
    case 7:
        kunlarOy = 31;
        break;
    case 8:
        kunlarOy = 31;
        break;
    case 9:
        kunlarOy = 30;
        break;
    case 10:
        kunlarOy = 31;
        break;
    case 11:
        kunlarOy = 30;
        break;
    case 12:
        kunlarOy = 31;
        break;
    default:
        console.log("Xato: oy 1-12 oralig'ida bo'lishi kerak");
        kunlarOy = -1;
}

if (kunlarOy !== -1) {
    if (kun >= 1 && kun <= kunlarOy) {
        console.log(`Sana: ${kun}.${oy}`);
    } else {
        console.log("Xato: kiritilgan kun oy oralig'iga mos emas");
    }
}

let hozirgiKun = parseInt(prompt("Kunni kiriting:"));
let hozirgiOy = parseInt(prompt("Oyni kiriting:"));
let oyMaxKunlari = 0;

switch (hozirgiOy) {
    case 1: oyMaxKunlari = 31; break;
    case 2: oyMaxKunlari = 28; break;
    case 3: oyMaxKunlari = 31; break;
    case 4: oyMaxKunlari = 30; break;
    case 5: oyMaxKunlari = 31; break;
    case 6: oyMaxKunlari = 30; break;
    case 7: oyMaxKunlari = 31; break;
    case 8: oyMaxKunlari = 31; break;
    case 9: oyMaxKunlari = 30; break;
    case 10: oyMaxKunlari = 31; break;
    case 11: oyMaxKunlari = 30; break;
    case 12: oyMaxKunlari = 31; break;
    default: oyMaxKunlari = -1;
}

if (oyMaxKunlari !== -1) {
    if (hozirgiKun >= 1 && hozirgiKun <= oyMaxKunlari) {
        let keyingiKun = hozirgiKun + 1;
        let keyingiOy = hozirgiOy;
        if (keyingiKun > oyMaxKunlari) {
            keyingiKun = 1;
            keyingiOy++;
            if (keyingiOy > 12) {
                keyingiOy = 1;
            }
        }
        console.log(`Keyingi sana: ${keyingiKun}.${keyingiOy}`);
    } else {
        console.log("Xato: kiritilgan kun oyga mos emas");
    }
} else {
    console.log("Xato: oy 1-12 oralig'ida bo'lishi kerak");
}

let robotYo = prompt("Robot yo'nalishini kiriting (s, j, q, g):").toLowerCase();
let komanda = parseInt(prompt("Kamanda raqamini kiriting (0,1,2):"));

let keyingiYo;

if (komanda === 0) {
    keyingiYo = robotYo;
} else if (komanda === 1) {
    switch (robotYo) {
        case "s": keyingiYo = "g"; break;
        case "j": keyingiYo = "q"; break;
        case "q": keyingiYo = "s"; break;
        case "g": keyingiYo = "j"; break;
        default: keyingiYo = "xato";
    }
} else if (komanda === 2) {
    switch (robotYo) {
        case "s": keyingiYo = "q"; break;
        case "j": keyingiYo = "g"; break;
        case "q": keyingiYo = "j"; break;
        case "g": keyingiYo = "s"; break;
        default: keyingiYo = "xato";
    }
} else {
    keyingiYo = "xato";
}

console.log("Keyingi robot yo'nalishi:", keyingiYo);

let kartaTur = parseInt(prompt("Kartaning turini kiriting (1-g'isht, 2-olma, 3-chillak, 4-qarg'a):"));
let kartaQiymat = parseInt(prompt("Kartaning qiymatini kiriting (6-14):"));
let kartaNatija;

let turMatn;
switch (kartaTur) {
    case 1: turMatn = "g'isht"; break;
    case 2: turMatn = "olma"; break;
    case 3: turMatn = "chillak"; break;
    case 4: turMatn = "qarg'a"; break;
    default: turMatn = "xato"; break;
}

if (kartaQiymat >= 6 && kartaQiymat <= 10) {
    kartaNatija = kartaQiymat.toString();
} else if (kartaQiymat === 11) {
    kartaNatija = "valet";
} else if (kartaQiymat === 12) {
    kartaNatija = "dama";
} else if (kartaQiymat === 13) {
    kartaNatija = "kral";
} else if (kartaQiymat === 14) {
    kartaNatija = "tuz";
} else {
    kartaNatija = "xato";
}

console.log(`Kartangiz: ${kartaNatija} ${turMatn}`);

let masalaSoni = parseInt(prompt("Masalalar sonini kiriting (10-40):"));
let natija = "";

let onlikSoz = "";
let birlikSoz = "";

if (masalaSoni >= 10 && masalaSoni <= 19) {
    switch (masalaSoni) {
        case 10: natija = "o'n masala"; break;
        case 11: natija = "o'n bir masala"; break;
        case 12: natija = "o'n ikki masala"; break;
        case 13: natija = "o'n uch masala"; break;
        case 14: natija = "o'n to'rt masala"; break;
        case 15: natija = "o'n besh masala"; break;
        case 16: natija = "o'n olti masala"; break;
        case 17: natija = "o'n yetti masala"; break;
        case 18: natija = "o'n sakkiz masala"; break;
        case 19: natija = "o'n to'qqiz masala"; break;
    }
} else if (masalaSoni >= 20 && masalaSoni <= 29) {
    onlikSoz = "yigirma";
    switch (masalaSoni - 20) {
        case 0: birlikSoz = ""; break;
        case 1: birlikSoz = " bir"; break;
        case 2: birlikSoz = " ikki"; break;
        case 3: birlikSoz = " uch"; break;
        case 4: birlikSoz = " to'rt"; break;
        case 5: birlikSoz = " besh"; break;
        case 6: birlikSoz = " olti"; break;
        case 7: birlikSoz = " yetti"; break;
        case 8: birlikSoz = " sakkiz"; break;
        case 9: birlikSoz = " to'qqiz"; break;
    }
    natija = onlikSoz + birlikSoz + " masala";
} else if (masalaSoni >= 30 && masalaSoni <= 39) {
    onlikSoz = "o'ttiz";
    switch (masalaSoni - 30) {
        case 0: birlikSoz = ""; break;
        case 1: birlikSoz = " bir"; break;
        case 2: birlikSoz = " ikki"; break;
        case 3: birlikSoz = " uch"; break;
        case 4: birlikSoz = " to'rt"; break;
        case 5: birlikSoz = " besh"; break;
        case 6: birlikSoz = " olti"; break;
        case 7: birlikSoz = " yetti"; break;
        case 8: birlikSoz = " sakkiz"; break;
        case 9: birlikSoz = " to'qqiz"; break;
    }
    natija = onlikSoz + birlikSoz + " masala";
} else if (masalaSoni === 40) {
    natija = "qirq masala";
} else {
    natija = "xato";
}

console.log(natija);

console.log(natija);

let yilKirit = parseInt(prompt("Yilni kiriting:"));

let ranglar = ["Yashil", "Qizil", "Sariq", "Oq", "Qora"];
let hayvonlar = ["sichqon", "sigir", "yo'lbars", "quyon", "ajdar", "ilon", "ot", "qo'y", "maymun", "tovuq", "it", "to'ng'iz"];

if (!isNaN(yilKirit)) {
    let yilBoshi = 1984;
    let davr = yilKirit - yilBoshi;

    let rangIndex = ((davr % 10) / 2) | 0; // 0-4
    let hayvonIndex = davr % 12;           // 0-11

    if (rangIndex < 0) rangIndex += 5;
    if (hayvonIndex < 0) hayvonIndex += 12;

    let yilMuchali = ranglar[rangIndex] + " " + hayvonlar[hayvonIndex] + " yili";
    console.log(yilMuchali);
} else {
    console.log("Xato: yil raqam bo'lishi kerak");
}