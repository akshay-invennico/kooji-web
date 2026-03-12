/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

interface Step4PricingProps {
  pricing: {
    dailyRate: boolean;
    dailyPrice: string;
    weeklyRate: boolean;
    weeklyPrice: string;
    monthlyRate: boolean;
    monthlyPrice: string;
    selfDelivery: boolean;
    selfDeliveryPrice: string;
    thirdPartyDelivery: boolean;
    thirdPartyPrice: string;
    securityDeposit: boolean;
    securityDepositValue: string;
    insurance: boolean;
  };
  updatePricing: (field: string, value: any) => void;
}

const Step4Pricing: React.FC<Step4PricingProps> = ({
  pricing,
  updatePricing,
}) => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
      <h2 className="text-[28px] font-bold text-gray-900 mb-10 font-sans">Set Pricing</h2>

      <div className="space-y-10">
        {/* Bookings Type Section */}
        <div>
          <div className="flex justify-between items-center mb-6 text-[13px] font-bold text-gray-400 uppercase tracking-wider">
            <span>Bookings Type</span>
            <span className="mr-32">Rates</span>
          </div>

          <div className="space-y-6">
            {[
              { id: 'dailyRate', label: 'Daily Rates', priceId: 'dailyPrice', period: 'Per day' },
              { id: 'weeklyRate', label: 'Weekly Rates', priceId: 'weeklyPrice', period: 'Per Week' },
              { id: 'monthlyRate', label: 'Monthly Rates', priceId: 'monthlyPrice', period: 'Per Month' },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between group">
                <span className="text-[15px] font-bold text-gray-900">{item.label}</span>
                <div className="flex items-center gap-12">
                  <button
                    onClick={() => updatePricing(item.id, !pricing[item.id as keyof typeof pricing])}
                    className={`w-11 h-6 rounded-full transition-colors relative ${pricing[item.id as keyof typeof pricing] ? 'bg-[#FE3B4C]' : 'bg-gray-200'}`}
                  >
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${pricing[item.id as keyof typeof pricing] ? 'translate-x-5' : ''}`} />
                  </button>
                  <div className={`flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl w-[260px] border border-transparent transition-all ${pricing[item.id as keyof typeof pricing] ? 'bg-gray-50' : 'opacity-40 grayscale pointer-events-none'}`}>
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-1.5 font-bold">$</span>
                      <input
                        type="text"
                        value={pricing[item.priceId as keyof typeof pricing] as string}
                        onChange={(e) => updatePricing(item.priceId, e.target.value)}
                        className="bg-transparent border-none outline-none text-[15px] font-bold text-gray-900 w-20"
                      />
                    </div>
                    <span className="text-[13px] font-bold text-gray-900">{item.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Delivery Type Section */}
        <div>
          <div className="flex justify-between items-center mb-6 text-[13px] font-bold text-gray-400 uppercase tracking-wider">
            <span>Delivery Type</span>
            <span className="mr-32">Charges</span>
          </div>

          <div className="space-y-6">
            {[
              { id: 'selfDelivery', label: 'Self delivery', priceId: 'selfDeliveryPrice', period: 'Drop & Pick' },
              { id: 'thirdPartyDelivery', label: 'Third Party Delivery', priceId: 'thirdPartyPrice', period: 'Flat Rate' },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between group">
                <span className="text-[15px] font-bold text-gray-900">{item.label}</span>
                <div className="flex items-center gap-12">
                  <button
                    onClick={() => updatePricing(item.id, !pricing[item.id as keyof typeof pricing])}
                    className={`w-11 h-6 rounded-full transition-colors relative ${pricing[item.id as keyof typeof pricing] ? 'bg-[#FE3B4C]' : 'bg-gray-200'}`}
                  >
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${pricing[item.id as keyof typeof pricing] ? 'translate-x-5' : ''}`} />
                  </button>
                  <div className={`flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl w-[260px] border border-transparent transition-all ${pricing[item.id as keyof typeof pricing] ? 'bg-gray-50' : 'opacity-40 grayscale pointer-events-none'}`}>
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-1.5 font-bold">$</span>
                      <input
                        type="text"
                        value={pricing[item.priceId as keyof typeof pricing] as string}
                        onChange={(e) => updatePricing(item.priceId, e.target.value)}
                        className="bg-transparent border-none outline-none text-[15px] font-bold text-gray-900 w-20"
                      />
                    </div>
                    <span className="text-[13px] font-bold text-gray-900">{item.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Additional Options */}
        <div className="space-y-6 pb-12">
          <div className="flex items-center justify-between group">
            <span className="text-[15px] font-bold text-gray-900">Security Deposit Required</span>
            <div className="flex items-center gap-12">
              <button
                onClick={() => updatePricing('securityDeposit', !pricing.securityDeposit)}
                className={`w-11 h-6 rounded-full transition-colors relative ${pricing.securityDeposit ? 'bg-[#FE3B4C]' : 'bg-gray-200'}`}
              >
                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${pricing.securityDeposit ? 'translate-x-5' : ''}`} />
              </button>
              <div className={`flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl w-[260px] border border-transparent transition-all ${pricing.securityDeposit ? 'bg-gray-50' : 'opacity-40 grayscale pointer-events-none'}`}>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={pricing.securityDepositValue}
                    onChange={(e) => updatePricing('securityDepositValue', e.target.value)}
                    placeholder="e.g 10%"
                    className="bg-transparent border-none outline-none text-[15px] font-bold text-gray-900 placeholder:text-gray-400 w-32"
                  />
                </div>
                <span className="text-[13px] font-bold text-gray-900">% of Booking</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between group">
            <span className="text-[15px] font-bold text-gray-900">Insurance Available</span>
            <div className="flex items-center gap-12">
              <button
                onClick={() => updatePricing('insurance', !pricing.insurance)}
                className={`w-11 h-6 rounded-full transition-colors relative ${pricing.insurance ? 'bg-[#FE3B4C]' : 'bg-gray-200'}`}
              >
                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${pricing.insurance ? 'translate-x-5' : ''}`} />
              </button>
              <div className="w-[260px]" /> {/* Spacer to align with inputs above */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4Pricing;
