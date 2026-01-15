export default function Features() {
  const features = [
    {
      icon: "cable",
      title: "Seamless Integration",
      description: "Connect your existing tools effortlessly with our open-source API ecosystem."
    },
    {
      icon: "brush",
      title: "Intuitive Design",
      description: "Experience a beautiful interface crafted for maximum focus and minimal friction."
    },
    {
      icon: "insights",
      title: "Real-time Analytics",
      description: "Track your progress live with interactive charts and automated reporting."
    },
    {
      icon: "verified_user",
      title: "Expert Curation",
      description: "Hand-picked items and templates curated by industry professionals."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-background-dark/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Powerful Key Features</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Efficiency meets sophistication. Our tools are designed to streamline your workflow without complexity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:bg-primary/5 transition-all">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
