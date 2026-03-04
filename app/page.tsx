import { BackgroundLayer } from "@/components/background-layer"
import { ProfileCard } from "@/components/profile-card"
import { SocialIcons } from "@/components/social-icons"
import { LinkCard } from "@/components/link-card"
import { FeaturedContent } from "@/components/featured-content"
import { Testimonials } from "@/components/testimonials"
import { SectionContainer } from "@/components/section-container"
import { WhatsAppCTA } from "@/components/whatsapp-cta"
import { BioFooter } from "@/components/bio-footer"
import { siteData } from "@/lib/site-data"

export default function Page() {
  const { profile, background, socials, links, testimonials, featured, footer } =
    siteData

  return (
    <>
      <BackgroundLayer image={background.image} overlay={background.overlay} />

      <main className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-4 py-10">
        {/* Profile */}
        <SectionContainer>
          <ProfileCard
            name={profile.name}
            handle={profile.handle}
            description={profile.description}
            image={profile.image}
            verified={profile.verified}
          />
        </SectionContainer>

        {/* Social Icons */}
        <div className="mt-5">
          <SocialIcons socials={socials} />
        </div>

        {/* WhatsApp CTA */}
      <div className="mt-4">
        <WhatsAppCTA url="https://wa.me/5500000000000" />
      </div>

        {/* Separator */}
        <div className="mx-auto my-6 h-px w-16 bg-border" />

        {/* Action Links */}
        <SectionContainer>
          {links.map((link) => (
            <LinkCard key={link.title} link={link} />
          ))}
        </SectionContainer>

        {/* Separator */}
        <div className="mx-auto my-6 h-px w-16 bg-border" />

        {/* Featured Collection */}
        {featured && (
          <SectionContainer className="mb-4">
            <FeaturedContent
              title={featured.title}
              description={featured.description}
              image={featured.image}
              url={featured.url}
            />
          </SectionContainer>
        )}

        {/* Testimonials */}
        <div className="mt-4">
          <Testimonials testimonials={testimonials} />
        </div>

        {/* Footer */}
        <div className="mt-auto">
          <BioFooter brand={footer.brand} copyright={footer.copyright} />
        </div>
      </main>
    </>
  )
}
