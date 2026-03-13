import React from 'react'

interface FeatureCardProps {
    title: string
    description: string
    icon: string
}


const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
    return (
        <div className="bg-[#FFFFFF] p-6 rounded-lg border border-[#F0EFEF] flex flex-col items-start text-start h-full">
            <div className="w-12 h-12 flex items-center justify-center mb-10 ">
                <img src={icon} alt={title} className="w-10 h-10 object-contain" />
            </div>
            <h3 className="text-start text-[20px] font-bold text-[#000000] mb-2">{title}</h3>
            <p className="text-start text-[16px] text-[#686262] leading-relaxed">{description}</p>
        </div>
    )
}

export default FeatureCard


