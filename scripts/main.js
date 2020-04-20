import { potteryList, toSell} from "./potteryforsale.js";
import { getPots } from "./potteryProvider.js";

getPots()
.then(toSell)
.then(potteryList)
