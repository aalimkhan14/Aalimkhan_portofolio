
import { writable } from "svelte/store";


// store href value to update UI
export const store_href = writable<string>('Home');
// Theme
export const isDark = writable<boolean>(false);

