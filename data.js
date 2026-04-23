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
    },
    {
      name: "Santorini Luxury Catamaran Sunset Cruise",
      desc: "Small-group catamaran sailing with caldera views, swimming, and an onboard BBQ dinner.",
      link: "https://www.getyourguide.com/santorini-l753/cruises-boat-tours-tc48/?sort=rating"
    },
    {
      name: "Gramvousa & Balos Lagoon Boat Cruise",
      desc: "Full-day epic boat cruise departing from Kissamos Port to the famous turquoise waters of Balos Lagoon.",
      link: "https://www.getyourguide.com/chania-l413/from-chania-gramvousa-island-and-balos-bay-full-day-tour-t353724/"
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
          {name: "Plaka", desc: "The oldest and most picturesque neighborhood in Athens. <strong>Wander the historic, narrow streets and browse the local artisan shops.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Plaka+Athens", lat: 37.9729, lng: 23.7281}, 
          {name: "Anafiotika", desc: "A tiny, scenic village oasis clinging to the Acropolis hill. <strong>Get lost in the maze of whitewashed, Cycladic-style pathways.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Anafiotika+Athens", lat: 37.9723, lng: 23.7275}
      ],
      dinner: {name: "Karamanlidika by Fanis (Skip lamb dishes)", link: "https://www.google.com/maps/search/?api=1&query=Karamanlidika+by+Fanis+Athens"},
      map: "https://www.google.com/maps/search/?api=1&query=Athens+International+Airport+to+COCO-MAT+Athens+BC"
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
      plan: ["COCO-MAT Athens BC → Flisvos Marina → Lake Vouliagmeni → Cape Sounion (Temple of Poseidon)"],
      stops: [
          {name: "Flisvos Marina", desc: "A mega-yacht marina in the upscale Paleo Faliro neighborhood. <strong>Grab a coffee and stroll along the promenade admiring the incredible luxury yachts.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Flisvos+Marina", lat: 37.9304, lng: 23.6841}, 
          {name: "Lake Vouliagmeni", desc: "A spectacular hidden lake with therapeutic thermal waters surrounded by limestone caves. <strong>Stop here for a quick photo or a mineral bath.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Lake+Vouliagmeni", lat: 37.8078, lng: 23.7860}, 
          {name: "Temple of Poseidon (Cape Sounion)", desc: "Perched dramatically on the very edge of the peninsula. <strong>Watch one of the most famous sunsets in Greece over the Aegean Sea.</strong>", link: "https://www.google.com/maps/search/?api=1&query=Temple+of+Poseidon+Sounion", lat: 37.6501, lng: 24.0245}
      ],
      dinner: {name: "Elias Fish Tavern (Cape Sounion)", link: "https://www.google.com/maps/search/?api=1&query=Elias+Fish+Tavern+Sounion"},
      map: "https://www.google.com/maps/dir/COCO-MAT+Athens+BC/Flisvos+Marina/Lake+Vouliagmeni/Temple+of+Poseidon/"
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
      map: "https://www.google.com/maps/search/?api=1&query=COCO-MAT+Athens+BC+to+Athens+International+Airport"
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
      map: "https://www.google.com/maps/dir/Astra+Suites+Santorini/Fira+Santorini/"
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
      dinner: {name: "BBQ Dinner onboard Catamaran", link: "https://www.getyourguide.com/santorini-l753/cruises-boat-tours-tc48/?sort=rating"},
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
