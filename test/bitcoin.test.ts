import { UnitConverter } from "../src";
import { BtcUnits } from "../src/enums";

test("Should converter bit to bit", () => {
  const result = UnitConverter.convert(
    "11234567.81",
    BtcUnits.bit,
    BtcUnits.bit
  );
  expect(result).toBe("11234567.81");
});

test("Should converter finney to satoshi", () => {
  const result = UnitConverter.convert(
    "112345678.1",
    BtcUnits.finney,
    BtcUnits.satoshi
  );
  expect(result).toBe("1123456781");
});

test("Should converter satoshi to bitcoin", () => {
  const result = UnitConverter.convert(
    "112345678",
    BtcUnits.satoshi,
    BtcUnits.bitcoin
  );
  expect(result).toBe("1.12345678");
});

test("Should converter bit to bitcent", () => {
  const result = UnitConverter.convert(
    "11234567.81",
    BtcUnits.bit,
    BtcUnits.bitcent
  );
  expect(result).toBe("1123.456781");
});
