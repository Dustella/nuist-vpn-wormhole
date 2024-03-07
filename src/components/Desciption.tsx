import type { Component } from "solid-js";
const Description: Component = () => {
  return (
    <section class="p-2 hover:[cursor-pointer]">
      <h2 class="text-center">NUIST VPN 链接转换服务</h2>
      <p class="text-left">
        本项目的目标是为了把普通的网页链接转换为 NUIST VPN 访问的链接，
        <br />
        或者解密 NUIST VPN 访问的链接为普通的网页链接。
      </p>
      <p class="text-left">
        如果输入的链接以{" "}
        <a href="https://vpn.nuist.edu.cn">https://vpn.nuist.edu.cn</a> 开头
        <br />
        那么生成普通的网页链接。
      </p>
      <p class="text-left">
        如果输入普通网页地址，例如：http://www.baidu.com
        <br />
        那么生成链接为 NUIST VPN 访问的链接。
        <br />
      </p>
    </section>
  );
};

export default Description;
