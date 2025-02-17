import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SocialCarousel = () => {
  return (
    <div className="w-full max-w-[500px] mx-auto">
      <div className="flex items-center justify-center h-[500px] bg-white rounded-lg shadow-lg p-4">
        <iframe
          src="https://www.instagram.com/routineofnepalbanda/embed"
          width="500"
          height="450"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default SocialCarousel;
