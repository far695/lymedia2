import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { team } from '@/lib/data'

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                有目的地打造数字体验
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                我们是由设计师、开发人员和策略师组成的团队，致力于创造有意义的数字体验。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/contact">
                    联系我们
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/projects">
                    合作案例
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">我们的故事</h2>
            <p className="text-muted-foreground text-lg">
              从默默无闻到成为领先的创意机构
            </p>
          </div>
          
          <div className="space-y-16">
            {[
              {
                year: '2015',
                title: '开端',
                description: '岭羊传媒的创立愿景是打造真正有意义的数字化体验。公司最初只有三名团队成员和一个小型办公室，我们专注于为与我们价值观相同的客户打造有意义的作品。',
                image: 'https://images.pexels.com/photos/7652128/pexels-photo-7652128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                year: '2018',
                title: '提升我们的专业技能',
                description: '随着客户数量的增长，我们的团队和能力也随之增强。我们拓展了服务范围，涵盖全面的品牌战略和数字营销，从而能够提供端到端的解决方案。',
                image: 'https://images.pexels.com/photos/7653583/pexels-photo-7653583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                year: '2021',
                title: '国际认可',
                description: '我们对卓越品质的执着追求获得了多项行业奖项的认可。我们开始与国际客户合作，并树立了我们作为具有前瞻性思维的创意合作伙伴的声誉。',
                image: 'https://images.pexels.com/photos/7652048/pexels-photo-7652048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                year: '2023',
                title: '我们今天所处的位置',
                description: '如今，岭羊传媒汇聚了一群充满热情、富有创意的策略师，致力于帮助品牌驾驭数字化时代。我们不断发展、创新，并突破一切可能的界限。',
                image: 'https://images.pexels.com/photos/7653997/pexels-photo-7653997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              }
            ].map((milestone, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{milestone.title}</h3>
                  <p className="text-muted-foreground mb-6">{milestone.description}</p>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">我们的价值观</h2>
            <p className="text-muted-foreground text-lg">
              指导我们工作和人际关系的原则
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '卓越',
                description: '我们致力于在从战略到执行的各个方面都做到卓越品质。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M12 2v4.5"/>
                    <path d="m20 10-4.5-2.5"/>
                    <path d="m18 20-3-5"/>
                    <path d="m6 20 3-5"/>
                    <path d="m4 10 4.5-2.5"/>
                    <path d="M12 12v2.5"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                )
              },
              {
                title: '合作',
                description: '我们相信，只有与客户和同事坦诚合作，才能做出最好的作品。',
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
                title: '创新',
                description: '我们不断探索新的理念、技术和方法，以创造具有前瞻性的解决方案。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M2 12h5"/>
                    <path d="M17 12h5"/>
                    <path d="M12 2v5"/>
                    <path d="M12 17v5"/>
                    <path d="M12 12 2 2"/>
                    <path d="m12 12 10 10"/>
                    <path d="m12 12 10-10"/>
                    <path d="m12 12-10 10"/>
                  </svg>
                )
              },
              {
                title: '宗旨',
                description: '我们选择从事能够产生积极影响且符合我们价值观的项目。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-border text-center">
                <div className="text-primary inline-flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">我们的团队</h2>
            <p className="text-muted-foreground text-lg">
              来认识一下我们创意解决方案背后的才华横溢的团队成员吧！
            </p>
          </div>
          
          <div className="max-w-[50vw] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-6 overflow-hidden rounded-lg aspect-[3/4]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.title}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                联系我们，开启创意之旅
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                无论您是想与我们合作还是加入我们的团队，我们都非常欢迎您的联系。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    联系我们

                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href="/careers">
                    查看职位
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
