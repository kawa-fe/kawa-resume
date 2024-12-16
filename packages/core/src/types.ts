import type React from "react";

export interface UserData {
  name?: string;
  sex?: string;
  age?: number;
  email?: string;
  // TODO
  photoUri: string;
}

export interface OutputConfig {
  path?: string;
  format?: string;
  // TODO: compress options
}

export interface PresetConfig {
  theme?: React.FC;
  layout?: React.FC;
}

export interface KawaConfig {
  name: string;
  output?: OutputConfig;

  userData: UserData;
  preset: PresetConfig;
}
