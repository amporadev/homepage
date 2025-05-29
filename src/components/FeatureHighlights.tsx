
const features = [
  {
    title: 'Merch Creator',
    description: 'Drop products in under 60 seconds',
    icon: '🎨'
  },
  {
    title: 'Record Store',
    description: 'Distribute vinyl and CDs',
    icon: '💿'
  },
  {
    title: 'Campaign Tools',
    description: 'Run ads from the same dashboard',
    icon: '🚀'
  }
];

const FeatureHighlights = () => {
  return (
    <section className="py-24 bg-white font-exo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Feature Highlights
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
