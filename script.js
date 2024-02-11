import * as gdr from "https://esm.sh/v135/gdrweb@0.2.0/es2022/gdrweb.mjs";

window.onload = async () => {
  const d2 = document.querySelector('#cwgl2');
  const lst = prompt("Level String:");

  await gdr.Renderer.initTextureInfo(
    "GJ_GameSheet-hd.plist",
    "GJ_GameSheet02-hd.plist"
  );

  let renderer = new gdr.Renderer(
    new gdr.WebGLContext(canvas),
    "GJ_GameSheet-hd.png",
    "GJ_GameSheet02-hd.png"
  );

  renderer.camera.x = 0;
  renderer.camera.y = 0;
  const levelString = lst;
  let level = gdr.Level.parse(levelString);

  renderer.on('load', () => {
    renderer.render(level);
  });
}
