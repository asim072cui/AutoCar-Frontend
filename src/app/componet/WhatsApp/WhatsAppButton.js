'use client';

const WhatsAppButton = () => {
  const phoneNumber = '923030997303'; // ✅ apna WhatsApp number (without +)
  const message = 'Hello! I need support.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
<>
  {/* Wrapper */}
  <div className="fixed bottom-6 right-6 z-50 group">
    
    {/* Tooltip (hidden by default, show on hover) */}
    <div className="absolute bottom-16 right-0 hidden group-hover:block">
      <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-bounce">
        We are available! Click here to chat
      </div>
    </div>

  
   <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="
    relative
    bg-gradient-to-tr from-green-500 to-emerald-600
    hover:from-green-600 hover:to-emerald-700
    text-white
    p-4
    rounded-full
    shadow-lg
    hover:shadow-2xl
    transition-all
    duration-300
    ease-out
    flex
    items-center
    justify-center
    hover:scale-110
  "
>
  {/* Glow Ring */}
  <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 blur-xl animate-pulse"></span>

  {/* Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
    fill="currentColor"
    className="w-7 h-7 relative z-10"
  >
    <path d="M19.11 17.13c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02s-.48.07-.73.34c-.25.27-.96.94-.96 2.29s.99 2.66 1.13 2.84c.14.18 1.95 2.98 4.73 4.18.66.29 1.17.46 1.57.59.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
  </svg>
</a>


  </div>
</>

  );
};

export default WhatsAppButton;
