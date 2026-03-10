"use client"

import React, { useState } from "react";
import GalleryCard from "@/components/ui/listingDetails/GalleryCard";
import PhotoGalleryModal from "@/components/ui/listingDetails/PhotoGalleryModal";

interface GallerySectionProps {
    images: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [initialIndex, setInitialIndex] = useState(0);

    const displayImages = images.slice(0, 4);

    const openModal = (index: number) => {
        setInitialIndex(index);
        setIsModalOpen(true);
    };

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-10">
                <div className="flex flex-col md:flex-row gap-2 h-[350px] md:h-[550px]">
                   
                    <div className="w-full md:w-3/5 h-full cursor-pointer" onClick={() => openModal(0)}>
                        <GalleryCard
                            src={displayImages[0]}
                            alt="Listing gallery main"
                            className="h-full rounded-xl md:rounded-xl"
                        />
                    </div>

                    
                    <div className="w-full md:w-2/5 flex flex-col gap-2 h-full">
                       
                        <div className="flex gap-3 h-[50%]">
                            <div className="w-1/2 h-full cursor-pointer" onClick={() => openModal(1)}>
                                <GalleryCard
                                    src={displayImages[1]}
                                    alt="Listing gallery 2"
                                    className="h-full rounded-xl md:rounded-xl"
                                />
                            </div>
                            <div className="w-1/2 h-full cursor-pointer" onClick={() => openModal(2)}>
                                <GalleryCard
                                    src={displayImages[2]}
                                    alt="Listing gallery 3"
                                    className="h-full rounded-xl md:rounded-xl"
                                />
                            </div>
                        </div>

                       
                        <div className="h-[50%] relative cursor-pointer" onClick={() => openModal(3)}>
                            <GalleryCard
                                src={displayImages[3]}
                                alt="Listing gallery 4"
                                className="h-full rounded-xl md:rounded-xl"
                            />
                          
                            <button 
                                onClick={(e) => { e.stopPropagation(); openModal(0); }}
                                className="absolute bottom-6 right-6 bg-black/80 text-white text-[12px] md:text-sm font-medium py-2 px-5 rounded-sm flex items-center gap-2 hover:bg-black transition-colors"
                            >
                                <span>View all Photos</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <PhotoGalleryModal
                    images={images}
                    initialIndex={initialIndex}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </section>
    );
};

export default GallerySection;