---
title: 赞助列表
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const sponsors = [
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3170455924&spec=100',
    name: '千鹤',
    title: '捐赠 2 次，共 75 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2682173972&spec=100',
    name: 'Dreeam',
    title: '捐赠 2 次，共 100 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=195086908&spec=100',
    name: '紷天',
    title: '捐赠 1 次，共 5.2 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3826876813&spec=100',
    name: '金咕咕YG',
    title: '捐赠 2 次，共 15 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2063553200&spec=100',
    name: '芸術は爆発だ',
    title: '捐赠 2 次，共 40 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3534183696&spec=100',
    name: '瑶曦',
    title: '捐赠 1 次，共 50 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1923613836&spec=100',
    name: '天羽青竹',
    title: '捐赠 1 次，共 5 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3070129730&spec=100',
    name: '精卫',
    title: '捐赠 1 次，共 6.6 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2104211531&spec=100',
    name: '属尘',
    title: '捐赠 1 次，共 9.9 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2787770453&spec=100',
    name: '监の母',
    title: '捐赠 2 次，共 45 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1940462948&spec=100',
    name: '𝓑𝓪𝓴𝓪',
    title: '捐赠 2 次，共 113 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2816597419&spec=100',
    name: 'CuSO₄·5H₂O',
    title: '捐赠 2 次，共 113 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3050404518&spec=100',
    name: 'z',
    title: '捐赠 2 次，共 25 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3603866430&spec=100',
    name: '海棠',
    title: '捐赠 2 次，共 10 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=292702551&spec=100',
    name: '空气',
    title: '捐赠 4 次，共 175 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3530300540&spec=100',
    name: '9',
    title: '捐赠 4 次，共 105 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2668127763&spec=100',
    name: '隔壁老衫',
    title: '捐赠 1 次，共 10 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=869379440&spec=100',
    name: '风林',
    title: '捐赠 2 次，共 195 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=0&spec=100',
    name: '热血市民小彭',
    title: '捐赠 1 次，共 10 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2544028137&spec=100',
    name: '杨骐鸣',
    title: '捐赠 3 次，共 15 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2165324581&spec=100',
    name: '双笙蝶舞',
    title: '捐赠 1 次，共 30 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=242800056&spec=100',
    name: '被闰土追杀的猹',
    title: '捐赠 2 次，共 2 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1278560068&spec=100',
    name: 'kou1024',
    title: '捐赠 1 次，共 50 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1559932018&spec=100',
    name: 'city1',
    title: '捐赠 1 次，共 10 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1372855672&spec=100',
    name: '屑の五郎',
    title: '捐赠 2 次，共 35 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1914348837&spec=100',
    name: 'AAA 奥尼卡义体购买安装グァ',
    title: '捐赠 2 次，共 30 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2786435963&spec=100',
    name: '碳酸',
    title: '捐赠 1 次，共 10 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2705961235&spec=100',
    name: '芷菡',
    title: '捐赠 1 次，共 15 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1440230003&spec=100',
    name: 'BT-7274',
    title: '捐赠 1 次，共 20.84 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=410844822&spec=100',
    name: '穴居之人',
    title: '捐赠 1 次，共 10 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1964609219&spec=100',
    name: '小猫',
    title: '捐赠 1 次，共 9.01 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2015283665&spec=100',
    name: '希儿希儿希',
    title: '捐赠 1 次，共 5 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1499269976&spec=100',
    name: 'wqdsb',
    title: '捐赠 1 次，共 50 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2240089348&spec=100',
    name: 'Россия-Украинская в',
    title: '捐赠 1 次，共 5 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3180096278&spec=100',
    name: '意缕西鸯',
    title: '捐赠 1 次，共 2 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2289836651&spec=100',
    name: '秋叶海棠.',
    title: '捐赠 1 次，共 4.99 元'
  }
]
</script>
<VPTeamPage class="sponsors-page">
  <VPTeamPageTitle>
    <template #title>
      赞助列表
    </template>
    <template #lead>
      在这个页面你将了解为项目做出财力支持的人
      <a href="../others/support" style="color: #fff; background: #42b3b93f; padding: 0.2em 0.5em; border-radius: 4px; text-decoration: none; font-weight: bold; ">如何贡献</a>
    </template>

  </VPTeamPageTitle>
  <VPTeamPageSection class="sponsors-section">
    <template #title>赞助者</template>
    <template #lead>这些是捐赠过 U1 的人，十分感谢他们的帮助！</template>
    <template #members>
      <VPTeamMembers size="small" :members="sponsors" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

<style scoped>
.sponsors-page {
  margin: 0 0 2.5rem 0;
}
.sponsors-section {
}
</style>
