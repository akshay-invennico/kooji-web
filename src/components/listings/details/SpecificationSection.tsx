import React from "react";
import SpecificationCard from "@/components/ui/listingDetails/SpecificationCard";

interface SpecificationSectionProps {
    specification: Record<string, string | undefined>;
}

const SpecificationSection: React.FC<SpecificationSectionProps> = ({ specification }) => {
    return (
        <section className="px-4 md:px-10 py-6 md:py-12 mx-auto max-w-7xl">
            <SpecificationCard specification={specification} />
        </section>
    );
};

export default SpecificationSection;