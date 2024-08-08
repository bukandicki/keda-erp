import { Link } from "react-router-dom"
import { SERVICES_LIST } from "../../lib/constants/service"
import { TIER_LISTS } from "../../lib/constants/tier"

import TopWave from "../../assets/svgs/top-wave.svg"
import BottomWave from "../../assets/svgs/bottom-wave.svg"
import CheckIcon from "../../assets/svgs/check.svg"
import AnalyticsIllustration from "../../assets/svgs/analytics.svg"
import Button from "../../components/Button"

import "./RootPage.styles.scss"

export default function RootPage() {
  return (
    <main className="erp">
      <section className="erp__hero">
        <TopWave />
        <BottomWave />

        <h1 className="hero__description">Our ERP solution is designed to revolutionize the way your business operates. By integrating all your key processes into a single, user-friendly platform.</h1>

        <div className="hero__information">
          <h2 className="hero__headline">
            <em>
              "Transform Your Business Operations<br />with Our All-in-One ERP Solution"
            </em>
          </h2>

          {/* @ts-ignore */}
          <AnalyticsIllustration className="hero__illustration" width="200" />
        </div>
      </section>

      <section className="erp__about" id="about">
        <div className="about__headline">
          <h2>We provide innovative ERP solutions that streamline your business operations, boost efficiency, and drive growth. Our tailored approach ensures your unique needs are met, empowering you to achieve more.</h2>
        </div>

        <div className="about__services">
          {SERVICES_LIST.map(service => (
            <div key={service.title} className="service__box">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/">{service.ctaLabel} </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="erp__pricing" id="pricing">
        <h2 className="pricing__title">Choose your right plan!</h2>
        <p className="pricing__sub-title">
          Select from best plans, ensuring a perfect match. Need or less?<br />
          Customize your tier for a seamless fit!
        </p>

        <div className="tier__lists">
          {TIER_LISTS.map(tier => (
            <div key={tier.name} className="tier__box">
              {tier.popular && <span className="tier__label">Most popular plan</span>}
              <h3 className="tier__name">{tier.name}</h3>
              <p className="tier__description">{tier.description}</p>
              <h4 className="tier__price">${tier.price}</h4>

              <hr />

              <ul className="tier__benefits">
                {tier.benefits.can_record_incoming_items && (
                  <li>
                    <CheckIcon />
                    <span>Record incoming items</span>
                  </li>
                )}
                {tier.benefits.can_record_outgoing_items && (
                  <li>
                    <CheckIcon />
                    <span>Record outgoing items</span>
                  </li>
                )}
                {tier.benefits.can_record_profits && (
                  <li>
                    <CheckIcon />
                    <span>Record profits</span>
                  </li>
                )}
                {tier.benefits.can_analyze_sales_with_charts && (
                  <li>
                    <CheckIcon />
                    <span>Analyze sales results with charts</span>
                  </li>
                )}
                {tier.benefits.has_24_7_support && (
                  <li>
                    <CheckIcon />
                    <span>24/7 support</span>
                  </li>
                )}
                {tier.benefits.can_export_data_to_excel && (
                  <li>
                    <CheckIcon />
                    <span>Export data to Excel</span>
                  </li>
                )}
                {tier.benefits.can_use_ai_prediction && (
                  <li>
                    <CheckIcon />
                    <span>AI income prediction</span>
                  </li>
                )}
              </ul>

              <div className="tier__cta">
                <hr />
                <Button outlined={!tier.popular}>Get started</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="erp__contact" id="contact">

      </section>
    </main>
  )
}
