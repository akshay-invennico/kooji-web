"use client"

import React, { useState, useRef, Suspense } from 'react'
import { X } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

const VerifyOtpContent = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', ''])
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])
    const router = useRouter()
    const searchParams = useSearchParams()
    const from = searchParams.get('from') || 'forgot'

    const handleChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return false

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

        // Focus next input
        if (element.value !== '' && index < 5) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handleVerify = () => {
        console.log('OTP verified:', otp.join(''))
        if (from === 'register') {
            // Redirect to login or a success page after registration verification
            router.push('/login')
        } else {
            // Redirect to reset password for forgot password flow
            router.push('/reset-password')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative">
                <button
                    onClick={() => router.back()}
                    className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="mb-8">
                    <h1 className="text-[20px] font-semibold text-[#000000] mb-2">Verify Your Email</h1>
                    <p className="text-[#686262] text-[16px] font-medium">We&apos;ve sent a verification code to your Email.</p>
                </div>

                <div className="space-y-8">
                    <div className="space-y-4">
                        <label className="text-[14px] font-medium text-[#686262]">Verification Code</label>
                        <div className="flex justify-between gap-2">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => { inputRefs.current[index] = el; }}
                                    value={data}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className={`w-full h-14 border rounded-xl text-center text-xl font-bold focus:outline-none transition-all ${data
                                        ? 'border-[#FF3A44] bg-white'
                                        : 'border-gray-200 focus:border-[#FF3A44]'
                                        }`}
                                />
                            ))}
                        </div>
                        <p className="text-[14px] font-medium text-[#686262]">
                            Didn&apos;t receive Code?{' '}
                            <button className="text-[#FF3A44] font-bold hover:underline">
                                Resend
                            </button>
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleVerify}
                        className="w-full bg-[#FF3A44] hover:bg-[#E0343C] text-white font-bold py-4 rounded-xl shadow-lg shadow-red-100 transition-all active:scale-[0.99] text-lg"
                    >
                        Verify
                    </button>
                </div>

                <div className="mt-20 flex flex-col items-center">
                    <div className="w-full border-t border-gray-100 mb-8" />
                </div>
            </div>
        </div>
    )
}

const VerifyOtpPage = () => {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <VerifyOtpContent />
        </Suspense>
    )
}

export default VerifyOtpPage
