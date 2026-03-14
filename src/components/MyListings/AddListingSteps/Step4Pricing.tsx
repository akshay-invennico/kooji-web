/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

interface Step4PricingProps {
  formik: any;
  selectedType?: string;
}

const Step4Pricing: React.FC<Step4PricingProps> = ({
  formik,
  selectedType,
}) => {
  const { values, setFieldValue, handleChange } = formik;
  const isServiceType = selectedType === 'musician' || selectedType === 'technician';
  const isEventSpace = selectedType === 'event_space';
  const isSimplifiedUI = isServiceType || isEventSpace;

  const updatePricing = (field: string, value: any) => setFieldValue(field, value);


  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[24px] font-semibold text-[#000000] mb-5 font-outfit">Set Pricing</h2>

      <div className="space-y-10">
        {/* Bookings Type Section */}
        <div>
          <div className="flex justify-between items-center mb-6 text-[13px] font-bold text-gray-400 uppercase tracking-wider">
            <span>Bookings Type</span>
            <span className={isSimplifiedUI ? "mr-20" : "mr-24"}>Rates</span>
          </div>

          <div className="space-y-6">
            {[
              { id: 'dailyRate', label: 'Daily Rates', priceId: 'dailyPrice', period: 'Per day' },
              { id: 'weeklyRate', label: 'Weekly Rates', priceId: 'weeklyPrice', period: 'Per Week' },
              { id: 'monthlyRate', label: 'Monthly Rates', priceId: 'monthlyPrice', period: 'Per Month' },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between group">
                <span className="text-[15px] font-bold text-[#000000]">{item.label}</span>
                <div className="flex items-center gap-12">
                  <button
                    onClick={() => updatePricing(item.id, !values[item.id as keyof typeof values])}
                    className={`w-11 h-6 rounded-full transition-colors relative ${values[item.id as keyof typeof values] ? 'bg-[#FF3A44]' : 'bg-[#F0EFEF]'}`}
                  >
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${values[item.id as keyof typeof values] ? 'translate-x-5' : ''}`} />
                  </button>
                  <div className={`flex items-center justify-between px-4 py-3 bg-white rounded-md w-[260px] border border-[#F0EFEF] transition-all ${values[item.id as keyof typeof values] ? '' : 'opacity-40 grayscale pointer-events-none'}`}>
                    <div className="flex items-center">
                      {!isSimplifiedUI && <span className="text-gray-400 mr-1.5 font-bold">$</span>}
                      <input
                        type="text"
                        name={item.priceId}
                        value={values[item.priceId as keyof typeof values] as string}
                        onChange={handleChange}
                        placeholder={isSimplifiedUI ? `$${item.priceId === 'dailyPrice' ? '99' : item.priceId === 'weeklyPrice' ? '299' : '2099'}` : ''}
                        className={`bg-transparent border-none outline-none text-[15px] font-bold text-[#000000] w-20 ${isSimplifiedUI ? 'placeholder:text-[#F0EFEF]' : ''}`}
                      />
                    </div>
                    <span className="text-[13px] font-bold text-[#000000]">{item.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isEventSpace && (
          <>
            <hr className="border-[#F0EFEF]" />
            <div className="flex items-center justify-between group">
              <span className="text-[15px] font-bold text-[#000000]">Security Deposit Required</span>
              <div className="flex items-center gap-12">
                <button
                  onClick={() => updatePricing('securityDeposit', !values.securityDeposit)}
                  className={`w-11 h-6 rounded-full transition-colors relative ${values.securityDeposit ? 'bg-[#FF3A44]' : 'bg-[#F0EFEF]'}`}
                >
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${values.securityDeposit ? 'translate-x-5' : ''}`} />
                </button>
                <div className={`flex items-center justify-between px-4 py-3 bg-white rounded-md w-[260px] border border-[#F0EFEF] transition-all ${values.securityDeposit ? '' : 'opacity-40 grayscale pointer-events-none'}`}>
                  <div className="flex items-center">
                    <input
                      type="text"
                      name="securityDepositValue"
                      value={values.securityDepositValue}
                      onChange={handleChange}
                      placeholder="e.g 10%"
                      className="bg-transparent border-none outline-none text-[15px] font-bold text-[#000000] placeholder:text-[#F0EFEF] w-32"
                    />
                  </div>
                  <span className="text-[13px] font-bold text-[#000000]">% of Booking</span>
                </div>
              </div>
            </div>
          </>
        )}

        {!isSimplifiedUI && (
          <>
            <hr className="border-[#F0EFEF]" />

            {/* Delivery Type Section */}
            <div>
              <div className="flex justify-between items-center mb-6 text-[13px] font-bold text-gray-400 uppercase tracking-wider">
                <span>Delivery Type</span>
                <span className="mr-24 text-right">Charges</span>
              </div>

              <div className="space-y-6">
                {[
                  { id: 'selfDelivery', label: 'Self delivery', priceId: 'selfDeliveryPrice', period: 'Drop & Pick' },
                  { id: 'thirdPartyDelivery', label: 'Third Party Delivery', priceId: 'thirdPartyPrice', period: 'Flat Rate' },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between group">
                    <span className="text-[15px] font-bold text-[#000000]">{item.label}</span>
                    <div className="flex items-center gap-12">
                      <button
                        onClick={() => updatePricing(item.id, !values[item.id as keyof typeof values])}
                        className={`w-11 h-6 rounded-full transition-colors relative ${values[item.id as keyof typeof values] ? 'bg-[#FF3A44]' : 'bg-[#F0EFEF]'}`}
                      >
                        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${values[item.id as keyof typeof values] ? 'translate-x-5' : ''}`} />
                      </button>
                      <div className={`flex items-center justify-between px-4 py-3 bg-white rounded-md w-[260px] border border-[#F0EFEF] transition-all ${values[item.id as keyof typeof values] ? '' : 'opacity-40 grayscale pointer-events-none'}`}>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-1.5 font-bold">$</span>
                          <input
                            type="text"
                            name={item.priceId}
                            value={values[item.priceId as keyof typeof values] as string}
                            onChange={handleChange}
                            className="bg-transparent border-none outline-none text-[15px] font-bold text-[#000000] w-20"
                          />
                        </div>
                        <span className="text-[13px] font-bold text-[#000000]">{item.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-[#F0EFEF]" />

            {/* Additional Options */}
            <div className="space-y-6 pb-12">
              <div className="flex items-center justify-between group">
                <span className="text-[15px] font-bold text-[#000000]">Security Deposit Required</span>
                <div className="flex items-center gap-12">
                  <button
                    onClick={() => updatePricing('securityDeposit', !values.securityDeposit)}
                    className={`w-11 h-6 rounded-full transition-colors relative ${values.securityDeposit ? 'bg-[#FF3A44]' : 'bg-[#F0EFEF]'}`}
                  >
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${values.securityDeposit ? 'translate-x-5' : ''}`} />
                  </button>
                  <div className={`flex items-center justify-between px-4 py-3 bg-white rounded-md w-[260px] border border-[#F0EFEF] transition-all ${values.securityDeposit ? '' : 'opacity-40 grayscale pointer-events-none'}`}>
                    <div className="flex items-center">
                      <input
                        type="text"
                        name="securityDepositValue"
                        value={values.securityDepositValue}
                        onChange={handleChange}
                        placeholder="e.g 10%"
                        className="bg-transparent border-none outline-none text-[15px] font-bold text-[#000000] placeholder:text-[#F0EFEF] w-32"
                      />
                    </div>
                    <span className="text-[13px] font-bold text-[#000000]">% of Booking</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between group">
                <span className="text-[15px] font-bold text-[#000000]">Insurance Available</span>
                <div className="flex items-center gap-12">
                  <button
                    onClick={() => updatePricing('insurance', !values.insurance)}
                    className={`w-11 h-6 rounded-full transition-colors relative ${values.insurance ? 'bg-[#FF3A44]' : 'bg-[#F0EFEF]'}`}
                  >
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${values.insurance ? 'translate-x-5' : ''}`} />
                  </button>
                  <div className="w-[260px]" /> {/* Spacer to align with inputs above */}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Step4Pricing;
