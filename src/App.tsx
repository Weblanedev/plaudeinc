
import './App.css'

const heroImage = new URL('./assets/workdesk.jpg', import.meta.url).href

function App() {
  return (
    <main className="coming-soon-wrapper">
      <section className="coming-soon-card">
        <p className="eyebrow">Coming soon</p>
        <h1>Veston is getting a fresh look</h1>
        <p className="lede">
          We are crafting a modern experience tailored to every screen size so you can stay close to the drops
          you care about most.
        </p>
        <small className="footnote">No spam. Just the good stuff.</small>
      </section>

      <figure className="coming-soon-visual" aria-hidden="true">
        <img src={heroImage} alt="" loading="lazy" decoding="async" />
      </figure>
    </main>
  )
}

export default App
