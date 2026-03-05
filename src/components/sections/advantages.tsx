import { Container } from "@/components/layout/container";

const items = [
  {
    title: "AI-powered\nefficiency",
    text:
      "Our advanced AI optimizes retail processes, improving speed and accuracy in decision-making.",
    icon: "⚡",
  },
  {
    title: "Seamless\nautomation",
    text:
      "We automate essential tasks like inventory management, reducing human error and operational costs.",
    icon: "⚙️",
  },
  {
    title: "Data-driven\ninsights",
    text:
      "Our platform transforms big data into actionable insights, enabling personalized customer experiences.",
    icon: "💡",
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="pt-24 md:pt-30">
      <Container>
        <div className="rounded-[28px] border border-white/20 bg-white/5 p-6 md:p-10">
          <p className="text-sm text-white/80 text-gradient-brand">Our Advantage</p>

          <h2 className="mt-4 font-display text-3xl leading-tight text-white md:text-5xl">
            We stand out from the competition{" "}
            <span className="block">because of 3 core attributes:</span>
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/25 bg-black/20 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white">
                  <span aria-hidden>{item.icon}</span>
                </div>

                <h3 className="mt-6 whitespace-pre-line font-display text-xl font-semibold leading-snug text-white md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}