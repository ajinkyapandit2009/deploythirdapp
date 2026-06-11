import './Home.css'

const features = [
  {
    icon: '01',
    title: 'Simple by design',
    description: 'A focused experience that helps you get where you need to go.',
  },
  {
    icon: '02',
    title: 'Built for you',
    description: 'Thoughtful details and flexible tools that fit the way you work.',
  },
  {
    icon: '03',
    title: 'Ready to grow',
    description: 'A strong foundation for your next idea, project, or business.',
  },
]

function Home() {
  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Nova home">
          <span className="brand-mark">N</span>
          INDRAYANI
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>

        <a className="nav-button" href="#contact">
          Contact us
        </a>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-content">
          <p className="eyebrow">A better way to build</p>
          <h1>Turn your ideas into something remarkable.</h1>
          <p className="hero-copy">
            A simple, modern space for ambitious people to create, collaborate,
            and bring their best work to life.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#features">
              Get started
              <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#about">
              Learn more
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card card-back">
            <span>Ideas</span>
            <strong>24</strong>
          </div>
          <div className="visual-card card-main">
            <div className="card-top">
              <span>Weekly progress</span>
              <span className="status-dot" />
            </div>
            <strong>84%</strong>
            <div className="chart">
              <span style={{ height: '38%' }} />
              <span style={{ height: '55%' }} />
              <span style={{ height: '48%' }} />
              <span style={{ height: '75%' }} />
              <span style={{ height: '63%' }} />
              <span style={{ height: '92%' }} />
            </div>
          </div>
          <div className="visual-orb" />
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="section-heading">
          <p className="eyebrow">Why Nova</p>
          <h2>Everything you need to move forward.</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-number">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <p>Designed with clarity. Built with purpose.</p>
      </section>

      <footer id="contact">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">N</span>
          Nova
        </a>
        <p>hello@nova.example</p>
        <p>© 2026 Nova. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default Home
