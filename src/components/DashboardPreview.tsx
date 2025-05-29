
const DashboardPreview = () => {
  return (
    <section className="py-24 bg-gray-50 font-exo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dashboard Preview
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your music career in one place
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop&crop=center"
                alt="Ampora Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Feature Labels */}
          <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
            <div className="text-sm font-semibold text-ocean-blue">Real-time Earnings</div>
          </div>
          
          <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
            <div className="text-sm font-semibold text-electric-purple">Merch Builder</div>
          </div>
          
          <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
            <div className="text-sm font-semibold text-ocean-blue">Campaign Launcher</div>
          </div>
          
          <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg">
            <div className="text-sm font-semibold text-electric-purple">Profile Editor</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
