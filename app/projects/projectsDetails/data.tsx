import React from 'react'
import type { ReactNode } from 'react';

export interface Project {
  id: string
  title: string
  category: string
  description: string | React.ReactNode
  image: string
  tags: string[]
}

const TEXT_COLOR = '#4e5461';

export const projects: Project[] = [
  {
    id: 'nova-finance',
    title: 'Nova 金融平台',
    category: '金融科技',
   // 💡 修复：将 description 变成一个匿名组件函数
    description: () => (
      <div>
        <p style={{ color: TEXT_COLOR }}>
          Nova 金融平台是一款现代化的银行界面，彻底改变了用户管理财务的方式。通过将直观的用户界面与先进的金融技术相结合，该平台为用户提供了管理个人财务、进行投资以及办理各种银行事务的便捷体验。</p>
        
        <h3>直观且极简的用户界面</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 清晰的仪表盘：各项关键财务指标及最新业务动态的概览</li>
          <li style={{ color: '#4e5461' }}><strong>2. 智能导航：能够根据用户行为进行调整的、具备情境感知功能的菜单系统</li>
          <li style={{ color: '#4e5461' }}><strong>3. 可视化分析：用于金融数据可视化的交互式图表和图形</li>
          <li style={{ color: '#4e5461' }}><strong>4. 财务健康评分：对用户的财务状况进行全面评估，并提出改进建议</li>
        </ul>
        
        <h3>高级财务分析功能</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 实时费用分类与追踪：自动对各项交易进行分类，并生成直观的图表。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 预测性财务模型：根据消费模式来预测未来的支出和储蓄趋势。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 背景对比分析：将自身的消费习惯与同龄人、行业内的其他企业或特定群体进行比较。</li>
          <li style={{ color: '#4e5461' }}><strong>4. 财务健康评分：对用户的财务状况进行全面评估，并提出改进建议</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>这一现代化的银行界面体现了金融服务的转型：从单纯的交易处理，转变为提供全面的财务咨询服务。通过技术手段，用户能够做出更明智的财务决策，从而实现个人财富目标。</p>
      <div>
    ),
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['金融科技', '响应', 'Node.js', '银行业务']
  },
  {
    id: 'eco-habitat',
    title: '生态栖息地',
    category: '品牌形象',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>Eco Habitat 是一个致力于推动可持续住房发展的品牌项目。通过将环保设计理念与以社区为导向的理念相结合，该品牌创造出了一种富有感染力的视觉语言，从而能够吸引那些注重环保的消费者，并促进可持续的生活方式。</p>
        
        <h3>品牌设计系统</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 视觉形象：环保色调与排版风格</li>
          <li style={{ color: '#4e5461' }}><strong>2. 标志设计：既具有可持续性，又充满现代感的品牌标识</li>
          <li style={{ color: '#4e5461' }}><strong>3. 设计指南：全面的品牌风格手册</li>
          <li style={{ color: '#4e5461' }}><strong>4. 品牌一致性：在所有接触点上保持一致的品牌形象</li>
        </ul>
        
        <h3>材料使用指南</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 可持续材料：环保的印刷与生产方式</li>
          <li style={{ color: '#4e5461' }}><strong>2. 包装设计：力求实现零浪费的包装方案</li>
          <li style={{ color: '#4e5461' }}><strong>3. 数字资产：针对不同平台进行了优化处理</li>
          <li style={{ color: '#4e5461' }}><strong>4. 品牌一致性：在所有接触点上保持一致的品牌形象</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>Eco Habitat 的品牌形象体现了对可持续生活的承诺。它通过独特的视觉语言来激发人们的积极性，同时提升公众的环保意识。</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['品牌建设', '标志设计', '可持续性']
  },
  {
    id: 'pulse-fitness',
    title: 'Pulse Fitness 应用程序',
    category: '移动端开发',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>Pulse Fitness App 是一款功能全面的移动健身应用。它结合了个性化的锻炼记录、营养指导以及社交功能，为用户打造了极致的健身体验。通过运用移动技术和数据分析，该应用帮助用户以便捷高效的方式实现自己的健身目标。</p>
        
        <h3>锻炼管理</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 定制化训练计划：量身定制的锻炼方案与动作</li>
          <li style={{ color: '#4e5461' }}><strong>2. 锻炼库：全面的锻炼计划数据库</li>
          <li style={{ color: '#4e5461' }}><strong>3. 进度跟踪：详细的性能监控情况</li>
          <li style={{ color: '#4e5461' }}><strong>4. 锻炼计划安排：合理的规划与提醒功能</li>
        </ul>
        
        <h3>营养状况追踪</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 饮食规划：个性化的营养指导</li>
          <li style={{ color: '#4e5461' }}><strong>2. 食物记录：轻松追踪卡路里和各种营养素摄入量</li>
          <li style={{ color: '#4e5461' }}><strong>3. 食谱数据库：健康餐点推荐</li>
          <li style={{ color: '#4e5461' }}><strong>4. 水分摄入监测：记录水的摄入量</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>Pulse Fitness App 通过创新的移动技术和全面的追踪功能，让健身过程变得更简单、更有趣、也更有效率。</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/1103242/pexels-photo-1103242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', '健康科技', '用户体验设计']
  },
  {
    id: 'artisan-cafe',
    title: 'Artisan Café手作咖啡馆',
    category: '品牌形象',
    description: (
      <div>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 标志系统：包含主标志和辅助标志，具有多种应用场景。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 色彩方案：通过精心挑选的色彩来展现品牌个性</li>
          <li style={{ color: '#4e5461' }}><strong>3. 字体层次结构：各具特色且功能明确的字体系列</li>
          <li style={{ color: '#4e5461' }}><strong>4. 视觉语言：图像风格、符号表现以及图形元素</li>
        </ul>
        
        <h3>品牌表达指南</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 品牌声音：语调、个性特征及沟通原则</li>
          <li style={{ color: '#4e5461' }}><strong>2. 实施标准：在所有接触点上保持一致的应用方式</li>
          <li style={{ color: '#4e5461' }}><strong>3. 数字化体验：数字平台的用户界面/用户体验设计指南</li>
          <li style={{ color: '#4e5461' }}><strong>4. 品牌演进：在保持品牌认知度的同时实现增长的框架</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>成功的品牌标识是所有品牌互动的基础。它能够与受众建立情感上的联系，同时赢得他们的信任与认可。这些因素共同提升了商业价值，有助于建立长期的客户关系。</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['品牌建设', '室内设计', '热情待客']
  },
  {
    id: 'nomad-travel',
    title: 'Nomad 旅行平台',
    category: '网页开发',
    description: (
      <div>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 目的地分析：气候、生活成本及签证要求等方面的信息分析</li>
          <li style={{ color: '#4e5461' }}><strong>2. 工作空间搜索器：精心挑选出的、具备良好网络连接条件的共享办公空间</li>
          <li style={{ color: '#4e5461' }}><strong>3. 住宿匹配服务：为游牧民族提供条件灵活的住宿选择</li>
          <li style={{ color: '#4e5461' }}><strong>4. 旅行物流：综合性的运输与安置规划</li>
        </ul>
        
        <h3>社区与生活方式支持</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 游牧式社交网络：基于地理位置的社群互动与活动</li>
          <li style={{ color: '#4e5461' }}><strong>2. 知识交流：目的地指南与当地人的见解</li>
          <li style={{ color: '#4e5461' }}><strong>3. 远程办公相关资源：时区管理工具与提升工作效率的各类应用</li>
          <li style={{ color: '#4e5461' }}><strong>4. 健康服务：健康资源与工作生活平衡方面的支持</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>Nomad Travel Platform 是为现代人这种不受地理位置限制的生活方式而设计的理想伴侣。它有助于弥合人们对于旅行的美好憧憬与现实情况之间的差距。同时，它还致力于打造一个由那些追求自由、成长和真实体验的专业人士组成的全球性社区。</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/7625308/pexels-photo-7625308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', '旅游科技', '用户界面设计']
  },
  {
    id: 'summit-events',
    title: '峰会活动',
    category: '数字营销',
    description: (
      <div>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 受众分析：行为分析及受众细分方法</li>
          <li style={{ color: '#4e5461' }}><strong>2. 渠道优化：跨平台战略与预算分配</li>
          <li style={{ color: '#4e5461' }}><strong>3. 内容生态系统：整合式的故事讲述与内容流程设计</li>
          <li style={{ color: '#4e5461' }}><strong>4. 绩效分析：投资回报率测算与归因分析</li>
        </ul>
        
        <h3>战术实施要素</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 搜索营销：SEO 基础与付费搜索广告管理</li>
          <li style={{ color: '#4e5461' }}><strong>2. 社交媒体互动：针对不同平台的策略与社区建设方式</li>
          <li style={{ color: '#4e5461' }}><strong>3. 转化优化：着陆页设计与转化路径分析</li>
          <li style={{ color: '#4e5461' }}><strong>4. 营销自动化：个性化的客户体验与客户培育流程</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>有效的数字营销并非仅仅依靠单一的策略，而是致力于在客户的整个生命周期中打造连贯一致的的品牌体验。它将创造力与数据分析相结合，从而实现可衡量的商业成果。同时，数字营销还需要不断适应数字领域中不断变化的技术和消费者行为。</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['数字营销', '活动', '网页设计']
  }
] 
