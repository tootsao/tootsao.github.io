// Rychlé občerstvení
const sendvicPrice = 70;
const tacoPrice = 140;
const hamburgerPrice = 100;
const parekvrohlikuPrice = 40;
const hranolkyPrice = 60;
const burritoPrice = 150;
const gyrosPrice = 90;
// Hlavní chody
const lasagnePrice = 160;
const spagetyPrice = 180;
const testovinyPrice = 180;
const hovezigulasPrice = 140;
const zverinovygulasPrice = 260;
const krvavysteakPrice = 300;
const strednepropecenysteakPrice = 320;
const propecenysteakPrice = 340;
// Dezerty a sladkosti
const donutPrice = 30;
const susenkaPrice = 28;
const livanecPrice = 60;
const tiramisuPrice = 80;
const zmrzlinovypoharPrice = 70;
// Asijska kuchyně
const jarnizavitkyPrice = 100;
const kungpaoPrice = 200;
const ryzovenudlePrice = 100;
const sushiPrice = 250;
// Nealkoholicke nápoje
const sprunkPrice = 60;
const vodaPrice = 60;
const colaPrice = 60;
const cajPrice = 90;
const malakavaPrice = 40;
const velkakavaPrice = 80;
const tonicPrice = 280;
const kokosovemlekoPrice = 180;
const ananasovydzusPrice = 120;
const pomerancovydzusPrice = 120;
// Alkoholicke nápoje
const pivoPrice = 60;
const vodkaPrice = 180;
const skotskawhiskeyPrice = 240;
const irskawhiskeyPrice = 390;
const rumPrice = 150;
const bilyrumPrice = 225;
const cervenevinoPrice = 150;
const bilevinoPrice = 135;
const ruzovevinoPrice = 115;
const tequilaPrice = 360;
const absinthPrice = 650;
const cervenyvermutPrice = 300;
const bilyvermutPrice = 300;
const ginPrice = 265;
const triplesecPrice = 305;
// Míchané nápoje
const tropicalbreezePrice = 1000;
const citrustwistPrice = 1000;
const sunsetvermutPrice = 1000;
const classiccubalibrePrice = 1000;
const fireshotPrice = 1000;
const berryreddelightPrice = 1000;
const goldensunrisePrice = 1000;
const gentlemanschoicePrice = 1000;
const mysticmojitoPrice = 1000;
const vermouthroyalePrice = 1000;
const amberblissPrice = 1000;
const frozensunsetPrice = 1000;
const irishdelightPrice = 1000;

