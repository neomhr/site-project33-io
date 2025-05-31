// src/components/HeroSection.tsx

import React from "react";
import { HeroSectionProps } from "@/types/HeroSectionProps";

const HeroSection: React.FC<HeroSectionProps> = ({ hero, theme }) => {
  const title = hero?.mainTitle || "Welcome to Our Site";
  const subtitle = hero?.subtitle || "We're glad to have you here.";
  const ctaText = hero?.ctaPrimary || "Learn More";
  // Since the new config doesn't have a specific href for the primary CTA,
  // we'll default to "#" or you can adapt as needed.
  const ctaHref = "#";

  const backgroundColor = theme?.primaryColor || "#F3F4F6"; // Default to a light gray
  const textColor = theme?.secondaryColor || "#1F2937"; // Default to a dark gray
  const buttonBackgroundColor = theme?.secondaryColor || "#10B981"; // Default to a green shade
  const buttonTextColor = theme?.primaryColor || "#FFFFFF"; // Default to white

  return (
    <section
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: "4rem 1rem", // Equivalent to Tailwind's py-16 px-4
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh", // Give it some height
      }}
    >
      <h1
        style={{
          fontSize: "2.25rem", // Equivalent to Tailwind's text-4xl
          fontWeight: "bold",
          marginBottom: "1rem", // Equivalent to Tailwind's mb-4
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: "1.125rem", // Equivalent to Tailwind's text-lg
          marginBottom: "2rem", // Equivalent to Tailwind's mb-8
          maxWidth: "600px", // Limit width for readability
        }}
      >
        {subtitle}
      </p>
      {ctaText && (
        <a
          href={ctaHref} // Using the defined ctaHref
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: buttonBackgroundColor,
            color: buttonTextColor,
            padding: "0.75rem 1.5rem", // Equivalent to Tailwind's px-6 py-3
            borderRadius: "0.375rem", // Equivalent to Tailwind's rounded-md
            textDecoration: "none",
            fontWeight: "500", // Medium weight
            display: "inline-block", // Ensure padding and other styles apply correctly
          }}
        >
          {ctaText}
        </a>
      )}
    </section>
  );
};

export default HeroSection;
