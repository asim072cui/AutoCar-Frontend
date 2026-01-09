'use client';
import Image from 'next/image';

const BannerImageSection = ({ src = '/image/carss.jpg', alt = 'Banner Image' }) => {
  return (
    <div className="w-full h-auto">
      <Image
        className="w-full lg:h-[40%]"
        src={src}
        width={4000}
        height={200}
        alt={alt}
      />
    </div>
  );
};

export default BannerImageSection;
