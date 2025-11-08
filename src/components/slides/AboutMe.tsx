import { User } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-8">
      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-emerald-400 to-sky-400 rounded-xl">
            <User
              className="w-8 h-8 text-white"
              strokeWidth={2}
            />
          </div>
          <h2 className="text-slate-800">About Me</h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-100 space-y-8">
          <div className="space-y-6">
            <p className="text-slate-700 text-lg leading-relaxed">
              これまで、要件定義から設計・実装・運用まで一貫して携わり、
              技術的な課題解決だけでなく、チーム全体の生産性向上にも取り組んできました。
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              今後は、より経営やサービスの意図を理解したうえで、
              技術を“手段”としてビジネスに価値を還元できるエンジニアを目指しています。
              企画段階から関わり、課題の本質を捉え、最適解を導く力を磨き続けます。
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              チームの枠を超え、仲間の成長を支援しながら、
              顧客・仲間・家族の幸せが循環する開発環境を築いていきたいと考えています。
            </p>
          </div>

          <div className="pt-6 border-t border-emerald-100">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 rounded"></div>
              <div className="text-sm text-slate-500">
                価値を生み出すエンジニアへ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}