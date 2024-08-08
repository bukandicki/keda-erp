import Button from "../../components/Button"
import Input from "../../components/Input"

import GoogleLogo from "../../assets/svgs/google.svg"
import AppleLogo from "../../assets/svgs/apple.svg"
import TwitterLogo from "../../assets/svgs/twitter.svg"

import "./LoginPage.styles.scss"
import { Link } from "react-router-dom"

export default function LoginPage() {
  return (
    <main className="login">
      <section className="login__wrapper">
        <h1>Login</h1>
        <p>Please enter your detail to sign in.</p>

        <div className="login__oauth">
          <button className="oauth__box">
            <GoogleLogo />
          </button>
          <button className="oauth__box">
            <AppleLogo />
          </button>
          <button className="oauth__box">
            <TwitterLogo />
          </button>
        </div>

        <div className="login__separator">
          <span>OR</span>
        </div>


        <form className="login__form">
          <Input label="Email" type="email" placeholder="Enter your email" />
          <Input label="Password" type="password" placeholder="••••••••" />

          <Link to="/" className="login__forgot">Forgot password?</Link>

          <Button type="button">Login</Button>

          <div className="login__info">
            <span>Don't have an account yet? </span>
            <Link to="/">Sign Up</Link>
          </div>
        </form>

        <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1264fb" fill-opacity="1" d="M0,128L34.3,133.3C68.6,139,137,149,206,133.3C274.3,117,343,75,411,64C480,53,549,75,617,96C685.7,117,754,139,823,138.7C891.4,139,960,117,1029,138.7C1097.1,160,1166,224,1234,229.3C1302.9,235,1371,181,1406,154.7L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg>

        <svg width="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,600 L 0,300 C 69.31100478468898,315.9138755980861 138.62200956937795,331.82775119617224 243,339 C 347.37799043062205,346.17224880382776 486.82296650717706,344.6028708133971 586,288 C 685.1770334928229,231.39712918660288 744.0861244019138,119.76076555023923 836,82 C 927.9138755980862,44.239234449760765 1052.8325358851675,80.35406698564593 1159,79 C 1265.1674641148325,77.64593301435407 1352.5837320574162,38.822966507177036 1440,0 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#1264fb" fill-opacity="0.53"></path>
          <path d="M 0,600 L 0,500 C 99.8755980861244,550.1818181818182 199.7511961722488,600.3636363636364 285,568 C 370.2488038277512,535.6363636363636 440.87081339712927,420.7272727272727 527,366 C 613.1291866028707,311.2727272727273 714.7655502392344,316.72727272727275 826,328 C 937.2344497607656,339.27272727272725 1058.066985645933,356.3636363636364 1162,336 C 1265.933014354067,315.6363636363636 1352.9665071770335,257.8181818181818 1440,200 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#1264fb" fill-opacity="1"></path>
        </svg>
      </section>
    </main>
  )
}
