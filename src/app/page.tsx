import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="킹클코치 로고" className={styles.logoImg} />
            <span>킹클코치</span>
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
            <div className={styles.heroBadge}>
              <span>✨</span> AI 시대의 교육 혁신가
            </div>

            <h1 className={styles.heroTitle}>
              <span className={styles.heroSubtitle}>AI 맞춤형 코칭 전문가</span>
              킹클코치 <span className="text-gradient">이지현</span>
            </h1>

            <p className={styles.heroDescription}>
              24년간 <strong>20만 회</strong>의 코칭 경험으로<br />
              AI 시대에 맞는 <strong>자기주도학습</strong>과 <strong>진로 설계</strong>를 이끕니다
            </p>

            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className="stat-number">24</span>
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

            <div className={styles.heroCta}>
              <a href="#contact" className="btn btn-primary">
                무료 상담 신청
              </a>
              <a href="https://www.youtube.com/channel/UC-aQ-8GKrNBHcdsFA3d-aZg" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                ▶ 유튜브 채널
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageGlow}></div>
              <div className={styles.heroImagePlaceholder}>
                <span>👤</span>
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
          <h2 className="section-title">
            <span>About</span>
            킹클코치를 소개합니다
          </h2>

          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p className={styles.aboutLead}>
                &ldquo;성공은 재능이 아니라, <strong className="text-gold">마음과 전략</strong>의 문제입니다.&rdquo;
              </p>

              <p>
                저는 AI와 코칭으로 사람의 성장을 설계하는 <strong>킹클코치 이지현</strong>입니다.
                24년간 청소년과 성인들의 자기주도학습, 진로 설계, 마인드셋 코칭을 진행해왔습니다.
              </p>

              <p>
                AI 시대가 도래하면서 교육의 패러다임이 완전히 바뀌고 있습니다.
                이제 단순히 지식을 암기하는 것이 아니라, <strong>어떻게 배우고 어떻게 성장할 것인가</strong>가
                핵심이 되었습니다.
              </p>

              <p>
                킹클은 <strong>&ldquo;King of Class&rdquo;</strong>의 줄임말로,
                모든 사람이 자신만의 영역에서 왕이 될 수 있다는 철학을 담고 있습니다.
              </p>
            </div>

            <div className={styles.aboutCards}>
              <div className={`card ${styles.aboutCard}`}>
                <div className={styles.aboutCardIcon}>🎯</div>
                <h4>비전</h4>
                <p>AI 시대에 맞는 새로운 교육 방법론으로 모든 이의 성장을 돕습니다</p>
              </div>

              <div className={`card ${styles.aboutCard}`}>
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
          <h2 className="section-title">
            <span>Expertise</span>
            전문 분야
          </h2>

          <div className={styles.expertiseGrid}>
            <div className={`card ${styles.expertiseCard}`}>
              <div className={styles.expertiseIcon}>📚</div>
              <h3>자기주도학습 코칭</h3>
              <p>스스로 배우는 힘을 기르는 체계적인 학습 전략과 습관 설계</p>
              <ul>
                <li>학습 동기 부여</li>
                <li>효율적 시간 관리</li>
                <li>메타인지 전략</li>
              </ul>
            </div>

            <div className={`card ${styles.expertiseCard}`}>
              <div className={styles.expertiseIcon}>🧭</div>
              <h3>진로 설계 코칭</h3>
              <p>자신만의 강점을 발견하고 미래를 설계하는 진로 탐색</p>
              <ul>
                <li>적성 및 강점 발견</li>
                <li>미래 직업 탐색</li>
                <li>로드맵 설계</li>
              </ul>
            </div>

            <div className={`card ${styles.expertiseCard}`}>
              <div className={styles.expertiseIcon}>🧠</div>
              <h3>마인드셋 코칭</h3>
              <p>성장하는 마인드로 변화하는 사고방식 혁신</p>
              <ul>
                <li>성장형 마인드셋</li>
                <li>자기효능감 강화</li>
                <li>회복탄력성 향상</li>
              </ul>
            </div>

            <div className={`card ${styles.expertiseCard} ${styles.expertiseCardHighlight}`}>
              <div className={styles.expertiseIcon}>🤖</div>
              <h3>AI 코칭 리더십</h3>
              <p>AI 시대에 맞는 새로운 학습과 성장 전략</p>
              <ul>
                <li>AI 활용 학습법</li>
                <li>생성형 AI 활용</li>
                <li>디지털 리터러시</li>
              </ul>
              <div className={styles.cardBadge}>NEW</div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`section ${styles.achievements}`}>
        <div className="container">
          <h2 className="section-title">
            <span>Achievements</span>
            주요 활동 및 성과
          </h2>

          <div className={styles.achievementsTabs}>
            <div className={styles.achievementsContent}>
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
                  <li>&ldquo;생각 디톡스 진로 디톡스 학습 디톡스&rdquo; (2023)</li>
                  <li>외 11권</li>
                </ul>
              </div>

              <div className={styles.achievementCategory}>
                <h3>🎓 학력 및 자격</h3>
                <ul>
                  <li>연세대학교 교육대학원 평생교육경영</li>
                  <li>청소년 교육·상담 24년 경력</li>
                </ul>
              </div>

              <div className={styles.achievementCategory}>
                <h3>🏢 현재 활동</h3>
                <ul>
                  <li>AI 맞춤형 코칭기업 킹클(KINGCL) 대표</li>
                  <li>킹클코치TV 유튜브 채널 운영</li>
                  <li>킹클이브닝 청소년 코칭 프로그램</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className={`section ${styles.media}`}>
        <div className="container">
          <h2 className="section-title">
            <span>Media</span>
            최신 영상
          </h2>

          {/* Featured Video - 메인 임베드 */}
          <div className={styles.featuredVideo}>
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/_VUg5mdUYHI?si=RZQiWe50ejvmzSws"
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

          {/* More Videos */}
          <div className={styles.mediaGrid}>
            <a href="https://www.youtube.com/watch?v=lrhgRmVLr7w" target="_blank" rel="noopener noreferrer" className={styles.mediaCard}>
              <div className={styles.mediaThumbnail}>
                <div className={styles.mediaPlay}>▶</div>
                <span>7:23</span>
              </div>
              <div className={styles.mediaInfo}>
                <h4>지식이 사라지는 시대, 무엇을 배워야 살아남는가?</h4>
                <p>2025.11.16</p>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=4ZALaSQJ2i4" target="_blank" rel="noopener noreferrer" className={styles.mediaCard}>
              <div className={styles.mediaThumbnail}>
                <div className={styles.mediaPlay}>▶</div>
                <span>7:24</span>
              </div>
              <div className={styles.mediaInfo}>
                <h4>교육부 &lsquo;AI 대전환&rsquo; 핵심 전략</h4>
                <p>2025.11.13</p>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=DIKtl4sj_dY" target="_blank" rel="noopener noreferrer" className={styles.mediaCard}>
              <div className={styles.mediaThumbnail}>
                <div className={styles.mediaPlay}>▶</div>
                <span>13:40</span>
              </div>
              <div className={styles.mediaInfo}>
                <h4>입시코디네이터, 그리고 성장 코치 | 티처스2 비하인드</h4>
                <p>2025.10.20</p>
              </div>
            </a>
          </div>

          <div className={styles.mediaMore}>
            <a href="https://www.youtube.com/channel/UC-aQ-8GKrNBHcdsFA3d-aZg" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              유튜브에서 더 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`section ${styles.contact}`}>
        <div className="container">
          <div className={styles.contactCard}>
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

              <a href="https://www.youtube.com/channel/UC-aQ-8GKrNBHcdsFA3d-aZg" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span>▶️</span>
                <div>
                  <strong>유튜브</strong>
                  <span>킹클코치TV</span>
                </div>
              </a>

              <a href="https://cafe.naver.com/youthhappyvirus" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span>☕</span>
                <div>
                  <strong>카페</strong>
                  <span>킹클 커뮤니티</span>
                </div>
              </a>
            </div>

            <div className={styles.contactCta}>
              <p>강연 및 컨설팅 문의</p>
              <a href="https://kingclcoach.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                kingclcoach.com
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
              <span>킹클코치 이지현</span>
            </div>
            <p>© 2024 KINGCL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
