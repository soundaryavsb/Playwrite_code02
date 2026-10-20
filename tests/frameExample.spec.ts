import {test} from "@playwright/test";

test("frames concept",async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    let Allframes=page.frames();
    console.log(Allframes.length);
    await page.waitForTimeout(3000);
})