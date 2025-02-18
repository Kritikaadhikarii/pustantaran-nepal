import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SocialCarousel = () => {
  return (
    <div className="w-full max-w-[500px] mx-auto transform transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center justify-center h-[500px] bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
        <span className="absolute -top-4 right-8 w-8 h-8 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full blur-sm opacity-80"></span>
        <iframe
          src="https://www.instagram.com/routineofnepalbanda/embed"
          width="500"
          height="450"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default SocialCarousel;
