'use client'

import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Lock, Eye, EyeOff, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('New Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
})

const ResetPasswordPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const router = useRouter()

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F0EFEF] p-4 lg:p-8 font-sans">
            <div className="bg-white rounded-xl p-8 lg:p-12 w-full max-w-xl lg:max-w-[500px] relative">
                <button
                    onClick={() => router.push('/login')}
                    className="absolute right-6 top-6 text-gray-400"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="mb-8">
                    <h1 className="text-[20px] font-semibold text-[#000000] mb-2">Reset Your Password</h1>
                    <p className="text-[#686262] text-[16px] font-medium">Reset your password to regain access to your account.</p>
                </div>

                <Formik
                    initialValues={{ password: '', confirmPassword: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('Password reset successful:', values)
                        router.push('/login')
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[14px] font-medium text-[#000000] mb-4">New Password</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
                                        <Lock className="w-5 h-5" />
                                    </span>
                                    <Field
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        className={`w-full pl-12 pr-12 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.password && touched.password
                                            ? 'border-[#FF3A44] focus:ring-red-100'
                                            : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                                            }`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                <ErrorMessage name="password" component="div" className="text-red-500 text-xs font-medium" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[14px] font-medium text-[#000000] mb-4">Confirm New Password</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
                                        <Lock className="w-5 h-5" />
                                    </span>
                                    <Field
                                        name="confirmPassword"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        className={`w-full pl-12 pr-12 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.confirmPassword && touched.confirmPassword
                                            ? 'border-[#FF3A44] focus:ring-red-100'
                                            : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                                            }`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs font-medium" />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#FF3A44] text-white font-medium text-[14px] py-4 rounded-md mt-2"
                            >
                                Go to Login
                            </button>
                        </Form>
                    )}
                </Formik>

                <div className="mt-20 flex flex-col items-center">
                    <div className="w-full border-t border-gray-100 mb-8" />
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordPage
