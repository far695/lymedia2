import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { partners } from '@/lib/data'

export default function PartnersPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              我们的合作伙伴
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              我们很荣幸能与各行各业具有前瞻性思维的组织合作。
            </p>
          </div>
        </div>
      </section>
      
      {/* Partners Grid */}
      <section className="pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{partner.name}</h3>
                  <p className="text-muted-foreground mb-6">{partner.description}</p>
                  <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-muted-foreground">
                    "{partner.testimonial}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partnership Approach */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                我们的合作方式
              </h2>
              <p className="text-muted-foreground mb-8">
                我们相信，真正的伙伴关系建立在共同价值观、开放沟通和共同成长的基础上。以下是我们与合作伙伴的合作方式：
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: '协作过程',
                    description: '我们与合作伙伴在每个阶段都紧密合作，确保您的声音被听到，您的愿景得以实现。'
                  },
                  {
                    title: '长期关系',
                    description: '我们专注于建立长期的合作伙伴关系，而不是一次性的项目，这使我们能够深入了解您不断变化的需求。'
                  },
                  {
                    title: '共同成功',
                    description: '您的成功就是我们的成功。我们以我们为您的业务带来的积极影响来衡量我们的业绩。'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Partnership approach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Partnership Benefits */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">合作伙伴关系收益</h2>
            <p className="text-muted-foreground text-lg">
              与岭羊合作，您可以期待什么？
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '战略专长',
                description: '您可以联系我们经验丰富的战略家、设计师和开发人员团队，他们将多年的经验带入您的项目中。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 0 0-9 4.5 4.5 0 0 1 0-9Z"/>
                    <path d="M12 12h8.5"/>
                    <path d="M12 12H3.5"/>
                  </svg>
                )
              },
              {
                title: '创新解决方案',
                description: '我们紧跟行业趋势和技术发展趋势，为您面临的挑战提供创新解决方案。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M2 12h1"/>
                    <path d="M6 12h1"/>
                    <path d="M10 12h1"/>
                    <path d="M14 12h1"/>
                    <path d="M18 12h1"/>
                    <path d="M22 12h1"/>
                    <path d="M12 2v1"/>
                    <path d="M12 6v1"/>
                    <path d="M12 10v1"/>
                    <path d="M12 14v1"/>
                    <path d="M12 18v1"/>
                    <path d="M12 22v1"/>
                    <circle cx="12" cy="12" r="9"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="12" cy="12" r="1"/>
                  </svg>
                )
              },
              {
                title: '专属支持',
                description: '一支致力于您成功的专业团队，将持续提供支持和优化。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                )
              },
              {
                title: '结果导向型方法',
                description: '我们专注于与您的业务目标相符并推动增长的可衡量结果。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                )
              },
              {
                title: '透明沟通',
                description: '在整个合作过程中，我们保持清晰、公开的沟通，定期提供最新信息和见解。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                )
              },
              {
                title: '行业联系',
                description: '利用我们的行业人脉和资源网络，扩大您的影响力和覆盖范围。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <div key={index} className="p-8 bg-card rounded-lg border border-border">
                <div className="text-primary mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Become a Partner */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                成为合作伙伴
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                有兴趣与岭羊合作吗？让我们一起探讨如何共同创造价值。我们的合作团队随时准备与您洽谈潜在的合作事宜。
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  开始对话
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Partnership"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
