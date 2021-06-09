
const Ajax = require("../ajax");

const axios = require("axios");

jest.mock("axios");

describe("Ajax feature", () => {
  
  const c = "🥒";

  test("echo resolve using async/await", async () => {
    const result = await Ajax.echo(c);
    expect(result).toBe(c);
  });

  test("echo resolve using 'then' statement", () => {
    return Ajax.echo(c).then(data => {
      expect(data).toBe(c);
    });
  });

  test("echo reject async using try/catch", async () => {
    try {
      await Ajax.echo();
    }
    catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  test("echo reject using 'catch' statement", () => {
    return Ajax.echo().catch(error => {
      expect(error).toBeInstanceOf(Error);
    }); 
  });

});

describe("Ajax backend", () => {
  
  const answer = "yes baby!";
  const response = {
    data: {
      answer
    }
  };

  test("ajax get request from backend", () => {
    
    // ? need to read more about this
    // each time when there is request using axios
    // jest dont send request and return predefined response

    axios.get.mockReturnValue(response);
  
    return Ajax.get().then(res => {
      expect(res.answer).toEqual(answer);
    });
  });
});
