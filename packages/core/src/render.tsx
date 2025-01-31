import { defaultPreset } from '@kawafe/layout';
import type { PresetConfig, UserData } from './types';

export function render(userData: UserData, preset: PresetConfig) {
  const { layout, theme } = preset;

  const Layout = layout ? layout.layout : defaultPreset.layout;

  return <Layout userData={userData} theme={theme} />;
}
