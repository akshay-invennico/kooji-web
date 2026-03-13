import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProfileMenuCardProps {
  icon: string | React.ReactNode;
  title: string;
  href?: string;
  onClick?: () => void;
  isRed?: boolean;
}

const ProfileMenuCard: React.FC<ProfileMenuCardProps> = ({ icon, title, href, onClick, isRed }) => {
  const content = (
    <div
      className="flex items-center gap-2 py-3 px-2 cursor-pointer hover:bg-gray-50 transition-colors rounded-lg group"
      onClick={onClick}
    >
      <div className="w-6 h-6 flex items-center justify-center shrink-0">
        {typeof icon === 'string' ? (
          <Image src={icon} alt={title} width={20} height={20} />
        ) : (
          icon
        )}
      </div>
      <span className={`text-[14px] font-medium font-outfit  ${isRed ? 'text-[#FF3A44]' : 'text-[#000000]'}`}>
        {title}
      </span>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export default ProfileMenuCard;
