import kitchenFlambe from "@/assets/about-resto.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutSection = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div
          ref={textRef}
          className={`transition-all duration-1000 ${textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            Notre Histoire
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8 leading-snug">
            La finesse de la cuisine japonaise
          </h2>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
            <p>
              Au 56 Rue de Boulainvilliers, 75016 Paris, Kura est une escale incontournable pour les amateurs de cuisine japonaise raffinée. Dès l'entrée, une ambiance élégante et apaisante vous enveloppe. Ici, chaque plat est une expression de passion et de savoir-faire. Le poisson, d'une fraîcheur irréprochable, est sublimé par des gestes précis, respectueux d'une tradition ancestrale. Les saveurs pures et délicates racontent l'authenticité du Japon. C'est une invitation à un voyage gustatif où l'amour des produits et l'art culinaire s'unissent pour créer une expérience chaleureuse et inoubliable.
            </p>
          </div>
        </div>
        <div
          ref={imgRef}
          className={`relative transition-all duration-1000 delay-200 ${imgVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <div className="overflow-hidden group">
            <img
              src={kitchenFlambe}
              alt="Notre cuisine"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={500}
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-full h-full border border-accent -z-10" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
