dataSetVersion = "2023-12-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Artists",
    key: "artists",
    tooltip: "Check this to restrict to albums from certain artist.",
    checked: false,
    sub: [
      { name: "Adele", tooltip:"Mãe Adele!!", key: "Adel" },
      { name: "Alanis Morissette", tooltip: "Alanis Morissette", key: "Alan" },
      { name: "Alicia Keys", tooltip: "A mais linda de todas", key: "Alic" },
      { name: "Ariana Grande", tooltip: "Makes me feel like a dangerous Woman", key: "Aria" },
      { name: "Badfinger", tooltip: "Badfinger", key: "Badf" },
      { name: "The Beatles", tooltip: "Os Maiores!!", key: "Beat" },
      { name: "Belchior", tooltip: "Genio", key: "Belc" },
      { name: "Beyoncé", tooltip: "Mãe", key: "Beyo" },
      { name: "Billie Eilish", tooltip: "asmr", key: "Bill" },
      { name: "Bob Dylan", tooltip: "Ele!", key: "BobD" },
      { name: "Boygenius", tooltip: "Boygenius", key: "Boyg" },
      { name: "Britney Spears", tooltip: "It's Britney, Bitch", key: "Brit" },
      { name: "Caetano Veloso", tooltip: "CAETANEAR", key: "Caet" },
      { name: "Carole King", tooltip: "Carole King", key: "CKin" },
      { name: "Charli XCX", tooltip: "Charli XCX", key: "CXCX" },
      { name: "Chico Buarque", tooltip: "O Maior de Todos", key: "CBua" },
      { name: "David Bowie", tooltip: "Twin Peaks!", key: "DBow" },
      { name: "Derek and The Dominos", tooltip: "Devolva, Devolva a mulher do George", key: "DATD" },
      { name: "Doja Cat", tooltip: "Pista Muito ", key: "Doja" },
      { name: "Dua Lipa", tooltip: "Trent's Girlfriend", key: "DuaL" },
      { name: "Edson Gomes", tooltip: "Edson Gomes", key: "EGom" },
      { name: "Fleetwood Mac", tooltip: "Fleetwood Mac", key: "Flee" },
      { name: "Franz Ferdinand", tooltip: "Franz Ferdinand", key: "FFer" },
      { name: "George Harrison", tooltip: "OMG HI George Harrison", key: "GHar" },
      { name: "Gilberto Gil", tooltip: "Aquele Abraço!", key: "GGil" },
      { name: "Guns N Roses", tooltip: "Mickey e cia", key: "GNRS" },
      { name: "Harry Styles", tooltip: "Harry Styles", key: "HSty" },
      { name: "John Lennon and Yoko Ono", tooltip: "Casalsinho Ternura", key: "Joko" },
      { name: "Katy Perry", tooltip: "ROAR", key: "KPer" },
      { name: "Justin Hurwitz", tooltip: "City Of Staaars", key: "JHur" },
      { name: "Lady Gaga", tooltip: "Roma romamaa, Roma romamaa Gaga Uh lala", key: "Gaga" },
      { name: "Lana Del Rey", tooltip: "David Lynch Fan", key: "Lana" },
      { name: "Lizzo", tooltip: "Lizzo", key: "Lizz" },
      { name: "Lorde", tooltip: "Of the Rings", key: "Lord" },
      { name: "Miley Cirus", tooltip: "aka Hanna Montana", key: "MCir" },
      { name: "Mitski", tooltip: "Mitski", key: "Mits" },
      { name: "Lauryn Hill", tooltip: "Lauryn Hill", key: "LHil" },
      { name: "Nirvana", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Novos Baianos", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Oasis", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Olivia Rodrigo", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "One Direction", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Paul McCartney", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Lady Gaga", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Phoebe Bridgers", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Pink Floyd", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Queen", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Radiohead", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "The Rolling Stones", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Rosalia", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Shawn Mendes", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Stevie Wonder", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Michael Jackson", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "The Strokes", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Sufjan Stevens", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Talking Heads", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Taylor Swift", tooltip: "18 - Kouryuudou", key: "UM" },
      { name: "Tribalistas", tooltip: "18 - Kouryuudou", key: "UM" },


    ]
  },  
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Hakurei Reimu",
    img: "kBe1YfO.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "MoF", "SA", "UFO", "soku", "DS", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK", "AoCF", "HSiFS", "VD", "WBaWC", "UM" ],
      stage: ["st4"]
    }
  },
  {
    name: "Kirisame Marisa",
    img: "kBe1YfO.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "MoF", "SA", "UFO", "soku", "DS", "GFW", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK", "AoCF", "HSiFS", "VD", "WBaWC", "UM" ],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Rumia",
    img: "kBe1YfO.png",
    opts: {
      series: ["book", "EoSD", "StB", "HM"],
      stage: ["st1"]
    }
  },
];
