// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function () {

  test("should have a property called organization", function () {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("should have a property called executiveDirector", function () {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("should have a property called percentageCoolEmployees", function () {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("should have a property called programsOffered", function () {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  describe("should have a method called launchOutput", function () {

    test("should return 'Launch!' for numbers evenly divisible by 2", function () {
      expect(launchcode.launchOutput(2)).toBe("Launch!")
    });

    test("should return 'Code!' for numbers evenly divisible by 3", function () {
      expect(launchcode.launchOutput(3)).toBe("Code!")
    });

    test("should return 'Rocks!' for numbers evenly devisible by 5", function () {
      expect(launchcode.launchOutput(5)).toBe("Rocks!")
    });

    test("should return 'LaunchCode!' for numbers evenly devisible by both 2 and 3", function () {
      expect(launchcode.launchOutput(6)).toBe("LaunchCode!")
    });

    test("should return 'Code Rocks!' for numbers evenly devisible by 3 and 5", function () {
      expect(launchcode.launchOutput(15)).toBe("Code Rocks!")
    });

    test("should return 'LaunchCode Rocks!' for numbers evenly devisible by 2, 3, and 5", function () {
      expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!")
    });

    test("should return 'Rutabagas! That doesn't work.' for numbers NOT devisible by 2, 3, or 5", function () {
      expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.")
    })
  });
});