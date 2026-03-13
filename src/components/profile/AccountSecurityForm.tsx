"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, Lock, X } from "lucide-react";

const passwordSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string().min(8, "Password must be at least 8 characters").required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

const EyeIcon = ({ visible }: { visible: boolean }) =>
  visible ? <Eye className="w-5 h-5 text-[#A39E9E]" /> : <EyeOff className="w-5 h-5 text-[#A39E9E]" />;

interface PasswordField {
  name: "currentPassword" | "newPassword" | "confirmPassword";
  label: string;
  show: boolean;
  toggle: () => void;
}

const ChangePasswordModal = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const passwordFields: PasswordField[] = [
    { name: "currentPassword", label: "Current Password", show: showCurrent, toggle: () => setShowCurrent(p => !p) },
    { name: "newPassword", label: "New Password", show: showNew, toggle: () => setShowNew(p => !p) },
    { name: "confirmPassword", label: "Confirm New Password", show: showConfirm, toggle: () => setShowConfirm(p => !p) },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 bg-white rounded-lg  w-full max-w-[420px] mx-4 p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-[20px] font-semibold text-[#000000] font-outfit">Change Your Password</h3>
            <p className="text-[#A39E9E] text-[14px] font-medium font-outfit mt-1">Secure your account by Updating your Password</p>
          </div>
          <button onClick={onClose} className="text-[#A39E9E] hover:text-[#686262] transition-colors p-1 -mt-1 -mr-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <Formik
          initialValues={{ currentPassword: "", newPassword: "", confirmPassword: "" }}
          validationSchema={passwordSchema}
          onSubmit={(_, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              onClose();
              router.push("/login");
            }, 500);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="mt-6 space-y-5">
              {passwordFields.map(({ name, label, show, toggle }) => (
                <div key={name} className="space-y-1.5">
                  <label className="text-[#000000] text-[14px] font-medium font-outfit block">{label}</label>
                  <div className={`flex items-center gap-3 px-4 py-3 rounded-md border transition-all ${errors[name] && touched[name] ? "border-red-500" : "border-[#F0EFEF] focus-within:border-[#FF3A44]"}`}>
                    <Lock className="w-4 h-4 text-[#A39E9E]" />
                    <Field
                      name={name}
                      type={show ? "text" : "password"}
                      className="flex-1 outline-none text-[14px] font-outfit text-[#000000] bg-transparent placeholder:text-[#D4D0D0]"
                      placeholder="••••••••••"
                    />
                    <button type="button" onClick={toggle} tabIndex={-1}>
                      <EyeIcon visible={show} />
                    </button>
                  </div>
                  <ErrorMessage name={name} component="p" className="text-red-500 text-[12px] font-outfit" />
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF3A44] text-white py-3.5 rounded-lg text-[16px] font-medium font-outfit hover:bg-[#E0343C] transition-all disabled:opacity-70 mt-2"
              >
                {isSubmitting ? "Updating..." : "Update Password"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const DELETE_REASONS = [
  "Found a better option",
  "Concerned about data security",
  "Costs don't fit my budget",
  "Not satisfied with the service",
  "Other",
];

const DeleteAccountModal = ({ onClose }: { onClose: () => void }) => {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [otherReason, setOtherReason] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleReason = (reason: string) => {
    setSelectedReasons(prev =>
      prev.includes(reason) ? prev.filter(r => r !== reason) : [...prev, reason]
    );
  };

  const showTextarea = selectedReasons.includes("Other");

  // Step 2: Password confirmation modal
  if (step === 2) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-[460px] mx-4 p-8">
          <h3 className="text-[20px] font-semibold text-[#000000] font-outfit mb-3">Delete Your Account?</h3>
          <p className="text-[#686262] text-[14px] font-medium font-outfit leading-relaxed mb-6">
            To proceed with your account deletion, please confirm your identity by entering your password. This action will permanently erase your profile and all associated data from our systems.
          </p>

          <div className="space-y-2 mb-8">
            <label className="text-[#000000] text-[14px] font-medium font-outfit block">Your Password</label>
            <div className="flex items-center gap-3 px-4 py-3.5 rounded-lg border border-[#F0EFEF] focus-within:border-[#FF3A44] transition-all">
              <Lock className="w-4 h-4 text-[#A39E9E]" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••••"
                className="flex-1 outline-none text-[14px] font-outfit text-[#000000] bg-transparent placeholder:text-[#D4D0D0]"
              />
              <button type="button" onClick={() => setShowPassword(p => !p)} tabIndex={-1}>
                <EyeIcon visible={showPassword} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onClose}
              className="py-3.5 text-[16px] font-medium font-outfit text-[#000000] bg-[#F5F3F4] hover:bg-gray-200 rounded-lg transition-all"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={!password}
              onClick={() => console.log("Account deletion confirmed", { reasons: selectedReasons, otherReason, password })}
              className="py-3.5 text-[16px] font-medium font-outfit text-white bg-[#C5161D] hover:bg-[#B01820] rounded-lg transition-all disabled:opacity-50"
            >
              Confirm Deletion
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 1: Reason selection
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 bg-white rounded-lg w-full max-w-[480px] mx-4 overflow-hidden">
        {/* Body */}
        <div className="p-3">
          <h3 className="text-[20px] font-semibold text-[#000000] font-outfit mb-3">Delete Your Account?</h3>
          <p className="text-[#686262] text-[14px] font-medium font-outfit leading-relaxed">
            This action will permanently remove your profile, listings, bookings history, and earnings data from KOOJI. This cannot be reversed.
          </p>
        </div>

        <div className="p-8">
          <div>
            <h4 className="text-[14px] font-medium text-[#000000] font-outfit mb-4">Reason for Deletion</h4>
            <div className="space-y-3">
              {DELETE_REASONS.map((reason) => {
                const isChecked = selectedReasons.includes(reason);
                return (
                  <label key={reason} className="flex items-center gap-3 cursor-pointer">
                    <div
                      onClick={() => toggleReason(reason)}
                      className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-all shrink-0 cursor-pointer ${isChecked ? "bg-[#FF3A44] border-[#FF3A44]" : "border-gray-300 bg-white"
                        }`}
                    >
                      {isChecked && (
                        <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-[14px] font-medium font-outfit ${isChecked ? "text-[#000000]" : "text-[#686262]"}`}>{reason}</span>
                  </label>
                );
              })}
            </div>

            {showTextarea && (
              <div className="mt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[14px] font-medium text-[#000000] font-outfit">Reason</span>
                  <span className="text-[12px] text-[#A39E9E] font-outfit">(Character Limit: 250)</span>
                </div>
                <textarea
                  value={otherReason}
                  onChange={e => setOtherReason(e.target.value.slice(0, 250))}
                  rows={4}
                  placeholder="Please share your reason."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[14px] font-outfit text-[#000000] placeholder:text-[#D4D0D0] focus:outline-none focus:border-[#FF3A44] resize-none transition-all"
                />
              </div>
            )}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="p-4 grid grid-cols-2 gap-2  border-gray-100">
          <button
            type="button"
            onClick={onClose}
            className="py-4 px-4 text-[16px] font-medium rounded-md font-outfit text-[#000000] hover:bg-[#F5F3F4] transition-all border border-[#F5F3F4]"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={selectedReasons.length === 0}
            onClick={() => setStep(2)}
            className="py-4 text-[16px] font-medium font-outfit rounded-md text-white bg-[#C5161D] hover:bg-[#B01820] transition-all disabled:opacity-50"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const AccountSecurityForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      {showModal && <ChangePasswordModal onClose={() => setShowModal(false)} />}
      {showDeleteModal && <DeleteAccountModal onClose={() => setShowDeleteModal(false)} />}

      <div className="flex-1 max-w-[800px]">
        <div className="mb-8">
          <h2 className="text-[20px] font-semibold text-[#000000] font-outfit mb-3">Account & Security</h2>
          <p className="text-[#686262] text-[14px] font-medium font-outfit leading-relaxed">
            Manage your login credentials and protect your account from unauthorized access. Keep your password updated and review account activity regularly for better security.
          </p>
        </div>

        <div className="space-y-10">
          {/* Change Password Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-[18px] font-semibold text-[#000000] font-outfit">Change Password</h3>
              <p className="text-[#686262] text-[14px] font-medium font-outfit leading-relaxed max-w-[700px]">
                Update your password to keep your account secure. We recommend using a strong, unique password that you don&apos;t use elsewhere.
              </p>
            </div>

            <button
              type="button"
              className="bg-[#FFF5F5] text-[#FF3A44] px-6 py-3 rounded-md text-[16px] font-semibold font-outfit hover:bg-[#FFEBEB] transition-all"
              onClick={() => setShowModal(true)}
            >
              Change Password
            </button>
          </div>

          <div className="w-full h-px bg-[#F0EFEF]" />

          {/* Delete Account Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-[18px] font-semibold text-[#000000] font-outfit">Delete Account</h3>
              <p className="text-[#686262] text-[14px] font-medium font-outfit leading-relaxed">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
            </div>

            <button
              type="button"
              className="bg-[#FFF5F5] text-[#FF3A44] px-6 py-3 rounded-md text-[16px] font-semibold font-outfit hover:bg-[#FFEBEB] transition-all"
              onClick={() => setShowDeleteModal(true)}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSecurityForm;
