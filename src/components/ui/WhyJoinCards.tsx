"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";
import { Sparkles, Code2, Users, Trophy } from "lucide-react";

export default function WhyJoinCards() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-zinc-50 to-orange-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Inspiring{" "}
            <motion.span
              className="text-[#da7756]"
              animate={{
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              UCI Students
            </motion.span>{" "}
            to Build
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join a community of builders leveraging AI to create the future
          </motion.p>
        </motion.div>

        {/* cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1: why claude? */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Card className="h-full bg-white shadow-xl border-2 border-[#da7756]/20 hover:border-[#da7756]/50 transition-all duration-300">
              <CardHeader className="border-b border-[#da7756]/20 bg-gradient-to-r from-[#da7756]/5 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-8 w-8 text-[#da7756]" />
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    Why Claude?
                  </CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-600">
                  Premium access to cutting-edge AI tools
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#da7756]/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-[#da7756]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Claude Pro Access
                    </h3>
                    <p className="text-gray-600">
                      Get unlimited access to Claude's most advanced model
                      (Sonnet 4.5) with premium features
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#da7756]/10 flex items-center justify-center">
                    <Code2 className="h-6 w-6 text-[#da7756]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Monthly API Credits
                    </h3>
                    <p className="text-gray-600">
                      Receive{" "}
                      <span className="font-semibold text-[#da7756]">
                        $50 monthly
                      </span>{" "}
                      in API credits to develop applications, automate
                      workflows, and experiment with AI
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: perks and stuff */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Card className="h-full bg-white shadow-xl border-2 border-[#da7756]/20 hover:border-[#da7756]/50 transition-all duration-300">
              <CardHeader className="border-b border-[#da7756]/20 bg-gradient-to-r from-[#da7756]/5 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-8 w-8 text-[#da7756]" />
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    Build & Connect
                  </CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-600">
                  New insights and ways to create with AI
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#da7756]/10 flex items-center justify-center">
                    <Code2 className="h-6 w-6 text-[#da7756]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Build Real Projects
                    </h3>
                    <p className="text-gray-600">
                      Turn your ideas into reality with hands-on project
                      development and mentorship
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#da7756]/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#da7756]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Anthropic-Led Workshops
                    </h3>
                    <p className="text-gray-600">
                      Access exclusive workshops, panels, and lectures led by
                      Anthropic engineers
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#da7756]/10 flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-[#da7756]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Exclusive Hackathons
                    </h3>
                    <p className="text-gray-600">
                      Compete in members-only hackathons with prizes and
                      networking opportunities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
