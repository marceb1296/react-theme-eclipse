/// <reference types="react" />
declare function customRender(ui: React.ReactElement, options?: {}): import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
