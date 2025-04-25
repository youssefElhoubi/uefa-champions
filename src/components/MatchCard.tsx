"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

interface MatchCardProps {
  match: any
  onClick: () => void
}

function MatchCard({ match, onClick }: MatchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700 hover:border-purple-500 cursor-pointer transition-all"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-slate-400">{match.date}</div>
          <div className="text-sm text-slate-400">{match.stadium}</div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col items-center w-2/5">
            <div className="w-16 h-16 relative mb-2">
              <img
                src={match.homeTeam.logo || "/placeholder.svg"}
                alt={match.homeTeam.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center font-semibold">{match.homeTeam.name}</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold mb-1">
              {match.score.home} - {match.score.away}
            </div>
            <div className="text-xs text-slate-400">FULL TIME</div>
          </div>

          <div className="flex flex-col items-center w-2/5">
            <div className="w-16 h-16 relative mb-2">
              <img
                src={match.awayTeam.logo || "/placeholder.svg"}
                alt={match.awayTeam.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center font-semibold">{match.awayTeam.name}</div>
          </div>
        </div>

        <div className="flex items-center justify-center p-2 bg-slate-700 rounded-lg">
          <Trophy className="w-4 h-4 text-yellow-400 mr-2" />
          <span className="text-sm">
            Man of the Match: <span className="font-semibold">{match.manOfTheMatch.name}</span>
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default MatchCard
