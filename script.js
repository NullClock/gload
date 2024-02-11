import * as gdr from "https://esm.sh/v135/gdrweb@0.2.0/es2022/gdrweb.mjs";

window.onload = async () => {
  const d2 = document.querySelector('#cwgl2');

  await gdr.Renderer.initTextureInfo(
    "GJ_GameSheet-hd.plist",
    "GJ_GameSheet02-hd.plist"
  );

  let rd = new gdr.Renderer(
    new gdr.WebGLContext(d2),
    
  );
}