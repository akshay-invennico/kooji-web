"use client";

import React, { useState } from 'react';
import EditProfileSidebar from '@/components/profile/EditProfileSidebar';
import PersonalDetailsForm from '@/components/profile/PersonalDetailsForm';
import BusinessInfoForm from '@/components/profile/BusinessInfoForm';
import OffersForm from '@/components/profile/OffersForm';
import ServiceAreaForm from '@/components/profile/ServiceAreaForm';
import AccountSecurityForm from '@/components/profile/AccountSecurityForm';

const EditProfilePage = () => {
  const [activeSection, setActiveSection] = useState("Personal Details");

  const renderSection = () => {
    switch (activeSection) {
      case "Personal Details":
        return <PersonalDetailsForm />;
      case "Business Info":
        return <BusinessInfoForm />;
      case "What you Offers":
        return <OffersForm />;
      case "Service Area":
        return <ServiceAreaForm />;
      case "Account & Security":
        return <AccountSecurityForm />;
      default:
        return <div className="flex-1 text-[#686262] font-outfit p-10 bg-gray-50 rounded-lg border border-dashed border-gray-200">Content for {activeSection} is coming soon...</div>;
    }
  };

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <EditProfileSidebar activeSection={activeSection} setActiveSection={setActiveSection} />



          {/* Form Content */}
          {renderSection()}

        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;