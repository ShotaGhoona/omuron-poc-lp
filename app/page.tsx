"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Check,
  ChevronDown,
  ChevronRight,
  Globe,
} from "lucide-react";

/* ============================================================
   Header
   ============================================================ */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-[100] w-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.16)] py-[5px] pr-[5px] pl-5 md:px-[30px] md:pt-[15px] md:pb-3">
      <div className="flex items-center justify-between">
        <p className="shrink-0">
          <a href="/" className="flex items-baseline gap-3 no-underline whitespace-nowrap">
            <span className="font-bold text-[24px] tracking-[0.1em] text-omron-blue-header leading-none">
              OMRON
            </span>
            <span className="text-[12px] md:text-[14px] text-omron-text border-l border-omron-border-light pl-3">
              オムロン デジタル株式会社 | Japan
            </span>
          </a>
        </p>

        <div
          className={`
            ${menuOpen ? "translate-x-0" : "translate-x-[101%]"}
            fixed top-[60px] left-0 w-full h-full overflow-y-auto bg-[#FCFCFC] flex flex-col pb-[100px]
            transition-transform duration-[600ms] ease-in-out
            md:translate-x-0 md:static md:w-auto md:h-auto md:flex md:flex-row md:items-center
            md:bg-transparent md:overflow-visible md:pb-0 md:gap-10
          `}
        >
          <nav className="w-full md:w-auto border-t border-omron-border md:border-none px-8 py-8 md:p-0">
            <ul className="nosp flex justify-end gap-[30px]">
              <li>
                <a href="#" className="text-omron-text text-[14px] font-medium no-underline hover:underline">
                  採用情報
                </a>
              </li>
              <li>
                <a href="#" className="text-omron-text text-[14px] font-medium no-underline hover:underline">
                  文字入力技術
                </a>
              </li>
              <li className="relative px-[10px] border-l border-r border-omron-border-light">
                <button
                  className="text-[14px] font-medium text-omron-text flex items-center gap-1"
                  onClick={() => setLangOpen(!langOpen)}
                >
                  Language
                  <Globe size={16} className="text-omron-text" />
                  <ChevronDown size={12} className="text-omron-text" />
                </button>
                {langOpen && (
                  <ul className="absolute top-[40px] left-0 bg-white rounded-[5px] w-[150px] z-[100] border border-omron-border-light shadow-[0_0_12px_rgba(0,0,0,0.16)] py-5">
                    <li>
                      <a href="#" className="block px-[15px] py-[5px] text-[14px] text-omron-text no-underline hover:text-omron-blue">
                        Global - English
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a href="#" className="block px-[15px] py-[5px] text-[14px] text-omron-text no-underline bg-omron-light">
                        Japan - 日本語
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            <ul className="flex flex-col md:flex-row md:justify-end md:gap-[55px] gap-[10px] md:mt-[5px]">
              {["製品・サービス", "事業紹介", "ビジョン", "会社情報"].map(
                (item) => (
                  <li key={item} className="border-b border-omron-border md:border-none">
                    <a
                      href="#"
                      className="block text-[16px] md:text-[14px] font-bold md:font-medium text-omron-text no-underline py-[15px] md:py-[10px] md:pb-[10px] hover:text-omron-blue transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li className="nopc border-b border-omron-border">
                <a href="#" className="block text-[16px] font-bold text-omron-text no-underline py-[15px]">
                  採用情報
                </a>
              </li>
              <li className="nopc border-b border-omron-border">
                <a href="#" className="block text-[16px] font-bold text-omron-text no-underline py-[15px]">
                  文字入力技術
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4 md:gap-[15px] md:py-[15px] px-8 md:px-0 shrink-0">
            <a
              href="#"
              className="flex items-center justify-center w-[43vw] md:w-[180px] h-[56px] md:h-[60px] text-[14px] md:text-[16px] font-bold border border-omron-blue-header rounded-[5px] text-omron-blue-header bg-white no-underline hover:bg-omron-blue-header hover:text-white transition-colors"
            >
              資料ダウンロード
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-[43vw] md:w-[180px] h-[56px] md:h-[60px] text-[14px] md:text-[16px] font-bold bg-omron-red border border-omron-red rounded-[5px] text-white no-underline hover:bg-white hover:text-omron-red transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>

        <button
          className="nopc w-[55px] h-[55px] flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          {menuOpen ? (
            <X size={28} className="text-omron-blue-header" />
          ) : (
            <Menu size={28} className="text-omron-blue-header" />
          )}
        </button>
      </div>
    </header>
  );
}

/* ============================================================
   Hero
   ============================================================ */
function Hero() {
  return (
    <div className="relative mt-[50px] md:mt-[120px]">
      {/* パンくず */}
      <nav className="absolute top-0 left-0 py-[15px] px-[10px] md:px-[50px] w-full overflow-x-auto whitespace-nowrap">
        <ol className="flex text-[12px] md:text-[14px]">
          {["TOP", "製品・サービス", "AI図面検索", "ARCHAIVE"].map(
            (item, i) => (
              <li key={item} className="flex items-center">
                {i > 0 && <span className="mx-[6px] md:mx-[15px]">/</span>}
                <a href="#" className="text-omron-text no-underline hover:underline">
                  {item}
                </a>
              </li>
            )
          )}
        </ol>
      </nav>

      {/* タイトル */}
      <div className="max-w-[1200px] mx-auto py-[80px] md:py-[100px] md:pb-[80px] px-5 md:px-0">
        <h1 className="text-[27px] md:text-[46px] font-bold tracking-[0.06em] leading-[1.4] relative pb-[20px] md:pb-[20px]">
          AI図面検索
          <span className="absolute bottom-0 left-0 w-[60px] md:w-[80px] h-[3px] md:h-[4px] bg-omron-blue" />
        </h1>
        <p className="mt-[20px] md:mt-[30px] text-[18px] md:text-[24px] font-bold tracking-[0.06em] leading-[1.5]">
          図面起点のAIデータプラットフォーム「ARCHAIVE」
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   ServiceArea — キャッチコピー
   ============================================================ */
function ServiceArea() {
  return (
    <div id="about" className="bg-omron-light py-[40px] md:py-[80px]">
      <div className="max-w-[1000px] mx-auto px-5 md:px-0">
        <p className="text-[16px] md:text-[18px] leading-[1.78] tracking-[0.06em]">
          製造現場では、図面・見積・仕様・検査記録・判断の経緯といった情報が、部門やファイル形式ごとに分散していることが少なくありません。ARCHAIVEは、AI図面検索を起点に、それらの情報を一つの基盤に集約し、検索・参照・AIでの活用までを可能にする、製造業のためのAIデータ基盤です。
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   SectionNav
   ============================================================ */
function SectionNav() {
  const navItems = [
    { href: "#section1", label: "こんな方に", labelSp: "おすすめ" },
    { href: "#section2", label: "サービス概要", labelSp: "" },
    { href: "#section4", label: "ご相談の流れ", labelSp: "" },
    { href: "#section5", label: "よくある", labelSp: "ご質問" },
    { href: "#section6", label: "関連資料", labelSp: "" },
  ];

  return (
    <div className="max-w-[1100px] mx-auto py-[40px] md:py-[100px] px-5 md:px-0">
      <ul className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[10px] md:gap-x-[20px] md:gap-y-[15px]">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="w-full flex justify-between items-center bg-omron-dark text-white font-bold text-[14px] md:text-[16px] leading-[1.69] tracking-[0.06em] no-underline rounded-[5px] py-3 md:py-[18px] px-4 md:px-[30px] pr-[40px] md:pr-[50px] relative hover:bg-[#0b3163] transition-colors h-full"
            >
              {item.label}
              {item.labelSp && <br className="nopc" />}
              {item.labelSp && (
                <span className="nopc">{item.labelSp}</span>
              )}
              <span className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 w-[10px] md:w-[14px] h-[10px] md:h-[14px] border-t-2 border-r-2 border-white rotate-[135deg]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   Recommend — こんな方におすすめ
   ============================================================ */
function Recommend() {
  const items = [
    "図面探しに時間を取られている設計・開発部門の責任者",
    "図面起点で最適なサプライヤーと適正価格を即断したい調達・購買担当者",
    "情報のサイロ化を解消したい製造業の経営者・DX推進担当",
    "技術継承・ノウハウ蓄積に課題を抱える工場長・生産技術部門の管理者",
    "独自業務に合わせたAI活用を検討する製造設備／部品メーカーの事業責任者",
  ];

  return (
    <section
      id="section1"
      className="max-w-[1000px] mx-auto bg-omron-light rounded-[10px] py-8 md:py-10 px-5 md:px-10 mb-[50px] md:mb-[100px]"
    >
      <h2 className="text-[20px] md:text-[24px] font-bold text-omron-blue text-center pb-3 mb-0 md:mb-[30px]">
        こんな方におすすめ
        <span className="block w-[40px] md:w-[60px] h-[2px] md:h-[3px] bg-omron-blue mx-auto mt-[10px] md:mt-[15px]" />
      </h2>

      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            className={`flex items-center gap-4 md:gap-[15px] py-3 md:py-[15px] text-[16px] md:text-[18px] leading-[1.33] ${
              i > 0 ? "border-t border-[#d9d9d9]" : ""
            }`}
          >
            <Check
              size={22}
              className="text-omron-blue shrink-0"
              strokeWidth={3}
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ============================================================
   Placeholder画像
   ============================================================ */
function PlaceholderImage({
  width,
  height,
  label,
}: {
  width: number;
  height: number;
  label: string;
}) {
  return (
    <div
      className="w-full flex items-center justify-center rounded-lg text-[#999] text-[14px] md:text-[16px] mb-8 md:mb-10"
      style={{
        maxWidth: `${width}px`,
        aspectRatio: `${width}/${height}`,
        background: "#e8e8e8",
        margin: "0 auto 40px",
      }}
    >
      {label}
    </div>
  );
}

/* ============================================================
   ServiceOverview — サービス概要
   ============================================================ */
function ServiceOverview() {
  return (
    <section
      id="section2"
      className="max-w-[1000px] mx-auto pb-[20px] md:pb-[100px] px-5 md:px-0"
    >
      <h2 className="text-[24px] md:text-[35px] font-bold text-center mb-[20px] md:mb-[60px] tracking-[0.06em] leading-[1.37]">
        サービス概要
      </h2>

      {/* サービス紹介画像 */}
      <img
        src="/images/archaive/LP1.png"
        alt="ARCHAIVE サービス紹介資料"
        className="w-full max-w-[1000px] h-auto mx-auto mb-10 block"
      />

      <h3 className="text-[24px] md:text-[28px] font-bold border-l-[3px] border-omron-blue pl-5 mb-5 leading-[1.71] tracking-[0.06em]">
        ARCHAIVEが生まれた理由
      </h3>

      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        製造業の現場には、数十年分の経験と判断が蓄積されています。材質の選定理由、外注先への信頼、過去の失敗と改善。しかしそのほとんどは、担当者の記憶か、バラバラなフォルダの中に眠ったままです。
      </p>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        ARCHAIVEは、図面管理ソフトではありません。図面を起点に、製品にまつわるすべての情報を蓄積し、AIが活用できる状態をつくる、製造業の情報基盤です。大企業がPLMで実現してきた情報の一元管理を、中小〜中堅製造業の現場でも、段階的に構築できます。
      </p>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        そして、ARCHAIVEをつくっているのは、AI開発を専門とする技術チームです。データを溜めるだけでなく、溜めたデータをAIで活用するところまで、設計思想として組み込んでいます。
      </p>

      {/* サービスラインナップ画像 */}
      <img
        src="/images/archaive/LP2.png"
        alt="ARCHAIVE サービスラインナップ"
        className="w-full max-w-[1000px] h-auto mx-auto mt-10 mb-10 block"
      />

      <h3 className="text-[24px] md:text-[28px] font-bold border-l-[3px] border-omron-blue pl-5 mb-5 leading-[1.71] tracking-[0.06em]">
        サービスラインナップ
      </h3>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-[30px]">
        製造業の情報基盤を段階的に構築いただけるよう、中核機能から導入支援・個別開発まで、サービスを体系化してご提供しています。
      </p>

      <h4 className="text-[20px] md:text-[22px] font-bold mt-[40px] mb-5 tracking-[0.06em]">
        中核機能
      </h4>

      <h5 className="text-[18px] md:text-[20px] font-bold text-omron-blue mt-[30px] mb-3 leading-[1.5] tracking-[0.06em]">
        ◾ AI図面検索・データ統合
      </h5>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        図面・仕様書・見積・検査記録をARCHAIVE上に集約。AI-OCRによる自動データ化と、類似図面検索により、必要な情報へ短時間でアクセスできる環境を整備します。
      </p>

      <h5 className="text-[18px] md:text-[20px] font-bold text-omron-blue mt-[30px] mb-3 leading-[1.5] tracking-[0.06em]">
        ◾ 部品構成管理・バージョン管理
      </h5>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        図面間の親子関係、設変履歴、バージョン差分を自動管理。「最新はどれか」「何が変わったか」を、確認の往復なく把握できます。
      </p>

      <h5 className="text-[18px] md:text-[20px] font-bold text-omron-blue mt-[30px] mb-3 leading-[1.5] tracking-[0.06em]">
        ◾ 案件・書類管理
      </h5>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        設計・製造・調達・品質の各部門が、同じ情報基盤で動ける環境を実現。案件ごとに関連図面・見積・やり取りを紐付け、部門間の情報ギャップを解消します。
      </p>

      <h5 className="text-[18px] md:text-[20px] font-bold text-omron-blue mt-[30px] mb-3 leading-[1.5] tracking-[0.06em]">
        ◾ AIエージェント
      </h5>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        蓄積データをもとに、見積の参考値算出・類似事例の自動提示・検査支援などをAIが自動化。データを溜めた先の活用まで、お客様と伴走します。
      </p>

      <h4 className="text-[20px] md:text-[22px] font-bold mt-[50px] mb-5 tracking-[0.06em]">
        導入支援メニュー
      </h4>

      <h5 className="text-[18px] md:text-[20px] font-bold text-omron-blue mt-[30px] mb-3 leading-[1.5] tracking-[0.06em]">
        ◾ PoC伴走支援
      </h5>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        導入前の検証段階から、AI開発を専門とする技術チームが伴走。貴社固有の図面・業務フローに合わせた検証設計から、効果測定までをサポートします。
      </p>

      <h5 className="text-[18px] md:text-[20px] font-bold text-omron-blue mt-[30px] mb-3 leading-[1.5] tracking-[0.06em]">
        ◾ ARCHAIVE+（個別開発・カスタマイズ）
      </h5>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        標準機能で蓄積されたデータをベースに、貴社専用のAIエージェントを開発。見積自動化・品質検査支援など、個社の課題に特化したAI活用までを、技術チームが設計・実装いたします。
      </p>
    </section>
  );
}

/* ============================================================
   Flow — ご導入の流れ（3ステップ）
   ============================================================ */
function Flow() {
  const steps = [
    {
      number: "01",
      title: "お問合せ",
      text: "貴社の図面・情報管理の現状、抱えていらっしゃる課題をお気軽にお伝えください。",
      colorClass: "text-[#9DB2E3]",
    },
    {
      number: "02",
      title: "要件ヒアリング・現状分析",
      text: "現在の運用・既存システム・解決したい課題を詳しくお聞きし、ARCHAIVEが適する領域を提案するための情報を整理します。",
      colorClass: "text-[#6FA1E1]",
    },
    {
      number: "03",
      title: "ソリューション検討とご提案",
      text: "標準導入プラン、PoC伴走プラン、個別開発プラン（ARCHAIVE+）から、貴社に最適な組合せをご提案します。",
      colorClass: "text-[#4C8EDF]",
    },
    {
      number: "04",
      title: "導入・運用支援",
      text: "導入後も、既存システムとの連携・社員トレーニング・継続的な改善提案まで、伴走いたします。",
      colorClass: "text-[#627BBD]",
    },
  ];

  return (
    <section id="section4" className="py-[50px] md:py-[100px]">
      <div className="text-center mb-[30px] md:mb-[60px]">
        <span className="inline-block bg-omron-blue text-white px-5 py-[2px] rounded-full text-[16px] md:text-[20px] tracking-[0.06em] font-display mb-[10px]">
          FLOW
        </span>
        <h2 className="text-[24px] md:text-[35px] font-bold tracking-[0.06em] leading-[1.37]">
          ご相談の流れ
        </h2>
      </div>

      <ol className="flex flex-col md:flex-row gap-[60px] md:gap-[30px] justify-center px-5 md:px-0 list-none">
        {steps.map((step, i) => (
          <li key={step.number} className="flex-1 max-w-full md:max-w-[260px] relative">
            <div className="flex items-center mt-[10px]">
              <span
                className={`font-display text-[38px] md:text-[48px] font-bold leading-[1.15] w-[40px] md:w-[55px] ${step.colorClass}`}
              >
                {step.number}
              </span>
              <h3 className="text-[20px] md:text-[24px] font-bold tracking-[0.06em] leading-[1.25] flex-1">
                {step.title}
              </h3>
            </div>
            <p className="mt-[8px] md:mt-[10px] text-[16px] leading-[1.5] tracking-[0.06em]">
              {step.text}
            </p>

            {i < steps.length - 1 && (
              <>
                <div className="nopc absolute -bottom-[42px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[22px] border-t-omron-dark" />
                <div className="nosp absolute top-[30px] -right-[25px] w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[17px] border-l-omron-dark" />
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ============================================================
   FAQ — よくあるご質問
   ============================================================ */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "図面管理ツールとの違いは何ですか？",
      a: "図面の検索速度だけを目的としたツールとは、設計思想が異なります。ARCHAIVEは図面を起点に、見積・仕様・検査記録・判断の経緯までをひとつの基盤に集約し、AIで活用できる状態にします。「探す」だけでなく「蓄積し、活かす」ための情報基盤です。",
    },
    {
      q: "既存のCADやERP・ファイルサーバーとの連携は可能ですか？",
      a: "はい。API連携に対応しています。データを移行するのではなく、既存環境に接続する形でご利用いただくため、業務フローを変えずに導入できます。",
    },
    {
      q: "セキュリティ水準を教えてください。",
      a: "ISO 27001準拠。通信：TLS 1.3。保存データ：AES-256暗号化。インフラ：AWS東京リージョン。部署・役職別のアクセス権限管理を標準装備。セキュリティチェックシートへの個別回答も対応いたします。",
    },
    {
      q: "AIの精度や活用範囲はどこまでですか？",
      a: "AI-OCRによる図面の自動データ化、類似図面の形状検索、差分検出、見積参考値の算出、AIエージェントによる社内データ横断検索に対応。蓄積データが増えるほどAIの精度と活用範囲が拡がる設計です。",
    },
  ];

  return (
    <section id="section5" className="py-[50px] md:py-[100px] bg-omron-gray">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        <div className="text-center mb-[30px] md:mb-[60px]">
          <span className="inline-block bg-omron-blue text-white px-5 py-[2px] rounded-full text-[16px] md:text-[20px] tracking-[0.06em] font-display mb-[10px]">
            FAQ
          </span>
          <h2 className="text-[24px] md:text-[35px] font-bold tracking-[0.06em] leading-[1.37]">
            導入検討でよくある論点
          </h2>
        </div>

        <dl>
          {faqs.map((faq, i) => (
            <div key={i} className={i > 0 ? "mt-[15px]" : ""}>
              <dt
                className={`faq-question ${openIndex === i ? "is-open" : ""} flex p-[3px] md:p-[5px] bg-white rounded-[8px]`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="bg-omron-blue rounded-l-[8px] w-[48px] md:w-[70px] flex items-center justify-center text-white font-display text-[32px] md:text-[42px] leading-none py-5 md:py-[25px] shrink-0">
                  Q
                </span>
                <span className="bg-white rounded-r-[8px] flex-1 text-[16px] md:text-[18px] font-bold leading-[1.39] tracking-[0.06em] py-[25px] md:py-[35px] px-4 md:px-[25px] pr-[40px] md:pr-[90px]">
                  {faq.q}
                </span>
              </dt>

              {openIndex === i && (
                <dd className="flex p-[3px] md:p-[5px]">
                  <span className="bg-white rounded-l-[8px] w-[48px] md:w-[70px] flex items-center justify-center text-omron-red font-display text-[32px] md:text-[42px] leading-none py-5 md:py-[25px] shrink-0">
                    A
                  </span>
                  <span className="bg-white rounded-r-[8px] flex-1 text-[16px] md:text-[18px] leading-[1.78] tracking-[0.06em] py-[25px] md:py-[35px] px-4 md:px-[35px]">
                    {faq.a}
                  </span>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ============================================================
   Download — 関連資料ダウンロード
   ============================================================ */
function Download() {
  const cards = [
    {
      title: "ソリューション総合カタログ",
      text: "オムロン デジタル共通のソリューション総合カタログです。",
    },
    {
      title: "ARCHAIVE サービス紹介資料",
      text: "ARCHAIVEの機能・料金・導入事例をまとめたサービス紹介資料です。",
    },
  ];

  return (
    <section id="section6" className="py-[50px] md:py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        <div className="text-center mb-[30px] md:mb-[60px]">
          <span className="inline-block bg-omron-blue text-white px-5 py-[2px] rounded-full text-[16px] md:text-[20px] tracking-[0.06em] font-display mb-[10px]">
            DOWNLOAD
          </span>
          <h2 className="text-[24px] md:text-[35px] font-bold tracking-[0.06em] leading-[1.37]">
            関連資料ダウンロード
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-[30px] justify-center flex-wrap">
          {cards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="block bg-omron-light rounded-[10px] w-full md:w-[380px] p-[15px] pb-[30px] border-[3px] border-transparent hover:border-omron-blue transition-colors no-underline text-omron-text"
            >
              <div className="w-full h-0 pb-[61.8%] bg-[#c8d8e8] rounded-[4px] flex items-center justify-center relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center text-[14px] text-[#666]">
                  {card.title}
                </span>
              </div>
              <div className="mt-5">
                <p className="text-[20px] font-bold leading-[1.5] tracking-[0.06em] mb-[15px]">
                  {card.title}
                </p>
                <p className="text-[16px] leading-[1.5] tracking-[0.06em]">
                  {card.text}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="max-w-[300px] mx-auto mt-[50px]">
          <a
            href="#"
            className="flex items-center justify-between bg-omron-blue border-2 border-omron-blue rounded-[8px] text-white no-underline font-bold text-[18px] tracking-[0.06em] hover:bg-omron-dark hover:border-omron-dark transition-colors overflow-hidden"
          >
            <span className="flex items-center justify-center px-5 h-[60px]">
              メールで資料を受け取る
            </span>
            <span className="bg-white flex items-center justify-center w-[50px] h-[60px] rounded-r-[6px]">
              <ChevronRight size={20} className="text-omron-blue" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   RelatedServices — ARCHAIVEプロダクト
   ============================================================ */
function RelatedServices() {
  const products = [
    "生成AIサービス（koto-Buddy）",
    "データ活用基盤（データウェアハウス）",
    "OCR（光学文字認識）",
    "設備稼働管理システム",
    "LightMES",
    "BPR・MDM（ビジネスプロセス管理支援）",
  ];

  return (
    <section className="pb-[60px] md:pb-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        <div className="text-center mb-[30px] md:mb-[60px]">
          <span className="inline-block bg-omron-blue text-white px-5 py-[2px] rounded-full text-[16px] md:text-[20px] tracking-[0.06em] font-display mb-[10px]">
            RELATED SERVICES
          </span>
          <h2 className="text-[24px] md:text-[35px] font-bold tracking-[0.06em] leading-[1.37]">
            関連サービス
          </h2>
        </div>

        <ul className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-[20px]">
          {products.map((name) => (
            <li key={name}>
              <a
                href="#"
                className="flex items-center bg-omron-navy text-white text-[18px] md:text-[20px] font-bold leading-[1.5] tracking-[0.06em] no-underline py-5 md:py-[20px] px-[30px] pr-[50px] rounded-[8px] relative w-full md:w-[285px] h-auto md:h-[120px] text-left hover:bg-[#002b5e] transition-colors"
              >
                {name}
                <span className="absolute top-1/2 right-5 -translate-y-1/2 w-[15px] h-[15px] border-t-2 border-r-2 border-white rotate-45" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function Footer() {
  return (
    <footer className="relative">
      {/* お問い合わせエリア */}
      <div className="bg-omron-blue py-[50px] md:py-[65px] md:pb-[110px] text-center">
        <div className="max-w-[1100px] mx-auto px-5 md:px-0">
          <div className="bg-white rounded-[15px] p-5 md:p-10 flex flex-col items-center">
            <div className="relative bg-omron-blue text-white py-[15px] px-[30px] rounded-[5px] text-[18px] md:text-[20px] font-bold tracking-[0.06em] text-center mb-5 w-full md:w-auto">
              製品・サービスに関する
              <br className="nopc" />
              ご相談や質問など、お気軽に
              <br className="nopc" />
              お問い合わせください
              <span className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[12px] border-t-omron-blue" />
            </div>

            <div className="flex flex-col md:flex-row w-full max-w-[950px] mt-[12px] md:mt-[30px] gap-[50px] md:gap-0">
              <div className="flex-1 text-center">
                <p className="text-[16px] leading-[1.75] mb-5">
                  会社の総合カタログや、
                  <br />
                  各種製品・サービスの資料を
                  <br />
                  ダウンロードできます。
                </p>
                <div className="mt-[30px]">
                  <a
                    href="#"
                    className="inline-block w-full md:w-[380px] py-[15px] border-2 border-omron-blue rounded-[5px] text-omron-blue text-[20px] md:text-[24px] font-bold tracking-[0.06em] no-underline hover:bg-omron-blue hover:text-white transition-colors"
                  >
                    資料ダウンロード
                  </a>
                </div>
              </div>

              <div className="hidden md:block w-px bg-omron-border-mid self-stretch" />
              <div className="md:hidden h-px bg-omron-border-mid w-full" />

              <div className="flex-1 text-center">
                <p className="text-[16px] leading-[1.75] mb-5">
                  製品・サービスに関する
                  <br />
                  お問い合わせや、
                  <br className="nopc" />
                  その他ご相談事項など、
                  <br />
                  お気軽にお問い合わせください。
                </p>
                <div className="mt-[30px]">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full md:w-[380px] py-[15px] bg-omron-red border-2 border-omron-red rounded-[5px] text-white text-[20px] md:text-[24px] font-bold tracking-[0.06em] no-underline hover:bg-white hover:text-omron-red transition-colors relative"
                  >
                    相談・お問い合わせ
                    <ChevronRight
                      size={16}
                      className="absolute right-5"
                      strokeWidth={3}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* フッターナビ */}
      <div className="bg-white py-[40px] md:py-[60px]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-0">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-[30px] md:mb-[40px]">
            <div className="mb-5 md:mb-0">
              <a href="#" className="no-underline">
                <span className="font-bold text-[20px] tracking-[0.1em] text-omron-blue-header">
                  OMRON
                </span>
                <span className="text-[12px] ml-2 text-omron-text">
                  オムロン デジタル株式会社 | Japan
                </span>
              </a>
            </div>
            <nav>
              <ul className="flex flex-wrap gap-[15px] md:gap-[30px]">
                {[
                  "製品・サービス",
                  "会社情報",
                  "事業紹介",
                  "ビジョン",
                  "採用情報",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[14px] text-omron-text no-underline hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-5 text-center">
            <div className="flex flex-wrap justify-center gap-3 md:gap-5">
              {[
                "OMRON Corporate",
                "個人情報の取り扱いについて",
                "当サイトのご利用にあたって",
                "クッキー等の利用について",
              ].map((item, i) => (
                <a
                  key={item}
                  href="#"
                  className={`text-[12px] md:text-[14px] text-omron-text no-underline hover:underline ${
                    i > 0
                      ? "border-l-2 border-omron-border pl-3 md:pl-5"
                      : ""
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <p className="text-[12px] md:text-[14px] text-omron-text text-center mt-5">
            &copy; OMRON DIGITAL Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   メインページ
   ============================================================ */
export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full overflow-hidden">
        <Hero />
        <div className="py-[10px] md:py-[20px]">
          <ServiceArea />
          <SectionNav />
          <Recommend />
          <ServiceOverview />
          <Flow />
          <FAQ />
          <Download />
          <RelatedServices />
        </div>
      </div>
      <Footer />
    </>
  );
}
