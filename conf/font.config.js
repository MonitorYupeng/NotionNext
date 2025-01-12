/**
 * 网站字体相关配置
 *
 */
module.exports = {
  // START ************网站字体*****************
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-serif', // ['font-serif','font-sans'] 两种可选，分别是衬线和无衬线: 参考 https://www.jianshu.com/p/55e410bd2115
  FONT_URL: [// 字体CSS
    'https://fonts.googleapis.com/css?family=Bitter&display=swap', // Bitter 用作英文数字的字体
    'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css'
  ],
  FONT_SANS: [// 无衬线字体
    'Bitter',
    '"LXGW WenKai"',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Microsoft YaHei"',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial', 'sans-serif',
    '"Apple Color Emoji"'
  ],
  FONT_SERIF: [// 衬线字体
    'Bitter',
    '"LXGW WenKai"',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times', 'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH ||
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' // font-awesome 字体图标地址; 可选 /css/all.min.css ， https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // END ************网站字体*****************
}
