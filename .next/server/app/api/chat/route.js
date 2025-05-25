/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/chat/route";
exports.ids = ["app/api/chat/route"];
exports.modules = {

/***/ "(rsc)/./app/api/chat/route.ts":
/*!*******************************!*\
  !*** ./app/api/chat/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ai */ \"(rsc)/./node_modules/.pnpm/ai@4.3.16_react@19.1.0_zod@3.25.28/node_modules/ai/dist/index.mjs\");\n/* harmony import */ var _ai_sdk_openai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ai-sdk/openai */ \"(rsc)/./node_modules/.pnpm/@ai-sdk+openai@1.3.22_zod@3.25.28/node_modules/@ai-sdk/openai/dist/index.mjs\");\n/* harmony import */ var _data_bio_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/data/bio.json */ \"(rsc)/./data/bio.json\");\n/* harmony import */ var _data_skills_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/skills.json */ \"(rsc)/./data/skills.json\");\n/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/projects.json */ \"(rsc)/./data/projects.json\");\n\n\n\n\n\nasync function POST(req) {\n    try {\n        const { message, language = \"en\" } = await req.json();\n        const bio = _data_bio_json__WEBPACK_IMPORTED_MODULE_0__[language];\n        const projects = _data_projects_json__WEBPACK_IMPORTED_MODULE_2__[language];\n        const systemPrompt = `You are an AI assistant representing Oussema Dhouib, a fullstack engineer. Here's information about Oussema:\n\nBio: ${bio.bio}\nTitle: ${bio.title}\nExperience: ${bio.experience}\nLocation: ${bio.location}\nEmail: ${bio.email}\n\nSkills: ${Object.values(_data_skills_json__WEBPACK_IMPORTED_MODULE_1__).flat().map((skill)=>skill.name).join(\", \")}\n\nRecent Projects:\n${projects.map((p)=>`- ${p.title}: ${p.description} (Technologies: ${p.technologies.join(\", \")})`).join(\"\\n\")}\n\nAnswer questions about Oussema's experience, skills, projects, and background in a friendly, professional tone. Keep responses concise but informative. If asked about something not in the provided information, politely say you don't have that specific information but offer to help with what you do know about Oussema.\n\nRespond in ${language === \"fr\" ? \"French\" : \"English\"}.`;\n        const { text } = await (0,ai__WEBPACK_IMPORTED_MODULE_3__.generateText)({\n            model: (0,_ai_sdk_openai__WEBPACK_IMPORTED_MODULE_4__.openai)(\"gpt-3.5-turbo\"),\n            system: systemPrompt,\n            prompt: message\n        });\n        return Response.json({\n            message: text\n        });\n    } catch (error) {\n        console.error(\"Chat API error:\", error);\n        return Response.json({\n            error: \"Failed to process message\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NoYXQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ007QUFDRjtBQUNNO0FBQ0k7QUFFekMsZUFBZUssS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsSUFBSSxFQUFFLEdBQUcsTUFBTUYsSUFBSUcsSUFBSTtRQUVuRCxNQUFNQyxNQUFNUiwyQ0FBTyxDQUFDTSxTQUFpQztRQUNyRCxNQUFNRyxXQUFXUCxnREFBWSxDQUFDSSxTQUFzQztRQUVwRSxNQUFNSSxlQUFlLENBQUM7O0tBRXJCLEVBQUVGLElBQUlBLEdBQUcsQ0FBQztPQUNSLEVBQUVBLElBQUlHLEtBQUssQ0FBQztZQUNQLEVBQUVILElBQUlJLFVBQVUsQ0FBQztVQUNuQixFQUFFSixJQUFJSyxRQUFRLENBQUM7T0FDbEIsRUFBRUwsSUFBSU0sS0FBSyxDQUFDOztRQUVYLEVBQUVDLE9BQU9DLE1BQU0sQ0FBQ2YsOENBQVVBLEVBQzNCZ0IsSUFBSSxHQUNKQyxHQUFHLENBQUMsQ0FBQ0MsUUFBVUEsTUFBTUMsSUFBSSxFQUN6QkMsSUFBSSxDQUFDLE1BQU07OztBQUdsQixFQUFFWixTQUNDUyxHQUFHLENBQ0YsQ0FBQ0ksSUFDQyxDQUFDLEVBQUUsRUFBRUEsRUFBRVgsS0FBSyxDQUFDLEVBQUUsRUFBRVcsRUFBRUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFRCxFQUFFRSxZQUFZLENBQUNILElBQUksQ0FDbEUsTUFDQSxDQUFDLENBQUMsRUFFUEEsSUFBSSxDQUFDLE1BQU07Ozs7V0FJSCxFQUFFZixhQUFhLE9BQU8sV0FBVyxVQUFVLENBQUMsQ0FBQztRQUVwRCxNQUFNLEVBQUVtQixJQUFJLEVBQUUsR0FBRyxNQUFNM0IsZ0RBQVlBLENBQUM7WUFDbEM0QixPQUFPM0Isc0RBQU1BLENBQUM7WUFDZDRCLFFBQVFqQjtZQUNSa0IsUUFBUXZCO1FBQ1Y7UUFFQSxPQUFPd0IsU0FBU3RCLElBQUksQ0FBQztZQUFFRixTQUFTb0I7UUFBSztJQUN2QyxFQUFFLE9BQU9LLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLG1CQUFtQkE7UUFDakMsT0FBT0QsU0FBU3RCLElBQUksQ0FDbEI7WUFBRXVCLE9BQU87UUFBNEIsR0FDckM7WUFBRUUsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9vdXNzZW1hL0Rlc2t0b3AvUGVyc29uYWwtR2l0L3BlcnNvL21lL2FwcC9hcGkvY2hhdC9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZW5lcmF0ZVRleHQgfSBmcm9tIFwiYWlcIjtcbmltcG9ydCB7IG9wZW5haSB9IGZyb20gXCJAYWktc2RrL29wZW5haVwiO1xuaW1wb3J0IGJpb0RhdGEgZnJvbSBcIkAvZGF0YS9iaW8uanNvblwiO1xuaW1wb3J0IHNraWxsc0RhdGEgZnJvbSBcIkAvZGF0YS9za2lsbHMuanNvblwiO1xuaW1wb3J0IHByb2plY3RzRGF0YSBmcm9tIFwiQC9kYXRhL3Byb2plY3RzLmpzb25cIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBtZXNzYWdlLCBsYW5ndWFnZSA9IFwiZW5cIiB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIGNvbnN0IGJpbyA9IGJpb0RhdGFbbGFuZ3VhZ2UgYXMga2V5b2YgdHlwZW9mIGJpb0RhdGFdO1xuICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdHNEYXRhW2xhbmd1YWdlIGFzIGtleW9mIHR5cGVvZiBwcm9qZWN0c0RhdGFdO1xuXG4gICAgY29uc3Qgc3lzdGVtUHJvbXB0ID0gYFlvdSBhcmUgYW4gQUkgYXNzaXN0YW50IHJlcHJlc2VudGluZyBPdXNzZW1hIERob3VpYiwgYSBmdWxsc3RhY2sgZW5naW5lZXIuIEhlcmUncyBpbmZvcm1hdGlvbiBhYm91dCBPdXNzZW1hOlxuXG5CaW86ICR7YmlvLmJpb31cblRpdGxlOiAke2Jpby50aXRsZX1cbkV4cGVyaWVuY2U6ICR7YmlvLmV4cGVyaWVuY2V9XG5Mb2NhdGlvbjogJHtiaW8ubG9jYXRpb259XG5FbWFpbDogJHtiaW8uZW1haWx9XG5cblNraWxsczogJHtPYmplY3QudmFsdWVzKHNraWxsc0RhdGEpXG4gICAgICAuZmxhdCgpXG4gICAgICAubWFwKChza2lsbCkgPT4gc2tpbGwubmFtZSlcbiAgICAgIC5qb2luKFwiLCBcIil9XG5cblJlY2VudCBQcm9qZWN0czpcbiR7cHJvamVjdHNcbiAgLm1hcChcbiAgICAocCkgPT5cbiAgICAgIGAtICR7cC50aXRsZX06ICR7cC5kZXNjcmlwdGlvbn0gKFRlY2hub2xvZ2llczogJHtwLnRlY2hub2xvZ2llcy5qb2luKFxuICAgICAgICBcIiwgXCJcbiAgICAgICl9KWBcbiAgKVxuICAuam9pbihcIlxcblwiKX1cblxuQW5zd2VyIHF1ZXN0aW9ucyBhYm91dCBPdXNzZW1hJ3MgZXhwZXJpZW5jZSwgc2tpbGxzLCBwcm9qZWN0cywgYW5kIGJhY2tncm91bmQgaW4gYSBmcmllbmRseSwgcHJvZmVzc2lvbmFsIHRvbmUuIEtlZXAgcmVzcG9uc2VzIGNvbmNpc2UgYnV0IGluZm9ybWF0aXZlLiBJZiBhc2tlZCBhYm91dCBzb21ldGhpbmcgbm90IGluIHRoZSBwcm92aWRlZCBpbmZvcm1hdGlvbiwgcG9saXRlbHkgc2F5IHlvdSBkb24ndCBoYXZlIHRoYXQgc3BlY2lmaWMgaW5mb3JtYXRpb24gYnV0IG9mZmVyIHRvIGhlbHAgd2l0aCB3aGF0IHlvdSBkbyBrbm93IGFib3V0IE91c3NlbWEuXG5cblJlc3BvbmQgaW4gJHtsYW5ndWFnZSA9PT0gXCJmclwiID8gXCJGcmVuY2hcIiA6IFwiRW5nbGlzaFwifS5gO1xuXG4gICAgY29uc3QgeyB0ZXh0IH0gPSBhd2FpdCBnZW5lcmF0ZVRleHQoe1xuICAgICAgbW9kZWw6IG9wZW5haShcImdwdC0zLjUtdHVyYm9cIiksXG4gICAgICBzeXN0ZW06IHN5c3RlbVByb21wdCxcbiAgICAgIHByb21wdDogbWVzc2FnZSxcbiAgICB9KTtcblxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogdGV4dCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQ2hhdCBBUEkgZXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHByb2Nlc3MgbWVzc2FnZVwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZ2VuZXJhdGVUZXh0Iiwib3BlbmFpIiwiYmlvRGF0YSIsInNraWxsc0RhdGEiLCJwcm9qZWN0c0RhdGEiLCJQT1NUIiwicmVxIiwibWVzc2FnZSIsImxhbmd1YWdlIiwianNvbiIsImJpbyIsInByb2plY3RzIiwic3lzdGVtUHJvbXB0IiwidGl0bGUiLCJleHBlcmllbmNlIiwibG9jYXRpb24iLCJlbWFpbCIsIk9iamVjdCIsInZhbHVlcyIsImZsYXQiLCJtYXAiLCJza2lsbCIsIm5hbWUiLCJqb2luIiwicCIsImRlc2NyaXB0aW9uIiwidGVjaG5vbG9naWVzIiwidGV4dCIsIm1vZGVsIiwic3lzdGVtIiwicHJvbXB0IiwiUmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/chat/route.ts\n");

