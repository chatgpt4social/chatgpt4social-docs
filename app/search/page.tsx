import { File, operandClient, OperandService } from "@operandinc/sdk";
import Link from "next/link";

async function getData({ query }: { query?: string }) {
  const operandService = await operandClient(
    OperandService,
    process.env.OPERAND_API_KEY as string
  );
  const resp = await operandService.search({
    query,
    parentId: process.env.PARENT_ID as string,
  });
  return resp;
}

type Props = {
  searchParams?: {
    q?: string;
  };
};

async function extractUrls(files: File[]) {
  const urls = new Map<string, string>();
  for (const file of files) {
    if (file.properties) {
      const urlProp = file.properties.properties["_url"]?.value;
      if (urlProp && urlProp.case === "text") {
        urls.set(file.id, urlProp.value);
      } else {
        continue;
      }
    }
  }
  return urls;
}

export default async function Page(props: Props) {
  const data = await getData({
    query: props.searchParams?.q,
  });

  const urls = await extractUrls(Object.values(data.files));

  return (
    <div className="w-full h-screen overflow-auto flex scrollbar-hide lg:scrollbar-default">
      <div className="prose lg:w-2/3">
        <p>
          Results for <i>"{props.searchParams?.q}"</i>
        </p>
        {data.matches.map((match) => (
          <div key={match.matchId}>
            <blockquote className="not-italic font-normal">
              {match.snippet}
            </blockquote>
            <div className="flex items-center gap-2 prose-sm">
              From
              <Link
                href={urls.get(match.fileId) || "/"}
                className="bg-neutral text-neutral-content rounded-lg px-2 py-1 flex items-center gap-1"
              >
                <span>{urls.get(match.fileId) || "/"}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
