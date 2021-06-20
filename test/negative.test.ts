import { UnitConverter } from "../src";
import { EtherUnits } from "../src/enums";

test("Should throw error", () => {
  const method = () => {
    UnitConverter.convert("11234567,81", EtherUnits.Ether, EtherUnits.Ether);
  };
  expect(method).toThrow(TypeError);
  expect(method).toThrow("Amount should be a number");
});

test("Should throw error for not specified amount", () => {
  const method = () => {
    UnitConverter.convert(null, EtherUnits.Ether, EtherUnits.Ether);
  };
  expect(method).toThrow(TypeError);
  expect(method).toThrow("Amount should be specified");
});

test("Should throw error for not specified amount", () => {
  const method = () => {
    UnitConverter.convert("42", null, EtherUnits.Ether);
  };
  expect(method).toThrow(TypeError);
  expect(method).toThrow("FromUnit should be specified");
});

test("Should throw error for not specified amount", () => {
  const method = () => {
    UnitConverter.convert("42", EtherUnits.Ether, null);
  };
  expect(method).toThrow(TypeError);
  expect(method).toThrow("ToUnit should be specified");
});
