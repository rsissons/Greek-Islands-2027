const option1 = {
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
    },
    {
      name: "Santorini Luxury Catamaran Sunset Cruise",
      desc: "Small-group catamaran sailing with caldera views, swimming, and an onboard BBQ dinner.",
      link: "https://www.getyourguide.com/santorini-l753/santorini-private-catamaran-cruise-with-bbq-meal-and-drinks-t166289/"
    },
    {
      name: "Gramvousa & Balos Lagoon Boat Cruise",
      desc: "Full-day epic boat cruise departing from Kissamos Port to the famous turquoise waters of Balos Lagoon.",
      link: "https://www.viator.com/tours/Crete/Balos-and-Gramvousa-Luxury-Catamaran-Cruise-with-Meal/d960-124964P22"
    }
  ],
  days: [
    {
      day: 1,
      title: "Arrive in Athens",
      stay: "COCO-MAT Athens BC",
      travel: "Airport to hotel via Athens Metro Line 3 or pre-booked taxi",
      plan: ["Arrive in Athens", "Check in and relax", "Walk the Grand Promenade", "Rooftop Acropolis dinner"],
      stops: [
          {name: "Dionysiou Areopagitou Promenade", desc: "A gorgeous, wide, pedestrian-only walkway looping around the base of the Acropolis. <strong>Enjoy a flat, relaxing sunset stroll listening to local street musicians.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Dionysiou+Areopagitou", lat: 37.9701, lng: 23.7252}, 
          {name: "Thissio Neighborhood", desc: "A lively, upscale neighborhood at the end of the promenade. <strong>Browse the evening artisan stalls and find a perfect rooftop table.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Thissio+Athens", lat: 37.9760, lng: 23.7214}
      ],
      dinner: {name: "Kuzina (Modern Greek & Acropolis Views)", link: "https://www.google.com/maps/search/?api=1&query=Kuzina+Restaurant+Athens"},
      maps: [
          {name: "Airport to Hotel Directions", link: "https://www.google.com/maps/dir/Athens+International+Airport/COCO-MAT+Athens+BC/"},
          {name: "Walking Directions (The Grand Promenade)", link: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Dionysiou+Areopagitou/Kuzina+Athens/"}
      ]
    },
    {
      day: 2,
      title: "Athenian Riviera Coastal Day",
      stay: "COCO-MAT Athens BC",
      travel: "Taxi, Tram, or <a href='https://www.welcomepickups.com/athens/' target='_blank' style='color: var(--clr-light-blue); text-decoration: underline;'>Private Driver</a>",
      plan: ["Hotel → Lake Vouliagmeni (Thermal Springs) → Astir Beach → Coastal Sunset Drinks"],
      stops: [
          {name: "Lake Vouliagmeni", desc: "A stunning natural thermal spa lake surrounded by limestone caves. <strong>Spend the morning floating and relaxing in the healing waters.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Lake+Vouliagmeni+Athens", lat: 37.8078, lng: 23.7845}, 
          {name: "Astir Beach", desc: "A luxury beach club on the Athenian Riviera. <strong>Grab a sunbed, enjoy the crystal-clear water, and stay for coastal sunset drinks.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Astir+Beach+Athens", lat: 37.8038, lng: 23.7744}
      ],
      dinner: "Coastal seafood dinner in Vouliagmeni before heading back",
      map: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Lake+Vouliagmeni/Astir+Beach/"
    },
    {
      day: 3,
      title: "Coastal Drive & Cape Sounion Sunset",
      stay: "COCO-MAT Athens BC",
      travel: "<a href='https://www.welcomepickups.com/athens/' target='_blank' style='color: var(--clr-light-blue); text-decoration: underline;'>Private Driver / Luxury Transfer</a>",
      plan: ["COCO-MAT Athens BC → Flisvos Marina → Glyfada Shopping District → Cape Sounion (Temple of Poseidon)"],
      stops: [
          {name: "Flisvos Marina", desc: "A mega-yacht marina in the upscale Paleo Faliro neighborhood. <strong>Grab a coffee and stroll along the promenade admiring the incredible luxury yachts.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Flisvos+Marina", lat: 37.9304, lng: 23.6841}, 
          {name: "Glyfada", desc: "The 'Beverly Hills of Greece'. <strong>Stop here for upscale boutique shopping and a chic coastal lunch before heading to the Cape.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Glyfada+Athens", lat: 37.8624, lng: 23.7538}, 
          {name: "Temple of Poseidon (Cape Sounion)", desc: "Perched dramatically on the very edge of the peninsula. <strong>Watch one of the most famous sunsets in Greece over the Aegean Sea.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Temple+of+Poseidon+Sounion", lat: 37.6501, lng: 24.0245}
      ],
      dinner: {name: "Elias Fish Tavern (Cape Sounion)", link: "https://www.google.com/maps/search/?api=1&query=Elias+Fish+Tavern+Sounion"},
      map: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Flisvos+Marina/Glyfada/Temple+of+Poseidon/"
    },
    {
      day: 4,
      title: "Travel to Chania, Crete",
      stay: "Casa Delfino",
      travel: "Fly Athens to Chania. Chania Airport to hotel via KTEL bus or taxi",
      plan: ["Fly Athens to Chania", "Check in", "Sunset walk in the Venetian Harbor"],
      stops: [
          {name: "Venetian Harbor Chania", desc: "A beautiful 14th-century harbor. <strong>Take a sunset stroll along the water and admire the colorful Venetian architecture.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Old+Venetian+Harbor+Chania", lat: 35.5172, lng: 24.0176}
      ],
      dinner: {name: "Tamam Restaurant", link: "https://www.google.com/maps/search/?api=1&query=Tamam+Restaurant+Chania"},
      maps: [
          {name: "Athens Hotel to Airport", link: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Athens+International+Airport/"},
          {name: "Chania Airport to Casa Delfino", link: "https://www.google.com/maps/dir/Chania+International+Airport/Casa+Delfino+Hotel+Chania/"},
          {name: "Venetian Harbor Walking Route", link: "https://www.google.com/maps/dir/Casa+Delfino+Hotel+Chania/Old+Venetian+Harbor+Chania/"}
      ]
    },
    {
      day: 5,
      title: "Chania Old Town Day",
      stay: "Casa Delfino",
      travel: "Walking",
      plan: ["Casa Delfino → Venetian Harbor → Lighthouse walk → Old Town lanes → harbor drinks"],
      stops: [
          {name: "Lighthouse area", desc: "An iconic Egyptian-style lighthouse. <strong>Walk out along the seawall for incredible panoramic views of the sea and the Old Town.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Chania+Lighthouse", lat: 35.5190, lng: 24.0172}, 
          {name: "Old Town Chania", desc: "A maze of historic alleyways packed with artisan shops. <strong>Wander through the jasmine-scented streets and browse local boutiques.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Old+Town+Chania", lat: 35.5165, lng: 24.0178}
      ],
      dinner: "Tamam again or seafood in the harbor area",
      map: "https://www.google.com/maps/dir/Casa+Delfino+Hotel+%26+Spa/Old+Venetian+Harbor+Chania/Faross+Chania+Old+Venetian+Harbour/"
    },
    {
      day: 6,
      title: "Driver Wine and Olive Oil Tour Day",
      stay: "Casa Delfino",
      travel: "<a href='https://www.welcomepickups.com/crete/' target='_blank' style='color: var(--clr-light-blue); text-decoration: underline;'>Private Driver Tour</a>",
      plan: ["Olive oil tasting", "Winery visit", "Village lunch", "No lamb"],
      stops: [
          {name: "Chania wine region", desc: "Rolling hills dotted with ancient olive groves. <strong>Enjoy private wine tastings at boutique, family-run vineyards.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Chania+Crete+winery", lat: 35.4081, lng: 24.2001}, 
          {name: "Apokoronas villages", desc: "Traditional, untouched mountain settlements. <strong>Experience authentic Cretan life and sit down for a massive local village lunch.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Apokoronas+villages+Crete", lat: 35.4081, lng: 24.2001}
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
          {name: "Falassarna Beach or countryside villages", desc: "A massive, pristine sandy beach. <strong>Relax by the crystal-clear water and grab an easy, slow lunch by the sea.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Falassarna+Beach+Crete", lat: 35.4920, lng: 23.5794}
      ],
      dinner: "Flexible",
      map: "https://www.google.com/maps/dir/Casa+Delfino+Hotel+%26+Spa/Falassarna+Beach/Casa+Delfino+Hotel+%26+Spa/"
    },
    {
      day: 8,
      title: "Balos Lagoon & Gramvousa Boat Cruise",
      stay: "Casa Delfino",
      travel: "KTEL Bus to Kissamos Port, then Boat Cruise",
      plan: ["Casa Delfino → Kissamos Port → Gramvousa Island → Balos Lagoon → Return to Chania"],
      stops: [
          {name: "Kissamos Port", desc: "The rugged northwest port of Crete. <strong>Board your morning boat and set sail for the lagoon.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Kissamos+Port+Crete", lat: 35.5186, lng: 23.6366}, 
          {name: "Gramvousa Island", desc: "An uninhabited island featuring a striking Venetian fortress. <strong>Hike up to the castle ruins or swim near the famous shipwreck.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Gramvousa+Island+Crete", lat: 35.6083, lng: 23.5786},
          {name: "Balos Lagoon", desc: "One of Greece's most famous beaches. <strong>Wade in the spectacular, warm turquoise water and relax on the pink-tinged sand.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Balos+Lagoon+Crete", lat: 35.5815, lng: 23.5908}
      ],
      tour: {name: "Gramvousa & Balos Lagoon Boat Cruise", link: "https://www.viator.com/tours/Crete/Balos-and-Gramvousa-Luxury-Catamaran-Cruise-with-Meal/d960-124964P22"},
      dinner: "Flexible dinner in Chania Harbor after the full-day cruise",
      map: "https://www.google.com/maps/dir/Casa+Delfino+Hotel+%26+Spa/Kissamos+Port/"
    },
    {
      day: 9,
      title: "Open Relax Day in Chania",
      stay: "Casa Delfino",
      travel: "None",
      plan: ["Sleep in", "Repeat favorite neighborhood or harbor walk", "Leave this open on purpose"],
      stops: [
          {name: "Nea Chora Beach / waterfront lunch (optional)", desc: "A laid-back, sandy beach just a short walk from Chania's center. <strong>Grab a table at a waterfront fish taverna for a lazy lunch.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Nea+Chora+Beach+Chania", lat: 35.5168, lng: 24.0044}
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
          {name: "Imerovigli", desc: "The highest and most romantic village on the caldera. <strong>Check into your hotel, settle in, and soak up the absolute best views in Santorini.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Imerovigli+Santorini", lat: 36.4346, lng: 25.4208}, 
          {name: "Fira walk", desc: "The spectacular cliffside path connecting the villages. <strong>Take a breathtaking, highly photogenic walk along the edge of the volcano.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Fira+Santorini", lat: 36.4216, lng: 25.4290}
      ],
      dinner: {name: "Anogi", link: "https://www.google.com/maps/search/?api=1&query=Anogi+Restaurant+Imerovigli+Santorini"},
      maps: [
          {name: "Port/Airport to Astra Suites", link: "https://www.google.com/maps/dir/Santorini+Airport/Astra+Suites+Santorini/"},
          {name: "Walking Directions (Imerovigli to Fira)", link: "https://www.google.com/maps/dir/Astra+Suites+Santorini/Fira+Santorini/"}
      ]
    },
    {
      day: 11,
      title: "Classic Santorini Day",
      stay: "Astra Suites",
      travel: "Walking",
      plan: ["Astra Suites → Skaros Rock viewpoint → hotel downtime → sunset dinner"],
      stops: [
          {name: "Skaros Rock", desc: "A dramatic rocky headland jutting into the caldera. <strong>Hike out to this medieval capital ruin for an incredible panoramic viewpoint.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Skaros+Rock+Santorini", lat: 36.4326, lng: 25.4182}
      ],
      dinner: {name: "Sunset dinner at The Athenian House", link: "https://www.google.com/maps/search/?api=1&query=The+Athenian+House+Imerovigli+Santorini"},
      map: "https://www.google.com/maps/dir/Astra+Suites+Santorini/Skaros+Rock+Santorini/Astra+Suites+Santorini/"
    },
    {
      day: 12,
      title: "Villages and Beach Afternoon",
      stay: "Astra Suites",
      travel: "Hire a <a href='https://www.welcomepickups.com/santorini/' target='_blank' style='color: var(--clr-light-blue); text-decoration: underline;'>private driver/taxi</a> for a half-day",
      plan: ["Astra Suites → Pyrgos → Exo Gonia (Lunch at Metaxi Mas) → Perivolos Black Sand Beach → Catamaran Sunset Cruise"],
      stops: [
          {name: "Pyrgos", desc: "The highest village in Santorini. <strong>Explore this peaceful, less-touristy medieval settlement and climb to the top for 360-degree island views.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Pyrgos+Kallistis+Santorini", lat: 36.3833, lng: 25.4500}, 
          {name: "Exo Gonia", desc: "A quiet, traditional village home to classic Cycladic churches. <strong>Sit down for an unforgettable, authentic lunch at the famous Metaxi Mas tavern.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Exo+Gonia+Santorini", lat: 36.3888, lng: 25.4616}, 
          {name: "Perivolos Black Sand Beach", desc: "Santorini's most upscale stretch of black sand. <strong>Grab a plush cabana at a luxury beach club and enjoy a cocktail before your cruise.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Perivolos+Beach+Santorini", lat: 36.3396, lng: 25.4431},
          {name: "Vlychada Marina (Cruise Departure)", desc: "The southern port surrounded by dramatic pumice stone cliffs. <strong>Board your luxury catamaran for an unforgettable sunset cruise and BBQ dinner.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Vlychada+Marina+Santorini", lat: 36.3385, lng: 25.4335}
      ],
      dinner: {name: "BBQ Dinner onboard Catamaran", link: "https://www.getyourguide.com/santorini-l753/santorini-private-catamaran-cruise-with-bbq-meal-and-drinks-t166289/"},
      map: "https://www.google.com/maps/dir/Astra+Suites+Santorini/Pyrgos+Kallistis/Exo+Gonia+Santorini/Metaxi+Mas+Santorini/Perivolos+Beach+Santorini/Vlychada+Marina+Santorini/"
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
const option2 = {
  theme: {
    duration: "14 Days",
    dates: "April 2027",
    vibe: "Authentic Charm & High-Octane Glamour",
    dietary: "No lamb",
    locations: ["Athens", "Naxos", "Mykonos"]
  },
  hotels: [
    {
      name: "COCO-MAT Athens BC",
      location: "Athens",
      desc: "Premium eco-luxury hotel with unparalleled Acropolis views from the rooftop pool.",
      link: "https://www.coco-mat-hotels.com/athens-bc/"
    },
    {
      name: "18 Grapes Hotel",
      location: "Naxos",
      desc: "An exclusive, intimate boutique luxury hotel just steps from the sweeping dunes of Agios Prokopios.",
      link: "https://www.18grapes.com/"
    },
    {
      name: "Katikies Mykonos",
      location: "Mykonos",
      desc: "A stunning member of the Leading Hotels of the World, offering white-washed luxury overlooking Agios Ioannis beach.",
      link: "https://www.katikies.com/katikiesmykonos/"
    },
    {
      name: "Sofitel Athens Airport",
      location: "Athens Airport",
      desc: "The ultimate convenience for your final night. Located literally steps from the terminal.",
      link: "https://all.accor.com/hotel/3167/index.en.shtml"
    }
  ],
  tours: [
    {
      name: "Naxos Organic Farm-to-Table Experience",
      desc: "Private tour of an authentic mountain farm, cooking class, and wine tasting.",
      link: "https://www.viator.com/Naxos-tours/Food-Tours/d4850-g6-c80"
    },
    {
      name: "Mykonos Private Yacht to Delos & Rhenia",
      desc: "A luxurious day on a private catamaran exploring the ancient ruins of Delos and swimming in the pristine waters of Rhenia.",
      link: "https://www.getyourguide.com/mykonos-l414/cruises-boat-tours-tc48/"
    }
  ],
  days: [
    {
      day: 1,
      title: "Arrive in Athens",
      stay: "COCO-MAT Athens BC",
      travel: "Airport to hotel via pre-booked private driver",
      plan: ["Arrive in Athens", "Check in and relax", "Walk the Grand Promenade", "Rooftop Acropolis dinner"],
      stops: [
          {name: "Dionysiou Areopagitou Promenade", desc: "A gorgeous, wide, pedestrian-only walkway looping around the base of the Acropolis. <strong>Enjoy a flat, relaxing sunset stroll listening to local street musicians.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Dionysiou+Areopagitou", lat: 37.9701, lng: 23.7252}, 
          {name: "Thissio Neighborhood", desc: "A lively, upscale neighborhood at the end of the promenade. <strong>Browse the evening artisan stalls and find a perfect rooftop table.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Thissio+Athens", lat: 37.9760, lng: 23.7214}
      ],
      dinner: {name: "Kuzina (Modern Greek & Acropolis Views)", link: "https://www.google.com/maps/search/?api=1&query=Kuzina+Restaurant+Athens"},
      maps: [
          {name: "Airport to Hotel Directions", link: "https://www.google.com/maps/dir/Athens+International+Airport/COCO-MAT+Athens+BC/"},
          {name: "Walking Directions (The Grand Promenade)", link: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Dionysiou+Areopagitou/Kuzina+Athens/"}
      ]
    },
    {
      day: 2,
      title: "Athenian Riviera Coastal Day",
      stay: "COCO-MAT Athens BC",
      travel: "Taxi, Tram, or <a href='https://www.welcomepickups.com/athens/' target='_blank' style='color: var(--clr-light-blue); text-decoration: underline;'>Private Driver</a>",
      plan: ["Hotel → Lake Vouliagmeni (Thermal Springs) → Astir Beach → Coastal Sunset Drinks"],
      stops: [
          {name: "Lake Vouliagmeni", desc: "A stunning natural thermal spa lake surrounded by limestone caves. <strong>Spend the morning floating and relaxing in the healing waters.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Lake+Vouliagmeni+Athens", lat: 37.8078, lng: 23.7845}, 
          {name: "Astir Beach", desc: "A luxury beach club on the Athenian Riviera. <strong>Grab a sunbed, enjoy the crystal-clear water, and stay for coastal sunset drinks.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Astir+Beach+Athens", lat: 37.8038, lng: 23.7744}
      ],
      dinner: "Coastal seafood dinner in Vouliagmeni before heading back",
      map: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Lake+Vouliagmeni/Astir+Beach/"
    },
    {
      day: 3,
      title: "Coastal Drive & Cape Sounion Sunset",
      stay: "COCO-MAT Athens BC",
      travel: "<a href='https://www.welcomepickups.com/athens/' target='_blank' style='color: var(--clr-light-blue); text-decoration: underline;'>Private Driver / Luxury Transfer</a>",
      plan: ["COCO-MAT Athens BC → Flisvos Marina → Glyfada Shopping District → Cape Sounion (Temple of Poseidon)"],
      stops: [
          {name: "Flisvos Marina", desc: "A mega-yacht marina in the upscale Paleo Faliro neighborhood. <strong>Grab a coffee and stroll along the promenade admiring the incredible luxury yachts.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Flisvos+Marina", lat: 37.9304, lng: 23.6841}, 
          {name: "Glyfada", desc: "The 'Beverly Hills of Greece'. <strong>Stop here for upscale boutique shopping and a chic coastal lunch before heading to the Cape.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Glyfada+Athens", lat: 37.8624, lng: 23.7538}, 
          {name: "Temple of Poseidon (Cape Sounion)", desc: "Perched dramatically on the very edge of the peninsula. <strong>Watch one of the most famous sunsets in Greece over the Aegean Sea.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Temple+of+Poseidon+Sounion", lat: 37.6501, lng: 24.0245}
      ],
      dinner: {name: "Elias Fish Tavern (Cape Sounion)", link: "https://www.google.com/maps/search/?api=1&query=Elias+Fish+Tavern+Sounion"},
      map: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Flisvos+Marina/Glyfada/Temple+of+Poseidon/"
    },
    {
      day: 4,
      title: "Travel to Naxos",
      stay: "18 Grapes Hotel",
      travel: "Fly or Ferry from Athens. Private transfer to Agios Prokopios",
      plan: ["Travel to Naxos", "Check into luxury boutique hotel", "Relax on the beach"],
      stops: [
          {name: "Agios Prokopios Beach", desc: "One of the most spectacular, sweeping white sand beaches in Europe. <strong>Spend the afternoon unwinding in your luxury suite or lounging on the sand.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Agios+Prokopios+Beach+Naxos", lat: 37.0759, lng: 25.3512}
      ],
      dinner: {name: "Macao Beach Project", link: "https://www.google.com/maps/search/?api=1&query=Macao+Beach+Project+Naxos"},
      maps: [
          {name: "Athens Hotel to Port/Airport", link: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Piraeus+Port/"},
          {name: "Naxos Port to 18 Grapes", link: "https://www.google.com/maps/dir/Naxos+Port/18+Grapes+Hotel+Naxos/"}
      ]
    },
    {
      day: 5,
      title: "Naxos Mountain Villages & Farm",
      stay: "18 Grapes Hotel",
      travel: "Private Driver / Tour Guide",
      plan: ["Morning pickup", "Chalki Village", "Apeiranthos Village", "Organic Farm-to-Table Experience"],
      stops: [
          {name: "Chalki", desc: "The old capital of Naxos with beautiful Venetian architecture. <strong>Taste the local Kitron liqueur at the Vallindras distillery.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Chalki+Naxos", lat: 37.0628, lng: 25.4824},
          {name: "Apeiranthos", desc: "The 'marble village' built high in the mountains. <strong>Wander the marble-paved alleys and enjoy incredible mountain views.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Apeiranthos+Naxos", lat: 37.0716, lng: 25.5204}
      ],
      tour: {name: "Naxos Organic Farm-to-Table Experience", link: "https://www.viator.com/Naxos-tours/Food-Tours/d4850-g6-c80"},
      dinner: "Late afternoon heavy feast at the farm",
      map: "https://www.google.com/maps/dir/18+Grapes+Hotel+Naxos/Chalki+Naxos/Apeiranthos+Naxos/"
    },
    {
      day: 6,
      title: "Beach Club Luxury",
      stay: "18 Grapes Hotel",
      travel: "Walking / Taxi",
      plan: ["Sleep in", "Agia Anna Beach", "Plaka Beach", "Sunset cocktails"],
      stops: [
          {name: "Plaka Beach", desc: "A seemingly endless stretch of soft sand. <strong>Reserve a plush daybed at a high-end beach club for a day of absolute relaxation.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Plaka+Beach+Naxos", lat: 37.0450, lng: 25.3650}
      ],
      dinner: {name: "Tortuga Beach Bar & Restaurant", link: "https://www.google.com/maps/search/?api=1&query=Tortuga+Naxos"},
      map: "https://www.google.com/maps/dir/18+Grapes+Hotel+Naxos/Plaka+Beach+Naxos/"
    },
    {
      day: 7,
      title: "Naxos Town (Chora) & Portara",
      stay: "18 Grapes Hotel",
      travel: "Bus or Taxi to Chora",
      plan: ["Morning at the hotel pool", "Afternoon in Chora", "Sunset at the Portara"],
      stops: [
          {name: "Naxos Chora (Old Town)", desc: "A maze of steep, winding whitewashed alleys leading up to a Venetian castle. <strong>Shop for local cheeses and crafts.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Naxos+Chora", lat: 37.1026, lng: 25.3765},
          {name: "The Portara", desc: "The massive ancient marble gateway to the unfinished Temple of Apollo. <strong>Walk out to the peninsula for an unforgettable sunset.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Portara+Naxos", lat: 37.1065, lng: 25.3734}
      ],
      dinner: {name: "Doukato", link: "https://www.google.com/maps/search/?api=1&query=Doukato+Restaurant+Naxos"},
      map: "https://www.google.com/maps/dir/Naxos+Chora/Portara+Naxos/"
    },
    {
      day: 8,
      title: "Temple of Demeter & Southern Beaches",
      stay: "18 Grapes Hotel",
      travel: "Rental Car or Private Driver",
      plan: ["Temple of Demeter", "Alyko Cedar Forest", "Hawaii Beach"],
      stops: [
          {name: "Temple of Demeter", desc: "Beautifully restored 6th-century BC marble temple surrounded by fertile valleys. <strong>Explore the ancient ruins.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Temple+of+Demeter+Naxos", lat: 37.0308, lng: 25.4312},
          {name: "Alyko & Hawaii Beach", desc: "A protected cedar forest hiding pristine, wild coves. <strong>Hike down to the secluded Hawaii Beach for crystal waters.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Alyko+Beach+Naxos", lat: 36.9806, lng: 25.3857}
      ],
      dinner: {name: "Axiotissa (Must book far in advance!)", link: "https://www.google.com/maps/search/?api=1&query=Axiotissa+Taverna+Naxos"},
      map: "https://www.google.com/maps/dir/18+Grapes+Hotel/Temple+of+Demeter/Alyko+Beach+Naxos/"
    },
    {
      day: 9,
      title: "Travel to Mykonos",
      stay: "Katikies Mykonos",
      travel: "Fast Ferry (45 mins) from Naxos to Mykonos",
      plan: ["Check out", "Ferry to Mykonos", "Settle into luxury resort", "Dinner in Mykonos Town"],
      stops: [
          {name: "Mykonos Town (Chora)", desc: "The famous, dazzlingly white heart of Mykonos. <strong>Get lost in the chic boutiques and ultra-glamorous lanes.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Mykonos+Town", lat: 37.4467, lng: 25.3289},
          {name: "Little Venice", desc: "Colorful 18th-century fishing houses hanging right over the sea. <strong>A classic spot for sunset cocktails.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Little+Venice+Mykonos", lat: 37.4464, lng: 25.3259}
      ],
      dinner: {name: "Interni Restaurant (Mykonos Town)", link: "https://www.google.com/maps/search/?api=1&query=Interni+Mykonos"},
      maps: [
          {name: "Hotel to Naxos Port", link: "https://www.google.com/maps/dir/18+Grapes+Hotel/Naxos+Port/"},
          {name: "Mykonos Port to Hotel", link: "https://www.google.com/maps/dir/Mykonos+New+Port/Katikies+Mykonos/"}
      ]
    },
    {
      day: 10,
      title: "VIP Beach Club Experience",
      stay: "Katikies Mykonos",
      travel: "Hotel Transfer / Taxi",
      plan: ["Spend the day at a world-famous beach club", "Scorpios or Nammos", "Late evening sunset rituals"],
      stops: [
          {name: "Scorpios Mykonos", desc: "The island's most legendary boho-chic beach club. <strong>Reserve a cabana for the day and stay for their iconic sunset ritual and DJ sets.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Scorpios+Mykonos", lat: 37.4068, lng: 25.3468}
      ],
      dinner: {name: "Dinner at Scorpios", link: "https://www.google.com/maps/search/?api=1&query=Scorpios+Mykonos"},
      map: "https://www.google.com/maps/dir/Katikies+Mykonos/Scorpios+Mykonos/"
    },
    {
      day: 11,
      title: "Private Yacht to Delos",
      stay: "Katikies Mykonos",
      travel: "Private Catamaran / Yacht",
      plan: ["Morning departure", "Guided tour of Delos", "Swimming at Rhenia Island", "BBQ lunch on board"],
      stops: [
          {name: "Delos", desc: "The mythological birthplace of Apollo and Artemis, now an incredible archaeological site. <strong>Walk among ancient ruins with a private guide.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Delos+Island", lat: 37.3933, lng: 25.2711},
          {name: "Rhenia Island", desc: "An uninhabited island next to Delos with completely pristine, secluded coves. <strong>Drop anchor, swim in the turquoise water, and enjoy a private lunch.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Rhenia+Island", lat: 37.4072, lng: 25.2285}
      ],
      tour: {name: "Mykonos Private Yacht to Delos & Rhenia", link: "https://www.getyourguide.com/mykonos-l414/cruises-boat-tours-tc48/"},
      dinner: {name: "Sea Satin Market (Under the Windmills)", link: "https://www.google.com/maps/search/?api=1&query=Sea+Satin+Market+Mykonos"},
      map: "https://www.google.com/maps/dir/Katikies+Mykonos/Mykonos+Town/"
    },
    {
      day: 12,
      title: "Relax & Mykonos Windmills",
      stay: "Katikies Mykonos",
      travel: "Walking / Taxi",
      plan: ["Relaxing morning at the hotel pool", "Afternoon shopping in Chora", "Sunset at the iconic windmills"],
      stops: [
          {name: "Kato Mili (The Windmills)", desc: "The iconic 16th-century windmills overlooking the sea. <strong>Take perfect golden hour photos and enjoy your final island sunset.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Mykonos+Windmills", lat: 37.4447, lng: 25.3256}
      ],
      dinner: {name: "Kiki's Tavern (Agios Sostis) - Lunch/Early Dinner", link: "https://www.google.com/maps/search/?api=1&query=Kikis+Tavern+Mykonos"},
      map: "https://www.google.com/maps/dir/Katikies+Mykonos/Mykonos+Windmills/"
    },
    {
      day: 13,
      title: "Travel Back to Athens",
      stay: "Sofitel Athens Airport",
      travel: "Fly Mykonos to Athens (approx 40 mins)",
      plan: ["Enjoy a final luxurious breakfast", "Fly back to Athens", "Check into airport hotel", "Rest before the long flight home"],
      stops: [
          {name: "Sofitel Athens Airport", desc: "Your ultra-convenient hotel located exactly 50 meters from the arrivals terminal. <strong>Unpack, unwind, and enjoy a stress-free final evening.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Sofitel+Athens+Airport", lat: 37.9366, lng: 23.9455}
      ],
      dinner: {name: "Mesoghaia (Inside the Sofitel)", link: "https://www.google.com/maps/search/?api=1&query=Sofitel+Athens+Airport"},
      map: "https://www.google.com/maps/dir/Katikies+Mykonos/Mykonos+Airport/"
    },
    {
      day: 14,
      title: "Departure",
      stay: "None",
      travel: "Walk across the street to the terminal",
      plan: ["Wake up refreshed", "Walk to the terminal", "Fly home"],
      stops: [
          {name: "Athens International Airport", desc: "No taxis, no traffic. <strong>Simply walk across the street and board your flight home.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Athens+International+Airport", lat: 37.9363, lng: 23.9445}
      ],
      dinner: "None",
      map: "https://www.google.com/maps/dir/Sofitel+Athens+Airport/Athens+International+Airport/"
    }
  ]
};

const option3 = {
  theme: {
    duration: "14 Days",
    dates: "April 2027",
    vibe: "Hidden Gems & Dramatic Volcanic Coastlines",
    dietary: "No lamb",
    locations: ["Athens", "Milos", "Santorini"]
  },
  hotels: [
    {
      name: "COCO-MAT Athens BC",
      location: "Athens",
      desc: "Premium eco-luxury hotel with unparalleled Acropolis views from the rooftop pool.",
      link: "https://www.coco-mat-hotels.com/athens-bc/"
    },
    {
      name: "Domes White Coast Milos",
      location: "Milos",
      desc: "Adults-only luxury resort featuring private infinity pools for every suite and lunar-like coastal views.",
      link: "https://domesresorts.com/domeswhitecoastmilos/"
    },
    {
      name: "Astra Suites",
      location: "Santorini",
      desc: "Consistently ranked among the top 25 hotels in the world. Unbeatable caldera views in tranquil Imerovigli.",
      link: "https://www.astrasuites.com/"
    },
    {
      name: "Sofitel Athens Airport",
      location: "Athens Airport",
      desc: "The ultimate convenience for your final night. Located literally steps from the terminal.",
      link: "https://all.accor.com/hotel/3167/index.en.shtml"
    }
  ],
  tours: [
    {
      name: "Private Milos Yacht Tour (Kleftiko & Polyaigos)",
      desc: "A completely private, luxurious boat charter exploring the jaw-dropping pirate caves of Kleftiko.",
      link: "https://www.viator.com/Milos-tours/Cruises-Sailing-and-Water-Tours/d23253-g3"
    },
    {
      name: "Santorini Luxury Catamaran Sunset Cruise",
      desc: "Small-group catamaran sailing with caldera views, swimming, and an onboard BBQ dinner.",
      link: "https://www.getyourguide.com/santorini-l753/santorini-private-catamaran-cruise-with-bbq-meal-and-drinks-t166289/"
    }
  ],
  days: [
    {
      day: 1,
      title: "Arrive in Athens",
      stay: "COCO-MAT Athens BC",
      travel: "Airport to hotel via pre-booked private driver",
      plan: ["Arrive in Athens", "Check in and relax", "Walk the Grand Promenade", "Rooftop Acropolis dinner"],
      stops: [
          {name: "Dionysiou Areopagitou Promenade", desc: "A gorgeous, wide, pedestrian-only walkway looping around the base of the Acropolis. <strong>Enjoy a flat, relaxing sunset stroll listening to local street musicians.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Dionysiou+Areopagitou", lat: 37.9701, lng: 23.7252}, 
          {name: "Thissio Neighborhood", desc: "A lively, upscale neighborhood at the end of the promenade. <strong>Browse the evening artisan stalls and find a perfect rooftop table.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Thissio+Athens", lat: 37.9760, lng: 23.7214}
      ],
      dinner: {name: "Kuzina (Modern Greek & Acropolis Views)", link: "https://www.google.com/maps/search/?api=1&query=Kuzina+Restaurant+Athens"},
      maps: [
          {name: "Airport to Hotel Directions", link: "https://www.google.com/maps/dir/Athens+International+Airport/COCO-MAT+Athens+BC/"},
          {name: "Walking Directions (The Grand Promenade)", link: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Dionysiou+Areopagitou/Kuzina+Athens/"}
      ]
    },
    {
      day: 2,
      title: "Athenian Riviera Coastal Day",
      stay: "COCO-MAT Athens BC",
      travel: "Taxi, Tram, or <a href='https://www.welcomepickups.com/athens/' target='_blank' style='color: var(--clr-light-blue); text-decoration: underline;'>Private Driver</a>",
      plan: ["Hotel → Lake Vouliagmeni (Thermal Springs) → Astir Beach → Coastal Sunset Drinks"],
      stops: [
          {name: "Lake Vouliagmeni", desc: "A stunning natural thermal spa lake surrounded by limestone caves. <strong>Spend the morning floating and relaxing in the healing waters.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Lake+Vouliagmeni+Athens", lat: 37.8078, lng: 23.7845}, 
          {name: "Astir Beach", desc: "A luxury beach club on the Athenian Riviera. <strong>Grab a sunbed, enjoy the crystal-clear water, and stay for coastal sunset drinks.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Astir+Beach+Athens", lat: 37.8038, lng: 23.7744}
      ],
      dinner: "Coastal seafood dinner in Vouliagmeni before heading back",
      map: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Lake+Vouliagmeni/Astir+Beach/"
    },
    {
      day: 3,
      title: "Coastal Drive & Cape Sounion Sunset",
      stay: "COCO-MAT Athens BC",
      travel: "<a href='https://www.welcomepickups.com/athens/' target='_blank' style='color: var(--clr-light-blue); text-decoration: underline;'>Private Driver / Luxury Transfer</a>",
      plan: ["COCO-MAT Athens BC → Flisvos Marina → Glyfada Shopping District → Cape Sounion (Temple of Poseidon)"],
      stops: [
          {name: "Flisvos Marina", desc: "A mega-yacht marina in the upscale Paleo Faliro neighborhood. <strong>Grab a coffee and stroll along the promenade admiring the incredible luxury yachts.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Flisvos+Marina", lat: 37.9304, lng: 23.6841}, 
          {name: "Glyfada", desc: "The 'Beverly Hills of Greece'. <strong>Stop here for upscale boutique shopping and a chic coastal lunch before heading to the Cape.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Glyfada+Athens", lat: 37.8624, lng: 23.7538}, 
          {name: "Temple of Poseidon (Cape Sounion)", desc: "Perched dramatically on the very edge of the peninsula. <strong>Watch one of the most famous sunsets in Greece over the Aegean Sea.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Temple+of+Poseidon+Sounion", lat: 37.6501, lng: 24.0245}
      ],
      dinner: {name: "Elias Fish Tavern (Cape Sounion)", link: "https://www.google.com/maps/search/?api=1&query=Elias+Fish+Tavern+Sounion"},
      map: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Flisvos+Marina/Glyfada/Temple+of+Poseidon/"
    },
    {
      day: 4,
      title: "Travel to Milos",
      stay: "Domes White Coast",
      travel: "Fly or Fast Ferry to Milos",
      plan: ["Travel to Milos", "Check into luxury cliffside suite", "Watch the sunset from your private pool"],
      stops: [
          {name: "Domes White Coast", desc: "Your breathtaking adults-only luxury resort. <strong>Settle into your suite and immediately jump into your private infinity pool overlooking the Aegean.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Domes+White+Coast+Milos", lat: 36.7570, lng: 24.4428}
      ],
      dinner: {name: "O! Hamos! Tavern (Adamas)", link: "https://www.google.com/maps/search/?api=1&query=O+Hamos+Milos"},
      maps: [
          {name: "Athens Hotel to Port/Airport", link: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Piraeus+Port/"},
          {name: "Milos Port to Hotel", link: "https://www.google.com/maps/dir/Milos+Port/Domes+White+Coast+Milos/"}
      ]
    },
    {
      day: 5,
      title: "Lunar Landscapes: Sarakiniko",
      stay: "Domes White Coast",
      travel: "Rental Car or ATV",
      plan: ["Morning at Sarakiniko", "Lunch in Pollonia", "Explore Plaka"],
      stops: [
          {name: "Sarakiniko Beach", desc: "The most famous lunar-like landscape in Greece. <strong>Arrive early to walk the smooth white volcanic rocks before the crowds.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Sarakiniko+Milos", lat: 36.7423, lng: 24.4589},
          {name: "Plaka (Milos Capital)", desc: "A picturesque, quiet hilltop village. <strong>Wander the narrow streets and hike up to the Kastro for a legendary sunset.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Plaka+Milos", lat: 36.7441, lng: 24.4231}
      ],
      dinner: {name: "Astakas (Klima - Seaside Dining)", link: "https://www.google.com/maps/search/?api=1&query=Astakas+Milos"},
      map: "https://www.google.com/maps/dir/Domes+White+Coast/Sarakiniko/Plaka+Milos/"
    },
    {
      day: 6,
      title: "Private Yacht to Kleftiko",
      stay: "Domes White Coast",
      travel: "Private Boat Charter",
      plan: ["Full day private boat tour", "Swim in Kleftiko pirate caves", "Visit Polyaigos"],
      stops: [
          {name: "Kleftiko", desc: "A massive complex of towering white rock formations and sea caves accessible only by boat. <strong>Swim in the crystal-clear, electric blue waters.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Kleftiko+Milos", lat: 36.6433, lng: 24.3364},
          {name: "Polyaigos Island", desc: "The largest uninhabited island in Greece, famous for its 'Blue Lagoon'. <strong>Enjoy a private onboard lunch in utter isolation.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Polyaigos", lat: 36.7644, lng: 24.6366}
      ],
      tour: {name: "Private Milos Yacht Tour (Kleftiko & Polyaigos)", link: "https://www.viator.com/Milos-tours/Cruises-Sailing-and-Water-Tours/d23253-g3"},
      dinner: {name: "Medusa (Mandrakia)", link: "https://www.google.com/maps/search/?api=1&query=Medusa+Milos"},
      map: "https://www.google.com/maps/dir/Domes+White+Coast/Adamas+Port/"
    },
    {
      day: 7,
      title: "Firopotamos & Colorful Syrmata",
      stay: "Domes White Coast",
      travel: "Rental Car or ATV",
      plan: ["Explore Firopotamos", "Visit Mandrakia", "Afternoon wine tasting"],
      stops: [
          {name: "Firopotamos", desc: "A gorgeous bay framed by traditional 'syrmata' (colorful fisherman's boat garages). <strong>Swim in the calm, vibrant waters.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Firopotamos+Milos", lat: 36.7561, lng: 24.4284},
          {name: "Kostantakis Cave Winery", desc: "A boutique winery set in volcanic caves. <strong>Taste rare, volcanic island wines.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Kostantakis+Winery+Milos", lat: 36.7578, lng: 24.5213}
      ],
      dinner: {name: "Sirocco (Volcanic Sand Restaurant)", link: "https://www.google.com/maps/search/?api=1&query=Sirocco+Paleochori+Milos"},
      map: "https://www.google.com/maps/dir/Domes+White+Coast/Firopotamos/Kostantakis+Winery/"
    },
    {
      day: 8,
      title: "Travel to Santorini",
      stay: "Astra Suites",
      travel: "Fast Ferry (Approx 2 hours) to Santorini",
      plan: ["Travel to Santorini", "Check into Astra Suites", "Walk the caldera path toward Fira"],
      stops: [
          {name: "Imerovigli", desc: "The highest and most romantic village on the caldera. <strong>Settle in and soak up the absolute best views in Santorini.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Imerovigli+Santorini", lat: 36.4346, lng: 25.4208}, 
          {name: "Fira walk", desc: "The spectacular cliffside path connecting the villages. <strong>Take a breathtaking, highly photogenic walk along the edge of the volcano.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Fira+Santorini", lat: 36.4216, lng: 25.4290}
      ],
      dinner: {name: "Anogi", link: "https://www.google.com/maps/search/?api=1&query=Anogi+Restaurant+Imerovigli+Santorini"},
      maps: [
          {name: "Milos Hotel to Port", link: "https://www.google.com/maps/dir/Domes+White+Coast/Milos+Port/"},
          {name: "Santorini Port to Astra Suites", link: "https://www.google.com/maps/dir/Santorini+Port/Astra+Suites+Santorini/"}
      ]
    },
    {
      day: 9,
      title: "Classic Santorini Day",
      stay: "Astra Suites",
      travel: "Walking or Taxi",
      plan: ["Morning pool relaxation", "Hike to Skaros Rock", "Sunset dinner in Oia"],
      stops: [
          {name: "Skaros Rock", desc: "A dramatic rocky headland jutting out into the caldera. <strong>Hike out to the ruins of the medieval castle for epic 360-degree views.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Skaros+Rock+Santorini", lat: 36.4326, lng: 25.4184},
          {name: "Oia Village", desc: "The most famous, picture-perfect village in Greece. <strong>Wander the marble streets, browse boutiques, and secure a dinner spot for the sunset.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Oia+Santorini", lat: 36.4618, lng: 25.3753}
      ],
      dinner: {name: "Ammoudi Fish Tavern (Down in the bay)", link: "https://www.google.com/maps/search/?api=1&query=Ammoudi+Fish+Tavern+Santorini"},
      map: "https://www.google.com/maps/dir/Astra+Suites+Santorini/Skaros+Rock/Ammoudi+Bay+Santorini/"
    },
    {
      day: 10,
      title: "Luxury Catamaran Sunset Cruise",
      stay: "Astra Suites",
      travel: "<a href='https://www.welcomepickups.com/santorini/' target='_blank' style='color: var(--clr-light-blue); text-decoration: underline;'>Private Hotel Transfer</a>",
      plan: ["Leisurely morning", "Perivolos Black Sand Beach", "Afternoon Catamaran Cruise", "BBQ Dinner on board"],
      stops: [
          {name: "Perivolos Black Sand Beach", desc: "Santorini's most upscale stretch of black sand. <strong>Grab a plush cabana at a luxury beach club and enjoy a cocktail before your cruise.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Perivolos+Beach+Santorini", lat: 36.3396, lng: 25.4431},
          {name: "Vlychada Marina (Cruise Departure)", desc: "The southern port surrounded by dramatic pumice stone cliffs. <strong>Board your luxury catamaran for an unforgettable sunset cruise and BBQ dinner.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Vlychada+Marina+Santorini", lat: 36.3385, lng: 25.4335}
      ],
      tour: {name: "Santorini Luxury Catamaran Sunset Cruise", link: "https://www.getyourguide.com/santorini-l753/santorini-private-catamaran-cruise-with-bbq-meal-and-drinks-t166289/"},
      dinner: "BBQ Dinner onboard Catamaran",
      map: "https://www.google.com/maps/dir/Astra+Suites+Santorini/Perivolos+Beach+Santorini/Vlychada+Marina+Santorini/"
    },
    {
      day: 11,
      title: "Wine Tasting & Megalochori",
      stay: "Astra Suites",
      travel: "Taxi or Private Driver",
      plan: ["Explore the quiet village of Megalochori", "Wine tasting overlooking the caldera"],
      stops: [
          {name: "Megalochori", desc: "A traditional, peaceful village far from the crowds. <strong>Walk through the bell tower archway and explore the beautiful mansions.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Megalochori+Santorini", lat: 36.3756, lng: 25.4357},
          {name: "Santo Wines", desc: "Santorini's most famous winery, built into the cliff. <strong>Enjoy a wine flight featuring the local Assyrtiko grape with spectacular views.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Santo+Wines+Santorini", lat: 36.3860, lng: 25.4328}
      ],
      dinner: {name: "Metaxi Mas (Inland, widely considered the best food on the island)", link: "https://www.google.com/maps/search/?api=1&query=Metaxi+Mas+Santorini"},
      map: "https://www.google.com/maps/dir/Astra+Suites+Santorini/Megalochori+Santorini/Santo+Wines/Metaxi+Mas/"
    },
    {
      day: 12,
      title: "Ultimate Relaxation",
      stay: "Astra Suites",
      travel: "Walking",
      plan: ["No schedule", "Spa treatments at the hotel", "Final romantic caldera dinner"],
      stops: [
          {name: "Astra Suites Infinity Pool", desc: "The ultimate luxury perk. <strong>Order room service, relax by the pool, and soak up the views one last time without lifting a finger.</strong>", link: "https://www.astrasuites.com/", lat: 36.4346, lng: 25.4208}
      ],
      dinner: {name: "La Maison (Imerovigli)", link: "https://www.google.com/maps/search/?api=1&query=La+Maison+Santorini"},
      map: "https://www.google.com/maps/dir/Astra+Suites+Santorini/La+Maison+Santorini/"
    },
    {
      day: 13,
      title: "Travel Back to Athens",
      stay: "Sofitel Athens Airport",
      travel: "Fly Santorini to Athens (approx 45 mins)",
      plan: ["Enjoy a final luxurious breakfast", "Fly back to Athens", "Check into airport hotel", "Rest before the long flight home"],
      stops: [
          {name: "Sofitel Athens Airport", desc: "Your ultra-convenient hotel located exactly 50 meters from the arrivals terminal. <strong>Unpack, unwind, and enjoy a stress-free final evening.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Sofitel+Athens+Airport", lat: 37.9366, lng: 23.9455}
      ],
      dinner: {name: "Mesoghaia (Inside the Sofitel)", link: "https://www.google.com/maps/search/?api=1&query=Sofitel+Athens+Airport"},
      map: "https://www.google.com/maps/dir/Astra+Suites+Santorini/Santorini+Airport/"
    },
    {
      day: 14,
      title: "Departure",
      stay: "None",
      travel: "Walk across the street to the terminal",
      plan: ["Wake up refreshed", "Walk to the terminal", "Fly home"],
      stops: [
          {name: "Athens International Airport", desc: "No taxis, no traffic. <strong>Simply walk across the street and board your flight home.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Athens+International+Airport", lat: 37.9363, lng: 23.9445}
      ],
      dinner: "None",
      map: "https://www.google.com/maps/dir/Sofitel+Athens+Airport/Athens+International+Airport/"
    }
  ]
};

const tripData = { option1, option2, option3 };

