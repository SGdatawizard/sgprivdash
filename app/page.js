import {
  sgData,
  sgAnthology,
  sgAuctions,
  sgConsignments,
  sgHeirloom,
  sgReader,
  sgMarketingCalendar,
} from "./images";
import PasswordReveal from "./PasswordReveal";

// Login details for each tool. Leave `email`/`password` off for open-access tools.
const tools = [
  {
    title: "SG Data",
    href: "https://www.sggbdata.com/password",
    image: sgData,
    description:
      "A full catalogue of passed GB items auctioned with Stanley Gibbons.",
    password: "Kluivert89!",
  },
  {
    title: "SG Anthology",
    href: "https://sganthology-gzk7.vercel.app/",
    image: sgAnthology,
    description:
      "A sales tool to help match customers to their categories, and sell more stock.",
    email: "hnorris@stanleygibbons.com",
    password: "Calvinbassey89!",
  },
  {
    title: "SG Auctions",
    href: "https://sg-auctions.vercel.app/",
    image: sgAuctions,
    description:
      "A full auction stats tracker to map how our auctions are performing.",
    email: "hnorris@stanleygibbons.com",
    password: "Lordofthestamps123!",
  },
  {
    title: "SG Postmark",
    href: "https://consignment-tracker-tan.vercel.app/overview",
    image: sgConsignments,
    description:
      "Track consignments from intake to completion — receipts, vendors and deadlines all in one place.",
    email: "hnorris@stanleygibbons.com",
    password: "stamps123",
  },
  {
    title: "SG Heirloom",
    href: "https://heirloom-rho.vercel.app/",
    image: sgHeirloom,
    description:
      "A private curation service for the finest stamps, coins and cards, proven by the record.",
  },
  {
    title: "SG Reader",
    href: "https://sgreader-tszy-5dbdo0eni-sgb2.vercel.app/",
    image: sgReader,
    description:
      "Browse our auction catalogues as digital, page-turning books — search or jump straight to a lot.",
  },
  {
    title: "SG Marketing Calendar",
    href: "https://sg-markcal.vercel.app/",
    image: sgMarketingCalendar,
    description:
      "Plan and map marketing activity across every channel in one shared, drag-and-drop calendar.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="masthead">
        <div className="brand">
          <span className="monogram">SG</span>
          <span className="wordmark">
            Stanley <em>Gibbons</em>
          </span>
        </div>
        <h1 className="title">Welcome!</h1>
      </header>

      <section className="album" aria-label="Tools">
        {tools.map((tool) => (
          <div key={tool.title} className="card">
            <div className="card-inner">
              <a
                className="card-link"
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card-head">
                  <h2 className="card-title">{tool.title}</h2>
                  <span className="open">Open ↗</span>
                </div>
                <div className="shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tool.image} alt={`${tool.title} screenshot`} />
                </div>
                <p className="desc">{tool.description}</p>
              </a>
              <PasswordReveal email={tool.email} password={tool.password} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
