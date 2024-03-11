import { encrypt, decrypt } from "./aes";

export const testUrlValid = (url: string) => {
  // if Url is valid, return true
  // else return false
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

export const assemble = async (sourceUrl: string) => {
  const source = new URL(sourceUrl);
  const { host, pathname, search, protocol } = source;

  const newHost = "client.vpn.nuist.edu.cn";
  const newPath = `/${
    protocol == "http:" ? "http" : "https"
  }/webvpn${await encrypt(host)}${pathname}`;

  const newSearch = search ? `?${search}` : "";
  const newUrl = `https://${newHost}${newPath}${newSearch}`;

  return newUrl;
};

export const disassemble = async (url: string) => {
  const source = new URL(url);

  const { pathname, search, protocol } = source;
  const [_, host, ...path] = pathname.split("/").filter((item) => item);
  const newPath = `/${path.join("/")}`;
  const newUrl = `https://${await decrypt(
    host.replace("webvpn", "").replace(/\//g, "")
  )}${newPath}${search}`;
  return newUrl;
};
