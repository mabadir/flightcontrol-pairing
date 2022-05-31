export async function cloneRepo({ repo, dir }: { repo: string; dir: string }) {
  console.log(`Repository: ${repo} is cloned to directory`);
}

export async function build({ dir }: { dir: string }) {
  console.log(`Build started using code in ${dir}`);
  await new Promise((r) => setTimeout(r, 3000));
  console.log(`Build completed`);
  return "flightcontrol:latest";
}

export async function pushToEcr({
  image,
  ecrRepo,
}: {
  image: string;
  ecrRepo: string;
}) {
  console.log("Image pushed to ECR");
}
