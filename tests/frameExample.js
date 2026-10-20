import { test } from "@playwright/test";
test.only("frames concept", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    let Allframes = page.frames();
    console.log(Allframes.length);
});
