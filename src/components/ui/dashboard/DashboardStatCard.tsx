import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface DashboardStatCardProps {
  icon: string;
  label: string;
  value: string | number;
  monthlyChange: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  viewDetailsHref: string;
}

const DashboardStatCard: React.FC<DashboardStatCardProps> = ({
  icon,
  label,
  value,
  monthlyChange,
  changeType,
  viewDetailsHref
}) => {
  const getChangeColor = () => {
    switch (changeType) {
      case 'increase': return 'text-[#3EC300]';
      case 'decrease': return 'text-[#FF3A44]';
      default: return 'text-gray-500';
    }
  };

  const getChangePrefix = () => {
    switch (changeType) {
      case 'increase': return '+';
      case 'decrease': return '-';
      default: return '';
    }
  };

  return (
    <div className="bg-white w-[235px] h-[124px] p-3 rounded-lg border border-[#F0EFEF] flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="rounded-sm flex items-center justify-center">
          <Image src={icon} alt={label} width={20} height={20} />
        </div>
        <span className="text-[14px] font-medium text-[#686262] font-outfit">{label}</span>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-[24px] font-semibold text-[#000000] font-outfit">{value}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className={`text-[12px] font-medium font-outfit ${getChangeColor()}`}>
              {getChangePrefix()}{monthlyChange}
            </span>
            <span className="text-[12px] font-medium text-[#686262] font-outfit">This Month</span>
          </div>
          <Link href={viewDetailsHref} className="flex items-center text-[#009FFD] text-[12px] font-medium font-outfit hover:underline group">
            View Details
            <ChevronRight className="w-4 h-4 text-[#009FFD]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatCard;
