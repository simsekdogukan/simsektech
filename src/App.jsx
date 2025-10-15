import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { 
  Zap, 
  Cpu, 
  Rocket, 
  Shield, 
  Sparkles, 
  ArrowRight, 
  Mail,
  Car,
  Factory,
  Layers,
  Code,
  ChevronDown
} from 'lucide-react'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const services = [
    {
      icon: Car,
      title: "Mobility Çözümleri",
      description: "Akıllı ulaşım sistemleri ve gelecek nesil mobilite teknolojileri geliştiriyoruz.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Factory,
      title: "Üretim Teknolojileri",
      description: "Endüstri 4.0 çözümleri ile üretim süreçlerinizi optimize ediyoruz.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Layers,
      title: "Özel Çözümler",
      description: "İhtiyaçlarınıza özel, ölçeklenebilir ve yenilikçi teknoloji çözümleri sunuyoruz.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Code,
      title: "Yazılım Geliştirme",
      description: "Modern teknolojilerle güçlü, güvenli ve performanslı yazılımlar üretiyoruz.",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const features = [
    {
      icon: Zap,
      title: "Hızlı Teslimat",
      description: "Projelerinizi şimşek hızıyla hayata geçiriyoruz"
    },
    {
      icon: Cpu,
      title: "İleri Teknoloji",
      description: "En güncel teknolojileri kullanıyoruz"
    },
    {
      icon: Shield,
      title: "Güvenilir",
      description: "Güvenlik ve kalite önceliğimiz"
    },
    {
      icon: Sparkles,
      title: "Yenilikçi",
      description: "Sürekli yenilik ve gelişim odaklıyız"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated background gradient */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.15), transparent 80%)`
        }}
      />

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
        style={{ opacity, scale }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div
          className="relative z-10 text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo/Icon */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-block"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 rounded-2xl blur-xl opacity-50"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative bg-card p-6 rounded-2xl border border-border">
                <Zap className="w-16 h-16 text-cyan-400" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gradient">Şimşek Tech</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light"
          >
            Geleceği Şimşek Hızıyla İnşa Ediyoruz
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Mobility çözümlerinden üretime kadar, her alanda özel teknoloji çözümleri geliştiriyoruz.
            Yenilikçi yaklaşımımız ve ileri teknolojilerimizle işinizi bir üst seviyeye taşıyoruz.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              Hizmetlerimizi Keşfedin
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-card transition-all duration-300"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              İletişime Geçin
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block text-muted-foreground cursor-pointer"
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Farklı sektörlerde özelleştirilmiş teknoloji çözümleri sunuyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                  style={{
                    background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`
                  }}
                />
                <div className="glass-effect rounded-2xl p-8 h-full border border-border hover:border-primary/50 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Neden <span className="text-gradient">Şimşek Tech</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Teknoloji dünyasında fark yaratan özellikleri ile öne çıkıyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <motion.div
                  className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 border border-primary/30"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-orange-500/20" />
            <div className="absolute inset-0 lightning-effect" />
            <div className="relative glass-effect p-12 text-center border-2 border-primary/30">
              <Rocket className="w-16 h-16 mx-auto mb-6 text-primary animate-float" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Projenizi Hayata Geçirmeye Hazır mısınız?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Teknoloji çözümleriniz için bizimle iletişime geçin. Uzman ekibimiz, 
                projelerinizi en kısa sürede hayata geçirmek için hazır.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all duration-300"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Hemen Başlayın
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">İletişime Geçin</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Projeleriniz ve sorularınız için bizimle iletişime geçebilirsiniz
            </p>
            <motion.a
              href="mailto:info@simsektech.com"
              className="inline-flex items-center gap-3 text-2xl font-semibold text-primary hover:text-primary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-8 h-8" />
              info@simsektech.com
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold text-gradient">Şimşek Tech</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 Şimşek Tech. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Geleceği şimşek hızıyla inşa ediyoruz
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

