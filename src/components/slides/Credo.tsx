import { Heart, Target, BookOpen, TrendingUp, Smile, HandshakeIcon, Shield, Ear } from 'lucide-react';

export default function Credo() {
  const credos = [
    { icon: Heart, text: '仲間を見捨てない', color: 'from-rose-400 to-pink-400' },
    { icon: Target, text: '自走を支える環境をつくる', color: 'from-emerald-400 to-teal-400' },
    { icon: BookOpen, text: '学び続け、発信し続ける', color: 'from-sky-400 to-blue-400' },
    { icon: TrendingUp, text: '投資思考で選択する', color: 'from-violet-400 to-purple-400' },
    { icon: Smile, text: '言葉で笑顔をつくる', color: 'from-amber-400 to-orange-400' },
    { icon: HandshakeIcon, text: '五方良しの選択をする', color: 'from-cyan-400 to-sky-400' },
    { icon: Shield, text: '信じて任せる', color: 'from-indigo-400 to-violet-400' },
    { icon: Ear, text: '耳を傾け、受け止める', color: 'from-emerald-400 to-green-400' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-50 to-emerald-50 p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-slate-800 mb-3">CREDO & VALUES</h2>
          <p className="text-slate-600 text-lg">行動指針</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {credos.map((credo, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 mb-4 bg-gradient-to-br ${credo.color} rounded-xl flex items-center justify-center`}>
                <credo.icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <p className="text-slate-700">{credo.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl border border-emerald-100">
            <p className="text-slate-700">
              これらの価値観を大切に、人とAIと仲間が共に成長する環境を築いていきます
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
