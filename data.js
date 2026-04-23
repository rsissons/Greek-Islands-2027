const tripData = {
  theme: {
    duration: "14 Days",
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
      travel: "Airport to hotel via Athens Metro Line 3 or pre-booked taxi",
      plan: ["Arrive in Athens", "Check in and keep the day light", "Walk Plaka and Anafiotika", "Early dinner and early night"],
      stops: [
          {name: "Plaka", link: "https://www.google.com/maps/search/?api=1&query=Plaka+Athens", lat: 37.9729, lng: 23.7281}, 
          {name: "Anafiotika", link: "https://www.google.com/maps/search/?api=1&query=Anafiotika+Athens", lat: 37.9723, lng: 23.7275}
      ],
      dinner: {name: "Karamanlidika by Fanis (Skip lamb dishes)", link: "https://www.google.com/maps/search/?api=1&query=Karamanlidika+by+Fanis+Athens"},
      map: "https://www.google.com/maps/search/?api=1&query=Athens+International+Airport+to+COCO-MAT+Athens+BC"
    },
    {
      day: 2,
      title: "Acropolis and Historic Center",
      stay: "COCO-MAT Athens BC",
      travel: "Walking / Transit",
      plan: ["Hotel → Acropolis → Acropolis Museum → Monastiraki → rooftop drinks"],
      stops: [
          {name: "Acropolis", link: "https://www.google.com/maps/search/?api=1&query=Acropolis+of+Athens", lat: 37.9715, lng: 23.7257}, 
          {name: "Acropolis Museum", link: "https://www.google.com/maps/search/?api=1&query=Acropolis+Museum", lat: 37.9685, lng: 23.7285}, 
          {name: "Monastiraki Square", link: "https://www.google.com/maps/search/?api=1&query=Monastiraki+Square+Athens", lat: 37.9761, lng: 23.7261}
      ],
      dinner: "Return to Karamanlidika or another meat/seafood spot nearby",
      map: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Acropolis+of+Athens/Acropolis+Museum/Monastiraki+Square/"
    },
    {
      day: 3,
      title: "Markets and Neighborhoods",
      stay: "COCO-MAT Athens BC",
      travel: "Walking / Transit",
      plan: ["Hotel → Athens Central Market → Evripidou Street → Syntagma → National Garden"],
      stops: [
          {name: "Athens Central Market", link: "https://www.google.com/maps/search/?api=1&query=Athens+Central+Market", lat: 37.9814, lng: 23.7275}, 
          {name: "Evripidou Street", link: "https://www.google.com/maps/search/?api=1&query=Evripidou+Street+Athens", lat: 37.9806, lng: 23.7264}, 
          {name: "Syntagma Square", link: "https://www.google.com/maps/search/?api=1&query=Syntagma+Square+Athens", lat: 37.9753, lng: 23.7345}, 
          {name: "National Garden", link: "https://www.google.com/maps/search/?api=1&query=National+Garden+Athens", lat: 37.9732, lng: 23.7369}
      ],
      dinner: "Free night or repeat favorite Athens restaurant",
      map: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Athens+Central+Market/Evripidou+Street+Athens/Syntagma+Square/National+Garden+Athens/"
    },
    {
      day: 4,
      title: "Travel to Chania, Crete",
      stay: "Casa Delfino",
      travel: "Fly Athens to Chania. Chania Airport to hotel via KTEL bus or taxi",
      plan: ["Fly Athens to Chania", "Check in", "Sunset walk in the Venetian Harbor"],
      stops: [
          {name: "Venetian Harbor Chania", link: "https://www.google.com/maps/search/?api=1&query=Old+Venetian+Harbor+Chania", lat: 35.5172, lng: 24.0176}
      ],
      dinner: {name: "Tamam Restaurant", link: "https://www.google.com/maps/search/?api=1&query=Tamam+Restaurant+Chania"},
      map: "https://www.google.com/maps/search/?api=1&query=COCO-MAT+Athens+BC+to+Athens+International+Airport"
    },
    {
      day: 5,
      title: "Chania Old Town Day",
      stay: "Casa Delfino",
      travel: "Walking",
      plan: ["Casa Delfino → Venetian Harbor → Lighthouse walk → Old Town lanes → harbor drinks"],
      stops: [
          {name: "Lighthouse area", link: "https://www.google.com/maps/search/?api=1&query=Chania+Lighthouse", lat: 35.5190, lng: 24.0172}, 
          {name: "Old Town Chania", link: "https://www.google.com/maps/search/?api=1&query=Old+Town+Chania", lat: 35.5165, lng: 24.0178}
      ],
      dinner: "Tamam again or seafood in the harbor area",
      map: "https://www.google.com/maps/dir/Casa+Delfino+Hotel+%26+Spa/Old+Venetian+Harbor+Chania/Faross+Chania+Old+Venetian+Harbour/"
    },
    {
      day: 6,
      title: "Driver Wine and Olive Oil Tour Day",
      stay: "Casa Delfino",
      travel: "Private Driver Tour",
      plan: ["Olive oil tasting", "Winery visit", "Village lunch", "No lamb"],
      stops: [
          {name: "Chania wine region", link: "https://www.google.com/maps/search/?api=1&query=Chania+Crete+winery", lat: 35.4081, lng: 24.2001}, 
          {name: "Apokoronas villages", link: "https://www.google.com/maps/search/?api=1&query=Apokoronas+villages+Crete", lat: 35.4081, lng: 24.2001}
      ],
      dinner: "Flexible",
      map: "https://www.google.com/maps/search/?api=1&query=Chania+Crete+winery"
    },
    {
      day: 7,
      title: "West Crete Scenic Day",
      stay: "Casa Delfino",
      travel: "KTEL public bus from Chania to Falassarna Beach",
      plan: ["More scenery, less rushing", "Good day for photos and easy lunch"],
      stops: [
          {name: "Falassarna Beach or countryside villages", link: "https://www.google.com/maps/search/?api=1&query=Falassarna+Beach+Crete", lat: 35.4920, lng: 23.5794}
      ],
      dinner: "Flexible",
      map: "https://www.google.com/maps/dir/Casa+Delfino+Hotel+%26+Spa/Falassarna+Beach/Casa+Delfino+Hotel+%26+Spa/"
    },
    {
      day: 8,
      title: "Culture Day in Chania",
      stay: "Casa Delfino",
      travel: "Walking",
      plan: ["Casa Delfino → Archaeological Museum of Chania → harbor café → shopping lanes → sunset walk"],
      stops: [
          {name: "Archaeological Museum of Chania", link: "https://www.google.com/maps/search/?api=1&query=Archaeological+Museum+of+Chania", lat: 35.5186, lng: 24.0253}, 
          {name: "Harbor cafés", link: "https://www.google.com/maps/search/?api=1&query=Old+Venetian+Harbor+Chania+cafes", lat: 35.5173, lng: 24.0180}
      ],
      dinner: "Flexible seafood or favorite repeat dinner",
      map: "https://www.google.com/maps/dir/Casa+Delfino+Hotel+%26+Spa/Archaeological+Museum+of+Chania/Old+Venetian+Harbor+Chania/"
    },
    {
      day: 9,
      title: "Open Relax Day in Chania",
      stay: "Casa Delfino",
      travel: "None",
      plan: ["Sleep in", "Repeat favorite neighborhood or harbor walk", "Leave this open on purpose"],
      stops: [
          {name: "Nea Chora Beach / waterfront lunch (optional)", link: "https://www.google.com/maps/search/?api=1&query=Nea+Chora+Beach+Chania", lat: 35.5168, lng: 24.0044}
      ],
      dinner: "Flexible",
      map: "https://www.google.com/maps/search/?api=1&query=Nea+Chora+Beach+Chania"
    },
    {
      day: 10,
      title: "Travel to Santorini",
      stay: "Astra Suites",
      travel: "Fly or Ferry. Port/Airport to Astra Suites via pre-booked hotel transfer",
      plan: ["Travel Chania to Santorini by best available flight or ferry", "Check in and settle into Imerovigli", "Walk the caldera path toward Fira"],
      stops: [
          {name: "Imerovigli", link: "https://www.google.com/maps/search/?api=1&query=Imerovigli+Santorini", lat: 36.4346, lng: 25.4208}, 
          {name: "Fira walk", link: "https://www.google.com/maps/search/?api=1&query=Fira+Santorini", lat: 36.4216, lng: 25.4290}
      ],
      dinner: {name: "Anogi", link: "https://www.google.com/maps/search/?api=1&query=Anogi+Restaurant+Imerovigli+Santorini"},
      map: "https://www.google.com/maps/dir/Astra+Suites+Santorini/Fira+Santorini/"
    },
    {
      day: 11,
      title: "Classic Santorini Day",
      stay: "Astra Suites",
      travel: "Walking",
      plan: ["Astra Suites → Skaros Rock viewpoint → hotel downtime → sunset dinner"],
      stops: [
          {name: "Skaros Rock", link: "https://www.google.com/maps/search/?api=1&query=Skaros+Rock+Santorini", lat: 36.4326, lng: 25.4182}
      ],
      dinner: {name: "Sunset dinner at The Athenian House", link: "https://www.google.com/maps/search/?api=1&query=The+Athenian+House+Imerovigli+Santorini"},
      map: "https://www.google.com/maps/dir/Astra+Suites+Santorini/Skaros+Rock+Santorini/Astra+Suites+Santorini/"
    },
    {
      day: 12,
      title: "Villages and Real Santorini",
      stay: "Astra Suites",
      travel: "Hire a private driver/taxi for a half-day or use KTEL buses via Fira",
      plan: ["Astra Suites → Pyrgos → Exo Gonia → Metaxi Mas → optional Akrotiri → Astra Suites"],
      stops: [
          {name: "Pyrgos", link: "https://www.google.com/maps/search/?api=1&query=Pyrgos+Kallistis+Santorini", lat: 36.3833, lng: 25.4500}, 
          {name: "Exo Gonia", link: "https://www.google.com/maps/search/?api=1&query=Exo+Gonia+Santorini", lat: 36.3888, lng: 25.4616}, 
          {name: "Akrotiri Archaeological Site", link: "https://www.google.com/maps/search/?api=1&query=Akrotiri+Archaeological+Site", lat: 36.3514, lng: 25.4036}
      ],
      dinner: {name: "Metaxi Mas", link: "https://www.google.com/maps/search/?api=1&query=Metaxi+Mas+Exo+Gonia+Santorini"},
      map: "https://www.google.com/maps/dir/Astra+Suites+Santorini/Pyrgos+Kallistis/Exo+Gonia+Santorini/Metaxi+Mas+Santorini/Akrotiri+Archaeological+Site/Astra+Suites+Santorini/"
    },
    {
      day: 13,
      title: "Return to Athens Airport Hotel",
      stay: "Sofitel Athens Airport",
      travel: "Pre-booked taxi to Santorini Airport. Fly to Athens",
      plan: ["Fly Santorini to Athens", "Check into airport hotel", "Easy dinner and early night"],
      stops: [],
      dinner: "Airport hotel dinner",
      map: "https://www.google.com/maps/search/?api=1&query=Athens+International+Airport+to+Sofitel+Athens+Airport"
    },
    {
      day: 14,
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
