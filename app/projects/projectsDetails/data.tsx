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
        
        <p style={{ color: '#4e5461' }}>东方树叶抖音本地推全案，依托同城流量渠道打造国风茶饮数字化传播语言，标准化广告投放与直播执行流程，精准覆盖本地潜在客群，实现快速种草、线下门店客流提升的营销目标。</p>
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
          <li style={{ color: '#4e5461' }}><strong>1:</strong> 适配抖音本地直播间统一百岁山品牌配色、字体与版式视觉规范。</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> 天然矿泉水科普长图文、直播间主视觉海报、饮品种草短视频整套创意素材体系。</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> 直播带货前期筹备、分批次排期投放、直播间用户互动、投放后数据复盘标准化操作方案。</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> 抖音直播间画面物料、饮品种草短视频全套统一宣传物料。</li>
        </ul>
        
        <h3>品牌形象</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1:</strong> 线上投放、实时带货数据监测、直播间用户反馈收集、营销转化复盘全链路执行规范。</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> 将消费客群关注习惯与同龄人群、同类饮品品牌或自定义目标群体进行数据对比。</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> 及时针对投放成交数据进行复盘，可以更好地了解带货转化效果，优化信息流投放与直播运营策略。</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> 对整体引流、成交、核销投放状况进行全面评估并提供运营改进建议。</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>百岁山饮品营销全案，打通私域种草渗透与抖音本地直播公域大范围曝光渠道，构建从前期内容策划、视觉素材制作、分批次渠道投放至后期数据复盘的完整运营流程，以简约高级的品牌视觉承载天然矿泉水产品卖点，全方位向大众传递健康天然饮水知识，依托线上流量赋能线下门店带货转化。</p>
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
          <li style={{ color: '#4e5461' }}><strong>1:</strong> 适配朋友圈宣传、线上直播统一度假区品牌配色、素材、字体与版式规范。</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> 露营游玩长图文、活动主题全屏海报、亲子度假种草短视频整套创意素材体系。</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> 文旅宣传前期筹备、排期投放、直播间互动、投放后复盘标准化操作方案。</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> 朋友圈活动推文、直播视觉物料、度假种草短视频全套统一宣传物料。</li>
        </ul>
        
        <h3>文旅营销</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1:</strong> 双渠道线上投放、实时流量数据监测、游客反馈收集、宣传效果复盘全链路执行规范。</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> 将出游关注习惯与亲子家庭、同龄游玩人群或自定义客群进行比较。</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> 及时针对数据进行复盘，可以更好地了解引流转化效果，优化宣传投放与直播运营策略。</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> 对引流、预约、到店转化投放状况进行全面评估并提供改进建议。</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>星乐度露营度假区双渠道文旅营销全案，打通朋友圈私域种草渗透与线上直播公域大范围曝光渠道，构建从前期内容策划、视觉素材制作、分批次渠道投放至后期数据复盘的完整运营流程，以轻松童趣的品牌视觉承载亲子露营、主题游乐、短途度假内容，全方位向大众展示一站式亲子露营度假区游玩亮点，吸引家庭客群前往线下体验游玩。</p>
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
          <li style={{ color: '#4e5461' }}><strong>1:</strong> 适配朋友圈宣传统一中兴智慧家庭科技配色、字体与版式视觉规范。</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> 路由器新品科普长图文、全屋智能场景海报、数码产品种草短视频整套创意素材体系。</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> 新品宣传前期筹备、分批次排期投放、投放后数据复盘标准化操作方案。</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> 朋友圈新品推文、场景宣传海报、智能产品种草短视频全套统一宣传物料。</li>
        </ul>
        
        <h3>种草转化</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1:</strong> 朋友圈渠道线上投放、实时曝光转化数据监测、用户产品反馈收集、种草效果复盘全链路执行规范。</li>
          <li style={{ color: '#4e5461' }}><strong>2:</strong> 将受众关注习惯与家装群体、数码爱好者、同品类科技品牌受众进行数据对比。</li>
          <li style={{ color: '#4e5461' }}><strong>3:</strong> 及时针对投放互动、咨询数据进行复盘，可以更好地了解新品种草效果，优化朋友圈投放与内容创作策略。</li>
          <li style={{ color: '#4e5461' }}><strong>4:</strong> 对引流咨询、产品种草转化投放状况进行全面评估并提供运营改进建议。</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>中兴智慧家庭新品传播全案，深耕朋友圈私域种草渗透渠道，构建从前期内容策划、智能场景视觉素材制作、分批次朋友圈投放至后期数据复盘的完整运营流程，以简约高级的科技视觉承载全屋路由、高速互联居家产品内容，全方位向大众展示中兴智慧家庭网络硬件优势，传递便捷流畅的智能居家互联体验，高效完成新品曝光与用户种草转化。</p>
      </div>
    ),
    image: 'https://free.picui.cn/free/20260625/c139767f8f850f6013a9d641c110045c.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['新品种草', '朋友圈宣传', '智能场景视觉包装']
  }
] 
