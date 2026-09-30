import type { Metadata } from "next";
import Link from "next/link";
import { QuranQuote } from "@/app/components/quran-quote";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "RAJO CHARITY supports children from vulnerable families with access to Qur’anic education in Jigjiga, Ethiopia.",
};

const childrenWeSupport = [
  "Families experiencing financial hardship",
  "Families with limited or irregular income",
  "Children who have lost one or both parents",
  "Families with a large number of dependents",
  "Other circumstances that may make access to education difficult",
];

const currentWork = [
  "Supporting Qur’anic education for children from vulnerable families",
  "Identifying children who may benefit from educational support",
  "Understanding the circumstances of children and their families",
  "Working with families and local educators",
  "Maintaining proper records to responsibly manage our program",
];

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid about-hero-grid">
          <div>
            <span className="eyebrow">About RAJO CHARITY</span>
            <h1>Supporting Children Through Qur’anic Education</h1>
            <p className="hero-copy">
              RAJO CHARITY is a registered community-based charitable organization established in
              2023 in Jigjiga, Ethiopia. We help children from orphaned and financially struggling
              families access Qur’anic education.
            </p>
            <div className="hero-actions">
              <Link className="button-primary" href="/contact">Get in touch</Link>
              <Link className="text-link" href="/team">Meet our team <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <aside className="about-hero-aside" aria-label="Program information">
            <span className="eyebrow">Our program today</span>
            <p className="about-students-number">31</p>
            <p className="about-students-label">children learning the Qur’an</p>
            <p className="about-location">Jigjiga, Ethiopia <span aria-hidden="true">·</span> Established 2023</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container split-content-grid">
          <div className="section-heading">
            <span className="eyebrow">Our mission</span>
            <h2>Learning should be within every child’s reach.</h2>
          </div>
          <div className="content-copy">
            <p>
              Our mission is simple: to help children from vulnerable families access Qur’anic
              education and to encourage our community to come together in supporting the next
              generation.
            </p>
            <p>
              We believe that a child’s circumstances should not prevent them from learning.
              Through the support of local community members, RAJO CHARITY provides children with
              the opportunity to learn the Qur’an in a supportive environment while helping
              families who may face financial difficulties.
            </p>
            <p>
              We work to identify children who may benefit from our support, understand their family
              circumstances, and connect them with Qur’anic education.
            </p>
          </div>
          </div>
      </section>

        <section className="section section-soft">
          <div className="container eligibility-grid">
            <div className="section-heading">
              <span className="eyebrow">Who we support</span>
              <h2>Every family’s circumstances are different.</h2>
              <p>Our program primarily supports children whose families may be facing challenges such as:</p>
            </div>
            <div>
              <ul className="content-list">
                {childrenWeSupport.map((circumstance) => (
                  <li key={circumstance}>{circumstance}</li>
                ))}
              </ul>
              <p className="eligibility-note">
                We look at the wider circumstances of each child rather than relying on a single
                factor when determining who may need support.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-content-grid">
            <div className="section-heading">
              <span className="eyebrow">Our work</span>
              <h2>A clear focus: Qur’anic education for children.</h2>
              <p>
                Our current program supports 31 students. We hope to reach more children as our
                community grows.
              </p>
            </div>
            <ul className="content-list">
              {currentWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">A community effort</span>
              <h2>When a community cares, children can keep learning.</h2>
              <p>
                RAJO CHARITY exists because of the willingness of people in our community to help one
                another. Local supporters contribute what they can so children facing difficult
                circumstances can access Qur’anic education. Meaningful change does not always begin
                with large organizations or large amounts of money. Sometimes, it begins when people
                in a community decide to take responsibility for the children around them. Every
                contribution and every act of support helps us continue this work.
              </p>
            </div>
            <QuranQuote
              arabic="مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنبُلَةٍ مِّائَةُ حَبَّةٍ ۗ وَاللَّهُ يُضَاعِفُ لِمَن يَشَاءُ ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ"
              translation="The example of those who spend their wealth in the way of Allah is like a seed that grows seven spikes; in each spike is a hundred grains. And Allah multiplies for whom He wills."
              reference="Al-Baqarah 2:261"
            />
        </div>
      </section>

      <section className="section">
        <div className="container split-content-grid">
          <div className="section-heading">
            <span className="eyebrow">Our vision</span>
            <h2>A future rooted in knowledge, character, and faith.</h2>
          </div>
          <div className="content-copy">
            <p>
              We envision a community where every child has the opportunity to learn the Qur’an,
              regardless of their family’s financial circumstances.
            </p>
            <p>
              We hope to contribute to raising a generation of children with knowledge, good
              character, and a strong foundation in their faith, while building a culture of
              compassion and mutual support within our community.
            </p>
          </div>
          <div className="commitment-block">
            <span className="eyebrow">Our commitment</span>
            <p>
              As a registered charity, RAJO CHARITY is committed to carrying out its work
              responsibly and with respect for the dignity of every child and family we serve.
              Supporting children is not only an act of charity; it is an investment in the future
              of our community.
            </p>
          </div>
          <div className="about-closing">
            <strong>31 students</strong>
            <span>supported through our Qur’anic education program</span>
            <p>Together, we can help a child learn today and build a stronger community tomorrow.</p>
          </div>
        </div>
      </section>
    </>
  );
}