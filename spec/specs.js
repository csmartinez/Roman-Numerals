describe("romanNumerals", function() {
  it("returns roman numeral symbol for numbers lower than 10", function() {
    expect(romanNumerals("3")).to.equal("III");
  });

  it("returns roman numeral symbol for numbers between 10 - 99", function() {
    expect(romanNumerals("38")).to.equal("XXXVIII");
  });

  it("returns roman numeral symbol for numbers with a 0", function() {
    expect(romanNumerals("30")).to.equal("XXX");
  });

  it("returns roman numeral symbol for numbers between 100 - 999", function() {
    expect(romanNumerals("123")).to.equal("CXXIII");
  });

  it("returns roman numeral symbol for numbers between 1000 - 3999", function() {
    expect(romanNumerals("3064")).to.equal("MMMLXIV");
  });

  it("returns message for numbers greater than 3999", function() {
    expect(romanNumerals("4064")).to.equal("No Roman Value Equivalent");
  });
});
