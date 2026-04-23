const tripData = {
  theme: {
    duration: "15 Days",
    dates: "April 2027",
    vibe: "Mix of relaxing and exploring",
    dietary: "No lamb",
    locations: ["Athens", "Chania (Crete)", "Santorini"]
  },
  hotels: [
    {
      name: "COCO-MAT Athens BC",
      location: "Athens (First Stay)",
      room: "City View Room",
      link: "https://www.athensbc.com/rooms-suites/city-view",
      map: "https://www.google.com/maps/search/?api=1&query=COCO-MAT+Athens+BC",
      imageKey: "athens"
    },
    {
      name: "Casa Delfino",
      location: "Chania, Crete",
      room: "Classic Room",
      link: "https://www.casadelfino.com/accommodation/classic-room/",
      map: "https://www.google.com/maps/search/?api=1&query=Casa+Delfino+Hotel+%26+Spa+Chania",
      imageKey: "chania"
    },
    {
      name: "Astra Suites",
      location: "Santorini",
      room: "Classic Junior Suite",
      link: "https://www.astrasuites.com/accommodation/standard-suites/classic-junior-suite/",
      map: "https://www.google.com/maps/search/?api=1&query=Astra+Suites+Imerovigli+Santorini",
      imageKey: "santorini"
    },
    {
      name: "Sofitel Athens Airport",
      location: "Athens (Return Night)",
      room: "Standard",
      link: "https://sofitel-athens-airport.com/",
      map: "https://www.google.com/maps/search/?api=1&query=Sofitel+Athens+Airport",
      imageKey: "athens"
    }
  ],
  dining: [
    { name: "Karamanlidika by Fanis", location: "Athens", link: "https://www.karamanlidika.gr/language/en/meze-restaurant/" },
    { name: "Tamam Restaurant", location: "Chania", link: "https://www.tamamrestaurant.com/" },
    { name: "Anogi", location: "Santorini", link: "https://anogisantorini.restaurant/" },
    { name: "Metaxi Mas", location: "Santorini", link: "https://santorini-metaximas.gr/en" },
    { name: "The Athenian House", location: "Santorini", link: "https://athenianhouse.gr/" }
  ],
  tours: [
    {
      name: "Crete driver wine and olive oil tour",
      desc: "Private driver, hotel pickup, olive oil tasting, winery stop, village lunch (no lamb).",
      link: "https://www.viator.com/en-GB/tours/Crete/Chania-Tasting-Tour-Bakery-Olive-Oil-Honey-and-Cheese/d960-274289P16"
    }
  ],
  days: [
    {
      day: 1,
      title: "Arrive in Athens",
      stay: "COCO-MAT Athens BC",
      travel: "Airport to hotel",
      plan: ["Arrive in Athens", "Check in and keep the day light", "Walk Plaka and Anafiotika", "Early dinner and early night"],
      stops: ["Plaka", "Anafiotika"],
      dinner: "Karamanlidika by Fanis (Skip lamb dishes)",
      map: "https://www.google.com/maps/search/?api=1&query=Athens+International+Airport+to+COCO-MAT+Athens+BC"
    },
    {
      day: 2,
      title: "Acropolis and Historic Center",
      stay: "COCO-MAT Athens BC",
      travel: "Walking / Transit",
      plan: ["Hotel → Acropolis → Acropolis Museum → Monastiraki → rooftop drinks"],
      stops: ["Acropolis", "Acropolis Museum", "Monastiraki Square"],
      dinner: "Return to Karamanlidika or another meat/seafood spot nearby",
      map: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Acropolis+of+Athens/Acropolis+Museum/Monastiraki+Square/"
    },
    {
      day: 3,
      title: "Markets and Neighborhoods",
      stay: "COCO-MAT Athens BC",
      travel: "Walking / Transit",
      plan: ["Hotel → Athens Central Market → Evripidou Street → Syntagma → National Garden"],
      stops: ["Athens Central Market", "Evripidou Street", "Syntagma Square", "National Garden"],
      dinner: "Free night or repeat favorite Athens restaurant",
      map: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Athens+Central+Market/Evripidou+Street+Athens/Syntagma+Square/National+Garden+Athens/"
    },
    {
      day: 4,
      title: "Easy Athens Buffer Day",
      stay: "COCO-MAT Athens BC",
      travel: "Walking",
      plan: ["Keep this day flexible", "Pack early", "Sleep early before the domestic flight"],
      stops: ["Lycabettus Hill"],
      dinner: "Relaxed lunch/dinner",
      map: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Lycabettus+Hill+Athens/COCO-MAT+Athens+BC/"
    },
    {
      day: 5,
      title: "Travel to Chania, Crete",
      stay: "Casa Delfino",
      travel: "Fly Athens to Chania",
      plan: ["Fly Athens to Chania", "Check in", "Sunset walk in the Venetian Harbor"],
      stops: ["Venetian Harbor Chania"],
      dinner: "Tamam Restaurant",
      map: "https://www.google.com/maps/search/?api=1&query=COCO-MAT+Athens+BC+to+Athens+International+Airport"
    },
    {
      day: 6,
      title: "Chania Old Town Day",
      stay: "Casa Delfino",
      travel: "Walking",
      plan: ["Casa Delfino → Venetian Harbor → Lighthouse walk → Old Town lanes → harbor drinks"],
      stops: ["Lighthouse area", "Old Town Chania"],
      dinner: "Tamam again or seafood in the harbor area",
      map: "https://www.google.com/maps/dir/Casa+Delfino+Hotel+%26+Spa/Old+Venetian+Harbor+Chania/Faross+Chania+Old+Venetian+Harbour/"
    },
    {
      day: 7,
      title: "Driver Wine and Olive Oil Tour Day",
      stay: "Casa Delfino",
      travel: "Private Driver Tour",
      plan: ["Olive oil tasting", "Winery visit", "Village lunch", "No lamb"],
      stops: ["Chania wine region", "Apokoronas villages"],
      dinner: "Flexible",
      map: "https://www.google.com/maps/search/?api=1&query=Chania+Crete+winery"
    },
    {
      day: 8,
      title: "West Crete Scenic Day",
      stay: "Casa Delfino",
      travel: "Car/Bus",
      plan: ["More scenery, less rushing", "Good day for photos and easy lunch"],
      stops: ["Falassarna Beach or countryside villages"],
      dinner: "Flexible",
      map: "https://www.google.com/maps/dir/Casa+Delfino+Hotel+%26+Spa/Falassarna+Beach/Casa+Delfino+Hotel+%26+Spa/"
    },
    {
      day: 9,
      title: "Culture Day in Chania",
      stay: "Casa Delfino",
      travel: "Walking",
      plan: ["Casa Delfino → Archaeological Museum of Chania → harbor café → shopping lanes → sunset walk"],
      stops: ["Archaeological Museum of Chania", "Harbor cafés"],
      dinner: "Flexible seafood or favorite repeat dinner",
      map: "https://www.google.com/maps/dir/Casa+Delfino+Hotel+%26+Spa/Archaeological+Museum+of+Chania/Old+Venetian+Harbor+Chania/"
    },
    {
      day: 10,
      title: "Open Relax Day in Chania",
      stay: "Casa Delfino",
      travel: "None",
      plan: ["Sleep in", "Repeat favorite neighborhood or harbor walk", "Leave this open on purpose"],
      stops: ["Nea Chora Beach / waterfront lunch (optional)"],
      dinner: "Flexible",
      map: "https://www.google.com/maps/search/?api=1&query=Nea+Chora+Beach+Chania"
    },
    {
      day: 11,
      title: "Travel to Santorini",
      stay: "Astra Suites",
      travel: "Fly or Ferry Chania to Santorini",
      plan: ["Travel Chania to Santorini by best available flight or ferry", "Check in and settle into Imerovigli", "Walk the caldera path toward Fira"],
      stops: ["Imerovigli", "Fira walk"],
      dinner: "Anogi",
      map: "https://www.google.com/maps/dir/Astra+Suites+Santorini/Fira+Santorini/"
    },
    {
      day: 12,
      title: "Classic Santorini Day",
      stay: "Astra Suites",
      travel: "Walking",
      plan: ["Astra Suites → Skaros Rock viewpoint → hotel downtime → sunset dinner"],
      stops: ["Skaros Rock"],
      dinner: "Sunset dinner at The Athenian House",
      map: "https://www.google.com/maps/dir/Astra+Suites+Santorini/Skaros+Rock+Santorini/Astra+Suites+Santorini/"
    },
    {
      day: 13,
      title: "Villages and Real Santorini",
      stay: "Astra Suites",
      travel: "Car/Bus",
      plan: ["Astra Suites → Pyrgos → Exo Gonia → Metaxi Mas → optional Akrotiri → Astra Suites"],
      stops: ["Pyrgos", "Exo Gonia", "Akrotiri Archaeological Site"],
      dinner: "Metaxi Mas",
      map: "https://www.google.com/maps/dir/Astra+Suites+Santorini/Pyrgos+Kallistis/Exo+Gonia+Santorini/Metaxi+Mas+Santorini/Akrotiri+Archaeological+Site/Astra+Suites+Santorini/"
    },
    {
      day: 14,
      title: "Return to Athens Airport Hotel",
      stay: "Sofitel Athens Airport",
      travel: "Fly Santorini to Athens",
      plan: ["Fly Santorini to Athens", "Check into airport hotel", "Easy dinner and early night"],
      stops: ["Airport"],
      dinner: "Airport hotel dinner",
      map: "https://www.google.com/maps/search/?api=1&query=Athens+International+Airport+to+Sofitel+Athens+Airport"
    },
    {
      day: 15,
      title: "Fly Home",
      stay: "None",
      travel: "Fly Home",
      plan: ["Simple departure day", "No city transfer stress", "Clean finish"],
      stops: [],
      dinner: "None",
      map: "https://www.google.com/maps/search/?api=1&query=Sofitel+Athens+Airport+to+Athens+International+Airport"
    }
  ]
};
