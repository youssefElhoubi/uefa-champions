"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Trophy, MapPin, BellIcon as Whistle } from "lucide-react"

interface MatchDetailsProps {
  match: any
  onBack: () => void
}

function MatchDetails({ match, onBack }: MatchDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-800 rounded-lg overflow-hidden shadow-xl border border-slate-700"
    >
      <div className="p-6">
        <button onClick={onBack} className="flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to results
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Quarter-Final Match Details</h2>
          <div className="text-slate-400">
            {match.date} • {match.time}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex flex-col items-center mb-6 md:mb-0 md:w-1/3">
            <div className="w-24 h-24 relative mb-4">
              <img
                src={match.homeTeam.logo || "/placeholder.svg"}
                alt={match.homeTeam.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xl font-bold">{match.homeTeam.name}</div>
          </div>

          <div className="flex flex-col items-center mb-6 md:mb-0 md:w-1/3">
            <div className="text-4xl font-bold mb-2">
              {match.score.home} - {match.score.away}
            </div>
            <div className="px-4 py-1 bg-slate-700 rounded-full text-sm">FULL TIME</div>
          </div>

          <div className="flex flex-col items-center md:w-1/3">
            <div className="w-24 h-24 relative mb-4">
              <img
                src={match.awayTeam.logo || "/placeholder.svg"}
                alt={match.awayTeam.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xl font-bold">{match.awayTeam.name}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-700 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 text-purple-400 mr-2" />
              <h3 className="font-semibold">Stadium</h3>
            </div>
            <p>{match.stadium}</p>
          </div>

          <div className="bg-slate-700 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <Whistle className="w-5 h-5 text-purple-400 mr-2" />
              <h3 className="font-semibold">Referee</h3>
            </div>
            <p>{match.referee}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/50 to-emerald-900/50 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Trophy className="w-6 h-6 text-yellow-400 mr-2" />
            <h3 className="text-xl font-bold">Man of the Match</h3>
          </div>

          <div className="flex items-center">
            <div className="w-16 h-16 relative mr-4">
              <img
                src={match.manOfTheMatch.photo || "/placeholder.svg"}
                alt={match.manOfTheMatch.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="font-bold text-lg">{match.manOfTheMatch.name}</div>
              <div className="text-slate-300">{match.manOfTheMatch.team}</div>
              <div className="text-sm text-slate-400">{match.manOfTheMatch.position}</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Match Highlights</h3>
          <ul className="space-y-4">
            {match.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-slate-600 text-xs font-semibold px-2 py-1 rounded mr-3 mt-0.5">
                  {highlight.minute}'
                </div>
                <div>
                  <div className="font-semibold">{highlight.event}</div>
                  <div className="text-sm text-slate-400">{highlight.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default MatchDetails
