import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-16 mt-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold">岭羊(广州)文化传媒有限公司</h3>
            <p className="text-muted-foreground max-w-xs">
              我们创造能够提升您的品牌形象并激发受众灵感的数字化体验。
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">导航</h4>
            <ul className="space-y-3">
              {['首页', '合作案例', '合作伙伴', '关于岭羊', '联系我们'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">联系方式</h4>
            <address className="not-italic text-muted-foreground space-y-3">
              <p>广州市黄埔区</p>
              <p>石化路219号305室</p>
              <p className="pt-2">
                <a href="mailto:hello@brand.com" className="hover:text-foreground transition-colors">
                  lihailang@lingyangmedia.com
                </a>
              </p>
              <p>
                <a href="tel:+14155555555" className="hover:text-foreground transition-colors">
                  +(86) 18244969959
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 岭羊(广州)文化传媒有限公司. 保留所有权利。{' '}
            <Link href="https://beian.miit.gov.cn/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">粤ICP备123456789号</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
