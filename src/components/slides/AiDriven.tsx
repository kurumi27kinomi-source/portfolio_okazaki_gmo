import { Brain, Users, Code } from 'lucide-react';

export default function AiDriven() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-8">
      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-violet-400 to-sky-400 rounded-xl">
            <Brain className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <h2 className="text-slate-800">AI駆動開発の設計思想</h2>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-100 space-y-10">
          <div className="space-y-6">
            <p className="text-slate-700 text-lg leading-relaxed">
              AIを単なる自動化ツールではなく、"共創パートナー"と捉える。
            </p>
            
            <p className="text-slate-700 text-lg leading-relaxed">
              基本設計（HLD）でAIと人の認識を合わせ、詳細設計（LLD）でAIが安全にコード生成できる環境を整備。
            </p>
            
            <p className="text-slate-700 text-lg leading-relaxed">
              人が設計意図を明確にし、AIがその意図を正確に実装する──それがAI駆動開発の理想形。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100">
              <div className="w-12 h-12 mx-auto mb-4 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-emerald-700 mb-2">人</div>
              <p className="text-sm text-slate-600">設計意図を明確化</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-sky-50 to-white rounded-2xl border border-sky-100">
              <div className="w-12 h-12 mx-auto mb-4 bg-sky-100 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-sky-600" />
              </div>
              <div className="text-sky-700 mb-2">AI</div>
              <p className="text-sm text-slate-600">意図を正確に実装</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-violet-50 to-white rounded-2xl border border-violet-100">
              <div className="w-12 h-12 mx-auto mb-4 bg-violet-100 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-violet-600" />
              </div>
              <div className="text-violet-700 mb-2">共創</div>
              <p className="text-sm text-slate-600">価値を生み出す開発</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
