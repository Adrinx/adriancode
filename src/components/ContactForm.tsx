"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "./Button";

// Définition du schéma Zod
const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit avoir au moins 2 caractères"),
  email: z.string().email("Format d'email invalide"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange", // Valide en temps réel
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("✅ Message envoyé avec succès !");
        reset();
      } else {
        setMessage("❌ Erreur : " + result.error);
      }
    } catch (error: unknown) {
      setMessage(`❌ Erreur serveur. Réessayez plus tard.${error}`);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:w-96 grid">
      {/* Nom */}
      <input
        {...register("name")}
        className="w-full p-3 border rounded border-primary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-300 outline-none"
        placeholder="Votre nom"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      {/* Email */}
      <input
        {...register("email")}
        type="email"
        className="w-full p-3 border rounded border-primary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-300 outline-none"
        placeholder="Votre email"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      {/* Message */}
      <textarea
        {...register("message")}
        className="w-full p-3 border rounded border-primary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-300 outline-none min-h-20"
        placeholder="Votre message"
        rows={4}
      ></textarea>
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}

      {/* Bouton */}
      <Button
        text={loading ? "Envoi..." : "Envoyer"}
        disabled={loading || !isValid}
      />

      {/* Message de confirmation / erreur */}
      {message && <p className="text-center mt-3">{message}</p>}
    </form>
  );
};

export default ContactForm;
