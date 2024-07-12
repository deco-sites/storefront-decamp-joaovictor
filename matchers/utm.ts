import { MatchContext } from "deco/blocks/matcher.ts";

export interface Props {
  campanhas: string[];
}

export default function matcher(props: Props, ctx: MatchContext) {
  const query = new URL(ctx.request.url).searchParams.get("utm_campaign");

  return props.campanhas.some((campanha) => {
    if (campanha.endsWith("*")) {
      return query?.startsWith(campanha.slice(0, -1));
    }

    return query === campanha;
  });
}
