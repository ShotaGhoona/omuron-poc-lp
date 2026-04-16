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
   - 元CSS: l-header, l-header-inner, l-header-area, l-gnav, etc.
   ============================================================ */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-[100] w-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.16)] py-[5px] pr-[5px] pl-5 md:px-[30px] md:pt-[15px] md:pb-3">
      <div className="flex items-center justify-between">
        {/* ロゴ — 折り返さない */}
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

        {/* ナビエリア — PC: ナビ(2段) + ボタン を横並び */}
        <div
          className={`
            ${menuOpen ? "translate-x-0" : "translate-x-[101%]"}
            fixed top-[60px] left-0 w-full h-full overflow-y-auto bg-[#FCFCFC] flex flex-col pb-[100px]
            transition-transform duration-[600ms] ease-in-out
            md:translate-x-0 md:static md:w-auto md:h-auto md:flex md:flex-row md:items-center
            md:bg-transparent md:overflow-visible md:pb-0 md:gap-10
          `}
        >
          {/* ナビ部分（PC: 上段=サブナビ / 下段=メインナビ） */}
          <nav className="w-full md:w-auto border-t border-omron-border md:border-none px-8 py-8 md:p-0">
            {/* サブナビ（PC のみ） */}
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

            {/* メインナビ */}
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

          {/* ヘッダーボタン */}
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

        {/* ハンバーガーボタン（SP） */}
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
   - 元CSS: m-hero (margin-top:12rem), m-hero-inner, l-breadcrumbs, m-jp-title
   ============================================================ */
