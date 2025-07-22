import Button from "@/components/Button";
import { Timeline } from "@/components/Timeline";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, GraduationCap, Laptop, Rocket } from 'lucide-react';

// Timeline data
// Assurez-vous d'importer vos icônes (par exemple, depuis 'lucide-react' ou 'react-icons')
// import { Briefcase, GraduationCap, Laptop, Rocket } from 'lucide-react'; 
// (ou les icônes correspondantes de votre bibliothèque d'icônes)

const timelineItems = [
  {
    year: "Juil. 2022 - Juil. 2023",
    title: "Développeur Logiciel - Advans Cameroun",
    description:
      "Développement backend robuste en C#/.NET, application des principes SOLID et tests unitaires (xUnit/MSTest).",
    icon: <Briefcase className="w-4 h-4" />, // Icône pour l'expérience professionnelle
  },
  {
    year: "Sept. 2023",
    title: "Début des études - CCNB",
    description:
      "Démarrage de ma formation en C++, C#, développement web (HTML, JS, PHP) et mobile (Flutter) au CCNB.",
    icon: <GraduationCap className="w-4 h-4" />, // Icône pour les études
  },
  {
    year: "Mai 2025 - Juin 2025",
    title: "Stagiaire Chatbot - CFRIA (Université de Moncton)",
    description:
      "Développement d'interfaces (Angular/TypeScript), intégration d'IA (Python/Flask, Gemini API), CI/CD et PostgreSQL.",
    icon: <Laptop className="w-4 h-4" />, // Icône pour un projet ou stage tech
  },
  {
    year: "Juin 2025",
    title: "Diplômé du CCNB",
    description:
      "Achèvement de mon parcours au Collège communautaire du Nouveau-Brunswick et transition vers le monde professionnel.",
    icon: <Rocket className="w-4 h-4" />, // Icône pour le lancement de carrière
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-7">
      <h1>À propos de moi</h1>

      {/* Image + description */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
        <Image
          src="/images/me.png"
          alt="me"
          width={400}
          height={300}
          className="rounded-lg object-cover shadow-lg"
        />
        <div className="space-y-4">
          <p>
            J'ai obtenu mon diplôme du <strong>Collège communautaire du Nouveau-Brunswick (CCNB)</strong>,
            où j'ai étudié de <strong>septembre 2023 à juin 2025</strong>.
            Le programme était axé sur le <strong>C++</strong> et le <strong>C#</strong>,
            avec une brève introduction au développement web (<strong>HTML</strong>, <strong>JavaScript</strong>, et <strong>PHP</strong>),
            ainsi qu'au dévellopement mobile(<strong>Flutter</strong>).
          </p>
          <p>
            Avant cela, j'ai passé un an chez <strong>Advans Cameroun</strong>, une microfinance où j'ai travaillé sur le côté backend. J'y ai principalement utilisé le <strong>C#</strong>, <strong>Visual Studio Code</strong> et le framework <strong>.NET</strong> pour mes développements.
          </p>
          <p>
            Je me spécialise dans la stack <strong>React / Node.js</strong>, avec une forte attention portée à l'architecture du code, à l'expérience utilisateur et à la maintenabilité.
          </p>
          <p>
            J'ai travaillé sur divers projets, notamment :
            <br /><br />
            <strong>
              <Link
                target="_blank"
                href={`#`} rel="noopener noreferrer"
                className="inline underline hover:no-underline"
              >
                FoodiFly
              </Link>
            </strong>
            (une application mobile de commande alimentaire développée avec Flutter).
            <br /><br />
            <strong>
              <Link
                target="_blank"
                href={`#`} rel="noopener noreferrer"
                className="inline underline hover:no-underline"
              >
                NewsApp
              </Link>
            </strong>
            (une application de gestion d'actualités côté backend utilisant .NET/C#).
            <br /><br />
            Et <strong>
              <Link
                target="_blank"
                href={`#`} rel="noopener noreferrer"
                className="inline underline hover:no-underline"
              >
                Apex Dashboard
              </Link>
            </strong>
            (un tableau de bord moderne créé avec React).
          </p>
        </div>
      </div>

      {/* Timeline */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex gap-2 items-start">Mon Parcours</h2>
        <Timeline items={timelineItems} />

        {/* CV */}
        <div className="flex justify-center">
          <a href="/doc/CV_Adriano.pdf" download="CV_Adriano.pdf">
            <Button text="Télécharger mon CV" />
          </a>
        </div>
      </section>

    </main>
  );
}
