//import { CharsetEncoder } from 'charset-encoder-js';
import { SJIS } from "https://js.sabae.cc/SJIS.js";

class CharsetEncoder {
  s2u(sjis) {
    return SJIS.decode(sjis);
  }
};

export { CharsetEncoder };
