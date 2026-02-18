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
              <span>✨</span> AI 시대의 교육 혁신가
            </div>

            <h1 className={`${styles.heroTitle} reveal`}>
              <span className={styles.heroSubtitle}>AI 맞춤형 코칭 전문가</span>
              킹클코치 <span className="text-gradient">이지현</span>
            </h1>

            <p className={`${styles.heroDescription} reveal`}>
              20년간 10대의 사고를 설계해왔고,<br />
              지금은 그들이 20~30대가 되어<br />
              AI 전환기 속에서 <strong>커리어 구조</strong>를 다시 설계하고 있습니다.
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
                24년간 청소년과 성인들의 자기주도학습, 진로 설계, 마인드셋 코칭을 진행해왔습니다.
              </p>

              <p>
                AI 시대가 도래하면서 교육의 패러다임은 완전히 바뀌고 있습니다.
                이제 중요한 것은 무엇을 아느냐가 아니라,
                <strong>어떻게 배우고 어떻게 성장할 것인가</strong>입니다.
              </p>

              <p>
                킹클은 모든 사람이 자신만의 방식으로 배우고 성장하며,<br />
                <strong>스스로의 삶을 설계할 수 있다</strong>고 믿습니다.
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
                <p>AI 시대에 맞는 새로운 교육 방법론으로<br />모든 이의 성장을 돕습니다</p>
              </div>

              <div
                className={`card ${styles.aboutCard} reveal`}
                onMouseMove={handleCardTilt}
                onMouseLeave={resetCardTilt}
              >
                <div className={styles.spotlight}></div>
                <div className={styles.aboutCardIcon}>💡</div>
                <h4>철학</h4>
                <p>목표를 대신 정해주지 않는, 스스로 깨닫게 하는 코칭</p>
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
              <div className={styles.expertiseIcon}>🤖</div>
              <h3>AI 전환기 전략 설계</h3>
              <p>AI에게 일을 맡기고 인간은 가치와 성장에 집중하는 구조</p>
              <ul>
                <li>커리어·비즈니스 구조 재설계</li>
                <li>AI 자동화 시스템 구축</li>
                <li>1인 전략 실행 설계</li>
              </ul>
              <div className={styles.cardBadge}>추천</div>
            </div>

            <div
              className={`card ${styles.expertiseCard} reveal`}
              onMouseMove={handleCardTilt}
              onMouseLeave={resetCardTilt}
            >
              <div className={styles.spotlight}></div>
              <div className={styles.expertiseIcon}>🧭</div>
              <h3>진로 설계 코칭</h3>
              <p>자신만의 강점을 발견하고 미래를 설계하는 진로 탐색</p>
              <ul>
                <li>적성 및 강점 발견</li>
                <li>미래 직업 탐색</li>
                <li>로드맵 설계</li>
              </ul>
            </div>

            <div
              className={`card ${styles.expertiseCard} reveal`}
              onMouseMove={handleCardTilt}
              onMouseLeave={resetCardTilt}
            >
              <div className={styles.spotlight}></div>
              <div className={styles.expertiseIcon}>🧠</div>
              <h3>마인드셋 코칭</h3>
              <p>성장하는 마인드로 변화하는 사고방식 혁신</p>
              <ul>
                <li>성장형 마인드셋</li>
                <li>자기효능감 강화</li>
                <li>회복탄력성 향상</li>
              </ul>
            </div>

            <div
              className={`card ${styles.expertiseCard} reveal`}
              onMouseMove={handleCardTilt}
              onMouseLeave={resetCardTilt}
            >
              <div className={styles.spotlight}></div>
              <div className={styles.expertiseIcon}>📚</div>
              <h3>자기주도학습 코칭</h3>
              <p>스스로 배우는 힘을 기르는 체계적인 학습 전략과 습관 설계</p>
              <ul>
                <li>학습 동기 부여</li>
                <li>효율적 시간 관리</li>
                <li>메타인지 전략</li>
              </ul>
            </div>
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
                <h3>📺 방송 출연</h3>
                <ul>
                  <li>MBC &ldquo;공부가 머니?&rdquo; - 자기주도학습 전문가</li>
                  <li>채널A &ldquo;티처스2 성적을 부탁해&rdquo; - 입시 코디네이터</li>
                </ul>
              </div>

              <div className={styles.achievementCategory}>
                <h3>📖 저서</h3>
                <ul>
                  <li>&ldquo;언락킹드림&rdquo; (2023)</li>
                  <li>&ldquo;생각디톡스 진로디톡스 학습디톡스&rdquo; (2023)</li>
                  <li>외 13권</li>
                </ul>
              </div>

              <div className={styles.achievementCategory}>
                <h3>🎓 학력 및 자격</h3>
                <ul>
                  <li>연세대학교 교육대학원 평생교육경영</li>
                  <li>청소년 교육컨설팅, 상담코칭 20년</li>
                </ul>
              </div>

              <div className={styles.achievementCategory}>
                <h3>🏢 현재 활동</h3>
                <ul>
                  <li>AI 코칭기업 킹클(KINGCL) 대표</li>
                  <li>킹클코치TV 유튜브 채널 운영</li>
                  <li>AI기반 자기주도학습 및 진로 청소년 코칭</li>
                  <li>부모와 교사 등 AI활용 교육 강의 및 코칭</li>
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