/***/ }),

/***/ "(rsc)/./data/bio.json":
/*!***********************!*\
  !*** ./data/bio.json ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"en":{"name":"Oussema Dhouib","title":"Fullstack Engineer","bio":"Hey there! I\'m Oussema, a passionate fullstack engineer with 5+ years of experience building scalable web and mobile applications. I love turning complex problems into elegant solutions using modern technologies like Next.js, NestJS, and React Native. When I\'m not coding, you\'ll find me exploring new tech trends, contributing to open source, or enjoying a good cup of coffee while planning my next project.","location":"Paris, France","email":"oussamadhouib9697@gmail.com","experience":"5+ years"},"fr":{"name":"Oussema Dhouib","title":"Ingénieur Fullstack","bio":"Salut ! Je suis Oussema, un ingénieur fullstack passionné avec plus de 5 ans d\'expérience dans le développement d\'applications web et mobiles évolutives. J\'adore transformer des problèmes complexes en solutions élégantes en utilisant des technologies modernes comme Next.js, NestJS et React Native. Quand je ne code pas, vous me trouverez en train d\'explorer les nouvelles tendances technologiques, de contribuer à l\'open source, ou de savourer un bon café en planifiant mon prochain projet.","location":"Paris, France","email":"oussamadhouib9697@gmail.com","experience":"5+ ans"}}');

/***/ }),

