import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TopBanner } from './TopBanner';
import { CallerTranscriptPanel } from './CallerTranscriptPanel';
import { FlightRefundOptionsPanel } from './FlightRefundOptionsPanel';
import { AICoPilotPanel } from './AICoPilotPanel';
interface CallData {
  location: string;
  event: string;
  transcript: Array<{
    speaker: string;
    text: string;
    timestamp: string;
  }>;
  sentiment: number;
  intent: string[];
  likelihood: string;
  suggestions: string[];
  caseNotes: string[];
}
const MOCK_CALL_PROGRESSION = [{
  location: "Chicago, IL",
  event: "Winter Storm Alert - ORD Operations Suspended",
  transcript: [{
    speaker: "Customer",
    text: "Hi, I'm calling about my flight UA1234 from Chicago to New York that was cancelled.",
    timestamp: "14:32:15"
  }],
  sentiment: 0.3,
  intent: ["Rebooking", "Information"],
  likelihood: "85% likely to accept rebooking",
  suggestions: ["Acknowledge cancellation", "Offer rebooking options", "Check waiver eligibility"],
  caseNotes: ["Flight UA1234 ORD-LGA cancelled due to weather", "Customer seeking rebooking"]
}, {
  location: "Chicago, IL",
  event: "Winter Storm Alert - ORD Operations Suspended",
  transcript: [{
    speaker: "Customer",
    text: "Hi, I'm calling about my flight UA1234 from Chicago to New York that was cancelled.",
    timestamp: "14:32:15"
  }, {
    speaker: "Agent",
    text: "I'm sorry to hear about your cancelled flight. Let me check your options for rebooking.",
    timestamp: "14:32:45"
  }, {
    speaker: "Customer",
    text: "I really need to get to New York today for an important meeting.",
    timestamp: "14:33:10"
  }],
  sentiment: 0.2,
  intent: ["Rebooking", "Urgency", "Same-day travel"],
  likelihood: "70% likely to accept JFK option",
  suggestions: ["Offer same-day alternatives", "Check JFK availability", "Mention waiver policy"],
  caseNotes: ["Flight UA1234 ORD-LGA cancelled due to weather", "Customer seeking rebooking", "Urgent same-day travel needed"]
}, {
  location: "Chicago, IL",
  event: "Winter Storm Alert - ORD Operations Suspended",
  transcript: [{
    speaker: "Customer",
    text: "Hi, I'm calling about my flight UA1234 from Chicago to New York that was cancelled.",
    timestamp: "14:32:15"
  }, {
    speaker: "Agent",
    text: "I'm sorry to hear about your cancelled flight. Let me check your options for rebooking.",
    timestamp: "14:32:45"
  }, {
    speaker: "Customer",
    text: "I really need to get to New York today for an important meeting.",
    timestamp: "14:33:10"
  }, {
    speaker: "Agent",
    text: "I understand the urgency. I can see flights to JFK departing at 6:15 PM and 8:30 PM today.",
    timestamp: "14:33:35"
  }, {
    speaker: "Customer",
    text: "The 6:15 PM would work perfectly. Is there any additional cost?",
    timestamp: "14:34:00"
  }],
  sentiment: 0.6,
  intent: ["Rebooking", "Cost inquiry", "Acceptance"],
  likelihood: "95% likely to accept 6:15 PM JFK flight",
  suggestions: ["Confirm no change fee due to waiver", "Process rebooking", "Offer seat selection"],
  caseNotes: ["Flight UA1234 ORD-LGA cancelled due to weather", "Customer seeking rebooking", "Urgent same-day travel needed", "Interested in 6:15 PM JFK flight"]
}] as any[];

// @component: AgentAssistApp
export const AgentAssistApp = () => {
  const [currentTurn, setCurrentTurn] = useState(0);
  const [callData, setCallData] = useState<CallData>(MOCK_CALL_PROGRESSION[0]);
  const [isCallActive, setIsCallActive] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentTurn < MOCK_CALL_PROGRESSION.length - 1) {
        const nextTurn = currentTurn + 1;
        setCurrentTurn(nextTurn);
        setCallData(MOCK_CALL_PROGRESSION[nextTurn]);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [currentTurn]);
  const handleSendConfirmation = () => {
    // Simulate sending confirmation
    console.log('Confirmation sent');
  };

  // @return
  return <div className="min-h-screen bg-slate-50 flex flex-col">
      <TopBanner location={callData.location} event={callData.event} />
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto w-full">
        <motion.div className="lg:col-span-1" initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }}>
          <CallerTranscriptPanel transcript={callData.transcript} sentiment={callData.sentiment} intent={callData.intent} likelihood={callData.likelihood} />
        </motion.div>

        <motion.div className="lg:col-span-1" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }}>
          <FlightRefundOptionsPanel />
        </motion.div>

        <motion.div className="lg:col-span-1" initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          <AICoPilotPanel suggestions={callData.suggestions} />
        </motion.div>
      </div>

      <motion.div className="bg-white border-t border-slate-200 p-4" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.3
    }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-slate-700 mb-2">
              <span>Interaction Summary</span>
            </h3>
            <div className="text-sm text-slate-600 space-y-1">
              {callData.caseNotes.map((note, index) => <div key={`note-${index}`} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>{note}</span>
                </div>)}
            </div>
          </div>
          <motion.button onClick={handleSendConfirmation} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors" whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
            <span>Send Confirmation</span>
          </motion.button>
        </div>
      </motion.div>
    </div>;
};