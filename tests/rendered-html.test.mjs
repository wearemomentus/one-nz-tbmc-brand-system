import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the brand-system shell and production metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>One NZ × The Brand Memory Co\. \| Co-brand System<\/title>/i);
  assert.match(html, /src="\/onenz-tbmc-brand-system\.html"/);
  assert.match(html, /title="One NZ and The Brand Memory Co\. co-brand system"/);
  assert.match(html, /https:\/\/brand\.tbmc\.dev\/og\.png/);
});

test("ships the complete responsive social and out-of-home extension", async () => {
  const page = await readFile(
    new URL("../public/onenz-tbmc-brand-system.html", import.meta.url),
    "utf8",
  );

  assert.match(page, /08 — THE SYSTEM IN USE/);
  assert.match(page, />SOCIAL TILES</);
  assert.match(page, />SOC 01</);
  assert.match(page, />SOC 02</);
  assert.match(page, />SOC 03</);
  assert.match(page, />OUT OF HOME</);
  assert.match(page, />OOH 01</);
  assert.match(page, />OOH 02</);
  assert.match(page, /@media \(max-width:720px\)/);
  assert.match(page, /@media \(prefers-reduced-motion:reduce\)/);
  assert.match(page, /In-use section.+nth-child\(8\)/s);
  assert.match(page, /In-use section.+nth-child\(10\)/s);
  assert.doesNotMatch(page, /#0100FF/i);
});
