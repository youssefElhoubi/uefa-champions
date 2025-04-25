"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-2">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full bg-slate-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-600 transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex space-x-1">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPageChange(index + 1)}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentPage === index + 1 ? "bg-purple-600 text-white" : "bg-slate-700 text-white hover:bg-slate-600"
            }`}
          >
            {index + 1}
          </motion.button>
        ))}
      </div>

      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full bg-slate-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-600 transition-colors"
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

export default Pagination