/***/ "(rsc)/./data/projects.json":
/*!****************************!*\
  !*** ./data/projects.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"en":[{"id":1,"title":"E-Commerce Platform","description":"Full-stack e-commerce solution with Next.js frontend and NestJS backend, featuring real-time inventory management and payment processing.","technologies":["Next.js","NestJS","TypeScript","PostgreSQL","Stripe"],"image":"/placeholder.svg?height=300&width=500","github":"https://github.com/example/ecommerce","demo":"https://ecommerce-demo.com","featured":true},{"id":2,"title":"Task Management Mobile App","description":"Cross-platform mobile application built with React Native, featuring offline sync and collaborative workspaces.","technologies":["React Native","TypeScript","Firebase","Redux"],"image":"/placeholder.svg?height=300&width=500","github":"https://github.com/example/taskapp","demo":"https://taskapp-demo.com","featured":true},{"id":3,"title":"Analytics Dashboard","description":"Real-time analytics dashboard with advanced data visualization and custom reporting features.","technologies":["Next.js","TypeScript","D3.js","PostgreSQL"],"image":"/placeholder.svg?height=300&width=500","github":"https://github.com/example/analytics","demo":"https://analytics-demo.com","featured":true}],"fr":[{"id":1,"title":"Plateforme E-Commerce","description":"Solution e-commerce complète avec frontend Next.js et backend NestJS, incluant la gestion d\'inventaire en temps réel et le traitement des paiements.","technologies":["Next.js","NestJS","TypeScript","PostgreSQL","Stripe"],"image":"/placeholder.svg?height=300&width=500","github":"https://github.com/example/ecommerce","demo":"https://ecommerce-demo.com","featured":true},{"id":2,"title":"Application Mobile de Gestion de Tâches","description":"Application mobile multiplateforme construite avec React Native, avec synchronisation hors ligne et espaces de travail collaboratifs.","technologies":["React Native","TypeScript","Firebase","Redux"],"image":"/placeholder.svg?height=300&width=500","github":"https://github.com/example/taskapp","demo":"https://taskapp-demo.com","featured":true},{"id":3,"title":"Tableau de Bord Analytique","description":"Tableau de bord analytique en temps réel avec visualisation de données avancée et fonctionnalités de reporting personnalisées.","technologies":["Next.js","TypeScript","D3.js","PostgreSQL"],"image":"/placeholder.svg?height=300&width=500","github":"https://github.com/example/analytics","demo":"https://analytics-demo.com","featured":true}]}');

/***/ }),

