/**
 * Home Page - The Last Act of Love (English Version)
 * Design: Noir Cinematographic
 * 
 * Features:
 * - #1 Best Seller badge
 * - Romance of the Year award
 * - Literary Awards recognition
 * - New Amazon link for English version
 */

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, ChevronDown, ExternalLink, Star, Award, Trophy, Sparkles } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <span className="font-accent text-sm tracking-[0.3em] text-primary">PABLO</span>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("synopsis")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Synopsis</button>
            <button onClick={() => scrollToSection("author")} className="text-sm text-muted-foreground hover:text-primary transition-colors">The Author</button>
            <button onClick={() => scrollToSection("reviews")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Reviews</button>
            <Button
              onClick={() => window.open("https://www.amazon.com/dp/B0GKXF6B6V", "_blank")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-accent text-xs tracking-widest"
            >
              BUY NOW
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center film-grain">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "linear-gradient(to bottom, rgba(10,10,10,0.7), rgba(10,10,10,0.9))" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

        <div className="container relative z-10 pt-20">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Book Cover */}
            <motion.div
              className="flex justify-center lg:justify-end order-1 lg:order-2"
              variants={fadeInUp}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
                <img
                  src="/images/book-cover.jpg"
                  alt="The Last Act of Love - Book Cover"
                  className="relative w-64 md:w-80 lg:w-96 rounded-lg shadow-2xl glow-gold"
                />
                {/* Award Badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 badge-shine"
                  variants={scaleIn}
                >
                  <Trophy className="w-3 h-3" />
                  #1 BEST SELLER
                </motion.div>
                <motion.div 
                  className="absolute -bottom-2 -left-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                  variants={scaleIn}
                >
                  <Award className="w-3 h-3" />
                  ROMANCE OF THE YEAR
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              className="text-center lg:text-left order-2 lg:order-1 space-y-8"
              variants={staggerContainer}
            >
              {/* Now in English Badge */}
              <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-sm font-medium tracking-wide">NOW AVAILABLE IN ENGLISH</span>
                </div>
              </motion.div>

              <motion.p
                className="font-accent text-primary text-sm tracking-[0.4em]"
                variants={fadeInUp}
              >
                A MEMOIR
              </motion.p>

              <motion.h1
                className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                variants={fadeInUp}
              >
                The Last Act<br />
                <span className="text-gold-gradient">of Love</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-muted-foreground font-light italic"
                variants={fadeInUp}
              >
                "This is the story of how I found her.<br />
                And how I erased her."
              </motion.p>

              {/* Awards Row */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-4"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-2 bg-card/50 border border-border px-4 py-2 rounded-lg">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-sm text-muted-foreground">Literary Award Winner 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 border border-border px-4 py-2 rounded-lg">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="text-sm text-muted-foreground">Top 1 in Romance</span>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={fadeInUp}
              >
                <Button
                  size="lg"
                  onClick={() => window.open("https://www.amazon.com/dp/B0GKXF6B6V", "_blank")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-accent text-sm tracking-widest px-8 py-6"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  GET YOUR COPY ON AMAZON
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection("synopsis")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic text-foreground/90 leading-relaxed">
              "What if the villain of your love story was you?"
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Synopsis Section */}
      <section id="synopsis" className="py-24 relative">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <p className="font-accent text-primary text-sm tracking-[0.4em] mb-4">ABOUT THE BOOK</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">A Brutal Confession</h2>
            </motion.div>

            <motion.div className="space-y-6 text-lg text-muted-foreground leading-relaxed" variants={fadeInUp}>
              <p>
                Pablo Almeida Coelho had it all: the love of an incredible woman, wedding plans, a bright future ahead.
                <strong className="text-foreground"> Until his own toxic behavior destroyed everything.</strong>
              </p>

              <p>
                In this autobiographical account, Pablo exposes without filters how pathological jealousy,
                insecurity, and the need for control transformed the relationship of his dreams into a nightmare.
                He doesn't hide behind excuses. He doesn't seek your pity.
                He simply tells the truth — <em className="text-primary">even when that truth makes him look like a monster.</em>
              </p>

              <p>
                This is not a self-help book. This is a raw, unflinching look at how love can become obsession,
                how care can become control, and how the person you hurt the most might be the one you love the most.
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-8 mt-16" variants={staggerContainer}>
              <motion.div
                className="bg-card border border-border rounded-lg p-8"
                variants={fadeInUp}
              >
                <h3 className="font-display text-xl font-semibold mb-4 text-primary">What you'll discover</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    The anatomy of love that transforms into prison
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    The warning signs we all ignore
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    The moment when jealousy crosses the line of obsession
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    The downward spiral of self-destruction
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    And the difficult path back to the light
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-card border border-border rounded-lg p-8"
                variants={fadeInUp}
              >
                <h3 className="font-display text-xl font-semibold mb-4 text-primary">This book is for you if</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    You've ever sabotaged a relationship out of fear of losing
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    You recognize toxic patterns in yourself or someone close
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    You seek to understand the psychology behind controlling behavior
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    You need hope that change is possible
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="py-24 bg-card">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="mb-12" variants={fadeInUp}>
              <p className="font-accent text-primary text-sm tracking-[0.4em] mb-4">ABOUT THE AUTHOR</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">Pablo Almeida Coelho</h2>
            </motion.div>

            <motion.div className="space-y-6 text-lg text-muted-foreground leading-relaxed" variants={fadeInUp}>
              <p>
                Pablo is not a psychologist. He's not a relationship expert. He's someone who lived through
                the darkness of his own toxic behavior and decided to expose it to the world — not as an
                excuse, but as a warning.
              </p>
              <p>
                "The Last Act of Love" is his first book, born from the need to understand how he became
                the person he swore he would never be. It's a journey of brutal self-reflection that has
                resonated with readers worldwide.
              </p>
              <p className="text-primary italic">
                "If my story can help one person recognize these patterns before it's too late,
                then exposing my worst moments will have been worth it."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <p className="font-accent text-primary text-sm tracking-[0.4em] mb-4">READER REVIEWS</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">What Readers Are Saying</h2>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerContainer}>
              {[
                {
                  text: "A raw and honest account that made me reflect on my own relationships. Powerful and necessary.",
                  author: "Sarah M.",
                  rating: 5
                },
                {
                  text: "I couldn't put it down. Pablo's vulnerability is both heartbreaking and inspiring.",
                  author: "James K.",
                  rating: 5
                },
                {
                  text: "This book should be required reading for anyone in a relationship. Eye-opening.",
                  author: "Maria L.",
                  rating: 5
                },
                {
                  text: "Finally, a book that doesn't sugarcoat the reality of toxic love. Brave and transformative.",
                  author: "David R.",
                  rating: 5
                }
              ].map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6"
                  variants={fadeInUp}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{review.text}"</p>
                  <p className="text-primary font-medium">— {review.author}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="mb-8" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 px-6 py-3 rounded-full mb-6">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-medium">#1 Best Seller • Romance of the Year</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Ready to Begin This Journey?
              </h2>
              <p className="text-xl text-muted-foreground">
                Get your copy now and discover why thousands of readers are calling this
                "the most honest book about love ever written."
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                onClick={() => window.open("https://www.amazon.com/dp/B0GKXBFLZT", "_blank")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-accent text-sm tracking-widest px-12 py-6"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                BUY ON AMAZON
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-accent text-sm tracking-[0.3em] text-primary">PABLO</p>
            <p className="text-sm text-muted-foreground">
              © 2025 Pablo Almeida Coelho. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
