import { cloneRepo, build, pushToEcr } from "./libs";

async function run() {
  const tmpDirectory = "/tmp/flightcontrol";
  await cloneRepo({
    dir: tmpDirectory,
    repo: "git@github.com:mabadir/flightcontrol-pairing.git",
  });

  const image = await build({ dir: tmpDirectory });

  await pushToEcr({ image, ecrRepo: "aws" });
}

run().then(
  () => process.exit(0),
  (err) => {
    console.error(err);
    process.exit(1);
  }
);
