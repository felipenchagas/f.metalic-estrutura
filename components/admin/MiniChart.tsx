interface ChartDay {
    label: string
    count: number
    pct: number
}

export default function MiniChart({ data }: { data: ChartDay[] }) {
    return (
        <div className="p-5 bg-[#111] border border-white/8 rounded-sm">
            <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-4">Orçamentos — últimos 7 dias</p>
            <div className="flex items-end gap-2 h-24">
                {data.map((d, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <span className="text-[10px] text-white/40 font-mono">{d.count > 0 ? d.count : ''}</span>
                        <div className="w-full relative group">
                            <div
                                className="w-full bg-[#C0392B] rounded-sm transition-all duration-700 group-hover:bg-[#E74C3C]"
                                style={{ height: `${Math.max(d.pct, d.count > 0 ? 8 : 2)}%`, maxHeight: '72px', minHeight: d.count > 0 ? '6px' : '2px' }}
                            />
                        </div>
                        <span className="text-[9px] text-white/20 capitalize">{d.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
