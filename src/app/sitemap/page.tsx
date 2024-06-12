import Footer from "@/components/footer";

export default function SiteMap() {
  return (
    <div>
      <div className="font-bold text-3xl text-black flex justify-center p-10 ">
        Dream Site Map
      </div>
      <p className="items-center max-w-xl mx-auto p-5 border rounded-3xl bg-zinc-50">
        Hi! Welcome to Dreams site map. Everything below is on Dream, from
        products pages, to affiliate pages, to just our Dream home page.
        Everything your looking for within Dream is right here.{" "}
      </p>

      <div className="h-screen">
        <div className="flex justify-center">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              About Dream
            </div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/leadership">
                  Dream Leadership
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/sell">
                  Features
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/contact">
                  Contact
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/feedback">
                  Dream Feedback
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/legal">
                  Legal
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/support">
                  Dream Support
                </a>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="col col-auto font-semibold text-black">Account</div>
            <div>
              <a className="hover:underline text-blue-500" href="/profile">
                Profile
              </a>
              <div>
                <a className="hover:underline text-blue-500" href="/sell">
                  Seller Dashboard
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/"></a>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd Row right start under */}

        <div className="flex justify-center border-b-2 border-zinc-900">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Dream Values
            </div>
            <div>
              <div>
                <a
                  className="hover:underline text-blue-500"
                  href="/accessiblity"
                >
                  Accessibility
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/privacy">
                  Privacy
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/givingback">
                  Giving Back
                </a>
              </div>
              <div>
                <a
                  className="hover:underline text-blue-500"
                  href="/impowerhope"
                >
                  Impowering Hope
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/legal"></a>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              For Business
            </div>
            <div>
              <a
                className="hover:underline text-blue-500"
                href="/businesscontacts"
              >
                Business Contacts
              </a>
              <div>
                <a
                  className="hover:underline text-blue-500"
                  href="/Dream&business"
                >
                  Business shop
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/"></a>
              </div>
            </div>
          </div>
        </div>

        {/* This is all the products for the site map */}

        <div className="text-center text-2xl font-semibold mt-10">
          Templates
        </div>

        <div className="flex justify-center">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Business
            </div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/leadership">
                  Business plans
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/sell">
                  Company profiles
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/contact">
                  Corporate brochures
                </a>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Financial
            </div>
            <div>
              <a className="hover:underline text-blue-500" href="/profile">
                Budgets
              </a>
              <div>
                <a className="hover:underline text-blue-500" href="/sell">
                  Financial statements
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Invoices
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 of Templates */}

        <div className="flex justify-center">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Educational
            </div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Lesson plans
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Educational posters
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  student planners
                </a>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Health & Wellness
            </div>
            <div>
              <a className="hover:underline text-blue-500" href="/">
                Fitness plans
              </a>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Meal planners
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Health trackers
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 of Templates */}

        <div className="flex justify-center">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Marketing
            </div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Social media Ads
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Marketing plans
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Advertising proposals
                </a>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Event Planning
            </div>
            <div>
              <a className="hover:underline text-blue-500" href="/">
                Event budgets
              </a>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Event timelines
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  RSVP forms
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4 of Templates */}

        <div className="flex justify-center">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Real Estate
            </div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Property listing
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Real Estate flyers
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Lease Agreements
                </a>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Travel & Tourism
            </div>
            <div>
              <a className="hover:underline text-blue-500" href="/">
                Travel itineraries
              </a>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Vaction planners
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Travel brochures
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 5 of Templates */}

        <div className="flex justify-center">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Technology & IT
            </div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Software Documents
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  IT service Agreements
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Technical manuals
                </a>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="col col-auto font-semibold text-black">Legal</div>
            <div>
              <a className="hover:underline text-blue-500" href="/">
                Contracts
              </a>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Legal agreements
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Privacy policies
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 6 of Templates */}

        <div className="flex justify-center">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Fashion & beauty
            </div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Fashion lookbooks
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Beauty product flyers
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  clothing line business plans
                </a>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Food & Beverage
            </div>
            <div>
              <a className="hover:underline text-blue-500" href="/">
                Meanu designs
              </a>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Recipe cards
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Food product labels
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 7 of Templates */}

        <div className="flex justify-center">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              NonProfit & Charity
            </div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Donation forms
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Grant proposals
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  NonProfit budgets
                </a>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Wedding & Event
            </div>
            <div>
              <a className="hover:underline text-blue-500" href="/">
                Invitations
              </a>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Event programs
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Seating charts
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 8 of Templates */}

        <div className="flex justify-center">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Photography & Design
            </div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Photography contacts
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Design portfolios
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Creative resumes
                </a>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Sports & Fitness
            </div>
            <div>
              <a className="hover:underline text-blue-500" href="/">
                Sports event flyers
              </a>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Workout plans
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Sports team schedules
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 9 of Templates */}

        <div className="flex justify-center bordr-b-2 border-black">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Interior Design
            </div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Room layouts
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Design proposals
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Home renovation plans
                </a>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Music & Entertainment
            </div>
            <div>
              <a className="hover:underline text-blue-500" href="/">
                Concert posters
              </a>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Music album covers
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Event tickets
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Software and Apps */}

        <div className="text-center text-2xl font-semibold mt-10">
          Software & Apps
        </div>

        <div className="flex justify-center bordr-b-2 border-black">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">
              Software
            </div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Productivity tools
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Design software
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Web development tools
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Antivirus & security
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Financial managment
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Educational softwares
                </a>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="col col-auto font-semibold text-black">Apps</div>
            <div>
              <a className="hover:underline text-blue-500" href="/">
                Communication apps
              </a>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Health & Fitness apps
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Social Media apps
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  VR apps
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  AR apps
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Weather apps
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Social media platforms
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Music streaming platforms
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Video streaming platforms
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  E-Commerce platforms
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Video games
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  News apps
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Travel & exploration
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Food & recipe apps
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Language translation apps
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Parenting & family apps
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Educational apps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Downloads */}

        <div className="text-center text-2xl font-semibold mt-10">
          Educational Downloads
        </div>

        <div className="flex justify-center bordr-b-2 border-black">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">All</div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Study guides
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Lesson plans
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Printable worksheets
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Educational games
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Educational posters
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Educational E-books
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  classrom resources
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Educational softwares
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Educational E-books
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Teaching resouces
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Language learning
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  STEM resources
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Videos & animations
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Flashcards
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Art & crafts
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Educational apps
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Educational podcast
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  interactive whiteboard resources
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Digital textbooks
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Educational infographics
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Career development resources
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Art */}

        <div className="text-center text-2xl font-semibold mt-10">
          Digital Art
        </div>

        <div className="flex justify-center bordr-b-2 border-black">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">All</div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Digital Illustrations
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Digital Paintings
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Concept Art
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Character design
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Anime & Manga art
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Pixel art
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Digital comics
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Digtal portraits
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Fantasy art
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Sci-Fi art
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Abstract digital art
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Vector art
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Surreal art
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Digital collage
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Enviromental art
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  SteamPunk art
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  tattoo design
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Digital scupture
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  GIF art
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Cinemagraphs
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/"></a>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Audio */}

        <div className="text-center text-2xl font-semibold mt-10">
          Digital Audio
        </div>

        <div className="flex justify-center bordr-b-2 border-black">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">All</div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Music Production
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Podcasting
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Sound design
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Audio editing
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Beat making
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Voiceover production
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Foley artisty
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  DJ mixing
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Field recording
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Podcast jingles
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Remixing
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Ambient soundscapes
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Game Audio
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Virtual Instruments
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Audio engineering
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Images */}

        <div className="text-center text-2xl font-semibold mt-10">
          Digital Images
        </div>

        <div className="flex justify-center bordr-b-2 border-black">
          <div className="p-10">
            <div className="col col-auto font-semibold text-black">All</div>
            <div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Dital Photography
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Photo retouching
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Sound design
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Audio editing
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Beat making
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Voiceover production
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Foley artisty
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  DJ mixing
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Field recording
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Podcast jingles
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Remixing
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Ambient soundscapes
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Game Audio
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Virtual Instruments
                </a>
              </div>
              <div>
                <a className="hover:underline text-blue-500" href="/">
                  Audio engineering
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="h-screen"></section>
      <section className="h-screen"></section>
      <section className="h-screen"></section>
      <section className="h-screen"></section>
      <section className="h-screen"></section>
      <Footer />
    </div>
  );
}
