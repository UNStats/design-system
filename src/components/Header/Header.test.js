import * as deviceDescriptors from "puppeteer/DeviceDescriptors";
import path from "path";
import devices from "../devices";

const url =
  "http://localhost:9009/?selectedKind=Header&selectedStory=default%20anchor&full=1";
const platform = process.platform;

describe("Header", () => {
  devices.forEach(device => {
    test(device, async () => {
      await page.emulate(deviceDescriptors[device]);
      await page.goto(url);
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot({
        customSnapshotsDir: path.join(
          __dirname,
          "__image_snapshots__",
          platform
        ),
        customSnapshotIdentifier: device.toLocaleLowerCase().replace(/ /g, "-")
      });
    });
  });
});
