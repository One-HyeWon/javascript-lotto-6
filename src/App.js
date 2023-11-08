import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.lottoList = [];
  }

  async play() {}

  async inputPurchaseAmount() {
    while (true) {
      try {
        const purchaseAmount = await MissionUtils.Console.readLineAsync(
          "로또 구입 금액을 입력해 주세요."
        );
        if (this.isValidPurchaseAmount(purchaseAmount)) {
          return parseInt(purchaseAmount, 10);
        }
        throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  isValidPurchaseAmount(amount) {
    return !isNaN(amount) && parseInt(amount, 10) % 1000 === 0;
  }
}

export default App;
