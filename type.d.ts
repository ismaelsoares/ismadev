export interface ThemeState {
  isDark: boolean;
}

export type RootState = {
  theme: ThemeState;
};

export interface ThemeAction {
  type: string;
  payload: boolean;
}
