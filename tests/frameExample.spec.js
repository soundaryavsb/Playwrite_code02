import { test } from "@playwright/test";
test("frames concept", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    let Allframes = page.frames();
    //Count number of frames in the webpage
    console.log("No of frames: " + Allframes.length);
    //Get the all frames title
    let count = 0;
    for (let frameTitle of Allframes) {
        count++;
        console.log("Frame " + count + ": " + await frameTitle.title());
    }
    await page.waitForTimeout(3000);
});
