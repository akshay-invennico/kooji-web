'use client'

import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Mail, Lock, Eye, EyeOff, X, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const signupSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  agreeTerms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
})

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0EFEF] p-4 lg:p-8 font-sans">
      <div className="bg-white rounded-xl p-8 lg:p-12 w-full max-w-xl lg:max-w-[600px] relative">
        <button
          onClick={() => router.push('/login')}
          className="absolute right-6 top-6 text-gray-400"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <h1 className="text-[20px] font-semibold text-[#000000] mb-2">Create Your Account</h1>
          <p className="text-[#686262] text-[16px] font-medium">Join to book services, equipment, or event space.</p>
        </div>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            agreeTerms: false
          }}
          validationSchema={signupSchema}
          onSubmit={(values) => {
            console.log('Signup values:', values)
            router.push('/verify-otp?from=register')
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[14px] font-medium text-[#000000] mb-2 block">First Name</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
                      <User className="w-5 h-5" />
                    </span>
                    <Field
                      name="firstName"
                      type="text"
                      placeholder="e.g. John"
                      className={`w-full pl-12 pr-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.firstName && touched.firstName
                        ? 'border-[#FF3A44] focus:ring-red-100'
                        : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                        }`}
                    />
                  </div>
                  <ErrorMessage name="firstName" component="div" className="text-[#FF3A44] text-xs font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-medium text-[#000000] mb-2 block">Last Name</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
                      <User className="w-5 h-5" />
                    </span>
                    <Field
                      name="lastName"
                      type="text"
                      placeholder="e.g. Smith"
                      className={`w-full pl-12 pr-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.lastName && touched.lastName
                        ? 'border-[#FF3A44] focus:ring-red-100'
                        : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                        }`}
                    />
                  </div>
                  <ErrorMessage name="lastName" component="div" className="text-[#FF3A44] text-xs font-medium" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#000000] mb-2 block">Email</label>
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
                <ErrorMessage name="email" component="div" className="text-[#FF3A44] text-xs font-medium" />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#000000] mb-2 block">Phone Number</label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 flex items-center gap-1 text-[#686262]">
                    <span className="text-xl">🇬🇧</span>
                    <span className="text-sm font-semibold">+44</span>
                  </div>
                  <Field
                    name="phone"
                    type="text"
                    placeholder="XXX XXXXX"
                    className={`w-full pl-20 pr-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.phone && touched.phone
                      ? 'border-[#FF3A44] focus:ring-red-100'
                      : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                      }`}
                  />
                </div>
                <ErrorMessage name="phone" component="div" className="text-[#FF3A44] text-xs font-medium" />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#000000] mb-2 block">Password</label>
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
                <ErrorMessage name="password" component="div" className="text-[#FF3A44] text-xs font-medium" />
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Field
                  type="checkbox"
                  name="agreeTerms"
                  id="agreeTerms"
                  className="w-5 h-5 rounded border-gray-300 text-[#FF3A44] cursor-pointer mt-0.5"
                />
                <label htmlFor="agreeTerms" className="text-[12px] font-medium text-[#686262] cursor-pointer leading-tight">
                  I agree to the <span className="text-[#009FFD] hover:underline">Terms of Service</span> & <span className="text-[#009FFD] hover:underline">Privacy Policy</span>
                </label>
              </div>
              <ErrorMessage name="agreeTerms" component="div" className="text-[#FF3A44] text-xs font-medium" />

              <button
                type="submit"
                className="w-full bg-[#FF3A44] text-white font-medium text-[14px] py-4 rounded-md mt-4"
              >
                Create Account
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#F0EFEF]"></div>
                </div>
                <div className="relative flex justify-center text-[12px] uppercase">
                  <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">OR</span>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-center space-x-3 px-4 py-4 border border-[#F0EFEF] rounded-md font-medium text-[14px] text-[#534D4B]"
                >
                  <img src="/icons/login/logoGoogle.svg" className="w-6 h-6" alt="Google" />
                  <span>Continue with Google</span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center space-x-3 px-4 py-4 border border-[#F0EFEF] rounded-md font-medium text-[14px] text-[#534D4B]"
                >
                  <img src="/icons/login/logoApple.svg" className="w-6 h-6" alt="Apple" />
                  <span>Continue with Apple</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="mt-10 text-center">
          <p className="text-[#534D4B] text-[14px] font-semibold">
            Already have an account?{' '}
            <Link href="/login" className="text-[#FF3A44] font-semibold text-[14px] hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}


export default SignupPage
