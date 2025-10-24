import { useState } from 'react'

const tabs = [
  { id: 'about', label: 'About Me' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'recommended', label: 'Recommended' }
]

export default function Navbar() {
  const [active, setActive] = useState('about')

  return (
    <div className="w-full max-w-md">
      {/* Outer widget background to match Figma card */}
      <div className="bg-[#2a2f33] rounded-xl p-4 shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
        {/* Pill nav */}
        <div
          className="relative bg-[#151617] rounded-full p-1 flex items-center gap-2"
          style={{ boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.8)' }}
        >
          {tabs.map((t) => {
            const isActive = t.id === active
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2` +
                  (isActive
                    ? ' bg-[#3b3f42] text-white shadow-[0_6px_18px_rgba(0,0,0,0.6)]'
                    : ' text-[#cfcfcf] bg-transparent')}
              >
                {t.label}
              </button>
            )
          })}
        </div>

        {/* Example content area under the nav to show spacing */}
        <div className="mt-4 text-left text-sm text-[#cfcfcf]">
          {/* Simple placeholder paragraph to show where the widget content will go. */}
          <p className="line-clamp-4">
            {active === 'about' &&
              "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now."}
            {active === 'experiences' && 'Experiences content goes here — list of roles, dates, highlights.'}
            {active === 'recommended' && 'Recommended content — suggestions and related items.'}
          </p>
        </div>
      </div>
    </div>
  )
}
