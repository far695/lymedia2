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
        <p style={{ color: '#4e5461' }}>Eco Habitat is a comprehensive brand identity project focused on sustainable housing initiatives. By combining eco-conscious design principles with community-focused messaging, it creates a powerful visual language that resonates with environmentally conscious consumers and promotes sustainable living practices.</p>
        
        <h3>Brand Design System</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. Visual Identity:</strong> Eco-friendly color palette and typography</li>
          <li style={{ color: '#4e5461' }}><strong>2. Logo Design:</strong> Sustainable and modern brand mark</li>
          <li style={{ color: '#4e5461' }}><strong>3. Design Guidelines:</strong> Comprehensive brand style guide</li>
          <li style={{ color: '#4e5461' }}><strong>4. Brand Collateral:</strong> Consistent application across all touchpoints</li>
        </ul>
        
        <h3>Material Guidelines</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. Sustainable Materials:</strong> Eco-friendly printing and production options</li>
          <li style={{ color: '#4e5461' }}><strong>2. Packaging Design:</strong> Minimal waste packaging solutions</li>
          <li style={{ color: '#4e5461' }}><strong>3. Digital Assets:</strong> Optimized for various platforms</li>
          <li style={{ color: '#4e5461' }}><strong>4. Brand Collateral:</strong> Consistent application across all touchpoints</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>Eco Habitat's brand identity represents a commitment to sustainable living, creating a visual language that inspires and engages communities while promoting environmental consciousness.</p>
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
        <p style={{ color: '#4e5461' }}>Pulse Fitness App is a comprehensive mobile fitness solution that combines personalized workout tracking, nutrition guidance, and social features to create an engaging fitness experience. By leveraging mobile technology and data analytics, it provides users with a convenient and effective way to achieve their fitness goals.</p>
        
        <h3>Workout Management</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. Custom Routines:</strong> Personalized workout plans and exercises</li>
          <li style={{ color: '#4e5461' }}><strong>2. Exercise Library:</strong> Comprehensive database of workouts</li>
          <li style={{ color: '#4e5461' }}><strong>3. Progress Tracking:</strong> Detailed performance monitoring</li>
          <li style={{ color: '#4e5461' }}><strong>4. Workout Scheduling:</strong> Smart planning and reminders</li>
        </ul>
        
        <h3>Nutrition Tracking</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. Meal Planning:</strong> Personalized nutrition guidance</li>
          <li style={{ color: '#4e5461' }}><strong>2. Food Logging:</strong> Easy calorie and macro tracking</li>
          <li style={{ color: '#4e5461' }}><strong>3. Recipe Database:</strong> Healthy meal suggestions</li>
          <li style={{ color: '#4e5461' }}><strong>4. Hydration Monitoring:</strong> Water intake tracking</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>Pulse Fitness App transforms the fitness experience by making it more accessible, engaging, and effective through innovative mobile technology and comprehensive tracking features.</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/33552892/pexels-photo-33552892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'Health Tech', 'UX Design']
  },
  {
    id: 'Ganten',
    title: '百岁山',
    category: '抖音本地推直播',
    description: (
      <div>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. Logo System:</strong> Primary and secondary marks with versatile applications</li>
          <li style={{ color: '#4e5461' }}><strong>2. Color Palette:</strong> Strategic color selection conveying brand personality</li>
          <li style={{ color: '#4e5461' }}><strong>3. Typography Hierarchy:</strong> Distinctive and functional font families</li>
          <li style={{ color: '#4e5461' }}><strong>4. Visual Language:</strong> Imagery style, iconography, and graphic elements</li>
        </ul>
        
        <h3>Brand Expression Guidelines</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. Brand Voice:</strong> Tone, personality, and communication principles</li>
          <li style={{ color: '#4e5461' }}><strong>2. Implementation Standards:</strong> Consistent application across all touchpoints</li>
          <li style={{ color: '#4e5461' }}><strong>3. Digital Experience:</strong> UI/UX guidelines for digital platforms</li>
          <li style={{ color: '#4e5461' }}><strong>4. Brand Evolution:</strong> Framework for growth while maintaining recognition</li>
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
          <li style={{ color: '#4e5461' }}><strong>1. Destination Intelligence:</strong> Climate, cost of living, and visa requirement analytics</li>
          <li style={{ color: '#4e5461' }}><strong>2. Workspace Finder:</strong> Curated coworking spaces with connectivity ratings</li>
          <li style={{ color: '#4e5461' }}><strong>3. Accommodation Matchmaking:</strong> Nomad-friendly housing with flexible terms</li>
          <li style={{ color: '#4e5461' }}><strong>4. Travel Logistics:</strong> Integrated transportation and relocation planning</li>
        </ul>
        
        <h3>Community & Lifestyle Support</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. Nomad Networking:</strong> Location-based community connections and events</li>
          <li style={{ color: '#4e5461' }}><strong>2. Knowledge Exchange:</strong> Destination guides and local insights</li>
          <li style={{ color: '#4e5461' }}><strong>3. Remote Work Resources:</strong> Time zone management and productivity tools</li>
          <li style={{ color: '#4e5461' }}><strong>4. Wellbeing Services:</strong> Health resources and work-life balance support</li>
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
          <li style={{ color: '#4e5461' }}><strong>1. Audience Intelligence:</strong> Behavioral analysis and segmentation methodologies</li>
          <li style={{ color: '#4e5461' }}><strong>2. Channel Optimization:</strong> Cross-platform strategy and budget allocation</li>
          <li style={{ color: '#4e5461' }}><strong>3. Content Ecosystem:</strong> Integrated storytelling and content journey mapping</li>
          <li style={{ color: '#4e5461' }}><strong>4. Performance Analytics:</strong> ROI measurement and attribution modeling</li>
        </ul>
        
        <h3>Tactical Implementation Elements</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. Search Marketing:</strong> SEO fundamentals and paid search campaign management</li>
          <li style={{ color: '#4e5461' }}><strong>2. Social Media Engagement:</strong> Platform-specific strategies and community building</li>
          <li style={{ color: '#4e5461' }}><strong>3. Conversion Optimization:</strong> Landing page design and funnel analysis</li>
          <li style={{ color: '#4e5461' }}><strong>4. Marketing Automation:</strong> Personalized customer journeys and nurture workflows</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>Effective Digital Marketing transcends individual tactics to create cohesive brand experiences across the customer lifecycle, combining creativity with analytical precision to generate measurable business outcomes while adapting to rapidly evolving technologies and consumer behaviors in the digital landscape.</p>
      </div>
    ),
    image: 'https://free.picui.cn/free/20260625/c139767f8f850f6013a9d641c110045c.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['新品种草', '朋友圈宣传', '智能场景视觉包装']
  }
] 
