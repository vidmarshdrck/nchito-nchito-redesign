import { Award } from 'lucide-react'

export default function RankingBadge() {
  return (
    <div className="flex items-center justify-center gap-3 border-y border-white/10 bg-neutral-800 px-5 py-4 text-center">
      <Award className="text-primary" size={22} />
      <p className="text-sm font-medium tracking-wide text-white/85">Ranked by Chambers Global 2025</p>
    </div>
  )
}
