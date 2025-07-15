export type ThemeType = "light" | "dark";

export interface ThemeContextInterface {
    mode: ThemeType,
    toggle: () => void,
}