import React from 'react'

export interface Project {
  id: string
  title: string
  category: string
  description: string | React.ReactNode
  image: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'nongfu-spring',
    title: '东方树叶',
    category: '抖音本地推直播',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>围绕无糖原叶茶新品线下种草需求，融合国风茶饮视觉与同城流量投放逻辑，打造适配本地生活场景的数字化传播体系，触达同城年轻茶饮消费人群，高效完成直播间曝光、引流与线上带货目标。</p>
        
        <h3>前期准备</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1：</strong>适配抖音信息流、直播间的国风茶饮专属配色与字体规范。</li>
          <li style={{ color: '#4e5461' }}><strong>2：</strong>贴合同城本地流量、突出产品口感与直播间的广告素材设计。</li>
          <li style={{ color: '#4e5461' }}><strong>3：</strong>标准化抖音本地推投放、直播执行全流程操作方案。</li>
          <li style={{ color: '#4e5461' }}><strong>4：</strong>短视频素材、直播间画面、落地页全套统一营销物料。</li>
        </ul>
        
        <h3>回顾</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1：</strong>本地推定向人群、同城直播转化全链路执行标准。</li>
          <li style={{ color: '#4e5461' }}><strong>2：</strong>实时监控流量数据，同步做出提量操作。</li>
          <li style={{ color: '#4e5461' }}><strong>3：</strong>将消费习惯与同龄人、行业同行或自定义群体进行比较。</li>
          <li style={{ color: '#4e5461' }}><strong>4：</strong>对直播状况进行全面评估并提供改进建议。</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>东方树叶抖音本地推全案，依托同城流量渠道打造国风茶饮数字化传播语言，标准化广告投放与直播执行流程，精准覆盖本地潜在客群，实现新品快速种草、线下门店客流提升的营销目标。</p>
      </div>
    ),
    image: 'https://free.picui.cn/free/20260625/6202f5cd060bca4726fc6acd35b6231c.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['本地生活推广', '直播间视觉打造', '饮品内容营销']
  },
  {
    id: 'chaliys',
    title: '茶理宜世',
    category: '朋友圈推广',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>覆盖国内朋友圈、海外 Instagram 信息流的双渠道营销落地全案，聚焦新品上市、新店开业全周期前置筹备与完整执行复盘。将岭南国风茶饮美学适配海内外双社交平台传播逻辑，搭建统一国风视觉传播体系，面向国内年轻消费群体与海外华人受众完成新品种草、新店开业预热，沉淀标准化跨社媒新店新品全流程运营方案。</p>
        
        <h3>前期准备</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1:</strong> 适配朋友圈、Instagram 双平台统一岭南国风色彩与文字规范。</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> 分阶段预热素材体系（新品剧透、新店探店、倒计时海报）。</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> 新品 & 新店上线前置筹备、投放执行、数据复盘标准化流程方案。</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> 国内朋友圈图文短内容、海外 ins 图文 / Reels 短视频全套统一营销物料。</li>
        </ul>
        
        <h3>回顾</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1:</strong> 复盘确定可持续方案，各种复杂的市场情况和客户需求。</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> 制定投放过程预警方案，确保广告准时上线。</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> 将消费习惯与同龄人、行业同行或自定义群体进行比较。</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> 通过对广告数据的深入分析，可以更好地了解广告效果，优化广告投放策略。</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>双社媒新品新店全案，打通国内朋友圈私域种草与海外 Instagram 公域曝光渠道，建立从前期素材筹备、分阶段预热投放、落地引流到后期数据复盘的完整标准化流程，以统一岭南国风视觉传递品牌内核，高效完成新品认知渗透、新店开业客流预热的营销目标。</p>
      </div>
    ),
    image: 'https://free.picui.cn/free/20260625/693165a4e07542906f226789c332838f.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['饮品内容营销', '新品种草', '新店预热', '朋友圈宣传']
  },
  {
    id: 'csg',
    title: '中国南方电网',
    category: '朋友圈推广',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>中国南方电网全域电力科普传播全案，依托朋友圈信息流与抖音开屏两大线上渠道，围绕安全用电、节能节电、绿色电力科普搭建完整数字化传播体系。融合国企稳重亲民视觉调性适配双平台传播规则，建立从前期内容筹备、分阶段投放执行到结案复盘的标准化闭环流程，面向城乡居民普及实用用电常识，打造兼具权威性与通俗性的全域电力科普宣传方案。</p>
        
        <h3>前期准备</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1:</strong> 适配朋友圈、抖音开屏的统一国企科普配色、字体与版式规范。</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> 用电科普长图文、全屏开屏海报、科普短视频整套创意素材体系。</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> 科普宣传前期筹备、排期投放、用户互动、投放后复盘标准化操作方案。</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> 朋友圈科普推文、抖音全屏开屏广告、短视频科普短片全套统一宣传物料。</li>
        </ul>
        
        <h3>回顾</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1:</strong> 双渠道上线投放、实时数据监测、群众反馈收集、传播效果复盘全链路执行规范。</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> 将关注习惯与同龄人、行业或自定义群体进行比较。</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> 及时针对数据进行复盘，可以更好地了解广告效果，优化广告投放策略。</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> 对投流状况进行全面评估并提供改进建议。</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>中国南方电网双渠道电力科普全案，打通朋友圈私域渗透与抖音开屏公域大范围曝光渠道，构建从前期内容策划、视觉素材制作、分批次渠道投放至后期数据复盘的完整运营流程，以专业温和的品牌视觉承载民生用电科普内容，全方位向大众普及安全用电、低碳节电、新型绿色电力相关知识。</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/33552892/pexels-photo-33552892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['公域流量科普', '民生知识传播', '朋友圈宣传']
  },
  {
    id: 'Ganten',
    title: '百岁山',
    category: '抖音本地推直播',
    description: (
      <div>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1:</strong> Primary and secondary marks with versatile applications</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> Strategic color selection conveying brand personality</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> Distinctive and functional font families</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> Imagery style, iconography, and graphic elements</li>
        </ul>
        
        <h3>Brand Expression Guidelines</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1:</strong> Tone, personality, and communication principles</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> Consistent application across all touchpoints</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> UI/UX guidelines for digital platforms</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> Framework for growth while maintaining recognition</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>A successful Brand Identity serves as the foundation for all brand interactions, creating emotional connections with audiences while establishing trust and recognition that drives business value and fosters lasting customer relationships.</p>
      </div>
    ),
    image: 'https://free.picui.cn/free/20260625/30037e3919078ab2ff77c14839da9546.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['信息流带货投放', '饮品内容营销', '直播间视觉打造', '本地生活推广']
  },
  {
    id: 'sumlodol',
    title: '星乐度露营度假区',
    category: '朋友圈推广',
    description: (
      <div>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1:</strong> Climate, cost of living, and visa requirement analytics</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> Curated coworking spaces with connectivity ratings</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> Nomad-friendly housing with flexible terms</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> Integrated transportation and relocation planning</li>
        </ul>
        
        <h3>Community & Lifestyle Support</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1:</strong> Location-based community connections and events</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> Destination guides and local insights</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> Time zone management and productivity tools</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> Health resources and work-life balance support</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>The Nomad Travel Platform serves as a comprehensive companion for the modern location-independent lifestyle, bridging the gap between travel aspirations and practical realities while fostering a global community of like-minded professionals seeking freedom, growth, and authentic experiences.</p>
      </div>
    ),
    image: 'https://free.picui.cn/free/20260625/8229d5b213dee1d15923c3545a990de8.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['线上活动宣发', '朋友圈宣传', '线上直播种草']
  },
  {
    id: 'zte',
    title: '中兴智慧家庭',
    category: '朋友圈推广',
    description: (
      <div>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1:</strong> Behavioral analysis and segmentation methodologies</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> Cross-platform strategy and budget allocation</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> Integrated storytelling and content journey mapping</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> ROI measurement and attribution modeling</li>
        </ul>
        
        <h3>Tactical Implementation Elements</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1:</strong> SEO fundamentals and paid search campaign management</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> Platform-specific strategies and community building</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> Landing page design and funnel analysis</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> Personalized customer journeys and nurture workflows</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>Effective Digital Marketing transcends individual tactics to create cohesive brand experiences across the customer lifecycle, combining creativity with analytical precision to generate measurable business outcomes while adapting to rapidly evolving technologies and consumer behaviors in the digital landscape.</p>
      </div>
    ),
    image: 'https://free.picui.cn/free/20260625/c139767f8f850f6013a9d641c110045c.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['新品种草', '朋友圈宣传', '智能场景视觉包装']
  }
] 
