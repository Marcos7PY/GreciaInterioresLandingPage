import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Image
              src="/images/logogrecia.png"
              alt="Grecia Interiores"
              width={160}
              height={50}
              className="h-10 w-auto"
            />
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#servicios" className="hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="#proceso" className="hover:text-foreground transition-colors">
              Proceso
            </a>
            <a href="#portafolio" className="hover:text-foreground transition-colors">
              Portafolio
            </a>
            <a href="#contacto" className="hover:text-foreground transition-colors">
              Contacto
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Grecia Interiores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
