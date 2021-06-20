// https://www.avioconsulting.com/blog/overcoming-javascript-numeric-precision-issues
// https://dev.to/fvictorio/a-comparison-of-bignumber-libraries-in-javascript-2gc5
import BigNumber from "bignumber.js";

export class UnitConverter {
  static convert(amount: string, fromUnit: number, toUnit: number): string {
    if (isNaN(Number(amount))) {
      throw new TypeError("Amount should be a number");
    }
    if (amount === null) {
      throw new TypeError("Amount should be specified");
    }
    if (fromUnit === null) {
      throw new TypeError("FromUnit should be specified");
    }
    if (toUnit === null) {
      throw new TypeError("ToUnit should be specified");
    }
    const bigAmount = new BigNumber(amount);
    const ratio = fromUnit / toUnit;
    const unitPower = toUnit.toFixed().length - 1;
    return bigAmount.multipliedBy(ratio).toFixed(unitPower);
  }
}
