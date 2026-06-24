import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowUpRight, Users, BarChart, Code, PenTool } from 'lucide-react'
import ProjectCard from '@/components/projects/project-card'
import TestimonialSlider from '@/components/testimonial-slider'
import { projects, partners } from '@/lib/data'
import ScrollButton from '@/components/scroll-button'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/20 dark:from-background/95 dark:via-background/80 dark:to-background/95 z-10" />
          <Image 
            src="https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Hero background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              岭羊传媒6年营销经验
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
              为您提供专业的互联网营销案例分析
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link href="/projects">
                  合作案例
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-white border border-blue-400 hover:bg-blue-50" asChild>
                <Link href="/contact">
                  联系岭羊
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <ScrollButton />
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services-section" className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="max-w-md mb-8 md:mb-0">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">我们的服务</h2>
              <p className="text-muted-foreground whitespace-nowrap">
                我们将战略、设计和技术相结合，打造具有影响力的数字化解决方案。
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <PenTool className="h-10 w-10" />,
                title: '品牌标识',
                description: '我们打造独具特色的视觉系统，充分体现您的品牌价值。'
              },
              {
                icon: <Code className="h-10 w-10" />,
                title: '网站开发',
                description: '采用尖端技术构建的定制化网络解决方案，兼具高性能和可扩展性。'
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: '用户体验设计',
                description: '以人为本的设计，为用户创造直观、引人入胜的体验。'
              },
              {
                icon: <BarChart className="h-10 w-10" />,
                title: '数字营销',
                description: '运用数据驱动策略来提高您的知名度并推动有意义的互动。'
              }
            ].map((service, i) => (
              <div key={i} className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="max-w-md mb-8 md:mb-0">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">特色项目</h2>
              <p className="text-muted-foreground">
                以下是我们近期在各个行业开展的部分工作成果。
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/projects">
                查看所有合作案例
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
            客户评价
          </h2>
          
          <TestimonialSlider />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
              准备好开始你的项目了吗？
            </h2>
            <p className="text-primary-foreground/80 text-xl mb-8 max-w-xl mx-auto">
              让我们携手打造非凡之作。请联系我们的团队，探讨您的想法。

            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                联系岭羊
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
