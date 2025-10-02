import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  videoFile: string;
  description: string;
  keywords: string[];
}

interface VideoCardProps {
  service: Service;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ service, index }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleVideoLoad = () => {
    console.log("Video loaded:", service.title);
    setIsLoaded(true);
  };

  const handleVideoError = (error: any) => {
    console.error("Video error for", service.title, ":", error);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-4"
    >
      {/* Video Bento Box */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          className="w-full h-auto object-contain bg-white"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        >
          <source src={`/videos/${service.videoFile}`} type="video/mp4" />
        </video>
      </div>

      {/* Content Bento Box */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-[#41444B] mb-4">
          {service.title}
        </h3>
        <p className="text-[#52575D] text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {service.keywords.map((keyword, idx) => (
            <span key={idx} className="text-xs bg-[#F6F4E6] text-[#41444B] px-3 py-1 rounded-md">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const VideoServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: "Bag Repair",
      videoFile: "bags repair.mp4",
      description: "Professional leather and fabric bag restoration services in Palmer Heights, PA. We repair handles, zippers, stitching, and structural damage on handbags, backpacks, and luxury purses. Our expert craftsmen use premium materials and traditional techniques to restore your favorite bags to like-new condition.",
      keywords: ["bag repair", "handbag restoration", "zipper repair", "leather bags"]
    },
    {
      title: "Custom Orders",
      videoFile: "custom orders.mp4", 
      description: "Bespoke shoe and leather goods crafting services tailored to your exact specifications. From custom orthotics and shoe modifications to personalized watch straps and unique leather accessories, we create one-of-a-kind pieces that perfectly match your style and functional needs.",
      keywords: ["custom shoes", "bespoke leather", "personalized accessories", "made to order"]
    },
    {
      title: "Eyeglass Repair",
      videoFile: "eyeglass repair.mp4",
      description: "Fast and reliable eyewear repair services including frame welding, lens replacement, nose pad adjustment, and temple repair. We work with all frame materials - metal, plastic, titanium, and designer frames. Most repairs completed while you wait at our Palmer Heights location.",
      keywords: ["eyeglass repair", "frame repair", "lens replacement", "glasses fix"]
    },
    {
      title: "Sneaker Cleaning", 
      videoFile: "sneaker cleaning.mp4",
      description: "Professional deep cleaning and restoration for all types of athletic footwear. Our specialized cleaning process removes dirt, stains, and odors while preserving the integrity of premium materials like suede, nubuck, and mesh. We restore your favorite sneakers to pristine condition.",
      keywords: ["sneaker cleaning", "shoe cleaning", "athletic shoe care", "sneaker restoration"]
    },
    {
      title: "Watch Repair",
      videoFile: "watch repair.mp4", 
      description: "Expert timepiece repair and maintenance services for mechanical, automatic, and quartz watches. We handle battery replacement, movement cleaning, crystal replacement, band repair, and water resistance testing. Certified repair for luxury and vintage watch brands.",
      keywords: ["watch repair", "timepiece service", "battery replacement", "watch maintenance"]
    },
    {
      title: "Waterproofing Leather",
      videoFile: "waterproofing leather.mp4",
      description: "Professional leather protection and waterproofing treatments to extend the life of your shoes, boots, and leather goods. We apply premium protective coatings that repel water and stains while maintaining the natural look and feel of your leather items.",
      keywords: ["leather waterproofing", "shoe protection", "leather treatment", "weatherproofing"]
    }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-[#F6F4E6]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#41444B] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Services
          </h2>
          <p className="text-xl text-[#52575D] max-w-3xl mx-auto">
            Quality craftsmanship and reliable service for all your repair needs
          </p>
        </motion.div>

        {/* Bento Grid - 1 col mobile → 3 col tablet/desktop for 3×2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <VideoCard 
              key={service.title}
              service={service} 
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button 
            className="bg-[#FDDB3A] hover:bg-[#52575D] text-[#41444B] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Estimate
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoServicesSection;