import { User } from 'lucide-react';

export default function AboutMe() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-8">
      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-emerald-400 to-sky-400 rounded-xl">
            <User className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <h2 className="text-slate-800">About Me</h2>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-100 space-y-8">
          <div className="space-y-6">
            <p className="text-slate-700 text-lg leading-relaxed">
              これまでシステム開発において、設計・実装・運用を中心にお客様の課題解決に貢献してきました。
            </p>
            
            <p className="text-slate-700 text-lg leading-relaxed">
              今後は、よりビジネスに近い立場で上流工程にも関わり、技術を"手段"としてビジネスに価値を生み出せるエンジニアを目指しています。
            </p>
            
            <p className="text-slate-700 text-lg leading-relaxed">
              家庭との両立を大切にしながら、柔軟な働き方で仲間と共に成果を上げていきたいと考えています。
            </p>
          </div>
          
          <div className="pt-6 border-t border-emerald-100">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 rounded"></div>
              <div className="text-sm text-slate-500">価値を生み出すエンジニアへ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
