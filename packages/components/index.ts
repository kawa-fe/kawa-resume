export * from './image';
export * from './list';
export * from './resume_header';
export { ListItem } from './list/ListRenderItem/ListItem';
// // @ts-expect-error Farm now has support for glob types
// const globComponents = import.meta.glob("./*/index.ts", { eager: true });

// const exports: Record<string, any> = {};

// for (const component of Object.values(globComponents)) {
//   if (component && typeof component === "object") {
//     Object.assign(exports, component);
//   }
// }

// export const { ...components } = exports;
