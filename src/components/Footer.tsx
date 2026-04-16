const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl text-foreground mb-4">Kura – Restaurant japonais raffiné Paris 16</p>
        <p className="text-muted-foreground text-sm font-light mb-2">
          56 Rue de Boulainvilliers, 75016 Paris
        </p>
        <a href="tel:+33145201832" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">
          +33 1 45 20 18 32
        </a>
        <div className="w-8 h-px bg-border mx-auto my-6" />
        <p className="text-muted-foreground text-xs font-light">
          © {new Date().getFullYear()} Kura – Restaurant japonais raffiné Paris 16. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
