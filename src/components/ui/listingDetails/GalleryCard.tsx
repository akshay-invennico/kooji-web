"use client"

import React from "react";
import Image from "next/image";

interface GalleryCardProps {
    src: string;
    alt: string;
    className?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ src, alt, className = "" }) => {
    return (
        <div className={`relative rounded-xl overflow-hidden group ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
            />
        </div>
    );
};

export default GalleryCard;