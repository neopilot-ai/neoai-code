import * as path from "path";
import { ColorThemeKind, ExtensionContext, Uri, window } from "vscode";

export const LOGO_BY_THEME: Partial<Record<ColorThemeKind, string>> = {
  [ColorThemeKind.Light]: "logo-dark.svg",
  [ColorThemeKind.Dark]: "logo-light.svg",
  [ColorThemeKind.HighContrast]: "logo.svg",
};

export function getLogoPath(context: ExtensionContext): string {
  const themeKind = window.activeColorTheme.kind;
  const logoPath = LOGO_BY_THEME[themeKind] || "logo.svg";
  return Uri.file(
    path.join(
      context.extensionPath,
      logoPath
    )
  ).toString();
}
