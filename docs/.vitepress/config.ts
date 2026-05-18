import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Felix ML Notes',
  description: 'Mathematics, Machine Learning and AI Notes',

  markdown:{
    math: true
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '数学基础', link: '/math/' },
      { text: '机器学习', link: '/ml/' },
      { text: '深度学习', link: '/deep-learning/' },
      { text: '工具链', link: '/tools/' }
    ],

    sidebar: {
      '/math/': [
        {
          text: '数学基础',
          items: [
            { text: '概览', link: '/math/' },
            { text: '线性代数', link: '/math/linear-algebra' },
            { text: '概率论', link: '/math/probability' },
            { text: '优化方法', link: '/math/optimization' },
            { text: '信息论', link: '/math/information-theory' }
          ]
        }
      ],

      '/ml/': [
        {
          text: '机器学习',
          items: [
            { text: '概览', link: '/ml/' },
            { text: '线性回归', link: '/ml/linear-regression' },
            { text: 'Logistic 回归', link: '/ml/logistic-regression' },
          ]
        },
        {
          text: 'SVM 支持向量机',
          collapsed: false,
          items: [
            { text: '12.1支持向量机：从分离超平面到 Hinge Loss ', link: '/ml/svm/12.1' },
            { text: '12.2仿射函数、仿射组合、凸组合与凸包：从几何直觉到优化理解', link: '/ml/svm/12.2' },
            { text: '12.3SVM 对偶形式、核方法、凸包视角与表示定理', link: '/ml/svm/12.3' },
            { text: '12.4SVM 核函数、Gram 矩阵与核技巧', link: '/ml/svm/12.4' },
            { text: '12.5对偶 SVM、特征映射、核函数与 Gram 矩阵', link: '/ml/svm/12.5' },
            { text: '12.6希尔伯特空间与 RKHS', link: '/ml/svm/12.6' },
            { text: '12.7支持向量机（SVM）的优化视角：从损失函数到标准二次规划', link: '/ml/svm/12.7' },
           ]
          },
          {
          text: '其他机器学习主题',
          items: [
            { text: '核方法', link: '/ml/kernel-methods' },
            { text: 'PCA', link: '/ml/pca' },
            { text: 'PPCA', link: '/ml/ppca' },
            { text: 'GMM', link: '/ml/gmm' },
            { text: 'EM 算法', link: '/ml/em-algorithm' }
          ]
        }
      ],

      '/deep-learning/': [
        {
          text: '深度学习',
          items: [
            { text: '概览', link: '/deep-learning/' },
            { text: '神经网络', link: '/deep-learning/neural-network' },
            { text: '反向传播', link: '/deep-learning/backpropagation' },
            { text: '正则化', link: '/deep-learning/regularization' }
          ]
        }
      ],

      '/tools/': [
        {
          text: '工具链',
          items: [
            { text: '概览', link: '/tools/' },
            { text: 'Python', link: '/tools/python' },
            { text: 'PyTorch', link: '/tools/pytorch' },
            { text: 'Markdown 与 LaTeX', link: '/tools/latex-markdown' }
          ]
        }
      ]
    }
  }
})