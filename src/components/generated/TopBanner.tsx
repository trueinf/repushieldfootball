import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, MapPin, ExternalLink, HelpCircle, FileText, Plane } from 'lucide-react';
interface TopBannerProps {
  location: string;
  event: string;
  mpid?: string;
}
const QUICK_LINKS = [{
  label: 'Weather FAQs',
  icon: HelpCircle,
  href: '#',
  mpid: "48469836-6202-47f2-a493-d245bc169e5b"
}, {
  label: 'Waiver Rules',
  icon: FileText,
  href: '#',
  mpid: "aff23c6f-df43-44e8-a958-be7edf298010"
}, {
  label: 'Affected Airports',
  icon: Plane,
  href: '#',
  mpid: "b4b8f3cf-151d-447f-a436-c68de000125d"
}] as any[];

// @component: TopBanner
export const TopBanner = ({
  location,
  event
}: TopBannerProps) => {
  // @return
  return <SortableContainer dndKitId="fe7b7cdd-fd3d-4047-b857-ead1916ba3c0" containerType="regular" prevTag="motion.div" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg" initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} data-magicpath-id="0" data-magicpath-path="TopBanner.tsx">
      <SortableContainer dndKitId="1a4909f5-9387-4c1d-bda8-dfea1618d552" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-6 py-4" data-magicpath-id="1" data-magicpath-path="TopBanner.tsx">
        <SortableContainer dndKitId="7566e18c-47b1-4bcb-adc1-dfc0bfba76f5" containerType="regular" prevTag="div" className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0" data-magicpath-id="2" data-magicpath-path="TopBanner.tsx">
          <SortableContainer dndKitId="8fe149e9-76d1-4974-b160-9025ae7c6ef9" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="3" data-magicpath-path="TopBanner.tsx">
            <SortableContainer dndKitId="e5799ac0-5d0a-4cf9-b758-47c72ab3cf77" containerType="regular" prevTag="motion.div" className="flex items-center space-x-2" initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.2
          }} data-magicpath-id="4" data-magicpath-path="TopBanner.tsx">
              <MapPin className="w-5 h-5 text-blue-200" data-magicpath-id="5" data-magicpath-path="TopBanner.tsx" />
              <span className="text-sm font-medium" data-magicpath-id="6" data-magicpath-path="TopBanner.tsx">
                <span data-magicpath-id="7" data-magicpath-path="TopBanner.tsx">Location Detected:</span>
              </span>
              <span className="text-sm font-semibold bg-white/20 px-2 py-1 rounded" data-magicpath-id="8" data-magicpath-path="TopBanner.tsx">
                <span data-magicpath-id="9" data-magicpath-path="TopBanner.tsx">{location}</span>
              </span>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="7f8be651-0301-4dc5-8fbc-9c4b50c79813" containerType="regular" prevTag="motion.div" className="flex items-center space-x-3 bg-red-500/20 border border-red-300/30 rounded-lg px-4 py-2" initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.3
        }} data-magicpath-id="10" data-magicpath-path="TopBanner.tsx">
            <AlertTriangle className="w-5 h-5 text-red-200" data-magicpath-id="11" data-magicpath-path="TopBanner.tsx" />
            <span className="text-sm font-semibold" data-magicpath-id="12" data-magicpath-path="TopBanner.tsx">
              <span data-magicpath-id="13" data-magicpath-path="TopBanner.tsx">{event}</span>
            </span>
          </SortableContainer>

          <SortableContainer dndKitId="066bc572-58fa-47d5-957b-28765531e517" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="14" data-magicpath-path="TopBanner.tsx">
            <span className="text-sm font-medium text-blue-200" data-magicpath-id="15" data-magicpath-path="TopBanner.tsx">
              <span data-magicpath-id="16" data-magicpath-path="TopBanner.tsx">Quick Links:</span>
            </span>
            <SortableContainer dndKitId="6b97acbb-5ad8-4c38-a054-0a6f4451ff7e" containerType="collection" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="17" data-magicpath-path="TopBanner.tsx">
              {QUICK_LINKS.map((link, index) => <motion.a data-magicpath-motion-tag="motion.a" key={`link-${index}`} href={link.href} className="flex items-center space-x-1 text-sm hover:text-blue-200 transition-colors group" initial={{
              opacity: 0,
              y: -5
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4 + index * 0.1
            }} whileHover={{
              scale: 1.05
            }} data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="TopBanner.tsx">
                  <link.icon className="w-4 h-4" data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="TopBanner.tsx" />
                  <span data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:string" data-magicpath-id="20" data-magicpath-path="TopBanner.tsx">{link.label}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="TopBanner.tsx" />
                </motion.a>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};