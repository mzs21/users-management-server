# 1st
```
npm i express cors
```
# 2nd

```
npm i --save-dev @types/node @types/express
```

for Node and Express Types

# 3rd

```
npm i ts-node
```

# 4th
```
npx tsc --init
```

# 5th 
✅ Solution
🔧 Fix the ERR_UNKNOWN_FILE_EXTENSION ".ts" error by telling ts-node how to handle .ts files properly.
## Option 1: Force ts-node to use CommonJS
Update your package.json script like this:

```
"scripts": {
  "start": "nodemon --exec ts-node --loader ts-node/esm index.ts"
}
```
BUT! If you do this, also change type in package.json from ```commonjs``` to ```module```:

```
type: module
```

## Option 2: Use CommonJS-style code and config (simpler)

Keep ```type```: ```commonjs``` in package.json.

Use .ts files with require() syntax or compile before running.

If you're using CommonJS syntax (with require instead of import), use this:

```
npx ts-node index.ts
```
or for development:

```
"scripts": {
  "start": "nodemon --exec ts-node index.ts"
}
```

(Without nodemon)

```
"scripts": {
  "start": "ts-node index.ts"  
}