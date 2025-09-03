import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Clock, MapPin, DollarSign, CheckCircle, AlertCircle, ArrowUpDown } from 'lucide-react';
interface FlightOption {
  id: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  aircraft: string;
  waiverStatus: 'eligible' | 'not-eligible';
  voucher: number;
  seats: number;
  mpid?: string;
}
interface RefundOption {
  type: string;
  amount: number;
  processing: string;
  eligible: boolean;
  mpid?: string;
}
const FLIGHT_OPTIONS: FlightOption[] = [{
  id: 'ua1456',
  departure: 'ORD',
  arrival: 'JFK',
  departureTime: '18:15',
  arrivalTime: '21:45',
  duration: '2h 30m',
  aircraft: '737-800',
  waiverStatus: 'eligible',
  voucher: 0,
  seats: 12,
  mpid: "4e2bc540-57b2-4522-9b89-66d19d622ecd"
}, {
  id: 'ua2234',
  departure: 'ORD',
  arrival: 'JFK',
  departureTime: '20:30',
  arrivalTime: '23:55',
  duration: '2h 25m',
  aircraft: '787-9',
  waiverStatus: 'eligible',
  voucher: 0,
  seats: 8,
  mpid: "37cec82a-da17-4e0a-a72c-2dc8bcf36635"
}, {
  id: 'ua3456',
  departure: 'ORD',
  arrival: 'EWR',
  departureTime: '19:45',
  arrivalTime: '23:10',
  duration: '2h 25m',
  aircraft: '737-900',
  waiverStatus: 'eligible',
  voucher: 100,
  seats: 15,
  mpid: "4a0061a9-d382-470a-8f1b-26540e6def44"
}];
const REFUND_OPTIONS: RefundOption[] = [{
  type: 'Full Refund',
  amount: 456.80,
  processing: '7-10 business days',
  eligible: true,
  mpid: "b820921e-48f4-424d-85bd-db7f2335c174"
}, {
  type: 'Travel Credit',
  amount: 456.80,
  processing: 'Immediate',
  eligible: true,
  mpid: "0152c9e5-9964-4c73-a9e2-6c334858d60f"
}];
const TABS = [{
  id: 'same-airport',
  label: 'Same Airport',
  mpid: "e3cdbba0-020d-4245-8366-e9cb44c4a61b"
}, {
  id: 'alternate',
  label: 'Alternate Airports',
  mpid: "59f85b0d-d89a-4932-ace4-8a79324841a1"
}, {
  id: 'star-alliance',
  label: 'Star Alliance',
  mpid: "64d962c4-9ce6-4b40-8775-fd95173d1054"
}, {
  id: 'refund',
  label: 'Refund Options',
  mpid: "c78a0a17-bcc0-4e18-ad7e-ef8f4083ead4"
}] as any[];

