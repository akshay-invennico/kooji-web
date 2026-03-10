import { Listing } from "@/types/listing";

export const ITEMS_PER_PAGE = 40;

const assetPool = [
    "/assets/createWithKooji/create1.svg",
    "/assets/createWithKooji/create2.svg",
    "/assets/createWithKooji/create3.svg",
    "/assets/createWithKooji/create4.svg",
    "/assets/createWithKooji/create5.svg",
    "/assets/createWithKooji/create6.svg",
    "/assets/createWithKooji/create7.svg",
    "/assets/createWithKooji/create8.svg",
    "/assets/createWithKooji/create9.svg",
    "/assets/createWithKooji/create10.svg",
    "/assets/createWithKooji/create11.svg",
    "/assets/createWithKooji/create12.svg",
    "/assets/createWithKooji/create13.svg",
    "/assets/createWithKooji/create14.svg",
];

const getRandomImages = (primary: string) => {
    const filtered = assetPool.filter(img => img !== primary);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return [primary, ...shuffled.slice(0, 3)];
};

export const LISTINGS_DATA: Listing[] = [
    {
        id: "ultimate-ears-boom-2",
        title: "Ultimate Ears Boom 2",
        address: "Cardiff Bay",
        price: "$45",
        image: "/assets/createWithKooji/create1.svg",
        images: ["/assets/createWithKooji/create1.svg", "/assets/createWithKooji/create2.svg", "/assets/createWithKooji/create3.svg", "/assets/createWithKooji/create4.svg"],
        rating: 4.5,
        totalReviews: 120,
        category: "Instruments & Equipment",
        type: "Portable Speaker",
        overview: "Compact and rugged 360-degree portable speaker perfect for outdoor events, beach parties, and casual gatherings with powerful sound.",
        whatsIncluded: [
            "1x Ultimate Ears Boom 2 speaker",
            "Charging cable (Micro-USB)",
            "Carry pouch",
            "User manual",
            "Spare rubber feet"
        ],
        whatsNotIncluded: [
            "Bluetooth source device (phone/tablet)",
            "Power adapter (charges via USB only)",
            "Additional mounting accessories"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental period: 1 day",
            "Device must be returned fully charged",
            "Do not submerge in water despite waterproof rating",
            "Late returns incur a $10/day surcharge",
            "Any physical damage will be charged to renter"
        ],
        specification: {
            brand: "Ultimate Ears",
            model: "Boom 2",
            powerOutput: "15W RMS",
            condition: "Like New",
            weight: "0.54 kg",
            usageType: "Indoor & Outdoor",
            connectivity: "Bluetooth 4.0",
            batteryLife: "Up to 15 hours",
            waterResistance: "IPX7 Waterproof",
            dimensions: "67.1 x 180.1 mm"
        },
        pickupLocation: "Mr. James Hargreaves, 14 Bute Street, Cardiff Bay, Cardiff, CF10 5LE",
        vendorInfo: {
            vendorName: "James Hargreaves Audio",
            vendorImage: "/assets/vendors/vendor1.jpg",
            rating: 4.8,
            totalOrders: 312
        },
        reviews: [
            { id: "rev1-1", rating: 5, comment: "The Yamaha PA system I rented from Kooji was top-notch! Crystal-clear sound and easy to set up. Made our event a hit.", userName: "Ava Wright", userLocation: "New York", userImage: "https://randomuser.me/api/portraits/women/1.jpg" },
            { id: "rev1-2", rating: 5, comment: "Renting through Kooji was a breeze. The PA speaker system was in excellent condition, and the sound quality was superb.", userName: "Eve Leroy", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/2.jpg" },
            { id: "rev1-3", rating: 4, comment: "Great value for money. The pickup and return process was very smooth and professional.", userName: "Mark Thompson", userLocation: "Manchester", userImage: "https://randomuser.me/api/portraits/men/3.jpg" },
            { id: "rev1-4", rating: 5, comment: "Fabulous service! The equipment worked perfectly for our wedding reception. Highly recommend.", userName: "Sarah Jenkins", userLocation: "Birmingham", userImage: "https://randomuser.me/api/portraits/women/4.jpg" },
            { id: "rev1-5", rating: 5, comment: "Extremely happy with the rental. The vendor was very responsive and helpful with the setup instructions.", userName: "David Jones", userLocation: "Glasgow", userImage: "https://randomuser.me/api/portraits/men/5.jpg" },
            { id: "rev1-6", rating: 4, comment: "Solid bits of kit. Everything was clean and well-maintained. Will definitely use again.", userName: "Alice Wong", userLocation: "Newcastle", userImage: "https://randomuser.me/api/portraits/women/6.jpg" }
        ]
    },
    {
        id: "bose-soundlink-revolve",
        title: "Bose SoundLink Revolve",
        address: "London Borough",
        price: "$30",
        image: "/assets/createWithKooji/create2.svg",
        images: ["/assets/createWithKooji/create2.svg", "/assets/createWithKooji/create3.svg", "/assets/createWithKooji/create4.svg", "/assets/createWithKooji/create5.svg"],
        rating: 4.8,
        totalReviews: 150,
        category: "Instruments & Equipment",
        type: "Bluetooth Speaker",
        overview: "Premium 360-degree Bluetooth speaker delivering deep, loud, and immersive sound ideal for intimate indoor events and outdoor social settings.",
        whatsIncluded: [
            "1x Bose SoundLink Revolve speaker",
            "Charging cradle",
            "USB charging cable",
            "Carrying strap",
            "Quick-start guide"
        ],
        whatsNotIncluded: [
            "Bluetooth-enabled source device",
            "Wall power adapter",
            "Speaker stand or mount"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Handle with care — avoid drops on hard surfaces",
            "Return in original packaging when possible",
            "Weekend bookings must be confirmed 48 hours in advance",
            "Renter is responsible for any missing accessories"
        ],
        specification: {
            brand: "Bose",
            model: "SoundLink Revolve",
            powerOutput: "20W RMS",
            condition: "Good",
            weight: "0.67 kg",
            usageType: "Indoor & Outdoor",
            connectivity: "Bluetooth 4.2",
            batteryLife: "Up to 12 hours",
            waterResistance: "IPX4 Splash Resistant",
            dimensions: "75 x 148 mm"
        },
        pickupLocation: "Ms. Priya Nair, 87 Borough High Street, London Bridge, Greater London, SE1 1NH",
        vendorInfo: {
            vendorName: "Borough Sound Co.",
            vendorImage: "/assets/vendors/vendor2.jpg",
            rating: 4.9,
            totalOrders: 489
        },
        reviews: [
            { id: "rev2-1", rating: 5, comment: "Excellent sound quality. The bass is really deep for such a small speaker.", userName: "James Wilson", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/1.jpg" },
            { id: "rev2-2", rating: 4, comment: "Very portable and easy to use. Battery life lasted the whole day as promised.", userName: "Sophie Taylor", userLocation: "Sheffield", userImage: "https://randomuser.me/api/portraits/women/10.jpg" },
            { id: "rev2-3", rating: 5, comment: "Perfect for our outdoor picnic. The Bluetooth connection was stable throughout.", userName: "Robert Chen", userLocation: "Bristol", userImage: "https://randomuser.me/api/portraits/men/7.jpg" },
            { id: "rev2-4", rating: 5, comment: "Top notch gear and friendly service. Highly recommended for any occasion.", userName: "Emma Davis", userLocation: "Birmingham", userImage: "https://randomuser.me/api/portraits/women/8.jpg" },
            { id: "rev2-5", rating: 4, comment: "Good value for money. Will definitely rent from this vendor again.", userName: "Michael Brown", userLocation: "Cardiff", userImage: "https://randomuser.me/api/portraits/men/9.jpg" },
            { id: "rev2-6", rating: 5, comment: "Small but mighty! This speaker filled the room with great sound.", userName: "Emily White", userLocation: "Leeds", userImage: "https://randomuser.me/api/portraits/women/11.jpg" }
        ]
    },
    {
        id: "jbl-charge-4",
        title: "JBL Charge 4",
        address: "Birmingham City",
        price: "$35",
        image: "/assets/createWithKooji/create3.svg",
        images: ["/assets/createWithKooji/create3.svg", "/assets/createWithKooji/create4.svg", "/assets/createWithKooji/create5.svg", "/assets/createWithKooji/create6.svg"],
        rating: 4.9,
        totalReviews: 80,
        category: "Instruments & Equipment",
        type: "Portable Speaker",
        overview: "Powerful waterproof portable speaker with a built-in power bank, suitable for outdoor festivals, poolside events, and extended use sessions.",
        whatsIncluded: [
            "1x JBL Charge 4 speaker",
            "USB-C charging cable",
            "Protective carry bag",
            "Power bank output cable",
            "User documentation"
        ],
        whatsNotIncluded: [
            "Bluetooth source device",
            "Wall charger block",
            "Audio aux cable (Bluetooth only)"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not use as a power bank for high-draw devices",
            "Return with at least 50% battery charge",
            "Advance booking recommended for weekends",
            "Late return charges apply after agreed time"
        ],
        specification: {
            brand: "JBL",
            model: "Charge 4",
            powerOutput: "30W RMS",
            condition: "Like New",
            weight: "0.96 kg",
            usageType: "Indoor & Outdoor",
            connectivity: "Bluetooth 4.2",
            batteryLife: "Up to 20 hours",
            waterResistance: "IPX7 Waterproof",
            dimensions: "87 x 220 x 93 mm"
        },
        pickupLocation: "Mr. Daniel Okafor, 22 Broad Street, Brindleyplace, Birmingham, B1 2HF",
        vendorInfo: {
            vendorName: "Brindley AV Hire",
            vendorImage: "/assets/vendors/vendor3.jpg",
            rating: 4.7,
            totalOrders: 274
        },
        reviews: [
            { id: "rev3-1", rating: 5, comment: "The sound level is amazing! Perfect for our garden party.", userName: "Thomas Moore", userLocation: "Liverpool", userImage: "https://randomuser.me/api/portraits/men/12.jpg" },
            { id: "rev3-2", rating: 5, comment: "Waterproof feature was a lifesaver at our pool party. Great speaker.", userName: "Alice Wong", userLocation: "Newcastle", userImage: "https://randomuser.me/api/portraits/women/13.jpg" },
            { id: "rev3-3", rating: 4, comment: "Very durable and the battery bank feature is super useful for charging phones.", userName: "David Jones", userLocation: "Glasgow", userImage: "https://randomuser.me/api/portraits/men/14.jpg" },
            { id: "rev3-4", rating: 5, comment: "Easy pickup and great communication from the vendor. Five stars!", userName: "Sarah Miller", userLocation: "Manchester", userImage: "https://randomuser.me/api/portraits/women/4.jpg" },
            { id: "rev3-5", rating: 5, comment: "Crystal clear audio even at high volumes. Very impressed with the JBL.", userName: "James Wilson", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/1.jpg" },
            { id: "rev3-6", rating: 4, comment: "Good solid speaker. Does exactly what it says on the tin.", userName: "Robert Chen", userLocation: "Bristol", userImage: "https://randomuser.me/api/portraits/men/3.jpg" }
        ]
    },
    {
        id: "sony-cube-speakers",
        title: "Sony Cube Speakers",
        address: "Liverpool Docklands",
        price: "$50",
        image: "/assets/createWithKooji/create4.svg",
        images: ["/assets/createWithKooji/create4.svg", "/assets/createWithKooji/create5.svg", "/assets/createWithKooji/create6.svg", "/assets/createWithKooji/create7.svg"],
        rating: 4.7,
        totalReviews: 200,
        category: "Instruments & Equipment",
        type: "Compact Speaker",
        overview: "Stylish Sony cube speaker system with rich stereo sound, perfect for small venue events, product launches, and background music setups.",
        whatsIncluded: [
            "2x Sony Cube Speaker units",
            "Power adapter and cables",
            "3.5mm aux cable",
            "Remote control",
            "Mounting brackets"
        ],
        whatsNotIncluded: [
            "Mixing desk or amplifier",
            "Bluetooth receiver (wired only)",
            "Extension power cables"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not exceed recommended volume levels",
            "Keep away from moisture and liquids",
            "All components must be returned together",
            "Setup assistance available at extra cost"
        ],
        specification: {
            brand: "Sony",
            model: "SRS-XB Series",
            powerOutput: "10W per unit (20W total)",
            condition: "Good",
            weight: "0.45 kg per unit",
            usageType: "Indoor",
            connectivity: "3.5mm Aux / Wired",
            frequencyResponse: "20Hz – 20kHz",
            impedance: "8 Ohms",
            dimensions: "100 x 100 x 100 mm per unit"
        },
        pickupLocation: "Ms. Sarah Bellamy, 5 Albert Dock, Merseyside, Liverpool, L3 4AA",
        vendorInfo: {
            vendorName: "Docklands Gear Rentals",
            vendorImage: "/assets/vendors/vendor4.jpg",
            rating: 4.8,
            totalOrders: 531
        },
        reviews: [
            { id: "rev4-1", rating: 5, comment: "Crystal clear audio for our exhibition. The cube design is very sleek.", userName: "Oliver Smith", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/15.jpg" },
            { id: "rev4-2", rating: 4, comment: "Compact but powerful. Easy to transport in the provided case.", userName: "Lily Evans", userLocation: "Bristol", userImage: "https://randomuser.me/api/portraits/women/16.jpg" },
            { id: "rev4-3", rating: 5, comment: "Sony quality as expected. Perfect for background music.", userName: "Nishant Patel", userLocation: "Manchester", userImage: "https://randomuser.me/api/portraits/men/17.jpg" },
            { id: "rev4-4", rating: 5, comment: "Seamless rental process. Highly recommend this vendor.", userName: "Emily Rose", userLocation: "Leeds", userImage: "https://randomuser.me/api/portraits/women/18.jpg" },
            { id: "rev4-5", rating: 4, comment: "Very satisfied with the sound level. Great for small groups.", userName: "Jack Wilson", userLocation: "Cardiff", userImage: "https://randomuser.me/api/portraits/men/19.jpg" },
            { id: "rev4-6", rating: 5, comment: "Will definitely rent again. The cables were neatly organized.", userName: "Sophia Lee", userLocation: "Glasgow", userImage: "https://randomuser.me/api/portraits/women/20.jpg" }
        ]
    },
    {
        id: "klipsch-r-41m",
        title: "Klipsch R-41M",
        address: "Glasgow City",
        price: "$28",
        image: "/assets/createWithKooji/create5.svg",
        images: ["/assets/createWithKooji/create5.svg", "/assets/createWithKooji/create6.svg", "/assets/createWithKooji/create7.svg", "/assets/createWithKooji/create8.svg"],
        rating: 4.6,
        totalReviews: 175,
        category: "Instruments & Equipment",
        type: "Bookshelf Speaker",
        overview: "High-performance bookshelf speakers delivering clear, dynamic sound ideal for home studio monitoring, small venue performances, and audio demonstrations.",
        whatsIncluded: [
            "2x Klipsch R-41M bookshelf speakers",
            "Speaker wire (10ft pair)",
            "Rubber isolation feet pads",
            "Binding post connectors",
            "Setup guide"
        ],
        whatsNotIncluded: [
            "Amplifier or AV receiver",
            "Speaker stands",
            "Additional speaker wire beyond 10ft"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 2 days",
            "Requires external amplifier to function",
            "Do not over-drive with excessive amplifier power",
            "Grille cloths must be kept attached during transport",
            "Damage to drivers will incur full replacement cost"
        ],
        specification: {
            brand: "Klipsch",
            model: "R-41M",
            powerOutput: "50W RMS (200W peak)",
            condition: "Like New",
            weight: "2.6 kg per speaker",
            usageType: "Indoor",
            sensitivity: "90 dB @ 2.83V/1m",
            frequencyResponse: "68Hz – 21kHz",
            impedance: "8 Ohms",
            dimensions: "165 x 279 x 178 mm"
        },
        pickupLocation: "Mr. Alistair McKenzie, 112 Buchanan Street, City Centre, Glasgow, G1 2JA",
        vendorInfo: {
            vendorName: "Glasgow Hi-Fi Exchange",
            vendorImage: "/assets/vendors/vendor5.jpg",
            rating: 4.6,
            totalOrders: 198
        },
        reviews: [
            { id: "rev5-1", rating: 5, comment: "The reference speakers I needed. Deeply appreciative of the quality.", userName: "Gordon Ramsay", userLocation: "Glasgow", userImage: "https://randomuser.me/api/portraits/men/21.jpg" },
            { id: "rev5-2", rating: 5, comment: "Top-tier bookshelf speakers. The soundstage is impressive.", userName: "Fiona Mac", userLocation: "Edinburgh", userImage: "https://randomuser.me/api/portraits/women/22.jpg" },
            { id: "rev5-3", rating: 4, comment: "Excellent condition. Very professional pickup experience.", userName: "Hamish Blake", userLocation: "Perth", userImage: "https://randomuser.me/api/portraits/men/23.jpg" },
            { id: "rev5-4", rating: 5, comment: "Klipsch never disappoints. Clear highs and robust mids.", userName: "Isla Fisher", userLocation: "Aberdeen", userImage: "https://randomuser.me/api/portraits/women/24.jpg" },
            { id: "rev5-5", rating: 4, comment: "Worked perfectly for our studio test. Cables were high quality.", userName: "Liam Neeson", userLocation: "Dundee", userImage: "https://randomuser.me/api/portraits/men/25.jpg" },
            { id: "rev5-6", rating: 5, comment: "Best rental in Glasgow for audio enthusiasts.", userName: "Ewan McGregor", userLocation: "Stirling", userImage: "https://randomuser.me/api/portraits/men/26.jpg" }
        ]
    },
    {
        id: "audioengine-a2-plus",
        title: "Audioengine A2+",
        address: "Edinburgh Old Town",
        price: "$40",
        image: "/assets/createWithKooji/create6.svg",
        images: ["/assets/createWithKooji/create6.svg", "/assets/createWithKooji/create7.svg", "/assets/createWithKooji/create8.svg", "/assets/createWithKooji/create9.svg"],
        rating: 4.8,
        totalReviews: 90,
        category: "Instruments & Equipment",
        type: "Desktop Speaker",
        overview: "Premium powered desktop speakers with built-in DAC and USB audio, ideal for studio monitoring, podcast setups, and desktop music production.",
        whatsIncluded: [
            "2x Audioengine A2+ powered speakers",
            "USB audio cable",
            "3.5mm to RCA cable",
            "Power cord",
            "Speaker-to-speaker audio cable"
        ],
        whatsNotIncluded: [
            "Computer or audio source",
            "Subwoofer (sold separately by brand)",
            "Desk stands or isolation pads"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Handle amplifier components with care",
            "Do not block rear bass port during use",
            "Return all cables included in the kit",
            "Weekend bookings allowed with prior notice"
        ],
        specification: {
            brand: "Audioengine",
            model: "A2+ Plus",
            powerOutput: "15W RMS per channel",
            condition: "Like New",
            weight: "1.36 kg per speaker",
            usageType: "Indoor",
            connectivity: "USB / 3.5mm Aux / RCA",
            frequencyResponse: "65Hz – 22kHz",
            signalToNoise: ">95 dB",
            dimensions: "152 x 101 x 127 mm"
        },
        pickupLocation: "Ms. Fiona Drummond, 48 Cockburn Street, Old Town, Edinburgh, EH1 1PB",
        vendorInfo: {
            vendorName: "Old Town Studio Hire",
            vendorImage: "/assets/vendors/vendor6.jpg",
            rating: 4.9,
            totalOrders: 143
        },
        reviews: [
            { id: "rev6-1", rating: 5, comment: "Perfect desktop size with massive sound. The DAC made a huge difference.", userName: "Robert Burns", userLocation: "Ayr", userImage: "https://randomuser.me/api/portraits/men/27.jpg" },
            { id: "rev6-2", rating: 4, comment: "Very clean setup. Ideal for my week-long podcast project.", userName: "Mary Queen", userLocation: "St Andrews", userImage: "https://randomuser.me/api/portraits/women/28.jpg" },
            { id: "rev6-3", rating: 5, comment: "Audioengine quality is stunning. The cables provided were exactly what I needed.", userName: "David Hume", userLocation: "Kirkcaldy", userImage: "https://randomuser.me/api/portraits/men/29.jpg" },
            { id: "rev6-4", rating: 5, comment: "Friendly vendor and easy communication throughout.", userName: "Jean Adam", userLocation: "Greenock", userImage: "https://randomuser.me/api/portraits/women/30.jpg" },
            { id: "rev6-5", rating: 4, comment: "Compact and powerful. Great for small apartments too.", userName: "Adam Smith", userLocation: "Kirkcaldy", userImage: "https://randomuser.me/api/portraits/men/31.jpg" },
            { id: "rev6-6", rating: 5, comment: "Highly recommend for any digital production work.", userName: "Flora MacDonald", userLocation: "Inverness", userImage: "https://randomuser.me/api/portraits/women/32.jpg" }
        ]
    },
    {
        id: "harman-kardon-onyx",
        title: "Harman Kardon Onyx",
        address: "Belfast Titanic Quarter",
        price: "$55",
        image: "/assets/createWithKooji/create7.svg",
        images: ["/assets/createWithKooji/create7.svg", "/assets/createWithKooji/create8.svg", "/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create10.svg"],
        rating: 4.5,
        totalReviews: 60,
        category: "event space",
        type: "Wireless Speaker",
        overview: "Elegant wireless speaker with premium build and rich room-filling sound, perfect for corporate event spaces, upscale lounges, and private gatherings.",
        venueHighlights: [
            "Elegant indoor space suited for corporate events and private gatherings",
            "Premium Harman Kardon wireless audio built into the venue setup",
            "Intimate capacity ideal for exclusive lounges and upscale receptions",
            "Belfast Titanic Quarter location with iconic surroundings",
            "Coordinated setup with quick-deploy carry system included",
        ],
        spaceDetails: {
            spaceType: "Indoor venue",
            maximumCapacity: "60 people",
            stageAvailable: "No",
            powerSupply: "Standard domestic power",
            parking: "Street parking nearby"
        },
        pickupLocation: "Mr. Ciarán O'Neill, 3 Queens Road, Titanic Quarter, Belfast, BT3 9DT",
        vendorInfo: {
            vendorName: "Titanic Event Supplies",
            vendorImage: "/assets/vendors/vendor7.jpg",
            rating: 4.5,
            totalOrders: 87
        },
        reviews: [
            { id: "rev7-1", rating: 5, comment: "Elegant design and room-filling sound. Impressed the clients at our launch.", userName: "Niamh Kelly", userLocation: "Belfast", userImage: "https://randomuser.me/api/portraits/women/33.jpg" },
            { id: "rev7-2", rating: 4, comment: "Very stylish. The Bluetooth connection was solid all evening.", userName: "Conor O'Brien", userLocation: "Derry", userImage: "https://randomuser.me/api/portraits/men/34.jpg" },
            { id: "rev7-3", rating: 5, comment: "Harman Kardon never fails. The bass response is incredible for its size.", userName: "Siobhan Byrne", userLocation: "Lisburn", userImage: "https://randomuser.me/api/portraits/women/35.jpg" },
            { id: "rev7-4", rating: 5, comment: "Vendor was very accommodating with pickup times. 5 stars!", userName: "Paddy Murphy", userLocation: "Bangor", userImage: "https://randomuser.me/api/portraits/men/36.jpg" },
            { id: "rev7-5", rating: 4, comment: "Clean and well-maintained unit. Made our reception feel upscale.", userName: "Orla Walsh", userLocation: "Armagh", userImage: "https://randomuser.me/api/portraits/women/37.jpg" },
            { id: "rev7-6", rating: 5, comment: "Best audio experience for our special event in Belfast.", userName: "Sean Quinn", userLocation: "Newry", userImage: "https://randomuser.me/api/portraits/men/38.jpg" }
        ]
    },
    {
        id: "marshall-kilburn-ii",
        title: "Marshall Kilburn II",
        address: "Brighton Pier",
        price: "$48",
        image: "/assets/createWithKooji/create8.svg",
        images: ["/assets/createWithKooji/create8.svg", "/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create10.svg", "/assets/createWithKooji/create11.svg"],
        rating: 4.7,
        totalReviews: 130,
        category: "musciains & singers",
        type: "Portable Amplifier",
        overview: "Iconic Marshall portable amplifier with punchy guitar-ready sound and retro aesthetic, ideal for busking, rehearsals, and small live music performances.",
        whatsIncluded: [
            "1x Marshall Kilburn II amplifier",
            "Power adapter",
            "Guitar input cable (6.35mm)",
            "Shoulder carry strap",
            "Protective cover"
        ],
        whatsNotIncluded: [
            "Guitar or instrument",
            "Effects pedals",
            "Microphone or vocal input"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not use in heavy rain despite splash resistance",
            "Return with charged battery",
            "Late return charges apply",
            "Renter responsible for any cable or jack damage"
        ],
        specification: {
            brand: "Marshall",
            model: "Kilburn II",
            powerOutput: "36W RMS",
            condition: "Good",
            weight: "2.5 kg",
            usageType: "Indoor & Outdoor",
            connectivity: "Bluetooth 5.0 / 3.5mm Aux",
            batteryLife: "Up to 20 hours",
            waterResistance: "IPX2 Splash Resistant",
            dimensions: "285 x 180 x 130 mm"
        },
        pickupLocation: "Ms. Ruby Ashworth, 9 Gardner Street, North Laine, Brighton, BN1 1UP",
        vendorInfo: {
            vendorName: "Brighton Music Vault",
            vendorImage: "/assets/vendors/vendor8.jpg",
            rating: 4.7,
            totalOrders: 367
        },
        reviews: [
            { id: "rev8-1", rating: 5, comment: "The vintage look and punchy sound were perfect for my beach busking session!", userName: "Ocean Blue", userLocation: "Brighton", userImage: "https://randomuser.me/api/portraits/women/39.jpg" },
            { id: "rev8-2", rating: 5, comment: "Classic Marshall sound. Battery lasted way longer than I expected.", userName: "Rock Star", userLocation: "Hove", userImage: "https://randomuser.me/api/portraits/men/40.jpg" },
            { id: "rev8-3", rating: 4, comment: "Sturdy and reliable. The carry strap is very convenient for travel.", userName: "Beach Bum", userLocation: "Worthing", userImage: "https://randomuser.me/api/portraits/women/41.jpg" },
            { id: "rev8-4", rating: 5, comment: "Renting through Kooji was super simple. Brighton vendor was great.", userName: "Sunny Day", userLocation: "Lewes", userImage: "https://randomuser.me/api/portraits/men/42.jpg" },
            { id: "rev8-5", rating: 5, comment: "Perfect for a small backyard gig. Everyone asked where I got it!", userName: "Garden Party", userLocation: "Shoreham", userImage: "https://randomuser.me/api/portraits/women/43.jpg" },
            { id: "rev8-6", rating: 4, comment: "Great tone and build quality. Will definitely use it for my next project.", userName: "Muso Mike", userLocation: "Eastbourne", userImage: "https://randomuser.me/api/portraits/men/44.jpg" }
        ]
    },
    {
        id: "sonos-one-gen-2",
        title: "Sonos One Gen 2",
        address: "Manchester City Centre",
        price: "$42",
        image: "/assets/createWithKooji/create9.svg",
        images: ["/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create10.svg", "/assets/createWithKooji/create11.svg", "/assets/createWithKooji/create12.svg"],
        rating: 4.9,
        totalReviews: 310,
        category: "Instruments & Equipment",
        type: "Smart Speaker",
        overview: "Smart Wi-Fi speaker with rich stereo sound and voice assistant support, ideal for background music at events, product demos, and smart home showcases.",
        whatsIncluded: [
            "1x Sonos One Gen 2 smart speaker",
            "Power cable",
            "Ethernet cable (optional wired setup)",
            "Quick setup guide",
            "Sonos app configuration support"
        ],
        whatsNotIncluded: [
            "Wi-Fi router or network setup",
            "Streaming subscription (Spotify, Apple Music, etc.)",
            "Second unit for stereo pairing"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Requires active Wi-Fi network on-site",
            "Do not factory reset device",
            "Return with original app settings intact",
            "Any unauthorised account linking will incur a reset fee"
        ],
        specification: {
            brand: "Sonos",
            model: "One Gen 2",
            powerOutput: "Class-D amplifier (undisclosed wattage)",
            condition: "Like New",
            weight: "1.85 kg",
            usageType: "Indoor",
            connectivity: "Wi-Fi 802.11 b/g/n / Ethernet",
            voiceAssistant: "Amazon Alexa / Google Assistant",
            audioChannels: "2 tweeters + 1 mid-woofer",
            dimensions: "119 x 119 x 161 mm"
        },
        pickupLocation: "Mr. Theo Blackwood, 31 Oldham Street, Northern Quarter, Manchester, M1 1JN",
        vendorInfo: {
            vendorName: "NQ Sound Rentals",
            vendorImage: "/assets/vendors/vendor9.jpg",
            rating: 4.9,
            totalOrders: 612
        },
        reviews: [
            { id: "rev9-1", rating: 5, comment: "Crystal clear smart sound. Added exactly the vibe we needed in Manchester.", userName: "Mancunian Way", userLocation: "Manchester", userImage: "https://randomuser.me/api/portraits/men/45.jpg" },
            { id: "rev9-2", rating: 5, comment: "Sonos never skips a beat. Easy setup with the app.", userName: "Northern Soul", userLocation: "Salford", userImage: "https://randomuser.me/api/portraits/women/46.jpg" },
            { id: "rev9-3", rating: 4, comment: "Great service from Theo. Unit was in mint condition.", userName: "Rain City", userLocation: "Oldham", userImage: "https://randomuser.me/api/portraits/men/47.jpg" },
            { id: "rev9-4", rating: 5, comment: "Perfect for our shop launch. High-quality background music.", userName: "Cotton Mills", userLocation: "Bolton", userImage: "https://randomuser.me/api/portraits/women/48.jpg" },
            { id: "rev9-5", rating: 4, comment: "Reliable and powerful. Made the presentation sound professional.", userName: "Media City", userLocation: "Stockport", userImage: "https://randomuser.me/api/portraits/men/49.jpg" },
            { id: "rev9-6", rating: 5, comment: "Highly recommend rendering your audio through this unit.", userName: "Arndale Life", userLocation: "Bury", userImage: "https://randomuser.me/api/portraits/women/50.jpg" }
        ]
    },
    {
        id: "bang-olufsen-beosound",
        title: "Bang & Olufsen Beosound",
        address: "Bristol Waterfront",
        price: "$75",
        image: "/assets/createWithKooji/create10.svg",
        images: ["/assets/createWithKooji/create10.svg", "/assets/createWithKooji/create11.svg", "/assets/createWithKooji/create12.svg", "/assets/createWithKooji/create13.svg"],
        rating: 4.8,
        totalReviews: 45,
        category: "event space",
        type: "Luxury Speaker",
        overview: "Exceptional luxury speaker system with audiophile-grade sound and designer aesthetics, suited for high-end events, brand activations, and premium venue settings.",
        venueHighlights: [
            "Luxury audiophile-grade sound environment at Bristol Waterfront",
            "IP67 weatherproof setup supports both indoor and outdoor premium events",
            "Stunning designer aesthetics ideal for high-end brand activations",
            "Harbourside setting with scenic waterfront views",
            "White-glove setup and premium transport case included",
        ],
        spaceDetails: {
            spaceType: "Indoor/Outdoor venue",
            maximumCapacity: "80 people",
            stageAvailable: "No",
            powerSupply: "Dedicated event-grade power",
            parking: "On-site or nearby parking options"
        },
        pickupLocation: "Ms. Isabelle Fontaine, 1 Canons Road, Harbourside, Bristol, BS1 5UH",
        vendorInfo: {
            vendorName: "Harbourside Premium AV",
            vendorImage: "/assets/vendors/vendor10.jpg",
            rating: 5.0,
            totalOrders: 54
        },
        reviews: [
            { id: "rev10-1", rating: 5, comment: "B&O is the pinnacle of sound and design. Simply stunning experience.", userName: "Harbour View", userLocation: "Bristol", userImage: "https://randomuser.me/api/portraits/women/51.jpg" },
            { id: "rev10-2", rating: 5, comment: "Worth every penny. The soundstage is unbelievable for its size.", userName: "Clifton Bridge", userLocation: "Bath", userImage: "https://randomuser.me/api/portraits/men/52.jpg" },
            { id: "rev10-3", rating: 5, comment: "Premium service for a premium product. Isabelle was a delight.", userName: "Docks Life", userLocation: "Gloucester", userImage: "https://randomuser.me/api/portraits/women/53.jpg" },
            { id: "rev10-4", rating: 4, comment: "Luxury redefined. Used it for a high-end branding event.", userName: "Fashion First", userLocation: "Cheltenham", userImage: "https://randomuser.me/api/portraits/men/54.jpg" },
            { id: "rev10-5", rating: 5, comment: "The build quality is insane. It's a piece of art.", userName: "Art Lover", userLocation: "Stroud", userImage: "https://randomuser.me/api/portraits/women/55.jpg" },
            { id: "rev10-6", rating: 5, comment: "If you want the best, this is it. Absolute clarity.", userName: "Audiophile Alex", userLocation: "Yeovil", userImage: "https://randomuser.me/api/portraits/men/56.jpg" }
        ]
    },
    {
        id: "logitech-z623",
        title: "Logitech Z623",
        address: "Leeds Dock",
        price: "$38",
        image: "/assets/createWithKooji/create11.svg",
        images: ["/assets/createWithKooji/create11.svg", "/assets/createWithKooji/create12.svg", "/assets/createWithKooji/create13.svg", "/assets/createWithKooji/create14.svg"],
        rating: 4.4,
        totalReviews: 140,
        category: "Instruments & Equipment",
        type: "Speaker System",
        overview: "THX-certified 2.1 speaker system with a powerful subwoofer delivering cinematic sound, great for gaming setups, presentations, and multimedia events.",
        whatsIncluded: [
            "2x Logitech Z623 satellite speakers",
            "1x Subwoofer unit",
            "Power cable",
            "3.5mm and RCA input cables",
            "Volume and bass control pod"
        ],
        whatsNotIncluded: [
            "Audio source (PC, console, or media player)",
            "Speaker stands or mounts",
            "HDMI or optical audio cables"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Keep subwoofer upright at all times",
            "Do not exceed maximum volume for extended periods",
            "All 3 units must be returned together",
            "Missing control pod will incur replacement charge"
        ],
        specification: {
            brand: "Logitech",
            model: "Z623",
            powerOutput: "200W RMS (2.1 system)",
            condition: "Good",
            weight: "5.4 kg (full system)",
            usageType: "Indoor",
            certification: "THX Certified",
            connectivity: "3.5mm Aux / RCA",
            subwooferDriver: "6.5 inch down-firing",
            dimensions: "Subwoofer: 235 x 298 x 235 mm"
        },
        pickupLocation: "Mr. Owen Fletcher, Warehouse 7, The Calls, Leeds Dock, Leeds, LS2 7EW",
        vendorInfo: {
            vendorName: "Leeds Dock Tech Hub",
            vendorImage: "/assets/vendors/vendor11.jpg",
            rating: 4.5,
            totalOrders: 291
        },
        reviews: [
            { id: "rev11-1", rating: 5, comment: "Ground-shaking bass! Perfect for our game tournament.", userName: "Leeds Gamer", userLocation: "Leeds", userImage: "https://randomuser.me/api/portraits/men/57.jpg" },
            { id: "rev11-2", rating: 4, comment: "Great 2.1 system. The subwoofer is a beast. Easy setup.", userName: "Dock Side", userLocation: "Wakefield", userImage: "https://randomuser.me/api/portraits/women/58.jpg" },
            { id: "rev11-3", rating: 5, comment: "Logitech quality is hard to beat for this price. Very satisfied.", userName: "Tech Head", userLocation: "Bradford", userImage: "https://randomuser.me/api/portraits/men/59.jpg" },
            { id: "rev11-4", rating: 4, comment: "Vendor was quick to respond. Pickup from the dock was smooth.", userName: "Yorkshire Lass", userLocation: "Huddersfield", userImage: "https://randomuser.me/api/portraits/women/60.jpg" },
            { id: "rev11-5", rating: 5, comment: "Immersive sound for our movie night. Highly recommend.", userName: "Film Buff", userLocation: "Halifax", userImage: "https://randomuser.me/api/portraits/men/61.jpg" },
            { id: "rev11-6", rating: 5, comment: "THX certified and it shows. Powerful and clear.", userName: "Audio Guy", userLocation: "Harrogate", userImage: "https://randomuser.me/api/portraits/women/62.jpg" }
        ]
    },
    {
        id: "edifier-r1280t",
        title: "Edifier R1280T",
        address: "Sheffield City",
        price: "$29",
        image: "/assets/createWithKooji/create12.svg",
        images: ["/assets/createWithKooji/create12.svg", "/assets/createWithKooji/create13.svg", "/assets/createWithKooji/create14.svg", "/assets/createWithKooji/create1.svg"],
        rating: 4.6,
        totalReviews: 220,
        category: "Technicians",
        type: "Reference Speaker",
        overview: "Accurate reference studio monitors with warm natural sound and dual RCA inputs, ideal for audio engineers, mixing sessions, and sound technician setups.",
        whatsIncluded: [
            "2x Edifier R1280T powered speakers",
            "Dual RCA to RCA cable",
            "RCA to 3.5mm cable",
            "Power cable",
            "Remote control"
        ],
        whatsNotIncluded: [
            "Audio interface or mixer",
            "XLR cables (RCA inputs only)",
            "Isolation pads or stands"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Not suitable for high-SPL live events",
            "Return remote control with unit",
            "Do not use outdoors",
            "Late returns charged at daily rate"
        ],
        specification: {
            brand: "Edifier",
            model: "R1280T",
            powerOutput: "42W RMS total (21W x 2)",
            condition: "Good",
            weight: "2.9 kg per speaker",
            usageType: "Indoor",
            connectivity: "Dual RCA / 3.5mm Aux",
            frequencyResponse: "55Hz – 20kHz",
            signalToNoise: ">85 dB",
            dimensions: "152 x 234 x 196 mm"
        },
        pickupLocation: "Ms. Hannah Crossley, 66 Division Street, City Centre, Sheffield, S1 4GF",
        vendorInfo: {
            vendorName: "Steel City Audio Hire",
            vendorImage: "/assets/vendors/vendor12.jpg",
            rating: 4.6,
            totalOrders: 408
        },
        reviews: [
            { id: "rev12-1", rating: 5, comment: "Honest and clear monitors. Perfect for my final year project.", userName: "Steel City Student", userLocation: "Sheffield", userImage: "https://randomuser.me/api/portraits/women/63.jpg" },
            { id: "rev12-2", rating: 5, comment: "Great for critical listening. Edifier did a great job here.", userName: "Music Producer", userLocation: "Rotherham", userImage: "https://randomuser.me/api/portraits/men/64.jpg" },
            { id: "rev12-3", rating: 4, comment: "Condition was like new. Hannah was very professional.", userName: "Hillsborough Hero", userLocation: "Doncaster", userImage: "https://randomuser.me/api/portraits/women/65.jpg" },
            { id: "rev12-4", rating: 5, comment: "Best reference monitors in Sheffield for this price.", userName: "Creative Mind", userLocation: "Barnsley", userImage: "https://randomuser.me/api/portraits/men/66.jpg" },
            { id: "rev12-5", rating: 4, comment: "Easy to use and sound natural. Ideal for vocal checking.", userName: "Vocal Coach", userLocation: "Chesterfield", userImage: "https://randomuser.me/api/portraits/women/67.jpg" },
            { id: "rev12-6", rating: 5, comment: "Smooth rental via Kooji. Highly recommended for students.", userName: "Student Life", userLocation: "Sheffield", userImage: "https://randomuser.me/api/portraits/men/68.jpg" }
        ]
    },
    {
        id: "krk-rokit-5-g4",
        title: "KRK Rokit 5 G4",
        address: "Newcastle Quayside",
        price: "$65",
        image: "/assets/createWithKooji/create13.svg",
        images: ["/assets/createWithKooji/create13.svg", "/assets/createWithKooji/create14.svg", "/assets/createWithKooji/create1.svg", "/assets/createWithKooji/create2.svg"],
        rating: 4.9,
        totalReviews: 110,
        category: "Technicians",
        type: "Studio Monitor",
        overview: "Industry-standard studio monitor with DSP-driven voicing and built-in EQ matching, trusted by audio professionals for mixing, mastering, and critical listening.",
        whatsIncluded: [
            "2x KRK Rokit 5 G4 studio monitors",
            "Power cables",
            "XLR to XLR cables (pair)",
            "1/4\" TRS cables (pair)",
            "Setup and EQ guide"
        ],
        whatsNotIncluded: [
            "Audio interface or DAW setup",
            "Monitor isolation pads",
            "Desk or studio furniture"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Use indoors in controlled acoustic environment only",
            "Do not tamper with internal DSP settings",
            "Return in original foam packaging",
            "Any cone or tweeter damage charged at full replacement cost"
        ],
        specification: {
            brand: "KRK",
            model: "Rokit 5 G4",
            powerOutput: "55W Class D amplifier",
            condition: "Like New",
            weight: "4.5 kg per monitor",
            usageType: "Indoor",
            driverSize: "5 inch Kevlar woofer + 1 inch tweeter",
            frequencyResponse: "43Hz – 40kHz",
            connectivity: "XLR / 1/4\" TRS",
            dimensions: "198 x 248 x 254 mm"
        },
        pickupLocation: "Mr. Ravi Sharma, 18 Sandhill, Quayside, Newcastle upon Tyne, NE1 3AF",
        vendorInfo: {
            vendorName: "Quayside Studio Supplies",
            vendorImage: "/assets/vendors/vendor13.jpg",
            rating: 4.9,
            totalOrders: 223
        },
        reviews: [
            { id: "rev13-1", rating: 5, comment: "Classic Rokit sound! My mix translated perfectly to the club.", userName: "Geordie DJ", userLocation: "Newcastle", userImage: "https://randomuser.me/api/portraits/men/69.jpg" },
            { id: "rev13-2", rating: 5, comment: "The yellow cone never lies. Great quality monitors.", userName: "Quayside Studio", userLocation: "Gateshead", userImage: "https://randomuser.me/api/portraits/women/70.jpg" },
            { id: "rev13-3", rating: 5, comment: "Ravi was very helpful with the setup tips. 5-star experience.", userName: "Audio Nerd", userLocation: "Sunderland", userImage: "https://randomuser.me/api/portraits/men/71.jpg" },
            { id: "rev13-4", rating: 4, comment: "Solid build and punchy bass. Perfect for electronic music.", userName: "Beat Maker", userLocation: "Durham", userImage: "https://randomuser.me/api/portraits/women/72.jpg" },
            { id: "rev13-5", rating: 5, comment: "Condition was pristine. Came in the original box too.", userName: "Studio Owner", userLocation: "Middlesbrough", userImage: "https://randomuser.me/api/portraits/men/73.jpg" },
            { id: "rev13-6", rating: 4, comment: "Best rental on the Quayside. Highly recommend KRK.", userName: "Music lover", userLocation: "Newcastle", userImage: "https://randomuser.me/api/portraits/women/74.jpg" }
        ]
    },
    {
        id: "yamaha-hs5",
        title: "Yamaha HS5",
        address: "Nottingham City",
        price: "$58",
        image: "/assets/createWithKooji/create14.svg",
        images: ["/assets/createWithKooji/create14.svg", "/assets/createWithKooji/create1.svg", "/assets/createWithKooji/create2.svg", "/assets/createWithKooji/create3.svg"],
        rating: 4.7,
        totalReviews: 85,
        category: "Technicians",
        type: "Studio Monitor",
        overview: "Flat-response studio monitor renowned for its honest sound reproduction, making it the go-to choice for mixing engineers and professional music producers.",
        whatsIncluded: [
            "2x Yamaha HS5 studio monitors",
            "Power cables",
            "XLR balanced cables (pair)",
            "Trim and room control guide",
            "Protective speaker covers"
        ],
        whatsNotIncluded: [
            "Audio interface",
            "DAW or recording software",
            "Monitor stands or isolation pads"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not alter room compensation trim settings",
            "Strictly indoor use only",
            "Return all cables and covers provided",
            "Advance booking recommended for studio sessions"
        ],
        specification: {
            brand: "Yamaha",
            model: "HS5",
            powerOutput: "70W (LF 54W + HF 16W)",
            condition: "Like New",
            weight: "6.5 kg per monitor",
            usageType: "Indoor",
            driverSize: "5 inch woofer + 1 inch tweeter",
            frequencyResponse: "54Hz – 30kHz",
            connectivity: "XLR / TRS balanced",
            dimensions: "220 x 195 x 285 mm"
        },
        pickupLocation: "Ms. Leila Mansouri, 42 Hockley, Lace Market, Nottingham, NG1 1FJ",
        vendorInfo: {
            vendorName: "Nottingham Pro Audio",
            vendorImage: "/assets/vendors/vendor14.jpg",
            rating: 4.7,
            totalOrders: 176
        },
        reviews: [
            { id: "rev14-1", rating: 5, comment: "The HS5s are brutally honest. Exactly what I needed for my mix.", userName: "Studio Pro", userLocation: "Nottingham", userImage: "https://randomuser.me/api/portraits/men/75.jpg" },
            { id: "rev14-2", rating: 5, comment: "Pristine condition. Yamaha quality never fails.", userName: "Lace Market Audio", userLocation: "Derby", userImage: "https://randomuser.me/api/portraits/women/76.jpg" },
            { id: "rev14-3", rating: 4, comment: "Great for critical listening. Leila was very helpful.", userName: "Trend Setter", userLocation: "Leicester", userImage: "https://randomuser.me/api/portraits/men/77.jpg" },
            { id: "rev14-4", rating: 5, comment: "Most reliable monitors in the Midlands. 5/5.", userName: "Music Maven", userLocation: "Loughborough", userImage: "https://randomuser.me/api/portraits/women/78.jpg" },
            { id: "rev14-5", rating: 4, comment: "Clean and powerful for their size. Perfect for my edit suit.", userName: "Editz", userLocation: "Mansfield", userImage: "https://randomuser.me/api/portraits/men/79.jpg" },
            { id: "rev14-6", rating: 5, comment: "Highly recommend rendering your tracks through these.", userName: "Audio Engineer", userLocation: "Nottingham", userImage: "https://randomuser.me/api/portraits/women/80.jpg" }
        ]
    },
    {
        id: "fender-mustang-micro",
        title: "Fender Mustang Micro",
        address: "Southampton Port",
        price: "$25",
        image: "/assets/createWithKooji/create1.svg",
        images: ["/assets/createWithKooji/create1.svg", "/assets/createWithKooji/create3.svg", "/assets/createWithKooji/create5.svg", "/assets/createWithKooji/create7.svg"],
        rating: 4.8,
        totalReviews: 95,
        category: "musciains & singers",
        type: "Guitar Headphone Amp",
        overview: "Ultra-compact headphone guitar amp with 12 amp models and 12 effects built-in, perfect for silent practice, songwriting sessions, and on-the-go musicians.",
        whatsIncluded: [
            "1x Fender Mustang Micro amp",
            "USB-C charging cable",
            "3.5mm headphone output",
            "Bluetooth pairing guide",
            "Carry pouch"
        ],
        whatsNotIncluded: [
            "Guitar or instrument cable",
            "Headphones",
            "Guitar strap or picks"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Return fully charged",
            "Do not force incompatible jack sizes",
            "Handle plug-in unit carefully to avoid jack damage",
            "Weekend bookings allowed"
        ],
        specification: {
            brand: "Fender",
            model: "Mustang Micro",
            powerOutput: "Headphone output only",
            condition: "Like New",
            weight: "0.07 kg",
            usageType: "Indoor",
            ampModels: "12 amp models",
            effects: "12 built-in effects",
            connectivity: "6.35mm guitar input / 3.5mm headphone / Bluetooth",
            batteryLife: "Up to 4 hours"
        },
        pickupLocation: "Mr. Tom Whitfield, 11 Oxford Street, City Centre, Southampton, SO14 3DJ",
        vendorInfo: {
            vendorName: "Southampton Musician Corner",
            vendorImage: "/assets/vendors/vendor15.jpg",
            rating: 4.8,
            totalOrders: 139
        },
        reviews: [
            { id: "rev15-1", rating: 5, comment: "Tiny but mighty! The amp models are spot on.", userName: "Guitar Hero", userLocation: "Southampton", userImage: "https://randomuser.me/api/portraits/men/81.jpg" },
            { id: "rev15-2", rating: 5, comment: "Perfect for silent practice in my hotel room.", userName: "Traveling Muso", userLocation: "Portsmouth", userImage: "https://randomuser.me/api/portraits/women/82.jpg" },
            { id: "rev15-3", rating: 4, comment: "Fender quality in your pocket. Bluetooth feature is great.", userName: "Practice Makes Perfect", userLocation: "Winchester", userImage: "https://randomuser.me/api/portraits/men/83.jpg" },
            { id: "rev15-4", rating: 5, comment: "Tom was very easy to deal with. Unit was fully charged.", userName: "Happy Renter", userLocation: "Bournemouth", userImage: "https://randomuser.me/api/portraits/women/84.jpg" },
            { id: "rev15-5", rating: 4, comment: "Good selection of effects. Made my strat sound great.", userName: "Tone Chaser", userLocation: "Salisbury", userImage: "https://randomuser.me/api/portraits/men/85.jpg" },
            { id: "rev15-6", rating: 5, comment: "Best headphone amp on the market. Simple and effective.", userName: "Silent Shredder", userLocation: "Southampton", userImage: "https://randomuser.me/api/portraits/women/86.jpg" }
        ]
    },
    {
        id: "focusrite-scarlett-2i2",
        title: "Focusrite Scarlett 2i2",
        address: "Chelsea",
        price: "$40",
        image: "/assets/createWithKooji/create2.svg",
        images: ["/assets/createWithKooji/create2.svg", "/assets/createWithKooji/create4.svg", "/assets/createWithKooji/create6.svg", "/assets/createWithKooji/create8.svg"],
        rating: 4.9,
        totalReviews: 400,
        category: "Technicians",
        type: "Audio Interface",
        overview: "World's best-selling USB audio interface with studio-quality preamps, ideal for recording vocalists, podcasters, musicians, and home studio productions.",
        whatsIncluded: [
            "1x Focusrite Scarlett 2i2 audio interface",
            "USB-C to USB-A cable",
            "Software activation card (Focusrite plugin bundle)",
            "Quick start guide",
            "Driver download instructions"
        ],
        whatsNotIncluded: [
            "Microphone or instrument",
            "XLR or TRS cables",
            "DAW software (activation card covers plugins only)"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not deactivate software licenses during rental",
            "Return USB cable with unit",
            "Handle gain knobs carefully — do not force",
            "Late return surcharge applies after agreed return time"
        ],
        specification: {
            brand: "Focusrite",
            model: "Scarlett 2i2 (3rd Gen)",
            powerOutput: "N/A (audio interface)",
            condition: "Like New",
            weight: "0.35 kg",
            usageType: "Indoor",
            inputs: "2x XLR/TRS combo jack",
            outputs: "2x TRS line output + 3.5mm headphone",
            sampleRate: "Up to 192kHz / 24-bit",
            connectivity: "USB-C (bus powered)"
        },
        pickupLocation: "Ms. Chloe Harrington, 204 Kings Road, Chelsea, Greater London, SW3 5XP",
        vendorInfo: {
            vendorName: "Chelsea Recording Supplies",
            vendorImage: "/assets/vendors/vendor16.jpg",
            rating: 4.9,
            totalOrders: 784
        },
        reviews: [
            { id: "rev16-1", rating: 5, comment: "The industry standard for a reason. Flawless recording.", userName: "London Studio", userLocation: "Chelsea", userImage: "https://randomuser.me/api/portraits/women/87.jpg" },
            { id: "rev16-2", rating: 5, comment: "Focusrite preamps are so clean. My vocals never sounded better.", userName: "Vocal Talent", userLocation: "Kensington", userImage: "https://randomuser.me/api/portraits/men/88.jpg" },
            { id: "rev16-3", rating: 4, comment: "Easy to set up and very reliable. Chloe was great.", userName: "Podcaster", userLocation: "Fulham", userImage: "https://randomuser.me/api/portraits/women/89.jpg" },
            { id: "rev16-4", rating: 5, comment: "Perfect for my home studio weekend project.", userName: "Home Producer", userLocation: "Battersea", userImage: "https://randomuser.me/api/portraits/men/90.jpg" },
            { id: "rev16-5", rating: 5, comment: "Pristine condition interface. Cables were included as promised.", userName: "Audio Nut", userLocation: "Wandsworth", userImage: "https://randomuser.me/api/portraits/women/91.jpg" },
            { id: "rev16-6", rating: 4, comment: "Solid build and simple to use. Highly recommend.", userName: "Music Student", userLocation: "Chelsea", userImage: "https://randomuser.me/api/portraits/men/92.jpg" }
        ]
    },
    {
        id: "shure-sm7b",
        title: "Shure SM7B",
        address: "Richmond Park",
        price: "$85",
        image: "/assets/createWithKooji/create3.svg",
        images: ["/assets/createWithKooji/create3.svg", "/assets/createWithKooji/create5.svg", "/assets/createWithKooji/create7.svg", "/assets/createWithKooji/create9.svg"],
        rating: 5.0,
        totalReviews: 180,
        category: "musciains & singers",
        type: "Vocal Microphone",
        overview: "Broadcast-grade dynamic microphone used by top vocalists and podcasters worldwide, delivering warm, smooth sound ideal for recording studios and live broadcast setups.",
        whatsIncluded: [
            "1x Shure SM7B dynamic microphone",
            "Close-talk windscreen (large)",
            "Universal close-talk windscreen (small)",
            "A7WS detachable windscreen",
            "Yoke mount with hardware"
        ],
        whatsNotIncluded: [
            "Microphone stand or boom arm",
            "XLR cable",
            "Preamp or audio interface (requires 60dB gain)"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Requires high-gain preamp — confirm compatibility before renting",
            "Do not drop or mishandle capsule area",
            "Return all windscreen attachments",
            "Sanitisation fee may apply for shared vocal use"
        ],
        specification: {
            brand: "Shure",
            model: "SM7B",
            micType: "Dynamic (moving coil)",
            condition: "Like New",
            weight: "0.77 kg",
            usageType: "Indoor",
            polarPattern: "Cardioid",
            frequencyResponse: "50Hz – 20kHz",
            outputConnector: "XLR (3-pin)",
            requiredGain: "Minimum 60 dB recommended"
        },
        pickupLocation: "Mr. Sebastian Cole, 6 Sheen Road, Richmond, Greater London, TW9 1AE",
        vendorInfo: {
            vendorName: "Richmond Studio Annex",
            vendorImage: "/assets/vendors/vendor17.jpg",
            rating: 5.0,
            totalOrders: 302
        },
        reviews: [
            { id: "rev17-1", rating: 5, comment: "That classic radio sound. The SM7B is a dream mic.", userName: "Radio Voice", userLocation: "Richmond", userImage: "https://randomuser.me/api/portraits/men/93.jpg" },
            { id: "rev17-2", rating: 5, comment: "Perfect for my podcast. Sebastian provided all the windscreens.", userName: "Podcast Star", userLocation: "Kingston", userImage: "https://randomuser.me/api/portraits/women/94.jpg" },
            { id: "rev17-3", rating: 5, comment: "Shure quality is unmatched. Made my voice sound so deep and rich.", userName: "Voiceover Artist", userLocation: "Twickenham", userImage: "https://randomuser.me/api/portraits/men/95.jpg" },
            { id: "rev17-4", rating: 4, comment: "Excellent mic. Make sure you have a good preamp!", userName: "Tech Savvy", userLocation: "Putney", userImage: "https://randomuser.me/api/portraits/women/96.jpg" },
            { id: "rev17-5", rating: 5, comment: "Professional service and top-tier gear. Will rent again.", userName: "Content Creator", userLocation: "Richmond", userImage: "https://randomuser.me/api/portraits/men/97.jpg" },
            { id: "rev17-6", rating: 5, comment: "The best vocal mic I've ever used. Simple as that.", userName: "Singer Songwriter", userLocation: "Wimbledon", userImage: "https://randomuser.me/api/portraits/women/98.jpg" }
        ]
    },
    {
        id: "rode-nt1-a",
        title: "Rode NT1-A",
        address: "Greenwich Market",
        price: "$45",
        image: "/assets/createWithKooji/create4.svg",
        images: ["/assets/createWithKooji/create4.svg", "/assets/createWithKooji/create6.svg", "/assets/createWithKooji/create8.svg", "/assets/createWithKooji/create10.svg"],
        rating: 4.7,
        totalReviews: 250,
        category: "musciains & singers",
        type: "Condenser Microphone",
        overview: "Ultra-low noise large-diaphragm condenser microphone perfect for studio vocal recording, acoustic instruments, and professional voiceover work.",
        whatsIncluded: [
            "1x Rode NT1-A condenser microphone",
            "Shock mount (SM6)",
            "Pop filter",
            "XLR cable (6ft)",
            "Carry pouch and manual"
        ],
        whatsNotIncluded: [
            "Phantom power supply (48V required)",
            "Microphone stand",
            "Audio interface or preamp"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Requires 48V phantom power — do not use without it",
            "Keep away from humidity and moisture",
            "Return shock mount and pop filter with unit",
            "Damage to capsule is non-repairable and fully chargeable"
        ],
        specification: {
            brand: "Rode",
            model: "NT1-A",
            micType: "Large-diaphragm condenser",
            condition: "Good",
            weight: "0.326 kg",
            usageType: "Indoor",
            polarPattern: "Cardioid",
            frequencyResponse: "20Hz – 20kHz",
            selfNoise: "5 dB-A (ultra low noise)",
            phantomPower: "48V required"
        },
        pickupLocation: "Ms. Amara Osei, Stall 14, College Approach, Greenwich, Greater London, SE10 9HZ",
        vendorInfo: {
            vendorName: "Greenwich Market Audio",
            vendorImage: "/assets/vendors/vendor18.jpg",
            rating: 4.7,
            totalOrders: 261
        },
        reviews: [
            { id: "rev18-1", rating: 5, comment: "Breathtaking clarity for my acoustic records. Rode is incredible.", userName: "Acoustic King", userLocation: "Greenwich", userImage: "https://randomuser.me/api/portraits/women/99.jpg" },
            { id: "rev18-2", rating: 5, comment: "The shock mount and pop filter were very helpful. Great kit.", userName: "Studio Guy", userLocation: "Blackheath", userImage: "https://randomuser.me/api/portraits/men/5.jpg" },
            { id: "rev18-3", rating: 4, comment: "Very quiet mic. Captured every detail of the performance.", userName: "Detail Oriented", userLocation: "Lewisham", userImage: "https://randomuser.me/api/portraits/women/6.jpg" },
            { id: "rev18-4", rating: 5, comment: "Amara was very professional. The mic was well-packaged.", userName: "Happy Customer", userLocation: "Greenwich", userImage: "https://randomuser.me/api/portraits/men/7.jpg" },
            { id: "rev18-5", rating: 4, comment: "Classical guitar sounded sweet through this. Recommended.", userName: "Guitarist", userLocation: "Deptford", userImage: "https://randomuser.me/api/portraits/women/8.jpg" },
            { id: "rev18-6", rating: 5, comment: "Excellent value for a pro studio mic rental.", userName: "Music Buff", userLocation: "Greenwich", userImage: "https://randomuser.me/api/portraits/men/9.jpg" }
        ]
    },
    {
        id: "blue-yeti-nano",
        title: "Blue Yeti Nano",
        address: "Wimbledon Village",
        price: "$35",
        image: "/assets/createWithKooji/create5.svg",
        images: ["/assets/createWithKooji/create5.svg", "/assets/createWithKooji/create7.svg", "/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create11.svg"],
        rating: 4.6,
        totalReviews: 320,
        category: "Technicians",
        type: "USB Microphone",
        overview: "Plug-and-play USB condenser microphone with professional sound quality, perfect for podcasting, online meetings, Twitch streaming, and home recording.",
        whatsIncluded: [
            "1x Blue Yeti Nano USB microphone",
            "USB-A to USB-C cable",
            "Desktop stand (included in mic base)",
            "3.5mm headphone monitoring jack",
            "Setup guide"
        ],
        whatsNotIncluded: [
            "Boom arm or mic stand adapter",
            "Headphones for monitoring",
            "Pop filter or shock mount"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "USB only — no XLR output",
            "Do not over-tighten desk stand mount",
            "Return USB cable with unit",
            "Late returns charged at standard daily rate"
        ],
        specification: {
            brand: "Blue (Logitech)",
            model: "Yeti Nano",
            micType: "Condenser",
            condition: "Good",
            weight: "0.37 kg",
            usageType: "Indoor",
            polarPatterns: "Cardioid / Omnidirectional",
            sampleRate: "Up to 24-bit / 48kHz",
            connectivity: "USB-C",
            headphoneOutput: "3.5mm real-time monitoring"
        },
        pickupLocation: "Mr. Luca Ferretti, 33 The Broadway, Wimbledon, Greater London, SW19 1QD",
        vendorInfo: {
            vendorName: "Wimbledon Creator Gear",
            vendorImage: "/assets/vendors/vendor19.jpg",
            rating: 4.6,
            totalOrders: 518
        },
        reviews: [
            { id: "rev19-1", rating: 5, comment: "Perfect for my Zoom calls. Much better than my laptop mic.", userName: "WFH Warrior", userLocation: "Wimbledon", userImage: "https://randomuser.me/api/portraits/men/10.jpg" },
            { id: "rev19-2", rating: 4, comment: "Simple plug and play. Great for gaming too.", userName: "Gamer Girl", userLocation: "Morden", userImage: "https://randomuser.me/api/portraits/women/11.jpg" },
            { id: "rev19-3", rating: 5, comment: "Blue quality in a smaller package. Very impressed.", userName: "Tech Lover", userLocation: "Raynes Park", userImage: "https://randomuser.me/api/portraits/men/12.jpg" },
            { id: "rev19-4", rating: 5, comment: "Luca was very easy to deal with. Pickup was quick.", userName: "Busy Bee", userLocation: "South Wimbledon", userImage: "https://randomuser.me/api/portraits/women/13.jpg" },
            { id: "rev19-5", rating: 4, comment: "Good solid mic. Desktop stand is very stable.", userName: "Streamer", userLocation: "Wimbledon", userImage: "https://randomuser.me/api/portraits/men/14.jpg" },
            { id: "rev19-6", rating: 5, comment: "Value for money is crazy. Highly recommended.", userName: "Content Creator", userLocation: "Wimbledon", userImage: "https://randomuser.me/api/portraits/women/15.jpg" }
        ]
    },
    {
        id: "pioneer-ddj-400",
        title: "Pioneer DDJ-400",
        address: "Brixton Academy",
        price: "$60",
        image: "/assets/createWithKooji/create6.svg",
        images: ["/assets/createWithKooji/create6.svg", "/assets/createWithKooji/create8.svg", "/assets/createWithKooji/create10.svg", "/assets/createWithKooji/create12.svg"],
        rating: 4.8,
        totalReviews: 145,
        category: "musciains & singers",
        type: "DJ Controller",
        overview: "Feature-packed 2-channel DJ controller with rekordbox integration, ideal for beginner and intermediate DJs performing at clubs, bars, and private events.",
        whatsIncluded: [
            "1x Pioneer DDJ-400 DJ controller",
            "USB cable (Type-B)",
            "Power adapter",
            "rekordbox DJ license card",
            "Carrying bag"
        ],
        whatsNotIncluded: [
            "Laptop or computer",
            "Headphones",
            "RCA or speaker cables for PA system connection"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not spill liquids near faders or jog wheels",
            "Return rekordbox license card with unit",
            "Renter responsible for setting up their own laptop",
            "Weekend bookings require 48-hour advance notice"
        ],
        specification: {
            brand: "Pioneer DJ",
            model: "DDJ-400",
            channels: "2-channel",
            condition: "Like New",
            weight: "2.3 kg",
            usageType: "Indoor",
            jogWheelDiameter: "125 mm",
            connectivity: "USB (bus powered) / RCA output",
            software: "rekordbox DJ compatible",
            dimensions: "480 x 272 x 53 mm"
        },
        pickupLocation: "Ms. Jade Solomon, 7 Atlantic Road, Brixton, Greater London, SW9 8HX",
        vendorInfo: {
            vendorName: "Brixton DJ Warehouse",
            vendorImage: "/assets/vendors/vendor20.jpg",
            rating: 4.8,
            totalOrders: 433
        },
        reviews: [
            { id: "rev20-1", rating: 5, comment: "The perfect controller to learn on. Rekordbox is great.", userName: "Future DJ", userLocation: "Brixton", userImage: "https://randomuser.me/api/portraits/women/16.jpg" },
            { id: "rev20-2", rating: 5, comment: "Pioneer quality as expected. Jog wheels felt very responsive.", userName: "Club Ready", userLocation: "Stockwell", userImage: "https://randomuser.me/api/portraits/men/17.jpg" },
            { id: "rev20-3", rating: 4, comment: "Jade was very helpful and showed me the basics. Thanks!", userName: "Beginner", userLocation: "Peckham", userImage: "https://randomuser.me/api/portraits/women/18.jpg" },
            { id: "rev20-4", rating: 5, comment: "Great for my house party. Easy to transport in the bag.", userName: "Party Animal", userLocation: "Clapham", userImage: "https://randomuser.me/api/portraits/men/19.jpg" },
            { id: "rev20-5", rating: 5, comment: "Condition was perfect. All buttons and faders worked flawlessly.", userName: "Pro DJ", userLocation: "Brixton", userImage: "https://randomuser.me/api/portraits/women/20.jpg" },
            { id: "rev20-6", rating: 4, comment: "Industry standard for beginners. Best value rental.", userName: "Music lover", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/21.jpg" }
        ]
    },
    {
        id: "arturia-minilab-mkii",
        title: "Arturia MiniLab MKII",
        address: "Oxford Street",
        price: "$32",
        image: "/assets/createWithKooji/create7.svg",
        images: ["/assets/createWithKooji/create7.svg", "/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create11.svg", "/assets/createWithKooji/create13.svg"],
        rating: 4.7,
        totalReviews: 190,
        category: "musciains & singers",
        type: "MIDI Controller",
        overview: "Compact USB MIDI controller with 25 slim keys and 16 RGB pads, perfect for music production, live performance triggering, and DAW control on the go.",
        whatsIncluded: [
            "1x Arturia MiniLab MKII controller",
            "USB cable",
            "Arturia Analog Lab Lite software code",
            "Quick start guide",
            "Carry sleeve"
        ],
        whatsNotIncluded: [
            "DAW software (beyond Analog Lab Lite)",
            "Sustain pedal",
            "Computer or tablet"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not activate software license permanently during rental",
            "Handle keys and encoders gently",
            "Return with USB cable",
            "Any stuck or broken keys chargeable at repair cost"
        ],
        specification: {
            brand: "Arturia",
            model: "MiniLab MKII",
            keys: "25 slim mini keys (velocity sensitive)",
            condition: "Good",
            weight: "0.34 kg",
            usageType: "Indoor",
            pads: "16 RGB backlit pads",
            connectivity: "USB-A (bus powered)",
            encoders: "9 rotary encoders",
            dimensions: "335 x 148 x 27 mm"
        },
        pickupLocation: "Mr. Felix Adeyemi, 316 Oxford Street, West End, Greater London, W1C 1HX",
        vendorInfo: {
            vendorName: "West End Keys and Pads",
            vendorImage: "/assets/vendors/vendor21.jpg",
            rating: 4.7,
            totalOrders: 349
        },
        reviews: [
            { id: "rev21-1", rating: 5, comment: "Tiny controller but huge potential. The pads are expressive.", userName: "Producer Life", userLocation: "Soho", userImage: "https://randomuser.me/api/portraits/men/22.jpg" },
            { id: "rev21-2", rating: 4, comment: "Perfect for making beats on the tube. Lightweight design.", userName: "Commuter Artist", userLocation: "Marylebone", userImage: "https://randomuser.me/api/portraits/women/23.jpg" },
            { id: "rev21-3", rating: 5, comment: "Arturia software is top notch. Keys felt better than expected.", userName: "Synth Nerd", userLocation: "Mayfair", userImage: "https://randomuser.me/api/portraits/men/24.jpg" },
            { id: "rev21-4", rating: 5, comment: "Felix was very professional. Oxford Street pickup was easy.", userName: "Happy User", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/25.jpg" },
            { id: "rev21-5", rating: 4, comment: "Great workflow with Ableton. Highly recommended.", userName: "Workflow Expert", userLocation: "Soho", userImage: "https://randomuser.me/api/portraits/men/26.jpg" },
            { id: "rev21-6", rating: 5, comment: "Best compact MIDI controller I've rented. Solid build.", userName: "Quality First", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/27.jpg" }
        ]
    },
    {
        id: "akai-mpk-mini-play",
        title: "Akai MPK Mini Play",
        address: "Camden Town",
        price: "$38",
        image: "/assets/createWithKooji/create8.svg",
        images: ["/assets/createWithKooji/create8.svg", "/assets/createWithKooji/create10.svg", "/assets/createWithKooji/create12.svg", "/assets/createWithKooji/create14.svg"],
        rating: 4.5,
        totalReviews: 115,
        category: "musciains & singers",
        type: "MIDI Keyboard",
        overview: "Standalone MIDI keyboard with built-in sounds and speaker — no computer required. Great for busking, rehearsals, children's music workshops, and quick jam sessions.",
        whatsIncluded: [
            "1x Akai MPK Mini Play keyboard",
            "USB cable",
            "3x AA batteries",
            "3.5mm output cable",
            "User guide"
        ],
        whatsNotIncluded: [
            "Headphones",
            "External amplifier or speaker",
            "Sustain pedal"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Replace batteries only with AA alkaline type",
            "Do not expose to rain or moisture",
            "Return with all cables and batteries",
            "Renter responsible for any key or pad damage"
        ],
        specification: {
            brand: "Akai Professional",
            model: "MPK Mini Play",
            keys: "25 mini keys (velocity sensitive)",
            condition: "Good",
            weight: "0.34 kg",
            usageType: "Indoor & Outdoor",
            builtInSounds: "128 instrument sounds",
            pads: "8 MPC-style pads",
            connectivity: "USB / 3.5mm output / Battery (3x AA)",
            dimensions: "322 x 155 x 41 mm"
        },
        pickupLocation: "Ms. Naomi Cartwright, 52 Chalk Farm Road, Camden, Greater London, NW1 8AN",
        vendorInfo: {
            vendorName: "Camden Instruments Den",
            vendorImage: "/assets/vendors/vendor22.jpg",
            rating: 4.5,
            totalOrders: 287
        },
        reviews: [
            { id: "rev22-1", rating: 5, comment: "Built-in sounds are surprisingly good! Great for a quick jam.", userName: "Camden Muso", userLocation: "Camden", userImage: "https://randomuser.me/api/portraits/women/28.jpg" },
            { id: "rev22-2", rating: 4, comment: "MPC pads are the best in the business. Very fun to use.", userName: "Beat Smith", userLocation: "Kentish Town", userImage: "https://randomuser.me/api/portraits/men/29.jpg" },
            { id: "rev22-3", rating: 5, comment: "Naomi was very cool. The unit was in perfect condition.", userName: "Rock n Roll", userLocation: "Camden", userImage: "https://randomuser.me/api/portraits/women/30.jpg" },
            { id: "rev22-4", rating: 5, comment: "Portable and powerful. Used it for my street performance.", userName: "Busker Pro", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/31.jpg" },
            { id: "rev22-5", rating: 4, comment: "Speakers are decent for practice. Batteries lasted well.", userName: "Mobile Producer", userLocation: "Camden", userImage: "https://randomuser.me/api/portraits/women/32.jpg" },
            { id: "rev22-6", rating: 5, comment: "Unbeatable value for a standalone keyboard rental.", userName: "Value Guru", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/33.jpg" }
        ]
    },
    {
        id: "novation-launchpad-x",
        title: "Novation Launchpad X",
        address: "Soho Square",
        price: "$42",
        image: "/assets/createWithKooji/create9.svg",
        images: ["/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create11.svg", "/assets/createWithKooji/create13.svg", "/assets/createWithKooji/create1.svg"],
        rating: 4.8,
        totalReviews: 88,
        category: "Technicians",
        type: "Grid Controller",
        overview: "Professional 8x8 RGB grid performance controller for Ableton Live, perfect for live electronic music sets, clip launching, and beat performance at events.",
        whatsIncluded: [
            "1x Novation Launchpad X controller",
            "USB-C cable",
            "Ableton Live Lite license code",
            "Novation Components editor access",
            "Carry pouch"
        ],
        whatsNotIncluded: [
            "Laptop or computer",
            "Ableton Live full version",
            "MIDI interface or hub"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not permanently link to personal Ableton account",
            "Handle RGB pads gently — avoid sharp objects",
            "Return USB-C cable with unit",
            "No food or drink near controller during use"
        ],
        specification: {
            brand: "Novation",
            model: "Launchpad X",
            gridSize: "8x8 RGB velocity-sensitive pads",
            condition: "Like New",
            weight: "0.53 kg",
            usageType: "Indoor",
            connectivity: "USB-C (bus powered)",
            compatibility: "Ableton Live / any DAW (HID/MIDI)",
            lighting: "RGB backlit pads (127 velocity levels)",
            dimensions: "250 x 250 x 29 mm"
        },
        pickupLocation: "Mr. Aaron Prescott, 19 Berwick Street, Soho, Greater London, W1F 0PT",
        vendorInfo: {
            vendorName: "Soho Production House",
            vendorImage: "/assets/vendors/vendor23.jpg",
            rating: 4.8,
            totalOrders: 195
        },
        reviews: [
            { id: "rev23-1", rating: 5, comment: "RGB pads are mesmerizing. Launching clips was seamless.", userName: "Soho Sound", userLocation: "Soho", userImage: "https://randomuser.me/api/portraits/men/34.jpg" },
            { id: "rev23-2", rating: 5, comment: "Ableton integration is flawless. Best grid controller around.", userName: "Live Performer", userLocation: "Fitzrovia", userImage: "https://randomuser.me/api/portraits/women/35.jpg" },
            { id: "rev23-3", rating: 4, comment: "Aaron was a pro. Pickup from Berwick Street was smooth.", userName: "Market Regular", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/36.jpg" },
            { id: "rev23-4", rating: 5, comment: "Pristine unit. Felt like brand new out of the box.", userName: "Happy DJ", userLocation: "West End", userImage: "https://randomuser.me/api/portraits/women/37.jpg" },
            { id: "rev23-5", rating: 5, comment: "Versatile and responsive. Made my live set so much easier.", userName: "Electronic Artist", userLocation: "Soho", userImage: "https://randomuser.me/api/portraits/men/38.jpg" },
            { id: "rev23-6", rating: 4, comment: "Highly recommend for any Ableton user in London.", userName: "Power User", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/39.jpg" }
        ]
    },
    {
        id: "presonus-eris-3-5",
        title: "PreSonus Eris 3.5",
        address: "Silicon Roundabout",
        price: "$28",
        image: "/assets/createWithKooji/create10.svg",
        images: ["/assets/createWithKooji/create10.svg", "/assets/createWithKooji/create12.svg", "/assets/createWithKooji/create14.svg", "/assets/createWithKooji/create2.svg"],
        rating: 4.7,
        totalReviews: 210,
        category: "Instruments & Equipment",
        type: "Studio Monitor",
        overview: "Entry-level studio monitors with acoustic tuning controls delivering accurate sound for small home studios, podcast production, and multimedia content creation.",
        whatsIncluded: [
            "2x PreSonus Eris 3.5 powered monitors",
            "Power cables",
            "3.5mm to dual RCA cable",
            "RCA to RCA cable",
            "Quick start guide"
        ],
        whatsNotIncluded: [
            "Audio interface",
            "XLR cables (RCA/3.5mm only)",
            "Isolation pads"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not block rear port",
            "Return all cables in the set",
            "Indoor use only",
            "Advance booking recommended for studio shoots"
        ],
        specification: {
            brand: "PreSonus",
            model: "Eris 3.5",
            powerOutput: "25W total (12.5W per side)",
            condition: "Good",
            weight: "1.47 kg per monitor",
            usageType: "Indoor",
            driverSize: "3.5 inch Kevlar woofer + 1 inch tweeter",
            frequencyResponse: "80Hz – 20kHz",
            connectivity: "TRS / RCA / 3.5mm",
            dimensions: "127 x 185 x 163 mm"
        },
        pickupLocation: "Ms. Zara Patel, Unit 4 Corsham Street, Old Street, Greater London, N1 6DR",
        vendorInfo: {
            vendorName: "Old Street Studio Kit",
            vendorImage: "/assets/vendors/vendor24.jpg",
            rating: 4.7,
            totalOrders: 374
        },
        reviews: [
            { id: "rev24-1", rating: 5, comment: "Incredible value for home studio work. The low end is tight for 3.5 inch speakers.", userName: "Tech City Producer", userLocation: "Old Street", userImage: "https://randomuser.me/api/portraits/women/40.jpg" },
            { id: "rev24-2", rating: 4, comment: "Pristine condition monitors. Perfect for my podcasting week.", userName: "Digital Nomad", userLocation: "Shoreditch", userImage: "https://randomuser.me/api/portraits/men/41.jpg" },
            { id: "rev24-3", rating: 5, comment: "Zara was very helpful with the instructions. Five stars.", userName: "Audio Student", userLocation: "Hoxton", userImage: "https://randomuser.me/api/portraits/women/42.jpg" },
            { id: "rev24-4", rating: 5, comment: "Clean sound and compact design. fits perfectly on any desk.", userName: "WFH Guru", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/43.jpg" },
            { id: "rev24-5", rating: 4, comment: "Good quality rental. All cables were included and neatly packed.", userName: "Content Creator", userLocation: "Old Street", userImage: "https://randomuser.me/api/portraits/women/44.jpg" },
            { id: "rev24-6", rating: 5, comment: "Best budget monitors I've used. Translated well to bigger systems.", userName: "Music Lover", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/45.jpg" }
        ]
    },
    {
        id: "mackie-cr-x-series",
        title: "Mackie CR-X Series",
        address: "Leicester City",
        price: "$33",
        image: "/assets/createWithKooji/create11.svg",
        images: ["/assets/createWithKooji/create11.svg", "/assets/createWithKooji/create13.svg", "/assets/createWithKooji/create1.svg", "/assets/createWithKooji/create3.svg"],
        rating: 4.6,
        totalReviews: 155,
        category: "Instruments & Equipment",
        type: "Multimedia Monitor",
        overview: "Versatile multimedia studio monitors with a front-facing headphone output and Bluetooth, suited for content creators, gaming streamers, and multimedia producers.",
        whatsIncluded: [
            "2x Mackie CR-X Series monitors",
            "Power cable",
            "3.5mm TRS cable",
            "RCA input cable",
            "Volume knob protection cap"
        ],
        whatsNotIncluded: [
            "Bluetooth source device",
            "Monitor stands",
            "Acoustic treatment panels"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not use Bluetooth pairing with permanent devices",
            "Wipe down before return",
            "All included cables must be returned",
            "Weekend bookings accepted with prior confirmation"
        ],
        specification: {
            brand: "Mackie",
            model: "CR3-X",
            powerOutput: "50W peak (25W per monitor)",
            condition: "Good",
            weight: "1.4 kg per monitor",
            usageType: "Indoor",
            connectivity: "3.5mm / RCA / Bluetooth 5.0",
            driverSize: "3 inch woofer + 0.75 inch tweeter",
            headphoneOutput: "Front-facing 3.5mm",
            dimensions: "128 x 198 x 174 mm"
        },
        pickupLocation: "Mr. Elliot Vance, Phoenix Square, 4 Midland Street, Leicester, LE1 1TG",
        vendorInfo: {
            vendorName: "Leicester Media Hire",
            vendorImage: "/assets/vendors/vendor25.jpg",
            rating: 4.6,
            totalOrders: 241
        },
        reviews: [
            { id: "rev25-1", rating: 5, comment: "Mackie quality is solid. Perfect for our small gaming event.", userName: "Leicester Gamer", userLocation: "Leicester", userImage: "https://randomuser.me/api/portraits/men/46.jpg" },
            { id: "rev25-2", rating: 5, comment: "Very punchy sound. The Bluetooth feature worked flawlessly.", userName: "Party Host", userLocation: "Loughborough", userImage: "https://randomuser.me/api/portraits/women/47.jpg" },
            { id: "rev25-3", rating: 4, comment: "Elliot was quick to respond. Pickup in the city centre was easy.", userName: "Tech Guy", userLocation: "Leicester", userImage: "https://randomuser.me/api/portraits/men/48.jpg" },
            { id: "rev25-4", rating: 5, comment: "Condition was like new. Came in a handy carry bag.", userName: "Student Pro", userLocation: "Leicester", userImage: "https://randomuser.me/api/portraits/women/49.jpg" },
            { id: "rev25-5", rating: 4, comment: "Great monitoring speakers for the price. Clear with good volume.", userName: "Musician", userLocation: "Hinckley", userImage: "https://randomuser.me/api/portraits/men/50.jpg" },
            { id: "rev25-6", rating: 5, comment: "Reliable equipment and friendly service. Will rent again.", userName: "Audio Fan", userLocation: "Leicester", userImage: "https://randomuser.me/api/portraits/women/51.jpg" }
        ]
    },
    {
        id: "behringer-u-phoria",
        title: "Behringer U-Phoria",
        address: "York Minster",
        price: "$20",
        image: "/assets/createWithKooji/create12.svg",
        images: ["/assets/createWithKooji/create12.svg", "/assets/createWithKooji/create14.svg", "/assets/createWithKooji/create2.svg", "/assets/createWithKooji/create4.svg"],
        rating: 4.4,
        totalReviews: 420,
        category: "Technicians",
        type: "Audio Interface",
        overview: "Budget-friendly USB audio interface with MIDAS-designed preamps, great for beginner recording engineers, student projects, and live streaming setups.",
        whatsIncluded: [
            "1x Behringer U-Phoria audio interface",
            "USB cable",
            "Driver download guide",
            "Quick start manual",
            "Carrying bag"
        ],
        whatsNotIncluded: [
            "Microphone or instrument",
            "XLR or TRS cables",
            "DAW or recording software"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Install drivers before the rental session",
            "Return USB cable with unit",
            "Do not force incorrect cable types into inputs",
            "Late return charges apply"
        ],
        specification: {
            brand: "Behringer",
            model: "U-Phoria UM2",
            preampType: "MIDAS-designed mic preamp",
            condition: "Good",
            weight: "0.23 kg",
            usageType: "Indoor",
            inputs: "1x XLR/TRS combo + 1x instrument jack",
            outputs: "2x RCA / 3.5mm headphone",
            sampleRate: "Up to 48kHz / 16-bit",
            connectivity: "USB (bus powered)"
        },
        pickupLocation: "Ms. Grace Whitmore, 8 Gillygate, City Centre, York, YO31 7EA",
        vendorInfo: {
            vendorName: "York Recording Shop",
            vendorImage: "/assets/vendors/vendor26.jpg",
            rating: 4.4,
            totalOrders: 692
        },
        reviews: [
            { id: "rev26-1", rating: 5, comment: "Behringer preamps were surprisingly clean. Great for our field recording.", userName: "York Audio", userLocation: "York", userImage: "https://randomuser.me/api/portraits/women/52.jpg" },
            { id: "rev26-2", rating: 4, comment: "Simple and effective interface. Grace was very professional.", userName: "Student Recordist", userLocation: "York", userImage: "https://randomuser.me/api/portraits/men/53.jpg" },
            { id: "rev26-3", rating: 5, comment: "Perfect condition. The bus-powered feature is so convenient.", userName: "Mobile Music", userLocation: "York", userImage: "https://randomuser.me/api/portraits/women/54.jpg" },
            { id: "rev26-4", rating: 5, comment: "Value for money is unbeatable here. Highly recommended for York rentals.", userName: "Budget Pro", userLocation: "Selby", userImage: "https://randomuser.me/api/portraits/men/55.jpg" },
            { id: "rev26-5", rating: 4, comment: "Worked perfectly with my PC. No latency issues at all.", userName: "Gamer", userLocation: "York", userImage: "https://randomuser.me/api/portraits/women/56.jpg" },
            { id: "rev26-6", rating: 5, comment: "Will definitely use this again for my next project. 5 stars.", userName: "Creative Heart", userLocation: "Harrogate", userImage: "https://randomuser.me/api/portraits/men/57.jpg" }
        ]
    },
    {
        id: "sennheiser-hd-600",
        title: "Sennheiser HD 600",
        address: "Bath Spa",
        price: "$55",
        image: "/assets/createWithKooji/create13.svg",
        images: ["/assets/createWithKooji/create13.svg", "/assets/createWithKooji/create1.svg", "/assets/createWithKooji/create3.svg", "/assets/createWithKooji/create5.svg"],
        rating: 4.9,
        totalReviews: 300,
        category: "Technicians",
        type: "Headphones",
        overview: "Open-back reference headphones with a natural, detailed soundstage, widely used by audio engineers and mastering technicians for critical listening and monitoring.",
        whatsIncluded: [
            "1x Sennheiser HD 600 open-back headphones",
            "6.35mm to 3.5mm adapter",
            "Coiled cable (3m)",
            "Replacement ear pads (1 pair)",
            "Padded storage pouch"
        ],
        whatsNotIncluded: [
            "Headphone amplifier",
            "Audio interface or DAC",
            "Cable shorter than 3m"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Open-back design — not for use in noisy environments",
            "Do not bend or twist the headband",
            "Ear pads must be returned in hygienic condition",
            "Sanitisation fee applies if pads are soiled"
        ],
        specification: {
            brand: "Sennheiser",
            model: "HD 600",
            type: "Open-back over-ear",
            condition: "Like New",
            weight: "0.26 kg",
            usageType: "Indoor",
            impedance: "300 Ohms",
            frequencyResponse: "12Hz – 39kHz",
            sensitivity: "97 dB / 1V RMS",
            cableLength: "3m coiled"
        },
        pickupLocation: "Mr. Hugo Pemberton, 22 Milsom Street, Bath Spa, Bath, BA1 1DG",
        vendorInfo: {
            vendorName: "Bath Audiophile Hire",
            vendorImage: "/assets/vendors/vendor27.jpg",
            rating: 4.9,
            totalOrders: 508
        },
        reviews: [
            { id: "rev27-1", rating: 5, comment: "Legendary headphones. The soundstage is vast and detailed.", userName: "Mastering Engineer", userLocation: "Bath", userImage: "https://randomuser.me/api/portraits/men/58.jpg" },
            { id: "rev27-2", rating: 5, comment: "Most comfortable headphones I've ever worn for long sessions.", userName: "Pro Listener", userLocation: "Bristol", userImage: "https://randomuser.me/api/portraits/women/59.jpg" },
            { id: "rev27-3", rating: 5, comment: "Hugo was a pleasure to deal with. Unit was in pristine condition.", userName: "Bath Artist", userLocation: "Bath", userImage: "https://randomuser.me/api/portraits/men/60.jpg" },
            { id: "rev27-4", rating: 4, comment: "Incredible reference for my final mixdown. Honest and deep.", userName: "Music Student", userLocation: "Chippenham", userImage: "https://randomuser.me/api/portraits/women/61.jpg" },
            { id: "rev27-5", rating: 5, comment: "Open-back design is perfect for critical work. 5 stars.", userName: "Audio Nut", userLocation: "Bath", userImage: "https://randomuser.me/api/portraits/men/62.jpg" },
            { id: "rev27-6", rating: 5, comment: "Best rental in Bath for serious audio professionals.", userName: "Studio owner", userLocation: "Trowbridge", userImage: "https://randomuser.me/api/portraits/women/63.jpg" }
        ]
    },
    {
        id: "beyerdynamic-dt-990",
        title: "Beyerdynamic DT 990",
        address: "Cambridge Science Park",
        price: "$45",
        image: "/assets/createWithKooji/create14.svg",
        images: ["/assets/createWithKooji/create14.svg", "/assets/createWithKooji/create2.svg", "/assets/createWithKooji/create4.svg", "/assets/createWithKooji/create6.svg"],
        rating: 4.8,
        totalReviews: 280,
        category: "Technicians",
        type: "Headphones",
        overview: "Professional open-back headphones with brilliant highs and powerful bass, ideal for mixing engineers, studio technicians, and audiophile listening sessions.",
        whatsIncluded: [
            "1x Beyerdynamic DT 990 Pro headphones",
            "6.35mm to 3.5mm adapter",
            "Coiled cable",
            "Velour ear pads (fitted)",
            "Carry bag"
        ],
        whatsNotIncluded: [
            "Headphone amplifier",
            "Replacement cable",
            "Microphone attachment"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Store coiled cable neatly after use",
            "Avoid pulling cable from jack abruptly",
            "Return ear pads clean and intact",
            "Renter responsible for any headband cracking damage"
        ],
        specification: {
            brand: "Beyerdynamic",
            model: "DT 990 Pro",
            type: "Open-back over-ear",
            condition: "Good",
            weight: "0.25 kg",
            usageType: "Indoor",
            impedance: "250 Ohms",
            frequencyResponse: "5Hz – 35kHz",
            sensitivity: "96 dB SPL",
            cableLength: "3m coiled"
        },
        pickupLocation: "Ms. Clara Newton, Unit 12 Milton Road, Cambridge Science Park, Cambridge, CB4 0FZ",
        vendorInfo: {
            vendorName: "Cambridge AV Lab",
            vendorImage: "/assets/vendors/vendor28.jpg",
            rating: 4.8,
            totalOrders: 463
        },
        reviews: [
            { id: "rev28-1", rating: 5, comment: "The detail in the highs is amazing. Best for detailed mixing.", userName: "Cambridge Scientist", userLocation: "Cambridge", userImage: "https://randomuser.me/api/portraits/women/64.jpg" },
            { id: "rev28-2", rating: 5, comment: "Velour pads were super clean and comfy. Professional service.", userName: "Auditory Researcher", userLocation: "Ely", userImage: "https://randomuser.me/api/portraits/men/65.jpg" },
            { id: "rev28-3", rating: 4, comment: "Sturdy and reliable. Perfect for my studio time in Cambridge.", userName: "Producer", userLocation: "Huntingdon", userImage: "https://randomuser.me/api/portraits/women/66.jpg" },
            { id: "rev28-4", rating: 5, comment: "Clara was very efficient with the pickup. Great gear.", userName: "Happy Muso", userLocation: "Cambridge", userImage: "https://randomuser.me/api/portraits/men/67.jpg" },
            { id: "rev28-5", rating: 5, comment: "A staple in my mixing workflow now. Will buy a pair soon!", userName: "Tone Junkie", userLocation: "Newmarket", userImage: "https://randomuser.me/api/portraits/women/68.jpg" },
            { id: "rev28-6", rating: 4, comment: "Best open-back experience I've had. Very happy with the rental.", userName: "Audiophile", userLocation: "Cambridge", userImage: "https://randomuser.me/api/portraits/men/69.jpg" }
        ]
    },
    {
        id: "audio-technica-m50x",
        title: "Audio-Technica M50x",
        address: "Reading Station",
        price: "$38",
        image: "/assets/createWithKooji/create1.svg",
        images: ["/assets/createWithKooji/create1.svg", "/assets/createWithKooji/create4.svg", "/assets/createWithKooji/create7.svg", "/assets/createWithKooji/create10.svg"],
        rating: 4.7,
        totalReviews: 500,
        category: "Instruments & Equipment",
        type: "Headphones",
        overview: "Best-selling studio headphones with exceptional clarity and deep bass, popular with DJs, producers, recording engineers, and audio students worldwide.",
        whatsIncluded: [
            "1x Audio-Technica ATH-M50x headphones",
            "3 detachable cables (coiled, straight short, straight long)",
            "6.35mm screw-on adapter",
            "Carrying pouch",
            "Cable clip"
        ],
        whatsNotIncluded: [
            "Headphone amplifier",
            "Audio interface or DAC",
            "Boom microphone attachment"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Return all 3 cables included",
            "Do not over-extend the swivel earcups",
            "Ear pads must be wiped clean before return",
            "Late returns charged at daily rate"
        ],
        specification: {
            brand: "Audio-Technica",
            model: "ATH-M50x",
            type: "Closed-back over-ear",
            condition: "Like New",
            weight: "0.285 kg",
            usageType: "Indoor",
            impedance: "38 Ohms",
            frequencyResponse: "15Hz – 28kHz",
            sensitivity: "99 dB / mW",
            driverDiameter: "45 mm"
        },
        pickupLocation: "Mr. Marcus Reid, 14 Station Road, Reading Town Centre, Reading, RG1 1JX",
        vendorInfo: {
            vendorName: "Reading Headphone Hub",
            vendorImage: "/assets/vendors/vendor29.jpg",
            rating: 4.7,
            totalOrders: 821
        },
        reviews: [
            { id: "rev29-1", rating: 5, comment: "Most versatile headphones I've rented. The 3 cables were so handy.", userName: "Reading DJ", userLocation: "Reading", userImage: "https://randomuser.me/api/portraits/men/70.jpg" },
            { id: "rev29-2", rating: 5, comment: "Classic M50x sound. Punchy bass and clear mids. Perfect.", userName: "Music Snob", userLocation: "Slough", userImage: "https://randomuser.me/api/portraits/women/71.jpg" },
            { id: "rev29-3", rating: 4, comment: "Marcus was prompt and professional. Very easy pickup near the station.", userName: "Commuter Artist", userLocation: "Reading", userImage: "https://randomuser.me/api/portraits/men/72.jpg" },
            { id: "rev29-4", rating: 5, comment: "Condition was immaculate. Used for my vocal recording sessions.", userName: "Vocalist", userLocation: "Bracknell", userImage: "https://randomuser.me/api/portraits/women/73.jpg" },
            { id: "rev29-5", rating: 4, comment: "Great isolation for a busy studio environment. Highly recommended.", userName: "Engineer", userLocation: "Wokingham", userImage: "https://randomuser.me/api/portraits/men/74.jpg" },
            { id: "rev29-6", rating: 5, comment: "Unbeatable price for such a pro bit of kit. Will rent again.", userName: "Student Life", userLocation: "Reading", userImage: "https://randomuser.me/api/portraits/women/75.jpg" }
        ]
    },
    {
        id: "roland-juno-ds",
        title: "Roland JUNO-DS",
        address: "Kingston Upon Thames",
        price: "$95",
        image: "/assets/createWithKooji/create2.svg",
        images: ["/assets/createWithKooji/create2.svg", "/assets/createWithKooji/create5.svg", "/assets/createWithKooji/create8.svg", "/assets/createWithKooji/create11.svg"],
        rating: 4.9,
        totalReviews: 65,
        category: "musciains & singers",
        type: "Synthesizer",
        overview: "Lightweight and stage-ready synthesizer with 500+ preset sounds and battery operation support, ideal for touring musicians, church bands, and live keyboard players.",
        whatsIncluded: [
            "1x Roland JUNO-DS synthesizer",
            "Power adapter",
            "Sustain pedal",
            "USB cable",
            "Carry bag"
        ],
        whatsNotIncluded: [
            "Keyboard stand",
            "PA system or amplifier",
            "MIDI interface"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not attempt to modify internal sounds permanently",
            "Return with factory preset bank restored",
            "Keyboard stand available for additional rental fee",
            "Handle keys with care — do not strike excessively"
        ],
        specification: {
            brand: "Roland",
            model: "JUNO-DS61",
            keys: "61 keys (velocity sensitive)",
            condition: "Like New",
            weight: "4.7 kg",
            usageType: "Indoor & Outdoor",
            polyphony: "128-voice maximum",
            presets: "500+ built-in sounds",
            connectivity: "USB / MIDI / 1/4\" output / Headphone",
            powerSource: "AC adapter or 8x AA batteries"
        },
        pickupLocation: "Ms. Vivienne Lawson, 27 Eden Street, Kingston upon Thames, Greater London, KT1 1BL",
        vendorInfo: {
            vendorName: "Kingston Keys and Synths",
            vendorImage: "/assets/vendors/vendor30.jpg",
            rating: 4.9,
            totalOrders: 117
        },
        reviews: [
            { id: "rev30-1", rating: 5, comment: "Versatile stage keyboard. The sounds are modern and punchy.", userName: "Gigging Musician", userLocation: "Kingston", userImage: "https://randomuser.me/api/portraits/women/76.jpg" },
            { id: "rev30-2", rating: 5, comment: "Lightweight and easy to carry to rehearsal. Perfect synth.", userName: "Synth Lover", userLocation: "Richmond", userImage: "https://randomuser.me/api/portraits/men/77.jpg" },
            { id: "rev30-3", rating: 4, comment: "Vivienne was very helpful. Sustain pedal was in great condition.", userName: "Happy Player", userLocation: "Surbiton", userImage: "https://randomuser.me/api/portraits/women/78.jpg" },
            { id: "rev30-4", rating: 5, comment: "Great value for a high-end Roland. Made my performance shine.", userName: "Church Player", userLocation: "Kingston", userImage: "https://randomuser.me/api/portraits/men/79.jpg" },
            { id: "rev30-5", rating: 5, comment: "Pristine condition. All keys and knobs worked perfectly.", userName: "Tech Head", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/80.jpg" },
            { id: "rev30-6", rating: 4, comment: "Reliable and robust. Will use again for my next tour.", userName: "Touring Pro", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/81.jpg" }
        ]
    },
    {
        id: "korg-minilogue",
        title: "Korg Minilogue",
        address: "Windsor Castle",
        price: "$70",
        image: "/assets/createWithKooji/create3.svg",
        images: ["/assets/createWithKooji/create3.svg", "/assets/createWithKooji/create6.svg", "/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create12.svg"],
        rating: 4.8,
        totalReviews: 125,
        category: "musciains & singers",
        type: "Analog Synthesizer",
        overview: "4-voice polyphonic analog synthesizer with vintage warmth and full patch programmability, perfect for studio recording, live performance, and sound design.",
        whatsIncluded: [
            "1x Korg Minilogue synthesizer",
            "Power adapter",
            "USB cable",
            "3.5mm headphone output",
            "User manual"
        ],
        whatsNotIncluded: [
            "MIDI controller or keyboard",
            "Audio interface",
            "Sustain pedal"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Reset all user patches before return",
            "Handle analog knobs and sliders gently",
            "Do not expose to extreme temperatures",
            "Damage to oscillator or filter components fully chargeable"
        ],
        specification: {
            brand: "Korg",
            model: "Minilogue",
            synthType: "4-voice analog polyphonic",
            condition: "Good",
            weight: "2.8 kg",
            usageType: "Indoor",
            keys: "37 slim keys (velocity / aftertouch)",
            oscillators: "2x VCOs per voice",
            memorySlots: "200 user program slots",
            connectivity: "USB / MIDI In+Out / 1/4\" output"
        },
        pickupLocation: "Mr. Barnaby Holt, 5 Thames Street, Windsor Town Centre, Windsor, SL4 1PL",
        vendorInfo: {
            vendorName: "Windsor Synth Parlour",
            vendorImage: "/assets/vendors/vendor31.jpg",
            rating: 4.8,
            totalOrders: 209
        },
        reviews: [
            { id: "rev31-1", rating: 5, comment: "True analog warmth. The sequencer is so fun to play with.", userName: "Patch Maker", userLocation: "Windsor", userImage: "https://randomuser.me/api/portraits/men/82.jpg" },
            { id: "rev31-2", rating: 5, comment: "Stunning condition. Barnaby was a pro through the whole process.", userName: "Synth Head", userLocation: "Slough", userImage: "https://randomuser.me/api/portraits/women/83.jpg" },
            { id: "rev31-3", rating: 5, comment: "Korg quality is undeniable. Perfect for my studio session.", userName: "Studio owner", userLocation: "Maidenhead", userImage: "https://randomuser.me/api/portraits/men/84.jpg" },
            { id: "rev31-4", rating: 4, comment: "Clear oscillators and versatile filters. Highly recommended.", userName: "Sound Designer", userLocation: "Eton", userImage: "https://randomuser.me/api/portraits/women/85.jpg" },
            { id: "rev31-5", rating: 5, comment: "Easy pickup and great communication. Five stars.", userName: "Happy Renter", userLocation: "Windsor", userImage: "https://randomuser.me/api/portraits/men/86.jpg" },
            { id: "rev31-6", rating: 4, comment: "Beautiful look and sound. Made our tracks come alive.", userName: "Artist", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/87.jpg" }
        ]
    },
    {
        id: "moog-grandmother",
        title: "Moog Grandmother",
        address: "Canterbury Cathedral",
        price: "$120",
        image: "/assets/createWithKooji/create4.svg",
        images: ["/assets/createWithKooji/create4.svg", "/assets/createWithKooji/create7.svg", "/assets/createWithKooji/create10.svg", "/assets/createWithKooji/create13.svg"],
        rating: 5.0,
        totalReviews: 35,
        category: "musciains & singers",
        type: "Semi-Modular Synth",
        overview: "Iconic Moog semi-modular synthesizer with spring reverb and arpeggiator, prized by sound designers and studio artists for its unparalleled analog depth and character.",
        whatsIncluded: [
            "1x Moog Grandmother synthesizer",
            "Power adapter",
            "Set of patch cables (10 cables)",
            "1/4\" output cable",
            "Hard shell carry case"
        ],
        whatsNotIncluded: [
            "Audio interface or preamp",
            "MIDI sequencer",
            "Additional modular patch cables"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 2 days",
            "Return all 10 patch cables",
            "Do not patch incompatible voltage sources into inputs",
            "Hard case must be used for all transport",
            "Any damage to spring reverb tank is fully chargeable"
        ],
        specification: {
            brand: "Moog",
            model: "Grandmother",
            synthType: "Semi-modular analog",
            condition: "Like New",
            weight: "5.44 kg",
            usageType: "Indoor",
            keys: "32 keys (velocity sensitive)",
            patchPoints: "41 patch points",
            builtInReverb: "Spring reverb tank",
            connectivity: "MIDI / CV/Gate / 1/4\" output / Headphone"
        },
        pickupLocation: "Ms. Elspeth Murray, 11 St Margaret's Street, Cathedral Quarter, Canterbury, CT1 2TH",
        vendorInfo: {
            vendorName: "Canterbury Sound Vault",
            vendorImage: "/assets/vendors/vendor32.jpg",
            rating: 5.0,
            totalOrders: 63
        },
        reviews: [
            { id: "rev32-1", rating: 5, comment: "The Grandmother is a masterpiece. Deep Moog bass!", userName: "Modern Moog", userLocation: "Canterbury", userImage: "https://randomuser.me/api/portraits/women/88.jpg" },
            { id: "rev32-2", rating: 5, comment: "Pristine condition semi-modular. Patch cables were all there.", userName: "Synthesist", userLocation: "Whitstable", userImage: "https://randomuser.me/api/portraits/men/89.jpg" },
            { id: "rev32-3", rating: 5, comment: "Elspeth was very kind and knowledgeable. Great experience.", userName: "Church Musician", userLocation: "Canterbury", userImage: "https://randomuser.me/api/portraits/women/90.jpg" },
            { id: "rev32-4", rating: 5, comment: "The spring reverb sounds lush. Perfect for sound design.", userName: "Ambient Artist", userLocation: "Kent", userImage: "https://randomuser.me/api/portraits/men/91.jpg" },
            { id: "rev32-5", rating: 4, comment: "Hard case made transport worry-free. Solid equipment.", userName: "Professional", userLocation: "Dover", userImage: "https://randomuser.me/api/portraits/women/92.jpg" },
            { id: "rev32-6", rating: 5, comment: "Iconic sound and service. Highly recommended.", userName: "Sound buff", userLocation: "Canterbury", userImage: "https://randomuser.me/api/portraits/men/93.jpg" }
        ]
    },
    {
        id: "native-instruments-s4",
        title: "Native Instruments S4",
        address: "Portobello Road",
        price: "$80",
        image: "/assets/createWithKooji/create5.svg",
        images: ["/assets/createWithKooji/create5.svg", "/assets/createWithKooji/create8.svg", "/assets/createWithKooji/create11.svg", "/assets/createWithKooji/create14.svg"],
        rating: 4.7,
        totalReviews: 90,
        category: "Technicians",
        type: "DJ System",
        overview: "Professional 4-channel Traktor DJ system with motorised jog wheels and full DJ workflow integration, designed for club-level DJs and touring professionals.",
        whatsIncluded: [
            "1x Native Instruments S4 MK3 controller",
            "USB cable",
            "Traktor Pro 3 license",
            "RCA to XLR output cables",
            "Carry bag"
        ],
        whatsNotIncluded: [
            "Laptop or DJ computer",
            "Headphones",
            "PA or club speaker system"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not permanently bind Traktor license to personal account",
            "Keep liquid away from jog wheels and faders",
            "Return Traktor license card with unit",
            "Advance booking required for weekend club events"
        ],
        specification: {
            brand: "Native Instruments",
            model: "Traktor Kontrol S4 MK3",
            channels: "4-channel",
            condition: "Good",
            weight: "3.68 kg",
            usageType: "Indoor",
            jogWheels: "Motorised haptic jog wheels",
            connectivity: "USB / XLR / RCA output",
            software: "Traktor Pro 3 included",
            dimensions: "592 x 354 x 67 mm"
        },
        pickupLocation: "Mr. Dominic Faye, 234 Portobello Road, Notting Hill, Greater London, W11 1LJ",
        vendorInfo: {
            vendorName: "Portobello DJ Outfitters",
            vendorImage: "/assets/vendors/vendor33.jpg",
            rating: 4.7,
            totalOrders: 178
        },
        reviews: [
            { id: "rev33-1", rating: 5, comment: "Professional Traktor gear. Motorized wheels are so fun.", userName: "West End DJ", userLocation: "Notting Hill", userImage: "https://randomuser.me/api/portraits/men/94.jpg" },
            { id: "rev33-2", rating: 5, comment: "Pristine unit and great support from Dominic. A+.", userName: "Wedding DJ", userLocation: "Kensington", userImage: "https://randomuser.me/api/portraits/women/95.jpg" },
            { id: "rev33-3", rating: 5, comment: "Absolute club standard. Handled my 4-deck mix beautifully.", userName: "Pro DJ", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/96.jpg" },
            { id: "rev33-4", rating: 4, comment: "Clean faders and responsive buttons. Best tech rental in W11.", userName: "Tech DJ", userLocation: "Paddington", userImage: "https://randomuser.me/api/portraits/women/97.jpg" },
            { id: "rev33-5", rating: 5, comment: "Solid case and all necessary cables provided. Quick pickup.", userName: "Event Planner", userLocation: "Notting Hill", userImage: "https://randomuser.me/api/portraits/men/98.jpg" },
            { id: "rev33-6", rating: 4, comment: "Traktor integration is flawless as expected. Five stars.", userName: "Longtime User", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/99.jpg" }
        ]
    },
    {
        id: "ableton-push-2",
        title: "Ableton Push 2",
        address: "Shoreditch High St",
        price: "$90",
        image: "/assets/createWithKooji/create6.svg",
        images: ["/assets/createWithKooji/create6.svg", "/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create12.svg", "/assets/createWithKooji/create1.svg"],
        rating: 4.9,
        totalReviews: 110,
        category: "musciains & singers",
        type: "Production Controller",
        overview: "Ableton's flagship hardware controller with deep Live integration, enabling hands-on beat making, melody playing, and full live performance without a keyboard.",
        whatsIncluded: [
            "1x Ableton Push 2 controller",
            "USB cable",
            "Ableton Live 11 Intro license",
            "Power adapter",
            "Protective travel cover"
        ],
        whatsNotIncluded: [
            "Laptop or MacBook",
            "Ableton Live full suite version",
            "Audio interface"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not permanently register Live license to personal account",
            "Handle RGB pads and encoders carefully",
            "Return travel cover with unit",
            "Late return surcharge of $20/day applies"
        ],
        specification: {
            brand: "Ableton",
            model: "Push 2",
            padGrid: "8x8 RGB velocity-sensitive pads",
            condition: "Like New",
            weight: "1.44 kg",
            usageType: "Indoor",
            display: "Full-colour 960x160 px display",
            encoders: "11 touch-sensitive encoders",
            connectivity: "USB / DC power input",
            dimensions: "378 x 303 x 28 mm"
        },
        pickupLocation: "Ms. Imogen Stokes, Unit 3 Shoreditch High Street Arches, Shoreditch, Greater London, E1 6JE",
        vendorInfo: {
            vendorName: "Shoreditch Beat Lab",
            vendorImage: "/assets/vendors/vendor34.jpg",
            rating: 4.9,
            totalOrders: 256
        },
        reviews: [
            { id: "rev34-1", rating: 5, comment: "The Push 2 is the heart of my studio. Imogen was very helpful.", userName: "Shoreditch Sound", userLocation: "Shoreditch", userImage: "https://randomuser.me/api/portraits/women/10.jpg" },
            { id: "rev34-2", rating: 5, comment: "Pristine unit and great support. Ableton integration is flawless.", userName: "Live Producer", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/11.jpg" },
            { id: "rev34-3", rating: 4, comment: "RGB pads are incredible. Made my performance so much easier.", userName: "Electronic Artist", userLocation: "Hackney", userImage: "https://randomuser.me/api/portraits/women/12.jpg" },
            { id: "rev34-4", rating: 5, comment: "Highly recommend for any Ableton user in London.", userName: "Power User", userLocation: "Dalston", userImage: "https://randomuser.me/api/portraits/men/13.jpg" },
            { id: "rev34-5", rating: 4, comment: "Solid build and responsive buttons. Best tech rental in E1.", userName: "Tech Producer", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/14.jpg" },
            { id: "rev34-6", rating: 5, comment: "Pristine condition. Handled my live set beautifully.", userName: "Studio owner", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/15.jpg" }
        ]
    },
    {
        id: "universal-audio-volt",
        title: "Universal Audio Volt",
        address: "Coventry City",
        price: "$48",
        image: "/assets/createWithKooji/create7.svg",
        images: ["/assets/createWithKooji/create7.svg", "/assets/createWithKooji/create10.svg", "/assets/createWithKooji/create13.svg", "/assets/createWithKooji/create2.svg"],
        rating: 4.8,
        totalReviews: 75,
        category: "Technicians",
        type: "Audio Interface",
        overview: "Vintage-voiced USB audio interface with onboard analogue compression, ideal for recording vocals, guitars, and podcasts with that classic warm UA tone.",
        whatsIncluded: [
            "1x Universal Audio Volt 2 interface",
            "USB-C to USB-A cable",
            "UA VOLT plugin bundle activation code",
            "Quick start card",
            "Carry pouch"
        ],
        whatsNotIncluded: [
            "Microphone or instrument",
            "XLR or TRS cables",
            "DAW software"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not permanently activate plugin bundle during rental",
            "Return USB cable and pouch",
            "Avoid forcing non-compatible connectors",
            "Weekend bookings allowed with prior confirmation"
        ],
        specification: {
            brand: "Universal Audio",
            model: "Volt 2",
            preampType: "Vintage mode analogue front-end",
            condition: "Like New",
            weight: "0.34 kg",
            usageType: "Indoor",
            inputs: "2x XLR/TRS combo (Mic/Line/Inst)",
            outputs: "2x TRS + 3.5mm headphone",
            sampleRate: "Up to 192kHz / 24-bit",
            connectivity: "USB-C (bus powered)"
        },
        pickupLocation: "Mr. Kofi Mensah, FarGo Village, Far Gosford Street, Coventry, CV1 5ED",
        vendorInfo: {
            vendorName: "Coventry Creative Tech",
            vendorImage: "/assets/vendors/vendor35.jpg",
            rating: 4.8,
            totalOrders: 134
        },
        reviews: [
            { id: "rev35-1", rating: 5, comment: "Classic vintage tone. The analog compression is spot on.", userName: "Coventry Artist", userLocation: "Coventry", userImage: "https://randomuser.me/api/portraits/men/16.jpg" },
            { id: "rev35-2", rating: 5, comment: "Kofi was very easy to deal with. Unit was in perfect condition.", userName: "UA Fan", userLocation: "Warwick", userImage: "https://randomuser.me/api/portraits/women/17.jpg" },
            { id: "rev35-3", rating: 5, comment: "Pristine interface and great support. Highly recommended.", userName: "Studio Pro", userLocation: "Coventry", userImage: "https://randomuser.me/api/portraits/men/18.jpg" },
            { id: "rev35-4", rating: 4, comment: "Clean preamps and simple to use. Perfect for my podcast.", userName: "Podcaster", userLocation: "Leamington", userImage: "https://randomuser.me/api/portraits/women/19.jpg" },
            { id: "rev35-5", rating: 5, comment: "UA quality is unmatched. Made my voice sound rich and deep.", userName: "Voiceover Talent", userLocation: "Coventry", userImage: "https://randomuser.me/api/portraits/men/20.jpg" },
            { id: "rev35-6", rating: 4, comment: "Solid build and great value rental. Five stars.", userName: "Music Buff", userLocation: "Coventry", userImage: "https://randomuser.me/api/portraits/women/21.jpg" }
        ]
    },
    {
        id: "solid-state-logic-ssl2",
        title: "Solid State Logic SSL2",
        address: "Plymouth Hoe",
        price: "$52",
        image: "/assets/createWithKooji/create8.svg",
        images: ["/assets/createWithKooji/create8.svg", "/assets/createWithKooji/create11.svg", "/assets/createWithKooji/create14.svg", "/assets/createWithKooji/create3.svg"],
        rating: 4.9,
        totalReviews: 55,
        category: "Technicians",
        type: "Audio Interface",
        overview: "Professional USB audio interface built on SSL's legendary console heritage, delivering pristine preamps and studio-grade conversion for recording and mixing.",
        whatsIncluded: [
            "1x SSL2 audio interface",
            "USB-C cable",
            "SSL 360° plugin bundle code",
            "Driver installation guide",
            "Carry bag"
        ],
        whatsNotIncluded: [
            "Microphone or instrument",
            "XLR, TRS or MIDI cables",
            "Studio monitors or headphones"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not permanently activate SSL 360° account during rental",
            "Return USB cable and carry bag",
            "Handle gain knobs and input selectors carefully",
            "Advance booking recommended for professional studio sessions"
        ],
        specification: {
            brand: "Solid State Logic",
            model: "SSL2",
            preampType: "SSL legacy 4K console-derived preamp",
            condition: "Like New",
            weight: "0.38 kg",
            usageType: "Indoor",
            inputs: "2x XLR/TRS combo",
            outputs: "2x TRS + 3.5mm headphone",
            sampleRate: "Up to 192kHz / 24-bit",
            connectivity: "USB-C (bus powered)"
        },
        pickupLocation: "Ms. Petra Lawson, 3 Citadel Road East, The Hoe, Plymouth, PL1 2HU",
        vendorInfo: {
            vendorName: "Plymouth Hoe Recording",
            vendorImage: "/assets/vendors/vendor36.jpg",
            rating: 4.9,
            totalOrders: 98
        },
        reviews: [
            { id: "rev36-1", rating: 5, comment: "Pristine SSL sound. The 4K button adds that magic touch.", userName: "Plymouth Producer", userLocation: "Plymouth", userImage: "https://randomuser.me/api/portraits/women/22.jpg" },
            { id: "rev36-2", rating: 5, comment: "Petra was a pro. Pickup from the Hoe was quick and easy.", userName: "Studio owner", userLocation: "Exeter", userImage: "https://randomuser.me/api/portraits/men/23.jpg" },
            { id: "rev36-3", rating: 5, comment: "The legacy of SSL in a compact interface. Simply stunning.", userName: "Audio Nerd", userLocation: "Plymouth", userImage: "https://randomuser.me/api/portraits/women/24.jpg" },
            { id: "rev36-4", rating: 4, comment: "Clean and detailed preamps. Perfect for our field recording.", userName: "Professional", userLocation: "Truro", userImage: "https://randomuser.me/api/portraits/men/25.jpg" },
            { id: "rev36-5", rating: 5, comment: "Condition was as new. Highly recommend for serious sessions.", userName: "Creative Mind", userLocation: "Plymouth", userImage: "https://randomuser.me/api/portraits/women/26.jpg" },
            { id: "rev36-6", rating: 4, comment: "Solid equipment and friendly service. 5 stars.", userName: "Happy User", userLocation: "Plymouth", userImage: "https://randomuser.me/api/portraits/men/27.jpg" }
        ]
    },
    {
        id: "audient-id4-mkii",
        title: "Audient iD4 MKII",
        address: "Durham Riverside",
        price: "$36",
        image: "/assets/createWithKooji/create9.svg",
        images: ["/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create12.svg", "/assets/createWithKooji/create1.svg", "/assets/createWithKooji/create4.svg"],
        rating: 4.7,
        totalReviews: 135,
        category: "Technicians",
        type: "Audio Interface",
        overview: "Compact high-performance audio interface with a class-leading Audient console preamp, perfect for solo vocalists, guitarists, and home studio recording engineers.",
        whatsIncluded: [
            "1x Audient iD4 MKII interface",
            "USB-C cable",
            "Driver and software download card",
            "Quick start guide",
            "Protective sleeve"
        ],
        whatsNotIncluded: [
            "Microphone or guitar",
            "XLR or instrument cables",
            "Monitoring headphones or speakers"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Ensure drivers are installed prior to session",
            "Do not modify internal settings via iD mixer software",
            "Return USB cable and sleeve",
            "Late returns incur a standard daily surcharge"
        ],
        specification: {
            brand: "Audient",
            model: "iD4 MKII",
            preampType: "Class-A Audient console mic preamp",
            condition: "Good",
            weight: "0.22 kg",
            usageType: "Indoor",
            inputs: "1x XLR/TRS combo + 1x JFET instrument DI",
            outputs: "2x TRS + 3.5mm headphone",
            sampleRate: "Up to 96kHz / 24-bit",
            connectivity: "USB-C (bus powered)"
        },
        pickupLocation: "Mr. Callum Fraser, 6 Framwellgate Bridge, Framwellgate Waterside, Durham, DH1 4SJ",
        vendorInfo: {
            vendorName: "Durham Riverside Studio",
            vendorImage: "/assets/vendors/vendor37.jpg",
            rating: 4.7,
            totalOrders: 217
        },
        reviews: [
            { id: "rev37-1", rating: 5, comment: "Audient preamps are the real deal. Incredibly clear.", userName: "Durham Artist", userLocation: "Durham", userImage: "https://randomuser.me/api/portraits/men/28.jpg" },
            { id: "rev37-2", rating: 5, comment: "Pristine condition interface. Callum was very helpful.", userName: "Vocal Talent", userLocation: "Newcastle", userImage: "https://randomuser.me/api/portraits/women/29.jpg" },
            { id: "rev37-3", rating: 4, comment: "Compact and powerful interface. Perfect for solo recording.", userName: "Independent", userLocation: "Durham", userImage: "https://randomuser.me/api/portraits/men/30.jpg" },
            { id: "rev37-4", rating: 5, comment: "Great value rental for students in Durham. Highly recommend.", userName: "Student Recordist", userLocation: "Durham", userImage: "https://randomuser.me/api/portraits/women/31.jpg" },
            { id: "rev37-5", rating: 4, comment: "Smooth rental via Kooji. The gear was well-maintained.", userName: "Focus Pro", userLocation: "Sunderland", userImage: "https://randomuser.me/api/portraits/men/32.jpg" },
            { id: "rev37-6", rating: 5, comment: "Best audio interface rental in the area. 5 stars.", userName: "Music Buff", userLocation: "Durham", userImage: "https://randomuser.me/api/portraits/women/33.jpg" }
        ]
    },
    {
        id: "genelec-8010a",
        title: "Genelec 8010A",
        address: "Salisbury Plain",
        price: "$110",
        image: "/assets/createWithKooji/create10.svg",
        images: ["/assets/createWithKooji/create10.svg", "/assets/createWithKooji/create13.svg", "/assets/createWithKooji/create2.svg", "/assets/createWithKooji/create5.svg"],
        rating: 4.9,
        totalReviews: 40,
        category: "Technicians",
        type: "Studio Monitor",
        overview: "Finnish-engineered SAM studio monitor with auto-calibration and precise imaging, trusted by top mastering engineers and broadcast professionals globally.",
        whatsIncluded: [
            "2x Genelec 8010A powered studio monitors",
            "Power cables",
            "XLR balanced cables (pair)",
            "Iso-Pod isolation feet",
            "Calibration guide"
        ],
        whatsNotIncluded: [
            "Audio interface or DAC",
            "GLM calibration kit (optional upgrade)",
            "Monitor stands"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 2 days",
            "Do not remove Iso-Pod feet during use",
            "Handle die-cast aluminium enclosure with care",
            "Return in original foam packaging only",
            "Any driver or tweeter damage is fully chargeable"
        ],
        specification: {
            brand: "Genelec",
            model: "8010A",
            powerOutput: "25W (LF 12W + HF 12W)",
            condition: "Like New",
            weight: "1.7 kg per monitor",
            usageType: "Indoor",
            driverSize: "3 inch woofer + 3/4 inch tweeter",
            frequencyResponse: "74Hz – 20kHz",
            enclosure: "Die-cast aluminium SAM",
            connectivity: "XLR balanced input"
        },
        pickupLocation: "Ms. Diana Hollis, Maltings Shopping Centre, Brown Street, Salisbury, SP1 1HG",
        vendorInfo: {
            vendorName: "Salisbury Broadcast Hire",
            vendorImage: "/assets/vendors/vendor38.jpg",
            rating: 4.9,
            totalOrders: 72
        },
        reviews: [
            { id: "rev38-1", rating: 5, comment: "Genelec precision in a small package. Simply incredible.", userName: "Mastering Pro", userLocation: "Salisbury", userImage: "https://randomuser.me/api/portraits/women/34.jpg" },
            { id: "rev38-2", rating: 5, comment: "Diana was very professional. Equipment was in mint condition.", userName: "Studio owner", userLocation: "Southampton", userImage: "https://randomuser.me/api/portraits/men/35.jpg" },
            { id: "rev38-3", rating: 5, comment: "Pristine condition monitors. Used them for critical listening.", userName: "Audio Nut", userLocation: "Salisbury", userImage: "https://randomuser.me/api/portraits/women/36.jpg" },
            { id: "rev38-4", rating: 4, comment: "Impressive soundstage and detail. Iso-Pods are very useful.", userName: "Creative Heart", userLocation: "Winchester", userImage: "https://randomuser.me/api/portraits/men/37.jpg" },
            { id: "rev38-5", rating: 5, comment: "Best reference monitors I've rented. Five stars.", userName: "Detail Oriented", userLocation: "Salisbury", userImage: "https://randomuser.me/api/portraits/women/38.jpg" },
            { id: "rev38-6", rating: 4, comment: "Solid and reliable equipment. High-end experience.", userName: "Tech Head", userLocation: "Salisbury", userImage: "https://randomuser.me/api/portraits/men/39.jpg" }
        ]
    },
    {
        id: "adam-audio-t7v",
        title: "Adam Audio T7V",
        address: "Lincoln Cathedral",
        price: "$78",
        image: "/assets/createWithKooji/create11.svg",
        images: ["/assets/createWithKooji/create11.svg", "/assets/createWithKooji/create14.svg", "/assets/createWithKooji/create3.svg", "/assets/createWithKooji/create6.svg"],
        rating: 4.8,
        totalReviews: 95,
        category: "Technicians",
        type: "Studio Monitor",
        overview: "7-inch active studio monitors featuring ADAM's proprietary ribbon tweeter for extended, detailed high-frequency response used in mixing and mastering studios.",
        whatsIncluded: [
            "2x Adam Audio T7V powered monitors",
            "Power cables",
            "XLR balanced cables (pair)",
            "1/4\" TRS cables (pair)",
            "Acoustic placement guide"
        ],
        whatsNotIncluded: [
            "Audio interface",
            "Isolation pads or stands",
            "Room acoustic treatment"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not expose ribbon tweeter to high-SPL transients",
            "Strictly indoor controlled environment use only",
            "Return all cables included",
            "Tweeter damage is non-repairable and fully chargeable"
        ],
        specification: {
            brand: "ADAM Audio",
            model: "T7V",
            powerOutput: "70W (LF 50W + HF 20W)",
            condition: "Like New",
            weight: "5.6 kg per monitor",
            usageType: "Indoor",
            driverSize: "7 inch woofer + U-ART ribbon tweeter",
            frequencyResponse: "39Hz – 25kHz",
            connectivity: "XLR / RCA / TRS balanced",
            dimensions: "230 x 280 x 330 mm"
        },
        pickupLocation: "Mr. Edmund Graves, 19 Steep Hill, Cathedral Quarter, Lincoln, LN2 1LT",
        vendorInfo: {
            vendorName: "Lincoln Cathedral Audio",
            vendorImage: "/assets/vendors/vendor39.jpg",
            rating: 4.8,
            totalOrders: 163
        },
        reviews: [
            { id: "rev39-1", rating: 5, comment: "The ribbon tweeter is a game changer for detail.", userName: "Lincoln Producer", userLocation: "Lincoln", userImage: "https://randomuser.me/api/portraits/men/40.jpg" },
            { id: "rev39-2", rating: 5, comment: "Pristine Adam Audio monitors. Edmund was very helpful.", userName: "Audio Engineer", userLocation: "Gainsborough", userImage: "https://randomuser.me/api/portraits/women/41.jpg" },
            { id: "rev39-3", rating: 4, comment: "Great low-end response for 7-inch speakers. Clear highs.", userName: "Studio Pro", userLocation: "Lincoln", userImage: "https://randomuser.me/api/portraits/men/42.jpg" },
            { id: "rev39-4", rating: 5, comment: "Vendor was professional and prompt. Gear was spotless.", userName: "Happy Muso", userLocation: "Sleaford", userImage: "https://randomuser.me/api/portraits/women/43.jpg" },
            { id: "rev39-5", rating: 4, comment: "Honest and reliable monitoring. highly recommended.", userName: "Music Buff", userLocation: "Lincoln", userImage: "https://randomuser.me/api/portraits/men/44.jpg" },
            { id: "rev39-6", rating: 5, comment: "Best reference monitors in the Cathedral Quarter.", userName: "Artist", userLocation: "Lincoln", userImage: "https://randomuser.me/api/portraits/women/45.jpg" }
        ]
    },
    {
        id: "fluid-audio-fx80",
        title: "Fluid Audio FX80",
        address: "Exeter Quay",
        price: "$68",
        image: "/assets/createWithKooji/create12.svg",
        images: ["/assets/createWithKooji/create12.svg", "/assets/createWithKooji/create1.svg", "/assets/createWithKooji/create4.svg", "/assets/createWithKooji/create7.svg"],
        rating: 4.7,
        totalReviews: 48,
        category: "Technicians",
        type: "Studio Monitor",
        overview: "8-inch near-field studio monitors with wide sweet spot and co-axial driver design, delivering accurate mixes for home studio engineers and post-production work.",
        whatsIncluded: [
            "2x Fluid Audio FX80 powered monitors",
            "Power cables",
            "XLR cables (pair)",
            "RCA input cables (pair)",
            "Quick start guide"
        ],
        whatsNotIncluded: [
            "Audio interface or mixer",
            "Monitor isolation pads",
            "Acoustic panels or bass traps"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not run at maximum volume for extended periods",
            "Return all cables and guides provided",
            "Indoor use in a dry environment only",
            "Late return penalty applies from agreed return time"
        ],
        specification: {
            brand: "Fluid Audio",
            model: "FX80",
            powerOutput: "130W (LF 100W + HF 30W)",
            condition: "Good",
            weight: "8.2 kg per monitor",
            usageType: "Indoor",
            driverSize: "8 inch woofer + 1 inch tweeter",
            frequencyResponse: "35Hz – 25kHz",
            connectivity: "XLR / TRS / RCA",
            dimensions: "265 x 380 x 310 mm"
        },
        pickupLocation: "Ms. Tara Quinlan, The Quay, Exeter Waterfront, Exeter, EX2 4AN",
        vendorInfo: {
            vendorName: "Exeter Quay Sound Hire",
            vendorImage: "/assets/vendors/vendor40.jpg",
            rating: 4.7,
            totalOrders: 89
        },
        reviews: [
            { id: "rev40-1", rating: 5, comment: "Co-axial design delivers a very precise sweet spot.", userName: "Exeter Mix", userLocation: "Exeter", userImage: "https://randomuser.me/api/portraits/women/46.jpg" },
            { id: "rev40-2", rating: 5, comment: "Pristine monitors and great support from Tara. Five stars.", userName: "Studio owner", userLocation: "Torquay", userImage: "https://randomuser.me/api/portraits/men/47.jpg" },
            { id: "rev40-3", rating: 5, comment: "Detailed and clear. Perfect for my post-production project.", userName: "Audio Nut", userLocation: "Exeter", userImage: "https://randomuser.me/api/portraits/women/48.jpg" },
            { id: "rev40-4", rating: 4, comment: "Great for critical work. Smooth rental through Kooji.", userName: "Professional", userLocation: "Plymouth", userImage: "https://randomuser.me/api/portraits/men/49.jpg" },
            { id: "rev40-5", rating: 5, comment: "Condition was as new. Highly recommend these for mixing.", userName: "Creative Mind", userLocation: "Exeter", userImage: "https://randomuser.me/api/portraits/women/50.jpg" },
            { id: "rev40-6", rating: 4, comment: "Solid build and reliable performance. Happy renter.", userName: "Music lover", userLocation: "Exeter", userImage: "https://randomuser.me/api/portraits/men/51.jpg" }
        ]
    },
    {
        id: "korg-minilogue-alt",
        title: "Korg Minilogue",
        address: "Windsor Castle",
        price: "$70",
        image: "/assets/createWithKooji/create3.svg",
        images: ["/assets/createWithKooji/create3.svg", "/assets/createWithKooji/create6.svg", "/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create12.svg"],
        rating: 4.8,
        totalReviews: 125,
        category: "musciains & singers",
        type: "Analog Synthesizer",
        overview: "4-voice polyphonic analog synthesizer with vintage warmth and full patch programmability, perfect for studio recording, live performance, and sound design.",
        whatsIncluded: [
            "1x Korg Minilogue synthesizer",
            "Power adapter",
            "USB cable",
            "3.5mm headphone output cable",
            "User manual"
        ],
        whatsNotIncluded: [
            "MIDI controller or keyboard",
            "Audio interface",
            "Sustain pedal"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Reset all user patches before return",
            "Handle analog knobs and sliders gently",
            "Do not expose to extreme temperatures",
            "Damage to oscillator or filter components fully chargeable"
        ],
        specification: {
            brand: "Korg",
            model: "Minilogue (Alt Unit)",
            synthType: "4-voice analog polyphonic",
            condition: "Good",
            weight: "2.8 kg",
            usageType: "Indoor",
            keys: "37 slim keys (velocity / aftertouch)",
            oscillators: "2x VCOs per voice",
            memorySlots: "200 user program slots",
            connectivity: "USB / MIDI In+Out / 1/4\" output"
        },
        pickupLocation: "Mr. Stuart Lennox, 12 Sheet Street, Windsor Town Centre, Windsor, SL4 1BY",
        vendorInfo: {
            vendorName: "Windsor Musician Loft",
            vendorImage: "/assets/vendors/vendor41.jpg",
            rating: 4.8,
            totalOrders: 154
        },
        reviews: [
            { id: "rev41-1", rating: 5, comment: "Classic analog sound. The interface is intuitive and fun.", userName: "Synth Junkie", userLocation: "Windsor", userImage: "https://randomuser.me/api/portraits/men/52.jpg" },
            { id: "rev41-2", rating: 5, comment: "Pristine condition. Stuart was very easy to deal with.", userName: "Studio owner", userLocation: "Slough", userImage: "https://randomuser.me/api/portraits/women/53.jpg" },
            { id: "rev41-3", rating: 4, comment: "Warm oscillators and creative filters. Perfect for my tracks.", userName: "Audio Nerd", userLocation: "Windsor", userImage: "https://randomuser.me/api/portraits/men/54.jpg" },
            { id: "rev41-4", rating: 5, comment: "Vendor was professional and prompt. Gear was spotless.", userName: "Happy Performer", userLocation: "Maidenhead", userImage: "https://randomuser.me/api/portraits/women/55.jpg" },
            { id: "rev41-5", rating: 5, comment: "Great value for a high-end synth. Five stars.", userName: "Tone Chaser", userLocation: "Windsor", userImage: "https://randomuser.me/api/portraits/men/56.jpg" },
            { id: "rev41-6", rating: 4, comment: "Reliable and powerful equipment. Will rent again.", userName: "Music Buff", userLocation: "Windsor", userImage: "https://randomuser.me/api/portraits/women/57.jpg" }
        ]
    },
    {
        id: "moog-grandmother-alt",
        title: "Moog Grandmother",
        address: "Canterbury Cathedral",
        price: "$120",
        image: "/assets/createWithKooji/create4.svg",
        images: ["/assets/createWithKooji/create4.svg", "/assets/createWithKooji/create7.svg", "/assets/createWithKooji/create10.svg", "/assets/createWithKooji/create13.svg"],
        rating: 5.0,
        totalReviews: 35,
        category: "musciains & singers",
        type: "Semi-Modular Synth",
        overview: "Iconic Moog semi-modular synthesizer with spring reverb and arpeggiator, prized by sound designers and studio artists for its unparalleled analog depth and character.",
        whatsIncluded: [
            "1x Moog Grandmother synthesizer",
            "Power adapter",
            "Set of patch cables (10 cables)",
            "1/4\" output cable",
            "Hard shell carry case"
        ],
        whatsNotIncluded: [
            "Audio interface or preamp",
            "MIDI sequencer",
            "Additional modular patch cables"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 2 days",
            "Return all 10 patch cables",
            "Do not patch incompatible voltage sources into inputs",
            "Hard case must be used for all transport",
            "Any damage to spring reverb tank is fully chargeable"
        ],
        specification: {
            brand: "Moog",
            model: "Grandmother (Alt Unit)",
            synthType: "Semi-modular analog",
            condition: "Good",
            weight: "5.44 kg",
            usageType: "Indoor",
            keys: "32 keys (velocity sensitive)",
            patchPoints: "41 patch points",
            builtInReverb: "Spring reverb tank",
            connectivity: "MIDI / CV/Gate / 1/4\" output / Headphone"
        },
        pickupLocation: "Ms. Orla Donnelly, 3 Northgate, Cathedral District, Canterbury, CT1 1BE",
        vendorInfo: {
            vendorName: "Canterbury Artisan Gear",
            vendorImage: "/assets/vendors/vendor42.jpg",
            rating: 5.0,
            totalOrders: 47
        },
        reviews: [
            { id: "rev42-1", rating: 5, comment: "Iconic Moog depths. The semi-modular design is inspiring.", userName: "Modern Synth", userLocation: "Canterbury", userImage: "https://randomuser.me/api/portraits/women/58.jpg" },
            { id: "rev42-2", rating: 5, comment: "Pristine condition Grandmother. All cables included.", userName: "Synthesist", userLocation: "Whitstable", userImage: "https://randomuser.me/api/portraits/men/59.jpg" },
            { id: "rev42-3", rating: 5, comment: "Orla was very helpful and professional. 5 stars.", userName: "Creative Heart", userLocation: "Canterbury", userImage: "https://randomuser.me/api/portraits/women/60.jpg" },
            { id: "rev42-4", rating: 4, comment: "Rich and organic analog sound. Highly recommended.", userName: "Sound Designer", userLocation: "Kent", userImage: "https://randomuser.me/api/portraits/men/61.jpg" },
            { id: "rev42-5", rating: 5, comment: "Absolute club standard. Handled my live set beautifully.", userName: "Event DJ", userLocation: "Canterbury", userImage: "https://randomuser.me/api/portraits/women/62.jpg" },
            { id: "rev42-6", rating: 4, comment: "Solid case and reliable equipment. Happy renter.", userName: "Audio Nut", userLocation: "Canterbury", userImage: "https://randomuser.me/api/portraits/men/63.jpg" }
        ]
    },
    {
        id: "native-instruments-s4-alt",
        title: "Native Instruments S4",
        address: "Portobello Road",
        price: "$80",
        image: "/assets/createWithKooji/create5.svg",
        images: ["/assets/createWithKooji/create5.svg", "/assets/createWithKooji/create8.svg", "/assets/createWithKooji/create11.svg", "/assets/createWithKooji/create14.svg"],
        rating: 4.7,
        totalReviews: 90,
        category: "Technicians",
        type: "DJ System",
        overview: "Professional 4-channel Traktor DJ system with motorised jog wheels and full DJ workflow integration, designed for club-level DJs and touring professionals.",
        whatsIncluded: [
            "1x Native Instruments S4 MK3 controller",
            "USB cable",
            "Traktor Pro 3 license",
            "RCA to XLR output cables",
            "Carry bag"
        ],
        whatsNotIncluded: [
            "Laptop or DJ computer",
            "Headphones",
            "PA or club speaker system"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not permanently bind Traktor license to personal account",
            "Keep liquid away from jog wheels and faders",
            "Return Traktor license card with unit",
            "Advance booking required for weekend club events"
        ],
        specification: {
            brand: "Native Instruments",
            model: "Traktor Kontrol S4 MK3 (Alt Unit)",
            channels: "4-channel",
            condition: "Like New",
            weight: "3.68 kg",
            usageType: "Indoor",
            jogWheels: "Motorised haptic jog wheels",
            connectivity: "USB / XLR / RCA output",
            software: "Traktor Pro 3 included",
            dimensions: "592 x 354 x 67 mm"
        },
        pickupLocation: "Mr. Jared Kimani, 18 Pembridge Road, Notting Hill, Greater London, W11 3HL",
        vendorInfo: {
            vendorName: "Notting Hill DJ Vault",
            vendorImage: "/assets/vendors/vendor43.jpg",
            rating: 4.7,
            totalOrders: 132
        },
        reviews: [
            { id: "rev43-1", rating: 5, comment: "Industry standard Traktor gear. Motorized jog wheels are tops.", userName: "West London DJ", userLocation: "Notting Hill", userImage: "https://randomuser.me/api/portraits/men/64.jpg" },
            { id: "rev43-2", rating: 5, comment: "Pristine condition and great service from Jared.", userName: "Pro DJ", userLocation: "Kensington", userImage: "https://randomuser.me/api/portraits/women/65.jpg" },
            { id: "rev43-3", rating: 4, comment: "Flawless integration with Traktor. Best rental in W11.", userName: "Tech Head", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/66.jpg" },
            { id: "rev43-4", rating: 5, comment: "Clean faders and responsive buttons. Five stars.", userName: "Happy Spinner", userLocation: "Paddington", userImage: "https://randomuser.me/api/portraits/women/67.jpg" },
            { id: "rev43-5", rating: 4, comment: "Solid equipment and great service. Will use again.", userName: "Event Host", userLocation: "Notting Hill", userImage: "https://randomuser.me/api/portraits/men/68.jpg" },
            { id: "rev43-6", rating: 5, comment: "Pro results at a great price. Highly recommended.", userName: "Studio owner", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/69.jpg" }
        ]
    },
    {
        id: "ableton-push-2-alt",
        title: "Ableton Push 2",
        address: "Shoreditch High St",
        price: "$90",
        image: "/assets/createWithKooji/create6.svg",
        images: ["/assets/createWithKooji/create6.svg", "/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create12.svg", "/assets/createWithKooji/create1.svg"],
        rating: 4.9,
        totalReviews: 110,
        category: "musciains & singers",
        type: "Production Controller",
        overview: "Ableton's flagship hardware controller with deep Live integration, enabling hands-on beat making, melody playing, and full live performance without a keyboard.",
        whatsIncluded: [
            "1x Ableton Push 2 controller",
            "USB cable",
            "Ableton Live 11 Intro license",
            "Power adapter",
            "Protective travel cover"
        ],
        whatsNotIncluded: [
            "Laptop or MacBook",
            "Ableton Live full suite version",
            "Audio interface"
        ],
        rulesAndUsageGuidelines: [
            "Minimum rental: 1 day",
            "Do not permanently register Live license to personal account",
            "Handle RGB pads and encoders carefully",
            "Return travel cover with unit",
            "Late return surcharge of $20/day applies"
        ],
        specification: {
            brand: "Ableton",
            model: "Push 2 (Alt Unit)",
            padGrid: "8x8 RGB velocity-sensitive pads",
            condition: "Good",
            weight: "1.44 kg",
            usageType: "Indoor",
            display: "Full-colour 960x160 px display",
            encoders: "11 touch-sensitive encoders",
            connectivity: "USB / DC power input",
            dimensions: "378 x 303 x 28 mm"
        },
        pickupLocation: "Ms. Nadia Okonkwo, 44 Cambridge Heath Road, Bethnal Green, Greater London, E2 9DA",
        vendorInfo: {
            vendorName: "Bethnal Green Beat Store",
            vendorImage: "/assets/vendors/vendor44.jpg",
            rating: 4.9,
            totalOrders: 188
        },
        reviews: [
            { id: "rev44-1", rating: 5, comment: "Push 2 is the core of my live studio. Nadia was great.", userName: "East End Artist", userLocation: "Bethnal Green", userImage: "https://randomuser.me/api/portraits/women/70.jpg" },
            { id: "rev44-2", rating: 5, comment: "Pristine unit and excellent support. Ableton workflow is key.", userName: "Live Producer", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/71.jpg" },
            { id: "rev44-3", rating: 4, comment: "Impressive build and expressive pads. Highly recommend.", userName: "Electronic Maven", userLocation: "Hackney", userImage: "https://randomuser.me/api/portraits/women/72.jpg" },
            { id: "rev44-4", rating: 5, comment: "Clean and powerful for live performance. 5 stars.", userName: "Happy Renter", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/73.jpg" },
            { id: "rev44-5", rating: 4, comment: "Smooth rental via Kooji. Gear was top-notch.", userName: "Audio Nut", userLocation: "Bethnal Green", userImage: "https://randomuser.me/api/portraits/women/74.jpg" },
            { id: "rev44-6", rating: 5, comment: "Best compact production controller in East London.", userName: "Studio owner", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/75.jpg" }
        ]
    },
    {
        id: "the-grand-ballroom-london",
        title: "The Grand Ballroom London",
        address: "Mayfair, London",
        price: "$850",
        image: "/assets/createWithKooji/create1.svg",
        images: ["/assets/createWithKooji/create1.svg", "/assets/createWithKooji/create5.svg", "/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create13.svg"],
        rating: 4.9,
        totalReviews: 88,
        category: "event space",
        type: "Ballroom",
        overview: "Opulent Mayfair ballroom with grand chandeliers, parquet flooring, and capacity for 400 guests, ideal for black-tie galas, wedding receptions, and corporate award ceremonies.",
        venueHighlights: [
            "Opulent grand chandeliers and parquet flooring across 850 sqm",
            "Capacity for 400 seated guests with built-in stage and lighting rig",
            "Dedicated venue coordinator and on-site support throughout",
            "Ideal for black-tie galas, wedding receptions, and corporate ceremonies",
            "Prestigious Mayfair location with valet parking available",
        ],
        spaceDetails: {
            spaceType: "Indoor venue",
            maximumCapacity: "400 people",
            stageAvailable: "Yes",
            powerSupply: "Dedicated event-grade power",
            parking: "Valet parking available"
        },
        pickupLocation: "Ms. Victoria Ashton, 44 Park Lane, Mayfair, Greater London, W1K 7AA",
        vendorInfo: {
            vendorName: "Mayfair Grand Events",
            vendorImage: "/assets/vendors/vendor45.jpg",
            rating: 4.9,
            totalOrders: 214
        },
        reviews: [
            { id: "rev45-1", rating: 5, comment: "Absolutely stunning venue. Our gala dinner was a dream.", userName: "Corporate Events Co.", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/10.jpg" },
            { id: "rev45-2", rating: 5, comment: "The chandeliers alone are worth the price. Magical setting.", userName: "Wedding Planner", userLocation: "Kensington", userImage: "https://randomuser.me/api/portraits/men/11.jpg" },
            { id: "rev45-3", rating: 4, comment: "Victoria and team were incredibly professional and responsive.", userName: "Event Director", userLocation: "Chelsea", userImage: "https://randomuser.me/api/portraits/women/12.jpg" },
            { id: "rev45-4", rating: 5, comment: "Perfect for our awards ceremony. Stage setup was excellent.", userName: "Awards Night", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/13.jpg" },
            { id: "rev45-5", rating: 5, comment: "Guests were blown away. The parquet floor looks incredible.", userName: "Birthday Bash", userLocation: "Mayfair", userImage: "https://randomuser.me/api/portraits/women/14.jpg" },
            { id: "rev45-6", rating: 4, comment: "Wonderful space. Would recommend for any high-end event.", userName: "Charity Gala", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/15.jpg" }
        ]
    },
    {
        id: "brick-lane-warehouse-space",
        title: "Brick Lane Warehouse Space",
        address: "Brick Lane, East London",
        price: "$320",
        image: "/assets/createWithKooji/create2.svg",
        images: ["/assets/createWithKooji/create2.svg", "/assets/createWithKooji/create6.svg", "/assets/createWithKooji/create10.svg", "/assets/createWithKooji/create14.svg"],
        rating: 4.7,
        totalReviews: 163,
        category: "event space",
        type: "Warehouse Venue",
        overview: "Raw exposed-brick warehouse with industrial aesthetic, flexible open-plan layout, and built-in DJ booth, perfect for immersive art shows, brand launches, and underground club nights.",
        venueHighlights: [
            "Raw exposed-brick industrial aesthetic with 480 sqm open-plan layout",
            "Built-in DJ booth with CDJ mounts and colour-configurable lighting rig",
            "Loading bay access for easy equipment and production delivery",
            "Vibrant Brick Lane location in the heart of creative East London",
            "Perfect for art shows, brand launches, and immersive club nights",
        ],
        spaceDetails: {
            spaceType: "Indoor venue",
            maximumCapacity: "250 people",
            stageAvailable: "No",
            powerSupply: "Dedicated event-grade power",
            parking: "Street parking nearby"
        },
        pickupLocation: "Mr. Darius Cole, 78 Brick Lane, Shoreditch, Greater London, E1 6RF",
        vendorInfo: {
            vendorName: "East End Raw Venues",
            vendorImage: "/assets/vendors/vendor46.jpg",
            rating: 4.7,
            totalOrders: 341
        },
        reviews: [
            { id: "rev46-1", rating: 5, comment: "Best raw venue in East London. Our pop-up was a massive hit.", userName: "Brand Studio", userLocation: "Shoreditch", userImage: "https://randomuser.me/api/portraits/men/16.jpg" },
            { id: "rev46-2", rating: 4, comment: "Loved the industrial aesthetic. Great for art installations.", userName: "Gallery Owner", userLocation: "Hackney", userImage: "https://randomuser.me/api/portraits/women/17.jpg" },
            { id: "rev46-3", rating: 5, comment: "DJ booth and lighting setup made our night seamless.", userName: "Club Night Crew", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/18.jpg" },
            { id: "rev46-4", rating: 5, comment: "Darius was super helpful with logistics. Great communication.", userName: "Event Producer", userLocation: "Bethnal Green", userImage: "https://randomuser.me/api/portraits/women/19.jpg" },
            { id: "rev46-5", rating: 4, comment: "Raw and creative. Perfect backdrop for our fashion show.", userName: "Fashion Week", userLocation: "East London", userImage: "https://randomuser.me/api/portraits/men/20.jpg" },
            { id: "rev46-6", rating: 5, comment: "Flexible and spacious. Will use for our next launch event.", userName: "Startup Launch", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/21.jpg" }
        ]
    },
    {
        id: "rooftop-terrace-manchester",
        title: "Rooftop Terrace Manchester",
        address: "Northern Quarter, Manchester",
        price: "$410",
        image: "/assets/createWithKooji/create3.svg",
        images: ["/assets/createWithKooji/create3.svg", "/assets/createWithKooji/create7.svg", "/assets/createWithKooji/create11.svg", "/assets/createWithKooji/create1.svg"],
        rating: 4.8,
        totalReviews: 97,
        category: "event space",
        type: "Rooftop Venue",
        overview: "Stunning open-air rooftop terrace with panoramic Manchester skyline views, retractable canopy cover, and ambient festoon lighting, ideal for summer parties, product launches, and cocktail receptions.",
        venueHighlights: [
            "Panoramic Manchester skyline views from a 320 sqm open-air terrace",
            "Retractable weatherproof canopy for year-round event flexibility",
            "Ambient festoon lighting and outdoor bar units included",
            "Padded outdoor seating for 80 guests with lift access to rooftop",
            "Ideal for product launches, cocktail receptions, and summer parties",
        ],
        spaceDetails: {
            spaceType: "Indoor/Outdoor venue",
            maximumCapacity: "150 people",
            stageAvailable: "Yes",
            powerSupply: "Dedicated event-grade power",
            parking: "On-site or nearby parking options"
        },
        pickupLocation: "Ms. Leah Connors, Rooftop Suite, 12 Tib Street, Northern Quarter, Manchester, M4 1SH",
        vendorInfo: {
            vendorName: "NQ Rooftop Rentals",
            vendorImage: "/assets/vendors/vendor47.jpg",
            rating: 4.8,
            totalOrders: 189
        },
        reviews: [
            { id: "rev47-1", rating: 5, comment: "Breathtaking views. Our product launch couldn't have been better.", userName: "Brand Manager", userLocation: "Manchester", userImage: "https://randomuser.me/api/portraits/women/22.jpg" },
            { id: "rev47-2", rating: 5, comment: "Festoon lighting created the perfect summer party atmosphere.", userName: "Social Events", userLocation: "Salford", userImage: "https://randomuser.me/api/portraits/men/23.jpg" },
            { id: "rev47-3", rating: 4, comment: "Leah was brilliant. Canopy saved us when it rained mid-event!", userName: "Happy Host", userLocation: "Manchester", userImage: "https://randomuser.me/api/portraits/women/24.jpg" },
            { id: "rev47-4", rating: 5, comment: "Skyline backdrop is unreal. Guests were speechless.", userName: "Cocktail Night", userLocation: "Manchester", userImage: "https://randomuser.me/api/portraits/men/25.jpg" },
            { id: "rev47-5", rating: 5, comment: "Outdoor seating was comfortable and stylish. Loved it.", userName: "Corporate Host", userLocation: "Stockport", userImage: "https://randomuser.me/api/portraits/women/26.jpg" },
            { id: "rev47-6", rating: 4, comment: "Great venue for summer events. Will book again next year.", userName: "Summer Party", userLocation: "Bolton", userImage: "https://randomuser.me/api/portraits/men/27.jpg" }
        ]
    },
    {
        id: "edinburgh-stone-hall",
        title: "Edinburgh Stone Hall",
        address: "Old Town, Edinburgh",
        price: "$560",
        image: "/assets/createWithKooji/create4.svg",
        images: ["/assets/createWithKooji/create4.svg", "/assets/createWithKooji/create8.svg", "/assets/createWithKooji/create12.svg", "/assets/createWithKooji/create2.svg"],
        rating: 4.9,
        totalReviews: 54,
        category: "event space",
        type: "Historic Hall",
        overview: "Majestic 16th-century stone hall in Edinburgh's Old Town with vaulted ceilings, original stone walls, and stained glass windows, perfect for heritage events, whisky tastings, and formal dinners.",
        venueHighlights: [
            "Majestic 16th-century stone hall with 8-metre vaulted ceilings",
            "Original stained glass windows and ambient candlelight chandelier rig",
            "Whisky tasting shelf display unit included for heritage experiences",
            "Private entrance and cloakroom for exclusive guest arrival",
            "Iconic Old Town Royal Mile location with historic character throughout",
        ],
        spaceDetails: {
            spaceType: "Indoor venue",
            maximumCapacity: "120 people",
            stageAvailable: "No",
            powerSupply: "Standard domestic power",
            parking: "City centre pay & display nearby"
        },
        pickupLocation: "Mr. Angus MacPherson, 3 Canongate, Royal Mile, Old Town, Edinburgh, EH8 8AA",
        vendorInfo: {
            vendorName: "Old Town Heritage Venues",
            vendorImage: "/assets/vendors/vendor48.jpg",
            rating: 4.9,
            totalOrders: 127
        },
        reviews: [
            { id: "rev48-1", rating: 5, comment: "Utterly enchanting. Our whisky dinner was unforgettable.", userName: "Whisky Society", userLocation: "Edinburgh", userImage: "https://randomuser.me/api/portraits/men/28.jpg" },
            { id: "rev48-2", rating: 5, comment: "The stone walls and candlelight created pure magic.", userName: "Wedding Host", userLocation: "Glasgow", userImage: "https://randomuser.me/api/portraits/women/29.jpg" },
            { id: "rev48-3", rating: 4, comment: "Angus was very knowledgeable and attentive throughout.", userName: "Heritage Tour", userLocation: "Edinburgh", userImage: "https://randomuser.me/api/portraits/men/30.jpg" },
            { id: "rev48-4", rating: 5, comment: "Historic atmosphere that money can't replicate. Stunning.", userName: "Private Dinner", userLocation: "Fife", userImage: "https://randomuser.me/api/portraits/women/31.jpg" },
            { id: "rev48-5", rating: 5, comment: "Perfect for our corporate heritage event. Top-tier service.", userName: "Corporate Hire", userLocation: "Edinburgh", userImage: "https://randomuser.me/api/portraits/men/32.jpg" },
            { id: "rev48-6", rating: 4, comment: "Unique and beautiful. Our clients were very impressed.", userName: "Agency Host", userLocation: "Aberdeen", userImage: "https://randomuser.me/api/portraits/women/33.jpg" }
        ]
    },
    {
        id: "shoreditch-studio-loft",
        title: "Shoreditch Studio Loft",
        address: "Shoreditch, London",
        price: "$290",
        image: "/assets/createWithKooji/create5.svg",
        images: ["/assets/createWithKooji/create5.svg", "/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create13.svg", "/assets/createWithKooji/create3.svg"],
        rating: 4.8,
        totalReviews: 211,
        category: "event space",
        type: "Studio Loft",
        overview: "Bright and minimalist studio loft with polished concrete floors, floor-to-ceiling windows, and a built-in photo cyclorama wall, ideal for photoshoots, brand activations, and intimate live music sessions.",
        venueHighlights: [
            "Bright minimalist loft with 10m x 5m white cyclorama wall",
            "Floor-to-ceiling north-facing windows for perfect natural photography light",
            "Adjustable LED studio lighting grid for full creative control",
            "Freight lift access for easy equipment and production load-in",
            "Located in Shoreditch — ideal for photoshoots, brand activations, and live sessions",
        ],
        spaceDetails: {
            spaceType: "Indoor venue",
            maximumCapacity: "60 people",
            stageAvailable: "No",
            powerSupply: "Dedicated event-grade power",
            parking: "Loading bay + street parking"
        },
        pickupLocation: "Ms. Priya Shah, Studio 4, 55 Curtain Road, Shoreditch, Greater London, EC2A 3PT",
        vendorInfo: {
            vendorName: "Shoreditch Loft Studios",
            vendorImage: "/assets/vendors/vendor49.jpg",
            rating: 4.8,
            totalOrders: 376
        },
        reviews: [
            { id: "rev49-1", rating: 5, comment: "Perfect natural light for our lookbook shoot. Stunning space.", userName: "Fashion Photographer", userLocation: "Shoreditch", userImage: "https://randomuser.me/api/portraits/women/34.jpg" },
            { id: "rev49-2", rating: 5, comment: "Cyclorama wall is immaculate. Best studio loft in Shoreditch.", userName: "Content Studio", userLocation: "Hoxton", userImage: "https://randomuser.me/api/portraits/men/35.jpg" },
            { id: "rev49-3", rating: 4, comment: "Priya was very accommodating with our extended shoot schedule.", userName: "Film Crew", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/36.jpg" },
            { id: "rev49-4", rating: 5, comment: "Hosted our intimate live session here. Acoustic and vibe were great.", userName: "Live Music", userLocation: "East London", userImage: "https://randomuser.me/api/portraits/men/37.jpg" },
            { id: "rev49-5", rating: 5, comment: "Clean, bright and professional. Will use for every campaign.", userName: "Creative Agency", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/38.jpg" },
            { id: "rev49-6", rating: 4, comment: "Great space and easy logistics with the freight lift.", userName: "Production House", userLocation: "Hackney", userImage: "https://randomuser.me/api/portraits/men/39.jpg" }
        ]
    },
    {
        id: "bristol-harbourside-pavilion",
        title: "Bristol Harbourside Pavilion",
        address: "Harbourside, Bristol",
        price: "$475",
        image: "/assets/createWithKooji/create6.svg",
        images: ["/assets/createWithKooji/create6.svg", "/assets/createWithKooji/create10.svg", "/assets/createWithKooji/create14.svg", "/assets/createWithKooji/create4.svg"],
        rating: 4.7,
        totalReviews: 76,
        category: "event space",
        type: "Waterfront Pavilion",
        overview: "Contemporary glass pavilion on Bristol's iconic Harbourside with private terrace, waterfront views, and flexible interior layout, perfect for summer fetes, networking events, and private dining.",
        venueHighlights: [
            "Contemporary glass pavilion with private waterfront terrace and harbour views",
            "Full-glass walls and roof panels providing exceptional natural light",
            "Capacity for 180 guests across indoor and outdoor mixed layout",
            "Fully wheelchair accessible with bistro terrace seating included",
            "Prime Harbourside location ideal for networking events and summer dining",
        ],
        spaceDetails: {
            spaceType: "Indoor/Outdoor venue",
            maximumCapacity: "180 people",
            stageAvailable: "No",
            powerSupply: "Dedicated event-grade power",
            parking: "Harbourside pay & display"
        },
        pickupLocation: "Mr. Oliver Price, Harbourside Pavilion, Canons Road, Bristol, BS1 5TX",
        vendorInfo: {
            vendorName: "Bristol Harbour Events",
            vendorImage: "/assets/vendors/vendor50.jpg",
            rating: 4.7,
            totalOrders: 148
        },
        reviews: [
            { id: "rev50-1", rating: 5, comment: "Harbour views made our corporate dinner truly special.", userName: "Business Events", userLocation: "Bristol", userImage: "https://randomuser.me/api/portraits/men/40.jpg" },
            { id: "rev50-2", rating: 5, comment: "Glass pavilion is stunning. Perfect for a summer networking night.", userName: "Tech Meetup", userLocation: "Bath", userImage: "https://randomuser.me/api/portraits/women/41.jpg" },
            { id: "rev50-3", rating: 4, comment: "Oliver handled everything perfectly. Smooth experience.", userName: "Charity Host", userLocation: "Bristol", userImage: "https://randomuser.me/api/portraits/men/42.jpg" },
            { id: "rev50-4", rating: 5, comment: "Outdoor terrace is beautiful. Guests loved it.", userName: "Private Party", userLocation: "Clifton", userImage: "https://randomuser.me/api/portraits/women/43.jpg" },
            { id: "rev50-5", rating: 4, comment: "Great value for a waterfront space. Clean and well-managed.", userName: "Pop-up Market", userLocation: "Bristol", userImage: "https://randomuser.me/api/portraits/men/44.jpg" },
            { id: "rev50-6", rating: 5, comment: "Will absolutely rebook for our annual summer reception.", userName: "Corporate Events", userLocation: "Gloucester", userImage: "https://randomuser.me/api/portraits/women/45.jpg" }
        ]
    },
    {
        id: "birmingham-skyline-suite",
        title: "Birmingham Skyline Suite",
        address: "Broad Street, Birmingham",
        price: "$380",
        image: "/assets/createWithKooji/create7.svg",
        images: ["/assets/createWithKooji/create7.svg", "/assets/createWithKooji/create11.svg", "/assets/createWithKooji/create1.svg", "/assets/createWithKooji/create5.svg"],
        rating: 4.6,
        totalReviews: 109,
        category: "event space",
        type: "Conference Suite",
        overview: "Sleek high-rise conference and events suite on the 18th floor with panoramic Birmingham views, state-of-the-art AV, and flexible room partitioning for conferences, product demos, and networking evenings.",
        venueHighlights: [
            "18th-floor panoramic views across the Birmingham city skyline",
            "Integrated 4K laser projector and Zoom/Teams video conferencing system",
            "Modular tables and 50 ergonomic chairs for flexible conference layout",
            "Building car park and full lift access for ease of arrival",
            "Modern, versatile space ideal for conferences, demos, and networking",
        ],
        spaceDetails: {
            spaceType: "Indoor venue",
            maximumCapacity: "120 people",
            stageAvailable: "Yes",
            powerSupply: "Dedicated event-grade power",
            parking: "Building car park available"
        },
        pickupLocation: "Ms. Amelia Foster, 18th Floor, 1 Broad Street, Birmingham City Centre, Birmingham, B1 2EA",
        vendorInfo: {
            vendorName: "Birmingham Tower Events",
            vendorImage: "/assets/vendors/vendor51.jpg",
            rating: 4.6,
            totalOrders: 263
        },
        reviews: [
            { id: "rev51-1", rating: 5, comment: "Panoramic views impressed every delegate. Great AV setup.", userName: "Conference Host", userLocation: "Birmingham", userImage: "https://randomuser.me/api/portraits/women/46.jpg" },
            { id: "rev51-2", rating: 4, comment: "Amelia was super efficient. Room was set up perfectly on arrival.", userName: "Product Launch", userLocation: "Coventry", userImage: "https://randomuser.me/api/portraits/men/47.jpg" },
            { id: "rev51-3", rating: 5, comment: "Best high-rise event space in Birmingham. Highly recommend.", userName: "Tech Summit", userLocation: "Birmingham", userImage: "https://randomuser.me/api/portraits/women/48.jpg" },
            { id: "rev51-4", rating: 4, comment: "Video conferencing system worked flawlessly. No tech issues.", userName: "Hybrid Conference", userLocation: "Solihull", userImage: "https://randomuser.me/api/portraits/men/49.jpg" },
            { id: "rev51-5", rating: 5, comment: "Skyline views are the showstopper. Guests loved the space.", userName: "Award Event", userLocation: "Birmingham", userImage: "https://randomuser.me/api/portraits/women/50.jpg" },
            { id: "rev51-6", rating: 4, comment: "Modern and well-equipped. Will rebook for our Q4 event.", userName: "Business Team", userLocation: "Worcester", userImage: "https://randomuser.me/api/portraits/men/51.jpg" }
        ]
    },
    {
        id: "leeds-art-gallery-space",
        title: "Leeds Art Gallery Space",
        address: "Leeds City Centre",
        price: "$340",
        image: "/assets/createWithKooji/create8.svg",
        images: ["/assets/createWithKooji/create8.svg", "/assets/createWithKooji/create12.svg", "/assets/createWithKooji/create2.svg", "/assets/createWithKooji/create6.svg"],
        rating: 4.8,
        totalReviews: 62,
        category: "event space",
        type: "Gallery Space",
        overview: "Architecturally striking gallery space with white-cube walls, track lighting, and polished concrete floors in Leeds city centre, ideal for private views, creative exhibitions, and intimate corporate receptions.",
        venueHighlights: [
            "White-cube gallery walls with adjustable professional track lighting",
            "Built-in hanging system for artwork, displays, and branded installations",
            "Skylights with blackout option for flexible day and evening events",
            "Step-free access throughout in a central Leeds city location",
            "Intimate capacity of 80 guests — perfect for private views and receptions",
        ],
        spaceDetails: {
            spaceType: "Indoor venue",
            maximumCapacity: "80 people",
            stageAvailable: "No",
            powerSupply: "Standard domestic power",
            parking: "City centre multi-storey nearby"
        },
        pickupLocation: "Ms. Harriet Stone, Gallery Studio, 7 Albion Place, Leeds City Centre, Leeds, LS1 6JL",
        vendorInfo: {
            vendorName: "Leeds Creative Spaces",
            vendorImage: "/assets/vendors/vendor52.jpg",
            rating: 4.8,
            totalOrders: 134
        },
        reviews: [
            { id: "rev52-1", rating: 5, comment: "Stunning white-cube space. Our private view was a huge success.", userName: "Artist Collective", userLocation: "Leeds", userImage: "https://randomuser.me/api/portraits/men/52.jpg" },
            { id: "rev52-2", rating: 5, comment: "Track lighting is perfect for showcasing work. Harriet was great.", userName: "Photography Show", userLocation: "Bradford", userImage: "https://randomuser.me/api/portraits/women/53.jpg" },
            { id: "rev52-3", rating: 4, comment: "Clean and professional. Exactly what we needed for our launch.", userName: "Brand Activation", userLocation: "Leeds", userImage: "https://randomuser.me/api/portraits/men/54.jpg" },
            { id: "rev52-4", rating: 5, comment: "The hanging system made setup so easy. Highly recommend.", userName: "Curator", userLocation: "Wakefield", userImage: "https://randomuser.me/api/portraits/women/55.jpg" },
            { id: "rev52-5", rating: 4, comment: "Great venue for an intimate corporate reception. Stylish.", userName: "Agency Event", userLocation: "Leeds", userImage: "https://randomuser.me/api/portraits/men/56.jpg" },
            { id: "rev52-6", rating: 5, comment: "Pristine gallery in a brilliant central location.", userName: "Private View", userLocation: "Harrogate", userImage: "https://randomuser.me/api/portraits/women/57.jpg" }
        ]
    },
    {
        id: "newcastle-riverfront-hall",
        title: "Newcastle Riverfront Hall",
        address: "Quayside, Newcastle",
        price: "$430",
        image: "/assets/createWithKooji/create9.svg",
        images: ["/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create13.svg", "/assets/createWithKooji/create3.svg", "/assets/createWithKooji/create7.svg"],
        rating: 4.7,
        totalReviews: 85,
        category: "event space",
        type: "Riverside Hall",
        overview: "Elegant riverside hall on Newcastle's iconic Quayside with Tyne Bridge views, hardwood floors, and built-in bar, perfect for wedding receptions, charity galas, and large corporate dinners.",
        venueHighlights: [
            "Stunning Tyne Bridge views from floor-to-ceiling river-facing windows",
            "Built-in mahogany bar counter and 8m x 4m stage platform included",
            "Capacity for 250 seated dinner guests with bridal suite on-site",
            "Fully wheelchair accessible with adjacent Quayside car park",
            "Ideal for weddings, charity galas, and large corporate dinner events",
        ],
        spaceDetails: {
            spaceType: "Indoor venue",
            maximumCapacity: "250 people",
            stageAvailable: "Yes",
            powerSupply: "Dedicated event-grade power",
            parking: "Adjacent Quayside car park"
        },
        pickupLocation: "Mr. James Tait, Riverfront Hall, 2 Quayside Walk, Newcastle upon Tyne, NE1 3DX",
        vendorInfo: {
            vendorName: "Tyne Riverside Events",
            vendorImage: "/assets/vendors/vendor53.jpg",
            rating: 4.7,
            totalOrders: 197
        },
        reviews: [
            { id: "rev53-1", rating: 5, comment: "Tyne Bridge view during our wedding reception was priceless.", userName: "Bride & Groom", userLocation: "Newcastle", userImage: "https://randomuser.me/api/portraits/women/58.jpg" },
            { id: "rev53-2", rating: 5, comment: "James and the team went above and beyond. Brilliant evening.", userName: "Charity Gala", userLocation: "Gateshead", userImage: "https://randomuser.me/api/portraits/men/59.jpg" },
            { id: "rev53-3", rating: 4, comment: "Hall is beautifully maintained. The bar was very popular!", userName: "Corporate Dinner", userLocation: "Sunderland", userImage: "https://randomuser.me/api/portraits/women/60.jpg" },
            { id: "rev53-4", rating: 5, comment: "Stage setup was easy and the sound carried beautifully.", userName: "Live Performance", userLocation: "Newcastle", userImage: "https://randomuser.me/api/portraits/men/61.jpg" },
            { id: "rev53-5", rating: 5, comment: "Stunning venue. Every guest commented on the river views.", userName: "Anniversary Party", userLocation: "Durham", userImage: "https://randomuser.me/api/portraits/women/62.jpg" },
            { id: "rev53-6", rating: 4, comment: "Great value for such an impressive hall. Would rebook.", userName: "Fundraiser Host", userLocation: "Middlesbrough", userImage: "https://randomuser.me/api/portraits/men/63.jpg" }
        ]
    },
    {
        id: "glasgow-distillery-hall",
        title: "Glasgow Distillery Hall",
        address: "West End, Glasgow",
        price: "$390",
        image: "/assets/createWithKooji/create10.svg",
        images: ["/assets/createWithKooji/create10.svg", "/assets/createWithKooji/create14.svg", "/assets/createWithKooji/create4.svg", "/assets/createWithKooji/create8.svg"],
        rating: 4.8,
        totalReviews: 71,
        category: "event space",
        type: "Distillery Hall",
        overview: "Characterful converted distillery hall with original copper stills, vaulted brick ceiling, and whisky barrel décor in Glasgow's West End, perfect for whisky launches, immersive dinners, and brand experiences.",
        venueHighlights: [
            "Original copper still displays and barrel-topped cocktail bar as feature décor",
            "Vaulted 6-metre brick ceiling with warm Edison bulb ambient lighting",
            "Sharing table layout for 100 guests creating an intimate communal atmosphere",
            "West End Glasgow location close to Kelvingrove cultural quarter",
            "Perfect for whisky launches, immersive brand dinners, and creative experiences",
        ],
        spaceDetails: {
            spaceType: "Indoor venue",
            maximumCapacity: "100 people",
            stageAvailable: "No",
            powerSupply: "Standard domestic power",
            parking: "West End street parking"
        },
        pickupLocation: "Ms. Morag Campbell, The Distillery Hall, 14 Kelvingrove Street, West End, Glasgow, G3 7RX",
        vendorInfo: {
            vendorName: "West End Venue Collective",
            vendorImage: "/assets/vendors/vendor54.jpg",
            rating: 4.8,
            totalOrders: 156
        },
        reviews: [
            { id: "rev54-1", rating: 5, comment: "The copper stills made for the most unique event backdrop.", userName: "Whisky Brand", userLocation: "Glasgow", userImage: "https://randomuser.me/api/portraits/men/64.jpg" },
            { id: "rev54-2", rating: 5, comment: "Atmospheric and original. Clients were completely wowed.", userName: "Experiential Agency", userLocation: "Edinburgh", userImage: "https://randomuser.me/api/portraits/women/65.jpg" },
            { id: "rev54-3", rating: 4, comment: "Morag was very professional. Setup and breakdown was smooth.", userName: "Brand Launch", userLocation: "Glasgow", userImage: "https://randomuser.me/api/portraits/men/66.jpg" },
            { id: "rev54-4", rating: 5, comment: "Sharing tables and barrel bar created a fantastic atmosphere.", userName: "Immersive Dinner", userLocation: "Stirling", userImage: "https://randomuser.me/api/portraits/women/67.jpg" },
            { id: "rev54-5", rating: 5, comment: "Unique and unforgettable. Will rebook for our next campaign.", userName: "Marketing Team", userLocation: "Glasgow", userImage: "https://randomuser.me/api/portraits/men/68.jpg" },
            { id: "rev54-6", rating: 4, comment: "Best themed venue in the West End. Highly recommended.", userName: "Food & Drink Fest", userLocation: "Paisley", userImage: "https://randomuser.me/api/portraits/women/69.jpg" }
        ]
    },
    {
        id: "cambridge-garden-pavilion",
        title: "Cambridge Garden Pavilion",
        address: "Cambridge City",
        price: "$260",
        image: "/assets/createWithKooji/create11.svg",
        images: ["/assets/createWithKooji/create11.svg", "/assets/createWithKooji/create1.svg", "/assets/createWithKooji/create5.svg", "/assets/createWithKooji/create9.svg"],
        rating: 4.7,
        totalReviews: 93,
        category: "event space",
        type: "Garden Pavilion",
        overview: "Charming walled garden pavilion with wildflower borders, a Victorian glasshouse, and outdoor terrace in central Cambridge, ideal for garden parties, graduation celebrations, and intimate wedding ceremonies.",
        venueHighlights: [
            "Enchanting walled garden with wildflower borders and Victorian glasshouse",
            "Festoon lighting throughout the garden for beautiful evening ambience",
            "Glasshouse dining for 40 covers with outdoor seating for 60 additional guests",
            "Central Cambridge location ideal for graduations and garden celebrations",
            "Generator hookup and water point for full event infrastructure support",
        ],
        spaceDetails: {
            spaceType: "Indoor/Outdoor venue",
            maximumCapacity: "100 people",
            stageAvailable: "No",
            powerSupply: "Generator hookup available",
            parking: "Bike parking only — city centre location"
        },
        pickupLocation: "Mr. Edmund Clarke, The Walled Garden, 9 Grange Road, Cambridge, CB3 9AF",
        vendorInfo: {
            vendorName: "Cambridge Garden Hire",
            vendorImage: "/assets/vendors/vendor55.jpg",
            rating: 4.7,
            totalOrders: 182
        },
        reviews: [
            { id: "rev55-1", rating: 5, comment: "Wildflower garden is simply magical. Our graduation party was perfect.", userName: "Cambridge Graduate", userLocation: "Cambridge", userImage: "https://randomuser.me/api/portraits/women/70.jpg" },
            { id: "rev55-2", rating: 5, comment: "Edmund was wonderful. The glasshouse dining was unforgettable.", userName: "Wedding Party", userLocation: "Ely", userImage: "https://randomuser.me/api/portraits/men/71.jpg" },
            { id: "rev55-3", rating: 4, comment: "Festoon lighting at dusk was beautiful. Very romantic setting.", userName: "Anniversary Couple", userLocation: "Cambridge", userImage: "https://randomuser.me/api/portraits/women/72.jpg" },
            { id: "rev55-4", rating: 5, comment: "Garden parties don't get more charming than this.", userName: "Garden Fete", userLocation: "Huntingdon", userImage: "https://randomuser.me/api/portraits/men/73.jpg" },
            { id: "rev55-5", rating: 5, comment: "Guests adored the walled garden setting. Truly unique.", userName: "Private Event", userLocation: "Cambridge", userImage: "https://randomuser.me/api/portraits/women/74.jpg" },
            { id: "rev55-6", rating: 4, comment: "Glasshouse is a gem. Perfect for a summer dinner party.", userName: "Dinner Host", userLocation: "Newmarket", userImage: "https://randomuser.me/api/portraits/men/75.jpg" }
        ]
    },
    {
        id: "brighton-beach-pavilion",
        title: "Brighton Beach Pavilion",
        address: "Brighton Seafront",
        price: "$310",
        image: "/assets/createWithKooji/create12.svg",
        images: ["/assets/createWithKooji/create12.svg", "/assets/createWithKooji/create2.svg", "/assets/createWithKooji/create6.svg", "/assets/createWithKooji/create10.svg"],
        rating: 4.6,
        totalReviews: 118,
        category: "event space",
        type: "Beach Pavilion",
        overview: "Vibrant seafront beach pavilion with decked terrace overlooking the sea, a tropical bar setup, and bold festive lighting, perfect for beach parties, festival experiences, and creative brand activations.",
        venueHighlights: [
            "Vibrant seafront decked terrace with direct sea views and ocean breeze",
            "Tropical tiki bar unit with festive LED outdoor lighting rig included",
            "PA system hookup points on terrace for live music and DJ performances",
            "Deck chairs and beach tables for 60 guests in a relaxed coastal setting",
            "Iconic Brighton Kings Road Arches location for maximum creative atmosphere",
        ],
        spaceDetails: {
            spaceType: "Indoor/Outdoor venue",
            maximumCapacity: "120 people",
            stageAvailable: "Yes",
            powerSupply: "Dedicated event-grade power",
            parking: "Seafront pay & display"
        },
        pickupLocation: "Ms. Jade Harris, Beach Pavilion, Kings Road Arches, Brighton Seafront, Brighton, BN1 2FN",
        vendorInfo: {
            vendorName: "Brighton Seafront Venues",
            vendorImage: "/assets/vendors/vendor56.jpg",
            rating: 4.6,
            totalOrders: 224
        },
        reviews: [
            { id: "rev56-1", rating: 5, comment: "Beach party to remember! Sea views and great vibe all night.", userName: "Festival Crew", userLocation: "Brighton", userImage: "https://randomuser.me/api/portraits/men/76.jpg" },
            { id: "rev56-2", rating: 4, comment: "Tiki bar décor was brilliant. Guests absolutely loved it.", userName: "Brand Activation", userLocation: "Hove", userImage: "https://randomuser.me/api/portraits/women/77.jpg" },
            { id: "rev56-3", rating: 5, comment: "Jade was brilliant and helped us plan the layout perfectly.", userName: "Pop-up Event", userLocation: "Brighton", userImage: "https://randomuser.me/api/portraits/men/78.jpg" },
            { id: "rev56-4", rating: 5, comment: "Sunset from the terrace was breathtaking. Magical setting.", userName: "Birthday Party", userLocation: "Worthing", userImage: "https://randomuser.me/api/portraits/women/79.jpg" },
            { id: "rev56-5", rating: 4, comment: "Great for creative events. Deck chairs were comfy.", userName: "Creative Agency", userLocation: "Brighton", userImage: "https://randomuser.me/api/portraits/men/80.jpg" },
            { id: "rev56-6", rating: 5, comment: "Best seafront venue in Brighton. Will definitely rebook.", userName: "Networking Night", userLocation: "Eastbourne", userImage: "https://randomuser.me/api/portraits/women/81.jpg" }
        ]
    },
    {
        id: "notting-hill-townhouse",
        title: "Notting Hill Townhouse",
        address: "Notting Hill, London",
        price: "$620",
        image: "/assets/createWithKooji/create13.svg",
        images: ["/assets/createWithKooji/create13.svg", "/assets/createWithKooji/create3.svg", "/assets/createWithKooji/create7.svg", "/assets/createWithKooji/create11.svg"],
        rating: 4.9,
        totalReviews: 48,
        category: "event space",
        type: "Private Townhouse",
        overview: "Stately five-storey Victorian townhouse in Notting Hill with private garden, elegant reception rooms, and rooftop terrace, ideal for exclusive private parties, press days, and luxury brand activations.",
        venueHighlights: [
            "Stately five-storey Victorian townhouse with private walled garden and rooftop terrace",
            "Furnished reception rooms across three floors for a fully immersive experience",
            "Dedicated house manager on-site throughout your event for seamless service",
            "Canapé chef prep kitchen available for in-house catering setup",
            "Exclusive Notting Hill address ideal for press days and luxury activations",
        ],
        spaceDetails: {
            spaceType: "Indoor/Outdoor venue",
            maximumCapacity: "80 people",
            stageAvailable: "No",
            powerSupply: "Standard domestic power",
            parking: "Permit zone — public transport advised"
        },
        pickupLocation: "Ms. Serena Blake, 22 Pembridge Villas, Notting Hill, Greater London, W11 3EW",
        vendorInfo: {
            vendorName: "Notting Hill Private Hire",
            vendorImage: "/assets/vendors/vendor57.jpg",
            rating: 4.9,
            totalOrders: 93
        },
        reviews: [
            { id: "rev57-1", rating: 5, comment: "The most gorgeous townhouse I've ever hosted an event in.", userName: "Press Day Host", userLocation: "Notting Hill", userImage: "https://randomuser.me/api/portraits/women/82.jpg" },
            { id: "rev57-2", rating: 5, comment: "Serena was exceptional. Every detail was perfectly handled.", userName: "Luxury Brand", userLocation: "Kensington", userImage: "https://randomuser.me/api/portraits/men/83.jpg" },
            { id: "rev57-3", rating: 4, comment: "Garden and rooftop combo is a dream for summer events.", userName: "Summer Party", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/84.jpg" },
            { id: "rev57-4", rating: 5, comment: "Clients were completely blown away. Worth every penny.", userName: "Agency Event", userLocation: "Chelsea", userImage: "https://randomuser.me/api/portraits/men/85.jpg" },
            { id: "rev57-5", rating: 5, comment: "Stunning interiors and impeccable service. Will rebook.", userName: "Private Party", userLocation: "Notting Hill", userImage: "https://randomuser.me/api/portraits/women/86.jpg" },
            { id: "rev57-6", rating: 4, comment: "Exclusive and charming. Perfect for our intimate launch.", userName: "Boutique Brand", userLocation: "London", userImage: "https://randomuser.me/api/portraits/men/87.jpg" }
        ]
    },
    {
        id: "york-medieval-guildhall",
        title: "York Medieval Guildhall",
        address: "York City Centre",
        price: "$490",
        image: "/assets/createWithKooji/create14.svg",
        images: ["/assets/createWithKooji/create14.svg", "/assets/createWithKooji/create4.svg", "/assets/createWithKooji/create8.svg", "/assets/createWithKooji/create12.svg"],
        rating: 4.8,
        totalReviews: 59,
        category: "event space",
        type: "Historic Guildhall",
        overview: "Beautifully preserved 15th-century guildhall on the banks of the River Ouse in York, with timber-frame architecture and a riverside terrace, perfect for medieval banquets, heritage dinners, and cultural events.",
        venueHighlights: [
            "Preserved 15th-century timber-frame guildhall with 7-metre vaulted ceiling",
            "Riverside terrace overlooking the River Ouse with ambient lantern lighting",
            "Private vaulted wine cellar access adds a unique character to your event",
            "Oak trestle tables and banquet seating for 100 guests in a historic setting",
            "Ideal for medieval banquets, heritage dinners, and cultural cultural events",
        ],
        spaceDetails: {
            spaceType: "Indoor/Outdoor venue",
            maximumCapacity: "100 people",
            stageAvailable: "No",
            powerSupply: "Standard domestic power",
            parking: "City centre car parks nearby"
        },
        pickupLocation: "Mr. William Thorpe, The Guildhall, St Helen's Square, York, YO1 9QL",
        vendorInfo: {
            vendorName: "York Heritage Hire",
            vendorImage: "/assets/vendors/vendor58.jpg",
            rating: 4.8,
            totalOrders: 112
        },
        reviews: [
            { id: "rev58-1", rating: 5, comment: "Medieval atmosphere was totally authentic. Clients were stunned.", userName: "Heritage Event", userLocation: "York", userImage: "https://randomuser.me/api/portraits/men/88.jpg" },
            { id: "rev58-2", rating: 5, comment: "Riverside terrace at dusk was spectacular. Perfect banquet.", userName: "Banquet Dinner", userLocation: "Harrogate", userImage: "https://randomuser.me/api/portraits/women/89.jpg" },
            { id: "rev58-3", rating: 5, comment: "William was a brilliant host. Organisation was flawless.", userName: "Cultural Event", userLocation: "York", userImage: "https://randomuser.me/api/portraits/men/90.jpg" },
            { id: "rev58-4", rating: 4, comment: "Timber vaulted ceiling is breathtaking. Guests loved the space.", userName: "Private Dinner", userLocation: "Selby", userImage: "https://randomuser.me/api/portraits/women/91.jpg" },
            { id: "rev58-5", rating: 5, comment: "Unique and unforgettable. Best historic venue in Yorkshire.", userName: "Corporate Event", userLocation: "Leeds", userImage: "https://randomuser.me/api/portraits/men/92.jpg" },
            { id: "rev58-6", rating: 4, comment: "Cellar access added a special touch to our wine evening.", userName: "Wine Society", userLocation: "York", userImage: "https://randomuser.me/api/portraits/women/93.jpg" }
        ]
    },
    {
        id: "liverpool-albert-dock-loft",
        title: "Liverpool Albert Dock Loft",
        address: "Albert Dock, Liverpool",
        price: "$350",
        image: "/assets/createWithKooji/create1.svg",
        images: ["/assets/createWithKooji/create1.svg", "/assets/createWithKooji/create5.svg", "/assets/createWithKooji/create9.svg", "/assets/createWithKooji/create13.svg"],
        rating: 4.7,
        totalReviews: 101,
        category: "event space",
        type: "Dockside Loft",
        overview: "Converted Grade I listed dock loft in Liverpool's Albert Dock with original brickwork, waterfront views, and an open-plan layout, ideal for pop-up markets, creative workshops, and large private receptions.",
        venueHighlights: [
            "Grade I listed dock loft with original cast-iron features and exposed brickwork",
            "Waterfront balcony access with panoramic Albert Dock views",
            "Industrial pendant lighting creates a dramatic and creative event atmosphere",
            "Lift access to all floors with Albert Dock car park immediately adjacent",
            "Versatile 150-guest capacity ideal for markets, workshops, and receptions",
        ],
        spaceDetails: {
            spaceType: "Indoor/Outdoor venue",
            maximumCapacity: "150 people",
            stageAvailable: "No",
            powerSupply: "Dedicated event-grade power",
            parking: "Albert Dock car park"
        },
        pickupLocation: "Ms. Caitlin Doyle, Unit 12, Albert Dock, Merseyside, Liverpool, L3 4AE",
        vendorInfo: {
            vendorName: "Albert Dock Creative Hire",
            vendorImage: "/assets/vendors/vendor59.jpg",
            rating: 4.7,
            totalOrders: 238
        },
        reviews: [
            { id: "rev59-1", rating: 5, comment: "Original dock atmosphere is unbeatable. Pop-up was brilliant.", userName: "Market Organiser", userLocation: "Liverpool", userImage: "https://randomuser.me/api/portraits/women/94.jpg" },
            { id: "rev59-2", rating: 4, comment: "Caitlin was super helpful. Listed brickwork is stunning.", userName: "Creative Workshop", userLocation: "Wirral", userImage: "https://randomuser.me/api/portraits/men/95.jpg" },
            { id: "rev59-3", rating: 5, comment: "Waterfront balcony views of the dock are incredible.", userName: "Private Reception", userLocation: "Liverpool", userImage: "https://randomuser.me/api/portraits/women/96.jpg" },
            { id: "rev59-4", rating: 5, comment: "Industrial lighting looked amazing in our brand activation.", userName: "Marketing Team", userLocation: "Manchester", userImage: "https://randomuser.me/api/portraits/men/97.jpg" },
            { id: "rev59-5", rating: 4, comment: "Great heritage space with flexible layout. Will rebook.", userName: "Exhibition Host", userLocation: "Liverpool", userImage: "https://randomuser.me/api/portraits/women/98.jpg" },
            { id: "rev59-6", rating: 5, comment: "Best dock venue in Liverpool. Highly recommended.", userName: "Agency Event", userLocation: "Chester", userImage: "https://randomuser.me/api/portraits/men/99.jpg" }
        ]
    },
    {
        id: "cardiff-castle-courtyard",
        title: "Cardiff Castle Courtyard",
        address: "Cardiff City Centre",
        price: "$720",
        image: "/assets/createWithKooji/create2.svg",
        images: ["/assets/createWithKooji/create2.svg", "/assets/createWithKooji/create6.svg", "/assets/createWithKooji/create10.svg", "/assets/createWithKooji/create14.svg"],
        rating: 4.9,
        totalReviews: 37,
        category: "event space",
        type: "Castle Courtyard",
        overview: "Spectacular open-air castle courtyard in the heart of Cardiff, enclosed by medieval walls, with a private lawned area and dramatic floodlit battlements, ideal for outdoor concerts, film screenings, and prestige gala events.",
        venueHighlights: [
            "Spectacular medieval castle courtyard enclosed by floodlit historic battlements",
            "Capacity for up to 500 standing guests in a dramatic open-air setting",
            "Temporary event stage (12m x 8m) and full power supply for AV rigs included",
            "Dedicated on-site event manager for seamless large-scale production support",
            "Iconic Cardiff city centre location — the most prestigious outdoor venue in Wales",
        ],
        spaceDetails: {
            spaceType: "Outdoor venue",
            maximumCapacity: "500 people",
            stageAvailable: "Yes",
            powerSupply: "Dedicated event-grade power",
            parking: "City centre car parks adjacent"
        },
        pickupLocation: "Mr. Rhodri Griffiths, Cardiff Castle, Castle Street, Cardiff, CF10 3RB",
        vendorInfo: {
            vendorName: "Cardiff Castle Events",
            vendorImage: "/assets/vendors/vendor60.jpg",
            rating: 4.9,
            totalOrders: 74
        },
        reviews: [
            { id: "rev60-1", rating: 5, comment: "Filming our concert in a castle courtyard was a dream. Perfect.", userName: "Concert Promoter", userLocation: "Cardiff", userImage: "https://randomuser.me/api/portraits/men/10.jpg" },
            { id: "rev60-2", rating: 5, comment: "Rhodri and his team were incredible. A flawless gala evening.", userName: "Gala Night", userLocation: "Newport", userImage: "https://randomuser.me/api/portraits/women/11.jpg" },
            { id: "rev60-3", rating: 5, comment: "Battlements lit up at night looked unreal. Guests were speechless.", userName: "Private Client", userLocation: "Cardiff", userImage: "https://randomuser.me/api/portraits/men/12.jpg" },
            { id: "rev60-4", rating: 4, comment: "Stage setup was managed efficiently. Brilliant outdoor venue.", userName: "Film Screening", userLocation: "Swansea", userImage: "https://randomuser.me/api/portraits/women/13.jpg" },
            { id: "rev60-5", rating: 5, comment: "Most iconic event space in Wales. Would recommend to anyone.", userName: "Heritage Event", userLocation: "Cardiff", userImage: "https://randomuser.me/api/portraits/men/14.jpg" },
            { id: "rev60-6", rating: 5, comment: "500 guests and flawless logistics. World-class venue.", userName: "Festival Director", userLocation: "Bristol", userImage: "https://randomuser.me/api/portraits/women/15.jpg" }
        ]
    },
    {
        id: "belfast-linen-hall-suite",
        title: "Belfast Linen Hall Suite",
        address: "Cathedral Quarter, Belfast",
        price: "$370",
        image: "/assets/createWithKooji/create3.svg",
        images: ["/assets/createWithKooji/create3.svg", "/assets/createWithKooji/create7.svg", "/assets/createWithKooji/create11.svg", "/assets/createWithKooji/create1.svg"],
        rating: 4.7,
        totalReviews: 82,
        category: "event space",
        type: "Heritage Suite",
        overview: "Elegant heritage event suite in Belfast's Cathedral Quarter, housed within a restored linen warehouse with original timber beams and exposed brick, perfect for cultural receptions, company milestones, and private celebrations.",
        venueHighlights: [
            "Restored linen warehouse with original timber beams and exposed brick character",
            "Integrated atmospheric lighting rig with private bar and service corridor",
            "Lift access to all event floors in Cathedral Quarter, Belfast",
            "Banquet seating for 120 guests in a unique industrial-heritage setting",
            "Ideal for company milestones, cultural receptions, and private celebrations",
        ],
        spaceDetails: {
            spaceType: "Indoor venue",
            maximumCapacity: "120 people",
            stageAvailable: "No",
            powerSupply: "Standard domestic power",
            parking: "Cathedral Quarter pay & display"
        },
        pickupLocation: "Ms. Aoife Brennan, Linen Hall Suite, 5 Exchange Place, Cathedral Quarter, Belfast, BT1 2NB",
        vendorInfo: {
            vendorName: "Cathedral Quarter Events",
            vendorImage: "/assets/vendors/vendor61.jpg",
            rating: 4.7,
            totalOrders: 171
        },
        reviews: [
            { id: "rev61-1", rating: 5, comment: "Heritage atmosphere is just stunning. Our celebration was perfect.", userName: "Milestone Event", userLocation: "Belfast", userImage: "https://randomuser.me/api/portraits/women/16.jpg" },
            { id: "rev61-2", rating: 4, comment: "Aoife and team were fantastic. Timber beams are a real feature.", userName: "Company Dinner", userLocation: "Derry", userImage: "https://randomuser.me/api/portraits/men/17.jpg" },
            { id: "rev61-3", rating: 5, comment: "Unique character that modern venues just can't replicate.", userName: "Cultural Reception", userLocation: "Belfast", userImage: "https://randomuser.me/api/portraits/women/18.jpg" },
            { id: "rev61-4", rating: 5, comment: "Lighting rig was beautiful. Private bar access was very handy.", userName: "Wedding Party", userLocation: "Lisburn", userImage: "https://randomuser.me/api/portraits/men/19.jpg" },
            { id: "rev61-5", rating: 4, comment: "Great central location and wonderful historic space.", userName: "Agency Event", userLocation: "Belfast", userImage: "https://randomuser.me/api/portraits/women/20.jpg" },
            { id: "rev61-6", rating: 5, comment: "Will definitely use again for our annual gala dinner.", userName: "Annual Gala", userLocation: "Bangor", userImage: "https://randomuser.me/api/portraits/men/21.jpg" }
        ]
    },
    {
        id: "oxford-courtyard-venue",
        title: "Oxford Courtyard Venue",
        address: "Oxford City Centre",
        price: "$520",
        image: "/assets/createWithKooji/create4.svg",
        images: ["/assets/createWithKooji/create4.svg", "/assets/createWithKooji/create8.svg", "/assets/createWithKooji/create12.svg", "/assets/createWithKooji/create2.svg"],
        rating: 4.9,
        totalReviews: 44,
        category: "event space",
        type: "Academic Courtyard",
        overview: "Magnificent Oxford academic courtyard with cobbled quadrangle, cloistered walkways, and a grand dining hall, perfect for black-tie dinners, academic conferences, and prestige corporate gatherings.",
        venueHighlights: [
            "Magnificent cobbled academic quad with cloistered walkways and open-air courtyard",
            "Panelled grand dining hall with 7-metre hammerbeam ceiling for 180 covers",
            "Portrait-lit hall lighting and private ante-room for pre-dinner reception drinks",
            "Prestigious Oxford address suitable for black-tie dinners and academic conferences",
            "Dedicated academic events steward for professional on-site coordination",
        ],
        spaceDetails: {
            spaceType: "Indoor/Outdoor venue",
            maximumCapacity: "180 people",
            stageAvailable: "Yes",
            powerSupply: "Dedicated event-grade power",
            parking: "Recommended to use park & ride"
        },
        pickupLocation: "Mr. Benedict Moore, Event Office, Broad Street, Oxford, OX1 3BG",
        vendorInfo: {
            vendorName: "Oxford Academic Venues",
            vendorImage: "/assets/vendors/vendor62.jpg",
            rating: 4.9,
            totalOrders: 88
        },
        reviews: [
            { id: "rev62-1", rating: 5, comment: "Dining in a historic Oxford hall is beyond impressive.", userName: "Black Tie Dinner", userLocation: "Oxford", userImage: "https://randomuser.me/api/portraits/men/22.jpg" },
            { id: "rev62-2", rating: 5, comment: "Benedict and team made the experience absolutely seamless.", userName: "Corporate Dinner", userLocation: "London", userImage: "https://randomuser.me/api/portraits/women/23.jpg" },
            { id: "rev62-3", rating: 5, comment: "Hammerbeam ceiling in the hall is awe-inspiring. World-class.", userName: "Academic Conference", userLocation: "Oxford", userImage: "https://randomuser.me/api/portraits/men/24.jpg" },
            { id: "rev62-4", rating: 4, comment: "Cobbled quad for pre-drinks was charming. Guests were impressed.", userName: "Alumni Event", userLocation: "Reading", userImage: "https://randomuser.me/api/portraits/women/25.jpg" },
            { id: "rev62-5", rating: 5, comment: "Prestige at its finest. No other venue compares.", userName: "Charity Gala", userLocation: "Oxford", userImage: "https://randomuser.me/api/portraits/men/26.jpg" },
            { id: "rev62-6", rating: 5, comment: "Will be recommending to every client. Truly outstanding.", userName: "Event Planner", userLocation: "Banbury", userImage: "https://randomuser.me/api/portraits/women/27.jpg" }
        ]
    },
];
