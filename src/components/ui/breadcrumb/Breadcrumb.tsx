import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import routes from "@/app/routes";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  textColor?: string;
  linkColor?: string;
  isAbout?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  textColor = "white",
  linkColor = "white",
  isAbout = false
}) => {
  return (
    <nav className="flex items-center space-x-2 text-sm font-medium mb-4 sm:mb-6">
      <Link href={routes.home} style={{ color: linkColor }} className="flex items-center gap-x-2">
        <Home className="h-4 w-4" />
        Home
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <span className={`${isAbout ? 'text-white' : ''} mx-5`}>{">"}</span>
            {item.href && !isLast ? (
              <Link
                href={item.href}
                style={{ color: linkColor }}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: textColor }}>{item.label}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
