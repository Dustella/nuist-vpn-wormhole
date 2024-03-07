import { createSignal, createMemo } from "solid-js";
import type { Component } from "solid-js";
import Desciption from "./components/Desciption";
import "uno.css";
import Result from "./components/Result";
import Footer from "./components/Footer";

const App: Component = () => {
  const [input1, setInput1] = createSignal("");

  return (
    <div class="flex bg-[#f1f1f1]  flex-col justify-center items-center h-screen">
      <div class="b-1 bg-[#ffffff] rounded-xl shadow-xl p-10">
        <Desciption />
        <form class="flex flex-col gap-3 justify-center">
          <div class="p-2">
            <label>输入链接</label>
            <input
              class="p-2 border-0 border-b-1  rounded w-full mt-3"
              placeholder="务必 http:// 或 https:// 开头"
              type="text"
              id="input1"
              value={input1()}
              onInput={(e) => setInput1(e.target.value)}
            ></input>
          </div>
          <Result source={input1()} />
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default App;
