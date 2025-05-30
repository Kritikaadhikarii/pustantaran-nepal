import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules"
import { ExternalLink, Newspaper, Calendar, ArrowRight } from "lucide-react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

const SocialCarousel = () => {
  const newsLinks = [
    {
      url: "https://www.facebook.com/share/p/18xmrnDxAT/",
      title: "Latest Updates on Facebook",
      category: "Social Media",
      date: "Recent",
    },
    {
      url: "https://nepalekhabar.com/2025/05/116119?fbclid=IwY2xjawKTEexleHRuA2FlbQIxMABicmlkETFyaUwyZHNJQzhwZVF3aWlyAR4RercWa8fgYIUxvMRQSWxbwEmqWCpOSHbFkzC699JCwjrQRfWbCR60lVc71A_aem_1-ozcqT3FQsuPr3Ly6AvLg",
      title: "Pustantaran Nepal and Incredible Mountain Join Hands to Promote Dignified Aging",
      category: "Partnership",
      date: "Aug 2023",
    },
    {
      url: "https://nepalekhabar.com/2025/05/115980",
      title: "Pustantaran Nepal and Naulin Sports Villa Join Hands to Promote Dignified Aging",
      category: "Partnership",
      date: "Sep 2023",
    },
    {
      url: "https://nepalekhabar.com/2023/09/493932",
      title: "Over 50 Senior Citizens Benefit from Free Health Camp by Pustantaran Nepal",
      category: "Health Camp",
      date: "Sep 2023",
    },
    {
      url: "https://www.prabhabonline.com/detail/87737",
      title: "बुढानिलकण्ठको भंगालमा पुस्तान्तरणको स्वास्थ्य शिविर सम्पन्न",
      category: "Health Camp",
      date: "हालै",
    },
    {
      url: "https://kapanonline.com/archives/167782",
      title: "बुढानिलकण्ठ नगरपालिका वडा नं ८ सुन्दरबस्तीमा निशुल्क स्वास्थ्य शिविर सम्पन्न",
      category: "Health Camp",
      date: "हालै",
    },
  ]

  const getCategoryColor = (category) => {
    const colors = {
      "Social Media": "bg-blue-100 text-blue-700",
      Partnership: "bg-green-100 text-green-700",
      "Health Camp": "bg-purple-100 text-purple-700",
      "स्वास्थ्य शिविर": "bg-purple-100 text-purple-700",
      default: "bg-gray-100 text-gray-700",
    }
    return colors[category] || colors.default
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-teal-200 to-blue-300 rounded-full blur-xl opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full blur-xl opacity-30"></div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl shadow-lg">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Latest Updates
              </h3>
            </div>
            <p className="text-gray-600 text-sm">Stay informed with our recent news and announcements</p>
          </div>

          <Swiper
            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-16"
          >
            {newsLinks.map((news, index) => (
              <SwiperSlide key={index}>
                <a href={news.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 h-80 flex flex-col justify-between border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:border-teal-200 relative overflow-hidden">
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category badge */}
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                        {news.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="text-lg font-semibold text-gray-800 leading-tight mb-2 group-hover:text-teal-700 transition-colors line-clamp-4">
                        {news.title}
                      </h4>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-teal-600 font-medium group-hover:text-teal-700 transition-colors">
                        Read more
                      </span>
                      <div className="flex items-center gap-2 text-teal-600 group-hover:text-teal-700 transition-all duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4" />
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-white hover:shadow-xl transition-all duration-300 group">
            <ArrowRight className="w-5 h-5 text-gray-600 rotate-180 group-hover:text-teal-600 transition-colors" />
          </div>
          <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-white hover:shadow-xl transition-all duration-300 group">
            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-teal-600 transition-colors" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: linear-gradient(135deg, #14b8a6, #3b82f6);
          transform: scale(1.2);
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default SocialCarousel
