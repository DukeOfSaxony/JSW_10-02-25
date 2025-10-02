import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';


interface TestimonialProps {
  text: string;
  name: string;
  image: string;
  delay: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, name, image, delay }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 relative scale-in ${delay}`}>
    <div className="absolute -top-4 left-6 text-[#FDDB3A]" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
      </svg>
    </div>
    <div className="pt-6">
      <p className="font-body text-[#52575D] mb-6 italic">{text}</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-4">
          <p className="font-heading font-semibold text-[#41444B]">{name}</p>
          <div className="flex text-[#FDDB3A]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  const testimonials = [
    {
      text: "\"Got a new watch strap and battery replacement in under 4 minutes flat. Highly recommend!\"",
      name: "Sarah Rosen",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      delay: ""
    },
    {
      text: "\"Fixed my broken, scuffed heels and gave both shoes a shine in less than 20 minutes for $34. Truly doesn't matter how brusque the owner is, keep this place open.\"",
      name: "Avery Gott",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      delay: "stagger-delay-1"
    },
    {
      text: "\"I've had three pairs of shoes worked on here and all turned out great. They added vibram soles to a pair of heels, Gucci loafers and dress flats. I've also had a Brighton belt repaired here. No frills, good work!\"",
      name: "Callahan McBride",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      delay: "stagger-delay-2"
    },
    {
      text: "\"Great quality shoe repair- took my 6 year old pumps and restored them to brand new. Used Vibram soles and repairs are undetectable. If you have good quality shoes that you care about, they will do a great job.\"",
      name: "Jennifer Hsiung",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      delay: "stagger-delay-3"
    }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-[#41444B] mb-4 fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
            What Our Customers Say
          </h2>
          <p className="font-body text-[#52575D] max-w-2xl mx-auto fade-in stagger-delay-1">
            Don't just take our word for it. Here's what our loyal customers have to say about our craftsmanship and service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              image={testimonial.image}
              delay={testimonial.delay}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