function Hero() {
  return (
    <div className="relative mt-[50px] md:mt-[120px]">
      {/* パンくず */}
      <nav className="absolute top-0 left-0 py-[15px] px-[10px] md:px-[50px] w-full overflow-x-auto whitespace-nowrap">
        <ol className="flex text-[12px] md:text-[14px]">
          {["TOP", "主要製品・サービス", "データ活用", "LightMES"].map(
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
          LightMES
          {/* 下線装飾 */}
          <span className="absolute bottom-0 left-0 w-[60px] md:w-[80px] h-[3px] md:h-[4px] bg-omron-blue" />
        </h1>
      </div>
    </div>
  );
}

/* ============================================================
   ServiceArea
   - 元CSS: p-service-area (bg:#EEF5FF, padding:8rem 0)
   - p-service-area-ttl (font-size:3.5rem=35px, centered, bold)
   - p-service-area-txt (font-size:1.8rem=18px, centered)
   ============================================================ */
function ServiceArea() {
  return (
    <div className="bg-omron-light py-[40px] md:py-[80px]">
      <div className="max-w-[1000px] mx-auto px-5 md:px-0">
        <h2 className="text-[24px] md:text-[35px] font-bold leading-[1.37] tracking-[0.06em] text-center mb-[20px] md:mb-[30px]">
          Lightな手間で経営と現場の距離を縮め
          <br />
          創造的なモノづくり現場を実現
        </h2>
        <p className="text-[16px] md:text-[18px] leading-[1.78] tracking-[0.06em] text-center">
          LightMESは現場のデータを集約し、人に依存せず進捗を管理、そして改善につなげるサイクルを実現します
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   SectionNav
   - 元CSS: p-section-nav (padding:10rem 0), l-content-s (max-w:110rem)
   - p-section-nav-list: grid, auto-fit minmax(26rem,1fr), gap
   - p-section-nav-link: bg:#0F4283, white, bold, rounded, arrow::after
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
              className="w-full flex justify-between items-center bg-omron-dark text-white font-bold text-[14px] md:text-[16px] leading-[1.69] tracking-[0.06em] no-underline rounded-[5px] md:rounded-[5px] py-3 md:py-[18px] px-4 md:px-[30px] pr-[40px] md:pr-[50px] relative hover:bg-[#0b3163] transition-colors h-full"
            >
              {item.label}
              {item.labelSp && <br className="nopc" />}
              {item.labelSp && (
                <span className="nopc">{item.labelSp}</span>
              )}
              {/* 下矢印 */}
              <span className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 w-[10px] md:w-[14px] h-[10px] md:h-[14px] border-t-2 border-r-2 border-white rotate-[135deg]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   Recommend
   - 元CSS: p-recommend (bg:#EEF5FF, rounded-1rem, padding:4rem, mb:10rem)
   - p-recommend-title (2.4rem=24px, blue, centered, ::after underline)
   - p-recommend-item (flex, gap, check icon::before, border-top between items)
   ============================================================ */
function Recommend() {
  const items = [
    "工場の生産余力/ボトルネックを知りたい製造業経営者",
    "ラインや工程の改善箇所を探したい工場エリア/ライン管理者",
    "人作業の工程が遅れる原因を探求したい現場監督者",
    "手軽でわかりやすい生産進捗管理システムを実現したい生産技術部門の皆さま",
    "機器の付加価値向上をお考えの、生産設備/制御機器メーカの皆さま",
  ];

  return (
    <section
      id="section1"
      className="max-w-[1000px] mx-auto bg-omron-light rounded-[10px] py-8 md:py-10 px-5 md:px-10 mb-[50px] md:mb-[100px]"
    >
      {/* タイトル */}
      <h2 className="text-[20px] md:text-[24px] font-bold text-omron-blue text-center pb-3 mb-0 md:mb-[30px]">
        こんな方におすすめ
        {/* 下線装飾 */}
        <span className="block w-[40px] md:w-[60px] h-[2px] md:h-[3px] bg-omron-blue mx-auto mt-[10px] md:mt-[15px]" />
      </h2>

      {/* リスト */}
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
   ServiceOverview (p-cms)
   - 元CSS: p-cms (pb:10rem=100px)
   - h2: 3.5rem=35px, centered, bold, mb:6rem=60px
   - h3: 2.8rem=28px, bold, border-left blue, pl:2rem
   - h4: 2.4rem=24px, bold, blue
   - p: 1.6rem=16px
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

      <PlaceholderImage width={1318} height={376} label="LightMES_1.png" />

      <h3 className="text-[24px] md:text-[28px] font-bold border-l-[3px] border-omron-blue pl-5 mb-5 leading-[1.71] tracking-[0.06em]">
        LightMESで実現する製造現場革新
      </h3>

      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        データを活用して生産と品質をより良く管理することができます。人に頼りすぎることなく、初期費用を抑えながら、迅速に機能を導入することが可能です。
      </p>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        工場のライン/工程/製品ごとの生産データを経営陣と現場スタッフとでリアルタイムに共有することで、データに基づいた意思決定を行える環境を整えます。これにより、改善のスピードが加速し、継続的な成長と利益の拡大を支援します
      </p>

      <h4 className="text-[20px] md:text-[24px] font-bold text-omron-blue mt-[40px] mb-5 leading-[2] tracking-[0.06em]">
        生産性向上:
      </h4>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        ラインや工程ごとの生産時間と進捗をリアルタイムで確認し、生産性の最大化が可能です。
      </p>

      <h4 className="text-[20px] md:text-[24px] font-bold text-omron-blue mt-[40px] mb-5 leading-[2] tracking-[0.06em]">
        品質向上:
      </h4>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        工程毎の品質指標を監視し、品質変化の予測と分析を行うことで不良品を未然に防ぎます。
      </p>

      <h4 className="text-[20px] md:text-[24px] font-bold text-omron-blue mt-[40px] mb-5 leading-[2] tracking-[0.06em]">
        設備稼働率向上:
      </h4>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        設備稼働率の向上を目指し、自動でデータを収集し、最適な稼動状態を維持するための課題を可視化します。
      </p>

      <h4 className="text-[20px] md:text-[24px] font-bold text-omron-blue mt-[40px] mb-5 leading-[2] tracking-[0.06em]">
        経営指標達成に向けたデータ活用:
      </h4>
      <p className="text-[16px] leading-[1.81] tracking-[0.06em] mb-5">
        各種設備からのデータ収集が可能、データを価値あるものに変換することで先手の製造現場管理に貢献します。
      </p>

      <PlaceholderImage width={1030} height={781} label="LightMES_3.png" />
      <PlaceholderImage width={910} height={121} label="LightMES_4.png" />
    </section>
  );
}

/* ============================================================
   Flow
   - 元CSS: p-flow (padding:10rem 0)
   - m-label: centered, blue pill + title
   - p-flow-list: flex, gap:4rem, justify-center, nowrap → SP: column
   - p-flow-item: flex:1, max-w:27rem=270px
   - p-flow-step-number: 4.8rem=48px, bold, colored per nth-child
   - p-flow-step-title: 2.4rem=24px, bold
   - p-flow-step-text: 1.6rem=16px
   ============================================================ */
function Flow() {
  const steps = [
    { number: "01", title: "お問い合わせ", text: "お気軽にご相談内容をお伝えください。", colorClass: "text-[#9DB2E3]" },
    { number: "02", title: "ニーズのヒアリング", text: "製造現場の課題をヒアリングします。", colorClass: "text-[#81A3F2]" },
    { number: "03", title: "提案とお見積り", text: "最適なソリューションをご提案します。", colorClass: "text-[#4C8EDF]" },
    { number: "04", title: "導入とサポート", text: "スムーズな導入をサポートし、継続的な改善活動を支援します。", colorClass: "text-[#627BBD]" },
  ];

  return (
    <section id="section4" className="py-[50px] md:py-[100px]">
      {/* ラベル */}
      <div className="text-center mb-[30px] md:mb-[60px]">
        <span className="inline-block bg-omron-blue text-white px-5 py-[2px] rounded-full text-[16px] md:text-[20px] tracking-[0.06em] font-display mb-[10px]">
          FLOW
        </span>
        <h2 className="text-[24px] md:text-[35px] font-bold tracking-[0.06em] leading-[1.37]">
          ご相談の流れ
        </h2>
      </div>

      {/* ステップリスト */}
      <ol className="flex flex-col md:flex-row gap-[60px] md:gap-[40px] justify-center px-5 md:px-0 list-none">
        {steps.map((step, i) => (
          <li key={step.number} className="flex-1 max-w-full md:max-w-[270px] relative">
            {/* ステップ番号＋タイトル */}
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

            {/* 矢印（最後以外） */}
            {i < steps.length - 1 && (
              <>
                {/* SP: 下矢印 */}
                <div className="nopc absolute -bottom-[42px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[22px] border-t-omron-dark" />
                {/* PC: 右矢印 */}
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
   FAQ
   - 元CSS: p-faq (padding:10rem 0, bg:#F7F7F7)
   - p-faq-question: flex, bg white, rounded, Q label + text
   - p-faq-answer: flex, A label + text
   - p-faq-label: bg blue, 7rem wide, centered, Q text 4.2rem=42px
   - p-faq-label-answer: bg white, red A text
   - Toggle with ::before/::after (handled in globals.css)
   ============================================================ */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "LightMESはどのようなデータを提供しますか？",
      a: "生産計画に対する出来高、ライン/工程ごとの生産効率を示す指標、設備稼働状況、品質バラつきを可視化してご提供いたします。",
    },
    {
      q: "導入までにどれくらいの時間がかかりますか？",
      a: "お客様の現場条件によりますが、最短で着工から5ヵ月程度必要です。",
    },
  ];

  return (
    <section id="section5" className="py-[50px] md:py-[100px] bg-omron-gray">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        {/* ラベル */}
        <div className="text-center mb-[30px] md:mb-[60px]">
          <span className="inline-block bg-omron-blue text-white px-5 py-[2px] rounded-full text-[16px] md:text-[20px] tracking-[0.06em] font-display mb-[10px]">
            FAQ
          </span>
          <h2 className="text-[24px] md:text-[35px] font-bold tracking-[0.06em] leading-[1.37]">
            よくあるご質問
          </h2>
        </div>

        {/* FAQリスト */}
        <dl>
          {faqs.map((faq, i) => (
            <div key={i} className={i > 0 ? "mt-[15px] md:mt-[15px]" : ""}>
              {/* 質問 */}
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

              {/* 回答 */}
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
   Download
   - 元CSS: p-download (padding:10rem 0, bg white)
   - m-card: bg white, rounded-1rem=10px, w:38rem=380px, border transparent
   - m-card-bg-blue: bg #EEF5FF
   - m-card-image: 34rem=340px × 21rem=210px
   ============================================================ */
function Download() {
  const cards = [
    {
      title: "ソリューション総合カタログ",
      text: "オムロン デジタルが提供する価値やサービス・商材を一覧化した資料です。サービスの利用シ...",
    },
    {
      title: "LightMES",
      text: "Lightな手間で経営と現場の距離を縮め、創造的なモノづくり現場を実現",
    },
  ];

  return (
    <section id="section6" className="py-[50px] md:py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        {/* ラベル */}
        <div className="text-center mb-[30px] md:mb-[60px]">
          <span className="inline-block bg-omron-blue text-white px-5 py-[2px] rounded-full text-[16px] md:text-[20px] tracking-[0.06em] font-display mb-[10px]">
            DOWNLOAD
          </span>
          <h2 className="text-[24px] md:text-[35px] font-bold tracking-[0.06em] leading-[1.37]">
            関連資料ダウンロード
          </h2>
        </div>

        {/* カード */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-[30px] justify-center flex-wrap">
          {cards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="block bg-omron-light rounded-[10px] w-full md:w-[380px] p-[15px] pb-[30px] border-[3px] border-transparent hover:border-[#0070f3] transition-colors no-underline text-omron-text"
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

        {/* ボタン */}
        <div className="max-w-[270px] md:max-w-[270px] mx-auto mt-[50px]">
          <a
            href="#"
            className="flex items-center justify-between bg-omron-blue border-2 border-omron-blue rounded-[8px] text-white no-underline font-bold text-[18px] tracking-[0.06em] hover:bg-omron-dark hover:border-omron-dark transition-colors overflow-hidden"
          >
            <span className="flex items-center justify-center px-5 h-[60px]">
              その他資料はこちら
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
   RelatedServices
   - 元CSS: p-related (pb:10rem=100px)
   - p-related-link-list: flex, wrap, gap:2rem=20px
   - p-related-link-item: bg:#0C3467, white, 28.5rem=285px wide, 12rem=120px tall,
   -   rounded-0.8rem=8px, arrow::after
   ============================================================ */
function RelatedServices() {
  const services = [
    "設備稼働管理システム",
    "倉庫内AGV/AMR 統合管理・制御システム（WCS）",
    "カーボンニュートラル簡易計測サービス",
    "IT診断",
    "セキュリティ診断",
    "生成AIサービス",
  ];

  return (
    <section className="pb-[60px] md:pb-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        {/* ラベル */}
        <div className="text-center mb-[30px] md:mb-[60px]">
          <span className="inline-block bg-omron-blue text-white px-5 py-[2px] rounded-full text-[16px] md:text-[20px] tracking-[0.06em] font-display mb-[10px]">
            RELATED SERVICES
          </span>
          <h2 className="text-[24px] md:text-[35px] font-bold tracking-[0.06em] leading-[1.37]">
            関連サービス
          </h2>
        </div>

        {/* リンクリスト */}
        <ul className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-[20px]">
          {services.map((name) => (
            <li key={name}>
              <a
                href="#"
                className="flex items-center bg-omron-navy text-white text-[18px] md:text-[20px] font-bold leading-[1.5] tracking-[0.06em] no-underline py-5 md:py-[20px] px-[30px] pr-[50px] rounded-[8px] relative w-full md:w-[285px] h-auto md:h-[120px] text-left hover:bg-[#002b5e] transition-colors"
              >
                {name}
                {/* 矢印 */}
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
   - 元CSS: l-footer-contact (bg:#005ED2, padding), inner (bg white, rounded)
   - l-footer-contact-header: blue bg, white text, triangle::after
   - l-footer-contact-body: flex, two columns with separator
   - l-footer-inner: nav + copyright
   ============================================================ */
function Footer() {
  return (
    <footer className="relative">
      {/* お問い合わせエリア */}
      <div className="bg-omron-blue py-[50px] md:py-[65px] md:pb-[110px] text-center">
        <div className="max-w-[1100px] mx-auto px-5 md:px-0">
          <div className="bg-white rounded-[15px] md:rounded-[15px] p-5 md:p-10 flex flex-col items-center">
            {/* 吹き出しヘッダー */}
            <div className="relative bg-omron-blue text-white py-[15px] px-[30px] rounded-[5px] text-[18px] md:text-[20px] font-bold tracking-[0.06em] text-center mb-5 w-full md:w-auto">
              製品・サービスに関する
              <br className="nopc" />
              ご相談や質問など、お気軽に
              <br className="nopc" />
              お問い合わせください
              {/* 三角 */}
              <span className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[12px] border-t-omron-blue" />
            </div>

            {/* 2カラム */}
            <div className="flex flex-col md:flex-row w-full max-w-[950px] mt-[12px] md:mt-[30px] gap-[50px] md:gap-0">
              {/* 資料DL */}
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

              {/* 仕切り線 */}
              <div className="hidden md:block w-px bg-omron-border-mid self-stretch" />
              <div className="md:hidden h-px bg-omron-border-mid w-full" />

              {/* お問い合わせ */}
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
          {/* ロゴ + ナビ */}
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

          {/* ポリシーリンク + コピーライト */}
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
