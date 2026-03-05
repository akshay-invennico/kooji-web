import React from "react";
import ServicesCard from "@/components/ui/servicesSection/ServicesCard";

const SERVICES_DATA = [
    {
        title: "Instruments & Equipment",
        images: ["/assets/servicesImg/services1.svg", "/assets/servicesImg/services2.svg"],
        bgColor: "#D3F7FF",
        tags: ["Piano", "Acoustic guitar", "Banjo", "Cello", "Drums", "Electric guitar", "Flute", "Guitar", "Harmonica", "Keyboard", "Mandolin", "Oboe", "Piano", "Saxophone", "Trombone", "Trumpet", "Ukulele", "Violin", "Bass guitar", "Synthesizer"]
    },

    {
        title: "Musicians & Singers",
        images: ["/assets/servicesImg/services3.svg", "/assets/servicesImg/services4.svg", "/assets/servicesImg/services5.svg"],
        bgColor: "#D3D5FF",
        tags: ["Singer", "Guitarist", "Drummer", "Pianist", "Violinist", "Saxophonist", "Cellist", "Flutist", "Trumpeter", "Bassist", "DJ", "Band", "Orchestra", "Choir", "Rapper", "Composer", "Songwriter", "Producer"]
    },

    {
        title: "Technicians",
        images: ["/assets/servicesImg/services6.svg", "/assets/servicesImg/services7.svg", "/assets/servicesImg/services8.svg"],
        bgColor: "#FFFBD3",
        tags: ["Sound Engineer", "Lighting Tech", "Stage Manager", "Video Tech", "Roadie", "Tuner", "Repairman", "Acoustician"]
    },

    {
        title: "Event Space",
        images: ["/assets/servicesImg/services9.svg", "/assets/servicesImg/services10.svg"],
        bgColor: "#FFD3D3",
        tags: ["Recording Studio", "Rehearsal Room", "Concert Hall", "Jazz Club", "Opera House", "Music School", "Community Center"]
    }
]


const ServicesSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">Professional Music & Event Services You can Book Instantly</h2>
                    <p className="text-xl text-black">From live performances to technical support, discover trusted music professionals and event services available near you - ready to book when you need them.</p>
                </div>

                <div>
                    {SERVICES_DATA.map((services, index) => (
                        <ServicesCard
                            key={index}
                            title={services.title}
                            images={services.images}
                            bgColor={services.bgColor}
                            tags={services.tags}
                            cardIndex={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection;