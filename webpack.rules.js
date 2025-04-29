module.exports = [
  // Add support for native node modules
  {
    // We're specifying native_modules in the test because the asset relocator loader generates a
    // "fake" .node file which is really a cjs file.
    test: /native_modules[/\\].+\.node$/,
    use: "node-loader",
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: "@vercel/webpack-asset-relocator-loader",
      options: {
        outputAssetBase: "native_modules",
      },
    },
  },
  {
    test: /\.jsx?$/, // يتعامل مع ملفات .js و .jsx
    use: {
      loader: "babel-loader",
      options: {
        exclude: /node_modules/,
        presets: ["@babel/preset-react"],
      },
    },
  },
  {
    // للصور
    test: /\.(png|jpe?g|gif|svg|webp)$/i,
    type: "asset/resource",
    generator: {
      filename: "images/[name][ext]",
    },
  },
  {
    // للفيديوهات
    test: /\.(mp4|webm|ogg|mov)$/i,
    type: "asset/resource",
    generator: {
      filename: "videos/[name][ext]",
    },
  },
];

// Put your webpack loader rules in this array.  This is where you would put
// your ts-loader configuration for instance:
/**
 * Typescript Example:
 *
 * {
 *   test: /\.tsx?$/,
 *   exclude: /(node_modules|.webpack)/,
 *   loaders: [{
 *     loader: 'ts-loader',
 *     options: {
 *       transpileOnly: true
 *     }
 *   }]
 * }
 */
