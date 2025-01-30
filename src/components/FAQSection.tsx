export default function FAQSection() {
  const faqs = [
    {
      question: "When is ToxiGuard launching?",
      answer: "We're planning to launch within the next 2-3 months. Subscribe to updates to be the first to know!"
    },
    {
      question: "How does the AI project analysis work?",
      answer: "ToxiGuard uses advanced machine learning algorithms to analyze project brief texts, identifying potential risks and red flags."
    },
    {
      question: "Will there be a free trial?",
      answer: "Yes, we plan to offer a free trial period for all new users."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 