let tableData = {
  table1: {
    // Rychlé občerstvení
    sendvicCount: 0,
    tacoCount: 0,
    hamburgerCount: 0,
    parekvrohlikuCount: 0,
    hranolkyCount: 0,
    burritoCount: 0,
    gyrosCount: 0,
    // Hlavní chody
    lasagneCount: 0,
    spagetyCount: 0,
    testovinyCount: 0,
    hovezigulasCount: 0,
    zverinovygulasCount: 0,
    krvavysteakCount: 0,
    strednepropecenysteakCount: 0,
    propecenysteakCount: 0,
    // Dezerty a sladkosti
    donutCount: 0,
    susenkaCount: 0,
    livanecCount: 0,
    tiramisuCount: 0,
    zmrzlinovypoharCount: 0,
    // Asijska kuchyně
    jarnizavitkyCount: 0,
    kungpaoCount: 0,
    ryzovenudleCount: 0,
    sushiCount: 0,
    // Nealkoholicke nápoje
    sprunkCount: 0,
    vodaCount: 0,
    colaCount: 0,
    cajCount: 0,
    malakavaCount: 0,
    velkakavaCount: 0,
    tonicCount: 0,
    kokosovemlekoCount: 0,
    ananasovydzusCount: 0,
    pomerancovydzusCount: 0,
    // Alkoholicke nápoje
    pivoCount: 0,
    vodkaCount: 0,
    skotskawhiskeyCount: 0,
    irskawhiskeyCount: 0,
    rumCount: 0,
    bilyrumCount: 0,
    cervenevinoCount: 0,
    bilevinoCount: 0,
    ruzovewinoCount: 0,
    tequilaCount: 0,
    absinthCount: 0,
    cervenyvermutCount: 0,
    bilyvermutCount: 0,
    ginCount: 0,
    triplesecCount: 0,
    // Míchané nápoje
    tropicalbreezeCount: 0,
    citrustwistCount: 0,
    sunsetvermutCount: 0,
    classiccubalibreCount: 0,
    fireshotCount: 0,
    berryreddelightCount: 0,
    goldensunriseCount: 0,
    gentlemanschoiceCount: 0,
    mysticmojitoCount: 0,
    vermouthroyaleCount: 0,
    amberblissCount: 0,
    frozensunsetCount: 0,
    irishdelightCount: 0
  },
  table2: {
    // Rychlé občerstvení
    sendvicCount: 0,
    tacoCount: 0,
    hamburgerCount: 0,
    parekvrohlikuCount: 0,
    hranolkyCount: 0,
    burritoCount: 0,
    gyrosCount: 0,
    // Hlavní chody
    lasagneCount: 0,
    spagetyCount: 0,
    testovinyCount: 0,
    hovezigulasCount: 0,
    zverinovygulasCount: 0,
    krvavysteakCount: 0,
    strednepropecenysteakCount: 0,
    propecenysteakCount: 0,
    // Dezerty a sladkosti
    donutCount: 0,
    susenkaCount: 0,
    livanecCount: 0,
    tiramisuCount: 0,
    zmrzlinovypoharCount: 0,
    // Asijska kuchyně
    jarnizavitkyCount: 0,
    kungpaoCount: 0,
    ryzovenudleCount: 0,
    sushiCount: 0,
    // Nealkoholicke nápoje
    sprunkCount: 0,
    vodaCount: 0,
    colaCount: 0,
    cajCount: 0,
    malakavaCount: 0,
    velkakavaCount: 0,
    tonicCount: 0,
    kokosovemlekoCount: 0,
    ananasovydzusCount: 0,
    pomerancovydzusCount: 0,
    // Alkoholicke nápoje
    pivoCount: 0,
    vodkaCount: 0,
    skotskawhiskeyCount: 0,
    irskawhiskeyCount: 0,
    rumCount: 0,
    bilyrumCount: 0,
    cervenevinoCount: 0,
    bilevinoCount: 0,
    ruzovewinoCount: 0,
    tequilaCount: 0,
    absinthCount: 0,
    cervenyvermutCount: 0,
    bilyvermutCount: 0,
    ginCount: 0,
    triplesecCount: 0,
    // Míchané nápoje
    tropicalbreezeCount: 0,
    citrustwistCount: 0,
    sunsetvermutCount: 0,
    classiccubalibreCount: 0,
    fireshotCount: 0,
    berryreddelightCount: 0,
    goldensunriseCount: 0,
    gentlemanschoiceCount: 0,
    mysticmojitoCount: 0,
    vermouthroyaleCount: 0,
    amberblissCount: 0,
    frozensunsetCount: 0,
    irishdelightCount: 0
  },
  table3: {
    // Rychlé občerstvení
    sendvicCount: 0,
    tacoCount: 0,
    hamburgerCount: 0,
    parekvrohlikuCount: 0,
    hranolkyCount: 0,
    burritoCount: 0,
    gyrosCount: 0,
    // Hlavní chody
    lasagneCount: 0,
    spagetyCount: 0,
    testovinyCount: 0,
    hovezigulasCount: 0,
    zverinovygulasCount: 0,
    krvavysteakCount: 0,
    strednepropecenysteakCount: 0,
    propecenysteakCount: 0,
    // Dezerty a sladkosti
    donutCount: 0,
    susenkaCount: 0,
    livanecCount: 0,
    tiramisuCount: 0,
    zmrzlinovypoharCount: 0,
    // Asijska kuchyně
    jarnizavitkyCount: 0,
    kungpaoCount: 0,
    ryzovenudleCount: 0,
    sushiCount: 0,
    // Nealkoholicke nápoje
    sprunkCount: 0,
    vodaCount: 0,
    colaCount: 0,
    cajCount: 0,
    malakavaCount: 0,
    velkakavaCount: 0,
    tonicCount: 0,
    kokosovemlekoCount: 0,
    ananasovydzusCount: 0,
    pomerancovydzusCount: 0,
    // Alkoholicke nápoje
    pivoCount: 0,
    vodkaCount: 0,
    skotskawhiskeyCount: 0,
    irskawhiskeyCount: 0,
    rumCount: 0,
    bilyrumCount: 0,
    cervenevinoCount: 0,
    bilevinoCount: 0,
    ruzovewinoCount: 0,
    tequilaCount: 0,
    absinthCount: 0,
    cervenyvermutCount: 0,
    bilyvermutCount: 0,
    ginCount: 0,
    triplesecCount: 0,
    // Míchané nápoje
    tropicalbreezeCount: 0,
    citrustwistCount: 0,
    sunsetvermutCount: 0,
    classiccubalibreCount: 0,
    fireshotCount: 0,
    berryreddelightCount: 0,
    goldensunriseCount: 0,
    gentlemanschoiceCount: 0,
    mysticmojitoCount: 0,
    vermouthroyaleCount: 0,
    amberblissCount: 0,
    frozensunsetCount: 0,
    irishdelightCount: 0
  },
  table4: {
    // Rychlé občerstvení
    sendvicCount: 0,
    tacoCount: 0,
    hamburgerCount: 0,
    parekvrohlikuCount: 0,
    hranolkyCount: 0,
    burritoCount: 0,
    gyrosCount: 0,
    // Hlavní chody
    lasagneCount: 0,
    spagetyCount: 0,
    testovinyCount: 0,
    hovezigulasCount: 0,
    zverinovygulasCount: 0,
    krvavysteakCount: 0,
    strednepropecenysteakCount: 0,
    propecenysteakCount: 0,
    // Dezerty a sladkosti
    donutCount: 0,
    susenkaCount: 0,
    livanecCount: 0,
    tiramisuCount: 0,
    zmrzlinovypoharCount: 0,
    // Asijska kuchyně
    jarnizavitkyCount: 0,
    kungpaoCount: 0,
    ryzovenudleCount: 0,
    sushiCount: 0,
    // Nealkoholicke nápoje
    sprunkCount: 0,
    vodaCount: 0,
    colaCount: 0,
    cajCount: 0,
    malakavaCount: 0,
    velkakavaCount: 0,
    tonicCount: 0,
    kokosovemlekoCount: 0,
    ananasovydzusCount: 0,
    pomerancovydzusCount: 0,
    // Alkoholicke nápoje
    pivoCount: 0,
    vodkaCount: 0,
    skotskawhiskeyCount: 0,
    irskawhiskeyCount: 0,
    rumCount: 0,
    bilyrumCount: 0,
    cervenevinoCount: 0,
    bilevinoCount: 0,
    ruzovewinoCount: 0,
    tequilaCount: 0,
    absinthCount: 0,
    cervenyvermutCount: 0,
    bilyvermutCount: 0,
    ginCount: 0,
    triplesecCount: 0,
    // Míchané nápoje
    tropicalbreezeCount: 0,
    citrustwistCount: 0,
    sunsetvermutCount: 0,
    classiccubalibreCount: 0,
    fireshotCount: 0,
    berryreddelightCount: 0,
    goldensunriseCount: 0,
    gentlemanschoiceCount: 0,
    mysticmojitoCount: 0,
    vermouthroyaleCount: 0,
    amberblissCount: 0,
    frozensunsetCount: 0,
    irishdelightCount: 0
  },
  table5: {
    // Rychlé občerstvení
    sendvicCount: 0,
    tacoCount: 0,
    hamburgerCount: 0,
    parekvrohlikuCount: 0,
    hranolkyCount: 0,
    burritoCount: 0,
    gyrosCount: 0,
    // Hlavní chody
    lasagneCount: 0,
    spagetyCount: 0,
    testovinyCount: 0,
    hovezigulasCount: 0,
    zverinovygulasCount: 0,
    krvavysteakCount: 0,
    strednepropecenysteakCount: 0,
    propecenysteakCount: 0,
    // Dezerty a sladkosti
    donutCount: 0,
    susenkaCount: 0,
    livanecCount: 0,
    tiramisuCount: 0,
    zmrzlinovypoharCount: 0,
    // Asijska kuchyně
    jarnizavitkyCount: 0,
    kungpaoCount: 0,
    ryzovenudleCount: 0,
    sushiCount: 0,
    // Nealkoholicke nápoje
    sprunkCount: 0,
    vodaCount: 0,
    colaCount: 0,
    cajCount: 0,
    malakavaCount: 0,
    velkakavaCount: 0,
    tonicCount: 0,
    kokosovemlekoCount: 0,
    ananasovydzusCount: 0,
    pomerancovydzusCount: 0,
    // Alkoholicke nápoje
    pivoCount: 0,
    vodkaCount: 0,
    skotskawhiskeyCount: 0,
    irskawhiskeyCount: 0,
    rumCount: 0,
    bilyrumCount: 0,
    cervenevinoCount: 0,
    bilevinoCount: 0,
    ruzovewinoCount: 0,
    tequilaCount: 0,
    absinthCount: 0,
    cervenyvermutCount: 0,
    bilyvermutCount: 0,
    ginCount: 0,
    triplesecCount: 0,
    // Míchané nápoje
    tropicalbreezeCount: 0,
    citrustwistCount: 0,
    sunsetvermutCount: 0,
    classiccubalibreCount: 0,
    fireshotCount: 0,
    berryreddelightCount: 0,
    goldensunriseCount: 0,
    gentlemanschoiceCount: 0,
    mysticmojitoCount: 0,
    vermouthroyaleCount: 0,
    amberblissCount: 0,
    frozensunsetCount: 0,
    irishdelightCount: 0
  },
  table6: {
    // Rychlé občerstvení
    sendvicCount: 0,
    tacoCount: 0,
    hamburgerCount: 0,
    parekvrohlikuCount: 0,
    hranolkyCount: 0,
    burritoCount: 0,
    gyrosCount: 0,
    // Hlavní chody
    lasagneCount: 0,
    spagetyCount: 0,
    testovinyCount: 0,
    hovezigulasCount: 0,
    zverinovygulasCount: 0,
    krvavysteakCount: 0,
    strednepropecenysteakCount: 0,
    propecenysteakCount: 0,
    // Dezerty a sladkosti
    donutCount: 0,
    susenkaCount: 0,
    livanecCount: 0,
    tiramisuCount: 0,
    zmrzlinovypoharCount: 0,
    // Asijska kuchyně
    jarnizavitkyCount: 0,
    kungpaoCount: 0,
    ryzovenudleCount: 0,
    sushiCount: 0,
    // Nealkoholicke nápoje
    sprunkCount: 0,
    vodaCount: 0,
    colaCount: 0,
    cajCount: 0,
    malakavaCount: 0,
    velkakavaCount: 0,
    tonicCount: 0,
    kokosovemlekoCount: 0,
    ananasovydzusCount: 0,
    pomerancovydzusCount: 0,
    // Alkoholicke nápoje
    pivoCount: 0,
    vodkaCount: 0,
    skotskawhiskeyCount: 0,
    irskawhiskeyCount: 0,
    rumCount: 0,
    bilyrumCount: 0,
    cervenevinoCount: 0,
    bilevinoCount: 0,
    ruzovewinoCount: 0,
    tequilaCount: 0,
    absinthCount: 0,
    cervenyvermutCount: 0,
    bilyvermutCount: 0,
    ginCount: 0,
    triplesecCount: 0,
    // Míchané nápoje
    tropicalbreezeCount: 0,
    citrustwistCount: 0,
    sunsetvermutCount: 0,
    classiccubalibreCount: 0,
    fireshotCount: 0,
    berryreddelightCount: 0,
    goldensunriseCount: 0,
    gentlemanschoiceCount: 0,
    mysticmojitoCount: 0,
    vermouthroyaleCount: 0,
    amberblissCount: 0,
    frozensunsetCount: 0,
    irishdelightCount: 0
  },
  table7: {
    // Rychlé občerstvení
    sendvicCount: 0,
    tacoCount: 0,
    hamburgerCount: 0,
    parekvrohlikuCount: 0,
    hranolkyCount: 0,
    burritoCount: 0,
    gyrosCount: 0,
    // Hlavní chody
    lasagneCount: 0,
    spagetyCount: 0,
    testovinyCount: 0,
    hovezigulasCount: 0,
    zverinovygulasCount: 0,
    krvavysteakCount: 0,
    strednepropecenysteakCount: 0,
    propecenysteakCount: 0,
    // Dezerty a sladkosti
    donutCount: 0,
    susenkaCount: 0,
    livanecCount: 0,
    tiramisuCount: 0,
    zmrzlinovypoharCount: 0,
    // Asijska kuchyně
    jarnizavitkyCount: 0,
    kungpaoCount: 0,
    ryzovenudleCount: 0,
    sushiCount: 0,
    // Nealkoholicke nápoje
    sprunkCount: 0,
    vodaCount: 0,
    colaCount: 0,
    cajCount: 0,
    malakavaCount: 0,
    velkakavaCount: 0,
    tonicCount: 0,
    kokosovemlekoCount: 0,
    ananasovydzusCount: 0,
    pomerancovydzusCount: 0,
    // Alkoholicke nápoje
    pivoCount: 0,
    vodkaCount: 0,
    skotskawhiskeyCount: 0,
    irskawhiskeyCount: 0,
    rumCount: 0,
    bilyrumCount: 0,
    cervenevinoCount: 0,
    bilevinoCount: 0,
    ruzovewinoCount: 0,
    tequilaCount: 0,
    absinthCount: 0,
    cervenyvermutCount: 0,
    bilyvermutCount: 0,
    ginCount: 0,
    triplesecCount: 0,
    // Míchané nápoje
    tropicalbreezeCount: 0,
    citrustwistCount: 0,
    sunsetvermutCount: 0,
    classiccubalibreCount: 0,
    fireshotCount: 0,
    berryreddelightCount: 0,
    goldensunriseCount: 0,
    gentlemanschoiceCount: 0,
    mysticmojitoCount: 0,
    vermouthroyaleCount: 0,
    amberblissCount: 0,
    frozensunsetCount: 0,
    irishdelightCount: 0
  },
  table8: {
    // Rychlé občerstvení
    sendvicCount: 0,
    tacoCount: 0,
    hamburgerCount: 0,
    parekvrohlikuCount: 0,
    hranolkyCount: 0,
    burritoCount: 0,
    gyrosCount: 0,
    // Hlavní chody
    lasagneCount: 0,
    spagetyCount: 0,
    testovinyCount: 0,
    hovezigulasCount: 0,
    zverinovygulasCount: 0,
    krvavysteakCount: 0,
    strednepropecenysteakCount: 0,
    propecenysteakCount: 0,
    // Dezerty a sladkosti
    donutCount: 0,
    susenkaCount: 0,
    livanecCount: 0,
    tiramisuCount: 0,
    zmrzlinovypoharCount: 0,
    // Asijska kuchyně
    jarnizavitkyCount: 0,
    kungpaoCount: 0,
    ryzovenudleCount: 0,
    sushiCount: 0,
    // Nealkoholicke nápoje
    sprunkCount: 0,
    vodaCount: 0,
    colaCount: 0,
    cajCount: 0,
    malakavaCount: 0,
    velkakavaCount: 0,
    tonicCount: 0,
    kokosovemlekoCount: 0,
    ananasovydzusCount: 0,
    pomerancovydzusCount: 0,
    // Alkoholicke nápoje
    pivoCount: 0,
    vodkaCount: 0,
    skotskawhiskeyCount: 0,
    irskawhiskeyCount: 0,
    rumCount: 0,
    bilyrumCount: 0,
    cervenevinoCount: 0,
    bilevinoCount: 0,
    ruzovewinoCount: 0,
    tequilaCount: 0,
    absinthCount: 0,
    cervenyvermutCount: 0,
    bilyvermutCount: 0,
    ginCount: 0,
    triplesecCount: 0,
    // Míchané nápoje
    tropicalbreezeCount: 0,
    citrustwistCount: 0,
    sunsetvermutCount: 0,
    classiccubalibreCount: 0,
    fireshotCount: 0,
    berryreddelightCount: 0,
    goldensunriseCount: 0,
    gentlemanschoiceCount: 0,
    mysticmojitoCount: 0,
    vermouthroyaleCount: 0,
    amberblissCount: 0,
    frozensunsetCount: 0,
    irishdelightCount: 0
  },
  table9: {
    // Rychlé občerstvení
    sendvicCount: 0,
    tacoCount: 0,
    hamburgerCount: 0,
    parekvrohlikuCount: 0,
    hranolkyCount: 0,
    burritoCount: 0,
    gyrosCount: 0,
    // Hlavní chody
    lasagneCount: 0,
    spagetyCount: 0,
    testovinyCount: 0,
    hovezigulasCount: 0,
    zverinovygulasCount: 0,
    krvavysteakCount: 0,
    strednepropecenysteakCount: 0,
    propecenysteakCount: 0,
    // Dezerty a sladkosti
    donutCount: 0,
    susenkaCount: 0,
    livanecCount: 0,
    tiramisuCount: 0,
    zmrzlinovypoharCount: 0,
    // Asijska kuchyně
    jarnizavitkyCount: 0,
    kungpaoCount: 0,
    ryzovenudleCount: 0,
    sushiCount: 0,
    // Nealkoholicke nápoje
    sprunkCount: 0,
    vodaCount: 0,
    colaCount: 0,
    cajCount: 0,
    malakavaCount: 0,
    velkakavaCount: 0,
    tonicCount: 0,
    kokosovemlekoCount: 0,
    ananasovydzusCount: 0,
    pomerancovydzusCount: 0,
    // Alkoholicke nápoje
    pivoCount: 0,
    vodkaCount: 0,
    skotskawhiskeyCount: 0,
    irskawhiskeyCount: 0,
    rumCount: 0,
    bilyrumCount: 0,
    cervenevinoCount: 0,
    bilevinoCount: 0,
    ruzovewinoCount: 0,
    tequilaCount: 0,
    absinthCount: 0,
    cervenyvermutCount: 0,
    bilyvermutCount: 0,
    ginCount: 0,
    triplesecCount: 0,
    // Míchané nápoje
    tropicalbreezeCount: 0,
    citrustwistCount: 0,
    sunsetvermutCount: 0,
    classiccubalibreCount: 0,
    fireshotCount: 0,
    berryreddelightCount: 0,
    goldensunriseCount: 0,
    gentlemanschoiceCount: 0,
    mysticmojitoCount: 0,
    vermouthroyaleCount: 0,
    amberblissCount: 0,
    frozensunsetCount: 0,
    irishdelightCount: 0
  },
  table10: {
    // Rychlé občerstvení
    sendvicCount: 0,
    tacoCount: 0,
    hamburgerCount: 0,
    parekvrohlikuCount: 0,
    hranolkyCount: 0,
    burritoCount: 0,
    gyrosCount: 0,
    // Hlavní chody
    lasagneCount: 0,
    spagetyCount: 0,
    testovinyCount: 0,
    hovezigulasCount: 0,
    zverinovygulasCount: 0,
    krvavysteakCount: 0,
    strednepropecenysteakCount: 0,
    propecenysteakCount: 0,
    // Dezerty a sladkosti
    donutCount: 0,
    susenkaCount: 0,
    livanecCount: 0,
    tiramisuCount: 0,
    zmrzlinovypoharCount: 0,
    // Asijska kuchyně
    jarnizavitkyCount: 0,
    kungpaoCount: 0,
    ryzovenudleCount: 0,
    sushiCount: 0,
    // Nealkoholicke nápoje
    sprunkCount: 0,
    vodaCount: 0,
    colaCount: 0,
    cajCount: 0,
    malakavaCount: 0,
    velkakavaCount: 0,
    tonicCount: 0,
    kokosovemlekoCount: 0,
    ananasovydzusCount: 0,
    pomerancovydzusCount: 0,
    // Alkoholicke nápoje
    pivoCount: 0,
    vodkaCount: 0,
    skotskawhiskeyCount: 0,
    irskawhiskeyCount: 0,
    rumCount: 0,
    bilyrumCount: 0,
    cervenevinoCount: 0,
    bilevinoCount: 0,
    ruzovewinoCount: 0,
    tequilaCount: 0,
    absinthCount: 0,
    cervenyvermutCount: 0,
    bilyvermutCount: 0,
    ginCount: 0,
    triplesecCount: 0,
    // Míchané nápoje
    tropicalbreezeCount: 0,
    citrustwistCount: 0,
    sunsetvermutCount: 0,
    classiccubalibreCount: 0,
    fireshotCount: 0,
    berryreddelightCount: 0,
    goldensunriseCount: 0,
    gentlemanschoiceCount: 0,
    mysticmojitoCount: 0,
    vermouthroyaleCount: 0,
    amberblissCount: 0,
    frozensunsetCount: 0,
    irishdelightCount: 0
  }
};