/***/ "(rsc)/./data/skills.json":
/*!**************************!*\
  !*** ./data/skills.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"frontend":[{"name":"Next.js","icon":"⚛️","level":95},{"name":"React","icon":"⚛️","level":95},{"name":"TypeScript","icon":"📘","level":90},{"name":"Tailwind CSS","icon":"🎨","level":85}],"backend":[{"name":"NestJS","icon":"🐱","level":90},{"name":"Node.js","icon":"🟢","level":88},{"name":"PostgreSQL","icon":"🐘","level":85},{"name":"MongoDB","icon":"🍃","level":80}],"mobile":[{"name":"React Native","icon":"📱","level":85},{"name":"Expo","icon":"⚡","level":80}],"tools":[{"name":"Docker","icon":"🐳","level":75},{"name":"AWS","icon":"☁️","level":70},{"name":"Git","icon":"📝","level":90}]}');

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Foussema%2FDesktop%2FPersonal-Git%2Fperso%2Fme%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Foussema%2FDesktop%2FPersonal-Git%2Fperso%2Fme&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Foussema%2FDesktop%2FPersonal-Git%2Fperso%2Fme%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Foussema%2FDesktop%2FPersonal-Git%2Fperso%2Fme&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_oussema_Desktop_Personal_Git_perso_me_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/chat/route.ts */ \"(rsc)/./app/api/chat/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/route\",\n        pathname: \"/api/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/route\"\n    },\n    resolvedPagePath: \"/Users/oussema/Desktop/Personal-Git/perso/me/app/api/chat/route.ts\",\n    nextConfigOutput,\n    userland: _Users_oussema_Desktop_Personal_Git_perso_me_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjRfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4wX3JlYWN0LWRvbUAxOS4xLjBfcmVhY3RAMTkuMS4wX19yZWFjdEAxOS4xLjAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyL2luZGV4LmpzP25hbWU9YXBwJTJGYXBpJTJGY2hhdCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY2hhdCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNoYXQlMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZvdXNzZW1hJTJGRGVza3RvcCUyRlBlcnNvbmFsLUdpdCUyRnBlcnNvJTJGbWUlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGb3Vzc2VtYSUyRkRlc2t0b3AlMkZQZXJzb25hbC1HaXQlMkZwZXJzbyUyRm1lJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNrQjtBQUMvRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL291c3NlbWEvRGVza3RvcC9QZXJzb25hbC1HaXQvcGVyc28vbWUvYXBwL2FwaS9jaGF0L3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jaGF0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY2hhdFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY2hhdC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9vdXNzZW1hL0Rlc2t0b3AvUGVyc29uYWwtR2l0L3BlcnNvL21lL2FwcC9hcGkvY2hhdC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Foussema%2FDesktop%2FPersonal-Git%2Fperso%2Fme%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Foussema%2FDesktop%2FPersonal-Git%2Fperso%2Fme&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.2.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0","vendor-chunks/@opentelemetry+api@1.9.0","vendor-chunks/zod-to-json-schema@3.24.5_zod@3.25.28","vendor-chunks/zod@3.25.28","vendor-chunks/nanoid@3.3.11","vendor-chunks/ai@4.3.16_react@19.1.0_zod@3.25.28","vendor-chunks/@ai-sdk+ui-utils@1.2.11_zod@3.25.28","vendor-chunks/@ai-sdk+provider@1.1.3","vendor-chunks/@ai-sdk+provider-utils@2.2.8_zod@3.25.28","vendor-chunks/@ai-sdk+openai@1.3.22_zod@3.25.28","vendor-chunks/secure-json-parse@2.7.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.4_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Foussema%2FDesktop%2FPersonal-Git%2Fperso%2Fme%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Foussema%2FDesktop%2FPersonal-Git%2Fperso%2Fme&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();