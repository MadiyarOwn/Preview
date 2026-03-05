import { Container } from "@/components/layout/container";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    text: "This platform transformed how we automate our workflows.",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Startup Founder",
    text: "AI insights helped us scale faster than expected.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Data Analyst",
    text: "Clean interface and powerful analytics.",
    rating: 4,
  },
  {
    name: "Lion Lionhart",
    role: "Data Analyst",
    text: "Clean interface and powerful analytics.",
    rating: 5,
  },
  {
    name: "Max Anchenko",
    role: "Data Analyst",
    text: "Clean interface and powerful analytics.",
    rating: 4,
  },
];



export function Testimonials() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Automation Platform",
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewBody: t.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
      },
    })),
  };

  const row = [...testimonials];

  return (
    <section className="py-24 overflow-hidden">
        <Container>
            <h2 className="text-center text-4xl font-display text-white">
            What our users say
            </h2>

            <div className="mt-12 flex gap-6 scroll-right w-max testimonials-row">
            {row.map((t, i) => (
                <div
                key={i}
                className="
                    w-[360px] flex-shrink-0 rounded-3xl
                    bg-zinc-100 border border-zinc-200
                    p-8 text-zinc-800
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                "
                >
                <Quote className="text-indigo-500 w-8 h-8" />

                <p className="mt-4 text-[17px] leading-relaxed text-zinc-700">
                    {t.text}
                </p>

                <div className="mt-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-zinc-300" />

                    <div>
                    <p className="font-semibold text-zinc-900">{t.name}</p>
                    <p className="text-sm text-zinc-500">{t.role}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>

            <div className="mt-6 flex gap-6 scroll-left w-max testimonials-row">
            {row.map((t, i) => (
                <div
                key={`row2-${i}`}
                className="
                    w-[360px] flex-shrink-0 rounded-3xl
                    bg-zinc-100 border border-zinc-200
                    p-8 text-zinc-800
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                "
                >
                <Quote className="text-indigo-500 w-8 h-8" />

                <p className="mt-4 text-[17px] leading-relaxed text-zinc-700">
                    {t.text}
                </p>

                <div className="mt-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-zinc-300" />

                    <div>
                    <p className="font-semibold text-zinc-900">{t.name}</p>
                    <p className="text-sm text-zinc-500">{t.role}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </Container>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    </section>
  );
}