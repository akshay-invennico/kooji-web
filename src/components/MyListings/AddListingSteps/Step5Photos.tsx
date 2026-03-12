"use client";

import React from "react";
import { Info, ImagePlus } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";
import Button from "@/components/ui/button/Button";

interface Step5PhotosProps {
  coverPhoto: string | null;
  galleryPhotos: (string | null)[];
  handleImageUpload: (index: number | 'cover', e: React.ChangeEvent<HTMLInputElement>) => void;
  removeImage: (index: number | 'cover') => void;
}

const Step5Photos: React.FC<Step5PhotosProps> = ({
  coverPhoto,
  galleryPhotos,
  handleImageUpload,
  removeImage,
}) => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <h2 className="text-[28px] font-bold text-gray-900 mb-10 font-sans">Photos & Media</h2>

      <div className="space-y-10">
        {/* Cover Photo */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="text-[15px] font-medium text-gray-900">Cover Photo</label>
            <div className="flex items-center text-gray-400 text-[13px] gap-1.5 font-medium">
              <Icon component={Info} size="xs" />
              <span>Required</span>
            </div>
          </div>

          <div 
            className={`relative w-full h-[220px] rounded-[18px] border-2 border-dashed border-gray-200 bg-white hover:bg-gray-50/50 transition-all flex flex-col items-center justify-center cursor-pointer group overflow-hidden ${coverPhoto ? 'border-transparent' : ''}`}
            onClick={() => document.getElementById('cover-upload')?.click()}
          >
            {coverPhoto ? (
              <>
                <img src={coverPhoto} alt="Cover" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button 
                    variant="primary" 
                    className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-6 py-2 rounded-lg"
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
                <Icon component={ImagePlus} size="lg" className="text-red-500 mb-3" strokeWidth={1.5} />
                <span className="text-[15px] font-bold text-gray-600">Add Cover Photo</span>
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
        </div>

        {/* Gallery Photos */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <label className="text-[15px] font-medium text-gray-900">Gallery Photos/Video</label>
            <div className="flex items-center text-gray-400 text-[13px] gap-1.5 font-medium">
              <Icon component={Info} size="xs" />
              <span>Min 04 Photos Required, Max 01 Video Upload</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {galleryPhotos.map((photo, index) => (
              <div 
                key={index}
                className={`relative w-full h-[180px] rounded-[18px] border-2 border-dashed border-gray-200 bg-white hover:bg-gray-50/50 transition-all flex flex-col items-center justify-center cursor-pointer group overflow-hidden ${photo ? 'border-transparent' : ''}`}
                onClick={() => document.getElementById(`gallery-upload-${index}`)?.click()}
              >
                {photo ? (
                  <>
                    <img src={photo} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button 
                        variant="primary" 
                        className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-6 py-2 rounded-lg"
                        onClick={(e) => {
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
                    <Icon component={ImagePlus} size="lg" className="text-red-500 mb-2" strokeWidth={1.5} />
                    <span className="text-[15px] font-bold text-gray-600">Add Photo</span>
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
