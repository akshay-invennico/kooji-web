import React from "react";
import ServicesCard from "@/components/ui/landing/ServicesCard";

const SERVICES_DATA = [
    {
        title: "Instruments & Equipment",
        image: "/assets/servicesImg/servicesSection1.png",
        bgColor: "#D3F7FF",
        tags: ["Piano", "Acoustic guitar", "Banjo", "Cello", "Drums", "Electric guitar", "Flute", "Guitar", "Harmonica", "Keyboard", "Mandolin", "Oboe", "Piano", "Saxophone", "Trombone", "Trumpet", "Ukulele", "Violin", "Bass guitar", "Synthesizer"]
    },

    {
        title: "Musicians & Singers",
        image: "/assets/servicesImg/servicesSection2.png",
        bgColor: "#D3D5FF",
        tags: ["Singer", "Guitarist", "Drummer", "Pianist", "Violinist", "Saxophonist", "Cellist", "Flutist", "Trumpeter", "Bassist", "DJ", "Band", "Orchestra", "Choir", "Rapper", "Composer", "Songwriter", "Producer"]
    },

    {
        title: "Technicians",
        image: "/assets/servicesImg/servicesSection3.png",
        bgColor: "#FFFBD3",
        tags: ["Sound Engineer", "Lighting Tech", "Stage Manager", "Video Tech", "Roadie", "Tuner", "Repairman", "Acoustician"]
    },

    {
        title: "Event Space",
        image: "/assets/servicesImg/servicesSection4.png",
        bgColor: "#FFD3D3",
        tags: ["Recording Studio", "Rehearsal Room", "Concert Hall", "Jazz Club", "Opera House", "Music School", "Community Center"]
    }
]


const ServicesSection = () => {
    return (
        <section className="pb-16 md:pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-[36px] text-[#000000] font-bold mb-4">Professional Music & Event Services You can Book Instantly</h2>
                    <p className="text-[16px] text-[#585E61] font-regular">From live performances to technical support, discover trusted music professionals and event services available near you - ready to book when you need them.</p>
                </div>

                <div>
                    {SERVICES_DATA.map((services, index) => (
                        <ServicesCard
                            key={index}
                            title={services.title}
                            image={services.image}
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