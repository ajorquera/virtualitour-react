// build rollup config for react components
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import dts from 'rollup-plugin-dts';
import typescript from "@rollup/plugin-typescript";

import image from '@rollup/plugin-image';

const pkg = require('./package.json');

export default [
    {
        input: 'src/components/index.ts',
        output: [
            {
                file: pkg.main,
                format: "cjs",
                sourcemap: false,
            },
            {
                file: pkg.module,
                format: "esm",
                sourcemap: false,
            },
        ],
        external: [
            ...Object.keys(pkg.dependencies || {}),
            ...Object.keys(pkg.peerDependencies || {}),
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
            }),
            typescript({ tsconfig: "./tsconfig.json" }),
            resolve(),
            image(),
            commonjs({
                namedExports: {
                    // This is needed because react/jsx-runtime exports jsx on the module export.
                    // Without this mapping the transformed import import {jsx as _jsx} from 'react/jsx-runtime' will fail.
                    'react/jsx-runtime': ['jsx', 'jsxs'],
                },
            }),
        ],
    },
    {
        input: "src/components/index.ts",
        output: [{ file: pkg.types, format: "es" }],
        plugins: [dts.default()],
    }
];