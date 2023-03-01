/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace svelte.JSX {
    interface HTMLProps<T> {
        onviewportEnter?: (e: CustomEvent) => any
        onviewportExit?: (e: CustomEvent) => any
    }
}