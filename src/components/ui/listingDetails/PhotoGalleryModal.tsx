"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

interface PhotoGalleryModalProps {
    images: string[];
    initialIndex: number;
    onClose: () => void;
}

const PhotoGalleryModal: React.FC<PhotoGalleryModalProps> = ({ images, initialIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") handlePrevious();
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex]);

    return (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-between text-white p-4 md:p-10 animate-in fade-in duration-300">
            
            <div className="w-full flex justify-end items-center sticky top-0 z-[110]">
                <button 
                    onClick={onClose}
                    className="flex items-center gap-2 hover:bg-white/10 p-2 rounded-lg transition-colors group"
                >
                    <X size={20} className="text-white group-hover:text-gray-300" />
                    <span className="text-sm font-medium hidden md:inline">Close</span>
                </button>
            </div>

            <div className="relative flex-1 w-full max-w-3xl flex items-center justify-center my-4">
              
                <button 
                    onClick={handlePrevious}
                    className="absolute left-0 md:-left-16 z-[110] p-3 bg-black/40 border border-white/20 rounded-lg hover:bg-black/60 transition-all active:scale-95"
                >
                    <ChevronLeft size={24} className="text-white"/>
                </button>

                <div className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden rounded-lg">
                    <Image
                        src={images[currentIndex]}
                        alt={`Gallery Image ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <button 
                    onClick={handleNext}
                    className="absolute right-0 md:-right-16 z-[110] p-3 bg-black/40 border border-white/20 rounded-lg hover:bg-black/60 transition-all active:scale-95"
                >
                    <ChevronRight size={24} className="text-white"/>
                </button>
            </div>

            
            <div className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-6 pb-4">
               
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mask-linear">
                    {images.map((src, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden border-2 transition-all ${
                                currentIndex === index ? "border-red-500 scale-105" : "border-transparent opacity-50 hover:opacity-100"
                            }`}
                        >
                            <Image
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                            {/* Potential play icon indicator if video support is added later */}
                            {false && index === images.length - 1 && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                    <Play size={16} fill="white" />
                                </div>
                            )}
                        </button>
                    ))}
                </div>

               
                <div className="text-sm font-medium bg-black/40 px-4 py-2 rounded-full border border-white/10 shrink-0">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .mask-linear {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </div>
    );
};

export default PhotoGalleryModal;
