import { MMDParser, CharsetEncoder } from "../index.js";

const parser = new MMDParser.Parser();
const encoder = new CharsetEncoder();
const pmdUrl = 'https://cdn.rawgit.com/mrdoob/three.js/dev/examples/models/mmd/miku/miku_v2.pmd';
const vmdUrl = 'https://cdn.rawgit.com/mrdoob/three.js/dev/examples/models/mmd/vmds/wavefile_v2.vmd';
const vpdUrl = 'https://cdn.rawgit.com/mrdoob/three.js/dev/examples/models/mmd/vpds/01.vpd';

{
  const buffer = await (await fetch(pmdUrl)).arrayBuffer();
  const pmd = parser.parsePmd(buffer);
  console.log(pmd.metadata);
}
{
  const buffer = await (await fetch(vmdUrl)).arrayBuffer();
  const vmd = parser.parseVmd(buffer);
  console.log(vmd.metadata);
}
{
  const buffer = await (await fetch(vpdUrl)).arrayBuffer();
  const text = encoder.s2u(new Uint8Array(buffer));
  const vpd = parser.parseVpd(text);
  console.log(vpd.metadata);
}
