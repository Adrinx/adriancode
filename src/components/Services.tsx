import Service from "./Service";

const servicesData = [
  {
    image: "/images/app-development.png",
    title: "Développement web",
    description:
      "Je construis des sites web modernes et hautement performants avec React, entièrement responsifs.",
  },
  {
    image: "/images/api.png",
    title: "Développement d'API REST",
    description:
      "Je crée des API REST robustes en utilisant .NET et C#, avec une architecture propre et modulaire.",
  },
  {
    image: "/images/mobile.png",
    title: "Développement logiciel",
    description:
      "Je construis des applications mobiles modernes et performantes avec MAUI et Flutter, entièrement adaptatives sur toutes les plateformes.",
  },
  {
    image: "/images/graphic-designer.png",
    title: "UI/UX Design",
    description:
      "Je conçois des maquettes interactives et prototypes des interfaces utilisateur à l'aide de Figma.",
  },
];

export default function Services() {
  return (
    <section className="flex flex-col">
      <div className="mb-10">
        <h2>Comment puis-je vous aider ?</h2>
        <p>
          Je conçois des expériences utilisateur sur mesure, de A à Z, en parfaite adéquation avec vos objectifs.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {servicesData.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
