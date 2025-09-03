import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Lightbulb, MessageSquare, Gift, Copy, CheckCircle, Zap, Star } from 'lucide-react';
interface AICoPilotPanelProps {
  suggestions: string[];
  mpid?: string;
}
interface ScriptSnippet {
  id: string;
  title: string;
  content: string;
  category: 'empathy' | 'solution' | 'policy';
  mpid?: string;
}
interface GoodwillOffer {
  id: string;
  type: string;
  value: string;
  description: string;
  icon: React.ElementType;
  mpid?: string;
}
const SCRIPT_SNIPPETS: ScriptSnippet[] = [{
  id: 'empathy-1',
  title: 'Acknowledge Frustration',
  content: "I completely understand how frustrating this situation must be, especially with your important meeting.",
  category: 'empathy',
  mpid: "991c4b82-6004-43f0-9140-b7cdd48e1d6e"
}, {
  id: 'solution-1',
  title: 'Offer Alternative',
  content: "Let me check our available options to get you to New York as soon as possible today.",
  category: 'solution',
  mpid: "c7c00515-3698-49b5-a11b-a1fa12c99b7e"
}, {
  id: 'policy-1',
  title: 'Explain Waiver',
  content: "Due to the weather disruption, we're waiving all change fees for rebooking to any available flight.",
  category: 'policy',
  mpid: "78839c64-93a7-4f36-9db6-0d4a59736357"
}, {
  id: 'solution-2',
  title: 'Seat Selection',
  content: "I can also help you select your preferred seat at no additional charge due to the disruption.",
  category: 'solution',
  mpid: "9778a9cc-5089-42f9-baca-af73e87b89a5"
}];
const GOODWILL_OFFERS: GoodwillOffer[] = [{
  id: 'miles-500',
  type: 'Miles',
  value: '500 Miles',
  description: 'Apologetic gesture for inconvenience',
  icon: Star,
  mpid: "25875f7a-e125-4815-92fa-37fe3b0f3379"
}, {
  id: 'voucher-100',
  type: 'Voucher',
  value: '$100 Voucher',
  description: 'Future travel credit',
  icon: Gift,
  mpid: "40e2130d-7810-4c23-9660-d2ae1fa67f06"
}, {
  id: 'upgrade',
  type: 'Upgrade',
  value: 'Complimentary Upgrade',
  description: 'Subject to availability',
  icon: Zap,
  mpid: "eb058255-4139-447b-adb8-bba575fbd8dc"
}];
const CATEGORY_COLORS = {
  empathy: 'bg-purple-100 text-purple-700 border-purple-200',
  solution: 'bg-blue-100 text-blue-700 border-blue-200',
  policy: 'bg-green-100 text-green-700 border-green-200'
};

