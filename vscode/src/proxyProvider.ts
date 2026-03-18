import {
  HttpsProxyAgent,
} from "https-proxy-agent/dist";
import { URL } from "url";
import { workspace } from "vscode";
import neoaiExtensionProperties from "./globals/neoaiExtensionProperties";

type ProxyAgentOptions = {
  ignoreCertificateErrors?: boolean;
  ca: Buffer | undefined;
};

export default function getHttpsProxyAgent(
  options: ProxyAgentOptions
): HttpsProxyAgent<any> | undefined {
  const proxySettings = getProxySettings();

  if (!proxySettings || !neoaiExtensionProperties.useProxySupport) {
    return undefined;
  }

  const proxyUrl = new URL(proxySettings);

  try {
    const agentOptions: any = {
      hostname: proxyUrl.hostname,
      port: proxyUrl.port || undefined,
      protocol: proxyUrl.protocol,
    };
    if (options.ca) {
      agentOptions.ca = options.ca;
    }
    agentOptions.rejectUnauthorized = !options.ignoreCertificateErrors;
    return new HttpsProxyAgent(agentOptions);
  } catch (e) {
    return undefined;
  }
}

export function getProxySettings(): string | undefined {
  let proxy: string | undefined = workspace
    .getConfiguration()
    .get<string>("http.proxy");
  if (!proxy) {
    proxy =
      process.env.HTTPS_PROXY ||
      process.env.https_proxy ||
      process.env.HTTP_PROXY ||
      process.env.http_proxy;
  }
  if (proxy?.endsWith("/")) {
    proxy = proxy.substr(0, proxy.length - 1);
  }
  return proxy;
}
