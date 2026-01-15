export default function Services() {
  const services = [
    {
      title: "Standard Pro Kit",
      rating: 4.9,
      reviews: 128,
      price: 49,
      description: "Complete set of UI components and templates for startup websites.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAopCeS2H_ZSNhdg3kpplbGtCekZFjY9fUrRG0sWTjOCn-zFYRnrI-wpuUAVCbX_5vCnHDg_0ZEeHaPzf3FY08vMjBPfJRgVmI23oatgKI9DwEnblBOUuyO77yTDY-VvPiP4P7WO8YpBvdwxW-exsjeI9NwqsiwnjROXQn6bfyVyblkFxkGF0wvur0fy1Q8ZhyEGPwgbRqPYg3Xjmo59UA5f2HYVGy8y_BO3S3nHWlmqkGZMK0BKpiUvwRE8eqwcXJvTjZdW2XRNW76",
      featured: false
    },
    {
      title: "Analytics Engine",
      rating: 5.0,
      reviews: 420,
      price: 99,
      description: "Enterprise-grade tracking with machine learning insights built-in.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwGfsYObg4sGEryZr6zCpD5CebcOh5ksRNj7nQe207DK-GiUczHCsh53NGseSZ51BT5DlbT9zkfkLRFROtz0GGelMgbWuKaOLm6HHXMLknvheaxae50IxO7IF6GkOE8x2_EzD9rT626UJVtepXP8ouxEnKLUNrE9hu7iyGaH22gq79KGpj5kW1YYnYCM38gCVYegToePmSz_kQZEhrCXFs6p7WwApC_LiStIXQvqx2kXXeIzBIHAoKgPT-YDrkzUxKUWpMn1641X5s",
      featured: true
    },
    {
      title: "Team Workspace",
      rating: 4.7,
      reviews: 89,
      price: 29,
      description: "Collaborative digital environment for remote-first creative teams.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiHEpCqQAQX3S1HXYfS6SdDKSoyTxBjsiAe-OnXzllsnyFOpUsPQsUan4ge-gvylHl-i2_eZajmrFBk20cYZkmDefBCv1auUdiLEaTX71oNiBgc92Dz6zca8ASj_TIznzYWgS4vTIFKpmSsG3deRkOmLqZnXpxw5rRn4y53Mugq-b_u2EV3hgKd8oWIrFa3S_UfXbgdxcKAtEJHTOQfctYPWYg2tBK9OQiEm6AExbzv75auw-e-Sgp8H5WQGkZiLXMGmkpaSdcJVB9",
      featured: false
    }
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Featured Services</h2>
            <p className="text-slate-500">Discover our most popular premium offerings.</p>
          </div>
          <a className="hidden sm:flex items-center gap-2 text-primary font-bold" href="#">
            View All Items <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 ${service.featured ? 'border-2 border-primary' : ''}`}
            >
              <div className="relative h-56 bg-center bg-cover" style={{backgroundImage: `url('${service.image}')`}}>
                {service.featured && (
                  <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    Best Seller
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-xl mb-1">{service.title}</h4>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <span className="material-symbols-outlined text-sm fill-1">star</span>
                      <span className="text-sm font-bold">{service.rating}</span>
                      <span className="text-slate-400 text-xs font-normal">({service.reviews} reviews)</span>
                    </div>
                  </div>
                  <span className="text-primary font-black text-xl">${service.price}</span>
                </div>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">{service.description}</p>
                <button className={`w-full py-3 rounded-xl font-bold transition-colors ${
                  service.featured 
                    ? 'bg-primary text-white hover:opacity-90' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-primary hover:text-white'
                }`}>
                  {service.featured ? 'Add to Cart' : 'View Details'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
