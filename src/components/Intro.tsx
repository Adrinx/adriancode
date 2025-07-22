import Image from "next/image";
import Button from "./Button";
//https://flowcv.com/resume/vilihu3ewa6u
export default function IntroPage() {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <div className="flex gap-2 items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/images/me.png"
              alt="me"
              width={64}
              height={64}
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
          <h2>Adriano Kamgang</h2>
        </div>
        <div className="text-md flex gap-2 items-center mt-2 md:mt-4">
          <span className="text-lg sm:text-lg md:text-xl font-semibold">
            Développeur Logiciel
          </span>
          <Image
            src="/images/canada.png"
            alt="Canada flag"
            width={32}
            height={32}
          />
        </div>
      </div>
      <p>
        Développeur passionné, spécialisé dans la conception de systèmes fiables et performants.J’allie rigueur, logique et créativité pour proposer des solutions efficaces et évolutives.Engagé et curieux, je vise l’excellence technique dans chaque projet.
      </p>
      <div className="flex justify-center">
        {/* 👉 Link around the button */}
        <a href="/doc/CV_Adriano.pdf" download="CV_Adriano.pdf">
          <Button text="Télécharger mon CV" />
        </a>
      </div>
    </section>
  );
}
