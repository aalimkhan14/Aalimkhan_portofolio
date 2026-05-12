import { writable } from "svelte/store";
import { webTemplates } from "./fake_data";

export interface Template {
  image: string;
  preview_path: string;
  github_path: string;
}

export const selected_catagory = writable<string>("All Categories");

export const templates = writable<Template[]>(webTemplates);