// @component: AICoPilotPanel
export const AICoPilotPanel = ({
  suggestions
}: AICoPilotPanelProps) => {
  const [copiedScript, setCopiedScript] = useState<string | null>(null);
  const [selectedGoodwill, setSelectedGoodwill] = useState<string | null>(null);
  const handleCopyScript = (scriptId: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedScript(scriptId);
    setTimeout(() => setCopiedScript(null), 2000);
  };
  const handleSelectGoodwill = (offerId: string) => {
    setSelectedGoodwill(offerId);
    setTimeout(() => setSelectedGoodwill(null), 3000);
  };

  // @return
  return <SortableContainer dndKitId="18472bbe-574b-4db5-8e6d-229d5192a3ea" containerType="regular" prevTag="div" className="bg-white rounded-xl shadow-lg border border-slate-200 h-full flex flex-col" data-magicpath-id="0" data-magicpath-path="AICoPilotPanel.tsx">
      <SortableContainer dndKitId="c0bc8c46-9d81-40cf-b802-e3413fe1557a" containerType="regular" prevTag="div" className="p-6 border-b border-slate-200" data-magicpath-id="1" data-magicpath-path="AICoPilotPanel.tsx">
        <SortableContainer dndKitId="4f0686be-a046-4de1-956d-47e39c390c56" containerType="regular" prevTag="div" className="flex items-center space-x-3 mb-4" data-magicpath-id="2" data-magicpath-path="AICoPilotPanel.tsx">
          <SortableContainer dndKitId="6838add3-1493-4e32-b121-2a910e06f2c8" containerType="regular" prevTag="div" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center" data-magicpath-id="3" data-magicpath-path="AICoPilotPanel.tsx">
            <Bot className="w-5 h-5 text-white" data-magicpath-id="4" data-magicpath-path="AICoPilotPanel.tsx" />
          </SortableContainer>
          <SortableContainer dndKitId="835cc30e-b3df-482d-adc4-c401b626ccc9" containerType="regular" prevTag="div" data-magicpath-id="5" data-magicpath-path="AICoPilotPanel.tsx">
            <h2 className="text-lg font-semibold text-slate-800" data-magicpath-id="6" data-magicpath-path="AICoPilotPanel.tsx">
              <span data-magicpath-id="7" data-magicpath-path="AICoPilotPanel.tsx">AI Co-Pilot</span>
            </h2>
            <p className="text-sm text-slate-600" data-magicpath-id="8" data-magicpath-path="AICoPilotPanel.tsx">
              <span data-magicpath-id="9" data-magicpath-path="AICoPilotPanel.tsx">Smart suggestions & assistance</span>
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="2ebb2c8d-de83-4d58-84b9-9e44128e28ff" containerType="regular" prevTag="div" className="flex-1 overflow-y-auto" data-magicpath-id="10" data-magicpath-path="AICoPilotPanel.tsx">
        <SortableContainer dndKitId="e343ac67-f554-48b4-a156-9a519a2950d7" containerType="regular" prevTag="div" className="p-6 space-y-6" data-magicpath-id="11" data-magicpath-path="AICoPilotPanel.tsx">
          <SortableContainer dndKitId="3732e3ad-e5b8-4d13-9ccd-b4116f200e97" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} data-magicpath-id="12" data-magicpath-path="AICoPilotPanel.tsx">
            <SortableContainer dndKitId="4334ae36-6df3-4f06-9bfc-70ce03ec165c" containerType="regular" prevTag="div" className="flex items-center space-x-2 mb-4" data-magicpath-id="13" data-magicpath-path="AICoPilotPanel.tsx">
              <Lightbulb className="w-5 h-5 text-amber-500" data-magicpath-id="14" data-magicpath-path="AICoPilotPanel.tsx" />
              <h3 className="font-semibold text-slate-800" data-magicpath-id="15" data-magicpath-path="AICoPilotPanel.tsx">
                <span data-magicpath-id="16" data-magicpath-path="AICoPilotPanel.tsx">Next Best Actions</span>
              </h3>
            </SortableContainer>
            <SortableContainer dndKitId="859345cc-b4fc-4e44-869e-45761f370a40" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="17" data-magicpath-path="AICoPilotPanel.tsx">
              <AnimatePresence data-magicpath-id="18" data-magicpath-path="AICoPilotPanel.tsx">
                {suggestions.map((suggestion, index) => <motion.div data-magicpath-motion-tag="motion.div" key={`suggestion-${index}`} className="bg-amber-50 border border-amber-200 rounded-lg p-3 hover:bg-amber-100 transition-colors cursor-pointer" initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: 20
              }} transition={{
                duration: 0.3,
                delay: index * 0.1
              }} whileHover={{
                scale: 1.02
              }} data-magicpath-uuid={(suggestion as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="AICoPilotPanel.tsx">
                    <div className="flex items-start space-x-3" data-magicpath-uuid={(suggestion as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="AICoPilotPanel.tsx">
                      <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" data-magicpath-uuid={(suggestion as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="AICoPilotPanel.tsx">
                        <span className="text-xs font-semibold text-amber-700" data-magicpath-uuid={(suggestion as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="AICoPilotPanel.tsx">
                          <span data-magicpath-uuid={(suggestion as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="AICoPilotPanel.tsx">{index + 1}</span>
                        </span>
                      </div>
                      <p className="text-sm text-amber-800 flex-1" data-magicpath-uuid={(suggestion as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="AICoPilotPanel.tsx">
                        <span data-magicpath-uuid={(suggestion as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="AICoPilotPanel.tsx">{suggestion}</span>
                      </p>
                    </div>
                  </motion.div>)}
              </AnimatePresence>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="8e398acc-b706-464e-a454-0f9ffa9b8cd6" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} data-magicpath-id="26" data-magicpath-path="AICoPilotPanel.tsx">
            <SortableContainer dndKitId="1a0f54e5-2fb1-4f65-9144-df2f6324d1a3" containerType="regular" prevTag="div" className="flex items-center space-x-2 mb-4" data-magicpath-id="27" data-magicpath-path="AICoPilotPanel.tsx">
              <MessageSquare className="w-5 h-5 text-blue-500" data-magicpath-id="28" data-magicpath-path="AICoPilotPanel.tsx" />
              <h3 className="font-semibold text-slate-800" data-magicpath-id="29" data-magicpath-path="AICoPilotPanel.tsx">
                <span data-magicpath-id="30" data-magicpath-path="AICoPilotPanel.tsx">Script Snippets</span>
              </h3>
            </SortableContainer>
            <SortableContainer dndKitId="5b908923-9d52-466e-909c-a2b15d3850d9" containerType="collection" prevTag="div" className="space-y-3" data-magicpath-id="31" data-magicpath-path="AICoPilotPanel.tsx">
              {SCRIPT_SNIPPETS.map((script, index) => <motion.div data-magicpath-motion-tag="motion.div" key={script.id} className={`border rounded-lg p-4 hover:shadow-md transition-all ${CATEGORY_COLORS[script.category]}`} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} data-magicpath-uuid={(script as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="AICoPilotPanel.tsx">
                  <div className="flex items-center justify-between mb-2" data-magicpath-uuid={(script as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="AICoPilotPanel.tsx">
                    <h4 className="font-medium text-sm" data-magicpath-uuid={(script as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="AICoPilotPanel.tsx">
                      <span data-magicpath-uuid={(script as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="35" data-magicpath-path="AICoPilotPanel.tsx">{script.title}</span>
                    </h4>
                    <motion.button data-magicpath-motion-tag="motion.button" onClick={() => handleCopyScript(script.id, script.content)} className="p-1 hover:bg-white/50 rounded transition-colors" whileHover={{
                  scale: 1.1
                }} whileTap={{
                  scale: 0.9
                }} data-magicpath-uuid={(script as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="AICoPilotPanel.tsx">
                      {copiedScript === script.id ? <CheckCircle className="w-4 h-4 text-green-600" data-magicpath-uuid={(script as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="AICoPilotPanel.tsx" /> : <Copy className="w-4 h-4" data-magicpath-uuid={(script as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="AICoPilotPanel.tsx" />}
                    </motion.button>
                  </div>
                  <p className="text-sm leading-relaxed" data-magicpath-uuid={(script as any)["mpid"] ?? "unsafe"} data-magicpath-id="39" data-magicpath-path="AICoPilotPanel.tsx">
                    <span data-magicpath-uuid={(script as any)["mpid"] ?? "unsafe"} data-magicpath-field="content:string" data-magicpath-id="40" data-magicpath-path="AICoPilotPanel.tsx">{script.content}</span>
                  </p>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="448c0868-0836-43fb-9584-a5fb4c7a2cec" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} data-magicpath-id="41" data-magicpath-path="AICoPilotPanel.tsx">
            <SortableContainer dndKitId="76dd589f-572a-4a1b-af24-02149eae071e" containerType="regular" prevTag="div" className="flex items-center space-x-2 mb-4" data-magicpath-id="42" data-magicpath-path="AICoPilotPanel.tsx">
              <Gift className="w-5 h-5 text-green-500" data-magicpath-id="43" data-magicpath-path="AICoPilotPanel.tsx" />
              <h3 className="font-semibold text-slate-800" data-magicpath-id="44" data-magicpath-path="AICoPilotPanel.tsx">
                <span data-magicpath-id="45" data-magicpath-path="AICoPilotPanel.tsx">Goodwill Offers</span>
              </h3>
            </SortableContainer>
            <SortableContainer dndKitId="cad92808-83d6-449f-ba8a-702bd5b67112" containerType="collection" prevTag="div" className="space-y-3" data-magicpath-id="46" data-magicpath-path="AICoPilotPanel.tsx">
              {GOODWILL_OFFERS.map((offer, index) => <motion.div data-magicpath-motion-tag="motion.div" key={offer.id} className={`border border-slate-200 rounded-lg p-4 hover:border-green-300 hover:shadow-md transition-all cursor-pointer ${selectedGoodwill === offer.id ? 'bg-green-50 border-green-300' : 'bg-white'}`} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} onClick={() => handleSelectGoodwill(offer.id)} whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-uuid={(offer as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="AICoPilotPanel.tsx">
                  <div className="flex items-center space-x-3" data-magicpath-uuid={(offer as any)["mpid"] ?? "unsafe"} data-magicpath-id="48" data-magicpath-path="AICoPilotPanel.tsx">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center" data-magicpath-uuid={(offer as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="AICoPilotPanel.tsx">
                      <offer.icon className="w-5 h-5 text-green-600" data-magicpath-uuid={(offer as any)["mpid"] ?? "unsafe"} data-magicpath-id="50" data-magicpath-path="AICoPilotPanel.tsx" />
                    </div>
                    <div className="flex-1" data-magicpath-uuid={(offer as any)["mpid"] ?? "unsafe"} data-magicpath-id="51" data-magicpath-path="AICoPilotPanel.tsx">
                      <div className="flex items-center justify-between" data-magicpath-uuid={(offer as any)["mpid"] ?? "unsafe"} data-magicpath-id="52" data-magicpath-path="AICoPilotPanel.tsx">
                        <h4 className="font-semibold text-slate-800" data-magicpath-uuid={(offer as any)["mpid"] ?? "unsafe"} data-magicpath-id="53" data-magicpath-path="AICoPilotPanel.tsx">
                          <span data-magicpath-uuid={(offer as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:string" data-magicpath-id="54" data-magicpath-path="AICoPilotPanel.tsx">{offer.value}</span>
                        </h4>
                        {selectedGoodwill === offer.id && <CheckCircle className="w-5 h-5 text-green-600" data-magicpath-uuid={(offer as any)["mpid"] ?? "unsafe"} data-magicpath-id="55" data-magicpath-path="AICoPilotPanel.tsx" />}
                      </div>
                      <p className="text-sm text-slate-600" data-magicpath-uuid={(offer as any)["mpid"] ?? "unsafe"} data-magicpath-id="56" data-magicpath-path="AICoPilotPanel.tsx">
                        <span data-magicpath-uuid={(offer as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="57" data-magicpath-path="AICoPilotPanel.tsx">{offer.description}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="ff27855e-a9f9-482e-8fe6-39385da1f3f0" containerType="regular" prevTag="div" className="p-6 border-t border-slate-200" data-magicpath-id="58" data-magicpath-path="AICoPilotPanel.tsx">
        <SortableContainer dndKitId="b0c139b7-c2ad-46e9-a456-7d0c13a3cfba" containerType="regular" prevTag="motion.button" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-all" whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }} data-magicpath-id="59" data-magicpath-path="AICoPilotPanel.tsx">
          <span data-magicpath-id="60" data-magicpath-path="AICoPilotPanel.tsx">Apply Recommendations</span>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};