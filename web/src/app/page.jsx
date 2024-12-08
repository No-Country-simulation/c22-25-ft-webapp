import { HeaderLanding } from '@/components/landing-page/HeaderLanding'
import { HeroSection } from '@/components/landing-page/HeroSection'
import { FeaturesSection } from '@/components/landing-page/FeaturesSection'
import { MetricsSection } from '@/components/landing-page/MetricsSection'

export default function HomePage() {
  return (
    <>
      <HeaderLanding />
      <HeroSection />
      <FeaturesSection />
      <MetricsSection />
    </>
  )
}
