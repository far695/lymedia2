import Image from 'next/image'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              联系我们
            </h1>
            <p className="text-xl text-muted-foreground">
              我们很乐意与您交流。让我们一起探讨您的下一个项目吧。
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="pb-24">
        <div className="container px-4 md:px-6">
          <div className="bg-muted/30 rounded-lg p-8 mb-8 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">联系信息</h2>
            <div className="space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-medium mb-1">邮箱</h3>
                  <a href="mailto:hello@ascent.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    lihailang@lingyangmedia.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-medium mb-1">手机</h3>
                  <a href="tel:+14155555555" className="text-muted-foreground hover:text-foreground transition-colors">
                    +(86) 18244969959
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-medium mb-1">地址</h3>
                  <address className="not-italic text-muted-foreground">
                    广州市<br />
                    黄埔区<br />
                    石化路219号305室
                  </address>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-3">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-medium mb-1">工作时间</h3>
                  <p className="text-muted-foreground">
                    工作日: 9:30am - 6:30pm
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[300px] relative rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Office location"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              常见问题解答
            </h2>
            <p className="text-muted-foreground text-lg">
              有疑问？我们有答案。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: '你们提供哪些服务？',
                answer: '我们提供全方位的服务，包括品牌形象设计、网站开发、用户体验设计和数字营销。每项服务都根据您企业的具体需求量身定制。'
              },
              {
                question: '你们的服务收费多少？',
                answer: '我们的定价根据每个项目的范围和要求而定。在初步咨询中了解您的具体需求后，我们会提供详细的方案。'
              },
              {
                question: '一般项目需要多长时间？',
                answer: '项目工期取决于项目的复杂程度和范围。一个简单的网站可能需要 4-6 周，而一套完整的品牌形象和数字平台可能需要 3-4 个月。我们会在初步洽谈中提供工期预估。'
              },
              {
                question: '你们与国际客户合作吗？',
                answer: '是的，我们的客户遍布全球。我们高效的协作流程和工具使我们能够与世界各地的客户有效合作。我们已成功为北美、欧洲和亚洲的客户完成了多个项目。'
              },
              {
                question: '你们的项目流程是怎样的？',
                answer: '我们的流程通常包括调研、策略制定、设计开发和产品发布。我们会在整个过程中保持清晰的沟通，并在关键决策点与您保持沟通，以确保最终产品符合您的愿景。'
              },
              {
                question: '项目完成后你们是否提供后续支持？',
                answer: '是的，我们提供多种支持和维护方案，以确保您的数字资产始终保持最佳性能。我们可以在项目规划阶段讨论最适合您需求的维护方案。'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
