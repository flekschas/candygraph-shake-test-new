# candygraph-shake-test-new

```
git clone https://github.com/flekschas/candygraph
cd candygraph
git checkout enable-tree-shaking
npm install
npm run build-library
npm link

cd ..
git clone https://github.com/flekschas/candygraph-shake-test-new
npm install
npm link candygraph
npm run build
```

**Bundle Size**

```
> candygraph-shake-test@0.0.0 build
> tsc && vite build

vite v2.4.4 building for production...
✓ 44 modules transformed.
dist/assets/favicon.17e50649.svg   1.49kb
dist/index.html                    0.52kb
dist/assets/index.ccce2ca3.css     0.16kb / brotli: 0.10kb
dist/assets/index.c1adc825.js      6.83kb / brotli: 2.24kb
dist/assets/vendor.0fc72164.js     114.22kb / brotli: 32.60kb
```