// Elements for the current table
const sendvicCountElement = document.querySelector('sendvic-count');
const tacoCountElement = document.querySelector('#taco-count');
const totalProductsElement = document.querySelector('#total-products');
const totalPriceElement = document.querySelector('#total-price');

// Update summary
function updateSummary(table) {
  const currentTable = tableData[table];
  let totalProductsText = [];
  let totalPrice = 0;

  if (table === '') {  // If no table is selected
    totalProductsElement.textContent = `Total Products: 0`;
    totalPriceElement.textContent = `Total Price: 0 Kč`;
    sendvicCountElement.textContent = '0';
    tacoCountElement.textContent = '0';
    return;
  }

  // Collect product details
  if (currentTable.sendvicCount > 0) {
    totalProductsText.push(`${currentTable.sendvicCount}x Sendvič`);
    totalPrice += currentTable.sendvicCount * sendvicPrice;
  }
  if (currentTable.tacoCount > 0) {
    totalProductsText.push(`${currentTable.tacoCount}x Taco`);
    totalPrice += currentTable.tacoCount * tacoPrice;
  }

  // Update summary
  totalProductsElement.textContent = `Total Products: ${totalProductsText.join(', ') || '0'}`;
  totalPriceElement.textContent = `Total Price: ${totalPrice} Kč`;
}

