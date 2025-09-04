import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, MapPin, ExternalLink, HelpCircle, FileText, Plane } from 'lucide-react';
interface TopBannerProps {
  location: string;
  event: string;
}
const QUICK_LINKS = [{
  label: 'Weather FAQs',
  icon: HelpCircle,
  href: '#'
}, {
  label: 'Waiver Rules',
  icon: FileText,
  href: '#'
}, {
  label: 'Affected Airports',
  icon: Plane,
  href: '#'
}] as any[];

// @component: TopBanner
export const TopBanner = ({
  location,
  event
}: TopBannerProps) => {
  // @return
  return <motion.div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg" initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <motion.div className="flex items-center space-x-2" initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.2
          }}>
              <MapPin className="w-5 h-5 text-blue-200" />
              <span className="text-sm font-medium">
                <span>Location Detected:</span>
              </span>
              <span className="text-sm font-semibold bg-white/20 px-2 py-1 rounded">
                <span>{location}</span>
              </span>
            </motion.div>
          </div>

          <motion.div className="flex items-center space-x-3 bg-red-500/20 border border-red-300/30 rounded-lg px-4 py-2" initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.3
        }}>
            <AlertTriangle className="w-5 h-5 text-red-200" />
            <span className="text-sm font-semibold">
              <span>{event}</span>
            </span>
          </motion.div>

          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-blue-200">
              <span>Quick Links:</span>
            </span>
            <div className="flex items-center space-x-3">
              {QUICK_LINKS.map((link, index) => <motion.a key={`link-${index}`} href={link.href} className="flex items-center space-x-1 text-sm hover:text-blue-200 transition-colors group" initial={{
              opacity: 0,
              y: -5
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4 + index * 0.1
            }} whileHover={{
              scale: 1.05
            }}>
                  <link.icon className="w-4 h-4" />
                  <span>{link.label}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>;
};