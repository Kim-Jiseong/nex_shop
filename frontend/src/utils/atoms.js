import { atom } from "recoil";

export const token = atom({
  key: "token",
  default: "",
});

export const lang = atom({
  key: "lang",
  default: "ko",
});
export const store= atom({
  key: "now",
  default: "선릉",
});
export const contact= atom({
  key: "now2",
  default: "창업절차",
});
export const userState = atom({
  key: "user",
  default: "",
});