// Handle table toggle
let currentTable = '';  // No table is selected by default

function toggleTable(table) {
  // If table is already selected, unselect it
  if (currentTable === table) {
    currentTable = '';  // Unselect the table
    document.querySelector(`#${table}-btn`).classList.remove('selected-table');
    updateSummary(currentTable);  // Show empty summary
  } else {
    currentTable = table;
    updateSummary(table);

    sendvicCountElement.textContent = tableData[table].sendvicCount;
    tacoCountElement.textContent = tableData[table].tacoCount;

    document.querySelector('#table1-btn').classList.remove('selected-table');
    document.querySelector('#table2-btn').classList.remove('selected-table');
    document.querySelector('#table3-btn').classList.remove('selected-table');
    document.querySelector('#table4-btn').classList.remove('selected-table');
    document.querySelector('#table5-btn').classList.remove('selected-table');
    document.querySelector('#table6-btn').classList.remove('selected-table');
    document.querySelector('#table7-btn').classList.remove('selected-table');
    document.querySelector('#table8-btn').classList.remove('selected-table');
    document.querySelector('#table9-btn').classList.remove('selected-table');
    document.querySelector('#table10-btn').classList.remove('selected-table');

    document.querySelector(`#${table}-btn`).classList.add('selected-table');
  }
}

