"use client";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
export default function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram />, href: "https://www.instagram.com/cief.unisimon/" },
    { name: "YouTube", icon: <FaYoutube />, href: "https://www.youtube.com/@CIEFUNISIMON" },
    { name: "X (Twitter)", icon: <FaTwitter />, href: "https://x.com/CIEF_UNISIMON" },
  ];



  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-primary mb-4">CIEF</h3>
            <p className="text-muted-foreground text-pretty leading-relaxed mb-6 max-w-md">
              Centro de Investigacion en Estudios Fronterizos.
              
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

         

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contacto</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>cief@unisimon.edu.co</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+ (57) 6-582-7070 Ext 140(Chatbot)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>Calle 14 con Av. 4° #4-13 Cucuta,Norte de Santander,
                      Colombia.Sede 4.UNISIMON</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© CIEF. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
