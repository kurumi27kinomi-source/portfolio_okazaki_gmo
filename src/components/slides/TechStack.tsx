import { Briefcase, Rocket, Code2 } from 'lucide-react';

export default function TechStack() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-8">
      <div className="max-w-6xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-emerald-400 to-sky-400 rounded-xl">
            <Code2 className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <h2 className="text-slate-800">技術構成（業務 × 自主研鑽）</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* 業務技術 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-slate-800">業務で扱ってきた技術</h3>
            </div>
            
            <div className="space-y-5">
              <div>
                <div className="text-sm text-emerald-600 mb-2">言語・フレームワーク</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-sm border border-emerald-100">C# .NET</span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-sm border border-emerald-100">WPF</span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-sm border border-emerald-100">Java</span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-sm border border-emerald-100">Android</span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-sm border border-emerald-100">Objective-C</span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-sm border border-emerald-100">iOS</span>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-emerald-600 mb-2">開発領域</div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>銀行・金融系アプリの設計〜試験工程</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>カメラ・OCR・マイナンバー読取SDKなどの連携開発</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Android／iOS 双方の動作検証・ストアリリース対応</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-emerald-100">
                <p className="text-sm text-slate-600">
                  マルチOS環境での品質確保・リリース経験<br />
                  チーム連携による継続的な保守・改修
                </p>
              </div>
            </div>
          </div>
          
          {/* 自主研鑽 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-sky-100 rounded-lg">
                <Rocket className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-slate-800">自主研鑽・個人開発</h3>
            </div>
            
            <div className="space-y-5">
              <div>
                <div className="text-sm text-sky-600 mb-2">フロントエンド</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 rounded-lg text-sm border border-sky-100">Next.js</span>
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 rounded-lg text-sm border border-sky-100">TypeScript</span>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-sky-600 mb-2">バックエンド</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 rounded-lg text-sm border border-sky-100">AWS Lambda</span>
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 rounded-lg text-sm border border-sky-100">API Gateway</span>
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 rounded-lg text-sm border border-sky-100">EventBridge</span>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-sky-600 mb-2">データストア・AI</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 rounded-lg text-sm border border-sky-100">DynamoDB</span>
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 rounded-lg text-sm border border-sky-100">Grok API</span>
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 rounded-lg text-sm border border-sky-100">OpenAI</span>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-sky-600 mb-2">IaC・通知連携</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 rounded-lg text-sm border border-sky-100">AWS CDK</span>
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 rounded-lg text-sm border border-sky-100">LINE Bot</span>
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 rounded-lg text-sm border border-sky-100">Slack Bot</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-sky-100">
                <p className="text-sm text-slate-600 italic">
                  業務で培った設計・実装力を土台に、個人開発ではAI・クラウドを活用した次世代アプリ開発を探求中。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