// Increase button event
document.querySelector('#increase-sendvic').addEventListener('click', () => {
  if (currentTable) {
    tableData[currentTable].sendvicCount++;
    sendvicCountElement.textContent = tableData[currentTable].sendvicCount;
    updateSummary(currentTable);
  }
});

document.querySelector('#increase-taco').addEventListener('click', () => {
  if (currentTable) {
    tableData[currentTable].tacoCount++;
    tacoCountElement.textContent = tableData[currentTable].tacoCount;
    updateSummary(currentTable);
  }
});

// Decrease button event
document.querySelector('#decrease-sendvic').addEventListener('click', () => {
  if (currentTable && tableData[currentTable].sendvicCount > 0) {
    tableData[currentTable].sendvicCount--;
    sendvicCountElement.textContent = tableData[currentTable].sendvicCount;
    updateSummary(currentTable);
  }
});

document.querySelector('#decrease-taco').addEventListener('click', () => {
  if (currentTable && tableData[currentTable].tacoCount > 0) {
    tableData[currentTable].tacoCount--;
    tacoCountElement.textContent = tableData[currentTable].tacoCount;
    updateSummary(currentTable);
  }
});

document.querySelector('#table1-btn').addEventListener('click', () => {
  toggleTable('table1');
});

document.querySelector('#table2-btn').addEventListener('click', () => {
  toggleTable('table2');
});

document.querySelector('#table3-btn').addEventListener('click', () => {
  toggleTable('table3');
});

document.querySelector('#table4-btn').addEventListener('click', () => {
  toggleTable('table4');
});

document.querySelector('#table5-btn').addEventListener('click', () => {
  toggleTable('table5');
});

document.querySelector('#table6-btn').addEventListener('click', () => {
  toggleTable('table6');
});

document.querySelector('#table7-btn').addEventListener('click', () => {
  toggleTable('table7');
});

document.querySelector('#table8-btn').addEventListener('click', () => {
  toggleTable('table8');
});

document.querySelector('#table9-btn').addEventListener('click', () => {
  toggleTable('table9');
});

document.querySelector('#table10-btn').addEventListener('click', () => {
  toggleTable('table10');
});

// Initialize with no table selected
updateSummary('');