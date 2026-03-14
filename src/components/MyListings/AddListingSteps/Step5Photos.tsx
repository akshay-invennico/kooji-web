/* eslint-disable @typescript-eslint/no-explicit-any */"use client";

import React from "react";
import { Info } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";
import Button from "@/components/ui/button/Button";

interface Step5PhotosProps {
  formik: any;
}

const Step5Photos: React.FC<Step5PhotosProps> = ({
  formik,
}) => {
  const { values, setFieldValue, errors, touched } = formik;
  const { coverPhoto, galleryPhotos } = values;

  const handleImageUpload = (index: number | 'cover', e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        if (index === 'cover') {
          setFieldValue("coverPhoto", base64String);
        } else {
          const newPhotos = [...galleryPhotos];
          newPhotos[index] = base64String;
          setFieldValue("galleryPhotos", newPhotos);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number | 'cover') => {
    if (index === 'cover') {
      setFieldValue("coverPhoto", null);
    } else {
      const newPhotos = [...galleryPhotos];
      newPhotos[index] = null;
      setFieldValue("galleryPhotos", newPhotos);
    }
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[24px] font-semibold text-[#000000] mb-5 font-outfit">Photos & Media</h2>

      <div className="space-y-10">
        {/* Cover Photo */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-[14px] font-medium text-[#000000]">Cover Photo</label>
            <div className="flex items-center text-gray-400 text-[13px] gap-1.5 font-medium">
              <Icon component={Info} size="xs" />
              <span>Required</span>
            </div>
          </div>

          <div
            className={`relative w-full h-[220px] rounded-md border border-dashed bg-white transition-all flex flex-col items-center justify-center cursor-pointer group overflow-hidden ${coverPhoto ? 'border-transparent' : (touched.coverPhoto && errors.coverPhoto ? 'border-red-500 bg-red-50' : 'border-[#F0EFEF]')}`}
            onClick={() => document.getElementById('cover-upload')?.click()}
          >
            {coverPhoto ? (
              <>
                <img src={coverPhoto} alt="Cover" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    variant="primary"
                    className="bg-white text-gray-900 font-bold px-6 py-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage('cover');
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </>
            ) : (
              <>
                <img src="/icons/imageIcon.svg" alt="add photo" className="w-8 h-8 mb-3" />
                <span className={`text-[15px] font-bold ${touched.coverPhoto && errors.coverPhoto ? 'text-red-500' : 'text-[#F0EFEF]'}`}>Add Cover Photo</span>
              </>
            )}
            <input
              id="cover-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload('cover', e)}
            />
          </div>
          {touched.coverPhoto && errors.coverPhoto && (
            <p className="mt-2 text-xs text-red-500 font-medium">{errors.coverPhoto}</p>
          )}
        </div>

        {/* Gallery Photos */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-[14px] font-medium text-[#000000]">Gallery Photos/Video</label>
            <div className="flex items-center text-gray-400 text-[13px] gap-1.5 font-medium">
              <Icon component={Info} size="xs" />
              <span>Min 04 Photos Required, Max 01 Video Upload</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {galleryPhotos.map((photo: string | null, index: number) => (
              <div
                key={index}
                className={`relative w-full h-[180px] rounded-md border border-dashed border-[#F0EFEF] bg-white transition-all flex flex-col items-center justify-center cursor-pointer group overflow-hidden ${photo ? 'border-transparent' : ''}`}
                onClick={() => document.getElementById(`gallery-upload-${index}`)?.click()}
              >
                {photo ? (
                  <>
                    <img src={photo} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        variant="primary"
                        className="bg-white text-gray-900 font-bold px-6 py-2 rounded-md"
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          removeImage(index);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <img src="/icons/imageIcon.svg" alt="add photo" className="w-6 h-6 mb-2" />
                    <span className="text-[15px] font-bold text-[#F0EFEF]">Add Photo</span>
                  </>
                )}
                <input
                  id={`gallery-upload-${index}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(index, e)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5Photos;
