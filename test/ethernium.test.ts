import { UnitConverter } from "../src";
import { EtherUnits } from "../src/enums";

test("Should converter Ether to Ether", () => {
  const result = UnitConverter.convert(
    "1.1234567890123456781",
    EtherUnits.Ether,
    EtherUnits.Ether
  );
  expect(result).toBe("1.123456789012345678");
});

test("Should converter MWei to Wei", () => {
  const result = UnitConverter.convert(
    "1123456789012.3456781",
    EtherUnits.MWei,
    EtherUnits.Wei
  );
  expect(result).toBe("1123456789012345678");
});

test("Should converter Wei to Ether", () => {
  const result = UnitConverter.convert(
    "11234567890123456781",
    EtherUnits.Wei,
    EtherUnits.Ether
  );
  expect(result).toBe("11.234567890123456781");
});

test("Should converter Wei to Ether", () => {
  const result = UnitConverter.convert(
    "1123456789012345.6781",
    EtherUnits.KWei,
    EtherUnits.Finney
  );
  expect(result).toBe("1123.456789012345678");
});
