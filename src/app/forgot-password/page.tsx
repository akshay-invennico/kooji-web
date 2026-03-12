'use client'

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Mail, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
})

const ForgotPasswordPage = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F0EFEF] p-4 lg:p-8 font-sans">
            <div className="bg-white rounded-xl p-8 lg:p-12 w-full max-w-xl lg:max-w-[500px] relative">
                <button
                    onClick={() => router.back()}
                    className="absolute right-6 top-6 text-gray-400"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="mb-8">
                    <h1 className="text-[20px] font-semibold text-[#000000] mb-2">Forgot Your Password?</h1>
                    <p className="text-[#686262] text-[16px] font-medium">Enter your registered email to reset your password.</p>
                </div>

                <Formik
                    initialValues={{ email: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('Reset email sent to:', values.email);
                        router.push('/verify-otp');
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[14px] font-medium text-[#000000] mb-4">Email</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
                                        <Mail className="w-5 h-5" />
                                    </span>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="example@email.com"
                                        className={`w-full pl-12 pr-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.email && touched.email
                                            ? 'border-[#FF3A44] focus:ring-red-100'
                                            : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                                            }`}
                                    />
                                </div>
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs font-medium" />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#FF3A44] text-white font-medium text-[14px] py-4 rounded-md mt-2"
                            >
                                Continue
                            </button>
                        </Form>
                    )}
                </Formik>

                <div className="mt-10 text-center">
                    <div className="w-full border-t border-gray-100 mb-8" />
                    <p className="text-[#534D4B] text-[14px] font-semibold">
                        Remember Password?{' '}
                        <Link href="/login" className="text-[#FF3A44] font-semibold text-[14px] hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage
