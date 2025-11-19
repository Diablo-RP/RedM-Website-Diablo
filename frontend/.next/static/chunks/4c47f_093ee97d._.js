(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_taggedTemplateLiteralLoose
]);
function _taggedTemplateLiteralLoose(e, t) {
    return t || (t = e.slice(0)), e.raw = t, e;
}
;
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectDestructuringEmpty
]);
function _objectDestructuringEmpty(t) {
    if (null == t) throw new TypeError("Cannot destructure " + t);
}
;
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-string/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Nodes, Parents} from 'hast'
 */ /**
 * Get the plain-text value of a hast node.
 *
 * @param {Nodes} node
 *   Node to serialize.
 * @returns {string}
 *   Serialized node.
 */ __turbopack_context__.s([
    "toString",
    ()=>toString
]);
function toString(node) {
    // “The concatenation of data of all the Text node descendants of the context
    // object, in tree order.”
    if ('children' in node) {
        return all(node);
    }
    // “Context object’s data.”
    return 'value' in node ? node.value : '';
}
/**
 * @param {Nodes} node
 *   Node.
 * @returns {string}
 *   Serialized node.
 */ function one(node) {
    if (node.type === 'text') {
        return node.value;
    }
    return 'children' in node ? all(node) : '';
}
/**
 * @param {Parents} node
 *   Node.
 * @returns {string}
 *   Serialized node.
 */ function all(node) {
    let index = -1;
    /** @type {Array<string>} */ const result = [];
    while(++index < node.children.length){
        result[index] = one(node.children[index]);
    }
    return result.join('');
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-filter/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 *
 * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
 *   Test from `unist-util-is`.
 *
 *   Note: we have remove and add `undefined`, because otherwise when generating
 *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
 *   which doesn’t work when publishing on npm.
 */ /**
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [cascade=true]
 *   Whether to drop parent nodes if they had children, but all their children
 *   were filtered out (default: `true`).
 */ __turbopack_context__.s([
    "filter",
    ()=>filter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$is$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-is/lib/index.js [app-client] (ecmascript)");
;
const own = {}.hasOwnProperty;
function filter(tree, options, test) {
    const is = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$is$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convert"])(test || options);
    const cascadeRaw = options && typeof options === 'object' && 'cascade' in options ? options.cascade : undefined;
    const cascade = cascadeRaw === undefined || cascadeRaw === null ? true : cascadeRaw;
    return preorder(tree);
    //TURBOPACK unreachable
    ;
    /**
   * @param {Node} node
   *   Current node.
   * @param {number | undefined} [index]
   *   Index of `node` in `parent`.
   * @param {Parent | undefined} [parentNode]
   *   Parent node.
   * @returns {Node | undefined}
   *   Shallow copy of `node`.
   */ function preorder(node, index, parentNode) {
        /** @type {Array<Node>} */ const children = [];
        if (!is(node, index, parentNode)) return undefined;
        if (parent(node)) {
            let childIndex = -1;
            while(++childIndex < node.children.length){
                const result = preorder(node.children[childIndex], childIndex, node);
                if (result) {
                    children.push(result);
                }
            }
            if (cascade && node.children.length > 0 && children.length === 0) {
                return undefined;
            }
        }
        // Create a shallow clone, using the new children.
        /** @type {typeof node} */ // @ts-expect-error all the fields will be copied over.
        const next = {};
        /** @type {string} */ let key;
        for(key in node){
            if (own.call(node, key)) {
                // @ts-expect-error: Looks like a record.
                next[key] = key === 'children' ? children : node[key];
            }
        }
        return next;
    }
}
/**
 * @param {Node} node
 * @returns {node is Parent}
 */ function parent(node) {
    return 'children' in node && node.children !== undefined;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/parse-numeric-range/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */ function parsePart(string) {
    let res = [];
    let m;
    for (let str of string.split(",").map((str)=>str.trim())){
        // just a number
        if (/^-?\d+$/.test(str)) {
            res.push(parseInt(str, 10));
        } else if (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)) {
            // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
            let [_, lhs, sep, rhs] = m;
            if (lhs && rhs) {
                lhs = parseInt(lhs);
                rhs = parseInt(rhs);
                const incr = lhs < rhs ? 1 : -1;
                // Make it inclusive by moving the right 'stop-point' away by one.
                if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;
                for(let i = lhs; i !== rhs; i += incr)res.push(i);
            }
        }
    }
    return res;
}
exports.default = parsePart;
module.exports = parsePart;
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-parse-selector/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast').Element} Element
 */ __turbopack_context__.s([
    "parseSelector",
    ()=>parseSelector
]);
const search = /[#.]/g;
function parseSelector(selector, defaultTagName) {
    const value = selector || '';
    /** @type {Properties} */ const props = {};
    let start = 0;
    /** @type {string | undefined} */ let previous;
    /** @type {string | undefined} */ let tagName;
    while(start < value.length){
        search.lastIndex = start;
        const match = search.exec(value);
        const subvalue = value.slice(start, match ? match.index : value.length);
        if (subvalue) {
            if (!previous) {
                tagName = subvalue;
            } else if (previous === '#') {
                props.id = subvalue;
            } else if (Array.isArray(props.className)) {
                props.className.push(subvalue);
            } else {
                props.className = [
                    subvalue
                ];
            }
            start += subvalue.length;
        }
        if (match) {
            previous = match[0];
            start++;
        }
    }
    return {
        type: 'element',
        // @ts-expect-error: fine.
        tagName: tagName || defaultTagName || 'div',
        properties: props,
        children: []
    };
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-parse5/node_modules/hastscript/node_modules/hast-util-parse-selector/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 */ /**
 * @template {string} SimpleSelector
 *   Selector type.
 * @template {string} DefaultTagName
 *   Default tag name.
 * @typedef {(
 *   SimpleSelector extends ''
 *     ? DefaultTagName
 *     : SimpleSelector extends `${infer TagName}.${infer Rest}`
 *     ? ExtractTagName<TagName, DefaultTagName>
 *     : SimpleSelector extends `${infer TagName}#${infer Rest}`
 *     ? ExtractTagName<TagName, DefaultTagName>
 *     : SimpleSelector extends string
 *     ? SimpleSelector
 *     : DefaultTagName
 * )} ExtractTagName
 *   Extract tag name from a simple selector.
 */ __turbopack_context__.s([
    "parseSelector",
    ()=>parseSelector
]);
const search = /[#.]/g;
function parseSelector(selector, defaultTagName) {
    const value = selector || '';
    /** @type {Properties} */ const props = {};
    let start = 0;
    /** @type {string | undefined} */ let previous;
    /** @type {string | undefined} */ let tagName;
    while(start < value.length){
        search.lastIndex = start;
        const match = search.exec(value);
        const subvalue = value.slice(start, match ? match.index : value.length);
        if (subvalue) {
            if (!previous) {
                tagName = subvalue;
            } else if (previous === '#') {
                props.id = subvalue;
            } else if (Array.isArray(props.className)) {
                props.className.push(subvalue);
            } else {
                props.className = [
                    subvalue
                ];
            }
            start += subvalue.length;
        }
        if (match) {
            previous = match[0];
            start++;
        }
    }
    return {
        type: 'element',
        // @ts-expect-error: tag name is parsed.
        tagName: tagName || defaultTagName || 'div',
        properties: props,
        children: []
    };
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hastscript/lib/core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Content} Content
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('property-information').Info} Info
 * @typedef {import('property-information').Schema} Schema
 */ /**
 * @typedef {Content | Root} Node
 *   Any concrete `hast` node.
 * @typedef {Root | Element} HResult
 *   Result from a `h` (or `s`) call.
 *
 * @typedef {string | number} HStyleValue
 *   Value for a CSS style field.
 * @typedef {Record<string, HStyleValue>} HStyle
 *   Supported value of a `style` prop.
 * @typedef {string | number | boolean | null | undefined} HPrimitiveValue
 *   Primitive property value.
 * @typedef {Array<string | number>} HArrayValue
 *   List of property values for space- or comma separated values (such as `className`).
 * @typedef {HPrimitiveValue | HArrayValue} HPropertyValue
 *   Primitive value or list value.
 * @typedef {{[property: string]: HPropertyValue | HStyle}} HProperties
 *   Acceptable value for element properties.
 *
 * @typedef {string | number | null | undefined} HPrimitiveChild
 *   Primitive children, either ignored (nullish), or turned into text nodes.
 * @typedef {Array<Node | HPrimitiveChild>} HArrayChild
 *   List of children.
 * @typedef {Node | HPrimitiveChild | HArrayChild} HChild
 *   Acceptable child value.
 */ __turbopack_context__.s([
    "core",
    ()=>core
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hastscript$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hastscript/node_modules/property-information/lib/find.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hastscript$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hastscript/node_modules/property-information/lib/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$parse$2d$selector$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-parse-selector/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/space-separated-tokens/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/comma-separated-tokens/index.js [app-client] (ecmascript)");
;
;
;
;
const buttonTypes = new Set([
    'menu',
    'submit',
    'reset',
    'button'
]);
const own = {}.hasOwnProperty;
function core(schema, defaultTagName, caseSensitive) {
    const adjust = caseSensitive && createAdjustMap(caseSensitive);
    const h = /**
       * Hyperscript compatible DSL for creating virtual hast trees.
       *
       * @param {string | null} [selector]
       * @param {HProperties | HChild} [properties]
       * @param {Array<HChild>} children
       * @returns {HResult}
       */ function(selector, properties) {
        for(var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            children[_key - 2] = arguments[_key];
        }
        let index = -1;
        /** @type {HResult} */ let node;
        if (selector === undefined || selector === null) {
            node = {
                type: 'root',
                children: []
            };
            // @ts-expect-error Properties are not supported for roots.
            children.unshift(properties);
        } else {
            node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$parse$2d$selector$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSelector"])(selector, defaultTagName);
            // Normalize the name.
            node.tagName = node.tagName.toLowerCase();
            if (adjust && own.call(adjust, node.tagName)) {
                node.tagName = adjust[node.tagName];
            }
            // Handle props.
            if (isProperties(properties, node.tagName)) {
                /** @type {string} */ let key;
                for(key in properties){
                    if (own.call(properties, key)) {
                        // @ts-expect-error `node.properties` is set.
                        addProperty(schema, node.properties, key, properties[key]);
                    }
                }
            } else {
                children.unshift(properties);
            }
        }
        // Handle children.
        while(++index < children.length){
            addChild(node.children, children[index]);
        }
        if (node.type === 'element' && node.tagName === 'template') {
            node.content = {
                type: 'root',
                children: node.children
            };
            node.children = [];
        }
        return node;
    };
    return h;
}
/**
 * @param {HProperties | HChild} value
 * @param {string} name
 * @returns {value is HProperties}
 */ function isProperties(value, name) {
    if (value === null || value === undefined || typeof value !== 'object' || Array.isArray(value)) {
        return false;
    }
    if (name === 'input' || !value.type || typeof value.type !== 'string') {
        return true;
    }
    if ('children' in value && Array.isArray(value.children)) {
        return false;
    }
    if (name === 'button') {
        return buttonTypes.has(value.type.toLowerCase());
    }
    return !('value' in value);
}
/**
 * @param {Schema} schema
 * @param {Properties} properties
 * @param {string} key
 * @param {HStyle | HPropertyValue} value
 * @returns {void}
 */ function addProperty(schema, properties, key, value) {
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hastscript$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["find"])(schema, key);
    let index = -1;
    /** @type {HPropertyValue} */ let result;
    // Ignore nullish and NaN values.
    if (value === undefined || value === null) return;
    if (typeof value === 'number') {
        // Ignore NaN.
        if (Number.isNaN(value)) return;
        result = value;
    } else if (typeof value === 'boolean') {
        result = value;
    } else if (typeof value === 'string') {
        if (info.spaceSeparated) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(value);
        } else if (info.commaSeparated) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(value);
        } else if (info.commaOrSpaceSeparated) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(value).join(' '));
        } else {
            result = parsePrimitive(info, info.property, value);
        }
    } else if (Array.isArray(value)) {
        result = value.concat();
    } else {
        result = info.property === 'style' ? style(value) : String(value);
    }
    if (Array.isArray(result)) {
        /** @type {Array<string | number>} */ const finalResult = [];
        while(++index < result.length){
            // @ts-expect-error Assume no booleans in array.
            finalResult[index] = parsePrimitive(info, info.property, result[index]);
        }
        result = finalResult;
    }
    // Class names (which can be added both on the `selector` and here).
    if (info.property === 'className' && Array.isArray(properties.className)) {
        // @ts-expect-error Assume no booleans in `className`.
        result = properties.className.concat(result);
    }
    properties[info.property] = result;
}
/**
 * @param {Array<Content>} nodes
 * @param {HChild} value
 * @returns {void}
 */ function addChild(nodes, value) {
    let index = -1;
    if (value === undefined || value === null) {
    // Empty.
    } else if (typeof value === 'string' || typeof value === 'number') {
        nodes.push({
            type: 'text',
            value: String(value)
        });
    } else if (Array.isArray(value)) {
        while(++index < value.length){
            addChild(nodes, value[index]);
        }
    } else if (typeof value === 'object' && 'type' in value) {
        if (value.type === 'root') {
            addChild(nodes, value.children);
        } else {
            nodes.push(value);
        }
    } else {
        throw new Error('Expected node, nodes, or string, got `' + value + '`');
    }
}
/**
 * Parse a single primitives.
 *
 * @param {Info} info
 * @param {string} name
 * @param {HPrimitiveValue} value
 * @returns {HPrimitiveValue}
 */ function parsePrimitive(info, name, value) {
    if (typeof value === 'string') {
        if (info.number && value && !Number.isNaN(Number(value))) {
            return Number(value);
        }
        if ((info.boolean || info.overloadedBoolean) && (value === '' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hastscript$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(value) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hastscript$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(name))) {
            return true;
        }
    }
    return value;
}
/**
 * Serialize a `style` object as a string.
 *
 * @param {HStyle} value
 *   Style object.
 * @returns {string}
 *   CSS string.
 */ function style(value) {
    /** @type {Array<string>} */ const result = [];
    /** @type {string} */ let key;
    for(key in value){
        if (own.call(value, key)) {
            result.push([
                key,
                value[key]
            ].join(': '));
        }
    }
    return result.join('; ');
}
/**
 * Create a map to adjust casing.
 *
 * @param {Array<string>} values
 *   List of properly cased keys.
 * @returns {Record<string, string>}
 *   Map of lowercase keys to uppercase keys.
 */ function createAdjustMap(values) {
    /** @type {Record<string, string>} */ const result = {};
    let index = -1;
    while(++index < values.length){
        result[values[index].toLowerCase()] = values[index];
    }
    return result;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hastscript/lib/html.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('./core.js').HChild} Child
 *   Acceptable child value.
 * @typedef {import('./core.js').HProperties} Properties
 *   Acceptable value for element properties.
 * @typedef {import('./core.js').HResult} Result
 *   Result from a `h` (or `s`) call.
 *
 * @typedef {import('./jsx-classic.js').Element} h.JSX.Element
 * @typedef {import('./jsx-classic.js').IntrinsicAttributes} h.JSX.IntrinsicAttributes
 * @typedef {import('./jsx-classic.js').IntrinsicElements} h.JSX.IntrinsicElements
 * @typedef {import('./jsx-classic.js').ElementChildrenAttribute} h.JSX.ElementChildrenAttribute
 */ __turbopack_context__.s([
    "h",
    ()=>h
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hastscript$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hastscript/node_modules/property-information/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hastscript$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hastscript/lib/core.js [app-client] (ecmascript)");
;
;
const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hastscript$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["core"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hastscript$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["html"], 'div');
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-parse5/node_modules/hastscript/lib/create-h.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Nodes, RootContent, Root} from 'hast'
 * @import {Info, Schema} from 'property-information'
 */ /**
 * @typedef {Array<Nodes | PrimitiveChild>} ArrayChildNested
 *   List of children (deep).
 */ /**
 * @typedef {Array<ArrayChildNested | Nodes | PrimitiveChild>} ArrayChild
 *   List of children.
 */ /**
 * @typedef {Array<number | string>} ArrayValue
 *   List of property values for space- or comma separated values (such as `className`).
 */ /**
 * @typedef {ArrayChild | Nodes | PrimitiveChild} Child
 *   Acceptable child value.
 */ /**
 * @typedef {number | string | null | undefined} PrimitiveChild
 *   Primitive children, either ignored (nullish), or turned into text nodes.
 */ /**
 * @typedef {boolean | number | string | null | undefined} PrimitiveValue
 *   Primitive property value.
 */ /**
 * @typedef {Record<string, PropertyValue | Style>} Properties
 *   Acceptable value for element properties.
 */ /**
 * @typedef {ArrayValue | PrimitiveValue} PropertyValue
 *   Primitive value or list value.
 */ /**
 * @typedef {Element | Root} Result
 *   Result from a `h` (or `s`) call.
 */ /**
 * @typedef {number | string} StyleValue
 *   Value for a CSS style field.
 */ /**
 * @typedef {Record<string, StyleValue>} Style
 *   Supported value of a `style` prop.
 */ __turbopack_context__.s([
    "createH",
    ()=>createH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/comma-separated-tokens/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$parse5$2f$node_modules$2f$hastscript$2f$node_modules$2f$hast$2d$util$2d$parse$2d$selector$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-parse5/node_modules/hastscript/node_modules/hast-util-parse-selector/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/property-information/lib/find.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/property-information/lib/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/space-separated-tokens/index.js [app-client] (ecmascript)");
;
;
;
;
function createH(schema, defaultTagName, caseSensitive) {
    const adjust = caseSensitive ? createAdjustMap(caseSensitive) : undefined;
    /**
   * Hyperscript compatible DSL for creating virtual hast trees.
   *
   * @overload
   * @param {null | undefined} [selector]
   * @param {...Child} children
   * @returns {Root}
   *
   * @overload
   * @param {string} selector
   * @param {Properties} properties
   * @param {...Child} children
   * @returns {Element}
   *
   * @overload
   * @param {string} selector
   * @param {...Child} children
   * @returns {Element}
   *
   * @param {string | null | undefined} [selector]
   *   Selector.
   * @param {Child | Properties | null | undefined} [properties]
   *   Properties (or first child) (default: `undefined`).
   * @param {...Child} children
   *   Children.
   * @returns {Result}
   *   Result.
   */ function h(selector, properties) {
        for(var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            children[_key - 2] = arguments[_key];
        }
        /** @type {Result} */ let node;
        if (selector === null || selector === undefined) {
            node = {
                type: 'root',
                children: []
            };
            // Properties are not supported for roots.
            const child = properties;
            children.unshift(child);
        } else {
            node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$parse5$2f$node_modules$2f$hastscript$2f$node_modules$2f$hast$2d$util$2d$parse$2d$selector$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSelector"])(selector, defaultTagName);
            // Normalize the name.
            const lower = node.tagName.toLowerCase();
            const adjusted = adjust ? adjust.get(lower) : undefined;
            node.tagName = adjusted || lower;
            // Handle properties.
            if (isChild(properties)) {
                children.unshift(properties);
            } else {
                for (const [key, value] of Object.entries(properties)){
                    addProperty(schema, node.properties, key, value);
                }
            }
        }
        // Handle children.
        for (const child of children){
            addChild(node.children, child);
        }
        if (node.type === 'element' && node.tagName === 'template') {
            node.content = {
                type: 'root',
                children: node.children
            };
            node.children = [];
        }
        return node;
    }
    return h;
}
/**
 * Check if something is properties or a child.
 *
 * @param {Child | Properties} value
 *   Value to check.
 * @returns {value is Child}
 *   Whether `value` is definitely a child.
 */ function isChild(value) {
    // Never properties if not an object.
    if (value === null || typeof value !== 'object' || Array.isArray(value)) {
        return true;
    }
    // Never node without `type`; that’s the main discriminator.
    if (typeof value.type !== 'string') return false;
    // Slower check: never property value if object or array with
    // non-number/strings.
    const record = value;
    const keys = Object.keys(value);
    for (const key of keys){
        const value = record[key];
        if (value && typeof value === 'object') {
            if (!Array.isArray(value)) return true;
            const list = value;
            for (const item of list){
                if (typeof item !== 'number' && typeof item !== 'string') {
                    return true;
                }
            }
        }
    }
    // Also see empty `children` as a node.
    if ('children' in value && Array.isArray(value.children)) {
        return true;
    }
    // Default to properties, someone can always pass an empty object,
    // put `data: {}` in a node,
    // or wrap it in an array.
    return false;
}
/**
 * @param {Schema} schema
 *   Schema.
 * @param {Properties} properties
 *   Properties object.
 * @param {string} key
 *   Property name.
 * @param {PropertyValue | Style} value
 *   Property value.
 * @returns {undefined}
 *   Nothing.
 */ function addProperty(schema, properties, key, value) {
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["find"])(schema, key);
    /** @type {PropertyValue} */ let result;
    // Ignore nullish and NaN values.
    if (value === null || value === undefined) return;
    if (typeof value === 'number') {
        // Ignore NaN.
        if (Number.isNaN(value)) return;
        result = value;
    } else if (typeof value === 'boolean') {
        result = value;
    } else if (typeof value === 'string') {
        if (info.spaceSeparated) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(value);
        } else if (info.commaSeparated) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(value);
        } else if (info.commaOrSpaceSeparated) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(value).join(' '));
        } else {
            result = parsePrimitive(info, info.property, value);
        }
    } else if (Array.isArray(value)) {
        result = [
            ...value
        ];
    } else {
        result = info.property === 'style' ? style(value) : String(value);
    }
    if (Array.isArray(result)) {
        /** @type {Array<number | string>} */ const finalResult = [];
        for (const item of result){
            // Assume no booleans in array.
            finalResult.push(parsePrimitive(info, info.property, item));
        }
        result = finalResult;
    }
    // Class names (which can be added both on the `selector` and here).
    if (info.property === 'className' && Array.isArray(properties.className)) {
        // Assume no booleans in `className`.
        result = properties.className.concat(result);
    }
    properties[info.property] = result;
}
/**
 * @param {Array<RootContent>} nodes
 *   Children.
 * @param {Child} value
 *   Child.
 * @returns {undefined}
 *   Nothing.
 */ function addChild(nodes, value) {
    if (value === null || value === undefined) {
    // Empty.
    } else if (typeof value === 'number' || typeof value === 'string') {
        nodes.push({
            type: 'text',
            value: String(value)
        });
    } else if (Array.isArray(value)) {
        for (const child of value){
            addChild(nodes, child);
        }
    } else if (typeof value === 'object' && 'type' in value) {
        if (value.type === 'root') {
            addChild(nodes, value.children);
        } else {
            nodes.push(value);
        }
    } else {
        throw new Error('Expected node, nodes, or string, got `' + value + '`');
    }
}
/**
 * Parse a single primitives.
 *
 * @param {Info} info
 *   Property information.
 * @param {string} name
 *   Property name.
 * @param {PrimitiveValue} value
 *   Property value.
 * @returns {PrimitiveValue}
 *   Property value.
 */ function parsePrimitive(info, name, value) {
    if (typeof value === 'string') {
        if (info.number && value && !Number.isNaN(Number(value))) {
            return Number(value);
        }
        if ((info.boolean || info.overloadedBoolean) && (value === '' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(value) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(name))) {
            return true;
        }
    }
    return value;
}
/**
 * Serialize a `style` object as a string.
 *
 * @param {Style} styles
 *   Style object.
 * @returns {string}
 *   CSS string.
 */ function style(styles) {
    /** @type {Array<string>} */ const result = [];
    for (const [key, value] of Object.entries(styles)){
        result.push([
            key,
            value
        ].join(': '));
    }
    return result.join('; ');
}
/**
 * Create a map to adjust casing.
 *
 * @param {ReadonlyArray<string>} values
 *   List of properly cased keys.
 * @returns {Map<string, string>}
 *   Map of lowercase keys to uppercase keys.
 */ function createAdjustMap(values) {
    /** @type {Map<string, string>} */ const result = new Map();
    for (const value of values){
        result.set(value.toLowerCase(), value);
    }
    return result;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-parse5/node_modules/hastscript/lib/svg-case-sensitive-tag-names.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * List of case-sensitive SVG tag names.
 *
 * @type {ReadonlyArray<string>}
 */ __turbopack_context__.s([
    "svgCaseSensitiveTagNames",
    ()=>svgCaseSensitiveTagNames
]);
const svgCaseSensitiveTagNames = [
    'altGlyph',
    'altGlyphDef',
    'altGlyphItem',
    'animateColor',
    'animateMotion',
    'animateTransform',
    'clipPath',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'foreignObject',
    'glyphRef',
    'linearGradient',
    'radialGradient',
    'solidColor',
    'textArea',
    'textPath'
];
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-parse5/node_modules/hastscript/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Register the JSX namespace on `h`.
/**
 * @typedef {import('./jsx-classic.js').Element} h.JSX.Element
 * @typedef {import('./jsx-classic.js').ElementChildrenAttribute} h.JSX.ElementChildrenAttribute
 * @typedef {import('./jsx-classic.js').IntrinsicAttributes} h.JSX.IntrinsicAttributes
 * @typedef {import('./jsx-classic.js').IntrinsicElements} h.JSX.IntrinsicElements
 */ // Register the JSX namespace on `s`.
/**
 * @typedef {import('./jsx-classic.js').Element} s.JSX.Element
 * @typedef {import('./jsx-classic.js').ElementChildrenAttribute} s.JSX.ElementChildrenAttribute
 * @typedef {import('./jsx-classic.js').IntrinsicAttributes} s.JSX.IntrinsicAttributes
 * @typedef {import('./jsx-classic.js').IntrinsicElements} s.JSX.IntrinsicElements
 */ __turbopack_context__.s([
    "h",
    ()=>h,
    "s",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/property-information/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$parse5$2f$node_modules$2f$hastscript$2f$lib$2f$create$2d$h$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-parse5/node_modules/hastscript/lib/create-h.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$parse5$2f$node_modules$2f$hastscript$2f$lib$2f$svg$2d$case$2d$sensitive$2d$tag$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-parse5/node_modules/hastscript/lib/svg-case-sensitive-tag-names.js [app-client] (ecmascript)");
;
;
;
const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$parse5$2f$node_modules$2f$hastscript$2f$lib$2f$create$2d$h$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createH"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["html"], 'div');
const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$parse5$2f$node_modules$2f$hastscript$2f$lib$2f$create$2d$h$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createH"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"], 'g', __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$parse5$2f$node_modules$2f$hastscript$2f$lib$2f$svg$2d$case$2d$sensitive$2d$tag$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["svgCaseSensitiveTagNames"]);
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/character-entities-legacy/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * List of legacy HTML named character references that don’t need a trailing semicolon.
 *
 * @type {Array<string>}
 */ __turbopack_context__.s([
    "characterEntitiesLegacy",
    ()=>characterEntitiesLegacy
]);
const characterEntitiesLegacy = [
    'AElig',
    'AMP',
    'Aacute',
    'Acirc',
    'Agrave',
    'Aring',
    'Atilde',
    'Auml',
    'COPY',
    'Ccedil',
    'ETH',
    'Eacute',
    'Ecirc',
    'Egrave',
    'Euml',
    'GT',
    'Iacute',
    'Icirc',
    'Igrave',
    'Iuml',
    'LT',
    'Ntilde',
    'Oacute',
    'Ocirc',
    'Ograve',
    'Oslash',
    'Otilde',
    'Ouml',
    'QUOT',
    'REG',
    'THORN',
    'Uacute',
    'Ucirc',
    'Ugrave',
    'Uuml',
    'Yacute',
    'aacute',
    'acirc',
    'acute',
    'aelig',
    'agrave',
    'amp',
    'aring',
    'atilde',
    'auml',
    'brvbar',
    'ccedil',
    'cedil',
    'cent',
    'copy',
    'curren',
    'deg',
    'divide',
    'eacute',
    'ecirc',
    'egrave',
    'eth',
    'euml',
    'frac12',
    'frac14',
    'frac34',
    'gt',
    'iacute',
    'icirc',
    'iexcl',
    'igrave',
    'iquest',
    'iuml',
    'laquo',
    'lt',
    'macr',
    'micro',
    'middot',
    'nbsp',
    'not',
    'ntilde',
    'oacute',
    'ocirc',
    'ograve',
    'ordf',
    'ordm',
    'oslash',
    'otilde',
    'ouml',
    'para',
    'plusmn',
    'pound',
    'quot',
    'raquo',
    'reg',
    'sect',
    'shy',
    'sup1',
    'sup2',
    'sup3',
    'szlig',
    'thorn',
    'times',
    'uacute',
    'ucirc',
    'ugrave',
    'uml',
    'uuml',
    'yacute',
    'yen',
    'yuml'
];
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/character-reference-invalid/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Map of invalid numeric character references to their replacements, according to HTML.
 *
 * @type {Record<number, string>}
 */ __turbopack_context__.s([
    "characterReferenceInvalid",
    ()=>characterReferenceInvalid
]);
const characterReferenceInvalid = {
    0: '�',
    128: '€',
    130: '‚',
    131: 'ƒ',
    132: '„',
    133: '…',
    134: '†',
    135: '‡',
    136: 'ˆ',
    137: '‰',
    138: 'Š',
    139: '‹',
    140: 'Œ',
    142: 'Ž',
    145: '‘',
    146: '’',
    147: '“',
    148: '”',
    149: '•',
    150: '–',
    151: '—',
    152: '˜',
    153: '™',
    154: 'š',
    155: '›',
    156: 'œ',
    158: 'ž',
    159: 'Ÿ'
};
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/is-decimal/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the given character code, or the character code at the first
 * character, is decimal.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is a decimal
 */ __turbopack_context__.s([
    "isDecimal",
    ()=>isDecimal
]);
function isDecimal(character) {
    const code = typeof character === 'string' ? character.charCodeAt(0) : character;
    return code >= 48 && code <= 57 /* 0-9 */ ;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/is-hexadecimal/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the given character code, or the character code at the first
 * character, is hexadecimal.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is hexadecimal
 */ __turbopack_context__.s([
    "isHexadecimal",
    ()=>isHexadecimal
]);
function isHexadecimal(character) {
    const code = typeof character === 'string' ? character.charCodeAt(0) : character;
    return code >= 97 /* a */  && code <= 102 || code >= 65 /* A */  && code <= 70 || code >= 48 /* A */  && code <= 57;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/is-alphabetical/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the given character code, or the character code at the first
 * character, is alphabetical.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is alphabetical.
 */ __turbopack_context__.s([
    "isAlphabetical",
    ()=>isAlphabetical
]);
function isAlphabetical(character) {
    const code = typeof character === 'string' ? character.charCodeAt(0) : character;
    return code >= 97 && code <= 122 || code >= 65 && code <= 90;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/is-alphanumerical/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAlphanumerical",
    ()=>isAlphanumerical
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$is$2d$alphabetical$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/is-alphabetical/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$is$2d$decimal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/is-decimal/index.js [app-client] (ecmascript)");
;
;
function isAlphanumerical(character) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$is$2d$alphabetical$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAlphabetical"])(character) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$is$2d$decimal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDecimal"])(character);
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/parse-entities/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Point} from 'unist'
 * @import {Options} from '../index.js'
 */ __turbopack_context__.s([
    "parseEntities",
    ()=>parseEntities
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$character$2d$entities$2d$legacy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/character-entities-legacy/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$character$2d$reference$2d$invalid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/character-reference-invalid/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$is$2d$decimal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/is-decimal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$is$2d$hexadecimal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/is-hexadecimal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$is$2d$alphanumerical$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/is-alphanumerical/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/decode-named-character-reference/index.dom.js [app-client] (ecmascript)");
;
;
;
;
;
;
// Warning messages.
const messages = [
    '',
    /* 1: Non terminated (named) */ 'Named character references must be terminated by a semicolon',
    /* 2: Non terminated (numeric) */ 'Numeric character references must be terminated by a semicolon',
    /* 3: Empty (named) */ 'Named character references cannot be empty',
    /* 4: Empty (numeric) */ 'Numeric character references cannot be empty',
    /* 5: Unknown (named) */ 'Named character references must be known',
    /* 6: Disallowed (numeric) */ 'Numeric character references cannot be disallowed',
    /* 7: Prohibited (numeric) */ 'Numeric character references cannot be outside the permissible Unicode range'
];
function parseEntities(value, options) {
    const settings = options || {};
    const additional = typeof settings.additional === 'string' ? settings.additional.charCodeAt(0) : settings.additional;
    /** @type {Array<string>} */ const result = [];
    let index = 0;
    let lines = -1;
    let queue = '';
    /** @type {Point | undefined} */ let point;
    /** @type {Array<number>|undefined} */ let indent;
    if (settings.position) {
        if ('start' in settings.position || 'indent' in settings.position) {
            // @ts-expect-error: points don’t have indent.
            indent = settings.position.indent;
            // @ts-expect-error: points don’t have indent.
            point = settings.position.start;
        } else {
            point = settings.position;
        }
    }
    let line = (point ? point.line : 0) || 1;
    let column = (point ? point.column : 0) || 1;
    // Cache the current point.
    let previous = now();
    /** @type {number|undefined} */ let character;
    // Ensure the algorithm walks over the first character (inclusive).
    index--;
    while(++index <= value.length){
        // If the previous character was a newline.
        if (character === 10 /* `\n` */ ) {
            column = (indent ? indent[lines] : 0) || 1;
        }
        character = value.charCodeAt(index);
        if (character === 38 /* `&` */ ) {
            const following = value.charCodeAt(index + 1);
            // The behavior depends on the identity of the next character.
            if (following === 9 /* `\t` */  || following === 10 /* `\n` */  || following === 12 /* `\f` */  || following === 32 /* ` ` */  || following === 38 /* `&` */  || following === 60 /* `<` */  || Number.isNaN(following) || additional && following === additional) {
                // Not a character reference.
                // No characters are consumed, and nothing is returned.
                // This is not an error, either.
                queue += String.fromCharCode(character);
                column++;
                continue;
            }
            const start = index + 1;
            let begin = start;
            let end = start;
            /** @type {string} */ let type;
            if (following === 35 /* `#` */ ) {
                // Numerical reference.
                end = ++begin;
                // The behavior further depends on the next character.
                const following = value.charCodeAt(end);
                if (following === 88 /* `X` */  || following === 120 /* `x` */ ) {
                    // ASCII hexadecimal digits.
                    type = 'hexadecimal';
                    end = ++begin;
                } else {
                    // ASCII decimal digits.
                    type = 'decimal';
                }
            } else {
                // Named reference.
                type = 'named';
            }
            let characterReferenceCharacters = '';
            let characterReference = '';
            let characters = '';
            // Each type of character reference accepts different characters.
            // This test is used to detect whether a reference has ended (as the semicolon
            // is not strictly needed).
            const test = type === 'named' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$is$2d$alphanumerical$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAlphanumerical"] : type === 'decimal' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$is$2d$decimal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDecimal"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$is$2d$hexadecimal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexadecimal"];
            end--;
            while(++end <= value.length){
                const following = value.charCodeAt(end);
                if (!test(following)) {
                    break;
                }
                characters += String.fromCharCode(following);
                // Check if we can match a legacy named reference.
                // If so, we cache that as the last viable named reference.
                // This ensures we do not need to walk backwards later.
                if (type === 'named' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$character$2d$entities$2d$legacy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characterEntitiesLegacy"].includes(characters)) {
                    characterReferenceCharacters = characters;
                    // @ts-expect-error: always able to decode.
                    characterReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeNamedCharacterReference"])(characters);
                }
            }
            let terminated = value.charCodeAt(end) === 59 /* `;` */ ;
            if (terminated) {
                end++;
                const namedReference = type === 'named' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeNamedCharacterReference"])(characters) : false;
                if (namedReference) {
                    characterReferenceCharacters = characters;
                    characterReference = namedReference;
                }
            }
            let diff = 1 + end - start;
            let reference = '';
            if (!terminated && settings.nonTerminated === false) {
            // Empty.
            } else if (!characters) {
                // An empty (possible) reference is valid, unless it’s numeric (thus an
                // ampersand followed by an octothorp).
                if (type !== 'named') {
                    warning(4 /* Empty (numeric) */ , diff);
                }
            } else if (type === 'named') {
                // An ampersand followed by anything unknown, and not terminated, is
                // invalid.
                if (terminated && !characterReference) {
                    warning(5 /* Unknown (named) */ , 1);
                } else {
                    // If there’s something after an named reference which is not known,
                    // cap the reference.
                    if (characterReferenceCharacters !== characters) {
                        end = begin + characterReferenceCharacters.length;
                        diff = 1 + end - begin;
                        terminated = false;
                    }
                    // If the reference is not terminated, warn.
                    if (!terminated) {
                        const reason = characterReferenceCharacters ? 1 /* Non terminated (named) */  : 3 /* Empty (named) */ ;
                        if (settings.attribute) {
                            const following = value.charCodeAt(end);
                            if (following === 61 /* `=` */ ) {
                                warning(reason, diff);
                                characterReference = '';
                            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$is$2d$alphanumerical$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAlphanumerical"])(following)) {
                                characterReference = '';
                            } else {
                                warning(reason, diff);
                            }
                        } else {
                            warning(reason, diff);
                        }
                    }
                }
                reference = characterReference;
            } else {
                if (!terminated) {
                    // All nonterminated numeric references are not rendered, and emit a
                    // warning.
                    warning(2 /* Non terminated (numeric) */ , diff);
                }
                // When terminated and numerical, parse as either hexadecimal or
                // decimal.
                let referenceCode = Number.parseInt(characters, type === 'hexadecimal' ? 16 : 10);
                // Emit a warning when the parsed number is prohibited, and replace with
                // replacement character.
                if (prohibited(referenceCode)) {
                    warning(7 /* Prohibited (numeric) */ , diff);
                    reference = String.fromCharCode(65533 /* `�` */ );
                } else if (referenceCode in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$character$2d$reference$2d$invalid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characterReferenceInvalid"]) {
                    // Emit a warning when the parsed number is disallowed, and replace by
                    // an alternative.
                    warning(6 /* Disallowed (numeric) */ , diff);
                    reference = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$character$2d$reference$2d$invalid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characterReferenceInvalid"][referenceCode];
                } else {
                    // Parse the number.
                    let output = '';
                    // Emit a warning when the parsed number should not be used.
                    if (disallowed(referenceCode)) {
                        warning(6 /* Disallowed (numeric) */ , diff);
                    }
                    // Serialize the number.
                    if (referenceCode > 0xffff) {
                        referenceCode -= 0x10000;
                        output += String.fromCharCode(referenceCode >>> (10 & 0x3ff) | 0xd800);
                        referenceCode = 0xdc00 | referenceCode & 0x3ff;
                    }
                    reference = output + String.fromCharCode(referenceCode);
                }
            }
            // Found it!
            // First eat the queued characters as normal text, then eat a reference.
            if (reference) {
                flush();
                previous = now();
                index = end - 1;
                column += end - start + 1;
                result.push(reference);
                const next = now();
                next.offset++;
                if (settings.reference) {
                    settings.reference.call(settings.referenceContext || undefined, reference, {
                        start: previous,
                        end: next
                    }, value.slice(start - 1, end));
                }
                previous = next;
            } else {
                // If we could not find a reference, queue the checked characters (as
                // normal characters), and move the pointer to their end.
                // This is possible because we can be certain neither newlines nor
                // ampersands are included.
                characters = value.slice(start - 1, end);
                queue += characters;
                column += characters.length;
                index = end - 1;
            }
        } else {
            // Handle anything other than an ampersand, including newlines and EOF.
            if (character === 10 /* `\n` */ ) {
                line++;
                lines++;
                column = 0;
            }
            if (Number.isNaN(character)) {
                flush();
            } else {
                queue += String.fromCharCode(character);
                column++;
            }
        }
    }
    // Return the reduced nodes.
    return result.join('');
    //TURBOPACK unreachable
    ;
    // Get current position.
    function now() {
        return {
            line,
            column,
            offset: index + ((point ? point.offset : 0) || 0)
        };
    }
    /**
   * Handle the warning.
   *
   * @param {1|2|3|4|5|6|7} code
   * @param {number} offset
   */ function warning(code, offset) {
        /** @type {ReturnType<now>} */ let position;
        if (settings.warning) {
            position = now();
            position.column += offset;
            position.offset += offset;
            settings.warning.call(settings.warningContext || undefined, messages[code], position, code);
        }
    }
    /**
   * Flush `queue` (normal text).
   * Macro invoked before each reference and at the end of `value`.
   * Does nothing when `queue` is empty.
   */ function flush() {
        if (queue) {
            result.push(queue);
            if (settings.text) {
                settings.text.call(settings.textContext || undefined, queue, {
                    start: previous,
                    end: now()
                });
            }
            queue = '';
        }
    }
}
/**
 * Check if `character` is outside the permissible unicode range.
 *
 * @param {number} code
 * @returns {boolean}
 */ function prohibited(code) {
    return code >= 0xd800 && code <= 0xdfff || code > 0x10ffff;
}
/**
 * Check if `character` is disallowed.
 *
 * @param {number} code
 * @returns {boolean}
 */ function disallowed(code) {
    return code >= 0x0001 && code <= 0x0008 || code === 0x000b || code >= 0x000d && code <= 0x001f || code >= 0x007f && code <= 0x009f || code >= 0xfdd0 && code <= 0xfdef || (code & 0xffff) === 0xffff || (code & 0xffff) === 0xfffe;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-prism-plus/dist/index.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>f,
    "rehypePrismCommon",
    ()=>p,
    "rehypePrismGenerator",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-visit/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-string/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$filter$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-filter/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse$2d$numeric$2d$range$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/parse-numeric-range/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$refractor$2f$lib$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/refractor/lib/common.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$refractor$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/refractor/lib/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$refractor$2f$lib$2f$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/refractor/lib/all.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
function a() {
    a = function(e, r) {
        return new t(e, void 0, r);
    };
    var e = RegExp.prototype, r = new WeakMap;
    function t(e, n, i) {
        var o = new RegExp(e, n);
        return r.set(o, i || r.get(e)), l(o, t.prototype);
    }
    function n(e, t) {
        var n = r.get(t);
        return Object.keys(n).reduce(function(r, t) {
            var i = n[t];
            if ("number" == typeof i) r[t] = e[i];
            else {
                for(var o = 0; void 0 === e[i[o]] && o + 1 < i.length;)o++;
                r[t] = e[i[o]];
            }
            return r;
        }, Object.create(null));
    }
    return function(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), r && l(e, r);
    }(t, RegExp), t.prototype.exec = function(r) {
        var t = e.exec.call(this, r);
        if (t) {
            t.groups = n(t, this);
            var i = t.indices;
            i && (i.groups = n(i, this));
        }
        return t;
    }, t.prototype[Symbol.replace] = function(t, i) {
        if ("string" == typeof i) {
            var o = r.get(this);
            return e[Symbol.replace].call(this, t, i.replace(/\$<([^>]+)>/g, function(e, r) {
                var t = o[r];
                return "$" + (Array.isArray(t) ? t.join("$") : t);
            }));
        }
        if ("function" == typeof i) {
            var a = this;
            return e[Symbol.replace].call(this, t, function() {
                var e = arguments;
                return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(n(e, a)), i.apply(this, e);
            });
        }
        return e[Symbol.replace].call(this, t, i);
    }, a.apply(this, arguments);
}
function l(e, r) {
    return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
        return e.__proto__ = r, e;
    }, l(e, r);
}
function s(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for(var t = 0, n = new Array(r); t < r; t++)n[t] = e[t];
    return n;
}
function u(e, r) {
    var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (t) return (t = t.call(e)).next.bind(t);
    if (Array.isArray(e) || (t = function(e, r) {
        if (e) {
            if ("string" == typeof e) return s(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? s(e, r) : void 0;
        }
    }(e)) || r && e && "number" == typeof e.length) {
        t && (e = t);
        var n = 0;
        return function() {
            return n >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[n++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var c = function(i) {
    return function(o) {
        return void 0 === o && (o = {}), function(e, r) {
            if (r && !e.registered(r)) throw new Error('The default language "' + r + '" is not registered with refractor.');
        }(i, o.defaultLanguage), function(r) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(r, "element", l);
        };
        //TURBOPACK unreachable
        ;
        function l(e, l, s) {
            var c, p;
            if (s && "pre" === s.tagName && "code" === e.tagName) {
                var f = (null == e || null == (c = e.data) ? void 0 : c.meta) || (null == e || null == (p = e.properties) ? void 0 : p.metastring) || "";
                e.properties.className ? "boolean" == typeof e.properties.className ? e.properties.className = [] : Array.isArray(e.properties.className) || (e.properties.className = [
                    e.properties.className
                ]) : e.properties.className = [];
                var m, h, d = function(e) {
                    for(var r, t = u(e.properties.className); !(r = t()).done;){
                        var n = r.value;
                        if ("language-" === n.slice(0, 9)) return n.slice(9).toLowerCase();
                    }
                    return null;
                }(e);
                if (!d && o.defaultLanguage && e.properties.className.push("language-" + (d = o.defaultLanguage)), e.properties.className.push("code-highlight"), d) try {
                    var g, v;
                    v = null != (g = d) && g.includes("diff-") ? d.split("-")[1] : d, m = i.highlight((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(e), v), s.properties.className = (s.properties.className || []).concat("language-" + v);
                } catch (r) {
                    if (!o.ignoreMissing || !/Unknown language/.test(r.message)) throw r;
                    m = e;
                }
                else m = e;
                m.children = (h = 1, function e(r) {
                    return r.reduce(function(r, t) {
                        if ("text" === t.type) {
                            var n = t.value, i = (n.match(/\n/g) || "").length;
                            if (0 === i) t.position = {
                                start: {
                                    line: h,
                                    column: 1
                                },
                                end: {
                                    line: h,
                                    column: 1
                                }
                            }, r.push(t);
                            else for(var o, a = n.split("\n"), l = u(a.entries()); !(o = l()).done;){
                                var s = o.value, c = s[0], p = s[1];
                                r.push({
                                    type: "text",
                                    value: c === a.length - 1 ? p : p + "\n",
                                    position: {
                                        start: {
                                            line: h + c,
                                            column: 1
                                        },
                                        end: {
                                            line: h + c,
                                            column: 1
                                        }
                                    }
                                });
                            }
                            return h += i, r;
                        }
                        if (Object.prototype.hasOwnProperty.call(t, "children")) {
                            var f = h;
                            return t.children = e(t.children), r.push(t), t.position = {
                                start: {
                                    line: f,
                                    column: 1
                                },
                                end: {
                                    line: h,
                                    column: 1
                                }
                            }, r;
                        }
                        return r.push(t), r;
                    }, []);
                })(m.children), m.position = m.children.length > 0 ? {
                    start: {
                        line: m.children[0].position.start.line,
                        column: 0
                    },
                    end: {
                        line: m.children[m.children.length - 1].position.end.line,
                        column: 0
                    }
                } : {
                    start: {
                        line: 0,
                        column: 0
                    },
                    end: {
                        line: 0,
                        column: 0
                    }
                };
                for(var y, b = function(e) {
                    var r = /{([\d,-]+)}/, t = e.split(",").map(function(e) {
                        return e.trim();
                    }).join();
                    if (r.test(t)) {
                        var i = r.exec(t)[1], o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse$2d$numeric$2d$range$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(i);
                        return function(e) {
                            return o.includes(e + 1);
                        };
                    }
                    return function() {
                        return !1;
                    };
                }(f), w = function(e) {
                    var r = /*#__PURE__*/ a(/showLineNumbers=(\d+)/i, {
                        lines: 1
                    });
                    if (r.test(e)) {
                        var t = r.exec(e);
                        return Number(t.groups.lines);
                    }
                    return 1;
                }(f), N = function(e) {
                    for(var r = new Array(e), t = 0; t < e; t++)r[t] = {
                        type: "element",
                        tagName: "span",
                        properties: {
                            className: []
                        },
                        children: []
                    };
                    return r;
                }(m.position.end.line), j = [
                    "showlinenumbers=false",
                    'showlinenumbers="false"',
                    "showlinenumbers={false}"
                ], x = function() {
                    var e, n, i = y.value, a = i[0], l = i[1];
                    l.properties.className = [
                        "code-line"
                    ];
                    var s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$filter$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(m, function(e) {
                        return e.position.start.line <= a + 1 && e.position.end.line >= a + 1;
                    });
                    l.children = s.children, !f.toLowerCase().includes("showLineNumbers".toLowerCase()) && !o.showLineNumbers || j.some(function(e) {
                        return f.toLowerCase().includes(e);
                    }) || (l.properties.line = [
                        (a + w).toString()
                    ], l.properties.className.push("line-number")), b(a) && l.properties.className.push("highlight-line"), ("diff" === d || null != (e = d) && e.includes("diff-")) && "-" === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(l).substring(0, 1) ? l.properties.className.push("deleted") : ("diff" === d || null != (n = d) && n.includes("diff-")) && "+" === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(l).substring(0, 1) && l.properties.className.push("inserted");
                }, O = u(N.entries()); !(y = O()).done;)x();
                N.length > 0 && "" === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(N[N.length - 1]).trim() && N.pop(), e.children = N;
            }
        }
    };
}, p = c(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$refractor$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refractor"]), f = c(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$refractor$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refractor"]);
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/indexes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMulticharIndex",
    ()=>createMulticharIndex,
    "createRegularIndex",
    ()=>createRegularIndex,
    "emptyMulticharIndex",
    ()=>emptyMulticharIndex,
    "emptyRegularIndex",
    ()=>emptyRegularIndex
]);
var emptyMulticharIndex = {};
var emptyRegularIndex = {};
function extendIndex(item, index) {
    var currentIndex = index;
    for(var pos = 0; pos < item.length; pos++){
        var isLast = pos === item.length - 1;
        var char = item.charAt(pos);
        var charIndex = currentIndex[char] || (currentIndex[char] = {
            chars: {}
        });
        if (isLast) {
            charIndex.self = item;
        }
        currentIndex = charIndex.chars;
    }
}
function createMulticharIndex(items) {
    if (items.length === 0) {
        return emptyMulticharIndex;
    }
    var index = {};
    for(var _i = 0, items_1 = items; _i < items_1.length; _i++){
        var item = items_1[_i];
        extendIndex(item, index);
    }
    return index;
}
function createRegularIndex(items) {
    if (items.length === 0) {
        return emptyRegularIndex;
    }
    var result = {};
    for(var _i = 0, items_2 = items; _i < items_2.length; _i++){
        var item = items_2[_i];
        result[item] = true;
    }
    return result;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/pseudo-signatures.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculatePseudoSignatures",
    ()=>calculatePseudoSignatures,
    "defaultPseudoSignature",
    ()=>defaultPseudoSignature,
    "emptyPseudoSignatures",
    ()=>emptyPseudoSignatures,
    "inverseCategories",
    ()=>inverseCategories
]);
var emptyPseudoSignatures = {};
var defaultPseudoSignature = {
    type: 'String',
    optional: true
};
function calculatePseudoSignature(types) {
    var result = {
        type: 'NoArgument',
        optional: false
    };
    function setResultType(type) {
        if (result.type && result.type !== type && result.type !== 'NoArgument') {
            throw new Error("Conflicting pseudo-class argument type: \"".concat(result.type, "\" vs \"").concat(type, "\"."));
        }
        result.type = type;
    }
    for(var _i = 0, types_1 = types; _i < types_1.length; _i++){
        var type = types_1[_i];
        if (type === 'NoArgument') {
            result.optional = true;
        }
        if (type === 'Formula') {
            setResultType('Formula');
        }
        if (type === 'FormulaOfSelector') {
            setResultType('Formula');
            result.ofSelector = true;
        }
        if (type === 'String') {
            setResultType('String');
        }
        if (type === 'Selector') {
            setResultType('Selector');
        }
    }
    return result;
}
function inverseCategories(obj) {
    var result = {};
    for(var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++){
        var category = _a[_i];
        var items = obj[category];
        if (items) {
            for(var _b = 0, _c = items; _b < _c.length; _b++){
                var item = _c[_b];
                (result[item] || (result[item] = [])).push(category);
            }
        }
    }
    return result;
}
function calculatePseudoSignatures(definitions) {
    var pseudoClassesToArgumentTypes = inverseCategories(definitions);
    var result = {};
    for(var _i = 0, _a = Object.keys(pseudoClassesToArgumentTypes); _i < _a.length; _i++){
        var pseudoClass = _a[_i];
        var argumentTypes = pseudoClassesToArgumentTypes[pseudoClass];
        if (argumentTypes) {
            result[pseudoClass] = calculatePseudoSignature(argumentTypes);
        }
    }
    return result;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/syntax-definitions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildPseudoLocationIndex",
    ()=>buildPseudoLocationIndex,
    "cssModules",
    ()=>cssModules,
    "cssSyntaxDefinitions",
    ()=>cssSyntaxDefinitions,
    "extendSyntaxDefinition",
    ()=>extendSyntaxDefinition,
    "getXmlOptions",
    ()=>getXmlOptions,
    "pseudoLocationIndex",
    ()=>pseudoLocationIndex
]);
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var emptyXmlOptions = {};
var defaultXmlOptions = {
    wildcard: true
};
function getXmlOptions(param) {
    if (param) {
        if (typeof param === 'boolean') {
            return defaultXmlOptions;
        } else {
            return param;
        }
    } else {
        return emptyXmlOptions;
    }
}
function withMigration(migration, merge) {
    return function(base, extension) {
        return merge(migration(base), migration(extension));
    };
}
function withNoNegative(merge) {
    return function(base, extension) {
        var result = merge(base, extension);
        if (!result) {
            throw new Error("Syntax definition cannot be null or undefined.");
        }
        return result;
    };
}
function withPositive(positive, merge) {
    return function(base, extension) {
        if (extension === true) {
            return positive;
        }
        return merge(base === true ? positive : base, extension);
    };
}
function mergeSection(values) {
    return function(base, extension) {
        if (!extension || !base) {
            return extension;
        }
        if (typeof extension !== 'object' || extension === null) {
            throw new Error("Unexpected syntax definition extension type: ".concat(extension, "."));
        }
        var result = __assign({}, base);
        for(var _i = 0, _a = Object.entries(extension); _i < _a.length; _i++){
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (key === 'latest') {
                continue;
            }
            var mergeSchema = values[key];
            result[key] = mergeSchema(base[key], value);
        }
        return result;
    };
}
function replaceValueIfSpecified(base, extension) {
    if (extension !== undefined) {
        return extension;
    }
    return base;
}
function concatArray(base, extension) {
    if (!extension) {
        return base;
    }
    if (!base) {
        return extension;
    }
    return base.concat(extension);
}
function mergeDefinitions(base, extension) {
    if (!extension) {
        return base;
    }
    if (!base) {
        return extension;
    }
    var result = __assign({}, base);
    for(var _i = 0, _a = Object.entries(extension); _i < _a.length; _i++){
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (!value) {
            delete result[key];
            continue;
        }
        var baseValue = base[key];
        if (!baseValue) {
            result[key] = value;
            continue;
        }
        result[key] = baseValue.concat(value);
    }
    return result;
}
var extendSyntaxDefinition = withNoNegative(mergeSection({
    baseSyntax: replaceValueIfSpecified,
    modules: concatArray,
    tag: withPositive(defaultXmlOptions, mergeSection({
        wildcard: replaceValueIfSpecified
    })),
    ids: replaceValueIfSpecified,
    classNames: replaceValueIfSpecified,
    namespace: withPositive(defaultXmlOptions, mergeSection({
        wildcard: replaceValueIfSpecified
    })),
    combinators: concatArray,
    attributes: mergeSection({
        operators: concatArray,
        caseSensitivityModifiers: concatArray,
        unknownCaseSensitivityModifiers: replaceValueIfSpecified
    }),
    pseudoClasses: mergeSection({
        unknown: replaceValueIfSpecified,
        definitions: mergeDefinitions
    }),
    pseudoElements: mergeSection({
        unknown: replaceValueIfSpecified,
        notation: replaceValueIfSpecified,
        definitions: withMigration(function(definitions) {
            return Array.isArray(definitions) ? {
                NoArgument: definitions
            } : definitions;
        }, mergeDefinitions)
    })
}));
var css1SyntaxDefinition = {
    tag: {},
    ids: true,
    classNames: true,
    combinators: [],
    pseudoElements: {
        unknown: 'reject',
        notation: 'singleColon',
        definitions: [
            'first-letter',
            'first-line'
        ]
    },
    pseudoClasses: {
        unknown: 'reject',
        definitions: {
            NoArgument: [
                'link',
                'visited',
                'active'
            ]
        }
    }
};
var css2SyntaxDefinition = extendSyntaxDefinition(css1SyntaxDefinition, {
    tag: {
        wildcard: true
    },
    combinators: [
        '>',
        '+'
    ],
    attributes: {
        unknownCaseSensitivityModifiers: 'reject',
        operators: [
            '=',
            '~=',
            '|='
        ]
    },
    pseudoElements: {
        definitions: [
            'before',
            'after'
        ]
    },
    pseudoClasses: {
        unknown: 'reject',
        definitions: {
            NoArgument: [
                'hover',
                'focus',
                'first-child'
            ],
            String: [
                'lang'
            ]
        }
    }
});
var selectors3SyntaxDefinition = extendSyntaxDefinition(css2SyntaxDefinition, {
    namespace: {
        wildcard: true
    },
    combinators: [
        '~'
    ],
    attributes: {
        operators: [
            '^=',
            '$=',
            '*='
        ]
    },
    pseudoElements: {
        notation: 'both'
    },
    pseudoClasses: {
        definitions: {
            NoArgument: [
                'root',
                'last-child',
                'first-of-type',
                'last-of-type',
                'only-child',
                'only-of-type',
                'empty',
                'target',
                'enabled',
                'disabled',
                'checked',
                'indeterminate'
            ],
            Formula: [
                'nth-child',
                'nth-last-child',
                'nth-of-type',
                'nth-last-of-type'
            ],
            Selector: [
                'not'
            ]
        }
    }
});
var selectors4SyntaxDefinition = extendSyntaxDefinition(selectors3SyntaxDefinition, {
    combinators: [
        '||'
    ],
    attributes: {
        caseSensitivityModifiers: [
            'i',
            'I',
            's',
            'S'
        ]
    },
    pseudoClasses: {
        definitions: {
            NoArgument: [
                'any-link',
                'local-link',
                'target-within',
                'scope',
                'current',
                'past',
                'future',
                'focus-within',
                'focus-visible',
                'read-write',
                'read-only',
                'placeholder-shown',
                'default',
                'valid',
                'invalid',
                'in-range',
                'out-of-range',
                'required',
                'optional',
                'blank',
                'user-invalid',
                'playing',
                'paused',
                'autofill',
                'modal',
                'fullscreen',
                'picture-in-picture',
                'defined',
                'loading',
                'popover-open'
            ],
            Formula: [
                'nth-col',
                'nth-last-col'
            ],
            String: [
                'dir'
            ],
            FormulaOfSelector: [
                'nth-child',
                'nth-last-child'
            ],
            Selector: [
                'current',
                'is',
                'where',
                'has',
                'state'
            ]
        }
    },
    pseudoElements: {
        definitions: {
            NoArgument: [
                'marker'
            ]
        }
    }
});
var cssModules = {
    'css-position-1': {
        latest: false,
        pseudoClasses: {
            definitions: {
                NoArgument: [
                    'static',
                    'relative',
                    'absolute'
                ]
            }
        }
    },
    'css-position-2': {
        latest: false,
        pseudoClasses: {
            definitions: {
                NoArgument: [
                    'static',
                    'relative',
                    'absolute',
                    'fixed'
                ]
            }
        }
    },
    'css-position-3': {
        latest: false,
        pseudoClasses: {
            definitions: {
                NoArgument: [
                    'sticky',
                    'fixed',
                    'absolute',
                    'relative',
                    'static'
                ]
            }
        }
    },
    'css-position-4': {
        latest: true,
        pseudoClasses: {
            definitions: {
                NoArgument: [
                    'sticky',
                    'fixed',
                    'absolute',
                    'relative',
                    'static',
                    'initial'
                ]
            }
        }
    },
    'css-scoping-1': {
        latest: true,
        pseudoClasses: {
            definitions: {
                NoArgument: [
                    'host',
                    'host-context'
                ],
                Selector: [
                    'host',
                    'host-context'
                ]
            }
        },
        pseudoElements: {
            definitions: {
                Selector: [
                    'slotted'
                ]
            }
        }
    },
    'css-pseudo-4': {
        latest: true,
        pseudoElements: {
            definitions: {
                NoArgument: [
                    'marker',
                    'selection',
                    'target-text',
                    'search-text',
                    'spelling-error',
                    'grammar-error',
                    'backdrop',
                    'file-selector-button',
                    'prefix',
                    'postfix',
                    'placeholder',
                    'details-content'
                ],
                String: [
                    'highlight'
                ]
            }
        }
    },
    'css-shadow-parts-1': {
        latest: true,
        pseudoElements: {
            definitions: {
                String: [
                    'part'
                ]
            }
        }
    }
};
var latestSyntaxDefinition = __assign(__assign({}, selectors4SyntaxDefinition), {
    modules: Object.entries(cssModules).filter(function(_a) {
        var latest = _a[1].latest;
        return latest;
    }).map(function(_a) {
        var name = _a[0];
        return name;
    })
});
var progressiveSyntaxDefinition = extendSyntaxDefinition(latestSyntaxDefinition, {
    pseudoElements: {
        unknown: 'accept'
    },
    pseudoClasses: {
        unknown: 'accept'
    },
    attributes: {
        unknownCaseSensitivityModifiers: 'accept'
    }
});
var cssSyntaxDefinitions = {
    css1: css1SyntaxDefinition,
    css2: css2SyntaxDefinition,
    css3: selectors3SyntaxDefinition,
    'selectors-3': selectors3SyntaxDefinition,
    'selectors-4': selectors4SyntaxDefinition,
    latest: latestSyntaxDefinition,
    progressive: progressiveSyntaxDefinition
};
function buildPseudoLocationIndex() {
    var index = {
        pseudoClasses: {},
        pseudoElements: {}
    };
    // Add CSS Levels (excluding 'latest' and 'progressive')
    var cssLevels = [
        'css1',
        'css2',
        'css3',
        'selectors-3',
        'selectors-4'
    ];
    for(var _i = 0, cssLevels_1 = cssLevels; _i < cssLevels_1.length; _i++){
        var level = cssLevels_1[_i];
        var syntax = cssSyntaxDefinitions[level];
        // Process pseudo-classes
        if (syntax.pseudoClasses && typeof syntax.pseudoClasses === 'object') {
            var definitions = syntax.pseudoClasses.definitions;
            if (definitions) {
                for(var _a = 0, _b = Object.entries(definitions); _a < _b.length; _a++){
                    var _c = _b[_a], names = _c[1];
                    for(var _d = 0, names_1 = names; _d < names_1.length; _d++){
                        var name_1 = names_1[_d];
                        if (!index.pseudoClasses[name_1]) {
                            index.pseudoClasses[name_1] = [];
                        }
                        if (!index.pseudoClasses[name_1].includes(level)) {
                            index.pseudoClasses[name_1].push(level);
                        }
                    }
                }
            }
        }
        // Process pseudo-elements
        if (syntax.pseudoElements && typeof syntax.pseudoElements === 'object') {
            var definitions = syntax.pseudoElements.definitions;
            if (definitions) {
                if (Array.isArray(definitions)) {
                    for(var _e = 0, definitions_1 = definitions; _e < definitions_1.length; _e++){
                        var name_2 = definitions_1[_e];
                        if (!index.pseudoElements[name_2]) {
                            index.pseudoElements[name_2] = [];
                        }
                        if (!index.pseudoElements[name_2].includes(level)) {
                            index.pseudoElements[name_2].push(level);
                        }
                    }
                } else {
                    for(var _f = 0, _g = Object.values(definitions); _f < _g.length; _f++){
                        var names = _g[_f];
                        for(var _h = 0, names_2 = names; _h < names_2.length; _h++){
                            var name_3 = names_2[_h];
                            if (!index.pseudoElements[name_3]) {
                                index.pseudoElements[name_3] = [];
                            }
                            if (!index.pseudoElements[name_3].includes(level)) {
                                index.pseudoElements[name_3].push(level);
                            }
                        }
                    }
                }
            }
        }
    }
    // Add CSS Modules
    for(var _j = 0, _k = Object.entries(cssModules); _j < _k.length; _j++){
        var _l = _k[_j], moduleName = _l[0], moduleSyntax = _l[1];
        // Process pseudo-classes
        if (moduleSyntax.pseudoClasses && typeof moduleSyntax.pseudoClasses === 'object') {
            var definitions = moduleSyntax.pseudoClasses.definitions;
            if (definitions) {
                for(var _m = 0, _o = Object.values(definitions); _m < _o.length; _m++){
                    var names = _o[_m];
                    for(var _p = 0, names_3 = names; _p < names_3.length; _p++){
                        var name_4 = names_3[_p];
                        if (!index.pseudoClasses[name_4]) {
                            index.pseudoClasses[name_4] = [];
                        }
                        if (!index.pseudoClasses[name_4].includes(moduleName)) {
                            index.pseudoClasses[name_4].push(moduleName);
                        }
                    }
                }
            }
        }
        // Process pseudo-elements
        if (moduleSyntax.pseudoElements && typeof moduleSyntax.pseudoElements === 'object') {
            var definitions = moduleSyntax.pseudoElements.definitions;
            if (definitions) {
                if (Array.isArray(definitions)) {
                    for(var _q = 0, definitions_2 = definitions; _q < definitions_2.length; _q++){
                        var name_5 = definitions_2[_q];
                        if (!index.pseudoElements[name_5]) {
                            index.pseudoElements[name_5] = [];
                        }
                        if (!index.pseudoElements[name_5].includes(moduleName)) {
                            index.pseudoElements[name_5].push(moduleName);
                        }
                    }
                } else {
                    for(var _r = 0, _s = Object.values(definitions); _r < _s.length; _r++){
                        var names = _s[_r];
                        for(var _t = 0, names_4 = names; _t < names_4.length; _t++){
                            var name_6 = names_4[_t];
                            if (!index.pseudoElements[name_6]) {
                                index.pseudoElements[name_6] = [];
                            }
                            if (!index.pseudoElements[name_6].includes(moduleName)) {
                                index.pseudoElements[name_6].push(moduleName);
                            }
                        }
                    }
                }
            }
        }
    }
    return index;
}
var pseudoLocationIndex = buildPseudoLocationIndex();
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "digitsChars",
    ()=>digitsChars,
    "escapeIdentifier",
    ()=>escapeIdentifier,
    "escapeString",
    ()=>escapeString,
    "identEscapeChars",
    ()=>identEscapeChars,
    "isHex",
    ()=>isHex,
    "isIdent",
    ()=>isIdent,
    "isIdentStart",
    ()=>isIdentStart,
    "maxHexLength",
    ()=>maxHexLength,
    "quoteChars",
    ()=>quoteChars,
    "stringRenderEscapeChars",
    ()=>stringRenderEscapeChars,
    "whitespaceChars",
    ()=>whitespaceChars
]);
function isIdentStart(c) {
    return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c === '-' || c === '_' || c === '\\' || c >= '\u00a0';
}
function isIdent(c) {
    return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9' || c === '-' || c === '_' || c >= '\u00a0';
}
function isHex(c) {
    return c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F' || c >= '0' && c <= '9';
}
var identEscapeChars = {
    '!': true,
    '"': true,
    '#': true,
    $: true,
    '%': true,
    '&': true,
    "'": true,
    '(': true,
    ')': true,
    '*': true,
    '+': true,
    ',': true,
    '.': true,
    '/': true,
    ';': true,
    '<': true,
    '=': true,
    '>': true,
    '?': true,
    '@': true,
    '[': true,
    '\\': true,
    ']': true,
    '^': true,
    '`': true,
    '{': true,
    '|': true,
    '}': true,
    '~': true
};
var stringRenderEscapeChars = {
    '\n': true,
    '\r': true,
    '\t': true,
    '\f': true,
    '\v': true
};
var whitespaceChars = {
    ' ': true,
    '\t': true,
    '\n': true,
    '\r': true,
    '\f': true
};
var quoteChars = {
    '"': true,
    "'": true
};
var digitsChars = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true
};
var maxHexLength = 6;
function escapeIdentifier(s) {
    var len = s.length;
    var result = '';
    var i = 0;
    while(i < len){
        var chr = s.charAt(i);
        if (identEscapeChars[chr] || chr === '-' && i === 1 && s.charAt(0) === '-') {
            result += '\\' + chr;
        } else {
            if (chr === '-' || chr === '_' || chr >= 'A' && chr <= 'Z' || chr >= 'a' && chr <= 'z' || chr >= '0' && chr <= '9' && i !== 0 && !(i === 1 && s.charAt(0) === '-')) {
                result += chr;
            } else {
                var charCode = chr.charCodeAt(0);
                if ((charCode & 0xf800) === 0xd800) {
                    var extraCharCode = s.charCodeAt(i++);
                    if ((charCode & 0xfc00) !== 0xd800 || (extraCharCode & 0xfc00) !== 0xdc00) {
                        throw Error('UCS-2(decode): illegal sequence');
                    }
                    charCode = ((charCode & 0x3ff) << 10) + (extraCharCode & 0x3ff) + 0x10000;
                }
                result += '\\' + charCode.toString(16) + ' ';
            }
        }
        i++;
    }
    return result.trim();
}
function escapeString(s) {
    var len = s.length;
    var result = '';
    var i = 0;
    while(i < len){
        var chr = s.charAt(i);
        if (chr === '"') {
            chr = '\\"';
        } else if (chr === '\\') {
            chr = '\\\\';
        } else if (stringRenderEscapeChars[chr]) {
            chr = '\\' + chr.charCodeAt(0).toString(16) + (i === len - 1 ? '' : ' ');
        }
        result += chr;
        i++;
    }
    return "\"".concat(result, "\"");
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/parser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createParser",
    ()=>createParser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$indexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/indexes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$pseudo$2d$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/pseudo-signatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$syntax$2d$definitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/syntax-definitions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/utils.js [app-client] (ecmascript)");
;
;
;
;
var errorPrefix = "css-selector-parser parse error: ";
function createParser(options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.syntax, syntax = _a === void 0 ? 'latest' : _a, substitutes = options.substitutes, _b = options.strict, strict = _b === void 0 ? true : _b, modules = options.modules;
    var syntaxDefinition = typeof syntax === 'object' ? syntax : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$syntax$2d$definitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cssSyntaxDefinitions"][syntax];
    if (syntaxDefinition.baseSyntax) {
        syntaxDefinition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$syntax$2d$definitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendSyntaxDefinition"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$syntax$2d$definitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cssSyntaxDefinitions"][syntaxDefinition.baseSyntax], syntaxDefinition);
    }
    // Apply modules from syntax definition
    if (syntaxDefinition.modules && syntaxDefinition.modules.length > 0) {
        for(var _i = 0, _c = syntaxDefinition.modules; _i < _c.length; _i++){
            var module_1 = _c[_i];
            var moduleSyntax = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$syntax$2d$definitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cssModules"][module_1];
            if (moduleSyntax) {
                syntaxDefinition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$syntax$2d$definitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendSyntaxDefinition"])(moduleSyntax, syntaxDefinition);
            }
        }
    }
    // Apply additional modules if specified from options
    if (modules && modules.length > 0) {
        for(var _d = 0, modules_1 = modules; _d < modules_1.length; _d++){
            var module_2 = modules_1[_d];
            var moduleSyntax = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$syntax$2d$definitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cssModules"][module_2];
            if (moduleSyntax) {
                syntaxDefinition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$syntax$2d$definitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendSyntaxDefinition"])(moduleSyntax, syntaxDefinition);
            }
        }
    }
    var _e = syntaxDefinition.tag ? [
        true,
        Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$syntax$2d$definitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXmlOptions"])(syntaxDefinition.tag).wildcard)
    ] : [
        false,
        false
    ], tagNameEnabled = _e[0], tagNameWildcardEnabled = _e[1];
    var idEnabled = Boolean(syntaxDefinition.ids);
    var classNamesEnabled = Boolean(syntaxDefinition.classNames);
    var namespaceEnabled = Boolean(syntaxDefinition.namespace);
    var namespaceWildcardEnabled = syntaxDefinition.namespace && (syntaxDefinition.namespace === true || syntaxDefinition.namespace.wildcard === true);
    if (namespaceEnabled && !tagNameEnabled) {
        throw new Error("".concat(errorPrefix, "Namespaces cannot be enabled while tags are disabled."));
    }
    var substitutesEnabled = Boolean(substitutes);
    var combinatorsIndex = syntaxDefinition.combinators ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$indexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMulticharIndex"])(syntaxDefinition.combinators) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$indexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyMulticharIndex"];
    var _f = syntaxDefinition.attributes ? [
        true,
        syntaxDefinition.attributes.operators ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$indexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMulticharIndex"])(syntaxDefinition.attributes.operators) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$indexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyMulticharIndex"],
        syntaxDefinition.attributes.caseSensitivityModifiers ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$indexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRegularIndex"])(syntaxDefinition.attributes.caseSensitivityModifiers) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$indexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyRegularIndex"],
        syntaxDefinition.attributes.unknownCaseSensitivityModifiers === 'accept'
    ] : [
        false,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$indexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyMulticharIndex"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$indexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyRegularIndex"],
        false
    ], attributesEnabled = _f[0], attributesOperatorsIndex = _f[1], attributesCaseSensitivityModifiers = _f[2], attributesAcceptUnknownCaseSensitivityModifiers = _f[3];
    var attributesCaseSensitivityModifiersEnabled = attributesAcceptUnknownCaseSensitivityModifiers || Object.keys(attributesCaseSensitivityModifiers).length > 0;
    var _g = syntaxDefinition.pseudoClasses ? [
        true,
        syntaxDefinition.pseudoClasses.definitions ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$pseudo$2d$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculatePseudoSignatures"])(syntaxDefinition.pseudoClasses.definitions) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$pseudo$2d$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyPseudoSignatures"],
        syntaxDefinition.pseudoClasses.unknown === 'accept'
    ] : [
        false,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$pseudo$2d$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyPseudoSignatures"],
        false
    ], pseudoClassesEnabled = _g[0], pseudoClassesDefinitions = _g[1], pseudoClassesAcceptUnknown = _g[2];
    var _h = syntaxDefinition.pseudoElements ? [
        true,
        syntaxDefinition.pseudoElements.notation === 'singleColon' || syntaxDefinition.pseudoElements.notation === 'both',
        !syntaxDefinition.pseudoElements.notation || syntaxDefinition.pseudoElements.notation === 'doubleColon' || syntaxDefinition.pseudoElements.notation === 'both',
        syntaxDefinition.pseudoElements.definitions ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$pseudo$2d$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculatePseudoSignatures"])(Array.isArray(syntaxDefinition.pseudoElements.definitions) ? {
            NoArgument: syntaxDefinition.pseudoElements.definitions
        } : syntaxDefinition.pseudoElements.definitions) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$pseudo$2d$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyPseudoSignatures"],
        syntaxDefinition.pseudoElements.unknown === 'accept'
    ] : [
        false,
        false,
        false,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$pseudo$2d$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyPseudoSignatures"],
        false
    ], pseudoElementsEnabled = _h[0], pseudoElementsSingleColonNotationEnabled = _h[1], pseudoElementsDoubleColonNotationEnabled = _h[2], pseudoElementsDefinitions = _h[3], pseudoElementsAcceptUnknown = _h[4];
    var str = '';
    var l = str.length;
    var pos = 0;
    var chr = '';
    var is = function(comparison) {
        return chr === comparison;
    };
    var isTagStart = function() {
        return is('*') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIdentStart"])(chr);
    };
    var rewind = function(newPos) {
        pos = newPos;
        chr = str.charAt(pos);
    };
    var next = function() {
        pos++;
        chr = str.charAt(pos);
    };
    var readAndNext = function() {
        var current = chr;
        pos++;
        chr = str.charAt(pos);
        return current;
    };
    /** @throws ParserError */ function fail(errorMessage) {
        var position = Math.min(l - 1, pos);
        var error = new Error("".concat(errorPrefix).concat(errorMessage, " Pos: ").concat(position, "."));
        error.position = position;
        error.name = 'ParserError';
        throw error;
    }
    function assert(condition, errorMessage) {
        if (!condition) {
            return fail(errorMessage);
        }
    }
    var assertNonEof = function() {
        assert(pos < l, 'Unexpected end of input.');
    };
    var isEof = function() {
        return pos >= l;
    };
    var pass = function(character) {
        assert(pos < l, "Expected \"".concat(character, "\" but end of input reached."));
        assert(chr === character, "Expected \"".concat(character, "\" but \"").concat(chr, "\" found."));
        pos++;
        chr = str.charAt(pos);
    };
    function matchMulticharIndex(index) {
        var match = matchMulticharIndexPos(index, pos);
        if (match) {
            pos += match.length;
            chr = str.charAt(pos);
            return match;
        }
    }
    function matchMulticharIndexPos(index, subPos) {
        var char = str.charAt(subPos);
        var charIndex = index[char];
        if (charIndex) {
            var subMatch = matchMulticharIndexPos(charIndex.chars, subPos + 1);
            if (subMatch) {
                return subMatch;
            }
            if (charIndex.self) {
                return charIndex.self;
            }
        }
    }
    /**
     * @see https://www.w3.org/TR/css-syntax/#hex-digit-diagram
     */ function parseHex() {
        var hex = readAndNext();
        var count = 1;
        while((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(chr) && count < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxHexLength"]){
            hex += readAndNext();
            count++;
        }
        skipSingleWhitespace();
        return String.fromCharCode(parseInt(hex, 16));
    }
    /**
     * @see https://www.w3.org/TR/css-syntax/#string-token-diagram
     */ function parseString(quote) {
        var result = '';
        pass(quote);
        while(pos < l){
            if (is(quote)) {
                next();
                return result;
            } else if (is('\\')) {
                next();
                if (is(quote)) {
                    result += quote;
                    next();
                } else if (chr === '\n' || chr === '\f') {
                    next();
                } else if (chr === '\r') {
                    next();
                    if (is('\n')) {
                        next();
                    }
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(chr)) {
                    result += parseHex();
                } else {
                    result += chr;
                    next();
                }
            } else {
                result += chr;
                next();
            }
        }
        return result;
    }
    /**
     * @see https://www.w3.org/TR/css-syntax/#ident-token-diagram
     */ function parseIdentifier() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIdentStart"])(chr)) {
            return null;
        }
        var result = '';
        while(is('-')){
            result += chr;
            next();
        }
        if (result === '-' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIdent"])(chr) && !is('\\')) {
            fail('Identifiers cannot consist of a single hyphen.');
        }
        if (strict && result.length >= 2) {
            // Checking this only for strict mode since browsers work fine with these identifiers.
            fail('Identifiers cannot start with two hyphens with strict mode on.');
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["digitsChars"][chr]) {
            fail('Identifiers cannot start with hyphens followed by digits.');
        }
        while(pos < l){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIdent"])(chr)) {
                result += readAndNext();
            } else if (is('\\')) {
                next();
                assertNonEof();
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(chr)) {
                    result += parseHex();
                } else {
                    result += readAndNext();
                }
            } else {
                break;
            }
        }
        return result;
    }
    function parsePseudoClassString() {
        var result = '';
        while(pos < l){
            if (is(')')) {
                break;
            } else if (is('\\')) {
                next();
                if (isEof() && !strict) {
                    return (result + '\\').trim();
                }
                assertNonEof();
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(chr)) {
                    result += parseHex();
                } else {
                    result += readAndNext();
                }
            } else {
                result += readAndNext();
            }
        }
        return result.trim();
    }
    function skipSingleWhitespace() {
        if (chr === ' ' || chr === '\t' || chr === '\f' || chr === '\n') {
            next();
            return;
        }
        if (chr === '\r') {
            next();
        }
        if (chr === '\n') {
            next();
        }
    }
    function skipWhitespace() {
        while(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whitespaceChars"][chr]){
            next();
        }
    }
    function parseSelector(relative) {
        if (relative === void 0) {
            relative = false;
        }
        skipWhitespace();
        var rules = [
            parseRule(relative)
        ];
        while(is(',')){
            next();
            skipWhitespace();
            rules.push(parseRule(relative));
        }
        return {
            type: 'Selector',
            rules: rules
        };
    }
    function parseAttribute() {
        pass('[');
        skipWhitespace();
        var attr;
        if (is('|')) {
            assert(namespaceEnabled, 'Namespaces are not enabled.');
            next();
            var name_1 = parseIdentifier();
            assert(name_1, 'Expected attribute name.');
            attr = {
                type: 'Attribute',
                name: name_1,
                namespace: {
                    type: 'NoNamespace'
                }
            };
        } else if (is('*')) {
            assert(namespaceEnabled, 'Namespaces are not enabled.');
            assert(namespaceWildcardEnabled, 'Wildcard namespace is not enabled.');
            next();
            pass('|');
            var name_2 = parseIdentifier();
            assert(name_2, 'Expected attribute name.');
            attr = {
                type: 'Attribute',
                name: name_2,
                namespace: {
                    type: 'WildcardNamespace'
                }
            };
        } else {
            var identifier = parseIdentifier();
            assert(identifier, 'Expected attribute name.');
            attr = {
                type: 'Attribute',
                name: identifier
            };
            if (is('|')) {
                var savedPos = pos;
                next();
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIdentStart"])(chr)) {
                    assert(namespaceEnabled, 'Namespaces are not enabled.');
                    var name_3 = parseIdentifier();
                    assert(name_3, 'Expected attribute name.');
                    attr = {
                        type: 'Attribute',
                        name: name_3,
                        namespace: {
                            type: 'NamespaceName',
                            name: identifier
                        }
                    };
                } else {
                    rewind(savedPos);
                }
            }
        }
        assert(attr.name, 'Expected attribute name.');
        skipWhitespace();
        if (isEof() && !strict) {
            return attr;
        }
        if (is(']')) {
            next();
        } else {
            attr.operator = matchMulticharIndex(attributesOperatorsIndex);
            assert(attr.operator, 'Expected a valid attribute selector operator.');
            skipWhitespace();
            assertNonEof();
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quoteChars"][chr]) {
                attr.value = {
                    type: 'String',
                    value: parseString(chr)
                };
            } else if (substitutesEnabled && is('$')) {
                next();
                var name_4 = parseIdentifier();
                assert(name_4, 'Expected substitute name.');
                attr.value = {
                    type: 'Substitution',
                    name: name_4
                };
            } else {
                var value = parseIdentifier();
                assert(value, 'Expected attribute value.');
                attr.value = {
                    type: 'String',
                    value: value
                };
            }
            skipWhitespace();
            if (isEof() && !strict) {
                return attr;
            }
            if (!is(']')) {
                var caseSensitivityModifier = parseIdentifier();
                assert(caseSensitivityModifier, 'Expected end of attribute selector.');
                attr.caseSensitivityModifier = caseSensitivityModifier;
                assert(attributesCaseSensitivityModifiersEnabled, 'Attribute case sensitivity modifiers are not enabled.');
                assert(attributesAcceptUnknownCaseSensitivityModifiers || attributesCaseSensitivityModifiers[attr.caseSensitivityModifier], 'Unknown attribute case sensitivity modifier.');
                skipWhitespace();
                if (isEof() && !strict) {
                    return attr;
                }
            }
            pass(']');
        }
        return attr;
    }
    function parseNumber() {
        var result = '';
        while(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["digitsChars"][chr]){
            result += readAndNext();
        }
        assert(result !== '', 'Formula parse error.');
        return parseInt(result);
    }
    var isNumberStart = function() {
        return is('-') || is('+') || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["digitsChars"][chr];
    };
    function parseFormula() {
        if (is('e') || is('o')) {
            var ident = parseIdentifier();
            if (ident === 'even') {
                skipWhitespace();
                return [
                    2,
                    0
                ];
            }
            if (ident === 'odd') {
                skipWhitespace();
                return [
                    2,
                    1
                ];
            }
        }
        var firstNumber = null;
        var firstNumberMultiplier = 1;
        if (is('-')) {
            next();
            firstNumberMultiplier = -1;
        }
        if (isNumberStart()) {
            if (is('+')) {
                next();
            }
            firstNumber = parseNumber();
            if (!is('\\') && !is('n')) {
                return [
                    0,
                    firstNumber * firstNumberMultiplier
                ];
            }
        }
        if (firstNumber === null) {
            firstNumber = 1;
        }
        firstNumber *= firstNumberMultiplier;
        var identifier;
        if (is('\\')) {
            next();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(chr)) {
                identifier = parseHex();
            } else {
                identifier = readAndNext();
            }
        } else {
            identifier = readAndNext();
        }
        assert(identifier === 'n', 'Formula parse error: expected "n".');
        skipWhitespace();
        if (is('+') || is('-')) {
            var sign = is('+') ? 1 : -1;
            next();
            skipWhitespace();
            return [
                firstNumber,
                sign * parseNumber()
            ];
        } else {
            return [
                firstNumber,
                0
            ];
        }
    }
    function parsePseudoArgument(pseudoName, type, signature) {
        var argument;
        if (is('(')) {
            next();
            skipWhitespace();
            if (substitutesEnabled && is('$')) {
                next();
                var name_5 = parseIdentifier();
                assert(name_5, 'Expected substitute name.');
                argument = {
                    type: 'Substitution',
                    name: name_5
                };
            } else if (signature.type === 'String') {
                argument = {
                    type: 'String',
                    value: parsePseudoClassString()
                };
                assert(argument.value, "Expected ".concat(type, " argument value."));
            } else if (signature.type === 'Selector') {
                argument = parseSelector(true);
            } else if (signature.type === 'Formula') {
                var _a = parseFormula(), a = _a[0], b = _a[1];
                argument = {
                    type: 'Formula',
                    a: a,
                    b: b
                };
                if (signature.ofSelector) {
                    skipWhitespace();
                    if (is('o') || is('\\')) {
                        var ident = parseIdentifier();
                        assert(ident === 'of', 'Formula of selector parse error.');
                        skipWhitespace();
                        argument = {
                            type: 'FormulaOfSelector',
                            a: a,
                            b: b,
                            selector: parseRule()
                        };
                    }
                }
            } else {
                return fail("Invalid ".concat(type, " signature."));
            }
            skipWhitespace();
            if (isEof() && !strict) {
                return argument;
            }
            pass(')');
        } else {
            assert(signature.optional, "Argument is required for ".concat(type, " \"").concat(pseudoName, "\"."));
        }
        return argument;
    }
    function parseTagName() {
        if (is('*')) {
            assert(tagNameWildcardEnabled, 'Wildcard tag name is not enabled.');
            next();
            return {
                type: 'WildcardTag'
            };
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIdentStart"])(chr)) {
            assert(tagNameEnabled, 'Tag names are not enabled.');
            var name_6 = parseIdentifier();
            assert(name_6, 'Expected tag name.');
            return {
                type: 'TagName',
                name: name_6
            };
        } else {
            return fail('Expected tag name.');
        }
    }
    function parseTagNameWithNamespace() {
        if (is('*')) {
            var savedPos = pos;
            next();
            if (!is('|')) {
                rewind(savedPos);
                return parseTagName();
            }
            next();
            if (!isTagStart()) {
                rewind(savedPos);
                return parseTagName();
            }
            assert(namespaceEnabled, 'Namespaces are not enabled.');
            assert(namespaceWildcardEnabled, 'Wildcard namespace is not enabled.');
            var tagName = parseTagName();
            tagName.namespace = {
                type: 'WildcardNamespace'
            };
            return tagName;
        } else if (is('|')) {
            assert(namespaceEnabled, 'Namespaces are not enabled.');
            next();
            var tagName = parseTagName();
            tagName.namespace = {
                type: 'NoNamespace'
            };
            return tagName;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIdentStart"])(chr)) {
            var identifier = parseIdentifier();
            assert(identifier, 'Expected tag name.');
            if (!is('|')) {
                assert(tagNameEnabled, 'Tag names are not enabled.');
                return {
                    type: 'TagName',
                    name: identifier
                };
            }
            var savedPos = pos;
            next();
            if (!isTagStart()) {
                rewind(savedPos);
                return {
                    type: 'TagName',
                    name: identifier
                };
            }
            assert(namespaceEnabled, 'Namespaces are not enabled.');
            var tagName = parseTagName();
            tagName.namespace = {
                type: 'NamespaceName',
                name: identifier
            };
            return tagName;
        } else {
            return fail('Expected tag name.');
        }
    }
    function parseRule(relative) {
        var _a, _b;
        if (relative === void 0) {
            relative = false;
        }
        var rule = {
            type: 'Rule',
            items: []
        };
        if (relative) {
            var combinator = matchMulticharIndex(combinatorsIndex);
            if (combinator) {
                rule.combinator = combinator;
                skipWhitespace();
            }
        }
        while(pos < l){
            if (isTagStart()) {
                assert(rule.items.length === 0, 'Unexpected tag/namespace start.');
                rule.items.push(parseTagNameWithNamespace());
            } else if (is('|')) {
                var savedPos = pos;
                next();
                if (isTagStart()) {
                    assert(rule.items.length === 0, 'Unexpected tag/namespace start.');
                    rewind(savedPos);
                    rule.items.push(parseTagNameWithNamespace());
                } else {
                    rewind(savedPos);
                    break;
                }
            } else if (is('.')) {
                assert(classNamesEnabled, 'Class names are not enabled.');
                next();
                var className = parseIdentifier();
                assert(className, 'Expected class name.');
                rule.items.push({
                    type: 'ClassName',
                    name: className
                });
            } else if (is('#')) {
                assert(idEnabled, 'IDs are not enabled.');
                next();
                var idName = parseIdentifier();
                assert(idName, 'Expected ID name.');
                rule.items.push({
                    type: 'Id',
                    name: idName
                });
            } else if (is('[')) {
                assert(attributesEnabled, 'Attributes are not enabled.');
                rule.items.push(parseAttribute());
            } else if (is(':')) {
                var isDoubleColon = false;
                var isPseudoElement = false;
                next();
                if (is(':')) {
                    assert(pseudoElementsEnabled, 'Pseudo elements are not enabled.');
                    assert(pseudoElementsDoubleColonNotationEnabled, 'Pseudo elements double colon notation is not enabled.');
                    isDoubleColon = true;
                    next();
                }
                var pseudoName = parseIdentifier();
                assert(isDoubleColon || pseudoName, 'Expected pseudo-class name.');
                assert(!isDoubleColon || pseudoName, 'Expected pseudo-element name.');
                assert(pseudoName, 'Expected pseudo-class name.');
                if (!isDoubleColon || pseudoElementsAcceptUnknown || Object.prototype.hasOwnProperty.call(pseudoElementsDefinitions, pseudoName)) {
                // All good
                } else {
                    // Generate a helpful error message with location information
                    var locations = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$syntax$2d$definitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pseudoLocationIndex"].pseudoElements[pseudoName];
                    var errorMessage = "Unknown pseudo-element \"".concat(pseudoName, "\"");
                    if (locations && locations.length > 0) {
                        errorMessage += ". It is defined in: ".concat(locations.join(', '));
                    }
                    fail(errorMessage + '.');
                }
                isPseudoElement = pseudoElementsEnabled && (isDoubleColon || !isDoubleColon && pseudoElementsSingleColonNotationEnabled && Object.prototype.hasOwnProperty.call(pseudoElementsDefinitions, pseudoName));
                if (isPseudoElement) {
                    var signature = (_a = pseudoElementsDefinitions[pseudoName]) !== null && _a !== void 0 ? _a : pseudoElementsAcceptUnknown && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$pseudo$2d$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPseudoSignature"];
                    var pseudoElement = {
                        type: 'PseudoElement',
                        name: pseudoName
                    };
                    var argument = parsePseudoArgument(pseudoName, 'pseudo-element', signature);
                    if (argument) {
                        assert(argument.type !== 'Formula' && argument.type !== 'FormulaOfSelector', 'Pseudo-elements cannot have formula argument.');
                        pseudoElement.argument = argument;
                    }
                    rule.items.push(pseudoElement);
                } else {
                    assert(pseudoClassesEnabled, 'Pseudo-classes are not enabled.');
                    var signature = (_b = pseudoClassesDefinitions[pseudoName]) !== null && _b !== void 0 ? _b : pseudoClassesAcceptUnknown && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$pseudo$2d$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPseudoSignature"];
                    if (signature) {
                    // All good
                    } else {
                        // Generate a helpful error message with location information
                        var locations = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$syntax$2d$definitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pseudoLocationIndex"].pseudoClasses[pseudoName];
                        var errorMessage = "Unknown pseudo-class: \"".concat(pseudoName, "\"");
                        if (locations && locations.length > 0) {
                            errorMessage += ". It is defined in: ".concat(locations.join(', '));
                        }
                        fail(errorMessage + '.');
                    }
                    var argument = parsePseudoArgument(pseudoName, 'pseudo-class', signature);
                    var pseudoClass = {
                        type: 'PseudoClass',
                        name: pseudoName
                    };
                    if (argument) {
                        pseudoClass.argument = argument;
                    }
                    rule.items.push(pseudoClass);
                }
            } else {
                break;
            }
        }
        if (rule.items.length === 0) {
            if (isEof()) {
                return fail('Expected rule but end of input reached.');
            } else {
                return fail("Expected rule but \"".concat(chr, "\" found."));
            }
        }
        skipWhitespace();
        if (!isEof() && !is(',') && !is(')')) {
            var combinator = matchMulticharIndex(combinatorsIndex);
            skipWhitespace();
            rule.nestedRule = parseRule();
            rule.nestedRule.combinator = combinator;
        }
        return rule;
    }
    return function(input) {
        // noinspection SuspiciousTypeOfGuard
        if (typeof input !== 'string') {
            throw new Error("".concat(errorPrefix, "Expected string input."));
        }
        str = input;
        l = str.length;
        pos = 0;
        chr = str.charAt(0);
        return parseSelector();
    };
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/render.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "render",
    ()=>render
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/utils.js [app-client] (ecmascript)");
;
var errorPrefix = "css-selector-parser render error: ";
function renderNamespace(namespace) {
    if (namespace.type === 'WildcardNamespace') {
        return '*|';
    } else if (namespace.type === 'NamespaceName') {
        return "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeIdentifier"])(namespace.name), "|");
    } else if (namespace.type === 'NoNamespace') {
        return '|';
    }
    throw new Error("".concat(errorPrefix, "Unknown namespace type: ").concat(namespace.type, "."));
}
function renderSubstitution(sub) {
    return "$".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeIdentifier"])(sub.name));
}
function renderFormula(a, b) {
    if (a) {
        var result = "".concat(a === 1 ? '' : a === -1 ? '-' : a, "n");
        if (b) {
            result += "".concat(b > 0 ? '+' : '').concat(b);
        }
        return result;
    } else {
        return String(b);
    }
}
function render(entity) {
    if (entity.type === 'Selector') {
        return entity.rules.map(render).join(', ');
    }
    if (entity.type === 'Rule') {
        var result = '';
        var items = entity.items, combinator = entity.combinator, nestedRule = entity.nestedRule;
        if (combinator) {
            result += "".concat(combinator, " ");
        }
        for(var _i = 0, items_1 = items; _i < items_1.length; _i++){
            var item = items_1[_i];
            result += render(item);
        }
        if (nestedRule) {
            result += " ".concat(render(nestedRule));
        }
        return result;
    } else if (entity.type === 'TagName' || entity.type === 'WildcardTag') {
        var result = '';
        var namespace = entity.namespace;
        if (namespace) {
            result += renderNamespace(namespace);
        }
        if (entity.type === 'TagName') {
            result += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeIdentifier"])(entity.name);
        } else if (entity.type === 'WildcardTag') {
            result += '*';
        }
        return result;
    } else if (entity.type === 'Id') {
        return "#".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeIdentifier"])(entity.name));
    } else if (entity.type === 'ClassName') {
        return ".".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeIdentifier"])(entity.name));
    } else if (entity.type === 'Attribute') {
        var name_1 = entity.name, namespace = entity.namespace, operator = entity.operator, value = entity.value, caseSensitivityModifier = entity.caseSensitivityModifier;
        var result = '[';
        if (namespace) {
            result += renderNamespace(namespace);
        }
        result += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeIdentifier"])(name_1);
        if (operator && value) {
            result += operator;
            if (value.type === 'String') {
                result += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeString"])(value.value);
            } else if (value.type === 'Substitution') {
                result += renderSubstitution(value);
            } else {
                throw new Error("Unknown attribute value type: ".concat(value.type, "."));
            }
            if (caseSensitivityModifier) {
                result += " ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeIdentifier"])(caseSensitivityModifier));
            }
        }
        result += ']';
        return result;
    } else if (entity.type === 'PseudoClass') {
        var name_2 = entity.name, argument = entity.argument;
        var result = ":".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeIdentifier"])(name_2));
        if (argument) {
            result += "(".concat(argument.type === 'String' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeIdentifier"])(argument.value) : render(argument), ")");
        }
        return result;
    } else if (entity.type === 'PseudoElement') {
        var name_3 = entity.name, argument = entity.argument;
        var result = "::".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeIdentifier"])(name_3));
        if (argument) {
            result += "(".concat(argument.type === 'String' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeIdentifier"])(argument.value) : render(argument), ")");
        }
        return result;
    } else if (entity.type === 'String') {
        throw new Error("".concat(errorPrefix, "String cannot be rendered outside of context."));
    } else if (entity.type === 'Formula') {
        return renderFormula(entity.a, entity.b);
    } else if (entity.type === 'FormulaOfSelector') {
        return renderFormula(entity.a, entity.b) + ' of ' + render(entity.selector);
    } else if (entity.type === 'Substitution') {
        return "$".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeIdentifier"])(entity.name));
    }
    throw new Error("Unknown type specified to render method: ".concat(entity.type, "."));
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/ast.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ast",
    ()=>ast
]);
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function astMethods(type) {
    return function(generatorName, checkerName) {
        var _a;
        return _a = {}, _a[generatorName] = function(props) {
            return __assign({
                type: type
            }, props);
        }, _a[checkerName] = function(entity) {
            return typeof entity === 'object' && entity !== null && entity.type === type;
        }, _a;
    };
}
var ast = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, astMethods('Selector')('selector', 'isSelector')), astMethods('Rule')('rule', 'isRule')), astMethods('TagName')('tagName', 'isTagName')), astMethods('Id')('id', 'isId')), astMethods('ClassName')('className', 'isClassName')), astMethods('WildcardTag')('wildcardTag', 'isWildcardTag')), astMethods('NamespaceName')('namespaceName', 'isNamespaceName')), astMethods('WildcardNamespace')('wildcardNamespace', 'isWildcardNamespace')), astMethods('NoNamespace')('noNamespace', 'isNoNamespace')), astMethods('Attribute')('attribute', 'isAttribute')), astMethods('PseudoClass')('pseudoClass', 'isPseudoClass')), astMethods('PseudoElement')('pseudoElement', 'isPseudoElement')), astMethods('String')('string', 'isString')), astMethods('Formula')('formula', 'isFormula')), astMethods('FormulaOfSelector')('formulaOfSelector', 'isFormulaOfSelector')), astMethods('Substitution')('substitution', 'isSubstitution'));
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/ast.js [app-client] (ecmascript)");
;
;
;
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/parse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {AstSelector} from 'css-selector-parser'
 */ __turbopack_context__.s([
    "parse",
    ()=>parse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/css-selector-parser/dist/mjs/parser.js [app-client] (ecmascript)");
;
const cssSelectorParse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$css$2d$selector$2d$parser$2f$dist$2f$mjs$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createParser"])({
    syntax: 'selectors-4'
});
function parse(selector) {
    if (typeof selector !== 'string') {
        throw new TypeError('Expected `string` as selector, not `' + selector + '`');
    }
    return cssSelectorParse(selector);
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/enter-state.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Visitor} from 'unist-util-visit'
 * @import {ElementContent, Nodes} from 'hast'
 * @import {Direction, State} from './index.js'
 */ __turbopack_context__.s([
    "enterState",
    ()=>enterState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$direction$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/direction/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-string/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/property-information/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-visit-parents/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-visit/lib/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
function enterState(state, node) {
    const schema = state.schema;
    const language = state.language;
    const currentDirection = state.direction;
    const editableOrEditingHost = state.editableOrEditingHost;
    /** @type {Direction | undefined} */ let directionInferred;
    if (node.type === 'element') {
        const lang = node.properties.xmlLang || node.properties.lang;
        const type = node.properties.type || 'text';
        const direction = directionProperty(node);
        if (lang !== null && lang !== undefined) {
            state.language = String(lang);
        }
        if (schema && schema.space === 'html') {
            if (node.properties.contentEditable === 'true') {
                state.editableOrEditingHost = true;
            }
            if (node.tagName === 'svg') {
                state.schema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"];
            }
            // See: <https://html.spec.whatwg.org/#the-directionality>.
            // Explicit `[dir=rtl]`.
            if (direction === 'rtl') {
                directionInferred = direction;
            } else if (// Explicit `[dir=ltr]`.
            direction === 'ltr' || direction !== 'auto' && node.tagName === 'html' || direction !== 'auto' && node.tagName === 'input' && type === 'tel') {
                directionInferred = 'ltr';
            // `[dir=auto]` or `bdi` with an invalid or no `[dir]`.
            } else if (direction === 'auto' || node.tagName === 'bdi') {
                if (node.tagName === 'textarea') {
                    // Check contents of `<textarea>`.
                    directionInferred = directionBidi((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(node));
                } else if (node.tagName === 'input' && (type === 'email' || type === 'search' || type === 'tel' || type === 'text')) {
                    // Check value of `<input>`.
                    directionInferred = node.properties.value ? directionBidi(String(node.properties.value)) : 'ltr';
                } else {
                    // Check text nodes in `node`.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(node, inferDirectionality);
                }
            }
            if (directionInferred) {
                state.direction = directionInferred;
            }
        } else if (state.editableOrEditingHost) {
            state.editableOrEditingHost = false;
        }
    }
    return reset;
    //TURBOPACK unreachable
    ;
    /**
   * @returns {undefined}
   *   Nothing.
   */ function reset() {
        state.schema = schema;
        state.language = language;
        state.direction = currentDirection;
        state.editableOrEditingHost = editableOrEditingHost;
    }
    /** @type {Visitor<ElementContent>} */ function inferDirectionality(child) {
        if (child.type === 'text') {
            directionInferred = directionBidi(child.value);
            return directionInferred ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXIT"] : undefined;
        }
        if (child !== node && child.type === 'element' && (child.tagName === 'bdi' || child.tagName === 'script' || child.tagName === 'style' || child.tagName === 'textare' || directionProperty(child))) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKIP"];
        }
    }
}
/**
 * See `wooorm/direction`.
 *
 * @param {string} value
 *   Value to check.
 * @returns {Exclude<Direction, 'auto'> | undefined}
 *   Directionality.
 */ function directionBidi(value) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$direction$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["direction"])(value);
    return result === 'neutral' ? undefined : result;
}
/**
 * @param {ElementContent} node
 *   Node to check.
 * @returns {Direction | undefined}
 *   Directionality.
 */ function directionProperty(node) {
    const value = node.type === 'element' && typeof node.properties.dir === 'string' ? node.properties.dir.toLowerCase() : undefined;
    return value === 'auto' || value === 'ltr' || value === 'rtl' ? value : undefined;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/attribute.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {AstAttribute} from 'css-selector-parser'
 * @import {Element, Properties} from 'hast'
 * @import {Info, Schema} from 'property-information'
 */ __turbopack_context__.s([
    "attribute",
    ()=>attribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/comma-separated-tokens/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/devlop/lib/development.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/property-information/lib/find.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/space-separated-tokens/index.js [app-client] (ecmascript)");
;
;
;
;
function attribute(query, element, schema) {
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["find"])(schema, query.name);
    const propertyValue = element.properties[info.property];
    let value = normalizeValue(propertyValue, info);
    // Exists.
    if (!query.value) {
        return value !== undefined;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(query.value.type === 'String', 'expected plain string');
    let key = query.value.value;
    // Case-sensitivity.
    if (query.caseSensitivityModifier === 'i') {
        key = key.toLowerCase();
        if (value) {
            value = value.toLowerCase();
        }
    }
    if (value !== undefined) {
        switch(query.operator){
            // Exact.
            case '=':
                {
                    return key === value;
                }
            // Ends.
            case '$=':
                {
                    return key === value.slice(-key.length);
                }
            // Contains.
            case '*=':
                {
                    return value.includes(key);
                }
            // Begins.
            case '^=':
                {
                    return key === value.slice(0, key.length);
                }
            // Exact or prefix.
            case '|=':
                {
                    return key === value || key === value.slice(0, key.length) && value.charAt(key.length) === '-';
                }
            // Space-separated list.
            case '~=':
                {
                    return(// For all other values (including comma-separated lists), return whether this
                    // is an exact match.
                    key === value || // If this is a space-separated list, and the query is contained in it, return
                    // true.
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"](value).includes(key));
                }
        }
    }
    return false;
}
/**
 *
 * @param {Properties[keyof Properties]} value
 * @param {Info} info
 * @returns {string | undefined}
 */ function normalizeValue(value, info) {
    if (value === null || value === undefined) {
    // Empty.
    } else if (typeof value === 'boolean') {
        if (value) {
            return info.attribute;
        }
    } else if (Array.isArray(value)) {
        if (value.length > 0) {
            return (info.commaSeparated ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(value);
        }
    } else {
        return String(value);
    }
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/class-name.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {AstClassName} from 'css-selector-parser'
 * @import {Element} from 'hast'
 */ /** @type {Array<never>} */ __turbopack_context__.s([
    "className",
    ()=>className
]);
const emptyClassNames = [];
function className(query, element) {
    // Assume array.
    const value = element.properties.className || emptyClassNames;
    return value.includes(query.name);
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/id.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {AstId} from 'css-selector-parser'
 * @import {Element} from 'hast'
 */ /**
 * Check whether an element has an ID.
 *
 * @param {AstId} query
 *   AST rule (with `ids`).
 * @param {Element} element
 *   Element.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ __turbopack_context__.s([
    "id",
    ()=>id
]);
function id(query, element) {
    return element.properties.id === query.name;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/name.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {AstTagName} from 'css-selector-parser'
 * @import {Element} from 'hast'
 */ /**
 * Check whether an element has a tag name.
 *
 * @param {AstTagName} query
 *   AST rule (with `tag`).
 * @param {Element} element
 *   Element.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ __turbopack_context__.s([
    "name",
    ()=>name
]);
function name(query, element) {
    return query.name === element.tagName;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/pseudo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {AstPseudoClass} from 'css-selector-parser'
 * @import {default as NthCheck} from 'nth-check'
 * @import {ElementContent, Element, Parents} from 'hast'
 * @import {State} from './index.js'
 */ __turbopack_context__.s([
    "pseudo",
    ()=>pseudo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$bcp$2d$47$2d$match$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/bcp-47-match/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/comma-separated-tokens/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/devlop/lib/development.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$has$2d$property$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-has-property/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-whitespace/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/nth-check/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$zwitch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/zwitch/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$walk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/walk.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
/** @type {NthCheck} */ // @ts-expect-error: types are broken.
const nthCheck = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].default || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"];
const pseudo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$zwitch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zwitch"])('name', {
    handlers: {
        'any-link': anyLink,
        blank,
        checked,
        dir,
        disabled,
        empty,
        enabled,
        'first-child': firstChild,
        'first-of-type': firstOfType,
        has,
        is,
        lang,
        'last-child': lastChild,
        'last-of-type': lastOfType,
        not,
        'nth-child': nthChild,
        'nth-last-child': nthLastChild,
        'nth-last-of-type': nthLastOfType,
        'nth-of-type': nthOfType,
        'only-child': onlyChild,
        'only-of-type': onlyOfType,
        optional,
        'read-only': readOnly,
        'read-write': readWrite,
        required,
        root,
        scope
    },
    invalid: invalidPseudo,
    unknown: unknownPseudo
});
/**
 * Check whether an element matches an `:any-link` pseudo.
 *
 * @param {AstPseudoClass} _
 *   Query.
 * @param {Element} element
 *   Element.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function anyLink(_, element) {
    return (element.tagName === 'a' || element.tagName === 'area' || element.tagName === 'link') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$has$2d$property$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(element, 'href');
}
/**
 * @param {State} state
 *   State.
 * @param {AstPseudoClass} query
 *   Query.
 */ function assertDeep(state, query) {
    if (state.shallow) {
        throw new Error('Cannot use `:' + query.name + '` without parent');
    }
}
/**
 * Check whether an element matches a `:blank` pseudo.
 *
 * @param {AstPseudoClass} _
 *   Query.
 * @param {Element} element
 *   Element.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function blank(_, element) {
    return !someChildren(element, check);
    //TURBOPACK unreachable
    ;
    /**
   * @param {ElementContent} child
   * @returns {boolean}
   */ function check(child) {
        return child.type === 'element' || child.type === 'text' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whitespace"])(child);
    }
}
/**
 * Check whether an element matches a `:checked` pseudo.
 *
 * @param {AstPseudoClass} _
 *   Query.
 * @param {Element} element
 *   Element.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function checked(_, element) {
    if (element.tagName === 'input' || element.tagName === 'menuitem') {
        return Boolean((element.properties.type === 'checkbox' || element.properties.type === 'radio') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$has$2d$property$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(element, 'checked'));
    }
    if (element.tagName === 'option') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$has$2d$property$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(element, 'selected');
    }
    return false;
}
/**
 * Check whether an element matches a `:dir()` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} _1
 *   Element.
 * @param {number | undefined} _2
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _3
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ // eslint-disable-next-line unicorn/prevent-abbreviations
function dir(query, _1, _2, _3, state) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(query.argument, 'expected `argument`');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(query.argument.type === 'String', 'expected plain text');
    return state.direction === query.argument.value;
}
/**
 * Check whether an element matches a `:disabled` pseudo.
 *
 * @param {AstPseudoClass} _
 *   Query.
 * @param {Element} element
 *   Element.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function disabled(_, element) {
    return (element.tagName === 'button' || element.tagName === 'input' || element.tagName === 'select' || element.tagName === 'textarea' || element.tagName === 'optgroup' || element.tagName === 'option' || element.tagName === 'menuitem' || element.tagName === 'fieldset') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$has$2d$property$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(element, 'disabled');
}
/**
 * Check whether an element matches an `:empty` pseudo.
 *
 * @param {AstPseudoClass} _
 *   Query.
 * @param {Element} element
 *   Element.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function empty(_, element) {
    return !someChildren(element, check);
    //TURBOPACK unreachable
    ;
    /**
   * @param {ElementContent} child
   * @returns {boolean}
   */ function check(child) {
        return child.type === 'element' || child.type === 'text';
    }
}
/**
 * Check whether an element matches an `:enabled` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} element
 *   Element.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function enabled(query, element) {
    return !disabled(query, element);
}
/**
 * Check whether an element matches a `:first-child` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} _1
 *   Element.
 * @param {number | undefined} _2
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _3
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function firstChild(query, _1, _2, _3, state) {
    assertDeep(state, query);
    return state.elementIndex === 0;
}
/**
 * Check whether an element matches a `:first-of-type` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} _1
 *   Element.
 * @param {number | undefined} _2
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _3
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function firstOfType(query, _1, _2, _3, state) {
    assertDeep(state, query);
    return state.typeIndex === 0;
}
/**
 * @param {AstPseudoClass} query
 *   Query.
 * @returns {(value: number) => boolean}
 *   N.
 */ function getCachedNthCheck(query) {
    /** @type {(value: number) => boolean} */ // @ts-expect-error: cache.
    let cachedFunction = query._cachedFn;
    if (!cachedFunction) {
        const value = query.argument;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(value, 'expected `argument`');
        if (value.type !== 'Formula') {
            throw new Error('Expected `nth` formula, such as `even` or `2n+1` (`of` is not yet supported)');
        }
        cachedFunction = nthCheck(value.a + 'n+' + value.b);
        // @ts-expect-error: cache.
        query._cachedFn = cachedFunction;
    }
    return cachedFunction;
}
/**
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} element
 *   Element.
 * @param {number | undefined} _1
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _2
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function has(query, element, _1, _2, state) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(query.argument, 'expected `argument`');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(query.argument.type === 'Selector', 'expected selector');
    /** @type {State} */ const childState = {
        ...state,
        // Not found yet.
        found: false,
        // One result is enough.
        one: true,
        results: [],
        rootQuery: query.argument,
        scopeElements: [
            element
        ],
        // Do walk deep.
        shallow: false
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$walk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walk"])(childState, {
        type: 'root',
        children: element.children
    });
    return childState.results.length > 0;
}
// Shouldn’t be called, parser gives correct data.
/* c8 ignore next 3 */ function invalidPseudo() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])('Invalid pseudo-selector');
}
/**
 * Check whether an element `:is` further selectors.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} element
 *   Element.
 * @param {number | undefined} _1
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _2
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function is(query, element, _1, _2, state) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(query.argument, 'expected `argument`');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(query.argument.type === 'Selector', 'expected selector');
    /** @type {State} */ const childState = {
        ...state,
        // Not found yet.
        found: false,
        // One result is enough.
        one: true,
        results: [],
        rootQuery: query.argument,
        scopeElements: [
            element
        ],
        // Do walk deep.
        shallow: false
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$walk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walk"])(childState, element);
    return childState.results[0] === element;
}
/**
 * Check whether an element matches a `:lang()` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} _1
 *   Element.
 * @param {number | undefined} _2
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _3
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function lang(query, _1, _2, _3, state) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(query.argument, 'expected `argument`');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(query.argument.type === 'String', 'expected string');
    return state.language !== '' && state.language !== undefined && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$bcp$2d$47$2d$match$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendedFilter"])(state.language, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(query.argument.value)).length > 0;
}
/**
 * Check whether an element matches a `:last-child` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} _1
 *   Element.
 * @param {number | undefined} _2
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _3
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function lastChild(query, _1, _2, _3, state) {
    assertDeep(state, query);
    return Boolean(state.elementCount && state.elementIndex === state.elementCount - 1);
}
/**
 * Check whether an element matches a `:last-of-type` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} _1
 *   Element.
 * @param {number | undefined} _2
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _3
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function lastOfType(query, _1, _2, _3, state) {
    assertDeep(state, query);
    return typeof state.typeIndex === 'number' && typeof state.typeCount === 'number' && state.typeIndex === state.typeCount - 1;
}
/**
 * Check whether an element does `:not` match further selectors.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} element
 *   Element.
 * @param {number | undefined} index
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} parent
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function not(query, element, index, parent, state) {
    return !is(query, element, index, parent, state);
}
/**
 * Check whether an element matches an `:nth-child` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} _1
 *   Element.
 * @param {number | undefined} _2
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _3
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function nthChild(query, _1, _2, _3, state) {
    const cachedFunction = getCachedNthCheck(query);
    assertDeep(state, query);
    return typeof state.elementIndex === 'number' && cachedFunction(state.elementIndex);
}
/**
 * Check whether an element matches an `:nth-last-child` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} _1
 *   Element.
 * @param {number | undefined} _2
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _3
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function nthLastChild(query, _1, _2, _3, state) {
    const cachedFunction = getCachedNthCheck(query);
    assertDeep(state, query);
    return Boolean(typeof state.elementCount === 'number' && typeof state.elementIndex === 'number' && cachedFunction(state.elementCount - state.elementIndex - 1));
}
/**
 * Check whether an element matches a `:nth-last-of-type` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} _1
 *   Element.
 * @param {number | undefined} _2
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _3
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function nthLastOfType(query, _1, _2, _3, state) {
    const cachedFunction = getCachedNthCheck(query);
    assertDeep(state, query);
    return typeof state.typeCount === 'number' && typeof state.typeIndex === 'number' && cachedFunction(state.typeCount - 1 - state.typeIndex);
}
/**
 * Check whether an element matches an `:nth-of-type` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} _1
 *   Element.
 * @param {number | undefined} _2
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _3
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function nthOfType(query, _1, _2, _3, state) {
    const cachedFunction = getCachedNthCheck(query);
    assertDeep(state, query);
    return typeof state.typeIndex === 'number' && cachedFunction(state.typeIndex);
}
/**
 * Check whether an element matches an `:only-child` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} _1
 *   Element.
 * @param {number | undefined} _2
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _3
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function onlyChild(query, _1, _2, _3, state) {
    assertDeep(state, query);
    return state.elementCount === 1;
}
/**
 * Check whether an element matches an `:only-of-type` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} _1
 *   Element.
 * @param {number | undefined} _2
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _3
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function onlyOfType(query, _1, _2, _3, state) {
    assertDeep(state, query);
    return state.typeCount === 1;
}
/**
 * Check whether an element matches an `:optional` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} element
 *   Element.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function optional(query, element) {
    return !required(query, element);
}
/**
 * Check whether an element matches a `:read-only` pseudo.
 *
 * @param {AstPseudoClass} query
 *   Query.
 * @param {Element} element
 *   Element.
 * @param {number | undefined} index
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} parent
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function readOnly(query, element, index, parent, state) {
    return !readWrite(query, element, index, parent, state);
}
/**
 * Check whether an element matches a `:read-write` pseudo.
 *
 * @param {AstPseudoClass} _
 *   Query.
 * @param {Element} element
 *   Element.
 * @param {number | undefined} _1
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _2
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function readWrite(_, element, _1, _2, state) {
    return element.tagName === 'input' || element.tagName === 'textarea' ? !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$has$2d$property$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(element, 'readOnly') && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$has$2d$property$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(element, 'disabled') : Boolean(state.editableOrEditingHost);
}
/**
 * Check whether an element matches a `:required` pseudo.
 *
 * @param {AstPseudoClass} _
 *   Query.
 * @param {Element} element
 *   Element.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function required(_, element) {
    return (element.tagName === 'input' || element.tagName === 'textarea' || element.tagName === 'select') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$has$2d$property$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasProperty"])(element, 'required');
}
/**
 * Check whether an element matches a `:root` pseudo.
 *
 * @param {AstPseudoClass} _1
 *   Query.
 * @param {Element} element
 *   Element.
 * @param {number | undefined} _2
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} parent
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function root(_1, element, _2, parent, state) {
    return Boolean((!parent || parent.type === 'root') && state.schema && (state.schema.space === 'html' || state.schema.space === 'svg') && (element.tagName === 'html' || element.tagName === 'svg'));
}
/**
 * Check whether an element matches a `:scope` pseudo.
 *
 * @param {AstPseudoClass} _1
 *   Query.
 * @param {Element} element
 *   Element.
 * @param {number | undefined} _2
 *   Index of `element` in `parent`.
 * @param {Parents | undefined} _3
 *   Parent of `element`.
 * @param {State} state
 *   State.
 * @returns {boolean}
 *   Whether `element` matches `query`.
 */ function scope(_1, element, _2, _3, state) {
    return state.scopeElements.includes(element);
}
/**
 * Check children.
 *
 * @param {Element} element
 *   Element.
 * @param {(child: ElementContent) => boolean} check
 *   Check.
 * @returns {boolean}
 *   Whether a child of `element` matches `check`.
 */ function someChildren(element, check) {
    const children = element.children;
    let index = -1;
    while(++index < children.length){
        if (check(children[index])) return true;
    }
    return false;
}
/**
 * @param {unknown} query_
 *   Query-like value.
 * @returns {never}
 *   Nothing.
 * @throws
 *   Exception.
 */ function unknownPseudo(query_) {
    // Runtime JS guarantees it has a `name`.
    const query = query_;
    throw new Error('Unknown pseudo-selector `' + query.name + '`');
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/test.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {AstRule} from 'css-selector-parser'
 * @import {Element, Parents} from 'hast'
 * @import {State} from './index.js'
 */ __turbopack_context__.s([
    "test",
    ()=>test
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$attribute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/attribute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$class$2d$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/class-name.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/name.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$pseudo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/pseudo.js [app-client] (ecmascript)");
;
;
;
;
;
function test(query, element, index, parent, state) {
    for (const item of query.items){
        // eslint-disable-next-line unicorn/prefer-switch
        if (item.type === 'Attribute') {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$attribute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attribute"])(item, element, state.schema)) return false;
        } else if (item.type === 'Id') {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["id"])(item, element)) return false;
        } else if (item.type === 'ClassName') {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$class$2d$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["className"])(item, element)) return false;
        } else if (item.type === 'PseudoClass') {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$pseudo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pseudo"])(item, element, index, parent, state)) return false;
        } else if (item.type === 'PseudoElement') {
            throw new Error('Invalid selector: `::' + item.name + '`');
        } else if (item.type === 'TagName') {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["name"])(item, element)) return false;
        } else {
        // Otherwise `item.type` is `WildcardTag`, which matches.
        }
    }
    return true;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/walk.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {AstRule} from 'css-selector-parser'
 * @import {Element, Nodes, Parents} from 'hast'
 * @import {State} from './index.js'
 */ /**
 * @typedef Counts
 *   Info on elements in a parent.
 * @property {number} count
 *   Number of elements.
 * @property {Map<string, number>} types
 *   Number of elements by tag name.
 *
 * @typedef Nest
 *   Rule sets by nesting.
 * @property {Array<AstRule> | undefined} adjacentSibling
 *   `a + b`
 * @property {Array<AstRule> | undefined} descendant
 *   `a b`
 * @property {Array<AstRule> | undefined} directChild
 *   `a > b`
 * @property {Array<AstRule> | undefined} generalSibling
 *   `a ~ b`
 */ __turbopack_context__.s([
    "walk",
    ()=>walk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$enter$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/enter-state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$test$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/test.js [app-client] (ecmascript)");
;
;
/** @type {Array<never>} */ const empty = [];
function walk(state, tree) {
    if (tree) {
        one(state, [], tree, undefined, undefined, tree);
    }
}
/**
 * Add a rule to a nesting map.
 *
 * @param {Nest} nest
 *   Nesting.
 * @param {keyof Nest} field
 *   Field.
 * @param {AstRule} rule
 *   Rule.
 */ function add(nest, field, rule) {
    const list = nest[field];
    if (list) {
        list.push(rule);
    } else {
        nest[field] = [
            rule
        ];
    }
}
/**
 * Check in a parent.
 *
 * @param {State} state
 *   State.
 * @param {Nest} nest
 *   Nesting.
 * @param {Parents} node
 *   Parent.
 * @param {Nodes} tree
 *   Tree.
 * @returns {undefined}
 *   Nothing.
 */ function all(state, nest, node, tree) {
    const fromParent = combine(nest.descendant, nest.directChild);
    /** @type {Array<AstRule> | undefined} */ let fromSibling;
    let index = -1;
    /**
   * Total counts.
   * @type {Counts}
   */ const total = {
        count: 0,
        types: new Map()
    };
    /**
   * Counts of previous siblings.
   * @type {Counts}
   */ const before = {
        count: 0,
        types: new Map()
    };
    while(++index < node.children.length){
        count(total, node.children[index]);
    }
    index = -1;
    while(++index < node.children.length){
        const child = node.children[index];
        // Uppercase to prevent prototype polution, injecting `constructor` or so.
        // Normalize because HTML is insensitive.
        const name = child.type === 'element' ? child.tagName.toUpperCase() : undefined;
        // Before counting further elements:
        state.elementIndex = before.count;
        state.typeIndex = name ? before.types.get(name) || 0 : 0;
        // After counting all elements.
        state.elementCount = total.count;
        state.typeCount = name ? total.types.get(name) : 0;
        // Only apply if this is a parent, this should be an element, but we check
        // for parents so that we delve into custom nodes too.
        if ('children' in child) {
            const forSibling = combine(fromParent, fromSibling);
            const nest = one(state, forSibling, node.children[index], index, node, tree);
            fromSibling = combine(nest.generalSibling, nest.adjacentSibling);
        }
        // We found one thing, and one is enough.
        if (state.one && state.found) {
            break;
        }
        count(before, node.children[index]);
    }
}
/**
 * Apply selectors to an element.
 *
 * @param {State} state
 *   Current state.
 * @param {Array<AstRule>} rules
 *   Rules to apply.
 * @param {Element} node
 *   Element to apply rules to.
 * @param {number | undefined} index
 *   Index of `node` in `parent`.
 * @param {Parents | undefined} parent
 *   Parent of `node`.
 * @returns {Nest}
 *   Further rules.
 */ function applySelectors(state, rules, node, index, parent) {
    /** @type {Nest} */ const nestResult = {
        adjacentSibling: undefined,
        descendant: undefined,
        directChild: undefined,
        generalSibling: undefined
    };
    let selectorIndex = -1;
    while(++selectorIndex < rules.length){
        const rule = rules[selectorIndex];
        // We found one thing, and one is enough.
        if (state.one && state.found) {
            break;
        }
        // When shallow, we don’t allow nested rules.
        // Idea: we could allow a stack of parents?
        // Might get quite complex though.
        if (state.shallow && rule.nestedRule) {
            throw new Error('Expected selector without nesting');
        }
        // If this rule matches:
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$test$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["test"])(rule, node, index, parent, state)) {
            const nest = rule.nestedRule;
            // Are there more?
            if (nest) {
                /** @type {keyof Nest} */ const label = nest.combinator === '+' ? 'adjacentSibling' : nest.combinator === '~' ? 'generalSibling' : nest.combinator === '>' ? 'directChild' : 'descendant';
                add(nestResult, label, nest);
            } else {
                // We have a match!
                state.found = true;
                if (!state.results.includes(node)) {
                    state.results.push(node);
                }
            }
        }
        // Descendant.
        if (rule.combinator === undefined) {
            add(nestResult, 'descendant', rule);
        } else if (rule.combinator === '~') {
            add(nestResult, 'generalSibling', rule);
        }
    // Drop direct child (`>`), adjacent sibling (`+`).
    }
    return nestResult;
}
/**
 * Combine two lists, if needed.
 *
 * This is optimized to create as few lists as possible.
 *
 * @param {Array<AstRule> | undefined} left
 *   Rules.
 * @param {Array<AstRule> | undefined} right
 *   Rules.
 * @returns {Array<AstRule>}
 *   Rules.
 */ function combine(left, right) {
    return left && right && left.length > 0 && right.length > 0 ? [
        ...left,
        ...right
    ] : left && left.length > 0 ? left : right && right.length > 0 ? right : empty;
}
/**
 * Count a node.
 *
 * @param {Counts} counts
 *   Counts.
 * @param {Nodes} node
 *   Node (we’re looking for elements).
 * @returns {undefined}
 *   Nothing.
 */ function count(counts, node) {
    if (node.type === 'element') {
        // Uppercase to prevent prototype polution, injecting `constructor` or so.
        // Normalize because HTML is insensitive.
        const name = node.tagName.toUpperCase();
        const count = (counts.types.get(name) || 0) + 1;
        counts.count++;
        counts.types.set(name, count);
    }
}
/**
 * Check a node.
 *
 * @param {State} state
 *   State.
 * @param {Array<AstRule>} currentRules
 *   Rules.
 * @param {Nodes} node
 *   Node.
 * @param {number | undefined} index
 *   Index of `node` in `parent`.
 * @param {Parents | undefined} parent
 *   Parent of `node`.
 * @param {Nodes} tree
 *   Tree.
 * @returns {Nest}
 *   Nesting.
 */ function one(state, currentRules, node, index, parent, tree) {
    /** @type {Nest} */ let nestResult = {
        adjacentSibling: undefined,
        descendant: undefined,
        directChild: undefined,
        generalSibling: undefined
    };
    const exit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$enter$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enterState"])(state, node);
    if (node.type === 'element') {
        let rootRules = state.rootQuery.rules;
        // Remove direct child rules if this is the root.
        // This only happens for a `:has()` rule, which can be like
        // `a:has(> b)`.
        if (parent && parent !== tree) {
            rootRules = state.rootQuery.rules.filter((d)=>d.combinator === undefined || d.combinator === '>' && parent === tree);
        }
        nestResult = applySelectors(state, // Try the root rules for this element too.
        combine(currentRules, rootRules), node, index, parent);
    }
    // If this is a parent, and we want to delve into them, and we haven’t found
    // our single result yet.
    if ('children' in node && !state.shallow && !(state.one && state.found)) {
        all(state, nestResult, node, tree);
    }
    exit();
    return nestResult;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {AstSelector} from 'css-selector-parser'
 * @import {Element, Nodes, RootContent} from 'hast'
 * @import {Schema} from 'property-information'
 */ /**
 * @typedef {'html' | 'svg'} Space
 *   Name of namespace.
 *
 * @typedef {'auto' | 'ltr' | 'rtl'} Direction
 *   Direction.
 *
 * @typedef State
 *   Current state.
 * @property {Direction} direction
 *   Current direction.
 * @property {boolean} editableOrEditingHost
 *   Whether we’re in `contentEditable`.
 * @property {number | undefined} elementCount
 *   Track siblings: there are `n` siblings.
 * @property {number | undefined} elementIndex
 *   Track siblings: this current element has `n` elements before it.
 * @property {boolean} found
 *   Whether we found at least one match.
 * @property {string | undefined} language
 *   Current language.
 * @property {boolean} one
 *   Whether we can stop looking after we found one element.
 * @property {Array<Element>} results
 *   Matches.
 * @property {AstSelector} rootQuery
 *   Original root selectors.
 * @property {Schema} schema
 *   Current schema.
 * @property {Array<RootContent>} scopeElements
 *   Elements in scope.
 * @property {boolean} shallow
 *   Whether we only allow selectors without nesting.
 * @property {number | undefined} typeCount
 *   Track siblings: there are `n` siblings with this element’s tag name.
 * @property {number | undefined} typeIndex
 *   Track siblings: this current element has `n` elements with its tag name
 *   before it.
 */ __turbopack_context__.s([
    "matches",
    ()=>matches,
    "select",
    ()=>select,
    "selectAll",
    ()=>selectAll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/property-information/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/parse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$walk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/walk.js [app-client] (ecmascript)");
;
;
;
function matches(selector, node, space) {
    const state = createState(selector, node, space);
    state.one = true;
    state.shallow = true;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$walk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walk"])(state, node || undefined);
    return state.results.length > 0;
}
function select(selector, tree, space) {
    const state = createState(selector, tree, space);
    state.one = true;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$walk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walk"])(state, tree || undefined);
    return state.results[0];
}
function selectAll(selector, tree, space) {
    const state = createState(selector, tree, space);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$walk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walk"])(state, tree || undefined);
    return state.results;
}
/**
 * @param {string} selector
 *   CSS selector, such as (`h1`, `a, b`).
 * @param {Nodes | null | undefined} [tree]
 *   Tree to search (optional).
 * @param {Space | null | undefined} [space='html']
 *   Name of namespace (default: `'html'`).
 * @returns {State} State
 *   State.
 */ function createState(selector, tree, space) {
    return {
        direction: 'ltr',
        editableOrEditingHost: false,
        elementCount: undefined,
        elementIndex: undefined,
        found: false,
        language: undefined,
        one: false,
        // State of the query.
        results: [],
        rootQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(selector),
        schema: space === 'svg' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["html"],
        scopeElements: tree ? tree.type === 'root' ? tree.children : [
            tree
        ] : [],
        shallow: false,
        typeIndex: undefined,
        typeCount: undefined
    };
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/direction/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "direction",
    ()=>direction
]);
const rtlRange = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC';
const ltrRange = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' + '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' + '\uFE00-\uFE6F\uFEFD-\uFFFF';
/* eslint-disable no-misleading-character-class */ const rtl = new RegExp('^[^' + ltrRange + ']*[' + rtlRange + ']');
const ltr = new RegExp('^[^' + rtlRange + ']*[' + ltrRange + ']');
function direction(value) {
    const source = String(value || '');
    return rtl.test(source) ? 'rtl' : ltr.test(source) ? 'ltr' : 'neutral';
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/bcp-47-match/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * See <https://tools.ietf.org/html/rfc4647#section-3.1>
 * for more info on the algorithms.
 */ /**
 * @typedef {string} Tag
 *   BCP-47 tag.
 * @typedef {Array<Tag>} Tags
 *   List of BCP-47 tags.
 * @typedef {string} Range
 *   RFC 4647 range.
 * @typedef {Array<Range>} Ranges
 *   List of RFC 4647 range.
 *
 * @callback Check
 *   An internal check.
 * @param {Tag} tag
 *   BCP-47 tag.
 * @param {Range} range
 *   RFC 4647 range.
 * @returns {boolean}
 *   Whether the range matches the tag.
 *
 * @typedef {FilterOrLookup<true>} Filter
 *   Filter: yields all tags that match a range.
 * @typedef {FilterOrLookup<false>} Lookup
 *   Lookup: yields the best tag that matches a range.
 */ /**
 * @template {boolean} IsFilter
 *   Whether to filter or perform a lookup.
 * @callback FilterOrLookup
 *   A check.
 * @param {Tag|Tags} tags
 *   One or more BCP-47 tags.
 * @param {Range|Ranges|undefined} [ranges='*']
 *   One or more RFC 4647 ranges.
 * @returns {IsFilter extends true ? Tags : Tag|undefined}
 *   Result.
 */ /**
 * Factory to perform a filter or a lookup.
 *
 * This factory creates a function that accepts a list of tags and a list of
 * ranges, and contains logic to exit early for lookups.
 * `check` just has to deal with one tag and one range.
 * This match function iterates over ranges, and for each range,
 * iterates over tags.
 * That way, earlier ranges matching any tag have precedence over later ranges.
 *
 * @template {boolean} IsFilter
 * @param {Check} check
 *   A check.
 * @param {IsFilter} filter
 *   Whether to filter or perform a lookup.
 * @returns {FilterOrLookup<IsFilter>}
 *   Filter or lookup.
 */ __turbopack_context__.s([
    "basicFilter",
    ()=>basicFilter,
    "extendedFilter",
    ()=>extendedFilter,
    "lookup",
    ()=>lookup
]);
function factory(check, filter) {
    /**
   * @param {Tag|Tags} tags
   *   One or more BCP-47 tags.
   * @param {Range|Ranges|undefined} [ranges='*']
   *   One or more RFC 4647 ranges.
   * @returns {IsFilter extends true ? Tags : Tag|undefined}
   *   Result.
   */ return function(tags, ranges) {
        let left = cast(tags, 'tag');
        const right = cast(ranges === null || ranges === undefined ? '*' : ranges, 'range');
        /** @type {Tags} */ const matches = [];
        let rightIndex = -1;
        while(++rightIndex < right.length){
            const range = right[rightIndex].toLowerCase();
            // Ignore wildcards in lookup mode.
            if (!filter && range === '*') continue;
            let leftIndex = -1;
            /** @type {Tags} */ const next = [];
            while(++leftIndex < left.length){
                if (check(left[leftIndex].toLowerCase(), range)) {
                    // Exit if this is a lookup and we have a match.
                    if (!filter) {
                        return left[leftIndex];
                    }
                    matches.push(left[leftIndex]);
                } else {
                    next.push(left[leftIndex]);
                }
            }
            left = next;
        }
        // If this is a filter, return the list.  If it’s a lookup, we didn’t find
        // a match, so return `undefined`.
        return filter ? matches : undefined;
    };
}
const basicFilter = factory(function(tag, range) {
    return range === '*' || tag === range || tag.includes(range + '-');
}, true);
const extendedFilter = factory(function(tag, range) {
    // 3.3.2.1
    const left = tag.split('-');
    const right = range.split('-');
    let leftIndex = 0;
    let rightIndex = 0;
    // 3.3.2.2
    if (right[rightIndex] !== '*' && left[leftIndex] !== right[rightIndex]) {
        return false;
    }
    leftIndex++;
    rightIndex++;
    // 3.3.2.3
    while(rightIndex < right.length){
        // 3.3.2.3.A
        if (right[rightIndex] === '*') {
            rightIndex++;
            continue;
        }
        // 3.3.2.3.B
        if (!left[leftIndex]) return false;
        // 3.3.2.3.C
        if (left[leftIndex] === right[rightIndex]) {
            leftIndex++;
            rightIndex++;
            continue;
        }
        // 3.3.2.3.D
        if (left[leftIndex].length === 1) return false;
        // 3.3.2.3.E
        leftIndex++;
    }
    // 3.3.2.4
    return true;
}, true);
const lookup = factory(function(tag, range) {
    let right = range;
    /* eslint-disable-next-line no-constant-condition */ while(true){
        if (right === '*' || tag === right) return true;
        let index = right.lastIndexOf('-');
        if (index < 0) return false;
        if (right.charAt(index - 2) === '-') index -= 2;
        right = right.slice(0, index);
    }
}, false);
/**
 * Validate tags or ranges, and cast them to arrays.
 *
 * @param {string|Array<string>} values
 * @param {string} name
 * @returns {Array<string>}
 */ function cast(values, name) {
    const value = values && typeof values === 'string' ? [
        values
    ] : values;
    if (!value || typeof value !== 'object' || !('length' in value)) {
        throw new Error('Invalid ' + name + ' `' + value + '`, expected non-empty string');
    }
    return value;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-has-property/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Nodes} Nodes
 */ __turbopack_context__.s([
    "hasProperty",
    ()=>hasProperty
]);
const own = {}.hasOwnProperty;
function hasProperty(node, name) {
    const value = node.type === 'element' && own.call(node.properties, name) && node.properties[name];
    return value !== null && value !== undefined && value !== false;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/nth-check/lib/esm/parse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Following http://www.w3.org/TR/css3-selectors/#nth-child-pseudo
// Whitespace as per https://www.w3.org/TR/selectors-3/#lex is " \t\r\n\f"
__turbopack_context__.s([
    "parse",
    ()=>parse
]);
const whitespace = new Set([
    9,
    10,
    12,
    13,
    32
]);
const ZERO = "0".charCodeAt(0);
const NINE = "9".charCodeAt(0);
function parse(formula) {
    formula = formula.trim().toLowerCase();
    if (formula === "even") {
        return [
            2,
            0
        ];
    } else if (formula === "odd") {
        return [
            2,
            1
        ];
    }
    // Parse [ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?
    let idx = 0;
    let a = 0;
    let sign = readSign();
    let number = readNumber();
    if (idx < formula.length && formula.charAt(idx) === "n") {
        idx++;
        a = sign * (number !== null && number !== void 0 ? number : 1);
        skipWhitespace();
        if (idx < formula.length) {
            sign = readSign();
            skipWhitespace();
            number = readNumber();
        } else {
            sign = number = 0;
        }
    }
    // Throw if there is anything else
    if (number === null || idx < formula.length) {
        throw new Error("n-th rule couldn't be parsed ('".concat(formula, "')"));
    }
    return [
        a,
        sign * number
    ];
    //TURBOPACK unreachable
    ;
    function readSign() {
        if (formula.charAt(idx) === "-") {
            idx++;
            return -1;
        }
        if (formula.charAt(idx) === "+") {
            idx++;
        }
        return 1;
    }
    function readNumber() {
        const start = idx;
        let value = 0;
        while(idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE){
            value = value * 10 + (formula.charCodeAt(idx) - ZERO);
            idx++;
        }
        // Return `null` if we didn't read anything.
        return idx === start ? null : value;
    }
    function skipWhitespace() {
        while(idx < formula.length && whitespace.has(formula.charCodeAt(idx))){
            idx++;
        }
    }
} //# sourceMappingURL=parse.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/nth-check/lib/esm/compile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compile",
    ()=>compile,
    "generate",
    ()=>generate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/boolbase/index.js [app-client] (ecmascript)");
;
function compile(parsed) {
    const a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    const b = parsed[1] - 1;
    /*
     * When `b <= 0`, `a * n` won't be lead to any matches for `a < 0`.
     * Besides, the specification states that no elements are
     * matched when `a` and `b` are 0.
     *
     * `b < 0` here as we subtracted 1 from `b` above.
     */ if (b < 0 && a <= 0) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].falseFunc;
    // When `a` is in the range -1..1, it matches any element (so only `b` is checked).
    if (a === -1) return (index)=>index <= b;
    if (a === 0) return (index)=>index === b;
    // When `b <= 0` and `a === 1`, they match any element.
    if (a === 1) return b < 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].trueFunc : (index)=>index >= b;
    /*
     * Otherwise, modulo can be used to check if there is a match.
     *
     * Modulo doesn't care about the sign, so let's use `a`s absolute value.
     */ const absA = Math.abs(a);
    // Get `b mod a`, + a if this is negative.
    const bMod = (b % absA + absA) % absA;
    return a > 1 ? (index)=>index >= b && index % absA === bMod : (index)=>index <= b && index % absA === bMod;
}
function generate(parsed) {
    const a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    let b = parsed[1] - 1;
    let n = 0;
    // Make sure to always return an increasing sequence
    if (a < 0) {
        const aPos = -a;
        // Get `b mod a`
        const minValue = (b % aPos + aPos) % aPos;
        return ()=>{
            const val = minValue + aPos * n++;
            return val > b ? null : val;
        };
    }
    if (a === 0) return b < 0 ? ()=>null : ()=>n++ === 0 ? b : null;
    if (b < 0) {
        b += a * Math.ceil(-b / a);
    }
    return ()=>a * n++ + b;
} //# sourceMappingURL=compile.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/nth-check/lib/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>nthCheck,
    "sequence",
    ()=>sequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/nth-check/lib/esm/parse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/nth-check/lib/esm/compile.js [app-client] (ecmascript)");
;
;
;
function nthCheck(formula) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compile"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(formula));
}
function sequence(formula) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(formula));
} //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/boolbase/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    trueFunc: function trueFunc() {
        return true;
    },
    falseFunc: function falseFunc() {
        return false;
    }
};
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/zwitch/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @callback Handler
 *   Handle a value, with a certain ID field set to a certain value.
 *   The ID field is passed to `zwitch`, and it’s value is this function’s
 *   place on the `handlers` record.
 * @param {...any} parameters
 *   Arbitrary parameters passed to the zwitch.
 *   The first will be an object with a certain ID field set to a certain value.
 * @returns {any}
 *   Anything!
 */ /**
 * @callback UnknownHandler
 *   Handle values that do have a certain ID field, but it’s set to a value
 *   that is not listed in the `handlers` record.
 * @param {unknown} value
 *   An object with a certain ID field set to an unknown value.
 * @param {...any} rest
 *   Arbitrary parameters passed to the zwitch.
 * @returns {any}
 *   Anything!
 */ /**
 * @callback InvalidHandler
 *   Handle values that do not have a certain ID field.
 * @param {unknown} value
 *   Any unknown value.
 * @param {...any} rest
 *   Arbitrary parameters passed to the zwitch.
 * @returns {void|null|undefined|never}
 *   This should crash or return nothing.
 */ /**
 * @template {InvalidHandler} [Invalid=InvalidHandler]
 * @template {UnknownHandler} [Unknown=UnknownHandler]
 * @template {Record<string, Handler>} [Handlers=Record<string, Handler>]
 * @typedef Options
 *   Configuration (required).
 * @property {Invalid} [invalid]
 *   Handler to use for invalid values.
 * @property {Unknown} [unknown]
 *   Handler to use for unknown values.
 * @property {Handlers} [handlers]
 *   Handlers to use.
 */ __turbopack_context__.s([
    "zwitch",
    ()=>zwitch
]);
const own = {}.hasOwnProperty;
function zwitch(key, options) {
    const settings = options || {};
    /**
   * Handle one value.
   *
   * Based on the bound `key`, a respective handler will be called.
   * If `value` is not an object, or doesn’t have a `key` property, the special
   * “invalid” handler will be called.
   * If `value` has an unknown `key`, the special “unknown” handler will be
   * called.
   *
   * All arguments, and the context object, are passed through to the handler,
   * and it’s result is returned.
   *
   * @this {unknown}
   *   Any context object.
   * @param {unknown} [value]
   *   Any value.
   * @param {...unknown} parameters
   *   Arbitrary parameters passed to the zwitch.
   * @property {Handler} invalid
   *   Handle for values that do not have a certain ID field.
   * @property {Handler} unknown
   *   Handle values that do have a certain ID field, but it’s set to a value
   *   that is not listed in the `handlers` record.
   * @property {Handlers} handlers
   *   Record of handlers.
   * @returns {unknown}
   *   Anything.
   */ function one(value) {
        for(var _len = arguments.length, parameters = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            parameters[_key - 1] = arguments[_key];
        }
        /** @type {Handler|undefined} */ let fn = one.invalid;
        const handlers = one.handlers;
        if (value && own.call(value, key)) {
            // @ts-expect-error Indexable.
            const id = String(value[key]);
            // @ts-expect-error Indexable.
            fn = own.call(handlers, id) ? handlers[id] : one.unknown;
        }
        if (fn) {
            return fn.call(this, value, ...parameters);
        }
    }
    one.handlers = settings.handlers || {};
    one.invalid = settings.invalid;
    one.unknown = settings.unknown;
    // @ts-expect-error: matches!
    return one;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-rewrite/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getCodeString",
    ()=>getCodeString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-visit/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-select/lib/index.js [app-client] (ecmascript)");
;
;
const getCodeString = function() {
    let data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], code = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    data.forEach((node)=>{
        if (node.type === 'text') {
            code += node.value;
        } else if (node.type === 'element' && node.children && Array.isArray(node.children)) {
            code += getCodeString(node.children);
        }
    });
    return code;
};
const remarkRewrite = (options)=>{
    const { selector, rewrite } = options || {};
    return (tree)=>{
        if (!rewrite || typeof rewrite !== 'function') return;
        if (selector && typeof selector === 'string') {
            const selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$select$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectAll"])(selector, tree);
            if (selected && selected.length > 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, selected, (node, index, parent)=>{
                    rewrite(node, index, parent);
                });
            }
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, (node, index, parent)=>{
            rewrite(node, index, parent);
        });
    };
};
const __TURBOPACK__default__export__ = remarkRewrite;
 //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-attr/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCommentObject",
    ()=>getCommentObject,
    "getURLParameters",
    ()=>getURLParameters,
    "nextChild",
    ()=>nextChild,
    "prevChild",
    ()=>prevChild,
    "propertiesHandle",
    ()=>propertiesHandle
]);
const getURLParameters = function() {
    let url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v)=>(a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {});
};
const prevChild = function() {
    let data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], index = arguments.length > 1 ? arguments[1] : void 0;
    let i = index;
    while(i > -1){
        i--;
        if (!data[i]) return;
        if (data[i] && data[i].value && data[i].value.replace(/(\n|\s)/g, '') !== '' || data[i].type !== 'text') {
            if (!/^rehype:/.test(data[i].value) || data[i].type !== 'comment') return;
            return data[i];
        }
    }
    return;
};
const nextChild = function() {
    let data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], index = arguments.length > 1 ? arguments[1] : void 0, tagName = arguments.length > 2 ? arguments[2] : void 0, codeBlockParames = arguments.length > 3 ? arguments[3] : void 0;
    let i = index;
    while(i < data.length){
        i++;
        if (tagName) {
            const element = data[i];
            if (element && element.value && element.value.replace(/(\n|\s)/g, '') !== '' || data[i] && data[i].type === 'element') {
                return element.tagName === tagName ? element : undefined;
            }
        } else {
            const element = data[i];
            if (!element || element.type === 'element') return;
            if (element.type === 'text' && element.value.replace(/(\n|\s)/g, '') !== '') return;
            if (element.type && /^(comment|raw)$/ig.test(element.type)) {
                if (element.value && !/^rehype:/.test(element.value.replace(/^(\s+)?<!--(.*?)-->/, '$2') || '')) {
                    return;
                }
                ;
                if (codeBlockParames) {
                    const nextNode = nextChild(data, i, 'pre', codeBlockParames);
                    if (nextNode) return;
                    element.value = (element.value || '').replace(/^(\n|\s)+/, '');
                    return element;
                } else {
                    element.value = (element.value || '').replace(/^(\n|\s)+/, '');
                    return element;
                }
            }
        }
    }
    return;
};
const getCommentObject = (param)=>{
    let { value = '' } = param;
    const param1 = getURLParameters(value.replace(/^<!--(.*?)-->/, '$1').replace(/^rehype:/, ''));
    Object.keys(param1).forEach((keyName)=>{
        if (param1[keyName] === 'true') {
            param1[keyName] = true;
        }
        if (param1[keyName] === 'false') {
            param1[keyName] = false;
        }
        if (typeof param1[keyName] === 'string' && !/^0/.test(param1[keyName]) && !isNaN(+param1[keyName])) {
            param1[keyName] = +param1[keyName];
        }
    });
    return param1;
};
const propertiesHandle = (defaultAttrs, attrs, type)=>{
    if (type === 'string') {
        return {
            ...defaultAttrs,
            'data-config': JSON.stringify({
                ...attrs,
                rehyp: true
            })
        };
    } else if (type === 'attr') {
        return {
            ...defaultAttrs,
            ...attrs
        };
    }
    return {
        ...defaultAttrs,
        'data-config': {
            ...attrs,
            rehyp: true
        }
    };
}; //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-attr/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-visit/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$attr$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-attr/lib/utils.js [app-client] (ecmascript)");
;
;
const rehypeAttrs = function() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { properties = 'data', codeBlockParames = true } = options;
    return (tree)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, 'element', (node, index, parent)=>{
            if (codeBlockParames && node.tagName === 'pre' && node && Array.isArray(node.children) && parent && Array.isArray(parent.children) && parent.children.length > 1) {
                const firstChild = node.children[0];
                if (firstChild && firstChild.tagName === 'code' && typeof index === 'number') {
                    const child = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$attr$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prevChild"])(parent.children, index);
                    if (child) {
                        const attr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$attr$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCommentObject"])(child);
                        if (Object.keys(attr).length > 0) {
                            node.properties = {
                                ...node.properties,
                                ...{
                                    'data-type': 'rehyp'
                                }
                            };
                            firstChild.properties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$attr$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertiesHandle"])(firstChild.properties, attr, properties);
                        }
                    }
                }
            }
            if (/^(em|strong|b|a|i|p|pre|kbd|blockquote|h(1|2|3|4|5|6)|code|table|img|del|ul|ol)$/.test(node.tagName) && parent && Array.isArray(parent.children) && typeof index === 'number') {
                const child = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$attr$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextChild"])(parent.children, index, '', codeBlockParames);
                if (child) {
                    const attr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$attr$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCommentObject"])(child);
                    if (Object.keys(attr).length > 0) {
                        node.properties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$attr$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertiesHandle"])(node.properties, attr, properties);
                    }
                }
            }
        });
    };
};
const __TURBOPACK__default__export__ = rehypeAttrs;
 //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/vfile-location/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {VFile, Value} from 'vfile'
 * @import {Location} from 'vfile-location'
 */ /**
 * Create an index of the given document to translate between line/column and
 * offset based positional info.
 *
 * Also implemented in Rust in [`wooorm/markdown-rs`][markdown-rs].
 *
 * [markdown-rs]: https://github.com/wooorm/markdown-rs/blob/main/src/util/location.rs
 *
 * @param {VFile | Value} file
 *   File to index.
 * @returns {Location}
 *   Accessors for index.
 */ __turbopack_context__.s([
    "location",
    ()=>location
]);
function location(file) {
    const value = String(file);
    /**
   * List, where each index is a line number (0-based), and each value is the
   * byte index *after* where the line ends.
   *
   * @type {Array<number>}
   */ const indices = [];
    return {
        toOffset,
        toPoint
    };
    //TURBOPACK unreachable
    ;
    /** @type {Location['toPoint']} */ function toPoint(offset) {
        if (typeof offset === 'number' && offset > -1 && offset <= value.length) {
            let index = 0;
            while(true){
                let end = indices[index];
                if (end === undefined) {
                    const eol = next(value, indices[index - 1]);
                    end = eol === -1 ? value.length + 1 : eol + 1;
                    indices[index] = end;
                }
                if (end > offset) {
                    return {
                        line: index + 1,
                        column: offset - (index > 0 ? indices[index - 1] : 0) + 1,
                        offset
                    };
                }
                index++;
            }
        }
    }
    /** @type {Location['toOffset']} */ function toOffset(point) {
        if (point && typeof point.line === 'number' && typeof point.column === 'number' && !Number.isNaN(point.line) && !Number.isNaN(point.column)) {
            while(indices.length < point.line){
                const from = indices[indices.length - 1];
                const eol = next(value, from);
                const end = eol === -1 ? value.length + 1 : eol + 1;
                if (from === end) break;
                indices.push(end);
            }
            const offset = (point.line > 1 ? indices[point.line - 2] : 0) + point.column - 1;
            // The given `column` could not exist on this line.
            if (offset < indices[point.line - 1]) return offset;
        }
    }
}
/**
 * @param {string} value
 * @param {number} from
 */ function next(value, from) {
    const cr = value.indexOf('\r', from);
    const lf = value.indexOf('\n', from);
    if (lf === -1) return cr;
    if (cr === -1 || cr + 1 === lf) return lf;
    return cr < lf ? cr : lf;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/web-namespaces/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Map of web namespaces.
 *
 * @type {Record<string, string>}
 */ __turbopack_context__.s([
    "webNamespaces",
    ()=>webNamespaces
]);
const webNamespaces = {
    html: 'http://www.w3.org/1999/xhtml',
    mathml: 'http://www.w3.org/1998/Math/MathML',
    svg: 'http://www.w3.org/2000/svg',
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xmlns: 'http://www.w3.org/2000/xmlns/'
};
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-parse5/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {ElementData, Element, Nodes, RootContent, Root} from 'hast'
 * @import {DefaultTreeAdapterMap, Token} from 'parse5'
 * @import {Schema} from 'property-information'
 * @import {Point, Position} from 'unist'
 * @import {VFile} from 'vfile'
 * @import {Options} from 'hast-util-from-parse5'
 */ /**
 * @typedef State
 *   Info passed around about the current state.
 * @property {VFile | undefined} file
 *   Corresponding file.
 * @property {boolean} location
 *   Whether location info was found.
 * @property {Schema} schema
 *   Current schema.
 * @property {boolean | undefined} verbose
 *   Add extra positional info.
 */ __turbopack_context__.s([
    "fromParse5",
    ()=>fromParse5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/devlop/lib/development.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$parse5$2f$node_modules$2f$hastscript$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-parse5/node_modules/hastscript/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/property-information/lib/find.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/property-information/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$vfile$2d$location$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/vfile-location/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$web$2d$namespaces$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/web-namespaces/index.js [app-client] (ecmascript)");
;
;
;
;
;
const own = {}.hasOwnProperty;
/** @type {unknown} */ // type-coverage:ignore-next-line
const proto = Object.prototype;
function fromParse5(tree, options) {
    const settings = options || {};
    return one({
        file: settings.file || undefined,
        location: false,
        schema: settings.space === 'svg' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["html"],
        verbose: settings.verbose || false
    }, tree);
}
/**
 * Transform a node.
 *
 * @param {State} state
 *   Info passed around about the current state.
 * @param {DefaultTreeAdapterMap['node']} node
 *   p5 node.
 * @returns {Nodes}
 *   hast node.
 */ function one(state, node) {
    /** @type {Nodes} */ let result;
    switch(node.nodeName){
        case '#comment':
            {
                const reference = node;
                result = {
                    type: 'comment',
                    value: reference.data
                };
                patch(state, reference, result);
                return result;
            }
        case '#document':
        case '#document-fragment':
            {
                const reference = node;
                const quirksMode = 'mode' in reference ? reference.mode === 'quirks' || reference.mode === 'limited-quirks' : false;
                result = {
                    type: 'root',
                    children: all(state, node.childNodes),
                    data: {
                        quirksMode
                    }
                };
                if (state.file && state.location) {
                    const document = String(state.file);
                    const loc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$vfile$2d$location$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["location"])(document);
                    const start = loc.toPoint(0);
                    const end = loc.toPoint(document.length);
                    // Always defined as we give valid input.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(start, 'expected `start`');
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(end, 'expected `end`');
                    result.position = {
                        start,
                        end
                    };
                }
                return result;
            }
        case '#documentType':
            {
                const reference = node;
                result = {
                    type: 'doctype'
                };
                patch(state, reference, result);
                return result;
            }
        case '#text':
            {
                const reference = node;
                result = {
                    type: 'text',
                    value: reference.value
                };
                patch(state, reference, result);
                return result;
            }
        // Element.
        default:
            {
                const reference = node;
                result = element(state, reference);
                return result;
            }
    }
}
/**
 * Transform children.
 *
 * @param {State} state
 *   Info passed around about the current state.
 * @param {Array<DefaultTreeAdapterMap['node']>} nodes
 *   Nodes.
 * @returns {Array<RootContent>}
 *   hast nodes.
 */ function all(state, nodes) {
    let index = -1;
    /** @type {Array<RootContent>} */ const results = [];
    while(++index < nodes.length){
        // Assume no roots in `nodes`.
        const result = one(state, nodes[index]);
        results.push(result);
    }
    return results;
}
/**
 * Transform an element.
 *
 * @param {State} state
 *   Info passed around about the current state.
 * @param {DefaultTreeAdapterMap['element']} node
 *   `parse5` node to transform.
 * @returns {Element}
 *   hast node.
 */ function element(state, node) {
    const schema = state.schema;
    state.schema = node.namespaceURI === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$web$2d$namespaces$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webNamespaces"].svg ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["html"];
    // Props.
    let index = -1;
    /** @type {Record<string, string>} */ const properties = {};
    while(++index < node.attrs.length){
        const attribute = node.attrs[index];
        const name = (attribute.prefix ? attribute.prefix + ':' : '') + attribute.name;
        if (!own.call(proto, name)) {
            properties[name] = attribute.value;
        }
    }
    // Build.
    const x = state.schema.space === 'svg' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$parse5$2f$node_modules$2f$hastscript$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$parse5$2f$node_modules$2f$hastscript$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"];
    const result = x(node.tagName, properties, all(state, node.childNodes));
    patch(state, node, result);
    // Switch content.
    if (result.tagName === 'template') {
        const reference = node;
        const pos = reference.sourceCodeLocation;
        const startTag = pos && pos.startTag && position(pos.startTag);
        const endTag = pos && pos.endTag && position(pos.endTag);
        // Root in, root out.
        const content = one(state, reference.content);
        if (startTag && endTag && state.file) {
            content.position = {
                start: startTag.end,
                end: endTag.start
            };
        }
        result.content = content;
    }
    state.schema = schema;
    return result;
}
/**
 * Patch positional info from `from` onto `to`.
 *
 * @param {State} state
 *   Info passed around about the current state.
 * @param {DefaultTreeAdapterMap['node']} from
 *   p5 node.
 * @param {Nodes} to
 *   hast node.
 * @returns {undefined}
 *   Nothing.
 */ function patch(state, from, to) {
    if ('sourceCodeLocation' in from && from.sourceCodeLocation && state.file) {
        const position = createLocation(state, to, from.sourceCodeLocation);
        if (position) {
            state.location = true;
            to.position = position;
        }
    }
}
/**
 * Create clean positional information.
 *
 * @param {State} state
 *   Info passed around about the current state.
 * @param {Nodes} node
 *   hast node.
 * @param {Token.ElementLocation} location
 *   p5 location info.
 * @returns {Position | undefined}
 *   Position, or nothing.
 */ function createLocation(state, node, location) {
    const result = position(location);
    if (node.type === 'element') {
        const tail = node.children[node.children.length - 1];
        // Bug for unclosed with children.
        // See: <https://github.com/inikulin/parse5/issues/109>.
        if (result && !location.endTag && tail && tail.position && tail.position.end) {
            result.end = Object.assign({}, tail.position.end);
        }
        if (state.verbose) {
            /** @type {Record<string, Position | undefined>} */ const properties = {};
            /** @type {string} */ let key;
            if (location.attrs) {
                for(key in location.attrs){
                    if (own.call(location.attrs, key)) {
                        properties[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["find"])(state.schema, key).property] = position(location.attrs[key]);
                    }
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(location.startTag, 'a start tag should exist');
            const opening = position(location.startTag);
            const closing = location.endTag ? position(location.endTag) : undefined;
            /** @type {ElementData['position']} */ const data = {
                opening
            };
            if (closing) data.closing = closing;
            data.properties = properties;
            node.data = {
                position: data
            };
        }
    }
    return result;
}
/**
 * Turn a p5 location into a position.
 *
 * @param {Token.Location} loc
 *   Location.
 * @returns {Position | undefined}
 *   Position or nothing.
 */ function position(loc) {
    const start = point({
        line: loc.startLine,
        column: loc.startCol,
        offset: loc.startOffset
    });
    const end = point({
        line: loc.endLine,
        column: loc.endCol,
        offset: loc.endOffset
    });
    // @ts-expect-error: we do use `undefined` for points if one or the other
    // exists.
    return start || end ? {
        start,
        end
    } : undefined;
}
/**
 * Filter out invalid points.
 *
 * @param {Point} point
 *   Point with potentially `undefined` values.
 * @returns {Point | undefined}
 *   Point or nothing.
 */ function point(point) {
    return point.line && point.column ? point : undefined;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-parse5/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Comment} Comment
 * @typedef {import('hast').Doctype} Doctype
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Nodes} Nodes
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').RootContent} RootContent
 * @typedef {import('hast').Text} Text
 *
 * @typedef {import('parse5').DefaultTreeAdapterMap['document']} Parse5Document
 * @typedef {import('parse5').DefaultTreeAdapterMap['documentFragment']} Parse5Fragment
 * @typedef {import('parse5').DefaultTreeAdapterMap['element']} Parse5Element
 * @typedef {import('parse5').DefaultTreeAdapterMap['node']} Parse5Nodes
 * @typedef {import('parse5').DefaultTreeAdapterMap['documentType']} Parse5Doctype
 * @typedef {import('parse5').DefaultTreeAdapterMap['commentNode']} Parse5Comment
 * @typedef {import('parse5').DefaultTreeAdapterMap['textNode']} Parse5Text
 * @typedef {import('parse5').DefaultTreeAdapterMap['parentNode']} Parse5Parent
 * @typedef {import('parse5').Token.Attribute} Parse5Attribute
 *
 * @typedef {import('property-information').Schema} Schema
 */ /**
 * @typedef Options
 *   Configuration.
 * @property {Space | null | undefined} [space='html']
 *   Which space the document is in (default: `'html'`).
 *
 *   When an `<svg>` element is found in the HTML space, this package already
 *   automatically switches to and from the SVG space when entering and exiting
 *   it.
 *
 * @typedef {Exclude<Parse5Nodes, Parse5Document | Parse5Fragment>} Parse5Content
 *
 * @typedef {'html' | 'svg'} Space
 */ __turbopack_context__.s([
    "toParse5",
    ()=>toParse5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/comma-separated-tokens/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/devlop/lib/development.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$parse5$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-parse5/node_modules/property-information/lib/find.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$parse5$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-parse5/node_modules/property-information/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/space-separated-tokens/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$web$2d$namespaces$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/web-namespaces/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$zwitch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/zwitch/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
/** @type {Options} */ const emptyOptions = {};
const own = {}.hasOwnProperty;
const one = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$zwitch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zwitch"])('type', {
    handlers: {
        root,
        element,
        text,
        comment,
        doctype
    }
});
function toParse5(tree, options) {
    const settings = options || emptyOptions;
    const space = settings.space;
    return one(tree, space === 'svg' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$parse5$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$parse5$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["html"]);
}
/**
 * @param {Root} node
 *   Node (hast) to transform.
 * @param {Schema} schema
 *   Current schema.
 * @returns {Parse5Document}
 *   Parse5 node.
 */ function root(node, schema) {
    /** @type {Parse5Document} */ const result = {
        nodeName: '#document',
        // @ts-expect-error: `parse5` uses enums, which are actually strings.
        mode: (node.data || {}).quirksMode ? 'quirks' : 'no-quirks',
        childNodes: []
    };
    result.childNodes = all(node.children, result, schema);
    patch(node, result);
    return result;
}
/**
 * @param {Root} node
 *   Node (hast) to transform.
 * @param {Schema} schema
 *   Current schema.
 * @returns {Parse5Fragment}
 *   Parse5 node.
 */ function fragment(node, schema) {
    /** @type {Parse5Fragment} */ const result = {
        nodeName: '#document-fragment',
        childNodes: []
    };
    result.childNodes = all(node.children, result, schema);
    patch(node, result);
    return result;
}
/**
 * @param {Doctype} node
 *   Node (hast) to transform.
 * @returns {Parse5Doctype}
 *   Parse5 node.
 */ function doctype(node) {
    /** @type {Parse5Doctype} */ const result = {
        nodeName: '#documentType',
        name: 'html',
        publicId: '',
        systemId: '',
        parentNode: null
    };
    patch(node, result);
    return result;
}
/**
 * @param {Text} node
 *   Node (hast) to transform.
 * @returns {Parse5Text}
 *   Parse5 node.
 */ function text(node) {
    /** @type {Parse5Text} */ const result = {
        nodeName: '#text',
        value: node.value,
        parentNode: null
    };
    patch(node, result);
    return result;
}
/**
 * @param {Comment} node
 *   Node (hast) to transform.
 * @returns {Parse5Comment}
 *   Parse5 node.
 */ function comment(node) {
    /** @type {Parse5Comment} */ const result = {
        nodeName: '#comment',
        data: node.value,
        parentNode: null
    };
    patch(node, result);
    return result;
}
/**
 * @param {Element} node
 *   Node (hast) to transform.
 * @param {Schema} schema
 *   Current schema.
 * @returns {Parse5Element}
 *   Parse5 node.
 */ function element(node, schema) {
    const parentSchema = schema;
    let currentSchema = parentSchema;
    if (node.type === 'element' && node.tagName.toLowerCase() === 'svg' && parentSchema.space === 'html') {
        currentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$parse5$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"];
    }
    /** @type {Array<Parse5Attribute>} */ const attrs = [];
    /** @type {string} */ let prop;
    if (node.properties) {
        for(prop in node.properties){
            if (prop !== 'children' && own.call(node.properties, prop)) {
                const result = createProperty(currentSchema, prop, node.properties[prop]);
                if (result) {
                    attrs.push(result);
                }
            }
        }
    }
    const space = currentSchema.space;
    // `html` and `svg` both have a space.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(space);
    /** @type {Parse5Element} */ const result = {
        nodeName: node.tagName,
        tagName: node.tagName,
        attrs,
        // @ts-expect-error: `parse5` types are wrong.
        namespaceURI: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$web$2d$namespaces$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webNamespaces"][space],
        childNodes: [],
        parentNode: null
    };
    result.childNodes = all(node.children, result, currentSchema);
    patch(node, result);
    if (node.tagName === 'template' && node.content) {
        // @ts-expect-error: `parse5` types are wrong.
        result.content = fragment(node.content, currentSchema);
    }
    return result;
}
/**
 * Handle a property.
 *
 * @param {Schema} schema
 *   Current schema.
 * @param {string} prop
 *   Key.
 * @param {Array<number | string> | boolean | number | string | null | undefined} value
 *   hast property value.
 * @returns {Parse5Attribute | undefined}
 *   Field for runtime, optional.
 */ function createProperty(schema, prop, value) {
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$parse5$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["find"])(schema, prop);
    // Ignore nullish and `NaN` values.
    if (value === false || value === null || value === undefined || typeof value === 'number' && Number.isNaN(value) || !value && info.boolean) {
        return;
    }
    if (Array.isArray(value)) {
        // Accept `array`.
        // Most props are space-separated.
        value = info.commaSeparated ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(value);
    }
    /** @type {Parse5Attribute} */ const attribute = {
        name: info.attribute,
        value: value === true ? '' : String(value)
    };
    if (info.space && info.space !== 'html' && info.space !== 'svg') {
        const index = attribute.name.indexOf(':');
        if (index < 0) {
            attribute.prefix = '';
        } else {
            attribute.name = attribute.name.slice(index + 1);
            attribute.prefix = info.attribute.slice(0, index);
        }
        attribute.namespace = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$web$2d$namespaces$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webNamespaces"][info.space];
    }
    return attribute;
}
/**
 * Transform all hast nodes.
 *
 * @param {Array<RootContent>} children
 *   List of children.
 * @param {Parse5Parent} parentNode
 *   `parse5` parent node.
 * @param {Schema} schema
 *   Current schema.
 * @returns {Array<Parse5Content>}
 *   Transformed children.
 */ function all(children, parentNode, schema) {
    let index = -1;
    /** @type {Array<Parse5Content>} */ const results = [];
    if (children) {
        while(++index < children.length){
            /** @type {Parse5Content} */ const child = one(children[index], schema);
            child.parentNode = parentNode;
            results.push(child);
        }
    }
    return results;
}
/**
 * Add position info from `from` to `to`.
 *
 * @param {Nodes} from
 *   hast node.
 * @param {Parse5Nodes} to
 *   `parse5` node.
 * @returns {undefined}
 *   Nothing.
 */ function patch(from, to) {
    const position = from.position;
    if (position && position.start && position.end) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(typeof position.start.offset === 'number');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(typeof position.end.offset === 'number');
        to.sourceCodeLocation = {
            startLine: position.start.line,
            startCol: position.start.column,
            startOffset: position.start.offset,
            endLine: position.end.line,
            endCol: position.end.column,
            endOffset: position.end.offset
        };
    }
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/html-void-elements/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * List of HTML void tag names.
 *
 * @type {Array<string>}
 */ __turbopack_context__.s([
    "htmlVoidElements",
    ()=>htmlVoidElements
]);
const htmlVoidElements = [
    'area',
    'base',
    'basefont',
    'bgsound',
    'br',
    'col',
    'command',
    'embed',
    'frame',
    'hr',
    'image',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
];
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/entities/dist/esm/generated/decode-data-html.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Generated using scripts/write-decode-map.ts
__turbopack_context__.s([
    "htmlDecodeTree",
    ()=>htmlDecodeTree
]);
const htmlDecodeTree = /* #__PURE__ */ new Uint16Array(// prettier-ignore
/* #__PURE__ */ "\u1d41<\xd5\u0131\u028a\u049d\u057b\u05d0\u0675\u06de\u07a2\u07d6\u080f\u0a4a\u0a91\u0da1\u0e6d\u0f09\u0f26\u10ca\u1228\u12e1\u1415\u149d\u14c3\u14df\u1525\0\0\0\0\0\0\u156b\u16cd\u198d\u1c12\u1ddd\u1f7e\u2060\u21b0\u228d\u23c0\u23fb\u2442\u2824\u2912\u2d08\u2e48\u2fce\u3016\u32ba\u3639\u37ac\u38fe\u3a28\u3a71\u3ae0\u3b2e\u0800EMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig\u803b\xc6\u40c6P\u803b&\u4026cute\u803b\xc1\u40c1reve;\u4102\u0100iyx}rc\u803b\xc2\u40c2;\u4410r;\uc000\ud835\udd04rave\u803b\xc0\u40c0pha;\u4391acr;\u4100d;\u6a53\u0100gp\x9d\xa1on;\u4104f;\uc000\ud835\udd38plyFunction;\u6061ing\u803b\xc5\u40c5\u0100cs\xbe\xc3r;\uc000\ud835\udc9cign;\u6254ilde\u803b\xc3\u40c3ml\u803b\xc4\u40c4\u0400aceforsu\xe5\xfb\xfe\u0117\u011c\u0122\u0127\u012a\u0100cr\xea\xf2kslash;\u6216\u0176\xf6\xf8;\u6ae7ed;\u6306y;\u4411\u0180crt\u0105\u010b\u0114ause;\u6235noullis;\u612ca;\u4392r;\uc000\ud835\udd05pf;\uc000\ud835\udd39eve;\u42d8c\xf2\u0113mpeq;\u624e\u0700HOacdefhilorsu\u014d\u0151\u0156\u0180\u019e\u01a2\u01b5\u01b7\u01ba\u01dc\u0215\u0273\u0278\u027ecy;\u4427PY\u803b\xa9\u40a9\u0180cpy\u015d\u0162\u017aute;\u4106\u0100;i\u0167\u0168\u62d2talDifferentialD;\u6145leys;\u612d\u0200aeio\u0189\u018e\u0194\u0198ron;\u410cdil\u803b\xc7\u40c7rc;\u4108nint;\u6230ot;\u410a\u0100dn\u01a7\u01adilla;\u40b8terDot;\u40b7\xf2\u017fi;\u43a7rcle\u0200DMPT\u01c7\u01cb\u01d1\u01d6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01e2\u01f8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020foubleQuote;\u601duote;\u6019\u0200lnpu\u021e\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6a74\u0180git\u022f\u0236\u023aruent;\u6261nt;\u622fourIntegral;\u622e\u0100fr\u024c\u024e;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6a2fcr;\uc000\ud835\udc9ep\u0100;C\u0284\u0285\u62d3ap;\u624d\u0580DJSZacefios\u02a0\u02ac\u02b0\u02b4\u02b8\u02cb\u02d7\u02e1\u02e6\u0333\u048d\u0100;o\u0179\u02a5trahd;\u6911cy;\u4402cy;\u4405cy;\u440f\u0180grs\u02bf\u02c4\u02c7ger;\u6021r;\u61a1hv;\u6ae4\u0100ay\u02d0\u02d5ron;\u410e;\u4414l\u0100;t\u02dd\u02de\u6207a;\u4394r;\uc000\ud835\udd07\u0100af\u02eb\u0327\u0100cm\u02f0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031ccute;\u40b4o\u0174\u030b\u030d;\u42d9bleAcute;\u42ddrave;\u4060ilde;\u42dcond;\u62c4ferentialD;\u6146\u0470\u033d\0\0\0\u0342\u0354\0\u0405f;\uc000\ud835\udd3b\u0180;DE\u0348\u0349\u034d\u40a8ot;\u60dcqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03cf\u03e2\u03f8ontourIntegra\xec\u0239o\u0274\u0379\0\0\u037b\xbb\u0349nArrow;\u61d3\u0100eo\u0387\u03a4ft\u0180ART\u0390\u0396\u03a1rrow;\u61d0ightArrow;\u61d4e\xe5\u02cang\u0100LR\u03ab\u03c4eft\u0100AR\u03b3\u03b9rrow;\u67f8ightArrow;\u67faightArrow;\u67f9ight\u0100AT\u03d8\u03derrow;\u61d2ee;\u62a8p\u0241\u03e9\0\0\u03efrrow;\u61d1ownArrow;\u61d5erticalBar;\u6225n\u0300ABLRTa\u0412\u042a\u0430\u045e\u047f\u037crrow\u0180;BU\u041d\u041e\u0422\u6193ar;\u6913pArrow;\u61f5reve;\u4311eft\u02d2\u043a\0\u0446\0\u0450ightVector;\u6950eeVector;\u695eector\u0100;B\u0459\u045a\u61bdar;\u6956ight\u01d4\u0467\0\u0471eeVector;\u695fector\u0100;B\u047a\u047b\u61c1ar;\u6957ee\u0100;A\u0486\u0487\u62a4rrow;\u61a7\u0100ct\u0492\u0497r;\uc000\ud835\udc9frok;\u4110\u0800NTacdfglmopqstux\u04bd\u04c0\u04c4\u04cb\u04de\u04e2\u04e7\u04ee\u04f5\u0521\u052f\u0536\u0552\u055d\u0560\u0565G;\u414aH\u803b\xd0\u40d0cute\u803b\xc9\u40c9\u0180aiy\u04d2\u04d7\u04dcron;\u411arc\u803b\xca\u40ca;\u442dot;\u4116r;\uc000\ud835\udd08rave\u803b\xc8\u40c8ement;\u6208\u0100ap\u04fa\u04fecr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65fberySmallSquare;\u65ab\u0100gp\u0526\u052aon;\u4118f;\uc000\ud835\udd3csilon;\u4395u\u0100ai\u053c\u0549l\u0100;T\u0542\u0543\u6a75ilde;\u6242librium;\u61cc\u0100ci\u0557\u055ar;\u6130m;\u6a73a;\u4397ml\u803b\xcb\u40cb\u0100ip\u056a\u056fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058d\u05b2\u05ccy;\u4424r;\uc000\ud835\udd09lled\u0253\u0597\0\0\u05a3mallSquare;\u65fcerySmallSquare;\u65aa\u0370\u05ba\0\u05bf\0\0\u05c4f;\uc000\ud835\udd3dAll;\u6200riertrf;\u6131c\xf2\u05cb\u0600JTabcdfgorst\u05e8\u05ec\u05ef\u05fa\u0600\u0612\u0616\u061b\u061d\u0623\u066c\u0672cy;\u4403\u803b>\u403emma\u0100;d\u05f7\u05f8\u4393;\u43dcreve;\u411e\u0180eiy\u0607\u060c\u0610dil;\u4122rc;\u411c;\u4413ot;\u4120r;\uc000\ud835\udd0a;\u62d9pf;\uc000\ud835\udd3eeater\u0300EFGLST\u0635\u0644\u064e\u0656\u065b\u0666qual\u0100;L\u063e\u063f\u6265ess;\u62dbullEqual;\u6267reater;\u6aa2ess;\u6277lantEqual;\u6a7eilde;\u6273cr;\uc000\ud835\udca2;\u626b\u0400Aacfiosu\u0685\u068b\u0696\u069b\u069e\u06aa\u06be\u06caRDcy;\u442a\u0100ct\u0690\u0694ek;\u42c7;\u405eirc;\u4124r;\u610clbertSpace;\u610b\u01f0\u06af\0\u06b2f;\u610dizontalLine;\u6500\u0100ct\u06c3\u06c5\xf2\u06a9rok;\u4126mp\u0144\u06d0\u06d8ownHum\xf0\u012fqual;\u624f\u0700EJOacdfgmnostu\u06fa\u06fe\u0703\u0707\u070e\u071a\u071e\u0721\u0728\u0744\u0778\u078b\u078f\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803b\xcd\u40cd\u0100iy\u0713\u0718rc\u803b\xce\u40ce;\u4418ot;\u4130r;\u6111rave\u803b\xcc\u40cc\u0180;ap\u0720\u072f\u073f\u0100cg\u0734\u0737r;\u412ainaryI;\u6148lie\xf3\u03dd\u01f4\u0749\0\u0762\u0100;e\u074d\u074e\u622c\u0100gr\u0753\u0758ral;\u622bsection;\u62c2isible\u0100CT\u076c\u0772omma;\u6063imes;\u6062\u0180gpt\u077f\u0783\u0788on;\u412ef;\uc000\ud835\udd40a;\u4399cr;\u6110ilde;\u4128\u01eb\u079a\0\u079ecy;\u4406l\u803b\xcf\u40cf\u0280cfosu\u07ac\u07b7\u07bc\u07c2\u07d0\u0100iy\u07b1\u07b5rc;\u4134;\u4419r;\uc000\ud835\udd0dpf;\uc000\ud835\udd41\u01e3\u07c7\0\u07ccr;\uc000\ud835\udca5rcy;\u4408kcy;\u4404\u0380HJacfos\u07e4\u07e8\u07ec\u07f1\u07fd\u0802\u0808cy;\u4425cy;\u440cppa;\u439a\u0100ey\u07f6\u07fbdil;\u4136;\u441ar;\uc000\ud835\udd0epf;\uc000\ud835\udd42cr;\uc000\ud835\udca6\u0580JTaceflmost\u0825\u0829\u082c\u0850\u0863\u09b3\u09b8\u09c7\u09cd\u0a37\u0a47cy;\u4409\u803b<\u403c\u0280cmnpr\u0837\u083c\u0841\u0844\u084dute;\u4139bda;\u439bg;\u67ealacetrf;\u6112r;\u619e\u0180aey\u0857\u085c\u0861ron;\u413ddil;\u413b;\u441b\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087e\u08a9\u08b1\u08e0\u08e6\u08fc\u092f\u095b\u0390\u096a\u0100nr\u0883\u088fgleBracket;\u67e8row\u0180;BR\u0899\u089a\u089e\u6190ar;\u61e4ightArrow;\u61c6eiling;\u6308o\u01f5\u08b7\0\u08c3bleBracket;\u67e6n\u01d4\u08c8\0\u08d2eeVector;\u6961ector\u0100;B\u08db\u08dc\u61c3ar;\u6959loor;\u630aight\u0100AV\u08ef\u08f5rrow;\u6194ector;\u694e\u0100er\u0901\u0917e\u0180;AV\u0909\u090a\u0910\u62a3rrow;\u61a4ector;\u695aiangle\u0180;BE\u0924\u0925\u0929\u62b2ar;\u69cfqual;\u62b4p\u0180DTV\u0937\u0942\u094cownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61bfar;\u6958ector\u0100;B\u0965\u0966\u61bcar;\u6952ight\xe1\u039cs\u0300EFGLST\u097e\u098b\u0995\u099d\u09a2\u09adqualGreater;\u62daullEqual;\u6266reater;\u6276ess;\u6aa1lantEqual;\u6a7dilde;\u6272r;\uc000\ud835\udd0f\u0100;e\u09bd\u09be\u62d8ftarrow;\u61daidot;\u413f\u0180npw\u09d4\u0a16\u0a1bg\u0200LRlr\u09de\u09f7\u0a02\u0a10eft\u0100AR\u09e6\u09ecrrow;\u67f5ightArrow;\u67f7ightArrow;\u67f6eft\u0100ar\u03b3\u0a0aight\xe1\u03bfight\xe1\u03caf;\uc000\ud835\udd43er\u0100LR\u0a22\u0a2ceftArrow;\u6199ightArrow;\u6198\u0180cht\u0a3e\u0a40\u0a42\xf2\u084c;\u61b0rok;\u4141;\u626a\u0400acefiosu\u0a5a\u0a5d\u0a60\u0a77\u0a7c\u0a85\u0a8b\u0a8ep;\u6905y;\u441c\u0100dl\u0a65\u0a6fiumSpace;\u605flintrf;\u6133r;\uc000\ud835\udd10nusPlus;\u6213pf;\uc000\ud835\udd44c\xf2\u0a76;\u439c\u0480Jacefostu\u0aa3\u0aa7\u0aad\u0ac0\u0b14\u0b19\u0d91\u0d97\u0d9ecy;\u440acute;\u4143\u0180aey\u0ab4\u0ab9\u0aberon;\u4147dil;\u4145;\u441d\u0180gsw\u0ac7\u0af0\u0b0eative\u0180MTV\u0ad3\u0adf\u0ae8ediumSpace;\u600bhi\u0100cn\u0ae6\u0ad8\xeb\u0ad9eryThi\xee\u0ad9ted\u0100GL\u0af8\u0b06reaterGreate\xf2\u0673essLes\xf3\u0a48Line;\u400ar;\uc000\ud835\udd11\u0200Bnpt\u0b22\u0b28\u0b37\u0b3areak;\u6060BreakingSpace;\u40a0f;\u6115\u0680;CDEGHLNPRSTV\u0b55\u0b56\u0b6a\u0b7c\u0ba1\u0beb\u0c04\u0c5e\u0c84\u0ca6\u0cd8\u0d61\u0d85\u6aec\u0100ou\u0b5b\u0b64ngruent;\u6262pCap;\u626doubleVerticalBar;\u6226\u0180lqx\u0b83\u0b8a\u0b9bement;\u6209ual\u0100;T\u0b92\u0b93\u6260ilde;\uc000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0bb6\u0bb7\u0bbd\u0bc9\u0bd3\u0bd8\u0be5\u626fqual;\u6271ullEqual;\uc000\u2267\u0338reater;\uc000\u226b\u0338ess;\u6279lantEqual;\uc000\u2a7e\u0338ilde;\u6275ump\u0144\u0bf2\u0bfdownHump;\uc000\u224e\u0338qual;\uc000\u224f\u0338e\u0100fs\u0c0a\u0c27tTriangle\u0180;BE\u0c1a\u0c1b\u0c21\u62eaar;\uc000\u29cf\u0338qual;\u62ecs\u0300;EGLST\u0c35\u0c36\u0c3c\u0c44\u0c4b\u0c58\u626equal;\u6270reater;\u6278ess;\uc000\u226a\u0338lantEqual;\uc000\u2a7d\u0338ilde;\u6274ested\u0100GL\u0c68\u0c79reaterGreater;\uc000\u2aa2\u0338essLess;\uc000\u2aa1\u0338recedes\u0180;ES\u0c92\u0c93\u0c9b\u6280qual;\uc000\u2aaf\u0338lantEqual;\u62e0\u0100ei\u0cab\u0cb9verseElement;\u620cghtTriangle\u0180;BE\u0ccb\u0ccc\u0cd2\u62ebar;\uc000\u29d0\u0338qual;\u62ed\u0100qu\u0cdd\u0d0cuareSu\u0100bp\u0ce8\u0cf9set\u0100;E\u0cf0\u0cf3\uc000\u228f\u0338qual;\u62e2erset\u0100;E\u0d03\u0d06\uc000\u2290\u0338qual;\u62e3\u0180bcp\u0d13\u0d24\u0d4eset\u0100;E\u0d1b\u0d1e\uc000\u2282\u20d2qual;\u6288ceeds\u0200;EST\u0d32\u0d33\u0d3b\u0d46\u6281qual;\uc000\u2ab0\u0338lantEqual;\u62e1ilde;\uc000\u227f\u0338erset\u0100;E\u0d58\u0d5b\uc000\u2283\u20d2qual;\u6289ilde\u0200;EFT\u0d6e\u0d6f\u0d75\u0d7f\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uc000\ud835\udca9ilde\u803b\xd1\u40d1;\u439d\u0700Eacdfgmoprstuv\u0dbd\u0dc2\u0dc9\u0dd5\u0ddb\u0de0\u0de7\u0dfc\u0e02\u0e20\u0e22\u0e32\u0e3f\u0e44lig;\u4152cute\u803b\xd3\u40d3\u0100iy\u0dce\u0dd3rc\u803b\xd4\u40d4;\u441eblac;\u4150r;\uc000\ud835\udd12rave\u803b\xd2\u40d2\u0180aei\u0dee\u0df2\u0df6cr;\u414cga;\u43a9cron;\u439fpf;\uc000\ud835\udd46enCurly\u0100DQ\u0e0e\u0e1aoubleQuote;\u601cuote;\u6018;\u6a54\u0100cl\u0e27\u0e2cr;\uc000\ud835\udcaaash\u803b\xd8\u40d8i\u016c\u0e37\u0e3cde\u803b\xd5\u40d5es;\u6a37ml\u803b\xd6\u40d6er\u0100BP\u0e4b\u0e60\u0100ar\u0e50\u0e53r;\u603eac\u0100ek\u0e5a\u0e5c;\u63deet;\u63b4arenthesis;\u63dc\u0480acfhilors\u0e7f\u0e87\u0e8a\u0e8f\u0e92\u0e94\u0e9d\u0eb0\u0efcrtialD;\u6202y;\u441fr;\uc000\ud835\udd13i;\u43a6;\u43a0usMinus;\u40b1\u0100ip\u0ea2\u0eadncareplan\xe5\u069df;\u6119\u0200;eio\u0eb9\u0eba\u0ee0\u0ee4\u6abbcedes\u0200;EST\u0ec8\u0ec9\u0ecf\u0eda\u627aqual;\u6aaflantEqual;\u627cilde;\u627eme;\u6033\u0100dp\u0ee9\u0eeeuct;\u620fortion\u0100;a\u0225\u0ef9l;\u621d\u0100ci\u0f01\u0f06r;\uc000\ud835\udcab;\u43a8\u0200Ufos\u0f11\u0f16\u0f1b\u0f1fOT\u803b\"\u4022r;\uc000\ud835\udd14pf;\u611acr;\uc000\ud835\udcac\u0600BEacefhiorsu\u0f3e\u0f43\u0f47\u0f60\u0f73\u0fa7\u0faa\u0fad\u1096\u10a9\u10b4\u10bearr;\u6910G\u803b\xae\u40ae\u0180cnr\u0f4e\u0f53\u0f56ute;\u4154g;\u67ebr\u0100;t\u0f5c\u0f5d\u61a0l;\u6916\u0180aey\u0f67\u0f6c\u0f71ron;\u4158dil;\u4156;\u4420\u0100;v\u0f78\u0f79\u611cerse\u0100EU\u0f82\u0f99\u0100lq\u0f87\u0f8eement;\u620builibrium;\u61cbpEquilibrium;\u696fr\xbb\u0f79o;\u43a1ght\u0400ACDFTUVa\u0fc1\u0feb\u0ff3\u1022\u1028\u105b\u1087\u03d8\u0100nr\u0fc6\u0fd2gleBracket;\u67e9row\u0180;BL\u0fdc\u0fdd\u0fe1\u6192ar;\u61e5eftArrow;\u61c4eiling;\u6309o\u01f5\u0ff9\0\u1005bleBracket;\u67e7n\u01d4\u100a\0\u1014eeVector;\u695dector\u0100;B\u101d\u101e\u61c2ar;\u6955loor;\u630b\u0100er\u102d\u1043e\u0180;AV\u1035\u1036\u103c\u62a2rrow;\u61a6ector;\u695biangle\u0180;BE\u1050\u1051\u1055\u62b3ar;\u69d0qual;\u62b5p\u0180DTV\u1063\u106e\u1078ownVector;\u694feeVector;\u695cector\u0100;B\u1082\u1083\u61bear;\u6954ector\u0100;B\u1091\u1092\u61c0ar;\u6953\u0100pu\u109b\u109ef;\u611dndImplies;\u6970ightarrow;\u61db\u0100ch\u10b9\u10bcr;\u611b;\u61b1leDelayed;\u69f4\u0680HOacfhimoqstu\u10e4\u10f1\u10f7\u10fd\u1119\u111e\u1151\u1156\u1161\u1167\u11b5\u11bb\u11bf\u0100Cc\u10e9\u10eeHcy;\u4429y;\u4428FTcy;\u442ccute;\u415a\u0280;aeiy\u1108\u1109\u110e\u1113\u1117\u6abcron;\u4160dil;\u415erc;\u415c;\u4421r;\uc000\ud835\udd16ort\u0200DLRU\u112a\u1134\u113e\u1149ownArrow\xbb\u041eeftArrow\xbb\u089aightArrow\xbb\u0fddpArrow;\u6191gma;\u43a3allCircle;\u6218pf;\uc000\ud835\udd4a\u0272\u116d\0\0\u1170t;\u621aare\u0200;ISU\u117b\u117c\u1189\u11af\u65a1ntersection;\u6293u\u0100bp\u118f\u119eset\u0100;E\u1197\u1198\u628fqual;\u6291erset\u0100;E\u11a8\u11a9\u6290qual;\u6292nion;\u6294cr;\uc000\ud835\udcaear;\u62c6\u0200bcmp\u11c8\u11db\u1209\u120b\u0100;s\u11cd\u11ce\u62d0et\u0100;E\u11cd\u11d5qual;\u6286\u0100ch\u11e0\u1205eeds\u0200;EST\u11ed\u11ee\u11f4\u11ff\u627bqual;\u6ab0lantEqual;\u627dilde;\u627fTh\xe1\u0f8c;\u6211\u0180;es\u1212\u1213\u1223\u62d1rset\u0100;E\u121c\u121d\u6283qual;\u6287et\xbb\u1213\u0580HRSacfhiors\u123e\u1244\u1249\u1255\u125e\u1271\u1276\u129f\u12c2\u12c8\u12d1ORN\u803b\xde\u40deADE;\u6122\u0100Hc\u124e\u1252cy;\u440by;\u4426\u0100bu\u125a\u125c;\u4009;\u43a4\u0180aey\u1265\u126a\u126fron;\u4164dil;\u4162;\u4422r;\uc000\ud835\udd17\u0100ei\u127b\u1289\u01f2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128e\u1298kSpace;\uc000\u205f\u200aSpace;\u6009lde\u0200;EFT\u12ab\u12ac\u12b2\u12bc\u623cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uc000\ud835\udd4bipleDot;\u60db\u0100ct\u12d6\u12dbr;\uc000\ud835\udcafrok;\u4166\u0ae1\u12f7\u130e\u131a\u1326\0\u132c\u1331\0\0\0\0\0\u1338\u133d\u1377\u1385\0\u13ff\u1404\u140a\u1410\u0100cr\u12fb\u1301ute\u803b\xda\u40dar\u0100;o\u1307\u1308\u619fcir;\u6949r\u01e3\u1313\0\u1316y;\u440eve;\u416c\u0100iy\u131e\u1323rc\u803b\xdb\u40db;\u4423blac;\u4170r;\uc000\ud835\udd18rave\u803b\xd9\u40d9acr;\u416a\u0100di\u1341\u1369er\u0100BP\u1348\u135d\u0100ar\u134d\u1350r;\u405fac\u0100ek\u1357\u1359;\u63dfet;\u63b5arenthesis;\u63ddon\u0100;P\u1370\u1371\u62c3lus;\u628e\u0100gp\u137b\u137fon;\u4172f;\uc000\ud835\udd4c\u0400ADETadps\u1395\u13ae\u13b8\u13c4\u03e8\u13d2\u13d7\u13f3rrow\u0180;BD\u1150\u13a0\u13a4ar;\u6912ownArrow;\u61c5ownArrow;\u6195quilibrium;\u696eee\u0100;A\u13cb\u13cc\u62a5rrow;\u61a5own\xe1\u03f3er\u0100LR\u13de\u13e8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13f9\u13fa\u43d2on;\u43a5ing;\u416ecr;\uc000\ud835\udcb0ilde;\u4168ml\u803b\xdc\u40dc\u0480Dbcdefosv\u1427\u142c\u1430\u1433\u143e\u1485\u148a\u1490\u1496ash;\u62abar;\u6aeby;\u4412ash\u0100;l\u143b\u143c\u62a9;\u6ae6\u0100er\u1443\u1445;\u62c1\u0180bty\u144c\u1450\u147aar;\u6016\u0100;i\u144f\u1455cal\u0200BLST\u1461\u1465\u146a\u1474ar;\u6223ine;\u407ceparator;\u6758ilde;\u6240ThinSpace;\u600ar;\uc000\ud835\udd19pf;\uc000\ud835\udd4dcr;\uc000\ud835\udcb1dash;\u62aa\u0280cefos\u14a7\u14ac\u14b1\u14b6\u14bcirc;\u4174dge;\u62c0r;\uc000\ud835\udd1apf;\uc000\ud835\udd4ecr;\uc000\ud835\udcb2\u0200fios\u14cb\u14d0\u14d2\u14d8r;\uc000\ud835\udd1b;\u439epf;\uc000\ud835\udd4fcr;\uc000\ud835\udcb3\u0480AIUacfosu\u14f1\u14f5\u14f9\u14fd\u1504\u150f\u1514\u151a\u1520cy;\u442fcy;\u4407cy;\u442ecute\u803b\xdd\u40dd\u0100iy\u1509\u150drc;\u4176;\u442br;\uc000\ud835\udd1cpf;\uc000\ud835\udd50cr;\uc000\ud835\udcb4ml;\u4178\u0400Hacdefos\u1535\u1539\u153f\u154b\u154f\u155d\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417d;\u4417ot;\u417b\u01f2\u1554\0\u155boWidt\xe8\u0ad9a;\u4396r;\u6128pf;\u6124cr;\uc000\ud835\udcb5\u0be1\u1583\u158a\u1590\0\u15b0\u15b6\u15bf\0\0\0\0\u15c6\u15db\u15eb\u165f\u166d\0\u1695\u169b\u16b2\u16b9\0\u16becute\u803b\xe1\u40e1reve;\u4103\u0300;Ediuy\u159c\u159d\u15a1\u15a3\u15a8\u15ad\u623e;\uc000\u223e\u0333;\u623frc\u803b\xe2\u40e2te\u80bb\xb4\u0306;\u4430lig\u803b\xe6\u40e6\u0100;r\xb2\u15ba;\uc000\ud835\udd1erave\u803b\xe0\u40e0\u0100ep\u15ca\u15d6\u0100fp\u15cf\u15d4sym;\u6135\xe8\u15d3ha;\u43b1\u0100ap\u15dfc\u0100cl\u15e4\u15e7r;\u4101g;\u6a3f\u0264\u15f0\0\0\u160a\u0280;adsv\u15fa\u15fb\u15ff\u1601\u1607\u6227nd;\u6a55;\u6a5clope;\u6a58;\u6a5a\u0380;elmrsz\u1618\u1619\u161b\u161e\u163f\u164f\u1659\u6220;\u69a4e\xbb\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163a\u163c\u163e;\u69a8;\u69a9;\u69aa;\u69ab;\u69ac;\u69ad;\u69ae;\u69aft\u0100;v\u1645\u1646\u621fb\u0100;d\u164c\u164d\u62be;\u699d\u0100pt\u1654\u1657h;\u6222\xbb\xb9arr;\u637c\u0100gp\u1663\u1667on;\u4105f;\uc000\ud835\udd52\u0380;Eaeiop\u12c1\u167b\u167d\u1682\u1684\u1687\u168a;\u6a70cir;\u6a6f;\u624ad;\u624bs;\u4027rox\u0100;e\u12c1\u1692\xf1\u1683ing\u803b\xe5\u40e5\u0180cty\u16a1\u16a6\u16a8r;\uc000\ud835\udcb6;\u402amp\u0100;e\u12c1\u16af\xf1\u0288ilde\u803b\xe3\u40e3ml\u803b\xe4\u40e4\u0100ci\u16c2\u16c8onin\xf4\u0272nt;\u6a11\u0800Nabcdefiklnoprsu\u16ed\u16f1\u1730\u173c\u1743\u1748\u1778\u177d\u17e0\u17e6\u1839\u1850\u170d\u193d\u1948\u1970ot;\u6aed\u0100cr\u16f6\u171ek\u0200ceps\u1700\u1705\u170d\u1713ong;\u624cpsilon;\u43f6rime;\u6035im\u0100;e\u171a\u171b\u623dq;\u62cd\u0176\u1722\u1726ee;\u62bded\u0100;g\u172c\u172d\u6305e\xbb\u172drk\u0100;t\u135c\u1737brk;\u63b6\u0100oy\u1701\u1741;\u4431quo;\u601e\u0280cmprt\u1753\u175b\u1761\u1764\u1768aus\u0100;e\u010a\u0109ptyv;\u69b0s\xe9\u170cno\xf5\u0113\u0180ahw\u176f\u1771\u1773;\u43b2;\u6136een;\u626cr;\uc000\ud835\udd1fg\u0380costuvw\u178d\u179d\u17b3\u17c1\u17d5\u17db\u17de\u0180aiu\u1794\u1796\u179a\xf0\u0760rc;\u65efp\xbb\u1371\u0180dpt\u17a4\u17a8\u17adot;\u6a00lus;\u6a01imes;\u6a02\u0271\u17b9\0\0\u17becup;\u6a06ar;\u6605riangle\u0100du\u17cd\u17d2own;\u65bdp;\u65b3plus;\u6a04e\xe5\u1444\xe5\u14adarow;\u690d\u0180ako\u17ed\u1826\u1835\u0100cn\u17f2\u1823k\u0180lst\u17fa\u05ab\u1802ozenge;\u69ebriangle\u0200;dlr\u1812\u1813\u1818\u181d\u65b4own;\u65beeft;\u65c2ight;\u65b8k;\u6423\u01b1\u182b\0\u1833\u01b2\u182f\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183e\u184d\u0100;q\u1843\u1846\uc000=\u20e5uiv;\uc000\u2261\u20e5t;\u6310\u0200ptwx\u1859\u185e\u1867\u186cf;\uc000\ud835\udd53\u0100;t\u13cb\u1863om\xbb\u13cctie;\u62c8\u0600DHUVbdhmptuv\u1885\u1896\u18aa\u18bb\u18d7\u18db\u18ec\u18ff\u1905\u190a\u1910\u1921\u0200LRlr\u188e\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18a1\u18a2\u18a4\u18a6\u18a8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18b3\u18b5\u18b7\u18b9;\u655d;\u655a;\u655c;\u6559\u0380;HLRhlr\u18ca\u18cb\u18cd\u18cf\u18d1\u18d3\u18d5\u6551;\u656c;\u6563;\u6560;\u656b;\u6562;\u655fox;\u69c9\u0200LRlr\u18e4\u18e6\u18e8\u18ea;\u6555;\u6552;\u6510;\u650c\u0280;DUdu\u06bd\u18f7\u18f9\u18fb\u18fd;\u6565;\u6568;\u652c;\u6534inus;\u629flus;\u629eimes;\u62a0\u0200LRlr\u1919\u191b\u191d\u191f;\u655b;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193b\u6502;\u656a;\u6561;\u655e;\u653c;\u6524;\u651c\u0100ev\u0123\u1942bar\u803b\xa6\u40a6\u0200ceio\u1951\u1956\u195a\u1960r;\uc000\ud835\udcb7mi;\u604fm\u0100;e\u171a\u171cl\u0180;bh\u1968\u1969\u196b\u405c;\u69c5sub;\u67c8\u016c\u1974\u197el\u0100;e\u1979\u197a\u6022t\xbb\u197ap\u0180;Ee\u012f\u1985\u1987;\u6aae\u0100;q\u06dc\u06db\u0ce1\u19a7\0\u19e8\u1a11\u1a15\u1a32\0\u1a37\u1a50\0\0\u1ab4\0\0\u1ac1\0\0\u1b21\u1b2e\u1b4d\u1b52\0\u1bfd\0\u1c0c\u0180cpr\u19ad\u19b2\u19ddute;\u4107\u0300;abcds\u19bf\u19c0\u19c4\u19ca\u19d5\u19d9\u6229nd;\u6a44rcup;\u6a49\u0100au\u19cf\u19d2p;\u6a4bp;\u6a47ot;\u6a40;\uc000\u2229\ufe00\u0100eo\u19e2\u19e5t;\u6041\xee\u0693\u0200aeiu\u19f0\u19fb\u1a01\u1a05\u01f0\u19f5\0\u19f8s;\u6a4don;\u410ddil\u803b\xe7\u40e7rc;\u4109ps\u0100;s\u1a0c\u1a0d\u6a4cm;\u6a50ot;\u410b\u0180dmn\u1a1b\u1a20\u1a26il\u80bb\xb8\u01adptyv;\u69b2t\u8100\xa2;e\u1a2d\u1a2e\u40a2r\xe4\u01b2r;\uc000\ud835\udd20\u0180cei\u1a3d\u1a40\u1a4dy;\u4447ck\u0100;m\u1a47\u1a48\u6713ark\xbb\u1a48;\u43c7r\u0380;Ecefms\u1a5f\u1a60\u1a62\u1a6b\u1aa4\u1aaa\u1aae\u65cb;\u69c3\u0180;el\u1a69\u1a6a\u1a6d\u42c6q;\u6257e\u0261\u1a74\0\0\u1a88rrow\u0100lr\u1a7c\u1a81eft;\u61baight;\u61bb\u0280RSacd\u1a92\u1a94\u1a96\u1a9a\u1a9f\xbb\u0f47;\u64c8st;\u629birc;\u629aash;\u629dnint;\u6a10id;\u6aefcir;\u69c2ubs\u0100;u\u1abb\u1abc\u6663it\xbb\u1abc\u02ec\u1ac7\u1ad4\u1afa\0\u1b0aon\u0100;e\u1acd\u1ace\u403a\u0100;q\xc7\xc6\u026d\u1ad9\0\0\u1ae2a\u0100;t\u1ade\u1adf\u402c;\u4040\u0180;fl\u1ae8\u1ae9\u1aeb\u6201\xee\u1160e\u0100mx\u1af1\u1af6ent\xbb\u1ae9e\xf3\u024d\u01e7\u1afe\0\u1b07\u0100;d\u12bb\u1b02ot;\u6a6dn\xf4\u0246\u0180fry\u1b10\u1b14\u1b17;\uc000\ud835\udd54o\xe4\u0254\u8100\xa9;s\u0155\u1b1dr;\u6117\u0100ao\u1b25\u1b29rr;\u61b5ss;\u6717\u0100cu\u1b32\u1b37r;\uc000\ud835\udcb8\u0100bp\u1b3c\u1b44\u0100;e\u1b41\u1b42\u6acf;\u6ad1\u0100;e\u1b49\u1b4a\u6ad0;\u6ad2dot;\u62ef\u0380delprvw\u1b60\u1b6c\u1b77\u1b82\u1bac\u1bd4\u1bf9arr\u0100lr\u1b68\u1b6a;\u6938;\u6935\u0270\u1b72\0\0\u1b75r;\u62dec;\u62dfarr\u0100;p\u1b7f\u1b80\u61b6;\u693d\u0300;bcdos\u1b8f\u1b90\u1b96\u1ba1\u1ba5\u1ba8\u622arcap;\u6a48\u0100au\u1b9b\u1b9ep;\u6a46p;\u6a4aot;\u628dr;\u6a45;\uc000\u222a\ufe00\u0200alrv\u1bb5\u1bbf\u1bde\u1be3rr\u0100;m\u1bbc\u1bbd\u61b7;\u693cy\u0180evw\u1bc7\u1bd4\u1bd8q\u0270\u1bce\0\0\u1bd2re\xe3\u1b73u\xe3\u1b75ee;\u62ceedge;\u62cfen\u803b\xa4\u40a4earrow\u0100lr\u1bee\u1bf3eft\xbb\u1b80ight\xbb\u1bbde\xe4\u1bdd\u0100ci\u1c01\u1c07onin\xf4\u01f7nt;\u6231lcty;\u632d\u0980AHabcdefhijlorstuwz\u1c38\u1c3b\u1c3f\u1c5d\u1c69\u1c75\u1c8a\u1c9e\u1cac\u1cb7\u1cfb\u1cff\u1d0d\u1d7b\u1d91\u1dab\u1dbb\u1dc6\u1dcdr\xf2\u0381ar;\u6965\u0200glrs\u1c48\u1c4d\u1c52\u1c54ger;\u6020eth;\u6138\xf2\u1133h\u0100;v\u1c5a\u1c5b\u6010\xbb\u090a\u016b\u1c61\u1c67arow;\u690fa\xe3\u0315\u0100ay\u1c6e\u1c73ron;\u410f;\u4434\u0180;ao\u0332\u1c7c\u1c84\u0100gr\u02bf\u1c81r;\u61catseq;\u6a77\u0180glm\u1c91\u1c94\u1c98\u803b\xb0\u40b0ta;\u43b4ptyv;\u69b1\u0100ir\u1ca3\u1ca8sht;\u697f;\uc000\ud835\udd21ar\u0100lr\u1cb3\u1cb5\xbb\u08dc\xbb\u101e\u0280aegsv\u1cc2\u0378\u1cd6\u1cdc\u1ce0m\u0180;os\u0326\u1cca\u1cd4nd\u0100;s\u0326\u1cd1uit;\u6666amma;\u43ddin;\u62f2\u0180;io\u1ce7\u1ce8\u1cf8\u40f7de\u8100\xf7;o\u1ce7\u1cf0ntimes;\u62c7n\xf8\u1cf7cy;\u4452c\u026f\u1d06\0\0\u1d0arn;\u631eop;\u630d\u0280lptuw\u1d18\u1d1d\u1d22\u1d49\u1d55lar;\u4024f;\uc000\ud835\udd55\u0280;emps\u030b\u1d2d\u1d37\u1d3d\u1d42q\u0100;d\u0352\u1d33ot;\u6251inus;\u6238lus;\u6214quare;\u62a1blebarwedg\xe5\xfan\u0180adh\u112e\u1d5d\u1d67ownarrow\xf3\u1c83arpoon\u0100lr\u1d72\u1d76ef\xf4\u1cb4igh\xf4\u1cb6\u0162\u1d7f\u1d85karo\xf7\u0f42\u026f\u1d8a\0\0\u1d8ern;\u631fop;\u630c\u0180cot\u1d98\u1da3\u1da6\u0100ry\u1d9d\u1da1;\uc000\ud835\udcb9;\u4455l;\u69f6rok;\u4111\u0100dr\u1db0\u1db4ot;\u62f1i\u0100;f\u1dba\u1816\u65bf\u0100ah\u1dc0\u1dc3r\xf2\u0429a\xf2\u0fa6angle;\u69a6\u0100ci\u1dd2\u1dd5y;\u445fgrarr;\u67ff\u0900Dacdefglmnopqrstux\u1e01\u1e09\u1e19\u1e38\u0578\u1e3c\u1e49\u1e61\u1e7e\u1ea5\u1eaf\u1ebd\u1ee1\u1f2a\u1f37\u1f44\u1f4e\u1f5a\u0100Do\u1e06\u1d34o\xf4\u1c89\u0100cs\u1e0e\u1e14ute\u803b\xe9\u40e9ter;\u6a6e\u0200aioy\u1e22\u1e27\u1e31\u1e36ron;\u411br\u0100;c\u1e2d\u1e2e\u6256\u803b\xea\u40ealon;\u6255;\u444dot;\u4117\u0100Dr\u1e41\u1e45ot;\u6252;\uc000\ud835\udd22\u0180;rs\u1e50\u1e51\u1e57\u6a9aave\u803b\xe8\u40e8\u0100;d\u1e5c\u1e5d\u6a96ot;\u6a98\u0200;ils\u1e6a\u1e6b\u1e72\u1e74\u6a99nters;\u63e7;\u6113\u0100;d\u1e79\u1e7a\u6a95ot;\u6a97\u0180aps\u1e85\u1e89\u1e97cr;\u4113ty\u0180;sv\u1e92\u1e93\u1e95\u6205et\xbb\u1e93p\u01001;\u1e9d\u1ea4\u0133\u1ea1\u1ea3;\u6004;\u6005\u6003\u0100gs\u1eaa\u1eac;\u414bp;\u6002\u0100gp\u1eb4\u1eb8on;\u4119f;\uc000\ud835\udd56\u0180als\u1ec4\u1ece\u1ed2r\u0100;s\u1eca\u1ecb\u62d5l;\u69e3us;\u6a71i\u0180;lv\u1eda\u1edb\u1edf\u43b5on\xbb\u1edb;\u43f5\u0200csuv\u1eea\u1ef3\u1f0b\u1f23\u0100io\u1eef\u1e31rc\xbb\u1e2e\u0269\u1ef9\0\0\u1efb\xed\u0548ant\u0100gl\u1f02\u1f06tr\xbb\u1e5dess\xbb\u1e7a\u0180aei\u1f12\u1f16\u1f1als;\u403dst;\u625fv\u0100;D\u0235\u1f20D;\u6a78parsl;\u69e5\u0100Da\u1f2f\u1f33ot;\u6253rr;\u6971\u0180cdi\u1f3e\u1f41\u1ef8r;\u612fo\xf4\u0352\u0100ah\u1f49\u1f4b;\u43b7\u803b\xf0\u40f0\u0100mr\u1f53\u1f57l\u803b\xeb\u40ebo;\u60ac\u0180cip\u1f61\u1f64\u1f67l;\u4021s\xf4\u056e\u0100eo\u1f6c\u1f74ctatio\xee\u0559nential\xe5\u0579\u09e1\u1f92\0\u1f9e\0\u1fa1\u1fa7\0\0\u1fc6\u1fcc\0\u1fd3\0\u1fe6\u1fea\u2000\0\u2008\u205allingdotse\xf1\u1e44y;\u4444male;\u6640\u0180ilr\u1fad\u1fb3\u1fc1lig;\u8000\ufb03\u0269\u1fb9\0\0\u1fbdg;\u8000\ufb00ig;\u8000\ufb04;\uc000\ud835\udd23lig;\u8000\ufb01lig;\uc000fj\u0180alt\u1fd9\u1fdc\u1fe1t;\u666dig;\u8000\ufb02ns;\u65b1of;\u4192\u01f0\u1fee\0\u1ff3f;\uc000\ud835\udd57\u0100ak\u05bf\u1ff7\u0100;v\u1ffc\u1ffd\u62d4;\u6ad9artint;\u6a0d\u0100ao\u200c\u2055\u0100cs\u2011\u2052\u03b1\u201a\u2030\u2038\u2045\u2048\0\u2050\u03b2\u2022\u2025\u2027\u202a\u202c\0\u202e\u803b\xbd\u40bd;\u6153\u803b\xbc\u40bc;\u6155;\u6159;\u615b\u01b3\u2034\0\u2036;\u6154;\u6156\u02b4\u203e\u2041\0\0\u2043\u803b\xbe\u40be;\u6157;\u615c5;\u6158\u01b6\u204c\0\u204e;\u615a;\u615d8;\u615el;\u6044wn;\u6322cr;\uc000\ud835\udcbb\u0880Eabcdefgijlnorstv\u2082\u2089\u209f\u20a5\u20b0\u20b4\u20f0\u20f5\u20fa\u20ff\u2103\u2112\u2138\u0317\u213e\u2152\u219e\u0100;l\u064d\u2087;\u6a8c\u0180cmp\u2090\u2095\u209dute;\u41f5ma\u0100;d\u209c\u1cda\u43b3;\u6a86reve;\u411f\u0100iy\u20aa\u20aerc;\u411d;\u4433ot;\u4121\u0200;lqs\u063e\u0642\u20bd\u20c9\u0180;qs\u063e\u064c\u20c4lan\xf4\u0665\u0200;cdl\u0665\u20d2\u20d5\u20e5c;\u6aa9ot\u0100;o\u20dc\u20dd\u6a80\u0100;l\u20e2\u20e3\u6a82;\u6a84\u0100;e\u20ea\u20ed\uc000\u22db\ufe00s;\u6a94r;\uc000\ud835\udd24\u0100;g\u0673\u061bmel;\u6137cy;\u4453\u0200;Eaj\u065a\u210c\u210e\u2110;\u6a92;\u6aa5;\u6aa4\u0200Eaes\u211b\u211d\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6a8arox\xbb\u2124\u0100;q\u212e\u212f\u6a88\u0100;q\u212e\u211bim;\u62e7pf;\uc000\ud835\udd58\u0100ci\u2143\u2146r;\u610am\u0180;el\u066b\u214e\u2150;\u6a8e;\u6a90\u8300>;cdlqr\u05ee\u2160\u216a\u216e\u2173\u2179\u0100ci\u2165\u2167;\u6aa7r;\u6a7aot;\u62d7Par;\u6995uest;\u6a7c\u0280adels\u2184\u216a\u2190\u0656\u219b\u01f0\u2189\0\u218epro\xf8\u209er;\u6978q\u0100lq\u063f\u2196les\xf3\u2088i\xed\u066b\u0100en\u21a3\u21adrtneqq;\uc000\u2269\ufe00\xc5\u21aa\u0500Aabcefkosy\u21c4\u21c7\u21f1\u21f5\u21fa\u2218\u221d\u222f\u2268\u227dr\xf2\u03a0\u0200ilmr\u21d0\u21d4\u21d7\u21dbrs\xf0\u1484f\xbb\u2024il\xf4\u06a9\u0100dr\u21e0\u21e4cy;\u444a\u0180;cw\u08f4\u21eb\u21efir;\u6948;\u61adar;\u610firc;\u4125\u0180alr\u2201\u220e\u2213rts\u0100;u\u2209\u220a\u6665it\xbb\u220alip;\u6026con;\u62b9r;\uc000\ud835\udd25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223a\u223e\u2243\u225e\u2263rr;\u61fftht;\u623bk\u0100lr\u2249\u2253eftarrow;\u61a9ightarrow;\u61aaf;\uc000\ud835\udd59bar;\u6015\u0180clt\u226f\u2274\u2278r;\uc000\ud835\udcbdas\xe8\u21f4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xbb\u1c5b\u0ae1\u22a3\0\u22aa\0\u22b8\u22c5\u22ce\0\u22d5\u22f3\0\0\u22f8\u2322\u2367\u2362\u237f\0\u2386\u23aa\u23b4cute\u803b\xed\u40ed\u0180;iy\u0771\u22b0\u22b5rc\u803b\xee\u40ee;\u4438\u0100cx\u22bc\u22bfy;\u4435cl\u803b\xa1\u40a1\u0100fr\u039f\u22c9;\uc000\ud835\udd26rave\u803b\xec\u40ec\u0200;ino\u073e\u22dd\u22e9\u22ee\u0100in\u22e2\u22e6nt;\u6a0ct;\u622dfin;\u69dcta;\u6129lig;\u4133\u0180aop\u22fe\u231a\u231d\u0180cgt\u2305\u2308\u2317r;\u412b\u0180elp\u071f\u230f\u2313in\xe5\u078ear\xf4\u0720h;\u4131f;\u62b7ed;\u41b5\u0280;cfot\u04f4\u232c\u2331\u233d\u2341are;\u6105in\u0100;t\u2338\u2339\u621eie;\u69dddo\xf4\u2319\u0280;celp\u0757\u234c\u2350\u235b\u2361al;\u62ba\u0100gr\u2355\u2359er\xf3\u1563\xe3\u234darhk;\u6a17rod;\u6a3c\u0200cgpt\u236f\u2372\u2376\u237by;\u4451on;\u412ff;\uc000\ud835\udd5aa;\u43b9uest\u803b\xbf\u40bf\u0100ci\u238a\u238fr;\uc000\ud835\udcben\u0280;Edsv\u04f4\u239b\u239d\u23a1\u04f3;\u62f9ot;\u62f5\u0100;v\u23a6\u23a7\u62f4;\u62f3\u0100;i\u0777\u23aelde;\u4129\u01eb\u23b8\0\u23bccy;\u4456l\u803b\xef\u40ef\u0300cfmosu\u23cc\u23d7\u23dc\u23e1\u23e7\u23f5\u0100iy\u23d1\u23d5rc;\u4135;\u4439r;\uc000\ud835\udd27ath;\u4237pf;\uc000\ud835\udd5b\u01e3\u23ec\0\u23f1r;\uc000\ud835\udcbfrcy;\u4458kcy;\u4454\u0400acfghjos\u240b\u2416\u2422\u2427\u242d\u2431\u2435\u243bppa\u0100;v\u2413\u2414\u43ba;\u43f0\u0100ey\u241b\u2420dil;\u4137;\u443ar;\uc000\ud835\udd28reen;\u4138cy;\u4445cy;\u445cpf;\uc000\ud835\udd5ccr;\uc000\ud835\udcc0\u0b80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248d\u2491\u250e\u253d\u255a\u2580\u264e\u265e\u2665\u2679\u267d\u269a\u26b2\u26d8\u275d\u2768\u278b\u27c0\u2801\u2812\u0180art\u2477\u247a\u247cr\xf2\u09c6\xf2\u0395ail;\u691barr;\u690e\u0100;g\u0994\u248b;\u6a8bar;\u6962\u0963\u24a5\0\u24aa\0\u24b1\0\0\0\0\0\u24b5\u24ba\0\u24c6\u24c8\u24cd\0\u24f9ute;\u413amptyv;\u69b4ra\xee\u084cbda;\u43bbg\u0180;dl\u088e\u24c1\u24c3;\u6991\xe5\u088e;\u6a85uo\u803b\xab\u40abr\u0400;bfhlpst\u0899\u24de\u24e6\u24e9\u24eb\u24ee\u24f1\u24f5\u0100;f\u089d\u24e3s;\u691fs;\u691d\xeb\u2252p;\u61abl;\u6939im;\u6973l;\u61a2\u0180;ae\u24ff\u2500\u2504\u6aabil;\u6919\u0100;s\u2509\u250a\u6aad;\uc000\u2aad\ufe00\u0180abr\u2515\u2519\u251drr;\u690crk;\u6772\u0100ak\u2522\u252cc\u0100ek\u2528\u252a;\u407b;\u405b\u0100es\u2531\u2533;\u698bl\u0100du\u2539\u253b;\u698f;\u698d\u0200aeuy\u2546\u254b\u2556\u2558ron;\u413e\u0100di\u2550\u2554il;\u413c\xec\u08b0\xe2\u2529;\u443b\u0200cqrs\u2563\u2566\u256d\u257da;\u6936uo\u0100;r\u0e19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694bh;\u61b2\u0280;fgqs\u258b\u258c\u0989\u25f3\u25ff\u6264t\u0280ahlrt\u2598\u25a4\u25b7\u25c2\u25e8rrow\u0100;t\u0899\u25a1a\xe9\u24f6arpoon\u0100du\u25af\u25b4own\xbb\u045ap\xbb\u0966eftarrows;\u61c7ight\u0180ahs\u25cd\u25d6\u25derrow\u0100;s\u08f4\u08a7arpoon\xf3\u0f98quigarro\xf7\u21f0hreetimes;\u62cb\u0180;qs\u258b\u0993\u25falan\xf4\u09ac\u0280;cdgs\u09ac\u260a\u260d\u261d\u2628c;\u6aa8ot\u0100;o\u2614\u2615\u6a7f\u0100;r\u261a\u261b\u6a81;\u6a83\u0100;e\u2622\u2625\uc000\u22da\ufe00s;\u6a93\u0280adegs\u2633\u2639\u263d\u2649\u264bppro\xf8\u24c6ot;\u62d6q\u0100gq\u2643\u2645\xf4\u0989gt\xf2\u248c\xf4\u099bi\xed\u09b2\u0180ilr\u2655\u08e1\u265asht;\u697c;\uc000\ud835\udd29\u0100;E\u099c\u2663;\u6a91\u0161\u2669\u2676r\u0100du\u25b2\u266e\u0100;l\u0965\u2673;\u696alk;\u6584cy;\u4459\u0280;acht\u0a48\u2688\u268b\u2691\u2696r\xf2\u25c1orne\xf2\u1d08ard;\u696bri;\u65fa\u0100io\u269f\u26a4dot;\u4140ust\u0100;a\u26ac\u26ad\u63b0che\xbb\u26ad\u0200Eaes\u26bb\u26bd\u26c9\u26d4;\u6268p\u0100;p\u26c3\u26c4\u6a89rox\xbb\u26c4\u0100;q\u26ce\u26cf\u6a87\u0100;q\u26ce\u26bbim;\u62e6\u0400abnoptwz\u26e9\u26f4\u26f7\u271a\u272f\u2741\u2747\u2750\u0100nr\u26ee\u26f1g;\u67ecr;\u61fdr\xeb\u08c1g\u0180lmr\u26ff\u270d\u2714eft\u0100ar\u09e6\u2707ight\xe1\u09f2apsto;\u67fcight\xe1\u09fdparrow\u0100lr\u2725\u2729ef\xf4\u24edight;\u61ac\u0180afl\u2736\u2739\u273dr;\u6985;\uc000\ud835\udd5dus;\u6a2dimes;\u6a34\u0161\u274b\u274fst;\u6217\xe1\u134e\u0180;ef\u2757\u2758\u1800\u65cange\xbb\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277c\u2785\u2787r\xf2\u08a8orne\xf2\u1d8car\u0100;d\u0f98\u2783;\u696d;\u600eri;\u62bf\u0300achiqt\u2798\u279d\u0a40\u27a2\u27ae\u27bbquo;\u6039r;\uc000\ud835\udcc1m\u0180;eg\u09b2\u27aa\u27ac;\u6a8d;\u6a8f\u0100bu\u252a\u27b3o\u0100;r\u0e1f\u27b9;\u601arok;\u4142\u8400<;cdhilqr\u082b\u27d2\u2639\u27dc\u27e0\u27e5\u27ea\u27f0\u0100ci\u27d7\u27d9;\u6aa6r;\u6a79re\xe5\u25f2mes;\u62c9arr;\u6976uest;\u6a7b\u0100Pi\u27f5\u27f9ar;\u6996\u0180;ef\u2800\u092d\u181b\u65c3r\u0100du\u2807\u280dshar;\u694ahar;\u6966\u0100en\u2817\u2821rtneqq;\uc000\u2268\ufe00\xc5\u281e\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288e\u2893\u28a0\u28a5\u28a8\u28da\u28e2\u28e4\u0a83\u28f3\u2902Dot;\u623a\u0200clpr\u284e\u2852\u2863\u287dr\u803b\xaf\u40af\u0100et\u2857\u2859;\u6642\u0100;e\u285e\u285f\u6720se\xbb\u285f\u0100;s\u103b\u2868to\u0200;dlu\u103b\u2873\u2877\u287bow\xee\u048cef\xf4\u090f\xf0\u13d1ker;\u65ae\u0100oy\u2887\u288cmma;\u6a29;\u443cash;\u6014asuredangle\xbb\u1626r;\uc000\ud835\udd2ao;\u6127\u0180cdn\u28af\u28b4\u28c9ro\u803b\xb5\u40b5\u0200;acd\u1464\u28bd\u28c0\u28c4s\xf4\u16a7ir;\u6af0ot\u80bb\xb7\u01b5us\u0180;bd\u28d2\u1903\u28d3\u6212\u0100;u\u1d3c\u28d8;\u6a2a\u0163\u28de\u28e1p;\u6adb\xf2\u2212\xf0\u0a81\u0100dp\u28e9\u28eeels;\u62a7f;\uc000\ud835\udd5e\u0100ct\u28f8\u28fdr;\uc000\ud835\udcc2pos\xbb\u159d\u0180;lm\u2909\u290a\u290d\u43bctimap;\u62b8\u0c00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297e\u2989\u2998\u29da\u29e9\u2a15\u2a1a\u2a58\u2a5d\u2a83\u2a95\u2aa4\u2aa8\u2b04\u2b07\u2b44\u2b7f\u2bae\u2c34\u2c67\u2c7c\u2ce9\u0100gt\u2947\u294b;\uc000\u22d9\u0338\u0100;v\u2950\u0bcf\uc000\u226b\u20d2\u0180elt\u295a\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61cdightarrow;\u61ce;\uc000\u22d8\u0338\u0100;v\u297b\u0c47\uc000\u226a\u20d2ightarrow;\u61cf\u0100Dd\u298e\u2993ash;\u62afash;\u62ae\u0280bcnpt\u29a3\u29a7\u29ac\u29b1\u29ccla\xbb\u02deute;\u4144g;\uc000\u2220\u20d2\u0280;Eiop\u0d84\u29bc\u29c0\u29c5\u29c8;\uc000\u2a70\u0338d;\uc000\u224b\u0338s;\u4149ro\xf8\u0d84ur\u0100;a\u29d3\u29d4\u666el\u0100;s\u29d3\u0b38\u01f3\u29df\0\u29e3p\u80bb\xa0\u0b37mp\u0100;e\u0bf9\u0c00\u0280aeouy\u29f4\u29fe\u2a03\u2a10\u2a13\u01f0\u29f9\0\u29fb;\u6a43on;\u4148dil;\u4146ng\u0100;d\u0d7e\u2a0aot;\uc000\u2a6d\u0338p;\u6a42;\u443dash;\u6013\u0380;Aadqsx\u0b92\u2a29\u2a2d\u2a3b\u2a41\u2a45\u2a50rr;\u61d7r\u0100hr\u2a33\u2a36k;\u6924\u0100;o\u13f2\u13f0ot;\uc000\u2250\u0338ui\xf6\u0b63\u0100ei\u2a4a\u2a4ear;\u6928\xed\u0b98ist\u0100;s\u0ba0\u0b9fr;\uc000\ud835\udd2b\u0200Eest\u0bc5\u2a66\u2a79\u2a7c\u0180;qs\u0bbc\u2a6d\u0be1\u0180;qs\u0bbc\u0bc5\u2a74lan\xf4\u0be2i\xed\u0bea\u0100;r\u0bb6\u2a81\xbb\u0bb7\u0180Aap\u2a8a\u2a8d\u2a91r\xf2\u2971rr;\u61aear;\u6af2\u0180;sv\u0f8d\u2a9c\u0f8c\u0100;d\u2aa1\u2aa2\u62fc;\u62facy;\u445a\u0380AEadest\u2ab7\u2aba\u2abe\u2ac2\u2ac5\u2af6\u2af9r\xf2\u2966;\uc000\u2266\u0338rr;\u619ar;\u6025\u0200;fqs\u0c3b\u2ace\u2ae3\u2aeft\u0100ar\u2ad4\u2ad9rro\xf7\u2ac1ightarro\xf7\u2a90\u0180;qs\u0c3b\u2aba\u2aealan\xf4\u0c55\u0100;s\u0c55\u2af4\xbb\u0c36i\xed\u0c5d\u0100;r\u0c35\u2afei\u0100;e\u0c1a\u0c25i\xe4\u0d90\u0100pt\u2b0c\u2b11f;\uc000\ud835\udd5f\u8180\xac;in\u2b19\u2b1a\u2b36\u40acn\u0200;Edv\u0b89\u2b24\u2b28\u2b2e;\uc000\u22f9\u0338ot;\uc000\u22f5\u0338\u01e1\u0b89\u2b33\u2b35;\u62f7;\u62f6i\u0100;v\u0cb8\u2b3c\u01e1\u0cb8\u2b41\u2b43;\u62fe;\u62fd\u0180aor\u2b4b\u2b63\u2b69r\u0200;ast\u0b7b\u2b55\u2b5a\u2b5flle\xec\u0b7bl;\uc000\u2afd\u20e5;\uc000\u2202\u0338lint;\u6a14\u0180;ce\u0c92\u2b70\u2b73u\xe5\u0ca5\u0100;c\u0c98\u2b78\u0100;e\u0c92\u2b7d\xf1\u0c98\u0200Aait\u2b88\u2b8b\u2b9d\u2ba7r\xf2\u2988rr\u0180;cw\u2b94\u2b95\u2b99\u619b;\uc000\u2933\u0338;\uc000\u219d\u0338ghtarrow\xbb\u2b95ri\u0100;e\u0ccb\u0cd6\u0380chimpqu\u2bbd\u2bcd\u2bd9\u2b04\u0b78\u2be4\u2bef\u0200;cer\u0d32\u2bc6\u0d37\u2bc9u\xe5\u0d45;\uc000\ud835\udcc3ort\u026d\u2b05\0\0\u2bd6ar\xe1\u2b56m\u0100;e\u0d6e\u2bdf\u0100;q\u0d74\u0d73su\u0100bp\u2beb\u2bed\xe5\u0cf8\xe5\u0d0b\u0180bcp\u2bf6\u2c11\u2c19\u0200;Ees\u2bff\u2c00\u0d22\u2c04\u6284;\uc000\u2ac5\u0338et\u0100;e\u0d1b\u2c0bq\u0100;q\u0d23\u2c00c\u0100;e\u0d32\u2c17\xf1\u0d38\u0200;Ees\u2c22\u2c23\u0d5f\u2c27\u6285;\uc000\u2ac6\u0338et\u0100;e\u0d58\u2c2eq\u0100;q\u0d60\u2c23\u0200gilr\u2c3d\u2c3f\u2c45\u2c47\xec\u0bd7lde\u803b\xf1\u40f1\xe7\u0c43iangle\u0100lr\u2c52\u2c5ceft\u0100;e\u0c1a\u2c5a\xf1\u0c26ight\u0100;e\u0ccb\u2c65\xf1\u0cd7\u0100;m\u2c6c\u2c6d\u43bd\u0180;es\u2c74\u2c75\u2c79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2c8f\u2c94\u2c99\u2c9e\u2ca3\u2cb0\u2cb6\u2cd3\u2ce3ash;\u62adarr;\u6904p;\uc000\u224d\u20d2ash;\u62ac\u0100et\u2ca8\u2cac;\uc000\u2265\u20d2;\uc000>\u20d2nfin;\u69de\u0180Aet\u2cbd\u2cc1\u2cc5rr;\u6902;\uc000\u2264\u20d2\u0100;r\u2cca\u2ccd\uc000<\u20d2ie;\uc000\u22b4\u20d2\u0100At\u2cd8\u2cdcrr;\u6903rie;\uc000\u22b5\u20d2im;\uc000\u223c\u20d2\u0180Aan\u2cf0\u2cf4\u2d02rr;\u61d6r\u0100hr\u2cfa\u2cfdk;\u6923\u0100;o\u13e7\u13e5ear;\u6927\u1253\u1a95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2d2d\0\u2d38\u2d48\u2d60\u2d65\u2d72\u2d84\u1b07\0\0\u2d8d\u2dab\0\u2dc8\u2dce\0\u2ddc\u2e19\u2e2b\u2e3e\u2e43\u0100cs\u2d31\u1a97ute\u803b\xf3\u40f3\u0100iy\u2d3c\u2d45r\u0100;c\u1a9e\u2d42\u803b\xf4\u40f4;\u443e\u0280abios\u1aa0\u2d52\u2d57\u01c8\u2d5alac;\u4151v;\u6a38old;\u69bclig;\u4153\u0100cr\u2d69\u2d6dir;\u69bf;\uc000\ud835\udd2c\u036f\u2d79\0\0\u2d7c\0\u2d82n;\u42dbave\u803b\xf2\u40f2;\u69c1\u0100bm\u2d88\u0df4ar;\u69b5\u0200acit\u2d95\u2d98\u2da5\u2da8r\xf2\u1a80\u0100ir\u2d9d\u2da0r;\u69beoss;\u69bbn\xe5\u0e52;\u69c0\u0180aei\u2db1\u2db5\u2db9cr;\u414dga;\u43c9\u0180cdn\u2dc0\u2dc5\u01cdron;\u43bf;\u69b6pf;\uc000\ud835\udd60\u0180ael\u2dd4\u2dd7\u01d2r;\u69b7rp;\u69b9\u0380;adiosv\u2dea\u2deb\u2dee\u2e08\u2e0d\u2e10\u2e16\u6228r\xf2\u1a86\u0200;efm\u2df7\u2df8\u2e02\u2e05\u6a5dr\u0100;o\u2dfe\u2dff\u6134f\xbb\u2dff\u803b\xaa\u40aa\u803b\xba\u40bagof;\u62b6r;\u6a56lope;\u6a57;\u6a5b\u0180clo\u2e1f\u2e21\u2e27\xf2\u2e01ash\u803b\xf8\u40f8l;\u6298i\u016c\u2e2f\u2e34de\u803b\xf5\u40f5es\u0100;a\u01db\u2e3as;\u6a36ml\u803b\xf6\u40f6bar;\u633d\u0ae1\u2e5e\0\u2e7d\0\u2e80\u2e9d\0\u2ea2\u2eb9\0\0\u2ecb\u0e9c\0\u2f13\0\0\u2f2b\u2fbc\0\u2fc8r\u0200;ast\u0403\u2e67\u2e72\u0e85\u8100\xb6;l\u2e6d\u2e6e\u40b6le\xec\u0403\u0269\u2e78\0\0\u2e7bm;\u6af3;\u6afdy;\u443fr\u0280cimpt\u2e8b\u2e8f\u2e93\u1865\u2e97nt;\u4025od;\u402eil;\u6030enk;\u6031r;\uc000\ud835\udd2d\u0180imo\u2ea8\u2eb0\u2eb4\u0100;v\u2ead\u2eae\u43c6;\u43d5ma\xf4\u0a76ne;\u660e\u0180;tv\u2ebf\u2ec0\u2ec8\u43c0chfork\xbb\u1ffd;\u43d6\u0100au\u2ecf\u2edfn\u0100ck\u2ed5\u2eddk\u0100;h\u21f4\u2edb;\u610e\xf6\u21f4s\u0480;abcdemst\u2ef3\u2ef4\u1908\u2ef9\u2efd\u2f04\u2f06\u2f0a\u2f0e\u402bcir;\u6a23ir;\u6a22\u0100ou\u1d40\u2f02;\u6a25;\u6a72n\u80bb\xb1\u0e9dim;\u6a26wo;\u6a27\u0180ipu\u2f19\u2f20\u2f25ntint;\u6a15f;\uc000\ud835\udd61nd\u803b\xa3\u40a3\u0500;Eaceinosu\u0ec8\u2f3f\u2f41\u2f44\u2f47\u2f81\u2f89\u2f92\u2f7e\u2fb6;\u6ab3p;\u6ab7u\xe5\u0ed9\u0100;c\u0ece\u2f4c\u0300;acens\u0ec8\u2f59\u2f5f\u2f66\u2f68\u2f7eppro\xf8\u2f43urlye\xf1\u0ed9\xf1\u0ece\u0180aes\u2f6f\u2f76\u2f7approx;\u6ab9qq;\u6ab5im;\u62e8i\xed\u0edfme\u0100;s\u2f88\u0eae\u6032\u0180Eas\u2f78\u2f90\u2f7a\xf0\u2f75\u0180dfp\u0eec\u2f99\u2faf\u0180als\u2fa0\u2fa5\u2faalar;\u632eine;\u6312urf;\u6313\u0100;t\u0efb\u2fb4\xef\u0efbrel;\u62b0\u0100ci\u2fc0\u2fc5r;\uc000\ud835\udcc5;\u43c8ncsp;\u6008\u0300fiopsu\u2fda\u22e2\u2fdf\u2fe5\u2feb\u2ff1r;\uc000\ud835\udd2epf;\uc000\ud835\udd62rime;\u6057cr;\uc000\ud835\udcc6\u0180aeo\u2ff8\u3009\u3013t\u0100ei\u2ffe\u3005rnion\xf3\u06b0nt;\u6a16st\u0100;e\u3010\u3011\u403f\xf1\u1f19\xf4\u0f14\u0a80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30e0\u310e\u312b\u3147\u3162\u3172\u318e\u3206\u3215\u3224\u3229\u3258\u326e\u3272\u3290\u32b0\u32b7\u0180art\u3047\u304a\u304cr\xf2\u10b3\xf2\u03ddail;\u691car\xf2\u1c65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307f\u308f\u3094\u30cc\u0100eu\u306d\u3071;\uc000\u223d\u0331te;\u4155i\xe3\u116emptyv;\u69b3g\u0200;del\u0fd1\u3089\u308b\u308d;\u6992;\u69a5\xe5\u0fd1uo\u803b\xbb\u40bbr\u0580;abcfhlpstw\u0fdc\u30ac\u30af\u30b7\u30b9\u30bc\u30be\u30c0\u30c3\u30c7\u30cap;\u6975\u0100;f\u0fe0\u30b4s;\u6920;\u6933s;\u691e\xeb\u225d\xf0\u272el;\u6945im;\u6974l;\u61a3;\u619d\u0100ai\u30d1\u30d5il;\u691ao\u0100;n\u30db\u30dc\u6236al\xf3\u0f1e\u0180abr\u30e7\u30ea\u30eer\xf2\u17e5rk;\u6773\u0100ak\u30f3\u30fdc\u0100ek\u30f9\u30fb;\u407d;\u405d\u0100es\u3102\u3104;\u698cl\u0100du\u310a\u310c;\u698e;\u6990\u0200aeuy\u3117\u311c\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xec\u0ff2\xe2\u30fa;\u4440\u0200clqs\u3134\u3137\u313d\u3144a;\u6937dhar;\u6969uo\u0100;r\u020e\u020dh;\u61b3\u0180acg\u314e\u315f\u0f44l\u0200;ips\u0f78\u3158\u315b\u109cn\xe5\u10bbar\xf4\u0fa9t;\u65ad\u0180ilr\u3169\u1023\u316esht;\u697d;\uc000\ud835\udd2f\u0100ao\u3177\u3186r\u0100du\u317d\u317f\xbb\u047b\u0100;l\u1091\u3184;\u696c\u0100;v\u318b\u318c\u43c1;\u43f1\u0180gns\u3195\u31f9\u31fcht\u0300ahlrst\u31a4\u31b0\u31c2\u31d8\u31e4\u31eerrow\u0100;t\u0fdc\u31ada\xe9\u30c8arpoon\u0100du\u31bb\u31bfow\xee\u317ep\xbb\u1092eft\u0100ah\u31ca\u31d0rrow\xf3\u0feaarpoon\xf3\u0551ightarrows;\u61c9quigarro\xf7\u30cbhreetimes;\u62ccg;\u42daingdotse\xf1\u1f32\u0180ahm\u320d\u3210\u3213r\xf2\u0feaa\xf2\u0551;\u600foust\u0100;a\u321e\u321f\u63b1che\xbb\u321fmid;\u6aee\u0200abpt\u3232\u323d\u3240\u3252\u0100nr\u3237\u323ag;\u67edr;\u61fer\xeb\u1003\u0180afl\u3247\u324a\u324er;\u6986;\uc000\ud835\udd63us;\u6a2eimes;\u6a35\u0100ap\u325d\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6a12ar\xf2\u31e3\u0200achq\u327b\u3280\u10bc\u3285quo;\u603ar;\uc000\ud835\udcc7\u0100bu\u30fb\u328ao\u0100;r\u0214\u0213\u0180hir\u3297\u329b\u32a0re\xe5\u31f8mes;\u62cai\u0200;efl\u32aa\u1059\u1821\u32ab\u65b9tri;\u69celuhar;\u6968;\u611e\u0d61\u32d5\u32db\u32df\u332c\u3338\u3371\0\u337a\u33a4\0\0\u33ec\u33f0\0\u3428\u3448\u345a\u34ad\u34b1\u34ca\u34f1\0\u3616\0\0\u3633cute;\u415bqu\xef\u27ba\u0500;Eaceinpsy\u11ed\u32f3\u32f5\u32ff\u3302\u330b\u330f\u331f\u3326\u3329;\u6ab4\u01f0\u32fa\0\u32fc;\u6ab8on;\u4161u\xe5\u11fe\u0100;d\u11f3\u3307il;\u415frc;\u415d\u0180Eas\u3316\u3318\u331b;\u6ab6p;\u6abaim;\u62e9olint;\u6a13i\xed\u1204;\u4441ot\u0180;be\u3334\u1d47\u3335\u62c5;\u6a66\u0380Aacmstx\u3346\u334a\u3357\u335b\u335e\u3363\u336drr;\u61d8r\u0100hr\u3350\u3352\xeb\u2228\u0100;o\u0a36\u0a34t\u803b\xa7\u40a7i;\u403bwar;\u6929m\u0100in\u3369\xf0nu\xf3\xf1t;\u6736r\u0100;o\u3376\u2055\uc000\ud835\udd30\u0200acoy\u3382\u3386\u3391\u33a0rp;\u666f\u0100hy\u338b\u338fcy;\u4449;\u4448rt\u026d\u3399\0\0\u339ci\xe4\u1464ara\xec\u2e6f\u803b\xad\u40ad\u0100gm\u33a8\u33b4ma\u0180;fv\u33b1\u33b2\u33b2\u43c3;\u43c2\u0400;deglnpr\u12ab\u33c5\u33c9\u33ce\u33d6\u33de\u33e1\u33e6ot;\u6a6a\u0100;q\u12b1\u12b0\u0100;E\u33d3\u33d4\u6a9e;\u6aa0\u0100;E\u33db\u33dc\u6a9d;\u6a9fe;\u6246lus;\u6a24arr;\u6972ar\xf2\u113d\u0200aeit\u33f8\u3408\u340f\u3417\u0100ls\u33fd\u3404lsetm\xe9\u336ahp;\u6a33parsl;\u69e4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341c\u341d\u6aaa\u0100;s\u3422\u3423\u6aac;\uc000\u2aac\ufe00\u0180flp\u342e\u3433\u3442tcy;\u444c\u0100;b\u3438\u3439\u402f\u0100;a\u343e\u343f\u69c4r;\u633ff;\uc000\ud835\udd64a\u0100dr\u344d\u0402es\u0100;u\u3454\u3455\u6660it\xbb\u3455\u0180csu\u3460\u3479\u349f\u0100au\u3465\u346fp\u0100;s\u1188\u346b;\uc000\u2293\ufe00p\u0100;s\u11b4\u3475;\uc000\u2294\ufe00u\u0100bp\u347f\u348f\u0180;es\u1197\u119c\u3486et\u0100;e\u1197\u348d\xf1\u119d\u0180;es\u11a8\u11ad\u3496et\u0100;e\u11a8\u349d\xf1\u11ae\u0180;af\u117b\u34a6\u05b0r\u0165\u34ab\u05b1\xbb\u117car\xf2\u1148\u0200cemt\u34b9\u34be\u34c2\u34c5r;\uc000\ud835\udcc8tm\xee\xf1i\xec\u3415ar\xe6\u11be\u0100ar\u34ce\u34d5r\u0100;f\u34d4\u17bf\u6606\u0100an\u34da\u34edight\u0100ep\u34e3\u34eapsilo\xee\u1ee0h\xe9\u2eafs\xbb\u2852\u0280bcmnp\u34fb\u355e\u1209\u358b\u358e\u0480;Edemnprs\u350e\u350f\u3511\u3515\u351e\u3523\u352c\u3531\u3536\u6282;\u6ac5ot;\u6abd\u0100;d\u11da\u351aot;\u6ac3ult;\u6ac1\u0100Ee\u3528\u352a;\u6acb;\u628alus;\u6abfarr;\u6979\u0180eiu\u353d\u3552\u3555t\u0180;en\u350e\u3545\u354bq\u0100;q\u11da\u350feq\u0100;q\u352b\u3528m;\u6ac7\u0100bp\u355a\u355c;\u6ad5;\u6ad3c\u0300;acens\u11ed\u356c\u3572\u3579\u357b\u3326ppro\xf8\u32faurlye\xf1\u11fe\xf1\u11f3\u0180aes\u3582\u3588\u331bppro\xf8\u331aq\xf1\u3317g;\u666a\u0680123;Edehlmnps\u35a9\u35ac\u35af\u121c\u35b2\u35b4\u35c0\u35c9\u35d5\u35da\u35df\u35e8\u35ed\u803b\xb9\u40b9\u803b\xb2\u40b2\u803b\xb3\u40b3;\u6ac6\u0100os\u35b9\u35bct;\u6abeub;\u6ad8\u0100;d\u1222\u35c5ot;\u6ac4s\u0100ou\u35cf\u35d2l;\u67c9b;\u6ad7arr;\u697bult;\u6ac2\u0100Ee\u35e4\u35e6;\u6acc;\u628blus;\u6ac0\u0180eiu\u35f4\u3609\u360ct\u0180;en\u121c\u35fc\u3602q\u0100;q\u1222\u35b2eq\u0100;q\u35e7\u35e4m;\u6ac8\u0100bp\u3611\u3613;\u6ad4;\u6ad6\u0180Aan\u361c\u3620\u362drr;\u61d9r\u0100hr\u3626\u3628\xeb\u222e\u0100;o\u0a2b\u0a29war;\u692alig\u803b\xdf\u40df\u0be1\u3651\u365d\u3660\u12ce\u3673\u3679\0\u367e\u36c2\0\0\0\0\0\u36db\u3703\0\u3709\u376c\0\0\0\u3787\u0272\u3656\0\0\u365bget;\u6316;\u43c4r\xeb\u0e5f\u0180aey\u3666\u366b\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uc000\ud835\udd31\u0200eiko\u3686\u369d\u36b5\u36bc\u01f2\u368b\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369b\u43b8ym;\u43d1\u0100cn\u36a2\u36b2k\u0100as\u36a8\u36aeppro\xf8\u12c1im\xbb\u12acs\xf0\u129e\u0100as\u36ba\u36ae\xf0\u12c1rn\u803b\xfe\u40fe\u01ec\u031f\u36c6\u22e7es\u8180\xd7;bd\u36cf\u36d0\u36d8\u40d7\u0100;a\u190f\u36d5r;\u6a31;\u6a30\u0180eps\u36e1\u36e3\u3700\xe1\u2a4d\u0200;bcf\u0486\u36ec\u36f0\u36f4ot;\u6336ir;\u6af1\u0100;o\u36f9\u36fc\uc000\ud835\udd65rk;\u6ada\xe1\u3362rime;\u6034\u0180aip\u370f\u3712\u3764d\xe5\u1248\u0380adempst\u3721\u374d\u3740\u3751\u3757\u375c\u375fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65b5own\xbb\u1dbbeft\u0100;e\u2800\u373e\xf1\u092e;\u625cight\u0100;e\u32aa\u374b\xf1\u105aot;\u65ecinus;\u6a3alus;\u6a39b;\u69cdime;\u6a3bezium;\u63e2\u0180cht\u3772\u377d\u3781\u0100ry\u3777\u377b;\uc000\ud835\udcc9;\u4446cy;\u445brok;\u4167\u0100io\u378b\u378ex\xf4\u1777head\u0100lr\u3797\u37a0eftarro\xf7\u084fightarrow\xbb\u0f5d\u0900AHabcdfghlmoprstuw\u37d0\u37d3\u37d7\u37e4\u37f0\u37fc\u380e\u381c\u3823\u3834\u3851\u385d\u386b\u38a9\u38cc\u38d2\u38ea\u38f6r\xf2\u03edar;\u6963\u0100cr\u37dc\u37e2ute\u803b\xfa\u40fa\xf2\u1150r\u01e3\u37ea\0\u37edy;\u445eve;\u416d\u0100iy\u37f5\u37farc\u803b\xfb\u40fb;\u4443\u0180abh\u3803\u3806\u380br\xf2\u13adlac;\u4171a\xf2\u13c3\u0100ir\u3813\u3818sht;\u697e;\uc000\ud835\udd32rave\u803b\xf9\u40f9\u0161\u3827\u3831r\u0100lr\u382c\u382e\xbb\u0957\xbb\u1083lk;\u6580\u0100ct\u3839\u384d\u026f\u383f\0\0\u384arn\u0100;e\u3845\u3846\u631cr\xbb\u3846op;\u630fri;\u65f8\u0100al\u3856\u385acr;\u416b\u80bb\xa8\u0349\u0100gp\u3862\u3866on;\u4173f;\uc000\ud835\udd66\u0300adhlsu\u114b\u3878\u387d\u1372\u3891\u38a0own\xe1\u13b3arpoon\u0100lr\u3888\u388cef\xf4\u382digh\xf4\u382fi\u0180;hl\u3899\u389a\u389c\u43c5\xbb\u13faon\xbb\u389aparrows;\u61c8\u0180cit\u38b0\u38c4\u38c8\u026f\u38b6\0\0\u38c1rn\u0100;e\u38bc\u38bd\u631dr\xbb\u38bdop;\u630eng;\u416fri;\u65f9cr;\uc000\ud835\udcca\u0180dir\u38d9\u38dd\u38e2ot;\u62f0lde;\u4169i\u0100;f\u3730\u38e8\xbb\u1813\u0100am\u38ef\u38f2r\xf2\u38a8l\u803b\xfc\u40fcangle;\u69a7\u0780ABDacdeflnoprsz\u391c\u391f\u3929\u392d\u39b5\u39b8\u39bd\u39df\u39e4\u39e8\u39f3\u39f9\u39fd\u3a01\u3a20r\xf2\u03f7ar\u0100;v\u3926\u3927\u6ae8;\u6ae9as\xe8\u03e1\u0100nr\u3932\u3937grt;\u699c\u0380eknprst\u34e3\u3946\u394b\u3952\u395d\u3964\u3996app\xe1\u2415othin\xe7\u1e96\u0180hir\u34eb\u2ec8\u3959op\xf4\u2fb5\u0100;h\u13b7\u3962\xef\u318d\u0100iu\u3969\u396dgm\xe1\u33b3\u0100bp\u3972\u3984setneq\u0100;q\u397d\u3980\uc000\u228a\ufe00;\uc000\u2acb\ufe00setneq\u0100;q\u398f\u3992\uc000\u228b\ufe00;\uc000\u2acc\ufe00\u0100hr\u399b\u399fet\xe1\u369ciangle\u0100lr\u39aa\u39afeft\xbb\u0925ight\xbb\u1051y;\u4432ash\xbb\u1036\u0180elr\u39c4\u39d2\u39d7\u0180;be\u2dea\u39cb\u39cfar;\u62bbq;\u625alip;\u62ee\u0100bt\u39dc\u1468a\xf2\u1469r;\uc000\ud835\udd33tr\xe9\u39aesu\u0100bp\u39ef\u39f1\xbb\u0d1c\xbb\u0d59pf;\uc000\ud835\udd67ro\xf0\u0efbtr\xe9\u39b4\u0100cu\u3a06\u3a0br;\uc000\ud835\udccb\u0100bp\u3a10\u3a18n\u0100Ee\u3980\u3a16\xbb\u397en\u0100Ee\u3992\u3a1e\xbb\u3990igzag;\u699a\u0380cefoprs\u3a36\u3a3b\u3a56\u3a5b\u3a54\u3a61\u3a6airc;\u4175\u0100di\u3a40\u3a51\u0100bg\u3a45\u3a49ar;\u6a5fe\u0100;q\u15fa\u3a4f;\u6259erp;\u6118r;\uc000\ud835\udd34pf;\uc000\ud835\udd68\u0100;e\u1479\u3a66at\xe8\u1479cr;\uc000\ud835\udccc\u0ae3\u178e\u3a87\0\u3a8b\0\u3a90\u3a9b\0\0\u3a9d\u3aa8\u3aab\u3aaf\0\0\u3ac3\u3ace\0\u3ad8\u17dc\u17dftr\xe9\u17d1r;\uc000\ud835\udd35\u0100Aa\u3a94\u3a97r\xf2\u03c3r\xf2\u09f6;\u43be\u0100Aa\u3aa1\u3aa4r\xf2\u03b8r\xf2\u09eba\xf0\u2713is;\u62fb\u0180dpt\u17a4\u3ab5\u3abe\u0100fl\u3aba\u17a9;\uc000\ud835\udd69im\xe5\u17b2\u0100Aa\u3ac7\u3acar\xf2\u03cer\xf2\u0a01\u0100cq\u3ad2\u17b8r;\uc000\ud835\udccd\u0100pt\u17d6\u3adcr\xe9\u17d4\u0400acefiosu\u3af0\u3afd\u3b08\u3b0c\u3b11\u3b15\u3b1b\u3b21c\u0100uy\u3af6\u3afbte\u803b\xfd\u40fd;\u444f\u0100iy\u3b02\u3b06rc;\u4177;\u444bn\u803b\xa5\u40a5r;\uc000\ud835\udd36cy;\u4457pf;\uc000\ud835\udd6acr;\uc000\ud835\udcce\u0100cm\u3b26\u3b29y;\u444el\u803b\xff\u40ff\u0500acdefhiosw\u3b42\u3b48\u3b54\u3b58\u3b64\u3b69\u3b6d\u3b74\u3b7a\u3b80cute;\u417a\u0100ay\u3b4d\u3b52ron;\u417e;\u4437ot;\u417c\u0100et\u3b5d\u3b61tr\xe6\u155fa;\u43b6r;\uc000\ud835\udd37cy;\u4436grarr;\u61ddpf;\uc000\ud835\udd6bcr;\uc000\ud835\udccf\u0100jn\u3b85\u3b87;\u600dj;\u600c".split("").map((c)=>c.charCodeAt(0))); //# sourceMappingURL=decode-data-html.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/entities/dist/esm/generated/decode-data-xml.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Generated using scripts/write-decode-map.ts
__turbopack_context__.s([
    "xmlDecodeTree",
    ()=>xmlDecodeTree
]);
const xmlDecodeTree = /* #__PURE__ */ new Uint16Array(// prettier-ignore
/* #__PURE__ */ "\u0200aglq\t\x15\x18\x1b\u026d\x0f\0\0\x12p;\u4026os;\u4027t;\u403et;\u403cuot;\u4022".split("").map((c)=>c.charCodeAt(0))); //# sourceMappingURL=decode-data-xml.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/entities/dist/esm/decode-codepoint.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
__turbopack_context__.s([
    "decodeCodePoint",
    ()=>decodeCodePoint,
    "fromCodePoint",
    ()=>fromCodePoint,
    "replaceCodePoint",
    ()=>replaceCodePoint
]);
var _a;
const decodeMap = new Map([
    [
        0,
        65533
    ],
    // C1 Unicode control character reference replacements
    [
        128,
        8364
    ],
    [
        130,
        8218
    ],
    [
        131,
        402
    ],
    [
        132,
        8222
    ],
    [
        133,
        8230
    ],
    [
        134,
        8224
    ],
    [
        135,
        8225
    ],
    [
        136,
        710
    ],
    [
        137,
        8240
    ],
    [
        138,
        352
    ],
    [
        139,
        8249
    ],
    [
        140,
        338
    ],
    [
        142,
        381
    ],
    [
        145,
        8216
    ],
    [
        146,
        8217
    ],
    [
        147,
        8220
    ],
    [
        148,
        8221
    ],
    [
        149,
        8226
    ],
    [
        150,
        8211
    ],
    [
        151,
        8212
    ],
    [
        152,
        732
    ],
    [
        153,
        8482
    ],
    [
        154,
        353
    ],
    [
        155,
        8250
    ],
    [
        156,
        339
    ],
    [
        158,
        382
    ],
    [
        159,
        376
    ]
]);
const fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, n/no-unsupported-features/es-builtins
(_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
    let output = "";
    if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
    }
    output += String.fromCharCode(codePoint);
    return output;
};
function replaceCodePoint(codePoint) {
    var _a;
    if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return 65533;
    }
    return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
}
function decodeCodePoint(codePoint) {
    return fromCodePoint(replaceCodePoint(codePoint));
} //# sourceMappingURL=decode-codepoint.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/entities/dist/esm/decode.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BinTrieFlags",
    ()=>BinTrieFlags,
    "DecodingMode",
    ()=>DecodingMode,
    "EntityDecoder",
    ()=>EntityDecoder,
    "decodeHTML",
    ()=>decodeHTML,
    "decodeHTMLAttribute",
    ()=>decodeHTMLAttribute,
    "decodeHTMLStrict",
    ()=>decodeHTMLStrict,
    "decodeXML",
    ()=>decodeXML,
    "determineBranch",
    ()=>determineBranch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/entities/dist/esm/generated/decode-data-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/entities/dist/esm/generated/decode-data-xml.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2d$codepoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/entities/dist/esm/decode-codepoint.js [app-client] (ecmascript)");
;
;
;
var CharCodes;
(function(CharCodes) {
    CharCodes[CharCodes["NUM"] = 35] = "NUM";
    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
    CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
    CharCodes[CharCodes["NINE"] = 57] = "NINE";
    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
    CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
    CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
    CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
    CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */ const TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(BinTrieFlags) {
    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code) {
    return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
    return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
    return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
}
/**
 * Checks if the given character is a valid end character for an entity in an attribute.
 *
 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
 */ function isEntityInAttributeInvalidEnd(code) {
    return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function(EntityDecoderState) {
    EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
    EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
    EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
    EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
    EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode) {
    /** Entities in text nodes that can end with any character. */ DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
    /** Only allow entities terminated with a semicolon. */ DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
    /** Entities in attributes have limitations on ending characters. */ DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
class EntityDecoder {
    /** Resets the instance to make it reusable. */ startEntity(decodeMode) {
        this.decodeMode = decodeMode;
        this.state = EntityDecoderState.EntityStart;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.consumed = 1;
    }
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ write(input, offset) {
        switch(this.state){
            case EntityDecoderState.EntityStart:
                {
                    if (input.charCodeAt(offset) === CharCodes.NUM) {
                        this.state = EntityDecoderState.NumericStart;
                        this.consumed += 1;
                        return this.stateNumericStart(input, offset + 1);
                    }
                    this.state = EntityDecoderState.NamedEntity;
                    return this.stateNamedEntity(input, offset);
                }
            case EntityDecoderState.NumericStart:
                {
                    return this.stateNumericStart(input, offset);
                }
            case EntityDecoderState.NumericDecimal:
                {
                    return this.stateNumericDecimal(input, offset);
                }
            case EntityDecoderState.NumericHex:
                {
                    return this.stateNumericHex(input, offset);
                }
            case EntityDecoderState.NamedEntity:
                {
                    return this.stateNamedEntity(input, offset);
                }
        }
    }
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericStart(input, offset) {
        if (offset >= input.length) {
            return -1;
        }
        if ((input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
            this.state = EntityDecoderState.NumericHex;
            this.consumed += 1;
            return this.stateNumericHex(input, offset + 1);
        }
        this.state = EntityDecoderState.NumericDecimal;
        return this.stateNumericDecimal(input, offset);
    }
    addToNumericResult(input, start, end, base) {
        if (start !== end) {
            const digitCount = end - start;
            this.result = this.result * Math.pow(base, digitCount) + Number.parseInt(input.substr(start, digitCount), base);
            this.consumed += digitCount;
        }
    }
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericHex(input, offset) {
        const startIndex = offset;
        while(offset < input.length){
            const char = input.charCodeAt(offset);
            if (isNumber(char) || isHexadecimalCharacter(char)) {
                offset += 1;
            } else {
                this.addToNumericResult(input, startIndex, offset, 16);
                return this.emitNumericEntity(char, 3);
            }
        }
        this.addToNumericResult(input, startIndex, offset, 16);
        return -1;
    }
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericDecimal(input, offset) {
        const startIndex = offset;
        while(offset < input.length){
            const char = input.charCodeAt(offset);
            if (isNumber(char)) {
                offset += 1;
            } else {
                this.addToNumericResult(input, startIndex, offset, 10);
                return this.emitNumericEntity(char, 2);
            }
        }
        this.addToNumericResult(input, startIndex, offset, 10);
        return -1;
    }
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     *
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */ emitNumericEntity(lastCp, expectedLength) {
        var _a;
        // Ensure we consumed at least one digit.
        if (this.consumed <= expectedLength) {
            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
        }
        // Figure out if this is a legit end of the entity
        if (lastCp === CharCodes.SEMI) {
            this.consumed += 1;
        } else if (this.decodeMode === DecodingMode.Strict) {
            return 0;
        }
        this.emitCodePoint((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2d$codepoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceCodePoint"])(this.result), this.consumed);
        if (this.errors) {
            if (lastCp !== CharCodes.SEMI) {
                this.errors.missingSemicolonAfterCharacterReference();
            }
            this.errors.validateNumericCharacterReference(this.result);
        }
        return this.consumed;
    }
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNamedEntity(input, offset) {
        const { decodeTree } = this;
        let current = decodeTree[this.treeIndex];
        // The mask is the number of bytes of the value, including the current byte.
        let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        for(; offset < input.length; offset++, this.excess++){
            const char = input.charCodeAt(offset);
            this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
            if (this.treeIndex < 0) {
                return this.result === 0 || this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
                (valueLength === 0 || // And there should be no invalid characters.
                isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
            }
            current = decodeTree[this.treeIndex];
            valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
            // If the branch is a value, store it and continue
            if (valueLength !== 0) {
                // If the entity is terminated by a semicolon, we are done.
                if (char === CharCodes.SEMI) {
                    return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
                }
                // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
                if (this.decodeMode !== DecodingMode.Strict) {
                    this.result = this.treeIndex;
                    this.consumed += this.excess;
                    this.excess = 0;
                }
            }
        }
        return -1;
    }
    /**
     * Emit a named entity that was not terminated with a semicolon.
     *
     * @returns The number of characters consumed.
     */ emitNotTerminatedNamedEntity() {
        var _a;
        const { result, decodeTree } = this;
        const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
        this.emitNamedEntityData(result, valueLength, this.consumed);
        (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
        return this.consumed;
    }
    /**
     * Emit a named entity.
     *
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     *
     * @returns The number of characters consumed.
     */ emitNamedEntityData(result, valueLength, consumed) {
        const { decodeTree } = this;
        this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
        if (valueLength === 3) {
            // For multi-byte values, we need to emit the second byte.
            this.emitCodePoint(decodeTree[result + 2], consumed);
        }
        return consumed;
    }
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     *
     * @returns The number of characters consumed.
     */ end() {
        var _a;
        switch(this.state){
            case EntityDecoderState.NamedEntity:
                {
                    // Emit a named entity if we have one.
                    return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
                }
            // Otherwise, emit a numeric entity if we have one.
            case EntityDecoderState.NumericDecimal:
                {
                    return this.emitNumericEntity(0, 2);
                }
            case EntityDecoderState.NumericHex:
                {
                    return this.emitNumericEntity(0, 3);
                }
            case EntityDecoderState.NumericStart:
                {
                    (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
                    return 0;
                }
            case EntityDecoderState.EntityStart:
                {
                    // Return 0 if we have no entity.
                    return 0;
                }
        }
    }
    constructor(/** The tree used to decode entities. */ decodeTree, /**
     * The function that is called when a codepoint is decoded.
     *
     * For multi-byte named entities, this will be called multiple times,
     * with the second codepoint, and the same `consumed` value.
     *
     * @param codepoint The decoded codepoint.
     * @param consumed The number of bytes consumed by the decoder.
     */ emitCodePoint, /** An object that is used to produce errors. */ errors){
        this.decodeTree = decodeTree;
        this.emitCodePoint = emitCodePoint;
        this.errors = errors;
        /** The current state of the decoder. */ this.state = EntityDecoderState.EntityStart;
        /** Characters that were consumed while parsing an entity. */ this.consumed = 1;
        /**
         * The result of the entity.
         *
         * Either the result index of a numeric entity, or the codepoint of a
         * numeric entity.
         */ this.result = 0;
        /** The current index in the decode tree. */ this.treeIndex = 0;
        /** The number of characters that were consumed in excess. */ this.excess = 1;
        /** The mode in which the decoder is operating. */ this.decodeMode = DecodingMode.Strict;
    }
}
/**
 * Creates a function that decodes entities in a string.
 *
 * @param decodeTree The decode tree.
 * @returns A function that decodes entities in a string.
 */ function getDecoder(decodeTree) {
    let returnValue = "";
    const decoder = new EntityDecoder(decodeTree, (data)=>returnValue += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2d$codepoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromCodePoint"])(data));
    return function decodeWithTrie(input, decodeMode) {
        let lastIndex = 0;
        let offset = 0;
        while((offset = input.indexOf("&", offset)) >= 0){
            returnValue += input.slice(lastIndex, offset);
            decoder.startEntity(decodeMode);
            const length = decoder.write(input, // Skip the "&"
            offset + 1);
            if (length < 0) {
                lastIndex = offset + decoder.end();
                break;
            }
            lastIndex = offset + length;
            // If `length` is 0, skip the current `&` and continue.
            offset = length === 0 ? lastIndex + 1 : lastIndex;
        }
        const result = returnValue + input.slice(lastIndex);
        // Make sure we don't keep a reference to the final string.
        returnValue = "";
        return result;
    };
}
function determineBranch(decodeTree, current, nodeIndex, char) {
    const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
    const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
    // Case 1: Single branch encoded in jump offset
    if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
    }
    // Case 2: Multiple branches encoded in jump table
    if (jumpOffset) {
        const value = char - jumpOffset;
        return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIndex + value] - 1;
    }
    // Case 3: Multiple branches encoded in dictionary
    // Binary search for the character.
    let lo = nodeIndex;
    let hi = lo + branchCount - 1;
    while(lo <= hi){
        const mid = lo + hi >>> 1;
        const midValue = decodeTree[mid];
        if (midValue < char) {
            lo = mid + 1;
        } else if (midValue > char) {
            hi = mid - 1;
        } else {
            return decodeTree[mid + branchCount];
        }
    }
    return -1;
}
const htmlDecoder = /* #__PURE__ */ getDecoder(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlDecodeTree"]);
const xmlDecoder = /* #__PURE__ */ getDecoder(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xmlDecodeTree"]);
function decodeHTML(htmlString) {
    let mode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DecodingMode.Legacy;
    return htmlDecoder(htmlString, mode);
}
function decodeHTMLAttribute(htmlAttribute) {
    return htmlDecoder(htmlAttribute, DecodingMode.Attribute);
}
function decodeHTMLStrict(htmlString) {
    return htmlDecoder(htmlString, DecodingMode.Strict);
}
function decodeXML(xmlString) {
    return xmlDecoder(xmlString, DecodingMode.Strict);
}
;
;
;
 //# sourceMappingURL=decode.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/entities/dist/esm/escape.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encodeXML",
    ()=>encodeXML,
    "escape",
    ()=>escape,
    "escapeAttribute",
    ()=>escapeAttribute,
    "escapeText",
    ()=>escapeText,
    "escapeUTF8",
    ()=>escapeUTF8,
    "getCodePoint",
    ()=>getCodePoint,
    "xmlReplacer",
    ()=>xmlReplacer
]);
const xmlReplacer = /["$&'<>\u0080-\uFFFF]/g;
const xmlCodeMap = new Map([
    [
        34,
        "&quot;"
    ],
    [
        38,
        "&amp;"
    ],
    [
        39,
        "&apos;"
    ],
    [
        60,
        "&lt;"
    ],
    [
        62,
        "&gt;"
    ]
]);
const getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt == null ? (c, index)=>(c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index) : (input, index)=>input.codePointAt(index);
function encodeXML(input) {
    let returnValue = "";
    let lastIndex = 0;
    let match;
    while((match = xmlReplacer.exec(input)) !== null){
        const { index } = match;
        const char = input.charCodeAt(index);
        const next = xmlCodeMap.get(char);
        if (next === undefined) {
            returnValue += "".concat(input.substring(lastIndex, index), "&#x").concat(getCodePoint(input, index).toString(16), ";");
            // Increase by 1 if we have a surrogate pair
            lastIndex = xmlReplacer.lastIndex += Number((char & 64512) === 55296);
        } else {
            returnValue += input.substring(lastIndex, index) + next;
            lastIndex = index + 1;
        }
    }
    return returnValue + input.substr(lastIndex);
}
const escape = encodeXML;
/**
 * Creates a function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 *
 * @param regex Regular expression to match characters to escape.
 * @param map Map of characters to escape to their entities.
 *
 * @returns Function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 */ function getEscaper(regex, map) {
    return function escape(data) {
        let match;
        let lastIndex = 0;
        let result = "";
        while(match = regex.exec(data)){
            if (lastIndex !== match.index) {
                result += data.substring(lastIndex, match.index);
            }
            // We know that this character will be in the map.
            result += map.get(match[0].charCodeAt(0));
            // Every match will be of length 1
            lastIndex = match.index + 1;
        }
        return result + data.substring(lastIndex);
    };
}
const escapeUTF8 = /* #__PURE__ */ getEscaper(/["&'<>]/g, xmlCodeMap);
const escapeAttribute = /* #__PURE__ */ getEscaper(/["&\u00A0]/g, new Map([
    [
        34,
        "&quot;"
    ],
    [
        38,
        "&amp;"
    ],
    [
        160,
        "&nbsp;"
    ]
]));
const escapeText = /* #__PURE__ */ getEscaper(/[&<>\u00A0]/g, new Map([
    [
        38,
        "&amp;"
    ],
    [
        60,
        "&lt;"
    ],
    [
        62,
        "&gt;"
    ],
    [
        160,
        "&nbsp;"
    ]
])); //# sourceMappingURL=escape.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-raw/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Options} from 'hast-util-raw'
 * @import {Comment, Doctype, Element, Nodes, RootContent, Root, Text} from 'hast'
 * @import {Raw} from 'mdast-util-to-hast'
 * @import {DefaultTreeAdapterMap, ParserOptions} from 'parse5'
 * @import {Point} from 'unist'
 */ /**
 * @typedef State
 *   Info passed around about the current state.
 * @property {(node: Nodes) => undefined} handle
 *   Add a hast node to the parser.
 * @property {Options} options
 *   User configuration.
 * @property {Parser<DefaultTreeAdapterMap>} parser
 *   Current parser.
 * @property {boolean} stitches
 *   Whether there are stitches.
 */ /**
 * @typedef Stitch
 *   Custom comment-like value we pass through parse5, which contains a
 *   replacement node that we’ll swap back in afterwards.
 * @property {'comment'} type
 *   Node type.
 * @property {{stitch: Nodes}} value
 *   Replacement value.
 */ __turbopack_context__.s([
    "raw",
    ()=>raw
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@ungap/structured-clone/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$parse5$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-parse5/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$parse5$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-parse5/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$html$2d$void$2d$elements$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/html-void-elements/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/parse5/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$parser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/parse5/dist/parser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$common$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Token$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/parse5/dist/common/token.js [app-client] (ecmascript) <export * as Token>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/parse5/dist/tokenizer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$common$2f$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__html$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/parse5/dist/common/html.js [app-client] (ecmascript) <export * as html>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-position/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-visit/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$web$2d$namespaces$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/web-namespaces/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$zwitch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/zwitch/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const gfmTagfilterExpression = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi;
// Node types associated with MDX.
// <https://github.com/mdx-js/mdx/blob/8a56312/packages/mdx/lib/node-types.js>
const knownMdxNames = new Set([
    'mdxFlowExpression',
    'mdxJsxFlowElement',
    'mdxJsxTextElement',
    'mdxTextExpression',
    'mdxjsEsm'
]);
/** @type {ParserOptions<DefaultTreeAdapterMap>} */ const parseOptions = {
    sourceCodeLocationInfo: true,
    scriptingEnabled: false
};
function raw(tree, options) {
    const document = documentMode(tree);
    /** @type {(node: Nodes, state: State) => undefined} */ const one = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$zwitch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zwitch"])('type', {
        handlers: {
            root,
            element,
            text,
            comment,
            doctype,
            raw: handleRaw
        },
        unknown
    });
    /** @type {State} */ const state = {
        parser: document ? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$parser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Parser"](parseOptions) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$parser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Parser"].getFragmentParser(undefined, parseOptions),
        handle (node) {
            one(node, state);
        },
        stitches: false,
        options: options || {}
    };
    one(tree, state);
    resetTokenizer(state, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointStart"])());
    const p5 = document ? state.parser.document : state.parser.getFragment();
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$parse5$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromParse5"])(p5, {
        // To do: support `space`?
        file: state.options.file
    });
    if (state.stitches) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(result, 'comment', function(node, index, parent) {
            const stitch = node;
            if (stitch.value.stitch && parent && index !== undefined) {
                /** @type {Array<RootContent>} */ const siblings = parent.children;
                // @ts-expect-error: assume the stitch is allowed.
                siblings[index] = stitch.value.stitch;
                return index;
            }
        });
    }
    // Unpack if possible and when not given a `root`.
    if (result.type === 'root' && result.children.length === 1 && result.children[0].type === tree.type) {
        return result.children[0];
    }
    return result;
}
/**
 * Transform all nodes
 *
 * @param {Array<RootContent>} nodes
 *   hast content.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {undefined}
 *   Nothing.
 */ function all(nodes, state) {
    let index = -1;
    /* istanbul ignore else - invalid nodes, see rehypejs/rehype-raw#7. */ if (nodes) {
        while(++index < nodes.length){
            state.handle(nodes[index]);
        }
    }
}
/**
 * Transform a root.
 *
 * @param {Root} node
 *   hast root node.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {undefined}
 *   Nothing.
 */ function root(node, state) {
    all(node.children, state);
}
/**
 * Transform an element.
 *
 * @param {Element} node
 *   hast element node.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {undefined}
 *   Nothing.
 */ function element(node, state) {
    startTag(node, state);
    all(node.children, state);
    endTag(node, state);
}
/**
 * Transform a text.
 *
 * @param {Text} node
 *   hast text node.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {undefined}
 *   Nothing.
 */ function text(node, state) {
    // Allow `DATA` through `PLAINTEXT`,
    // but when hanging in a tag for example,
    // switch back to `DATA`.
    // Note: `State` is not exposed by `parse5`, so these numbers are fragile.
    // See: <https://github.com/inikulin/parse5/blob/46cba43/packages/parse5/lib/tokenizer/index.ts#L58>
    if (state.parser.tokenizer.state > 4) {
        state.parser.tokenizer.state = 0;
    }
    /** @type {Token.CharacterToken} */ const token = {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$common$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Token$3e$__["Token"].TokenType.CHARACTER,
        chars: node.value,
        location: createParse5Location(node)
    };
    resetTokenizer(state, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointStart"])(node));
    // @ts-expect-error: private.
    state.parser.currentToken = token;
    // @ts-expect-error: private.
    state.parser._processToken(state.parser.currentToken);
}
/**
 * Transform a doctype.
 *
 * @param {Doctype} node
 *   hast doctype node.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {undefined}
 *   Nothing.
 */ function doctype(node, state) {
    /** @type {Token.DoctypeToken} */ const token = {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$common$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Token$3e$__["Token"].TokenType.DOCTYPE,
        name: 'html',
        forceQuirks: false,
        publicId: '',
        systemId: '',
        location: createParse5Location(node)
    };
    resetTokenizer(state, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointStart"])(node));
    // @ts-expect-error: private.
    state.parser.currentToken = token;
    // @ts-expect-error: private.
    state.parser._processToken(state.parser.currentToken);
}
/**
 * Transform a stitch.
 *
 * @param {Nodes} node
 *   unknown node.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {undefined}
 *   Nothing.
 */ function stitch(node, state) {
    // Mark that there are stitches, so we need to walk the tree and revert them.
    state.stitches = true;
    /** @type {Nodes} */ const clone = cloneWithoutChildren(node);
    // Recurse, because to somewhat handle `[<x>]</x>` (where `[]` denotes the
    // passed through node).
    if ('children' in node && 'children' in clone) {
        // Root in root out.
        const fakeRoot = raw({
            type: 'root',
            children: node.children
        }, state.options);
        clone.children = fakeRoot.children;
    }
    // Hack: `value` is supposed to be a string, but as none of the tools
    // (`parse5` or `hast-util-from-parse5`) looks at it, we can pass nodes
    // through.
    comment({
        type: 'comment',
        value: {
            stitch: clone
        }
    }, state);
}
/**
 * Transform a comment (or stitch).
 *
 * @param {Comment | Stitch} node
 *   hast comment node.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {undefined}
 *   Nothing.
 */ function comment(node, state) {
    /** @type {string} */ // @ts-expect-error: we pass stitches through.
    const data = node.value;
    /** @type {Token.CommentToken} */ const token = {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$common$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Token$3e$__["Token"].TokenType.COMMENT,
        data,
        location: createParse5Location(node)
    };
    resetTokenizer(state, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointStart"])(node));
    // @ts-expect-error: private.
    state.parser.currentToken = token;
    // @ts-expect-error: private.
    state.parser._processToken(state.parser.currentToken);
}
/**
 * Transform a raw node.
 *
 * @param {Raw} node
 *   hast raw node.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {undefined}
 *   Nothing.
 */ function handleRaw(node, state) {
    // Reset preprocessor:
    // See: <https://github.com/inikulin/parse5/blob/6f7ca60/packages/parse5/lib/tokenizer/preprocessor.ts#L18-L31>.
    state.parser.tokenizer.preprocessor.html = '';
    state.parser.tokenizer.preprocessor.pos = -1;
    // @ts-expect-error: private.
    // type-coverage:ignore-next-line
    state.parser.tokenizer.preprocessor.lastGapPos = -2;
    // @ts-expect-error: private.
    // type-coverage:ignore-next-line
    state.parser.tokenizer.preprocessor.gapStack = [];
    // @ts-expect-error: private.
    // type-coverage:ignore-next-line
    state.parser.tokenizer.preprocessor.skipNextNewLine = false;
    state.parser.tokenizer.preprocessor.lastChunkWritten = false;
    state.parser.tokenizer.preprocessor.endOfChunkHit = false;
    // @ts-expect-error: private.
    // type-coverage:ignore-next-line
    state.parser.tokenizer.preprocessor.isEol = false;
    // Now pass `node.value`.
    setPoint(state, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointStart"])(node));
    state.parser.tokenizer.write(state.options.tagfilter ? node.value.replace(gfmTagfilterExpression, '&lt;$1$2') : node.value, false);
    // @ts-expect-error: private.
    state.parser.tokenizer._runParsingLoop();
    // Character references hang, so if we ended there, we need to flush
    // those too.
    // We reset the preprocessor as if the document ends here.
    // Then one single call to the relevant state does the trick, parse5
    // consumes the whole token.
    // Note: `State` is not exposed by `parse5`, so these numbers are fragile.
    // See: <https://github.com/inikulin/parse5/blob/46cba43/packages/parse5/lib/tokenizer/index.ts#L58>
    // Note: a change to `parse5`, which breaks this, was merged but not released.
    // Investigate when it is.
    // To do: remove next major.
    /* c8 ignore next 12 -- removed in <https://github.com/inikulin/parse5/pull/897> */ if (state.parser.tokenizer.state === 72 /* NAMED_CHARACTER_REFERENCE */  || // @ts-expect-error: removed.
    state.parser.tokenizer.state === 78 /* NUMERIC_CHARACTER_REFERENCE_END */ ) {
        state.parser.tokenizer.preprocessor.lastChunkWritten = true;
        /** @type {number} */ // @ts-expect-error: private.
        const cp = state.parser.tokenizer._consume();
        // @ts-expect-error: private.
        state.parser.tokenizer._callState(cp);
    }
}
/**
 * Crash on an unknown node.
 *
 * @param {unknown} node_
 *   unknown node.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {undefined}
 *   Never.
 */ function unknown(node_, state) {
    const node = node_;
    if (state.options.passThrough && state.options.passThrough.includes(node.type)) {
        stitch(node, state);
    } else {
        let extra = '';
        if (knownMdxNames.has(node.type)) {
            extra = ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax";
        }
        throw new Error('Cannot compile `' + node.type + '` node' + extra);
    }
}
/**
 * Reset the tokenizer of a parser.
 *
 * @param {State} state
 *   Info passed around about the current state.
 * @param {Point | undefined} point
 *   Point.
 * @returns {undefined}
 *   Nothing.
 */ function resetTokenizer(state, point) {
    setPoint(state, point);
    // Process final characters if they’re still there after hibernating.
    /** @type {Token.CharacterToken} */ // @ts-expect-error: private.
    const token = state.parser.tokenizer.currentCharacterToken;
    if (token && token.location) {
        token.location.endLine = state.parser.tokenizer.preprocessor.line;
        token.location.endCol = state.parser.tokenizer.preprocessor.col + 1;
        token.location.endOffset = state.parser.tokenizer.preprocessor.offset + 1;
        // @ts-expect-error: private.
        state.parser.currentToken = token;
        // @ts-expect-error: private.
        state.parser._processToken(state.parser.currentToken);
    }
    // Reset tokenizer:
    // See: <https://github.com/inikulin/parse5/blob/6f7ca60/packages/parse5/lib/tokenizer/index.ts#L187-L223>.
    // Especially putting it back in the `data` state is useful: some elements,
    // like textareas and iframes, change the state.
    // See GH-7.
    // But also if broken HTML is in `raw`, and then a correct element is given.
    // See GH-11.
    // @ts-expect-error: private.
    state.parser.tokenizer.paused = false;
    // @ts-expect-error: private.
    state.parser.tokenizer.inLoop = false;
    // Note: don’t reset `state`, `inForeignNode`, or `lastStartTagName`, we
    // manually update those when needed.
    state.parser.tokenizer.active = false;
    // @ts-expect-error: private.
    state.parser.tokenizer.returnState = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenizerMode"].DATA;
    // @ts-expect-error: private.
    state.parser.tokenizer.charRefCode = -1;
    // @ts-expect-error: private.
    state.parser.tokenizer.consumedAfterSnapshot = -1;
    // @ts-expect-error: private.
    state.parser.tokenizer.currentLocation = null;
    // @ts-expect-error: private.
    state.parser.tokenizer.currentCharacterToken = null;
    // @ts-expect-error: private.
    state.parser.tokenizer.currentToken = null;
    // @ts-expect-error: private.
    state.parser.tokenizer.currentAttr = {
        name: '',
        value: ''
    };
}
/**
 * Set current location.
 *
 * @param {State} state
 *   Info passed around about the current state.
 * @param {Point | undefined} point
 *   Point.
 * @returns {undefined}
 *   Nothing.
 */ function setPoint(state, point) {
    if (point && point.offset !== undefined) {
        /** @type {Token.Location} */ const location = {
            startLine: point.line,
            startCol: point.column,
            startOffset: point.offset,
            endLine: -1,
            endCol: -1,
            endOffset: -1
        };
        // @ts-expect-error: private.
        // type-coverage:ignore-next-line
        state.parser.tokenizer.preprocessor.lineStartPos = -point.column + 1; // Looks weird, but ensures we get correct positional info.
        state.parser.tokenizer.preprocessor.droppedBufferSize = point.offset;
        state.parser.tokenizer.preprocessor.line = point.line;
        // @ts-expect-error: private.
        state.parser.tokenizer.currentLocation = location;
    }
}
/**
 * Emit a start tag.
 *
 * @param {Element} node
 *   Element.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {undefined}
 *   Nothing.
 */ function startTag(node, state) {
    const tagName = node.tagName.toLowerCase();
    // Ignore tags if we’re in plain text.
    if (state.parser.tokenizer.state === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenizerMode"].PLAINTEXT) return;
    resetTokenizer(state, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointStart"])(node));
    const current = state.parser.openElements.current;
    let ns = 'namespaceURI' in current ? current.namespaceURI : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$web$2d$namespaces$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webNamespaces"].html;
    if (ns === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$web$2d$namespaces$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webNamespaces"].html && tagName === 'svg') {
        ns = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$web$2d$namespaces$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webNamespaces"].svg;
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$parse5$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toParse5"])(// Shallow clone to not delve into `children`: we only need the attributes.
    {
        ...node,
        children: []
    }, {
        space: ns === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$web$2d$namespaces$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webNamespaces"].svg ? 'svg' : 'html'
    });
    /** @type {Token.TagToken} */ const tag = {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$common$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Token$3e$__["Token"].TokenType.START_TAG,
        tagName,
        tagID: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$common$2f$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__html$3e$__["html"].getTagID(tagName),
        // We always send start and end tags.
        selfClosing: false,
        ackSelfClosing: false,
        // Always element.
        /* c8 ignore next */ attrs: 'attrs' in result ? result.attrs : [],
        location: createParse5Location(node)
    };
    // The HTML parsing algorithm works by doing half of the state management in
    // the tokenizer and half in the parser.
    // We can’t use the tokenizer here, as we don’t have strings.
    // So we act *as if* the tokenizer emits tokens:
    // @ts-expect-error: private.
    state.parser.currentToken = tag;
    // @ts-expect-error: private.
    state.parser._processToken(state.parser.currentToken);
    // …but then we still need a bunch of work that the tokenizer would normally
    // do, such as:
    // Set a tag name, similar to how the tokenizer would do it.
    state.parser.tokenizer.lastStartTagName = tagName;
// `inForeignNode` is correctly set by the parser.
}
/**
 * Emit an end tag.
 *
 * @param {Element} node
 *   Element.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {undefined}
 *   Nothing.
 */ function endTag(node, state) {
    const tagName = node.tagName.toLowerCase();
    // Do not emit closing tags for HTML void elements.
    if (!state.parser.tokenizer.inForeignNode && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$html$2d$void$2d$elements$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlVoidElements"].includes(tagName)) {
        return;
    }
    // Ignore tags if we’re in plain text.
    if (state.parser.tokenizer.state === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenizerMode"].PLAINTEXT) return;
    resetTokenizer(state, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointEnd"])(node));
    /** @type {Token.TagToken} */ const tag = {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$common$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Token$3e$__["Token"].TokenType.END_TAG,
        tagName,
        tagID: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$common$2f$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__html$3e$__["html"].getTagID(tagName),
        selfClosing: false,
        ackSelfClosing: false,
        attrs: [],
        location: createParse5Location(node)
    };
    // The HTML parsing algorithm works by doing half of the state management in
    // the tokenizer and half in the parser.
    // We can’t use the tokenizer here, as we don’t have strings.
    // So we act *as if* the tokenizer emits tokens:
    // @ts-expect-error: private.
    state.parser.currentToken = tag;
    // @ts-expect-error: private.
    state.parser._processToken(state.parser.currentToken);
    // …but then we still need a bunch of work that the tokenizer would normally
    // do, such as:
    // Switch back to the data state after alternative states that don’t accept
    // tags:
    if (// Current element is closed.
    tagName === state.parser.tokenizer.lastStartTagName && // `<textarea>` and `<title>`
    (state.parser.tokenizer.state === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenizerMode"].RCDATA || // `<iframe>`, `<noembed>`, `<noframes>`, `<style>`, `<xmp>`
    state.parser.tokenizer.state === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenizerMode"].RAWTEXT || // `<script>`
    state.parser.tokenizer.state === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenizerMode"].SCRIPT_DATA)) {
        state.parser.tokenizer.state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenizerMode"].DATA;
    }
}
/**
 * Check if `node` represents a whole document or a fragment.
 *
 * @param {Nodes} node
 *   hast node.
 * @returns {boolean}
 *   Whether this represents a whole document or a fragment.
 */ function documentMode(node) {
    const head = node.type === 'root' ? node.children[0] : node;
    return Boolean(head && (head.type === 'doctype' || head.type === 'element' && head.tagName.toLowerCase() === 'html'));
}
/**
 * Get a `parse5` location from a node.
 *
 * @param {Nodes | Stitch} node
 *   hast node.
 * @returns {Token.Location}
 *   `parse5` location.
 */ function createParse5Location(node) {
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointStart"])(node) || {
        line: undefined,
        column: undefined,
        offset: undefined
    };
    const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointEnd"])(node) || {
        line: undefined,
        column: undefined,
        offset: undefined
    };
    /** @type {Record<keyof Token.Location, number | undefined>} */ const location = {
        startLine: start.line,
        startCol: start.column,
        startOffset: start.offset,
        endLine: end.line,
        endCol: end.column,
        endOffset: end.offset
    };
    // @ts-expect-error: unist point values can be `undefined` in hast, which
    // `parse5` types don’t want.
    return location;
}
/**
 * @template {Nodes} NodeType
 *   Node type.
 * @param {NodeType} node
 *   Node to clone.
 * @returns {NodeType}
 *   Cloned node, without children.
 */ function cloneWithoutChildren(node) {
    return 'children' in node ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
        ...node,
        children: []
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(node);
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-raw/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast-util-raw').Options} RawOptions
 * @typedef {import('vfile').VFile} VFile
 */ /**
 * @typedef {Omit<RawOptions, 'file'>} Options
 *   Configuration.
 */ __turbopack_context__.s([
    "default",
    ()=>rehypeRaw
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-raw/lib/index.js [app-client] (ecmascript)");
;
function rehypeRaw(options) {
    /**
   * @param {Root} tree
   *   Tree.
   * @param {VFile} file
   *   File.
   * @returns {Root}
   *   New tree.
   */ return function(tree, file) {
        // Assume root in -> root out.
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raw"])(tree, {
            ...options,
            file
        });
        return result;
    };
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/node_modules/react-markdown/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, ElementContent, Nodes, Parents, Root} from 'hast'
 * @import {ComponentProps, ElementType, ReactElement} from 'react'
 * @import {Options as RemarkRehypeOptions} from 'remark-rehype'
 * @import {BuildVisitor} from 'unist-util-visit'
 * @import {PluggableList} from 'unified'
 */ /**
 * @callback AllowElement
 *   Filter elements.
 * @param {Readonly<Element>} element
 *   Element to check.
 * @param {number} index
 *   Index of `element` in `parent`.
 * @param {Readonly<Parents> | undefined} parent
 *   Parent of `element`.
 * @returns {boolean | null | undefined}
 *   Whether to allow `element` (default: `false`).
 */ /**
 * @typedef ExtraProps
 *   Extra fields we pass.
 * @property {Element | undefined} [node]
 *   passed when `passNode` is on.
 */ /**
 * @typedef {{
 *   [Key in Extract<ElementType, string>]?: ElementType<ComponentProps<Key> & ExtraProps>
 * }} Components
 *   Map tag names to components.
 */ /**
 * @typedef Deprecation
 *   Deprecation.
 * @property {string} from
 *   Old field.
 * @property {string} id
 *   ID in readme.
 * @property {keyof Options} [to]
 *   New field.
 */ /**
 * @typedef Options
 *   Configuration.
 * @property {AllowElement | null | undefined} [allowElement]
 *   Filter elements (optional);
 *   `allowedElements` / `disallowedElements` is used first.
 * @property {ReadonlyArray<string> | null | undefined} [allowedElements]
 *   Tag names to allow (default: all tag names);
 *   cannot combine w/ `disallowedElements`.
 * @property {string | null | undefined} [children]
 *   Markdown.
 * @property {string | null | undefined} [className]
 *   Wrap in a `div` with this class name.
 * @property {Components | null | undefined} [components]
 *   Map tag names to components.
 * @property {ReadonlyArray<string> | null | undefined} [disallowedElements]
 *   Tag names to disallow (default: `[]`);
 *   cannot combine w/ `allowedElements`.
 * @property {PluggableList | null | undefined} [rehypePlugins]
 *   List of rehype plugins to use.
 * @property {PluggableList | null | undefined} [remarkPlugins]
 *   List of remark plugins to use.
 * @property {Readonly<RemarkRehypeOptions> | null | undefined} [remarkRehypeOptions]
 *   Options to pass through to `remark-rehype`.
 * @property {boolean | null | undefined} [skipHtml=false]
 *   Ignore HTML in markdown completely (default: `false`).
 * @property {boolean | null | undefined} [unwrapDisallowed=false]
 *   Extract (unwrap) what’s in disallowed elements (default: `false`);
 *   normally when say `strong` is not allowed, it and it’s children are dropped,
 *   with `unwrapDisallowed` the element itself is replaced by its children.
 * @property {UrlTransform | null | undefined} [urlTransform]
 *   Change URLs (default: `defaultUrlTransform`)
 */ /**
 * @callback UrlTransform
 *   Transform all URLs.
 * @param {string} url
 *   URL.
 * @param {string} key
 *   Property name (example: `'href'`).
 * @param {Readonly<Element>} node
 *   Node.
 * @returns {string | null | undefined}
 *   Transformed URL (optional).
 */ __turbopack_context__.s([
    "Markdown",
    ()=>Markdown,
    "defaultUrlTransform",
    ()=>defaultUrlTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/devlop/lib/development.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-jsx-runtime/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$html$2d$url$2d$attributes$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/html-url-attributes/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$remark$2d$parse$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/remark-parse/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$remark$2d$rehype$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/remark-rehype/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unified$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unified/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-visit/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$vfile$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/vfile/lib/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const changelog = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md';
/** @type {PluggableList} */ const emptyPlugins = [];
/** @type {Readonly<RemarkRehypeOptions>} */ const emptyRemarkRehypeOptions = {
    allowDangerousHtml: true
};
const safeProtocol = /^(https?|ircs?|mailto|xmpp)$/i;
// Mutable because we `delete` any time it’s used and a message is sent.
/** @type {ReadonlyArray<Readonly<Deprecation>>} */ const deprecations = [
    {
        from: 'astPlugins',
        id: 'remove-buggy-html-in-markdown-parser'
    },
    {
        from: 'allowDangerousHtml',
        id: 'remove-buggy-html-in-markdown-parser'
    },
    {
        from: 'allowNode',
        id: 'replace-allownode-allowedtypes-and-disallowedtypes',
        to: 'allowElement'
    },
    {
        from: 'allowedTypes',
        id: 'replace-allownode-allowedtypes-and-disallowedtypes',
        to: 'allowedElements'
    },
    {
        from: 'disallowedTypes',
        id: 'replace-allownode-allowedtypes-and-disallowedtypes',
        to: 'disallowedElements'
    },
    {
        from: 'escapeHtml',
        id: 'remove-buggy-html-in-markdown-parser'
    },
    {
        from: 'includeElementIndex',
        id: '#remove-includeelementindex'
    },
    {
        from: 'includeNodeIndex',
        id: 'change-includenodeindex-to-includeelementindex'
    },
    {
        from: 'linkTarget',
        id: 'remove-linktarget'
    },
    {
        from: 'plugins',
        id: 'change-plugins-to-remarkplugins',
        to: 'remarkPlugins'
    },
    {
        from: 'rawSourcePos',
        id: '#remove-rawsourcepos'
    },
    {
        from: 'renderers',
        id: 'change-renderers-to-components',
        to: 'components'
    },
    {
        from: 'source',
        id: 'change-source-to-children',
        to: 'children'
    },
    {
        from: 'sourcePos',
        id: '#remove-sourcepos'
    },
    {
        from: 'transformImageUri',
        id: '#add-urltransform',
        to: 'urlTransform'
    },
    {
        from: 'transformLinkUri',
        id: '#add-urltransform',
        to: 'urlTransform'
    }
];
function Markdown(options) {
    const allowedElements = options.allowedElements;
    const allowElement = options.allowElement;
    const children = options.children || '';
    const className = options.className;
    const components = options.components;
    const disallowedElements = options.disallowedElements;
    const rehypePlugins = options.rehypePlugins || emptyPlugins;
    const remarkPlugins = options.remarkPlugins || emptyPlugins;
    const remarkRehypeOptions = options.remarkRehypeOptions ? {
        ...options.remarkRehypeOptions,
        ...emptyRemarkRehypeOptions
    } : emptyRemarkRehypeOptions;
    const skipHtml = options.skipHtml;
    const unwrapDisallowed = options.unwrapDisallowed;
    const urlTransform = options.urlTransform || defaultUrlTransform;
    const processor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unified$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unified"])().use(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$remark$2d$parse$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).use(remarkPlugins).use(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$remark$2d$rehype$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], remarkRehypeOptions).use(rehypePlugins);
    const file = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$vfile$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VFile"]();
    if (typeof children === 'string') {
        file.value = children;
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])('Unexpected value `' + children + '` for `children` prop, expected `string`');
    }
    if (allowedElements && disallowedElements) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])('Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other');
    }
    for (const deprecation of deprecations){
        if (Object.hasOwn(options, deprecation.from)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])('Unexpected `' + deprecation.from + '` prop, ' + (deprecation.to ? 'use `' + deprecation.to + '` instead' : 'remove it') + ' (see <' + changelog + '#' + deprecation.id + '> for more info)');
        }
    }
    const mdastTree = processor.parse(file);
    /** @type {Nodes} */ let hastTree = processor.runSync(mdastTree, file);
    // Wrap in `div` if there’s a class name.
    if (className) {
        hastTree = {
            type: 'element',
            tagName: 'div',
            properties: {
                className
            },
            // Assume no doctypes.
            children: hastTree.type === 'root' ? hastTree.children : [
                hastTree
            ]
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(hastTree, transform);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toJsxRuntime"])(hastTree, {
        Fragment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
        // @ts-expect-error
        // React components are allowed to return numbers,
        // but not according to the types in hast-util-to-jsx-runtime
        components,
        ignoreInvalidStyle: true,
        jsx: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"],
        jsxs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"],
        passKeys: true,
        passNode: true
    });
    //TURBOPACK unreachable
    ;
    /** @type {BuildVisitor<Root>} */ function transform(node, index, parent) {
        if (node.type === 'raw' && parent && typeof index === 'number') {
            if (skipHtml) {
                parent.children.splice(index, 1);
            } else {
                parent.children[index] = {
                    type: 'text',
                    value: node.value
                };
            }
            return index;
        }
        if (node.type === 'element') {
            /** @type {string} */ let key;
            for(key in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$html$2d$url$2d$attributes$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlAttributes"]){
                if (Object.hasOwn(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$html$2d$url$2d$attributes$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlAttributes"], key) && Object.hasOwn(node.properties, key)) {
                    const value = node.properties[key];
                    const test = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$html$2d$url$2d$attributes$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlAttributes"][key];
                    if (test === null || test.includes(node.tagName)) {
                        node.properties[key] = urlTransform(String(value || ''), key, node);
                    }
                }
            }
        }
        if (node.type === 'element') {
            let remove = allowedElements ? !allowedElements.includes(node.tagName) : disallowedElements ? disallowedElements.includes(node.tagName) : false;
            if (!remove && allowElement && typeof index === 'number') {
                remove = !allowElement(node, index, parent);
            }
            if (remove && parent && typeof index === 'number') {
                if (unwrapDisallowed && node.children) {
                    parent.children.splice(index, 1, ...node.children);
                } else {
                    parent.children.splice(index, 1);
                }
                return index;
            }
        }
    }
}
function defaultUrlTransform(value) {
    // Same as:
    // <https://github.com/micromark/micromark/blob/929275e/packages/micromark-util-sanitize-uri/dev/index.js#L34>
    // But without the `encode` part.
    const colon = value.indexOf(':');
    const questionMark = value.indexOf('?');
    const numberSign = value.indexOf('#');
    const slash = value.indexOf('/');
    if (// If there is no protocol, it’s relative.
    colon === -1 || slash !== -1 && colon > slash || questionMark !== -1 && colon > questionMark || numberSign !== -1 && colon > numberSign || // It is a protocol, it should be allowed.
    safeProtocol.test(value.slice(0, colon))) {
        return value;
    }
    return '';
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Markdown"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/node_modules/react-markdown/lib/index.js [app-client] (ecmascript)");
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/remark-github-blockquote-alert/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAlertIcon",
    ()=>getAlertIcon,
    "remarkAlert",
    ()=>remarkAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-visit/lib/index.js [app-client] (ecmascript) <locals>");
;
const alertRegex = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i;
const alertLegacyRegex = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)(\/.*)?\]/i;
const remarkAlert = function() {
    let { legacyTitle = false, tagName = "div" } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (tree)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, "blockquote", (node, index, parent)=>{
            let alertType = '';
            let title = '';
            let isNext = true;
            let child = node.children.map((item)=>{
                if (isNext && item.type === "paragraph") {
                    const firstNode = item.children[0];
                    const text = firstNode.type === 'text' ? firstNode.value : '';
                    const reg = legacyTitle ? alertLegacyRegex : alertRegex;
                    const match = text.match(reg);
                    if (match) {
                        isNext = false;
                        alertType = match[1].toLocaleLowerCase();
                        title = legacyTitle ? match[2] || alertType.toLocaleUpperCase() : alertType.toLocaleUpperCase();
                        if (text.includes('\n')) {
                            item.children[0] = {
                                type: 'text',
                                value: text.replace(reg, '').replace(/^\n+/, '')
                            };
                        }
                        if (!text.includes('\n')) {
                            const itemChild = [];
                            item.children.forEach((item, idx)=>{
                                if (idx == 0) return;
                                if (idx == 1 && item.type === 'break') {
                                    return;
                                }
                                itemChild.push(item);
                            });
                            item.children = [
                                ...itemChild
                            ];
                        }
                    }
                }
                return item;
            });
            if (!!alertType) {
                node.data = {
                    hName: tagName,
                    hProperties: {
                        class: "markdown-alert markdown-alert-".concat(alertType),
                        dir: 'auto'
                    }
                };
                child.unshift({
                    type: "paragraph",
                    children: [
                        getAlertIcon(alertType),
                        {
                            type: "text",
                            value: title.replace(/^\//, '')
                        }
                    ],
                    data: {
                        hProperties: {
                            class: "markdown-alert-title",
                            dir: "auto"
                        }
                    }
                });
            }
            node.children = [
                ...child
            ];
        });
    };
};
const __TURBOPACK__default__export__ = remarkAlert;
function getAlertIcon(type) {
    var _pathData_type;
    let pathD = (_pathData_type = pathData[type]) !== null && _pathData_type !== void 0 ? _pathData_type : '';
    return {
        type: "emphasis",
        data: {
            hName: "svg",
            hProperties: {
                class: "octicon",
                viewBox: '0 0 16 16',
                width: '16',
                height: '16',
                ariaHidden: 'true'
            }
        },
        children: [
            {
                type: "emphasis",
                data: {
                    hName: "path",
                    hProperties: {
                        d: pathD
                    }
                },
                children: []
            }
        ]
    };
}
const pathData = {
    note: 'M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z',
    tip: 'M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z',
    important: 'M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
    warning: 'M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
    caution: 'M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z'
}; //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/copy-to-clipboard/dist/copy-to-clipboard.umd.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**! 
 * @uiw/copy-to-clipboard v1.0.17 
 * Copy to clipboard. 
 * 
 * Copyright (c) 2024 Kenny Wang 
 * https://github.com/uiwjs/copy-to-clipboard.git 
 * 
 * @website: https://uiwjs.github.io/copy-to-clipboard
 
 * Licensed under the MIT license 
 */ (function(global, factory) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = factory() : "TURBOPACK unreachable";
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    'use strict';
    /**
   * *** This styling is an extra step which is likely not required. ***
   * https://github.com/w3c/clipboard-apis/blob/master/explainer.adoc#writing-to-the-clipboard
   * 
   * Why is it here? To ensure:
   * 
   * 1. the element is able to have focus and selection.
   * 2. if element was to flash render it has minimal visual impact.
   * 3. less flakyness with selection and copying which **might** occur if
   *     the textarea element is not visible.
   *
   *   The likelihood is the element won't even render, not even a flash,
   *   so some of these are just precautions. However in IE the element
   *   is visible whilst the popup box asking the user for permission for
   *   the web page to copy to the clipboard.
   *  
   *   Place in top-left corner of screen regardless of scroll position.
   *
   * @typedef CopyTextToClipboard
   * @property {(text: string, method?: (isCopy: boolean) => void) => void} void
   * @returns {void}
   * 
   * @param {string} text 
   * @param {CopyTextToClipboard} cb 
   */ function copyTextToClipboard(text, cb) {
        if (typeof document === "undefined") return;
        const el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        el.style = {
            position: 'absolute',
            left: '-9999px'
        };
        document.body.appendChild(el);
        const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
        el.select();
        let isCopy = false;
        try {
            const successful = document.execCommand('copy');
            isCopy = !!successful;
        } catch (err) {
            isCopy = false;
        }
        document.body.removeChild(el);
        if (selected && document.getSelection) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
        cb && cb(isCopy);
    }
    return copyTextToClipboard;
}); //# sourceMappingURL=copy-to-clipboard.umd.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/plugins/useCopied.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCopied",
    ()=>useCopied
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$copy$2d$to$2d$clipboard$2f$dist$2f$copy$2d$to$2d$clipboard$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/copy-to-clipboard/dist/copy-to-clipboard.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function getParentElement(target) {
    if (!target) return null;
    var dom = target;
    if (dom.dataset.code && dom.classList.contains('copied')) {
        return dom;
    }
    if (dom.parentElement) {
        return getParentElement(dom.parentElement);
    }
    return null;
}
function useCopied(container) {
    var handle = (event)=>{
        var target = getParentElement(event.target);
        if (!target) return;
        target.classList.add('active');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$copy$2d$to$2d$clipboard$2f$dist$2f$copy$2d$to$2d$clipboard$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(target.dataset.code, function() {
            setTimeout(()=>{
                target.classList.remove('active');
            }, 2000);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCopied.useEffect": ()=>{
            var _container$current, _container$current2;
            (_container$current = container.current) == null || _container$current.removeEventListener('click', handle, false);
            (_container$current2 = container.current) == null || _container$current2.addEventListener('click', handle, false);
            return ({
                "useCopied.useEffect": ()=>{
                    var _container$current3;
                    (_container$current3 = container.current) == null || _container$current3.removeEventListener('click', handle, false);
                }
            })["useCopied.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useCopied.useEffect"], [
        container
    ]);
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/preview.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-raw/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$remark$2d$github$2d$blockquote$2d$alert$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/remark-github-blockquote-alert/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$plugins$2f$useCopied$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/plugins/useCopied.js [app-client] (ecmascript)");
/**
 * https://github.com/uiwjs/react-md-editor/issues/607
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
var _excluded = [
    "prefixCls",
    "className",
    "source",
    "style",
    "disableCopy",
    "skipHtml",
    "onScroll",
    "onMouseOver",
    "pluginsFilter",
    "rehypeRewrite",
    "wrapperElement",
    "warpperElement",
    "urlTransform"
];
;
;
;
;
;
;
;
;
var defaultUrlTransform = (url)=>url;
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    var { prefixCls = 'wmde-markdown wmde-markdown-color', className, source, style, disableCopy = false, skipHtml = true, onScroll, onMouseOver, pluginsFilter, wrapperElement = {}, warpperElement = {}, urlTransform } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var mdp = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "useImperativeHandle": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
                mdp
            })
    }["useImperativeHandle"], [
        mdp,
        props
    ]);
    var cls = (prefixCls || '') + " " + (className || '');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$plugins$2f$useCopied$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopied"])(mdp);
    var rehypePlugins = [
        ...other.rehypePlugins || []
    ];
    var customProps = {
        allowElement: (element, index, parent)=>{
            if (other.allowElement) {
                return other.allowElement(element, index, parent);
            }
            return /^[A-Za-z0-9]+$/.test(element.tagName);
        }
    };
    if (!skipHtml) {
        rehypePlugins.push(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    }
    var remarkPlugins = [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$remark$2d$github$2d$blockquote$2d$alert$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remarkAlert"],
        ...other.remarkPlugins || [],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
    var wrapperProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, warpperElement, wrapperElement);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: mdp,
        onScroll: onScroll,
        onMouseOver: onMouseOver
    }, wrapperProps, {
        className: cls,
        style: style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, customProps, other, {
            skipHtml: !skipHtml,
            urlTransform: urlTransform || defaultUrlTransform,
            rehypePlugins: pluginsFilter ? pluginsFilter('rehype', rehypePlugins) : rehypePlugins,
            remarkPlugins: pluginsFilter ? pluginsFilter('remark', remarkPlugins) : remarkPlugins,
            children: source || ''
        }))
    }));
});
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/plugins/reservedMeta.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reservedMeta",
    ()=>reservedMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-visit/lib/index.js [app-client] (ecmascript) <locals>");
;
;
var reservedMeta = function reservedMeta(options) {
    if (options === void 0) {
        options = {};
    }
    return (tree)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, (node)=>{
            if (node.type === 'element' && node.tagName === 'code' && node.data && node.data.meta) {
                node.properties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, node.properties, {
                    'data-meta': String(node.data.meta)
                });
            }
        });
    };
};
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/plugins/retrieveMeta.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "retrieveMeta",
    ()=>retrieveMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-visit/lib/index.js [app-client] (ecmascript) <locals>");
;
var retrieveMeta = function retrieveMeta(options) {
    if (options === void 0) {
        options = {};
    }
    return (tree)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, (node)=>{
            if (node.type === 'element' && node.tagName === 'code' && node.properties && node.properties['dataMeta']) {
                if (!node.data) {
                    node.data = {};
                }
                var metaString = node.properties['dataMeta'];
                if (typeof metaString === 'string') {
                    node.data.meta = metaString;
                }
                delete node.properties['dataMeta'];
            }
        });
    };
};
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/nodes/octiconLink.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "octiconLink",
    ()=>octiconLink
]);
var octiconLink = {
    type: 'element',
    tagName: 'svg',
    properties: {
        className: 'octicon octicon-link',
        viewBox: '0 0 16 16',
        version: '1.1',
        width: '16',
        height: '16',
        ariaHidden: 'true'
    },
    children: [
        {
            type: 'element',
            tagName: 'path',
            children: [],
            properties: {
                fillRule: 'evenodd',
                d: 'M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'
            }
        }
    ]
};
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/nodes/copy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copyElement",
    ()=>copyElement
]);
function copyElement(str) {
    if (str === void 0) {
        str = '';
    }
    return {
        type: 'element',
        tagName: 'div',
        properties: {
            class: 'copied',
            'data-code': str
        },
        children: [
            {
                type: 'element',
                tagName: 'svg',
                properties: {
                    className: 'octicon-copy',
                    ariaHidden: 'true',
                    viewBox: '0 0 16 16',
                    fill: 'currentColor',
                    height: 12,
                    width: 12
                },
                children: [
                    {
                        type: 'element',
                        tagName: 'path',
                        properties: {
                            fillRule: 'evenodd',
                            d: 'M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z'
                        },
                        children: []
                    },
                    {
                        type: 'element',
                        tagName: 'path',
                        properties: {
                            fillRule: 'evenodd',
                            d: 'M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z'
                        },
                        children: []
                    }
                ]
            },
            {
                type: 'element',
                tagName: 'svg',
                properties: {
                    className: 'octicon-check',
                    ariaHidden: 'true',
                    viewBox: '0 0 16 16',
                    fill: 'currentColor',
                    height: 12,
                    width: 12
                },
                children: [
                    {
                        type: 'element',
                        tagName: 'path',
                        properties: {
                            fillRule: 'evenodd',
                            d: 'M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z'
                        },
                        children: []
                    }
                ]
            }
        ]
    };
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/rehypePlugins.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultRehypePlugins",
    ()=>defaultRehypePlugins,
    "rehypeRewriteHandle",
    ()=>rehypeRewriteHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$slug$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-slug/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$autolink$2d$headings$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-autolink-headings/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$ignore$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-ignore/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$rewrite$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-rewrite/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$nodes$2f$octiconLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/nodes/octiconLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$nodes$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/nodes/copy.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var rehypeRewriteHandle = (disableCopy, rewrite)=>(node, index, parent)=>{
        if (node.type === 'element' && parent && parent.type === 'root' && /h(1|2|3|4|5|6)/.test(node.tagName)) {
            var child = node.children && node.children[0];
            if (child && child.properties && child.properties.ariaHidden === 'true') {
                child.properties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    class: 'anchor'
                }, child.properties);
                child.children = [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$nodes$2f$octiconLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["octiconLink"]
                ];
            }
        }
        if (node.type === 'element' && node.tagName === 'pre' && !disableCopy) {
            var code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$rewrite$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCodeString"])(node.children);
            node.children.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$nodes$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyElement"])(code));
        }
        rewrite && rewrite(node, index === null ? undefined : index, parent === null ? undefined : parent);
    };
var defaultRehypePlugins = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$slug$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$autolink$2d$headings$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$ignore$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
];
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/Props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$prism$2d$plus$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-prism-plus/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$rewrite$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-rewrite/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$attr$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-attr/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-raw/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$preview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/preview.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$plugins$2f$reservedMeta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/plugins/reservedMeta.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$plugins$2f$retrieveMeta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/plugins/retrieveMeta.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$rehypePlugins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/rehypePlugins.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$Props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@uiw/react-markdown-preview/esm/Props.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    var _props$disableCopy;
    var rehypePlugins = [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$plugins$2f$reservedMeta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reservedMeta"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$plugins$2f$retrieveMeta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieveMeta"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$rehypePlugins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultRehypePlugins"],
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$rewrite$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            {
                rewrite: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$rehypePlugins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rehypeRewriteHandle"])((_props$disableCopy = props.disableCopy) != null ? _props$disableCopy : false, props.rehypeRewrite)
            }
        ],
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$attr$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            {
                properties: 'attr'
            }
        ],
        ...props.rehypePlugins || [],
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$prism$2d$plus$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            {
                ignoreMissing: true
            }
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$uiw$2f$react$2d$markdown$2d$preview$2f$esm$2f$preview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        rehypePlugins: rehypePlugins,
        ref: ref
    }));
});
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/github-slugger/regex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This module is generated by `script/`.
/* eslint-disable no-control-regex, no-misleading-character-class, no-useless-escape */ __turbopack_context__.s([
    "regex",
    ()=>regex
]);
const regex = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/github-slugger/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BananaSlug,
    "slug",
    ()=>slug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$github$2d$slugger$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/github-slugger/regex.js [app-client] (ecmascript)");
;
const own = Object.hasOwnProperty;
class BananaSlug {
    /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */ slug(value, maintainCase) {
        const self = this;
        let result = slug(value, maintainCase === true);
        const originalSlug = result;
        while(own.call(self.occurrences, result)){
            self.occurrences[originalSlug]++;
            result = originalSlug + '-' + self.occurrences[originalSlug];
        }
        self.occurrences[result] = 0;
        return result;
    }
    /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */ reset() {
        this.occurrences = Object.create(null);
    }
    /**
   * Create a new slug class.
   */ constructor(){
        /** @type {Record<string, number>} */ // eslint-disable-next-line no-unused-expressions
        this.occurrences;
        this.reset();
    }
}
;
function slug(value, maintainCase) {
    if (typeof value !== 'string') return '';
    if (!maintainCase) value = value.toLowerCase();
    return value.replace(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$github$2d$slugger$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["regex"], '').replace(/ /g, '-');
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-heading-rank/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Nodes} Nodes
 */ /**
 * Get the rank (`1` to `6`) of headings (`h1` to `h6`).
 *
 * @param {Nodes} node
 *   Node to check.
 * @returns {number | undefined}
 *   Rank of the heading or `undefined` if not a heading.
 */ __turbopack_context__.s([
    "headingRank",
    ()=>headingRank
]);
function headingRank(node) {
    const name = node.type === 'element' ? node.tagName.toLowerCase() : '';
    const code = name.length === 2 && name.charCodeAt(0) === 104 /* `h` */  ? name.charCodeAt(1) : 0;
    return code > 48 /* `0` */  && code < 55 /* `7` */  ? code - 48 /* `0` */  : undefined;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-slug/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Root} Root
 */ /**
 * @typedef Options
 *   Configuration (optional).
 * @property {string} [prefix='']
 *   Prefix to add in front of `id`s (default: `''`).
 */ __turbopack_context__.s([
    "default",
    ()=>rehypeSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$github$2d$slugger$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/github-slugger/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$heading$2d$rank$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-heading-rank/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-string/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-visit/lib/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
/** @type {Options} */ const emptyOptions = {};
const slugs = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$github$2d$slugger$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
function rehypeSlug(options) {
    const settings = options || emptyOptions;
    const prefix = settings.prefix || '';
    /**
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */ return function(tree) {
        slugs.reset();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, 'element', function(node) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$heading$2d$rank$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingRank"])(node) && !node.properties.id) {
                node.properties.id = prefix + slugs.slug((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(node));
            }
        });
    };
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-is-element/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Parents} Parents
 */ /**
 * @template Fn
 * @template Fallback
 * @typedef {Fn extends (value: any) => value is infer Thing ? Thing : Fallback} Predicate
 */ /**
 * @callback Check
 *   Check that an arbitrary value is an element.
 * @param {unknown} this
 *   Context object (`this`) to call `test` with
 * @param {unknown} [element]
 *   Anything (typically a node).
 * @param {number | null | undefined} [index]
 *   Position of `element` in its parent.
 * @param {Parents | null | undefined} [parent]
 *   Parent of `element`.
 * @returns {boolean}
 *   Whether this is an element and passes a test.
 *
 * @typedef {Array<TestFunction | string> | TestFunction | string | null | undefined} Test
 *   Check for an arbitrary element.
 *
 *   * when `string`, checks that the element has that tag name
 *   * when `function`, see `TestFunction`
 *   * when `Array`, checks if one of the subtests pass
 *
 * @callback TestFunction
 *   Check if an element passes a test.
 * @param {unknown} this
 *   The given context.
 * @param {Element} element
 *   An element.
 * @param {number | undefined} [index]
 *   Position of `element` in its parent.
 * @param {Parents | undefined} [parent]
 *   Parent of `element`.
 * @returns {boolean | undefined | void}
 *   Whether this element passes the test.
 *
 *   Note: `void` is included until TS sees no return as `undefined`.
 */ /**
 * Check if `element` is an `Element` and whether it passes the given test.
 *
 * @param element
 *   Thing to check, typically `element`.
 * @param test
 *   Check for a specific element.
 * @param index
 *   Position of `element` in its parent.
 * @param parent
 *   Parent of `element`.
 * @param context
 *   Context object (`this`) to call `test` with.
 * @returns
 *   Whether `element` is an `Element` and passes a test.
 * @throws
 *   When an incorrect `test`, `index`, or `parent` is given; there is no error
 *   thrown when `element` is not a node or not an element.
 */ __turbopack_context__.s([
    "convertElement",
    ()=>convertElement,
    "isElement",
    ()=>isElement
]);
const isElement = /**
     * @param {unknown} [element]
     * @param {Test | undefined} [test]
     * @param {number | null | undefined} [index]
     * @param {Parents | null | undefined} [parent]
     * @param {unknown} [context]
     * @returns {boolean}
     */ // eslint-disable-next-line max-params
function(element, test, index, parent, context) {
    const check = convertElement(test);
    if (index !== null && index !== undefined && (typeof index !== 'number' || index < 0 || index === Number.POSITIVE_INFINITY)) {
        throw new Error('Expected positive finite `index`');
    }
    if (parent !== null && parent !== undefined && (!parent.type || !parent.children)) {
        throw new Error('Expected valid `parent`');
    }
    if ((index === null || index === undefined) !== (parent === null || parent === undefined)) {
        throw new Error('Expected both `index` and `parent`');
    }
    return looksLikeAnElement(element) ? check.call(context, element, index, parent) : false;
};
const convertElement = /**
     * @param {Test | null | undefined} [test]
     * @returns {Check}
     */ function(test) {
    if (test === null || test === undefined) {
        return element;
    }
    if (typeof test === 'string') {
        return tagNameFactory(test);
    }
    // Assume array.
    if (typeof test === 'object') {
        return anyFactory(test);
    }
    if (typeof test === 'function') {
        return castFactory(test);
    }
    throw new Error('Expected function, string, or array as `test`');
};
/**
 * Handle multiple tests.
 *
 * @param {Array<TestFunction | string>} tests
 * @returns {Check}
 */ function anyFactory(tests) {
    /** @type {Array<Check>} */ const checks = [];
    let index = -1;
    while(++index < tests.length){
        checks[index] = convertElement(tests[index]);
    }
    return castFactory(any);
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @type {TestFunction}
   */ function any() {
        for(var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++){
            parameters[_key] = arguments[_key];
        }
        let index = -1;
        while(++index < checks.length){
            if (checks[index].apply(this, parameters)) return true;
        }
        return false;
    }
}
/**
 * Turn a string into a test for an element with a certain type.
 *
 * @param {string} check
 * @returns {Check}
 */ function tagNameFactory(check) {
    return castFactory(tagName);
    //TURBOPACK unreachable
    ;
    /**
   * @param {Element} element
   * @returns {boolean}
   */ function tagName(element) {
        return element.tagName === check;
    }
}
/**
 * Turn a custom test into a test for an element that passes that test.
 *
 * @param {TestFunction} testFunction
 * @returns {Check}
 */ function castFactory(testFunction) {
    return check;
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @type {Check}
   */ function check(value, index, parent) {
        return Boolean(looksLikeAnElement(value) && testFunction.call(this, value, typeof index === 'number' ? index : undefined, parent || undefined));
    }
}
/**
 * Make sure something is an element.
 *
 * @param {unknown} element
 * @returns {element is Element}
 */ function element(element) {
    return Boolean(element && typeof element === 'object' && 'type' in element && element.type === 'element' && 'tagName' in element && typeof element.tagName === 'string');
}
/**
 * @param {unknown} value
 * @returns {value is Element}
 */ function looksLikeAnElement(value) {
    return value !== null && typeof value === 'object' && 'type' in value && 'tagName' in value;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-autolink-headings/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast').Root} Root
 *
 * @typedef {import('hast-util-is-element').Test} Test
 */ /**
 * @typedef {'after' | 'append' | 'before' | 'prepend' | 'wrap'} Behavior
 *   Behavior.
 *
 * @callback Build
 *   Generate content.
 * @param {Readonly<Element>} element
 *   Current heading.
 * @returns {Array<ElementContent> | ElementContent}
 *   Content.
 *
 * @callback BuildProperties
 *   Generate properties.
 * @param {Readonly<Element>} element
 *   Current heading.
 * @returns {Properties}
 *   Properties.
 *
 * @typedef Options
 *   Configuration.
 * @property {Behavior | null | undefined} [behavior='prepend']
 *   How to create links (default: `'prepend'`).
 * @property {Readonly<ElementContent> | ReadonlyArray<ElementContent> | Build | null | undefined} [content]
 *   Content to insert in the link (default: if `'wrap'` then `undefined`,
 *   otherwise `<span class="icon icon-link"></span>`);
 *   if `behavior` is `'wrap'` and `Build` is passed, its result replaces the
 *   existing content, otherwise the content is added after existing content.
 * @property {Readonly<ElementContent> | ReadonlyArray<ElementContent> | Build | null | undefined} [group]
 *   Content to wrap the heading and link with, if `behavior` is `'after'` or
 *   `'before'` (optional).
 * @property {Readonly<Properties> | BuildProperties | null | undefined} [headingProperties]
 *   Extra properties to set on the heading (optional).
 * @property {Readonly<Properties> | BuildProperties | null | undefined} [properties]
 *   Extra properties to set on the link when injecting (default:
 *   `{ariaHidden: true, tabIndex: -1}` if `'append'` or `'prepend'`, otherwise
 *   `undefined`).
 * @property {Test | null | undefined} [test]
 *   Extra test for which headings are linked (optional).
 */ /**
 * @template T
 *   Kind.
 * @typedef {(
 *   T extends Record<any, any>
 *     ? {-readonly [k in keyof T]: Cloneable<T[k]>}
 *     : T
 * )} Cloneable
 *   Deep clone.
 *
 *   See: <https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1237#issuecomment-1345515448>
 */ __turbopack_context__.s([
    "default",
    ()=>rehypeAutolinkHeadings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/@ungap/structured-clone/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$heading$2d$rank$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-heading-rank/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$is$2d$element$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-is-element/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-visit-parents/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-visit/lib/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
/** @type {Element} */ const contentDefaults = {
    type: 'element',
    tagName: 'span',
    properties: {
        className: [
            'icon',
            'icon-link'
        ]
    },
    children: []
};
/** @type {Options} */ const emptyOptions = {};
function rehypeAutolinkHeadings(options) {
    const settings = options || emptyOptions;
    let properties = settings.properties;
    const headingOroperties = settings.headingProperties;
    const behavior = settings.behavior || 'prepend';
    const content = settings.content;
    const group = settings.group;
    const is = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$is$2d$element$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertElement"])(settings.test);
    /** @type {import('unist-util-visit').Visitor<Element>} */ let method;
    if (behavior === 'after' || behavior === 'before') {
        method = around;
    } else if (behavior === 'wrap') {
        method = wrap;
    } else {
        method = inject;
        if (!properties) {
            properties = {
                ariaHidden: 'true',
                tabIndex: -1
            };
        }
    }
    /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */ return function(tree) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, 'element', function(node, index, parent) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$heading$2d$rank$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingRank"])(node) && node.properties.id && is(node, index, parent)) {
                Object.assign(node.properties, toProperties(headingOroperties, node));
                return method(node, index, parent);
            }
        });
    };
    //TURBOPACK unreachable
    ;
    /** @type {import('unist-util-visit').Visitor<Element>} */ function inject(node) {
        const children = toChildren(content || contentDefaults, node);
        node.children[behavior === 'prepend' ? 'unshift' : 'push'](create(node, toProperties(properties, node), children));
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKIP"]
        ];
    }
    /** @type {import('unist-util-visit').Visitor<Element>} */ function around(node, index, parent) {
        /* c8 ignore next -- uncommon */ if (typeof index !== 'number' || !parent) return;
        const children = toChildren(content || contentDefaults, node);
        const link = create(node, toProperties(properties, node), children);
        let nodes = behavior === 'before' ? [
            link,
            node
        ] : [
            node,
            link
        ];
        if (group) {
            const grouping = toNode(group, node);
            if (grouping && !Array.isArray(grouping) && grouping.type === 'element') {
                grouping.children = nodes;
                nodes = [
                    grouping
                ];
            }
        }
        parent.children.splice(index, 1, ...nodes);
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKIP"],
            index + nodes.length
        ];
    }
    /** @type {import('unist-util-visit').Visitor<Element>} */ function wrap(node) {
        /** @type {Array<ElementContent>} */ let before = node.children;
        /** @type {Array<ElementContent> | ElementContent} */ let after = [];
        if (typeof content === 'function') {
            before = [];
            after = content(node);
        } else if (content) {
            after = clone(content);
        }
        node.children = [
            create(node, toProperties(properties, node), Array.isArray(after) ? [
                ...before,
                ...after
            ] : [
                ...before,
                after
            ])
        ];
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKIP"]
        ];
    }
}
/**
 * Deep clone.
 *
 * @template T
 *   Kind.
 * @param {T} thing
 *   Thing to clone.
 * @returns {Cloneable<T>}
 *   Cloned thing.
 */ function clone(thing) {
    // Cast because it’s mutable now.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(thing);
}
/**
 * Create an `a`.
 *
 * @param {Readonly<Element>} node
 *   Related heading.
 * @param {Properties | undefined} properties
 *   Properties to set on the link.
 * @param {Array<ElementContent>} children
 *   Content.
 * @returns {Element}
 *   Link.
 */ function create(node, properties, children) {
    return {
        type: 'element',
        tagName: 'a',
        properties: {
            ...properties,
            href: '#' + node.properties.id
        },
        children
    };
}
/**
 * Turn into children.
 *
 * @param {Readonly<ElementContent> | ReadonlyArray<ElementContent> | Build} value
 *   Content.
 * @param {Readonly<Element>} node
 *   Related heading.
 * @returns {Array<ElementContent>}
 *   Children.
 */ function toChildren(value, node) {
    const result = toNode(value, node);
    return Array.isArray(result) ? result : [
        result
    ];
}
/**
 * Turn into a node.
 *
 * @param {Readonly<ElementContent> | ReadonlyArray<ElementContent> | Build} value
 *   Content.
 * @param {Readonly<Element>} node
 *   Related heading.
 * @returns {Array<ElementContent> | ElementContent}
 *   Node.
 */ function toNode(value, node) {
    if (typeof value === 'function') return value(node);
    return clone(value);
}
/**
 * Turn into properties.
 *
 * @param {Readonly<Properties> | BuildProperties | null | undefined} value
 *   Properties.
 * @param {Readonly<Element>} node
 *   Related heading.
 * @returns {Properties}
 *   Properties.
 */ function toProperties(value, node) {
    if (typeof value === 'function') return value(node);
    return value ? clone(value) : {};
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-ignore/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unist-util-visit/lib/index.js [app-client] (ecmascript) <locals>");
;
const rehypeIgnore = function() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { openDelimiter = 'rehype:ignore:start', closeDelimiter = 'rehype:ignore:end' } = options;
    return (tree)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, (node, index, parent)=>{
            if (node.type === 'element' || node.type === 'root') {
                // const start = node.children.findIndex((item) => item.type === 'comment' && item.value === openDelimiter);
                // const end = node.children.findIndex((item) => item.type === 'comment' && item.value === closeDelimiter);
                // if (start > -1 && end > -1) {
                //   node.children = node.children.filter((_, idx) => idx < start || idx > end);
                // }
                let start = false;
                node.children = node.children.filter((item)=>{
                    if (item.type === 'raw' || item.type === 'comment') {
                        let str = (item.value || '').trim();
                        str = str.replace(/^<!--(.*?)-->/, '$1');
                        if (str === openDelimiter) {
                            start = true;
                            return false;
                        }
                        if (str === closeDelimiter) {
                            start = false;
                            return false;
                        }
                    }
                    return !start;
                });
            }
        });
    };
};
const __TURBOPACK__default__export__ = rehypeIgnore;
 //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-html/lib/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef ErrorInfo
 *   Info on a `parse5` error.
 * @property {string} reason
 *   Reason of error.
 * @property {string} description
 *   More info on error.
 * @property {false} [url]
 *   Turn off if this is not documented in the html5 spec (optional).
 */ __turbopack_context__.s([
    "errors",
    ()=>errors
]);
const errors = {
    /** @type {ErrorInfo} */ abandonedHeadElementChild: {
        reason: 'Unexpected metadata element after head',
        description: 'Unexpected element after head. Expected the element before `</head>`',
        url: false
    },
    /** @type {ErrorInfo} */ abruptClosingOfEmptyComment: {
        reason: 'Unexpected abruptly closed empty comment',
        description: 'Unexpected `>` or `->`. Expected `-->` to close comments'
    },
    /** @type {ErrorInfo} */ abruptDoctypePublicIdentifier: {
        reason: 'Unexpected abruptly closed public identifier',
        description: 'Unexpected `>`. Expected a closing `"` or `\'` after the public identifier'
    },
    /** @type {ErrorInfo} */ abruptDoctypeSystemIdentifier: {
        reason: 'Unexpected abruptly closed system identifier',
        description: 'Unexpected `>`. Expected a closing `"` or `\'` after the identifier identifier'
    },
    /** @type {ErrorInfo} */ absenceOfDigitsInNumericCharacterReference: {
        reason: 'Unexpected non-digit at start of numeric character reference',
        description: 'Unexpected `%c`. Expected `[0-9]` for decimal references or `[0-9a-fA-F]` for hexadecimal references'
    },
    /** @type {ErrorInfo} */ cdataInHtmlContent: {
        reason: 'Unexpected CDATA section in HTML',
        description: 'Unexpected `<![CDATA[` in HTML. Remove it, use a comment, or encode special characters instead'
    },
    /** @type {ErrorInfo} */ characterReferenceOutsideUnicodeRange: {
        reason: 'Unexpected too big numeric character reference',
        description: 'Unexpectedly high character reference. Expected character references to be at most hexadecimal 10ffff (or decimal 1114111)'
    },
    /** @type {ErrorInfo} */ closingOfElementWithOpenChildElements: {
        reason: 'Unexpected closing tag with open child elements',
        description: 'Unexpectedly closing tag. Expected other tags to be closed first',
        url: false
    },
    /** @type {ErrorInfo} */ controlCharacterInInputStream: {
        reason: 'Unexpected control character',
        description: 'Unexpected control character `%x`. Expected a non-control code point, 0x00, or ASCII whitespace'
    },
    /** @type {ErrorInfo} */ controlCharacterReference: {
        reason: 'Unexpected control character reference',
        description: 'Unexpectedly control character in reference. Expected a non-control code point, 0x00, or ASCII whitespace'
    },
    /** @type {ErrorInfo} */ disallowedContentInNoscriptInHead: {
        reason: 'Disallowed content inside `<noscript>` in `<head>`',
        description: 'Unexpected text character `%c`. Only use text in `<noscript>`s in `<body>`',
        url: false
    },
    /** @type {ErrorInfo} */ duplicateAttribute: {
        reason: 'Unexpected duplicate attribute',
        description: 'Unexpectedly double attribute. Expected attributes to occur only once'
    },
    /** @type {ErrorInfo} */ endTagWithAttributes: {
        reason: 'Unexpected attribute on closing tag',
        description: 'Unexpected attribute. Expected `>` instead'
    },
    /** @type {ErrorInfo} */ endTagWithTrailingSolidus: {
        reason: 'Unexpected slash at end of closing tag',
        description: 'Unexpected `%c-1`. Expected `>` instead'
    },
    /** @type {ErrorInfo} */ endTagWithoutMatchingOpenElement: {
        reason: 'Unexpected unopened end tag',
        description: 'Unexpected end tag. Expected no end tag or another end tag',
        url: false
    },
    /** @type {ErrorInfo} */ eofBeforeTagName: {
        reason: 'Unexpected end of file',
        description: 'Unexpected end of file. Expected tag name instead'
    },
    /** @type {ErrorInfo} */ eofInCdata: {
        reason: 'Unexpected end of file in CDATA',
        description: 'Unexpected end of file. Expected `]]>` to close the CDATA'
    },
    /** @type {ErrorInfo} */ eofInComment: {
        reason: 'Unexpected end of file in comment',
        description: 'Unexpected end of file. Expected `-->` to close the comment'
    },
    /** @type {ErrorInfo} */ eofInDoctype: {
        reason: 'Unexpected end of file in doctype',
        description: 'Unexpected end of file. Expected a valid doctype (such as `<!doctype html>`)'
    },
    /** @type {ErrorInfo} */ eofInElementThatCanContainOnlyText: {
        reason: 'Unexpected end of file in element that can only contain text',
        description: 'Unexpected end of file. Expected text or a closing tag',
        url: false
    },
    /** @type {ErrorInfo} */ eofInScriptHtmlCommentLikeText: {
        reason: 'Unexpected end of file in comment inside script',
        description: 'Unexpected end of file. Expected `-->` to close the comment'
    },
    /** @type {ErrorInfo} */ eofInTag: {
        reason: 'Unexpected end of file in tag',
        description: 'Unexpected end of file. Expected `>` to close the tag'
    },
    /** @type {ErrorInfo} */ incorrectlyClosedComment: {
        reason: 'Incorrectly closed comment',
        description: 'Unexpected `%c-1`. Expected `-->` to close the comment'
    },
    /** @type {ErrorInfo} */ incorrectlyOpenedComment: {
        reason: 'Incorrectly opened comment',
        description: 'Unexpected `%c`. Expected `<!--` to open the comment'
    },
    /** @type {ErrorInfo} */ invalidCharacterSequenceAfterDoctypeName: {
        reason: 'Invalid sequence after doctype name',
        description: 'Unexpected sequence at `%c`. Expected `public` or `system`'
    },
    /** @type {ErrorInfo} */ invalidFirstCharacterOfTagName: {
        reason: 'Invalid first character in tag name',
        description: 'Unexpected `%c`. Expected an ASCII letter instead'
    },
    /** @type {ErrorInfo} */ misplacedDoctype: {
        reason: 'Misplaced doctype',
        description: 'Unexpected doctype. Expected doctype before head',
        url: false
    },
    /** @type {ErrorInfo} */ misplacedStartTagForHeadElement: {
        reason: 'Misplaced `<head>` start tag',
        description: 'Unexpected start tag `<head>`. Expected `<head>` directly after doctype',
        url: false
    },
    /** @type {ErrorInfo} */ missingAttributeValue: {
        reason: 'Missing attribute value',
        description: 'Unexpected `%c-1`. Expected an attribute value or no `%c-1` instead'
    },
    /** @type {ErrorInfo} */ missingDoctype: {
        reason: 'Missing doctype before other content',
        description: 'Expected a `<!doctype html>` before anything else',
        url: false
    },
    /** @type {ErrorInfo} */ missingDoctypeName: {
        reason: 'Missing doctype name',
        description: 'Unexpected doctype end at `%c`. Expected `html` instead'
    },
    /** @type {ErrorInfo} */ missingDoctypePublicIdentifier: {
        reason: 'Missing public identifier in doctype',
        description: 'Unexpected `%c`. Expected identifier for `public` instead'
    },
    /** @type {ErrorInfo} */ missingDoctypeSystemIdentifier: {
        reason: 'Missing system identifier in doctype',
        description: 'Unexpected `%c`. Expected identifier for `system` instead (suggested: `"about:legacy-compat"`)'
    },
    /** @type {ErrorInfo} */ missingEndTagName: {
        reason: 'Missing name in end tag',
        description: 'Unexpected `%c`. Expected an ASCII letter instead'
    },
    /** @type {ErrorInfo} */ missingQuoteBeforeDoctypePublicIdentifier: {
        reason: 'Missing quote before public identifier in doctype',
        description: 'Unexpected `%c`. Expected `"` or `\'` instead'
    },
    /** @type {ErrorInfo} */ missingQuoteBeforeDoctypeSystemIdentifier: {
        reason: 'Missing quote before system identifier in doctype',
        description: 'Unexpected `%c`. Expected `"` or `\'` instead'
    },
    /** @type {ErrorInfo} */ missingSemicolonAfterCharacterReference: {
        reason: 'Missing semicolon after character reference',
        description: 'Unexpected `%c`. Expected `;` instead'
    },
    /** @type {ErrorInfo} */ missingWhitespaceAfterDoctypePublicKeyword: {
        reason: 'Missing whitespace after public identifier in doctype',
        description: 'Unexpected `%c`. Expected ASCII whitespace instead'
    },
    /** @type {ErrorInfo} */ missingWhitespaceAfterDoctypeSystemKeyword: {
        reason: 'Missing whitespace after system identifier in doctype',
        description: 'Unexpected `%c`. Expected ASCII whitespace instead'
    },
    /** @type {ErrorInfo} */ missingWhitespaceBeforeDoctypeName: {
        reason: 'Missing whitespace before doctype name',
        description: 'Unexpected `%c`. Expected ASCII whitespace instead'
    },
    /** @type {ErrorInfo} */ missingWhitespaceBetweenAttributes: {
        reason: 'Missing whitespace between attributes',
        description: 'Unexpected `%c`. Expected ASCII whitespace instead'
    },
    /** @type {ErrorInfo} */ missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: {
        reason: 'Missing whitespace between public and system identifiers in doctype',
        description: 'Unexpected `%c`. Expected ASCII whitespace instead'
    },
    /** @type {ErrorInfo} */ nestedComment: {
        reason: 'Unexpected nested comment',
        description: 'Unexpected `<!--`. Expected `-->`'
    },
    /** @type {ErrorInfo} */ nestedNoscriptInHead: {
        reason: 'Unexpected nested `<noscript>` in `<head>`',
        description: 'Unexpected `<noscript>`. Expected a closing tag or a meta element',
        url: false
    },
    /** @type {ErrorInfo} */ nonConformingDoctype: {
        reason: 'Unexpected non-conforming doctype declaration',
        description: 'Expected `<!doctype html>` or `<!doctype html system "about:legacy-compat">`',
        url: false
    },
    /** @type {ErrorInfo} */ nonVoidHtmlElementStartTagWithTrailingSolidus: {
        reason: 'Unexpected trailing slash on start tag of non-void element',
        description: 'Unexpected `/`. Expected `>` instead'
    },
    /** @type {ErrorInfo} */ noncharacterCharacterReference: {
        reason: 'Unexpected noncharacter code point referenced by character reference',
        description: 'Unexpected code point. Do not use noncharacters in HTML'
    },
    /** @type {ErrorInfo} */ noncharacterInInputStream: {
        reason: 'Unexpected noncharacter character',
        description: 'Unexpected code point `%x`. Do not use noncharacters in HTML'
    },
    /** @type {ErrorInfo} */ nullCharacterReference: {
        reason: 'Unexpected NULL character referenced by character reference',
        description: 'Unexpected code point. Do not use NULL characters in HTML'
    },
    /** @type {ErrorInfo} */ openElementsLeftAfterEof: {
        reason: 'Unexpected end of file',
        description: 'Unexpected end of file. Expected closing tag instead',
        url: false
    },
    /** @type {ErrorInfo} */ surrogateCharacterReference: {
        reason: 'Unexpected surrogate character referenced by character reference',
        description: 'Unexpected code point. Do not use lone surrogate characters in HTML'
    },
    /** @type {ErrorInfo} */ surrogateInInputStream: {
        reason: 'Unexpected surrogate character',
        description: 'Unexpected code point `%x`. Do not use lone surrogate characters in HTML'
    },
    /** @type {ErrorInfo} */ unexpectedCharacterAfterDoctypeSystemIdentifier: {
        reason: 'Invalid character after system identifier in doctype',
        description: 'Unexpected character at `%c`. Expected `>`'
    },
    /** @type {ErrorInfo} */ unexpectedCharacterInAttributeName: {
        reason: 'Unexpected character in attribute name',
        description: 'Unexpected `%c`. Expected whitespace, `/`, `>`, `=`, or probably an ASCII letter'
    },
    /** @type {ErrorInfo} */ unexpectedCharacterInUnquotedAttributeValue: {
        reason: 'Unexpected character in unquoted attribute value',
        description: 'Unexpected `%c`. Quote the attribute value to include it'
    },
    /** @type {ErrorInfo} */ unexpectedEqualsSignBeforeAttributeName: {
        reason: 'Unexpected equals sign before attribute name',
        description: 'Unexpected `%c`. Add an attribute name before it'
    },
    /** @type {ErrorInfo} */ unexpectedNullCharacter: {
        reason: 'Unexpected NULL character',
        description: 'Unexpected code point `%x`. Do not use NULL characters in HTML'
    },
    /** @type {ErrorInfo} */ unexpectedQuestionMarkInsteadOfTagName: {
        reason: 'Unexpected question mark instead of tag name',
        description: 'Unexpected `%c`. Expected an ASCII letter instead'
    },
    /** @type {ErrorInfo} */ unexpectedSolidusInTag: {
        reason: 'Unexpected slash in tag',
        description: 'Unexpected `%c-1`. Expected it followed by `>` or in a quoted attribute value'
    },
    /** @type {ErrorInfo} */ unknownNamedCharacterReference: {
        reason: 'Unexpected unknown named character reference',
        description: 'Unexpected character reference. Expected known named character references'
    }
};
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-html/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Root} from 'hast'
 * @import {ParserError} from 'parse5'
 * @import {Value} from 'vfile'
 * @import {ErrorCode, Options} from './types.js'
 */ __turbopack_context__.s([
    "fromHtml",
    ()=>fromHtml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/devlop/lib/development.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$parse5$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-parse5/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/parse5/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$vfile$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/vfile/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/vfile-message/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$html$2f$lib$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-html/lib/errors.js [app-client] (ecmascript)");
;
;
;
;
;
;
const base = 'https://html.spec.whatwg.org/multipage/parsing.html#parse-error-';
const dashToCamelRe = /-[a-z]/g;
const formatCRe = /%c(?:([-+])(\d+))?/g;
const formatXRe = /%x/g;
const fatalities = {
    2: true,
    1: false,
    0: null
};
/** @type {Readonly<Options>} */ const emptyOptions = {};
function fromHtml(value, options) {
    const settings = options || emptyOptions;
    const onerror = settings.onerror;
    const file = value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$vfile$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VFile"] ? value : new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$vfile$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VFile"](value);
    const parseFunction = settings.fragment ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseFragment"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$parse5$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"];
    const document = String(file);
    const p5Document = parseFunction(document, {
        sourceCodeLocationInfo: true,
        // Note `parse5` types currently do not allow `undefined`.
        onParseError: settings.onerror ? internalOnerror : null,
        scriptingEnabled: false
    });
    // `parse5` returns document which are always mapped to roots.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$parse5$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromParse5"])(p5Document, {
        file,
        space: settings.space,
        verbose: settings.verbose
    });
    //TURBOPACK unreachable
    ;
    /**
   * Handle a parse error.
   *
   * @param {ParserError} error
   *   Parse5 error.
   * @returns {undefined}
   *   Nothing.
   */ function internalOnerror(error) {
        const code = error.code;
        const name = camelcase(code);
        const setting = settings[name];
        const config = setting === null || setting === undefined ? true : setting;
        const level = typeof config === 'number' ? config : config ? 1 : 0;
        if (level) {
            const info = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$html$2f$lib$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errors"][name];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(info, 'expected known error from `parse5`');
            const message = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VFileMessage"](format(info.reason), {
                place: {
                    start: {
                        line: error.startLine,
                        column: error.startCol,
                        offset: error.startOffset
                    },
                    end: {
                        line: error.endLine,
                        column: error.endCol,
                        offset: error.endOffset
                    }
                },
                ruleId: code,
                source: 'hast-util-from-html'
            });
            if (file.path) {
                message.file = file.path;
                message.name = file.path + ':' + message.name;
            }
            message.fatal = fatalities[level];
            message.note = format(info.description);
            message.url = info.url === false ? undefined : base + code;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"])(onerror, '`internalOnerror` is not passed if `onerror` is not set');
            onerror(message);
        }
        /**
     * Format a human readable string about an error.
     *
     * @param {string} value
     *   Value to format.
     * @returns {string}
     *   Formatted.
     */ function format(value) {
            return value.replace(formatCRe, formatC).replace(formatXRe, formatX);
            //TURBOPACK unreachable
            ;
            /**
       * Format the character.
       *
       * @param {string} _
       *   Match.
       * @param {string} $1
       *   Sign (`-` or `+`, optional).
       * @param {string} $2
       *   Offset.
       * @returns {string}
       *   Formatted.
       */ function formatC(_, $1, $2) {
                const offset = ($2 ? Number.parseInt($2, 10) : 0) * ($1 === '-' ? -1 : 1);
                const char = document.charAt(error.startOffset + offset);
                return visualizeCharacter(char);
            }
            /**
       * Format the character code.
       *
       * @returns {string}
       *   Formatted.
       */ function formatX() {
                return visualizeCharacterCode(document.charCodeAt(error.startOffset));
            }
        }
    }
}
/**
 * @param {string} value
 *   Error code in dash case.
 * @returns {ErrorCode}
 *   Error code in camelcase.
 */ function camelcase(value) {
    // This should match an error code.
    return value.replace(dashToCamelRe, dashToCamel);
}
/**
 * @param {string} $0
 *   Match.
 * @returns {string}
 *   Camelcased.
 */ function dashToCamel($0) {
    return $0.charAt(1).toUpperCase();
}
/**
 * @param {string} char
 *   Character.
 * @returns {string}
 *   Formatted.
 */ function visualizeCharacter(char) {
    return char === '`' ? '` ` `' : char;
}
/**
 * @param {number} charCode
 *   Character code.
 * @returns {string}
 *   Formatted.
 */ function visualizeCharacterCode(charCode) {
    return '0x' + charCode.toString(16).toUpperCase();
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-parse/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Root} from 'hast'
 * @import {Options as FromHtmlOptions} from 'hast-util-from-html'
 * @import {Parser, Processor} from 'unified'
 */ /**
 * @typedef {Omit<FromHtmlOptions, 'onerror'> & RehypeParseFields} Options
 *   Configuration.
 *
 * @typedef RehypeParseFields
 *   Extra fields.
 * @property {boolean | null | undefined} [emitParseErrors=false]
 *   Whether to emit parse errors while parsing (default: `false`).
 *
 *   > 👉 **Note**: parse errors are currently being added to HTML.
 *   > Not all errors emitted by parse5 (or us) are specced yet.
 *   > Some documentation may still be missing.
 */ __turbopack_context__.s([
    "default",
    ()=>rehypeParse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$html$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-from-html/lib/index.js [app-client] (ecmascript)");
;
function rehypeParse(options) {
    /** @type {Processor<Root>} */ // @ts-expect-error: TS in JSDoc generates wrong types if `this` is typed regularly.
    const self = this;
    const { emitParseErrors, ...settings } = {
        ...self.data('settings'),
        ...options
    };
    self.parser = parser;
    /**
   * @type {Parser<Root>}
   */ function parser(document, file) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$from$2d$html$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHtml"])(document, {
            ...settings,
            onerror: emitParseErrors ? function(message) {
                if (file.path) {
                    message.name = file.path + ':' + message.name;
                    message.file = file.path;
                }
                file.messages.push(message);
            } : undefined
        });
    }
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef CoreOptions
 * @property {ReadonlyArray<string>} [subset=[]]
 *   Whether to only escape the given subset of characters.
 * @property {boolean} [escapeOnly=false]
 *   Whether to only escape possibly dangerous characters.
 *   Those characters are `"`, `&`, `'`, `<`, `>`, and `` ` ``.
 *
 * @typedef FormatOptions
 * @property {(code: number, next: number, options: CoreWithFormatOptions) => string} format
 *   Format strategy.
 *
 * @typedef {CoreOptions & FormatOptions & import('./util/format-smart.js').FormatSmartOptions} CoreWithFormatOptions
 */ __turbopack_context__.s([
    "core",
    ()=>core
]);
const defaultSubsetRegex = /["&'<>`]/g;
const surrogatePairsRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
const controlCharactersRegex = // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
const regexEscapeRegex = /[|\\{}()[\]^$+*?.]/g;
/** @type {WeakMap<ReadonlyArray<string>, RegExp>} */ const subsetToRegexCache = new WeakMap();
function core(value, options) {
    value = value.replace(options.subset ? charactersToExpressionCached(options.subset) : defaultSubsetRegex, basic);
    if (options.subset || options.escapeOnly) {
        return value;
    }
    return value// Surrogate pairs.
    .replace(surrogatePairsRegex, surrogate)// BMP control characters (C0 except for LF, CR, SP; DEL; and some more
    // non-ASCII ones).
    .replace(controlCharactersRegex, basic);
    //TURBOPACK unreachable
    ;
    /**
   * @param {string} pair
   * @param {number} index
   * @param {string} all
   */ function surrogate(pair, index, all) {
        return options.format((pair.charCodeAt(0) - 0xd800) * 0x400 + pair.charCodeAt(1) - 0xdc00 + 0x10000, all.charCodeAt(index + 2), options);
    }
    /**
   * @param {string} character
   * @param {number} index
   * @param {string} all
   */ function basic(character, index, all) {
        return options.format(character.charCodeAt(0), all.charCodeAt(index + 1), options);
    }
}
/**
 * A wrapper function that caches the result of `charactersToExpression` with a WeakMap.
 * This can improve performance when tooling calls `charactersToExpression` repeatedly
 * with the same subset.
 *
 * @param {ReadonlyArray<string>} subset
 * @returns {RegExp}
 */ function charactersToExpressionCached(subset) {
    let cached = subsetToRegexCache.get(subset);
    if (!cached) {
        cached = charactersToExpression(subset);
        subsetToRegexCache.set(subset, cached);
    }
    return cached;
}
/**
 * @param {ReadonlyArray<string>} subset
 * @returns {RegExp}
 */ function charactersToExpression(subset) {
    /** @type {Array<string>} */ const groups = [];
    let index = -1;
    while(++index < subset.length){
        groups.push(subset[index].replace(regexEscapeRegex, '\\$&'));
    }
    return new RegExp('(?:' + groups.join('|') + ')', 'g');
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/util/to-hexadecimal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toHexadecimal",
    ()=>toHexadecimal
]);
const hexadecimalRegex = /[\dA-Fa-f]/;
function toHexadecimal(code, next, omit) {
    const value = '&#x' + code.toString(16).toUpperCase();
    return omit && next && !hexadecimalRegex.test(String.fromCharCode(next)) ? value : value + ';';
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/util/to-decimal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toDecimal",
    ()=>toDecimal
]);
const decimalRegex = /\d/;
function toDecimal(code, next, omit) {
    const value = '&#' + String(code);
    return omit && next && !decimalRegex.test(String.fromCharCode(next)) ? value : value + ';';
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/constant/dangerous.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * List of legacy (that don’t need a trailing `;`) named references which could,
 * depending on what follows them, turn into a different meaning
 *
 * @type {Array<string>}
 */ __turbopack_context__.s([
    "dangerous",
    ()=>dangerous
]);
const dangerous = [
    'cent',
    'copy',
    'divide',
    'gt',
    'lt',
    'not',
    'para',
    'times'
];
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/util/to-named.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toNamed",
    ()=>toNamed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$character$2d$entities$2d$legacy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/character-entities-legacy/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$character$2d$entities$2d$html4$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/character-entities-html4/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$constant$2f$dangerous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/constant/dangerous.js [app-client] (ecmascript)");
;
;
;
const own = {}.hasOwnProperty;
/**
 * `characterEntitiesHtml4` but inverted.
 *
 * @type {Record<string, string>}
 */ const characters = {};
/** @type {string} */ let key;
for(key in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$character$2d$entities$2d$html4$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characterEntitiesHtml4"]){
    if (own.call(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$character$2d$entities$2d$html4$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characterEntitiesHtml4"], key)) {
        characters[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$character$2d$entities$2d$html4$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characterEntitiesHtml4"][key]] = key;
    }
}
const notAlphanumericRegex = /[^\dA-Za-z]/;
function toNamed(code, next, omit, attribute) {
    const character = String.fromCharCode(code);
    if (own.call(characters, character)) {
        const name = characters[character];
        const value = '&' + name;
        if (omit && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$character$2d$entities$2d$legacy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characterEntitiesLegacy"].includes(name) && !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$constant$2f$dangerous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dangerous"].includes(name) && (!attribute || next && next !== 61 /* `=` */  && notAlphanumericRegex.test(String.fromCharCode(next)))) {
            return value;
        }
        return value + ';';
    }
    return '';
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/util/format-smart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef FormatSmartOptions
 * @property {boolean} [useNamedReferences=false]
 *   Prefer named character references (`&amp;`) where possible.
 * @property {boolean} [useShortestReferences=false]
 *   Prefer the shortest possible reference, if that results in less bytes.
 *   **Note**: `useNamedReferences` can be omitted when using `useShortestReferences`.
 * @property {boolean} [omitOptionalSemicolons=false]
 *   Whether to omit semicolons when possible.
 *   **Note**: This creates what HTML calls “parse errors” but is otherwise still valid HTML — don’t use this except when building a minifier.
 *   Omitting semicolons is possible for certain named and numeric references in some cases.
 * @property {boolean} [attribute=false]
 *   Create character references which don’t fail in attributes.
 *   **Note**: `attribute` only applies when operating dangerously with
 *   `omitOptionalSemicolons: true`.
 */ __turbopack_context__.s([
    "formatSmart",
    ()=>formatSmart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$to$2d$hexadecimal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/util/to-hexadecimal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$to$2d$decimal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/util/to-decimal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$to$2d$named$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/util/to-named.js [app-client] (ecmascript)");
;
;
;
function formatSmart(code, next, options) {
    let numeric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$to$2d$hexadecimal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexadecimal"])(code, next, options.omitOptionalSemicolons);
    /** @type {string|undefined} */ let named;
    if (options.useNamedReferences || options.useShortestReferences) {
        named = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$to$2d$named$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNamed"])(code, next, options.omitOptionalSemicolons, options.attribute);
    }
    // Use the shortest numeric reference when requested.
    // A simple algorithm would use decimal for all code points under 100, as
    // those are shorter than hexadecimal:
    //
    // * `&#99;` vs `&#x63;` (decimal shorter)
    // * `&#100;` vs `&#x64;` (equal)
    //
    // However, because we take `next` into consideration when `omit` is used,
    // And it would be possible that decimals are shorter on bigger values as
    // well if `next` is hexadecimal but not decimal, we instead compare both.
    if ((options.useShortestReferences || !named) && options.useShortestReferences) {
        const decimal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$to$2d$decimal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDecimal"])(code, next, options.omitOptionalSemicolons);
        if (decimal.length < numeric.length) {
            numeric = decimal;
        }
    }
    return named && (!options.useShortestReferences || named.length < numeric.length) ? named : numeric;
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/util/format-basic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The smallest way to encode a character.
 *
 * @param {number} code
 * @returns {string}
 */ __turbopack_context__.s([
    "formatBasic",
    ()=>formatBasic
]);
function formatBasic(code) {
    return '&#x' + code.toString(16).toUpperCase() + ';';
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('./core.js').CoreOptions & import('./util/format-smart.js').FormatSmartOptions} Options
 * @typedef {import('./core.js').CoreOptions} LightOptions
 */ __turbopack_context__.s([
    "stringifyEntities",
    ()=>stringifyEntities,
    "stringifyEntitiesLight",
    ()=>stringifyEntitiesLight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$format$2d$smart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/util/format-smart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$format$2d$basic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/util/format-basic.js [app-client] (ecmascript)");
;
;
;
function stringifyEntities(value, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["core"])(value, Object.assign({
        format: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$format$2d$smart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSmart"]
    }, options));
}
function stringifyEntitiesLight(value, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["core"])(value, Object.assign({
        format: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$format$2d$basic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBasic"]
    }, options));
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/character-entities-html4/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Map of named character references from HTML 4.
 *
 * @type {Record<string, string>}
 */ __turbopack_context__.s([
    "characterEntitiesHtml4",
    ()=>characterEntitiesHtml4
]);
const characterEntitiesHtml4 = {
    nbsp: ' ',
    iexcl: '¡',
    cent: '¢',
    pound: '£',
    curren: '¤',
    yen: '¥',
    brvbar: '¦',
    sect: '§',
    uml: '¨',
    copy: '©',
    ordf: 'ª',
    laquo: '«',
    not: '¬',
    shy: '­',
    reg: '®',
    macr: '¯',
    deg: '°',
    plusmn: '±',
    sup2: '²',
    sup3: '³',
    acute: '´',
    micro: 'µ',
    para: '¶',
    middot: '·',
    cedil: '¸',
    sup1: '¹',
    ordm: 'º',
    raquo: '»',
    frac14: '¼',
    frac12: '½',
    frac34: '¾',
    iquest: '¿',
    Agrave: 'À',
    Aacute: 'Á',
    Acirc: 'Â',
    Atilde: 'Ã',
    Auml: 'Ä',
    Aring: 'Å',
    AElig: 'Æ',
    Ccedil: 'Ç',
    Egrave: 'È',
    Eacute: 'É',
    Ecirc: 'Ê',
    Euml: 'Ë',
    Igrave: 'Ì',
    Iacute: 'Í',
    Icirc: 'Î',
    Iuml: 'Ï',
    ETH: 'Ð',
    Ntilde: 'Ñ',
    Ograve: 'Ò',
    Oacute: 'Ó',
    Ocirc: 'Ô',
    Otilde: 'Õ',
    Ouml: 'Ö',
    times: '×',
    Oslash: 'Ø',
    Ugrave: 'Ù',
    Uacute: 'Ú',
    Ucirc: 'Û',
    Uuml: 'Ü',
    Yacute: 'Ý',
    THORN: 'Þ',
    szlig: 'ß',
    agrave: 'à',
    aacute: 'á',
    acirc: 'â',
    atilde: 'ã',
    auml: 'ä',
    aring: 'å',
    aelig: 'æ',
    ccedil: 'ç',
    egrave: 'è',
    eacute: 'é',
    ecirc: 'ê',
    euml: 'ë',
    igrave: 'ì',
    iacute: 'í',
    icirc: 'î',
    iuml: 'ï',
    eth: 'ð',
    ntilde: 'ñ',
    ograve: 'ò',
    oacute: 'ó',
    ocirc: 'ô',
    otilde: 'õ',
    ouml: 'ö',
    divide: '÷',
    oslash: 'ø',
    ugrave: 'ù',
    uacute: 'ú',
    ucirc: 'û',
    uuml: 'ü',
    yacute: 'ý',
    thorn: 'þ',
    yuml: 'ÿ',
    fnof: 'ƒ',
    Alpha: 'Α',
    Beta: 'Β',
    Gamma: 'Γ',
    Delta: 'Δ',
    Epsilon: 'Ε',
    Zeta: 'Ζ',
    Eta: 'Η',
    Theta: 'Θ',
    Iota: 'Ι',
    Kappa: 'Κ',
    Lambda: 'Λ',
    Mu: 'Μ',
    Nu: 'Ν',
    Xi: 'Ξ',
    Omicron: 'Ο',
    Pi: 'Π',
    Rho: 'Ρ',
    Sigma: 'Σ',
    Tau: 'Τ',
    Upsilon: 'Υ',
    Phi: 'Φ',
    Chi: 'Χ',
    Psi: 'Ψ',
    Omega: 'Ω',
    alpha: 'α',
    beta: 'β',
    gamma: 'γ',
    delta: 'δ',
    epsilon: 'ε',
    zeta: 'ζ',
    eta: 'η',
    theta: 'θ',
    iota: 'ι',
    kappa: 'κ',
    lambda: 'λ',
    mu: 'μ',
    nu: 'ν',
    xi: 'ξ',
    omicron: 'ο',
    pi: 'π',
    rho: 'ρ',
    sigmaf: 'ς',
    sigma: 'σ',
    tau: 'τ',
    upsilon: 'υ',
    phi: 'φ',
    chi: 'χ',
    psi: 'ψ',
    omega: 'ω',
    thetasym: 'ϑ',
    upsih: 'ϒ',
    piv: 'ϖ',
    bull: '•',
    hellip: '…',
    prime: '′',
    Prime: '″',
    oline: '‾',
    frasl: '⁄',
    weierp: '℘',
    image: 'ℑ',
    real: 'ℜ',
    trade: '™',
    alefsym: 'ℵ',
    larr: '←',
    uarr: '↑',
    rarr: '→',
    darr: '↓',
    harr: '↔',
    crarr: '↵',
    lArr: '⇐',
    uArr: '⇑',
    rArr: '⇒',
    dArr: '⇓',
    hArr: '⇔',
    forall: '∀',
    part: '∂',
    exist: '∃',
    empty: '∅',
    nabla: '∇',
    isin: '∈',
    notin: '∉',
    ni: '∋',
    prod: '∏',
    sum: '∑',
    minus: '−',
    lowast: '∗',
    radic: '√',
    prop: '∝',
    infin: '∞',
    ang: '∠',
    and: '∧',
    or: '∨',
    cap: '∩',
    cup: '∪',
    int: '∫',
    there4: '∴',
    sim: '∼',
    cong: '≅',
    asymp: '≈',
    ne: '≠',
    equiv: '≡',
    le: '≤',
    ge: '≥',
    sub: '⊂',
    sup: '⊃',
    nsub: '⊄',
    sube: '⊆',
    supe: '⊇',
    oplus: '⊕',
    otimes: '⊗',
    perp: '⊥',
    sdot: '⋅',
    lceil: '⌈',
    rceil: '⌉',
    lfloor: '⌊',
    rfloor: '⌋',
    lang: '〈',
    rang: '〉',
    loz: '◊',
    spades: '♠',
    clubs: '♣',
    hearts: '♥',
    diams: '♦',
    quot: '"',
    amp: '&',
    lt: '<',
    gt: '>',
    OElig: 'Œ',
    oelig: 'œ',
    Scaron: 'Š',
    scaron: 'š',
    Yuml: 'Ÿ',
    circ: 'ˆ',
    tilde: '˜',
    ensp: ' ',
    emsp: ' ',
    thinsp: ' ',
    zwnj: '‌',
    zwj: '‍',
    lrm: '‎',
    rlm: '‏',
    ndash: '–',
    mdash: '—',
    lsquo: '‘',
    rsquo: '’',
    sbquo: '‚',
    ldquo: '“',
    rdquo: '”',
    bdquo: '„',
    dagger: '†',
    Dagger: '‡',
    permil: '‰',
    lsaquo: '‹',
    rsaquo: '›',
    euro: '€'
};
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/comment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Comment, Parents} from 'hast'
 * @import {State} from '../index.js'
 */ __turbopack_context__.s([
    "comment",
    ()=>comment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/index.js [app-client] (ecmascript)");
;
const htmlCommentRegex = /^>|^->|<!--|-->|--!>|<!-$/g;
// Declare arrays as variables so it can be cached by `stringifyEntities`
const bogusCommentEntitySubset = [
    '>'
];
const commentEntitySubset = [
    '<',
    '>'
];
function comment(node, _1, _2, state) {
    // See: <https://html.spec.whatwg.org/multipage/syntax.html#comments>
    return state.settings.bogusComments ? '<?' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyEntities"])(node.value, Object.assign({}, state.settings.characterReferences, {
        subset: bogusCommentEntitySubset
    })) + '>' : '<!--' + node.value.replace(htmlCommentRegex, encode) + '-->';
    //TURBOPACK unreachable
    ;
    /**
   * @param {string} $0
   */ function encode($0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyEntities"])($0, Object.assign({}, state.settings.characterReferences, {
            subset: commentEntitySubset
        }));
    }
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/doctype.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Doctype, Parents} from 'hast'
 * @import {State} from '../index.js'
 */ /**
 * Serialize a doctype.
 *
 * @param {Doctype} _1
 *   Node to handle.
 * @param {number | undefined} _2
 *   Index of `node` in `parent.
 * @param {Parents | undefined} _3
 *   Parent of `node`.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {string}
 *   Serialized node.
 */ __turbopack_context__.s([
    "doctype",
    ()=>doctype
]);
function doctype(_1, _2, _3, state) {
    return '<!' + (state.settings.upperDoctype ? 'DOCTYPE' : 'doctype') + (state.settings.tightDoctype ? '' : ' ') + 'html>';
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/omission/util/siblings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Parents, RootContent} from 'hast'
 */ __turbopack_context__.s([
    "siblingAfter",
    ()=>siblingAfter,
    "siblingBefore",
    ()=>siblingBefore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-whitespace/lib/index.js [app-client] (ecmascript)");
;
const siblingAfter = siblings(1);
const siblingBefore = siblings(-1);
/** @type {Array<RootContent>} */ const emptyChildren = [];
/**
 * Factory to check siblings in a direction.
 *
 * @param {number} increment
 */ function siblings(increment) {
    return sibling;
    //TURBOPACK unreachable
    ;
    /**
   * Find applicable siblings in a direction.
   *
   * @template {Parents} Parent
   *   Parent type.
   * @param {Parent | undefined} parent
   *   Parent.
   * @param {number | undefined} index
   *   Index of child in `parent`.
   * @param {boolean | undefined} [includeWhitespace=false]
   *   Whether to include whitespace (default: `false`).
   * @returns {Parent extends {children: Array<infer Child>} ? Child | undefined : never}
   *   Child of parent.
   */ function sibling(parent, index, includeWhitespace) {
        const siblings = parent ? parent.children : emptyChildren;
        let offset = (index || 0) + increment;
        let next = siblings[offset];
        if (!includeWhitespace) {
            while(next && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whitespace"])(next)){
                offset += increment;
                next = siblings[offset];
            }
        }
        // @ts-expect-error: it’s a correct child.
        return next;
    }
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/omission/omission.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Parents} from 'hast'
 */ /**
 * @callback OmitHandle
 *   Check if a tag can be omitted.
 * @param {Element} element
 *   Element to check.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether to omit a tag.
 *
 */ __turbopack_context__.s([
    "omission",
    ()=>omission
]);
const own = {}.hasOwnProperty;
function omission(handlers) {
    return omit;
    //TURBOPACK unreachable
    ;
    /**
   * Check if a given node can have a tag omitted.
   *
   * @type {OmitHandle}
   */ function omit(node, index, parent) {
        return own.call(handlers, node.tagName) && handlers[node.tagName](node, index, parent);
    }
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/omission/closing.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Parents} from 'hast'
 */ __turbopack_context__.s([
    "closing",
    ()=>closing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-whitespace/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/omission/util/siblings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$omission$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/omission/omission.js [app-client] (ecmascript)");
;
;
;
const closing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$omission$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["omission"])({
    body,
    caption: headOrColgroupOrCaption,
    colgroup: headOrColgroupOrCaption,
    dd,
    dt,
    head: headOrColgroupOrCaption,
    html,
    li,
    optgroup,
    option,
    p,
    rp: rubyElement,
    rt: rubyElement,
    tbody,
    td: cells,
    tfoot,
    th: cells,
    thead,
    tr
});
/**
 * Macro for `</head>`, `</colgroup>`, and `</caption>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function headOrColgroupOrCaption(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index, true);
    return !next || next.type !== 'comment' && !(next.type === 'text' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whitespace"])(next.value.charAt(0)));
}
/**
 * Whether to omit `</html>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function html(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type !== 'comment';
}
/**
 * Whether to omit `</body>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function body(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type !== 'comment';
}
/**
 * Whether to omit `</p>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function p(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return next ? next.type === 'element' && (next.tagName === 'address' || next.tagName === 'article' || next.tagName === 'aside' || next.tagName === 'blockquote' || next.tagName === 'details' || next.tagName === 'div' || next.tagName === 'dl' || next.tagName === 'fieldset' || next.tagName === 'figcaption' || next.tagName === 'figure' || next.tagName === 'footer' || next.tagName === 'form' || next.tagName === 'h1' || next.tagName === 'h2' || next.tagName === 'h3' || next.tagName === 'h4' || next.tagName === 'h5' || next.tagName === 'h6' || next.tagName === 'header' || next.tagName === 'hgroup' || next.tagName === 'hr' || next.tagName === 'main' || next.tagName === 'menu' || next.tagName === 'nav' || next.tagName === 'ol' || next.tagName === 'p' || next.tagName === 'pre' || next.tagName === 'section' || next.tagName === 'table' || next.tagName === 'ul') : !parent || // Confusing parent.
    !(parent.type === 'element' && (parent.tagName === 'a' || parent.tagName === 'audio' || parent.tagName === 'del' || parent.tagName === 'ins' || parent.tagName === 'map' || parent.tagName === 'noscript' || parent.tagName === 'video'));
}
/**
 * Whether to omit `</li>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function li(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && next.tagName === 'li';
}
/**
 * Whether to omit `</dt>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function dt(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return Boolean(next && next.type === 'element' && (next.tagName === 'dt' || next.tagName === 'dd'));
}
/**
 * Whether to omit `</dd>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function dd(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && (next.tagName === 'dt' || next.tagName === 'dd');
}
/**
 * Whether to omit `</rt>` or `</rp>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function rubyElement(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && (next.tagName === 'rp' || next.tagName === 'rt');
}
/**
 * Whether to omit `</optgroup>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function optgroup(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && next.tagName === 'optgroup';
}
/**
 * Whether to omit `</option>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function option(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && (next.tagName === 'option' || next.tagName === 'optgroup');
}
/**
 * Whether to omit `</thead>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function thead(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return Boolean(next && next.type === 'element' && (next.tagName === 'tbody' || next.tagName === 'tfoot'));
}
/**
 * Whether to omit `</tbody>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function tbody(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && (next.tagName === 'tbody' || next.tagName === 'tfoot');
}
/**
 * Whether to omit `</tfoot>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function tfoot(_, index, parent) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
}
/**
 * Whether to omit `</tr>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function tr(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && next.tagName === 'tr';
}
/**
 * Whether to omit `</td>` or `</th>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function cells(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && (next.tagName === 'td' || next.tagName === 'th');
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/omission/opening.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Parents} from 'hast'
 */ __turbopack_context__.s([
    "opening",
    ()=>opening
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-whitespace/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/omission/util/siblings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$closing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/omission/closing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$omission$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/omission/omission.js [app-client] (ecmascript)");
;
;
;
;
const opening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$omission$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["omission"])({
    body,
    colgroup,
    head,
    html,
    tbody
});
/**
 * Whether to omit `<html>`.
 *
 * @param {Element} node
 *   Element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */ function html(node) {
    const head = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(node, -1);
    return !head || head.type !== 'comment';
}
/**
 * Whether to omit `<head>`.
 *
 * @param {Element} node
 *   Element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */ function head(node) {
    /** @type {Set<string>} */ const seen = new Set();
    // Whether `srcdoc` or not,
    // make sure the content model at least doesn’t have too many `base`s/`title`s.
    for (const child of node.children){
        if (child.type === 'element' && (child.tagName === 'base' || child.tagName === 'title')) {
            if (seen.has(child.tagName)) return false;
            seen.add(child.tagName);
        }
    }
    // “May be omitted if the element is empty,
    // or if the first thing inside the head element is an element.”
    const child = node.children[0];
    return !child || child.type === 'element';
}
/**
 * Whether to omit `<body>`.
 *
 * @param {Element} node
 *   Element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */ function body(node) {
    const head = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(node, -1, true);
    return !head || head.type !== 'comment' && !(head.type === 'text' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whitespace"])(head.value.charAt(0))) && !(head.type === 'element' && (head.tagName === 'meta' || head.tagName === 'link' || head.tagName === 'script' || head.tagName === 'style' || head.tagName === 'template'));
}
/**
 * Whether to omit `<colgroup>`.
 * The spec describes some logic for the opening tag, but it’s easier to
 * implement in the closing tag, to the same effect, so we handle it there
 * instead.
 *
 * @param {Element} node
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */ function colgroup(node, index, parent) {
    const previous = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingBefore"])(parent, index);
    const head = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(node, -1, true);
    // Previous colgroup was already omitted.
    if (parent && previous && previous.type === 'element' && previous.tagName === 'colgroup' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$closing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closing"])(previous, parent.children.indexOf(previous), parent)) {
        return false;
    }
    return Boolean(head && head.type === 'element' && head.tagName === 'col');
}
/**
 * Whether to omit `<tbody>`.
 *
 * @param {Element} node
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */ function tbody(node, index, parent) {
    const previous = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingBefore"])(parent, index);
    const head = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(node, -1);
    // Previous table section was already omitted.
    if (parent && previous && previous.type === 'element' && (previous.tagName === 'thead' || previous.tagName === 'tbody') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$closing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closing"])(previous, parent.children.indexOf(previous), parent)) {
        return false;
    }
    return Boolean(head && head.type === 'element' && head.tagName === 'tr');
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/element.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Parents, Properties} from 'hast'
 * @import {State} from '../index.js'
 */ __turbopack_context__.s([
    "element",
    ()=>element
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$ccount$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/ccount/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/comma-separated-tokens/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/property-information/lib/find.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/property-information/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/space-separated-tokens/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$closing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/omission/closing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$opening$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/omission/opening.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
/**
 * Maps of subsets.
 *
 * Each value is a matrix of tuples.
 * The value at `0` causes parse errors, the value at `1` is valid.
 * Of both, the value at `0` is unsafe, and the value at `1` is safe.
 *
 * @type {Record<'double' | 'name' | 'single' | 'unquoted', Array<[Array<string>, Array<string>]>>}
 */ const constants = {
    // See: <https://html.spec.whatwg.org/#attribute-name-state>.
    name: [
        [
            '\t\n\f\r &/=>'.split(''),
            '\t\n\f\r "&\'/=>`'.split('')
        ],
        [
            '\0\t\n\f\r "&\'/<=>'.split(''),
            '\0\t\n\f\r "&\'/<=>`'.split('')
        ]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
    unquoted: [
        [
            '\t\n\f\r &>'.split(''),
            '\0\t\n\f\r "&\'<=>`'.split('')
        ],
        [
            '\0\t\n\f\r "&\'<=>`'.split(''),
            '\0\t\n\f\r "&\'<=>`'.split('')
        ]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
    single: [
        [
            "&'".split(''),
            '"&\'`'.split('')
        ],
        [
            "\0&'".split(''),
            '\0"&\'`'.split('')
        ]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
    double: [
        [
            '"&'.split(''),
            '"&\'`'.split('')
        ],
        [
            '\0"&'.split(''),
            '\0"&\'`'.split('')
        ]
    ]
};
function element(node, index, parent, state) {
    const schema = state.schema;
    const omit = schema.space === 'svg' ? false : state.settings.omitOptionalTags;
    let selfClosing = schema.space === 'svg' ? state.settings.closeEmptyElements : state.settings.voids.includes(node.tagName.toLowerCase());
    /** @type {Array<string>} */ const parts = [];
    /** @type {string} */ let last;
    if (schema.space === 'html' && node.tagName === 'svg') {
        state.schema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"];
    }
    const attributes = serializeAttributes(state, node.properties);
    const content = state.all(schema.space === 'html' && node.tagName === 'template' ? node.content : node);
    state.schema = schema;
    // If the node is categorised as void, but it has children, remove the
    // categorisation.
    // This enables for example `menuitem`s, which are void in W3C HTML but not
    // void in WHATWG HTML, to be stringified properly.
    // Note: `menuitem` has since been removed from the HTML spec, and so is no
    // longer void.
    if (content) selfClosing = false;
    if (attributes || !omit || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$opening$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opening"])(node, index, parent)) {
        parts.push('<', node.tagName, attributes ? ' ' + attributes : '');
        if (selfClosing && (schema.space === 'svg' || state.settings.closeSelfClosing)) {
            last = attributes.charAt(attributes.length - 1);
            if (!state.settings.tightSelfClosing || last === '/' || last && last !== '"' && last !== "'") {
                parts.push(' ');
            }
            parts.push('/');
        }
        parts.push('>');
    }
    parts.push(content);
    if (!selfClosing && (!omit || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$closing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closing"])(node, index, parent))) {
        parts.push('</' + node.tagName + '>');
    }
    return parts.join('');
}
/**
 * @param {State} state
 * @param {Properties | null | undefined} properties
 * @returns {string}
 */ function serializeAttributes(state, properties) {
    /** @type {Array<string>} */ const values = [];
    let index = -1;
    /** @type {string} */ let key;
    if (properties) {
        for(key in properties){
            if (properties[key] !== null && properties[key] !== undefined) {
                const value = serializeAttribute(state, key, properties[key]);
                if (value) values.push(value);
            }
        }
    }
    while(++index < values.length){
        const last = state.settings.tightAttributes ? values[index].charAt(values[index].length - 1) : undefined;
        // In tight mode, don’t add a space after quoted attributes.
        if (index !== values.length - 1 && last !== '"' && last !== "'") {
            values[index] += ' ';
        }
    }
    return values.join('');
}
/**
 * @param {State} state
 * @param {string} key
 * @param {Properties[keyof Properties]} value
 * @returns {string}
 */ function serializeAttribute(state, key, value) {
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["find"])(state.schema, key);
    const x = state.settings.allowParseErrors && state.schema.space === 'html' ? 0 : 1;
    const y = state.settings.allowDangerousCharacters ? 0 : 1;
    let quote = state.quote;
    /** @type {string | undefined} */ let result;
    if (info.overloadedBoolean && (value === info.attribute || value === '')) {
        value = true;
    } else if ((info.boolean || info.overloadedBoolean) && (typeof value !== 'string' || value === info.attribute || value === '')) {
        value = Boolean(value);
    }
    if (value === null || value === undefined || value === false || typeof value === 'number' && Number.isNaN(value)) {
        return '';
    }
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyEntities"])(info.attribute, Object.assign({}, state.settings.characterReferences, {
        // Always encode without parse errors in non-HTML.
        subset: constants.name[x][y]
    }));
    // No value.
    // There is currently only one boolean property in SVG: `[download]` on
    // `<a>`.
    // This property does not seem to work in browsers (Firefox, Safari, Chrome),
    // so I can’t test if dropping the value works.
    // But I assume that it should:
    //
    // ```html
    // <!doctype html>
    // <svg viewBox="0 0 100 100">
    //   <a href=https://example.com download>
    //     <circle cx=50 cy=40 r=35 />
    //   </a>
    // </svg>
    // ```
    //
    // See: <https://github.com/wooorm/property-information/blob/main/lib/svg.js>
    if (value === true) return name;
    // `spaces` doesn’t accept a second argument, but it’s given here just to
    // keep the code cleaner.
    value = Array.isArray(value) ? (info.commaSeparated ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(value, {
        padLeft: !state.settings.tightCommaSeparatedLists
    }) : String(value);
    if (state.settings.collapseEmptyAttributes && !value) return name;
    // Check unquoted value.
    if (state.settings.preferUnquoted) {
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyEntities"])(value, Object.assign({}, state.settings.characterReferences, {
            attribute: true,
            subset: constants.unquoted[x][y]
        }));
    }
    // If we don’t want unquoted, or if `value` contains character references when
    // unquoted…
    if (result !== value) {
        // If the alternative is less common than `quote`, switch.
        if (state.settings.quoteSmart && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$ccount$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ccount"])(value, quote) > (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$ccount$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ccount"])(value, state.alternative)) {
            quote = state.alternative;
        }
        result = quote + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyEntities"])(value, Object.assign({}, state.settings.characterReferences, {
            // Always encode without parse errors in non-HTML.
            subset: (quote === "'" ? constants.single : constants.double)[x][y],
            attribute: true
        })) + quote;
    }
    // Don’t add a `=` for unquoted empties.
    return name + (result ? '=' + result : result);
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Parents, Text} from 'hast'
 * @import {Raw} from 'mdast-util-to-hast'
 * @import {State} from '../index.js'
 */ __turbopack_context__.s([
    "text",
    ()=>text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/stringify-entities/lib/index.js [app-client] (ecmascript)");
;
// Declare array as variable so it can be cached by `stringifyEntities`
const textEntitySubset = [
    '<',
    '&'
];
function text(node, _, parent, state) {
    // Check if content of `node` should be escaped.
    return parent && parent.type === 'element' && (parent.tagName === 'script' || parent.tagName === 'style') ? node.value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyEntities"])(node.value, Object.assign({}, state.settings.characterReferences, {
        subset: textEntitySubset
    }));
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/raw.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Parents} from 'hast'
 * @import {Raw} from 'mdast-util-to-hast'
 * @import {State} from '../index.js'
 */ __turbopack_context__.s([
    "raw",
    ()=>raw
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/text.js [app-client] (ecmascript)");
;
function raw(node, index, parent, state) {
    return state.settings.allowDangerousHtml ? node.value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])(node, index, parent, state);
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/root.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Parents, Root} from 'hast'
 * @import {State} from '../index.js'
 */ /**
 * Serialize a root.
 *
 * @param {Root} node
 *   Node to handle.
 * @param {number | undefined} _1
 *   Index of `node` in `parent.
 * @param {Parents | undefined} _2
 *   Parent of `node`.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {string}
 *   Serialized node.
 */ __turbopack_context__.s([
    "root",
    ()=>root
]);
function root(node, _1, _2, state) {
    return state.all(node);
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Nodes, Parents} from 'hast'
 * @import {State} from '../index.js'
 */ __turbopack_context__.s([
    "handle",
    ()=>handle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$zwitch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/zwitch/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$comment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/comment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$doctype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/doctype.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$raw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/raw.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/root.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/text.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const handle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$zwitch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zwitch"])('type', {
    invalid,
    unknown,
    handlers: {
        comment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$comment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comment"],
        doctype: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$doctype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doctype"],
        element: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["element"],
        raw: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$raw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raw"],
        root: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["root"],
        text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"]
    }
});
/**
 * Fail when a non-node is found in the tree.
 *
 * @param {unknown} node
 *   Unknown value.
 * @returns {never}
 *   Never.
 */ function invalid(node) {
    throw new Error('Expected node, not `' + node + '`');
}
/**
 * Fail when a node with an unknown type is found in the tree.
 *
 * @param {unknown} node_
 *  Unknown node.
 * @returns {never}
 *   Never.
 */ function unknown(node_) {
    // `type` is guaranteed by runtime JS.
    const node = node_;
    throw new Error('Cannot compile unknown node `' + node.type + '`');
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Nodes, Parents, RootContent} from 'hast'
 * @import {Schema} from 'property-information'
 * @import {Options as StringifyEntitiesOptions} from 'stringify-entities'
 */ /**
 * @typedef {Omit<StringifyEntitiesOptions, 'attribute' | 'escapeOnly' | 'subset'>} CharacterReferences
 *
 * @typedef Options
 *   Configuration.
 * @property {boolean | null | undefined} [allowDangerousCharacters=false]
 *   Do not encode some characters which cause XSS vulnerabilities in older
 *   browsers (default: `false`).
 *
 *   > ⚠️ **Danger**: only set this if you completely trust the content.
 * @property {boolean | null | undefined} [allowDangerousHtml=false]
 *   Allow `raw` nodes and insert them as raw HTML (default: `false`).
 *
 *   When `false`, `Raw` nodes are encoded.
 *
 *   > ⚠️ **Danger**: only set this if you completely trust the content.
 * @property {boolean | null | undefined} [allowParseErrors=false]
 *   Do not encode characters which cause parse errors (even though they work),
 *   to save bytes (default: `false`).
 *
 *   Not used in the SVG space.
 *
 *   > 👉 **Note**: intentionally creates parse errors in markup (how parse
 *   > errors are handled is well defined, so this works but isn’t pretty).
 * @property {boolean | null | undefined} [bogusComments=false]
 *   Use “bogus comments” instead of comments to save byes: `<?charlie>`
 *   instead of `<!--charlie-->` (default: `false`).
 *
 *   > 👉 **Note**: intentionally creates parse errors in markup (how parse
 *   > errors are handled is well defined, so this works but isn’t pretty).
 * @property {CharacterReferences | null | undefined} [characterReferences]
 *   Configure how to serialize character references (optional).
 * @property {boolean | null | undefined} [closeEmptyElements=false]
 *   Close SVG elements without any content with slash (`/`) on the opening tag
 *   instead of an end tag: `<circle />` instead of `<circle></circle>`
 *   (default: `false`).
 *
 *   See `tightSelfClosing` to control whether a space is used before the
 *   slash.
 *
 *   Not used in the HTML space.
 * @property {boolean | null | undefined} [closeSelfClosing=false]
 *   Close self-closing nodes with an extra slash (`/`): `<img />` instead of
 *   `<img>` (default: `false`).
 *
 *   See `tightSelfClosing` to control whether a space is used before the
 *   slash.
 *
 *   Not used in the SVG space.
 * @property {boolean | null | undefined} [collapseEmptyAttributes=false]
 *   Collapse empty attributes: get `class` instead of `class=""` (default:
 *   `false`).
 *
 *   Not used in the SVG space.
 *
 *   > 👉 **Note**: boolean attributes (such as `hidden`) are always collapsed.
 * @property {boolean | null | undefined} [omitOptionalTags=false]
 *   Omit optional opening and closing tags (default: `false`).
 *
 *   For example, in `<ol><li>one</li><li>two</li></ol>`, both `</li>` closing
 *   tags can be omitted.
 *   The first because it’s followed by another `li`, the last because it’s
 *   followed by nothing.
 *
 *   Not used in the SVG space.
 * @property {boolean | null | undefined} [preferUnquoted=false]
 *   Leave attributes unquoted if that results in less bytes (default: `false`).
 *
 *   Not used in the SVG space.
 * @property {boolean | null | undefined} [quoteSmart=false]
 *   Use the other quote if that results in less bytes (default: `false`).
 * @property {Quote | null | undefined} [quote='"']
 *   Preferred quote to use (default: `'"'`).
 * @property {Space | null | undefined} [space='html']
 *   When an `<svg>` element is found in the HTML space, this package already
 *   automatically switches to and from the SVG space when entering and exiting
 *   it (default: `'html'`).
 *
 *   > 👉 **Note**: hast is not XML.
 *   > It supports SVG as embedded in HTML.
 *   > It does not support the features available in XML.
 *   > Passing SVG might break but fragments of modern SVG should be fine.
 *   > Use [`xast`][xast] if you need to support SVG as XML.
 * @property {boolean | null | undefined} [tightAttributes=false]
 *   Join attributes together, without whitespace, if possible: get
 *   `class="a b"title="c d"` instead of `class="a b" title="c d"` to save
 *   bytes (default: `false`).
 *
 *   Not used in the SVG space.
 *
 *   > 👉 **Note**: intentionally creates parse errors in markup (how parse
 *   > errors are handled is well defined, so this works but isn’t pretty).
 * @property {boolean | null | undefined} [tightCommaSeparatedLists=false]
 *   Join known comma-separated attribute values with just a comma (`,`),
 *   instead of padding them on the right as well (`,␠`, where `␠` represents a
 *   space) (default: `false`).
 * @property {boolean | null | undefined} [tightDoctype=false]
 *   Drop unneeded spaces in doctypes: `<!doctypehtml>` instead of
 *   `<!doctype html>` to save bytes (default: `false`).
 *
 *   > 👉 **Note**: intentionally creates parse errors in markup (how parse
 *   > errors are handled is well defined, so this works but isn’t pretty).
 * @property {boolean | null | undefined} [tightSelfClosing=false]
 *   Do not use an extra space when closing self-closing elements: `<img/>`
 *   instead of `<img />` (default: `false`).
 *
 *   > 👉 **Note**: only used if `closeSelfClosing: true` or
 *   > `closeEmptyElements: true`.
 * @property {boolean | null | undefined} [upperDoctype=false]
 *   Use a `<!DOCTYPE…` instead of `<!doctype…` (default: `false`).
 *
 *   Useless except for XHTML.
 * @property {ReadonlyArray<string> | null | undefined} [voids]
 *   Tag names of elements to serialize without closing tag (default: `html-void-elements`).
 *
 *   Not used in the SVG space.
 *
 *   > 👉 **Note**: It’s highly unlikely that you want to pass this, because
 *   > hast is not for XML, and HTML will not add more void elements.
 *
 * @typedef {'"' | "'"} Quote
 *   HTML quotes for attribute values.
 *
 * @typedef {Omit<Required<{[key in keyof Options]: Exclude<Options[key], null | undefined>}>, 'space' | 'quote'>} Settings
 *
 * @typedef {'html' | 'svg'} Space
 *   Namespace.
 *
 * @typedef State
 *   Info passed around about the current state.
 * @property {(node: Parents | undefined) => string} all
 *   Serialize the children of a parent node.
 * @property {Quote} alternative
 *   Alternative quote.
 * @property {(node: Nodes, index: number | undefined, parent: Parents | undefined) => string} one
 *   Serialize one node.
 * @property {Quote} quote
 *   Preferred quote.
 * @property {Schema} schema
 *   Current schema.
 * @property {Settings} settings
 *   User configuration.
 */ __turbopack_context__.s([
    "all",
    ()=>all,
    "toHtml",
    ()=>toHtml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$html$2d$void$2d$elements$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/html-void-elements/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/property-information/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/handle/index.js [app-client] (ecmascript)");
;
;
;
/** @type {Options} */ const emptyOptions = {};
/** @type {CharacterReferences} */ const emptyCharacterReferences = {};
/** @type {Array<never>} */ const emptyChildren = [];
function toHtml(tree, options) {
    const options_ = options || emptyOptions;
    const quote = options_.quote || '"';
    const alternative = quote === '"' ? "'" : '"';
    if (quote !== '"' && quote !== "'") {
        throw new Error('Invalid quote `' + quote + '`, expected `\'` or `"`');
    }
    /** @type {State} */ const state = {
        one,
        all,
        settings: {
            omitOptionalTags: options_.omitOptionalTags || false,
            allowParseErrors: options_.allowParseErrors || false,
            allowDangerousCharacters: options_.allowDangerousCharacters || false,
            quoteSmart: options_.quoteSmart || false,
            preferUnquoted: options_.preferUnquoted || false,
            tightAttributes: options_.tightAttributes || false,
            upperDoctype: options_.upperDoctype || false,
            tightDoctype: options_.tightDoctype || false,
            bogusComments: options_.bogusComments || false,
            tightCommaSeparatedLists: options_.tightCommaSeparatedLists || false,
            tightSelfClosing: options_.tightSelfClosing || false,
            collapseEmptyAttributes: options_.collapseEmptyAttributes || false,
            allowDangerousHtml: options_.allowDangerousHtml || false,
            voids: options_.voids || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$html$2d$void$2d$elements$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlVoidElements"],
            characterReferences: options_.characterReferences || emptyCharacterReferences,
            closeSelfClosing: options_.closeSelfClosing || false,
            closeEmptyElements: options_.closeEmptyElements || false
        },
        schema: options_.space === 'svg' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["html"],
        quote,
        alternative
    };
    return state.one(Array.isArray(tree) ? {
        type: 'root',
        children: tree
    } : tree, undefined, undefined);
}
/**
 * Serialize a node.
 *
 * @this {State}
 *   Info passed around about the current state.
 * @param {Nodes} node
 *   Node to handle.
 * @param {number | undefined} index
 *   Index of `node` in `parent.
 * @param {Parents | undefined} parent
 *   Parent of `node`.
 * @returns {string}
 *   Serialized node.
 */ function one(node, index, parent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handle"])(node, index, parent, this);
}
function all(parent) {
    /** @type {Array<string>} */ const results = [];
    const children = parent && parent.children || emptyChildren;
    let index = -1;
    while(++index < children.length){
        results[index] = this.one(children[index], index, parent);
    }
    return results.join('');
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-stringify/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Root} from 'hast'
 * @import {Options} from 'hast-util-to-html'
 * @import {Compiler, Processor} from 'unified'
 */ __turbopack_context__.s([
    "default",
    ()=>rehypeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/hast-util-to-html/lib/index.js [app-client] (ecmascript)");
;
function rehypeStringify(options) {
    /** @type {Processor<undefined, undefined, undefined, Root, string>} */ // @ts-expect-error: TS in JSDoc generates wrong types if `this` is typed regularly.
    const self = this;
    const settings = {
        ...self.data('settings'),
        ...options
    };
    self.compiler = compiler;
    /**
   * @type {Compiler<Root, string>}
   */ function compiler(tree) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHtml"])(tree, settings);
    }
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Note: types exposed from `index.d.ts`
__turbopack_context__.s([
    "rehype",
    ()=>rehype
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$parse$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-parse/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$stringify$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/rehype-stringify/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unified$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/unified/lib/index.js [app-client] (ecmascript)");
;
;
;
const rehype = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$unified$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unified"])().use(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$parse$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$rehype$2d$stringify$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).freeze();
}),
]);

//# sourceMappingURL=4c47f_093ee97d._.js.map