"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Building, Home, Box, Check, MessageCircle } from "lucide-react";

type QuoteData = {
  propertyType: string;
  walls: string;
  insulation: string;
  name: string;
  phone: string;
  gdprConsent: boolean;
};

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteData>({
    propertyType: "",
    walls: "",
    insulation: "",
    name: "",
    phone: "",
    gdprConsent: false,
  });

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSelect = (field: keyof QuoteData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTimeout(nextStep, 350); // Auto-advance for better UX
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100">
      {/* Progress Bar */}
      <div className="bg-zinc-50 border-b border-zinc-100 px-8 py-4 flex items-center justify-between">
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2 w-12 sm:w-16 rounded-full transition-colors duration-500 ${
                step >= i ? "bg-blue-600" : "bg-zinc-200"
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-bold text-zinc-500 font-headline uppercase tracking-widest">
          {step <= 4 ? `Step ${step} of 4` : "Complete"}
        </span>
      </div>

      <div className="p-8 md:p-12 min-h-[400px] flex flex-col relative bg-zinc-50/50">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1"
            >
              <h3 className="text-2xl font-bold font-headline text-zinc-900 mb-6">
                What type of property is it?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Detached", "Semi-Detached", "Terraced", "Bungalow"].map((pt) => (
                  <button
                    key={pt}
                    onClick={() => handleSelect("propertyType", pt)}
                    className={`p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border-2 transition-all hover:shadow-md ${
                      formData.propertyType === pt
                        ? "border-blue-600 bg-teal-50"
                        : "border-zinc-200 bg-white hover:border-teal-300"
                    }`}
                  >
                    {pt === "Detached" ? <Building className="w-8 h-8 text-blue-700" /> : <Home className="w-8 h-8 text-blue-700" />}
                    <span className="font-bold text-zinc-800">{pt}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1"
            >
              <h3 className="text-2xl font-bold font-headline text-zinc-900 mb-6">
                How many walls need rendering?
              </h3>
              <div className="flex flex-col gap-3">
                {["Just the Front", "Front & Back", "3 Walls", "Whole Property", "Just a Repair"].map((w) => (
                  <button
                    key={w}
                    onClick={() => handleSelect("walls", w)}
                    className={`p-5 rounded-2xl flex items-center justify-between border-2 transition-all hover:shadow-md ${
                      formData.walls === w
                        ? "border-blue-600 bg-teal-50"
                        : "border-zinc-200 bg-white hover:border-teal-300"
                    }`}
                  >
                    <span className="font-bold text-zinc-800">{w}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      formData.walls === w ? "border-blue-600 bg-blue-600" : "border-zinc-300"
                    }`}>
                      {formData.walls === w && <Check className="w-4 h-4 text-zinc-900" />}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1"
            >
              <h3 className="text-2xl font-bold font-headline text-zinc-900 mb-6">
                Are you looking to add External Wall Insulation (EWI)?
              </h3>
              <p className="text-zinc-500 mb-8 -mt-4 text-sm leading-relaxed">
                EWI can dramatically reduce heating bills and prevent damp, but changes the wall thickness.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["Yes", "No", "Not Sure Yet"].map((ins) => (
                  <button
                    key={ins}
                    onClick={() => handleSelect("insulation", ins)}
                    className={`p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border-2 transition-all hover:shadow-md ${
                      formData.insulation === ins
                        ? "border-blue-600 bg-teal-50"
                        : "border-zinc-200 bg-white hover:border-teal-300"
                    }`}
                  >
                    <Box className="w-8 h-8 text-blue-700" />
                    <span className="font-bold text-zinc-800 text-center">{ins}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1"
            >
              <h3 className="text-2xl font-bold font-headline text-zinc-900 mb-6">
                Where should we send your quote?
              </h3>
              <p className="text-zinc-500 mb-8 -mt-4 text-sm leading-relaxed">
                Provide your WhatsApp number for a response within 60 seconds during business hours.
              </p>
              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2 font-headline uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white text-zinc-900 text-lg transition-shadow shadow-sm focus:shadow-md"
                    placeholder="E.g. John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2 font-headline uppercase tracking-wider flex items-center justify-between">
                    Phone / WhatsApp Number
                    <span className="text-xs text-green-600 flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md mb-0.5 border border-green-200">
                      <MessageCircle className="w-3 h-3" /> Preferred
                    </span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white text-zinc-900 text-lg transition-shadow shadow-sm focus:shadow-md"
                    placeholder="07..."
                  />
                </div>
                
                <div className="flex items-start gap-3 mt-2">
                  <input
                    type="checkbox"
                    id="gdpr-consent"
                    checked={formData.gdprConsent}
                    onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
                    className="mt-1 w-4 h-4 text-blue-700 border-zinc-300 rounded focus:ring-teal-600"
                  />
                  <label htmlFor="gdpr-consent" className="text-xs text-zinc-500 leading-relaxed">
                    I consent to PureRend processing my data in accordance with the <a href="/your-rights" className="underline hover:text-blue-700" target="_blank">Privacy Policy</a>. I understand I will be contacted regarding my quote.
                  </label>
                </div>

                <button
                  onClick={async () => {
                    if (formData.name && formData.phone && formData.gdprConsent) {
                      try {
                        const res = await fetch("/api/contact", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(formData),
                        });
                        if (res.ok) {
                          setStep(5);
                        } else {
                          console.error("Failed to submit form");
                        }
                      } catch (error) {
                        console.error("Error submitting form", error);
                      }
                    }
                  }}
                  disabled={!formData.name || !formData.phone || !formData.gdprConsent}
                  className={`w-full mt-4 font-bold text-lg py-5 rounded-xl transition-all font-headline flex items-center justify-center gap-2 ${
                    (formData.name && formData.phone && formData.gdprConsent)
                    ? 'bg-blue-600 text-zinc-900 hover:bg-blue-500 shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:shadow-[0_0_30px_rgba(13,148,136,0.5)] transform hover:-translate-y-1'
                    : 'bg-zinc-200 text-zinc-500 cursor-not-allowed'
                  }`}
                >
                  Request Instant Quote <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center py-10"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-3xl font-black font-headline text-zinc-900 mb-4 tracking-tight">
                Quote Requested!
              </h3>
              <p className="text-lg text-zinc-600 max-w-md mx-auto mb-8 leading-relaxed">
                Thanks, {formData.name.split(" ")[0]}. Ben will be reviewing your property details and will send a message to {formData.phone} shortly.
              </p>
              <button 
                onClick={() => {
                  setStep(1);
                  setFormData({ propertyType: "", walls: "", insulation: "", name: "", phone: "", gdprConsent: false });
                }}
                className="text-blue-700 font-bold hover:text-teal-700 underline underline-offset-4"
              >
                Submit another property
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        {step > 1 && step < 5 && (
          <button
            onClick={prevStep}
            className="absolute top-8 left-8 md:top-12 md:left-12 text-zinc-500 hover:text-zinc-600 transition-colors flex items-center gap-1 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        )}
      </div>
    </div>
  );
}
