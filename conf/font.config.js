/**
 * 网站字体相关配置（已优化：以 LXGW WenKai 为主字体，移除冗余）
 */
module.exports = {
  // 默认字体样式：无衬线 + 字体细（可通过环境变量自定义）
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans font-light',

  // 外部字体链接：只保留实际使用的字体 CSS
  FONT_URL: [
    'https://fonts.googleapis.com/css?family=Bitter&display=swap', // 英文数字字体
    'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css' // 中文字体
  ],

  // 无衬线字体（以 LXGW WenKai 为主，后备使用系统字体）
  FONT_SANS: [
    '"LXGW WenKai"',
    'Bitter',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Microsoft YaHei"',
    '"Helvetica Neue"',
    'Helvetica',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ],

  // 衬线字体（用于部分正文/标题样式切换）
  FONT_SERIF: [
    '"LXGW WenKai"',
    'Bitter',
    '"Noto Serif SC"', // 可考虑保留或移除
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ],

  // Font Awesome 图标库 CDN 链接
  FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH ||
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
}
