'use client'

import React, { useEffect, useRef } from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  const auraRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 1. Scroll Reveal (Intersection Observer)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach(el => observer.observe(el))

    // 2. Mouse Aura
    const handleMouseMove = (e: MouseEvent) => {
      if (auraRef.current) {
        // 부드러운 이동을 위해 requestAnimationFrame 고려 가능하나 일단 직접 대입
        auraRef.current.style.left = `${e.clientX}px`
        auraRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      observer.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // 3. Card Tilt Effect Handler (호이스팅 방지 및 성능을 위해 인라인 대신 함수 활용 가능)
  const handleCardTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`

    // Spotlight effect
    const spotlight = card.querySelector(`.${styles.spotlight}`) as HTMLDivElement
    if (spotlight) {
      spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(212, 175, 55, 0.15) 0%, transparent 80%)`
    }
  }

  const resetCardTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)'
    const spotlight = card.querySelector(`.${styles.spotlight}`) as HTMLDivElement
    if (spotlight) {
      spotlight.style.background = 'transparent'
    }
  }

  return (
    <main className={styles.main}>
      <div className="mouse-aura" ref={auraRef}></div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="Logo" className={styles.logoImg} />
          </Link>
          <div className={styles.navLinks}>
            <a href="#about">소개</a>
            <a href="#expertise">전문분야</a>
            <a href="#achievements">성과</a>
            <a href="#media">미디어</a>
            <a href="#contact" className="btn btn-primary">상담 문의</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOrb1}></div>
          <div className={styles.heroOrb2}></div>
          <div className={styles.heroOrb3}></div>
        </div>

        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className={`${styles.heroBadge} reveal`}>
              <span>✨</span> AI 전환기 성장 구조 설계자
            </div>

            <h1 className={`${styles.heroTitle} reveal`}>
              <span className={styles.heroSubtitle}>AI에게 일을 맡기고, 인간은 가치에 집중하는 전략</span>
              킹클코치 <span className="text-gradient">이지현</span>
            </h1>

            <p className={`${styles.heroDescription} reveal`}>
              저는 20년간 성장의 흐름을 설계해왔습니다.<br />
              그리고 지금,<br />
              AI 전환기 속에서 <strong>커리어와 1인 전략</strong>을 다시 설계합니다.
            </p>

            <div className={`${styles.heroStats} reveal`}>
              <div className={styles.heroStat}>
                <span className="stat-number">20</span>
                <span>년 경력</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.heroStat}>
                <span className="stat-number">20만+</span>
                <span>코칭 횟수</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.heroStat}>
                <span className="stat-number">13</span>
                <span>권 저서</span>
              </div>
            </div>

            <div className={`${styles.heroCta} reveal`}>
              <a href="#contact" className="btn btn-primary">
                무료 상담 신청
              </a>
              <a href="https://www.youtube.com/channel/UC-aQ-8GKrNBHcdsFA3d-aZg" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                ▶ 유튜브 채널
              </a>
            </div>
          </div>

          <div className={`${styles.heroVisual} reveal`}>
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageGlow}></div>
              <div className={styles.heroImageContainer}>
                <img src="/profile.png" alt="킹클코치 이지현" className={styles.heroImage} />
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCard1}`}>
              <span>🎓</span>
              <div>
                <strong>연세대학교</strong>
                <span>교육대학원</span>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCard2}`}>
              <span>📺</span>
              <div>
                <strong>MBC 공부가 머니?</strong>
                <span>자기주도학습 전문가</span>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCard3}`}>
              <span>🏆</span>
              <div>
                <strong>채널A 티처스2</strong>
                <span>입시 코디네이터</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span>스크롤하여 더 알아보기</span>
          <div className={styles.scrollArrow}>↓</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`section ${styles.about}`}>
        <div className="container">
          <h2 className="section-title reveal">
            <span>About</span>
            킹클코치를 소개합니다
          </h2>

          <div className={styles.aboutContent}>
            <div className={`${styles.aboutText} reveal`}>
              <p className={styles.aboutLead}>
                &ldquo;성공은 재능이 아니라, <strong className="text-gold">명확한 목표와 전략, 마인드</strong>의 문제입니다.&rdquo;
              </p>

              <p>
                저는 AI와 코칭으로 사람의 성장을 설계하는 <strong>킹클코치 이지현</strong>입니다.
                저는 20년간 한 세대의 학습·진로·마인드를 설계해왔고,
                이제 그 경험을 기반으로 <strong>AI 시대에 맞는 커리어와 수익 구조</strong>를 설계합니다.
              </p>

              <p>
                AI 전환기는 단순한 기술 변화가 아니라
                일의 구조와 성장 방식이 바뀌는 시대입니다.
                이제 중요한 것은 무엇을 아느냐가 아니라,
                <strong>어떤 전략으로 성장 구조를 설계하느냐</strong>입니다.
              </p>

            </div>

            <div className={styles.aboutCards}>
              <div
                className={`${styles.aboutCard} ${styles.visionCard} reveal`}
                onMouseMove={handleCardTilt}
                onMouseLeave={resetCardTilt}
              >
                <div className={styles.spotlight}></div>
                <div className={styles.aboutCardIcon}>🎯</div>
                <h4>Vision</h4>
                <p>AI 시대에 맞는 새로운 성장 전략으로<br />개인이 스스로 커리어와 수익 구조를 설계하도록 돕습니다</p>
              </div>

              <div
                className={`card ${styles.aboutCard} reveal`}
                onMouseMove={handleCardTilt}
                onMouseLeave={resetCardTilt}
              >
                <div className={styles.spotlight}></div>
                <div className={styles.aboutCardIcon}>💡</div>
                <h4>철학</h4>
                <p>답을 주는 코치가 아니라<br />스스로 전략을 설계할 수 있도록 돕는 코칭</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className={`section ${styles.expertise}`}>
        <div className="container">
          <h2 className="section-title reveal">
            <span>Expertise</span>
            전문 분야
          </h2>

          <div className={styles.expertiseGrid}>
            <div
              className={`card ${styles.expertiseCard} ${styles.expertiseCardHighlight} reveal`}
              onMouseMove={handleCardTilt}
              onMouseLeave={resetCardTilt}
            >
              <div className={styles.spotlight}></div>
              <div className={styles.expertiseIcon}>🧭</div>
              <div className={styles.cardBadge}>STEP 1</div>
              <h3>AI 전환기 방향 설계</h3>
              <ul>
                <li>성장 전략 진단</li>
                <li>커리어 재설계</li>
                <li>성공 역량 정렬</li>
              </ul>
            </div>

            <div
              className={`card ${styles.expertiseCard} reveal`}
              onMouseMove={handleCardTilt}
              onMouseLeave={resetCardTilt}
            >
              <div className={styles.spotlight}></div>
              <div className={styles.expertiseIcon}>🏗️</div>
              <div className={styles.cardBadge}>STEP 2</div>
              <h3>1인 전략 구조 설계</h3>
              <ul>
                <li>수익 구조 설계</li>
                <li>실행 시스템 설계</li>
                <li>루틴·성과 구조화</li>
              </ul>
            </div>

            <div
              className={`card ${styles.expertiseCard} reveal`}
              onMouseMove={handleCardTilt}
              onMouseLeave={resetCardTilt}
            >
              <div className={styles.spotlight}></div>
              <div className={styles.expertiseIcon}>🤖</div>
              <div className={styles.cardBadge}>STEP 3</div>
              <h3>AI 자동화 시스템 설계</h3>
              <ul>
                <li>AI 업무 자동화</li>
                <li>콘텐츠 시스템화</li>
                <li>생산성 확장 설계</li>
              </ul>
            </div>
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '48px' }}>
            <a
              href="https://ai-growth-map.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '18px 40px',
                background: 'linear-gradient(135deg, #d4a537, #f5d576, #d4a537)',
                color: '#1a1a2e',
                fontSize: '17px',
                fontWeight: 800,
                borderRadius: '60px',
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(212, 165, 55, 0.35), inset 0 1px 0 rgba(255,255,255,0.3)',
                border: '1px solid rgba(245, 213, 118, 0.5)',
                letterSpacing: '-0.3px',
                transition: 'all 0.3s ease',
              }}
            >
              AI 1인 기업 성장 로드맵 바로가기 →
            </a>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`section ${styles.achievements}`}>
        <div className="container">
          <h2 className="section-title reveal">
            <span>Achievements</span>
            주요 활동 및 성과
          </h2>

          <div className={styles.achievementsTabs}>
            <div className={`${styles.achievementsContent} reveal`}>
              <div className={styles.achievementCategory}>
                <h3>🚀 AI 전환기 전략 설계 활동</h3>
                <ul>
                  <li>AI 코칭기업 킹클(KINGCL) 대표</li>
                  <li>AI Growth Map 기획·개발자</li>
                  <li>AI 기반 1인 전략 및 자동화 시스템 설계</li>
                  <li>데이터 기반 커리어 및 비즈니스 구조 재설계</li>
                </ul>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', marginTop: '12px', lineHeight: '1.6' }}>
                  AI에게 일을 맡기고, 인간은 가치와 성장에 집중하는 구조를 설계합니다.
                </p>
              </div>

              <div className={styles.achievementCategory}>
                <h3>🎓 전문성 기반</h3>
                <ul>
                  <li>연세대학교 교육대학원 평생교육경영 석사 과정</li>
                  <li>20년 이상 진로·학습·마인드 코칭</li>
                  <li>20,000회 이상 코칭 세션 진행</li>
                  <li>1,000개 이상 교육기관 프로그램 기획 및 보급</li>
                </ul>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', marginTop: '12px', lineHeight: '1.6' }}>
                  코칭 데이터 기반 성장 설계 전문가
                </p>
              </div>

              <div className={styles.achievementCategory}>
                <h3>📖 지식 자산 및 콘텐츠 설계</h3>
                <ul>
                  <li>『성공한 사람들은 이것부터 바꿨다』</li>
                  <li>『생각디톡스 · 진로디톡스 · 학습디톡스』</li>
                  <li>『언락킹드림』 외 13권 출간</li>
                </ul>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', marginTop: '12px', lineHeight: '1.6' }}>
                  성장 구조를 언어화하고 실행 가능한 시스템으로 설계하는 콘텐츠 개발자
                </p>
              </div>

              <div className={styles.achievementCategory}>
                <h3>📺 교육 및 활동 이력</h3>
                <ul>
                  <li>MBC 「공부가 머니?」 자기주도학습 전문가 패널 출연</li>
                  <li>채널A 「티처스2 성적을 부탁해」 입시코디네이터 출연</li>
                  <li>AI 리터러시 · 성장 구조 설계 강의 100회 이상</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className={`section ${styles.media}`}>
        <div className="container">
          <h2 className="section-title reveal">
            <span>Media</span>
            최신 영상
          </h2>

          {/* Featured Video - 메인 임베드 */}
          <div className={`${styles.featuredVideo} reveal`}>
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/4G6-xylxGLs?si=8AEznan9C3gCYeZ_"
                title="AI 시대, 우리는 어떻게 배워야 할까요?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className={styles.featuredVideoInfo}>
              <h3>AI 시대, 우리는 어떻게 배워야 할까요?</h3>
              <p>요즘 많은 분들이 공부를 하고는 있는데, 이게 지금 시대에 맞는 방향인지 모르겠다는 혼란을 느낍니다. AI가 너무 빨리 발전하다 보니 무엇을 우선으로 배워야 할지 기준이 흐려졌다는 느낌...</p>
            </div>
          </div>

          {/* More Videos Button */}

          <div className={`${styles.mediaMore} reveal`}>
            <a href="https://www.youtube.com/channel/UC-aQ-8GKrNBHcdsFA3d-aZg" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              유튜브에서 더 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`section ${styles.contact}`}>
        <div className="container">
          <div className={`${styles.contactCard} reveal`}>
            <h2>함께 성장을 설계하세요</h2>
            <p>AI 시대에 맞는 맞춤형 코칭, 강연, 컨설팅을 제공합니다</p>

            <div className={styles.contactLinks}>
              <a href="https://blog.naver.com/hyun7578" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span>📝</span>
                <div>
                  <strong>블로그</strong>
                  <span>blog.naver.com/hyun7578</span>
                </div>
              </a>

              <a href="https://kingcle-newsletter-tool.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span>📩</span>
                <div>
                  <strong>뉴스레터 신청하기 (무료)</strong>
                  <span>AI 시대 인사이트 구독</span>
                </div>
              </a>
            </div>

            <div className={styles.contactCta}>
              <p>강의/컨설팅/비즈니스 문의</p>
              <a href="mailto:kingclcoach2026@gmail.com" className="btn btn-primary">
                kingclcoach2026@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <img src="/logo.png" alt="킹클코치 로고" className={styles.footerLogoImg} />
            </div>
            <p>© 2024 KINGCL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
