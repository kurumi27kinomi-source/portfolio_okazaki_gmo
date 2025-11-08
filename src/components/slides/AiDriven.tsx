import { Brain, Users, Code } from "lucide-react";

export default function AiDriven() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-8">
      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-violet-400 to-sky-400 rounded-xl">
            <Brain
              className="w-8 h-8 text-white"
              strokeWidth={2}
            />
          </div>
          <h2 className="text-slate-800 text-2xl font-semibold">
            AI駆動開発の設計思想
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-100 space-y-10">
          <div className="space-y-6 text-lg leading-relaxed text-slate-700">
            <p>
              AIを単なる自動化ツールではなく、共に考え、創造する“パートナー”と捉える。
              人の知見とAIの生成力を掛け合わせ、より深く速く価値を届ける開発を目指す。
            </p>

            <p>
              そのために、基本設計（HLD）では目的・制約・背景をAIと共有し、
              詳細設計（LLD）では安全かつ再現性の高いコード生成環境を整える。
              設計段階での「意図の共有」と「責任の明確化」が最も重要だと考えている。
            </p>

            <p>
              技術やAIはあくまで“手段”であり、目的は顧客の課題解決とチームの成長。
              人が設計意図を明確にし、AIがその意図を正確に実装する──
              その連携によって、より本質的な価値創出が可能になる。
            </p>

            <p>
              これが、効率と品質を両立させる次世代の開発スタイル「AI駆動開発（AI-Driven
              Development）」の理想形であり、
              人とAIが共に進化するための“仕組みづくり”だと考えている。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100">
              <div className="w-12 h-12 mx-auto mb-4 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-emerald-700 font-medium mb-2">
                人
              </div>
              <p className="text-sm text-slate-600 leading-snug">
                ビジョンと設計意図を明確にし、
                <br />
                チームの方向性を示す。
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-sky-50 to-white rounded-2xl border border-sky-100">
              <div className="w-12 h-12 mx-auto mb-4 bg-sky-100 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-sky-600" />
              </div>
              <div className="text-sky-700 font-medium mb-2">
                AI
              </div>
              <p className="text-sm text-slate-600 leading-snug">
                人の意図を正確に理解し、
                <br />
                安全かつ迅速に実装する。
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-violet-50 to-white rounded-2xl border border-violet-100">
              <div className="w-12 h-12 mx-auto mb-4 bg-violet-100 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-violet-600" />
              </div>
              <div className="text-violet-700 font-medium mb-2">
                共創
              </div>
              <p className="text-sm text-slate-600 leading-snug">
                人とAIの強みを融合し、
                <br />
                継続的に価値を生み出す。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}