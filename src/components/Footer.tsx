import { Component } from "solid-js";

const Footer: Component = () => {
  return (
    <>
      <div class="text-center">
        <a href="https://github.com/Dustella/nuist-vpn-wormhole">开源地址</a>
        <span class="mx-2 whitespace"> | </span>
        <a href="https://dustella.net">作者</a>
        <br />
        <p class="leading-4 h-3">Dustella, under AGPL 3.0</p>
      </div>
    </>
  );
};

export default Footer;
