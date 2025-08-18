'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const questions = [
  {
    id: 1,
    question: "What kind of support are you looking for?",
    options: [
      "Complete project development",
      "Team augmentation",
      "Consulting and architecture",
      "Code review and optimization",
      "Maintenance and support",
      "Multiple services"
    ]
  },
  {
    id: 2,
    question: "What type of project are you looking to build?",
    options: [
      "Web Application",
      "Mobile Application",
      "Cloud Infrastructure",
      "API Development",
      "Full Stack Solution",
      "Other"
    ]
  },
  {
    id: 3,
    question: "What is your timeline for this project?",
    options: [
      "ASAP - Within 1 month",
      "1-3 months",
      "3-6 months",
      "6+ months",
      "Just exploring options"
    ]
  },
  {
    id: 4,
    question: "What is your estimated budget range?",
    options: [
      "Under $10,000",
      "$10,000 - $50,000",
      "$50,000 - $100,000",
      "$100,000 - $500,000",
      "$500,000+",
      "Not sure yet"
    ]
  },
  {
    id: 5,
    question: "What is the size of your organization?",
    options: [
      "Individual/Freelancer",
      "Startup (1-10 employees)",
      "Small Business (11-50 employees)",
      "Medium Business (51-200 employees)",
      "Enterprise (200+ employees)"
    ]
  }
];

export default function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const router = useRouter();

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions answered - you could send this data to an API or display results
      console.log('Questionnaire completed:', newAnswers);
      // For now, redirect to the main page with a thank you message
      router.push('/?thank-you=true');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-bg-base relative">
      <Header />
      
      <main className="px-8 md:px-12 py-16 max-w-4xl mx-auto relative z-10 mt-20">
        <div className="bg-bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold text-fg-violet">
                Let&apos;s understand your needs
              </h1>
              <span className="text-fg-gray">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            
            <div className="w-full bg-bg-gray rounded-full h-2">
              <div 
                className="bg-fg-seafoam h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-fg-violet mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left p-4 rounded-lg border-2 border-fg-violet-soft hover:bg-bg-seafoam hover:border-fg-seafoam transition-all duration-200"
                >
                  <span className="text-lg text-fg-violet">{option}</span>
                </button>
              ))}
            </div>
          </div>

          {currentQuestion > 0 && (
            <button
              onClick={handleBack}
              className="text-fg-gray hover:text-fg-violet transition-colors"
            >
              ← Back to previous question
            </button>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-fg-gray">
            Your answers help us better understand your project needs and provide tailored solutions.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}