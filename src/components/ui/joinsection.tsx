"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function JoinSection() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Start Building?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join UCI's premier AI builder community and get access to exclusive
            resources, workshops, and a network of innovators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLScP9LuFwiHEx806tv9zczjCIEzqO1Zjb-FjB4XWoa6BS1NNKQ/viewform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg bg-[#da7756] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#c15f3c] transition-colors duration-300"
            >
              Join Now
              <ArrowRight className="h-5 w-5" />
            </motion.a>

            <motion.a
              href="#events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-[#da7756] bg-white px-8 py-4 text-lg font-semibold text-[#da7756] hover:bg-[#da7756]/5 transition-colors duration-300"
            >
              View Upcoming Events
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
