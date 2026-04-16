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
          ARCHAIVE
          <span className="absolute bottom-0 left-0 w-[60px] md:w-[80px] h-[3px] md:h-[4px] bg-omron-blue" />
        </h1>
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
        <h2 className="text-[24px] md:text-[35px] font-bold leading-[1.5] tracking-[0.06em] text-center mb-[20px] md:mb-[30px]">
          1枚の図面から社内の全ナレッジを
          <br />
          AI活用する時代へ
        </h2>
        <p className="text-[16px] md:text-[18px] leading-[1.78] tracking-[0.06em] text-center">
          ARCHAIVEは点在したデータや暗黙知を繋ぎ合わせ、<br className="nosp" />
          設計・調達・見積業務をラクにする製造業AIデータハブです
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
    { href: "#section4", label: "ご導入の流れ", labelSp: "" },
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
    "過去の図面や見積を探すのに時間がかかっている設計・調達部門の方",
    "属人化した技術ナレッジの共有・継承に課題を感じている製造業の経営者",
    "既存のファイルサーバーやERPのデータ活用に限界を感じている情報システム部門の方",
    "AI導入を検討しているが、自社データのセキュリティが不安な生産技術部門の方",
    "図面管理の効率化・デジタル化を進めたい品質管理部門の方",
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
        src="/images/archaive/1.png"
        alt="ARCHAIVE サービス紹介資料"
        className="w-full max-w-[1000px] h-auto mx-auto mb-10 block"
      />

      <h3 className="text-[24px] md:text-[28px] font-bold border-l-[3px] border-omron-blue pl-5 mb-5 leading-[1.71] tracking-[0.06em]">
        ARCHAIVEで実現する製造業DX
      </h3>

      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        ARCHAIVEは、PLM・ERP・紙書類・ファイルサーバー・暗黙知など、あらゆるデータソースを統合する製造業AIデータハブです。独自のAIエージェントが設計・調達・見積業務を自動化し、社内に眠るナレッジを誰でも活用できる環境を実現します。
      </p>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        初期費用を抑えたSaaS導入から始められ、段階的にカスタマイズ開発へ拡張可能。標準機能による即効性と、オーダーメイド開発による独自性を両立し、製造現場の競争力を高めます。
      </p>

      {/* 3つの特徴 */}
      <img
        src="/images/archaive/13.png"
        alt="アーカイブの特徴 — 高精度AI解析・類似図面AI検索・社内ナレッジ検索"
        className="w-full max-w-[1000px] h-auto mx-auto mt-10 mb-10 block"
      />

      <h4 className="text-[20px] md:text-[24px] font-bold text-omron-blue mt-[40px] mb-5 leading-[2] tracking-[0.06em]">
        「探す」から「話す」へ。社内データが3秒で見つかる
      </h4>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        AIに自然な言葉で質問するだけで、見積・過去トラ・仕様書などを瞬時に要約・検索。ファイル名が整理されていなくても、図面の「中身」からAI-OCRが自動でテキスト化し、必要な情報を即座に発見します。
      </p>

      <h4 className="text-[20px] md:text-[24px] font-bold text-omron-blue mt-[40px] mb-5 leading-[2] tracking-[0.06em]">
        図面が自動で解析、登録作業ゼロに
      </h4>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        図面をアップロードするだけで自動データ化。形状や文字から類似図面を2秒で検索できます。図面自動解析・類似図面検索・部分図面検索により、設計業務の効率を飛躍的に向上させます。
      </p>

      <h4 className="text-[20px] md:text-[24px] font-bold text-omron-blue mt-[40px] mb-5 leading-[2] tracking-[0.06em]">
        オーダーメイドAIの開発
      </h4>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        シンボル抽出AI・検図AI・BOM管理など、貴社独自の強みを活かした専用AIを開発。標準SaaSでは解決できない業務課題に対応し、競合優位性を確保します。
      </p>

      <h4 className="text-[20px] md:text-[24px] font-bold text-omron-blue mt-[40px] mb-5 leading-[2] tracking-[0.06em]">
        チャット型データ検索
      </h4>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        「厚さ5mmのSUS304を使ったブラケット図面は？」といった自然な対話でデータを検索。専門知識がなくても、誰でも社内ナレッジにアクセスできます。
      </p>

      {/* 機能詳細画像が追加される場合はここに配置 */}
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
      title: "SaaS導入",
      text: "標準機能で即効果。導入即日から効果を実感でき、学習コストはゼロです。",
      colorClass: "text-[#9DB2E3]",
    },
    {
      number: "02",
      title: "既存システム連携",
      text: "ERP・生産管理システムと連携し、データの分断を解消。既存投資を活用でき、移行リスクはゼロです。",
      colorClass: "text-[#4C8EDF]",
    },
    {
      number: "03",
      title: "カスタマイズ開発",
      text: "貴社独自の強みを活かした専用機能を開発。完全オーダーメイドで競合優位性を確保します。",
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
          ご導入の流れ
        </h2>
      </div>

      <ol className="flex flex-col md:flex-row gap-[60px] md:gap-[40px] justify-center px-5 md:px-0 list-none">
        {steps.map((step, i) => (
          <li key={step.number} className="flex-1 max-w-full md:max-w-[320px] relative">
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
      q: "無料デモやトライアルで、実際の使い勝手を確認できますか？",
      a: "弊社が用意しておりますデータによる無料デモに加え、貴社の実際の図面データを用いたトライアル利用（有償PoC）も実施しております。「自社の図面がどう整理されるか」をお試しいただけます。",
    },
    {
      q: "過去データの移行サポートはありますか？",
      a: "専任スタッフによるデータ移行サポートが可能です。既存のファイルサーバーからのデータ移行支援を行っておりますので、大量の図面がある場合でも最適な移行プランをご提案します。",
    },
    {
      q: "図面は機密情報ですが、セキュリティ対策は万全ですか？",
      a: "世界最高水準のセキュリティ基準を持つAWSを採用しています。通信の暗号化や詳細なアクセス権限設定機能も備え、官公庁や大手企業でも採用される管理体制で技術情報を安全に保護します。",
    },
    {
      q: "専用ソフトのインストールは必要ですか？",
      a: "インストール不要で、ブラウザさえあればどこでも利用可能です。パソコンはもちろん、タブレットやスマートフォンからも図面の閲覧・検索ができ、工場内や外出先など場所を選ばず最新の図面情報にアクセスできます。",
    },
    {
      q: "ファイル名が整理されていなくても、AIで図面を探せますか？",
      a: "はい、ファイル名に依存せず「中身」で検索可能です。AI-OCRが図面内の「図番」「品名」「材質」「顧客名」などを自動でテキスト化するため、記載情報さえ分かれば瞬時に検索・発見できます。",
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
            よくあるご質問
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
      title: "ARCHAIVE サービス紹介資料",
      text: "ARCHAIVEの機能概要・導入事例・料金体系をまとめたサービス紹介資料です。",
    },
    {
      title: "製造業AI活用ガイドブック",
      text: "製造業におけるAI図面検索・ナレッジ活用の最新事例と導入ステップをご紹介します。",
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
    "ARCHAIVE 図面管理",
    "ARCHAIVE 顧客管理",
    "ARCHAIVE 帳票管理",
    "ARCHAIVE AIエージェント",
    "社内ナレッジ検索AI",
    "データクレンジング",
  ];

  return (
    <section className="pb-[60px] md:pb-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        <div className="text-center mb-[30px] md:mb-[60px]">
          <span className="inline-block bg-omron-blue text-white px-5 py-[2px] rounded-full text-[16px] md:text-[20px] tracking-[0.06em] font-display mb-[10px]">
            PRODUCTS
          </span>
          <h2 className="text-[24px] md:text-[35px] font-bold tracking-[0.06em] leading-[1.37]">
            プロダクト一覧
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
