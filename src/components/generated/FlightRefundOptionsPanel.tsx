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
}
interface RefundOption {
  type: string;
  amount: number;
  processing: string;
  eligible: boolean;
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
  seats: 12
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
  seats: 8
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
  seats: 15
}];
const REFUND_OPTIONS: RefundOption[] = [{
  type: 'Full Refund',
  amount: 456.80,
  processing: '7-10 business days',
  eligible: true
}, {
  type: 'Travel Credit',
  amount: 456.80,
  processing: 'Immediate',
  eligible: true
}];
const TABS = [{
  id: 'same-airport',
  label: 'Same Airport'
}, {
  id: 'alternate',
  label: 'Alternate Airports'
}, {
  id: 'star-alliance',
  label: 'Star Alliance'
}, {
  id: 'refund',
  label: 'Refund Options'
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
  return <div className="bg-white rounded-xl shadow-lg border border-slate-200 h-full flex flex-col">
      <div className="p-6 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          <span>Flight & Refund Options</span>
        </h2>
        
        <div className="flex space-x-1 bg-slate-100 rounded-lg p-1">
          {TABS.map(tab => <motion.button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === tab.id ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-800'}`} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
              <span>{tab.label}</span>
            </motion.button>)}
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === 'refund' ? <motion.div key="refund" className="p-6 h-full overflow-y-auto" initial={{
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
        }}>
              <div className="space-y-4">
                {REFUND_OPTIONS.map((option, index) => <motion.div key={`refund-${index}`} className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} whileHover={{
              scale: 1.02
            }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <h3 className="font-semibold text-slate-800">
                          <span>{option.type}</span>
                        </h3>
                      </div>
                      {option.eligible ? <CheckCircle className="w-5 h-5 text-green-600" /> : <AlertCircle className="w-5 h-5 text-red-600" />}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">
                          <span>Amount:</span>
                        </span>
                        <span className="text-sm font-semibold text-slate-800">
                          <span>${option.amount}</span>
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">
                          <span>Processing:</span>
                        </span>
                        <span className="text-sm text-slate-800">
                          <span>{option.processing}</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div> : <motion.div key="flights" className="h-full flex flex-col" initial={{
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
        }}>
              <div className="p-4 border-b border-slate-200">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-slate-700">
                    <span>Sort by:</span>
                  </span>
                  <div className="flex space-x-2">
                    {[{
                  key: 'time',
                  label: 'Departure'
                }, {
                  key: 'duration',
                  label: 'Duration'
                }, {
                  key: 'seats',
                  label: 'Seats'
                }].map(sort => <button key={sort.key} onClick={() => handleSort(sort.key as 'time' | 'duration' | 'seats')} className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors ${sortBy === sort.key ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:text-slate-800'}`}>
                        <span>{sort.label}</span>
                        {sortBy === sort.key && <ArrowUpDown className="w-3 h-3" />}
                      </button>)}
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-3">
                  {sortedFlights.map((flight, index) => <motion.div key={flight.id} className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer" initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: index * 0.1
              }} whileHover={{
                scale: 1.02
              }}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Plane className="w-5 h-5 text-blue-600" />
                          <div>
                            <h3 className="font-semibold text-slate-800">
                              <span>{flight.id.toUpperCase()}</span>
                            </h3>
                            <p className="text-sm text-slate-600">
                              <span>{flight.aircraft}</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {flight.waiverStatus === 'eligible' ? <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                              <span>Waiver Eligible</span>
                            </span> : <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                              <span>No Waiver</span>
                            </span>}
                          {flight.voucher > 0 && <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                              <span>${flight.voucher} Voucher</span>
                            </span>}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-slate-500" />
                          <div>
                            <p className="font-medium text-slate-800">
                              <span>{flight.departureTime}</span>
                            </p>
                            <p className="text-slate-600">
                              <span>{flight.departure}</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-slate-600">
                            <span>{flight.duration}</span>
                          </p>
                          <div className="w-full h-px bg-slate-300 my-1"></div>
                        </div>

                        <div className="flex items-center justify-end space-x-2">
                          <div className="text-right">
                            <p className="font-medium text-slate-800">
                              <span>{flight.arrivalTime}</span>
                            </p>
                            <p className="text-slate-600">
                              <span>{flight.arrival}</span>
                            </p>
                          </div>
                          <MapPin className="w-4 h-4 text-slate-500" />
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-slate-200 flex justify-between items-center">
                        <span className="text-sm text-slate-600">
                          <span>{flight.seats} seats available</span>
                        </span>
                        <motion.button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors" whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }}>
                          <span>Select Flight</span>
                        </motion.button>
                      </div>
                    </motion.div>)}
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </div>;
};