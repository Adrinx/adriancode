// import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks"; // (Renommage suggéré pour rester en anglais)

export default function Contact() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
        <div className="flex flex-col col-span-3 md:col-span-1 md:items-start md:text-start mr-10">
          <div>
            <h2>
              Contactez-moi
            </h2>
            <p>
              Vous avez une question ou un projet en tête ? N'hésitez pas à me contacter.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-y-4 md:items-start">
            <p>Localisation: Montreal, Québec, Canada</p>
            <SocialLinks />
          </div>
        </div>
        {/* <ContactForm /> */}
      </div>
    </section>
  );
}
