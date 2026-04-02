/* ========================================================
   ROHTAS TOURISM — ATTRACTION DATA
   ======================================================== */
const attractions = [
  {
    id: "rohtas-fort",
    name: "Rohtas Fort",
    category: "fort",
    tagline: "Sasaram, Bihar",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6shQnN_om_8jmxawKsCM-W3xUk-ETz6_Sw&s",
    description: "Discover the majestic fort on the Kaimur hills with breathtaking views.",
    overview: "Rohtas Fort, also known as Rohtasgarh Fort, is one of the most significant historical monuments in Bihar. Built by Sher Shah Suri in the 16th century, the fort stands on the Kaimur plateau and is surrounded by lush forests and dramatic landscapes. It attracts tourists, history lovers, photographers, and adventure seekers alike. The fort covers an area of about 48 km² and has 83 gates, making it one of the largest forts in India.",
    location: "Sasaram, Rohtas District, Bihar",
    bestTime: "October to March",
    entryFee: "Free",
    builtBy: "Sher Shah Suri",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
    ]
  },
  {
    id: "shergarh-fort",
    name: "Shergarh Fort",
    category: "fort",
    tagline: "Sasaram, Bihar",
    heroImage: "https://cdn.s3waas.gov.in/s3cbcb58ac2e496207586df2854b17995f/uploads/bfi_thumb/2022011320-scaled-pixydsuha18lijhc6hhyk74b10n4jr0iw04t02xqiy.jpg",
    description: "Experience the historic beauty of the fort built by Sher Shah Suri.",
    overview: "Shergarh Fort is a historically significant fort located in the Rohtas district of Bihar. Built during the reign of Sher Shah Suri, it served as a strategic military stronghold. The fort sits atop a hill providing panoramic views of the surrounding plains and is known for its impressive stone architecture, ancient gateways, and defensive walls that tell tales of medieval India.",
    location: "Sasaram, Rohtas District, Bihar",
    bestTime: "October to March",
    entryFee: "Free",
    builtBy: "Sher Shah Suri",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
    ]
  },
  {
    id: "gupta-dham",
    name: "Gupta Dham",
    category: "temple",
    tagline: "Kaimur Hills, Bihar",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65FNw7MqOq0-_YCKvgJF-ebNqeGcpPNqMiA&s",
    description: "Visit the ancient cave temple on the Kaimur hills, a place of devotion.",
    overview: "Gupta Dham is an ancient and revered cave temple located in the Kaimur hills of Rohtas district. It is a popular pilgrimage site where devotees come to seek blessings in a serene, natural setting. The temple is nestled deep within rock formations and surrounded by dense forests, making the journey itself a spiritually enriching experience. The site is particularly busy during Navratri and Shivratri festivals.",
    location: "Kaimur Hills, Rohtas District, Bihar",
    bestTime: "October to March",
    entryFee: "Free",
    builtBy: "Ancient Origin",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
    ]
  },
  {
    id: "manjhar-kund",
    name: "Manjhar Kund",
    category: "waterfall",
    tagline: "Kaimur Range, Bihar",
    heroImage: "https://rohtasdistrict.com/wp-content/uploads/2021/07/manjhar-kund-waterfall-1.jpg",
    description: "Relax by the beautiful waterfalls, especially enchanting during monsoon.",
    overview: "Manjhar Kund is a stunning waterfall located in the Kaimur range of Rohtas district. The water cascades down from a significant height into a natural pool below, creating a mesmerizing spectacle especially during the monsoon season (July–September). The surrounding area is lush with tropical vegetation, making it a perfect destination for nature lovers, photographers, and trekkers seeking an offbeat adventure.",
    location: "Kaimur Range, Rohtas District, Bihar",
    bestTime: "July to October (Monsoon)",
    entryFee: "Free",
    builtBy: "Natural Formation",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
    ]
  },
  {
    id: "karamchat-dam",
    name: "Karamchat Dam",
    category: "dam",
    tagline: "Rohtas District, Bihar",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Durgavati_dam.jpg/1200px-Durgavati_dam.jpg?20221106060753",
    description: "A serene engineering marvel set against the backdrop of vibrant hills.",
    overview: "Karamchat Dam is a beautiful reservoir situated in the Rohtas district. Built across a tributary, the dam creates a scenic lake surrounded by rolling hills and green vegetation. It serves as an important irrigation source for the region while also being a popular picnic spot for locals and tourists. The calm waters reflecting the sky and hills make it a photographer's paradise, especially during sunrise and sunset.",
    location: "Rohtas District, Bihar",
    bestTime: "October to March",
    entryFee: "Free",
    builtBy: "Government of Bihar",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
    ]
  },
  {
    id: "dhua-kund",
    name: "Dhua Kund",
    category: "waterfall",
    tagline: "Kaimur Hills, Bihar",
    heroImage: "https://pbs.twimg.com/media/GW4g0sfa8AEjqfS?format=png&name=900x900",
    description: "Witness the breathtaking views created by the dramatic plunge of these falls.",
    overview: "Dhua Kund is a spectacular waterfall in the Kaimur hills of Rohtas district. The name 'Dhua' meaning smoke in Hindi, comes from the mist that rises when the water crashes into the pool below, creating a smoke-like effect. This natural wonder is surrounded by dense forest and rocky terrain, making the trek to reach it an adventure in itself. The waterfall is at its most magnificent during and just after the monsoon season.",
    location: "Kaimur Hills, Rohtas District, Bihar",
    bestTime: "July to November",
    entryFee: "Free",
    builtBy: "Natural Formation",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
    ]
  },
  {
    id: "tarachandi-dham",
    name: "Maa Tarachandi Dham",
    category: "temple",
    tagline: "Sasaram, Bihar",
    heroImage: "https://pbs.twimg.com/media/FLlfYmTVkAQdOch.jpg",
    description: "One of the prominent Shakti Peethas attracting devotees from everywhere.",
    overview: "Maa Tarachandi Dham is one of the most revered Shakti Peethas in Bihar, located near Sasaram in Rohtas district. The temple is dedicated to Goddess Tara, a powerful form of the divine mother. Situated on a hilltop, the temple offers stunning views of the surrounding landscape. Thousands of devotees visit during Navratri, Durga Puja, and other Hindu festivals. The temple complex has been renovated over the years while maintaining its spiritual significance.",
    location: "Sasaram, Rohtas District, Bihar",
    bestTime: "Year-round (especially Navratri)",
    entryFee: "Free",
    builtBy: "Ancient Origin",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
    ]
  },
  {
    id: "indrapuri-barrage",
    name: "Indrapuri Barrage",
    category: "dam",
    tagline: "Indrapuri, Bihar",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtY2cZpFEH-ZZTcmHQWd74pX-KIFOMhOXKA&s",
    description: "Marvel at one of the longest barrages in the world, across the Sone River.",
    overview: "Indrapuri Barrage is an impressive engineering structure built across the Son River near Indrapuri in Rohtas district. It is one of the longest barrages in the world, spanning several kilometers. The barrage plays a crucial role in irrigation and flood management for the region. For visitors, the sheer scale of the structure and the vast expanse of the river make it a sight worth visiting, especially during the monsoon when the river is in full flow.",
    location: "Indrapuri, Rohtas District, Bihar",
    bestTime: "October to March",
    entryFee: "Free",
    builtBy: "Government of Bihar",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
    ]
  },
  {
    id: "kashish-waterfall",
    name: "Kashish Waterfall",
    category: "waterfall",
    tagline: "Kaimur Hills, Bihar",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjM1RxkYmJ_lGHh6R86RUaniCXfXE-Fs9z_w&s",
    description: "A natural treasure nestled in lush greenery, offering a perfect picnic spot.",
    overview: "Kashish Waterfall is a hidden gem in the Kaimur hills of Rohtas district. Surrounded by untouched natural beauty, this waterfall is a perfect destination for those seeking peace and tranquility away from the city. The water flows gracefully over rocky ledges into a crystal-clear pool below. The area around the waterfall is ideal for picnics, nature walks, and birdwatching.",
    location: "Kaimur Hills, Rohtas District, Bihar",
    bestTime: "July to November",
    entryFee: "Free",
    builtBy: "Natural Formation",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
    ]
  },
  {
    id: "tutula-bhawani",
    name: "Maa Tutula Bhawani Mandir & Waterfall",
    category: "temple",
    tagline: "Rohtas District, Bihar",
    heroImage: "https://pbs.twimg.com/media/Ed5v6ZnUEAAoVEU.jpg",
    description: "A unique destination featuring a majestic waterfall and a swaying bridge.",
    overview: "Maa Tutula Bhawani Mandir is a unique pilgrimage site that combines spiritual devotion with natural beauty. Located in the Rohtas district, the temple is situated near a beautiful waterfall with a swaying rope bridge that adds an element of adventure. The combination of the sacred temple, cascading waterfall, and the thrilling bridge crossing makes this one of the most memorable destinations in the district.",
    location: "Rohtas District, Bihar",
    bestTime: "October to March",
    entryFee: "Free",
    builtBy: "Ancient Origin",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
    ]
  },
  {
    id: "pilot-baba-dham",
    name: "Pilot Baba Dham",
    category: "temple",
    tagline: "Sasaram, Bihar",
    heroImage: "https://rohtasdistrict.com/wp-content/uploads/2021/01/pilot-baba-aashram-sasaram.jpeg",
    description: "A meticulously crafted temple and ashram known for grand architecture.",
    overview: "Pilot Baba Dham is a renowned ashram and temple complex located near Sasaram in Rohtas district. Named after the famous spiritual leader Pilot Baba (Captain Kapil Advait), the ashram is known for its grand architectural design and serene atmosphere. The complex serves as a center for meditation, yoga, and spiritual learning. The beautifully maintained gardens and impressive temple structures make it a peaceful retreat for visitors.",
    location: "Sasaram, Rohtas District, Bihar",
    bestTime: "Year-round",
    entryFee: "Free",
    builtBy: "Pilot Baba Trust",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
    ]
  },
  {
    id: "sher-shah-suri-tomb",
    name: "Sher Shah Suri Tomb",
    category: "fort",
    tagline: "Sasaram, Bihar",
    heroImage: "https://cdn.pixabay.com/photo/2022/03/11/15/40/mausoleum-7062500_1280.jpg",
    description: "An architectural masterpiece of Indo-Islamic design standing in a lake.",
    overview: "The Tomb of Sher Shah Suri is one of the finest examples of Indo-Islamic architecture in India. Located in Sasaram, Rohtas district, this magnificent mausoleum stands in the middle of an artificial lake, creating a stunning reflection. Built in 1545 AD, the octagonal sandstone structure rises to a height of 122 feet and is topped by a majestic dome. It is a protected monument under the Archaeological Survey of India and attracts architecture enthusiasts and history buffs from around the world.",
    location: "Sasaram, Rohtas District, Bihar",
    bestTime: "October to March",
    entryFee: "₹25 (Indian), ₹300 (Foreign)",
    builtBy: "Afghan Architecture, 1545 AD",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
    ]
  },
  {
    id: "mundeswari-mandir",
    name: "Maa Mundeswari Mandir",
    category: "temple",
    tagline: "Kaimur Hills, Bihar",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGYftzfUN1LZ_H_fS1R5wDsj78YlKV5JX-A&s",
    description: "Visit one of the oldest functional Hindu temples in India.",
    overview: "Maa Mundeswari Mandir, situated atop the Kaimur hills at Ramgarh in Rohtas district, is considered one of the oldest functional Hindu temples in India. Archaeological evidence dates the temple back to 108 AD, making it over 1,900 years old. The octagonal temple is dedicated to Goddess Mundeswari (a form of Shakti) and Lord Shiva. The intricate stone carvings, ancient inscriptions, and the spiritual aura of the temple make it a must-visit for anyone interested in India's rich cultural heritage.",
    location: "Ramgarh, Kaimur Hills, Rohtas District, Bihar",
    bestTime: "Year-round (especially Navratri)",
    entryFee: "Free",
    builtBy: "Ancient Origin (~108 AD)",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
    ]
  }
];

// Category labels for filter
const categories = {
  all: "All Places",
  fort: "Forts & Monuments",
  waterfall: "Waterfalls",
  temple: "Temples",
  dam: "Dams & Barrages"
};

// Helper — find attraction by ID
function getAttraction(id) {
  return attractions.find(a => a.id === id) || null;
}

// Helper — get category label
function getCategoryLabel(cat) {
  return categories[cat] || cat;
}
