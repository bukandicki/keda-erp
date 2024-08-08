import TopWave from "../../assets/svgs/top-wave.svg"
import BottomWave from "../../assets/svgs/bottom-wave.svg"
import AnalyticsIllustration from "../../assets/svgs/analytics.svg"

import "./RootPage.styles.scss"

export default function RootPage() {
  return (
    <main className="erp">
      <section className="erp__hero">
        <TopWave />
        <BottomWave />

        <p className="hero__description">Our ERP solution is designed to revolutionize the way your business operates. By integrating all your key processes into a single, user-friendly platform.</p>

        <div className="hero__information">
          <p className="hero__headline">
            <em>
              "Transform Your Business Operations with Our All-in-One ERP Solution"
            </em>
          </p>

          {/* @ts-ignore */}
          <AnalyticsIllustration className="hero__illustration" width="200" />
        </div>
      </section>

      <section className="erp__about" id="about">

      </section>

      <section className="erp__pricing" id="pricing">

      </section>

      <section className="erp__contact" id="contact">

      </section>
    </main>
  )
}
