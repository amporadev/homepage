
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
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-ocean-blue to-electric-purple p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-white text-2xl font-bold">Welcome back, Artist</h3>
                  <p className="text-white/80">Here's your music performance today</p>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <div className="text-white text-sm">Total Earnings</div>
                  <div className="text-white text-xl font-bold">$2,847.32</div>
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Real-time Earnings */}
                <div className="bg-gradient-to-br from-ocean-blue to-electric-purple rounded-xl p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/40 rounded"></div>
                  </div>
                  <h4 className="font-semibold mb-2">Real-time Earnings</h4>
                  <p className="text-white/80 text-sm">Track your revenue</p>
                </div>
                
                {/* Merch Builder */}
                <div className="bg-gradient-to-br from-electric-purple to-ocean-blue rounded-xl p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/40 rounded"></div>
                  </div>
                  <h4 className="font-semibold mb-2">Merch Builder</h4>
                  <p className="text-white/80 text-sm">Create products</p>
                </div>
                
                {/* Campaign Launcher */}
                <div className="bg-gradient-to-br from-ocean-blue to-electric-purple rounded-xl p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/40 rounded"></div>
                  </div>
                  <h4 className="font-semibold mb-2">Campaign Launcher</h4>
                  <p className="text-white/80 text-sm">Run marketing</p>
                </div>
                
                {/* Profile Editor */}
                <div className="bg-gradient-to-br from-electric-purple to-ocean-blue rounded-xl p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/40 rounded"></div>
                  </div>
                  <h4 className="font-semibold mb-2">Profile Editor</h4>
                  <p className="text-white/80 text-sm">Manage profiles</p>
                </div>
              </div>
              
              {/* Chart Area */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-gray-900 font-semibold mb-4">Revenue Analytics</h4>
                <div className="h-32 bg-white rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Chart placeholder</span>
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
