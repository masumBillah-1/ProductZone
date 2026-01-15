export default function Testimonials() {
  const testimonials = [
    {
      quote: "The interface is so clean and inviting. It has completely transformed how our team manages digital assets.",
      name: "Sarah Jenkins",
      role: "Product Designer",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7OuX20qJNit9LDZAeeAVn8BzM5_01Gkoyd72xiYGeW9p26gaCrUDkQ6aNrY6ofbEozvlaOanLQtq_eMUjne4kuGxn_1R8NHdANyQebM8-QIstANWr6vmtStW_UCY65ajJjIaqap-ZDeWaU_R5H_zTl0dcCL0pPyGKS3v09kBznF5XgHsSrQGsiHUigAxXRJisEyJ5NXTs0U55kRJpg1OWuOXcjMAon747IY06t0ORNgwHlx3HAnFQy04sRsgpJB-frTx0ZDbe0C6g"
    },
    {
      quote: "Finally a platform that understands efficiency. The real-time analytics have been a game changer for us.",
      name: "Michael Chen",
      role: "CTO @ FlowState",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK-3fLjo20YYEoDXIUQ_xSifr2FbWzpPWtBi9qeVD4n5dSxhf9b0se28j4HwZKeqs5GFCQGVP2kseI6su9nxZP8uhwZXAHVGbf55eCToZBWLhfWSjCuMVgxsGG-ijrPQWqHhwNHCDFzukKzAHyaBr31RyC3hblq5hHe0VeRv-Of4c0hBb7A_wB57aLIQNCeQ5hQ3-lk2ZT5VT_iGhvMl77PHn95-bXK9buLIBAwV4A9ytxZ8HxSMCetRqhYFbGjjANmp_h04fTFFIt"
    },
    {
      quote: "The customer support is incredible. They actually listen to feedback and implement features fast.",
      name: "Elena Rodriguez",
      role: "Freelance Curator",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdC1mdbpI9fwkHd-mSVxR_1TSW03KV4zgqwhjal32mbjquDubL2nAfsuf3w0LxYSBH0K1YG2MV9pceBVMzLDj9P4toWMFrqS3SYkZV6fmkMCl_tuLMWH6StRO87pGMNfgcSWXDvNfc2aPE1jZuP4i_IvUPiTNfjdLvXGJh4N--SGoRAGIcwUfJJiPvRBh7hx3KAakoqs38qF_OjXUHtn0u4z-5NstgCqpj_8C0TQt-99BXQykf-srG9bOE8nIH4lOgS7R-YUMkDjFy"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted by over 10,000+ users</h2>
          <p className="text-slate-500">Don't just take our word for it—see what the community says.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background-light dark:bg-slate-800/50 p-8 rounded-3xl relative">
              <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-6 right-6">format_quote</span>
              <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div 
                  className="size-12 rounded-full bg-slate-300" 
                  style={{backgroundImage: `url('${testimonial.avatar}')`, backgroundSize: 'cover'}}
                ></div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
