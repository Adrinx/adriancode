import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vos options de configuration vont ici
  // L'objet 'env' doit être directement à l'intérieur de nextConfig
  env: {
    // Assurez-vous que SITE_URL est correctement défini ici ou qu'il utilise NEXT_PUBLIC_SITE_URL
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://adriancode.com',
  },
  // Si vous avez d'autres options de configuration (images, compiler, etc.), ajoutez-les ici
};

export default nextConfig;