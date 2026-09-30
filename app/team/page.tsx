import type { Metadata } from "next";
import { QuranQuote } from "@/app/components/quran-quote";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the team serving RAJO CHARITY in Jigjiga, Ethiopia.",
};

const teamMembers = [
  { name: "HAMZE SHARIIF MOHAMED", role: "CEO" },
  { name: "HAMZE MOHAMED KHALIF" },
  { name: "ABDIRAHMAN MACALIN" },
  { name: "GUULEED MOHAMED GULEED" },
  { name: "HAMZE AHMED" },
  { name: "ABDULAAHI OMAR AHMED" },
  { name: "HAMZE HAJI XUSEEN" },
];

export default function TeamPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="eyebrow">Our team</span>
          <h1>People working together for children’s education.</h1>
          <p>
            RAJO CHARITY is a community effort. We are grateful to the people who help children
            access Qur’anic education and support families across our community.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container team-roster-layout">
          <div className="section-heading">
            <span className="eyebrow">The people behind RAJO</span>
            <h2>Serving with a shared purpose.</h2>
            <p>
              Our team works with families, local educators, and community supporters to help
              children learn.
            </p>
          </div>
          <ol className="team-roster">
            {teamMembers.map((member, index) => (
              <li className="team-roster-item" key={member.name}>
                <span className="team-roster-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="team-roster-name">{member.name}</span>
                {member.role && <span className="team-roster-role">{member.role}</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <QuranQuote
            className="team-quote"
            arabic="وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ"
            translation="And cooperate in righteousness and piety, but do not cooperate in sin and aggression."
            reference="Al-Ma’idah 5:2"
          />
        </div>
      </section>
    </>
  );
}