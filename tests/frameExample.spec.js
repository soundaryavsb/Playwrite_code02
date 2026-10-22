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
    //locate frame and do task
    let frame1 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1" });
    await frame1?.locator("//input[@name='mytext1']").fill("Hello");
    let frame2 = page.frameLocator("//frame[@src='frame_2.html']");
    await frame2.getByRole("textbox").fill("frame2");
    let frame3 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3" });
    await frame3?.getByRole("textbox").fill("frame3");
    let frame3Inside = frame3?.frameLocator('//*[@src="https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true"]');
    await frame3Inside?.locator('#i9').check();
    await page.waitForTimeout(3000);
});
