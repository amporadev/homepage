
const testimonials = [
  {
    quote: "Ampora changed everything for me. I finally keep 100% of my royalties and have complete control over my music.",
    artist: "Maya Rodriguez",
    genre: "Indie Pop"
  },
  {
    quote: "The merch tools are incredible. I launched my vinyl collection in minutes, not months.",
    artist: "DJ Nexus",
    genre: "Electronic"
  },
  {
    quote: "Best decision I ever made. Ampora gives artists the power that labels used to hoard.",
    artist: "The Midnight Collective",
    genre: "Alternative Rock"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gray-50 font-exo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Artists Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.artist}</div>
                <div className="text-gray-600">{testimonial.genre}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
