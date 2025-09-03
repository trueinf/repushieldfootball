import { SortableContainer } from "@/dnd-kit/SortableContainer";
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
  mpid?: string;
}
const MOCK_CALL_PROGRESSION = [{
  location: "Chicago, IL",
  event: "Winter Storm Alert - ORD Operations Suspended",
  transcript: [{
    speaker: "Customer",
    text: "Hi, I'm calling about my flight UA1234 from Chicago to New York that was cancelled.",
    timestamp: "14:32:15",
    mpid: "517f6cc2-2048-4934-8b57-94f3a3372f26"
  }],
  sentiment: 0.3,
  intent: ["Rebooking", "Information"],
  likelihood: "85% likely to accept rebooking",
  suggestions: ["Acknowledge cancellation", "Offer rebooking options", "Check waiver eligibility"],
  caseNotes: ["Flight UA1234 ORD-LGA cancelled due to weather", "Customer seeking rebooking"],
  mpid: "201793ab-af99-4783-9bea-f43c5557c4b8"
}, {
  location: "Chicago, IL",
  event: "Winter Storm Alert - ORD Operations Suspended",
  transcript: [{
    speaker: "Customer",
    text: "Hi, I'm calling about my flight UA1234 from Chicago to New York that was cancelled.",
    timestamp: "14:32:15",
    mpid: "7ef7b213-3e4f-479b-b1df-f4ecca8f890d"
  }, {
    speaker: "Agent",
    text: "I'm sorry to hear about your cancelled flight. Let me check your options for rebooking.",
    timestamp: "14:32:45",
    mpid: "518c73ca-b33c-4cac-ae86-414e70f2b072"
  }, {
    speaker: "Customer",
    text: "I really need to get to New York today for an important meeting.",
    timestamp: "14:33:10",
    mpid: "bd8ea50e-d6a8-4165-8767-376a8fd3f29f"
  }],
  sentiment: 0.2,
  intent: ["Rebooking", "Urgency", "Same-day travel"],
  likelihood: "70% likely to accept JFK option",
  suggestions: ["Offer same-day alternatives", "Check JFK availability", "Mention waiver policy"],
  caseNotes: ["Flight UA1234 ORD-LGA cancelled due to weather", "Customer seeking rebooking", "Urgent same-day travel needed"],
  mpid: "5221d7af-5d97-40d4-a595-5293f87fdae6"
}, {
  location: "Chicago, IL",
  event: "Winter Storm Alert - ORD Operations Suspended",
  transcript: [{
    speaker: "Customer",
    text: "Hi, I'm calling about my flight UA1234 from Chicago to New York that was cancelled.",
    timestamp: "14:32:15",
    mpid: "44c311b9-f1ed-4ce4-a9cb-ac402e52f2da"
  }, {
    speaker: "Agent",
    text: "I'm sorry to hear about your cancelled flight. Let me check your options for rebooking.",
    timestamp: "14:32:45",
    mpid: "283f37fb-7ec7-46be-bca3-cdab6340788d"
  }, {
    speaker: "Customer",
    text: "I really need to get to New York today for an important meeting.",
    timestamp: "14:33:10",
    mpid: "dd00b7a9-8d0e-4d62-ad84-5c090ea08e17"
  }, {
    speaker: "Agent",
    text: "I understand the urgency. I can see flights to JFK departing at 6:15 PM and 8:30 PM today.",
    timestamp: "14:33:35",
    mpid: "bd062c98-abf0-4601-9d56-6eb4d3641a4b"
  }, {
    speaker: "Customer",
    text: "The 6:15 PM would work perfectly. Is there any additional cost?",
    timestamp: "14:34:00",
    mpid: "1e68a229-fdf2-4c7c-bacc-4b30cc4a2a6b"
  }],
  sentiment: 0.6,
  intent: ["Rebooking", "Cost inquiry", "Acceptance"],
  likelihood: "95% likely to accept 6:15 PM JFK flight",
  suggestions: ["Confirm no change fee due to waiver", "Process rebooking", "Offer seat selection"],
  caseNotes: ["Flight UA1234 ORD-LGA cancelled due to weather", "Customer seeking rebooking", "Urgent same-day travel needed", "Interested in 6:15 PM JFK flight"],
  mpid: "df9ec085-1f3c-4f3a-94b1-82d247142efc"
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
  return <SortableContainer dndKitId="4abf173d-e070-49bc-9710-ed1e15b33d91" containerType="regular" prevTag="div" className="min-h-screen bg-slate-50 flex flex-col" data-magicpath-id="0" data-magicpath-path="AgentAssistApp.tsx">
      <TopBanner location={callData.location} event={callData.event} data-magicpath-id="1" data-magicpath-path="AgentAssistApp.tsx" />
      
      <SortableContainer dndKitId="eafc5e91-44de-4d72-bbba-163fbc5545b9" containerType="regular" prevTag="div" className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto w-full" data-magicpath-id="2" data-magicpath-path="AgentAssistApp.tsx">
        <SortableContainer dndKitId="7a619557-1385-419a-83ec-fd0bdb5723f6" containerType="regular" prevTag="motion.div" className="lg:col-span-1" initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }} data-magicpath-id="3" data-magicpath-path="AgentAssistApp.tsx">
          <CallerTranscriptPanel transcript={callData.transcript} sentiment={callData.sentiment} intent={callData.intent} likelihood={callData.likelihood} data-magicpath-id="4" data-magicpath-path="AgentAssistApp.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="d36ee1a5-9e2e-43eb-87ea-ef398b024481" containerType="regular" prevTag="motion.div" className="lg:col-span-1" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} data-magicpath-id="5" data-magicpath-path="AgentAssistApp.tsx">
          <FlightRefundOptionsPanel data-magicpath-id="6" data-magicpath-path="AgentAssistApp.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="a3ce7657-d4b3-442b-aad7-22aaaace457c" containerType="regular" prevTag="motion.div" className="lg:col-span-1" initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} data-magicpath-id="7" data-magicpath-path="AgentAssistApp.tsx">
          <AICoPilotPanel suggestions={callData.suggestions} data-magicpath-id="8" data-magicpath-path="AgentAssistApp.tsx" />
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="b05d977b-4c1a-49a5-9ff7-3a978f138711" containerType="regular" prevTag="motion.div" className="bg-white border-t border-slate-200 p-4" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.3
    }} data-magicpath-id="9" data-magicpath-path="AgentAssistApp.tsx">
        <SortableContainer dndKitId="8303902d-1cc3-4e7d-ba27-566593f050d0" containerType="regular" prevTag="div" className="max-w-7xl mx-auto flex items-center justify-between" data-magicpath-id="10" data-magicpath-path="AgentAssistApp.tsx">
          <SortableContainer dndKitId="748f0218-806b-4e8f-8fc2-0cdaefdcec27" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="11" data-magicpath-path="AgentAssistApp.tsx">
            <h3 className="text-sm font-semibold text-slate-700 mb-2" data-magicpath-id="12" data-magicpath-path="AgentAssistApp.tsx">
              <span data-magicpath-id="13" data-magicpath-path="AgentAssistApp.tsx">Interaction Summary</span>
            </h3>
            <div className="text-sm text-slate-600 space-y-1" data-magicpath-id="14" data-magicpath-path="AgentAssistApp.tsx">
              {callData.caseNotes.map((note, index) => <SortableContainer dndKitId="a5892ecb-8541-4a2f-8f44-c2772d9bdcb3" containerType="regular" prevTag="div" key={`note-${index}`} className="flex items-center space-x-2" data-magicpath-id="15" data-magicpath-path="AgentAssistApp.tsx">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" data-magicpath-id="16" data-magicpath-path="AgentAssistApp.tsx"></div>
                  <span data-magicpath-id="17" data-magicpath-path="AgentAssistApp.tsx">{note}</span>
                </SortableContainer>)}
            </div>
          </SortableContainer>
          <SortableContainer dndKitId="7d320177-7555-44ff-9dce-c82efd96ebb7" containerType="regular" prevTag="motion.button" onClick={handleSendConfirmation} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors" whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} data-magicpath-id="18" data-magicpath-path="AgentAssistApp.tsx">
            <span data-magicpath-id="19" data-magicpath-path="AgentAssistApp.tsx">Send Confirmation</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};