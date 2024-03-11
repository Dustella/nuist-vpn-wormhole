import { testUrlValid, assemble, disassemble } from "../utils/assemble";
import { createResource, type Component, createMemo } from "solid-js";
const Result: Component<{ source: string }> = (props) => {
  const source = createMemo(() => props.source);

  const output = async (source: string) => {
    console.log(source);
    if (!testUrlValid(source)) {
      return "输入不正确";
    }
    if (source.startsWith("https://client.vpn.nuist.edu.cn/")) {
      return disassemble(source);
    }
    return assemble(source);
  };

  const [result] = createResource(source, output);

  return (
    <>
      <div class="p-2">
        <label>
          目标地址
          <br />
        </label>
        <input
          class="p-2 b-1  b-gray-300 rounded  w-full mt-3"
          placeholder="等待输入"
          readonly
          type="text"
          id="result"
          value={result()}
          onClick={(e) => {
            (document.querySelector("#result") as HTMLInputElement)?.select();
          }}
        ></input>
      </div>
      <div class="p-2 flex items-center justify-between gap-3">
        <button
          class="p-2 w-full bg-[#303030] text-white rounded-lg hover:cursor-pointer hover:bg-[#404040]"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText(result() ?? "");
          }}
        >
          复制
        </button>
        <button
          class="p-2 w-full bg-[#303030] text-white rounded-lg hover:cursor-pointer hover:bg-[#404040]"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            window.open(result());
          }}
        >
          访问
        </button>
      </div>
    </>
  );
};

export default Result;
