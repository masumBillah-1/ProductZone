'use client';

import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-background-dark/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Powerful Key Features</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Efficiency meets sophistication. Our tools are designed to streamline your workflow without complexity.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:bg-primary/5 transition-all"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="material-symbols-outlined">{feature.icon}</span>
              </motion.div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
