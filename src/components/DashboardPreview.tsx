
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
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-96">
              {/* Real-time Earnings */}
              <div className="bg-gradient-to-br from-ocean-blue to-electric-purple rounded-xl p-6 text-white flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold">Real-time Earnings</h3>
                </div>
              </div>
              
              {/* Merch Builder */}
              <div className="bg-gradient-to-br from-electric-purple to-ocean-blue rounded-xl p-6 text-white flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold">Merch Builder</h3>
                </div>
              </div>
              
              {/* Campaign Launcher */}
              <div className="bg-gradient-to-br from-ocean-blue to-electric-purple rounded-xl p-6 text-white flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold">Campaign Launcher</h3>
                </div>
              </div>
              
              {/* Profile Editor */}
              <div className="bg-gradient-to-br from-electric-purple to-ocean-blue rounded-xl p-6 text-white flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold">Profile Editor</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
