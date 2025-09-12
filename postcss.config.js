export default (ctx) => ({
  // map: ctx.options.map,  wp対応時必要であればコメントアウト
  plugins: {
    "@tailwindcss/postcss": {},
    "autoprefixer": {}
  }
});