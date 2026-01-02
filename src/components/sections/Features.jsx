const features = [
  {
    title: "Fast Performance",
    desc: "Optimized for speed and scalability.",
  },
  {
    title: "Modern Design",
    desc: "Clean UI built with Tailwind CSS.",
  },
  {
    title: "SEO Ready",
    desc: "Rank higher on search engines.",
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="text-center text-3xl font-bold">Why choose us?</h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border p-6">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
