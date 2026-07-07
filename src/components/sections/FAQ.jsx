import { useState } from "react";
import { motion } from "framer-motion";
import { faqItems } from "../../config/faqData";
import SectionHeading from "../ui/SectionHeading";
import { FAQAccordionItem } from "../ui/ContactForm";

export default function FAQ() {
  const [openId, setOpenId] = useState(faqItems[0]?.id ?? null);

  return (
    <section id="gyik" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GYIK"
          title="Gyakran ismételt kérdések"
          subtitle="Minden, amit a rendelésről, a termékekről és a csatlakozásról tudnod kell."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {faqItems.map((item) => (
            <FAQAccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
