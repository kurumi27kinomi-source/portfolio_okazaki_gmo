import { Heart, Lightbulb } from 'lucide-react';

export default function Philosophy() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-8">
      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-xl">
            <Heart className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <h2 className="text-slate-800">GMOコネクトの理念に共感</h2>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-100 space-y-8">
          <div className="space-y-6">
            <p className="text-slate-700 text-lg leading-relaxed">
              GMOコネクトの理念『価値あるつながりを提供する』『楽しく働く』に強く共感しています。
            </p>
            
            <p className="text-slate-700 text-lg leading-relaxed">
              仲間とのつながりを感じながら、AIと人が協働する開発を推進し、技術とビジネスの橋渡しができるエンジニアとして成長していきたいと考えています。
            </p>
          </div>
          
          <div className="mt-10 pt-8 border-t border-sky-100">
            <div className="flex items-center gap-4 justify-center">
              <Lightbulb className="w-6 h-6 text-emerald-500" />
              <p className="text-xl text-slate-800">
                「人とAIと仲間が共に成長する未来をつくりたい。」
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100">
              <div className="text-emerald-600 mb-2">価値あるつながり</div>
              <p className="text-sm text-slate-600">技術とビジネスの橋渡し</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-sky-50 to-white rounded-2xl border border-sky-100">
              <div className="text-sky-600 mb-2">楽しく働く</div>
              <p className="text-sm text-slate-600">仲間と共に成長する</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
