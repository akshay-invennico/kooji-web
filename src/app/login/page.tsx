'use client'

import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Mail, Lock, Eye, EyeOff, X } from 'lucide-react'
import Link from 'next/link'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
})

const Page = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative">
        <button className="absolute right-6 top-6 text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-500 text-lg">Sign in to continue booking and managing your events.</p>
        </div>

        <Formik
          initialValues={{ email: '', password: '', rememberMe: false }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Login values:', values)
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </span>
                  <Field
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    className={`w-full pl-12 pr-4 py-4 rounded-xl border focus:outline-none focus:ring-2 transition-all text-base ${errors.email && touched.email
                      ? 'border-red-500 focus:ring-red-100'
                      : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF4D4D]'
                      }`}
                  />
                </div>
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs font-medium" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock className="w-5 h-5" />
                  </span>
                  <Field
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className={`w-full pl-12 pr-12 py-4 rounded-xl border focus:outline-none focus:ring-2 transition-all text-base ${errors.password && touched.password
                      ? 'border-red-500 focus:ring-red-100'
                      : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF4D4D]'
                      }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs font-medium" />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <div className="relative flex items-center">
                    <Field
                      type="checkbox"
                      name="rememberMe"
                      className="w-5 h-5 rounded border-gray-300 text-[#FF4D4D] focus:ring-[#FF4D4D] cursor-pointer"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                    Remember me
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF4D4D] hover:bg-[#F04444] text-white font-bold py-4 rounded-xl shadow-lg shadow-red-100 transition-all active:scale-[0.99] text-lg mt-2"
              >
                Log in
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">OR</span>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-center space-x-3 px-4 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-semibold text-gray-700"
                >
                  <img src="/icons/login/logoGoogle.svg" className="w-6 h-6" alt="Google" />
                  <span>Continue with Google</span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center space-x-3 px-4 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-semibold text-gray-700"
                >
                  <img src="/icons/login/logoApple.svg" className="w-6 h-6" alt="Apple" />
                  <span>Continue with Apple</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="mt-10 text-center">
          <p className="text-gray-600 font-medium">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-[#FF4D4D] font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page