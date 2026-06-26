"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ProjectCard from '@/components/projects/project-card'
import { projects } from '@/lib/data'

// Get unique categories from projects
const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const filteredProjects = activeCategory === 'All' 
    ? projects
    : projects.filter(project => project.category === activeCategory)
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              我们的项目
            </h1>
            <p className="text-xl text-muted-foreground">
              浏览我们涵盖各个行业和领域的项目作品集。
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="pb-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Project */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6">全类目产品</Badge>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                全时全景覆盖
              </h2>
              <p className="text-muted-foreground mb-6">
                丰富的海量产品，覆盖用户各个使用场景，无缝触达您的目标客户定制化投放方案，达成各种营销目标。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  腾讯广告
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  头条&抖音广告
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  海外广告
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">
                  联系我们
                </Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/8101836/pexels-photo-8101836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Nova Finance Platform"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">我们的流程</h2>
            <p className="text-muted-foreground text-lg">
              我们如何对待每个项目以取得卓越成果
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: '发现',
                description: '我们首先通过深入研究和利益相关者访谈来了解您的业务、受众和目标。'
              },
              {
                number: '02',
                title: '战略',
                description: '根据我们的调查结果，我们制定了一套符合您具体需求和目标的全面策略。'
              },
              {
                number: '03',
                title: '创作',
                description: '我们的设计师和运营团队一丝不苟地将战略变为现实。'
              },
              {
                number: '04',
                title: '优化',
                description: '我们不断进行分析、测试和改进，以确保解决方案发挥最佳性能并实现您的目标。'
              }
            ].map((step, index) => (
              <div key={index} className="relative p-8 bg-card rounded-lg border border-border">
                <div className="text-5xl font-playfair font-bold text-muted/20 absolute top-4 right-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-6">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
              让我们携手创造非凡之作。
            </h2>
            <p className="text-primary-foreground/80 text-xl mb-8">
              准备好开始下一个项目了吗？我们很乐意听听您的想法。
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                联系我们
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}



