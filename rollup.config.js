/**
 *       	projectName
 *  FileName: 	rollup.config.js
 *	Create On: 	2020/11/27 16:32
 *  Create By:  vance@doocom.cn
 */

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from	"@rollup/plugin-babel";

export default {
	input: ["./src/index.js"],
	output: {
		file: "./dist/backtop.js",
		format: "umd",
		name: "BackTop",
		banner: `
			/**
		 		*     \tBackTop Component
			 *  FileName: \tBackTop.js
			 *\tCreate On: \t2020/11/27 16:32
			 *  Create By:  vance@doocom.cn
			 */
		`
	},
	plugins: [
		resolve(),
		commonjs(),
		babel({
			exclude: 'node_modules/**'
		})
	],
}