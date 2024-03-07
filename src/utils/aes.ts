function strToArrayBuffer(str: string) {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}

function hexToArrayBuffer(hex: string) {
  return new Uint8Array(
    hex.match(/[\da-f]{2}/gi)!.map((byte) => parseInt(byte, 16))
  ).buffer;
}

function arrayBufferToHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function encrypt(plaintext: string) {
  const keyBuffer = strToArrayBuffer("CASB2021EnLink!!");
  const iv = strToArrayBuffer("CASB2021EnLink!!");
  const plaintextBuffer = strToArrayBuffer(plaintext);

  const key = await window.crypto.subtle.importKey(
    "raw",
    keyBuffer,
    { name: "AES-CBC" },
    false,
    ["encrypt"]
  );

  const encrypted = await window.crypto.subtle.encrypt(
    { name: "AES-CBC", iv },
    key,
    plaintextBuffer
  );

  return arrayBufferToHex(encrypted);
}
export async function decrypt(ciphertextHex: string) {
  const keyBuffer = strToArrayBuffer("CASB2021EnLink!!");
  const iv = strToArrayBuffer("CASB2021EnLink!!");
  const ciphertextBuffer = hexToArrayBuffer(ciphertextHex);

  const key = await window.crypto.subtle.importKey(
    "raw",
    keyBuffer,
    { name: "AES-CBC" },
    false,
    ["decrypt"]
  );

  const decrypted = await window.crypto.subtle.decrypt(
    { name: "AES-CBC", iv },
    key,
    ciphertextBuffer
  );

  const decoder = new TextDecoder();
  return decoder.decode(decrypted);
}
