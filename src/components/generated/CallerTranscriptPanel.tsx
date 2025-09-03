import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Headphones, TrendingUp, TrendingDown, Minus, Tag, Target } from 'lucide-react';
interface TranscriptEntry {
  speaker: string;
  text: string;
  timestamp: string;
  mpid?: string;
}
interface CallerTranscriptPanelProps {
  transcript: TranscriptEntry[];
  sentiment: number;
  intent: string[];
  likelihood: string;
  mpid?: string;
}
const SENTIMENT_CONFIG = {
  positive: {
    color: 'text-green-600',
    bg: 'bg-green-100',
    icon: TrendingUp
  },
  neutral: {
    color: 'text-yellow-600',
    bg: 'bg-yellow-100',
    icon: Minus
  },
  negative: {
    color: 'text-red-600',
    bg: 'bg-red-100',
    icon: TrendingDown
  }
};
const INTENT_COLORS = ['bg-blue-100 text-blue-700', 'bg-purple-100 text-purple-700', 'bg-green-100 text-green-700', 'bg-orange-100 text-orange-700', 'bg-pink-100 text-pink-700'];

// @component: CallerTranscriptPanel
export const CallerTranscriptPanel = ({
  transcript,
  sentiment,
  intent,
  likelihood
}: CallerTranscriptPanelProps) => {
  const transcriptEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [transcript]);
  const getSentimentConfig = () => {
    if (sentiment > 0.5) return SENTIMENT_CONFIG.positive;
    if (sentiment < 0.3) return SENTIMENT_CONFIG.negative;
    return SENTIMENT_CONFIG.neutral;
  };
  const sentimentConfig = getSentimentConfig();
  const SentimentIcon = sentimentConfig.icon;

  // @return
  return <SortableContainer dndKitId="ff31234c-2f47-4319-9c78-de9fb8ac02b3" containerType="regular" prevTag="div" className="bg-white rounded-xl shadow-lg border border-slate-200 h-full flex flex-col" data-magicpath-id="0" data-magicpath-path="CallerTranscriptPanel.tsx">
      <SortableContainer dndKitId="a154ffbc-c9f9-46de-9d72-5136341207c3" containerType="regular" prevTag="div" className="p-6 border-b border-slate-200" data-magicpath-id="1" data-magicpath-path="CallerTranscriptPanel.tsx">
        <h2 className="text-lg font-semibold text-slate-800 mb-4" data-magicpath-id="2" data-magicpath-path="CallerTranscriptPanel.tsx">
          <span data-magicpath-id="3" data-magicpath-path="CallerTranscriptPanel.tsx">Live Transcript & AI Insights</span>
        </h2>
        
        <SortableContainer dndKitId="c0f4b709-43a6-4cd6-b499-1de4df7826b9" containerType="regular" prevTag="div" className="grid grid-cols-1 gap-4" data-magicpath-id="4" data-magicpath-path="CallerTranscriptPanel.tsx">
          <SortableContainer dndKitId="ba61c0cd-d653-4e79-b0ba-fbd018f974f0" containerType="regular" prevTag="motion.div" className={`${sentimentConfig.bg} rounded-lg p-4`} initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.3
        }} data-magicpath-id="5" data-magicpath-path="CallerTranscriptPanel.tsx">
            <SortableContainer dndKitId="920c0dee-4c8a-476f-a2a0-f2b2fccc365a" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="6" data-magicpath-path="CallerTranscriptPanel.tsx">
              <SortableContainer dndKitId="06cd038b-1c1e-4126-908e-df6d017eed6d" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="7" data-magicpath-path="CallerTranscriptPanel.tsx">
                <SentimentIcon className={`w-5 h-5 ${sentimentConfig.color}`} data-magicpath-id="8" data-magicpath-path="CallerTranscriptPanel.tsx" />
                <span className={`text-sm font-medium ${sentimentConfig.color}`} data-magicpath-id="9" data-magicpath-path="CallerTranscriptPanel.tsx">
                  <span data-magicpath-id="10" data-magicpath-path="CallerTranscriptPanel.tsx">Sentiment</span>
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="94b7c2f9-b46d-4813-8445-fbbc10a51d24" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="11" data-magicpath-path="CallerTranscriptPanel.tsx">
                <SortableContainer dndKitId="439f22ce-2811-4c11-a490-2f5212fca469" containerType="regular" prevTag="div" className="w-24 bg-white rounded-full h-2" data-magicpath-id="12" data-magicpath-path="CallerTranscriptPanel.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" className={`h-2 rounded-full ${sentiment > 0.5 ? 'bg-green-500' : sentiment < 0.3 ? 'bg-red-500' : 'bg-yellow-500'}`} initial={{
                  width: 0
                }} animate={{
                  width: `${sentiment * 100}%`
                }} transition={{
                  duration: 0.5
                }} data-magicpath-id="13" data-magicpath-path="CallerTranscriptPanel.tsx" />
                </SortableContainer>
                <span className={`text-sm font-semibold ${sentimentConfig.color}`} data-magicpath-id="14" data-magicpath-path="CallerTranscriptPanel.tsx">
                  <span data-magicpath-id="15" data-magicpath-path="CallerTranscriptPanel.tsx">{Math.round(sentiment * 100)}%</span>
                </span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="b7b9ba28-663b-400b-b19a-5878bc4b1385" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="16" data-magicpath-path="CallerTranscriptPanel.tsx">
            <SortableContainer dndKitId="871b3ab0-a971-40ef-85cc-5c100b5fbb99" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="17" data-magicpath-path="CallerTranscriptPanel.tsx">
              <Tag className="w-4 h-4 text-slate-500" data-magicpath-id="18" data-magicpath-path="CallerTranscriptPanel.tsx" />
              <span className="text-sm font-medium text-slate-700" data-magicpath-id="19" data-magicpath-path="CallerTranscriptPanel.tsx">
                <span data-magicpath-id="20" data-magicpath-path="CallerTranscriptPanel.tsx">Intent Tags</span>
              </span>
            </SortableContainer>
            <SortableContainer dndKitId="80b05bba-53e3-4422-9744-450e556fd3e5" containerType="regular" prevTag="div" className="flex flex-wrap gap-2" data-magicpath-id="21" data-magicpath-path="CallerTranscriptPanel.tsx">
              <AnimatePresence data-magicpath-id="22" data-magicpath-path="CallerTranscriptPanel.tsx">
                {intent.map((tag, index) => <motion.span data-magicpath-motion-tag="motion.span" key={`intent-${index}`} className={`px-3 py-1 rounded-full text-xs font-medium ${INTENT_COLORS[index % INTENT_COLORS.length]}`} initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} exit={{
                opacity: 0,
                scale: 0.8
              }} transition={{
                duration: 0.2,
                delay: index * 0.1
              }} data-magicpath-uuid={(tag as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="CallerTranscriptPanel.tsx">
                    <span data-magicpath-uuid={(tag as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="CallerTranscriptPanel.tsx">{tag}</span>
                  </motion.span>)}
              </AnimatePresence>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="5b8f98ec-d23c-4b21-91a0-3058bd73ad66" containerType="regular" prevTag="motion.div" className="bg-blue-50 rounded-lg p-3" initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3
        }} data-magicpath-id="25" data-magicpath-path="CallerTranscriptPanel.tsx">
            <SortableContainer dndKitId="468dca53-812c-4e3b-b715-8a065e34abed" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="26" data-magicpath-path="CallerTranscriptPanel.tsx">
              <Target className="w-4 h-4 text-blue-600" data-magicpath-id="27" data-magicpath-path="CallerTranscriptPanel.tsx" />
              <span className="text-sm font-medium text-blue-800" data-magicpath-id="28" data-magicpath-path="CallerTranscriptPanel.tsx">
                <span data-magicpath-id="29" data-magicpath-path="CallerTranscriptPanel.tsx">Likelihood</span>
              </span>
            </SortableContainer>
            <p className="text-sm text-blue-700 mt-1" data-magicpath-id="30" data-magicpath-path="CallerTranscriptPanel.tsx">
              <span data-magicpath-id="31" data-magicpath-path="CallerTranscriptPanel.tsx">{likelihood}</span>
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="4f63bc95-8d3e-4bfd-b417-0a7fd2d2f21a" containerType="regular" prevTag="div" className="flex-1 p-6 overflow-y-auto" data-magicpath-id="32" data-magicpath-path="CallerTranscriptPanel.tsx">
        <SortableContainer dndKitId="005630ce-ae12-4b69-b632-c7e0d2f3cc49" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="33" data-magicpath-path="CallerTranscriptPanel.tsx">
          <AnimatePresence data-magicpath-id="34" data-magicpath-path="CallerTranscriptPanel.tsx">
            {transcript.map((entry, index) => <motion.div data-magicpath-motion-tag="motion.div" key={`transcript-${index}`} className={`flex items-start space-x-3 ${entry.speaker === 'Customer' ? 'flex-row' : 'flex-row-reverse'}`} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: index * 0.1
          }} data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="CallerTranscriptPanel.tsx">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${entry.speaker === 'Customer' ? 'bg-slate-100' : 'bg-blue-100'}`} data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="CallerTranscriptPanel.tsx">
                  {entry.speaker === 'Customer' ? <User className="w-4 h-4 text-slate-600" data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="CallerTranscriptPanel.tsx" /> : <Headphones className="w-4 h-4 text-blue-600" data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="CallerTranscriptPanel.tsx" />}
                </div>
                <div className={`flex-1 ${entry.speaker === 'Customer' ? 'text-left' : 'text-right'}`} data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="39" data-magicpath-path="CallerTranscriptPanel.tsx">
                  <div className="flex items-center space-x-2 mb-1" data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="40" data-magicpath-path="CallerTranscriptPanel.tsx">
                    <span className="text-xs font-medium text-slate-500" data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="CallerTranscriptPanel.tsx">
                      <span data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-field="speaker:unknown" data-magicpath-id="42" data-magicpath-path="CallerTranscriptPanel.tsx">{entry.speaker}</span>
                    </span>
                    <span className="text-xs text-slate-400" data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="CallerTranscriptPanel.tsx">
                      <span data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-field="timestamp:unknown" data-magicpath-id="44" data-magicpath-path="CallerTranscriptPanel.tsx">{entry.timestamp}</span>
                    </span>
                  </div>
                  <div className={`inline-block max-w-xs lg:max-w-sm p-3 rounded-lg ${entry.speaker === 'Customer' ? 'bg-slate-100 text-slate-800' : 'bg-blue-600 text-white'}`} data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="CallerTranscriptPanel.tsx">
                    <p className="text-sm" data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="CallerTranscriptPanel.tsx">
                      <span data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-field="text:unknown" data-magicpath-id="47" data-magicpath-path="CallerTranscriptPanel.tsx">{entry.text}</span>
                    </p>
                  </div>
                </div>
              </motion.div>)}
          </AnimatePresence>
          <div ref={transcriptEndRef} data-magicpath-id="48" data-magicpath-path="CallerTranscriptPanel.tsx" />
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};