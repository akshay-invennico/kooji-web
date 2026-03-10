import React from 'react'

interface FeatureCardProps {
    title: string
    description: string
    icon: string
}


const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
    return (
        <div className="bg-white p-6 rounded-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-start text-start h-full">
            <div className="w-12 h-12 flex items-center justify-center mb-10 ">
                <img src={icon} alt={title} className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-start text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-start text-sm text-gray-500 leading-relaxed">{description}</p>
        </div>
    )
}

export default FeatureCard


