import { Compass, Sparkles } from 'lucide-react';

export default function FutureVision() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-8">
      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-emerald-400 to-sky-400 rounded-xl">
            <Compass className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <h2 className="text-slate-800">Future Vision</h2>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-100 space-y-10">
          <div className="space-y-6">
            <p className="text-slate-700 text-xl leading-relaxed">
              ビジネスと技術の両軸で価値を生み出せるエンジニアとして、人・AI・チームが共に成長できる開発文化を作りたい。
            </p>
            
            <p className="text-slate-700 text-xl leading-relaxed">
              AIを通じて"価値あるつながり"を生み出し、仲間と共に新しい未来を形にしていきたい。
            </p>
          </div>
          
          <div className="pt-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-sky-400 blur-2xl opacity-20"></div>
              <Sparkles className="w-16 h-16 text-emerald-500 relative" strokeWidth={1.5} />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100">
              <div className="text-emerald-700 mb-2">ビジネス</div>
              <p className="text-sm text-slate-600">価値を生み出す上流工程</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-sky-50 to-white rounded-2xl border border-sky-100">
              <div className="text-sky-700 mb-2">技術</div>
              <p className="text-sm text-slate-600">AI協働の開発文化</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-violet-50 to-white rounded-2xl border border-violet-100">
              <div className="text-violet-700 mb-2">仲間</div>
              <p className="text-sm text-slate-600">共に成長する未来</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">岡崎 直也｜Portfolio 2025</p>
        </div>
      </div>
    </div>
  );
}
