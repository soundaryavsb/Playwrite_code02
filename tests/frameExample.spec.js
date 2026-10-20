import { test } from "@playwright/test";

test("frames concept", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.waitForTimeout(3000);
    // let Allframes = page.frames();
    // console.log(Allframes.length);
});
