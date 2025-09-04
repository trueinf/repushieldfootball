import React, { useMemo, useState } from 'react';
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
  }, {
    speaker: "Agent",
    text: "Great news—there are no additional costs due to the weather waiver. I'll book you on the 6:15 PM to JFK now and send the updated confirmation to your email.",
    timestamp: "14:34:20"
  }],
  sentiment: 0.9,
  intent: ["Rebooking", "Confirmation", "No change fee"],
  likelihood: "Rebooking confirmed: 6:15 PM to JFK",
  suggestions: ["Send confirmation email/SMS", "Assist with seat selection", "Offer a goodwill gesture"],
  caseNotes: [
    "Rebooked to UA1456 ORD-JFK at 6:15 PM",
    "No change fee applied under weather waiver",
    "Confirmation to be sent to customer"
  ]
}] as any[];

// @component: AgentAssistApp
export const AgentAssistApp = () => {
  const [currentTurn, setCurrentTurn] = useState(0);
  const [callData, setCallData] = useState<CallData>(MOCK_CALL_PROGRESSION[0]);
  
  // Derive per-turn script snippets for AI Co-Pilot
  const scriptsForTurn = useMemo(() => {
    switch (currentTurn) {
      case 0:
        return [
          { id: 'empathy-1', title: 'Acknowledge Frustration', content: 'I completely understand how frustrating this must be, especially with your important meeting.', category: 'empathy' },
          { id: 'solution-1', title: 'Offer Alternatives', content: 'Let me check available options to get you to New York as soon as possible today.', category: 'solution' },
          { id: 'policy-1', title: 'Explain Waiver', content: "Due to the weather disruption, we’re waiving all change fees for rebooking to any available flight.", category: 'policy' },
        ];
      case 1:
        return [
          { id: 'empathy-2', title: 'Acknowledge Urgency', content: 'I hear the urgency—let’s aim to get you there today.', category: 'empathy' },
          { id: 'solution-2', title: 'Same‑day Options', content: 'I’ll search same‑day flights, including JFK and alternate airports if needed.', category: 'solution' },
          { id: 'policy-2', title: 'Waiver Coverage', content: 'The weather waiver lets us rebook you today without a change fee.', category: 'policy' },
        ];
      case 2:
        return [
          { id: 'solution-3', title: 'Present Options', content: 'I can see departures to JFK at 6:15 PM and 8:30 PM today—does 6:15 PM work?', category: 'solution' },
          { id: 'policy-3', title: 'Fees Clarification', content: 'There should be no additional cost due to the weather waiver.', category: 'policy' },
          { id: 'solution-4', title: 'Seat Assistance', content: 'I can also assist with seat selection once we confirm your flight.', category: 'solution' },
        ];
      case 3:
        return [
          { id: 'solution-5', title: 'Confirm Rebooking', content: 'I’ll book you on the 6:15 PM to JFK and send the confirmation now.', category: 'solution' },
          { id: 'policy-4', title: 'No Change Fee', content: 'There is no additional cost—change fees are waived for this disruption.', category: 'policy' },
          { id: 'solution-6', title: 'Follow‑up + Goodwill', content: 'I’ll share your confirmation via email/SMS and can add a goodwill gesture for the inconvenience.', category: 'solution' },
        ];
      default:
        return [] as any[];
    }
  }, [currentTurn]);
  // Manual progression controls (no autoplay)
  const playTurn = (turnIndex: number) => {
    const idx = Math.max(0, Math.min(MOCK_CALL_PROGRESSION.length - 1, turnIndex));
    setCurrentTurn(idx);
    setCallData(MOCK_CALL_PROGRESSION[idx]);
  };
  const playNext = () => {
    playTurn(currentTurn + 1);
  };
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
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {MOCK_CALL_PROGRESSION.map((_, idx) => (
                <button
                  key={`turn-${idx}`}
                  onClick={() => playTurn(idx)}
                  className={`px-3 py-1 rounded-md text-sm font-medium border ${
                    idx === currentTurn
                      ? 'bg-blue-600 text-white border-blue-700'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  Play {idx + 1}
                </button>
              ))}
            </div>
            <button
              onClick={playNext}
              disabled={currentTurn >= MOCK_CALL_PROGRESSION.length - 1}
              className={`px-3 py-1 rounded-md text-sm font-medium border ${
                currentTurn >= MOCK_CALL_PROGRESSION.length - 1
                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              Next
            </button>
          </div>
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
          <AICoPilotPanel suggestions={callData.suggestions} scripts={scriptsForTurn as any} />
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
          <FlightRefundOptionsPanel
            filterArrival={currentTurn >= 1 ? 'JFK' : null}
            highlightFlightId={currentTurn >= 2 ? 'ua1456' : null}
          />
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
