import { ColorThemeKind, ExtensionContext, Uri, Webview, window } from "vscode";

const LOGO_BY_THEME: Partial<Record<ColorThemeKind, string>> = {
  [ColorThemeKind.Dark]: "neoai-logo-dark.svg",
  [ColorThemeKind.Light]: "neoai-logo-light.svg",
  [ColorThemeKind.HighContrast]: "logo.svg",
};

export function getIcon(context: ExtensionContext, view: Webview) {
  const themeKind = window.activeColorTheme.kind;
  const iconPath = LOGO_BY_THEME[themeKind] || "logo.svg";
  const onDiskPath = Uri.joinPath(
    context.extensionUri,
    iconPath
  );
  return view.asWebviewUri(onDiskPath).toString();
}
