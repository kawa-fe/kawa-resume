import type {
  LayoutPreset,
  PresetConfig,
  ThemePreset,
  UserData,
} from './types';

export function render(
  userData: UserData,
  preset: PresetConfig,
  fallback: {
    layoutPreset: LayoutPreset;
    themePreset: ThemePreset;
  },
) {
  const { layout, theme } = preset;

  const Layout = layout ? layout.layout : fallback.layoutPreset.layout;

  return <Layout userData={userData} theme={theme ?? fallback.themePreset} />;
}
