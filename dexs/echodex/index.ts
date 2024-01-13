import { CHAIN } from "../../helpers/chains";
import { univ2Adapter } from "../../helpers/getUniSubgraphVolume";

const adapters = univ2Adapter({
  [CHAIN.LINEA]: "https://graph-query.linea.build/subgraphs/name/echodex/exchange-v3-2"
}, {
  factoriesName: "factories",
  dayData: "echodexDayData",
  dailyVolume: "volumeUSD",
});


adapters.adapter.linea.start = async () => 1689638400;
export default adapters;