// @component: FlightRefundOptionsPanel
export const FlightRefundOptionsPanel = () => {
  const [activeTab, setActiveTab] = useState('same-airport');
  const [sortBy, setSortBy] = useState<'time' | 'duration' | 'seats'>('time');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const handleSort = (field: 'time' | 'duration' | 'seats') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };
  const sortedFlights = [...FLIGHT_OPTIONS].sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'time':
        comparison = a.departureTime.localeCompare(b.departureTime);
        break;
      case 'duration':
        comparison = a.duration.localeCompare(b.duration);
        break;
      case 'seats':
        comparison = a.seats - b.seats;
        break;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  // @return
  return <SortableContainer dndKitId="f2ad1ad9-e3a5-4a59-b92a-2a31d1afc277" containerType="regular" prevTag="div" className="bg-white rounded-xl shadow-lg border border-slate-200 h-full flex flex-col" data-magicpath-id="0" data-magicpath-path="FlightRefundOptionsPanel.tsx">
      <SortableContainer dndKitId="593cbe1f-0096-4675-9a05-2bf81c637976" containerType="regular" prevTag="div" className="p-6 border-b border-slate-200" data-magicpath-id="1" data-magicpath-path="FlightRefundOptionsPanel.tsx">
        <h2 className="text-lg font-semibold text-slate-800 mb-4" data-magicpath-id="2" data-magicpath-path="FlightRefundOptionsPanel.tsx">
          <span data-magicpath-id="3" data-magicpath-path="FlightRefundOptionsPanel.tsx">Flight & Refund Options</span>
        </h2>
        
        <SortableContainer dndKitId="0406fd2e-55db-41ff-85ac-b81caecc584c" containerType="collection" prevTag="div" className="flex space-x-1 bg-slate-100 rounded-lg p-1" data-magicpath-id="4" data-magicpath-path="FlightRefundOptionsPanel.tsx">
          {TABS.map(tab => <motion.button data-magicpath-motion-tag="motion.button" key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === tab.id ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-800'}`} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} data-magicpath-uuid={(tab as any)["mpid"] ?? "unsafe"} data-magicpath-id="5" data-magicpath-path="FlightRefundOptionsPanel.tsx">
              <span data-magicpath-uuid={(tab as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:string" data-magicpath-id="6" data-magicpath-path="FlightRefundOptionsPanel.tsx">{tab.label}</span>
            </motion.button>)}
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="3b48d848-2d00-4d0f-b852-e93309765035" containerType="regular" prevTag="div" className="flex-1 overflow-hidden" data-magicpath-id="7" data-magicpath-path="FlightRefundOptionsPanel.tsx">
        <AnimatePresence mode="wait" data-magicpath-id="8" data-magicpath-path="FlightRefundOptionsPanel.tsx">
          {activeTab === 'refund' ? <SortableContainer dndKitId="027b83c3-7dfd-4e1b-96e5-d7c92b2733a3" containerType="regular" prevTag="motion.div" key="refund" className="p-6 h-full overflow-y-auto" initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: -20
        }} transition={{
          duration: 0.3
        }} data-magicpath-id="9" data-magicpath-path="FlightRefundOptionsPanel.tsx">
              <SortableContainer dndKitId="87692da8-9b40-48b3-852f-4f136e1d807d" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="10" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                {REFUND_OPTIONS.map((option, index) => <motion.div data-magicpath-motion-tag="motion.div" key={`refund-${index}`} className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} whileHover={{
              scale: 1.02
            }} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                    <div className="flex items-center justify-between mb-3" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                      <div className="flex items-center space-x-2" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                        <DollarSign className="w-5 h-5 text-green-600" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="FlightRefundOptionsPanel.tsx" />
                        <h3 className="font-semibold text-slate-800" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                          <span data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="type:string" data-magicpath-id="16" data-magicpath-path="FlightRefundOptionsPanel.tsx">{option.type}</span>
                        </h3>
                      </div>
                      {option.eligible ? <CheckCircle className="w-5 h-5 text-green-600" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="FlightRefundOptionsPanel.tsx" /> : <AlertCircle className="w-5 h-5 text-red-600" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="FlightRefundOptionsPanel.tsx" />}
                    </div>
                    <div className="space-y-2" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                      <div className="flex justify-between" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                        <span className="text-sm text-slate-600" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                          <span data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="FlightRefundOptionsPanel.tsx">Amount:</span>
                        </span>
                        <span className="text-sm font-semibold text-slate-800" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                          <span data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="amount:number" data-magicpath-id="24" data-magicpath-path="FlightRefundOptionsPanel.tsx">${option.amount}</span>
                        </span>
                      </div>
                      <div className="flex justify-between" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                        <span className="text-sm text-slate-600" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                          <span data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="FlightRefundOptionsPanel.tsx">Processing:</span>
                        </span>
                        <span className="text-sm text-slate-800" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                          <span data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="processing:string" data-magicpath-id="29" data-magicpath-path="FlightRefundOptionsPanel.tsx">{option.processing}</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>)}
              </SortableContainer>
            </SortableContainer> : <SortableContainer dndKitId="5991a982-4ffe-4c23-b501-8cb038b73d4b" containerType="regular" prevTag="motion.div" key="flights" className="h-full flex flex-col" initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: -20
        }} transition={{
          duration: 0.3
        }} data-magicpath-id="30" data-magicpath-path="FlightRefundOptionsPanel.tsx">
              <SortableContainer dndKitId="76c8602d-e50a-4341-b85b-0af94ca6c1a9" containerType="regular" prevTag="div" className="p-4 border-b border-slate-200" data-magicpath-id="31" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                <SortableContainer dndKitId="7de5573a-20fe-42be-9f2f-5a8ebb81ec04" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="32" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                  <span className="text-sm font-medium text-slate-700" data-magicpath-id="33" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                    <span data-magicpath-id="34" data-magicpath-path="FlightRefundOptionsPanel.tsx">Sort by:</span>
                  </span>
                  <SortableContainer dndKitId="8785962c-91ce-4f41-949b-ca048618f3b8" containerType="collection" prevTag="div" className="flex space-x-2" data-magicpath-id="35" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                    {[{
                  key: 'time',
                  label: 'Departure',
                  mpid: "fede582e-d13d-45ab-bbce-9e891e2f28a7"
                }, {
                  key: 'duration',
                  label: 'Duration',
                  mpid: "80a4af88-9f66-42dc-b17f-15c1e2070e3a"
                }, {
                  key: 'seats',
                  label: 'Seats',
                  mpid: "c054a25f-596e-4be4-8e30-6bc6d247e9a4"
                }].map(sort => <button key={sort.key} onClick={() => handleSort(sort.key as 'time' | 'duration' | 'seats')} className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors ${sortBy === sort.key ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:text-slate-800'}`} data-magicpath-uuid={(sort as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                        <span data-magicpath-uuid={(sort as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="37" data-magicpath-path="FlightRefundOptionsPanel.tsx">{sort.label}</span>
                        {sortBy === sort.key && <ArrowUpDown className="w-3 h-3" data-magicpath-uuid={(sort as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="FlightRefundOptionsPanel.tsx" />}
                      </button>)}
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="1f12c7d8-1270-41f5-96e7-af72d318c9a6" containerType="regular" prevTag="div" className="flex-1 overflow-y-auto p-4" data-magicpath-id="39" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                <SortableContainer dndKitId="c03005b3-1fe1-491c-9079-e0091d62632d" containerType="collection" prevTag="div" className="space-y-3" data-magicpath-id="40" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                  {sortedFlights.map((flight, index) => <motion.div data-magicpath-motion-tag="motion.div" key={flight.id} className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer" initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: index * 0.1
              }} whileHover={{
                scale: 1.02
              }} data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                      <div className="flex items-center justify-between mb-3" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                        <div className="flex items-center space-x-3" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                          <Plane className="w-5 h-5 text-blue-600" />
                          <div data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="44" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                            <h3 className="font-semibold text-slate-800" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                              <span data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="FlightRefundOptionsPanel.tsx">{flight.id.toUpperCase()}</span>
                            </h3>
                            <p className="text-sm text-slate-600" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                              <span data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-field="aircraft:unknown" data-magicpath-id="48" data-magicpath-path="FlightRefundOptionsPanel.tsx">{flight.aircraft}</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                          {flight.waiverStatus === 'eligible' ? <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="50" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                              <span data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="51" data-magicpath-path="FlightRefundOptionsPanel.tsx">Waiver Eligible</span>
                            </span> : <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="52" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                              <span data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="53" data-magicpath-path="FlightRefundOptionsPanel.tsx">No Waiver</span>
                            </span>}
                          {flight.voucher > 0 && <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="54" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                              <span data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-field="voucher:unknown" data-magicpath-id="55" data-magicpath-path="FlightRefundOptionsPanel.tsx">${flight.voucher} Voucher</span>
                            </span>}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="56" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                        <div className="flex items-center space-x-2" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="57" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                          <Clock className="w-4 h-4 text-slate-500" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="58" data-magicpath-path="FlightRefundOptionsPanel.tsx" />
                          <div data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="59" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                            <p className="font-medium text-slate-800" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="60" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                              <span data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-field="departureTime:unknown" data-magicpath-id="61" data-magicpath-path="FlightRefundOptionsPanel.tsx">{flight.departureTime}</span>
                            </p>
                            <p className="text-slate-600" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="62" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                              <span data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-field="departure:unknown" data-magicpath-id="63" data-magicpath-path="FlightRefundOptionsPanel.tsx">{flight.departure}</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-center" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="64" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                          <p className="text-slate-600" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="65" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                            <span data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-field="duration:unknown" data-magicpath-id="66" data-magicpath-path="FlightRefundOptionsPanel.tsx">{flight.duration}</span>
                          </p>
                          <div className="w-full h-px bg-slate-300 my-1" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="FlightRefundOptionsPanel.tsx"></div>
                        </div>

                        <div className="flex items-center justify-end space-x-2" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                          <div className="text-right" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                            <p className="font-medium text-slate-800" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                              <span data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-field="arrivalTime:unknown" data-magicpath-id="71" data-magicpath-path="FlightRefundOptionsPanel.tsx">{flight.arrivalTime}</span>
                            </p>
                            <p className="text-slate-600" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="72" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                              <span data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-field="arrival:unknown" data-magicpath-id="73" data-magicpath-path="FlightRefundOptionsPanel.tsx">{flight.arrival}</span>
                            </p>
                          </div>
                          <MapPin className="w-4 h-4 text-slate-500" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="74" data-magicpath-path="FlightRefundOptionsPanel.tsx" />
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-slate-200 flex justify-between items-center" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="75" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                        <span className="text-sm text-slate-600" data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="76" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                          <span data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-field="seats:unknown" data-magicpath-id="77" data-magicpath-path="FlightRefundOptionsPanel.tsx">{flight.seats} seats available</span>
                        </span>
                        <motion.button data-magicpath-motion-tag="motion.button" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors" whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }} data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="78" data-magicpath-path="FlightRefundOptionsPanel.tsx">
                          <span data-magicpath-uuid={(flight as any)["mpid"] ?? "unsafe"} data-magicpath-id="79" data-magicpath-path="FlightRefundOptionsPanel.tsx">Select Flight</span>
                        </motion.button>
                      </div>
                    </motion.div>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>}
        </AnimatePresence>
      </SortableContainer>
    </SortableContainer>;
};