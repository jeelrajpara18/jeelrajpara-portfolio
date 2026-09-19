'use client';
const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117498.41160350711!2d72.49363065!3d23.022505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd11266e70ebc!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

export function MapCard() {
  return (
    <div className="relative w-full h-full min-h-[220px] rounded-3xl overflow-hidden flex flex-col justify-between p-3 select-none group transition-colors duration-300">
      {/* Real Google Maps Embed iframe */}
      <iframe
        src={GOOGLE_MAPS_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full object-cover pointer-events-auto rounded-3xl opacity-90 contrast-[1.05]"
      />
      <div className="relative z-20 self-center my-auto flex items-center justify-center pointer-events-none">
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-cyan-400/35 dark:bg-cyan-500/30 backdrop-blur-[1px] border border-cyan-300/70 dark:border-cyan-400/50 shadow-[0_0_35px_rgba(6,182,212,0.45)] flex items-center justify-center relative transition-transform group-hover:scale-105">
          <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-4xl drop-shadow-md">
            <img
              src="/memoji.png"
              alt="Location Memoji"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerText = '✌️';
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}