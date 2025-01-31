import type React from 'react';

/**
 * User provided data
 *
 * This data is used to populate the template with the user's information.
 */
export interface UserData {
  profile?: {
    name?: string;
    email?: string;
    photo?: string;
  };
  socials?: {
    /**
     * GitHub username or URL
     *
     * @example 'https://github.com/fu050409'
     */
    github?: string;
    /**
     * X username or URL
     */
    x?: string;
    /**
     * LinkedIn URL
     */
    linkedin?: string;
    /**
     * QQ number
     */
    qq?: string;
    /**
     * Phone number
     */
    phone?: string;
  };
  skills?: string[];
  experiences?: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    description: string;
  }[];
  education?: {
    school: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate?: string;
    description: string;
  }[];
  projects?: {
    name: string;
    description: string;
    url?: string;
    startDate: string;
    endDate?: string;
  }[];
  awards?: {
    title: string;
    date: string;
    awarder: string;
  }[];
  languages?: {
    name: string;
    level: string;
  }[];
  references?: {
    name: string;
    url: string;
  }[];
  technologyStacks?: {
    name: string;
    level: string;
    digitization: number;
  }[];
}

export interface OutputConfig {
  /**
   * Output path
   *
   * This option is used to specify the output directory for the generated files.
   *
   * @default 'dist'
   */
  path?: string;
  /**
   * Output filename
   *
   * This option is used to specify the name of the output file on disk.
   * You don't need to specify the file extension.
   *
   * @default PresetConfig.name
   */
  filename?: string;
  /**
   * Output format
   *
   * This option is used to specify the format of the output file.
   *
   * @default 'html'
   */
  format?: 'html' | 'pdf';
}

export interface DesignTokens {
  textColors: {
    primary: string;
    secondary: string;
    highlight: string;
    contrast: string;
  };
  backgroundColors: {
    primary: string;
    secondary: string;
    highlight: string;
    contrast: string;
  };
  typography: {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
  };
  flexGap: {
    small: string;
    medium: string;
    large: string;
  };
  border: {
    radius: string;
    width: string;
    color: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface ThemePreset {
  name: string;
  version?: string;
  license?: string;
  author: string | string[];

  designTokens: DesignTokens;
}

export interface LayoutProps {
  userData: UserData;
  theme: ThemePreset;
}
export type LayoutComponent = React.FC<LayoutProps>;
export interface LayoutPreset {
  name: string;
  version?: string;
  license?: string;
  author: string | string[];
  layout: LayoutComponent;
}

export interface PresetConfig {
  theme: ThemePreset;
  layout?: LayoutPreset;
}

/**
 * Kawa configuration
 */
export interface KawaConfig {
  /** Kawa project name */
  name: string;
  /** Output configuration */
  output?: OutputConfig;
  /** User provided data */
  userData: UserData;
  /** Preset configuration */
  preset: PresetConfig;
}
