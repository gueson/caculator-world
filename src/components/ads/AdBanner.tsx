'use client';

interface AdBannerProps {
  position: 'top' | 'bottom';
}

export default function AdBanner({ position }: AdBannerProps) {
  const isTop = position === 'top';

  return (
    <div
      className={`w-full bg-gray-100 flex items-center justify-center border-b border-gray-200 ${
        isTop ? 'pt-2 pb-3' : 'py-3 border-t border-gray-200'
      }`}
    >
      <div
        className={`bg-white ${
          isTop ? 'h-[90px] w-[728px] max-w-full' : 'h-[90px] w-[728px] max-w-full'
        } flex items-center justify-center rounded shadow-sm`}
      >
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-1">Advertisement</p>
          <p className="text-sm text-gray-500">
            {isTop ? 'Banner Ad (728x90)' : 'Banner Ad (728x90)'}
          </p>
          <p className="text-xs text-gray-400 mt-1">AdMob SDK Ready</p>
        </div>
      </div>
    </div>
  );
}
